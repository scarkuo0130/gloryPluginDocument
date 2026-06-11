# 會員系統 Prototype — 專案文件

> **用途**：供後續 AI（Claude 或其他 LLM）快速理解本專案的結構、元件與機制，避免重複通讀原始碼。
> **最後更新**：2026-06-10（依當日 index.html + assets 逐行盤點重寫；舊版 2026-05-19 描述的「單檔 933KB」架構已作廢）

---

## 一、專案概述

| 項目 | 說明 |
|------|------|
| 結構 | `index.html`（483 行，純結構）+ `assets/index.css`（4545 行）+ `assets/index.js`（2453 行）+ 美術 PNG/JPG |
| 語言 | `lang="zh-Hant"` 繁體中文 |
| 目的 | 「榮耀系統（GloryPlugin）」企劃階段 Hi-Fi 原型；**本 repo 為文件交付專案，不上架、不接後端** |
| 交付 | GitHub Pages 靜態託管（2026-05-27 起）；**允許外部 assets / 相對路徑**，舊「單檔內嵌零依賴」約束已廢除 |
| 驗證 | local `file://` debug → push → Pages 實測（chrome-devtools MCP 量測 + 截圖 + Read 實看） |

### 載入結構

- `index.html` head 引 `assets/index.css`；body 尾引 `assets/index.js`（全域 script，非模組）。無 inline style/script。
- 美術素材：`assets/idcard/*`（ID 卡）、`assets/leaderboard/*`（排行榜列）、`assets/campaign_*.jpg`、`assets/mock-bg.jpg`、`assets/promotion-modal.jpg`。
- js 入口＝檔尾初始化序列（js:2354-2375）：promotion 輪播、排行榜選單輪播、活躍玩家 feed、跑馬燈、各頁 render、拖曳綁定。
- 版號 console 字串在 js 開頭（`index.html ver: ...`，名稱為歷史殘留）。

### 相關文件

- 企劃：`榮耀系統目標與需求.md`、`榮耀系統企劃.md`（4/27 草稿，部分被後續規格取代）
- 規格：`榮耀系統實作規格.md`、`每日任務系統規格.md`、`稱號系統規格.md`、`跑馬燈系統規格.md`、`等級系統企劃.md`
- 設計系統 demo：`exsample.html`（規格沙盒；UI 規格先改這裡再搬 index）

---

## 二、畫布與 ID 卡系統

- `.canvas` 720×1280 直式，桌面預覽縮放舞台（html:477）。
- **玩家資訊已全面改為美術「ID 卡」三種尺寸**（取代舊玻璃態 player-card 視覺）：

| 卡 | class | 素材 | 用在 |
|---|---|---|---|
| 大板 | `.idc` | `idcard/*.png` | 個人資料頁、他人資料頁 |
| 中板 | `.idcm` | `idcard/mid_*.png` | 狀態列、主選單頭 |
| 小板 | `.idcs` | `idcard/sml_*.png` | 跑馬燈 chip、活躍玩家 feed chip |

- 卡上元素：頭像、等級徽章、稱號、徽章圖、名稱、成就星（✮+數字）、EXP bar；大板另有 ID、VIP、EXP 數字、Next 解鎖文字、編輯鈕。
- ID 卡有 hover 傾斜 + 珠光 + 掃光特效（js:2377-2446）；圖片禁右鍵/拖曳（js:2449-2453）。
- 各卡保留 legacy hidden 節點（html:38-43、75-80、210-215、346-351），僅為避免舊 js `getElementById` 取 null，**不是實際視覺**。

---

## 三、狀態列（Status Bar）

- 中板 ID 卡 + 右側**活躍玩家面板**（整合在同一條 bar，html:45-51）+ 折疊鈕 + 左下未讀紅點（顯示數字）。
- 不顯示 ID / EXP 數字 / 信箱 icon。
- **收合為 3 段循環**：全開 → 半收（隱藏活躍玩家面板，440px）→ 全收（只剩折疊鈕+紅點，39px）→ 全開（js:774-793）。全收時點 bar 無動作。
- 點 bar 開關主選單；bar 可垂直拖曳；名稱/稱號溢出時左右滑動跑馬燈（js:2307-2351）。

---

## 四、主選單

- 選單頭＝中板 ID 卡，**點擊進個人資料頁**（個人資料不是 menu-grid 項目）。
- Promotion 按鈕：2 檔活動每 3800ms 輪播。
- menu-grid：①排行榜（top3 預覽輪播卡，每 10 秒切指標）②每日任務（進度條 + 紅點）③成就系統 ④信件系統（**`display:none` 隱藏中**）⑤機台選擇（**隱藏中**）。
- **無「設定與說明」項**；顯示設定只剩個人資料頁的「播放音效」開關。

---

## 五、各頁面現況

### 個人資料頁
- 大板 ID 卡（含 ID、EXP 數字 `1688/2000`、Next 文字——卡上為寫死 demo 值，與狀態列 Lv.12 不同步）。
- 四鍵：更改暱稱（2-12 字元驗證）/ 更換頭像（9 格，4 鎖定）/ 更換稱號 / 更換背板。
- ⚠️ 稱號選單目前仍有「無」項 + 中文稱號（新手/幸運兒/不敗…）——**與《稱號系統規格》D1/D10 牴觸，待改**（規格要求：只列已擁有族系最高階、英文+羅馬數字、無「無」項）。
- 背板選單 6 項：預設背板/一般/菁英/大師/獨特/傳奇（`BG_MENU_ITEMS` js:331-352；大量舊主題庫資料仍在但未列入選單）。
- 他人資料頁：同大板卡但無 ID/EXP/Next/編輯鈕；下方成就 tabs。

