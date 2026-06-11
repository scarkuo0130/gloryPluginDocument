---
name: mockup-implement
description: 把美術示意圖（mockup 照片/設計稿）實作成 HTML UI 改版的端到端工法：素材盤點 → exsample.html demo 先行 → chrome-devtools 驗證 → layout-compare 比對 → index.html 整合（保 JS 接線）→ 使用者微調回填。當使用者要求「依示意圖改版某頁面/元件、把設計稿做進 menu/頁面、整合新美術素材」時觸發。
---

# 美術示意圖 → HTML 實作工法（mockup-implement）

把一張美術示意圖變成可交付的 HTML UI，全程自我驗證、不丟「對嗎」回使用者。
2026-06-11 以 Game Hub 主選單改版實戰提煉；與 `layout-compare` skill 搭配使用。

## 專案前提（榮耀系統 repo）

- 主檔 `index.html`（720×1280 canvas，`.stage` 以 0.5556 縮放預覽）＋外置 `assets/index.css` / `assets/index.js`
- demo 沙盒 `exsample.html`（spec-callout + 對照表 + `.case` 區塊慣例）
- **順序鐵則：先 exsample.html、視覺通過才動 index.html**（feedback-exsample-first）
- **同步鐵則：index 任何 UI 改動，exsample 必須同 PR 同步**（feedback-exsample-sync）

## Phase 0 · 素材盤點

1. 美術切圖搬進 `assets/<feature>/`，**改 ASCII 檔名**（中文檔名在 CSS url 易踩雷）。
2. `sips -g pixelWidth -g pixelHeight assets/<feature>/*.png` 記錄每張原寸。
3. **以素材原寸排版**（不要硬拉 `width/height:100%` 變形）；紋理類背板（可 cover 延展）除外。
4. **容器尺寸反推法**：mockup 量出子元件相對容器的內縮比例（如摘要列佔 93.9%、卡片佔 90%），用「子元件原寸 ÷ 比例」反推容器寬。多個子元件反推結果一致 → 即設計意圖（實例：625/93.9% ≈ 599/90% ≈ 666）。
5. 清點**可重用既有素材**（頭像、獎牌、徽記、緞帶…先 grep assets/ 再要新圖）；mockup 有但素材包沒給的（icon 類）→ emoji 佔位並**在 spec-callout 標註「待美術補圖」**，不要自己畫。

## Phase 1 · exsample.html demo 先行

1. 檔尾新增區塊：`<style>`（class 全部加 feature 前綴如 `.gh-*` 防汙染）→ `spec-callout`（區塊×素材×內容×行為對照表＋規格要點編號清單）→ `.grid > .case`（實寸 demo）。
2. demo 寫**靜態假資料**，但資料值要符合既有規格（如稱號用設定表真實存在的英文＋羅馬數字）。
3. mockup 上的拼字/規格錯誤：實作端修正並在 spec-callout 記一條（如 Multipier→Multiplier）。

## Phase 2 · chrome-devtools 驗證循環（每改必跑）

> **鐵則 0：數值比對永遠不夠，每輪的合格證據是「拍照比對」。**
> getBoundingClientRect / getComputedStyle 對了，不代表畫面對——陰影、字體 metrics、圓角、視覺重量、層級遮擋、素材透明留白全都是數字抓不到的。數字只當「快篩」，**截圖 + Read 實看才是驗收**；只有數字 = 未完成。

1. 開 `file://` 或 Live Server URL（`navigate_page` reload 記得 `ignoreCache: true`）。
2. **量測（快篩）**：`evaluate_script` 取各元件 `getBoundingClientRect`，檢查：區塊堆疊順序、gap、破圖（`img.complete && naturalWidth > 0`）、相鄰元件 edge-to-edge gap > 0。
   - ⚠ 陷阱：腳本內先 `scrollIntoView` 再量測會讓前後 rect 基準不一致——**量測完才捲動**。
3. **拍照比對（驗收）**：`take_screenshot` 存檔 → 用 `Read` 讀圖實看；要跟 mockup 對的元件，裁同一區域做並排再 Read。
4. viewport 高度不夠時（mac 視窗上限 ~780px）：
   - 分兩段截圖 → PIL 依已知捲動量拼接成全圖
   - index 的 0.5556 縮放看不清細節 → 暫時 `canvas.style.transform='scale(1)'; transformOrigin='top left'` 放大檢查（注意 stage 置中會把頂部推到負座標，需補 `marginTop`）
5. 細節檢查用 **PIL 裁切單元件 + 1.5~3x 放大**再 Read，不要讀整頁縮圖。

## Phase 3 · 與 mockup 比對

走 `layout-compare` skill（7 維逐元件、最大物件當量尺、高倍率並排）。常用 PIL 偵測 mockup 區塊邊界：

