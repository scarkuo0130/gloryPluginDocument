# 會員系統 Prototype — 專案文件

> **用途**：供後續 AI（Claude 或其他 LLM）快速理解本專案的設計概念、元件架構與 JS 機制，避免重複讀取 933KB 原始碼。
> **最後更新**：2026-05-19

---

## 一、專案概述

| 項目 | 說明 |
|------|------|
| 檔案 | `index.html`（單檔，933KB，6398 行） |
| 語言 | `lang="zh-Hant"` 繁體中文 |
| 目的 | 「榮耀系統（GloryPlugin）」企劃階段 Hi-Fi 原型 |
| 約束 | **必須單檔、零外部依賴、雙擊即可開啟（file:// 協議）** |
| 環境 | GitHub Pages 提供 Live Preview |

### 系統核心目標（from `榮耀系統目標與需求.md`）
- 放大成就感、放大虛榮心、滿足收集慾
- 產品迴路：遊玩 → 達成 → 獲得獎勵 → **展示身份** → 引發比較 → 再次投入
- GloryPlugin 為低侵入式外掛架構，疊加在現有遊戲（老虎機）平台之上

---

## 二、Canvas 架構

```
body（dark gradient: #090b13 → #142133 → #24192e → #0b101c）
└── .stage（display: flex, justify-content: center, align-items: flex-start, padding-top: 40px）
    └── .canvas（720×1280px portrait，transform: scale(0.5556) → 預覽約 400×711px）
        ├── .marquee（跑馬燈，position: absolute, 拖拉自由定位）
        ├── .status-bar（玻璃態頂部狀態列，拖拉自由定位）
        ├── .menu（主選單覆蓋層，position: absolute, z-index:50）
        ├── .page#profilePage
        ├── .page#playerProfilePage
        ├── .page#mailPage
        ├── .page#leaderboardPage
        ├── .page#dailyTaskPage
        ├── .page#achievementPage
        ├── .page#machinePage
        ├── .toast（提示訊息）
        ├── .bg-preview-modal（背板預覽）
        └── #promotionModal
```

**縮放機制**：`.stage > .canvas` 的 `transform: scale(0.5556)` 允許在桌面瀏覽器上預覽手機比例，實際設計單位仍為 720×1280px。

---

## 三、設計系統

### 3.1 字體
```css
font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Microsoft JhengHei', sans-serif;
```

### 3.2 Color Tokens
| Token | 色值 | 語意 |
|-------|------|------|
| `#ffd166` | 黃金 | 主要 Accent（EXP、數值、重要標籤） |
| `#ff8c42` | 橙色 | 次要 Accent（漸層搭配） |
| `#ff6b9d` | 粉紅 | 特殊裝飾、頭像漸層 |
| `#2ed573` | 綠色 | 成功狀態、排名上升 |
| `#ff3860` | 紅色 | 未讀標記（badge）、警示 |
| `#55e486` | 淺綠 | 排名上升指示器 |
| `#ff5d73` | 粉紅紅 | 排名下降指示器 |

### 3.3 CSS Custom Properties（全域注入）
```css
/* 玻璃形態 */
--glass-bg          /* 標準玻璃背景 */
--glass-bg-strong   /* 強化玻璃背景（選單用）*/
--glass-border      /* 玻璃邊框 */
--glass-border-soft /* 柔化邊框 */
--glass-shadow      /* 玻璃陰影 */
--glass-shadow-soft /* 柔化陰影 */
--accent-glass      /* 金橙漸層 Accent */

/* 背板主題（玩家自選，動態注入） */
--user-bg           /* 玩家選中背板的 CSS background */
--theme-bg          /* 背板主色 background */
--theme-glow        /* 背板發光色（inset glow 用）*/
--theme-accent      /* 背板強調色 */
--theme-text-color  /* 背板文字色 */
--theme-text-shadow /* 背板文字陰影 */

/* 排行榜 */
--player-bg         /* 排行榜列的玩家背板背景（縮圖用）*/

/* 邊框變體 */
--bv-shadow         /* 當前 border variant 的 box-shadow */
```

### 3.4 Glassmorphism 規格
所有主要元件套用：
```css
backdrop-filter: blur(30px) saturate(1.65);
-webkit-backdrop-filter: blur(30px) saturate(1.65);
```
頂部狀態列與跑馬燈：`blur(26px) saturate(1.6)`  
Overlay/遮罩：`blur(16px) saturate(1.35)`

---

## 四、背板（Backplate）系統

