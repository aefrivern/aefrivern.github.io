/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","66f1f079194c9105386744178e0c8ad3"],["/about/index.html","54c2ade9107880677e7c6dda3815669c"],["/anime/index.html","74a8749c4dddeb21fc370ae04441d8dd"],["/archives/2022/11/index.html","b801314919d26be8e950a61c1c623550"],["/archives/2022/12/index.html","8a7c8bb7e8d90dcc5f884df65d334b2a"],["/archives/2022/index.html","6747a95c90e39277a9235b8cbdb59640"],["/archives/2022/page/2/index.html","37f58e7a92f54056657a4b92f3b7a135"],["/archives/2023/01/index.html","333e141605279046ff4ccc50398d547c"],["/archives/2023/02/index.html","95ede79700fed3ecfdf740298c7624a5"],["/archives/2023/03/index.html","ce4cd94d0f643fb67bad95e932164f6f"],["/archives/2023/04/index.html","f0824b9637e7a495d1c19054ca5e36ec"],["/archives/2023/04/page/2/index.html","a824e66165eab23116e71a21ba2283db"],["/archives/2023/04/page/3/index.html","81077cfd0f4b9c5b4f020f17eb55f816"],["/archives/2023/05/index.html","a36c37d61abcdd8c76732549cd60a969"],["/archives/2023/05/page/2/index.html","712b3f007f094586a0c75cfad10902e8"],["/archives/2023/06/index.html","972081ccd266257c93ee6af17e23e62e"],["/archives/2023/08/index.html","03a61c503e1eda1ee7e94c510108eea4"],["/archives/2023/09/index.html","25efd29700134c11c63e7a59ee15012c"],["/archives/2023/09/page/2/index.html","97e55275cf2e619dcfee993471e902da"],["/archives/2023/10/index.html","a2a0e3bf70fa09ba1cc116c8488ae267"],["/archives/2023/11/index.html","723c1a77fe4091560d24bc952a37ab1b"],["/archives/2023/12/index.html","34432bef493d4e0c775b2c18221db435"],["/archives/2023/index.html","10c689cdad7bcffcc537d5139962562a"],["/archives/2023/page/2/index.html","1ad785e2560c9e617776f5c75b5ba46d"],["/archives/2023/page/3/index.html","740f78cf56b5a6d6b311e8901161a6e8"],["/archives/2023/page/4/index.html","d98f25544676bb0e37fa772e9c1310c4"],["/archives/2023/page/5/index.html","3d6d30dc145855150192475addcdc1b9"],["/archives/2023/page/6/index.html","11041ecfc7dfe135c1261450a80fca76"],["/archives/2023/page/7/index.html","fa5ab603f7f72cdb5c6e7b781b56b4bc"],["/archives/2023/page/8/index.html","e896e38da4b80bf611857f88682b30ff"],["/archives/2023/page/9/index.html","5cfb3f572689c41c714f1134cd04b5c8"],["/archives/index.html","d1aef4377dffb6054ff211f621e0c997"],["/archives/page/10/index.html","788e20d1288d02cf7279cfd69cab3185"],["/archives/page/2/index.html","d6cda127eb2c373c47a7f78c4359b51e"],["/archives/page/3/index.html","0796e4b5a74c02861b9979b9a0bb7d40"],["/archives/page/4/index.html","001c8117ee97fe72671d73a63d1a11dc"],["/archives/page/5/index.html","e7376c48b231a48df0f3affae87f3540"],["/archives/page/6/index.html","48e852ab235ad036407f33a47fe01696"],["/archives/page/7/index.html","5cb8c7f8dc6e7145e3285a3cdd5b9248"],["/archives/page/8/index.html","7fd4f95843ac97679be878e9fa4e15dd"],["/archives/page/9/index.html","3173930bde396f9da39a6339d904c410"],["/categories/ACG杂谈/index.html","b089f3bc28504ebf3b201e7e2af55a9f"],["/categories/ACG杂谈/page/2/index.html","c8f35e0739a77e37cf698477a11de2d2"],["/categories/ACG杂谈/page/3/index.html","e81a34e82e6063ef68aa1a2ab2f4a8ce"],["/categories/index.html","1e3ab1d72ad89861bfa5b0d149fbe140"],["/categories/学习笔记/index.html","410cfd293440a468e8c24984b1c385d8"],["/categories/学习笔记/page/2/index.html","3911eaa71a76f24f8ec8fa752b7df00a"],["/categories/学习笔记/page/3/index.html","3100a5787b3142b7b44445d4efc01b56"],["/categories/工具/index.html","1a62f9fb1d8847405ef8a77d419d0765"],["/categories/工具/page/2/index.html","2c5bcbf3fc0d3ef0a4e3e72ba3f55ce1"],["/categories/游戏人生/index.html","c1e5bc5a099642612ea676514a8ffe64"],["/categories/游戏人生/page/2/index.html","c95db59c03e32c14bafb277e338dce4c"],["/categories/读书笔记/index.html","3c24e0a0e85da3eea1510458b2784b73"],["/categories/读书笔记/page/2/index.html","e6f4a5898aea6645d8bbdcaf757ffce5"],["/categories/闲言碎语/index.html","441ad516f809bf2d8fdaa0c0427cec3f"],["/census/index.html","918c2054bc666e4a1cf1cf78ef434c6a"],["/charts/index.html","130d0c01e148c11e6cf7fa69ad1b8b33"],["/comments/index.html","d2ad3490256cd1623e4bb84068130d3f"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","6f6f93cf71946997c122c2e368955310"],["/gallery/index.html","6a3ccff4bb27b7abe9d516257a5abad7"],["/gallery/wallpaper/index.html","29748883755230c2fe92be0d7d13cab3"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","15486cab67a6950fe8137f0d207b7893"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","f82fd5e3f079e9d3f70ce37293ab8b6d"],["/page/2/index.html","6e97c5dd935d774a71faa3f27a556cb6"],["/page/3/index.html","f9e5cb27f5d0acee615858d0f91c5aa1"],["/page/4/index.html","58d5d54025825cd93c7bebdf2cd1fd85"],["/page/5/index.html","57f7f0a5c9941d02efe5604b09ba460c"],["/page/6/index.html","db1c6fd497018235b27a43ca6cfd6edd"],["/page/7/index.html","96c641e63493108a08e8a81e83ab6dd4"],["/page/8/index.html","a265bff0bd8ed897799a92861c47f3ce"],["/posts/106331b4.html","58853a3890b3ec3d4a680a56ba38a6c9"],["/posts/1185a02e.html","b895fd1917f4772d2ab0b614399be8d7"],["/posts/12e06b11.html","c8fffd1902d933bfa550dae922727977"],["/posts/167c7c45.html","9cf0c57262ca9d1408fb9317e84a6f5f"],["/posts/1743dad6.html","cc7d38045497d3dd40edffb4cf8a30f0"],["/posts/175a8e1.html","5acb7b3d50f2fd0a8d0e7867225e4150"],["/posts/1be398e4.html","2cab123fd23e79f348db1870ce661c9b"],["/posts/1c5a0321.html","b8bc35c3cfb6a5967905adfeee355526"],["/posts/1c5b1e9c.html","0215bfc417d9930943c37b058261b0f1"],["/posts/1ec7973e.html","d512a5d7ad2ed6849488848dc04d47ba"],["/posts/1fb82448.html","7d8dfc8d4f9b5afd02ddab0487ebf9f6"],["/posts/21f18fd2.html","f007ed63e3d7f58ea1f742bd0a822a7c"],["/posts/29c507fa.html","028cd0ccd1dbc47cc93ac54e8a60526a"],["/posts/2f34eb00.html","69e7c2e95176e82ab731daa5ea7aed24"],["/posts/2f57a694.html","6c5480d88a9aab205492c9ecde88164b"],["/posts/374b54d5.html","4fb7b3f78b0612ab6c9cd70e1938f1ff"],["/posts/3871b764.html","f10387cc505245739c08116f65e1241b"],["/posts/3b308caa.html","32cc2fd281122d8590122079dda5cbbc"],["/posts/3c3cdb74.html","da72dee7b8890d954edda395e87bdcd6"],["/posts/41f65cde.html","55b1ae6e33d37a12d623c7ccd0352450"],["/posts/4208fd6c.html","35da1abfbf56cf418d9d7b3c18ae3e60"],["/posts/4392373e.html","21a8b97a4cd905dbc8551a65ed500c26"],["/posts/440ed920.html","d38bc7fd583bf295a377ef5fa2829460"],["/posts/4d2b51ac.html","a253efc99ca73ecac6838086aece3dff"],["/posts/4db1a52a.html","61516d9df780fcba09aa01e8748e2976"],["/posts/503ae89.html","19beb0380694bba7500c8d03bf76a2b7"],["/posts/518e2799.html","4a3956f2046a4a6ff2b5836135455a31"],["/posts/535fd087.html","eac9a70b7944cbe6211734389e7fb697"],["/posts/5923cba3.html","ef2b271806f5b9bcfe7869ad667acd9d"],["/posts/5c1bb6b8.html","9cf9d7061c464d850367e93e72dd3ef1"],["/posts/5dc45f0c.html","56db8a270849021224007e68b8f2d22f"],["/posts/5f2caa2c.html","9c09a31da9ae240258a98c62daeafeac"],["/posts/616be7b6.html","2b1270a5bc4eb24f61f62e6f3dc94e9c"],["/posts/62a1ec0c.html","fef6c50b1f376c739921e600fe3ad32d"],["/posts/69fb361e.html","aa75c20c9c498a9e6f5ec57fedcdaedf"],["/posts/6a8518ce.html","e788de302e54423a2c4c8a4f00829c33"],["/posts/70685119.html","2dccfffb02f85eea786e52db70e3d337"],["/posts/743db4aa.html","ce4f7750ac34496e7642af9f557f9ee6"],["/posts/7b67faab.html","620a18e62322eb64d66dcfe909298ef0"],["/posts/7b76be01.html","993f2b5565e6c374f9f71a8ecbc76a8e"],["/posts/7bff939e.html","3c08afce0fdc3163d7b04c70105d25f4"],["/posts/7cc4ca07.html","34fa26bca2bb77a1916332c624942d45"],["/posts/7d257210.html","0fb7be7084bf0bd69bc6c1d1329f75ec"],["/posts/7e6a5c94.html","3c2a70b2fd99cd40c0cd30cef53a9fb2"],["/posts/7ea0cbe4.html","8624ec19fb693c5fad40d8500e8fc722"],["/posts/7f382da2.html","9da47226a133b717a00a3c976ebad0d8"],["/posts/7f8d32f4.html","884b897fb6df80456f882eb2a1feb83d"],["/posts/8207aa48.html","2f2a8a369bc8a1e200339c1430b4ee3e"],["/posts/836ea9bd.html","7f5988e82172c03be6130d1b24f3ed90"],["/posts/84cae757.html","b0ec2eb8f92d7183fac0e349842b8954"],["/posts/88200036.html","b9d35370560679c4d698a05ad0d2b8fb"],["/posts/922fb64d.html","c69f24bf2bb4f88f1c7dc652344d5110"],["/posts/98332b29.html","319b8b122e16304d8a3c3cd07b28436f"],["/posts/9a1a736f.html","ad3d7e8e57a94a5fe9365f4713ed5a59"],["/posts/9addd0bb.html","4f06bce376fb9ddf232149d087356e72"],["/posts/9b44950b.html","b81a4e7f9b66e4fe269700f8f3b80b10"],["/posts/9ca149ab.html","b4805f0074c13956fe16f1d9bb22d842"],["/posts/9e4446bf.html","5042884afe87983f9a7d924341fd2099"],["/posts/a0271e58.html","ee20fdb55808b42e7323593e404283c3"],["/posts/a13c1dba.html","b0d30d47a283e7fd758a4126d155a60b"],["/posts/a1f2a4d4.html","f3161a869bb4fa3bc32e29debc217487"],["/posts/a5f300de.html","8b7a9abb21ed3f6d2aa865656375388c"],["/posts/a98766fe.html","a718e3ad66a56cdd26fcaf4a20603aca"],["/posts/a9f63847.html","f78281c091d1c480d804debce20673d7"],["/posts/ad31055e.html","47a2686a0f04179903587a4907bad0b9"],["/posts/adcd6e20.html","1744405a8a1401a2a6a497155d826ebf"],["/posts/b0fa4c58.html","2ecddfcd042027be531419a4d7ad8ac2"],["/posts/b1168675.html","57af443902b453ef93e7301c04e83e5d"],["/posts/b291b1dc.html","10541830a837cb8be6f251226e0018d3"],["/posts/b2feeab7.html","ce4fc46e99076f0aabcc7b3f91a01827"],["/posts/b6d66f1b.html","8f48058546b1e03829a6d4d733fed0b8"],["/posts/b7525d11.html","9e6f0a61ae26e489312a84c213271397"],["/posts/bb154b63.html","f5a2be6a0e99ce99f3b8f71c1b94c3c7"],["/posts/cc86a40d.html","d7d9f3ba1a2b8a8ba44925e6d520ffa9"],["/posts/d36531a7.html","34fe190faf153c879f8e9b88e6d33c62"],["/posts/d442e51a.html","ba08c148a045aff9afd0bd1c827a442b"],["/posts/d7fdf01f.html","1d155bc77c99a71aeea80539079f972e"],["/posts/d839b0e.html","1a4fa55e0e15d12f695782c7d82cc71e"],["/posts/dcdf88c8.html","ea4e4b7af42dc4a0a2a8774dd8cceb70"],["/posts/dd378ae0.html","45736a83d033c4ebbccb9b3ffadc3c21"],["/posts/e15be301.html","83f3105d75cf41c12c3242a68e2448c7"],["/posts/e2e4b4ce.html","a924d0c250bdf923bdd8010dcd913b0f"],["/posts/e35ef5bd.html","d50f14959dde2da21f77a08cd11b7433"],["/posts/e462ba83.html","2fa8137fc31d1235a0a1b7b5cbd8ad51"],["/posts/e53204e6.html","476726c8d0b04c70a2b221e9e78ad36d"],["/posts/e5cd9bbd.html","6c07a3f51615e52de1b4bffb3f804caf"],["/posts/e7a99a5e.html","d8b92c2c0b94ad4b564ad299756318ae"],["/posts/e9318100.html","4db8f32bb05ab82a891c2b5fc24bad40"],["/posts/ed52e6a0.html","bc987307ed33ef3ced0c4a2a9255cddd"],["/posts/ee0ac59a.html","501f1bd6f3344d77dca32b36a9b01077"],["/posts/f09c1ee5.html","2034865a07c5258e608bc9d5049022a6"],["/posts/f1252f66.html","a28cbacea2096cdf89103c970e29d363"],["/posts/f4af26a9.html","ea1d91e17dfc5d834e9e20510153149d"],["/posts/fa3cd62d.html","2b8c2faa71f198c944796855de7c4ed5"],["/posts/fb3794ef.html","91aaffa206da71417d6e5980c218552a"],["/posts/ffdfd6d4.html","55b3743e9308ff717bb3b08bcf1fa7f7"],["/private/index.html","fa7fe9b53065fe7fe2921de5bcdade41"],["/random/index.html","ed588dfec969a3fcb56a634f256e3fb0"],["/sw-register.js","d4adc2039b0a5699beb42291833c8f49"],["/tags/ACG/index.html","30b67611a7339ea8cce21f2b52a0b1e5"],["/tags/AIR/index.html","6cb7e2c9526a8ede722e519293863d0c"],["/tags/AliceSoft/index.html","ef65d3aa455e6d7df6b97ae2784b8848"],["/tags/Butterfly/index.html","70f09d37682ff90ccad4db8347494abe"],["/tags/C/index.html","0bd4f505193aef6add3abe1071f2c218"],["/tags/CLI/index.html","0930b77ab8d7caad0e1ba20842a80774"],["/tags/CMU/index.html","204cb1da4ee8c0f4702f7a0d24c7613c"],["/tags/Crash-Course/index.html","4fe60bbd863342ee8e6b6827adf1b83e"],["/tags/ETH-Zurich/index.html","77cdc34423bf47cfdb05c14189038318"],["/tags/Eushully/index.html","e62382a6f2f36a4b32a519625106dbc1"],["/tags/Everlasting-Summer/index.html","33de7093e5b307db6310bdcae241dc21"],["/tags/GDB/index.html","f1246bf6f394acd41fa5b3bba8a1c4fc"],["/tags/GRIS/index.html","55d08e9060d69dc01c082527e43fcceb"],["/tags/GUI/index.html","3a300957ca0bd81dad9b623caf1a3f1c"],["/tags/Git/index.html","5d98e4d66dc2f2ce0a0a21ca2253dd9d"],["/tags/HTML/index.html","cd63f9146fbf73cdfa2587fdada0c151"],["/tags/Haskell/index.html","28d5fabe158ebb46e8d8ca65bc94c6cc"],["/tags/Java/index.html","7b5a38c75e76742a72560ff88dfcd774"],["/tags/LaTeX/index.html","3ba1cd75d6322e3f871d14208c4da2b9"],["/tags/MIT/index.html","cdc24df05cc4070cb718f385d882b751"],["/tags/Markdown/index.html","c6d7e0675b989fea99946697e28c0a09"],["/tags/Mermaid/index.html","5a5c65308b73c3080808c4d81a0288d6"],["/tags/NTR/index.html","d62219f95609f04a0f2dc03582912af8"],["/tags/Pixar/index.html","12bca77bdd1c0a0f6d13bb1e68aecf87"],["/tags/Princeton/index.html","6fe488faa47d3dd65a0d1b1f4724929c"],["/tags/Python/index.html","d3c25c88caf6e969dcce4473fa8cbaa2"],["/tags/Qt/index.html","6dbd28cbf5d1ffba62b4c261b7855d46"],["/tags/R18/index.html","2c53c050311a4ee4136e3d85c0ec3ab5"],["/tags/RISC-V/index.html","da13eeaa6a563dded853a8e73b9aeece"],["/tags/Scheme/index.html","cca56ce59a35ca184c8f466212166cd2"],["/tags/Shell/index.html","09d7c5b6983f32c327c9c4ae4982643d"],["/tags/Stanford/index.html","8d7041f17d4ce80f217c5b355bd6eab3"],["/tags/UC-Berkeley/index.html","c0e152a577de9593a6e2ba642632cfca"],["/tags/University-of-Helsinki/index.html","537ec3d8521899837f2dfa2ccf9fb351"],["/tags/debug/index.html","26a68055cb6ee7120b68055daaa3660c"],["/tags/index.html","67c2817c6c24f3e10cbef56d03eee387"],["/tags/key/index.html","078179d8f5390b67297eaa0a2af0c375"],["/tags/web/index.html","dd9cc47908d0b8bd3be36e539da4d179"],["/tags/三国演义/index.html","238ade4394402427fb93d8bc20715fcf"],["/tags/丧尸/index.html","1894f1626cd21b05f1c4c51966da7610"],["/tags/京都动画/index.html","188607b1b5cdcc127a2b3f00d22a8359"],["/tags/京阿尼/index.html","57ee64eb7133971ab8b71066ec182574"],["/tags/体系结构/index.html","2a9191a060d54d0512852c5ef7cbc125"],["/tags/信号与系统/index.html","007c8f371489de0561fe6d8aeb434f5b"],["/tags/信息论/index.html","82b72e85ef05fb1773d65d77fd70f6aa"],["/tags/傲慢与偏见/index.html","7e2b852f8aa8f4001b1bce84d7799108"],["/tags/元稹/index.html","12ec7b57ba3498de3c940c7008834c6a"],["/tags/公路片/index.html","03e399660d720d7861e3eca8a1092fd1"],["/tags/兰斯/index.html","d5e66af346c9d161de85d22126ef6fb0"],["/tags/关于我转生变成史莱姆这档事/index.html","ce845c7b97dd5c6ccf56286300fc49df"],["/tags/冒险/index.html","86d900905576962baa8cbc942adba429"],["/tags/函数式编程/index.html","c539e4703d678d196ff7d26e51889b0f"],["/tags/刺客信条/index.html","1375080a02d58fa8a6286704f389d49a"],["/tags/卖肉/index.html","442a5771efb4a0df3082db963c3a4c6f"],["/tags/博客/index.html","44e8280fb305fe324084dff7b8801133"],["/tags/去月球/index.html","adc8a7383fcb880d2c4aec41075041cc"],["/tags/可汗学院/index.html","bfb6286a46500bfd5256d33d61657ef8"],["/tags/史诗/index.html","0f4b66c0b937ff0744fef544c129c8c0"],["/tags/吉卜力工作室/index.html","9943163e70af16aaf57e3cb0910f10aa"],["/tags/名侦探柯南/index.html","cef15f0bd8d13b811231838209673e9d"],["/tags/后宫/index.html","238462e7e7fad9390e9811f62f2d3545"],["/tags/咒术回战/index.html","b99242813e09b0aab5d0405892e45f45"],["/tags/哆啦A梦/index.html","51f04b822d71e8a871c731906f6cf93a"],["/tags/哈利波特/index.html","ae56e6b976eada3c4128cfc3990c6a0f"],["/tags/喜剧/index.html","8ac149dd566f7e9989237ef2ce800a86"],["/tags/喜羊羊与灰太狼/index.html","06083d32e8bcddd8c9c4a6a17723c045"],["/tags/四大名著/index.html","c4b1120d5b6d20dd297832dd2bde86fb"],["/tags/图表/index.html","80c782d03dde1a689844d338a0ed4bae"],["/tags/复变函数/index.html","a6ffd52cb4097e1996fbed1a7b222c1a"],["/tags/孔乙己/index.html","fbaf2c3434e7f3b96a7e48dc0faa948f"],["/tags/字符串/index.html","ecdf64f9502227276a2293c581002c6b"],["/tags/学园默示录/index.html","87d641322b96a5f6ee88af134db40e2d"],["/tags/寻找天堂/index.html","b40113df5c6d61e3a551bd7916c1b3a0"],["/tags/希伯来大学/index.html","b844c6ef30192379a8e74ea0046b33a9"],["/tags/异世界/index.html","47b0049e79e8c7f2af8961699ac63f80"],["/tags/微分方程/index.html","e483771d30cfcad65b82cb8cfcf7a00a"],["/tags/微积分/index.html","ecdb8dd5f3ae6249e7d2fdd4a1d2a60b"],["/tags/恋爱/index.html","c27c16c131d0ee746313dc6ce656faa8"],["/tags/情感/index.html","3c7d162dec3f3ea5583d25b3c9d24530"],["/tags/成为简奥斯汀/index.html","cc41ba01f8c5f70fccd4e7afbc6317a9"],["/tags/指环王/index.html","949bde3933cfd466c99ce7480a20c42d"],["/tags/搞笑/index.html","48d559047482a029c644abed90187c6a"],["/tags/教育/index.html","4fdae91259c1602e7f8a42371fa1dbb6"],["/tags/数据科学/index.html","f320741703a7a1e5fc8e4930a0ee2f87"],["/tags/数据结构/index.html","05551e271d90771810d7edea143f0d6f"],["/tags/数据结构与算法/index.html","91ec3dc397905d5144a0d959059d9cde"],["/tags/文字排版/index.html","fb63fce4e6ec6d2f60dc85e73521758c"],["/tags/文明VI/index.html","73bc5b64c6bacb79f821c775bd39f3b3"],["/tags/旅行/index.html","66ffbadb6e87474c942e1c632debbd5d"],["/tags/无彩限的怪灵世界/index.html","8fefc39d710572d56908011e257d8838"],["/tags/时间刺客/index.html","9c65679a8d9602d4b21cac3f842dd6ae"],["/tags/有生之年/index.html","733e75bc18cb2fe1d6c07d41ce24f112"],["/tags/李商隐/index.html","a8a3d8dc46bf9a0651d7e51e3c173dfa"],["/tags/李白/index.html","1741c1669027142b38886f58b0497cf3"],["/tags/李贺/index.html","f9ccca49616c4e016add00a096e4365c"],["/tags/杜甫/index.html","0de8ae7c12bf112ed9125f66762bb987"],["/tags/校园/index.html","320f4c3176af49bad97b2cf34f2799fe"],["/tags/概率论/index.html","8fc029b911783bcceb265294ef9dfd51"],["/tags/正则表达式/index.html","4d5a8940b1b031bad69e0947d64731b2"],["/tags/死亡/index.html","fdd5ca32a37ff2c1b07840c1d459031d"],["/tags/水仙/index.html","cea7a751057dc717e9b51fd5f1516ba3"],["/tags/治愈/index.html","08860330615aa91537b56d5ef5db3d29"],["/tags/烂尾/index.html","cef228109da14ba78d78e2c302f61809"],["/tags/热血/index.html","c50041e8970d08275cc2fa54abdad8c0"],["/tags/爱国/index.html","4f91a524b07dc3e4188142b8c4f24956"],["/tags/版本管理/index.html","cd72cfecbc51c9cb9fa2ada6fb32c1c4"],["/tags/玉子市场/index.html","186ad1f805afa12fdd2f59ff01b9139f"],["/tags/玉子爱情故事/index.html","d60967123accbee4a81738e3121562e3"],["/tags/王维/index.html","b979ecd388a22f8e39f2da7642f63f98"],["/tags/现实/index.html","04567d56edef613501d1d7ff4d4c5d1e"],["/tags/甘城光辉游乐园/index.html","866afaa736498ca1bbf7bd4795672ce3"],["/tags/白居易/index.html","b40246679642d4c3646a6a6d23281c30"],["/tags/白毛/index.html","e9cb2baf15b225f3f55b8f2f01916fe8"],["/tags/短篇小说/index.html","6f4b847b61ca3b61a763182a73a3833a"],["/tags/神话/index.html","5dfc7b1827bde13e94cf2a148e0d8436"],["/tags/离散数学/index.html","744d3408c7ba99253b58cb7d828f3ce1"],["/tags/种田流/index.html","250dfcf7fbcdda6b2e06f38c6e9f2615"],["/tags/空洞骑士/index.html","47eff5fd0fd80a6a6df56cc4ac4957eb"],["/tags/童年/index.html","83a6520d0c92c43350585741fc0e1d96"],["/tags/童话/index.html","265b68bf598dd611826588e9de0215a4"],["/tags/第九艺术/index.html","5a6f295d1c6303d5f8a9234271fb9f73"],["/tags/策略游戏/index.html","ce0107e0a1b004942cb4ff6eb920683d"],["/tags/简奥斯汀/index.html","0a29639c0635e20f7234af49bb3280b8"],["/tags/紫罗兰永恒花园/index.html","04fa2317b6ccae215884dac07ac686f4"],["/tags/纯爱/index.html","f0d2af27b774ef5ddebfe3322326faf1"],["/tags/纵使手残仍大爱/index.html","486e603249bfc2b4145b78971d464599"],["/tags/线性代数/index.html","ce25c7d57c0bf8064c6e94f639235a99"],["/tags/编码/index.html","66eb79e50bf817036c37d6d2ea436e0d"],["/tags/致郁/index.html","c050a2f6cd690407de5e167db4e1432d"],["/tags/苏联/index.html","2ec24f94949bae7e7fddacb9b46964b2"],["/tags/苏轼/index.html","d13f47c855a066ad2583261caa107492"],["/tags/英雄/index.html","9ac9b2139af3e6192da5d89df2762e63"],["/tags/计算机科学/index.html","8a946ceace86abb0ab3ff876f239e9b3"],["/tags/计算机系统/index.html","39b5741e8457ca5b5f14fad67de9c611"],["/tags/词中之龙/index.html","a1e7700214b5f7c6d82c152e4798c7ce"],["/tags/诗仙/index.html","1e6cf54e844808b8e0af9b600c5bc778"],["/tags/诗佛/index.html","ede077c0d93b9926024532be255b8d92"],["/tags/诗圣/index.html","aa5112ce2228956c719fce87fff543f6"],["/tags/诗词/index.html","08d79b20076dbcacf264ec2bc87df4a0"],["/tags/诗鬼/index.html","d34821227394710f6a58968bab1872c4"],["/tags/读书/index.html","fc975bcea9725d16fa97f17d9ceb64d4"],["/tags/豪放/index.html","d61095a2c2e9d2be69e05999a75b2218"],["/tags/跳跃/index.html","802e8f8fa09cafe4cd34d7140220d207"],["/tags/辛弃疾/index.html","3c61a04e87f2b9a53d17e07a91d00421"],["/tags/运动/index.html","ffa1bdaaf4b93ac52d1b32bec7afea72"],["/tags/钉宫/index.html","c756fd328f777e914087cd0a6e467e7a"],["/tags/银河战士恶魔城/index.html","0e7d98f9a52b445c71a2f3c9b16a2c5c"],["/tags/陆游/index.html","d12621a79f672b9eab0c7f0427fb7fdc"],["/tags/零之使魔/index.html","94bfad5c94c82ff374d52764cf93dc10"],["/tags/霍比特人/index.html","0619a11081413b41d9f77a1aa5915dbc"],["/tags/飞屋环游记/index.html","f4ba28a7c05875a92f3bfdb167ee21ed"],["/tags/魔戒/index.html","788839b40ec2081fc6f14190a3106235"],["/tags/魔法少女小圆/index.html","88c2dff7e2df0bde78081a2604a90464"],["/tags/鲁迅/index.html","85729215f7c545ee07cd4bc24577f142"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"npm.elemecdn.com"});





/* eslint-enable */
