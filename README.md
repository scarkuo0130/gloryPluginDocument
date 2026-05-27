# gloryPluginDocument

榮耀系統文件製作

> ⚠️ **注意事項**
>
> - 本專案僅為**企劃階段**專案，並非上架的網站。
> - 開發專案請交由**程式人員**處理。

## 線上預覽

git repo 更新後可閱讀的文件：<https://scarkuo0130.github.io/gloryPluginDocument/>

## 開發約束

> 📌 **2026-05-27 起改用 GitHub Pages 交付。** 交付給他人的是**網址**（<https://scarkuo0130.github.io/gloryPluginDocument/>），不再是單一 HTML 檔，故解除舊的「單檔內嵌」約束。

- **採用正常網頁架構**：圖片放 `assets/`，CSS / JS 可拆成獨立檔，用相對路徑引用（如 `index.html` 已拆為 `assets/index.css` + `assets/index.js` + `assets/*.png|jpg`）。
- CSS 的 `url()` 路徑相對於 **CSS 檔**所在位置，不是 HTML —— CSS 與圖同放 `assets/` 時直接寫檔名。
- 驗證流程：**本機 `file://` 先 debug → commit/push → 開 GitHub Pages 網址再實測一次**（不再只靠 file://）。
- 本專案仍為**企劃文件 / 規格交付物**，不接後端、不進前端 framework，僅以 Pages 靜態託管呈現。
- 舊版「單檔 base64」備份保留於 `Backup/`（如需雙擊離線開啟的可攜版可回溯）。
