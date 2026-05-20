# 01 · 品牌規範

## 整體氣質關鍵字

1. **榮耀感** — 玩家展示身份、收集成就的高級感
2. **金屬奢華** — 金、橙、粉紅、銀為主，避免廉價塑料感
3. **玻璃形態（Glassmorphism）** — 半透明、深底、毛玻璃模糊、內部高光
4. **夜空底色** — 深紫黑漸層為畫布，讓金屬色更突出
5. **不擁擠** — 留白、克制，避免 AI slop 紫渐變濫用

## 色票

### 主品牌色（Primary）

| 色號 | HEX | 用途 |
|------|-----|------|
| 金 | `#ffd166` | **第一品牌色** — Lv 標籤、稱號邊框、強調文字、CTA、徽章邊 |
| 橙 | `#ff8c42` | **次品牌色** — 漸層搭配（金→橙的 accent linear-gradient）|
| 粉紅 | `#ff6b9d` | 頭像漸層底色、特殊元素裝飾 |

### 狀態色（Status）

| 色號 | HEX | 用途 |
|------|-----|------|
| 成功綠 | `#2ed573` | 上升趨勢、成功狀態 |
| 排名上升綠 | `#55e486` | 排行榜趨勢箭頭（▲）|
| 警示紅 | `#ff3860` | 未讀紅點、警示 |
| 排名下降紅 | `#ff5d73` | 排行榜趨勢箭頭（▼）|

### 底色（Background）

| 色號 | HEX | 用途 |
|------|-----|------|
| 深底 1 | `#090b13` | 畫面主背景頂部 |
| 深底 2 | `#142133` | 畫面主背景中段 |
| 深底 3 | `#24192e` | 畫面主背景下段（紫黑） |
| 深底 4 | `#0b101c` | 畫面主背景底部 |
| 暗紫 | `#1a0f3e` / `#3a2570` | 預設玻璃底色（無背板時的 fallback）|

### 漸層慣用組合

| 漸層 | 描述 |
|------|------|
| **金橙 accent** | `linear-gradient(135deg, #ffd166, #ff8c42)` — 用於 Lv badge、CTA |
| **粉橘頭像底** | `linear-gradient(135deg, #ff6b9d, #ffc042)` — 頭像圓底預設 |
| **夜空畫布** | `linear-gradient(180deg, #090b13 0%, #142133 30%, #24192e 70%, #0b101c 100%)` |

## 字型

```css
font-family: -apple-system, BlinkMacSystemFont,
             'PingFang TC', 'Microsoft JhengHei',
             sans-serif;
```

- 主字型：系統預設 sans-serif（iOS 用 San Francisco、Android 用 Roboto、Win 用 Segoe）
- 中文回退：PingFang TC（蘋果繁中）→ Microsoft JhengHei（微軟正黑）
- **無自訂字型**（不用 Google Fonts、不用 webfont）

## 風格特徵（必守）

### Glassmorphism

```css
backdrop-filter: blur(30px) saturate(1.65);
border: 1px solid rgba(255, 255, 255, 0.18);
border-radius: 20px;
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
```

- 半透明 + 高斯模糊
- 1px 細白邊框（不是粗黑邊）
- 內部高光（inset shadow）+ 外部陰影
- 圓角統一 **20px**

### 金邊圓形（Avatar）

```css
width: 75px; height: 75px;
border-radius: 50%;
border: 3px solid #ffd166;
background: linear-gradient(135deg, #ff6b9d, #ffc042);
```

- 金邊 3px
- 漸層粉橘底色
- 圓形

## 禁忌（避免）

### 視覺禁忌

1. **不要紫渐變 slop** — 不要做純紫色漸變（AI 訓練資料常見「科技感」公式，沒識別度）
2. **不要 emoji 圖示** — 美術交付不能用 emoji 充當 icon，要做完整繪製版本
3. **不要 SVG 手畫人臉** — AI 畫的 SVG 人物五官常錯位，美術要用 illustration 風格繪製
4. **不要赛博霓虹 / 深藍底 `#0D1117`** — GitHub dark mode 美學濫用
5. **不要圓角卡片 + 左彩色 border accent** — 2020-2024 Material/Tailwind 時期烂大街

### 構圖禁忌

6. **不要在素材內放 logo / 浮水印 / 標題文字**（這些由 HTML 文字疊加）
7. **不要新增範例 PNG 內沒有的元素**（不要加 emoji、不要加額外光暈、不要加 mascot）
8. **不要把素材設計到「邊界外」**（背板的視覺重點要在中間 60% 區，避免被頭像/文字蓋住）

## 設計參考

- 整體感類似：「奢華 casino UI」「卡牌遊戲 collection 介面」「成就解鎖頁面」
- 不像：「現代 SaaS / 工具軟體 UI」「Material Design」「Microsoft Fluent」

## 已存在素材參考

當前專案內已渲染的視覺：

- `samples/backplate-sample.png` — 背板套用樣貌
- `samples/badge-tier-sample.png` — 徽章造型參考
- `samples/avatar-sample.png` — 頭像規格（emoji 預設樣）
- `samples/promotion-banner-sample.png` — 活動 banner 區塊布局
