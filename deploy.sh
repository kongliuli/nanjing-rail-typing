#!/usr/bin/env bash
# 一键更新线上站点：提交 main → 重建 gh-pages → 推送（GitHub Pages 自动发布）
# 用法：改完代码后在项目根目录执行  ./deploy.sh
set -e
cd "$(dirname "$0")"

# 1) 提交并推送源码
git add -A
git commit -m "update: $(date '+%F %H:%M')" || echo "（无改动，跳过提交）"
git push origin main

# 2) 重建 gh-pages（只含站点文件）
TMP=$(mktemp -d)
cp -r index.html README.md css js "$TMP/"
touch "$TMP/.nojekyll"
git checkout -q gh-pages
git rm -rf -q . 2>/dev/null || true
git clean -fdq   # 清掉未跟踪残留（截图/预览等，防混入站点）
cp -r "$TMP"/. .
git add -A
git commit -q -m "deploy: $(date '+%F %H:%M')"
git push -q -f origin gh-pages
git checkout -q main
rm -rf "$TMP"

echo "✅ 已部署：https://kongliuli.github.io/nanjing-rail-typing/"
echo "   （Pages 构建约需 1 分钟生效）"
