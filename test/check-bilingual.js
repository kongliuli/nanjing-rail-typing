/* 双语故事语言切换验证：node test/check-bilingual.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const R = (p) => path.join(__dirname, "..", p);
function fakeEl() {
  const el = {
    textContent: "", value: "", innerHTML: "", dataset: {},
    style: { setProperty() {} },
    classList: { _s: new Set(), add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); }, toggle(c, f) { f ? this._s.add(c) : this._s.delete(c); }, contains(c) { return this._s.has(c); } },
    appendChild() {}, append() {}, focus() {}, blur() {}, closest() { return null; },
    addEventListener() {},
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
global.setTimeout = (f) => { f(); return 0; }; // 立即冲刷，便于过站
global.addEventListener = () => {};
global.navigator = {};
global.window = global;
vm.runInThisContext(fs.readFileSync(R("js/data.js"), "utf8"), { filename: "data.js" });
vm.runInThisContext(fs.readFileSync(R("js/i18n.js"), "utf8"), { filename: "i18n.js" });
vm.runInThisContext(fs.readFileSync(R("js/game.js"), "utf8"), { filename: "game.js" });
const NANJING_LINES = vm.runInThisContext("NANJING_LINES");
const { S, feedChar } = globalThis.__NRT;

let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.error("  ✗ " + m); } };

const line = NANJING_LINES.find((l) => l.id === "S6"); // 新线 + 新故事
for (const lang of ["zh", "en"]) {
  S.lang = lang;
  globalThis.__NRT.startGame(line);
  for (const ch of line.stations[0].py) feedChar(ch); // 打完马群
  const txt = els["#hb-text"].textContent;
  const expect = lang === "en" ? line.stations[0].hist.en : line.stations[0].hist.zh;
  ok(txt === expect, `${lang} 气泡文案不符: ${txt} vs ${expect}`);
  ok(els["#hist-bubble"].classList.contains("hidden") === false, `${lang} 气泡未显示`);
}
// 中文界面回退：构造缺失 en 的场景由结构保证（en 必填已在 run-test 校验）
console.log(fail === 0 ? "双语气泡语言切换 ✓（zh/en 各一例，新线 S6）" : fail + " 处失败 ❌");
process.exit(fail === 0 ? 0 : 1);
