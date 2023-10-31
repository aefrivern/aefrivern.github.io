/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","048066ff3dad88ae6d4dd3fa363e3c2d"],["/about/index.html","2440495998c21d2408ac072f0ff7e6a4"],["/anime/index.html","d4fc2a7eeb4a2dad942a5df902f087b6"],["/archives/2022/11/index.html","3e0d7f3c72246f62dc1c48600029df67"],["/archives/2022/12/index.html","27d6e6dc6967942e7997d5baf7b20621"],["/archives/2022/index.html","fee9def4487ac72aa483563609b9c62a"],["/archives/2022/page/2/index.html","379456f3151e865b069e05b8fcc4342c"],["/archives/2023/01/index.html","21b2db29fdf25bd808d7962a40e911d8"],["/archives/2023/02/index.html","8fc06ee11e238e294cafb4e7de0dd1a7"],["/archives/2023/03/index.html","2912c4c1b11c8d8e35fdb8007edfb36f"],["/archives/2023/04/index.html","0590946df77fb6600669123fa9f351fa"],["/archives/2023/04/page/2/index.html","aeb0e0b60e8cedaa2fb961cd03faa628"],["/archives/2023/04/page/3/index.html","196709ab01dcc5ec355bfec240f7b7fe"],["/archives/2023/05/index.html","d13e8f8f10b75f95b601fde4d5df5067"],["/archives/2023/05/page/2/index.html","f80a1298f9c74b3e471f2bca7acb3bfb"],["/archives/2023/06/index.html","9ecebc69d883771abae71e1afb2ea02b"],["/archives/2023/08/index.html","b85b5088bd8c49d429942f9191e25fcd"],["/archives/2023/09/index.html","856fd9f66fe50b5e876bd947216c8fc3"],["/archives/2023/09/page/2/index.html","e244b0883a94f7280c0b140353810c86"],["/archives/2023/10/index.html","d38de5b20e8b4c32b95d72f31a16d719"],["/archives/2023/index.html","db56d41326166a36a155a838043adfe5"],["/archives/2023/page/2/index.html","58d72bf61fb2a3665b0c28e0c878cd55"],["/archives/2023/page/3/index.html","a7c4e716c1afd7a1c287108ec7dcc7db"],["/archives/2023/page/4/index.html","dafe9c84e54eb1885a9273bd4ec90f79"],["/archives/2023/page/5/index.html","7c29fece7d01d3add8cfdf33124ad949"],["/archives/2023/page/6/index.html","f3e04b9603b8ec7e713b82cb034d1deb"],["/archives/2023/page/7/index.html","e7f4374cf084e510465d352346d21be6"],["/archives/2023/page/8/index.html","a2394cd8098b1ca842d11d1b00ce4480"],["/archives/index.html","04f5f89051e7d1f51a3f84dbaff2a8e3"],["/archives/page/10/index.html","398f3e8714efc5ce188f4ded21a24b1c"],["/archives/page/2/index.html","0edb50f430045bc7d4179fab9a68910a"],["/archives/page/3/index.html","e4e57ecc75287d8290b65ad8ff421ef1"],["/archives/page/4/index.html","40539688b70aaa8868192b0e7cbdf32a"],["/archives/page/5/index.html","6576a97c2bc1299232c4c5b5ff2dd273"],["/archives/page/6/index.html","21c6444789c56c3fa0ebc15b3021ba87"],["/archives/page/7/index.html","26dd9c93563b3b8cc7220a1f1fa1665b"],["/archives/page/8/index.html","d398c57a0b96ea593ec880ed0a3a51e7"],["/archives/page/9/index.html","031e010ff042ff53857b43d4d490196f"],["/categories/ACG杂谈/index.html","87528752e3c0ac279a8e8867e3d1677c"],["/categories/ACG杂谈/page/2/index.html","5c0ea96060c9257e02709098e9746f55"],["/categories/ACG杂谈/page/3/index.html","30a57739a8e5ec886013dd1ad85c361b"],["/categories/index.html","8906b4868405023e465c6e10c724c1a2"],["/categories/学习笔记/index.html","9092a6d7584fb25c594f00eb759e79aa"],["/categories/学习笔记/page/2/index.html","e7e821bd7d41f8afd43b7fc766598ae5"],["/categories/学习笔记/page/3/index.html","18f9fee4ec6ee61993e618aac6d39c52"],["/categories/工具/index.html","2bd29ae6a21f7036bfad1b9a8c9420ae"],["/categories/工具/page/2/index.html","aa695be965cbb643d62225b27774b0e0"],["/categories/游戏人生/index.html","61f91704360ed7c1c606c0091eb9b8b2"],["/categories/游戏人生/page/2/index.html","b72307d40a2e41790153ba7c852da578"],["/categories/读书笔记/index.html","cbc0206207bf31fb47b9207a1792afbf"],["/categories/读书笔记/page/2/index.html","d0bc9f16a3916cffd05d2c24d9cae7f7"],["/categories/闲言碎语/index.html","95d2bb5b1014b1e918ff9c1c8527a02a"],["/census/index.html","cb976d4486781c1639a6661f72bc1ef6"],["/charts/index.html","d02332c08d06b01bcba91ad660ee535a"],["/comments/index.html","3416513fa10c86c68581835b9d4c100c"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","56d87e77639c89d78136d3f2189fade6"],["/gallery/index.html","8fe059b4fbba05e9d11560668743c65d"],["/gallery/wallpaper/index.html","b55d4c3d6be41eb8e2de9697f44a3437"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9b7288772ff8a1fbe2d6d59c93b751f9"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","685a3e5bed159937752ffbab2dcf9775"],["/page/2/index.html","913bd6a7e9c09401fb8a620c979fbed3"],["/page/3/index.html","8a42b607878fd897e05532e4eeb4354c"],["/page/4/index.html","b25a9fc7566e79013b505d50b9191806"],["/page/5/index.html","0fdd76cbd276ff848e92c431c27df56b"],["/page/6/index.html","77bd3b51c03fe5b5f4694b5762787204"],["/page/7/index.html","74fd042c33c59613cd3ec365455f49f8"],["/page/8/index.html","811842a073c78a65d926cbe1a5f77634"],["/posts/106331b4.html","8c5ef733a25288b1bc368d04ff1dedba"],["/posts/1185a02e.html","8551179ad3fb897410b6bc1cfd1f23ae"],["/posts/167c7c45.html","1d3809ee2274a9d1764cf84e1656d62f"],["/posts/1743dad6.html","ead92f62c9694b1cba420d6ed98b87af"],["/posts/175a8e1.html","b8a871d8be723031bdd15ea54d6933e6"],["/posts/1be398e4.html","27d23f0a460801c73abfd1f0c24de5b4"],["/posts/1c5a0321.html","ea77d60730173f8a256eed67b888a6d1"],["/posts/1c5b1e9c.html","396ca1b3833a9840dc3064c6e9c74bd3"],["/posts/1ec7973e.html","98de0946cdd6e8309c65d126ce5785b8"],["/posts/1fb82448.html","f95a2ef7c9935373bd70768ecc09c876"],["/posts/21f18fd2.html","0b9ab646b5248bfd4af4061b74c66490"],["/posts/29c507fa.html","59583738e4fd9c4555a445e2c11681e1"],["/posts/2f34eb00.html","eab19d6710a0d769be745a35c818a9cf"],["/posts/2f57a694.html","b832a71a4593fa7b29f55964807fe134"],["/posts/374b54d5.html","0af8ae78189f955ec6480be315a2105d"],["/posts/3871b764.html","a7eecd58877fc4413b882242aa967952"],["/posts/3b308caa.html","2cc90fce38c522d0396d47ffec617de9"],["/posts/3c3cdb74.html","7e4e7a5336fe75157e9a27be22ed03f6"],["/posts/41f65cde.html","d469cda12e9708425b953363969a5bfd"],["/posts/4208fd6c.html","acc067ba444d30c5929d8d533f095671"],["/posts/4392373e.html","749d3a1606b76f0add62f7ea8355ff77"],["/posts/440ed920.html","90c1c05305eef686416f8fe45cb0e892"],["/posts/4d2b51ac.html","3537619c6112217362c3744bb91e7832"],["/posts/4db1a52a.html","27dfcb69fb053e0135208605e83e563c"],["/posts/503ae89.html","16bbc5d7d39844f32cc2fa64faefb3aa"],["/posts/518e2799.html","0220c17ff495a1e0d50bf138a7b1d6cb"],["/posts/535fd087.html","0e158db803a92de27e3efb9f6527c8dc"],["/posts/5923cba3.html","94f6a335a2a235f5695be4df5688e6b3"],["/posts/5c1bb6b8.html","82172f25ca7bf557c21f9ae16579e746"],["/posts/5dc45f0c.html","7eeed916166ba801de375e683d1aa6cc"],["/posts/5f2caa2c.html","c064db6c7b3ca96450215079cf8e7bb5"],["/posts/616be7b6.html","6a0f8742128660456e8db8ba6299e2b9"],["/posts/62a1ec0c.html","59dc709dec042c098341b5a7d600fd40"],["/posts/69fb361e.html","c50c18260262e7ef449cd8f5c113c35c"],["/posts/6a8518ce.html","5a2a9004d167201423f1df8ea2127347"],["/posts/70685119.html","bf4de70bdeadeb0967eb28da6026583f"],["/posts/743db4aa.html","2ee74b8e5ac6e4aad35f13f57ee95d1a"],["/posts/7b67faab.html","38f30bee2c94b20da1200de533d5ce96"],["/posts/7b76be01.html","54d1a4d704b5fd85be8cbf1aeb762d79"],["/posts/7bff939e.html","5a937863b8a634095ceeb976ac6fe234"],["/posts/7cc4ca07.html","8d7380cff50119141d601263c847676c"],["/posts/7d257210.html","d3dda251aa3c082f0d01c2c67c42f7ba"],["/posts/7e6a5c94.html","bbe6d4410f0f4223ba92378aa17d1682"],["/posts/7ea0cbe4.html","c97245788379e2ed3f20f3cd20e158dc"],["/posts/7f382da2.html","7e6d93a43fb14fa5cfe0300a3ef46f30"],["/posts/8207aa48.html","7c0b27f41d3e499607f29b3359ce9bea"],["/posts/836ea9bd.html","e09b228e55fc62d3e1e9dd50ad10abb4"],["/posts/84cae757.html","2683430cb18cd4cdde637d3e529c9b52"],["/posts/88200036.html","206b1baa12dfc405fe5715caf98975c5"],["/posts/922fb64d.html","fdd0a1b846f7eff11c48d81b6997e36f"],["/posts/98332b29.html","777c6cfd45ade0e22a9cdf25adb9ea58"],["/posts/9a1a736f.html","1d585cdf9eca9d6cb9d9dc10f8fb58ab"],["/posts/9addd0bb.html","869be39e52b1bdd1aa559dbea206e41f"],["/posts/9b44950b.html","2f91014620053129f1d8e8ea7b6be707"],["/posts/9ca149ab.html","8d210091bc3f917b821e5c49061544ca"],["/posts/9e4446bf.html","fdbbf69c38ea057c855a0176bd051d01"],["/posts/a0271e58.html","0e5ca3bafc4b46cc01db5a82d61212fe"],["/posts/a13c1dba.html","896b4ef0788c32f78d6518ab7f5dd20f"],["/posts/a1f2a4d4.html","61da4e3e433d183e728f13e923a2a1f0"],["/posts/a5f300de.html","c4c7969e3506184190d16fa3a5e9b5b0"],["/posts/a98766fe.html","421d1e316e2e288b1c3cbcb14fbee685"],["/posts/a9f63847.html","502a30c90a67e1b115f3f508b5141d79"],["/posts/ad31055e.html","5a8b6d0dabda9fda0dc90711f1c9f9ad"],["/posts/adcd6e20.html","a3bfaeb13a6ef2db122daf2160a0eef0"],["/posts/b0fa4c58.html","576e0a5fb49eb011e3a64a536987808b"],["/posts/b1168675.html","3abe3a941b27ca93ac0d5890ee012189"],["/posts/b2feeab7.html","c2697ab6ed3be4453b14dd729f344351"],["/posts/b6d66f1b.html","3face0f7215a8995912a0e0d7c4dd88e"],["/posts/b7525d11.html","080b81bc8aff254bc00acaf6b8a7558e"],["/posts/bb154b63.html","8bf76896f5d47d14a324154b949638c9"],["/posts/cc86a40d.html","737a5fbce28b026a7fb6c1bc391fd275"],["/posts/d36531a7.html","a99a8e2f1c129ea791e4ff03579fa2d3"],["/posts/d442e51a.html","0f6ac618cae07c97ebb02cc1b637bf96"],["/posts/d7fdf01f.html","a526e03dd79fc423cf51957d8dd223d4"],["/posts/d839b0e.html","8324e52076ac483ea38742e89e54eef4"],["/posts/dcdf88c8.html","a9bab21f1e8ccf760df2b63b6d54d6b7"],["/posts/dd378ae0.html","21f3d31da72ddcf09f40a3e0398d4473"],["/posts/e15be301.html","976e155990e8df457ea23aae507190cb"],["/posts/e2e4b4ce.html","da2103dcef876dd942e4dbd1bc204815"],["/posts/e35ef5bd.html","6d5bc2d0c520c514ecb2e2480ed172da"],["/posts/e462ba83.html","01c2fd9cdb65377f3cc78a8abe1e8542"],["/posts/e53204e6.html","a2d64c7ab6f1d22d59e6c8adfeaba81d"],["/posts/e5cd9bbd.html","58402c5fde21bd163f6d8a13df88c52a"],["/posts/e7a99a5e.html","f29c320b04e9d6bf2a28d4e8ec532af6"],["/posts/e9318100.html","7484144618d41fca2c610b954f316591"],["/posts/ed52e6a0.html","33e2724d9d7fd9d20998cf95c6d9e6cd"],["/posts/ee0ac59a.html","8654867e0defd3147069fea369d91ecc"],["/posts/f09c1ee5.html","9da0e3e6341a1af840a10d98c727ce18"],["/posts/f1252f66.html","09884a7bdeb6de86d90b7f63e772f532"],["/posts/f4af26a9.html","c7f81e37d2752e58eff1623c6215879b"],["/posts/fa3cd62d.html","a8497ec8614e946e2da872118ea485db"],["/posts/fb3794ef.html","59aec75435df79830f482a158b1df5b8"],["/posts/ffdfd6d4.html","3bbde9db3effb434ff5d60684da48b1e"],["/private/index.html","b2969d4ab7bb4ba56a4a165ff08e3005"],["/random/index.html","3bbde6d2f1e9ba8e19f87030a8648490"],["/sw-register.js","3e0807e37f5ec17537c9fbacccf3cdae"],["/tags/ACG/index.html","815756d931c3b9d5161c34a35cc22f42"],["/tags/AIR/index.html","ccaee1d21145f9682742fee5b055f958"],["/tags/AliceSoft/index.html","ca16b41d24267342648d873be52d6200"],["/tags/Butterfly/index.html","de141bc452b6496c153eec7ef31f8e84"],["/tags/C/index.html","b7f75068b556ea1c3800b9a1bc374d4f"],["/tags/CMU/index.html","2add46732f02dfe4635c56e57c516634"],["/tags/Crash-Course/index.html","a58cdc75e34e2255326dc44b27a33f04"],["/tags/ETH-Zurich/index.html","e883d94a88cb641f594802eb53363a81"],["/tags/Eushully/index.html","a36e0de172d5fda5a0a54915ffdc555d"],["/tags/Everlasting-Summer/index.html","b3c3d52c598178a140d73ecc765e1dac"],["/tags/GDB/index.html","cfd83e83acd6f6f4966cbde393330a67"],["/tags/GRIS/index.html","f0ca2573328a9a88f85a99a42cb77be5"],["/tags/GUI/index.html","6bf58c525077591020d9d209d895026a"],["/tags/Git/index.html","b0d192ef095185e1bfecfebad68a3b8c"],["/tags/HTML/index.html","5aa3124b4d901aa8fff5ee0fa856a189"],["/tags/Haskell/index.html","766a4ab26e6c0255c92a6f5c9900d754"],["/tags/Java/index.html","5669acaa4f7d875e284b7dbb02800fdd"],["/tags/LaTeX/index.html","925fd31e89d35d26af34a2bebfd9ed22"],["/tags/MIT/index.html","e4d3e5b2f377d6a5191b375d6b32c678"],["/tags/Markdown/index.html","60e58b4759cc29ca10a61be694bb6057"],["/tags/Mermaid/index.html","7f23b89dce34c9b756a1ffb44a1d3b6d"],["/tags/NTR/index.html","e6b04df8305b64f03949e80b82707596"],["/tags/Pixar/index.html","4115167d24d8974844d52b354e00b2aa"],["/tags/Princeton/index.html","c18d16c0e291b95846ad6b2ab6e711c9"],["/tags/Python/index.html","1ae49a8e6d5a57d6e3e99c0a105e5a63"],["/tags/Qt/index.html","faed207145e1bacdfb03b28842dd3a18"],["/tags/R18/index.html","da80aef8b10af7e1fc8fd5d00f88f357"],["/tags/RISC-V/index.html","85e244e177cc4e2249c090dff59933e8"],["/tags/Scheme/index.html","71a75c485a89b247277ed3c83d367565"],["/tags/Stanford/index.html","26f8e2ffd91119dc93611ca803cc21b8"],["/tags/UC-Berkeley/index.html","0aebdcbf68934cbf909349b366003921"],["/tags/University-of-Helsinki/index.html","10809d1124eabfa7e6520ee3c35e2f1b"],["/tags/debug/index.html","bf5cd7ebf5656425c0f02ad7bd66d309"],["/tags/index.html","c71c0e0f25543a0c3042f4b3d6c18956"],["/tags/key/index.html","dfcc79c0b8bd60e210201edd7d8af9f5"],["/tags/web/index.html","1b2a64b1ab24c7d71d2062f04414c0af"],["/tags/三国演义/index.html","a037bedc9b9ddb4ab9a928a15a64f6f3"],["/tags/丧尸/index.html","43283437649bbe4525fa9aac1ef39efc"],["/tags/京都动画/index.html","594989b4c6a9bffc3e7fd8a173d2cbc3"],["/tags/京阿尼/index.html","8fab35954a78882c063617934ccd2518"],["/tags/体系结构/index.html","de3bdd496aad40a130e22dfe9feb6219"],["/tags/信息论/index.html","09589bc0a763822a2cffd67dea8485cf"],["/tags/元稹/index.html","919380c6c64fb46812b9110faac5fb14"],["/tags/公路片/index.html","93262939023ae9a3d44471bd40a2996a"],["/tags/兰斯/index.html","ea54650050b8ecfd710408d7be2853e4"],["/tags/关于我转生变成史莱姆这档事/index.html","ac99dc572643e5140d33e2104ec1808c"],["/tags/冒险/index.html","40ee91ac2581e8f6362fe4b0d0f13a40"],["/tags/函数式编程/index.html","bdb5539eea5fa31d7f444412392feb5a"],["/tags/刺客信条/index.html","33d228c6145801e8f27c7ed18fc9c9ac"],["/tags/卖肉/index.html","72810a06dbfa173c96ce2defb8696328"],["/tags/博客/index.html","6b377367d44f33ecc7119bff8040659d"],["/tags/去月球/index.html","dda182b6a054ae6aa3ca1ba50428c02b"],["/tags/可汗学院/index.html","4a97268109cd53c45f1406e5237071a7"],["/tags/史诗/index.html","1db3094e5f1f4f48b442383868698f33"],["/tags/吉卜力工作室/index.html","93e78351d890208e746d3670cefc12b2"],["/tags/名侦探柯南/index.html","607c036db235a7eba20a343dfa7d7580"],["/tags/后宫/index.html","317f209855252f22a46b06324117f7e4"],["/tags/咒术回战/index.html","ace39a47bdc0edcc5bd332af353745f8"],["/tags/哆啦A梦/index.html","f424c6f2a2285f107125788d6d178edd"],["/tags/哈利波特/index.html","0c3466ef2ed2316a3a836557940ea0fa"],["/tags/喜剧/index.html","712922f56f4d86321edc38075cfdf15e"],["/tags/喜羊羊与灰太狼/index.html","654879fbc4fa84742b186d271b234ab7"],["/tags/四大名著/index.html","edd5af22d9d0a46c76c06315ec23aca7"],["/tags/图表/index.html","50326d1f29d5c880b7892b08f5d8a52e"],["/tags/复变函数/index.html","e33394e7257edf7304d2f9beefb17234"],["/tags/孔乙己/index.html","49a33857c99d489543cb7ae38b6312de"],["/tags/字符串/index.html","d31e9baad627dc602a11ae3d0e03a562"],["/tags/学园默示录/index.html","8b00ce41a5d8b60950a7657c2542dfc7"],["/tags/寻找天堂/index.html","2ddc22700851efb6540fa5fdc1ca25c8"],["/tags/希伯来大学/index.html","464e40cced185cc80c8b15747cab577c"],["/tags/异世界/index.html","a76c21ea961d8c3403fb03a9a8f8eb14"],["/tags/微分方程/index.html","776321b1faafff9c83984f0a75408f96"],["/tags/微积分/index.html","f8a678797b8444285bce9c3b03a70635"],["/tags/恋爱/index.html","a6171cd8183d7d30d0f87c656d690dc9"],["/tags/情感/index.html","a65c9aa6ab21570c613244511f0fd0f6"],["/tags/指环王/index.html","f9a360c890966213cec8757d1980a97a"],["/tags/搞笑/index.html","c9f7a2b42ce98e3d5e9e59327ba614d3"],["/tags/教育/index.html","85da103e98e053061eaa554d502a3015"],["/tags/数据科学/index.html","de6a1ab5162b69c78b4e4923877f1260"],["/tags/数据结构/index.html","483dbeea848d568668daaa408b122c99"],["/tags/数据结构与算法/index.html","5fc0620a236438f3cced4cdb832c8eb2"],["/tags/文字排版/index.html","557b1957ed2417bbdcd1ede1d210503f"],["/tags/文明VI/index.html","c52c7feddf073627a7d97a2b9643db76"],["/tags/旅行/index.html","fb528d90ac31e2f53da47bbaf395b48f"],["/tags/无彩限的怪灵世界/index.html","55334afc9448165beefa1916948deb45"],["/tags/时间刺客/index.html","423f998eafd74c8bf800afc015c0b188"],["/tags/有生之年/index.html","3773d11ce299fc7e980737d92b69893d"],["/tags/李商隐/index.html","50edd312929196cd5e4d2ef05f713889"],["/tags/李白/index.html","8504c69c54182050599d728b6994339e"],["/tags/李贺/index.html","35aa07d11fb7746ca7208dcbd9b26fec"],["/tags/杜甫/index.html","4481e52e7696157f729a4968c9de271e"],["/tags/校园/index.html","ee7d04b9d1897bee3cff6eff00350a84"],["/tags/概率论/index.html","9c4d8c8066ce1dbb3e1127b17bed4718"],["/tags/正则表达式/index.html","a853a5aeeea8739070288d42ccc22958"],["/tags/死亡/index.html","966dc2392585d0ef9889fc4a4ad9441a"],["/tags/水仙/index.html","4a99ac7004dd69946e330b655f6bd88b"],["/tags/治愈/index.html","117db0c22deaf3771ca25ce39ecca383"],["/tags/烂尾/index.html","1603832aa1a2f091d69dec79f26101e0"],["/tags/热血/index.html","9e49e6218d513dc4a3306f7d147400c9"],["/tags/爱国/index.html","86ab18359b40e5ef9570980fa73db4b5"],["/tags/版本管理/index.html","cfccf264cb553f51f1e1caa7d3d23663"],["/tags/玉子市场/index.html","5c42c732a71bc38822fb2dae8242143b"],["/tags/玉子爱情故事/index.html","2048a954904724c45521577943c3d684"],["/tags/王维/index.html","e01b860a4627da12e2a94c8f0cc9575b"],["/tags/现实/index.html","6ec1dc6b49c08b2068004cc81c08c087"],["/tags/甘城光辉游乐园/index.html","5f42f81b5666a845fe0dc41686f1a044"],["/tags/白居易/index.html","3b9c3f89f032c73d8f0eafbc4a3955d9"],["/tags/白毛/index.html","cab5ba9b44801bca53c87865e2d37988"],["/tags/短篇小说/index.html","683fd610ad8ac321e854edfd4e316f14"],["/tags/神话/index.html","0ff7771a894ce988db78b3b1a33b6130"],["/tags/离散数学/index.html","adbe6a0d41acd8f5d7dc85fc846dddd2"],["/tags/种田流/index.html","b77c16dae3dfbe57ae8dcb95162fe832"],["/tags/空洞骑士/index.html","439d4b6ef73c73ab72efbe3a88c01371"],["/tags/童年/index.html","e4edb17a6d58d2cba55ff72d16f64dfb"],["/tags/童话/index.html","8068139d0c2fbe5fab3d254e5f84d393"],["/tags/第九艺术/index.html","cb163ada707eab56962a0e40ad94dc83"],["/tags/策略游戏/index.html","399653ba07f8b5671626b83066636cc6"],["/tags/紫罗兰永恒花园/index.html","befb1735e193c80851fb4ae14fb60d36"],["/tags/纯爱/index.html","3ef42690f5bcdf30f4feea58c485c490"],["/tags/纵使手残仍大爱/index.html","0a04f9bf974095ec51488100bf01162d"],["/tags/线性代数/index.html","33346115025d2396d32fde728f64ecd2"],["/tags/编码/index.html","28a1637d8aeef7a89aa272bd10f3f9a0"],["/tags/致郁/index.html","5e005fd74b31e6e53ae0404478b2f7d7"],["/tags/苏联/index.html","7915408d88d08fb8ea8ede0e632a1d9d"],["/tags/苏轼/index.html","94fa0f88415d4b00932341053161e1b3"],["/tags/英雄/index.html","0b743c0b7ebfdb53c05af93baaadc3e5"],["/tags/计算机科学/index.html","83853fe7edeaf1ec94042209d8ff013c"],["/tags/计算机系统/index.html","d711a69fd50bcf8953d646ac584eaf50"],["/tags/词中之龙/index.html","dfc3a84a69a0fb102ed31cf87a5e10dc"],["/tags/诗仙/index.html","9b166fc80114e21df1b5fa8ec0f42101"],["/tags/诗佛/index.html","e1f56e268787e60552cb53dfac1b62fd"],["/tags/诗圣/index.html","46a0e3aeace15a1fc83badc6b49867e9"],["/tags/诗词/index.html","58673117a091a1b741b3a4027c932c8b"],["/tags/诗鬼/index.html","e6bcf00c1d62ccb82834a3d394c6edf5"],["/tags/读书/index.html","4148186cba82863a8030e40d53937b33"],["/tags/豪放/index.html","f0162b635e3fbb1cbd45f60503b01196"],["/tags/跳跃/index.html","1fe9d984674640baf0be2d097637d1b6"],["/tags/辛弃疾/index.html","95935cc319fe099395d72486eff56cbc"],["/tags/运动/index.html","36b86843c61e75e49f1baa346c09be84"],["/tags/钉宫/index.html","a212513b34fe9e652e8c55c1edd8cb91"],["/tags/银河战士恶魔城/index.html","dc3698a822f2a5d67d2124511ce9fc5b"],["/tags/陆游/index.html","cefd1052cbc58adff6fc1bc00deee92b"],["/tags/零之使魔/index.html","9db322c0c58e85a9fda36ad8e4b2f9c6"],["/tags/霍比特人/index.html","194fb7926705d53d473b339bca99a65a"],["/tags/飞屋环游记/index.html","62f33a960a359b80dcfe4f433e636722"],["/tags/魔戒/index.html","0631b27b82c4a81bc20f0db52460b895"],["/tags/魔法少女小圆/index.html","a078cb7f0d0d9cb11871934e2284935f"],["/tags/鲁迅/index.html","56f28d5a482bff216e579ab0e753afa2"]];
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
