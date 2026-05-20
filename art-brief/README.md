# 美術發包書 · Art Brief

> 此資料夾為「**美術外包發包書**」，供美術 1:1 製作專案所需的視覺素材。

## 包內結構

```text
art-brief/
├── README.md                    ← 本檔（總說明、如何使用）
├── 01-brand-spec.md             ← 品牌規範（色票、字型、風格氣質、禁忌）
├── 02-asset-list.md             ← 素材清單（每類數量、變體、規格）
├── 03-naming-convention.md      ← 檔名命名規約
└── samples/                     ← 4 張範例 PNG（從 index.html 截圖凍結）
    ├── backplate-sample.png        （背板範例：jackpot_01_jackpot_nova）
    ├── badge-tier-sample.png       （徽章範例：黃金 tier）
    ├── avatar-sample.png           （頭像範例：fox 🦊）
    └── promotion-banner-sample.png （活動 banner 範例）
```

## 使用方式（給美術）

1. 先讀 **`01-brand-spec.md`** — 了解整體視覺氣質與禁忌
2. 看 **`samples/`** 內的範例 PNG — 看現況、知道每類素材長什麼樣（這是 placeholder，要升級美術質感）
3. 對照 **`02-asset-list.md`** — 知道每類要做幾張、每張的命名與規格
4. 依 **`03-naming-convention.md`** — 交付時用正確檔名（這樣才能直接套進專案 code）

## 「一比一製作」的意思

- ✓ **構圖、比例、版面 1:1**：範例 PNG 的構圖（背板比例、徽章造型、頭像圓框、banner 區塊）要保留
- ✓ **色票精確**：必須使用 `01-brand-spec.md` 列出的品牌色，不能臨時發明新色
- ✗ **不是像素級複製**：質感、細節、光影要由美術升級（CSS gradient → 真實插畫質感）
- ✗ **不要加新元素**：範例內沒有的元素（如新增 logo、emoji）不要自行加入

## 範例 PNG 的「現況等級」

範例 PNG 是用 HTML + CSS gradient + emoji 渲染後截圖凍結的「**初版 placeholder**」。美術交付的最終版要：

| 維度 | 現況 placeholder（樣本 PNG）| 美術交付版 |
|------|---------------------------|----------|
| 背板 | CSS gradient 平面色 | 立體光影、紋理、金屬質感 |
| 徽章 | SVG 盾牌（單色填充）| 3D 金屬鑄造、磨損、刻紋 |
| 頭像 | emoji + 漸層圓底 | 風格化角色 illustration |
| Banner | 簡易圖示 + 文字 | 完整 KV 圖、有視覺重點 |

## 交付規格

- **檔案格式**：`.png`，透明背景（除非另有說明）
- **解析度**：每張素材 @1x / @2x / @3x 三組（iOS/Android 適配）
- **命名**：嚴格依 `03-naming-convention.md`
- **交付方式**：壓縮包打給專案 PM，或直接放入 `assets/` 資料夾

## 進度規劃建議

- **Phase 1（驗證風格）**：每類做 1~2 張代表（共 4~8 張），讓專案 PM 審核確認方向
- **Phase 2（量產）**：背板 60+ 張依 `02-asset-list.md` 分群完成
- **Phase 3（micro-interactions）**：徽章解鎖動畫、頭像表情變化等（如預算允許）
