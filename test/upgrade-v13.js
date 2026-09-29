/* v1.3 升级迁移：node test/upgrade-v13.js
 * 1) 存量站 hist 字符串 → {zh, en}（en 来自 test/hist-en.json，8 个换乘站 zh 同步更新）
 * 2) 追加 test/new-lines.json 的 6 条新线（5/7/S2/S4/S6/S9）
 * 3) 从 Overpass OSM 数据补新站坐标（带别名与包含式回退匹配）
 * 4) 按固定顺序重排线路并重写 js/data.js */
const fs = require("fs"), path = require("path");
const R = (p) => path.join(__dirname, "..", p);
const { NANJING_LINES } = require(R("js/data.js"));
const HIST_EN = JSON.parse(fs.readFileSync(R("test/hist-en.json"), "utf8"));
const NEW_LINES = JSON.parse(fs.readFileSync(R("test/new-lines.json"), "utf8"));
const osm = require(R("test/osm-stations.json"));

/* 换乘站中文文案更新（en 已在 hist-en.json 中更新） */
const PATCH_ZH = {
  "竹山路": "东山老城南北干道，地名沿用旧村落名；1、5号线换乘站。",
  "诚信大道": "江宁大学城干道，路名取『诚信』嘉言；3、5号线换乘站。",
  "大校场": "明代演武校场，后为大校场机场，2015年停用转型南部新城；5、10号线换乘站。",
  "马群": "相传明初此处为牧马之地，故得名马群；2、S6号线换乘站。",
  "吉印大道": "江宁东西向干道，路名取吉语；S1、5号线换乘站。",
  "翔宇路南": "翔宇大道南段车站；S1、S9号线换乘站。",
  "中胜": "河西中部老地名，今为新城商务片区；7、10号线换乘站。",
  "螺塘路": "旧时水塘密布之地，路名存水乡记忆；2、7号线换乘站。",
};

/* ---- 1. 存量 hist → {zh,en} ---- */
let missEn = [];
for (const line of NANJING_LINES) for (const st of line.stations) {
  const zh = PATCH_ZH[st.zh] || (typeof st.hist === "string" ? st.hist : st.hist.zh);
  const en = HIST_EN[st.zh];
  if (!en) missEn.push(line.id + "/" + st.zh);
  st.hist = { zh, en: en || zh };
}
console.log(`存量站 hist 双语化完成，缺英文 ${missEn.length} 站` + (missEn.length ? ": " + missEn.join(",") : ""));

/* ---- 2. 追加新线 ---- */
const have = new Set(NANJING_LINES.map((l) => l.id));
for (const nl of NEW_LINES) if (!have.has(nl.id)) NANJING_LINES.push(nl);
const ORDER_IDS = ["L1","L2","L3","L4","L5","L7","L10","S1","S2","S3","S4","S6","S7","S8","S9"];
NANJING_LINES.sort((a, b) => ORDER_IDS.indexOf(a.id) - ORDER_IDS.indexOf(b.id));

/* ---- 3. OSM 坐标匹配（新站） ---- */
const byName = new Map();
for (const e of osm.elements) {
  const n = e.tags && e.tags.name;
  if (!n) continue;
  if (!byName.has(n)) byName.set(n, []);
  byName.get(n).push([e.lat, e.lon]);
}
const ALIAS = {
  "湖北路二中": ["湖北路二中", "湖北路·二中", "马鞍山二中"],
  "湖南路安工大": ["湖南路安工大", "安工大", "湖南路·安工大"],
  "马鞍山经开区": ["马鞍山经开区", "马鞍山经济技术开发区"],
  "慈湖高新区": ["慈湖高新区", "慈湖"],
  "滁州高铁站": ["滁州高铁站", "滁州站", "高铁滁州站"],
  "滁州政务中心": ["滁州政务中心", "政务中心"],
  "苏滁商务中心": ["苏滁商务中心", "苏滁产业园"],
  "汊河新城": ["汊河新城"],
  "南京猿人洞": ["南京猿人洞", "猿人洞"],
  "童世界": ["童世界", "恒大童世界"],
};
function findCoord(zh) {
  for (const c of ALIAS[zh] || [zh]) {
    const hit = byName.get(c);
    if (hit && hit.length) return hit[0];
  }
  for (const [n, v] of byName) if (n.includes(zh) || zh.includes(n)) return v[0];
  return null;
}
let matched = 0, interp = 0, missing = [];
for (const line of NANJING_LINES) {
  const sts = line.stations;
  for (const st of sts) {
    if (st.lat != null) { continue; }
    const c = findCoord(st.zh);
    if (c) { st.lat = +c[0].toFixed(5); st.lng = +c[1].toFixed(5); matched++; }
  }
  for (let i = 0; i < sts.length; i++) {
    if (sts[i].lat != null) continue;
    let p = i - 1, q = i + 1;
    while (p >= 0 && sts[p].lat == null) p--;
    while (q < sts.length && sts[q].lat == null) q++;
    if (p >= 0 && q < sts.length) {
      const t = (i - p) / (q - p);
      sts[i].lat = +(sts[p].lat + (sts[q].lat - sts[p].lat) * t).toFixed(5);
      sts[i].lng = +(sts[p].lng + (sts[q].lng - sts[p].lng) * t).toFixed(5);
      interp++; sts[i]._interp = true;
    } else missing.push(line.id + "/" + sts[i].zh);
  }
}
const interpList = [];
for (const l of NANJING_LINES) for (const s of l.stations) if (s._interp) interpList.push(`${l.id}/${s.zh}`);
console.log(`新站坐标：直接匹配 ${matched}，插值 ${interp}${interpList.length ? "（" + interpList.join(",") + "）" : ""}，缺 ${missing.length}`);
if (missing.length) { console.log("缺坐标: " + missing.join(", ")); process.exit(1); }

/* ---- 4. 重写 data.js ---- */
const ORDER = ["zh", "en", "py", "lat", "lng", "hist", "ja"];
const ordered = NANJING_LINES.map((l) => ({
  id: l.id, num: l.num, color: l.color, name: l.name,
  stations: l.stations.map((s) => {
    const o = {};
    for (const k of ORDER) if (s[k] != null) o[k] = s[k];
    return o;
  }),
}));
const HEADER = `/* 南京地铁线路数据（站序参照 Wikipedia，2026-09 在运营状态；仅收录已开通线路与车站）
 * 每站字段：
 *   zh   — 中文站名      en — 官方英文名（站牌英文，保留缩写风格）
 *   py   — 拼音（无声调、无空格，绿=lü 类站名直接用 v）
 *   lat/lng — 站点 WGS84 坐标（来自 OpenStreetMap，换乘站取其一，个别站为沿线插值）
 *   hist — 站点历史知识气泡文案 {zh, en}（打完该站弹出，随界面语言切换）
 *   ja   — 日文读音（当前版本未启用，字段保留备用）
 */
`;
const FOOTER = `\nif (typeof module !== "undefined" && module.exports) module.exports = { NANJING_LINES };\n`;
fs.writeFileSync(R("js/data.js"), HEADER + "const NANJING_LINES = " + JSON.stringify(ordered, null, 2) + ";\n" + FOOTER, "utf8");

const entries = NANJING_LINES.reduce((a, l) => a + l.stations.length, 0);
const uniq = new Set();
NANJING_LINES.forEach((l) => l.stations.forEach((s) => uniq.add(s.zh)));
console.log(`data.js 已重写：${NANJING_LINES.length} 条线 / ${entries} 个线路站 / 去重 ${uniq.size} 站`);
