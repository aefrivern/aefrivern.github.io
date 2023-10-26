/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","58582606e1ab408e1c9a2c2136da06fb"],["/about/index.html","2440495998c21d2408ac072f0ff7e6a4"],["/anime/index.html","d4fc2a7eeb4a2dad942a5df902f087b6"],["/archives/2022/11/index.html","f2e998f14e3f1edf3946aa7b4cf49bdd"],["/archives/2022/12/index.html","acb9250d32bd61844bea087458ebee9b"],["/archives/2022/index.html","b21b9bc1b103041b90a191d9fedf1b53"],["/archives/2022/page/2/index.html","f78402cfb9da0b132ddb4d2a4227e4fd"],["/archives/2023/01/index.html","7584884cffe5a9eed85e0c8170827ef0"],["/archives/2023/02/index.html","616af7b4ff75ab1830d14790ff38f8a4"],["/archives/2023/03/index.html","40967a59a33e287e0d9dcf493f17546f"],["/archives/2023/04/index.html","47bbbbaece809571a3258bed1ab1ea68"],["/archives/2023/04/page/2/index.html","ce4fcfb8b4359004bea51773905be4cc"],["/archives/2023/04/page/3/index.html","93d8af3c4ab33298f1db32ed4f71bb59"],["/archives/2023/05/index.html","301d9c4370e50890920fee7cd6ef8255"],["/archives/2023/05/page/2/index.html","8832a753f5a240302973dba9cfdea890"],["/archives/2023/06/index.html","6282e29d4002cc3d002f257d481603c9"],["/archives/2023/08/index.html","a57dcda6fae847771389959142f46bfc"],["/archives/2023/09/index.html","2eec9e77e22356e1efd4dd29f8344f4e"],["/archives/2023/09/page/2/index.html","99aba1f4950a5c74610297f4606cf42e"],["/archives/2023/10/index.html","45b35a2e12d10eb28d4aad519da69356"],["/archives/2023/index.html","99cfffef58b8252066cb662dde199789"],["/archives/2023/page/2/index.html","7f5f516e67d0f9c3425c0004d2c0b1d5"],["/archives/2023/page/3/index.html","bb89a2f8aefce7d3d2591ae17629a94a"],["/archives/2023/page/4/index.html","0e3bb90ab1845e8e9a4e4e65a01fe56e"],["/archives/2023/page/5/index.html","ba261167fd67685f6f40b5290fa1d695"],["/archives/2023/page/6/index.html","7156a6f78929ff75b64708fe2480c228"],["/archives/2023/page/7/index.html","c92867bf52f241e4a10aee001777326d"],["/archives/2023/page/8/index.html","073c5ddb91f01e7d18e4e3e7292b615b"],["/archives/index.html","99e99ddd90e2a27d85905726d466747f"],["/archives/page/10/index.html","3cbc5ac9bc6912b5a2551f5cdd2ac98b"],["/archives/page/2/index.html","efc42dfed0f6f26542b6b064b201c128"],["/archives/page/3/index.html","0cca411db34ac0bfe8bdd89aa2285e05"],["/archives/page/4/index.html","15b81b56419a5564ca6df008bd0dacad"],["/archives/page/5/index.html","0db92aaad170cc015f7d5f883ac61986"],["/archives/page/6/index.html","b76d982149214e09b9cd4a650fbe4ccd"],["/archives/page/7/index.html","b1f5d0a35c4d0beb16c59f2b17a6d2d4"],["/archives/page/8/index.html","d3a98a30a56ebb92faa6a528dedf5899"],["/archives/page/9/index.html","227f39bb809ee6cd16e51d82c54b1021"],["/categories/ACG杂谈/index.html","3364470955d444678167048811da7aef"],["/categories/ACG杂谈/page/2/index.html","65de88c2257e88633bb5a37bab6e8130"],["/categories/ACG杂谈/page/3/index.html","cd5924046b575045f47837296fe9f958"],["/categories/index.html","9e6715ad40a7691af4777859de847387"],["/categories/学习笔记/index.html","866f39bc330bf8d89ff4140715aeb348"],["/categories/学习笔记/page/2/index.html","a09426a5492c66efe7d5d05cc34d66fa"],["/categories/学习笔记/page/3/index.html","f77d3ad7b82e5d726d544a3b5269ba71"],["/categories/工具/index.html","f3577e36d82ee296d7317bc6fc1e1193"],["/categories/工具/page/2/index.html","97144e079bda1ae1e7a60928da374d9b"],["/categories/游戏人生/index.html","bbed739e39b37c8791be3d405c2f80b0"],["/categories/游戏人生/page/2/index.html","c9c27ebd6c582e06f8d08eb88eeff2de"],["/categories/读书笔记/index.html","0e7169c3028f41c1daf9b2ecec5039c3"],["/categories/读书笔记/page/2/index.html","ec5fdd2958587f702f30db6596afced8"],["/categories/闲言碎语/index.html","8209f11e0f7ddb57202e26eff733d457"],["/census/index.html","50bb01d76092aeb4a5a6472354ea2c04"],["/charts/index.html","680b375bb4f6f8d5db39616d35fd0deb"],["/comments/index.html","e19817281f2962b2f3500a316c985a61"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","f99f74ca890a39e7263342357090df14"],["/gallery/index.html","8fe059b4fbba05e9d11560668743c65d"],["/gallery/wallpaper/index.html","b55d4c3d6be41eb8e2de9697f44a3437"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7942554bd344f61988a6585576cc822f"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","ab1d70bb92ca594a8563382c7db513b5"],["/page/2/index.html","ff31bd5470991ec6b4ded413001c3e98"],["/page/3/index.html","2f768b32ddc7569bd0766448fa72ef70"],["/page/4/index.html","136d0eb4b05f917bf7ae37d10b307d1b"],["/page/5/index.html","b54b4347774d8804ba683a5c34ef2395"],["/page/6/index.html","0c997cf5aa08ea25ce1b774e84174e86"],["/page/7/index.html","e3ec567d3eca420046983b663c022a94"],["/page/8/index.html","9b2e37d562201e308ca1d1f83761cfeb"],["/posts/106331b4.html","8c5ef733a25288b1bc368d04ff1dedba"],["/posts/1185a02e.html","8551179ad3fb897410b6bc1cfd1f23ae"],["/posts/167c7c45.html","1d3809ee2274a9d1764cf84e1656d62f"],["/posts/1743dad6.html","ead92f62c9694b1cba420d6ed98b87af"],["/posts/175a8e1.html","b8a871d8be723031bdd15ea54d6933e6"],["/posts/1be398e4.html","27d23f0a460801c73abfd1f0c24de5b4"],["/posts/1c5a0321.html","ea77d60730173f8a256eed67b888a6d1"],["/posts/1c5b1e9c.html","284d0f6ca04b41caded17fa0bc41ee87"],["/posts/1ec7973e.html","5dcda965f53ec696d869f4a11351a378"],["/posts/1fb82448.html","e13a66464870da51fc9811e92ae389e5"],["/posts/21f18fd2.html","0b9ab646b5248bfd4af4061b74c66490"],["/posts/29c507fa.html","59583738e4fd9c4555a445e2c11681e1"],["/posts/2f34eb00.html","cc43ff4ef1c0ba5173f268975bb554f3"],["/posts/2f57a694.html","b832a71a4593fa7b29f55964807fe134"],["/posts/374b54d5.html","0af8ae78189f955ec6480be315a2105d"],["/posts/3871b764.html","b43ee55a2ce14f328b2c8f2c3fc9e955"],["/posts/3b308caa.html","2cc90fce38c522d0396d47ffec617de9"],["/posts/3c3cdb74.html","7e4e7a5336fe75157e9a27be22ed03f6"],["/posts/41f65cde.html","d87b8a3778e7845ad1262aea4808f797"],["/posts/4208fd6c.html","acc067ba444d30c5929d8d533f095671"],["/posts/4392373e.html","3f32ebb0e1befdb6a84e8178777a6014"],["/posts/440ed920.html","3b1410d6d6b5fd7e11eb1e2818c682e0"],["/posts/4d2b51ac.html","3537619c6112217362c3744bb91e7832"],["/posts/4db1a52a.html","27dfcb69fb053e0135208605e83e563c"],["/posts/503ae89.html","37f8d2779db8bbcc2aa87bb38c565418"],["/posts/518e2799.html","be7a1d004de3dddd0ec42fc134fff138"],["/posts/535fd087.html","0e158db803a92de27e3efb9f6527c8dc"],["/posts/5923cba3.html","bb078bf4975c6da8b49102fc572db442"],["/posts/5c1bb6b8.html","82172f25ca7bf557c21f9ae16579e746"],["/posts/5dc45f0c.html","51fe15bdb48d4a3e2d70974228a86812"],["/posts/5f2caa2c.html","c064db6c7b3ca96450215079cf8e7bb5"],["/posts/616be7b6.html","6a0f8742128660456e8db8ba6299e2b9"],["/posts/62a1ec0c.html","3d904fd45faab7e787e07bf2f2b6d284"],["/posts/69fb361e.html","c50c18260262e7ef449cd8f5c113c35c"],["/posts/6a8518ce.html","6e536ba5ba40c52c39e18eb9f242eb46"],["/posts/70685119.html","bf4de70bdeadeb0967eb28da6026583f"],["/posts/743db4aa.html","2ee74b8e5ac6e4aad35f13f57ee95d1a"],["/posts/7b67faab.html","38f30bee2c94b20da1200de533d5ce96"],["/posts/7b76be01.html","54d1a4d704b5fd85be8cbf1aeb762d79"],["/posts/7bff939e.html","5a937863b8a634095ceeb976ac6fe234"],["/posts/7cc4ca07.html","8d7380cff50119141d601263c847676c"],["/posts/7d257210.html","1b64f2f13e513f2133f524f96df22a25"],["/posts/7e6a5c94.html","bbe6d4410f0f4223ba92378aa17d1682"],["/posts/7ea0cbe4.html","c97245788379e2ed3f20f3cd20e158dc"],["/posts/7f382da2.html","3bcf1f8017e85f1cda264f4af208ba53"],["/posts/8207aa48.html","7c0b27f41d3e499607f29b3359ce9bea"],["/posts/836ea9bd.html","e09b228e55fc62d3e1e9dd50ad10abb4"],["/posts/84cae757.html","2683430cb18cd4cdde637d3e529c9b52"],["/posts/88200036.html","206b1baa12dfc405fe5715caf98975c5"],["/posts/922fb64d.html","fdd0a1b846f7eff11c48d81b6997e36f"],["/posts/98332b29.html","777c6cfd45ade0e22a9cdf25adb9ea58"],["/posts/9a1a736f.html","1d585cdf9eca9d6cb9d9dc10f8fb58ab"],["/posts/9addd0bb.html","78a66d4b8c900ef903aeddd9592e6644"],["/posts/9b44950b.html","8b4ecefad2c54ae4b05729a145c09ee0"],["/posts/9ca149ab.html","8d210091bc3f917b821e5c49061544ca"],["/posts/9e4446bf.html","fdbbf69c38ea057c855a0176bd051d01"],["/posts/a0271e58.html","0e5ca3bafc4b46cc01db5a82d61212fe"],["/posts/a13c1dba.html","896b4ef0788c32f78d6518ab7f5dd20f"],["/posts/a1f2a4d4.html","7cecc0c30cd5a35cf48401584073ded6"],["/posts/a5f300de.html","c4c7969e3506184190d16fa3a5e9b5b0"],["/posts/a98766fe.html","421d1e316e2e288b1c3cbcb14fbee685"],["/posts/a9f63847.html","502a30c90a67e1b115f3f508b5141d79"],["/posts/ad31055e.html","9db29a102af83d8b298db5d25fb6d3c7"],["/posts/adcd6e20.html","f368fa0d7945abf373335bba3c5770c9"],["/posts/b0fa4c58.html","692fc10c664233c9739d6e7538dc7705"],["/posts/b1168675.html","3abe3a941b27ca93ac0d5890ee012189"],["/posts/b2feeab7.html","c2697ab6ed3be4453b14dd729f344351"],["/posts/b6d66f1b.html","480417a79e0ee4e8a57aa2ae21f9d562"],["/posts/b7525d11.html","78ae35599e4d56ceae5bb11d571999c1"],["/posts/bb154b63.html","2c9cda455314dcd6ef3b33ab24d28fd4"],["/posts/cc86a40d.html","737a5fbce28b026a7fb6c1bc391fd275"],["/posts/d36531a7.html","a99a8e2f1c129ea791e4ff03579fa2d3"],["/posts/d442e51a.html","195eac14ff2423df41d467059398feda"],["/posts/d7fdf01f.html","281959ebb81a5f0a5ad78d0f8dd92094"],["/posts/d839b0e.html","8324e52076ac483ea38742e89e54eef4"],["/posts/dcdf88c8.html","ef2d4d9fb2fa4c220cc56352708f07d8"],["/posts/dd378ae0.html","cfbadd14adea7cde71bb7cd620c1d4ad"],["/posts/e15be301.html","976e155990e8df457ea23aae507190cb"],["/posts/e2e4b4ce.html","da2103dcef876dd942e4dbd1bc204815"],["/posts/e35ef5bd.html","6d5bc2d0c520c514ecb2e2480ed172da"],["/posts/e462ba83.html","01c2fd9cdb65377f3cc78a8abe1e8542"],["/posts/e53204e6.html","a2d64c7ab6f1d22d59e6c8adfeaba81d"],["/posts/e5cd9bbd.html","58402c5fde21bd163f6d8a13df88c52a"],["/posts/e7a99a5e.html","fe792db0dfc8990536cfb11689dca051"],["/posts/e9318100.html","7484144618d41fca2c610b954f316591"],["/posts/ed52e6a0.html","1f1bb1cc9a2c16ec15c2e0089e6a752c"],["/posts/ee0ac59a.html","8654867e0defd3147069fea369d91ecc"],["/posts/f09c1ee5.html","9da0e3e6341a1af840a10d98c727ce18"],["/posts/f1252f66.html","3178b8ca6bd7fb695576c2e0f35701e7"],["/posts/f4af26a9.html","c7f81e37d2752e58eff1623c6215879b"],["/posts/fa3cd62d.html","978fe5876e2ee58a278eaf297d74e854"],["/posts/fb3794ef.html","59aec75435df79830f482a158b1df5b8"],["/posts/ffdfd6d4.html","48448844b79138fd8a4afb6ba5228c0d"],["/private/index.html","1d5749659444ff8a7ed81ea84a70ab9e"],["/random/index.html","d53197668ba4889fd53fa67114a02d76"],["/sw-register.js","1a5a2abb257686752edf6e7b7f84c15b"],["/tags/ACG/index.html","d7c75ff117d27a1bf49ea364f87e20f4"],["/tags/AIR/index.html","74ff2664e83b0b7877db9ccd763b5bb5"],["/tags/AliceSoft/index.html","b8a45e2c2cfe38d0c7c4e910a3ea174b"],["/tags/Butterfly/index.html","3940e0bd833916453da5acdb75fa7484"],["/tags/C/index.html","af8ca0762a98586587930bf915875648"],["/tags/CMU/index.html","abe90c978b48e6142ac28c085df5e48f"],["/tags/Crash-Course/index.html","c0ee30affc7595cfbc3f74f365ca3297"],["/tags/ETH-Zurich/index.html","41b4561ac4b3e927fe9868cb8b9bdcbd"],["/tags/Eushully/index.html","4d347bbe774da66f89171d725be3411e"],["/tags/Everlasting-Summer/index.html","31afcacb15b0142797253608024a727f"],["/tags/GDB/index.html","62a70970dfb544c4a443ec7e4c07b9bc"],["/tags/GRIS/index.html","2e470c25e393c9317f55ff53ce04f875"],["/tags/GUI/index.html","15872fd1be6fc4b0e696606cd84be4cd"],["/tags/Git/index.html","5e7fd38a22e2308ac8d26536fa8362b1"],["/tags/HTML/index.html","aa1da3a775ab33b7c8dba9a5220e24c0"],["/tags/Haskell/index.html","b242927d91effa4016868e89a5a2fa94"],["/tags/Java/index.html","37110dc14a736d09969a3837dc384257"],["/tags/LaTeX/index.html","517b4a35409b6795d426dba87d128220"],["/tags/MIT/index.html","d0de872c928cc14de2774be0dcc6fb62"],["/tags/Markdown/index.html","cc8a3c78ca3b99b1cb0280d64fdf3a46"],["/tags/Mermaid/index.html","3c83c79c966a1e87c0a98d48c05fdf59"],["/tags/NTR/index.html","48b614a81e780e39358af48e36be47ca"],["/tags/Pixar/index.html","cf79905bf5ca7cd55e51ee242634c848"],["/tags/Princeton/index.html","ea7c1e334c18ba969bfa9802bcf9e22f"],["/tags/Python/index.html","d17009ebc80cb25ef048fae33f517969"],["/tags/Qt/index.html","acad37392d57463f395fb614f02a52ed"],["/tags/R18/index.html","ef845feceb425038683051b17b319e13"],["/tags/RISC-V/index.html","14cb41293d550e522a88a923f433812b"],["/tags/Scheme/index.html","c0dfbe236e0fa5859d0df1d64fbeef2c"],["/tags/Stanford/index.html","1ebe5163813375fdf384dd6705ee7949"],["/tags/UC-Berkeley/index.html","43c92e44c0d5daa3f5afb94e8c533e93"],["/tags/University-of-Helsinki/index.html","888e4453ccd95b3858accaf410f30216"],["/tags/debug/index.html","25383c918eaac49aa45303aa16c1ed6c"],["/tags/index.html","4396784358ab0fef326c8e102dd0c9fa"],["/tags/key/index.html","c5c8657736dd94c8c781a7e7417de063"],["/tags/web/index.html","8037d9b34b92475aa1f5fbe16ea8b08c"],["/tags/三国演义/index.html","7246fc7d1e74161053fbe025de2697eb"],["/tags/丧尸/index.html","f4758d8eb31c133c173fc339e1cd259d"],["/tags/京都动画/index.html","32fc3dad4ac4358b0cbce933789fc381"],["/tags/京阿尼/index.html","567c000f96fe689afe04cd1d82e7cda3"],["/tags/体系结构/index.html","d1a392beaf19cd001cb4a6288a42b9db"],["/tags/信息论/index.html","70510b5f54019bcf3575338603ea1797"],["/tags/元稹/index.html","9c7a6336ecd1ef162747cf967851daa6"],["/tags/公路片/index.html","7a493001f2bb7ec6b2fdb0d2dedab07a"],["/tags/兰斯/index.html","932b9e3941d85bc4adc58b0cc4e7b9e4"],["/tags/关于我转生变成史莱姆这档事/index.html","d698ef9f5b644421ca19ca888e384bbb"],["/tags/冒险/index.html","2bfc6e4a9120412c6c01fc4095e828b5"],["/tags/函数式编程/index.html","b271aa7d76f292f37afb8ac9782ab911"],["/tags/刺客信条/index.html","ef5a6027ba04e818bc0601f7e43bcfc4"],["/tags/卖肉/index.html","35ed88b9f8d8e5b414b41b0df4e60581"],["/tags/博客/index.html","232849693145ab6cc8bd1736740b1338"],["/tags/去月球/index.html","7fb665d0fd8e58622bf0d5b8f83a5bf7"],["/tags/可汗学院/index.html","69f982792eae660207ea1330f7513c7d"],["/tags/史诗/index.html","775415c73f380e6e65ab22b5fc9c8c13"],["/tags/吉卜力工作室/index.html","9e7772b0f21f213ec2e6f4492fa5c7da"],["/tags/名侦探柯南/index.html","663681151a021763bf48f9265ad11058"],["/tags/后宫/index.html","3569df306c5e0225f0bee5454fb3b627"],["/tags/咒术回战/index.html","07d5109a1d3fcc889eacdd99bb2ee43d"],["/tags/哆啦A梦/index.html","3eebfd72733a49381e0d45b682a21d5b"],["/tags/哈利波特/index.html","5d6225b5e29bed63613f61005c1bc568"],["/tags/喜剧/index.html","e5f93553155364e7f0cee3ac64557d5d"],["/tags/喜羊羊与灰太狼/index.html","bf567228fb5d9cad0a38d4bbd8d4c749"],["/tags/四大名著/index.html","b8f500400486c51bbae0082cf302f163"],["/tags/图表/index.html","88fce0bab2efb761b116408a6fea6da6"],["/tags/复变函数/index.html","7b688ad41f5e993eeae790a843d055f4"],["/tags/孔乙己/index.html","05beaefb69ec406bd3fe2a60be789b92"],["/tags/字符串/index.html","af8e548f9f86f4b39a1e292abc4f5dc9"],["/tags/学园默示录/index.html","29667b065a16d0e3b3422981525d6cda"],["/tags/寻找天堂/index.html","eec4701d589f9f511cc39516b5b72976"],["/tags/希伯来大学/index.html","da421c219e4b2e41094716fc881489a8"],["/tags/异世界/index.html","3b8d565ac6ebe2860052103864f2a292"],["/tags/微分方程/index.html","b1bf92509533d71fc24dfbbf6e80a520"],["/tags/微积分/index.html","b5f2cff4a25267b18c54cd1dffff2326"],["/tags/恋爱/index.html","9582e431b1a5b65caea7cd355c7e435b"],["/tags/情感/index.html","49352b244aea7a464b39f1e2ec904e33"],["/tags/指环王/index.html","515f4381a50139a1e49103375c5b5eae"],["/tags/搞笑/index.html","121ab304cea2e0b7e68bd91e705c24d6"],["/tags/教育/index.html","90e0716c32816a920494d98050edcead"],["/tags/数据科学/index.html","fe817450b7cf77f82defb48e8086e73c"],["/tags/数据结构/index.html","1af1ee7e49e961caba0030272be62ff8"],["/tags/数据结构与算法/index.html","c4ad43b0ed914f38381d8428a0c31139"],["/tags/文字排版/index.html","228af0357c7a23465f046a2ac0fa09f5"],["/tags/文明VI/index.html","77674dcedd1bd58abbc024a15ee40d97"],["/tags/旅行/index.html","bbde7469782b4dc59e776d2fd990f526"],["/tags/无彩限的怪灵世界/index.html","ab2fb85966fdb37a0c2a1d165f09242f"],["/tags/时间刺客/index.html","f849b52d02bf5476597a320c02dd802f"],["/tags/有生之年/index.html","0e08f9b9c0f59c7a6be85f6255581190"],["/tags/李商隐/index.html","5d26a573c87d11fb3899acd8d403a023"],["/tags/李白/index.html","e482db92175cc979dae77d0445c044be"],["/tags/李贺/index.html","bb27002f72f56bfecf9e1782adfadb5b"],["/tags/杜甫/index.html","bc7c2a1d8877b7291730af3029e67c49"],["/tags/校园/index.html","4382ff3efc88bf256e01fe7d6b0cf72e"],["/tags/概率论/index.html","b62f780783409a99575365d046fafce2"],["/tags/正则表达式/index.html","828f73da563b08ae5d3772f8dfdb3eb0"],["/tags/死亡/index.html","70162c4fb6e0aec2c56305be802bb2fa"],["/tags/水仙/index.html","b5031af5144dab097994de1b20e6e638"],["/tags/治愈/index.html","bc8ae1e7c0e027803043e1f198fd6aa0"],["/tags/烂尾/index.html","570b3c360a4bc6e6aa3cc9965055a6c5"],["/tags/热血/index.html","1c385371c3ac5df60de3c9890ff0bc8f"],["/tags/爱国/index.html","a3e0ff7ffd4d28260a31c7a637a0872f"],["/tags/版本管理/index.html","7684c21ef90e6afba43fac73c425d356"],["/tags/玉子市场/index.html","536e67ffd1a1c42fa92d0884a00dc8c9"],["/tags/玉子爱情故事/index.html","87bc04f3636c42a96f02176c53919d8b"],["/tags/王维/index.html","e6847b9691417f72be63035001077ca7"],["/tags/现实/index.html","cb0a9dbd034c00ebee4c8ecdca3498d8"],["/tags/甘城光辉游乐园/index.html","fd1d0d8f3d465ab5806b8d2ff2477b16"],["/tags/白居易/index.html","0a4e67f76fddf5140835e903ba98c9b5"],["/tags/白毛/index.html","f2c0aaa30b30f9fb86f20cc2fafd181c"],["/tags/短篇小说/index.html","393b5368b0c876f576406c615dab11d3"],["/tags/神话/index.html","9afa9cdb8fd5d14684ce975b92427f25"],["/tags/离散数学/index.html","6b59c73f290c50c8b20aa1dc0326fa40"],["/tags/种田流/index.html","c103dc67e9ba1e7b087d82f946419323"],["/tags/空洞骑士/index.html","9abd7bd599958e4c693d289e2d94197b"],["/tags/童年/index.html","1312378c0245cf3ae3c26525cdaf09d5"],["/tags/童话/index.html","5ea95654b58b19182c9ba8f41fde3ca0"],["/tags/第九艺术/index.html","eb85a2e33e7c9c34d34e20f50e3b30fd"],["/tags/策略游戏/index.html","2e2f01b44b5a4d992121b92ec771bcc8"],["/tags/紫罗兰永恒花园/index.html","7d67acb01e328b0f807bfee192816d08"],["/tags/纯爱/index.html","2c45329681045c2ddcf985c9056e67a9"],["/tags/纵使手残仍大爱/index.html","510874392a60890bef2f35e3aa072edc"],["/tags/线性代数/index.html","7752a41a84a7f089c2539d7865aa216c"],["/tags/编码/index.html","b0796eb153d119950ced4713312d4f78"],["/tags/致郁/index.html","5036eb1b74bfcc97e46c2fe3abba4f48"],["/tags/苏联/index.html","2fe36d529a427c390e5db3e907a814d6"],["/tags/苏轼/index.html","a81a0b651a55e8f4e501a5245cb3129e"],["/tags/英雄/index.html","842f4f4e256fc10d0d10bfcff3eb9a43"],["/tags/计算机科学/index.html","6adde69c7b8ef5d381f094ffe10b66d5"],["/tags/计算机系统/index.html","75bc61f5b8dbcf9592ac43608d355528"],["/tags/词中之龙/index.html","79f0c99056b537aa554d72e66ec6d7e4"],["/tags/诗仙/index.html","705bbeecf3abb3012d4e0dd897aaf122"],["/tags/诗佛/index.html","e7ab764b24fb04205e9a5f576a9b8162"],["/tags/诗圣/index.html","56c67069036f1e536f9579adfb4e2271"],["/tags/诗词/index.html","149fb08f9c5d5dfccd34941c0ed80f94"],["/tags/诗鬼/index.html","920c387c8b33baef39fc5e5ec46c0009"],["/tags/读书/index.html","b3d3110303c6e75e75cc95619b297fed"],["/tags/豪放/index.html","57c532be992b4b2a05249eb62f56204e"],["/tags/跳跃/index.html","a2b7ee420ef2616e548c65ee4d357556"],["/tags/辛弃疾/index.html","5d63d0d4943c961a0a11e7ff2239a501"],["/tags/运动/index.html","1e71fa52e47b901a3c82137c6a6481ef"],["/tags/钉宫/index.html","196559575eb4976f47b2d580fc5b2b9b"],["/tags/银河战士恶魔城/index.html","8fd9173efdb90dafcc9c7abeabbdaed1"],["/tags/陆游/index.html","f62bdb47334f226a47bc33a0c49ddad4"],["/tags/零之使魔/index.html","816dd4f956f4c6cbe909608b351a5fbf"],["/tags/霍比特人/index.html","f3d0e659d3f96f7a21dd99d57afbbf07"],["/tags/飞屋环游记/index.html","779034ffde00552dd6a8e119a8e389eb"],["/tags/魔戒/index.html","b16a30b9bf605ad57905d2130df80f62"],["/tags/魔法少女小圆/index.html","2e3154bc0320969a20729dc3992d4f7a"],["/tags/鲁迅/index.html","3dff556a8172e0e6bdaeab49d0a8650a"]];
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