### 4.1 概念
玩家可選擇個人化的視覺背板，系統將選中背板的 CSS 注入到：
- `.menu-header`（選單頭部）
- `document.documentElement`（全域 `--user-bg` 等變數）
- 排行榜列（`--player-bg`）
- `.mq-user`（跑馬燈玩家 chip）

### 4.2 資料結構 `BACKGROUND_THEMES`
```js
{
  key: {
    label: string,          // 顯示名稱
    background: string,     // CSS background（可多層複合漸層）
    accent: string,         // rgba(...) 強調色
    glow: string,           // rgba(...) 發光色
    textColor: string,      // '#fff' 或 '#2a1810' 等
    textShadow: string,     // CSS text-shadow
    animated?: boolean,     // 是否有 diamondShift 動畫（如鑽石背板）
    borderVariant?: number  // 1~10，此背板預設搭配的邊框變體
  }
}
```

### 4.3 背板群組結構 `BACKPLATE_REVIEW_GROUPS`
```
預設背板         → default_01 ~ default_13（手工定義），default_11~20（補足）
新手背板 1       → newbie1_01~20
新手背板 2~5     → 自動產生，每組各 20 張
彩金風暴 - 白金  → jackpot_01~10（手工定義）
籌碼傳奇         → 銅/白金，各 20 張
每日開盤         → 銅/白金，各 20 張
連日長紅         → 銅/白金，各 20 張
王桌名流 - 白金  → 20 張
幸運轉輪 - 白金  → 20 張
豪客流水 - 白金  → 20 張
爆倍盛宴 - 白金  → 20 張
單局封王 - 白金  → 20 張
神倍時刻 - 白金  → 20 張
超強運氣 - 白金  → 20 張
```

### 4.4 自動產生機制
`buildGeneratedBackplateSeries(spec)` → 用 4 個顏色搭配 10 種基礎構圖（`linear-gradient` 方向變化），產生 10 張（編號 01~10）

`buildGeneratedBackplateSeries2(spec)` → 再產生 10 張（編號 11~20），每張搭配不同 `borderVariant: 1~10`

### 4.5 預設背板
`DEFAULT_BG_THEME = 'default_12_cobalt_night_solid'`

### 4.6 套用函數
```js
applyCommittedTheme(bgKey, menuId?)
// → profiles.Joan5428.bgKey = bgKey
// → applyBackgroundTheme(document.documentElement, bgKey, '--user-bg')
// → document.documentElement.dataset.bv = getSafeUserBorderVariant(theme.borderVariant)
// → renderLb(), renderLeaderboardMenuCard(), renderActivePlayerFeed()
```

---

## 五、邊框變體（Border Variant）系統

### 5.1 展示用 bv-1~10（`.bg-option.bv-N`）
用於背板選擇器的縮圖格子，10 種裝飾內框：

| 編號 | 樣式 |
|------|------|
| bv-1 | 雙層框（外 inset:5px + 內 inset:14px） |
| bv-2 | 霓虹光暈（無實線，純 inner glow） |
| bv-3 | 虛線框 |
| bv-4 | 膠囊圓角框 |
| bv-5 | 粗強調框 + 外發光 |
| bv-6 | 微傾斜裝飾框 |
| bv-7 | 髮絲框 + 小角標 |
| bv-8 | 卡片外環 + 超細內框 |
| bv-9 | 直角幾何框 + 粗角標 |
| bv-10 | 繁複框（粗 + 超大角標 + 內光） |

### 5.2 安全版 data-bv（實際 UI 元件）
套用於 `[data-bv="N"]` CSS 選擇器，影響 `.menu-header`、`.profile-info-card`、`.status-profile` 等真實 UI 元件。

**安全映射** `getSafeUserBorderVariant(borderVariant)`：
- bv 1, 5, 10 → 使用安全版 bv-1（雙層框）
- bv 2, 6, 8 → 使用安全版 bv-2（霓虹光暈）
- 其餘 → 使用安全版 bv-3（虛線框）

---

## 六、狀態列（Status Bar）

```html
.status-bar#statusBar（玻璃態，可拖拉 Y 軸）
├── .status-avatar#statusAvatar（玩家頭像 emoji）
├── .status-name#statusName（暱稱）
├── .status-title#statusTitle（稱號，可隱藏）
├── .status-lv-bar（EXP 進度條 65% 示範）
│   └── .level-badge（Lv. 標籤）
├── .collapse-btn（折疊鈕）
└── .active-player-panel#activePlayerPanel（右側活躍玩家面板，可折疊、可拖拉）
    ├── .active-player-collapse（折疊按鈕 ◀/▶）
    └── .active-player-body（自動滾動活躍玩家事件 Feed，2 秒/筆）
```

