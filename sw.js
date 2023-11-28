/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a7218ea8b21463751beea6b1ddd9efec"],["/about/index.html","a32c3dbf0a26d4dff64a63a014f21062"],["/anime/index.html","f4451f5bb84eed5a8ee351ed993d0f95"],["/archives/2022/11/index.html","31cc26c99391a1325541ce456a91b839"],["/archives/2022/12/index.html","a06d53f6ad0ecc8e81b244f770b7c692"],["/archives/2022/index.html","9d810ba6769446f8834ac88260bcdda1"],["/archives/2022/page/2/index.html","9edc26eeb90aa3cd0a397df9dcc325d2"],["/archives/2023/01/index.html","42685dcf27958a863f07628d2edec61a"],["/archives/2023/02/index.html","9370b7d28f1aca540d398bed2546a67e"],["/archives/2023/03/index.html","91bc2115cc98469affc54dce31bf1675"],["/archives/2023/04/index.html","ee059abdb505cca8b0030f53ee61076a"],["/archives/2023/04/page/2/index.html","0d84e85f921178298c359bda8aaf0f98"],["/archives/2023/04/page/3/index.html","5b366714fd75daa366297580f6f0d9b6"],["/archives/2023/05/index.html","a92e3b84778efdccb616553b2c677aa9"],["/archives/2023/05/page/2/index.html","8bd79c7a6405f16e518e0fa7073a5734"],["/archives/2023/06/index.html","6679713484e7bb26c91456d058bdc2b3"],["/archives/2023/08/index.html","eede57e45ba68acebeb31252d26677c4"],["/archives/2023/09/index.html","3486813bd03f49621ff29941b6873874"],["/archives/2023/09/page/2/index.html","5a340a8e52fe9003ed8c920f4aec6bb4"],["/archives/2023/10/index.html","7519b2d5d542d44153f181294a265cae"],["/archives/2023/11/index.html","1177118ebac8f89ba890cc0a64799121"],["/archives/2023/index.html","55f249dfbcc1bb38b988ba4d7ba1c2df"],["/archives/2023/page/2/index.html","34e1cd4640745484378e2a50c82a7eac"],["/archives/2023/page/3/index.html","da0dd37c522f62f4468b943f96ae312a"],["/archives/2023/page/4/index.html","3f1d685d941409bb0b6608fd83ede5c7"],["/archives/2023/page/5/index.html","e66ce04521be7ae3c88ffe8acb49ca9b"],["/archives/2023/page/6/index.html","79e1c55530043802f07ffc010669ae98"],["/archives/2023/page/7/index.html","5e8bedb816660300677dba1377baac78"],["/archives/2023/page/8/index.html","c3b6057edae5784eb684deae5b267c43"],["/archives/index.html","eced74034e8c90dc4127ba3b5f0893cf"],["/archives/page/10/index.html","b359efe0bcbe3eac6cd2af1b09e4eb81"],["/archives/page/2/index.html","bef9a2dd447f81c7ecd835992ac5a09a"],["/archives/page/3/index.html","2fac7e524b9d8c38b4adcd1b2953c010"],["/archives/page/4/index.html","9e44068c00d995206b1796ed0c5e767d"],["/archives/page/5/index.html","04b95a876f9f75d63cb4b02dfd5c7a55"],["/archives/page/6/index.html","0a54d37d60be4fa95c6ce09fe0a0ff79"],["/archives/page/7/index.html","f0ec053b0b8097b203fb158d9e402a67"],["/archives/page/8/index.html","f965bd6f01180a6d660a33a7fba5c4d5"],["/archives/page/9/index.html","f85158273f8152233e4566040811aedf"],["/categories/ACG杂谈/index.html","df55dbd8f7b4342afca5508b298f5323"],["/categories/ACG杂谈/page/2/index.html","73d063d4c9303be96c07632c2c06b3a7"],["/categories/ACG杂谈/page/3/index.html","e4dbb0e96bb846d253ea9f70cc37a472"],["/categories/index.html","169055b652fca412a6a0cdb89a0cb9e1"],["/categories/学习笔记/index.html","1166b97c4e0fb6070977818fd88a7bea"],["/categories/学习笔记/page/2/index.html","47a7cf0206eb54959b13b6dcfc07773f"],["/categories/学习笔记/page/3/index.html","0a30716b78ad9c74fba4d9b2479e619b"],["/categories/工具/index.html","43a31e9eaa9003ec18d5d23634de5a0d"],["/categories/工具/page/2/index.html","56b75140c361d121ab66b261030000e1"],["/categories/游戏人生/index.html","736acc10be3117b0563ff8cffb90b6c7"],["/categories/游戏人生/page/2/index.html","cb9b505383f32a1c0d4082e881a7b597"],["/categories/读书笔记/index.html","8cc8be33d44b5ddf0bbbd9750640829e"],["/categories/读书笔记/page/2/index.html","8d8caeb797667522fb9f5eb6868d246c"],["/categories/闲言碎语/index.html","1fbe95de238d1e02b61d16ae543c07aa"],["/census/index.html","350e91bf5428a15e25cc1b67677ba83c"],["/charts/index.html","86d45d00ad97cdd3ce46d16b60b1b5f7"],["/comments/index.html","3f0b61a8e7e40c66c406b1b013bfcce7"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","ea4248079b434a3f1c781728aad6f2a2"],["/gallery/index.html","ae1fbb85a2d0d1ac08ca1f19d4648556"],["/gallery/wallpaper/index.html","cdb12fe76ebc399270bbbf7f536b01f7"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a39e49d2bedb8902f52bf74e1bc95468"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","44d5214088183a123b4458d43b94c7ce"],["/page/2/index.html","5050b6be7e8e78a1ba700f3abff42127"],["/page/3/index.html","48fabd290542c89e23dd7f08db42407e"],["/page/4/index.html","f502a0d64c9b95aff9622033c8b1e39e"],["/page/5/index.html","ca097f9580015e90a8dbc7101e45be95"],["/page/6/index.html","3d32c76c062c0e200897ed8e7b279816"],["/page/7/index.html","a47a4ae7991df712fe94aa2e8f126625"],["/page/8/index.html","5dd58558fefa7a8d952963552ef9cb4c"],["/posts/106331b4.html","3697e3e5b8678eef8b74488d9ec89e5f"],["/posts/1185a02e.html","8368f5815036169f3645070ede38b6f6"],["/posts/12e06b11.html","855fdbc551287e9d8dc3e29f7a4d6abc"],["/posts/167c7c45.html","d51ba0956430a1b3f82b6c17409883ca"],["/posts/1743dad6.html","2cd7c1e582fa9b4fe7217c66f6b56b3d"],["/posts/175a8e1.html","a24de1b05920609d7d5ddb55f430e138"],["/posts/1be398e4.html","9c4cf5d564976e12e64b01a16c196a67"],["/posts/1c5a0321.html","04719d2c5a0e40625bbdf727db02e3b9"],["/posts/1c5b1e9c.html","e074d978329832346aedfca7935b65b8"],["/posts/1ec7973e.html","0093f3b9773291b2ce91161675996a26"],["/posts/1fb82448.html","7d10996622fa14930780974a7fcde638"],["/posts/21f18fd2.html","ad9de1dae8c1de559ed135362a75b6d9"],["/posts/29c507fa.html","2fb7d4aeea4545a563e8c08ff162fec5"],["/posts/2f34eb00.html","3754dcb5debbe4a11500fbc99676d59f"],["/posts/2f57a694.html","0927701ad901361bca90a7ec0a671fb4"],["/posts/374b54d5.html","c05ff35fa710a6538d5c872a2cab5ba7"],["/posts/3871b764.html","a2656c280081685e4883d94058e2cf1a"],["/posts/3b308caa.html","ddd410e1ac35c366e77d2fa25282d523"],["/posts/3c3cdb74.html","b9db18d03f0d5c45cd927550c372c4bc"],["/posts/41f65cde.html","47ba279d1221f912daea0f63752fb44a"],["/posts/4208fd6c.html","50df9ad7829570638b802b80d447627a"],["/posts/4392373e.html","2d38705c53280aefeae15e385d8fa033"],["/posts/440ed920.html","c867a618fe8ad2ddfa9ff4d3d6e6fcb3"],["/posts/4d2b51ac.html","3c75066f57c35d6ca36e9e24443304d2"],["/posts/4db1a52a.html","c156e76a1ba1cdfbe1919149038f081c"],["/posts/503ae89.html","b3e9d4b63359bac6a7efd2e953f8faf8"],["/posts/518e2799.html","4dbb350838f4e34a43a1fe29c2fd6952"],["/posts/535fd087.html","fc4c132a7749c13362bc4bcd355978e2"],["/posts/5923cba3.html","27872d2c49f15dbcc4df01d1a768584c"],["/posts/5c1bb6b8.html","194228b24fa9c9d6d8c8dc64430bd8ab"],["/posts/5dc45f0c.html","b473053364a68d6fa46f7fc3aa9f87e6"],["/posts/5f2caa2c.html","d90c40fe2fcc0503eda85f864647215b"],["/posts/616be7b6.html","6349813e5bdecd3bf14375cd3d668419"],["/posts/62a1ec0c.html","476f081ea84a2a26ce404128255d9a52"],["/posts/69fb361e.html","c900737a238cc7e8d3fa7989f2730c0e"],["/posts/6a8518ce.html","61f55301491d2284b463ef8153af4c76"],["/posts/70685119.html","afc7e605aef8890b1fa2584cb4602eb7"],["/posts/743db4aa.html","458410261bbef2cbbddbb5ca2f92b24e"],["/posts/7b67faab.html","7e0bbbb47afd8f87efb5d98604d4da16"],["/posts/7b76be01.html","77f64db233c4bdf106da5ec21507385d"],["/posts/7bff939e.html","dba9bd2d094c9390f7c2433b9bf000c0"],["/posts/7cc4ca07.html","47deb47ff871054095a4e3f11fd0546a"],["/posts/7d257210.html","cb8e3024eac6ef102bf7d11c069dd306"],["/posts/7e6a5c94.html","c0bb73bfcb282a3d29ee2c8a40f63c5d"],["/posts/7ea0cbe4.html","7d51e9df2a2db40c481be863281ed675"],["/posts/7f382da2.html","62c9a25ff1582130224038cee079d9ad"],["/posts/7f8d32f4.html","c62b0d32969d4c6cc8bbc9584f02442a"],["/posts/8207aa48.html","df97fbe370fb148d10df4305b669b38f"],["/posts/836ea9bd.html","f19759f0d6ac7a17b1be8ea40a830548"],["/posts/84cae757.html","e909dbe024021ed631ed17170f3d0776"],["/posts/88200036.html","e76d0b74b161f58896a48690664db40f"],["/posts/922fb64d.html","a2410551f35e142e81586ab597b328a6"],["/posts/98332b29.html","2ebb50cc329ee10a049d6f11e003fb85"],["/posts/9a1a736f.html","a5a8922472c1118e517e7f2e21d89f9a"],["/posts/9addd0bb.html","d49012213eaf92a86136789643c2cae3"],["/posts/9b44950b.html","80b343ba2b1eaeb2e4a78ab31f8e8e67"],["/posts/9ca149ab.html","85fdeeba64631592ab54278800633d5c"],["/posts/9e4446bf.html","040cd9ae53a6fe7d62416c47f4301a11"],["/posts/a0271e58.html","628bf23ad025fb30f233e71cf57c1274"],["/posts/a13c1dba.html","a17b5e62430c270ded576e3f187fe7cf"],["/posts/a1f2a4d4.html","b6bc25904e2b598f6903740e6204efb6"],["/posts/a5f300de.html","8cdc5fb0519b1b5381e91a3064570ae9"],["/posts/a98766fe.html","ef99d1d2791f8a99ce3f7d4664d12e32"],["/posts/a9f63847.html","30e8e04840dd91e31edaaf1608f11141"],["/posts/ad31055e.html","aeac58514c828c2c31387eed224067ae"],["/posts/adcd6e20.html","8980a66a29839a698e7ccf35b73c74d7"],["/posts/b0fa4c58.html","d7d66573093ab8c51979c9df3c6badf6"],["/posts/b1168675.html","1c3214def168ec8c59f6c913ed769d34"],["/posts/b2feeab7.html","f78ff3e22f4864ed3dfe1925948da886"],["/posts/b6d66f1b.html","846f6ed3ff4ab9e6a612fca9f40eb655"],["/posts/b7525d11.html","402f7c26a55b8e683a43d022924c3968"],["/posts/bb154b63.html","1cce8c868a57d14afb342122a2b8d2e9"],["/posts/cc86a40d.html","29278ee67e48059f19d448650628471a"],["/posts/d36531a7.html","3a3d0db2a4855a62c25bee52677cfa70"],["/posts/d442e51a.html","a13298b649d72a333c97060d0ffdada0"],["/posts/d7fdf01f.html","21c42bcc25e5745159a760b7d2a0f1d3"],["/posts/d839b0e.html","cbd339be3e9580d096b2bfc5e40b5ec3"],["/posts/dcdf88c8.html","328b10bb678fbbc632a050adb6ea5f9c"],["/posts/dd378ae0.html","67fea2698d01b714cedd05dfd466f016"],["/posts/e15be301.html","bbbd08d0478c979959350107fff48fc8"],["/posts/e2e4b4ce.html","36f62457d1667bccb52d2a00882849d1"],["/posts/e35ef5bd.html","05740ea80798d021adb36a3cd013ed0e"],["/posts/e462ba83.html","dfd5de8d0144cad2178ab5f24d29b4f5"],["/posts/e53204e6.html","0b5a8b809bc5b8aba448f6ef57700040"],["/posts/e5cd9bbd.html","b48c85a592ef1d5c0030ded35faba230"],["/posts/e7a99a5e.html","12e629236853efb5abd5a4fa59fa46db"],["/posts/e9318100.html","09f51dcd1ebe03247ff9ca5866a63c15"],["/posts/ed52e6a0.html","7d84c89f969dbb2ade5e50b383a2cd77"],["/posts/ee0ac59a.html","ad2bd24a71d21265828da51051853f5d"],["/posts/f09c1ee5.html","7433d2b725a27714c6ae87f8adb10312"],["/posts/f1252f66.html","e2fccf124d17f50992471e2beec55513"],["/posts/f4af26a9.html","260b76b056915c730aae8ecf1e1c218f"],["/posts/fa3cd62d.html","5e73103889ec505bf87bffdbc37aa258"],["/posts/fb3794ef.html","729d036d95de9320b0f902f97b18d90a"],["/posts/ffdfd6d4.html","626ccc777a0658d0f8dbd61385ba537b"],["/private/index.html","eef95eb14630cc2a54495f4d87f4ffd9"],["/random/index.html","3bd64797f3575229b6b457254a45597a"],["/sw-register.js","f7d7294d1fe59f7a5f72df151c8811da"],["/tags/ACG/index.html","b9231fc5ff5151ad6b86d9368092c6ae"],["/tags/AIR/index.html","ac7365d29d8d2d7635166a9c59592706"],["/tags/AliceSoft/index.html","cbacda0fc146c10791b853634fdc3983"],["/tags/Butterfly/index.html","a71b40bd76731b9a29dcf3e09323ef79"],["/tags/C/index.html","42a03a1eca24f951ed65cca4983bb15a"],["/tags/CMU/index.html","b22620607057282adecb766084448551"],["/tags/Crash-Course/index.html","5d8daa904d5cd481dbefe3d6aef356ca"],["/tags/ETH-Zurich/index.html","47ed5d9e6856a4cc467bac9f8bcb5dc4"],["/tags/Eushully/index.html","4d0bffd6ac480ec0574e4c3b439ce00c"],["/tags/Everlasting-Summer/index.html","7caf97c3b1c8f5bb246870e20bf797d0"],["/tags/GDB/index.html","481b3243f8b1bee8ad6809d4688a821e"],["/tags/GRIS/index.html","cba3487a6e155cab66b38f4f1104cc6c"],["/tags/GUI/index.html","0f326c4ad5e14920c07e825302127430"],["/tags/Git/index.html","c90580c9d84b53a977b7cd8c27915d3c"],["/tags/HTML/index.html","4579193ec3d4a72a18a4c13ce16921c6"],["/tags/Haskell/index.html","a6466dac31283a24372df87a07e944af"],["/tags/Java/index.html","6e1b6f01df19b8ae1042112aaae8a600"],["/tags/LaTeX/index.html","25f4bc0c17c2332f413e1b8c7ef4d39a"],["/tags/MIT/index.html","9057411145aad72992dbd701aef2cd18"],["/tags/Markdown/index.html","be1a9c8ea0a38a6a42afb8f3bcb46374"],["/tags/Mermaid/index.html","66b524db1e60ca5331be1774ef3ff06c"],["/tags/NTR/index.html","8c1653850a65de67bb337ad1c38ad76d"],["/tags/Pixar/index.html","d0fef2a696f0c30b71bedbe6a461e822"],["/tags/Princeton/index.html","010a2b479d023d52495b0f2d85d9b967"],["/tags/Python/index.html","a663fdf4c4b352941d227901d9cdbb85"],["/tags/Qt/index.html","39ba46ecedfade75a4a5e48dfce053f3"],["/tags/R18/index.html","0df395b176572100f15bbda7ca531e94"],["/tags/RISC-V/index.html","2af5fb4fec7d0676f02bf652bb103a45"],["/tags/Scheme/index.html","d3f16d56680f857859ce29c98988810a"],["/tags/Stanford/index.html","d71cbd2b0ada6d6829eb6f8ff32edc40"],["/tags/UC-Berkeley/index.html","3c4ddbf453e64509e0bf85b7a2ce97cc"],["/tags/University-of-Helsinki/index.html","845b1457694add64cc4ac24023b8ca0b"],["/tags/debug/index.html","f7fe1f83fe44aa5b0616ee59b8b27047"],["/tags/index.html","d46281350aaf060afcc8fd4bda903b0f"],["/tags/key/index.html","41249440d82a70d762c4b965dbbbad94"],["/tags/web/index.html","64ce09aae302f0ead9fe0f170ae7f96c"],["/tags/三国演义/index.html","29218810f412359ac30f829af66a31dd"],["/tags/丧尸/index.html","933a6c6172ba65ff173652aaa353af4a"],["/tags/京都动画/index.html","a7f4db7863a6d819fe127009d79b5bf1"],["/tags/京阿尼/index.html","90d51bb65f6c56102aca0c373af3501e"],["/tags/体系结构/index.html","4f37831098bd3058b17536d421cd237c"],["/tags/信号与系统/index.html","64f5b2da21f277c098aba78a2419156d"],["/tags/信息论/index.html","a68d93a9131fa195332a83df39e1698f"],["/tags/傲慢与偏见/index.html","3a873f222ad15e86b89f69d70675ba76"],["/tags/元稹/index.html","28d30ed2e1820e1926731efc6d960d51"],["/tags/公路片/index.html","3c13df0a3af5b9a9dc243b096006bf32"],["/tags/兰斯/index.html","88534f2c46871b2bd2e2f10725f9835d"],["/tags/关于我转生变成史莱姆这档事/index.html","e9139d4a737aab19c74e3e099020d109"],["/tags/冒险/index.html","d87d96d0902df976be3c0f79106826fa"],["/tags/函数式编程/index.html","f9f3183bea8cf0d07c5fc14db97a69a6"],["/tags/刺客信条/index.html","8443ff5d17535c986186c2409beef03c"],["/tags/卖肉/index.html","ff168f52a170694ffdcba9b54145dac1"],["/tags/博客/index.html","7b90e650d09f961940327c1406a9c6de"],["/tags/去月球/index.html","f16cb4961e86c0d61a7585a773171401"],["/tags/可汗学院/index.html","99fd0bebb8e76ce750ea580dafbca1df"],["/tags/史诗/index.html","c06722c2315713384d878a50ce0e161c"],["/tags/吉卜力工作室/index.html","d480f4ef1f2904c73658d3f92d114666"],["/tags/名侦探柯南/index.html","6a5f22506fa726a4007709dff73b5bae"],["/tags/后宫/index.html","7dd1c2f547dd6c375f3bf36f9b091793"],["/tags/咒术回战/index.html","4494e5c5ff1d2b6adcc7776b48ec49e2"],["/tags/哆啦A梦/index.html","bed8bdf28e525bc044b231e5e7734fb4"],["/tags/哈利波特/index.html","b2966616080c373177707822a68a6f55"],["/tags/喜剧/index.html","640c434cef28ca5e6206e94cfe368a64"],["/tags/喜羊羊与灰太狼/index.html","c2692f8dc98aec2886b7333135559f4d"],["/tags/四大名著/index.html","8f8a74bf4b242f45215a7aca5e5ac0a8"],["/tags/图表/index.html","8c36925066108090b15bcbf5d1d4d3a8"],["/tags/复变函数/index.html","71780a1aec0efb51ef08f4eeff858de2"],["/tags/孔乙己/index.html","2f375bdfff69790ae76b091199e1d184"],["/tags/字符串/index.html","b8efc137fcf3c85b1764529b1867cc23"],["/tags/学园默示录/index.html","a6017263aed1ba07fecfbe6196c124ca"],["/tags/寻找天堂/index.html","a6f22b86419ecf84ec15e961e9e8a24b"],["/tags/希伯来大学/index.html","80aa52d1fe2eb7ed1aaabe718e13ff73"],["/tags/异世界/index.html","0a25d6ee8ea3f1d72c9a446e4f52eb5c"],["/tags/微分方程/index.html","17f2122ff8be51fe65ac5b6c4c249537"],["/tags/微积分/index.html","4a0c35ca8ee00f1f2fbc5183f510d431"],["/tags/恋爱/index.html","8325bca80219e1c5ab6ec7fd76f313cd"],["/tags/情感/index.html","b0524a729a8548efa4dadd5f175212ef"],["/tags/成为简奥斯汀/index.html","879e090a63394b7c5ecef95232cde23d"],["/tags/指环王/index.html","48e0f98ebaddf40d637f6d840630b91d"],["/tags/搞笑/index.html","716daf4906b3097592da5087d232e514"],["/tags/教育/index.html","0923873ef000a10e1f6d1260cd981e54"],["/tags/数据科学/index.html","851170f639bf7ec98bb792c47c11ce8b"],["/tags/数据结构/index.html","58f0afcc92c60e8ed8fbb3527d2e6da8"],["/tags/数据结构与算法/index.html","cb540eb416669b53e15fa392a413c0ee"],["/tags/文字排版/index.html","f2deaab27571efdc61239951e012571c"],["/tags/文明VI/index.html","05f183d268516bd05d2c41f832629e01"],["/tags/旅行/index.html","078ebdbd422f0aa8c09b85c102586f98"],["/tags/无彩限的怪灵世界/index.html","740a19c53c047cd9f29cfb71c8a1190f"],["/tags/时间刺客/index.html","7441c0250a2bbfd92f08690894f7b5af"],["/tags/有生之年/index.html","241de87282993685144584d0df766050"],["/tags/李商隐/index.html","f334bdce17ff874642f507d4e4b26cdb"],["/tags/李白/index.html","0123d91781a2ffe63f7ba90f2007077b"],["/tags/李贺/index.html","6d8d5e111a23a66f6798315834d6fff6"],["/tags/杜甫/index.html","956e83080250a3dc88d462ddd5fb78e0"],["/tags/校园/index.html","9d0e9a167002660a7f493e9b46d0c433"],["/tags/概率论/index.html","0da2e54abd1a3936b267c9bae9f7f78e"],["/tags/正则表达式/index.html","c0487cf70d1ba0236c35f0e4030422a9"],["/tags/死亡/index.html","1b40d59d6fe1aaeb7588d3fc63bd5a8d"],["/tags/水仙/index.html","d653a295e0acda60c633fba9daf812b4"],["/tags/治愈/index.html","3d63aefa517c32c6c01a29a560b8541f"],["/tags/烂尾/index.html","6bc4a2eb81989558bcd326e8810af54e"],["/tags/热血/index.html","d8dcb6c63f513117e363850b1bf620b4"],["/tags/爱国/index.html","f62591c62ddd62f30aef418c340e4421"],["/tags/版本管理/index.html","7ef99e429d2c5995b639ea27310a8eed"],["/tags/玉子市场/index.html","c1ef4cb931792e1178cff651f240476f"],["/tags/玉子爱情故事/index.html","f196b5ad02a26cba16d4a504651ccfa4"],["/tags/王维/index.html","074dd603c44b52f61adb73fa0b4c36fc"],["/tags/现实/index.html","d6b46ddda90d3c0594213be3c349b359"],["/tags/甘城光辉游乐园/index.html","f5cbee611b8204138598f3c62343c19b"],["/tags/白居易/index.html","49b71ac285c4cb8e18c020e89abf94b4"],["/tags/白毛/index.html","95a0d483562239417bce6a98fec04060"],["/tags/短篇小说/index.html","a076a014fb0c53e617329fc8818b5513"],["/tags/神话/index.html","a619a0ab0997015044a679d10ef53125"],["/tags/离散数学/index.html","1ed09a1f0c561063af3d60ea6b2e7683"],["/tags/种田流/index.html","e3f4638cf691417aa084cfaf63538bc6"],["/tags/空洞骑士/index.html","6ca0140edb360c96eaa08cb6e652120f"],["/tags/童年/index.html","16d6e5e3ea4cdfe65862bba37aca5ff6"],["/tags/童话/index.html","baa2dc4d741dfa6afc119dfd98885376"],["/tags/第九艺术/index.html","157de819b468bb4e3d53c07c719ddf56"],["/tags/策略游戏/index.html","91f1163af19b96f7e7e4885c0dbb914c"],["/tags/简奥斯汀/index.html","0a80d6fdc7d2fb0a5c69abde2030eb61"],["/tags/紫罗兰永恒花园/index.html","683db76a6ba4ceea39238772299ec0c5"],["/tags/纯爱/index.html","6965334008db59ad04621a81c1d805d8"],["/tags/纵使手残仍大爱/index.html","6cfc318dfa590a433365d055c135a8ab"],["/tags/线性代数/index.html","8e406628697f53de2b311494154492b6"],["/tags/编码/index.html","e4c47e6692b2bb165d9ddcb99259ceea"],["/tags/致郁/index.html","af93e219d332a5ce759a0ca29eded900"],["/tags/苏联/index.html","8e08604d6681c43928970acaf34fe71e"],["/tags/苏轼/index.html","134c03467ff9ecdcf3d65d5a57cefb97"],["/tags/英雄/index.html","706f951422b3444e1575bb6b4888a4ac"],["/tags/计算机科学/index.html","ac217cbdabf70f1152d9c320615746d9"],["/tags/计算机系统/index.html","ca79a74baa677e07b84ffa1d269a7005"],["/tags/词中之龙/index.html","67846c3b88322351d567e5f00f0b4c4f"],["/tags/诗仙/index.html","393c63e441045d31b419e40babe6a268"],["/tags/诗佛/index.html","924f7dac85b54a5e7e82a3a57f84169a"],["/tags/诗圣/index.html","fe03ddd15371293c7553eed96f67ea0e"],["/tags/诗词/index.html","4333bd9b25e448ae80a9fa91d6630ff8"],["/tags/诗鬼/index.html","40602b951f23c559644cbae0974f7f2f"],["/tags/读书/index.html","e1812c4473a2928bb9cb52e8f851af51"],["/tags/豪放/index.html","fa2dfd4c01f6d782029b77511c7ec924"],["/tags/跳跃/index.html","d93ed7c6018bc147d201b405b22ea185"],["/tags/辛弃疾/index.html","ffd8c10bd0cae531f7d985b77a750d18"],["/tags/运动/index.html","ffcd8d1ec05e565a2722c60e9104c2c9"],["/tags/钉宫/index.html","16a3d3cc6925a9fb797030479caad063"],["/tags/银河战士恶魔城/index.html","784aaf0353e20d8390564cd86e77b584"],["/tags/陆游/index.html","f4f079fab41030706611909cca492c40"],["/tags/零之使魔/index.html","3662576cf0c9409aa43310d811618e71"],["/tags/霍比特人/index.html","4cdd2f77d37b0c4e56c36f6adacd4bd9"],["/tags/飞屋环游记/index.html","1fa8002e685685db90e023e8a8930c2b"],["/tags/魔戒/index.html","2d34f54c205960fc05943117b4f9fa01"],["/tags/魔法少女小圆/index.html","0e54caaac460bdb1c6f832bfed3ebab9"],["/tags/鲁迅/index.html","b825a541cc91d524c88e4e49c513c01a"]];
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
