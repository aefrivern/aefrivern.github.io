/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7d7a44cd7ec8aad4d6306e855fea6006"],["/about/index.html","b7e2db19f7970c92ef17af77cc4f98cf"],["/anime/index.html","022658954adc87c0d80b08efb7331d28"],["/archives/2022/11/index.html","81870e9d18ce1ae77db67d5030eef32c"],["/archives/2022/12/index.html","c281b3e22efe5dfdc7768d7df0416b76"],["/archives/2022/index.html","211fc0f034a9f6cf862765e8a8285846"],["/archives/2022/page/2/index.html","86ace92f975f6d28a17b699a4ecca7e3"],["/archives/2023/01/index.html","e747c179d4e76bc23586639a65fbd546"],["/archives/2023/02/index.html","24bd05c3d42d34e43036160228add9a7"],["/archives/2023/03/index.html","573e12d7274c88e577893a095ae36cce"],["/archives/2023/04/index.html","a0ecad5bb07889afffa8c6061e0f305c"],["/archives/2023/04/page/2/index.html","6dab99d47829ab341a7d55e0e6c6e494"],["/archives/2023/04/page/3/index.html","4ce2222231cff85a9174293b0ee7d060"],["/archives/2023/05/index.html","c02b048dfaf99964d924e1b9c8b5bae7"],["/archives/2023/05/page/2/index.html","af4d20a482d20bd15fcb8e8407957c7f"],["/archives/2023/06/index.html","19383c57b8d2c591622b86bcd3ab5dc8"],["/archives/2023/08/index.html","ba1c7df49d89c76fa2a38b312e5a4ff7"],["/archives/2023/09/index.html","a1dcf0b6a5a51b3fa420de333f6d5f1d"],["/archives/2023/09/page/2/index.html","8d4d641262ab639864740d91bfd6ff9a"],["/archives/2023/10/index.html","7bef7a49984fd0d2f945f95f84b00370"],["/archives/2023/11/index.html","470ac394457aab773cf6ce9abd11219f"],["/archives/2023/12/index.html","95f138a24d2f5211e129b87ec5457422"],["/archives/2023/index.html","c7f628ce819d2a8cd5872b99747c1df6"],["/archives/2023/page/2/index.html","72b3eb0551c4b2a3104d591d28ae4c0f"],["/archives/2023/page/3/index.html","54f1833a6a3e82a53f4c11beb87575c3"],["/archives/2023/page/4/index.html","63d89595d5a939f416de5921aa17c9de"],["/archives/2023/page/5/index.html","080bdf2aa8d06c3678d6d990af766d42"],["/archives/2023/page/6/index.html","7fcf6d653d296ad32d59d32a3e658e83"],["/archives/2023/page/7/index.html","cfb73fc1b9f0ce8996bb7670bce26a10"],["/archives/2023/page/8/index.html","b64dd72bb48f3c28c21a0eb0d4b4d2db"],["/archives/2023/page/9/index.html","ded1cf5dabe46a4c3068b4bc2da1447c"],["/archives/2024/01/index.html","90354172a8e5c2f196827d662e2e2feb"],["/archives/2024/02/index.html","c9975e868936ac376f6cadb0389c3919"],["/archives/2024/03/index.html","2832fbf277b4d12ebdb71a65635ced48"],["/archives/2024/index.html","20bbbe24201e62921c28677b7994967b"],["/archives/index.html","1ef348c9897da91cf76b3ef271dea9af"],["/archives/page/10/index.html","962f8c87e65ba04a54b3a83f4c3cef6c"],["/archives/page/11/index.html","7bafd1456fedb943cfe9ffda2c961910"],["/archives/page/2/index.html","88082dea0a966376c1c0c46e9027c174"],["/archives/page/3/index.html","0e515d62d69b76022b9bd813b0711e48"],["/archives/page/4/index.html","20f15868350d34d7ade471c02a7e9592"],["/archives/page/5/index.html","10ef3c3cac4d66f191fad01e4043db34"],["/archives/page/6/index.html","6e9d5d63a11c6188d3a3cac78f024154"],["/archives/page/7/index.html","5f96f1aaf72c907b249d5668fa3c235d"],["/archives/page/8/index.html","2799800c0cfd05c53cee93e5a992d73b"],["/archives/page/9/index.html","864abe053ab5afe88a82fb8f21afa846"],["/categories/ACG杂谈/index.html","3ec97c7465d807341c8b4d09ee6d429f"],["/categories/ACG杂谈/page/2/index.html","ba4de782f3d0d7762aa56aa575c8410a"],["/categories/ACG杂谈/page/3/index.html","d66e470f965287a0101284ce8bda1d77"],["/categories/index.html","ee9ff5c31e7c0ad72b29caf4712a0b55"],["/categories/学习笔记/index.html","83b0e0032e7cdbfe0022611a47d0e382"],["/categories/学习笔记/page/2/index.html","d8cb12fa362af29fedc396c96f7b56f2"],["/categories/学习笔记/page/3/index.html","eb739bfa64369d8404242b111f662e81"],["/categories/工具/index.html","86f138c8efeea96395b8d382f112d0ef"],["/categories/工具/page/2/index.html","8232385acd3a4a58a2be69a622e8705d"],["/categories/游戏人生/index.html","a245931703849bc7643a26cf8083a442"],["/categories/游戏人生/page/2/index.html","12379c79a8945430e3bc7e3a78b8a580"],["/categories/读书笔记/index.html","f23b308d43f02c15598517d47a89fb83"],["/categories/读书笔记/page/2/index.html","6bc817049f883af73c2679d298c3a14e"],["/categories/闲言碎语/index.html","4854d712bebfe247c97705306d21b85d"],["/census/index.html","8c6285fdd2aaace73b5e2541a9e53936"],["/charts/index.html","c72aa5d5af48ec18d2c74793e1a98d04"],["/comments/index.html","7a9f0e1d9c5e42e0c0f35363811fd41a"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","fced603f9fc0bd05714470cbd3cd687c"],["/gallery/index.html","431de6a5c9e4fb718f55a532baf609b1"],["/gallery/wallpaper/index.html","b0b5a91e8761b13264e8ac7d93fe20ac"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","57c06e7c316c2030e361944fd1a8dbe8"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","2b908bea63d7a72766f34d85d1a4bd0d"],["/page/2/index.html","352c825fb7aa1db285049529b37e9276"],["/page/3/index.html","d1607ec8592d6060e47773a1afd5570a"],["/page/4/index.html","083fa377a8e7409fcbe3b75cb08a0a9d"],["/page/5/index.html","88692114c4fdc74b650ad77ef2f6974c"],["/page/6/index.html","c405a5ecfce97a6af3ff556b9ddc65f1"],["/page/7/index.html","786a86b8886183fcfaabacd4bb6e070c"],["/page/8/index.html","861105ba56d68ae0b29999656ccc1b51"],["/page/9/index.html","ba1f459d515e6ff0903f0ff6a1576b36"],["/posts/106331b4.html","8e1323981477c9f4ecbca4637cdd539f"],["/posts/1185a02e.html","97123a156688ab4ece92b273bf89e4ed"],["/posts/12e06b11.html","428b23a11eaca7c2706cfbfdd579d5b1"],["/posts/13aafbc3.html","d4ec14435565e1cc85cddf8710dcac0d"],["/posts/167c7c45.html","4884a7cbdd277153d2cfc2018e0d5f29"],["/posts/1743dad6.html","958c2af7906fbad21dd544b51ad40078"],["/posts/175a8e1.html","e0bff55ecdeef739dd5fb4d96fb6003d"],["/posts/1be398e4.html","fa69a285cf969236c4b51e20f3aa2c88"],["/posts/1c5a0321.html","b40e60a13897385f7e266264751455fd"],["/posts/1ec7973e.html","02257ebbce78f1894d8ab6fdacba26fd"],["/posts/1fb82448.html","9f559e1ba8f8875b8f28939d5340042d"],["/posts/21f18fd2.html","bea61a8f09bdeeee080d6d11faaf0388"],["/posts/29c507fa.html","65908036f94176f412b839839d61b7f2"],["/posts/2f34eb00.html","f5c4281bef5106655bdefc50cae48e9d"],["/posts/2f57a694.html","ceb66e38455453c96869126fd86598ed"],["/posts/320cf12b.html","a58bce1e6f861b8a602d93e55415cba1"],["/posts/353e70c9.html","88bc814a425f255cced15f39aeaa6285"],["/posts/374b54d5.html","7d4cd9716fa2581fde8311fdbbd9ffe7"],["/posts/3871b764.html","fea6a10eca26dca6cf598b35c36500f4"],["/posts/3b308caa.html","171588b46d644a0fff4d89aaefb04004"],["/posts/3c3cdb74.html","fc6346f7eff1ea734fbdd66e6a962926"],["/posts/41f65cde.html","a12174fcb261146d7fa725298f77692d"],["/posts/4208fd6c.html","0c00253f30bd0499fb897b3123502825"],["/posts/4392373e.html","1447e509275b55ad68345be2297d2e83"],["/posts/440ed920.html","68a4661136c9f1ceafa302168dba25d6"],["/posts/447a8d68.html","fc29897c74d9bb57b24598601a7b80ee"],["/posts/4d2b51ac.html","8be087d35611f2b7acea58e4863499e0"],["/posts/4db1a52a.html","ca9c224579de7fdd15cf4cab39ed016a"],["/posts/503ae89.html","30887803884017bc98daee0862ccd750"],["/posts/518e2799.html","9b04495018d4462e0639f36d3c246c17"],["/posts/535fd087.html","2b74dd2f4d9bdf9ba6a117131fa0efa7"],["/posts/5923cba3.html","662f29eb38c1355b27d5369b25b444ea"],["/posts/5c1bb6b8.html","efd46f6c4a8d9472c87850ae33405f55"],["/posts/5dc45f0c.html","ef6fdf5647f8913d9e4d6682d8daf622"],["/posts/5f2caa2c.html","1e0b49280ede42507cc2cda9b726f670"],["/posts/616be7b6.html","946ae4de28441e6dd701c0841fb7de39"],["/posts/62a1ec0c.html","bdf5a8d98fbb66bc776e8a2972913374"],["/posts/69fb361e.html","aedd02627d72f6b773a501d60cf4c036"],["/posts/6a8518ce.html","1e376630dbf5f2da0c7906d792fc4fc1"],["/posts/70685119.html","d00873325c03595d7b666dc6a9cfdad8"],["/posts/743db4aa.html","5f8954091ad73add0a448ffac0c7282d"],["/posts/7b67faab.html","7561f6cf5caf735b054576c0086feaca"],["/posts/7b76be01.html","51f89132b756a812d71e52f3a44a2375"],["/posts/7bff939e.html","dab97ba2afee981e284282284f850d6b"],["/posts/7cc4ca07.html","768c8ed3f5f2f5bef698ce527ca7af50"],["/posts/7d257210.html","5527944315daea0da69b356d26ca8a75"],["/posts/7e6a5c94.html","2580806a9c5504fb5d9d1c13d25caca8"],["/posts/7ea0cbe4.html","49f4337b149bfc93ec9727ab01f35dfa"],["/posts/7f382da2.html","0a8b097ddcef4ce70abd60c306b34b94"],["/posts/7f8d32f4.html","9de93e720438b04c501ccbd825c9ebe4"],["/posts/7f92999e.html","e5a75d6188ed70b8ce388cd87b99c503"],["/posts/8207aa48.html","c9c413b93b80769220e177d5abb5ade9"],["/posts/828c2ccd.html","a9cfd57a5f6d3467b9e37e2d940037cc"],["/posts/836ea9bd.html","c3257b029e04f6d764d8894f35198911"],["/posts/84cae757.html","243785b8fd44125dc963a4e67c96d696"],["/posts/88200036.html","c887f8d6ea0d53bb7d8e35a3b8cbeeb7"],["/posts/922fb64d.html","bdd1bcb0e518203a6b0c6adc9f4401a8"],["/posts/98332b29.html","7cacceb08a4197b02fcf8550c7605904"],["/posts/9a1a736f.html","85b8e53a91867936ce5aea420167e3db"],["/posts/9addd0bb.html","c7d2243230d4b5f8a6bb26e23113fd94"],["/posts/9b44950b.html","5dcdef5f6cb87166347b58a5c4fcaa87"],["/posts/9ca149ab.html","344cc55c5e44863499f4db8f1de0f33d"],["/posts/9e4446bf.html","733cb5743b597510f007722ac96fbbdf"],["/posts/a0271e58.html","41f1ab7ce3daba210afd27d827663b42"],["/posts/a13c1dba.html","71e9660ccb967857b569dafc7e9da69f"],["/posts/a1f2a4d4.html","6422676bc846c6649668f2c54d318283"],["/posts/a541262a.html","68ee1ba679604311dd9798862bec51ed"],["/posts/a5f300de.html","4ae79406f952a0bc7671a2bb27e0dbc6"],["/posts/a98766fe.html","3b05e8f92dee84624850899240a1ceb9"],["/posts/a9f63847.html","8e71281945bf1d68d8413c5ac5bc4162"],["/posts/ad31055e.html","a86f475be2ee1b9469c567509b4f405a"],["/posts/adcd6e20.html","dc385428c861db6ce9021ee982dcb4c9"],["/posts/b0fa4c58.html","11e1a9b34a97d51d66112862dd8fb4f7"],["/posts/b1168675.html","bb63247e7df488ab428c66d31e805f79"],["/posts/b291b1dc.html","28ac6ea09ff1905894ddce202aa891c2"],["/posts/b2feeab7.html","efb5c6fcd0c325a4364587c0a3d66f65"],["/posts/b6d66f1b.html","31e69d1683b7d4ecb6ddc91777f84895"],["/posts/b7525d11.html","2cd2becc430c6de32579f0d98bdae4d9"],["/posts/bb154b63.html","7805d148300032265972a63bb6de0fc3"],["/posts/cc1b9611.html","a44586424cda4b82e59da789ef750316"],["/posts/cc86a40d.html","11340b3e298473542c2e29bbc28232d7"],["/posts/d36531a7.html","9a0a81091c0a2cb183ee805de3b1ec82"],["/posts/d442e51a.html","5a2d51ab5c6ccb078d4f80aef9de7377"],["/posts/d7fdf01f.html","21ebfd6748e123e5f9276237c9a7ccec"],["/posts/d839b0e.html","3f40248ecdc23a58b41ae149cd964299"],["/posts/dcdf88c8.html","2ec66b84588a571d7609b0525ac6a084"],["/posts/dd378ae0.html","9651e0ac20c6108e1ff016f065934e08"],["/posts/df2849ec.html","59624d1bf72a4267f4319b88f8bfe19d"],["/posts/e15be301.html","16f3428ac1775fbc78bff7eb89308043"],["/posts/e2e4b4ce.html","4041183df23fd05b716a9825bb3d1069"],["/posts/e35ef5bd.html","8d5108babb42466ca63a0581839ef88f"],["/posts/e462ba83.html","3187015af75a1a1bc8e395a198b4d1a0"],["/posts/e53204e6.html","cb24f3c352c96a3eb7441897f0cf5244"],["/posts/e5cd9bbd.html","af9cbfb6b4063ff25d920d40949c4df0"],["/posts/e5d89884.html","dd5738aba67793949b59ecb8f763795d"],["/posts/e7a99a5e.html","a40aed05ed8afd00ea85ab5dcc7e471c"],["/posts/e9318100.html","567dfa7eaa60506cd523f652ce9b4ce9"],["/posts/ed52e6a0.html","9a439cdd747ba0cbe7c77bae87742f40"],["/posts/ee0ac59a.html","1cfe0b6b6a24b135d3bbfc259fc56100"],["/posts/f09c1ee5.html","2a887cb3c34a420a98736038031f3914"],["/posts/f1252f66.html","7f4914f43c99cb1db3fcaacf18bdef57"],["/posts/f4af26a9.html","419dff534af38d583852022de5af5a56"],["/posts/fa3cd62d.html","fbd5e457adbcc78974bd55d38580d6e0"],["/posts/fb3794ef.html","ad460efbd66637d6d061ba7cc4be9ee9"],["/posts/fda4520e.html","c8e9dcd5bc1c10dad86ae10efdcf1186"],["/posts/ffdfd6d4.html","61e11cf2de5318723be25eefea1893a9"],["/private/index.html","7edbdc1dadabd72b9619a181a216254d"],["/random/index.html","d7741e2a420c80eff236fd592ab72510"],["/sw-register.js","563b7b791bd37fea598c5bde893d9c93"],["/tags/ACG/index.html","55ad3c2c6ef1c038be0174cb378415fd"],["/tags/AIR/index.html","58868216f6995f115d0fc145450ddd52"],["/tags/AliceSoft/index.html","4bfce0b2218ee7e9c9c50f35104d78d2"],["/tags/Butterfly/index.html","add508b866eb45fecfc1beef221c5f55"],["/tags/C/index.html","4363ecbeac24544c23e85a822dbcd635"],["/tags/CLI/index.html","95be8a543cca3aff6ae65d95d3309c01"],["/tags/CMU/index.html","eaaa67d3a7d6cd57761ba7d6e4b6a533"],["/tags/Crash-Course/index.html","bae4e7d6dec5144078e25a1ef78536fd"],["/tags/ETH-Zurich/index.html","ede69407ca3d909afc2a3e5016eb2ddd"],["/tags/Eushully/index.html","8f697ebd7ae10c875d78ad3b6c875ad0"],["/tags/Everlasting-Summer/index.html","84bb4ecb9765e8c685fb6f538447c7c6"],["/tags/GDB/index.html","b1c9429a674d32169c5db2c845adcd2f"],["/tags/GRIS/index.html","934b101fe743b502ba56d6aff2f27e0a"],["/tags/GUI/index.html","63a9e167af724eaff6cbbb9879dfc104"],["/tags/Git/index.html","bb9a0df52fabd42ee1f03ce0de869a9e"],["/tags/HTML/index.html","4933de97ed223dbc04a8908e780a4448"],["/tags/Haskell/index.html","7e4cb488c47c50680862c317d52bc7b8"],["/tags/Java/index.html","464b7c263ca838c29154273f99ac1496"],["/tags/JavaScript/index.html","109af92ea6533d3d7665253ee1e1fc64"],["/tags/LaTeX/index.html","0e01ce225b1a7e48265a6897467c804c"],["/tags/Linux/index.html","264f452f003e322b721b7881eeb2a853"],["/tags/MIT/index.html","cdaf7181709f5993ae7199e593ed73d2"],["/tags/Markdown/index.html","5472d624022a79635d3645c6f50889e3"],["/tags/Mermaid/index.html","3af72fdccb84e9bc047f4e484cc41dc7"],["/tags/NTR/index.html","5c7b4f16bf2aa2901694e0ec134c5761"],["/tags/Node-js/index.html","111b8532efb28a461909802d20a6d041"],["/tags/Pixar/index.html","e63e395d87582db862ed8b7f3b1e2a93"],["/tags/Princeton/index.html","28c44961f69b9171ff2d4f8ba02ff8e7"],["/tags/Python/index.html","1f0d5f21d1d022fa376f4319a0ebe160"],["/tags/Qt/index.html","715da2f3888bb5ecea8755adf45dc2c9"],["/tags/R18/index.html","d0c08aba1a5b4de37b882d93c9a654b7"],["/tags/RISC-V/index.html","a60f8e38c6d304ea8be491e49a12bf11"],["/tags/Scheme/index.html","7ac70d1e56cf181448ca61d0d8b28911"],["/tags/Shell/index.html","850db772902fd057c3ed3d624a7340ef"],["/tags/Spring-Boot/index.html","de5d4d1e6e441cdd20cb847717ffd84b"],["/tags/Stanford/index.html","31c61e6db83dc0799d02a3380685868e"],["/tags/UC-Berkeley/index.html","243bc4b48205546613b02ebf79fc1f3d"],["/tags/University-of-Helsinki/index.html","69d31a49f4349bd33f608939e6f96f9b"],["/tags/debug/index.html","bdc426e6e4d2e8b7c9c720deb3985b57"],["/tags/index.html","b8c81d7c78bacf38a811837ead1567b1"],["/tags/key/index.html","3d7865d847d0a476a7e82c825c668d3a"],["/tags/web/index.html","84f6fb48cbea4d54fc48d0d82616c5dd"],["/tags/三国演义/index.html","0bf09cddc63199eb7acb40ed3fbadccd"],["/tags/丧尸/index.html","4cf6e7ab06215c3ddbcc325578aba4e0"],["/tags/京都动画/index.html","33929553b4447f0edffc9d2781573e55"],["/tags/京阿尼/index.html","d7446640b085891a201a745e371b3f46"],["/tags/体系结构/index.html","e5b73dac71133a285eff403a8a9ddcbb"],["/tags/信号与系统/index.html","d42c95fed90a782f86de0b1baafdec71"],["/tags/信息论/index.html","772e4cfd3faa32632eed7241fb3d7510"],["/tags/傲慢与偏见/index.html","da71a7dbf4b28ef9204397bf5fe907a4"],["/tags/元稹/index.html","3675af44ed2047659b4917020e11a453"],["/tags/克苏鲁/index.html","ee36105363335f1d4ac21594a735d433"],["/tags/公路片/index.html","65a165a9bade9c546dda31266d49a948"],["/tags/兰斯/index.html","60f67421fb34eff079ff352456b43a35"],["/tags/关于我转生变成史莱姆这档事/index.html","09b10a1c8cc798993fdd554f21a15b31"],["/tags/冒险/index.html","bddf78054ef43d3a3fe48b084564edca"],["/tags/冰汽时代/index.html","e11d88564b863bd2ce6aa06b9b4dffcc"],["/tags/函数式编程/index.html","36d4e08ae7ae0e71e8326f7c6cadb574"],["/tags/刺客信条/index.html","8bc00ca5c996dac57da5cf8306004817"],["/tags/卖肉/index.html","42ca48ea7d3121acb15dc02f071f06a8"],["/tags/博客/index.html","6f5f638c7327a97ef8fafbf63dcf5abd"],["/tags/去月球/index.html","c92b571629b2a8b7e10605af11f1b60e"],["/tags/可汗学院/index.html","dd40e67eae4547d410a4bb2bb821d640"],["/tags/史诗/index.html","1db347df15814a4056fa7a128e82d105"],["/tags/吉卜力工作室/index.html","2790c9c80fa895a046058299b913d05b"],["/tags/名侦探柯南/index.html","4327c54c788e411ff1ba04b8569d46be"],["/tags/后宫/index.html","54ace49163a2292b29e808a440b32753"],["/tags/咒术回战/index.html","daa5863da54464cd2a98bde615e4963a"],["/tags/哆啦A梦/index.html","987177de78c42fcb22ab9fcd2961ff21"],["/tags/哈利波特/index.html","c8fcb66866507b908c6b35497a1be520"],["/tags/喜剧/index.html","b89e4d54d4006595c5754cb655c2b9da"],["/tags/喜羊羊与灰太狼/index.html","b60af7c8ffdab19f74c649bb6c610436"],["/tags/四大名著/index.html","61cfa844783acdbecae0b1072b559f6c"],["/tags/图表/index.html","f003b896bcffee68c2ac000f623c3772"],["/tags/复变函数/index.html","2bd3d28da9c46d63ccc5483a8fcdee27"],["/tags/孔乙己/index.html","3b13a57a903d9ce59ac18716772e5894"],["/tags/字符串/index.html","a1b0e70b2c4bcb536d7b137fc95bd732"],["/tags/学园默示录/index.html","b83c5b283233fdcf96ef42f2202448e6"],["/tags/寻找天堂/index.html","428d4b0216b26edefa6138f919af2dda"],["/tags/希伯来大学/index.html","7063a3c66e475a5f6c48419b588af009"],["/tags/异世界/index.html","ab30c38f5bfa215f2b308ae4d21dfc1f"],["/tags/微分方程/index.html","0e31cbf056b3ceb5ac20d0b9fd6d7f17"],["/tags/微积分/index.html","e7e84fffa52fab3d9b525c8391da9edc"],["/tags/恋爱/index.html","300dd9f5a1bc4d6e0e05b666745dd7e4"],["/tags/情感/index.html","a3829c62bb2a327b481747a54aa26466"],["/tags/成为简奥斯汀/index.html","cd77232f7b6c3e6991f6c328048eaf18"],["/tags/指环王/index.html","a53ae4b76bac154a6ab38607d731ec69"],["/tags/搞笑/index.html","651a8b31a9ede093d0bee34cda00f251"],["/tags/教育/index.html","4386c14ef9e11ab7de31442f3274e528"],["/tags/数据库/index.html","acd9b38ce9d02b18f56da4252c4762fb"],["/tags/数据科学/index.html","f19a43ddc4436500149b6c59ec2f62d0"],["/tags/数据结构/index.html","f559b5b47d079d8e592c72029d17f303"],["/tags/数据结构与算法/index.html","e8ec58734cec16d062dfad33bd430348"],["/tags/文字排版/index.html","6288f71e52c08d32216274ba68fc5c03"],["/tags/文明VI/index.html","f5142c8b7cd082576e92e1cad07df442"],["/tags/旅行/index.html","9f5cc53e565cd57dec2bd3fde9d025ff"],["/tags/无彩限的怪灵世界/index.html","d542d2d570fe51571743ffb54f3a3fca"],["/tags/时间刺客/index.html","24e9b6a0251c4348e0063dfc247a4c61"],["/tags/暗黑地牢/index.html","47fca695b86f87877aaf4e508ea67bfc"],["/tags/有生之年/index.html","384a8e4ce59b08189abac1b8d8c81049"],["/tags/末日求生/index.html","a81064b47af7d5e85c2e3713a0608e62"],["/tags/李商隐/index.html","430fc0338a20d9436732c15632fdf618"],["/tags/李白/index.html","c3b4fc3406723067b1d5d391d0b570af"],["/tags/李贺/index.html","895d1e040545008133778462fdef5567"],["/tags/杜甫/index.html","bbf3ef20199a3d8fa12b2c30fa53fa41"],["/tags/校园/index.html","7f85c5c953e8101a856e7b00000d58bf"],["/tags/概率论/index.html","d76ebfb8638576eb606aa7d2dfe958f8"],["/tags/正则表达式/index.html","3ff0a9e306f1e4ca9a2373471cfe5024"],["/tags/死亡/index.html","c542900658c749e0417685b58ffb7fbf"],["/tags/水仙/index.html","258f3f54484693048616585235873660"],["/tags/治愈/index.html","6c58793e2c3c229c1800557ee0fe792f"],["/tags/烂尾/index.html","eb53fcd105cdef49a115384580182335"],["/tags/热血/index.html","4d89459d9779ffd95407bc78b48232a0"],["/tags/爱国/index.html","8695090080a37625de1204199d094d06"],["/tags/版本管理/index.html","7b0cc1c739be3a53da7ff0f66a941738"],["/tags/玉子市场/index.html","1eb6b2474cd3d9c2fbdf31e1c9f83c38"],["/tags/玉子爱情故事/index.html","bd82a6972a3d5f64e170d6b4e2506554"],["/tags/王维/index.html","c0cea535596ce12e250aaed83b6aee9b"],["/tags/现实/index.html","4724509d01501df9fe53baf3d0629331"],["/tags/甘城光辉游乐园/index.html","e23242531c219a115e2c19dd0204a58f"],["/tags/白居易/index.html","dba3d35f032b722e8d8184dc9b931f5d"],["/tags/白毛/index.html","7ed17aaa59581feee6c60b5ce3bd4960"],["/tags/短篇小说/index.html","9d7aa40910ddf3e0f79e8c37bfe19a40"],["/tags/神话/index.html","fe411ce4cdac943b087acc9d9193fdb4"],["/tags/离散数学/index.html","03ea95ea35f8b2315b6063ce00ccaf17"],["/tags/种田流/index.html","a84967ed11074c18d9e29714a630c101"],["/tags/空洞骑士/index.html","8e75851565dd244d5b1fe4611daec304"],["/tags/童年/index.html","6bbe4ec0c932579f6fa18a3d2f7d5f92"],["/tags/童话/index.html","3f8646cfbefbcc5a6f0ffcae9f7caeff"],["/tags/第九艺术/index.html","b4f5aec8800b2b47ced38540bb0ff047"],["/tags/策略游戏/index.html","e40605d09d886f5cb81159022f5075f3"],["/tags/简奥斯汀/index.html","bf3d46c964f118a1172c2e88fd713906"],["/tags/紫罗兰永恒花园/index.html","869184d2e2b31e22282fead382a7177e"],["/tags/纯爱/index.html","860e32263dc7f11c90534a3aa81dd79e"],["/tags/纵使手残仍大爱/index.html","406ce91bff68e7dc36eafb4a294cb28a"],["/tags/线性代数/index.html","d94803a793fe13b6f86c0fe08c908d3c"],["/tags/编码/index.html","8422e43c1584c53f8ed05cd6769cc0ec"],["/tags/致郁/index.html","24f47847a9699577d18c1ca1a750f6d4"],["/tags/苏联/index.html","9a831ebd6637cc92f92c48287f26d29f"],["/tags/苏轼/index.html","74400f6743bd344474d09ba0cd8785e4"],["/tags/英雄/index.html","71c82bd62492f37fba6fe502f49bb9b7"],["/tags/计算机科学/index.html","38daf51d5cac6f8a5f2fe33425594d70"],["/tags/计算机系统/index.html","52db9b8acdf488dbecc46abf6fb3bb52"],["/tags/计算机网络/index.html","b39341514f4a98d071152ca43db68f0d"],["/tags/词中之龙/index.html","9eccfd9b03e6acc7ea5f7e6aee39d160"],["/tags/诗仙/index.html","426b0bc83ce58ac314b8f80925fd7646"],["/tags/诗佛/index.html","2c528e45968a3f35e7b29060ecf0b062"],["/tags/诗圣/index.html","c0d6561a5a248427dce6b31ec0a846c3"],["/tags/诗词/index.html","9c2793e03dedc27a07245875d2cbd367"],["/tags/诗鬼/index.html","5f73a49098388336ac8b559ecd2996fd"],["/tags/读书/index.html","9fe04e09f029b1d2f064a20777d38775"],["/tags/豪放/index.html","7a93872b58757666e44cb72c150f7992"],["/tags/赫尔辛基大学/index.html","52a502bdd383172f777dcaa99a9d0980"],["/tags/跳跃/index.html","a5baaa6d92b768c2297916d748d1fc2f"],["/tags/辛弃疾/index.html","2d40c71232c76b5a1179bf9af271cc78"],["/tags/运动/index.html","ad1ec8bd19f0fd8e25f4ac79d38f605c"],["/tags/钉宫/index.html","42efacf8d0f396d1aaddc3c307d42161"],["/tags/银河战士恶魔城/index.html","d40082eaa846080cf5633e5a2d37a0a8"],["/tags/陆游/index.html","9406e76d834c2eaa5b5228eef8d11f03"],["/tags/零之使魔/index.html","88fcffc4bf8495e95d3cb221e6bef954"],["/tags/霍比特人/index.html","1979e2b14b8ac4bc176b19ebe2256494"],["/tags/飞屋环游记/index.html","5e5c7573ca39f95f1daeaf9059ebf64c"],["/tags/魔戒/index.html","87c4698103585156fdb759b95fe9ab44"],["/tags/魔法少女小圆/index.html","069364707527683883e048a67eab8b67"],["/tags/鲁迅/index.html","d27f9518a4d30f1a3387c764f0d890a4"]];
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
