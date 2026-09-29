/* 将 OSM 站点坐标合并进 data.js：node test/merge-coords.js */
const fs = require("fs"), path = require("path");
const R = (p) => path.join(__dirname, "..", p);
const { NANJING_LINES } = require(R("js/data.js"));
const osm = require(R("test/osm-stations.json"));

/* OSM 名字 → 坐标列表 */
const byName = new Map();
for (const e of osm.elements) {
  const n = e.tags && e.tags.name;
  if (!n) continue;
  if (!byName.has(n)) byName.set(n, []);
  byName.get(n).push([e.lat, e.lon]);
}
const norm = (s) => s.replace(/\s+/g, "").replace(/（.*?）|\(.*?\)/g, "");

/* 手工别名：我们的站名 → OSM 站名（跑第一遍后按未匹配清单补） */
const ALIAS = {
  "南医大·江苏经贸学院": ["南医大·江苏经贸学院", "江苏经贸学院", "南京医科大学·江苏经贸学院"],
  "南京林业大学·新庄": ["南京林业大学·新庄", "南京林业大学新庄", "南林大·新庄"],
  "河海大学·佛城西路": ["河海大学·佛城西路", "河海大学佛城西路"],
  "临江·青奥体育公园": ["临江·青奥体育公园", "临江青奥体育公园", "青奥体育公园", "临江"],
  "东大成贤学院": ["东大成贤学院", "东南大学成贤学院"],
  "南京交院": ["南京交院", "南京交通职业技术学院"],
  "中国药科大学": ["中国药科大学"],
  "南大仙林校区": ["南大仙林校区", "南京大学仙林校区"],
  "东大九龙湖校区": ["东大九龙湖校区", "东南大学九龙湖校区"],
  "南京工业大学": ["南京工业大学"],
  "信息工程大学": ["信息工程大学", "南京信息工程大学"],
  "高新开发区": ["高新开发区", "高新区"],
  "空港新城江宁": ["空港新城江宁"],
  "南京站": ["南京站"],
  "南京南站": ["南京南站"],
  "八卦洲大桥南": ["八卦洲大桥南"],
};

function findCoord(zh) {
  const cands = ALIAS[zh] || [zh];
  for (const c of cands) {
    const hit = byName.get(c) || byName.get(norm(c));
    if (hit && hit.length) return hit[0];
  }
  // 宽松匹配：OSM 名包含我们的站名（或反之）
  for (const [n, v] of byName) if (n.includes(zh) || zh.includes(n)) return v[0];
  return null;
}

let matched = 0, interp = 0, missing = [];
for (const line of NANJING_LINES) {
  for (const st of line.stations) {
    const c = findCoord(st.zh);
    if (c) { st.lat = +c[0].toFixed(5); st.lng = +c[1].toFixed(5); matched++; }
  }
  // 线内插值未匹配站
  const sts = line.stations;
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
    } else if (p >= 0) { // 端点外推：沿前一段方向延伸
      const p2 = p - 1 >= 0 && sts[p2 = p - 1].lat != null ? p2 : p;
      const dlat = sts[p].lat - sts[p2].lat, dlng = sts[p].lng - sts[p2].lng;
      sts[i].lat = +(sts[p].lat + dlat).toFixed(5);
      sts[i].lng = +(sts[p].lng + dlng).toFixed(5);
      interp++; sts[i]._interp = true;
    } else if (q < sts.length) {
      const q2 = q + 1 < sts.length && sts[q + 1].lat != null ? q + 1 : q;
      const dlat = sts[q].lat - sts[q2].lat, dlng = sts[q].lng - sts[q2].lng;
      sts[i].lat = +(sts[q].lat + dlat).toFixed(5);
      sts[i].lng = +(sts[q].lng + dlng).toFixed(5);
      interp++; sts[i]._interp = true;
    } else {
      missing.push(line.id + "/" + st.zh);
    }
  }
}

console.log(`OSM 节点 ${osm.elements.length} 个；精确/别名匹配 ${matched} 站，插值 ${interp} 站，无坐标 ${missing.length} 站`);
const interpList = [];
for (const l of NANJING_LINES) for (const s of l.stations) if (s._interp) interpList.push(`${l.id}/${s.zh}`);
if (interpList.length) console.log("插值站（重点核对）: " + interpList.join(", "));
if (missing.length) { console.log("缺坐标: " + missing.join(", ")); process.exit(1); }

/* 序列化回 data.js（字段顺序固定） */
const ORDER = ["zh", "en", "py", "lat", "lng", "hist", "ja"];
const ordered = NANJING_LINES.map((l) => ({
  id: l.id, num: l.num, color: l.color,
  name: l.name,
  stations: l.stations.map((s) => {
    const o = {};
    for (const k of ORDER) if (s[k] != null) o[k] = s[k];
    return o;
  }),
}));
const HEADER = `/* 南京地铁线路数据（站序参照 Wikipedia，2026-09 在运营状态）
 * 每站字段：
 *   zh   — 中文站名      en — 官方英文名（站牌英文，保留缩写风格）
 *   py   — 拼音（无声调、无空格，绿=lü 类站名直接用 v）
 *   lat/lng — 站点 WGS84 坐标（来自 OpenStreetMap，换乘站取其一，个别站为沿线插值）
 *   hist — 站点历史知识气泡文案（打完该站弹出）
 *   ja   — 日文读音（当前版本未启用，字段保留备用）
 */
`;
const FOOTER = `\nif (typeof module !== "undefined" && module.exports) module.exports = { NANJING_LINES };\n`;
fs.writeFileSync(R("js/data.js"), HEADER + "const NANJING_LINES = " + JSON.stringify(ordered, null, 2) + ";\n" + FOOTER, "utf8");
console.log("js/data.js 已写入坐标");
