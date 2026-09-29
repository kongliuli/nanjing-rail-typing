/* 生成地图预览页：node test/gen-map-preview.js → preview-maps.html */
const fs = require("fs"), path = require("path"), vm = require("vm");
const R = (p) => path.join(__dirname, "..", p);

function fakeEl() {
  const el = {
    textContent: "", value: "", innerHTML: "", dataset: {},
    style: { setProperty() {} },
    classList: { _s: new Set(), add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); }, toggle(c, f) { f ? this._s.add(c) : this._s.delete(c); }, contains(c) { return this._s.has(c); } },
    appendChild() {}, append() {}, focus() {}, blur() {},
    addEventListener() {}, closest() { return null; },
  };
  return el;
}
const els = {};
global.document = {
  querySelector: (s) => (els[s] = els[s] || fakeEl()),
  querySelectorAll: () => [], createElement: () => fakeEl(),
  createDocumentFragment: () => fakeEl(), createTextNode: (s) => ({ text: s }),
  documentElement: fakeEl(), body: fakeEl(), addEventListener() {}, activeElement: null,
};
global.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
global.requestAnimationFrame = () => 0;
global.setTimeout = (f) => 0;
global.addEventListener = () => {};
global.navigator = {};
global.window = global;

vm.runInThisContext(fs.readFileSync(R("js/data.js"), "utf8"), { filename: "data.js" });
vm.runInThisContext(fs.readFileSync(R("js/i18n.js"), "utf8"), { filename: "i18n.js" });
vm.runInThisContext(fs.readFileSync(R("js/game.js"), "utf8"), { filename: "game.js" });
const NANJING_LINES = vm.runInThisContext("NANJING_LINES");
const { S, startGame } = globalThis.__NRT;

/* 逐线渲染：借用游戏代码路径，把 map-svg 的 innerHTML 抓下来 */
const parts = [];
for (const line of NANJING_LINES) {
  startGame(line);
  const svg = String(els["#map-svg"].innerHTML).replace(/^<svg /, '<svg style="width:100%;max-width:900px;height:auto;display:block;background:#161b24;border:1px solid #263042;border-radius:14px" ');
  parts.push(`<h2 style="color:${line.color}">${line.name.zh}（${line.stations.length} 站）</h2>${svg}`);
}
startGame(NANJING_LINES[0]);
const net = String(els["#network-map"].innerHTML).replace(/^<svg /, '<svg style="width:100%;max-width:900px;height:auto;display:block;background:#161b24;border:1px solid #263042;border-radius:14px" ');

const html = `<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8"><title>地图预览</title></head>
<body style="background:#0d1017;color:#e8ecf3;font-family:sans-serif;padding:24px;max-width:940px;margin:0 auto">
<h1>南京地铁打字列车 · 地图渲染预览</h1>
<p style="color:#8b94a7;font-size:13px">由游戏同一份渲染代码生成（真实 OSM 坐标投影）。游戏中为交互版：列车移动、站点点亮、故事气泡。</p>
<h2 style="color:#8b94a7">全线网</h2>${net}
${parts.join("\n")}
</body></html>`;
fs.writeFileSync(R("preview-maps.html"), html, "utf8");
console.log(`preview-maps.html 已生成：${NANJING_LINES.length} 条线地图 + 线网图`);