### 排行榜頁
- 範疇 2（總排名/梅杜莎）× 指標 7（等級—僅總排名/Turnover/累積勝分/Spin次數/總倍率/單局勝分/單局倍率）。
- 列＝美術底板：**依名次品階 PNG**（`row_lg_*`/`row_mid_*`/`self_*`），前三名獎牌 `medal2_*`、第 4 名起名次數字+趨勢箭頭圖。**列不套玩家自選背板**（此為 5 月底設計變更；主選單 top3 預覽 mini 列仍套玩家背板）。
- 稱號緞帶顯示**英文族系名+羅馬數字**（如 `Fortune King Ⅹ`）。數值 ≥1M 顯示 M 兩位小數，前綴 T 幣 icon。
- 固定自己列 `lbSelfFixed` 於底部。不顯示經驗值。

### 每日任務頁（與《每日任務系統規格》一致）
- 連簽月曆＝**自然月**，上個月/本月頁籤（上月有未領獎勵→紅點），週獎 EXP +30,000、月全勤 +600,000，未滿 7 天列無週獎。
- 任務 3 筆（登入打卡 50 / Spin10 次 80 / Win1 次 120），三態按鈕。
- js 內 `loginRewards`、`dailyTaskCompleteCount` 為**死資料**未被 render 使用。

### 成就頁
- 分頁：總成就（17 項）/ 梅杜莎（5 項）；tier 6 階（銅鐵銀白金黃金鑽石），inline SVG 盾牌徽章，按 tier 高→低排序。
- 獎勵：頭像 emoji / 稱號文字 / 背板（可點開預覽 modal）；銅階不顯示獎勵；鑽石階顯示「✦ 已達成最高成就」。
- 成就星 `achStars`：✮+數字 badge，自己 4 顆同步至各 ID 卡。

### 機台選擇頁（選單入口隱藏中）
- 頂部「目前機台」大卡 + 7 日趨勢 SVG + 清單 17 台（4 台鎖定）；`machine.lv > userLevel` 鎖定。

### 信箱頁（選單入口隱藏中）
- 5 封 mock（3 未讀）；點擊→已讀+詳情 modal；badge 同步狀態列紅點與選單。

---

## 六、跑馬燈與活躍玩家 Feed

> ⚠️ 本區為**舊實作**；新規則已拍板於《跑馬燈系統規格.md》（D1~D33），index 尚未跟上。差異：節奏（舊單則約 8 秒 vs 新 3 秒一則）、訊息格式（舊中文句式「中得 100,000,000！」vs 新全英文 `Win x{倍數}`）、feed 間隔（舊 2 秒 vs 新 3 秒）、觸發來源（新五種＋系統公告 API）。

- 跑馬燈：`MQ_OPEN_MS 450 / MQ_SCROLL_MS 6000 / MQ_GAP_MS 1200`（js:2004-2006）；效果 3 種但**強制 effect 1**（js:700-701）；chip＝小板 ID 卡+玩家背板，可點開資料頁、可拖曳。
- 活躍玩家 feed：狀態列右側，**2000ms** 輪播、一次 1 筆；filter **只播含「獲得贏分」的事件**（js:933-935），其餘事件池項目實際不播；`promotionFeedItems` 為死代碼。

---

## 七、背板/邊框系統

- 換背板同步：`--user-bg` → `.status-profile` / `.menu-header` / `.profile-info-card`；並寫回 `profiles.Joan5428.bgKey` 重 render → 跑馬燈 chip / feed chip / 選單 top3 預覽同步。**排行榜頁列不同步**（已改品階底板）。
- 邊框變體 bv-1~10（選背板 grid 用）；套真實 UI 走安全映射 1/5/10→1、2/6/8→2、其餘→3（`html[data-bv]`）。
- 預設背板 `default_12_cobalt_night_solid`。

---

## 八、全域狀態與選項

- `currentUserName='Joan5428'`、`userLevel=12`；profiles 含自己+7 名 mock 玩家。
- `userOptions = { showMarquee, soundEnabled, showPromotion, marqueeEffect }` 存 localStorage `memberPrototypeOptions`；載入後**強制** `showPromotion=true`、`marqueeEffect=1`。
- WebAudio 提示音：tap 560 / success 740 / marquee 880 Hz。
- 已知無對應 DOM 的容錯點：`lbScopeCaption`、`showMarqueeSwitch`、`showPromotionSwitch`、`.desc-effect-btn`。

---

## 九、與規格文件的已知落差（盤點日 2026-06-10）

| # | 落差 | 該改哪邊 |
|---|---|---|
| 1 | 稱號選單有「無」項 + 中文稱號 | **改 index**（稱號規格 D1/D10 已拍板） |
| 2 | 跑馬燈/feed 舊節奏與中文訊息 | **改 index**（跑馬燈規格 D1~D33 已拍板） |
| 3 | 個人資料頁顯示 EXP 數字 | 待企劃拍板（實作規格 §4.2 要求不顯示數字） |
| 4 | 信箱/機台選單入口隱藏 | 待企劃確認是否為刻意延後 |
| 5 | 排行榜列改品階底板（不套玩家背板） | 已是現行設計；待「排行榜文件」正式規格化 |
