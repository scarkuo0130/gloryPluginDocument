/**
 * Google Sheet 通用表單修改工具（AI 維護用 GAS Web App）
 * ============================================================
 * API：
 *   GET  ?action=version                       → {success, version}（純查版號，不碰試算表）
 *   GET  ?action=ping                          → {success, version, spreadsheetId, spreadsheetName}
 *   GET  ?action=tabs                          → {tabs:[{title, sheetId, rows, cols}]}
 *   GET  ?action=export&sheet=NAME             → {values: 2D}（整頁 getDataRange）
 *   GET  ?action=get&sheet=NAME&range=A1:C3   → {values: 2D}
 *   GET  ?action=find&q=文字[&sheet=NAME]      → {hits:[{sheet, a1, row, col, value}], truncated}
 *   POST {action:'createSheet', name}
 *   POST {action:'deleteSheet', name}          → 刪前自動備份至 _trash_<原名>_<yyMMddHHmm> 分頁＋回傳 values
 *   POST {action:'set', sheet, range, values}    → response 帶 previousValues（修改備份）
 *   POST {action:'append', sheet, values}      → 寫到 getLastRow()+1 起
 *   POST {action:'clear', sheet, range}           → response 帶 previousValues
 *   POST {action:'import', sheet, values, mode}→ mode: 'replace'（清頁重寫）| 'append'
 *
 */

// 每次調整都要 bump（語意化版號）；回傳於每個 API response 的 version 欄供對帳部署版本
var APP_VERSION = "1.0.3";

// find 命中數上限（超限回 truncated:true，建議縮小範圍）
var FIND_MAX_HITS = 200;

// ─── HTTP 入口 ───────────────────────────────────────────────────────────────

function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    switch (p.action) {
      case "version":
        return jsonResponse(apiVersion());
      case "ping":
        return jsonResponse(apiPing());
      case "tabs":
        return jsonResponse(apiTabs());
      case "export":
        return jsonResponse(apiExport(p));
      case "get":
        return jsonResponse(apiGet(p));
      case "find":
        return jsonResponse(apiFind(p));
      default:
        throw (
          "unknown or missing GET action: " +
          String(p.action) +
          "（可用：version/ping/tabs/export/get/find）"
        );
    }
  } catch (err) {
    return errorResponse(err);
  }
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw "POST body missing（需 JSON body，Content-Type: application/json）";
    }
    var body;
    try {
      body = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      throw "POST body 不是合法 JSON: " + String(parseErr);
    }
    switch (body.action) {
      case "createSheet":
        return jsonResponse(apiCreateSheet(body));
      case "deleteSheet":
        return jsonResponse(apiDeleteSheet(body));
      case "set":
        return jsonResponse(apiSet(body));
      case "append":
        return jsonResponse(apiAppend(body));
      case "clear":
        return jsonResponse(apiClear(body));
      case "import":
        return jsonResponse(apiImport(body));
      default:
        throw (
          "unknown or missing POST action: " +
          String(body.action) +
          "（可用：createSheet/deleteSheet/set/append/clear/import）"
        );
    }
  } catch (err) {
    return errorResponse(err);
  }
}

// ─── GET actions ─────────────────────────────────────────────────────────────

/** 純查版號（不碰試算表，部署對帳最輕量端點） */
function apiVersion() {
  return ok({});
}

function apiPing() {
  var ss = requireSpreadsheet();
  return ok({
    spreadsheetId: ss.getId(),
    spreadsheetName: ss.getName(),
  });
}

function apiTabs() {
  var ss = requireSpreadsheet();
  var tabs = ss.getSheets().map(function (s) {
    return {
      title: s.getName(),
      sheetId: s.getSheetId(),
      rows: s.getLastRow(),
      cols: s.getLastColumn(),
    };
  });
  return ok({ count: tabs.length, tabs: tabs });
}

function apiExport(p) {
  var sheet = requireSheet(p.sheet, "GET export");
  var values = sheet.getDataRange().getDisplayValues();
  return ok({
    sheet: sheet.getName(),
    rows: values.length,
    cols: values[0] ? values[0].length : 0,
    values: values,
  });
}

function apiGet(p) {
  var sheet = requireSheet(p.sheet, "GET get");
  var range = requireRange(sheet, p.range, "GET get");
  return ok({
    sheet: sheet.getName(),
    range: range.getA1Notation(),
    values: range.getDisplayValues(),
  });
}