```python
# 色帶掃描：按行/列分類主色（BLUE/GRAY/PURPLE...），輸出各區塊的 y 範圍與相對 %
# 水平範圍同理掃列。低飽和區塊偵測不準時改裁圖目視。
```

比對結論分「真實 diff（要修）」vs「假資料/佔位差異（標註即可）」。修完依 layout-compare 的重驗範圍規則回跑。

## Phase 4 · index.html 整合（重點：JS 接線契約）

1. **先盤點 JS 契約再動 HTML**：
   ```bash
   grep -n "getElementById('xxx'\|querySelector.*old-class" assets/index.js
   ```
   列出所有被 JS 讀寫的 id / class → 新結構**必須保留同名 id**（掛到新元素上）或保留 querySelector 目標 class（如動畫觸發用的 class 可加掛在新容器上）。
2. **legacy 隱藏節點**：舊結構裡 `hidden` 的佔位節點（給 JS setValue 防 null）原樣搬進新結構。
   - ⚠ 地雷：JS 可能 `removeAttribute('hidden')` 把 legacy 節點弄回可見（實例：成就星徽壓到頭像）→ 用 CSS `display:none !important` 在新容器 scope 內壓制。
3. **動態渲染模板**：innerHTML 產生器（如排行榜預覽 renderer）直接改寫成新元件 markup；行為機制（輪播 timer、`.show` 切換、stopPropagation 導頁）原樣保留。
4. CSS 加進 `assets/index.css` 檔尾，**url() 路徑相對 CSS 檔**（`gamehub/x.png`，不是 `assets/gamehub/x.png`）；HTML `<img src>` 才是相對 html（`assets/gamehub/x.png`）。
5. 改後驗證 = Phase 2 全套 + `list_console_messages`（error/warn）+ 點擊導頁行為抽測。

## Phase 5 · 使用者微調回填迴圈

使用者會在 devtools 調好數值後**直接貼 CSS 區塊**過來。處理規則：

1. diff 出實際變動的屬性（通常 1-2 個值）。
2. **index.css 與 exsample.html 兩檔同步改**（python replace + assert 舊字串存在，防錯位）。
3. reload（ignoreCache）→ `getComputedStyle` 快篩新值生效 → **截圖 + Read 實看調整後畫面**（位置/尺寸/顏色類調整必拍；確認沒撞到鄰近元件、沒壓框）→ 一句話回報。
   - 微調也適用鐵則 0：**不能只回報 computed 數值就算驗證**，14px 的位移撞不撞圖、順不順眼只有照片看得出來。
4. 共用 class 改動會影響多個元件時，回報時點名（如 `.gh-card-head` 兩張卡都動），且**受影響的元件都要入鏡**。

## 自行測試・缺工具自己寫

驗證是實作者自己的責任，**不准把測試丟回使用者**；現有工具不夠就當場寫一個（python/PIL/shell/JS snippet 任何形式），用完留在流程裡讓下次直接用。判斷準則：「我需要看到什麼證據？」→ 沒有現成工具能產出這個證據 → 自己寫。

實戰中自寫過的工具（都只花幾分鐘）：

- **PIL 拼接器**：viewport 高度不夠 → 兩段截圖按已知捲動量拼成全圖
- **PIL 裁切放大器**：整頁縮圖看不清 → 裁單元件 1.5~3x 放大再 Read
- **PIL 同寬並排器**：render vs mockup 裁同區域、縮同寬、上下並排成一張圖
- **色帶掃描器**：PIL 按行掃主色分類，自動定位 mockup 各區塊的邊界與相對 %
- **gap 掃描 snippet**：evaluate_script 巡所有相鄰元件 edge-to-edge 距離，抓重疊
- **API 認證配方**：瀏覽器登入被擋 → 用本機既有 OAuth refresh token 換 access token 直呼 API（見記憶 project-gas-sheet-api）

## 鐵則總表

| # | 鐵則 |
|---|---|
| 1 | exsample 先行，視覺通過才搬 index |
| 2 | 兩檔永遠同步（含微調回填） |
| 3 | 素材用原寸，容器用反推法，不硬拉變形 |
| 4 | 改 HTML 前先 grep JS 接線契約，id 一個都不能掉 |
| 5 | 量測只是快篩，**拍照比對（截圖+Read 實看）才是驗收**；每輪修改都跑，只有數字 = 未完成 |
| 6 | 缺的素材用佔位＋標註，不自己腦補畫 |
| 7 | 發現 diff 自己修自己重驗，不問「對嗎」 |
| 8 | 完整交付 = local 驗證 → commit/push（需使用者同意）→ Pages 實測再驗一次 |
| 9 | **盡可能自行測試；缺工具就自行撰寫**（PIL/shell/JS snippet 當場造），驗證不丟回使用者 |

---
版本：v1（2026-06-11，Game Hub 改版實戰提煉）。踩到新地雷請回寫本檔。
