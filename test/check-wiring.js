/* 接线检查：game.js 引用的 id / i18n key 必须在 index.html / i18n.js 中存在 */
const fs = require("fs"), path = require("path");
const R = (p) => path.join(__dirname, "..", p);

const html = fs.readFileSync(R("index.html"), "utf8");
const game = fs.readFileSync(R("js/game.js"), "utf8");
const i18nSrc = fs.readFileSync(R("js/i18n.js"), "utf8");

let fail = 0;
const ok = (cond, msg) => { if (!cond) { fail++; console.error("  ✗ " + msg); } };

/* 1. id 接线 */
const usedIds = new Set([...game.matchAll(/\$\("#([a-zA-Z0-9-]+)"\)/g)].map((m) => m[1]));
const htmlIds = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
for (const id of usedIds) ok(htmlIds.has(id), `game.js 使用了 index.html 不存在的 id: #${id}`);
console.log(`1) DOM id 接线：${usedIds.size} 个选择器，缺失 ${fail} ✓`);

/* 2. data-i18n 键 */
const before = fail;
// 直接 eval i18n.js 取对象（纯数据文件，无副作用）
const I18N = new Function(`${i18nSrc}; return I18N;`)();
const attrKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]);
const usedTKeys = new Set([...game.matchAll(/\bt\("([a-zA-Z]+)"\)/g)].map((m) => m[1]));
const allKeys = new Set([...attrKeys, ...usedTKeys]);
for (const lang of Object.keys(I18N)) {
  for (const k of allKeys) {
    ok(I18N[lang] && I18N[lang][k] != null, `I18N.${lang} 缺少键: ${k}`);
  }
}
console.log(`2) i18n 键：${allKeys.size} 个键 × ${Object.keys(I18N).length} 语言，缺失 ${fail - before} ✓`);

/* 3. 静态资源引用 */
const assets = [...html.matchAll(/(?:src|href)="((?:js|css)\/[^"]+)"/g)].map((m) => m[1]);
for (const a of assets) ok(fs.existsSync(R(a)), `index.html 引用的资源不存在: ${a}`);
console.log(`3) 资源引用：${assets.length} 个 ✓`);

console.log(fail === 0 ? "\n接线检查全部通过 ✅" : `\n${fail} 处问题 ❌`);
process.exit(fail === 0 ? 0 : 1);
