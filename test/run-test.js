/* 引擎自动化测试：node test/run-test.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const R = (p) => path.join(__dirname, "..", p);

/* ---------- 浏览器环境桩 ---------- */
function fakeEl() {
  const el = {
    textContent: "", value: "", className: "", dataset: {},
    style: { setProperty() {} },
    listeners: {},
    classList: {
      _s: new Set(),
      add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); },
      toggle(c, f) { f ? this._s.add(c) : this._s.delete(c); },
      contains(c) { return this._s.has(c); },
    },
    appendChild() {}, append() {}, focus() {}, blur() {}, select() {},
    addEventListener(t, f) { (el.listeners[t] = el.listeners[t] || []).push(f); },
  };
  return el;
}
const els = {};
global.document = {
  querySelector: (s) => (els[s] = els[s] || fakeEl()),
  querySelectorAll: () => [],
  createElement: () => fakeEl(),
  createDocumentFragment: () => fakeEl(),
  createTextNode: (s) => ({ text: s }),
  documentElement: fakeEl(), body: fakeEl(),
  addEventListener() {}, activeElement: null,
};
global.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
global.requestAnimationFrame = () => 0;
global.addEventListener = () => {}; // window.addEventListener 桩（resize 监听）
const timerQueue = [];
global.setTimeout = (f) => { timerQueue.push(f); return timerQueue.length; };
global.navigator = {};
global.window = global;

vm.runInThisContext(fs.readFileSync(R("js/data.js"), "utf8"), { filename: "data.js" });
vm.runInThisContext(fs.readFileSync(R("js/i18n.js"), "utf8"), { filename: "i18n.js" });
vm.runInThisContext(fs.readFileSync(R("js/game.js"), "utf8"), { filename: "game.js" });

const NANJING_LINES = vm.runInThisContext("NANJING_LINES");
const { S, startGame, feedChar, buildTokens, walk, project } = globalThis.__NRT;

let fail = 0;
const ok = (cond, msg) => { if (!cond) { fail++; console.error("  ✗ " + msg); } };

/* ---------- 1. 数据完整性（含坐标） ---------- */
let total = 0;
for (const line of NANJING_LINES) {
  const seen = new Set();
  line.stations.forEach((st, i) => {
    total++;
    const tag = `${line.id} #${i + 1} ${st.zh}`;
    ok(st.zh && st.en && st.py && st.hist, tag + " 缺字段");
    ok(/^[a-z]+$/.test(st.py), tag + " 拼音异常: " + st.py);
    ok(typeof st.hist.zh === "string" && typeof st.hist.en === "string", tag + " 故事缺语言");
    ok(st.hist.zh.length >= 6 && st.hist.zh.length <= 90, tag + " 中文故事长度异常: " + (st.hist.zh || "").length);
    ok(st.hist.en.length >= 6 && st.hist.en.length <= 130, tag + " 英文故事长度异常: " + (st.hist.en || "").length);
    ok(typeof st.lat === "number" && typeof st.lng === "number", tag + " 缺坐标");
    ok(st.lat > 30.5 && st.lat < 32.9 && st.lng > 117.9 && st.lng < 119.6, tag + ` 坐标越界: ${st.lat},${st.lng}`);
    ok(!seen.has(st.zh), tag + " 线内站名重复");
    seen.add(st.zh);
  });
}
console.log(`1) 数据完整性：${NANJING_LINES.length} 条线 / ${total} 站（故事+坐标）${fail ? "有问题" : "✓"}`);

/* ---------- 2. 两种模式全量判定 ---------- */
function typeTokens(st, mode, mutate) {
  S.tokens = buildTokens(st, mode);
  S.buffer = "";
  let done = false;
  for (const tk of S.tokens) {
    if (!tk.alts.some(Boolean)) continue;               // 空格等跳过字符
    let c = tk.alts[0];
    if (mutate === "swap-uv" && c === "v") c = "u";     // 绿 lv → lu 变体
    S.buffer += c;
    done = walk();
    if (S.tokens.some((x) => x.status === "wrong")) return { done, wrong: true };
  }
  done = walk();
  return { done };
}
let n2 = 0, bad = 0;
for (const line of NANJING_LINES) for (const st of line.stations) for (const mode of ["pinyin", "en"]) {
  n2++;
  const r1 = typeTokens(st, mode);
  if (!r1.done || r1.wrong) { bad++; console.error(`  ✗ 标准判定失败 ${line.id}/${mode}/${st.zh}`); }
}
console.log(`2) 判定引擎（拼音/英文标准输入）：${n2} 组用例，失败 ${bad} ${bad ? "✗" : "✓"}`);

/* ---------- 3. 变体与跳过字符抽查 ---------- */
S.tokens = buildTokens({ py: "lvboyuan" }, "pinyin");
S.buffer = "luboyuan";
ok(walk() === true, "拼音 lv→lu 变体应判定通过");
S.tokens = buildTokens({ en: "Xi'anmen" }, "en");
S.buffer = "xianmen";
ok(walk() === true, "英文名撇号应自动跳过");
S.tokens = buildTokens({ en: "NMU / JIETT" }, "en");
S.buffer = "nmujiett";
ok(walk() === true, "英文名斜杠与空格应自动跳过");
console.log("3) 变体与跳过字符抽查 ✓");

/* ---------- 4. 投影合理性 ---------- */
{
  const before = fail;
  for (const line of NANJING_LINES) {
    const pts = project(line.stations.map((s) => [s.lat, s.lng]), 640, 340, 34);
    ok(pts.length === line.stations.length, `${line.id} 投影点数不符`);
    ok(pts.every((p) => Number.isFinite(p.x) && Number.isFinite(p.y) && p.x >= 0 && p.x <= 640 && p.y >= 0 && p.y <= 340), `${line.id} 投影越界`);
  }
  console.log(`4) 地图投影：${NANJING_LINES.length} 条线全部落在视口内 ${fail === before ? "✓" : "✗"}`);
}

/* ---------- 5. 整局流程（S7 拼音）与故事气泡、地图 ---------- */
const line = NANJING_LINES.find((l) => l.id === "S7");
startGame(line);
ok(S.running === true, "游戏未启动");
ok(els["#hist-bubble"].classList.contains("hidden") === true, "开局时故事气泡应隐藏");
ok(String(els["#map-svg"].innerHTML).includes("polyline"), "开局应绘制线路地图");
ok(String(els["#network-map"].innerHTML).includes("polyline"), "首页应绘制线网图");
ok(String(els["#train"].style.transform).includes("translate"), "列车应定位到首站");
for (const st of line.stations) {
  for (const ch of st.py) feedChar(ch);
  ok(S.tokens.every((x) => x.status === "ok" || x.status === "auto"), "过站判定未通过: " + st.zh);
  while (timerQueue.length) timerQueue.shift()();   // 冲刷站间 setTimeout
  ok(els["#hist-bubble"].classList.contains("hidden") === false, `过站后故事气泡应弹出: ${st.zh}`);
}
ok(S.idx === line.stations.length, `应打完 ${line.stations.length} 站，实际 ${S.idx}`);
ok(S.stationTimes.length === line.stations.length, "站用时记录不完整");
ok(els["#screen-result"].classList.contains("hidden") === false, "结果页未显示");
ok(els["#screen-home"].classList.contains("hidden") === true, "首页未隐藏");
console.log(`5) 整局流程（S7 · ${line.stations.length} 站）+ 气泡 + 地图 ✓`);

console.log(fail === 0 ? "\n全部通过 ✅" : `\n${fail} 处失败 ❌`);
process.exit(fail === 0 ? 0 : 1);
