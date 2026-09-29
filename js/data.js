/* 南京地铁线路数据（站序参照 Wikipedia，2026-09 在运营状态；仅收录已开通线路与车站）
 * 每站字段：
 *   zh   — 中文站名      en — 官方英文名（站牌英文，保留缩写风格）
 *   py   — 拼音（无声调、无空格，绿=lü 类站名直接用 v）
 *   lat/lng — 站点 WGS84 坐标（来自 OpenStreetMap，换乘站取其一，个别站为沿线插值）
 *   hist — 站点历史知识气泡文案 {zh, en}（打完该站弹出，随界面语言切换）
 *   ja   — 日文读音（当前版本未启用，字段保留备用）
 */
const NANJING_LINES = [
  {
    "id": "L1",
    "num": "1",
    "color": "#A6093D",
    "name": {
      "zh": "1号线",
      "en": "Line 1",
      "ja": "1号線"
    },
    "stations": [
      {
        "zh": "八卦洲大桥南",
        "en": "Baguazhoudaqiaonan",
        "py": "baguazhoudaqiaonan",
        "lat": 32.14768,
        "lng": 118.83737,
        "hist": {
          "zh": "紧邻八卦洲长江大桥（原南京长江第二大桥）北岸引桥，是1号线江畔门户。",
          "en": "By the north approach of the Baguazhou Yangtze Bridge, the former Second Nanjing Yangtze Bridge."
        },
        "ja": "はっけしゅうだいきょうなん"
      },
      {
        "zh": "笆斗山",
        "en": "Badoushan",
        "py": "badoushan",
        "lat": 32.14563,
        "lng": 118.82472,
        "hist": {
          "zh": "相传山丘形似旧时盛粮的笆斗，由此得名。",
          "en": "Said to be named after a hill shaped like a woven grain basket (badou)."
        },
        "ja": "はとさん"
      },
      {
        "zh": "燕子矶",
        "en": "Yanziji",
        "py": "yanziji",
        "lat": 32.13827,
        "lng": 118.8168,
        "hist": {
          "zh": "长江三大名矶之一，素有『万里长江第一矶』之称。",
          "en": "One of the Yangtze's three famed 'jis', hailed as the First Rock of the ten-thousand-li river."
        },
        "ja": "えんしき"
      },
      {
        "zh": "吉祥庵",
        "en": "Jixiang'an",
        "py": "jixiangan",
        "lat": 32.12884,
        "lng": 118.81645,
        "hist": {
          "zh": "因旧时村落的吉祥庵庙名沿用至今。",
          "en": "Named after the Jixiang nunnery of the old village here."
        },
        "ja": "きちしょうあん"
      },
      {
        "zh": "晓庄",
        "en": "Xiaozhuang",
        "py": "xiaozhuang",
        "lat": 32.11946,
        "lng": 118.81359,
        "hist": {
          "zh": "1927年陶行知在此创办晓庄师范，开中国乡村教育之先河。",
          "en": "Where Tao Xingzhi founded Xiaozhuang Normal School in 1927, pioneering Chinese rural education."
        },
        "ja": "ぎょうそう"
      },
      {
        "zh": "迈皋桥",
        "en": "Maigaoqiao",
        "py": "maigaoqiao",
        "lat": 32.10491,
        "lng": 118.80447,
        "hist": {
          "zh": "1号线2005年开通时的北端起点，城北进入主城的第一站。",
          "en": "Northern terminus when Line 1 opened in 2005 — the north gate into the old city."
        },
        "ja": "まいこうきょう"
      },
      {
        "zh": "红山动物园",
        "en": "Hongshan Zoo",
        "py": "hongshandongwuyuan",
        "lat": 32.09795,
        "lng": 118.79686,
        "hist": {
          "zh": "红山森林动物园由玄武湖动物园迁建而来，1998年开园。",
          "en": "Hongshan Forest Zoo, relocated from Xuanwu Lake and opened in 1998."
        },
        "ja": "こうさんどうぶつえん"
      },
      {
        "zh": "南京站",
        "en": "Nanjing Railway Station",
        "py": "nanjingzhan",
        "lat": 32.08906,
        "lng": 118.79141,
        "hist": {
          "zh": "1968年建成，紧邻玄武湖，是著名的『湖畔火车站』。",
          "en": "Built in 1968 beside Xuanwu Lake — the famous lakeside railway station."
        },
        "ja": "なんきんえき"
      },
      {
        "zh": "新模范马路",
        "en": "Xinmofanmalu",
        "py": "xinmofanmalu",
        "lat": 32.08193,
        "lng": 118.77855,
        "hist": {
          "zh": "民国时期按新式标准修筑『模范马路』，路名沿用至今。",
          "en": "Named after the 'model road' built to new standards in the Republican era."
        },
        "ja": "しんもはんばろ"
      },
      {
        "zh": "玄武门",
        "en": "Xuanwumen",
        "py": "xuanwumen",
        "lat": 32.07244,
        "lng": 118.77901,
        "hist": {
          "zh": "清末为举办南洋劝业会在明城墙上增辟的城门，今为玄武湖公园大门。",
          "en": "A gate cut into the Ming wall for the 1910 Nanyang Exposition; now Xuanwu Lake's main entrance."
        },
        "ja": "げんぶもん"
      },
      {
        "zh": "鼓楼",
        "en": "Gulou",
        "py": "gulou",
        "lat": 32.06078,
        "lng": 118.77842,
        "hist": {
          "zh": "建于明洪武年间的京城报时鼓楼，南京明代都城遗存。",
          "en": "The Ming-era drum tower that once kept time for the capital."
        },
        "ja": "ころう"
      },
      {
        "zh": "珠江路",
        "en": "Zhujianglu",
        "py": "zhujianglu",
        "lat": 32.05304,
        "lng": 118.77903,
        "hist": {
          "zh": "曾以『华东电子一条街』闻名全国的数码商圈。",
          "en": "The famed 'electronics street' of East China in the 1990s and 2000s."
        },
        "ja": "しゅこうろ"
      },
      {
        "zh": "新街口",
        "en": "Xinjiekou",
        "py": "xinjiekou",
        "lat": 32.04359,
        "lng": 118.7789,
        "hist": {
          "zh": "素有『中华第一商圈』之称，中心广场立孙中山铜像。",
          "en": "The 'No.1 business district of China', with Sun Yat-sen's statue at its heart."
        },
        "ja": "しんがいこう"
      },
      {
        "zh": "张府园",
        "en": "Zhangfuyuan",
        "py": "zhangfuyuan",
        "lat": 32.03292,
        "lng": 118.7787,
        "hist": {
          "zh": "旧时官宅园林所在，老城南的『地名活化石』。",
          "en": "An old garden-and-mansion place name of the southern city."
        },
        "ja": "ちょうふえん"
      },
      {
        "zh": "三山街",
        "en": "Sanshanjie",
        "py": "sanshanjie",
        "lat": 32.025,
        "lng": 118.77631,
        "hist": {
          "zh": "明清以来繁华街市，地名传与『三山』古称相关。",
          "en": "A bustling street since the Ming and Qing, named for the ancient Three Hills."
        },
        "ja": "さんざんがい"
      },
      {
        "zh": "中华门",
        "en": "Zhonghuamen",
        "py": "zhonghuamen",
        "lat": 32.00887,
        "lng": 118.76929,
        "hist": {
          "zh": "明代称聚宝门，是中国现存规模最大的古城堡式瓮城。",
          "en": "The Ming Treasure-Gathering Gate — China's largest surviving castle-style barbican."
        },
        "ja": "ちゅうかもん"
      },
      {
        "zh": "安德门",
        "en": "Andemen",
        "py": "andemen",
        "lat": 31.99382,
        "lng": 118.7565,
        "hist": {
          "zh": "南京明代城门旧名，地名沿用至今。",
          "en": "A Ming city-gate name still used for this area."
        },
        "ja": "あんとくもん"
      },
      {
        "zh": "天隆寺",
        "en": "Tianlongsi",
        "py": "tianlongsi",
        "lat": 31.98115,
        "lng": 118.75796,
        "hist": {
          "zh": "明代古刹天隆寺故地，寺后曾有名闻江南的塔林。",
          "en": "Site of the Ming Tianlong Temple and its once-famed pagoda grove."
        },
        "ja": "てんりゅうじ"
      },
      {
        "zh": "软件大道",
        "en": "Ruanjiandadao",
        "py": "ruanjiandadao",
        "lat": 31.97882,
        "lng": 118.7694,
        "hist": {
          "zh": "雨花台区软件产业带，『中国软件名城』核心走廊。",
          "en": "The corridor of Nanjing's Software City in Yuhuatai District."
        },
        "ja": "なんけんだいどう"
      },
      {
        "zh": "花神庙",
        "en": "Huashenmiao",
        "py": "huashenmiao",
        "lat": 31.97988,
        "lng": 118.78051,
        "hist": {
          "zh": "旧有花神庙，明清时即为南京的花田花市之地。",
          "en": "The Flower Goddess Temple area — Nanjing's flower farms and market since the Ming."
        },
        "ja": "かしんびょう"
      },
      {
        "zh": "南京南站",
        "en": "Nanjing South Railway Station",
        "py": "nanjingnanzhan",
        "lat": 31.97121,
        "lng": 118.79278,
        "hist": {
          "zh": "2011年启用，京沪高铁枢纽站，亚洲最大的铁路车站之一。",
          "en": "Opened in 2011 as the Beijing–Shanghai HSR hub, among Asia's largest stations."
        },
        "ja": "なんきんなんえき"
      },
      {
        "zh": "双龙大道",
        "en": "Shuanglongdadao",
        "py": "shuanglongdadao",
        "lat": 31.96577,
        "lng": 118.812,
        "hist": {
          "zh": "江宁接驳主城的南北主干道，路名取『双龙』吉语。",
          "en": "A north–south artery linking Jiangning to the main city; an auspicious name."
        },
        "ja": "そうりゅうたいどう"
      },
      {
        "zh": "河定桥",
        "en": "Hedingqiao",
        "py": "hedingqiao",
        "lat": 31.95351,
        "lng": 118.8148,
        "hist": {
          "zh": "秦淮河畔老桥名，江宁老地名沿用。",
          "en": "An old Qinhuai riverside bridge name from Jiangning."
        },
        "ja": "かていきょう"
      },
      {
        "zh": "胜太路",
        "en": "Shengtailu",
        "py": "shengtailu",
        "lat": 31.94586,
        "lng": 118.81614,
        "hist": {
          "zh": "江宁开发区早期主干道，路名取吉语。",
          "en": "An early artery of the Jiangning development zone."
        },
        "ja": "しょうたいろ"
      },
      {
        "zh": "百家湖",
        "en": "Baijiahu",
        "py": "baijiahu",
        "lat": 31.934,
        "lng": 118.81573,
        "hist": {
          "zh": "江宁开发区的地标湖泊，环湖已成繁华商圈。",
          "en": "The landmark lake of the Jiangning new town, ringed by malls."
        },
        "ja": "ひゃっかこ"
      },
      {
        "zh": "小龙湾",
        "en": "Xiaolongwan",
        "py": "xiaolongwan",
        "lat": 31.93184,
        "lng": 118.82769,
        "hist": {
          "zh": "秦淮河在此弯转，旧有小龙湾地名。",
          "en": "Where the Qinhuai River bends — the old Xiaolongwan."
        },
        "ja": "しょうりゅうわん"
      },
      {
        "zh": "竹山路",
        "en": "Zhushanlu",
        "py": "zhushanlu",
        "lat": 31.93416,
        "lng": 118.83945,
        "hist": {
          "zh": "东山老城南北干道，地名沿用旧村落名；1、5号线换乘站。",
          "en": "An old Dongshan north–south road; interchange of Lines 1 and 5."
        },
        "ja": "ちくざんさん"
      },
      {
        "zh": "天印大道",
        "en": "Tianyindadao",
        "py": "tianyindadao",
        "lat": 31.93986,
        "lng": 118.85848,
        "hist": {
          "zh": "因方山别名『天印山』而得名。",
          "en": "Named after Square Hill's ancient alias, the Heaven-Seal Mountain."
        },
        "ja": "てんいんたいどう"
      },
      {
        "zh": "龙眠大道",
        "en": "Longmiandadao",
        "py": "longmiandadao",
        "lat": 31.94211,
        "lng": 118.87209,
        "hist": {
          "zh": "大学城干道，路名取『龙眠』雅意。",
          "en": "An avenue of the university town, named for the sleeping dragon."
        },
        "ja": "りゅうみんたいどう"
      },
      {
        "zh": "南医大·江苏经贸学院",
        "en": "NMU / JIETT",
        "py": "nanyidajiangjingmaoxueyuan",
        "lat": 31.93568,
        "lng": 118.88525,
        "hist": {
          "zh": "以站点旁两所高校合称命名，大学城『双校门』车站。",
          "en": "The 'two-campus gate' station of Nanjing Medical University and JIT."
        },
        "ja": "なんいだいこうそけいぼうがくいん"
      },
      {
        "zh": "南京交院",
        "en": "NJCI",
        "py": "nanjingjiaoyuan",
        "lat": 31.91513,
        "lng": 118.89981,
        "hist": {
          "zh": "南京交通职业技术学院所在地。",
          "en": "Nanjing Vocational Institute of Transport."
        },
        "ja": "なんきんこういん"
      },
      {
        "zh": "中国药科大学",
        "en": "CPU",
        "py": "zhongguoyakedaxue",
        "lat": 31.8999,
        "lng": 118.90895,
        "hist": {
          "zh": "前身为1936年创办的国立药学专科学校，中国药学高等教育的发端。",
          "en": "Heir to China's first national pharmacy school, founded in 1936."
        },
        "ja": "ちゅうごくやっかだいがく"
      }
    ]
  },
  {
    "id": "L2",
    "num": "2",
    "color": "#009ACE",
    "name": {
      "zh": "2号线",
      "en": "Line 2",
      "ja": "2号線"
    },
    "stations": [
      {
        "zh": "鱼嘴",
        "en": "Yuzui",
        "py": "yuzui",
        "lat": 31.96902,
        "lng": 118.6646,
        "hist": {
          "zh": "地处长江夹江入江口，毗邻鱼嘴湿地公园与『南京眼』步行桥。",
          "en": "At the Yangtze channel fork, by Yuzui Wetland Park and the Nanjing Eye bridge."
        },
        "ja": "ぎょし"
      },
      {
        "zh": "天保街",
        "en": "Tianbaojie",
        "py": "tianbaojie",
        "lat": 31.96793,
        "lng": 118.67409,
        "hist": {
          "zh": "河西新城路名，取『天保』吉语。",
          "en": "A Hexi new-town street with an auspicious name."
        },
        "ja": "てんほうがい"
      },
      {
        "zh": "青莲街",
        "en": "Qinglianjie",
        "py": "qinglianjie",
        "lat": 31.96439,
        "lng": 118.68674,
        "hist": {
          "zh": "新城路名，取青莲雅意。",
          "en": "A new street named for the green lotus."
        },
        "ja": "せいれんがい"
      },
      {
        "zh": "螺塘路",
        "en": "Luotanglu",
        "py": "luotanglu",
        "lat": 31.96284,
        "lng": 118.69605,
        "hist": {
          "zh": "旧时水塘密布之地，路名存水乡记忆；2、7号线换乘站。",
          "en": "Once a land of ponds — the name keeps the memory; interchange of Lines 2 and 7."
        },
        "ja": "らとうろ"
      },
      {
        "zh": "油坊桥",
        "en": "Youfangqiao",
        "py": "youfangqiao",
        "lat": 31.9684,
        "lng": 118.71633,
        "hist": {
          "zh": "城南重要枢纽，2、S3号线换乘站，大型居住片区核心。",
          "en": "A key south-city hub — interchange of Lines 2 and S3."
        },
        "ja": "ゆぼうきょう"
      },
      {
        "zh": "雨润大街",
        "en": "Yurundajie",
        "py": "yurundajie",
        "lat": 31.98572,
        "lng": 118.71741,
        "hist": {
          "zh": "因总部设于此的雨润集团得名。",
          "en": "Named after the Yurun Group headquartered here."
        },
        "ja": "うじゅんだいがい"
      },
      {
        "zh": "元通",
        "en": "Yuantong",
        "py": "yuantong",
        "lat": 31.99773,
        "lng": 118.7164,
        "hist": {
          "zh": "河西中央商务区的地理中心，2、10号线换乘站。",
          "en": "The geographic center of Hexi CBD — interchange of Lines 2 and 10."
        },
        "ja": "げんつう"
      },
      {
        "zh": "奥体东",
        "en": "Olympic Stadium East",
        "py": "aotidong",
        "lat": 32.00661,
        "lng": 118.72384,
        "hist": {
          "zh": "南京奥体中心东侧，2005年十运会主场馆片区。",
          "en": "East of the Olympic Sports Center, main venue of the 2005 National Games."
        },
        "ja": "おくたいとう"
      },
      {
        "zh": "兴隆大街",
        "en": "Xinglongdajie",
        "py": "xinglongdajie",
        "lat": 32.01738,
        "lng": 118.73086,
        "hist": {
          "zh": "河西老地名『兴隆』沿用的干道。",
          "en": "An old Hexi place name carried by a main avenue."
        },
        "ja": "こうりゅうだいがい"
      },
      {
        "zh": "集庆门大街",
        "en": "Jiqingmendajie",
        "py": "jiqingmendajie",
        "lat": 32.03016,
        "lng": 118.73435,
        "hist": {
          "zh": "1990年代在明城墙上新辟的集庆门，名承元代南京旧称『集庆』。",
          "en": "Jiqing Gate, opened in the 1990s, revives Nanjing's Yuan-era name Jiqing."
        },
        "ja": "しゅうけいもんだいがい"
      },
      {
        "zh": "云锦路",
        "en": "Yunjinlu",
        "py": "yunjinlu",
        "lat": 32.03702,
        "lng": 118.74237,
        "hist": {
          "zh": "因南京云锦得名，邻近中国南京云锦博物馆。",
          "en": "Named after Nanjing yunjin brocade; the Yunjin Museum stands nearby."
        },
        "ja": "うんきんろ"
      },
      {
        "zh": "莫愁湖",
        "en": "Mochouhu",
        "py": "mochouhu",
        "lat": 32.03931,
        "lng": 118.754,
        "hist": {
          "zh": "相传南朝美女莫愁女居此，号称『金陵第一名胜』。",
          "en": "Legend of Mochou, the sorrow-free maiden — 'the finest sight of Jinling'."
        },
        "ja": "ばくしゅうこ"
      },
      {
        "zh": "汉中门",
        "en": "Hanzhongmen",
        "py": "hanzhongmen",
        "lat": 32.04478,
        "lng": 118.7618,
        "hist": {
          "zh": "明代石城门俗称汉中门，城门虽已不存，地名沿用至今。",
          "en": "The old Ming Shichengmen, long known by the name Hanzhongmen."
        },
        "ja": "かんちゅうもん"
      },
      {
        "zh": "上海路",
        "en": "Shanghailu",
        "py": "shanghailu",
        "lat": 32.04429,
        "lng": 118.77081,
        "hist": {
          "zh": "民国风貌街区，旧时使馆区片区之一。",
          "en": "A Republican-era street through the old consular quarter."
        },
        "ja": "しゃんはいろ"
      },
      {
        "zh": "新街口",
        "en": "Xinjiekou",
        "py": "xinjiekou",
        "lat": 32.04359,
        "lng": 118.7789,
        "hist": {
          "zh": "素有『中华第一商圈』之称，中心广场立孙中山铜像。",
          "en": "The 'No.1 business district of China', with Sun Yat-sen's statue at its heart."
        },
        "ja": "しんがいこう"
      },
      {
        "zh": "大行宫",
        "en": "Daxinggong",
        "py": "daxinggong",
        "lat": 32.04314,
        "lng": 118.78963,
        "hist": {
          "zh": "清代乾隆南巡驻跸的行宫故地，紧邻总统府。",
          "en": "Site of the Qing emperors' traveling palace, beside the Presidential Palace."
        },
        "ja": "だいこうきゅう"
      },
      {
        "zh": "西安门",
        "en": "Xi'anmen",
        "py": "xianmen",
        "lat": 32.04219,
        "lng": 118.80039,
        "hist": {
          "zh": "明皇城（明故宫）西侧城门的遗存地名。",
          "en": "The west gate of the Ming palace city."
        },
        "ja": "せいあんもん"
      },
      {
        "zh": "明故宫",
        "en": "Minggugong",
        "py": "minggugong",
        "lat": 32.04138,
        "lng": 118.81448,
        "hist": {
          "zh": "明初皇宫故址，中世纪世界最大的宫殿建筑群之一。",
          "en": "The early-Ming imperial palace, among the largest of its age worldwide."
        },
        "ja": "めいこきゅう"
      },
      {
        "zh": "苜蓿园",
        "en": "Muxuyuan",
        "py": "muxuyuan",
        "lat": 32.04238,
        "lng": 118.82997,
        "hist": {
          "zh": "明代在此种苜蓿牧马，因而得名。",
          "en": "Where the Ming court grew alfalfa for its horses."
        },
        "ja": "ぼくじゅくえん"
      },
      {
        "zh": "下马坊",
        "en": "Xiamafang",
        "py": "xiamafang",
        "lat": 32.03988,
        "lng": 118.84338,
        "hist": {
          "zh": "明孝陵入口，旧立『诸司官员下马』碑，故名。",
          "en": "Entrance to the Ming Xiaoling tomb — 'officials dismount here'."
        },
        "ja": "げばぼう"
      },
      {
        "zh": "孝陵卫",
        "en": "Xiaolingwei",
        "py": "xiaolingwei",
        "lat": 32.03772,
        "lng": 118.85272,
        "hist": {
          "zh": "明代拱卫明孝陵的卫所驻地，地名沿用六百余年。",
          "en": "The guard post of the Ming Xiaoling tomb for over six centuries."
        },
        "ja": "こうりょうえい"
      },
      {
        "zh": "钟灵街",
        "en": "Zhonglingjie",
        "py": "zhonglingjie",
        "lat": 32.04167,
        "lng": 118.86384,
        "hist": {
          "zh": "钟山南麓，取『钟灵毓秀』之意，邻近灵谷寺。",
          "en": "At Zhongshan's southern foot — a land 'gathered with spirit'."
        },
        "ja": "しょうれいがい"
      },
      {
        "zh": "马群",
        "en": "Maqun",
        "py": "maqun",
        "lat": 32.05191,
        "lng": 118.88969,
        "hist": {
          "zh": "相传明初此处为牧马之地，故得名马群；2、S6号线换乘站。",
          "en": "Said to be a Ming horse pasture; interchange of Lines 2 and S6."
        },
        "ja": "ばぐん"
      },
      {
        "zh": "金马路",
        "en": "Jinmalu",
        "py": "jinmalu",
        "lat": 32.07409,
        "lng": 118.90125,
        "hist": {
          "zh": "2、4号线换乘站。",
          "en": "Interchange of Lines 2 and 4."
        },
        "ja": "きんばろ"
      },
      {
        "zh": "仙鹤门",
        "en": "Xianhemen",
        "py": "xianhemen",
        "lat": 32.08723,
        "lng": 118.8999,
        "hist": {
          "zh": "明代外郭城门之一，城门之名沿用至今。",
          "en": "One of the Ming outer-wall gates."
        },
        "ja": "せんかくもん"
      },
      {
        "zh": "学则路",
        "en": "Xuezelu",
        "py": "xuezelu",
        "lat": 32.09363,
        "lng": 118.91178,
        "hist": {
          "zh": "仙林大学城干道，高校与居住区交界处。",
          "en": "A main road of the Xianlin university town."
        },
        "ja": "がくそくろ"
      },
      {
        "zh": "仙林中心",
        "en": "Xianlinzhongxin",
        "py": "xianlinzhongxin",
        "lat": 32.10099,
        "lng": 118.92538,
        "hist": {
          "zh": "仙林大学城的公共中心，1990年代末起成片开发。",
          "en": "The civic heart of Xianlin university town, developed since the late 1990s."
        },
        "ja": "せんりんちゅうしん"
      },
      {
        "zh": "羊山公园",
        "en": "Yangshangongyuan",
        "py": "yangshangongyuan",
        "lat": 32.10609,
        "lng": 118.935,
        "hist": {
          "zh": "背靠羊山与羊山湖，大学城的绿肺之一。",
          "en": "The green lung by Yangshan hill and lake."
        },
        "ja": "ようざんこうえん"
      },
      {
        "zh": "南大仙林校区",
        "en": "NJU Xianlin Campus",
        "py": "nandaxianlinxiaoqu",
        "lat": 32.11098,
        "lng": 118.95445,
        "hist": {
          "zh": "南京大学2009年前后启用的主校区，仙林大学城地标。",
          "en": "Nanjing University's main campus, opened in 2009."
        },
        "ja": "なんだいせんりんこうく"
      },
      {
        "zh": "经天路",
        "en": "Jingtianlu",
        "py": "jingtianlu",
        "lat": 32.11832,
        "lng": 118.97148,
        "hist": {
          "zh": "仙林东部干道，2号线东端终点。",
          "en": "The eastern terminus of Line 2."
        },
        "ja": "けいてんろ"
      }
    ]
  },
  {
    "id": "L3",
    "num": "3",
    "color": "#009A44",
    "name": {
      "zh": "3号线",
      "en": "Line 3",
      "ja": "3号線"
    },
    "stations": [
      {
        "zh": "林场",
        "en": "Linchang",
        "py": "linchang",
        "lat": 32.16576,
        "lng": 118.66624,
        "hist": {
          "zh": "老山林场片区，3号线江北端起点。",
          "en": "The Laoshan forestry farm at Line 3's northern end."
        },
        "ja": "りんじょう"
      },
      {
        "zh": "星火路",
        "en": "Xinghuolu",
        "py": "xinghuolu",
        "lat": 32.1595,
        "lng": 118.69168,
        "hist": {
          "zh": "江北新区路名，取『星火燎原』之意。",
          "en": "A Jiangbei new-area road — 'a single spark'."
        },
        "ja": "せいかろ"
      },
      {
        "zh": "东大成贤学院",
        "en": "SEU Chengxian College",
        "py": "dongdachengxianxueyuan",
        "lat": 32.15849,
        "lng": 118.70233,
        "hist": {
          "zh": "东南大学成贤学院（独立学院）所在地。",
          "en": "Southeast University's Chengxian College."
        },
        "ja": "とうだいせいけんがくいん"
      },
      {
        "zh": "泰冯路",
        "en": "Taifenglu",
        "py": "taifenglu",
        "lat": 32.15581,
        "lng": 118.71323,
        "hist": {
          "zh": "3号线与S8号线换乘站，江北重要节点。",
          "en": "Interchange of Lines 3 and S8, a key Jiangbei node."
        },
        "ja": "たいふうろ"
      },
      {
        "zh": "天润城",
        "en": "Tianruncheng",
        "py": "tianruncheng",
        "lat": 32.15308,
        "lng": 118.72874,
        "hist": {
          "zh": "桥北超大型居住区，地名来自开发小区名。",
          "en": "A superblock north of the river, named after the development."
        },
        "ja": "てんじゅんじょう"
      },
      {
        "zh": "柳洲东路",
        "en": "Liuzhoudonglu",
        "py": "liuzhoudonglu",
        "lat": 32.14194,
        "lng": 118.74107,
        "hist": {
          "zh": "长江北岸大型居住片区，著名通勤大站。",
          "en": "The famed commuter mega-station of the north-bank housing districts."
        },
        "ja": "りゅうしゅうとう"
      },
      {
        "zh": "上元门",
        "en": "Shangyuanmen",
        "py": "shangyuanmen",
        "lat": 32.11757,
        "lng": 118.76469,
        "hist": {
          "zh": "明代外郭城门之一，因旧属上元县而得名。",
          "en": "A Ming outer-wall gate named after old Shangyuan county."
        },
        "ja": "じょうげんもん"
      },
      {
        "zh": "五塘广场",
        "en": "Wutangguangchang",
        "py": "wutangguangchang",
        "lat": 32.11258,
        "lng": 118.77251,
        "hist": {
          "zh": "老地名『五塘』，旧为城北水塘密布之地。",
          "en": "The old Five Ponds place name of the city's north."
        },
        "ja": "ごとうひろば"
      },
      {
        "zh": "小市",
        "en": "Xiaoshi",
        "py": "xiaoshi",
        "lat": 32.0971,
        "lng": 118.78046,
        "hist": {
          "zh": "旧时城北集市小镇，『小市』地名沿用至今。",
          "en": "A little market town of the old northern outskirts."
        },
        "ja": "しょうし"
      },
      {
        "zh": "南京站",
        "en": "Nanjing Railway Station",
        "py": "nanjingzhan",
        "lat": 32.08906,
        "lng": 118.79141,
        "hist": {
          "zh": "1968年建成，紧邻玄武湖，是著名的『湖畔火车站』。",
          "en": "Built in 1968 beside Xuanwu Lake — the famous lakeside railway station."
        },
        "ja": "なんきんえき"
      },
      {
        "zh": "南京林业大学·新庄",
        "en": "NFU / Xinzhuang",
        "py": "nanjinglinyedaxuexinzhuang",
        "lat": 32.07868,
        "lng": 118.80524,
        "hist": {
          "zh": "南京林业大学主校区，紧邻新庄立交与玄武湖东岸。",
          "en": "Nanjing Forestry University by the Xinzhuang interchange."
        },
        "ja": "なんきんりんぎょうだいがくしんそう"
      },
      {
        "zh": "鸡鸣寺",
        "en": "Jimingsi",
        "py": "jimingsi",
        "lat": 32.05918,
        "lng": 118.79275,
        "hist": {
          "zh": "南朝同泰寺故址一带，明代重建鸡鸣寺，『鸡鸣春晓』为金陵名景。",
          "en": "On the site of the Southern Dynasties' Tongtai Temple; a famed Jinling sight."
        },
        "ja": "けいめいじ"
      },
      {
        "zh": "浮桥",
        "en": "Fuqiao",
        "py": "fuqiao",
        "lat": 32.05142,
        "lng": 118.79103,
        "hist": {
          "zh": "因内秦淮支流上旧设浮桥而得名。",
          "en": "Named after the pontoon bridge once spanning this Qinhuai branch."
        },
        "ja": "ふきょう"
      },
      {
        "zh": "大行宫",
        "en": "Daxinggong",
        "py": "daxinggong",
        "lat": 32.04314,
        "lng": 118.78963,
        "hist": {
          "zh": "清代乾隆南巡驻跸的行宫故地，紧邻总统府。",
          "en": "Site of the Qing emperors' traveling palace, beside the Presidential Palace."
        },
        "ja": "だいこうきゅう"
      },
      {
        "zh": "常府街",
        "en": "Changfujie",
        "py": "changfujie",
        "lat": 32.03561,
        "lng": 118.78706,
        "hist": {
          "zh": "因明初开国名将常遇春的府邸在此而得名。",
          "en": "Street of Chang Yuchun's mansion, a founding general of the Ming."
        },
        "ja": "じょうふがい"
      },
      {
        "zh": "夫子庙",
        "en": "Fuzimiao",
        "py": "fuzimiao",
        "lat": 32.0263,
        "lng": 118.78574,
        "hist": {
          "zh": "始建于宋的孔庙建筑群，与秦淮画舫、江南贡院同为文化地标。",
          "en": "The Confucius Temple complex, with Qinhuai boats and the exam halls."
        },
        "ja": "ふしびょう"
      },
      {
        "zh": "武定门",
        "en": "Wudingmen",
        "py": "wudingmen",
        "lat": 32.01563,
        "lng": 118.7893,
        "hist": {
          "zh": "民国时期在明城墙上增辟的城门，地名沿用。",
          "en": "A gate cut through the Ming wall in the Republican era."
        },
        "ja": "ぶていもん"
      },
      {
        "zh": "雨花门",
        "en": "Yuhuamen",
        "py": "yuhuamen",
        "lat": 32.00578,
        "lng": 118.78739,
        "hist": {
          "zh": "毗邻雨花台的城门地名，连接老城南与南部新城。",
          "en": "Gate by Yuhuatai, joining the old city to the new south town."
        },
        "ja": "うかもん"
      },
      {
        "zh": "卡子门",
        "en": "Kazimen",
        "py": "kazimen",
        "lat": 31.99742,
        "lng": 118.79024,
        "hist": {
          "zh": "旧时于此设卡收税，故名卡子门。",
          "en": "Where a tax barrier once stood — hence 'barrier gate'."
        },
        "ja": "かしもん"
      },
      {
        "zh": "大明路",
        "en": "Daminglu",
        "py": "daminglu",
        "lat": 31.98808,
        "lng": 118.79493,
        "hist": {
          "zh": "城东南干道，路名与明代『大明』相关。",
          "en": "A road recalling the Ming dynasty, Daming."
        },
        "ja": "だいめいろ"
      },
      {
        "zh": "明发广场",
        "en": "Mingfaguangchang",
        "py": "mingfaguangchang",
        "lat": 31.97925,
        "lng": 118.79541,
        "hist": {
          "zh": "因明发商业广场得名的新兴商圈站。",
          "en": "The station of Mingfa Plaza's new retail hub."
        },
        "ja": "めいはつひろば"
      },
      {
        "zh": "南京南站",
        "en": "Nanjing South Railway Station",
        "py": "nanjingnanzhan",
        "lat": 31.97121,
        "lng": 118.79278,
        "hist": {
          "zh": "2011年启用，京沪高铁枢纽站，亚洲最大的铁路车站之一。",
          "en": "Opened in 2011 as the Beijing–Shanghai HSR hub, among Asia's largest stations."
        },
        "ja": "なんきんなんえき"
      },
      {
        "zh": "宏运大道",
        "en": "Hongyundadao",
        "py": "hongyundadao",
        "lat": 31.96112,
        "lng": 118.79884,
        "hist": {
          "zh": "南部新城干道，路名取吉语。",
          "en": "An auspiciously named avenue of the south new town."
        },
        "ja": "こううんだいどう"
      },
      {
        "zh": "胜太西路",
        "en": "Shengtaixilu",
        "py": "shengtaixilu",
        "lat": 31.94567,
        "lng": 118.80221,
        "hist": {
          "zh": "江宁开发区道路，胜太路向西延伸段。",
          "en": "The westward extension of Shengtai Road."
        },
        "ja": "しょうたいせいろ"
      },
      {
        "zh": "天元西路",
        "en": "Tianyuanxilu",
        "py": "tianyuanxilu",
        "lat": 31.92958,
        "lng": 118.80354,
        "hist": {
          "zh": "百家湖南侧干道，路名取吉语。",
          "en": "An avenue south of Baijiahu Lake."
        },
        "ja": "てんげんせいろ"
      },
      {
        "zh": "九龙湖",
        "en": "Jiulonghu",
        "py": "jiulonghu",
        "lat": 31.91792,
        "lng": 118.81573,
        "hist": {
          "zh": "江宁九龙湖片区，环湖为高校与科技园区。",
          "en": "The Jiulonghu lake district of campuses and tech parks."
        },
        "ja": "くりゅうこ"
      },
      {
        "zh": "诚信大道",
        "en": "Chengxindadao",
        "py": "chengxindadao",
        "lat": 31.91019,
        "lng": 118.82478,
        "hist": {
          "zh": "江宁大学城干道，路名取『诚信』嘉言；3、5号线换乘站。",
          "en": "A university-town avenue named for integrity; interchange of Lines 3 and 5."
        },
        "ja": "せいしんだいどう"
      },
      {
        "zh": "东大九龙湖校区",
        "en": "SEU Jiulonghu Campus",
        "py": "dongdajiulonghuxiaoqu",
        "lat": 31.89797,
        "lng": 118.82522,
        "hist": {
          "zh": "东南大学2000年代启用的主校区，九龙湖畔。",
          "en": "Southeast University's main campus by Jiulonghu Lake."
        },
        "ja": "とうだいくりゅうここく"
      },
      {
        "zh": "秣周东路",
        "en": "Mozhoudonglu",
        "py": "mozhoudonglu",
        "lat": 31.87103,
        "lng": 118.82607,
        "hist": {
          "zh": "大学城南部干道，通往古秣陵方向。",
          "en": "A southern university-town road toward ancient Moling."
        },
        "ja": "ばつしゅうとう"
      },
      {
        "zh": "上秦淮西",
        "en": "Shangqinhuaixi",
        "py": "shangqinhuaixi",
        "lat": 31.85209,
        "lng": 118.83129,
        "hist": {
          "zh": "上秦淮湿地与科技园区的过渡地带。",
          "en": "Where the Upper Qinhuai wetlands meet the tech park."
        },
        "ja": "じょうしんわいせい"
      },
      {
        "zh": "秣陵",
        "en": "Moling",
        "py": "moling",
        "lat": 31.8432,
        "lng": 118.83,
        "hist": {
          "zh": "南京古称『秣陵』即源于此，秦代置县，两千余年建制史。",
          "en": "Moling — Nanjing's own ancient name, a county seat for over two millennia."
        },
        "ja": "ばつりょう"
      }
    ]
  },
  {
    "id": "L4",
    "num": "4",
    "color": "#7D55C7",
    "name": {
      "zh": "4号线",
      "en": "Line 4",
      "ja": "4号線"
    },
    "stations": [
      {
        "zh": "龙江",
        "en": "Longjiang",
        "py": "longjiang",
        "lat": 32.06011,
        "lng": 118.73437,
        "hist": {
          "zh": "明代龙江宝船厂故地，郑和下西洋的船队曾在此建造。",
          "en": "The Ming Longjiang shipyard where Zheng He's treasure ships were built."
        },
        "ja": "りゅうこう"
      },
      {
        "zh": "草场门",
        "en": "Caochangmen",
        "py": "caochangmen",
        "lat": 32.06253,
        "lng": 118.75044,
        "hist": {
          "zh": "清末增辟的城门之一，今为城西干道要冲。",
          "en": "A gate opened in the late Qing; now a busy western artery."
        },
        "ja": "そうじょうもん"
      },
      {
        "zh": "云南路",
        "en": "Yunnanlu",
        "py": "yunnanlu",
        "lat": 32.0612,
        "lng": 118.76938,
        "hist": {
          "zh": "以省名命名的老城路名，民国时已见记载。",
          "en": "An old street named after Yunnan province, recorded in the Republican era."
        },
        "ja": "うんなんろ"
      },
      {
        "zh": "鼓楼",
        "en": "Gulou",
        "py": "gulou",
        "lat": 32.06078,
        "lng": 118.77842,
        "hist": {
          "zh": "建于明洪武年间的京城报时鼓楼，南京明代都城遗存。",
          "en": "The Ming-era drum tower that once kept time for the capital."
        },
        "ja": "ころう"
      },
      {
        "zh": "鸡鸣寺",
        "en": "Jimingsi",
        "py": "jimingsi",
        "lat": 32.05918,
        "lng": 118.79275,
        "hist": {
          "zh": "南朝同泰寺故址一带，明代重建鸡鸣寺，『鸡鸣春晓』为金陵名景。",
          "en": "On the site of the Southern Dynasties' Tongtai Temple; a famed Jinling sight."
        },
        "ja": "けいめいじ"
      },
      {
        "zh": "九华山",
        "en": "Jiuhuashan",
        "py": "jiuhuashan",
        "lat": 32.05946,
        "lng": 118.80072,
        "hist": {
          "zh": "古称覆舟山，山上有供奉玄奘顶骨舍利的三藏塔。",
          "en": "Once Fuzhou Hill, holding the pagoda of Xuanzang's skull relic."
        },
        "ja": "きゅうかざん"
      },
      {
        "zh": "岗子村",
        "en": "Gangzicun",
        "py": "gangzicun",
        "lat": 32.06743,
        "lng": 118.81078,
        "hist": {
          "zh": "城东老村落名，地名沿用。",
          "en": "An old eastern village name."
        },
        "ja": "こうしそん"
      },
      {
        "zh": "蒋王庙",
        "en": "Jiangwangmiao",
        "py": "jiangwangmiao",
        "lat": 32.0797,
        "lng": 118.82605,
        "hist": {
          "zh": "因祭祀东汉蒋子文的庙宇得名，钟山古称『蒋山』即源于蒋氏。",
          "en": "Temple of Jiang Ziwen of Eastern Han — Zhongshan's ancient name honours him."
        },
        "ja": "しょうおうびょう"
      },
      {
        "zh": "王家湾",
        "en": "Wangjiawan",
        "py": "wangjiawan",
        "lat": 32.08754,
        "lng": 118.83311,
        "hist": {
          "zh": "紫金山西麓老地名。",
          "en": "An old place name on Purple Mountain's west slope."
        },
        "ja": "おうかわん"
      },
      {
        "zh": "聚宝山",
        "en": "Jubaoshan",
        "py": "jubaoshan",
        "lat": 32.09609,
        "lng": 118.85975,
        "hist": {
          "zh": "紫金山西侧丘岗旧名，传与『聚宝』吉语相关。",
          "en": "An old hill name with an auspicious 'gathering treasure' ring."
        },
        "ja": "じゅうほうざん"
      },
      {
        "zh": "徐庄",
        "en": "Xuzhuang",
        "py": "xuzhuang",
        "lat": 32.08745,
        "lng": 118.88331,
        "hist": {
          "zh": "徐庄软件园所在地，城东科技产业集聚区。",
          "en": "The Xuzhuang Software Park, the city's east-tech cluster."
        },
        "ja": "じょそう"
      },
      {
        "zh": "金马路",
        "en": "Jinmalu",
        "py": "jinmalu",
        "lat": 32.07409,
        "lng": 118.90125,
        "hist": {
          "zh": "2、4号线换乘站。",
          "en": "Interchange of Lines 2 and 4."
        },
        "ja": "きんばろ"
      },
      {
        "zh": "汇通路",
        "en": "Huitonglu",
        "py": "huitonglu",
        "lat": 32.08027,
        "lng": 118.92656,
        "hist": {
          "zh": "仙林与马群之间的干道，地名取『汇通』吉意。",
          "en": "A road named for converging thoroughfares."
        },
        "ja": "かいつうろ"
      },
      {
        "zh": "灵山",
        "en": "Lingshan",
        "py": "lingshan",
        "lat": 32.07997,
        "lng": 118.93883,
        "hist": {
          "zh": "栖霞东部丘岗老地名，今为新兴居住区。",
          "en": "An old Qixia hill name, now a new residential area."
        },
        "ja": "れいざん"
      },
      {
        "zh": "东流",
        "en": "Dongliu",
        "py": "dongliu",
        "lat": 32.07937,
        "lng": 118.95973,
        "hist": {
          "zh": "东流村老地名，沿用至今。",
          "en": "The old Dongliu village name."
        },
        "ja": "とうりゅう"
      },
      {
        "zh": "孟北",
        "en": "Mengbei",
        "py": "mengbei",
        "lat": 32.08658,
        "lng": 118.98216,
        "hist": {
          "zh": "孟北村老地名，宁镇山脉西段沿线。",
          "en": "Mengbei village, in the western Ningzhen hills."
        },
        "ja": "もうほく"
      },
      {
        "zh": "西岗桦墅",
        "en": "Xiganghuashu",
        "py": "xiganghuashu",
        "lat": 32.10106,
        "lng": 118.99125,
        "hist": {
          "zh": "桦墅村一带，以田园乡村风貌闻名。",
          "en": "The Hushu village countryside, famed for its rustic scenery."
        },
        "ja": "せいこうかしょ"
      },
      {
        "zh": "仙林湖",
        "en": "Xianlinhu",
        "py": "xianlinhu",
        "lat": 32.12757,
        "lng": 118.98733,
        "hist": {
          "zh": "仙林大学城东部的湖泊，环湖为新建住区与学校。",
          "en": "The lake at Xianlin's east end, ringed by new homes and schools."
        },
        "ja": "せんりんこ"
      }
    ]
  },
  {
    "id": "L5",
    "num": "5",
    "color": "#EAB308",
    "name": {
      "zh": "5号线",
      "en": "Line 5",
      "ja": "5号線"
    },
    "stations": [
      {
        "zh": "吉印大道",
        "en": "Jiyindadao",
        "py": "jiyindadao",
        "lat": 31.88839,
        "lng": 118.7902,
        "hist": {
          "zh": "江宁东西向干道，路名取吉语；S1、5号线换乘站。",
          "en": "An east–west Jiangning avenue; interchange of Lines S1 and 5."
        }
      },
      {
        "zh": "九龙湖南",
        "en": "Jiulonghunan",
        "py": "jiulonghunan",
        "lat": 31.89504,
        "lng": 118.80479,
        "hist": {
          "zh": "九龙湖南岸的新兴居住区。",
          "en": "A new residential quarter on the south shore of Jiulonghu Lake."
        }
      },
      {
        "zh": "诚信大道",
        "en": "Chengxindadao",
        "py": "chengxindadao",
        "lat": 31.91019,
        "lng": 118.82478,
        "hist": {
          "zh": "江宁大学城干道，路名取『诚信』嘉言；3、5号线换乘站。",
          "en": "A university-town avenue named for integrity; interchange of Lines 3 and 5."
        }
      },
      {
        "zh": "前庄",
        "en": "Qianzhuang",
        "py": "qianzhuang",
        "lat": 31.91243,
        "lng": 118.83867,
        "hist": {
          "zh": "江宁老村落名，地名沿用。",
          "en": "An old Jiangning village name still in use."
        }
      },
      {
        "zh": "科宁路",
        "en": "Keninglu",
        "py": "keninglu",
        "lat": 31.92637,
        "lng": 118.84432,
        "hist": {
          "zh": "取『科技宁乡』之意的新区路名。",
          "en": "A new-district road blending 'science' and 'Jiangning'."
        }
      },
      {
        "zh": "竹山路",
        "en": "Zhushanlu",
        "py": "zhushanlu",
        "lat": 31.93416,
        "lng": 118.83945,
        "hist": {
          "zh": "东山老城南北干道，地名沿用旧村落名；1、5号线换乘站。",
          "en": "An old Dongshan north–south road; interchange of Lines 1 and 5."
        }
      },
      {
        "zh": "新亭路",
        "en": "Xintinglu",
        "py": "xintinglu",
        "lat": 31.9445,
        "lng": 118.84045,
        "hist": {
          "zh": "纪念东晋新亭，『新亭对泣』典故之地。",
          "en": "Recalls Xinting of the Eastern Jin, home of the famed 'weeping at Xinting' story."
        }
      },
      {
        "zh": "东山",
        "en": "Dongshan",
        "py": "dongshan",
        "lat": 31.95561,
        "lng": 118.83862,
        "hist": {
          "zh": "江宁区驻地，『东山再起』典故出自东晋谢安。",
          "en": "Seat of Jiangning District, source of the idiom 'a comeback from East Hill' (Xie An)."
        }
      },
      {
        "zh": "文靖路",
        "en": "Wenjinglu",
        "py": "wenjinglu",
        "lat": 31.96044,
        "lng": 118.83665,
        "hist": {
          "zh": "路名取『文靖』雅号。",
          "en": "A road named after the scholarly posthumous title Wenjing."
        }
      },
      {
        "zh": "东山香樟园",
        "en": "Dongshanxiangzhangyuan",
        "py": "dongshanxiangzhangyuan",
        "lat": 31.97383,
        "lng": 118.83425,
        "hist": {
          "zh": "以香樟树闻名的大片居住绿地。",
          "en": "A residential quarter known for its camphor trees."
        }
      },
      {
        "zh": "神机营",
        "en": "Shenjiying",
        "py": "shenjiying",
        "lat": 31.99173,
        "lng": 118.81964,
        "hist": {
          "zh": "明代京军神机营驻地，中国最早成建制的火器部队。",
          "en": "Base of the Ming Divine Machine Camp, China's first organized firearms corps."
        }
      },
      {
        "zh": "大校场",
        "en": "Dajiaochang",
        "py": "dajiaochang",
        "lat": 32.00057,
        "lng": 118.81763,
        "hist": {
          "zh": "明代演武校场，后为大校场机场，2015年停用转型南部新城；5、10号线换乘站。",
          "en": "The Ming drill ground, later the airfield closed in 2015; interchange of Lines 5 and 10."
        }
      },
      {
        "zh": "七桥瓮",
        "en": "Qiqiaoweng",
        "py": "qiqiaoweng",
        "lat": 32.01092,
        "lng": 118.82021,
        "hist": {
          "zh": "明代七孔石桥，南京现存最大古石拱桥之一。",
          "en": "A seven-arch Ming stone bridge, among Nanjing's largest ancient arch bridges."
        }
      },
      {
        "zh": "石门坎",
        "en": "Shimenkan",
        "py": "shimenkan",
        "lat": 32.01958,
        "lng": 118.81964,
        "hist": {
          "zh": "老城南东缘的老地名。",
          "en": "An old place name on the eastern edge of the old city."
        }
      },
      {
        "zh": "光华门",
        "en": "Guanghuamen",
        "py": "guanghuamen",
        "lat": 32.02561,
        "lng": 118.80968,
        "hist": {
          "zh": "明都城南门正阳门，民国改称光华门。",
          "en": "The Ming south gate Zhengyangmen, renamed Guanghuamen in the Republican era."
        }
      },
      {
        "zh": "通济门",
        "en": "Tongjimen",
        "py": "tongjimen",
        "lat": 32.02773,
        "lng": 118.79932,
        "hist": {
          "zh": "明代内城门，旧为水陆交通枢纽。",
          "en": "A Ming inner-city gate, once a water–land transport hub."
        }
      },
      {
        "zh": "夫子庙",
        "en": "Fuzimiao",
        "py": "fuzimiao",
        "lat": 32.0263,
        "lng": 118.78574,
        "hist": {
          "zh": "始建于宋的孔庙建筑群，与秦淮画舫、江南贡院同为文化地标。",
          "en": "The Confucius Temple complex, with Qinhuai boats and the exam halls."
        }
      },
      {
        "zh": "三山街",
        "en": "Sanshanjie",
        "py": "sanshanjie",
        "lat": 32.025,
        "lng": 118.77631,
        "hist": {
          "zh": "明清以来繁华街市，地名传与『三山』古称相关。",
          "en": "A bustling street since the Ming and Qing, named for the ancient Three Hills."
        }
      },
      {
        "zh": "朝天宫",
        "en": "Chaotiangong",
        "py": "chaotiangong",
        "lat": 32.03471,
        "lng": 118.76743,
        "hist": {
          "zh": "江南现存规模最大的古建筑群，明代为朝天祭祀之所。",
          "en": "The largest ancient building complex in Jiangnan, a Ming court for imperial rites."
        }
      },
      {
        "zh": "上海路",
        "en": "Shanghailu",
        "py": "shanghailu",
        "lat": 32.04429,
        "lng": 118.77081,
        "hist": {
          "zh": "民国风貌街区，旧时使馆区片区之一。",
          "en": "A Republican-era street through the old consular quarter."
        }
      },
      {
        "zh": "五台山",
        "en": "Wutaishan",
        "py": "wutaishan",
        "lat": 32.05222,
        "lng": 118.77131,
        "hist": {
          "zh": "山形似五台得名，今为体育中心与先锋书店所在。",
          "en": "Named for its five terraces; now a sports center and home to a famed bookstore."
        }
      },
      {
        "zh": "云南路",
        "en": "Yunnanlu",
        "py": "yunnanlu",
        "lat": 32.0612,
        "lng": 118.76938,
        "hist": {
          "zh": "以省名命名的老城路名，民国时已见记载。",
          "en": "An old street named after Yunnan province, recorded in the Republican era."
        }
      },
      {
        "zh": "青春广场",
        "en": "Qinchunguangchang",
        "py": "qinchunguangchang",
        "lat": 32.07061,
        "lng": 118.76768,
        "hist": {
          "zh": "湖南路商圈的市民广场。",
          "en": "A civic plaza in the Hunan Road shopping area."
        }
      },
      {
        "zh": "虹桥",
        "en": "Hongqiao",
        "py": "hongqiao",
        "lat": 32.07721,
        "lng": 118.75996,
        "hist": {
          "zh": "旧有虹桥跨河的老地名。",
          "en": "An old name from a former arched bridge over the creek."
        }
      },
      {
        "zh": "福建路",
        "en": "Fujianlu",
        "py": "fujianlu",
        "lat": 32.08213,
        "lng": 118.75427,
        "hist": {
          "zh": "以福建省命名的老城路名。",
          "en": "An old street named after Fujian province."
        }
      },
      {
        "zh": "盐仓桥",
        "en": "Yancangqiao",
        "py": "yancangqiao",
        "lat": 32.08763,
        "lng": 118.74757,
        "hist": {
          "zh": "旧时官盐仓旁桥头老地名。",
          "en": "An old name from the bridge by the government salt warehouse."
        }
      },
      {
        "zh": "下关",
        "en": "Xiaguan",
        "py": "xiaguan",
        "lat": 32.08889,
        "lng": 118.73649,
        "hist": {
          "zh": "长江老码头商埠区，南京近代开埠门户。",
          "en": "The old Yangtze port district, Nanjing's gateway in the treaty-port era."
        }
      },
      {
        "zh": "静海寺",
        "en": "Jinghaisi",
        "py": "jinghaisi",
        "lat": 32.09418,
        "lng": 118.73286,
        "hist": {
          "zh": "明永乐敕建，郑和屡驻于此；1842年《南京条约》议约地。",
          "en": "An imperial Ming temple tied to Zheng He; where the Treaty of Nanjing was negotiated in 1842."
        }
      },
      {
        "zh": "南京西站",
        "en": "Nanjingxi Railway Station",
        "py": "nanjingxizhan",
        "lat": 32.09818,
        "lng": 118.73629,
        "hist": {
          "zh": "1908年沪宁铁路始发站，百年老站房仍在。",
          "en": "The 1908 terminus of the Shanghai–Nanjing Railway; its old house still stands."
        }
      },
      {
        "zh": "方家营",
        "en": "Fangjiaying",
        "py": "fangjiaying",
        "lat": 32.10646,
        "lng": 118.74227,
        "hist": {
          "zh": "下关滨江老村落名。",
          "en": "An old village name in the Xiaguan riverside area."
        }
      }
    ]
  },
  {
    "id": "L7",
    "num": "7",
    "color": "#1F7A4D",
    "name": {
      "zh": "7号线",
      "en": "Line 7",
      "ja": "7号線"
    },
    "stations": [
      {
        "zh": "仙新路",
        "en": "Xianxinlu",
        "py": "xianxinlu",
        "lat": 32.12904,
        "lng": 118.89033,
        "hist": {
          "zh": "仙林北部新路，7号线北端起点。",
          "en": "A new northern Xianlin road; northern terminus of Line 7."
        }
      },
      {
        "zh": "尧化门",
        "en": "Yaohuamen",
        "py": "yaohuamen",
        "lat": 32.12471,
        "lng": 118.88263,
        "hist": {
          "zh": "明代外郭城门尧化门故地。",
          "en": "Site of Yaohua Gate of the Ming outer wall."
        }
      },
      {
        "zh": "尧化新村",
        "en": "Yaohuaxincun",
        "py": "yaohuaxincun",
        "lat": 32.11753,
        "lng": 118.87067,
        "hist": {
          "zh": "尧化门旁的大型居住区。",
          "en": "A large residential quarter beside Yaohua Gate."
        }
      },
      {
        "zh": "丁家庄南",
        "en": "Dingjiazhuangnan",
        "py": "dingjiazhuangnan",
        "lat": 32.10977,
        "lng": 118.85496,
        "hist": {
          "zh": "丁家庄保障房片区南部。",
          "en": "Southern part of the Dingjiazhuang housing district."
        }
      },
      {
        "zh": "丁家庄",
        "en": "Dingjiazhuang",
        "py": "dingjiazhuang",
        "lat": 32.11374,
        "lng": 118.84491,
        "hist": {
          "zh": "南京大型保障居住片区。",
          "en": "One of Nanjing's major public-housing districts."
        }
      },
      {
        "zh": "万寿",
        "en": "Wanshou",
        "py": "wanshou",
        "lat": 32.12212,
        "lng": 118.82976,
        "hist": {
          "zh": "老地名万寿村。",
          "en": "Named after the old Wanshou village."
        }
      },
      {
        "zh": "晓庄",
        "en": "Xiaozhuang",
        "py": "xiaozhuang",
        "lat": 32.11946,
        "lng": 118.81359,
        "hist": {
          "zh": "1927年陶行知在此创办晓庄师范，开中国乡村教育之先河。",
          "en": "Where Tao Xingzhi founded Xiaozhuang Normal School in 1927, pioneering rural education."
        }
      },
      {
        "zh": "幕府山",
        "en": "Mufushan",
        "py": "mufushan",
        "lat": 32.11654,
        "lng": 118.79345,
        "hist": {
          "zh": "长江南岸丘陵，达摩『一苇渡江』传说之地。",
          "en": "Hills on the Yangtze's south bank, tied to Bodhidharma's reed-crossing legend."
        }
      },
      {
        "zh": "五塘广场",
        "en": "Wutangguangchang",
        "py": "wutangguangchang",
        "lat": 32.11258,
        "lng": 118.77251,
        "hist": {
          "zh": "老地名『五塘』，旧为城北水塘密布之地。",
          "en": "The old Five Ponds place name of the city's north."
        }
      },
      {
        "zh": "幕府西路",
        "en": "Mufuxilu",
        "py": "mufuxilu",
        "lat": 32.10633,
        "lng": 118.76518,
        "hist": {
          "zh": "幕府山以西干道。",
          "en": "The road west of Mufu Hill."
        }
      },
      {
        "zh": "钟阜路",
        "en": "Zhongfulu",
        "py": "zhongfulu",
        "lat": 32.09324,
        "lng": 118.76643,
        "hist": {
          "zh": "城北新路，名承金陵『钟阜』旧称。",
          "en": "A northern road named after Jinling's old epithet Zhongfu."
        }
      },
      {
        "zh": "福建路",
        "en": "Fujianlu",
        "py": "fujianlu",
        "lat": 32.08213,
        "lng": 118.75427,
        "hist": {
          "zh": "以福建省命名的老城路名。",
          "en": "An old street named after Fujian province."
        }
      },
      {
        "zh": "古平岗",
        "en": "Gupinggang",
        "py": "gupinggang",
        "lat": 32.07312,
        "lng": 118.75273,
        "hist": {
          "zh": "滨江岗地老地名。",
          "en": "An old name for this riverside ridge."
        }
      },
      {
        "zh": "草场门",
        "en": "Caochangmen",
        "py": "caochangmen",
        "lat": 32.06253,
        "lng": 118.75044,
        "hist": {
          "zh": "清末增辟的城门之一，今为城西干道要冲。",
          "en": "A gate opened in the late Qing; now a busy western artery."
        }
      },
      {
        "zh": "清凉山",
        "en": "Qingliangshan",
        "py": "qingliangshan",
        "lat": 32.05044,
        "lng": 118.7547,
        "hist": {
          "zh": "六朝石头城所在，『石城虎踞』之源。",
          "en": "Home of the Stone City, source of the phrase 'the crouching tiger of Stone City'."
        }
      },
      {
        "zh": "莫愁湖",
        "en": "Mochouhu",
        "py": "mochouhu",
        "lat": 32.03931,
        "lng": 118.754,
        "hist": {
          "zh": "相传南朝美女莫愁女居此，号称『金陵第一名胜』。",
          "en": "Legend of Mochou, the sorrow-free maiden — 'the finest sight of Jinling'."
        }
      },
      {
        "zh": "大士茶亭",
        "en": "Dashichating",
        "py": "dashichating",
        "lat": 32.03375,
        "lng": 118.75209,
        "hist": {
          "zh": "因观音大士庙前茶亭得名。",
          "en": "Named after a tea pavilion before an old Guanyin shrine."
        }
      },
      {
        "zh": "南湖",
        "en": "Nanhu",
        "py": "nanhu",
        "lat": 32.0258,
        "lng": 118.74902,
        "hist": {
          "zh": "老城南湖居住区，湖名沿用。",
          "en": "The old South Lake residential district."
        }
      },
      {
        "zh": "应天大街",
        "en": "Yingtiandajie",
        "py": "yingtiandajie",
        "lat": 32.01856,
        "lng": 118.744,
        "hist": {
          "zh": "路名取明都『应天府』。",
          "en": "A road named after the Ming capital's name, Yingtianfu."
        }
      },
      {
        "zh": "梦都大街东",
        "en": "Mengdudajiedong",
        "py": "mengdudajiedong",
        "lat": 32.00594,
        "lng": 118.74111,
        "hist": {
          "zh": "梦都大街东段。",
          "en": "The eastern section of Mengdu Avenue."
        }
      },
      {
        "zh": "新城科技园",
        "en": "Xinchengkejiyuan",
        "py": "xinchengkejiyuan",
        "lat": 31.99576,
        "lng": 118.73287,
        "hist": {
          "zh": "建邺高新区的科技园区。",
          "en": "The tech park of Jianye's high-tech zone."
        }
      },
      {
        "zh": "中胜",
        "en": "Zhongsheng",
        "py": "zhongsheng",
        "lat": 31.98995,
        "lng": 118.72795,
        "hist": {
          "zh": "河西中部老地名，今为新城商务片区；7、10号线换乘站。",
          "en": "A mid-Hexi old district, now a business quarter; interchange of Lines 7 and 10."
        }
      },
      {
        "zh": "嘉陵江东街",
        "en": "Jialingjiangdongjie",
        "py": "jialingjiangdongjie",
        "lat": 31.98418,
        "lng": 118.72261,
        "hist": {
          "zh": "河西南部街巷名。",
          "en": "A street in Hexi's southern new town."
        }
      },
      {
        "zh": "永初路",
        "en": "Yongchulu",
        "py": "yongchulu",
        "lat": 31.97614,
        "lng": 118.7071,
        "hist": {
          "zh": "河西南部新城路名。",
          "en": "A southern Hexi new-town street."
        }
      },
      {
        "zh": "太清路",
        "en": "Taiqinglu",
        "py": "taiqinglu",
        "lat": 31.96874,
        "lng": 118.69805,
        "hist": {
          "zh": "河西南部路名。",
          "en": "A southern Hexi road name."
        }
      },
      {
        "zh": "螺塘路",
        "en": "Luotanglu",
        "py": "luotanglu",
        "lat": 31.96284,
        "lng": 118.69605,
        "hist": {
          "zh": "旧时水塘密布之地，路名存水乡记忆；2、7号线换乘站。",
          "en": "Once a land of ponds — the name keeps the memory; interchange of Lines 2 and 7."
        }
      },
      {
        "zh": "西善桥",
        "en": "Xishanqiao",
        "py": "xishanqiao",
        "lat": 31.94896,
        "lng": 118.68569,
        "hist": {
          "zh": "明代古桥西善桥得名；7、S2号线换乘站。",
          "en": "Named after the Ming-era Xishan bridge; interchange of Lines 7 and S2."
        }
      }
    ]
  },
  {
    "id": "L10",
    "num": "10",
    "color": "#B9975B",
    "name": {
      "zh": "10号线",
      "en": "Line 10",
      "ja": "10号線"
    },
    "stations": [
      {
        "zh": "东麒路",
        "en": "Dongqilu",
        "py": "dongqilu",
        "lat": 32.00157,
        "lng": 118.88378,
        "hist": {
          "zh": "东山至麒麟门方向的干道，南部新城东北门户。",
          "en": "The artery from Dongshan toward Qilinmen, gate of the south new town."
        },
        "ja": "とうきろ"
      },
      {
        "zh": "石杨路",
        "en": "Shiyanglu",
        "py": "shiyanglu",
        "lat": 32.00746,
        "lng": 118.86916,
        "hist": {
          "zh": "石门坎至杨庄方向的城东南干道。",
          "en": "A southeast-city road from Shimenkan toward Yangzhuang."
        },
        "ja": "せきようろ"
      },
      {
        "zh": "杨庄",
        "en": "Yangzhuang",
        "py": "yangzhuang",
        "lat": 32.00883,
        "lng": 118.85767,
        "hist": {
          "zh": "城东南老村落名，地名沿用。",
          "en": "An old southeastern village name."
        },
        "ja": "ようそう"
      },
      {
        "zh": "高桥门",
        "en": "Gaoqiaomen",
        "py": "gaoqiaomen",
        "lat": 32.00746,
        "lng": 118.8371,
        "hist": {
          "zh": "明代外郭城门之一，因附近高桥得名。",
          "en": "A Ming outer-wall gate named after the nearby high bridge."
        },
        "ja": "こうきょうもん"
      },
      {
        "zh": "承天大道",
        "en": "Chengtiandadao",
        "py": "chengtiandadao",
        "lat": 32.00329,
        "lng": 118.82377,
        "hist": {
          "zh": "南部新城新建主干道，名承明皇城『承天门』旧典。",
          "en": "A new south-town avenue reviving the Ming palace's Chengtian name."
        },
        "ja": "しょうてんだいどう"
      },
      {
        "zh": "大校场",
        "en": "Dajiaochang",
        "py": "dajiaochang",
        "lat": 32.00057,
        "lng": 118.81763,
        "hist": {
          "zh": "明代演武校场，后为大校场机场，2015年停用转型南部新城；5、10号线换乘站。",
          "en": "The Ming drill ground, later the airfield closed in 2015; interchange of Lines 5 and 10."
        },
        "ja": "だいこうじょう"
      },
      {
        "zh": "机场跑道旧址",
        "en": "Jichangpaodaojiuzhi",
        "py": "jichangpaodaojiuzhi",
        "lat": 31.99429,
        "lng": 118.80862,
        "hist": {
          "zh": "老机场跑道原址，将改造为城市跑道公园留驻航空记忆。",
          "en": "The old airfield runway, set to become a runway park."
        },
        "ja": "きじょうほうどうきゅうし"
      },
      {
        "zh": "卡子门",
        "en": "Kazimen",
        "py": "kazimen",
        "lat": 31.99742,
        "lng": 118.79024,
        "hist": {
          "zh": "旧时于此设卡收税，故名卡子门。",
          "en": "Where a tax barrier once stood — hence 'barrier gate'."
        },
        "ja": "かしもん"
      },
      {
        "zh": "雨花台",
        "en": "Yuhuatai",
        "py": "yuhuatai",
        "lat": 31.99478,
        "lng": 118.77593,
        "hist": {
          "zh": "江南著名名胜与雨花石产地，亦是庄严肃穆的烈士陵园。",
          "en": "The famed rain-flower terrace: scenic hill, Yuhua stones, memorial grounds."
        },
        "ja": "うかだい"
      },
      {
        "zh": "共青团路",
        "en": "Gongqingtuanlu",
        "py": "gongqingtuanlu",
        "lat": 31.99559,
        "lng": 118.76891,
        "hist": {
          "zh": "以共青团命名的城南老路名。",
          "en": "A south-city road named for the Communist Youth League."
        },
        "ja": "きょうせいだんろ"
      },
      {
        "zh": "安德门",
        "en": "Andemen",
        "py": "andemen",
        "lat": 31.99382,
        "lng": 118.7565,
        "hist": {
          "zh": "南京明代城门旧名，地名沿用至今。",
          "en": "A Ming city-gate name still used for this area."
        },
        "ja": "あんとくもん"
      },
      {
        "zh": "小行",
        "en": "Xiaohang",
        "py": "xiaohang",
        "lat": 31.98453,
        "lng": 118.73948,
        "hist": {
          "zh": "『行』旧读 háng，相传因集市货行得名。",
          "en": "The 'hang' here once read hang — said to come from the market's trade guilds."
        },
        "ja": "しょうこう"
      },
      {
        "zh": "中胜",
        "en": "Zhongsheng",
        "py": "zhongsheng",
        "lat": 31.98995,
        "lng": 118.72795,
        "hist": {
          "zh": "河西中部老地名，今为新城商务片区；7、10号线换乘站。",
          "en": "A mid-Hexi old district, now a business quarter; interchange of Lines 7 and 10."
        },
        "ja": "ちゅうしょう"
      },
      {
        "zh": "元通",
        "en": "Yuantong",
        "py": "yuantong",
        "lat": 31.99773,
        "lng": 118.7164,
        "hist": {
          "zh": "河西中央商务区的地理中心，2、10号线换乘站。",
          "en": "The geographic center of Hexi CBD — interchange of Lines 2 and 10."
        },
        "ja": "げんつう"
      },
      {
        "zh": "奥体中心",
        "en": "Olympic Stadium",
        "py": "aotizhongxin",
        "lat": 32.01123,
        "lng": 118.71275,
        "hist": {
          "zh": "2005年第十届全国运动会主会场，河西地标。",
          "en": "Main venue of the 2005 National Games, Hexi's landmark."
        },
        "ja": "おくたいちゅうしん"
      },
      {
        "zh": "梦都大街",
        "en": "Mengdudajie",
        "py": "mengdudajie",
        "lat": 32.01769,
        "lng": 118.71666,
        "hist": {
          "zh": "河西新城干道，路名取『梦都』新意。",
          "en": "A Hexi avenue 'dreaming up' the new town."
        },
        "ja": "むとだいがい"
      },
      {
        "zh": "绿博园",
        "en": "Lüboyuan",
        "py": "lvboyuan",
        "lat": 32.02685,
        "lng": 118.71026,
        "hist": {
          "zh": "2005年首届中国绿化博览会主展园，滨江绿带。",
          "en": "Main park of the 2005 China Greening Expo, on the riverside green belt."
        },
        "ja": "りょくはくえん"
      },
      {
        "zh": "江心洲",
        "en": "Jiangxinzhou",
        "py": "jiangxinzhou",
        "lat": 32.0343,
        "lng": 118.6987,
        "hist": {
          "zh": "长江中的沙洲岛，曾以葡萄节闻名，今建生态科技岛。",
          "en": "The Yangtze's mid-river isle, once grape-famed, now an eco-tech island."
        },
        "ja": "こうしんしゅう"
      },
      {
        "zh": "临江·青奥体育公园",
        "en": "Linjiang / YOGSP",
        "py": "linjiangqingaotiyugongyuan",
        "lat": 32.05959,
        "lng": 118.66031,
        "hist": {
          "zh": "为2014年南京青奥会建设的滨江体育公园。",
          "en": "The riverside sports park built for the 2014 Youth Olympics."
        },
        "ja": "りんこうせいおうたいいくこうえん"
      },
      {
        "zh": "浦口万汇城",
        "en": "Pukouwanhuicheng",
        "py": "pukouwanhuicheng",
        "lat": 32.06356,
        "lng": 118.65275,
        "hist": {
          "zh": "浦口城南商圈，万汇城商业体所在地。",
          "en": "The Wanhui City retail hub of Pukou's south."
        },
        "ja": "ほこうばんかいじょう"
      },
      {
        "zh": "南京工业大学",
        "en": "Nanjing Tech",
        "py": "nanjinggongyedaxue",
        "lat": 32.06906,
        "lng": 118.64299,
        "hist": {
          "zh": "南京工业大学2001年由南京化工大学等合并组建，站点邻其浦口校区。",
          "en": "Nanjing Tech, formed by merger in 2001; the station serves its Pukou campus."
        },
        "ja": "なんきんこうぎょうだいがく"
      },
      {
        "zh": "龙华路",
        "en": "Longhualu",
        "py": "longhualu",
        "lat": 32.06692,
        "lng": 118.6302,
        "hist": {
          "zh": "浦口南北干道，路名取『龙华』吉意。",
          "en": "A Pukou north–south avenue."
        },
        "ja": "りゅうけいろ"
      },
      {
        "zh": "文德路",
        "en": "Wendelu",
        "py": "wendelu",
        "lat": 32.05948,
        "lng": 118.62158,
        "hist": {
          "zh": "江浦老城路名，取『文德』嘉言。",
          "en": "An old Jiangpu street of culture and virtue."
        },
        "ja": "ぶんとくろ"
      },
      {
        "zh": "雨山路",
        "en": "Yushanlu",
        "py": "yushanlu",
        "lat": 32.04801,
        "lng": 118.61147,
        "hist": {
          "zh": "10号线西端终点，浦口地铁新城核心。",
          "en": "Line 10's western terminus, heart of the Pukou metro new town."
        },
        "ja": "うざんろ"
      }
    ]
  },
  {
    "id": "S1",
    "num": "S1",
    "color": "#4BBBB4",
    "name": {
      "zh": "S1号线",
      "en": "Line S1",
      "ja": "S1号線"
    },
    "stations": [
      {
        "zh": "南京南站",
        "en": "Nanjing South Railway Station",
        "py": "nanjingnanzhan",
        "lat": 31.97121,
        "lng": 118.79278,
        "hist": {
          "zh": "2011年启用，京沪高铁枢纽站，亚洲最大的铁路车站之一。",
          "en": "Opened in 2011 as the Beijing–Shanghai HSR hub, among Asia's largest stations."
        },
        "ja": "なんきんなんえき"
      },
      {
        "zh": "翠屏山",
        "en": "Cuipingshan",
        "py": "cuipingshan",
        "lat": 31.94453,
        "lng": 118.77966,
        "hist": {
          "zh": "江宁低丘老地名，山名沿用。",
          "en": "An old Jiangning hill name."
        },
        "ja": "すいへいざん"
      },
      {
        "zh": "河海大学·佛城西路",
        "en": "HHU / Fochengxilu",
        "py": "hehaidaxuefochengxilu",
        "lat": 31.91582,
        "lng": 118.78642,
        "hist": {
          "zh": "站点邻河海大学江宁校区，该校前身是1915年创办的河海工程专门学校。",
          "en": "Hohai University, heir to China's first water-resources school of 1915."
        },
        "ja": "かかいだいがくぶつじょうせいろ"
      },
      {
        "zh": "吉印大道",
        "en": "Jiyindadao",
        "py": "jiyindadao",
        "lat": 31.88839,
        "lng": 118.7902,
        "hist": {
          "zh": "江宁东西向干道，路名取吉语；S1、5号线换乘站。",
          "en": "An east–west Jiangning avenue; interchange of Lines S1 and 5."
        },
        "ja": "きちいんだいどう"
      },
      {
        "zh": "正方中路",
        "en": "Zhengfangzhonglu",
        "py": "zhengfangzhonglu",
        "lat": 31.84721,
        "lng": 118.80069,
        "hist": {
          "zh": "正方大道中段，江宁产业带干道。",
          "en": "Mid-section of Zhengfang Avenue."
        },
        "ja": "せいほうちゅうろ"
      },
      {
        "zh": "翔宇路北",
        "en": "Xiangyulubei",
        "py": "xiangyulubei",
        "lat": 31.7933,
        "lng": 118.8164,
        "hist": {
          "zh": "空港新城南北干道，北段车站。",
          "en": "Northern stop on Xiangyu Avenue."
        },
        "ja": "しょううろほく"
      },
      {
        "zh": "翔宇路南",
        "en": "Xiangyulunan",
        "py": "xiangyulunan",
        "lat": 31.75691,
        "lng": 118.82412,
        "hist": {
          "zh": "翔宇大道南段车站；S1、S9号线换乘站。",
          "en": "Southern Xiangyu Avenue; interchange of Lines S1 and S9."
        },
        "ja": "しょううろなん"
      },
      {
        "zh": "禄口机场",
        "en": "Lukou International Airport",
        "py": "lukoujichang",
        "lat": 31.73251,
        "lng": 118.86867,
        "hist": {
          "zh": "1997年建成通航，江苏主要的空中门户。",
          "en": "Nanjing Lukou International Airport, opened in 1997."
        },
        "ja": "ろくこうきじょう"
      },
      {
        "zh": "空港新城江宁",
        "en": "Konggangxinchengjiangning",
        "py": "konggangxinchengjiangning",
        "lat": 31.73983,
        "lng": 118.88258,
        "hist": {
          "zh": "禄口机场北侧的空港新城核心，S1、S7号线换乘站。",
          "en": "Core of the airport new town — interchange of Lines S1 and S7."
        },
        "ja": "くうこうしんじょうこうねい"
      }
    ]
  },
  {
    "id": "S2",
    "num": "S2",
    "color": "#93282C",
    "name": {
      "zh": "S2号线",
      "en": "Line S2",
      "ja": "S2号線"
    },
    "stations": [
      {
        "zh": "西善桥",
        "en": "Xishanqiao",
        "py": "xishanqiao",
        "lat": 31.94896,
        "lng": 118.68569,
        "hist": {
          "zh": "明代古桥西善桥得名；7、S2号线换乘站。",
          "en": "Named after the Ming-era Xishan bridge; interchange of Lines 7 and S2."
        }
      },
      {
        "zh": "雨花经济开发区",
        "en": "Yuhua Jingji Development Zone",
        "py": "yuhuajingjikaifaqu",
        "lat": 31.92972,
        "lng": 118.66129,
        "hist": {
          "zh": "雨花台区西部产业园区。",
          "en": "An industrial park in western Yuhuatai District."
        }
      },
      {
        "zh": "板桥",
        "en": "Banqiao",
        "py": "banqiao",
        "lat": 31.90974,
        "lng": 118.63544,
        "hist": {
          "zh": "千年古镇，古渡要冲。",
          "en": "An ancient town, long a ferry-crossing hub."
        }
      },
      {
        "zh": "板桥南",
        "en": "Banqiaonan",
        "py": "banqiaonan",
        "lat": 31.89285,
        "lng": 118.61843,
        "hist": {
          "zh": "板桥镇以南新区。",
          "en": "The new quarter south of Banqiao town."
        }
      },
      {
        "zh": "江宁镇",
        "en": "Jiangningzhen",
        "py": "jiangningzhen",
        "lat": 31.87954,
        "lng": 118.6023,
        "hist": {
          "zh": "千年古镇，六朝起即为江宁县治。",
          "en": "An ancient town serving as Jiangning's county seat since the Six Dynasties."
        }
      },
      {
        "zh": "江宁滨江开发区",
        "en": "Jiangning Binjiang Development Zone",
        "py": "jiangningbinjiangkaifaqu",
        "lat": 31.85775,
        "lng": 118.58595,
        "hist": {
          "zh": "长江南岸的临港产业新城。",
          "en": "A riverside industrial new town on the Yangtze."
        }
      },
      {
        "zh": "牧龙",
        "en": "Mulong",
        "py": "mulong",
        "lat": 31.84222,
        "lng": 118.57338,
        "hist": {
          "zh": "相传与牧养龙马传说相关的老地名。",
          "en": "An old name tied to a legend of pasturing dragon steeds."
        }
      },
      {
        "zh": "铜井",
        "en": "Tongjing",
        "py": "tongjing",
        "lat": 31.80903,
        "lng": 118.5502,
        "hist": {
          "zh": "古铜矿井老地名。",
          "en": "An old name from ancient copper-mining pits."
        }
      },
      {
        "zh": "慈湖高新区",
        "en": "Cihugaoxinqu",
        "py": "cihugaoxinqu",
        "lat": 31.75345,
        "lng": 118.5178,
        "hist": {
          "zh": "苏皖交界慈湖片区的高新区。",
          "en": "A high-tech zone by Cihu at the Jiangsu–Anhui border."
        }
      },
      {
        "zh": "湖北路二中",
        "en": "Hubeilu Erzhong",
        "py": "hubeiluerzhong",
        "lat": 31.72673,
        "lng": 118.51801,
        "hist": {
          "zh": "以马鞍山二中命名的车站。",
          "en": "Named after Ma'anshan No. 2 Middle School nearby."
        }
      },
      {
        "zh": "湖南路安工大",
        "en": "Hunanlu Angongda",
        "py": "hunanluangongda",
        "lat": 31.7,
        "lng": 118.51821,
        "hist": {
          "zh": "邻安徽工业大学的车站。",
          "en": "The station serving Anhui University of Technology."
        }
      },
      {
        "zh": "雨山东路",
        "en": "Yushandonglu",
        "py": "yushandonglu",
        "lat": 31.67328,
        "lng": 118.51842,
        "hist": {
          "zh": "马鞍山雨山东路。",
          "en": "Yushan East Road in Ma'anshan."
        }
      },
      {
        "zh": "阳湖",
        "en": "Yanghu",
        "py": "yanghu",
        "lat": 31.65221,
        "lng": 118.51843,
        "hist": {
          "zh": "近阳湖塘老地名。",
          "en": "Named after the old Yanghutang area."
        }
      },
      {
        "zh": "马鞍山经开区",
        "en": "Ma'anshanjingkaiqu",
        "py": "maanshanjingkaiqu",
        "lat": 31.62821,
        "lng": 118.51796,
        "hist": {
          "zh": "马鞍山经济技术开发区。",
          "en": "Ma'anshan Economic and Technological Development Zone."
        }
      },
      {
        "zh": "姑孰",
        "en": "Gushu",
        "py": "gushu",
        "lat": 31.5601,
        "lng": 118.51944,
        "hist": {
          "zh": "当涂古称姑孰，千年县治。",
          "en": "Gushu, the ancient name of Dangtu's county seat."
        }
      },
      {
        "zh": "太白",
        "en": "Taibai",
        "py": "taibai",
        "lat": 31.52702,
        "lng": 118.51023,
        "hist": {
          "zh": "相传李白终老于当涂青山，站名纪念诗仙。",
          "en": "In memory of Li Bai, who spent his last years by Dangtu's Green Mountain."
        }
      }
    ]
  },
  {
    "id": "S3",
    "num": "S3",
    "color": "#BA84AC",
    "name": {
      "zh": "S3号线",
      "en": "Line S3",
      "ja": "S3号線"
    },
    "stations": [
      {
        "zh": "南京南站",
        "en": "Nanjing South Railway Station",
        "py": "nanjingnanzhan",
        "lat": 31.97121,
        "lng": 118.79278,
        "hist": {
          "zh": "2011年启用，京沪高铁枢纽站，亚洲最大的铁路车站之一。",
          "en": "Opened in 2011 as the Beijing–Shanghai HSR hub, among Asia's largest stations."
        },
        "ja": "なんきんなんえき"
      },
      {
        "zh": "景明佳园",
        "en": "Jingmingjiayuan",
        "py": "jingmingjiayuan",
        "lat": 31.96443,
        "lng": 118.77346,
        "hist": {
          "zh": "大型安居小区名，城南安居片区。",
          "en": "A large affordable-housing estate of the south city."
        },
        "ja": "けいめいかえん"
      },
      {
        "zh": "铁心桥",
        "en": "Tiexinqiao",
        "py": "tiexinqiao",
        "lat": 31.96651,
        "lng": 118.75905,
        "hist": {
          "zh": "城南老桥名，民间传说众多，地名沿用至今。",
          "en": "An old south-city bridge name wrapped in folk tales."
        },
        "ja": "てっしんきょう"
      },
      {
        "zh": "春江路",
        "en": "Chunjianglu",
        "py": "chunjianglu",
        "lat": 31.96453,
        "lng": 118.74483,
        "hist": {
          "zh": "新城路名，取『春江』诗意。",
          "en": "A new street with a spring-river mood."
        },
        "ja": "しゅんこうろ"
      },
      {
        "zh": "贾西",
        "en": "Jiaxi",
        "py": "jiaxi",
        "lat": 31.96158,
        "lng": 118.72753,
        "hist": {
          "zh": "软件谷腹地老村落名，今为科技园区。",
          "en": "An old village name, now the Software Valley's heart."
        },
        "ja": "かせい"
      },
      {
        "zh": "油坊桥",
        "en": "Youfangqiao",
        "py": "youfangqiao",
        "lat": 31.9684,
        "lng": 118.71633,
        "hist": {
          "zh": "城南重要枢纽，2、S3号线换乘站，大型居住片区核心。",
          "en": "A key south-city hub — interchange of Lines 2 and S3."
        },
        "ja": "ゆぼうきょう"
      },
      {
        "zh": "永初路",
        "en": "Yongchulu",
        "py": "yongchulu",
        "lat": 31.97614,
        "lng": 118.7071,
        "hist": {
          "zh": "河西南部新城路名。",
          "en": "A southern Hexi new-town street."
        },
        "ja": "えいしょろ"
      },
      {
        "zh": "平良大街",
        "en": "Pingliangdajie",
        "py": "pingliangdajie",
        "lat": 31.97967,
        "lng": 118.69744,
        "hist": {
          "zh": "河西南部街巷名。",
          "en": "A southern Hexi street name."
        },
        "ja": "へいりょうだいがい"
      },
      {
        "zh": "吴侯街",
        "en": "Wuhoujie",
        "py": "wuhoujie",
        "lat": 31.97743,
        "lng": 118.68818,
        "hist": {
          "zh": "片区路名取三国吴地主题，『吴侯』即江东封号。",
          "en": "Named for a Wu-kingdom lord — the district's Three-Kingdoms theme."
        },
        "ja": "ごこうがい"
      },
      {
        "zh": "高庙路",
        "en": "Gaomiaolu",
        "py": "gaomiaolu",
        "lat": 31.97086,
        "lng": 118.68328,
        "hist": {
          "zh": "河西南部老地名，旧有高庙。",
          "en": "An old southern Hexi name from a former temple."
        },
        "ja": "こうびょうろ"
      },
      {
        "zh": "天保",
        "en": "Tianbao",
        "py": "tianbao",
        "lat": 31.95524,
        "lng": 118.67223,
        "hist": {
          "zh": "因天保桥等老地名得名。",
          "en": "Named after the old Tianbao bridge."
        },
        "ja": "てんぽう"
      },
      {
        "zh": "刘村",
        "en": "Liucun",
        "py": "liucun",
        "lat": 31.94644,
        "lng": 118.65992,
        "hist": {
          "zh": "江宁滨江老村落名。",
          "en": "An old riverside village of Jiangning."
        },
        "ja": "りゅうそん"
      },
      {
        "zh": "马骡圩",
        "en": "Maluowei",
        "py": "maluowei",
        "lat": 31.97528,
        "lng": 118.58331,
        "hist": {
          "zh": "相传圩田旧时牧养马骡，故名。",
          "en": "Said to be the polder where mules and horses were once pastured."
        },
        "ja": "ばるいい"
      },
      {
        "zh": "兰花塘",
        "en": "Lanhuatang",
        "py": "lanhuatang",
        "lat": 31.96039,
        "lng": 118.56979,
        "hist": {
          "zh": "水乡圩区老地名，传因塘中兰草得名。",
          "en": "An old polder name, said to come from orchids in the pond."
        },
        "ja": "らんかとう"
      },
      {
        "zh": "双垅",
        "en": "Shuanglong",
        "py": "shuanglong",
        "lat": 31.95041,
        "lng": 118.56246,
        "hist": {
          "zh": "圩区老地名，『垅』即田垄。",
          "en": "An old polder name — 'long' means field ridge."
        },
        "ja": "そうろう"
      },
      {
        "zh": "石碛河",
        "en": "Shiqihe",
        "py": "shiqihe",
        "lat": 31.94018,
        "lng": 118.55303,
        "hist": {
          "zh": "桥林街道境内河流名，『碛』指浅水沙石滩。",
          "en": "The Shiqi river of Qiaolin; 'qi' means shallow stony waters."
        },
        "ja": "せきせきか"
      },
      {
        "zh": "桥林新城",
        "en": "Qiaolinxincheng",
        "py": "qiaolinxincheng",
        "lat": 31.932,
        "lng": 118.54243,
        "hist": {
          "zh": "浦口桥林街道，以桥林茶干等乡土特产闻名。",
          "en": "Qiaolin new town, famed for its dried tofu."
        },
        "ja": "きょうりんしんじょう"
      },
      {
        "zh": "林山",
        "en": "Linshan",
        "py": "linshan",
        "lat": 31.92095,
        "lng": 118.52599,
        "hist": {
          "zh": "低丘村落老地名。",
          "en": "An old low-hill village name."
        },
        "ja": "りんざん"
      },
      {
        "zh": "高家冲",
        "en": "Gaojiachong",
        "py": "gaojiachong",
        "lat": 31.91118,
        "lng": 118.51207,
        "hist": {
          "zh": "宁和线西端终点，近苏皖交界的江畔村落。",
          "en": "Line S3's western terminus, by riverside villages near the Anhui border."
        },
        "ja": "こうかちゅう"
      }
    ]
  },
  {
    "id": "S4",
    "num": "S4",
    "color": "#FF631B",
    "name": {
      "zh": "S4号线",
      "en": "Line S4",
      "ja": "S4号線"
    },
    "stations": [
      {
        "zh": "滁州高铁站",
        "en": "Chuzhou Railway Station",
        "py": "chuzhougaotiezhan",
        "lat": 32.20172,
        "lng": 118.31631,
        "hist": {
          "zh": "京沪高铁滁州站；S4 滁州段起点，南京段在建。",
          "en": "Chuzhou station on the Beijing–Shanghai HSR; the open Chuzhou section starts here."
        }
      },
      {
        "zh": "花博园",
        "en": "Huaboyuan",
        "py": "huaboyuan",
        "lat": 32.2385,
        "lng": 118.29787,
        "hist": {
          "zh": "滁州花博园景区。",
          "en": "The Chuzhou Flower Expo Park."
        }
      },
      {
        "zh": "琅琊山",
        "en": "Langyashan",
        "py": "langyashan",
        "lat": 32.25572,
        "lng": 118.30301,
        "hist": {
          "zh": "醉翁亭所在，欧阳修《醉翁亭记》名山。",
          "en": "Home of the Old Drunkard's Pavilion, made famous by Ouyang Xiu's essay."
        }
      },
      {
        "zh": "滁州政务中心",
        "en": "Chuzhou Zhengwuzhongxin",
        "py": "chuzhouzhengwuzhongxin",
        "lat": 32.2557,
        "lng": 118.33073,
        "hist": {
          "zh": "滁州市政务新区。",
          "en": "Chuzhou's civic-center district."
        }
      },
      {
        "zh": "苏滁商务中心",
        "en": "Suchu Shangwuzhongxin",
        "py": "suchushangwuzhongxin",
        "lat": 32.28343,
        "lng": 118.38166,
        "hist": {
          "zh": "苏州—滁州合作产业园核心。",
          "en": "Heart of the Suzhou–Chuzhou cooperation industrial park."
        }
      },
      {
        "zh": "大王郢",
        "en": "Dawangying",
        "py": "dawangying",
        "lat": 32.30972,
        "lng": 118.38588,
        "hist": {
          "zh": "苏滁园区老村落名。",
          "en": "An old village name."
        }
      },
      {
        "zh": "林楼",
        "en": "Linlou",
        "py": "linlou",
        "lat": 32.31367,
        "lng": 118.40532,
        "hist": {
          "zh": "滁州东郊老村落名。",
          "en": "An old village name."
        }
      },
      {
        "zh": "十二里半",
        "en": "Shierliban",
        "py": "shierliban",
        "lat": 32.29154,
        "lng": 118.50368,
        "hist": {
          "zh": "以距城里程得名的老地名。",
          "en": "An old name marking the distance from town, twelve and a half li."
        }
      },
      {
        "zh": "汊河新城",
        "en": "Chahexincheng",
        "py": "chahexincheng",
        "lat": 32.23973,
        "lng": 118.57933,
        "hist": {
          "zh": "汊河镇新区，近苏皖界。",
          "en": "A new town near the Jiangsu–Anhui border."
        }
      },
      {
        "zh": "汊河",
        "en": "Chahe",
        "py": "chahe",
        "lat": 32.21345,
        "lng": 118.59102,
        "hist": {
          "zh": "清流河与滁河汊流之镇。",
          "en": "A town where branching rivers meet."
        }
      }
    ]
  },
  {
    "id": "S6",
    "num": "S6",
    "color": "#C98BDB",
    "name": {
      "zh": "S6号线",
      "en": "Line S6",
      "ja": "S6号線"
    },
    "stations": [
      {
        "zh": "马群",
        "en": "Maqun",
        "py": "maqun",
        "lat": 32.05191,
        "lng": 118.88969,
        "hist": {
          "zh": "相传明初此处为牧马之地，故得名马群；2、S6号线换乘站。",
          "en": "Said to be a Ming horse pasture; interchange of Lines 2 and S6."
        }
      },
      {
        "zh": "百水桥",
        "en": "Baishuiqiao",
        "py": "baishuiqiao",
        "lat": 32.05549,
        "lng": 118.90969,
        "hist": {
          "zh": "旧百水桥老地名。",
          "en": "Named after the old Baishui bridge."
        }
      },
      {
        "zh": "麒麟门",
        "en": "Qilinmen",
        "py": "qilinmen",
        "lat": 32.05524,
        "lng": 118.92278,
        "hist": {
          "zh": "明代外郭城门之一。",
          "en": "One of the Ming outer-wall gates."
        }
      },
      {
        "zh": "东郊小镇",
        "en": "Dongjiaoxiaozhen",
        "py": "dongjiaoxiaozhen",
        "lat": 32.0539,
        "lng": 118.9477,
        "hist": {
          "zh": "城东大型居住小镇。",
          "en": "A large residential town on the eastern outskirts."
        }
      },
      {
        "zh": "古泉",
        "en": "Guquan",
        "py": "guquan",
        "lat": 32.0513,
        "lng": 119.00391,
        "hist": {
          "zh": "汤山古泉村老地名。",
          "en": "An old village name by Tangshan's ancient springs."
        }
      },
      {
        "zh": "南京猿人洞",
        "en": "Nanjingyuanrendong",
        "py": "nanjingyuanrendong",
        "lat": 32.06339,
        "lng": 119.04694,
        "hist": {
          "zh": "1993年出土南京直立人头骨的葫芦洞。",
          "en": "The cave where the Nanjing Man skull was unearthed in 1993."
        }
      },
      {
        "zh": "汤山",
        "en": "Tangshan",
        "py": "tangshan",
        "lat": 32.05004,
        "lng": 119.06269,
        "hist": {
          "zh": "温泉千年古镇，南朝起即为温泉胜地。",
          "en": "A hot-spring town famed since the Six Dynasties."
        }
      },
      {
        "zh": "泉都大街",
        "en": "Quandudajie",
        "py": "quandudajie",
        "lat": 32.03513,
        "lng": 119.04676,
        "hist": {
          "zh": "汤山新城干道。",
          "en": "A main road of the Tangshan new town."
        }
      },
      {
        "zh": "黄梅",
        "en": "Huangmei",
        "py": "huangmei",
        "lat": 32.01003,
        "lng": 119.11068,
        "hist": {
          "zh": "黄梅村老地名，近句容界。",
          "en": "The old Huangmei village near the Jurong border."
        }
      },
      {
        "zh": "童世界",
        "en": "Tongshijie",
        "py": "tongshijie",
        "lat": 31.99374,
        "lng": 119.15847,
        "hist": {
          "zh": "大型主题乐园片区。",
          "en": "A major theme-resort district."
        }
      },
      {
        "zh": "华阳",
        "en": "Huayang",
        "py": "huayang",
        "lat": 31.97444,
        "lng": 119.17495,
        "hist": {
          "zh": "句容古地名，茅山旧称华阳洞天。",
          "en": "An old Jurong name; Maoshan was famed as the Huayang grotto-heaven."
        }
      },
      {
        "zh": "崇明",
        "en": "Chongming",
        "py": "chongming",
        "lat": 31.9449,
        "lng": 119.17324,
        "hist": {
          "zh": "句容城北崇明片区。",
          "en": "The Chongming quarter north of Jurong's old town."
        }
      },
      {
        "zh": "句容",
        "en": "Jurong",
        "py": "jurong",
        "lat": 31.92399,
        "lng": 119.16453,
        "hist": {
          "zh": "西汉置县，千年古邑，茅山所在。",
          "en": "A county founded in the Western Han, gateway to Mount Mao."
        }
      }
    ]
  },
  {
    "id": "S7",
    "num": "S7",
    "color": "#B46B7A",
    "name": {
      "zh": "S7号线",
      "en": "Line S7",
      "ja": "S7号線"
    },
    "stations": [
      {
        "zh": "空港新城江宁",
        "en": "Konggangxinchengjiangning",
        "py": "konggangxinchengjiangning",
        "lat": 31.73983,
        "lng": 118.88258,
        "hist": {
          "zh": "禄口机场北侧的空港新城核心，S1、S7号线换乘站。",
          "en": "Core of the airport new town — interchange of Lines S1 and S7."
        },
        "ja": "くうこうしんじょうこうねい"
      },
      {
        "zh": "柘塘",
        "en": "Zhetang",
        "py": "zhetang",
        "lat": 31.75882,
        "lng": 118.93294,
        "hist": {
          "zh": "溧水北部重镇，柘塘地名历史久远。",
          "en": "Zhetang, an age-old northern Lishui town."
        },
        "ja": "しゃとう"
      },
      {
        "zh": "空港新城溧水",
        "en": "Konggangxinchenglishui",
        "py": "konggangxinchenglishui",
        "lat": 31.73582,
        "lng": 118.98441,
        "hist": {
          "zh": "溧水空港经济区门户站。",
          "en": "Gateway of Lishui's airport economic zone."
        },
        "ja": "くうこうしんじょうりつすい"
      },
      {
        "zh": "群力",
        "en": "Qunli",
        "py": "qunli",
        "lat": 31.72319,
        "lng": 119.00909,
        "hist": {
          "zh": "柘塘群力集镇老地名。",
          "en": "The old Qunli market-town name."
        },
        "ja": "ぐんりょく"
      },
      {
        "zh": "卧龙湖",
        "en": "Wolonghu",
        "py": "wolonghu",
        "lat": 31.6884,
        "lng": 119.03791,
        "hist": {
          "zh": "湖形如卧龙得名的度假区湖泊。",
          "en": "A resort lake shaped like a reclining dragon."
        },
        "ja": "がりゅうこ"
      },
      {
        "zh": "溧水",
        "en": "Lishui",
        "py": "lishui",
        "lat": 31.66401,
        "lng": 119.03927,
        "hist": {
          "zh": "南京南郊千年古县，隋代已置溧水县。",
          "en": "Lishui, a thousand-year county established in the Sui dynasty."
        },
        "ja": "りつすい"
      },
      {
        "zh": "中山湖",
        "en": "Zhongshanhu",
        "py": "zhongshanhu",
        "lat": 31.64873,
        "lng": 119.03989,
        "hist": {
          "zh": "溧水旧有『中山』之称，湖名由此而来。",
          "en": "The lake that borrows Lishui's old alias Zhongshan."
        },
        "ja": "ちゅうざんこ"
      },
      {
        "zh": "幸庄",
        "en": "Xingzhuang",
        "py": "xingzhuang",
        "lat": 31.62649,
        "lng": 119.0408,
        "hist": {
          "zh": "溧水城南村庄名，地名沿用。",
          "en": "A village name south of Lishui's old town."
        },
        "ja": "こうそう"
      },
      {
        "zh": "无想山",
        "en": "Wuxiangshan",
        "py": "wuxiangshan",
        "lat": 31.61031,
        "lng": 119.04145,
        "hist": {
          "zh": "因山中古无想寺得名，为溧水第一名胜。",
          "en": "Wuxiang ('thought-free') Hill, Lishui's finest scenic spot, named after its temple."
        },
        "ja": "むそうざん"
      }
    ]
  },
  {
    "id": "S8",
    "num": "S8",
    "color": "#FF8000",
    "name": {
      "zh": "S8号线",
      "en": "Line S8",
      "ja": "S8号線"
    },
    "stations": [
      {
        "zh": "长江大桥北",
        "en": "Changjiangdaqiaobei",
        "py": "changjiangdaqiaobei",
        "lat": 32.13083,
        "lng": 118.72465,
        "hist": {
          "zh": "1968年通车的南京长江大桥北岸——中国人自行设计建造的第一座长江双层大桥。",
          "en": "North end of the 1968 Nanjing Yangtze Bridge — China's first self-designed rail-road Yangtze crossing."
        },
        "ja": "ちょうこうだいきょうほく"
      },
      {
        "zh": "毛纺厂路",
        "en": "Maofangchanglu",
        "py": "maofangchanglu",
        "lat": 32.13665,
        "lng": 118.72142,
        "hist": {
          "zh": "因老毛纺织厂得名的工业记忆路名。",
          "en": "A road remembering the old woolen mill."
        },
        "ja": "もうぼうしょうろ"
      },
      {
        "zh": "泰山新村",
        "en": "Taishanxincun",
        "py": "taishanxincun",
        "lat": 32.14648,
        "lng": 118.71098,
        "hist": {
          "zh": "浦口泰山片区大型居住区。",
          "en": "A large Pukou–Taishan residential quarter."
        },
        "ja": "たいざんしんそん"
      },
      {
        "zh": "泰冯路",
        "en": "Taifenglu",
        "py": "taifenglu",
        "lat": 32.15581,
        "lng": 118.71323,
        "hist": {
          "zh": "3号线与S8号线换乘站，江北重要节点。",
          "en": "Interchange of Lines 3 and S8, a key Jiangbei node."
        },
        "ja": "たいふうろ"
      },
      {
        "zh": "高新开发区",
        "en": "Gaoxin Development Zone",
        "py": "gaoxinkaifaqu",
        "lat": 32.17988,
        "lng": 118.71439,
        "hist": {
          "zh": "南京高新技术产业开发区（江北）核心区。",
          "en": "The core of Nanjing High-Tech (Jiangbei) Development Zone."
        },
        "ja": "こうしんかいはつく"
      },
      {
        "zh": "信息工程大学",
        "en": "NUIST",
        "py": "xinxigongchengdaxue",
        "lat": 32.20467,
        "lng": 118.72174,
        "hist": {
          "zh": "南京信息工程大学，前身是1960年创办的南京气象学院。",
          "en": "NUIST, founded in 1960 as the Nanjing Institute of Meteorology."
        },
        "ja": "しんそくこうていだいがく"
      },
      {
        "zh": "卸甲甸",
        "en": "Xiejiadian",
        "py": "xiejiadian",
        "lat": 32.21685,
        "lng": 118.72537,
        "hist": {
          "zh": "相传西楚项羽曾在此卸甲休兵，故名。",
          "en": "Where Xiang Yu is said to have shed his armor and rested."
        },
        "ja": "かこうでん"
      },
      {
        "zh": "大厂",
        "en": "Dachang",
        "py": "dachang",
        "lat": 32.23109,
        "lng": 118.73499,
        "hist": {
          "zh": "近代著名的化工钢铁工业重镇，民国时已设镇。",
          "en": "The famed modern chemical-and-steel town, a town since the Republic."
        },
        "ja": "だいしょう"
      },
      {
        "zh": "葛塘",
        "en": "Getang",
        "py": "getang",
        "lat": 32.24665,
        "lng": 118.74852,
        "hist": {
          "zh": "江北老集镇，地名沿用。",
          "en": "An old Jiangbei market town."
        },
        "ja": "かつとう"
      },
      {
        "zh": "长芦",
        "en": "Changlu",
        "py": "changlu",
        "lat": 32.27571,
        "lng": 118.77151,
        "hist": {
          "zh": "古长芦镇，南朝古刹长芦寺故地。",
          "en": "Ancient Changlu, home of the Southern Dynasties' Changlu Temple."
        },
        "ja": "ちょうろ"
      },
      {
        "zh": "化工园",
        "en": "Huagongyuan",
        "py": "huagongyuan",
        "lat": 32.28757,
        "lng": 118.7804,
        "hist": {
          "zh": "南京化工园区，扬子石化等特大型企业所在地。",
          "en": "The Nanjing Chemical Industry Park, base of giants like Yangzi Petrochemical."
        },
        "ja": "かこうえん"
      },
      {
        "zh": "六合开发区",
        "en": "Luhe Development Zone",
        "py": "luhekaifaqu",
        "lat": 32.3073,
        "lng": 118.80011,
        "hist": {
          "zh": "六合经济开发区，江北产业新区。",
          "en": "The Luhe economic development zone, Jiangbei's industrial new area."
        },
        "ja": "りくごうかいはつく"
      },
      {
        "zh": "龙池",
        "en": "Longchi",
        "py": "longchi",
        "lat": 32.32133,
        "lng": 118.81533,
        "hist": {
          "zh": "六合龙池湖，所产『龙池鲫鱼』旧时负有盛名。",
          "en": "Longchi Lake, once famed for its crucian carp."
        },
        "ja": "りゅうち"
      },
      {
        "zh": "雄州",
        "en": "Xiongzhou",
        "py": "xiongzhou",
        "lat": 32.33665,
        "lng": 118.83169,
        "hist": {
          "zh": "六合古称雄州，南唐时曾置州，江北千年古镇。",
          "en": "Luhe's ancient name Xiongzhou — a prefecture as early as the Southern Tang."
        },
        "ja": "ゆうしゅう"
      },
      {
        "zh": "凤凰山公园",
        "en": "Fenghuangshan Park",
        "py": "fenghuangshangongyuan",
        "lat": 32.3492,
        "lng": 118.84006,
        "hist": {
          "zh": "六合城区山丘公园，登高可望老城。",
          "en": "The hilltop park overlooking Luhe's old town."
        },
        "ja": "ほうおうざんこうえん"
      },
      {
        "zh": "方州广场",
        "en": "Fangzhouguangchang",
        "py": "fangzhouguangchang",
        "lat": 32.36162,
        "lng": 118.84495,
        "hist": {
          "zh": "六合老城广场，地名与北周时曾设『方州』相关。",
          "en": "The old-town plaza named after the Fangzhou prefecture of Northern Zhou."
        },
        "ja": "ほうしゅうひろば"
      },
      {
        "zh": "沈桥",
        "en": "Shenqiao",
        "py": "shenqiao",
        "lat": 32.40222,
        "lng": 118.88685,
        "hist": {
          "zh": "沈桥村老地名。",
          "en": "The old Shenqiao village name."
        },
        "ja": "しんきょう"
      },
      {
        "zh": "八百桥",
        "en": "Babaiqiao",
        "py": "babaiqiao",
        "lat": 32.42938,
        "lng": 118.92819,
        "hist": {
          "zh": "六合北部古镇，以八百桥老街闻名。",
          "en": "An old market town in northern Luhe."
        },
        "ja": "はっぴゃくきょう"
      },
      {
        "zh": "金牛湖",
        "en": "Jinniuhu",
        "py": "jinniuhu",
        "lat": 32.46751,
        "lng": 118.9595,
        "hist": {
          "zh": "民歌《茉莉花》源歌《鲜花调》的采集地就在此一带，湖区号称『茉莉花故乡』。",
          "en": "Home of the folk song Jasmine Flower — its source tune was collected nearby."
        },
        "ja": "きんぎゅうこ"
      }
    ]
  },
  {
    "id": "S9",
    "num": "S9",
    "color": "#FFC600",
    "name": {
      "zh": "S9号线",
      "en": "Line S9",
      "ja": "S9号線"
    },
    "stations": [
      {
        "zh": "翔宇路南",
        "en": "Xiangyulunan",
        "py": "xiangyulunan",
        "lat": 31.75691,
        "lng": 118.82412,
        "hist": {
          "zh": "翔宇大道南段车站；S1、S9号线换乘站。",
          "en": "Southern Xiangyu Avenue; interchange of Lines S1 and S9."
        }
      },
      {
        "zh": "铜山",
        "en": "Tongshan",
        "py": "tongshan",
        "lat": 31.69821,
        "lng": 118.87654,
        "hist": {
          "zh": "横溪铜山老地名。",
          "en": "An old place name in the Hengji Tongshan area."
        }
      },
      {
        "zh": "石湫",
        "en": "Shiqiu",
        "py": "shiqiu",
        "lat": 31.64252,
        "lng": 118.90238,
        "hist": {
          "zh": "石臼湖畔古镇，影视基地所在。",
          "en": "An old town by Shijiu Lake, home to a film-studio base."
        }
      },
      {
        "zh": "明觉",
        "en": "Mingjue",
        "py": "mingjue",
        "lat": 31.54859,
        "lng": 118.89723,
        "hist": {
          "zh": "明觉寺老地名。",
          "en": "Named after the old Mingjue temple."
        }
      },
      {
        "zh": "团结圩",
        "en": "Tuanjiewei",
        "py": "tuanjiewei",
        "lat": 31.39798,
        "lng": 118.88282,
        "hist": {
          "zh": "石臼湖围垦圩区地名。",
          "en": "A name from the reclaimed polder fields of Shijiu Lake."
        }
      },
      {
        "zh": "高淳",
        "en": "Gaochun",
        "py": "gaochun",
        "lat": 31.34318,
        "lng": 118.8722,
        "hist": {
          "zh": "千年古邑，高淳老街闻名，螃蟹之乡。",
          "en": "An ancient county famed for its old street and hairy crabs."
        }
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = { NANJING_LINES };