### 狀態列拖拉
- `setupStatusBarDrag()` — pointer events 拖曳，SCALE = 1/0.5556，Y 軸限制在 0~(1280-60)
- `setupActivePlayerDrag()` — 活躍玩家面板可獨立拖拉 X/Y

---

## 七、跑馬燈（Marquee）

### 機制
流程：marquee 橫向展開 → 內容從右滑到左（或 effect3 淡入居中） → 收合 → 等待 → 下一筆

```
MQ_OPEN_MS   = 450ms   // 展開/收合 CSS transition
MQ_SCROLL_MS = 6000ms  // scrollOnce keyframe 時長
MQ_GAP_MS    = 1200ms  // 兩則間隔
```

### 三種效果
- `marqueeEffect = 1`：content 從右向左滑動（`scrolling` class）
- `marqueeEffect = 2`：同上（CSS 細節差異）
- `marqueeEffect = 3`：卡片式彈出，Congratulations 標題 + 玩家卡片 + 排行資訊

### 跑馬燈資料 `marqueeItems[]`
```js
{ player: 'PlayerName', icon: '🎉', msg: '訊息內容' }
```

### Debug API（掛在 window）
```js
debugPinMarquee('Joan5428', 1)  // 固定播放特定玩家的訊息
debugStopMarquee()              // 停止跑馬燈
```

---

## 八、主選單（Menu）

```html
.menu（position: absolute, z-index:50, 玻璃態，左滑進出動畫）
├── .menu-header（背板展示區，套用 --user-bg）
│   ├── .menu-avatar（頭像）
│   ├── .menu-user-info（暱稱、稱號、VIP 等級）
│   └── .promotion-btn（活動按鈕，可顯隱）
├── .menu-item（每日任務，含 compact progress bar）
├── .menu-item（排行榜，含 .lb-menu-row 最新排名資訊）
├── .menu-item（成就系統）
├── .menu-item（機台選擇）
├── .menu-item（信箱，含未讀 badge）
└── .menu-item（設定與說明）
```

---

## 九、各頁面

### 9.1 個人資料頁（#profilePage）
- `profile-info-card`：顯示當前玩家頭像、名稱、稱號、VIP 等級，背景套用 `data-bv`
- 可點擊更換：頭像、稱號、背板（`openProfileSelectModal()`）
- 可點擊改名（`openRenameModal()`）：2-12 字元驗證
- 成就概覽區（`.ach-tabs`）：總成就 / 梅杜莎

### 9.2 他人資料頁（#playerProfilePage）
- `openPlayerProfile(name)` 開啟，從 `profiles[name]` 讀取資料
- Mock ID = `(charCodeSum * 1234567) % 99999999`（8 位數補零）
- 成就分頁同個人頁

### 9.3 排行榜頁（#leaderboardPage）
**範疇分頁**：總排名 / 梅杜莎（`currentLbScope`）

**指標分頁**（`currentLbMetric`）：
| 指標 key | 顯示名 |
|----------|--------|
| level | 等級（僅總排名）|
| turnover | Turnover |
| totalWin | 累積勝分 |
| spins | Spin 次數 |
| totalMulti | 總倍率 |
| singleWin | 單局勝分 |
| singleMulti | 單局倍率 |

**每列結構**：排名（+趨勢箭頭）、玩家頭像（套用 bgKey 背景）、名稱+稱號、數值

**固定自身列**：`.lb-fixed-self` 固定在頁面底部，即使滾出視窗仍可見

**趨勢方向**：`getLeaderboardListTrendDirection(tab, rank)` → 'up' | 'down'（根據 mock 資料輪流）

### 9.4 每日任務頁（#dailyTaskPage）
- `dailyTasks[]`：`{ id, title, progress, target, exp, status: 'pending'|'claim'|'done' }`
- `claimTask(id)` → status 改 done，顯示 toast
- 含登入連簽日曆（`renderLoginStreak()`）

