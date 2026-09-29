# 南京地铁打字列车 · Nanjing Metro Typing 🚇

以南京地铁真实线路为题材的网页打字游戏（灵感来自 [Rail Typing](https://railtyping.com)）。选择一条线路，逐站输入站名，**列车在真实地理坐标的南京地图上逐站前进**，每过一站弹出**中英双语**「站点故事」气泡。收录全部 **15 条在运线路、259 座车站**。纯前端、零依赖、无需构建——双击 `index.html` 即可玩，手机浏览器同样可玩。

## 玩法

1. 首页选择一条地铁线路，底部有**全线网示意图**（真实坐标绘制，白点为换乘站，含跨市的 S2 马鞍山段与 S4 滁州段）。
2. 选择输入模式：
   - **拼音**：输入无声调拼音，如 `xinjiekou`（ü 用 `v` 代替，如 `lvboyuan`；`lu`/`lv` 均可）。
   - **English**：输入站牌英文名，如 `Xinjiekou`（大小写、空格均可忽略）。
3. 游戏页上方是**当前线路的真实走向地图**（站点坐标来自 OpenStreetMap，等距圆柱投影；长江为示意河带；跨江线路可见过江段），列车 🚆 沿线路移动，已过站点点亮。
4. 输入正确自动过站，同时弹出该站的双语**历史知识气泡**（得名由来、掌故、年号典故等；随界面语言切换）。
5. 全部打完出成绩（总用时 / WPM / 正确率 / 最耗时车站），最佳纪录按「线路 × 输入模式」存浏览器本地。

### 宽容判定

- 空格、`·`、`/`、`'`、`-` 一律自动跳过（`Xi'anmen` 打成 `xianmen` 也行）。
- 拼音 `ü` 可用 `v` 代替：`lvboyuan` / `luboyuan` 都能过。
- 界面语言（中文 / English）右上角随时切换，与输入模式相互独立；站点故事文案为中文。

## 运行

- **直接打开**：双击 `index.html`（Chrome / Edge / Firefox）。
- **本地服务器**（可选，手机同局域网可玩）：`python -m http.server 8080`，访问 <http://localhost:8080>；手机访问 `http://<电脑IP>:8080`。

## 手机适配

- 单列线路卡片、缩小版地图（250px）、更大的触控目标（≥44px 按钮）。
- 游戏中**点击屏幕任意位置唤起软键盘**；隐藏输入框固定于视口内、字号 16px，避免 iOS 聚焦缩放。
- 顶栏有 **⏸ 暂停按钮**（桌面也可用 Esc）；适配全面屏安全区（`viewport-fit=cover` + `env(safe-area-inset-*)`）；禁用双击缩放延迟。
- 站点故事气泡宽度自适应屏幕（`min(360px, 100vw-28px)`），位置自动钳制在地图内。

## 项目结构

```
index.html            页面骨架（地图容器、故事气泡、线网图区块）
css/style.css         样式（深色地铁主题、地图、气泡、≤640px 移动端适配）
js/data.js            线路数据：站名中文/英文/拼音 + OSM 坐标(lat/lng) + hist 双语历史 + ja（预留）
js/i18n.js            界面文案（zh / en）
js/game.js            打字判定引擎 + 游戏流程 + SVG 地图渲染（投影/线网/列车/双语气泡）
test/run-test.js          引擎自动化测试（判定 + 投影 + 整局 + 气泡 + 地图）
test/check-wiring.js      接线检查（DOM id / i18n 键 / 资源引用）
test/check-bilingual.js   双语气泡语言切换验证
test/upgrade-v13.js       一次性迁移：hist 双语化 + 追加 6 条新线 + 坐标合并
test/hist-en.json         存量 191 站故事英文对照表（迁移输入）
test/new-lines.json       5/7/S2/S4/S6/S9 新线数据（迁移输入）
test/osm-stations.json    Overpass 拉取的站点坐标缓存（288 节点）
test/merge-coords.js      一次性工具：v1.2 坐标合并
test/gen-map-preview.js   工具：导出全部线路地图为 preview-maps.html
test/demo.html            演示页：自动进入 4 号线并完成 5 站（截图/验收用）
```

## 测试

```
node test/run-test.js        # 判定引擎 + 地图投影 + 整局流程 + 气泡行为
node test/check-wiring.js    # 页面/文案/资源接线
node test/check-bilingual.js # zh/en 气泡语言切换
```

## 如何扩展

- **加线路**：在 `js/data.js` 的 `NANJING_LINES` 里照格式追加一条（如 5 号线、6 号线、S2/S4/S6/S9），带 `lat/lng` 与 `hist`，首页与线网图自动更新。
- **加界面语言**：在 `js/i18n.js` 的 `I18N` 里加一个语言对象。
- **加输入模式**：在 `game.js` 的 `buildTokens` 中加一个分支即可。

## 数据说明

- 收录**全部 15 条在运线路**（1/2/3/4/5/7/10、S1/S2/S3/S4/S6/S7/S8/S9；6 号线尚未开通，暂不收录），站序与官方英文名参照 Wikipedia（2026-09 运营状态）；S4 仅滁州段开通，S2 含马鞍山段。
- 站点坐标来自 **OpenStreetMap**（© OpenStreetMap contributors, ODbL），102 个新站中 100 个精确匹配、2 个（马鞍山湖北路二中/湖南路安工大）为沿线插值；长江河带为手工示意识别，非精确岸线。
- 站点故事为中英双语：著名站点写史实，普通站点写地名渊源，民间传说以「相传」标注；如用于教学请另行核对。
- 线路标识色取自 Wikipedia infobox 与 Adjacent stations 模块（S2/S4/S6/S9 为官方色值，5/7 号线为近似色）。

## Roadmap（想做未做）

- [ ] 日文音读输入模式（数据已预留，随时可开）
- [ ] 韩文（한글）读音模式
- [ ] 双人对战（需一个信令后端，如 WebRTC/WS）
- [ ] 地图缩放/拖动、街底图瓦片（Leaflet + 高德/OSM，需联网）
- [ ] 站点故事语音朗读 / 多语言故事文案
