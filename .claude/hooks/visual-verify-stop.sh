#!/bin/bash
# Stop hook：偵測 Claude 收尾語句（「完成」「驗證通過」「對齊」等），
# 強制提醒走完視覺驗證 6 步 checklist。
#
# 解除 keyword：Claude 回覆中包含「視覺驗證 6 步全部通過」就放行。
# 注意：exit 2 + stderr 會阻擋 stop 並把 stderr 回灌給 Claude。

set -e

INPUT=$(cat)
TRANSCRIPT=$(echo "$INPUT" | jq -r '.transcript_path // ""' 2>/dev/null)

# 沒 transcript 或檔不存在 → 放行
[ -z "$TRANSCRIPT" ] && exit 0
[ ! -f "$TRANSCRIPT" ] && exit 0

# 抓最後一輪 assistant message 的 text content
# transcript 是 jsonl，每行一個 event；macOS 用 tail 取尾段（避免讀整檔）
LAST_ASSISTANT=$(tail -100 "$TRANSCRIPT" 2>/dev/null | jq -s -r '
  [.[] | select(.type == "assistant")] | last //empty |
  (.message.content // []) |
  if type == "array" then
    [.[] | select(.type == "text") | .text] | join("\n")
  else
    tostring
  end
' 2>/dev/null || echo "")

# 解除 keyword（escape hatch）— Claude 明確說已走完 6 步就放行
if echo "$LAST_ASSISTANT" | grep -qF "視覺驗證 6 步全部通過"; then
  exit 0
fi

# 觸發 keyword — 收尾相關語句
if echo "$LAST_ASSISTANT" | grep -qE "改完|完成|驗證通過|對齊好|對齊 ✓|對齊✓|達成|搞定|✓ 視覺|視覺 ✓|交付完成"; then
  cat >&2 <<'PROMPT'
[視覺驗證 hook] 偵測到收尾語句。確認已走完 6 步 checklist：
1. 改 exsample.html demo
2. chrome-devtools 開 file:// 量測
3. take_screenshot 截圖
4. Read 工具讀截圖內容（量測值 ≠ 視覺驗收）
5. 逐區比對所有變體（量測 + 截圖任一不對 → 回 step 1，自己改不要問「對嗎」）
6. exsample 通過才搬 index.html → 再走 step 2-5

若已全部跑過：回覆「視覺驗證 6 步全部通過」結束；
若有跳步：補上再回。
PROMPT
  exit 2
fi

exit 0
