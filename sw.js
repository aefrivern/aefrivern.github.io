/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a7929edee402dcddae38818d3660fb00"],["/about/index.html","bc0ef047f72f3ee115905c7625a2371e"],["/anime/index.html","f2607b9ccf198924b475648cdd1ec5a2"],["/archives/2022/11/index.html","fe5f95a5367629da510aa5700abe1a6f"],["/archives/2022/12/index.html","17c9d368274d152d4f6a2f30a299a0d5"],["/archives/2022/index.html","164f1a7ded31e33134c5822677e79196"],["/archives/2022/page/2/index.html","75ed6fd04d76e3a29301fe075c417b9a"],["/archives/2023/01/index.html","d6fef0d54a7e32a0ff49695efbc17431"],["/archives/2023/02/index.html","d5eca77392feff76871496b2633b3c58"],["/archives/2023/03/index.html","07ab1f8fee9fc2cadb0d3ea87c98e548"],["/archives/2023/04/index.html","1deb5c8d68a89071620e3e00ef097487"],["/archives/2023/04/page/2/index.html","42464e6e63cc4db416ac20ea82499479"],["/archives/2023/04/page/3/index.html","e5dd55782587e3247050b4ffe1ccf1ae"],["/archives/2023/05/index.html","9d08ce9215b0ed7adb06f55a1df17ab5"],["/archives/2023/05/page/2/index.html","11580de2d5fa9423ad852ddd1e2a003a"],["/archives/2023/06/index.html","85cc6c4b4923f1da59bed739584f1ede"],["/archives/2023/08/index.html","8b9627ad652adbe2fa47a74abdd39690"],["/archives/2023/09/index.html","7f40ba9d426242283673d992c3b481c4"],["/archives/2023/09/page/2/index.html","98b393b421e8638b9b643619a1b145cf"],["/archives/2023/10/index.html","a3d5e1b9799ac61b68961abbb2c35a24"],["/archives/2023/11/index.html","753cf1b78d773576cda1ef6521333917"],["/archives/2023/12/index.html","9e23c46cdfe3210d0bf72cc2889e023b"],["/archives/2023/index.html","4b941d46eb9e3f293cc8fd2945ea4015"],["/archives/2023/page/2/index.html","c3d6b1ee7f5a97d56136c7674a47a138"],["/archives/2023/page/3/index.html","033b617a25b9b1a7e3c58ab02f2e86c6"],["/archives/2023/page/4/index.html","e8f8bd36f39d08dfe6d8b96cd1c43464"],["/archives/2023/page/5/index.html","54b8e121a7b6702ed4c73ea0cfb89fd4"],["/archives/2023/page/6/index.html","f09801103d4e168ab5f7c7c59ed2adca"],["/archives/2023/page/7/index.html","c7d0fc634619e56bf37d33613b0cba93"],["/archives/2023/page/8/index.html","e09e362d6101bb2b733ca23121c2697e"],["/archives/2023/page/9/index.html","7830e11520c777147fcbd7ce07ad89bb"],["/archives/2024/02/index.html","104b0d7fb1cc55078d66a035c28f75aa"],["/archives/2024/03/index.html","18122d8260a2300d288f7cf2f4f17e2d"],["/archives/2024/index.html","90706318e5a49835610e63b122ff20c1"],["/archives/index.html","6c912191b958fc6497f1196a5a388f6f"],["/archives/page/10/index.html","cbe9501ff7f506e1ea5745b9466668de"],["/archives/page/11/index.html","b98189dac4982b617fefb6483a06ad52"],["/archives/page/2/index.html","ef705826125b1014f7c20b79bb7f139b"],["/archives/page/3/index.html","4d6a03aae7070564d0ebf254dd85992c"],["/archives/page/4/index.html","0616ef58b5a02573d9590aeb0eb12a69"],["/archives/page/5/index.html","5c19277b351564c002010318b0c7d551"],["/archives/page/6/index.html","1a206161f251ef0160f69f19b74877dd"],["/archives/page/7/index.html","8912cafdaf0ba94a83c6f27c905ce664"],["/archives/page/8/index.html","47e8c9f8537e1d0a4d4b2bf484155e76"],["/archives/page/9/index.html","aa8da08f43ce8777d397b318726aa039"],["/categories/ACG杂谈/index.html","d6d82a61adb58195682129f49a48ba5a"],["/categories/ACG杂谈/page/2/index.html","6a46eb318f3782074072b36e3bc476a0"],["/categories/ACG杂谈/page/3/index.html","d319d1fd9a6b11fc14aaf55bb8676719"],["/categories/index.html","2790da3c59b02365516e45f7bec3d3c2"],["/categories/学习笔记/index.html","b45b293ad0d313b3aa03a8d702efefcb"],["/categories/学习笔记/page/2/index.html","8ea08dc86c5be84dd7be6f082e87ba3c"],["/categories/学习笔记/page/3/index.html","f10d7c857bfddfc46e8ed3513289a416"],["/categories/工具/index.html","d570afb6fd5e34542bb360799fc93cad"],["/categories/工具/page/2/index.html","55acfb9654deebf0f62f706f6ca3f7b9"],["/categories/游戏人生/index.html","bee758caaf3cb82e7aa45b785611e63f"],["/categories/游戏人生/page/2/index.html","7f95dd3c4052725d6b24e33af3290951"],["/categories/读书笔记/index.html","e6b5a006e9b7aab720425528817e7eea"],["/categories/读书笔记/page/2/index.html","4e8b362b1dbe36aa4a8af8554580a890"],["/categories/闲言碎语/index.html","c5383e493cf96524ad93bb91fb11335a"],["/census/index.html","376f2bd85a8066cb9e470b5f82de50ec"],["/charts/index.html","da76eb203a7931f8c0bbfb75c41189bc"],["/comments/index.html","886b13e7a4014228e5137081129b556f"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","67dcbdcf7f5bb5db41e89627fe3c3264"],["/gallery/index.html","a521ce86bf5e92c168fad11de3c3b0c0"],["/gallery/wallpaper/index.html","75d1d659743f2cb354221ad5ff955f68"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4a86de5af7f32d41a478e9bcc31efeb1"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","adfc195b3325d28b0dce6f792aecc5eb"],["/page/2/index.html","995f4c65088b75cde45f52daa68bf820"],["/page/3/index.html","da01d9ccf55d415f62edeb27d18f34a1"],["/page/4/index.html","dcd05c19b48ba9a0d2b1ed3ace5a9311"],["/page/5/index.html","7a5d5341e5997b31c8ce4458fc93757f"],["/page/6/index.html","d8018709862534c0f92fc7bbcbcb3aa5"],["/page/7/index.html","77a5ada64d53b339bd14e5d3c225000b"],["/page/8/index.html","ee1ce96b6d8326f00d982ede34d85af4"],["/page/9/index.html","fde1a7adb9d5e150bff2ef8a7d97d0d7"],["/posts/106331b4.html","d208e3c4c0a84f28de6fc524995dcfc7"],["/posts/1185a02e.html","9a794f5b41772742c19c486be10ae59e"],["/posts/12e06b11.html","009fc83bc92df8ce5fe0f4419652a56e"],["/posts/13aafbc3.html","e01f86402894e0f076f2df868fc5603f"],["/posts/167c7c45.html","785c9220eb452a72078e8b37ece13434"],["/posts/1743dad6.html","83ca749394b5c1fedd67eed50d022d9c"],["/posts/175a8e1.html","dabec7f530d6a3452afe2de90fe5d981"],["/posts/1be398e4.html","aa2a05a22aa301be01752a9ed8ce2a93"],["/posts/1c5a0321.html","c32e766a637ce3769b67277d625c9a9a"],["/posts/1ec7973e.html","8e978ae0cb96a5353d09ae2d74709f3b"],["/posts/1fb82448.html","d923c853c01aef969940aad11362c45b"],["/posts/21f18fd2.html","c06108e8e140a2a59204975b862c0418"],["/posts/29c507fa.html","edf2de90d3130306424255ffd0a1d830"],["/posts/2f34eb00.html","1210c938c5373f4833c698242de9900c"],["/posts/2f57a694.html","8549eb2974e8aa983ad5875a3120ba6e"],["/posts/320cf12b.html","b2456befccf7ae742093f0677cf203a7"],["/posts/353e70c9.html","ebf0bf8a43f3c8c25575f8199d47a567"],["/posts/374b54d5.html","5795e5e5cee6345a1224d75b528f3320"],["/posts/3871b764.html","e83f28098a665c90e89f3b5dfe2bbaca"],["/posts/3b308caa.html","f83ca032511940095cd28a40156cac28"],["/posts/3c3cdb74.html","757c9185f882c2d3b0faf954837020ec"],["/posts/41f65cde.html","968c9a091794bb7b799f08d0217eaf27"],["/posts/4208fd6c.html","cefff314920919aebcb49fa6dc9fbc90"],["/posts/4392373e.html","4e33a9d5d351b8bb3c623cddd3584eb2"],["/posts/440ed920.html","b63f7cf977582848816e6fd43e1d3a22"],["/posts/447a8d68.html","3b643653bd4c585b292ec56ff19ff2b0"],["/posts/4d2b51ac.html","4298f9ce71f33b9f4b88306777826428"],["/posts/4db1a52a.html","fe9d6c855727840cdb727aedb32c6475"],["/posts/503ae89.html","69629406b24e4a3fe86798d04903da8b"],["/posts/518e2799.html","98f7eefd9f14f939444ed9e2ed27c6f1"],["/posts/535fd087.html","c503abcccabf2b159bf6057f72b25da8"],["/posts/5923cba3.html","56ada5894e0f0cebc9862edf0a4a04f9"],["/posts/5c1bb6b8.html","a6838b455c30b398118b07b1120be5bf"],["/posts/5dc45f0c.html","be4e000bc25f3c678347d2230ba03f2c"],["/posts/5f2caa2c.html","eaf8e8532885b0f295716495a750bbb5"],["/posts/616be7b6.html","f4ce6ba7e921bb15d906f590bc82537a"],["/posts/62a1ec0c.html","a4f38bc0cfef056dfd0b6d965c1da3b0"],["/posts/69fb361e.html","d554a3855d055462108089f9779fa18f"],["/posts/6a8518ce.html","8cfbd89c7841e8a7f2d2258233bb9171"],["/posts/70685119.html","8a167f8a772ac4f5425255b824ca1dd0"],["/posts/743db4aa.html","d2e961dc2189b2f4f00b60456f521456"],["/posts/7b67faab.html","51bce78d838f0ca37a83b5fb87f5deea"],["/posts/7b76be01.html","396ba0a50ee5e2f52b7f6b36e8d7a903"],["/posts/7bff939e.html","5b2509ede6c33204aa3651ef01ac5931"],["/posts/7cc4ca07.html","497024f499045c1d304e22ce694d9a87"],["/posts/7d257210.html","d2de19940bddb889a74c53f3f469097a"],["/posts/7e6a5c94.html","0c283f07671a72222f72ba6186a43b4a"],["/posts/7ea0cbe4.html","8cef533875f078117b33594abc0e3f99"],["/posts/7f382da2.html","ad6391f3881cb5a28e156755740529cd"],["/posts/7f8d32f4.html","dc3a7be3af9c499477badcc8309ad94c"],["/posts/7f92999e.html","6613ce7e2c6a9c280603b6b9155b1119"],["/posts/8207aa48.html","3f5786544e558d7d9f3f73607318bd12"],["/posts/836ea9bd.html","719de3b158cd5b8e495f73c14ed83a1b"],["/posts/84cae757.html","a858b3b7da81809ce74462ef18c3c950"],["/posts/88200036.html","b832f377cec20f43ab74e762f82fc6a6"],["/posts/922fb64d.html","e2a8d3945da9986ad733999c5b5dadf6"],["/posts/98332b29.html","86dc1c5681aee014bd6e542cec9de86d"],["/posts/9a1a736f.html","9c6984490a58dbaf2c5b133d8f870992"],["/posts/9addd0bb.html","5ecfe45326eeaa2ca173d67851f3b436"],["/posts/9b44950b.html","e462312072f9c11f6d396dd126ddaa74"],["/posts/9ca149ab.html","86fc5596744a6f18b76ab5c70f17dba7"],["/posts/9e4446bf.html","c26f28c6122b77b4a40d9b450c26375d"],["/posts/a0271e58.html","99efe76b79b60969527a3cc2481e9e89"],["/posts/a13c1dba.html","f2dc256552983648acd5acb3794d8673"],["/posts/a1f2a4d4.html","69177756be13409e29ffd494278bc549"],["/posts/a5f300de.html","c16173e915aa2f3f609b21135a223987"],["/posts/a98766fe.html","1741a441d5bca27c3667b2be15405bf1"],["/posts/a9f63847.html","041d2147a65ba838e37ca33ccb90d53d"],["/posts/ad31055e.html","19e66b881550aac60e2ee818375cf009"],["/posts/adcd6e20.html","fe48b8b65da202daf6716124d071d326"],["/posts/b0fa4c58.html","0f48e6ffa37ea561768cc27f17f45af6"],["/posts/b1168675.html","e6e0cd80504d73232057f4e0e9a9541f"],["/posts/b291b1dc.html","efc86e270c953280297a1448f443c0fc"],["/posts/b2feeab7.html","81d0ad9bc6e50d9177756c2746418fa1"],["/posts/b6d66f1b.html","332838239dd4d0bfbd3c6f740b8976ca"],["/posts/b7525d11.html","1e7119b1aeb04f004aec3af45764c9f7"],["/posts/bb154b63.html","f12252ddedda0881b9968d74d314f837"],["/posts/cc1b9611.html","c8d1c02a87eaa26626f715cebbfd9780"],["/posts/cc86a40d.html","2f8b6bc5779fc57330b47c48765198a0"],["/posts/d36531a7.html","de0a4fc6b926992edb2368c00441c410"],["/posts/d442e51a.html","42f2af00c8a8863c4644c9ce76e63399"],["/posts/d7fdf01f.html","43225f47aa95936186fc67e6d15340f8"],["/posts/d839b0e.html","59fdb0c02f62597771ebbb09cc4635ea"],["/posts/dcdf88c8.html","4f3a0dd489f2335e08406035717122a1"],["/posts/dd378ae0.html","0794eaa8113f24c8a9aaf291add1940a"],["/posts/df2849ec.html","41aa9d34c07ff63024a6ccb2e3e4e327"],["/posts/e15be301.html","ce0172deda1c428a39eab9d484349f18"],["/posts/e2e4b4ce.html","1605a7da73c4a9402120fdcb339d0d01"],["/posts/e35ef5bd.html","58e768966c3a7c164c2f348ed6992d16"],["/posts/e462ba83.html","5c40d60fe38b60e7b1fb907f9fb5d1df"],["/posts/e53204e6.html","3840ad663c252418a0e94b9758547d11"],["/posts/e5cd9bbd.html","b0ccba2e521de55935719b55e6e5b8fe"],["/posts/e7a99a5e.html","03b1584e76368f8cca2937ea9abe02d3"],["/posts/e9318100.html","5a0a1e9a53473c9aa7c03efa47b08791"],["/posts/ed52e6a0.html","bf56ab3c233cee4e886c991fafaab4e6"],["/posts/ee0ac59a.html","dbec303e99e589835ef77f792ca73f9e"],["/posts/f09c1ee5.html","fe9778c8eb8c247f40cd957df8b2f274"],["/posts/f1252f66.html","5931d513beae00f8c1d2a1d84b40916a"],["/posts/f4af26a9.html","e9d30e0a4d8fc1a180b0327c1f5fade0"],["/posts/fa3cd62d.html","1c36da62e7da9d0bb1395b5a6d2ae7fd"],["/posts/fb3794ef.html","59757b2f90b0a4ed1181dc16738e8edf"],["/posts/fda4520e.html","81eb77e5eacc913c2398454dc845d657"],["/posts/ffdfd6d4.html","eb02c3a18ea264e824bd9e5e46326dec"],["/private/index.html","8ad3a924b6ec9a0a4975dd7d9ef1e8aa"],["/random/index.html","a9b458fb4ea16f0878213a594d5ad8fd"],["/sw-register.js","e97d8d5e3c060b5b8d5fbf631a9a58a8"],["/tags/ACG/index.html","5ea7f04a73c65067bd3d8ac786af949c"],["/tags/AIR/index.html","e173c0c06487522097c97f149140d9a5"],["/tags/AliceSoft/index.html","fbfe5028f4b03a1840a7bfec5a6b4805"],["/tags/Butterfly/index.html","0fefaa52fe0ea7e86aa9518390363187"],["/tags/C/index.html","f0a27e2db942395e6325fc8cacae5d25"],["/tags/CLI/index.html","19cb4e671b653c367e8458bd94387786"],["/tags/CMU/index.html","a52cb61a117d121196ee5356646bc173"],["/tags/Crash-Course/index.html","86c33e898d2afc90af9260aec56badbe"],["/tags/ETH-Zurich/index.html","92b42cffd1bd2a137ff17e7c3ea2fa96"],["/tags/Eushully/index.html","56a80911d5388dbd0e1ff41df9cfb3d9"],["/tags/Everlasting-Summer/index.html","c40c2c0d3a244b6e36b5411d645d09d7"],["/tags/GDB/index.html","c55e0c4081c63b3b48a3480357a72770"],["/tags/GRIS/index.html","b78f8309e0070c30355b28d49dcd68d5"],["/tags/GUI/index.html","37c5eafe954ad4ecb04c98796680f425"],["/tags/Git/index.html","4e18fe7dd1b22a5cfa215c75fcf15268"],["/tags/HTML/index.html","39b496deb3271f791016386153769d80"],["/tags/Haskell/index.html","e08c658bec53e6658ad53ab94bd4abd0"],["/tags/Java/index.html","abd0dc83815d0ad8dc4fb273723c5604"],["/tags/JavaScript/index.html","2f529146116e8b0d6508437ff3d771e8"],["/tags/LaTeX/index.html","eec0853a959619e73cad2c82a58e6725"],["/tags/Linux/index.html","42a5a4f41bcf64da164757919352d2d7"],["/tags/MIT/index.html","f1fe66612c505960ad1cf0ff1e0ef8c0"],["/tags/Markdown/index.html","0b6a8d161b196194249de55bda80566b"],["/tags/Mermaid/index.html","77d5c5baf82c773bc12ed2a99665374f"],["/tags/NTR/index.html","0b4257ec515854ddd7132b26ba03aecb"],["/tags/Node-js/index.html","044e22d5e96c18a8e90ff4eca8c592d8"],["/tags/Pixar/index.html","37e0343bafd3be0dda3fb090499cc705"],["/tags/Princeton/index.html","fc116cd29a67b41501195bb4d914f67f"],["/tags/Python/index.html","476d8ea52b6c2445169fd653051a034a"],["/tags/Qt/index.html","5275f4a8387f3557d6e5a3b32e4863f6"],["/tags/R18/index.html","944ee8601c0c2afb5a03b2031bfa3dfd"],["/tags/RISC-V/index.html","45a4e770122f0a77f86b15a6e7780fcb"],["/tags/Scheme/index.html","3844961fb2c36878cf1eb5805ed89562"],["/tags/Shell/index.html","e165c577f73b4adfdee1eea79975f62c"],["/tags/Stanford/index.html","b39729085519c811f237f05590c4ce25"],["/tags/UC-Berkeley/index.html","85ce070ac53d0539b1fc03b33d5b7942"],["/tags/University-of-Helsinki/index.html","58fc704718c4ecdd165ac667be88fe6d"],["/tags/debug/index.html","050170cad350cad9eb023557d0773d11"],["/tags/index.html","8abdf4662ab045ce48c1c68656664590"],["/tags/key/index.html","3c0e72dd129fece41872369ce140a1b3"],["/tags/web/index.html","6da62a80a34cb28eab7cdf5266daf798"],["/tags/三国演义/index.html","5307dfda18ea8c0639c5709ab622dbdb"],["/tags/丧尸/index.html","91da3ff7634279156577aa597c1aec45"],["/tags/京都动画/index.html","ecc6aeff03a579058bfec4bba94491b1"],["/tags/京阿尼/index.html","a1b8f45ca123cefee324b42022e5e406"],["/tags/体系结构/index.html","d6a63932df311bc6e344adbf8d06e570"],["/tags/信号与系统/index.html","545bb14ee7ccf84728cc217bfd1832fc"],["/tags/信息论/index.html","3334509100d3b2bf1a090df9931990bf"],["/tags/傲慢与偏见/index.html","efcf4b96a571820976fdb9cdf2efafdf"],["/tags/元稹/index.html","224b422ea2c7d9a58ce3f9b7a54889de"],["/tags/克苏鲁/index.html","3575aa58cc1ef6134bf30d8c58643d6c"],["/tags/公路片/index.html","be3d8f793a8adb097d10098f703583f2"],["/tags/兰斯/index.html","56c8deff2df16668d78905ac6dad78bd"],["/tags/关于我转生变成史莱姆这档事/index.html","10c7bace79c143b47fd9e57062d1d31e"],["/tags/冒险/index.html","4adc75c90eab8ed1c4891931bdcd19f4"],["/tags/函数式编程/index.html","3931da59d97fe88fe1d291c2fca43f30"],["/tags/刺客信条/index.html","a438786da2befc15d89a6a2f6a865191"],["/tags/卖肉/index.html","00b007c826f7e94afee63737ad71d214"],["/tags/博客/index.html","4e53f78b36e47caea229593a3633efc3"],["/tags/去月球/index.html","a8000262ec948559a7348735223bb110"],["/tags/可汗学院/index.html","1472ed057fcbb831dbcb4c14b2b2fb80"],["/tags/史诗/index.html","81b6e980fc77a25cda161965de88f1f3"],["/tags/吉卜力工作室/index.html","2801e48855df3a553e889a1fcfce0461"],["/tags/名侦探柯南/index.html","fa6f9994cbc07ecaa14cf9adf160cc67"],["/tags/后宫/index.html","a9f0a629f2dab13b9dce41f1f27cb1af"],["/tags/咒术回战/index.html","4b04f8e0fb23c20a9e6b66dc55f162f0"],["/tags/哆啦A梦/index.html","13c567598ed4881950aefd9b3d24159f"],["/tags/哈利波特/index.html","4ba31d32ac6e9ddbda8a210aae06e7a9"],["/tags/喜剧/index.html","259a5de61b737ade0cbce5f40cca13b8"],["/tags/喜羊羊与灰太狼/index.html","c45f7d2db0c3e08a3a53bf07e8eae938"],["/tags/四大名著/index.html","35f69f05388a69c868590aa9a44c91ee"],["/tags/图表/index.html","048307d75f73705d6239e4dff69a2f7e"],["/tags/复变函数/index.html","6c938760f6614785a011dbb3e64bcaed"],["/tags/孔乙己/index.html","fa8511a1fa4f1691042c71498ecbafef"],["/tags/字符串/index.html","6dbfbfc5052f41262fb66f2189bc13f7"],["/tags/学园默示录/index.html","c0a3fe18018bdc388c60bcd4f9e897f9"],["/tags/寻找天堂/index.html","3b845ca69622fac068d69332a49c16e1"],["/tags/希伯来大学/index.html","8d85234ab1bbdc5a5d59d2715b7fca3d"],["/tags/异世界/index.html","7ea749a3a63a85e7821af5bbcea90182"],["/tags/微分方程/index.html","52027c32dfcdd765ad8b8e3914c1d025"],["/tags/微积分/index.html","9d673acbe583d5f5ac53a5fc321ce05a"],["/tags/恋爱/index.html","f798270242225002ffb596c2bf0d5178"],["/tags/情感/index.html","6fcc6c73f25402102d6ba544cf3129e4"],["/tags/成为简奥斯汀/index.html","ac9f35ef28899caa636b6ebe76c91701"],["/tags/指环王/index.html","861457b575685fa1f37b943a11134db8"],["/tags/搞笑/index.html","1a9fe44f69a4ec2f9e246715255d56e6"],["/tags/教育/index.html","8168fe11c2ce7cfaa9fd1adef0d4ee0d"],["/tags/数据科学/index.html","45e6e960b0176a42beb62f1a7f3ce203"],["/tags/数据结构/index.html","4082ac0f1a9603ba68148aa021a84e9b"],["/tags/数据结构与算法/index.html","0c8c4d50fd675e7f557a8fa5f29015b0"],["/tags/文字排版/index.html","3edf7f93f487e70d4d99cf29107a3ae4"],["/tags/文明VI/index.html","931737d088b5c47c40501a4115c99734"],["/tags/旅行/index.html","39f0ae95b92a986e64de2572c2c3b8bf"],["/tags/无彩限的怪灵世界/index.html","411243dadb1ca55fab38232968d184c5"],["/tags/时间刺客/index.html","3f354c1fb08f49e0c15eebbbe47d4f26"],["/tags/暗黑地牢/index.html","82239b69b21dd46debe8a5105b11e213"],["/tags/有生之年/index.html","f6a6e82e0aee5655483324a5aee49d83"],["/tags/李商隐/index.html","90b2c95f34f07bdd2d764c53ca1541fc"],["/tags/李白/index.html","c589cae203c684135adcac30b4c306c2"],["/tags/李贺/index.html","8fd83a8644858850e9b64762d701aa50"],["/tags/杜甫/index.html","788b41732de594d64f6763b23dcef47b"],["/tags/校园/index.html","ec0f862f32cb4caf6629e9b686e53c63"],["/tags/概率论/index.html","7f5ea5adaf450ac9fa404a19df5c144b"],["/tags/正则表达式/index.html","29af071b44fc228e183ddc7282e605ce"],["/tags/死亡/index.html","711f911caab9dd3335e2a5bbcfb0ca4c"],["/tags/水仙/index.html","d578c35a773ecd0095c144a32eefd70f"],["/tags/治愈/index.html","537f37694aa52a4f14e1d572557b01d5"],["/tags/烂尾/index.html","044b63e5146a96a4d379aba98fb4ae3d"],["/tags/热血/index.html","3cf98242d089c84dfb91a3540611d705"],["/tags/爱国/index.html","4c72043baefcc8d6f53d1673c751eead"],["/tags/版本管理/index.html","f002c572f55705c9d8e08ff87a1020e1"],["/tags/玉子市场/index.html","f0dbafde3abab4cf9ba7c8925cba1f5f"],["/tags/玉子爱情故事/index.html","175f27bb2f6b35ba5644178460c45969"],["/tags/王维/index.html","fc2bc5965f205570591ada717f97a5d0"],["/tags/现实/index.html","b44d794780bc909c0083eb1cf99960bc"],["/tags/甘城光辉游乐园/index.html","c24d004593d1c50c000317da91613bd5"],["/tags/白居易/index.html","755a1cae8b06865498760580a3229fa4"],["/tags/白毛/index.html","b7bab926cbb1f3e26bd90ec47680ea80"],["/tags/短篇小说/index.html","c57215c72c65d2d93dc0134f56576b57"],["/tags/神话/index.html","9486c01efef9e21d8d1aea81732141db"],["/tags/离散数学/index.html","753858b0cc1026e2bed51b2e52765510"],["/tags/种田流/index.html","07cce59dc8c84939d64eb16b36f65499"],["/tags/空洞骑士/index.html","7ce9442061ea3827928396fabc79d6ef"],["/tags/童年/index.html","c3e346f34cc58ad81f724cef04e4d31c"],["/tags/童话/index.html","8e57ee7076f270063c0cecea208389b0"],["/tags/第九艺术/index.html","a3d5ee2af1f6f4269874571bdddc06b5"],["/tags/策略游戏/index.html","de39b884314457bb8b98327140f7a793"],["/tags/简奥斯汀/index.html","a8a68c61c3364ab9ac323cce79c13ef3"],["/tags/紫罗兰永恒花园/index.html","aba8e5115381044fe485486261acf6a1"],["/tags/纯爱/index.html","b57d1283aaca2f40da0d0db7b19b3790"],["/tags/纵使手残仍大爱/index.html","0bdc0fbe723194c3a5fcc00bd2280ce3"],["/tags/线性代数/index.html","d81c51af5835eb70534df6fefe8006e4"],["/tags/编码/index.html","c021cba21714c48d76f5d047de20d094"],["/tags/致郁/index.html","d77e1d4285fec1c0b0415300c593760b"],["/tags/苏联/index.html","e69356bef5450f9b29de9cb18018b6e0"],["/tags/苏轼/index.html","7279496b95487b4c5e4cc8283c3b3662"],["/tags/英雄/index.html","002f763d2c2ae682fcb048cf89653b27"],["/tags/计算机科学/index.html","70cc570c1ea55fc850079a05ca8d034d"],["/tags/计算机系统/index.html","9fd4f6714ef9deb7abd0a0db1c27488e"],["/tags/计算机网络/index.html","acd970a91cc36fd3000aec92d22a41aa"],["/tags/词中之龙/index.html","f1b4bb147f9c0090fffad882ed30fdc5"],["/tags/诗仙/index.html","2cccc851de442f73c6331de065356da5"],["/tags/诗佛/index.html","a04a489fb58609de8afa478f8c9a3d23"],["/tags/诗圣/index.html","f5fd37473a17876f20c9c7d11d7d3451"],["/tags/诗词/index.html","349e8596c4a6fe8ac336a6738c3a2649"],["/tags/诗鬼/index.html","2c41fa4ca16f7c5cd592896298c2c2d4"],["/tags/读书/index.html","08125626cc76611babe5463a074a3c2c"],["/tags/豪放/index.html","245511575ed22e68fa1a6d4316f2dcc9"],["/tags/赫尔辛基大学/index.html","ebc3ee4fe442dcf1124ae1cfd5bc4a2e"],["/tags/跳跃/index.html","03029a04323e8d92dd1606746a443e9d"],["/tags/辛弃疾/index.html","4f229805f10b4896053b6ed6ad304035"],["/tags/运动/index.html","69a49abc44a297f6ce77d29fa457eeeb"],["/tags/钉宫/index.html","5161cddac0b22aa3af84dbabfd24bdfb"],["/tags/银河战士恶魔城/index.html","133e4a5bd83059abce31123435a0e660"],["/tags/陆游/index.html","d6fee38659f1b2ade82f9a23678a48b1"],["/tags/零之使魔/index.html","95662906ed55b43b2e08b7330f43e787"],["/tags/霍比特人/index.html","1865523fa2f2fd259eae2a97a297e414"],["/tags/飞屋环游记/index.html","7c3619ce453f43647377eb1c7ade7205"],["/tags/魔戒/index.html","191d4b06d75d19a44f9220058c27629c"],["/tags/魔法少女小圆/index.html","c28099aa1e86deb95b9742287cf92c9a"],["/tags/鲁迅/index.html","51090ca9c2092431057df0b209f00843"]];
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
