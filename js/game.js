/* 南京地铁打字列车 —— 游戏主逻辑（纯前端、无构建、无依赖）
 * 输入模式：pinyin（无声调拼音）/ en（官方英文名）
 * 地图：基于 OpenStreetMap 真实站点坐标的 SVG 示意图（等距圆柱投影），
 *       游戏页展示当前线路走向 + 列车逐站移动；首页展示全线网。 */
(function () {
  "use strict";

  const $ = (s) => document.querySelector(s);
  const ghost = $("#ghost");

  const S = {
    lang: localStorage.getItem("nrt-lang") || "zh",
    mode: localStorage.getItem("nrt-mode") || "pinyin", // pinyin | en
    line: null, idx: 0, tokens: [], buffer: "",
    startAt: 0, stationStart: 0, keys: 0, miss: 0,
    chars: 0, consumed: 0, stationTimes: [],
    running: false, paused: false, locked: false,
    resultSummary: "",
    mapPts: [], mapW: 640, mapH: 340,
  };

  /* ================= i18n ================= */
  const t = (k) => (I18N[S.lang] && I18N[S.lang][k]) != null ? I18N[S.lang][k] : (I18N.zh[k] != null ? I18N.zh[k] : k);
  const lineName = (l) => l.name[S.lang] || l.name.zh;
  const stText = (st) => (S.lang === "en" && st.en) ? st.en : st.zh;
  const MODE_HINT = { pinyin: "hintPinyin", en: "hintEnglish" };
  const MODE_LABEL = { pinyin: "拼音 Pinyin", en: "English" };

  /* ================= 地图：投影与绘制 ================= */
  /* 长江（南京段）示意走线，WGS84，自西南向东北 */
  const RIVER = [
    [31.78, 118.48], [31.86, 118.55], [31.94, 118.60], [32.00, 118.63],
    [32.03, 118.65], [32.05, 118.68], [32.06, 118.70], [32.08, 118.72],
    [32.10, 118.74], [32.11, 118.75], [32.13, 118.78], [32.15, 118.81],
    [32.17, 118.83], [32.19, 118.88], [32.21, 118.95], [32.22, 119.05],
    [32.23, 119.15],
  ];

  /* 等距圆柱投影：把 (lat,lng) 列表适配进 W×H 视口，留 pad 边距 */
  function project(pts, W, H, pad) {
    const midLat = pts.reduce((a, p) => a + p[0], 0) / pts.length;
    const k = Math.cos(midLat * Math.PI / 180);
    const xs = pts.map((p) => p[1] * k), ys = pts.map((p) => p[0]);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const sx = (maxX - minX) || 1e-6, sy = (maxY - minY) || 1e-6;
    const innerW = W - pad * 2, innerH = H - pad * 2;
    // 保持纵横比：以较大缩放率为准，居中
    const scale = Math.min(innerW / sx, innerH / sy);
    const offX = pad + (innerW - sx * scale) / 2, offY = pad + (innerH - sy * scale) / 2;
    return pts.map((_, i) => ({
      x: offX + (xs[i] - minX) * scale,
      y: offY + (maxY - ys[i]) * scale,
    }));
  }

  const riverInView = (b) => RIVER.some(([la, ln]) => la >= b.minLat - .06 && la <= b.maxLat + .06 && ln >= b.minLng - .06 && ln <= b.maxLng + .06);

  function renderMap() {
    const wrap = $("#map-wrap");
    const W = wrap.clientWidth || 640, H = wrap.clientHeight || 340;
    S.mapW = W; S.mapH = H;
    const sts = S.line.stations;
    const raw = sts.map((s) => [s.lat, s.lng]);
    const pts = project(raw, W, H, 34);
    S.mapPts = pts;
    const color = S.line.color;
    const b = {
      minLat: Math.min(...sts.map((s) => s.lat)), maxLat: Math.max(...sts.map((s) => s.lat)),
      minLng: Math.min(...sts.map((s) => s.lng)), maxLng: Math.max(...sts.map((s) => s.lng)),
    };
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`;
    if (riverInView(b)) {
      const rp = project(RIVER, W, H, 34);
      svg += `<polyline class="mp-river" points="${rp.map((p) => p.x.toFixed(1) + "," + p.y.toFixed(1)).join(" ")}"/>`;
    }
    const pl = pts.map((p) => p.x.toFixed(1) + "," + p.y.toFixed(1)).join(" ");
    svg += `<polyline class="mp-glow" stroke="${color}" points="${pl}"/>`;
    svg += `<polyline class="mp-line" stroke="${color}" points="${pl}"/>`;
    pts.forEach((p, i) => {
      if (i === S.idx) {
        svg += `<circle class="mp-ring" cx="${p.x}" cy="${p.y}" r="7" stroke="${color}"/>`;
        svg += `<circle class="mp-cur" cx="${p.x}" cy="${p.y}" r="6" stroke="${color}"/>`;
      } else {
        const past = i < S.idx;
        svg += `<circle class="mp-st${past ? " past" : ""}" cx="${p.x}" cy="${p.y}" r="4" ${past ? `stroke="${color}"` : ""}/>`;
      }
    });
    // 首末站标注
    const lbl = (i, dy) => `<text class="mp-lbl" x="${pts[i].x}" y="${pts[i].y + dy}" text-anchor="middle">${sts[i].zh}</text>`;
    svg += lbl(0, 22) + lbl(sts.length - 1, 22);
    // 指北针
    svg += `<g transform="translate(${W - 26},24)"><path class="mp-north" d="M0,8 L0,-8 M0,-8 L-4,-1 M0,-8 L4,-1"/><text class="mp-north-txt" x="8" y="4">N</text></g>`;
    svg += `</svg>`;
    $("#map-svg").innerHTML = svg;
    moveTrain(pts[S.idx] || { x: W / 2, y: H / 2 });
  }

  function moveTrain(p) {
    $("#train").style.transform = `translate(${p.x}px, ${p.y - 14}px) translate(-50%, -100%)`;
  }

  /* 首页全线网图（静态） */
  function renderNetwork() {
    const holder = $("#network-map");
    if (!holder) return;
    const W = 1000, H = 740;
    const all = [];
    NANJING_LINES.forEach((l) => l.stations.forEach((s) => all.push([s.lat, s.lng])));
    const midLat = all.reduce((a, p) => a + p[0], 0) / all.length;
    const k = Math.cos(midLat * Math.PI / 180);
    const xs = all.map((p) => p[1] * k), ys = all.map((p) => p[0]);
    const pad = 30;
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const scale = Math.min((W - pad * 2) / (maxX - minX), (H - pad * 2) / (maxY - minY));
    const offX = pad + ((W - pad * 2) - (maxX - minX) * scale) / 2;
    const offY = pad + ((H - pad * 2) - (maxY - minY) * scale) / 2;
    const P = (la, ln) => ({ x: offX + (ln * k - minX) * scale, y: offY + (maxY - la) * scale });
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<polyline class="mp-river" stroke-width="6" points="${RIVER.map(([la, ln]) => { const p = P(la, ln); return p.x.toFixed(1) + "," + p.y.toFixed(1); }).join(" ")}"/>`;
    const seen = new Set();
    for (const l of NANJING_LINES) {
      const pl = l.stations.map((s) => { const p = P(s.lat, s.lng); return p.x.toFixed(1) + "," + p.y.toFixed(1); }).join(" ");
      svg += `<polyline class="mp-net-line" stroke="${l.color}" points="${pl}"/>`;
      for (const s of l.stations) {
        const key = s.lat + "," + s.lng;
        const p = P(s.lat, s.lng);
        svg += `<circle cx="${p.x}" cy="${p.y}" r="${seen.has(key) ? 3.4 : 2.2}" fill="${seen.has(key) ? "#fff" : l.color}" ${seen.has(key) ? `stroke="${l.color}" stroke-width="1.4"` : ""}/>`;
        seen.add(key);
      }
    }
    svg += `</svg>`;
    holder.innerHTML = svg;
  }

  /* ================= 拼音/英文 token 引擎 ================= */
  function buildTokens(st, mode) {
    const src = mode === "en" ? (st.en || st.zh) : st.py;
    const toks = [];
    for (const ch of src) {
      if (/[a-zA-Z0-9]/.test(ch)) {
        const c = ch.toLowerCase();
        const alts = [c];
        if (mode === "pinyin" && (c === "u" || c === "v")) alts.push(c === "u" ? "v" : "u");
        toks.push({ disp: c, alts });
      } else {
        toks.push({ disp: ch, alts: [], optional: true });
      }
    }
    return toks;
  }

  function walk() {
    const toks = S.tokens;
    for (const tk of toks) tk.status = "pending";
    let bi = 0, i = 0;
    S.consumed = 0;
    while (i < toks.length) {
      const tk = toks[i];
      if (!tk.alts.some(Boolean)) { tk.status = "auto"; i++; continue; }
      const rest = S.buffer.slice(bi);
      if (rest === "") {
        let allSkippable = true;
        for (let j = i; j < toks.length; j++) {
          if (toks[j].optional || !toks[j].alts.some(Boolean)) { toks[j].status = "auto"; }
          else { allSkippable = false; break; }
        }
        if (allSkippable) i = toks.length;
        else toks[i].status = "typing";
        break;
      }
      let matched = null, partial = false;
      const alts = tk.alts.filter(Boolean).sort((a, b) => b.length - a.length);
      for (const a of alts) {
        if (rest.startsWith(a)) { matched = a; break; }
        if (a.startsWith(rest)) partial = true;
      }
      if (matched) { tk.status = "ok"; bi += matched.length; S.consumed++; i++; continue; }
      if (partial) { tk.status = "typing"; break; }
      if (tk.optional) { tk.status = "auto"; i++; continue; }
      tk.status = "wrong"; break;
    }
    return i >= toks.length;
  }

  /* ================= 渲染 ================= */
  function showScreen(name) {
    ["home", "game", "result"].forEach((n) => $("#screen-" + n).classList.toggle("hidden", n !== name));
  }

  function fmtSec(sec) {
    if (sec < 60) return sec.toFixed(1) + "s";
    return Math.floor(sec / 60) + "m " + (sec % 60).toFixed(1) + "s";
  }

  function bestKey(line) { return `nrt-best-${(line || S.line).id}-${S.mode}`; }

  function renderTarget() {
    const el = $("#target");
    el.textContent = "";
    const frag = document.createDocumentFragment();
    for (const tk of S.tokens) {
      const sp = document.createElement("span");
      sp.className = "tk " + tk.status;
      sp.textContent = tk.disp;
      frag.appendChild(sp);
    }
    el.appendChild(frag);
  }

  function renderStation() {
    const st = S.line.stations[S.idx];
    S.buffer = "";
    S.tokens = buildTokens(st, S.mode);
    walk(); renderTarget();
    $("#station-zh").textContent = st.zh;
    const kh = $("#kana-hint");
    if (S.mode === "en") { kh.textContent = st.zh; kh.style.display = ""; }
    else { kh.textContent = ""; kh.style.display = "none"; }
    $("#game-progress").textContent = t("progress").replace("{a}", S.idx + 1).replace("{b}", S.line.stations.length);
    $("#hintbar").textContent = t(MODE_HINT[S.mode]);
    renderMap();
  }

  /* 站点故事气泡：锚定在刚打完的车站地图坐标上方，文案随界面语言 */
  function histText(st) {
    const h = st && st.hist;
    if (!h) return "";
    if (typeof h === "string") return h;
    return S.lang === "en" ? (h.en || h.zh) : (h.zh || h.en || "");
  }
  function showHist(st) {
    const bub = $("#hist-bubble");
    if (!histText(st) || !S.mapPts.length) { bub.classList.add("hidden"); return; }
    const p = S.mapPts[Math.min(S.idx, S.mapPts.length - 1)];
    const x = Math.max(178, Math.min(S.mapW - 178, p.x));
    const y = Math.max(104, Math.min(S.mapH - 4, p.y - 16));
    bub.style.left = x + "px";
    bub.style.top = y + "px";
    $("#hb-station").textContent = st.zh;
    $("#hb-text").textContent = histText(st);
    bub.classList.remove("hidden");
    bub.classList.remove("hb-pop");
    void bub.offsetWidth;
    bub.classList.add("hb-pop");
  }

  function renderHome() {
    const grid = $("#line-grid");
    grid.textContent = "";
    NANJING_LINES.forEach((line) => {
      const best = JSON.parse(localStorage.getItem(bestKey(line)) || "null");
      const first = line.stations[0], last = line.stations[line.stations.length - 1];
      const btn = document.createElement("button");
      btn.className = "line-card";
      btn.style.setProperty("--lc", line.color);
      const badge = document.createElement("span");
      badge.className = "lc-badge"; badge.textContent = line.num;
      const info = document.createElement("span");
      info.className = "lc-info";
      const b1 = document.createElement("b"); b1.textContent = lineName(line);
      const i1 = document.createElement("i"); i1.textContent = stText(first) + " ⇄ " + stText(last);
      const e1 = document.createElement("em");
      e1.className = best ? "has-best" : "";
      e1.textContent = best ? (t("best") + " " + fmtSec(best.time) + " · " + best.wpm + " WPM") : t("noRecord");
      info.append(b1, i1, e1);
      btn.append(badge, info);
      btn.addEventListener("click", () => startGame(line));
      grid.appendChild(btn);
    });
    renderNetwork();
  }

  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $("#btn-retry").textContent = t("retry");
    $("#btn-home").textContent = t("backHome");
    $("#btn-copy").textContent = t("copy");
    $("#btn-resume").textContent = t("resume");
    $("#btn-quit").textContent = t("quit");
    const ms = $("#mode-select");
    ms.textContent = "";
    [["pinyin", "modePinyin"], ["en", "modeEnglish"]].forEach(([v, k]) => {
      const o = document.createElement("option");
      o.value = v; o.textContent = t(k);
      ms.appendChild(o);
    });
    ms.value = S.mode;
    const ls = $("#lang-select");
    ls.textContent = "";
    Object.keys(I18N).forEach((code) => {
      if (code.startsWith("_")) return;
      const o = document.createElement("option");
      o.value = code; o.textContent = I18N[code]._name;
      ls.appendChild(o);
    });
    ls.value = S.lang;
    document.documentElement.lang = S.lang === "zh" ? "zh-CN" : S.lang;
  }

  /* ================= 游戏流程 ================= */
  function startGame(line) {
    S.line = line; S.idx = 0;
    S.startAt = 0; S.stationStart = 0;
    S.keys = 0; S.miss = 0; S.chars = 0; S.consumed = 0;
    S.stationTimes = []; S.paused = false; S.locked = false; S.running = true;
    document.documentElement.style.setProperty("--lc", line.color);
    $("#hist-bubble").classList.add("hidden");
    const badge = $("#game-linebadge");
    badge.textContent = line.num;
    badge.style.background = line.color;
    $("#game-timer").textContent = "0.0s";
    $("#live-wpm").textContent = "0";
    $("#live-acc").textContent = "100%";
    $("#live-last").textContent = "–";
    showScreen("game");
    renderStation();
    ghost.focus({ preventScroll: true });
  }

  function stationComplete() {
    const sec = (performance.now() - S.stationStart) / 1000;
    S.chars += S.consumed;
    S.stationTimes.push({ zh: S.line.stations[S.idx].zh, sec });
    $("#live-last").textContent = sec.toFixed(1) + "s";
    showHist(S.line.stations[S.idx]);
    const zone = $("#type-zone");
    zone.classList.add("flash");
    S.locked = true;
    setTimeout(() => {
      zone.classList.remove("flash");
      S.locked = false;
      S.idx++;
      if (S.idx >= S.line.stations.length) finish();
      else {
        S.stationStart = performance.now();
        renderStation();
        ghost.focus({ preventScroll: true });
      }
    }, 380);
  }

  function finish() {
    S.running = false;
    const sec = (performance.now() - S.startAt) / 1000;
    const mins = sec / 60;
    const wpm = mins > 0 ? Math.round(S.chars / 5 / mins) : 0;
    const acc = S.keys ? Math.max(0, ((S.keys - S.miss) / S.keys) * 100) : 100;
    const prev = JSON.parse(localStorage.getItem(bestKey()) || "null");
    const isBest = !prev || sec < prev.time;
    if (isBest) localStorage.setItem(bestKey(), JSON.stringify({ time: sec, wpm, acc }));
    $("#result-title").textContent = t("arrive") + " " + lineName(S.line) + " · " + MODE_LABEL[S.mode];
    $("#r-record").textContent = isBest
      ? t("newRecord").replace("{old}", prev ? fmtSec(prev.time) : "—")
      : (prev ? t("notRecord").replace("{best}", fmtSec(prev.time)) : t("firstRecord"));
    $("#r-time").textContent = fmtSec(sec);
    $("#r-wpm").textContent = String(wpm);
    $("#r-acc").textContent = acc.toFixed(1) + "%";
    $("#r-stations").textContent = String(S.line.stations.length);
    const ol = $("#r-slowest");
    ol.textContent = "";
    S.stationTimes.slice().sort((a, b) => b.sec - a.sec).slice(0, 3).forEach((x) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(x.zh + "  "));
      const b = document.createElement("b");
      b.textContent = x.sec.toFixed(1) + "s";
      li.appendChild(b);
      ol.appendChild(li);
    });
    S.resultSummary = t("copyTemplate")
      .replace("{line}", lineName(S.line)).replace("{mode}", MODE_LABEL[S.mode])
      .replace("{time}", fmtSec(sec)).replace("{wpm}", String(wpm)).replace("{acc}", acc.toFixed(1) + "%");
    showScreen("result");
  }

  function togglePause() {
    if (!$("#screen-game") || $("#screen-game").classList.contains("hidden") || !S.startAt) return;
    const ov = $("#pause-overlay");
    if (!S.paused) {
      S.paused = true; S.pausedAt = performance.now();
      ov.classList.remove("hidden");
      ghost.blur();
    } else {
      const d = performance.now() - S.pausedAt;
      S.startAt += d; S.stationStart += d;
      S.paused = false;
      ov.classList.add("hidden");
      ghost.focus({ preventScroll: true });
    }
  }

  function quitToHome() {
    S.running = false; S.paused = false;
    $("#pause-overlay").classList.add("hidden");
    $("#hist-bubble").classList.add("hidden");
    showScreen("home");
    renderHome();
  }

  function copyResult() {
    const done = () => {
      const b = $("#btn-copy");
      b.textContent = t("copied");
      setTimeout(() => { b.textContent = t("copy"); }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(S.resultSummary).then(done).catch(() => fallbackCopy(S.resultSummary, done));
    } else fallbackCopy(S.resultSummary, done);
  }
  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ================= 输入 ================= */
  function feedChar(ch) {
    if (!S.running || S.paused || S.locked) return;
    if (!S.startAt) { S.startAt = performance.now(); S.stationStart = performance.now(); }
    const c = ch.toLowerCase();
    if (c === " " || c === "·") return;
    if (!/^[a-z0-9\-']$/.test(c)) return;
    S.keys++;
    S.buffer += c;
    const done = walk();
    if (S.tokens.some((tk) => tk.status === "wrong")) S.miss++;
    renderTarget();
    if (done) stationComplete();
  }

  ghost.addEventListener("beforeinput", (e) => {
    if (!S.running || S.paused) { e.preventDefault(); ghost.value = ""; return; }
    if ((e.inputType === "insertText" || e.inputType === "insertCompositionText") && e.data) {
      e.preventDefault();
      for (const ch of e.data) feedChar(ch);
    } else if (e.inputType === "deleteContentBackward") {
      e.preventDefault();
      if (!S.locked) { S.buffer = S.buffer.slice(0, -1); walk(); renderTarget(); }
    }
    ghost.value = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { togglePause(); return; }
    if (!S.running || S.paused) return;
    if (document.activeElement !== ghost) ghost.focus({ preventScroll: true });
  });

  /* 移动端：点游戏区任意位置（按钮除外）唤起键盘 */
  $("#screen-game").addEventListener("click", (e) => {
    if (e.target.closest("button") || e.target.closest("select")) return;
    if (S.running && !S.paused) ghost.focus({ preventScroll: true });
  });

  $("#type-zone").addEventListener("click", () => ghost.focus({ preventScroll: true }));
  $("#btn-exit").addEventListener("click", quitToHome);
  $("#btn-pause").addEventListener("click", togglePause);
  $("#btn-resume").addEventListener("click", togglePause);
  $("#btn-quit").addEventListener("click", quitToHome);
  $("#btn-retry").addEventListener("click", () => startGame(S.line));
  $("#btn-home").addEventListener("click", quitToHome);
  $("#btn-copy").addEventListener("click", copyResult);
  $("#lang-select").addEventListener("change", (e) => {
    S.lang = e.target.value;
    localStorage.setItem("nrt-lang", S.lang);
    applyI18n(); renderHome();
  });
  $("#mode-select").addEventListener("change", (e) => {
    S.mode = e.target.value;
    localStorage.setItem("nrt-mode", S.mode);
    renderHome();
  });
  window.addEventListener("resize", () => {
    if (S.running && S.line && !$("#screen-game").classList.contains("hidden")) renderMap();
  });

  /* ================= 帧循环：计时与实时统计 ================= */
  function tick() {
    if (S.running && !S.paused && S.startAt) {
      const el = (performance.now() - S.startAt) / 1000;
      $("#game-timer").textContent = fmtSec(el);
      const mins = el / 60;
      $("#live-wpm").textContent = String(mins > 0 ? Math.round((S.chars + S.consumed) / 5 / mins) : 0);
      const acc = S.keys ? Math.max(0, Math.round(((S.keys - S.miss) / S.keys) * 100)) : 100;
      $("#live-acc").textContent = acc + "%";
    }
    requestAnimationFrame(tick);
  }

  /* ================= 启动 ================= */
  applyI18n();
  renderHome();
  showScreen("home");
  requestAnimationFrame(tick);

  // 供自动化测试使用
  globalThis.__NRT = { S, startGame, feedChar, buildTokens, walk, quitToHome, project };
})();