### 9.5 成就系統頁（#achievementPage）
- `achievementGroups = { total: [...], medusa: [...] }`
- 每筆成就：`{ title, tier, status, progress, next, reward, rewardBg?, rewardAvatar?, rewardTitle?, thresholds?, history? }`
- 六個等級：銅 < 鐵 < 銀 < 白金 < 黃金 < 鑽石（`TIER_ORDER`）
- 等級徽章：SVG inline 盾牌，每個 tier 有專屬 fill/stroke/text 色
- 歷程展開：`toggleAchievementCard(btn)` 切換 `.expanded` class
- 白金獎勵可點擊預覽背板（`openBgPreview(bgKey)`）

### 9.6 機台選擇頁（#machinePage）
- `machines[]`：`{ num, lv, turnover, win, trend: number[7] }`
- 頂部「目前機台」大卡片 + 七日趨勢折線圖（`renderTrendChart()`）
- 清單：已解鎖可選（opacity 正常），未解鎖灰化（opacity: 0.55）
- `setCurrentMachine(num)` → 限制 `m.lv <= userLevel`

### 9.7 信箱頁（#mailPage）
- `mails[]`：`{ id, icon, title, preview, time, body, unread }`
- `readMail(id)` → 標記已讀、開啟 detail modal
- `updateMailBadge()` → 更新兩處 badge（`mailBadge`、`menuMailBadge`）

---

## 十、登入連簽系統

### 規格
```
28 天 = 4 週 × 7 天
每週末（第 7 天）= missed（無法達成，設計上示範斷簽）
STREAK_REWARDS = [
  { type: 'exp', value: 500 },        // 第 1 週
  { type: 'title', value: '連簽達人' }, // 第 2 週
  { type: 'background', value: '黃金' }, // 第 3 週
  { type: 'exp', value: 2000 }         // 第 4 週
]
PERFECT_ATTENDANCE_REWARD = { type: 'avatar', value: '🏆' } // 28 天全勤
```

### 狀態
- `dailyTaskCompleteCount`：目前已連簽天數（驅動日曆著色）
- `streakClaimedGroups: Set`：已領取的週次 index（含 4 = 全勤獎）
- `isDayDone(day)`：day < completeCount 或（day === count 且所有日任務已領完）

---

## 十一、活躍玩家 Feed

```js
const activePlayerFeedItems = [
  { player: 'PlayerName', event: '事件描述文字', type?: 'promo', promoIdx?: number }
]
```

- `startActivePlayerFeed()`：每 2 秒輪播，`setInterval`
- `debugPinActivePlayer(name)` → 停止 autoplay，固定顯示指定玩家
- `debugUnpinActivePlayer()` → 恢復 autoplay

---

## 十二、音效系統

```js
playMemberSound(kind)
// kind: 'tap'(560Hz) | 'success'(740Hz) | 'marquee'(880Hz)
// 使用 Web Audio API oscillator，短暫音效（0.16s）
// userOptions.soundEnabled 為 false 時靜音
```

---

## 十三、選項設定（userOptions）

```js
userOptions = {
  showMarquee: true,      // 跑馬燈顯示
  soundEnabled: true,     // 音效
  showPromotion: true,    // 活動按鈕顯示
  marqueeEffect: 1        // 跑馬燈效果 1~3
}
```
- `persistOptions()` → `localStorage.setItem('memberPrototypeOptions', ...)`
- `toggleOption(key)` → 切換並同步 UI

---

## 十四、玩家資料 `profiles`

```js
profiles = {
  'Joan5428': {
    avatar: '🎮',
    lv: 12,
    title: '幸運兒',
    bgKey: 'default_12_cobalt_night_solid'  // 動態更新
  },
  // ... 其他玩家
}
```
`profiles.Joan5428` = 當前用戶（自己）

---

## 十五、排行榜資料 `lbData`

```js
lbData = {
  total: {
    level:       [{ rank, name, lv, value, self? }],
    turnover:    [...],
    totalWin:    [...],
    spins:       [...],
    totalMulti:  [...],
    singleWin:   [...],
    singleMulti: [...]
  },
  medusa: {
    // 同上但無 level
  }
}
```

---

## 十六、主要全域狀態變數

| 變數 | 說明 |
|------|------|
| `currentUserName` | 當前用戶暱稱（default: 'Joan5428'） |
| `userLevel` | 當前用戶等級（12） |
| `appliedThemeKey` | 已套用的背板 key |
| `appliedThemeMenuId` | 對應的選單項目 id |
| `currentLbScope` | 排行榜範疇 ('total'\|'medusa') |
| `currentLbMetric` | 排行榜指標（'turnover' 等） |
| `currentAchievementTab` | 成就頁分頁 ('total'\|'medusa') |
| `dailyTaskCompleteCount` | 已連簽天數 |
| `currentMachineNum` | 目前選用機台號碼（24） |
| `machineDateRange` | 機台週期文字（'2026-04-20 ~ 2026-04-27'） |
| `activePlayerFeedIdx` | 活躍玩家 feed 目前索引 |
| `activePlayerFeedAutoplay` | feed 是否自動播放 |
| `marqueeIdx` | 跑馬燈目前索引 |
| `audioCtx` | Web Audio Context 快取 |

