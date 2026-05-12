# gloryPluginDocument

榮耀系統文件製作

> ⚠️ **注意事項**
>
> - 本專案僅為**企劃階段**專案，並非上架的網站。
> - 開發專案請交由**程式人員**處理。

## 線上預覽

git repo 更新後可閱讀的文件：<https://scarkuo0130.github.io/gloryPluginDocument/>

## 開發約束（硬性）

- **HTML 檔（`index.html` / `prototype.html`）必須維持單檔自含**，CSS 與 JS 一律內嵌在 `<style>` / `<script>` 內。
- **不可拆出外部 `.css` / `.js`**、不可使用 iframe、fetch、import 等任何需要瀏覽器額外請求的方式。
- 任何修改都必須能在「**直接雙擊檔案、不開網頁伺服器**」的情況下完整渲染。
