/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e5e9568a2928a4069e82bf480e736928"],["/about/index.html","d142b28e2057cb664bc703eda7771e6e"],["/anime/index.html","10007e74fa82fbd128324f1e14d44845"],["/archives/2022/11/index.html","79f9d207ece55c142c0e3efbb3494e93"],["/archives/2022/12/index.html","96a6fc4b60df68d9d5c6487717a6409a"],["/archives/2022/index.html","f79dfc6a67c5c3455db22c570676ccd3"],["/archives/2022/page/2/index.html","f2daa250c9d01be054a1d6623de05d4f"],["/archives/2023/01/index.html","ac7a6375501cb378325bc7b0ff182aea"],["/archives/2023/02/index.html","5f2b16dc7e639b89b00b618b3f050659"],["/archives/2023/03/index.html","e56214b21324f48757908cdc10d56e2b"],["/archives/2023/04/index.html","264cb7e76978e1ab2e9b2ec076edff84"],["/archives/2023/04/page/2/index.html","d4414b3f138c1b1eadd89c710cb2091f"],["/archives/2023/04/page/3/index.html","7810b0b54e3882e81afed523a6a14b87"],["/archives/2023/05/index.html","aaead28f8e6b8f73754949c67d4287a3"],["/archives/2023/05/page/2/index.html","aff78bef46e95978d3a715de570ea07f"],["/archives/2023/06/index.html","5483439c2476e3532cfba0829a491b34"],["/archives/2023/08/index.html","0044eb8e841a17857ba93e48dfc24468"],["/archives/2023/09/index.html","57179f51f4452db59c8ac2c994839396"],["/archives/2023/09/page/2/index.html","0e44d9b97e7a983f6a79d2807099a828"],["/archives/2023/index.html","0abb33ef20e9aeecd55e269a49cdb90c"],["/archives/2023/page/2/index.html","0b2700f5e2873f3b1f1fd967e5b3b943"],["/archives/2023/page/3/index.html","22439499e9fbf780d88eddd6da8b9082"],["/archives/2023/page/4/index.html","bc81cfa12cb6e39c9e8a907746559d7d"],["/archives/2023/page/5/index.html","3f8fdef5500d7615bd406295fcfeb5a2"],["/archives/2023/page/6/index.html","8c76ff0a65a67f5bf241d915b863bffc"],["/archives/2023/page/7/index.html","f0864a0b8767ab1da55bf463d03a2485"],["/archives/index.html","cc43d80452da4eecd0a206a9f663288c"],["/archives/page/2/index.html","8e862df7d714d5e2f198fb4055205787"],["/archives/page/3/index.html","6bd0e3cea991939d3c99bacd3642dffb"],["/archives/page/4/index.html","6929ac0e08456147642b368595a27230"],["/archives/page/5/index.html","b49708b3ad17f553bb02946c30eb1edf"],["/archives/page/6/index.html","8622af0b28ed82ac79b6c497e4161f12"],["/archives/page/7/index.html","0a002de4314f763632394a24995c84fc"],["/archives/page/8/index.html","5f1da4fd340aa3295cfd85351a381d0d"],["/archives/page/9/index.html","a679b274976378eec0ca7a2c5e7fe42d"],["/categories/ACG杂谈/index.html","c4125886b6f5f3dee646c1400cb0a2e7"],["/categories/ACG杂谈/page/2/index.html","fe59d98abac4ee7ab9c0a0a0f47b51ff"],["/categories/index.html","8b68040ee172b1f693a660550bc5fae7"],["/categories/学习笔记/index.html","774d6ed8d1383f5ae71c0b7293afb933"],["/categories/学习笔记/page/2/index.html","20d8a72d0c3bcc09c2e911c8e636859a"],["/categories/学习笔记/page/3/index.html","af54805afb05b96717445357367f602e"],["/categories/工具/index.html","0275c3ba2caec518407b26eac5d641a4"],["/categories/工具/page/2/index.html","a2fd259fc909b2268da76c37c7c5a8f1"],["/categories/游戏人生/index.html","5f069ef92841a6d1355f923dcca20032"],["/categories/读书笔记/index.html","586b8c34d9844271178cb34ad5e1b278"],["/categories/读书笔记/page/2/index.html","055a2e6a8a87711e837103631086ef29"],["/categories/闲言碎语/index.html","4add92e077200322691c24e56590f864"],["/census/index.html","9c740f37a3f3ba3e3f96a0bdf6d97611"],["/charts/index.html","45ccca938ce50789bbef401e07a0b8ef"],["/comments/index.html","c3d99c2aa381112295b1aad32368daec"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","7bbf446b27c916b8d0676ebfed9b40d1"],["/gallery/index.html","b98707638d79342baf25ac8339be3bb5"],["/gallery/wallpaper/index.html","d33753541a14ce82f2ab1f87fcbc7329"],["/illustration/CMU CS15-213：计算机系统导论/C语言编译流程.png","35601f8e4cf5c44789e217ecb9821dd8"],["/illustration/CMU CS15-213：计算机系统导论/IO总线.png","a6312f3b19484ca673b16a49b9573e1b"],["/illustration/CMU CS15-213：计算机系统导论/SIMD操作.png","e6caf9dea245a5d4301e06cead87393d"],["/illustration/CMU CS15-213：计算机系统导论/combine4.png","3c4cb1d932f0dc0931a6db5fdcdbd7b8"],["/illustration/CMU CS15-213：计算机系统导论/union.png","790077e7ce5e561eefc81772be8d200e"],["/illustration/CMU CS15-213：计算机系统导论/一般缓存组织.png","82606c032d14bc5300a678f5e5133af9"],["/illustration/CMU CS15-213：计算机系统导论/内存层次结构.png","8f6d740c28ce408bc12ac6d50ee63567"],["/illustration/CMU CS15-213：计算机系统导论/内存山.png","2df9049eafc8143dfeabced4e7ad06f3"],["/illustration/CMU CS15-213：计算机系统导论/内存布局.png","7b378d787023782c2202de91582f9e92"],["/illustration/CMU CS15-213：计算机系统导论/动态范围.png","cd33b70b1a34f328fefa102096b074b9"],["/illustration/CMU CS15-213：计算机系统导论/固态硬盘.png","e5b30e2b66f3a8ddb85895c3f8261d6b"],["/illustration/CMU CS15-213：计算机系统导论/字地址.png","0eb91e7bda3618e9526755d722b20736"],["/illustration/CMU CS15-213：计算机系统导论/循环展开（2x1）.png","5a3aae4580afc6b9a618f03f9de95a1c"],["/illustration/CMU CS15-213：计算机系统导论/数据对齐1.png","f935e5f2eb497050627be64e14476a3e"],["/illustration/CMU CS15-213：计算机系统导论/数据对齐2.png","a7a1eb20c351e949c3d49c71196d8991"],["/illustration/CMU CS15-213：计算机系统导论/数轴上的浮点.png","25db3a67b77fc2b146382dc2a9f5e7cb"],["/illustration/CMU CS15-213：计算机系统导论/无符号和有符号的转换.png","c5b3472443c29514caa53f0e845c0a33"],["/illustration/CMU CS15-213：计算机系统导论/有符号整数加法.png","1fbc42e3384d9f1a058433fb83935110"],["/illustration/CMU CS15-213：计算机系统导论/栈.png","7546e5bc62c3f46e11fb429463ea97c9"],["/illustration/CMU CS15-213：计算机系统导论/浮点.png","3472e94845fd21b4517a4c44a5171eb3"],["/illustration/CMU CS15-213：计算机系统导论/浮点数在数轴上1.png","aca1bcf0e41f572f1a7a689c91b21e84"],["/illustration/CMU CS15-213：计算机系统导论/浮点数在数轴上2.png","76b1239b27ba3b8b57f51f23d17d7ccd"],["/illustration/CMU CS15-213：计算机系统导论/磁盘几何结构.png","d5cdb2b69927078f60922c21122c3803"],["/illustration/CMU CS15-213：计算机系统导论/磁盘操作.png","86cde37822922a57f1731abec01d757f"],["/illustration/CMU CS15-213：计算机系统导论/磁盘访问.png","a98232ea77a4a7df7053f422bd7044a1"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/UCB Data100：数据科学原理与技术/DataFrame.png","e6c0b5b29de36cd8b467e52344d8d800"],["/illustration/UCB Data100：数据科学原理与技术/Pivot Tables.png","88d47bc8c69ac0ec18415870dab20f7e"],["/illustration/UCB Data100：数据科学原理与技术/groupby.png","c7cf52abd16b67ddd3ee39f1d65163c2"],["/illustration/UCB Data100：数据科学原理与技术/数据科学的生命周期.png","a31f31c8aef19f1103642e34aa9280bd"],["/illustration/UCB Data100：数据科学原理与技术/采样.png","290455ceaad9dfa53b878f115289b53e"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1907345a86feca14410dc6f0e4597e99"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","dfde9b2f689df06d9ceb53e33e1db862"],["/page/2/index.html","0172f5ddce7dc36fead11b73a3b0d62c"],["/page/3/index.html","373b017ea7efa3444c8853ed2af4dcfc"],["/page/4/index.html","e6e1b3391534abeb71e7c39068ad2c2e"],["/page/5/index.html","3267801a29a569c0ce93213f52c5c0ca"],["/page/6/index.html","50c7547c7b33871df7df420155c16d1f"],["/page/7/index.html","1ec32e736aeb9d4b5ccb9336996fce0b"],["/page/8/index.html","5e5323ba2b6a9ec8b0200d21bab96497"],["/posts/106331b4.html","f110e0484aba045488b0cc634f1b8021"],["/posts/1185a02e.html","d6c1694fe6def453ca18d30e7254c275"],["/posts/1743dad6.html","954d03631653468beccfa5e6ccfb67a1"],["/posts/175a8e1.html","1128593ef3db1460b4fedacba4d829ff"],["/posts/1be398e4.html","74b66f86cf442ff045c4c7843f1f0fc7"],["/posts/1c5a0321.html","608dcee73f71bef4703b036f758dcfd4"],["/posts/1ec7973e.html","6e969a672099699b7e9170d252906dad"],["/posts/1fb82448.html","21552c3caca53f7fc442bd644a53fc1e"],["/posts/29c507fa.html","26d02cc6847e36f09bbbe689116a3468"],["/posts/2f34eb00.html","388d73835cc797b76685d704b0f443d2"],["/posts/2f57a694.html","8e9e3690028d91a340d4fb8b143411af"],["/posts/374b54d5.html","6f289d955a00044f2bed60fde3a17eb7"],["/posts/3871b764.html","4f752b344b29205943d52686fd8a2e00"],["/posts/3b308caa.html","bd0dd7a9f264f69807d0a17c554e8db5"],["/posts/3c3cdb74.html","d286a284bfb7880e7c88531f7a32818f"],["/posts/41f65cde.html","2e27f2853539885c0a6bed15c8ceee49"],["/posts/4208fd6c.html","622a5b3a113a3dfc3ce835bf1a39b19b"],["/posts/4392373e.html","e01ff69c8dacdb758ba83dcb23b4e918"],["/posts/440ed920.html","ed0cc5bb6e79a46e8a164bef1852c49e"],["/posts/4d2b51ac.html","d0aa72291118dcbc7b6e8adb19de6607"],["/posts/503ae89.html","bd53d1f868df760cafe79cd499984606"],["/posts/535fd087.html","7cb710dde8d94a95de0564f121796fad"],["/posts/5923cba3.html","39da4ee69c399f6741d19b44a2acc6c0"],["/posts/5c1bb6b8.html","aa8c457ecf07e7ff5769e884825b9d6c"],["/posts/5dc45f0c.html","ca0ece4bc4da654109b50d2561c6014e"],["/posts/5f2caa2c.html","468d2efebf97ebe0c1b353dffb631d10"],["/posts/616be7b6.html","8af8143eec730d91ac7dd122fc35968f"],["/posts/62a1ec0c.html","32781bd8a1a17354b187208b7d106e6e"],["/posts/69fb361e.html","2a312c8bf9d9430026c80514385bf068"],["/posts/6a8518ce.html","f08bf7d857ef41b33f88edcd7ebdfe47"],["/posts/70685119.html","92a42a3e824a45e9c7884c5e1450186f"],["/posts/743db4aa.html","f169140890b5d7e065faa80d65d0b3aa"],["/posts/7b67faab.html","eb9485594b290620863945e228843007"],["/posts/7b76be01.html","c3053067418a050e89c4f01678f01223"],["/posts/7bff939e.html","4dcb699a79419c17cbc8086b84e12c4b"],["/posts/7cc4ca07.html","fd82e79b8c9f046a7fec0c0f435eaa98"],["/posts/7d257210.html","3249b7e2acb4bb68cc48e68006cf4763"],["/posts/7ea0cbe4.html","32611b03b8d83d0fc594f62c50d49c1b"],["/posts/7f382da2.html","60eafb825d075700cbe02a6d69345857"],["/posts/8207aa48.html","461ed1eb5f515f71752223730fda71f3"],["/posts/836ea9bd.html","a364d686bd9da062f3bda0a2ec9f8bee"],["/posts/84cae757.html","eb87f509cc06d8fb548b0718dc26e55e"],["/posts/88200036.html","b1273e619ab92c9fdee8148ae58701f7"],["/posts/922fb64d.html","b25f470db2b64541d11ffdcb3744d745"],["/posts/98332b29.html","5c1052d50bcd1aedb89fecf6dc43f116"],["/posts/9a1a736f.html","ff201c1389a1becd7420c233f40db86d"],["/posts/9addd0bb.html","1b59319400bd5c858c603bd48d8213fc"],["/posts/9b44950b.html","a4b6a5b5f3c7c924702c0a3c334fcd8c"],["/posts/9ca149ab.html","c04faa4525e0adf9703745900d0a1014"],["/posts/9e4446bf.html","ce6464cedb4c65b19d230d0cb7750277"],["/posts/a0271e58.html","8ad0e142d36bfadfd1da36f013393855"],["/posts/a13c1dba.html","13d0b3962bae37ba86360a3bcac698f8"],["/posts/a1f2a4d4.html","4bd1adfd1d662ce3264bcc81202b40aa"],["/posts/a5f300de.html","3de678ca991cf3fda634aa8092a26470"],["/posts/a98766fe.html","f86bd04aace6e99063a0346e45e657f2"],["/posts/a9f63847.html","4545c495ad9f4c1c5f0449c8da606d70"],["/posts/ad31055e.html","249731a6f61e0466e2eb464f0f5a5ba7"],["/posts/adcd6e20.html","dd4323f699750f02e9e85c411b9c9f32"],["/posts/b0fa4c58.html","c71de4506fb74b5d208b1f9114c9fa31"],["/posts/b1168675.html","7d37c1a029e47fe53e2ff093cc60fae9"],["/posts/b2feeab7.html","ab75b4d747671fd15f12a16ae3d623e6"],["/posts/b6d66f1b.html","2ac998dfb4b03bd13af85311ed6ff758"],["/posts/b7525d11.html","50c806e76147221fd28a35a28ec8ae62"],["/posts/bb154b63.html","d14a0bed469c41983203fb54abe2c25f"],["/posts/cc86a40d.html","71250d9f039ea123620597dd5df440a4"],["/posts/d36531a7.html","5a3dc1f79bd27454544f6552bd770550"],["/posts/d442e51a.html","e746bf09421feb0616cc83e0b7efbd1b"],["/posts/d7fdf01f.html","ca0f63e39272c0778e2140b575e5ece5"],["/posts/dcdf88c8.html","7656807d2ab6aaf0f4681afa540aa345"],["/posts/dd378ae0.html","713e7993401b07c8f66f4598522bc4eb"],["/posts/e15be301.html","001afacd711df08990c164e8e2928c44"],["/posts/e2e4b4ce.html","0cb96157a8e8ca2418c3fdcb77bf04e3"],["/posts/e35ef5bd.html","6c69da039c64f80c7facae5e8737da0c"],["/posts/e462ba83.html","230f12b2386110b7e4424fbca3c1b976"],["/posts/e53204e6.html","7039ab543838e05e37a88211265442bb"],["/posts/e5cd9bbd.html","b1126c06898296c0de6aeea090580be4"],["/posts/e7a99a5e.html","6b9a9ed57aed7af9a821961d80b7c5c5"],["/posts/e9318100.html","2067dbe72e226b9845faf442f44a3021"],["/posts/ed52e6a0.html","920ca79d1d3a60b01b9d71b70a79f695"],["/posts/ee0ac59a.html","1fe20bbda146c20c96ad70790fa469d5"],["/posts/f09c1ee5.html","77b85fa434e9c3de070c0a130b153520"],["/posts/f4af26a9.html","2d9066079511f7d5da8027e31029684e"],["/posts/fa3cd62d.html","dea6120bff0e01a2cff58dd807b75e75"],["/posts/fb3794ef.html","491bccd3b0e383dcf0f3d622c76d2321"],["/posts/ffdfd6d4.html","50447b4331d7de0af5465c33a8ef7bcf"],["/private/index.html","01ec0cf0f05d9194e8f4c5c018d30bf2"],["/random/index.html","ea8c55edaf7764c1cf6c74edf0d9bb1c"],["/sw-register.js","4d806b5884083200a40e2255a3d02681"],["/tags/ACG/index.html","c92fc5ec6b6863742a786d5788e973b9"],["/tags/AIR/index.html","c37262348ed9c59623eb27f31b8178c8"],["/tags/Butterfly/index.html","ba1a6714de83a3a45e5e1bc37f580eea"],["/tags/C/index.html","2a385cbdcd8c3ca0c3372f992509e194"],["/tags/CMU/index.html","e858e863069f1549ae6b7069ab17ac0b"],["/tags/Crash-Course/index.html","0b16154a81a65f435aa87070f5deb6e9"],["/tags/GDB/index.html","c1d2a2577f1db4f1928faf87785aa30d"],["/tags/GUI/index.html","342b7ea7d4fb7a6a594aadf9ea6c8442"],["/tags/Git/index.html","7a985411968b78a738161fe6e085e699"],["/tags/HTML/index.html","6a3f4aac76a706485e3bfa825f2233c1"],["/tags/Haskell/index.html","d6c3dfd9ad51d22bc2fba77de78cc47a"],["/tags/Java/index.html","0f68ab5a7678abe2d81c5affe365c415"],["/tags/LaTeX/index.html","4b0d69811f56b8d07b965c8325703de5"],["/tags/MIT/index.html","9837409878e42ca3da5a4d66644756f2"],["/tags/Markdown/index.html","a4a76e6f7eb84f7632a7236fc5ddd8de"],["/tags/Mermaid/index.html","502089bdad2e052c03d02ae6ed23dddf"],["/tags/NTR/index.html","33c0c27be36a50ae47bdc8b756aab2e2"],["/tags/Pixar/index.html","9ff86a9f2bf1d0f54ba843ca46220b8b"],["/tags/Princeton/index.html","04818f9fe97673c612780b3811632b50"],["/tags/Python/index.html","59391ecd4c6df40a066c21da6e6730a6"],["/tags/Qt/index.html","3ae5627c968c20f0acf361c5b1d04790"],["/tags/Scheme/index.html","77e4dd40bb963247c8a890f3451fd690"],["/tags/Stanford/index.html","9c17733c3540abf4e5da3c5095047739"],["/tags/UC-Berkeley/index.html","6c4bb6a9fb7f4bbec53fc65d54590b7a"],["/tags/University-of-Helsinki/index.html","038e27e14083009e0954f67b73c5a045"],["/tags/debug/index.html","086203b5a3dd95c65c6a9766974b8066"],["/tags/index.html","0776ea33bc34c9a114a4a912f61dc9a6"],["/tags/web/index.html","acafc0b7a7eb889b9db7275456c0bde9"],["/tags/三国演义/index.html","352b10a14e10a7ec7b795b98413e0dcf"],["/tags/丧尸/index.html","f94b70ee7af963a36b63e11be5983c0a"],["/tags/京阿尼/index.html","cb74b30eed631bee989c72c6ac24fe8e"],["/tags/体系结构/index.html","3a6040413cc31887184f17eab76d7512"],["/tags/信息论/index.html","e91f90aa07fc136c15b57f2761a40e9c"],["/tags/元稹/index.html","2ee0fc2d1db3c8ecef15aeedec6af57e"],["/tags/公路片/index.html","f03db6d7987294870362bc77e94a266e"],["/tags/关于我转生变成史莱姆这档事/index.html","45689324ee6721423992cf2118a98b48"],["/tags/函数式编程/index.html","0438b2d081ac149cdcb51c3773444cc9"],["/tags/刺客信条/index.html","b1c3aa86752698b397ee93861ddd9c7a"],["/tags/卖肉/index.html","08ee9848656d80b3eb3dc99be3b70bf3"],["/tags/博客/index.html","43a48b39ea7d112fadd03bb0f1f14a68"],["/tags/去月球/index.html","ec029f0638c0679acfc772ed883f25b1"],["/tags/可汗学院/index.html","ea7f5eacaaeb173eb094ddaa2c757c25"],["/tags/史诗/index.html","f54fa97139398cc009e70198ad81ccdd"],["/tags/吉卜力工作室/index.html","ddc01d7819801a45ca74b0ab5a2a1551"],["/tags/名侦探柯南/index.html","a38cfc83fa1bc067f1cf392f7d15f250"],["/tags/后宫/index.html","35f7ee98339e449478c323cdbf6388ba"],["/tags/咒术回战/index.html","e63bd7d37b92e4fa0004779bece9f8ba"],["/tags/哆啦A梦/index.html","6c54b2c7e36e42d9c91512a8a4db4bfc"],["/tags/哈利波特/index.html","11356f3f537f9eaa918042380c80486a"],["/tags/喜羊羊与灰太狼/index.html","b2ed2c1114a4b8d08ff8e2461647b372"],["/tags/四大名著/index.html","d47abb2964cf39c1cf394627341021df"],["/tags/图表/index.html","6c47224368e660eab846727819c57b4b"],["/tags/复变函数/index.html","67f788e8d96370d1704c9afc2f66670c"],["/tags/孔乙己/index.html","d2399a0e67b2020c9e7f83ebbcccc52b"],["/tags/字符串/index.html","3fffdcbd4314a6c167ec6e659343957b"],["/tags/学园默示录/index.html","ec197839a7b5173af4a1b6b282baa956"],["/tags/寻找天堂/index.html","dbef9c7813d3772cfbbb1bf426f77d17"],["/tags/希伯来大学/index.html","be3ef142baa2c7d8f1e8a369bda79bdd"],["/tags/异世界/index.html","10498fc36b1203e547b58cdec1b53763"],["/tags/微分方程/index.html","a5f97d0d5725af9b127a35f183c36f5b"],["/tags/微积分/index.html","6276aeeaeedb42758caf4426321243d4"],["/tags/情感/index.html","61cf36a073a1dbaddc9daf4581f30eae"],["/tags/指环王/index.html","217bf4dbfbadaf5beea04f23e0afad68"],["/tags/搞笑/index.html","6429fad097dad2387dda8197d5125488"],["/tags/教育/index.html","11adb42268534859c80e9b1d45791ce6"],["/tags/数据科学/index.html","01d2fa90cf5bb25ea6ad94e9f7994ccd"],["/tags/数据结构/index.html","509286aeb121a49c59086676327e0820"],["/tags/数据结构与算法/index.html","9ce521814ca89170db859319887315a4"],["/tags/文字排版/index.html","574536b889a6f80c21ffb6c1cce7ddbb"],["/tags/文明VI/index.html","dae851fa943a8235b74876d387e7765b"],["/tags/旅行/index.html","c1bd69f5a0f3a98e5fc3ca6190ad24c0"],["/tags/无彩限的怪灵世界/index.html","b410f4eada6ad51e4d36b47ce1f7ed7f"],["/tags/时间刺客/index.html","c67c26347152f3fabdd69285ec2934ed"],["/tags/有生之年/index.html","e1a047417e1887dc72c83af09d32d8b1"],["/tags/李商隐/index.html","026178b6a8a22153863ab03cef188726"],["/tags/李白/index.html","1333dc1367588da825c7139cf6e8cf2b"],["/tags/李贺/index.html","18bc557d8835d2e1ccfa70eef2e5e0b7"],["/tags/杜甫/index.html","eb64112380251725d7a4d90b85cc8143"],["/tags/概率论/index.html","a12aa9439385dd73442cd6367a3feabc"],["/tags/正则表达式/index.html","7ff8e7f097f06a2cd74004c4b9a00cfb"],["/tags/死亡/index.html","9522b1be0d43303563650d0ed91a67fa"],["/tags/水仙/index.html","d3e6497703045c6976d76c8d65ee698c"],["/tags/治愈/index.html","fc32350c30b2daef945954f75504058e"],["/tags/热血/index.html","6095e0a14377ed2c42162fa70443f5de"],["/tags/爱国/index.html","cf874ffc8b719ad9d09bebaef6e2b0ba"],["/tags/版本管理/index.html","13240e65eac925bcf078678e3b2ae26e"],["/tags/玉子市场/index.html","2c5706234ed5cbca92ab8ef893e48b43"],["/tags/玉子爱情故事/index.html","1144ee89ea5fdf5cc02f2c422362a1ea"],["/tags/王维/index.html","22428b9d81d4489ee678680b8b23cacd"],["/tags/现实/index.html","77a32a5811064506c35d5afc51be6e01"],["/tags/甘城光辉游乐园/index.html","a4698eadb06e60c235c3f98c090f0cef"],["/tags/白居易/index.html","dea3c36fc4fe598ed078943bdb24ca3f"],["/tags/白毛/index.html","c6f6c0b13fb87feddf3c12896b9d3fd1"],["/tags/短篇小说/index.html","ae2cf9409212bf10e8cee2cc71938e69"],["/tags/神话/index.html","1385b9b75aadd294f1d9380af87b4402"],["/tags/离散数学/index.html","b4eb2f1bd3e82393927e8f8536befeab"],["/tags/种田流/index.html","ab9f4b910dc2fd2b7288d99b8c8e94ce"],["/tags/空洞骑士/index.html","745ef0716ac3335ba6a74c7afc362e88"],["/tags/童年/index.html","71e216991bf73313e2ef1cd1146ce977"],["/tags/童话/index.html","8c5cda72b7b27ca620292c6ca7b1a957"],["/tags/策略游戏/index.html","fb1b731199ec6d733234b379a985e34a"],["/tags/紫罗兰永恒花园/index.html","8a6feeb725b27f6118876d46c75555ff"],["/tags/纯爱/index.html","4fa19db1c7880d61ee6d5f463d63a060"],["/tags/纵使手残仍大爱/index.html","483ca9f712e9fd9c3127aca5ccdfe15a"],["/tags/线性代数/index.html","80408678f6f3fa1b89fe878b2610a66e"],["/tags/编码/index.html","8e4825ed1158b3c8b7ed1b2f9f675067"],["/tags/致郁/index.html","508834dfe94c569f034af67734fe3849"],["/tags/苏轼/index.html","43d3d2b736adf10d0e0cfd151f75b0f2"],["/tags/英雄/index.html","c395870476af01dab9ca7978710cea08"],["/tags/计算机科学/index.html","3fc2f6cf99db13bb6143c01e89e0a636"],["/tags/计算机系统/index.html","4ab9188d3a2001d030265ab96c2a5ff1"],["/tags/词中之龙/index.html","6d3a43265a52472add21ffe69bd10272"],["/tags/诗仙/index.html","2d80e069e07b2e541253e610906310c5"],["/tags/诗佛/index.html","da5e3a96440abfc3701dfe196497daba"],["/tags/诗圣/index.html","901bf329a7387b2303413a45d0c9758e"],["/tags/诗词/index.html","68fe1dcac2d3b39191d510350598fbb6"],["/tags/诗鬼/index.html","16fcc2b9aa87d91d7e32e37ca3f7f832"],["/tags/读书/index.html","6e2a32edd2c0d09ac4f51732b8f0234a"],["/tags/豪放/index.html","465c062e182de5455f8616cbd272ed61"],["/tags/跳跃/index.html","27d7e7b266300c0d5395a29c51110a35"],["/tags/辛弃疾/index.html","9e65d93ce5f9fe785f11d15b95aa7918"],["/tags/运动/index.html","e5fac0645503ba1679b845e91c69b551"],["/tags/钉宫/index.html","beff336453ffc256bc17727e309b8067"],["/tags/银河战士恶魔城/index.html","c79af50cd97eaf07159ec05c9c69727c"],["/tags/陆游/index.html","ee54f14408c821200ca21b1e95c101ec"],["/tags/零之使魔/index.html","08640bc0f5dcbc4ea857abbeef8cbbe6"],["/tags/霍比特人/index.html","754f8637c4a41a9e076fda408205bf1e"],["/tags/飞屋环游记/index.html","9169fa95116ca442cd3265629fb3b4eb"],["/tags/魔戒/index.html","1ce32749f101e25e0b9533e354ff266f"],["/tags/魔法少女小圆/index.html","aea7f49f727dcdf56137e51c69ab1373"],["/tags/鲁迅/index.html","26e58ac60891e2bfea7efb131cbc6e6d"]];
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