function apiFind(p) {
  var q = str(p.q);
  if (q === "") throw "[find] 缺 q 參數（要查的文字）";
  var ss = requireSpreadsheet();
  var sheets = p.sheet ? [requireSheet(p.sheet, "GET find")] : ss.getSheets();
  var hits = [];
  var truncated = false;
  outer: for (var si = 0; si < sheets.length; si++) {
    var s = sheets[si];
    var values = s.getDataRange().getDisplayValues();
    for (var r = 0; r < values.length; r++) {
      for (var c = 0; c < values[r].length; c++) {
        if (String(values[r][c]).indexOf(q) === -1) continue;
        if (hits.length >= FIND_MAX_HITS) {
          truncated = true;
          break outer;
        }
        hits.push({
          sheet: s.getName(),
          a1: s.getRange(r + 1, c + 1).getA1Notation(),
          row: r + 1,
          col: c + 1,
          value: values[r][c],
        });
      }
    }
  }
  return ok({ q: q, count: hits.length, truncated: truncated, hits: hits });
}

// ─── POST actions ────────────────────────────────────────────────────────────

function apiCreateSheet(body) {
  var name = requireName(body.name, "createSheet");
  var ss = requireSpreadsheet();
  if (ss.getSheetByName(name)) throw "[createSheet] 分頁已存在: " + name;
  var sheet = ss.insertSheet(name);
  return ok({ created: name, sheetId: sheet.getSheetId() });
}

function apiDeleteSheet(body) {
  var name = requireName(body.name, "deleteSheet");
  var ss = requireSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) throw "[deleteSheet] 分頁不存在: " + name;
  if (ss.getSheets().length <= 1)
    throw "[deleteSheet] 最後一個分頁不可刪: " + name;

  // 自動備份（Scar 拍板）：刪前複製整頁 values 到 _trash_<原名>_<yyMMddHHmm>；response 同時帶回 values
  var values = sheet.getDataRange().getDisplayValues();
  var stamp = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "yyMMddHHmm",
  );
  var trashName = "_trash_" + name + "_" + stamp;
  if (ss.getSheetByName(trashName))
    trashName = trashName + "_" + Math.floor(Math.random() * 1000);
  var hasData =
    values.length > 0 &&
    !(values.length === 1 && values[0].length === 1 && values[0][0] === "");
  var trash = ss.insertSheet(trashName);
  if (hasData) {
    writeValuesLiteral(
      trash.getRange(1, 1, values.length, values[0].length),
      values,
    );
  }
  ss.deleteSheet(sheet);
  return ok({
    deleted: name,
    backupSheet: trashName,
    rows: values.length,
    values: values,
  });
}

function apiSet(body) {
  var sheet = requireSheet(body.sheet, "set");
  var values = require2DValues(body.values, "set");
  var range = requireRange(sheet, body.range, "set");
  if (
    range.getNumRows() !== values.length ||
    range.getNumColumns() !== values[0].length
  ) {
    throw (
      "[set] range 尺寸 " +
      range.getNumRows() +
      "x" +
      range.getNumColumns() +
      " 與 values 尺寸 " +
      values.length +
      "x" +
      values[0].length +
      " 不符（range=" +
      range.getA1Notation() +
      "）"
    );
  }
  var previousValues = range.getDisplayValues(); // 修改備份（Scar 拍板）：覆寫前舊值隨 response 回傳
  writeValuesLiteral(range, values);
  return ok({
    sheet: sheet.getName(),
    updatedRange: range.getA1Notation(),
    updatedRows: values.length,
    previousValues: previousValues,
  });
}

function apiAppend(body) {
  var sheet = requireSheet(body.sheet, "append");
  var values = require2DValues(body.values, "append");
  var startRow = sheet.getLastRow() + 1;
  var range = sheet.getRange(startRow, 1, values.length, values[0].length);
  writeValuesLiteral(range, values);
  return ok({
    sheet: sheet.getName(),
    updatedRange: range.getA1Notation(),
    appendedRows: values.length,
  });
}

function apiClear(body) {
  var sheet = requireSheet(body.sheet, "clear");
  var range = requireRange(sheet, body.range, "clear");
  var previousValues = range.getDisplayValues(); // 修改備份：清除前舊值隨 response 回傳
  range.clearContent();
  return ok({
    sheet: sheet.getName(),
    clearedRange: range.getA1Notation(),
    previousValues: previousValues,
  });
}

