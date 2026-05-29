---
name: spec-doc
description: 為榮耀系統各功能（每日任務/連簽、排行榜、成就、跑馬燈、等級…）撰寫「企劃規格文件」。當使用者要求「把某頁面/功能寫成規格、做文件、給程式/QA 參考、寫進 Google Sheet、產 md」時觸發。產出＝Documents/ 的 md ＋ Google Sheet 對應分頁，含 chrome 實拍狀態圖。
---

# 企劃規格文件撰寫技能（spec-doc）

為本專案（gloryPluginDocument，企劃文件專案）撰寫功能規格。產出給**程式人員實作參考 + QA 測試依據**。

## 核心鐵則（違反＝重做）

1. **這是企劃文件，不是程式文件**。**禁止**寫任何實作層命名：變數名、函式名、CSS class、檔案 / 行號、status 字面值（如 `'claim'`/`'done'`）、資料結構程式型別。程式端自己規劃命名與架構。
   - 資料用「**資料項 / 意義 / 值**」描述（例：狀態＝可領取 / 已領取 / 未完成，**不寫** `'claim'|'done'`）。
   - 功能用「**行為流程**」描述。
   - 詳見記憶 `feedback-spec-no-impl-names`。
2. **數值一律標註**為 Prototype 展示預設值 / `TBD`，正式值待企劃拍板。
3. **必附 QA 驗收清單**（QA 照此測）。
4. 分析現有頁面要**讀完整檔**、引用實際內容，不靠 grep 取樣推論（記憶 `feedback-analyze-read-fully`）。

## 文件結構（md，放 `Documents/<功能>系統規格.md`）

固定章節順序：
- 抬頭 blockquote：文件性質、不規範項、數值聲明、視覺對照（temp 路徑）、最後更新。
- **0. 頁面概述**（這頁有哪些區塊）
- **1. 介面操作**（區塊 / 玩家操作 / 系統結果回饋）＋各狀態子節（含截圖路徑）
- **2. 功能流程**（行為步驟）
- **3. 資料設定**（資料項意義、展示用預設值表、規則參數、未來機制）
- **4. 與上層企劃待對齊項**（與既有企劃 md 方向落差）
- **6. 規則決策紀錄**（已拍板問題 + 答案，供追溯）
- **5. QA 驗收清單**（checkbox）

## 待拍板問題 → 答案整合流程

1. 未定規則先列「**待企劃解答**」表（# / 問題 / 你的解答）。
2. 使用者回答後，**把答案整合進正文**（改寫 §1~§3 規則），**不是只填答案欄**（記憶要求）。
3. 已答項移到「**規則決策紀錄**」表保存。
4. 答案若牽涉 UI 行為 → 同步改 `index.html`/`assets`（走下方驗證流程）。

## 截圖（圖證）

- 用 chrome-devtools MCP 開 `file://` 載入 index.html，`evaluate_script` 驅動到各狀態（切頁、改 mock 資料後 re-render），逐一 `take_screenshot`。
- 放大原寸技巧：把 `.canvas` 的 `transform` 設 `none`、解除 page-body overflow/height，隱藏 marquee/status-bar/menu，再 `fullPage` 截圖。
- 圖一律放 **`temp/<功能>截圖/`**（temp 被 gitignore，使用者自行放入 Sheet）。md 用「📷 對應截圖：`路徑`」**文字引用**，不嵌圖。
- 每張截圖**必須 `Read` 進來實看**（量測值 ≠ 視覺驗收）。

## UI 變更時的驗證（沿用視覺驗證 6 步精神）

改 `index.html`/`assets` 後：`file://` 量測（getBoundingClientRect 等）→ `take_screenshot` → **`Read` 截圖** → 逐狀態比對。量測或截圖任一不對 → 自己改再驗，不丟「對嗎」。註：login-streak 等 index-only 功能不在 exsample.html，直接在 index 驗證並註明。

## Google Sheet 交付（分頁 = 功能名）

- 同份內容寫進「各項規格書」對應分頁（id 由使用者給）。
- 版面：**3 欄**為主；標題列深藍底白字（`#1C4587`）；`■ 區塊`列藍底（`#A4C2F4`）粗體；表頭列綠底（`#D9EAD3`）粗體。
- **寫入注意事項（踩過的坑）**：
  - 每個 row 的欄數**必須一致**（勿某列多一個尾端空字串 → 會報 `tried writing to column D`）。
  - `range` 列數要等於 values 陣列長度（A1:C{N}，N＝實際列數）。
  - 寫入前先 `readSpreadsheet` 確認分頁是否已有內容；要覆寫先 `clearRange`。
  - 格式化前先讀 A 欄定位 `■`/表頭實際列號再套 `formatCells`，避免標錯列。
- 圖片不嵌 Sheet（需公開 URL）；Sheet 末段以文字列出截圖檔名指向 md / temp。

## git / 權限

- commit/push 前**必先取得使用者同意**（記憶 `feedback-git-approval`）。
- 只 commit 該交付的 md；**不要** commit `.claude/settings.local.json`（含密鑰）與 `temp/`。
- 交付網址走 GitHub Pages（記憶 `project-pages-delivery`）；md 連結給 raw + blob 兩種。

## 相關記憶

`feedback-spec-no-impl-names`、`feedback-analyze-read-fully`、`feedback-ui-self-verify`、`feedback-debug-evidence-first`、`project-pages-delivery`、`feedback-git-approval`。
