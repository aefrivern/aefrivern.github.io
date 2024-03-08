/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bc8bd8dc9a178b5d256931da21b7fadd"],["/about/index.html","70787aa15ec8fdef61424d0610ad5422"],["/anime/index.html","492e7252e7d40c45bb914c7fd901fc7e"],["/archives/2022/11/index.html","9e6e89077a7f8be67d7b7da19bd5bc1d"],["/archives/2022/12/index.html","e541a275e5ab6a9bef1df368f996dbb1"],["/archives/2022/index.html","53786680da2cd3ccfc7f4770cbc64734"],["/archives/2022/page/2/index.html","0f4a7d432752f7c6bb8aa7a20249ebe8"],["/archives/2023/01/index.html","551ea35ad6d5b03fd5372b9602ef999a"],["/archives/2023/02/index.html","e4d30da098295a54844e7b96ce1e6077"],["/archives/2023/03/index.html","a44e8b02e0bc57c38898c34143db32ff"],["/archives/2023/04/index.html","e35d265c02e26da8acbef402e54bac86"],["/archives/2023/04/page/2/index.html","3b80499fc199b4e38de0ad4208640726"],["/archives/2023/04/page/3/index.html","c7f725562c3845b67f0f0b7755b918b3"],["/archives/2023/05/index.html","c295d9941caea7a01f449009fb7542c2"],["/archives/2023/05/page/2/index.html","8891f71a778ad88ac4f6c97ee7305c94"],["/archives/2023/06/index.html","7e714c7457775e636ae258dc9d87c2b2"],["/archives/2023/08/index.html","5e9c13bbc65918f67463d0beb10c73aa"],["/archives/2023/09/index.html","b407f7f1634cc78cb7747e348b11bbe1"],["/archives/2023/09/page/2/index.html","8b6e9029742a2e1f233adc88134eaf36"],["/archives/2023/10/index.html","0ec261099a43f55189d660bb3e204f48"],["/archives/2023/11/index.html","1bd8f9000ee2d6e78b0b91b34aabb0c1"],["/archives/2023/12/index.html","de4c076ea7644e1cbebb74abb15c0c41"],["/archives/2023/index.html","8cf02e4aa4c0e95ab74de4657c772138"],["/archives/2023/page/2/index.html","3ffec0f186ea4226f09d3968e61f5de5"],["/archives/2023/page/3/index.html","2a7e6012882464f95fe266e97dd5db74"],["/archives/2023/page/4/index.html","5dff8ff1de24ae9bb39aab1f32208729"],["/archives/2023/page/5/index.html","b38d26711bfcecee8166de3c40fcf6a5"],["/archives/2023/page/6/index.html","ab2a16f658316a4109d4cc7c34742e05"],["/archives/2023/page/7/index.html","175c53842e60e2c0837b8a4672cf300b"],["/archives/2023/page/8/index.html","671b0c9350d5a3aae2ae02dd0d424145"],["/archives/2023/page/9/index.html","a4cb6c776be6dc4bbe97f73f77c60c32"],["/archives/2024/02/index.html","0200861e15375b1919553ccc5920c445"],["/archives/2024/03/index.html","aad6df5ea563602bbabbf398c6e33a39"],["/archives/2024/index.html","97bff5fcf01fb1fd3cf9e4d63ab6c104"],["/archives/index.html","fb3375d10a2d17ed7a44bb12accc8e63"],["/archives/page/10/index.html","abf1f29f77d7f727655570f3c0aca291"],["/archives/page/11/index.html","464ce2a22fb82f6ad3663f22d577d067"],["/archives/page/2/index.html","32a8fbef312215f1c159cd7072174035"],["/archives/page/3/index.html","e6884f5eaab44babdb5e3f70b208d17b"],["/archives/page/4/index.html","51ba5049602a05d890330a2acfe00650"],["/archives/page/5/index.html","e4e87b892be12a213865f5a5fbd839dd"],["/archives/page/6/index.html","3241e5889926143f185799037f972d97"],["/archives/page/7/index.html","533bf308570de80e2d6e038e370b64c4"],["/archives/page/8/index.html","6698653d54deb6bcf05db6f9b0b0cc7e"],["/archives/page/9/index.html","16357cee4ff97062e9cd746c7f5fa14e"],["/categories/ACG杂谈/index.html","4d88d4b6d406a5f49dc3a2511227a1ae"],["/categories/ACG杂谈/page/2/index.html","1e11f7f03b8362ffd3ce57eb4b801685"],["/categories/ACG杂谈/page/3/index.html","12a159114cc335aaf23a3d357ef57f14"],["/categories/index.html","822d0f86ff862e28c20a13adc4488b74"],["/categories/学习笔记/index.html","bc7d763d680eb8779b7e9524eefacedb"],["/categories/学习笔记/page/2/index.html","7eefff7fe118b93d6333cb6749d9639c"],["/categories/学习笔记/page/3/index.html","1b5c7cccc5422cbe2882ab6c54579053"],["/categories/工具/index.html","de35b562fa093a9b68e523d44e0f06fb"],["/categories/工具/page/2/index.html","753a213e27592e004ce91d78579c2fc5"],["/categories/游戏人生/index.html","93dbaf71c31332fc12f95e0e0cbd54da"],["/categories/游戏人生/page/2/index.html","46bebaa657a520135d461a5734d5621d"],["/categories/读书笔记/index.html","ac80dd1b4fc5f14486a3ce16f85b7b76"],["/categories/读书笔记/page/2/index.html","0cac8bd255bf6c55e72e624a08acb3a6"],["/categories/闲言碎语/index.html","b5bea5d32abec4947a94f4dc60756e39"],["/census/index.html","71e307680b01577416e5778af30a9d64"],["/charts/index.html","72a78208ef8a010ea1cd52ab51406a4e"],["/comments/index.html","93e05c1129cfc9be19c586aa8bd12930"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/font/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/font/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/font/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/font/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/font/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/font/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/font/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/font/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/font/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/font/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/font/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/font/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","9ffd441ac3d76b2dca3f3b9d2f226fa6"],["/gallery/index.html","fe4afcbd8cec484a531cde7fd98c5ffb"],["/gallery/wallpaper/index.html","c2054e0dac1a528c31832f13aac9a31b"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bed9ec1dbc4ae6cbd69a8fc9340975c8"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","c57dd09b9ef5a57ddd7e8c7c49500fde"],["/page/2/index.html","4f8e0a06d0262d3e0adb12babe860da8"],["/page/3/index.html","4451a17cb2cbce0e60ce2af84e6d4901"],["/page/4/index.html","359f87c77a18b6dc023c1c58622486f0"],["/page/5/index.html","ea0c783ccd912760d05a6f5852f9d21f"],["/page/6/index.html","a2d259c0211c4e5430f71bc7798d9cf5"],["/page/7/index.html","b41e17a47a7f91b2413dfd726b3d8b8b"],["/page/8/index.html","317df38f7cf72f32e64e933625230c9e"],["/page/9/index.html","5720794f66855de324e94b6224cb34f1"],["/posts/106331b4.html","434e1a3a2423d535cc1faf02bba4837f"],["/posts/1185a02e.html","b8b0ca7fcc142fe492ed120aab1aa5f9"],["/posts/12e06b11.html","5c9697b54518fe6a1e7eb9b46f3e84f0"],["/posts/13aafbc3.html","29bf3a90604e40ca58664e90cd999cb3"],["/posts/167c7c45.html","9774f0d2794edfcfcb9f76703b65c1c2"],["/posts/1743dad6.html","e574ab1e28af9020e61f224a1a6e71e4"],["/posts/175a8e1.html","d090a3c234c2c0aa58ef0a858c78b030"],["/posts/1be398e4.html","948b9b530aee6fb501d25889e38b5d1e"],["/posts/1c5a0321.html","6980bc7a91a7aa0dd8dedf129ed39b49"],["/posts/1ec7973e.html","be5d4feb2643e65a10528004effba532"],["/posts/1fb82448.html","3d214dd5cbdbe8c13ee3553adf239a0b"],["/posts/21f18fd2.html","23df1e46dee561c53e6e2ceac7031237"],["/posts/29c507fa.html","45a3820625a4d705fa24958db1bebf1e"],["/posts/2f34eb00.html","52d6a165e6c89387ca7d8df0d2983ac3"],["/posts/2f57a694.html","9ed6bb1e6f1ee32841f675852c9639ef"],["/posts/320cf12b.html","5570181d2d2e2fbaee7c824a8a58f3ea"],["/posts/353e70c9.html","357e167f38b761307297caf347b3af95"],["/posts/374b54d5.html","a7dc9eb6a9519129cdb0f6e49716126d"],["/posts/3871b764.html","a8291b922d4dbc26a1a11babd29359d9"],["/posts/3b308caa.html","28e5b43693530c8e3bf0a281f4c87c85"],["/posts/3c3cdb74.html","d324e5008ed82a73d61402158e9d8d24"],["/posts/41f65cde.html","aa7134a742f127d5625d24ab5a126290"],["/posts/4208fd6c.html","db8c4b4e4108aedc01a8d0ca86dc837a"],["/posts/4392373e.html","e3372d96ec264bba651c666076dfbac9"],["/posts/440ed920.html","b387b516e8d9867385734611d00bead8"],["/posts/447a8d68.html","c8032f03ec40107f9a61e4d3439740a4"],["/posts/4d2b51ac.html","5da65121b93981aaee33fd3616ce484f"],["/posts/4db1a52a.html","897b26d7a8c15941b206936ddd0f6cd5"],["/posts/503ae89.html","69d50414e6590648ad2eb60606fa6f3f"],["/posts/518e2799.html","6e7c2dfe87f98b5063e52efa5e8c05f5"],["/posts/535fd087.html","49f27e7a664b211c1cd33a849e26c6e5"],["/posts/5923cba3.html","a26dd2adee0dadde76596c385f33eef7"],["/posts/5c1bb6b8.html","6ca12f47c2aa1058a78dec0e8466e290"],["/posts/5dc45f0c.html","7c4ee4439cb6e97219be47667717b03b"],["/posts/5f2caa2c.html","47ddb33e3d0c3d961888350c9b1cac7c"],["/posts/616be7b6.html","eb565b6807ddba901bd57960021c9ff2"],["/posts/62a1ec0c.html","457222df38603f63c34a0e9aafe5d956"],["/posts/69fb361e.html","571293c602edf06a50372fedb2c8adca"],["/posts/6a8518ce.html","87f194b656e34a5c137b38494952766a"],["/posts/70685119.html","be47d1bfd1cbb7f153bb375bc130efbf"],["/posts/743db4aa.html","f90806044ab2a49fb618b350cd8f48ee"],["/posts/7b67faab.html","a2b2745d90d999cf95e7dbd00cd9a1d7"],["/posts/7b76be01.html","001f70e2d6083be7fcfb90a8f15d306e"],["/posts/7bff939e.html","cd3ad535c70fb7f49501ac147ff7acee"],["/posts/7cc4ca07.html","b02c90d0b1484d23b871a2ab24aa002e"],["/posts/7d257210.html","6fd3f02ce23a28bbbdbed51c12f3a27e"],["/posts/7e6a5c94.html","391fb8252c03dcb498e2f4e50ac19cb8"],["/posts/7ea0cbe4.html","94bd96e6be862683ce079f8299031ac0"],["/posts/7f382da2.html","1edf04fb32228f7c920b4b6021baa8c9"],["/posts/7f8d32f4.html","e6f31514edacd0b20db7031c826e5200"],["/posts/7f92999e.html","dc1817659c30945b002e06f0a90745f2"],["/posts/8207aa48.html","8215d41629daea9752cd6689bcea5949"],["/posts/836ea9bd.html","cf03963a5263f2306e7aba479f57155d"],["/posts/84cae757.html","11d9ff069fffdf7ccfe1f340c18121b8"],["/posts/88200036.html","191c04f5722768a6efb7383bdec98e0a"],["/posts/922fb64d.html","e11a92e28cce650fe805eebdcdb2553d"],["/posts/98332b29.html","cb36a8d8260edad4860acf41247d95bc"],["/posts/9a1a736f.html","e9b8012802440d633984f9eb9bc66070"],["/posts/9addd0bb.html","58770256bb0478e3dc1c1b72b6691a81"],["/posts/9b44950b.html","d840c30bd166ee6c2d3f3932138a8cd2"],["/posts/9ca149ab.html","2a893a4d1c529b61fa396873e8ee0554"],["/posts/9e4446bf.html","c815eb064de3dffb40181a84563b1bad"],["/posts/a0271e58.html","caa79ad294f314e6563e6cc2d8114cb1"],["/posts/a13c1dba.html","b50d95ca3abd6ceaf3337fd5e83ac541"],["/posts/a1f2a4d4.html","c1c88e6f4c61fdabb45d2b00b84248d0"],["/posts/a5f300de.html","0e3f902f309a2364843fbbbd8c7f4c76"],["/posts/a98766fe.html","65a133fe66e50d498c36f1e0558b7de0"],["/posts/a9f63847.html","406b9c97fdb9b4589f11b4193d85bc0d"],["/posts/ad31055e.html","8f49668589737b7c50c7f74c215ebf8e"],["/posts/adcd6e20.html","f3e64f24b069e3a6f1b8ab23d3944429"],["/posts/b0fa4c58.html","50aa92d9669e8128c84f7379ff9b44e7"],["/posts/b1168675.html","0aa4bf3d21e13239df92b78d96bb960f"],["/posts/b291b1dc.html","5c9adfdaef347cab5ee0e666983f3678"],["/posts/b2feeab7.html","6d8b34db7262504d1c38777eca98c412"],["/posts/b6d66f1b.html","ce71c415fcee9fbb6a9e2e8d6c5ed369"],["/posts/b7525d11.html","df9eec08cbe0bc6148cf57e4c4bc230c"],["/posts/bb154b63.html","bd432b9a893b99fb149854fcc1ca720e"],["/posts/cc1b9611.html","01068b0ea93551f8bdf6e1ed37f291a4"],["/posts/cc86a40d.html","69fac281d55f3cd245f7ee6b82aeb26b"],["/posts/d36531a7.html","d1a610fcba93347be79f91f7b6f5a298"],["/posts/d442e51a.html","c0cfc1145314200b0331aa7c9530af8a"],["/posts/d7fdf01f.html","e0f882b3e25d6c99d240d7f84e3c082c"],["/posts/d839b0e.html","4cbb286d99f995f3eaae05803d320666"],["/posts/dcdf88c8.html","20e1e53a13ae603a05377720c0ca9fe4"],["/posts/dd378ae0.html","ee565eeb3feb6e35960b62280db5bb50"],["/posts/df2849ec.html","61dee72bf04857eff5a4aa73d733a709"],["/posts/e15be301.html","76c7849dea85884e0531ae1b71ebd33e"],["/posts/e2e4b4ce.html","04ab57827d7072d413e8d7891fb73e59"],["/posts/e35ef5bd.html","15fdf34b772e3737edd1ee6cfe58074b"],["/posts/e462ba83.html","036f23ff4c5077a991f29757ee91a569"],["/posts/e53204e6.html","18b0ac93b54c4f45fa733926cbcd9d7c"],["/posts/e5cd9bbd.html","cddb1b1cd210b1157ab17c451a395a9c"],["/posts/e7a99a5e.html","4c30755ef1ec8b8551ce85197c0c9649"],["/posts/e9318100.html","3c2eb72fea0fedfa6c2b02738ef543db"],["/posts/ed52e6a0.html","776f3d025b6c779a5c991a6b82929b93"],["/posts/ee0ac59a.html","8f3ce700a07959c937eb0dd965395a46"],["/posts/f09c1ee5.html","1fb0b517645733a5505fb6f868308d06"],["/posts/f1252f66.html","4be0281e3d5d0bf371a285f5d4e538d7"],["/posts/f4af26a9.html","c54a4a70fcfa6a7f4f135a74f4218275"],["/posts/fa3cd62d.html","4c35814729847bf5de43cad0cf5a2b31"],["/posts/fb3794ef.html","4afb378f7d56c749a48f7af35de6f70a"],["/posts/fda4520e.html","da42c2e11c5b1c46e8b313b3d239f3a2"],["/posts/ffdfd6d4.html","b51ca1ced693d268e4c9d067d73a0626"],["/private/index.html","92c417468f0b887491db807ae56dce1a"],["/random/index.html","83871aa19186a8bf2fdc439ce3c2ecc4"],["/sw-register.js","e32108a6217d24be05836f8dece436e4"],["/tags/ACG/index.html","a4644d3d15c4ef1b367eea17962c36de"],["/tags/AIR/index.html","4b50eecdeb1988bf2e1dba092afba04a"],["/tags/AliceSoft/index.html","72209c67e529b2a188b5174f7ef22fab"],["/tags/Butterfly/index.html","c90f556c187ba81e73eef2e5174190f2"],["/tags/C/index.html","b9b795916ea4ef2096981100ca616bbb"],["/tags/CLI/index.html","4b350d9bbd645d19048f3ee22865c714"],["/tags/CMU/index.html","1992e9a39bb954430803751d6ed0cd47"],["/tags/Crash-Course/index.html","420ab23bfa41f5356c615470e2637836"],["/tags/ETH-Zurich/index.html","b5c7f17240ddb04f9da35992419391a7"],["/tags/Eushully/index.html","662a0b1a0614ddaaffa264fad78c544f"],["/tags/Everlasting-Summer/index.html","dede4e8fac79a995d71821f22888d845"],["/tags/GDB/index.html","f25d1655fb4440169515e6ce12ded07d"],["/tags/GRIS/index.html","d479ecbfe6a33e2854db2414563c8d93"],["/tags/GUI/index.html","576f011da9562124b472c6f7eb38016b"],["/tags/Git/index.html","643d8fede78b849d4cbad21a6aef0aa5"],["/tags/HTML/index.html","8048672d353c8568ed12284a4e4b467b"],["/tags/Haskell/index.html","dfef1a2342665c2499f102e21cb8c893"],["/tags/Java/index.html","839f62c7b09128b07d1a8b72a1a3a1db"],["/tags/JavaScript/index.html","b198667a3324e676ac54ac98b5826ab6"],["/tags/LaTeX/index.html","83b12e133344284166d8ecbce7a93fc3"],["/tags/Linux/index.html","dcc35c927f189053582a1f2a12412eb4"],["/tags/MIT/index.html","b0e62ce8a7b313715d3225acc6e23f7b"],["/tags/Markdown/index.html","e0f35e3b4ad2b8595565b93a466bf958"],["/tags/Mermaid/index.html","d39f9839d1d5deed39a67b9a7a3ecdbd"],["/tags/NTR/index.html","bed8378770b3337884547d5105734377"],["/tags/Node-js/index.html","e9cbd4be6f85a9e583d6108e00d58f8c"],["/tags/Pixar/index.html","fcd3861d52816b307b49c3fa54849f47"],["/tags/Princeton/index.html","077161f6f43a6409b48bc01133aa3cc3"],["/tags/Python/index.html","1c2e9996ac377184c5ae10844ec20598"],["/tags/Qt/index.html","27e0f122eae573316c6e30d0d6266e5f"],["/tags/R18/index.html","1cfc7d107473bc12e007603b14cc0f8e"],["/tags/RISC-V/index.html","1d4b9fa888883b5e26458dbf19298d7e"],["/tags/Scheme/index.html","37dcb7731b657f87a77625f6c7fcb91e"],["/tags/Shell/index.html","006014f76ca3d92384e80210144ded06"],["/tags/Stanford/index.html","2226f26cd3ee163123428c8885ba6f30"],["/tags/UC-Berkeley/index.html","a9c9b900731cc2c39262235eac11b078"],["/tags/University-of-Helsinki/index.html","7e11195eef438f23dabfac8f4dd0e665"],["/tags/debug/index.html","d0210c1ca51e5029962abac644e69604"],["/tags/index.html","4df8720c5aaaa1c8b45ec92e378dd0bc"],["/tags/key/index.html","da58911f9d8cbde7524c04fcff8849f8"],["/tags/web/index.html","f3720148312615f6f5be81ee68328164"],["/tags/三国演义/index.html","000ad2952d8a11a7492c5585a224324f"],["/tags/丧尸/index.html","3584f8a908c57c7a30d218328afd374a"],["/tags/京都动画/index.html","4c7aca605f9d73f7c6f3850d7c68889d"],["/tags/京阿尼/index.html","fd4dc5ba40e4a9e36c7ca13c9b9983f1"],["/tags/体系结构/index.html","0c524375b8590d6a0c6d945cc41420a0"],["/tags/信号与系统/index.html","1aa13a22e3a7408c587699b0fb228225"],["/tags/信息论/index.html","451a2f877c85dc3470de30cf8a7577d6"],["/tags/傲慢与偏见/index.html","ba76feadfcfda94b66bebfd9fa2d936f"],["/tags/元稹/index.html","d0daaa76fbc5a6714be7859445f5d889"],["/tags/克苏鲁/index.html","5479145ec4b47987795de8db6f8a9382"],["/tags/公路片/index.html","286d8d9174784d6711b25435f0c96c81"],["/tags/兰斯/index.html","ac7dd1fa2ea56c09d88cf083eeabe443"],["/tags/关于我转生变成史莱姆这档事/index.html","d2928343dfe0b5b3263349e8fd9e1312"],["/tags/冒险/index.html","f717203f49382d4449860c67a8af418c"],["/tags/函数式编程/index.html","b2c18ef91f51fe9a3122235628964eda"],["/tags/刺客信条/index.html","43d95d39f57bb1e110fea3f164d982f2"],["/tags/卖肉/index.html","4b0a7a2206c16a0dcd0e0c730ff57b42"],["/tags/博客/index.html","c2efb02a1270a65b6ad5c85b90adbec5"],["/tags/去月球/index.html","944ada2d77320fde2a9b540a2ceb0dde"],["/tags/可汗学院/index.html","9b93f1fb350e64f823282e0d4f50b2b7"],["/tags/史诗/index.html","2aa7ef358c684fd09e65548f3c6791d7"],["/tags/吉卜力工作室/index.html","dcf94a3af2841dc39e329a3d55156e74"],["/tags/名侦探柯南/index.html","c48c2fc64b70345418e6d0fef9daacc0"],["/tags/后宫/index.html","18fca47986715c169f396132431cea0a"],["/tags/咒术回战/index.html","b274eb665cd8e1a4df003c299283452b"],["/tags/哆啦A梦/index.html","9359f9ca1f89a6997ed9d688eb88ca54"],["/tags/哈利波特/index.html","f2e018cce860af985849da4de1404047"],["/tags/喜剧/index.html","fb6c497e88606555fa7029daa987dd95"],["/tags/喜羊羊与灰太狼/index.html","f5656541765afe001b50261251c0692b"],["/tags/四大名著/index.html","4e1b9154f417b57d66233481a56267ff"],["/tags/图表/index.html","3a23fb39b70dd048e32c9e2d1900eb41"],["/tags/复变函数/index.html","ddb91215a1bf2e7a5db4d921180912a4"],["/tags/孔乙己/index.html","2befa0db1dbb086103c8fe25415d4b2a"],["/tags/字符串/index.html","1766bad3ca70d61eb5ef0275df323a0b"],["/tags/学园默示录/index.html","5f840c952fd438b1bddaecf694ade46d"],["/tags/寻找天堂/index.html","a23f94fedabb92f168e5d7c56bcf6502"],["/tags/希伯来大学/index.html","b3204489858f08e637ab3cfd2ead1d6e"],["/tags/异世界/index.html","831d51938a446cef59284e79a1b94477"],["/tags/微分方程/index.html","c6435c04ce24c7b5f4f7d9443f490992"],["/tags/微积分/index.html","11b1e38441498209ddf50a282142426e"],["/tags/恋爱/index.html","9a0f4d2904593d0e6efe60e96be00364"],["/tags/情感/index.html","4d2af93301562d113274e10487985b56"],["/tags/成为简奥斯汀/index.html","e93bd435c4127fa0d5ef73beea671a4d"],["/tags/指环王/index.html","368bcd79fbaee4a9d9b201aa747f1e25"],["/tags/搞笑/index.html","86c1dfa0fc9d549638abd34fe9cab7c7"],["/tags/教育/index.html","42aa7fe0c6afd1502727b5c9118d9712"],["/tags/数据科学/index.html","a9b6744f6c6c639b5005ac3a71bcccdd"],["/tags/数据结构/index.html","6c6cb72f2edd76db542cfd9ac38f0a05"],["/tags/数据结构与算法/index.html","9b72c7473cde39669e6a8877f7dff586"],["/tags/文字排版/index.html","58b995781bd15279d572c8c09f57701e"],["/tags/文明VI/index.html","0f899bf2b286ade62a4e10ead95da030"],["/tags/旅行/index.html","7d472b0cdbf5361bb4ff6d82b6f6bcc4"],["/tags/无彩限的怪灵世界/index.html","fcb74965c8f0abea7b1aa71242cc9ac5"],["/tags/时间刺客/index.html","b4a011837e220888ec3535b1e7a3bd4b"],["/tags/暗黑地牢/index.html","31cf7b258adeaf49619fde395f883d39"],["/tags/有生之年/index.html","70094eddf1a4e268b4d36de6c13830bc"],["/tags/李商隐/index.html","428fb8ce59d32cc4528282d58cab3b09"],["/tags/李白/index.html","7919d0805a37625e3f9a0a016bc979de"],["/tags/李贺/index.html","c185370529c3c8f6e46565445d3e3981"],["/tags/杜甫/index.html","f842ba8c0e798033d08d1e6276fa3640"],["/tags/校园/index.html","769885e88851f4054c6dcf409bcd1c1a"],["/tags/概率论/index.html","d09f7dd2002a324ec4f42d49c5bb91cb"],["/tags/正则表达式/index.html","19319b655cfa39818814d990576be452"],["/tags/死亡/index.html","3645852505ae01ef8bdf31b21a8d5d19"],["/tags/水仙/index.html","cd37cc8dec2ed04b02ac44d75ff6abe0"],["/tags/治愈/index.html","32302813c7b7731685fcc5cb790c11c6"],["/tags/烂尾/index.html","80cdeb566f2615b3129b5e1a27918fb1"],["/tags/热血/index.html","c4bc1c55e6342018967773ffbedd40ae"],["/tags/爱国/index.html","a61fdb1fc168670de781133234e5e088"],["/tags/版本管理/index.html","c720a8140bdb7f3a42ee1896bf4ef1a2"],["/tags/玉子市场/index.html","9dab4bbcd53d3ab6c83ac495399693c2"],["/tags/玉子爱情故事/index.html","677ce7f057e82db5925a8cab27692ad3"],["/tags/王维/index.html","08bd6021b970f82c1cda83daedaaa22c"],["/tags/现实/index.html","f37ac998d223b37ade40fdfdada3c6fb"],["/tags/甘城光辉游乐园/index.html","512f73090ffafb9599027a5a00863e7a"],["/tags/白居易/index.html","622c4ad6fa836d3312b3cc769c261364"],["/tags/白毛/index.html","c59346c1c7b118a11a463ef93aacd8e3"],["/tags/短篇小说/index.html","faf1fa9a691c0f1fad6aecbdca685cce"],["/tags/神话/index.html","bc46dece0e4dbcb3ca324c0ade740c1d"],["/tags/离散数学/index.html","e45680bcd1dde3d9d69abaafeadb9613"],["/tags/种田流/index.html","35fc36e67f3a654be1c9f71c7e3608d4"],["/tags/空洞骑士/index.html","ba91932c7fad5349fe89563f7e885f49"],["/tags/童年/index.html","00e1eaf8bc32e3b64a08c2f7962ad22b"],["/tags/童话/index.html","86c06121f28a833ce2574766d8b8a0e1"],["/tags/第九艺术/index.html","1a83ae85a0843d0c83c3b739318886f4"],["/tags/策略游戏/index.html","848cfe07bc74a4acbc8795e0f9481f06"],["/tags/简奥斯汀/index.html","eebcc1e06abf5d40eeae465f1c874577"],["/tags/紫罗兰永恒花园/index.html","ad1a6dff8180f33f28c23c1eedbca0a6"],["/tags/纯爱/index.html","bbfd5d8b5a237b7d2392f5d2391a5264"],["/tags/纵使手残仍大爱/index.html","29990b017bdf83953d1ff879098082d8"],["/tags/线性代数/index.html","11843176c744a72aa9946f09d304a892"],["/tags/编码/index.html","0f892574054fa70b69d1bc7860dbf1d3"],["/tags/致郁/index.html","ad2506979cd408909f897ccba1fbb542"],["/tags/苏联/index.html","fa98eab95055a2c8c3adab270e6da76a"],["/tags/苏轼/index.html","90eb9a48cc75c5b87cf60f98e228b7d4"],["/tags/英雄/index.html","2f76d81f1f09e47750870ca501e8225d"],["/tags/计算机科学/index.html","cb2db3760395c7709656cb23e4c3b31f"],["/tags/计算机系统/index.html","8c6b90498fff42e0776a4e0e4bf52015"],["/tags/计算机网络/index.html","5d4b66520f0fcb2b0a668e324178d980"],["/tags/词中之龙/index.html","2eae39d534dc8e9b2f8fbe1d1ff974c0"],["/tags/诗仙/index.html","dfa8f9ff6b17e3454393a256b4bfa05d"],["/tags/诗佛/index.html","5d7b2cd3e9bf8bf5f177abdfee60a486"],["/tags/诗圣/index.html","0ceea235f058d2aa021b916b7d2d77c1"],["/tags/诗词/index.html","c371ace773bd3f89add3d7f6823d655d"],["/tags/诗鬼/index.html","a2c3993818dde69b0ca79fc18d267eb4"],["/tags/读书/index.html","1bfa72aedbfc06507c889b0e98534f32"],["/tags/豪放/index.html","1decf17ec2220bc73bea003c9c5f4d9d"],["/tags/赫尔辛基大学/index.html","cd9b2a117f55c986ee56b93eb97be414"],["/tags/跳跃/index.html","c60a16edaef8ad3340db3d13906731e3"],["/tags/辛弃疾/index.html","7f66f3cb3fab4940e8a5c7b25db14859"],["/tags/运动/index.html","3252603c6c7672f559fcd5310040f97c"],["/tags/钉宫/index.html","07f86f75b08267a014a81b355a7ae8f2"],["/tags/银河战士恶魔城/index.html","8ea8e7dcb37d1cd8e5b9504bb2196afa"],["/tags/陆游/index.html","1d5b3f33d0a6ade4926c20cb0d79d243"],["/tags/零之使魔/index.html","cbccd3bb539cf23d0cadd09a52050dae"],["/tags/霍比特人/index.html","39cf4225ddcbd971fae710bf69061f41"],["/tags/飞屋环游记/index.html","a650af8fba3ff8f064c461b53cb491f6"],["/tags/魔戒/index.html","74d8e1340516bd31b126bdc9a636cc94"],["/tags/魔法少女小圆/index.html","2ba56fddc00b386dfcbc265ccd448c24"],["/tags/鲁迅/index.html","5662ee7f037ad946e9476b5080ed19fb"]];
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
