/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","26ea103a1f2e59357eb0a40abb5c3b0e"],["/about/index.html","d142b28e2057cb664bc703eda7771e6e"],["/anime/index.html","10007e74fa82fbd128324f1e14d44845"],["/archives/2022/11/index.html","40628f3294eee8afdf558b9b96d7b32e"],["/archives/2022/12/index.html","e4cbdc69a07b9c15a3d3bb5a3d541a20"],["/archives/2022/index.html","dccce8d0e02068c0b893b3193eee2499"],["/archives/2022/page/2/index.html","986c815d3737393647cbd0a4c64a1c31"],["/archives/2023/01/index.html","c13af877ce2d7f54fd796fcc8e3465c6"],["/archives/2023/02/index.html","9a297fd6412f27067729050900b54c94"],["/archives/2023/03/index.html","37112f18475ff61f3680d7a292778eda"],["/archives/2023/04/index.html","b3db881f91fd3550c0c62167ee187094"],["/archives/2023/04/page/2/index.html","5ddd1bd16564bdb0525da358e28e697a"],["/archives/2023/04/page/3/index.html","1e9eaa1e4e032d4bd9308bb43f092a73"],["/archives/2023/05/index.html","4ba781098b79ca9836f203162bfbd7e6"],["/archives/2023/05/page/2/index.html","ee2d48e3dfcfc5add7f81bf6b5ee8e40"],["/archives/2023/06/index.html","3ce8a440d9218a8240fbc4e6dc432a9b"],["/archives/2023/08/index.html","cb730da2bbe874229b53514a2f2b2439"],["/archives/2023/09/index.html","612e99e5f8de821d4e492f89126f3f45"],["/archives/2023/09/page/2/index.html","c29ee3095f9584e93fe2ee41853f17d6"],["/archives/2023/index.html","78005d6361988836b5463bf493fc4152"],["/archives/2023/page/2/index.html","a007704d0188c98b427c4c19361c7903"],["/archives/2023/page/3/index.html","c849225e087395000a232b06bbdd9533"],["/archives/2023/page/4/index.html","193a87fbb67a0873a5f59f029507c3dd"],["/archives/2023/page/5/index.html","0df66b5b6da76fd3f7e34c34bba4e391"],["/archives/2023/page/6/index.html","387109a117656d3c8c17b88881d09a7a"],["/archives/2023/page/7/index.html","c4f90b0d0403b91a6e6ba22684559301"],["/archives/index.html","6fc1be4ae75119417b7a8ffc98c14c14"],["/archives/page/2/index.html","d61f49c6e31ce4f8e73f789b0a942899"],["/archives/page/3/index.html","efe3f6a4cacd09566c3b7c7c3fb5bb3a"],["/archives/page/4/index.html","360b0709ea1baf81c135bde17baf0abc"],["/archives/page/5/index.html","5eec2d43a4b80434ce20842c7a997d87"],["/archives/page/6/index.html","8eae2b4d1e5c3e9266be8f478dd57da4"],["/archives/page/7/index.html","fd3eec0fa09f21731ff9ecb88c324a19"],["/archives/page/8/index.html","d8d1b8b5d9a7b2beeeddca45381afea2"],["/archives/page/9/index.html","70bdbb5a34af5978e42c7f0b07b63dba"],["/categories/ACG杂谈/index.html","24befeafc5a722771622c41d6cbb3fe5"],["/categories/ACG杂谈/page/2/index.html","57bc85590b2c9f3a8c8824a1e97f10e8"],["/categories/index.html","89d9210c68ef5e255edfc7c73d4fe579"],["/categories/学习笔记/index.html","674c2630cda31653662f427e4599bc77"],["/categories/学习笔记/page/2/index.html","8a63fc17bf7446de7928e72665dba5b9"],["/categories/学习笔记/page/3/index.html","bbe06e92865eba99d519dbde5d85b471"],["/categories/工具/index.html","f8a97cd19928345c3fc213f4d143ba17"],["/categories/工具/page/2/index.html","4be250e109442a3c5969eb022e1691f6"],["/categories/游戏人生/index.html","1d79d6d9339653af3445edad602ed884"],["/categories/读书笔记/index.html","9ddc53bc836ab03f28c86b3697e0f97d"],["/categories/读书笔记/page/2/index.html","cf392564aa1cdab6ec61d97e255c0270"],["/categories/闲言碎语/index.html","d48af432a3bcf3d1516b68564a14d178"],["/census/index.html","11bbcb39c4739be911fe8777c25ef539"],["/charts/index.html","60af876a34def88cc254246c435ae407"],["/comments/index.html","90d42ac9c2308ecbc288487254f55740"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","7bbf446b27c916b8d0676ebfed9b40d1"],["/gallery/index.html","b98707638d79342baf25ac8339be3bb5"],["/gallery/wallpaper/index.html","d33753541a14ce82f2ab1f87fcbc7329"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/UCB Data100：数据科学原理与技术/DataFrame.png","e6c0b5b29de36cd8b467e52344d8d800"],["/illustration/UCB Data100：数据科学原理与技术/Pivot Tables.png","88d47bc8c69ac0ec18415870dab20f7e"],["/illustration/UCB Data100：数据科学原理与技术/groupby.png","c7cf52abd16b67ddd3ee39f1d65163c2"],["/illustration/UCB Data100：数据科学原理与技术/数据科学的生命周期.png","a31f31c8aef19f1103642e34aa9280bd"],["/illustration/UCB Data100：数据科学原理与技术/采样.png","290455ceaad9dfa53b878f115289b53e"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bacd5eff77156211568ecee2057a7994"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","9976fea321f5577c5cabcd0d5dc4a3a8"],["/page/2/index.html","cd6dfdb77304b9a0a0a162b87a9c3754"],["/page/3/index.html","65f023118eba5770c6e9782b62777e6e"],["/page/4/index.html","4d0b62fc9ba9d9489e0417a7736b1280"],["/page/5/index.html","47b6e5550b13defa062548f08c73774b"],["/page/6/index.html","72cae5779fbd3dc7b18babc077eae6c6"],["/page/7/index.html","4bd36b8a580262299afd491500f17f85"],["/page/8/index.html","7fc9e3af2de6fbe19d0ab5d511c017b4"],["/posts/106331b4.html","f110e0484aba045488b0cc634f1b8021"],["/posts/1185a02e.html","d6c1694fe6def453ca18d30e7254c275"],["/posts/1743dad6.html","954d03631653468beccfa5e6ccfb67a1"],["/posts/175a8e1.html","1128593ef3db1460b4fedacba4d829ff"],["/posts/1be398e4.html","74b66f86cf442ff045c4c7843f1f0fc7"],["/posts/1c5a0321.html","608dcee73f71bef4703b036f758dcfd4"],["/posts/1ec7973e.html","524f84df90eb4963a6a19a353a5cb8a8"],["/posts/1fb82448.html","56da8cdf7d8006dc349bec715d8ae409"],["/posts/29c507fa.html","26d02cc6847e36f09bbbe689116a3468"],["/posts/2f34eb00.html","b1c93761fab0f8359cd69949fe886c5e"],["/posts/2f57a694.html","8e9e3690028d91a340d4fb8b143411af"],["/posts/374b54d5.html","5b4b5ca0e4c1cbb7f07629fdf4e1936c"],["/posts/3871b764.html","8f0eb807c1f725621fc8ed7b9b49f08f"],["/posts/3b308caa.html","bd0dd7a9f264f69807d0a17c554e8db5"],["/posts/3c3cdb74.html","d286a284bfb7880e7c88531f7a32818f"],["/posts/41f65cde.html","bbf9622593f36b33599835b70cbb12ae"],["/posts/4208fd6c.html","622a5b3a113a3dfc3ce835bf1a39b19b"],["/posts/4392373e.html","9607ab74c29353f93de3b01fa74cac0c"],["/posts/440ed920.html","36a848d797a194c7aed700c629d5cc2c"],["/posts/4d2b51ac.html","d90a499c5ca634835fbe9ca3d915e9a7"],["/posts/503ae89.html","ac96bff39c05f3d177cd1a033037d3ed"],["/posts/535fd087.html","7cb710dde8d94a95de0564f121796fad"],["/posts/5923cba3.html","953b61824cf5fdcef04a71f2a08f0210"],["/posts/5c1bb6b8.html","aa8c457ecf07e7ff5769e884825b9d6c"],["/posts/5dc45f0c.html","ca0ece4bc4da654109b50d2561c6014e"],["/posts/5f2caa2c.html","468d2efebf97ebe0c1b353dffb631d10"],["/posts/616be7b6.html","a24476bc9f9dcb009afdc96f9a29d552"],["/posts/62a1ec0c.html","93fb112eccfd859df36e7c406e8257cb"],["/posts/69fb361e.html","2a312c8bf9d9430026c80514385bf068"],["/posts/6a8518ce.html","f08bf7d857ef41b33f88edcd7ebdfe47"],["/posts/70685119.html","84504c0ee295172027bcd54f96b099c5"],["/posts/743db4aa.html","f169140890b5d7e065faa80d65d0b3aa"],["/posts/7b67faab.html","eb9485594b290620863945e228843007"],["/posts/7b76be01.html","c3053067418a050e89c4f01678f01223"],["/posts/7bff939e.html","010fb84f4c4c2edfee7b285d561381ad"],["/posts/7cc4ca07.html","fd82e79b8c9f046a7fec0c0f435eaa98"],["/posts/7d257210.html","577d5d7d1fc1f5c81407a143b9833d6c"],["/posts/7ea0cbe4.html","56d12922e5b74fa0af7c2626f3092a9b"],["/posts/7f382da2.html","1adee0ec2c8b023a6abf3f6bcbadf518"],["/posts/8207aa48.html","461ed1eb5f515f71752223730fda71f3"],["/posts/836ea9bd.html","48994243c8d2d0b2e62e03efbe84e0b3"],["/posts/84cae757.html","eb87f509cc06d8fb548b0718dc26e55e"],["/posts/88200036.html","a56934efefe78d56e61fabeafbf57dc6"],["/posts/922fb64d.html","b25f470db2b64541d11ffdcb3744d745"],["/posts/98332b29.html","5c1052d50bcd1aedb89fecf6dc43f116"],["/posts/9a1a736f.html","115bbb91ff8141508bddb7a2895411d0"],["/posts/9addd0bb.html","8b17c34a43a7a68fe7cbecb5a710db66"],["/posts/9b44950b.html","34ed836c56cb926fd600cb8b7e7d689b"],["/posts/9ca149ab.html","e8f76dbdf647976231225a95f44aec3b"],["/posts/9e4446bf.html","ce6464cedb4c65b19d230d0cb7750277"],["/posts/a0271e58.html","8ad0e142d36bfadfd1da36f013393855"],["/posts/a13c1dba.html","13d0b3962bae37ba86360a3bcac698f8"],["/posts/a1f2a4d4.html","4bd1adfd1d662ce3264bcc81202b40aa"],["/posts/a5f300de.html","3de678ca991cf3fda634aa8092a26470"],["/posts/a98766fe.html","f86bd04aace6e99063a0346e45e657f2"],["/posts/a9f63847.html","4545c495ad9f4c1c5f0449c8da606d70"],["/posts/ad31055e.html","7dda672ba7286023eaf39aef87d7af39"],["/posts/adcd6e20.html","a5c5d0075c70ca9ae8db3cb8b727eb38"],["/posts/b0fa4c58.html","2fcc55429db3337332fddf63a1575de7"],["/posts/b1168675.html","eb4987fec72574058790c7cb82c7bd92"],["/posts/b2feeab7.html","ab75b4d747671fd15f12a16ae3d623e6"],["/posts/b6d66f1b.html","c3c7f087c9ec204836aee6c714766652"],["/posts/b7525d11.html","2270140a44065fe645ffbafee927f17b"],["/posts/bb154b63.html","327c67c4503ea4a66adf95f80d24fa75"],["/posts/cc86a40d.html","e48a609e73c00d1e8c8c5bff24e05a02"],["/posts/d36531a7.html","d2d37d8f6859f0064339e404aea3c53b"],["/posts/d442e51a.html","feae18d5f8ced44e711595a73b435a54"],["/posts/d7fdf01f.html","ca0f63e39272c0778e2140b575e5ece5"],["/posts/dcdf88c8.html","55b36bf68172008731d9154be0458e66"],["/posts/dd378ae0.html","713e7993401b07c8f66f4598522bc4eb"],["/posts/e15be301.html","0a5f160256d7861048d00e1a2bbc5a5a"],["/posts/e2e4b4ce.html","0cb96157a8e8ca2418c3fdcb77bf04e3"],["/posts/e35ef5bd.html","4511708823ae85491ad42bad408f8fc7"],["/posts/e462ba83.html","d0a3de4f9863c519774892061e999079"],["/posts/e53204e6.html","a748da33834c51e5cb9bb9ad14311e38"],["/posts/e5cd9bbd.html","b1126c06898296c0de6aeea090580be4"],["/posts/e7a99a5e.html","e5500c703b717e0a6b16c800d47e7ee1"],["/posts/e9318100.html","2067dbe72e226b9845faf442f44a3021"],["/posts/ed52e6a0.html","fb586b88fc7f8b0da694344d09679d28"],["/posts/ee0ac59a.html","1fe20bbda146c20c96ad70790fa469d5"],["/posts/f09c1ee5.html","77b85fa434e9c3de070c0a130b153520"],["/posts/f4af26a9.html","2d9066079511f7d5da8027e31029684e"],["/posts/fa3cd62d.html","5fbe7933090d226ce67d94830d5c1e30"],["/posts/fb3794ef.html","491bccd3b0e383dcf0f3d622c76d2321"],["/posts/ffdfd6d4.html","cc6d7e60c8430b8c4b329fccfa6eef56"],["/private/index.html","c44b9c4b64bc7b2e7a295deb1b8972f6"],["/random/index.html","facda7b82fccbb8f3924ee14866e01d8"],["/sw-register.js","74bf5c94e721c4ab9d2e5932986ed637"],["/tags/ACG/index.html","4a875499c94a1842f47b0773c4e43f86"],["/tags/AIR/index.html","9eb5ba4a31fdae9ea18ee0eed16e6198"],["/tags/Butterfly/index.html","5545224dae736ea82a2e7c56180dc5bc"],["/tags/C/index.html","f8846a267c1e0fa07c4a5b8b3731f3e5"],["/tags/CMU/index.html","a3433bb1c4cc0d32c6d545d52bc3bbee"],["/tags/Crash-Course/index.html","677655a7d0cfcccc14ed805dc0ba2a81"],["/tags/GDB/index.html","74a79e52729e79f746f93848f443c137"],["/tags/GUI/index.html","8f7f13495aad611afb42909b9ecbe97e"],["/tags/Git/index.html","9df235ab727718d825f9883a0f06dee0"],["/tags/HTML/index.html","4f0b8032133ce8849b58a049ca443be9"],["/tags/Haskell/index.html","15c7b7fe0a6e6087d0e4d345a3f0a94f"],["/tags/Java/index.html","8e035852b9cd2eb2706d1c3cd143df4d"],["/tags/LaTeX/index.html","bb95b19b38603d5f35a1a319abbe8499"],["/tags/MIT/index.html","7a1434e8241e5467aeb9e058c3065c3e"],["/tags/Markdown/index.html","02829de646fd0665227c3f06cf67375c"],["/tags/Mermaid/index.html","4680fd749739e4178814858552b376d9"],["/tags/NTR/index.html","f221cdacf9f9c4804eac1360e2fe938d"],["/tags/Pixar/index.html","f1a20bebf8e2812f433aa3fdfb93c161"],["/tags/Princeton/index.html","72cb44bcac4e68178c4ea98c59950d69"],["/tags/Python/index.html","adb7f3f2a5080f6267091e8388a1653a"],["/tags/Qt/index.html","c6ab0980e8875b025e25f0f2ef951322"],["/tags/Scheme/index.html","c8b0170c7f4a1240cd4c8f183200b0f1"],["/tags/Stanford/index.html","0364a9f92aafa38127b11d7fc7223350"],["/tags/UC-Berkeley/index.html","5f1868d20a20fd5a008753c8a773f43d"],["/tags/University-of-Helsinki/index.html","7f90c8baf2428b5952c9ce4a868ffbe5"],["/tags/debug/index.html","891e4ff84bb6fa2485bda5dd6f4ea88c"],["/tags/index.html","54b74b7bb8989b2a88dd0646b142e97a"],["/tags/web/index.html","0e020837a8415288d09eeca39037025b"],["/tags/三国演义/index.html","e017ef4a13fabb3a0502ff062d12f3b6"],["/tags/丧尸/index.html","ab8ebd99cfaf9411a61307db96c14d2e"],["/tags/京阿尼/index.html","b95f867a19e8a412bc6a6b3514e63b48"],["/tags/体系结构/index.html","d71c214a30586b4ef253f7ceca60709b"],["/tags/信息论/index.html","4533a688235c5bdc7df614ce3fb4f349"],["/tags/元稹/index.html","b1debebb0217be4c552fd0e7f97e6918"],["/tags/公路片/index.html","879fe6d93f2eb8ce95b4716b4c16a283"],["/tags/关于我转生变成史莱姆这档事/index.html","94d2e69caa221f4bc2cafa94504d817c"],["/tags/函数式编程/index.html","faf9d7446761ccda0acffebb30cd4475"],["/tags/刺客信条/index.html","bfe86dc04510ee4cbab15d8fb437cde5"],["/tags/卖肉/index.html","8a8371159389069643e991a99fe5a239"],["/tags/博客/index.html","cc88d32d2154d9c1f619fd9a3ae8d42f"],["/tags/去月球/index.html","7a9656e756b4ac754979660122f39e87"],["/tags/可汗学院/index.html","281492db08b7afb2ab8cc84e6c76319f"],["/tags/史诗/index.html","0843a185044f4ba4a47f1b8a78dad192"],["/tags/吉卜力工作室/index.html","3f83e8bc323c0ea721c12ce82b427e66"],["/tags/名侦探柯南/index.html","3d8aac09fe78194f432515ccc9de5b77"],["/tags/后宫/index.html","61310110a48b3307f6ac18d1e747bcb1"],["/tags/咒术回战/index.html","ebc89a0c0b00e8b8453ae11636a72da8"],["/tags/哆啦A梦/index.html","9606d3bac68601ae1378b58522cb50d1"],["/tags/哈利波特/index.html","246ad0b74c68c593b1131102d2be30b4"],["/tags/喜羊羊与灰太狼/index.html","69c4f98ae5b6b4017daea8cb4d1ced6d"],["/tags/四大名著/index.html","73ef41495974b5257d0fe07e519dea89"],["/tags/图表/index.html","7a1adfe3eacc2fa83fd0fcf1c6b7e743"],["/tags/复变函数/index.html","2be11ea775734401dd1936ed2813c81e"],["/tags/孔乙己/index.html","904d308c7c961cea01cf1a1e9921837a"],["/tags/字符串/index.html","eac69675c7ff24b042dab522b5ba8e99"],["/tags/学园默示录/index.html","7fa789cf45ade5a882b2e2b112d39bc4"],["/tags/寻找天堂/index.html","6fb89fc4af850e1eb3cebc10471ed42d"],["/tags/希伯来大学/index.html","652b5ecd5e5b66ced6b75627e3ff359b"],["/tags/异世界/index.html","c998e4e3cb662eaffcd52b55af43c0cd"],["/tags/微分方程/index.html","01a5afad388e32588602f468d1416675"],["/tags/微积分/index.html","e563881e822c87710126c461e97c7f26"],["/tags/情感/index.html","605c5ee6b5e44090dfe990ea2723c11b"],["/tags/指环王/index.html","2e56b8031ec2cd3d9d2ddee0cae324ff"],["/tags/搞笑/index.html","0c9eb5dbaa05bf752b24ac954ed164fb"],["/tags/教育/index.html","e55cf9dd28880e0886ab8915ba451b68"],["/tags/数据科学/index.html","4d199558dd321de2e25c45f1900c4814"],["/tags/数据结构/index.html","0f17ea559e21eb477cbe1756859ce892"],["/tags/数据结构与算法/index.html","d8c8f4a48526ffd3894601e21253bbe3"],["/tags/文字排版/index.html","7f95dc8b1418f924b393f6ca439184b9"],["/tags/文明VI/index.html","7ca0a78e43f2943e9f4d39229d328075"],["/tags/旅行/index.html","0b2304f5a31e72eb48f4bbfe150c88ff"],["/tags/无彩限的怪灵世界/index.html","ece60bc884955da7cf6b65a1cf10b8f9"],["/tags/时间刺客/index.html","14413bd125aa02d6c40329545ed1da70"],["/tags/有生之年/index.html","f4e445128a56badb05c643888a9f77a5"],["/tags/李商隐/index.html","09f400cd7310a04ca4ae817e15fb3c6c"],["/tags/李白/index.html","1c96630546241ee983bfdfbd4ffaa060"],["/tags/李贺/index.html","2c24deec5e2e8781b3fabcc6e43a9ecd"],["/tags/杜甫/index.html","b3fabede906a4d760f0d63561590f5c1"],["/tags/概率论/index.html","a9f95807c6eca81246cf712b54854179"],["/tags/正则表达式/index.html","ace66f1e3521c78818b07ddbe17767ce"],["/tags/死亡/index.html","9a7f357e06cd11543a92749984d84d2b"],["/tags/水仙/index.html","a4ba9cb604e33caf987135827566f228"],["/tags/治愈/index.html","654eb39e2470ecc50087f81d36984c3b"],["/tags/热血/index.html","7d57a0352499813c9922fcc1479cfa7f"],["/tags/爱国/index.html","2b3ca53176a8ff472abbbcaca47cab7d"],["/tags/版本管理/index.html","95064db7295208a32b0757affb7a8336"],["/tags/玉子市场/index.html","4818f5b80ced9f9424f035ae29a112b4"],["/tags/玉子爱情故事/index.html","8e6796207e85979890b84fc69bd2fe2c"],["/tags/王维/index.html","2064d969c03acc31a4cd3d738824cd79"],["/tags/现实/index.html","2c1e3b9507c7d72cba3834c90d9c691c"],["/tags/甘城光辉游乐园/index.html","f3b8333b538d2eb463af882afa6b5cd2"],["/tags/白居易/index.html","c89017a5d7f8b281ee9cb4896157060c"],["/tags/白毛/index.html","e916298ed7102d7d443945c62f38abe5"],["/tags/短篇小说/index.html","f054fc1a3cf6e0dd5eb895f3f27aaf68"],["/tags/神话/index.html","b1c593abc8d59046b6f8c74c1ead8e4c"],["/tags/离散数学/index.html","2f44eb4f74e32d55035fed5d6fdfdd1b"],["/tags/种田流/index.html","03c74fff86cad0294a09db53795a46a0"],["/tags/空洞骑士/index.html","b14a03d1cf6bba07544bed731ba29107"],["/tags/童年/index.html","db1758d1136ba62d4750f5d169be75df"],["/tags/童话/index.html","2be1bc506ad477d526144338c3c93d55"],["/tags/策略游戏/index.html","4829ba397a5541c68c26ef7be69c3cc0"],["/tags/紫罗兰永恒花园/index.html","4aa66c6b7d421c2e5c75f574f3379a24"],["/tags/纯爱/index.html","7a7c02f8c49f38d78885402ec73ac67c"],["/tags/纵使手残仍大爱/index.html","4fe5076d4b1b1ca361c7cb28544f1dd6"],["/tags/线性代数/index.html","059d6e841f0bcbf3588c98300e465f9d"],["/tags/编码/index.html","dac478da77882554c288a2ea1b5e1f28"],["/tags/致郁/index.html","430ef5648916fc4f54343cb234055c89"],["/tags/苏轼/index.html","865ba275f180e68bcc04e31b8845d4b7"],["/tags/英雄/index.html","38b2e8d84546082b9432a2640dc969da"],["/tags/计算机科学/index.html","9ca373c0c997bf33a97912b26a81883e"],["/tags/计算机系统/index.html","8c496333ef0dd7dac2241ca17fcac948"],["/tags/词中之龙/index.html","de9c6111379f3996938db55c0cfce436"],["/tags/诗仙/index.html","80f507174bbd13aeb22a08a137d15d09"],["/tags/诗佛/index.html","e16b98717f0e59cb212d341ae99acd0d"],["/tags/诗圣/index.html","bd01b64382bbeab99cde482b9ef06d82"],["/tags/诗词/index.html","7aa094a532c120a0655abaedb4f341b7"],["/tags/诗鬼/index.html","67826a4b05fcbc89a54b6ad269e8fb20"],["/tags/读书/index.html","d805fb76eda3e0b0f17c8e1aa1bca2d0"],["/tags/豪放/index.html","bcc61c64fbc98510e8cba18752975e82"],["/tags/跳跃/index.html","ed8a3e1ff9793c1aedf058d490f6cc33"],["/tags/辛弃疾/index.html","fd8142b7cfd7e9232c0b03b124e8eaf3"],["/tags/运动/index.html","a236b3f06b4daa6fa9912dde7e1e17cc"],["/tags/钉宫/index.html","be02ddcd16c72f5408aa773ad7792c04"],["/tags/银河战士恶魔城/index.html","7a0e587e1cf82dc16003c86aaaf8a87d"],["/tags/陆游/index.html","135167e9857a2005dc3d5f65180302c9"],["/tags/零之使魔/index.html","e92fef191b50169dfcf447f10a9c975a"],["/tags/霍比特人/index.html","cf90408b660e8760bd3d9efd64888cbc"],["/tags/飞屋环游记/index.html","bf54a27aeca7d00c707e57a2895c27d9"],["/tags/魔戒/index.html","c29c17836faebdce99b6d571ad274586"],["/tags/魔法少女小圆/index.html","19b414dad099044d34edf4dbffd3867e"],["/tags/鲁迅/index.html","26218b15df885b7367ebf7b3a098289d"]];
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
