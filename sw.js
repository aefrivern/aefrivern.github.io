/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","09c3247d92267bd434e35f9ccc90fb2e"],["/about/index.html","a32c3dbf0a26d4dff64a63a014f21062"],["/anime/index.html","f4451f5bb84eed5a8ee351ed993d0f95"],["/archives/2022/11/index.html","079af608f2a7614d725bcf6fd2de562f"],["/archives/2022/12/index.html","453c93f6baaf6a3f79f0f9c10dcbd60e"],["/archives/2022/index.html","bf4740740267960e13694e5949746254"],["/archives/2022/page/2/index.html","e22233f2b6fff74f6532f2406c49724c"],["/archives/2023/01/index.html","733a3bb1cae448f4b5e4af7e301a5df9"],["/archives/2023/02/index.html","f616cdbd2ddd2101ba14966b7e1992b0"],["/archives/2023/03/index.html","57525bccbb9d21602cabe50caa4457ea"],["/archives/2023/04/index.html","eff36e3d2b4d677a984430c58a821444"],["/archives/2023/04/page/2/index.html","b65993d2c392cd060bb68a1b3b5b7947"],["/archives/2023/04/page/3/index.html","e529a5f3ccf97f51fcef81ebcf0210e5"],["/archives/2023/05/index.html","5fd699d38f36c1cb7cfdf55d8dd5445a"],["/archives/2023/05/page/2/index.html","1d6be6531443e9b87e98b5da88d42b5c"],["/archives/2023/06/index.html","1d403407697ba655797b4bad940b7dc7"],["/archives/2023/08/index.html","d12c7f6936b760d802dfe6919ddb068c"],["/archives/2023/09/index.html","6ba1a19830c08403fc8cce8c75c85d52"],["/archives/2023/09/page/2/index.html","dbe1c50eb2cadf4c6c0cd192de3fc095"],["/archives/2023/10/index.html","077b0182104a1570106f2d4c3b8c883a"],["/archives/2023/11/index.html","5d2da2ee487caa927ba990cee809bf51"],["/archives/2023/index.html","3c30716f886f8a594d8f60de05d16ab5"],["/archives/2023/page/2/index.html","35fc17406889ec83fe5571a50d71a316"],["/archives/2023/page/3/index.html","8a2055bebe698725088c15e7645ed770"],["/archives/2023/page/4/index.html","ba76272b8bf1e78f6ba0054fbba0b967"],["/archives/2023/page/5/index.html","c3942dab58f58693003067695c2acb73"],["/archives/2023/page/6/index.html","83614905a2037565c30cf37dfeb96fb7"],["/archives/2023/page/7/index.html","8f453210996aede4bee817c620fe7e9c"],["/archives/2023/page/8/index.html","27df419d66f562ea7eeec20b623b7d2a"],["/archives/index.html","8eeadd1417beb40a4f700cf0c163226a"],["/archives/page/10/index.html","f3db7d2eb618e0fb419196869433d8b8"],["/archives/page/2/index.html","73b6d27e90d87300ab68c828d7acdff0"],["/archives/page/3/index.html","fa9e40a157ea76ebbb0025308088b387"],["/archives/page/4/index.html","3c0dcd42f35d072a5f65bcb0a67489f7"],["/archives/page/5/index.html","953d9b60a097d464972290bd2c01c635"],["/archives/page/6/index.html","fc967202f8f9041a75b619fdcce7fc3b"],["/archives/page/7/index.html","fdbbc5d63ca7f3fac36181e140eaf0ee"],["/archives/page/8/index.html","451ea70217bf718390bdeb429a6a4838"],["/archives/page/9/index.html","1ed01295106fbcd17c60695db4ee35e4"],["/categories/ACG杂谈/index.html","65b7af820de3c6f75061ca51f4e59a98"],["/categories/ACG杂谈/page/2/index.html","75b60de426cf8ca8b86d6a11c382239d"],["/categories/ACG杂谈/page/3/index.html","ea805dcf5b0f48391722572a21923598"],["/categories/index.html","5fd5d19ae12fe01be2856c5623f330b9"],["/categories/学习笔记/index.html","dc539fc096be4c088f3a1ac69bd969b4"],["/categories/学习笔记/page/2/index.html","808d449e23647ddd78921f1240c88054"],["/categories/学习笔记/page/3/index.html","da95975ed6c52d3da0efe85f1b06e28e"],["/categories/工具/index.html","5f05929cfb58d1235d0b5a5677d4ad56"],["/categories/工具/page/2/index.html","0c5061364c5a849907b5168886272bb0"],["/categories/游戏人生/index.html","b417ba9df0b40158fb6036a73b733115"],["/categories/游戏人生/page/2/index.html","dd45c579d287b76bf7d3dc1f32461487"],["/categories/读书笔记/index.html","c41f4bc709a15b8c42f9ce03c0622e61"],["/categories/读书笔记/page/2/index.html","3a9a6d11c3dfc2c44d7ddadc47b4c90f"],["/categories/闲言碎语/index.html","2c1531c070e458ffbee08e1be51ef7d3"],["/census/index.html","283dec3927a0e5ef5aaf1a59a92b461c"],["/charts/index.html","be3d82f8166da819eefd24524fa2ab95"],["/comments/index.html","72453fd3f3376a86a110287f77f6e9d2"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","ea4248079b434a3f1c781728aad6f2a2"],["/gallery/index.html","ae1fbb85a2d0d1ac08ca1f19d4648556"],["/gallery/wallpaper/index.html","cdb12fe76ebc399270bbbf7f536b01f7"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","432295c823ff1af85dac0bd1cb8e5e66"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","e6ef0e64303bcd1d1a525e7f3ef2f8aa"],["/page/2/index.html","025012bcad94634681d9f3149cd2005f"],["/page/3/index.html","740bb78d9cca87947b3e939f5c940053"],["/page/4/index.html","d221029a2aa63e0b2faf2c363a524841"],["/page/5/index.html","0368cbaeb4e2ac4cc6980c48e56cffcc"],["/page/6/index.html","6fc8b4daa23569bc732c295a05455e29"],["/page/7/index.html","64c4d390571a1da7a1d46955a665a332"],["/page/8/index.html","94202fa2c0c62a840654faebab4dd6e3"],["/posts/106331b4.html","3697e3e5b8678eef8b74488d9ec89e5f"],["/posts/1185a02e.html","8368f5815036169f3645070ede38b6f6"],["/posts/12e06b11.html","855fdbc551287e9d8dc3e29f7a4d6abc"],["/posts/167c7c45.html","d51ba0956430a1b3f82b6c17409883ca"],["/posts/1743dad6.html","2cd7c1e582fa9b4fe7217c66f6b56b3d"],["/posts/175a8e1.html","a24de1b05920609d7d5ddb55f430e138"],["/posts/1be398e4.html","9c4cf5d564976e12e64b01a16c196a67"],["/posts/1c5a0321.html","04719d2c5a0e40625bbdf727db02e3b9"],["/posts/1c5b1e9c.html","e074d978329832346aedfca7935b65b8"],["/posts/1ec7973e.html","bc30ddc5c7ff094c179c68f9dd077aca"],["/posts/1fb82448.html","1bc67bd84f066a073e971f00d0068e56"],["/posts/21f18fd2.html","ad9de1dae8c1de559ed135362a75b6d9"],["/posts/29c507fa.html","2fb7d4aeea4545a563e8c08ff162fec5"],["/posts/2f34eb00.html","66e8d7297230b764dba9f16dad8a454b"],["/posts/2f57a694.html","0927701ad901361bca90a7ec0a671fb4"],["/posts/374b54d5.html","3e69bca20abf77fa9c6ebc6be5e74e2f"],["/posts/3871b764.html","f89666bd23f53ca34c57d4b82d48dcb6"],["/posts/3b308caa.html","ddd410e1ac35c366e77d2fa25282d523"],["/posts/3c3cdb74.html","b9db18d03f0d5c45cd927550c372c4bc"],["/posts/41f65cde.html","47e6008c9246b09d7763fb75115af0d7"],["/posts/4208fd6c.html","50df9ad7829570638b802b80d447627a"],["/posts/4392373e.html","2d38705c53280aefeae15e385d8fa033"],["/posts/440ed920.html","6cdae40bb241c2498a1d583ddb0237b0"],["/posts/4d2b51ac.html","3c75066f57c35d6ca36e9e24443304d2"],["/posts/4db1a52a.html","c156e76a1ba1cdfbe1919149038f081c"],["/posts/503ae89.html","de013a819051431574916304f2bbeb26"],["/posts/518e2799.html","660f0c7b355d41397f346df985287bfe"],["/posts/535fd087.html","fc4c132a7749c13362bc4bcd355978e2"],["/posts/5923cba3.html","d5a1ea9efd1e4c468dad9d6245a5a5fe"],["/posts/5c1bb6b8.html","194228b24fa9c9d6d8c8dc64430bd8ab"],["/posts/5dc45f0c.html","b473053364a68d6fa46f7fc3aa9f87e6"],["/posts/5f2caa2c.html","d90c40fe2fcc0503eda85f864647215b"],["/posts/616be7b6.html","03bb76cfe064645901594d20190e2823"],["/posts/62a1ec0c.html","c46763fae55b2724003f3a480449c004"],["/posts/69fb361e.html","c900737a238cc7e8d3fa7989f2730c0e"],["/posts/6a8518ce.html","61f55301491d2284b463ef8153af4c76"],["/posts/70685119.html","afc7e605aef8890b1fa2584cb4602eb7"],["/posts/743db4aa.html","458410261bbef2cbbddbb5ca2f92b24e"],["/posts/7b67faab.html","7e0bbbb47afd8f87efb5d98604d4da16"],["/posts/7b76be01.html","77f64db233c4bdf106da5ec21507385d"],["/posts/7bff939e.html","a481c46d486f1ae62e36235342e6dcbd"],["/posts/7cc4ca07.html","47deb47ff871054095a4e3f11fd0546a"],["/posts/7d257210.html","c4f851d9c967deb4ac91ec59329da3a7"],["/posts/7e6a5c94.html","c0bb73bfcb282a3d29ee2c8a40f63c5d"],["/posts/7ea0cbe4.html","7d51e9df2a2db40c481be863281ed675"],["/posts/7f382da2.html","c4b2560d1819e0cb9ee6b6036da57bc0"],["/posts/7f8d32f4.html","10c09a421e1ac9c28604110d62ca25ad"],["/posts/8207aa48.html","df97fbe370fb148d10df4305b669b38f"],["/posts/836ea9bd.html","f19759f0d6ac7a17b1be8ea40a830548"],["/posts/84cae757.html","e909dbe024021ed631ed17170f3d0776"],["/posts/88200036.html","e76d0b74b161f58896a48690664db40f"],["/posts/922fb64d.html","03172b0c663597d6381ef8293eb644ea"],["/posts/98332b29.html","2ebb50cc329ee10a049d6f11e003fb85"],["/posts/9a1a736f.html","a5a8922472c1118e517e7f2e21d89f9a"],["/posts/9addd0bb.html","870025b5b1af0729ffcd68cdb3cd551a"],["/posts/9b44950b.html","a7d2783c2607aa7c549ddbbb0cacaf98"],["/posts/9ca149ab.html","85fdeeba64631592ab54278800633d5c"],["/posts/9e4446bf.html","040cd9ae53a6fe7d62416c47f4301a11"],["/posts/a0271e58.html","628bf23ad025fb30f233e71cf57c1274"],["/posts/a13c1dba.html","a17b5e62430c270ded576e3f187fe7cf"],["/posts/a1f2a4d4.html","b6bc25904e2b598f6903740e6204efb6"],["/posts/a5f300de.html","8cdc5fb0519b1b5381e91a3064570ae9"],["/posts/a98766fe.html","ef99d1d2791f8a99ce3f7d4664d12e32"],["/posts/a9f63847.html","30e8e04840dd91e31edaaf1608f11141"],["/posts/ad31055e.html","c0abe29b0604881156850a97f88e5a80"],["/posts/adcd6e20.html","8dffa965f479a86f6fdd3c997eb4e107"],["/posts/b0fa4c58.html","c6e846809f401633693214ba1985239d"],["/posts/b1168675.html","1c3214def168ec8c59f6c913ed769d34"],["/posts/b2feeab7.html","f78ff3e22f4864ed3dfe1925948da886"],["/posts/b6d66f1b.html","d7e168435b0221d30435d6ec8302e997"],["/posts/b7525d11.html","ca83db0591e1d07a71bc3b365cc60203"],["/posts/bb154b63.html","1cce8c868a57d14afb342122a2b8d2e9"],["/posts/cc86a40d.html","29278ee67e48059f19d448650628471a"],["/posts/d36531a7.html","4eecf7991c178010490d86791f481cd7"],["/posts/d442e51a.html","a13298b649d72a333c97060d0ffdada0"],["/posts/d7fdf01f.html","21c42bcc25e5745159a760b7d2a0f1d3"],["/posts/d839b0e.html","cbd339be3e9580d096b2bfc5e40b5ec3"],["/posts/dcdf88c8.html","328b10bb678fbbc632a050adb6ea5f9c"],["/posts/dd378ae0.html","67fea2698d01b714cedd05dfd466f016"],["/posts/e15be301.html","bbbd08d0478c979959350107fff48fc8"],["/posts/e2e4b4ce.html","36f62457d1667bccb52d2a00882849d1"],["/posts/e35ef5bd.html","090502818c409a151258145a13a49596"],["/posts/e462ba83.html","dfd5de8d0144cad2178ab5f24d29b4f5"],["/posts/e53204e6.html","0b5a8b809bc5b8aba448f6ef57700040"],["/posts/e5cd9bbd.html","b48c85a592ef1d5c0030ded35faba230"],["/posts/e7a99a5e.html","12e629236853efb5abd5a4fa59fa46db"],["/posts/e9318100.html","09f51dcd1ebe03247ff9ca5866a63c15"],["/posts/ed52e6a0.html","f0b18ffabfec4bfe38c515b0ff92dcb1"],["/posts/ee0ac59a.html","ad2bd24a71d21265828da51051853f5d"],["/posts/f09c1ee5.html","7433d2b725a27714c6ae87f8adb10312"],["/posts/f1252f66.html","ca0b39d501b56d82d0601734fe344786"],["/posts/f4af26a9.html","260b76b056915c730aae8ecf1e1c218f"],["/posts/fa3cd62d.html","8de775d9123c54de5ed5b90247a9a29e"],["/posts/fb3794ef.html","a169288e9e5b152beb35ef1a74865eb1"],["/posts/ffdfd6d4.html","2bf7d2191924151ab696dc07e0091b53"],["/private/index.html","4ea8355eb27d77c31ee5d3b68fd19ca9"],["/random/index.html","6151a37cbd5779829f547dd557745c34"],["/sw-register.js","3acd9e1c4c59f4cf37fa4296745aa73b"],["/tags/ACG/index.html","a4a659ec29005416c1ba4894a74bc207"],["/tags/AIR/index.html","58d099ba79d3eae549c002605b1828e2"],["/tags/AliceSoft/index.html","0a3cadd4679af671db76f06570d95b75"],["/tags/Butterfly/index.html","844d1d956927c9d8e28ceb9150fdd22e"],["/tags/C/index.html","26b4199ca6a71aca00a6e2fce2d5e652"],["/tags/CMU/index.html","e05451ee91c6f88d564a1b1654eb83f4"],["/tags/Crash-Course/index.html","df510369df863b24b7adb2995058cd24"],["/tags/ETH-Zurich/index.html","e5fb11389b31183b2be8fab25c0f6b50"],["/tags/Eushully/index.html","a777c20c4abfaff2d31c71f6352d8797"],["/tags/Everlasting-Summer/index.html","ebf7a78b2382ef4c3e8152f681684129"],["/tags/GDB/index.html","ddb10b1d427a33352f1144e9f9f6f65d"],["/tags/GRIS/index.html","8d400411d5926c2087d1047556148f3c"],["/tags/GUI/index.html","d3d3e229a6e85857b18fd747574a802f"],["/tags/Git/index.html","adea6ae775fc613e79f4a65ae94c14a6"],["/tags/HTML/index.html","5e8038efa0d390ca45da61f0e8397abb"],["/tags/Haskell/index.html","32552697a3772029eacb7efbc3297085"],["/tags/Java/index.html","d3256c27833c862196e955c6d773d0f4"],["/tags/LaTeX/index.html","7cb82337ee65c3fdda57c69d7d4af716"],["/tags/MIT/index.html","4c8719843e38515bd4cf4a2bb2d2c804"],["/tags/Markdown/index.html","00ba9590cbf69a9a57da7781222410c6"],["/tags/Mermaid/index.html","3bf894dca6adfe2a89fd5af88b27bbc7"],["/tags/NTR/index.html","714be48f03e1ec02eb033bbb99f6c666"],["/tags/Pixar/index.html","071c76daf213ac9117b001dd7eb35a5f"],["/tags/Princeton/index.html","9f736a668a88f4fd3175e6e8e86f3900"],["/tags/Python/index.html","b161b1bff5746147dfcd61faa7b5f419"],["/tags/Qt/index.html","c84f8f127e6bb01c73998f43a38ee054"],["/tags/R18/index.html","7140324ba2d035b5c393ed13d07d747c"],["/tags/RISC-V/index.html","62bd747c5e1ac5ab5fa171deba1a4d41"],["/tags/Scheme/index.html","4c0acecf6e0d662531d1cb11397c522f"],["/tags/Stanford/index.html","4a1173a0ec70d733671469cee2521c7d"],["/tags/UC-Berkeley/index.html","3324cb0bb806d29210b312852910ca53"],["/tags/University-of-Helsinki/index.html","8e8d6887d7c5ecc67deddd89b9b9a686"],["/tags/debug/index.html","91f627712605d8e4751586c5e1b0918f"],["/tags/index.html","49b7ffbc7db5ab9ad11a94f83f7128ee"],["/tags/key/index.html","ae396fbea6dd57602b608a486fcefeaf"],["/tags/web/index.html","39bf95df7627d6a73f0f93fda7349ddb"],["/tags/三国演义/index.html","6e1656537804ab859e7128216e35ca40"],["/tags/丧尸/index.html","12be81ba1e1d531c1c31848b85aa12af"],["/tags/京都动画/index.html","c01f0d01047acb3fff19f86d43e8175c"],["/tags/京阿尼/index.html","cb9710ce36173bcf11c6bac39bb6c993"],["/tags/体系结构/index.html","4f17ccfdb65c61b94e43cc2090868ec6"],["/tags/信号与系统/index.html","9bd30a28e78b98f396a4925edef3eda4"],["/tags/信息论/index.html","6338b2bc3455632b42ce9a7267a1cd8c"],["/tags/傲慢与偏见/index.html","711d1e76fa133b1df52b4e67aa5d674b"],["/tags/元稹/index.html","b95e40b44e8f33f1b327784961a33080"],["/tags/公路片/index.html","55667b936d269e8d017316ed968761e3"],["/tags/兰斯/index.html","ec3c58933d54d7be0606a0292ba5844c"],["/tags/关于我转生变成史莱姆这档事/index.html","7642d7d22ce168783e3d3846e461d767"],["/tags/冒险/index.html","3c5c104371bb956fad9dba1d068a7f91"],["/tags/函数式编程/index.html","3a25be4e421eee303e4ea32413e8c7e6"],["/tags/刺客信条/index.html","d1d7c0a2832f9c4979acfaab910e4706"],["/tags/卖肉/index.html","627fa1b40e94ef5cb51cc759c5f2531e"],["/tags/博客/index.html","f06d7fa45ca2b4f9cdfefd8b43666153"],["/tags/去月球/index.html","5be6042ba39c0deb467f547f7a524ea2"],["/tags/可汗学院/index.html","5c0023dba4ed1526e8cddd17f8bdd9ba"],["/tags/史诗/index.html","a44c4dbc19e6e0362de1ee49ddfa2a29"],["/tags/吉卜力工作室/index.html","613ee3f985ded2b420566cf54abf666e"],["/tags/名侦探柯南/index.html","3819999b071d45dfd439cfcd1529ae9c"],["/tags/后宫/index.html","4a6b2fa51e82b53302bca98f0e0680c3"],["/tags/咒术回战/index.html","7810ecf0fa0e76aeee3c9ccebfc0dad6"],["/tags/哆啦A梦/index.html","9a1dad03ca6999f6affc0b131c9950d3"],["/tags/哈利波特/index.html","d0de0cecdc38814ccdeee4b87d50271c"],["/tags/喜剧/index.html","7418b8dedfeda39045494b72ab805393"],["/tags/喜羊羊与灰太狼/index.html","1dbf25d14c9ebf908946611cd0b79280"],["/tags/四大名著/index.html","3730be7c4f0dd38191a40a5cd97a8d60"],["/tags/图表/index.html","393e8f4eae19bfc07eb5dea2951556ee"],["/tags/复变函数/index.html","8dafdf81d5e97d9acc8cf3c82b07d1fa"],["/tags/孔乙己/index.html","1b0051f88f47b992d4edc6b2e5a306b6"],["/tags/字符串/index.html","4f064a66535f4159ebd9ce339e0c885f"],["/tags/学园默示录/index.html","6ddf32f43dd7123807fb1faadb406ed0"],["/tags/寻找天堂/index.html","051ad4e8e1274e5697a8dd00f600ce5f"],["/tags/希伯来大学/index.html","da5453380914f00803817e0f20cb3754"],["/tags/异世界/index.html","e8dae30e44a24fcac5905a8f5644768a"],["/tags/微分方程/index.html","cda991657abffd2687e535f470187b96"],["/tags/微积分/index.html","923ed0c7468e278e4a7768a813ec44d2"],["/tags/恋爱/index.html","4ea9c1648087a09caf31e65fb8ce4462"],["/tags/情感/index.html","4d09687d233192694f1e4780582659c2"],["/tags/成为简奥斯汀/index.html","9e7bacbba0682caba406e65e78174d09"],["/tags/指环王/index.html","3c561d07906db2cde83692cf34d20c3f"],["/tags/搞笑/index.html","7ad192e15c7bab1940884b54606e878e"],["/tags/教育/index.html","a790f3646aba2a81df2d184f69b6af0c"],["/tags/数据科学/index.html","3cfa7502afc9fde701f34991d1d56b02"],["/tags/数据结构/index.html","6302dd9814eb03e1b8365c8f96a7991c"],["/tags/数据结构与算法/index.html","0c780911370ba4ed792dcbfc5098b4d5"],["/tags/文字排版/index.html","eee06be16ffa8f03a7b80b45f3c1164a"],["/tags/文明VI/index.html","f018dea0dad23ebe0a97dc3ca98b0d3b"],["/tags/旅行/index.html","da93d8286026dd6463820166c56cc38f"],["/tags/无彩限的怪灵世界/index.html","6d7b01bad89513e8b081799b92b348df"],["/tags/时间刺客/index.html","e839e5c84318792be38ec15ebf94e868"],["/tags/有生之年/index.html","c71951c56b2a9dfff16d77d262bb557a"],["/tags/李商隐/index.html","cecfcfad9738a443b1b8559f3d501d6e"],["/tags/李白/index.html","255b4a3cec43bd0d7bac7e17811cf556"],["/tags/李贺/index.html","23a1005738f713c7c5f7bca5f3d8f637"],["/tags/杜甫/index.html","ff2746ff32078ce75689613afbd5a06b"],["/tags/校园/index.html","a5df503508c761ad457d4a716f7c1fff"],["/tags/概率论/index.html","a72c99be4688344622a59316fdd6dfed"],["/tags/正则表达式/index.html","b5fd39e0ce9a51dc2f72ae1ee600ae5c"],["/tags/死亡/index.html","0ec6ae623847df9e4e7b41c7f9a093df"],["/tags/水仙/index.html","703d346363449715ad55487b9b9c2849"],["/tags/治愈/index.html","eebbdb58caddebe20183a00ff85a4033"],["/tags/烂尾/index.html","25a50c7619d08dcb632d93467472a6eb"],["/tags/热血/index.html","cc781cdfc9ffba979d23ecb14133a532"],["/tags/爱国/index.html","2bf5574e75db3a7220ad0ba1beb55a43"],["/tags/版本管理/index.html","1220653e1e2b6ea7738ad40df7700030"],["/tags/玉子市场/index.html","3300a1889f8afbcfbfed418d594b3b22"],["/tags/玉子爱情故事/index.html","a790701536e376c64b5b6d5023521141"],["/tags/王维/index.html","8a6ddf7cf937977727b60c89da102ba8"],["/tags/现实/index.html","526915e1f46a8fa76c4715aef35f83bf"],["/tags/甘城光辉游乐园/index.html","e9e51d3be45e24d3e0a41b03c0cc890d"],["/tags/白居易/index.html","17a7a7b9bce1b9aa50f4b9e28f396019"],["/tags/白毛/index.html","732ec0aa2c5c6ddcbed5d005bbae23e4"],["/tags/短篇小说/index.html","28bbbc2e600b71305fbecb5633d850f8"],["/tags/神话/index.html","5ffeaa97479d2021aedcb88426495015"],["/tags/离散数学/index.html","e27776d1f59b7ba761f8dc0a878d6129"],["/tags/种田流/index.html","23c2eba34844eeb8a3578a1d1b02c754"],["/tags/空洞骑士/index.html","f5352015d3b3885f32d4b452e77faa0a"],["/tags/童年/index.html","9c7a25ec5b75b9a2cc000da7b0d16ea0"],["/tags/童话/index.html","629823a96cf06f348e134b2b41d42773"],["/tags/第九艺术/index.html","84c01c6d378176ce98e118c04827d224"],["/tags/策略游戏/index.html","d92a3c8d8595a5b66afb9f1448e94483"],["/tags/简奥斯汀/index.html","30004b0807467a99be82e819f1f4bee9"],["/tags/紫罗兰永恒花园/index.html","3cf8a5e928373b0b67e0247287e0c500"],["/tags/纯爱/index.html","56ef7da3807107e647e771acf5e02366"],["/tags/纵使手残仍大爱/index.html","a1f2f49b2b43b6e1686a964a992b9751"],["/tags/线性代数/index.html","57f2f1b147c4f2a049965623027d91ba"],["/tags/编码/index.html","7eb5c8514a0198e8fee8f44ce514149f"],["/tags/致郁/index.html","da88f85394d4cb951a8b1df90d1d7fb2"],["/tags/苏联/index.html","e81819d78d43603e272d42bc0a25c643"],["/tags/苏轼/index.html","9cd3dfa8518ab1d94e29294a271a8b28"],["/tags/英雄/index.html","5d40c2e6dda5bf61b461f7f945e16a14"],["/tags/计算机科学/index.html","99330f0e1713c4da43b4610d81fe9c38"],["/tags/计算机系统/index.html","b2418129286cbd68065105d0d2de6bbc"],["/tags/词中之龙/index.html","4b85bd33aac11e1f35f6cc323b2ab07c"],["/tags/诗仙/index.html","c040344b4d29786e745c283b2cb3677f"],["/tags/诗佛/index.html","4e410d823bf7116ff2e141faf1b50fc9"],["/tags/诗圣/index.html","7956210ad2fb7fe3b46122d2bfdf8ae2"],["/tags/诗词/index.html","d5bcda3f2c0c83dd618dcff38c5097d1"],["/tags/诗鬼/index.html","68c74f21e9ce184c557a6468401843d2"],["/tags/读书/index.html","20b507fd1090fb36ef0a5c6c8e558b61"],["/tags/豪放/index.html","30016457babfcee8fea72d789898e5a8"],["/tags/跳跃/index.html","77f7275623d63c4791befc5015085670"],["/tags/辛弃疾/index.html","db2b605c064a8324fb2eea21fd9a3881"],["/tags/运动/index.html","34a95addececec5d725cf9e1f9721d12"],["/tags/钉宫/index.html","d4561d3091bbc5de1896af041b9efed4"],["/tags/银河战士恶魔城/index.html","10e65b8ff5509d1ea346eaf162469be8"],["/tags/陆游/index.html","7d340eb976b0964aa51f47b3bbe5bfc7"],["/tags/零之使魔/index.html","1c7df0046abb07db0177c4d4e3fc7d7b"],["/tags/霍比特人/index.html","c43e95c676fcd79a7051e3e43615407d"],["/tags/飞屋环游记/index.html","547d5b8518d786d7f75b221fdd57d978"],["/tags/魔戒/index.html","c3c596a28f2406d2e3fd5d96774b42a7"],["/tags/魔法少女小圆/index.html","a028dab99300a32ecc1eeed5dd338982"],["/tags/鲁迅/index.html","1fd4a01051502714f1bf12cb906256ef"]];
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