---

## 十七、初始化順序（`<script>` 底部）

```js
syncBackgroundThemeOptions()  // 同步背板選項樣式
applyCommittedTheme(DEFAULT_BG_THEME)  // 套用預設背板
renderBgLibraryGrid()         // 渲染背板選擇庫
renderMails()                 // 渲染信箱
renderDailyTasks()            // 渲染每日任務
renderAchievements()          // 渲染成就
renderLb('turnover')          // 渲染排行榜
renderMachines()              // 渲染機台清單
renderLeaderboardMenuCard()   // 渲染選單內排行榜卡
setupStatusBarDrag()          // 設定狀態列拖拉
setupMarqueeDrag()            // 設定跑馬燈拖拉
setupActivePlayerDrag()       // 設定活躍玩家面板拖拉
startActivePlayerFeed()       // 啟動活躍玩家滾動
playMarquee()                 // 開始播放跑馬燈
```

---

## 十八、Modal 系統

所有 Modal 使用 `.show` class 切換顯示，搭配 `aria-hidden` 無障礙屬性。

| Modal ID | 功能 |
|----------|------|
| `avatarSelectModal` | 更換頭像 |
| `titleSelectModal` | 更換稱號（8 個，多數鎖定）|
| `bgSelectModal` | 更換背板（`.bg-grid#bgLibraryGrid`）|
| `renameModal` | 更改暱稱（驗證 2-12 字元）|
| `mailDetailModal` | 信件詳情 |
| `promotionModal` | 活動公告（含圖片、kicker、title、date、prize）|
| `bgPreviewModal` | 成就白金獎勵背板預覽（520×260 面板）|

---

## 十九、關鍵 Helper Functions

```js
// 背板套用
applyBackgroundTheme(el, bgKey, prop?)    // 將 background 注入 CSS 變數或直接設定
getBackgroundInlineVars(bgKey)            // 返回 style="--player-bg:...; --theme-glow:...;" 字串
getBackgroundStyle(bgKey)                 // 返回純 background CSS 字串

// 背板選單
getBgMenuLabel(bgKey, menuId?)            // 取得背板的顯示名稱
getBgMenuItem(menuId)                     // 用 id 取得選單項目
getBgMenuItemByKey(bgKey)                 // 用 themeKey 取得選單項目

// 排行榜趨勢
getLeaderboardListTrendDirection(tab, rank)  // 返回 'up' | 'down'

// 趨勢圖
renderTrendChart(values, compact?)        // 返回 SVG string（7 點折線+面積+圓點）

// 數字格式
fmtNum(n)                                 // n.toLocaleString()
```

---

## 二十、重要設計決策與注意事項

1. **單檔強制**：所有 CSS、JS、資料皆 inline 在同一 HTML 檔，外部 `<script src="">` 在 `file://` 協議下會被 CORS 阻擋。

2. **背板 borderVariant 映射**：第 11~20 張背板會攜帶 `borderVariant: 1~10`，但套用到 UI 時須透過 `getSafeUserBorderVariant()` 映射到安全的 1/2/3，避免 bv-4~10 在真實 UI 上過於誇張。

3. **排行榜的玩家背板**：排行榜每列都反映玩家自己設定的背板（`profiles[name].bgKey`），體現「展示身份」的核心機制。

4. **跑馬燈三種效果**：都可在設定頁切換，但 `setMarqueeEffect()` 會強制停止並重新播放（避免殘留動畫 bug）。

5. **音效**：每次 tap/success/marquee 都創建新的 Oscillator 節點，不複用（Web Audio API pattern），AudioContext 本身全域快取。

6. **活躍玩家 Feed vs 跑馬燈**：兩者各自獨立。Feed 顯示在狀態列右側，跑馬燈懸浮在畫面上方。

7. **稱號鎖定**：標題選項 `data-title` 搭配 `.locked` class 控制，鎖定項點擊只顯示 toast，不改變選擇。

8. **機台等級限制**：`machine.lv > userLevel` 時機台顯示為鎖定，點擊只顯示 toast 不切換。