function apiImport(body) {
  var sheet = requireSheet(body.sheet, "import");
  var values = require2DValues(body.values, "import");
  var mode = str(body.mode) || "replace";
  if (mode !== "replace" && mode !== "append") {
    throw "[import] mode 必須是 replace 或 append，收到: " + mode;
  }
  if (mode === "replace") {
    var previousValues = sheet.getDataRange().getDisplayValues(); // 修改備份：清頁重寫前整頁舊值隨 response 回傳
    sheet.clearContents();
    writeValuesLiteral(
      sheet.getRange(1, 1, values.length, values[0].length),
      values,
    );
    return ok({
      sheet: sheet.getName(),
      mode: mode,
      importedRows: values.length,
      previousValues: previousValues,
    });
  }
  var startRow = sheet.getLastRow() + 1;
  writeValuesLiteral(
    sheet.getRange(startRow, 1, values.length, values[0].length),
    values,
  );
  return ok({
    sheet: sheet.getName(),
    mode: mode,
    importedRows: values.length,
    startRow: startRow,
  });
}

// ─── 共用 helpers ────────────────────────────────────────────────────────────

/** getActive 保險絲：bound web app 取不到本表時 fail-fast（工單 Plan B 觸發判定點） */
function requireSpreadsheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw (
      "getActiveSpreadsheet() 回 null——此 script 可能不是 container-bound，" +
      "或平台不支援此執行情境（工單 Plan B：改 PropertiesService 存 spreadsheetId）"
    );
  }
  return ss;
}

function requireSheet(name, where) {
  var n = str(name);
  if (n === "") throw "[" + where + "] 缺 sheet 參數（分頁名）";
  var sheet = requireSpreadsheet().getSheetByName(n);
  if (!sheet) throw "[" + where + "] 分頁不存在: " + n;
  return sheet;
}

function requireRange(sheet, rangeA1, where) {
  var a1 = str(rangeA1);
  if (a1 === "")
    throw "[" + where + "] 缺 range 參數（A1 notation，如 A1 或 A1:C3）";
  try {
    return sheet.getRange(a1);
  } catch (err) {
    throw "[" + where + "] range 不合法: " + a1 + "（" + String(err) + "）";
  }
}

function require2DValues(values, where) {
  if (!Array.isArray(values) || values.length === 0) {
    throw "[" + where + "] values 必須是非空 2D 陣列";
  }
  var cols = -1;
  for (var i = 0; i < values.length; i++) {
    if (!Array.isArray(values[i]) || values[i].length === 0) {
      throw "[" + where + "] values 第 " + (i + 1) + " 列不是非空陣列";
    }
    if (cols === -1) cols = values[i].length;
    if (values[i].length !== cols) {
      throw (
        "[" +
        where +
        "] values 各列長度不一致（第 1 列 " +
        cols +
        "、第 " +
        (i + 1) +
        " 列 " +
        values[i].length +
        "）"
      );
    }
  }
  return values;
}

/**
 * 字面值保真寫入：所有寫入動作（set/append/import/_trash_ 備份）統一走此處。
 * - JSON 字串逐格先設文字格式 '@'：前導零不掉（v1.0.0 地雷："0202000001"→202000001）。
 * - "=" 開頭字串前置 apostrophe 跳脫：'@' 格式擋不住公式判定（v1.0.1 地雷："=1+1" 仍變公式）；
 *   apostrophe 會被 Sheets 當文字標記吃掉，讀回即原字串（live 實測 round-trip 成立）。
 * - JSON 數字/布林維持 General 當數值用。
 */
function writeValuesLiteral(range, values) {
  var formats = [];
  var safeValues = [];
  for (var r = 0; r < values.length; r++) {
    var fRow = [];
    var vRow = [];
    for (var c = 0; c < values[r].length; c++) {
      var v = values[r][c];
      if (typeof v === "string") {
        fRow.push("@");
        vRow.push(v.charAt(0) === "=" ? "'" + v : v);
      } else {
        fRow.push("General");
        vRow.push(v);
      }
    }
    formats.push(fRow);
    safeValues.push(vRow);
  }
  range.setNumberFormats(formats);
  range.setValues(safeValues);
}

function requireName(name, where) {
  var n = str(name);
  if (n === "") throw "[" + where + "] 缺 name 參數（分頁名）";
  return n;
}

function str(v) {
  return v === undefined || v === null ? "" : String(v).trim();
}

function ok(payload) {
  var out = {
    success: true,
    version: APP_VERSION,
    timestamp: new Date().toISOString(),
  };
  for (var k in payload) out[k] = payload[k];
  return out;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function errorResponse(err) {
  return jsonResponse({
    success: false,
    version: APP_VERSION,
    error: String((err && err.stack) || err),
  });
}
