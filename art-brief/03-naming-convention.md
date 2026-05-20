# 03 · 命名規約

> 美術交付的檔名需嚴格依此規約，才能直接套進專案 code，**不需要工程二次改名**。

## 通用規則

- 全部用**小寫英文**，不能有空格
- 分隔符用 `_`（底線）
- 解析度 suffix：`@1x` / `@2x` / `@3x` 直接接在檔名後（iOS 慣例）
- 副檔名 `.png`

```text
<type>_<group>_<index>_<key>@<density>.png
```

## 1. 背板 Backplate

格式：`bg_<group_prefix>_<index>_<key>@<density>.png`

| 元素 | 說明 | 範例 |
|------|------|------|
| `bg` | 固定前綴（表示「背板」）| `bg` |
| `<group_prefix>` | 來自 `02-asset-list.md` Group 清單的 prefix | `jackpot`、`default`、`chipbronze` |
| `<index>` | 2 位數，01~20 | `01`、`02`、... `20` |
| `<key>` | 該背板的英文 key（snake_case）| `jackpot_nova`、`slate_dawn` |
| `@<density>` | 解析度 | `@1x`、`@2x`、`@3x` |

### 範例

```text
bg_jackpot_01_jackpot_nova@1x.png
bg_jackpot_01_jackpot_nova@2x.png
bg_jackpot_01_jackpot_nova@3x.png
bg_default_01_slate_dawn@1x.png
bg_newbie1_01_sunrise_bloom@1x.png
bg_chipbronze_01_bronze_*.png   ← key 由美術命名（需給工程確認後寫進 BACKGROUND_THEMES）
```

### 對應到專案 code

檔名（去 prefix `bg_` 與 density suffix）= `BACKGROUND_THEMES` 內的 key：

```text
bg_jackpot_01_jackpot_nova@1x.png
   ↓
BACKGROUND_THEMES['jackpot_01_jackpot_nova']
```

## 2. 成就徽章 Badge

格式：`badge_<tier>@<density>.png`

| 元素 | 說明 |
|------|------|
| `badge` | 固定前綴 |
| `<tier>` | tier 英文 key |

### Tier 對照表

| 中文 | 英文 key |
|------|---------|
| 銅 | `bronze` |
| 鐵 | `iron` |
| 銀 | `silver` |
| 白金 | `platinum` |
| 黃金 | `gold` |
| 鑽石 | `diamond` |

### 範例

```text
badge_bronze@1x.png
badge_bronze@2x.png
badge_bronze@3x.png
badge_iron@1x.png
badge_silver@1x.png
badge_platinum@1x.png
badge_gold@1x.png
badge_diamond@1x.png
```

共 **6 個 tier × 3 解析度 = 18 個檔案**。

## 3. 頭像 Avatar

格式：`avatar_<character>@<density>.png`

| 元素 | 說明 |
|------|------|
| `avatar` | 固定前綴 |
| `<character>` | 角色英文 key |

### 角色對照表（Phase 1）

| 中文 | 英文 key | 對應 emoji |
|------|---------|-----------|
| 狐狸 | `fox` | 🦊 |
| 獅子 | `lion` | 🦁 |
| 皇冠 | `crown` | 👑 |
| 遊戲手把 | `gamepad` | 🎮 |
| 獎盃 | `trophy` | 🏆 |

### 範例

```text
avatar_fox@1x.png
avatar_fox@2x.png
avatar_fox@3x.png
avatar_lion@1x.png
avatar_crown@1x.png
avatar_gamepad@1x.png
avatar_trophy@1x.png
```

共 **5 個角色 × 3 解析度 = 15 個檔案**。

## 4. Promotion Banner

格式：
- 縮圖：`promo_thumb_<campaign>@<density>.png`
- 大圖：`promo_hero_<campaign>@<density>.png`

| 元素 | 說明 |
|------|------|
| `promo_thumb` | 縮圖（104×104）|
| `promo_hero` | 大圖（350×350）|
| `<campaign>` | 活動英文 key |

### Campaign 對照表（Phase 1）

| 中文 | 英文 key |
|------|---------|
| Cash Drop | `cashdrop` |
| 世界杯錦標賽 | `worldcup` |
| 黃金週末 | `goldenweekend` |

### 範例

```text
promo_thumb_cashdrop@1x.png       (104×104)
promo_thumb_cashdrop@2x.png
promo_thumb_cashdrop@3x.png
promo_hero_cashdrop@1x.png        (350×350)
promo_hero_cashdrop@2x.png
promo_hero_cashdrop@3x.png

promo_thumb_worldcup@1x.png
promo_hero_worldcup@1x.png
...
```

每個活動：thumb × 3 + hero × 3 = 6 個檔案，3 個活動共 **18 個檔案**。

## 交付資料夾結構

請美術交付時依此目錄組織：

```text
art-delivery/
├── backplates/
│   ├── bg_default_01_slate_dawn@1x.png
│   ├── bg_default_01_slate_dawn@2x.png
│   ├── bg_default_01_slate_dawn@3x.png
│   └── ... (20 group × 3 density = 60 個檔案 Phase 1)
├── badges/
│   ├── badge_bronze@1x.png
│   └── ... (6 tier × 3 density = 18 個檔案)
├── avatars/
│   ├── avatar_fox@1x.png
│   └── ... (5 character × 3 density = 15 個檔案)
└── promotions/
    ├── promo_thumb_cashdrop@1x.png
    ├── promo_hero_cashdrop@1x.png
    └── ... (3 campaign × 2 type × 3 density = 18 個檔案)
```

**Phase 1 交付總計**：60 + 18 + 15 + 18 = **111 個 PNG 檔案**

## 命名「不可」的情況

| ✗ 錯誤 | ✓ 正確 |
|--------|-------|
| `Badge_Gold.png`（大小寫不對）| `badge_gold@1x.png` |
| `bg jackpot 01.png`（有空格）| `bg_jackpot_01_jackpot_nova@1x.png` |
| `bg-jackpot-01.png`（用連字號）| `bg_jackpot_01_jackpot_nova@1x.png` |
| `badge_gold.png`（無解析度後綴）| `badge_gold@1x.png` |
| `背板_jackpot_01.png`（含中文）| `bg_jackpot_01_jackpot_nova@1x.png` |
| `bg_jackpot_01_jackpot_nova_2x.png`（density 寫法錯）| `bg_jackpot_01_jackpot_nova@2x.png` |

## 命名疑問處理

- key 不確定怎麼寫 → 看 `02-asset-list.md` 的「prefix」欄位 + `01` 開始編號
- 新增不在清單上的素材 → 先和專案 PM 確認 key 後再命名（不要自行創造）
- 同一張素材有多版（如未上鎖、已上鎖、claimed 等）→ 加 `_state` suffix：`bg_jackpot_01_jackpot_nova_locked@1x.png`
