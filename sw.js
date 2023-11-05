/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","988c00cdf38197fa63f2019e87e90c0c"],["/about/index.html","089eca77cc262f9758f663f8d4b714b8"],["/anime/index.html","672955aa52a5a3c90732b01808d2ad19"],["/archives/2022/11/index.html","114c94aafe78396ab73451c41d0468fb"],["/archives/2022/12/index.html","86112985cbbb1b2e98f62e8a60aa7fc1"],["/archives/2022/index.html","a8f9e731ea40f434ecb91d6767e14be1"],["/archives/2022/page/2/index.html","76a58d54ad4a7d26dea65a02251ce6fd"],["/archives/2023/01/index.html","9890550135f134213eb8fea01753ddbc"],["/archives/2023/02/index.html","32753bd391a10f431aea7a10edcb500d"],["/archives/2023/03/index.html","3b6b0e150cd451088c5a0a6b5b12c610"],["/archives/2023/04/index.html","ed696d8d4158832adbd40e6345036713"],["/archives/2023/04/page/2/index.html","ef372860819e1d3b74dc7571adb33925"],["/archives/2023/04/page/3/index.html","5135c0e72d87b11c70ebab3020416348"],["/archives/2023/05/index.html","2f3f345c0546e6d4b65d64e8ccd90bb1"],["/archives/2023/05/page/2/index.html","8514a2c3e61dab9d3d693ad090ac231d"],["/archives/2023/06/index.html","462097bf1724867c6860a408f4f2827d"],["/archives/2023/08/index.html","5d262e5e59378970960795b3eb1ed0e6"],["/archives/2023/09/index.html","8d61065c9da024273bad683b3bcfb841"],["/archives/2023/09/page/2/index.html","516c125158b1a19c07de9a461adcd665"],["/archives/2023/10/index.html","ea25c81eacfc81b682177e2d9178c73a"],["/archives/2023/11/index.html","bd2a85a840677bec8642f8cd8dab6d08"],["/archives/2023/index.html","bcb730a0d47ddc4060fe1d6364224a15"],["/archives/2023/page/2/index.html","a7e143fc69d88934eba385ae09a44cd4"],["/archives/2023/page/3/index.html","1c3f56feafbea555af65ba5f5eb2c3d9"],["/archives/2023/page/4/index.html","39aaa794f426b111855b064e5d389508"],["/archives/2023/page/5/index.html","423ca68e4447bbc004bc98e293661c1f"],["/archives/2023/page/6/index.html","57b50cefd7cf7f594afd343dcc638740"],["/archives/2023/page/7/index.html","4ced99dd64a84273a181c8b6d42ed3bc"],["/archives/2023/page/8/index.html","e197e0e5ca1e6548f23d95542b4b7917"],["/archives/index.html","1fde83e22f2e4686aa0793fa677a2b04"],["/archives/page/10/index.html","95f2f38c806baf47ef0076aa2342ffe9"],["/archives/page/2/index.html","06cf15042487909425937b5ed0b5afe2"],["/archives/page/3/index.html","7a9cb5d49668094196aaaec5761dbab5"],["/archives/page/4/index.html","4a1ad93a3333855b10af760eb9b9c5a5"],["/archives/page/5/index.html","777bcf0b9d8d94170b0592420ad3d188"],["/archives/page/6/index.html","4d9b1b8665f13d62ba45d1e0c1355068"],["/archives/page/7/index.html","c59244c2f5c7c344510f3745f53e040f"],["/archives/page/8/index.html","e2a258e1fa99ec77764e1a5e2b6b0d63"],["/archives/page/9/index.html","59e586216bf80e5a7eb6c13f0b39070b"],["/categories/ACG杂谈/index.html","87324e5315e2fa11c836c7ca2711195d"],["/categories/ACG杂谈/page/2/index.html","34a88d7b5f4a161ba77c4e9733e0f3e8"],["/categories/ACG杂谈/page/3/index.html","bb9aad7cf4df1b8b975a46941a3350c0"],["/categories/index.html","b15964969dc59b0a76c9f015a321a8ed"],["/categories/学习笔记/index.html","d3591274d27c816198b6811b5da82bfb"],["/categories/学习笔记/page/2/index.html","f5fbe5c5705c822f0586373d20ae16aa"],["/categories/学习笔记/page/3/index.html","2b9a1f3dafcfbe35cd267eff7507fb89"],["/categories/工具/index.html","f40e9bd3e03d2c124d52b77e0b3e9202"],["/categories/工具/page/2/index.html","6a2130d6a6b3436fcb3821a755dc804e"],["/categories/游戏人生/index.html","96566704b71bb3687a282736c6e1992c"],["/categories/游戏人生/page/2/index.html","1e5a7ff74659ebfd9814b0731e19c19b"],["/categories/读书笔记/index.html","bb5e526a8e6a5587670c21fa17c79d02"],["/categories/读书笔记/page/2/index.html","4736998b73542d7ddc97ea67a3199d06"],["/categories/闲言碎语/index.html","8585b60057084e446665dec2339e4f23"],["/census/index.html","1e3b3f5123b2b4c8959944fc06daab27"],["/charts/index.html","f98f26f5a0589d3f57667bd89641104b"],["/comments/index.html","7b007783f02a48a584f65b23a8727e0b"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","af30ae09e0018c1938521799cd2b8423"],["/gallery/index.html","a9c99bacae507c4b44eefb45d85f6edb"],["/gallery/wallpaper/index.html","90c67efbc1ce1afcb7505a8dddcae007"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e0df9435161b7e201bcc449d0796fb25"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","36c7a69fc11adc9b8a7a462c7290f116"],["/page/2/index.html","247a77b5206258384d92691607f803ac"],["/page/3/index.html","693b8420075cec5f8767882f574a3bc9"],["/page/4/index.html","c984ad0dacea46038a4501ffcae92cbc"],["/page/5/index.html","2b3cc9d8aa0606028d5b9560e781ac03"],["/page/6/index.html","2e2a6b4a602d408bec374092db3dacd0"],["/page/7/index.html","1f97887914f0c053e99dd47d072f3263"],["/page/8/index.html","99b6ceccc56086a8fc6bebbd456cf93e"],["/posts/106331b4.html","81c16b1c6d07ba96638d4f006e755749"],["/posts/1185a02e.html","9963070441cc62aa8a8e32ec66212ded"],["/posts/12e06b11.html","fdf4f243e7b090e13219adc22fe75339"],["/posts/167c7c45.html","b3d46b3c46679dfe736c2a86746dd77d"],["/posts/1743dad6.html","304b5010b208f0f063b84579bf428daf"],["/posts/175a8e1.html","d46d309b7ca00a2a18867d8dfe4841ae"],["/posts/1be398e4.html","3067dfca468ad8a4f59c63d6640d8a5b"],["/posts/1c5a0321.html","5ec891efb3b3135e8c07b6b0ae16451e"],["/posts/1c5b1e9c.html","cdde2b617c5b17e4d33668eb42e2d9c5"],["/posts/1ec7973e.html","d54acfb408bca71bda69c3dd29d24a08"],["/posts/1fb82448.html","46aeffaeaff77f8603e6aa284dd70e5f"],["/posts/21f18fd2.html","a990a00c0e39fc9181c41ebe29d4a9d7"],["/posts/29c507fa.html","05d84d646bb13d9faa5cbe0415bee396"],["/posts/2f34eb00.html","fab6edbf67db6194793fe28c741eb5da"],["/posts/2f57a694.html","f9ab942e72656086298dde32f2c8a70e"],["/posts/374b54d5.html","4197467014130fcd4a83b921120dae9e"],["/posts/3871b764.html","6eb5536d60b312db4e806281f348d49b"],["/posts/3b308caa.html","3184f28fe04cb7a440a4bc121dd57245"],["/posts/3c3cdb74.html","839a2b08489e660153a3ef9f2986940d"],["/posts/41f65cde.html","080619969da65bf05292069a8e6d2e2f"],["/posts/4208fd6c.html","0952d19893a851b3ce2267f7e022ac2c"],["/posts/4392373e.html","0e35759a5ebf22c92d95093f060975cf"],["/posts/440ed920.html","c4f05d81fe8f9b92a20b64c0d178e445"],["/posts/4d2b51ac.html","e7e9bd07d8ca04178d610b4b5384372a"],["/posts/4db1a52a.html","ae14dd230d7cf7f6239209636a5d0023"],["/posts/503ae89.html","bb100ce69c5d00bb0ec9bfa976589048"],["/posts/518e2799.html","9346832815e14081a232bff58db8eaac"],["/posts/535fd087.html","22ae90d143116fc02c4ca3f3e2c20ce2"],["/posts/5923cba3.html","48bc7e25855bc2b78064ae5a0af71419"],["/posts/5c1bb6b8.html","8fd10370d254f7c2c319c9cfffff65d5"],["/posts/5dc45f0c.html","931c2953bfefeca1a59517407394b9c1"],["/posts/5f2caa2c.html","c4583ef72eeefa245762213f6633695d"],["/posts/616be7b6.html","f97cd86b7499b2b9e8fb8cc3b4668bf7"],["/posts/62a1ec0c.html","1600ad9eeaf1b400ae3f53da9d03cff6"],["/posts/69fb361e.html","ac6d7cc4a0758cbed751314084387006"],["/posts/6a8518ce.html","2f13a80c462102ccd15b5c93a0a6aebc"],["/posts/70685119.html","38f1118ae8bf5c4fbaaf2e92a5e01dff"],["/posts/743db4aa.html","479d1c00cc7d511181d8b0de23ac6c31"],["/posts/7b67faab.html","7d1725bcab9cbad8471b6f03fe4c3640"],["/posts/7b76be01.html","36638c5ad4d7f7b5c14eaf51c8b2e467"],["/posts/7bff939e.html","c43281cb4098f5092a15a638848e0043"],["/posts/7cc4ca07.html","9296979859a475cc2d33023b613ffc75"],["/posts/7d257210.html","d0efab85e7cac7a9a500789594f55886"],["/posts/7e6a5c94.html","96cc044d76cb7508d6643402d68c6876"],["/posts/7ea0cbe4.html","467bac770c0c8aae0a642effb16a1c72"],["/posts/7f382da2.html","1ab0902d31b5e6fbd61ec6a5120578c3"],["/posts/8207aa48.html","134aa607f72a38c4bdaeb0b71c587a47"],["/posts/836ea9bd.html","a0acb41938870c1b79d83033d1b3fe99"],["/posts/84cae757.html","8fd6c49b9f448048c3ef0ccfc01b9e11"],["/posts/88200036.html","de3fc904ec17f9c6ea6a6fe3e60169cc"],["/posts/922fb64d.html","7bcae36f410f590e32258b7bfcfed072"],["/posts/98332b29.html","715fd0c288aae6f17744c6f20d3392e8"],["/posts/9a1a736f.html","aadacb59d6023b4c25a8d89f6185d8ab"],["/posts/9addd0bb.html","9c72a39278a88912299b81901d86d516"],["/posts/9b44950b.html","451f0f3300aa6547a1ec52e05fb4f8b9"],["/posts/9ca149ab.html","74178d92acda798fd0ad31a728fcecff"],["/posts/9e4446bf.html","35dcc7507ee88684fde8aa2f512225d6"],["/posts/a0271e58.html","cbebf2aa051ca95075384a39fba914a6"],["/posts/a13c1dba.html","ef7c70c7ef0992060057ada19318f097"],["/posts/a1f2a4d4.html","a9f11528be593dc91677c73ac7de984a"],["/posts/a5f300de.html","b1e64c0a7aab2418017e7a8e99f67090"],["/posts/a98766fe.html","151253870854593c8ec21fe92cf4f670"],["/posts/a9f63847.html","448f2bad35aa46854c0234b5d6a5544c"],["/posts/ad31055e.html","6955b3fc9acb54e45a11a549d776290c"],["/posts/adcd6e20.html","bb840a5502981878c22ee89e002504ed"],["/posts/b0fa4c58.html","db1972053bcd4d7fb6821093334f32e3"],["/posts/b1168675.html","88aeb3a92c2a2fedc62a44a13053bd96"],["/posts/b2feeab7.html","d2142c901a78581a3582d7fb6f50aa2b"],["/posts/b6d66f1b.html","02d23225550e138341583f30a0ca9b88"],["/posts/b7525d11.html","2155b8efe1b658f3654509c3d979bf9f"],["/posts/bb154b63.html","53780cd0bd675d6f8d0ccf6b79ed59e4"],["/posts/cc86a40d.html","5cdbfec2c7e0204c0a2a8a0cad0f6c3e"],["/posts/d36531a7.html","18ca1fc157ea3c8e98b616199b02f292"],["/posts/d442e51a.html","b8d0db7a26ed1cf2764b3199b544949a"],["/posts/d7fdf01f.html","773c8bc0937d3a9874f7d64112367e1c"],["/posts/d839b0e.html","931c79b4b5b754fce6a839130202c8c3"],["/posts/dcdf88c8.html","6c2340018b92b86ed020d57792619343"],["/posts/dd378ae0.html","d9e064f6d192c00b17bf637e4b5d21d1"],["/posts/e15be301.html","b03ee367c52a95206c28fa253274178e"],["/posts/e2e4b4ce.html","ccf2868942f6319ce9c71f34b52c4032"],["/posts/e35ef5bd.html","93cf6ad6bf817e90c5c8f9befebc2da6"],["/posts/e462ba83.html","48a1a5ccddf0379d7bf4be325916eddd"],["/posts/e53204e6.html","ef5ce774a10c70327c8644eae29fb3ac"],["/posts/e5cd9bbd.html","7f44fe273de1fb5ea425abde2c519263"],["/posts/e7a99a5e.html","45615cb33440036f86d77ee635b39cca"],["/posts/e9318100.html","78bbc24dae8c0d63cc1c1acfdc28a28d"],["/posts/ed52e6a0.html","886e15b55aec30c9834e743ecba3c7ac"],["/posts/ee0ac59a.html","36cd1f402d0532ac5c0195b798a4b3a8"],["/posts/f09c1ee5.html","a1db2fc86f97173856c17732a3b1355c"],["/posts/f1252f66.html","70f94a0c68fda56a06b9d97bac253094"],["/posts/f4af26a9.html","f2ca6189140fc876c8cf3dbbb4aac241"],["/posts/fa3cd62d.html","ad71c685224766fd9156695fb8b48633"],["/posts/fb3794ef.html","77c920473d685703310faf3a2f5b47ca"],["/posts/ffdfd6d4.html","8fdf5ff372773e6af20d4f583af4df3e"],["/private/index.html","e041d0f3fd9337c6fa2584be49e510fb"],["/random/index.html","db88e0ec26515a9ad66ea7db55947b8e"],["/sw-register.js","52869a267441f6151549b59bc83d3eb1"],["/tags/ACG/index.html","f747be0daac350b7ba3009c2a5296897"],["/tags/AIR/index.html","7d699950fbce7b118e277b1e55c06119"],["/tags/AliceSoft/index.html","0676a695e902b30a0a3cff1b05339da9"],["/tags/Butterfly/index.html","1ccaff6e2fae85b519353c2ff6d47ee2"],["/tags/C/index.html","c0be573024450008ab6178afd6486364"],["/tags/CMU/index.html","14b95cd4cd6adfe319470a498a4d263e"],["/tags/Crash-Course/index.html","c90442275fa03c582a951e4d1349f75e"],["/tags/ETH-Zurich/index.html","93f3384c7d10224e6c9265b9178d9a17"],["/tags/Eushully/index.html","91f1f6a3ab008429276c4e9ebd518bc7"],["/tags/Everlasting-Summer/index.html","b2283ecbedd76b78dd8adc35271f9c7c"],["/tags/GDB/index.html","829ac3c920169e11cbcbb2a58f5d5322"],["/tags/GRIS/index.html","b6311a4d7b958a23bc945c0a5f6c2d3f"],["/tags/GUI/index.html","61b0bbeaab89a7bac77394ad244719e5"],["/tags/Git/index.html","e9d4869943628c9bfb804364062b3eb5"],["/tags/HTML/index.html","c93bb3f40b534af1e456eb3a2978980d"],["/tags/Haskell/index.html","583542d47bb8ca2f4974aa5edd2a8b2a"],["/tags/Java/index.html","9d623fdcf618cb76c1e4302909aa0736"],["/tags/LaTeX/index.html","04bc8328492e79906f282a0df893d04f"],["/tags/MIT/index.html","674fba63893db3d3727ea9ec3e3900d8"],["/tags/Markdown/index.html","303aef70423f5405f78bc6e0a236bc22"],["/tags/Mermaid/index.html","ca6419c36b1eb68f5c9c72b4bf9247ba"],["/tags/NTR/index.html","dde8e5c4989a95abe04e27664dea630f"],["/tags/Pixar/index.html","f448e2f6fb22b3a3f3c92025e434c0ac"],["/tags/Princeton/index.html","4737c08d9014a62ef2ade045250ad12d"],["/tags/Python/index.html","391231651e242749ce012dfa2a94e3ba"],["/tags/Qt/index.html","dbac2003bf5544adb456e80847256a13"],["/tags/R18/index.html","bc3fa640bd946de3fe3a098b116a2897"],["/tags/RISC-V/index.html","c3ff6f14964f3a1c8660ece457a77397"],["/tags/Scheme/index.html","691127cbeb31bf92a985eacdc2343788"],["/tags/Stanford/index.html","cf3fab700177b971091675c7ba015d1c"],["/tags/UC-Berkeley/index.html","470679ea75a8c9c8a099e30966929260"],["/tags/University-of-Helsinki/index.html","9d00955e5d75d049eb337400553c2807"],["/tags/debug/index.html","8668dad4b4ba5515aa928c4aa849e1ce"],["/tags/index.html","b1fcf658045cd81c5a59ab781b436c36"],["/tags/key/index.html","8bbd8dd9fa08457f761e32c51abeb3a1"],["/tags/web/index.html","a4bad117dea88afcb2536d09c50b3f50"],["/tags/三国演义/index.html","dfbd385888bcab52eae03f86eeef54fe"],["/tags/丧尸/index.html","1bdc3004f95a209ecb1f6e6ae83498e0"],["/tags/京都动画/index.html","36d601434abe95f6fea51ab88578949d"],["/tags/京阿尼/index.html","3dd085a87574cb264fbb0cede31e9ef8"],["/tags/体系结构/index.html","64d9ba55a230c3f6d4e68577b540909d"],["/tags/信息论/index.html","0b7508f7c6c4e9e66938d5d6cecc43ca"],["/tags/傲慢与偏见/index.html","ac63c651309f635777039a8c7cdffa7e"],["/tags/元稹/index.html","e471ebfd05c80e91a2440fd2375aa4b0"],["/tags/公路片/index.html","38a30f4894a581eefecd46c4bf0d700a"],["/tags/兰斯/index.html","fc418757e3ed5000d9e48fb68fe31524"],["/tags/关于我转生变成史莱姆这档事/index.html","672526d889492229c8ab2884a8d35451"],["/tags/冒险/index.html","c9e6b7208e73eb17fbf0afdad0649e69"],["/tags/函数式编程/index.html","72e5a894872afd0be3c50e1930a4dc7d"],["/tags/刺客信条/index.html","87d5b29802d7083b29b3cec3c63d087a"],["/tags/卖肉/index.html","3169d7fa73e8f43866e36d08e972c2ea"],["/tags/博客/index.html","489e21a463702f80a928ab7bb790912f"],["/tags/去月球/index.html","7e3dba542119854d90a87de7b4e16c76"],["/tags/可汗学院/index.html","1bf426e94cb77b72cbd4535c683651d6"],["/tags/史诗/index.html","017741d3c5fdea7c24ecb36a7e157c77"],["/tags/吉卜力工作室/index.html","f2001b9ed9e15c02784181089ea92d96"],["/tags/名侦探柯南/index.html","394babe8b701d323bf3b90e992b109eb"],["/tags/后宫/index.html","eb2e227bff92d45be735ffcd60b8d696"],["/tags/咒术回战/index.html","e64968b9c528797062dd51a3f77e6ab8"],["/tags/哆啦A梦/index.html","58c5f9bef9277b2e2faf32c9075b3a80"],["/tags/哈利波特/index.html","bdc28c8bcad02c450dd7f1290fadde74"],["/tags/喜剧/index.html","f19dfd3b375218dd8f3c1c94fc19acf6"],["/tags/喜羊羊与灰太狼/index.html","aa0ee9ed9c33c855017daebea6776c1c"],["/tags/四大名著/index.html","82f976382df12f04b1066adc10ac42a9"],["/tags/图表/index.html","e1560cff93b098424a8bcc38197270a3"],["/tags/复变函数/index.html","83545bd548f09625e9bb806d7a96253b"],["/tags/孔乙己/index.html","95cca8786f06b09cf74995a73d59a33c"],["/tags/字符串/index.html","675da90cc1cc6b6a343fea43a51706eb"],["/tags/学园默示录/index.html","fba47f184b745fa1ac3b520066267641"],["/tags/寻找天堂/index.html","fa895068d9cef8ff2112a65633a8325a"],["/tags/希伯来大学/index.html","a3e563f290b97424504236409ce67846"],["/tags/异世界/index.html","8445e0f3140753acdfc709e0e5910820"],["/tags/微分方程/index.html","99a5963e8f09d7944a825c7a78c659f4"],["/tags/微积分/index.html","ae6681b25f132f5ef40c50ed5312c6ef"],["/tags/恋爱/index.html","249d5e34ab22ca573c7c7b4a9a383dad"],["/tags/情感/index.html","b634de311cc2fbeb41305275fa500e75"],["/tags/成为简奥斯汀/index.html","197e7346f477f7cf10a375f618aaca13"],["/tags/指环王/index.html","954af0e0e637afb72845a52e8fb67693"],["/tags/搞笑/index.html","af7a0fbc9575439276641edd56602177"],["/tags/教育/index.html","5c36f82df407a4449c7a771a6e1aa9b3"],["/tags/数据科学/index.html","0dca6915b5abb1a56f5c1f17504169dd"],["/tags/数据结构/index.html","a1733117100f69445643d621bb2c238f"],["/tags/数据结构与算法/index.html","d0b2cbf4e1c644dc0fcd1c6cd1aad11a"],["/tags/文字排版/index.html","2ab900623443f977eff7815bd6a1bcda"],["/tags/文明VI/index.html","200ba820eb60c651864d86d569f92b62"],["/tags/旅行/index.html","cbb88cd322f2fd89a3563cc9b5e7dd83"],["/tags/无彩限的怪灵世界/index.html","7406a64b05542d95d28e4f88e5645ae8"],["/tags/时间刺客/index.html","088161cc7f0ee663169544c348667c3d"],["/tags/有生之年/index.html","c5273cb2b3317d16af6ebd0bf41da0f9"],["/tags/李商隐/index.html","f1014e35b225d962e1452f2ca0de72fb"],["/tags/李白/index.html","388c43282d95c6298f19653f5d11ed8b"],["/tags/李贺/index.html","6861ae9e9d01b0901b4586bce01213f9"],["/tags/杜甫/index.html","60efe93019de1e14a71cf5545e65dd93"],["/tags/校园/index.html","c69a798059dc3f69fce46a9c357a3022"],["/tags/概率论/index.html","fa7d1a3a4911b659ea3f2ec77d8e2b52"],["/tags/正则表达式/index.html","3d2269453acbf308bf6d65f0f7d5e5ab"],["/tags/死亡/index.html","8b08d4e7c1e24b8f66b29941ae37212c"],["/tags/水仙/index.html","fb96e30d5cb58623ce8a20a41e299cc4"],["/tags/治愈/index.html","70dacbd4fc5ee5d6721014b1be3a6cf2"],["/tags/烂尾/index.html","3fe9122b55741e72ec4d13da42e9461a"],["/tags/热血/index.html","a4333dc2d49ac92d80cfcd84e2b13553"],["/tags/爱国/index.html","bf3fae435a556de6a3940c38a89250e4"],["/tags/版本管理/index.html","73a323cfaaadb452b9d8ff1d95b94513"],["/tags/玉子市场/index.html","366628520fbcd3a3f1e4b116e12f3217"],["/tags/玉子爱情故事/index.html","4292f62eaf3b18bf65b898abafa86d60"],["/tags/王维/index.html","ac1a5fd77d7a80bd48b070ff36dec4c0"],["/tags/现实/index.html","e1f78b79bf9f68eacc3527c04ec83378"],["/tags/甘城光辉游乐园/index.html","47756106fc8ea5bbaebb9aba9a56d0e1"],["/tags/白居易/index.html","491e1df94364e3c03f5c0badb8385191"],["/tags/白毛/index.html","31b66d90a1ae92436f1b24e69bccd1a8"],["/tags/短篇小说/index.html","37e7f35c12f48ceceefa90467d0bbf71"],["/tags/神话/index.html","1c76ac1ff1128817ddefd736de604e38"],["/tags/离散数学/index.html","ace6567442a5ab1c87f35695bccdd933"],["/tags/种田流/index.html","7a2a92332f009c954fef8409e5e4f75d"],["/tags/空洞骑士/index.html","2526ea3f4c0cf84e9ef128fa19446ab2"],["/tags/童年/index.html","8b26e81c09cf04e07b896098e47c1017"],["/tags/童话/index.html","a90e38d5d3e3b2a90f69c514af099d50"],["/tags/第九艺术/index.html","f94f720af1c3dceaab12a1ebf6862cd6"],["/tags/策略游戏/index.html","b7b8652d1dd96b88820e729ebf9a1768"],["/tags/简奥斯汀/index.html","916f47dce1cedafc45a2888f91fe33e6"],["/tags/紫罗兰永恒花园/index.html","5355d8f9561edf37db75a2b9d90c87c4"],["/tags/纯爱/index.html","c06f6cd273caea47551d42cec120f584"],["/tags/纵使手残仍大爱/index.html","f4a704d42a6d9550072df3c6633ac1e5"],["/tags/线性代数/index.html","30facd1adf26458391277e8924c255cb"],["/tags/编码/index.html","029a7b973705ef3fe28e0ea308bbeeb6"],["/tags/致郁/index.html","56970ba31b19bb21525011145bf6db15"],["/tags/苏联/index.html","18f139d842c9e4e64958e55f79d2efe4"],["/tags/苏轼/index.html","2ab75744e18e031cfaf0acb8239e414b"],["/tags/英雄/index.html","3c112f30c2d94b34ff6282d185f0fc09"],["/tags/计算机科学/index.html","4fc0dba8898b156d30be26caf5cb7c32"],["/tags/计算机系统/index.html","8283cffa2130c6153fe45e24464f8306"],["/tags/词中之龙/index.html","ac5f443d94ae202aff6255e9625529c6"],["/tags/诗仙/index.html","232842745bafc6f9f63d30f68e7885ae"],["/tags/诗佛/index.html","c789793af5e35e5f6aeb1719d620160e"],["/tags/诗圣/index.html","b8b75513b2ffefa4ad809708e77e789e"],["/tags/诗词/index.html","8b1c7530230738f7e91779bd1770dd4b"],["/tags/诗鬼/index.html","37ba285a51d4807ab71f72e7e0a2dbfd"],["/tags/读书/index.html","b920ffc04c0fbfe251970ba1d863c6cc"],["/tags/豪放/index.html","d14fa9cb6402941051b525df44b107bb"],["/tags/跳跃/index.html","a3ba29a4e6f52be8dd287de93b9f19e9"],["/tags/辛弃疾/index.html","3a967a07f8e4ac1c9948ea094ce836d8"],["/tags/运动/index.html","9619bccbdde74232b360b63366102760"],["/tags/钉宫/index.html","7bab6736d35b39c9a07eb5ade08c9a83"],["/tags/银河战士恶魔城/index.html","9b923d7636798667af0305c566f347ed"],["/tags/陆游/index.html","df09ec5e8f83165cb16759b0e87b7b0e"],["/tags/零之使魔/index.html","7a0efbc63582556d93cb3de93c981fa8"],["/tags/霍比特人/index.html","427e9a4ad4d8df7068d1e66457fb0ee6"],["/tags/飞屋环游记/index.html","c03e3b83c7e6401b8732adf7e1b29d29"],["/tags/魔戒/index.html","9485ccaf52f41ef7312a7a334922a391"],["/tags/魔法少女小圆/index.html","a347a7da0f7bc9a6ee4954a22e2a21a2"],["/tags/鲁迅/index.html","15583ef32c64b73c8d1993384d3a5c14"]];
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
