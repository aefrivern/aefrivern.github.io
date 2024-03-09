/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","01af13c72958d38914001c1fa67d8d27"],["/about/index.html","b5ee0043a2b271123550e7a23236900a"],["/anime/index.html","5ad8200bb24a3958c66656ccf2b61170"],["/archives/2022/11/index.html","d74fc6eb457b423f15ba25f3bb092031"],["/archives/2022/12/index.html","a0fccef7d00df11b6bcd549e8fd8a5f5"],["/archives/2022/index.html","a34c615549a053685334d830412c40f4"],["/archives/2022/page/2/index.html","2dee87058c5db000bb636fe8df94b70a"],["/archives/2023/01/index.html","04006d82fa907349602be3e35b0aed54"],["/archives/2023/02/index.html","6728f33fc14a2606b83eff6b041ae2db"],["/archives/2023/03/index.html","60e08eb34f165a85f84a52609605637a"],["/archives/2023/04/index.html","359bb9c8a46df0b628d74856e262c44e"],["/archives/2023/04/page/2/index.html","c6da1424a9f7e3511c4a405cb45cda87"],["/archives/2023/04/page/3/index.html","3912858dcdfb26ce9790b1dd7eb85fe8"],["/archives/2023/05/index.html","b2a3f10694bb125c8e0a6dbca7a4bb7f"],["/archives/2023/05/page/2/index.html","fcf8f1d27032c73fc98372519aabe0ac"],["/archives/2023/06/index.html","8ba18e6c38ff6462c4acfce97af1aba7"],["/archives/2023/08/index.html","20029e053069b8151947d86117755cb6"],["/archives/2023/09/index.html","f08c843cc7a40e284989ce629b124236"],["/archives/2023/09/page/2/index.html","b44e107d8c79505f37d8e0e1b96da601"],["/archives/2023/10/index.html","e059a32d01f87210e8fb708044f2e2ea"],["/archives/2023/11/index.html","9b6bfef45996821c638bc55abd722c8d"],["/archives/2023/12/index.html","8e98806a96e89e6661bdf3c3833a8bd9"],["/archives/2023/index.html","f4ccfbf6b9bbc010cded753b9c51316a"],["/archives/2023/page/2/index.html","15291f3759f1c5c0926687cf23b235a5"],["/archives/2023/page/3/index.html","39741248638635d32b9c27cf704ae531"],["/archives/2023/page/4/index.html","3e160183b2ff446ff77e49c9875c9bd1"],["/archives/2023/page/5/index.html","5e64e485a89ba88f538a41cc20e68f80"],["/archives/2023/page/6/index.html","d06c2b350db1308ce524bd15d552660a"],["/archives/2023/page/7/index.html","d2aef7053143142f063077b4563211ac"],["/archives/2023/page/8/index.html","f4559bee0de5db07b0f54a34eb983d0a"],["/archives/2023/page/9/index.html","909b617b4b08b103534504efaabd8aac"],["/archives/2024/02/index.html","dac3062783e86ae0088f662eda3cf03d"],["/archives/2024/03/index.html","ad6dff2ee481a3cd81b79fa974a93280"],["/archives/2024/index.html","8e4aad16205f56450dbdc912b8dd85c7"],["/archives/index.html","a580cd7023c1b8b5844508f127903104"],["/archives/page/10/index.html","f287fe6911f94632bc09d556bad0424e"],["/archives/page/11/index.html","00b2cac85d2015e9119ca61aff5eba71"],["/archives/page/2/index.html","3cba9e697221434e9a04225c205618bd"],["/archives/page/3/index.html","251f162b92ce329946aaec43dad02f92"],["/archives/page/4/index.html","f4af6116b4d397aa19352631ed3cb66b"],["/archives/page/5/index.html","c89f939f382c1f4efe907c27dfaf7b30"],["/archives/page/6/index.html","870cecedea04062352b0e3e5ffe93e52"],["/archives/page/7/index.html","be01688b9acce2d62df2f377ca5f5a52"],["/archives/page/8/index.html","586dba4c974f2afaace7fed8b55bed80"],["/archives/page/9/index.html","72711e3b06c5ec35f2889b01cf9c4504"],["/categories/ACG杂谈/index.html","ec75278b9db34c7ee169d70be5a53231"],["/categories/ACG杂谈/page/2/index.html","760163f97a0dfa26c3e353819afffa47"],["/categories/ACG杂谈/page/3/index.html","62a0342c06780ab54a6747de6eeb3231"],["/categories/index.html","1a051cba4e34f7fb5d9ad4764621de59"],["/categories/学习笔记/index.html","251afb5abeb7fc8189b1db0ac6480856"],["/categories/学习笔记/page/2/index.html","01f834875edb293a8d387bfcf66eae1c"],["/categories/学习笔记/page/3/index.html","d04ae1b81a44da6a0e037d55d62b6b56"],["/categories/工具/index.html","d1c5caa9cc043021324af0b4f8e63b57"],["/categories/工具/page/2/index.html","1148789f8f40596e71b2f2294beeb9c5"],["/categories/游戏人生/index.html","b9a2a83ee2f039c4ae8e9954e6dbb5ac"],["/categories/游戏人生/page/2/index.html","496821a6cf7815ef8610ba639061df90"],["/categories/读书笔记/index.html","b4a72db1819dd906447b72d66d9694d9"],["/categories/读书笔记/page/2/index.html","32e3ed831ab8a28487aa3f18f2f0bf81"],["/categories/闲言碎语/index.html","7138dcbdcbe18d99adefb17a477cacf1"],["/census/index.html","446fb0264c3ae3ca835e937bf3cf760c"],["/charts/index.html","d2a0959ff2a29a8d53b2d85ceacec4e4"],["/comments/index.html","f22ee63bf6c92fb3b89aaffa871286be"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","75d6eae7ec1b57bd8481fb487c0ae63e"],["/gallery/index.html","b4e626c8d5631abf281165bb3fc6e280"],["/gallery/wallpaper/index.html","6edd3d1a85a3ddb886e2d2c324328c14"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","43f2e7fe1d7b6e888e06fb1552361918"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","7f694127ea770c3ff6f59df2d2f9d572"],["/page/2/index.html","e58ce974661a6edd1c0353aacd62d4f6"],["/page/3/index.html","d73d7c3a2776cd01980bef91c70af428"],["/page/4/index.html","97c2812fa5748674aad316dda5e6e2a6"],["/page/5/index.html","7224bb9ca2c32e99a5e34605f6da5162"],["/page/6/index.html","b199cf62ad47ff9c077b4b0d82929ac6"],["/page/7/index.html","b9c89f5b7eb3dcd807b192ec686f2852"],["/page/8/index.html","4d6493317553ba88096817fec8f772c6"],["/page/9/index.html","dfc93f5f9e6e2fcc293e2e4e012c237b"],["/posts/106331b4.html","3705c197b3cbee013319cb40cb2d4e65"],["/posts/1185a02e.html","a4ca2cd588201ec0ef9db5fbae40dbb7"],["/posts/12e06b11.html","5ecc6b7a6faf67cd8c0eaa286be0d0e0"],["/posts/13aafbc3.html","cb853660525bcbcfb6b9ed28f6410f91"],["/posts/167c7c45.html","484e3b37c3d57ff1b5e7563975a734a9"],["/posts/1743dad6.html","aa780cb30f6102e7bff3a3f2cbdb7f19"],["/posts/175a8e1.html","913c3b2c24ed310186d85e4fc94ca087"],["/posts/1be398e4.html","b10826b14822ce39f0435275262fd98b"],["/posts/1c5a0321.html","558d24fbc36fba0880c7a58e94c6dcf9"],["/posts/1ec7973e.html","3b9ff15a23bb64476cdb716f250d53a7"],["/posts/1fb82448.html","2c504b9002943d854c972450b67cadde"],["/posts/21f18fd2.html","eb5e0b8b9dbd04d292e496d3ec4dc9f6"],["/posts/29c507fa.html","def8e7a160ce443de1c8c2d3f110f46b"],["/posts/2f34eb00.html","78509c536fb1db28590ddc60363c0dbc"],["/posts/2f57a694.html","fe7a67d4e237045400c3bfdcdf216be4"],["/posts/320cf12b.html","c69cd640a405e51b344ac8d0b3c66372"],["/posts/353e70c9.html","85f9fcffdb796d613426b1671b283f28"],["/posts/374b54d5.html","b8ace70b87f62d576b98eb17c7ff26e1"],["/posts/3871b764.html","b7842a508af6015c523e8f62bb331f11"],["/posts/3b308caa.html","6566152f3bd9de02d64dd9cd6e4f147e"],["/posts/3c3cdb74.html","2d1e2a36a3d5ba4920b42dbdb35acd9a"],["/posts/41f65cde.html","0d4df81fc8801d2708448b96b7f0955f"],["/posts/4208fd6c.html","92502ce0c99cb89bc2f47707d4ad6e46"],["/posts/4392373e.html","8a551d0e62bfe65f360c3fe39c6ceba4"],["/posts/440ed920.html","49d2b846150f1f3c7cac130717133896"],["/posts/447a8d68.html","63c64cc4f456728ecabe8cf7fa642907"],["/posts/4d2b51ac.html","9627034dabc487ce7b08058d7f52707f"],["/posts/4db1a52a.html","9ac32f0083972a683914830ede762892"],["/posts/503ae89.html","f84b1273d1d14bf63369421eb0e990a1"],["/posts/518e2799.html","eae16e68359096df78aa5359e3af5cd4"],["/posts/535fd087.html","61bb89dd299496c7689fb5f6961c2d76"],["/posts/5923cba3.html","01e6dc83dd2e9267b1b8a94569ab1912"],["/posts/5c1bb6b8.html","7890fae5bf5c44c876659065e60c5b5b"],["/posts/5dc45f0c.html","72a3389cdcd0a4dcf22a1d2b02193d1f"],["/posts/5f2caa2c.html","b6f7619765fd88f82632950f40f33d6f"],["/posts/616be7b6.html","4218d67fcb681a1b2f892c8f98aca345"],["/posts/62a1ec0c.html","e043b2f89aa594bf2a8a450d2d9b41c1"],["/posts/69fb361e.html","1bf19d9d9d8cae61a785d2d8b28e72c9"],["/posts/6a8518ce.html","794e024842b6654d4015159285d84fff"],["/posts/70685119.html","55fcf91469e1ae612f12d6c33617a27b"],["/posts/743db4aa.html","4898a8f7d5e0236542dde97c7d32bb62"],["/posts/7b67faab.html","3b936104158c17880d9c931379fb8f20"],["/posts/7b76be01.html","14a171c3dbb648f6d395b1083c6ca07e"],["/posts/7bff939e.html","2bd2dbdc324e8304143bf44d11384bf6"],["/posts/7cc4ca07.html","9713674b326558e30cf255ff4567ad1c"],["/posts/7d257210.html","0d1ebdcd04d7f825dd54cf57659bb6e5"],["/posts/7e6a5c94.html","9cf833534cd95ad032e4d14f0275838f"],["/posts/7ea0cbe4.html","bd9767c48854134db7c65cdcd94aff93"],["/posts/7f382da2.html","b8ba6f79cf3c071babc8c62a84bceae1"],["/posts/7f8d32f4.html","78b07b277124aaf52e9ec39d5660f89d"],["/posts/7f92999e.html","62d0459d938539da438a8a00b5812282"],["/posts/8207aa48.html","5313eaac3efda02ad9ea9429eb87c9c7"],["/posts/836ea9bd.html","465d7a6c063a36b97a014bf72f78618e"],["/posts/84cae757.html","0ecfdfde1e408ec6f9b0a0b46e279e29"],["/posts/88200036.html","636956c9aad2133622cf4849f36729b7"],["/posts/922fb64d.html","ab71733ba9f5739637347802c9a44ca3"],["/posts/98332b29.html","3524b61706da8b92266e71d1bd272b6b"],["/posts/9a1a736f.html","54767a8ad622e4e996407a241b04f432"],["/posts/9addd0bb.html","a3949c8cebd2887ae1462c2e1dd57028"],["/posts/9b44950b.html","ba96e23fb56824c11f83493452f61d2a"],["/posts/9ca149ab.html","72f12478ee090fe5738d3a0a49002ea9"],["/posts/9e4446bf.html","aa51e1b03e55c64b197be6598b998968"],["/posts/a0271e58.html","f387352282b3a50756e93b16940fb763"],["/posts/a13c1dba.html","376812c11b851b81debea23adab62054"],["/posts/a1f2a4d4.html","0773b9e6992a20667a95376ff45f3225"],["/posts/a5f300de.html","72968ec50fd01e1b30b2bab39e323f32"],["/posts/a98766fe.html","3e067df24b226b02a9db9a3be12d5c16"],["/posts/a9f63847.html","81cb62d865b86c5cbcd5743bd816941f"],["/posts/ad31055e.html","4e05e1e833e86fb13c308b45bb41e135"],["/posts/adcd6e20.html","91ad2f43546184ac0ff3435a61f18a6c"],["/posts/b0fa4c58.html","6c90073fdec67d0e5415d6b3a32b4bfe"],["/posts/b1168675.html","d27136c8355effee593115be484936b3"],["/posts/b291b1dc.html","35d352d15631d4de73ebb555f75412a9"],["/posts/b2feeab7.html","62cf92da93911d4794554d9c4848c1fb"],["/posts/b6d66f1b.html","eb1db9adcccff3f253e529ca40c9a756"],["/posts/b7525d11.html","5dc19450a6a1806b01fb50d31ead2646"],["/posts/bb154b63.html","1d916624cd41249e31d6cbb663c09291"],["/posts/cc1b9611.html","e88804e1035dba507a1debc2f64bf7cb"],["/posts/cc86a40d.html","6359ee7dd806f674ae3488f18a50bb7b"],["/posts/d36531a7.html","c1d29f85a5a311f4882dd9ea28b26a2b"],["/posts/d442e51a.html","21880bcea8e4579b2d7e69be69a80044"],["/posts/d7fdf01f.html","f9e11638f4e1f0e72f7976d69c7ccc68"],["/posts/d839b0e.html","dd4e0f18fc27fd177041ce7d95e62ee0"],["/posts/dcdf88c8.html","a5eccf7ad9d68f6b5d0d73dd8146c2ce"],["/posts/dd378ae0.html","cbcabc30b61fee51ec4a42746ddf91a4"],["/posts/df2849ec.html","1762dd98f40b3f0b4976c623e7b28d82"],["/posts/e15be301.html","f0bee1dc84be909019f2e9bc32e2c3e4"],["/posts/e2e4b4ce.html","fa511ac84bead6f8560ad7bb51a4f3e2"],["/posts/e35ef5bd.html","2a136b29d7b9c128693984f3e690a773"],["/posts/e462ba83.html","8c93d36ed7c2ed9b9bf1ca7fd932e978"],["/posts/e53204e6.html","3f42644fa8df2c2ddef43f512563be60"],["/posts/e5cd9bbd.html","ba165ec2f65fe43e23707a7198c214a2"],["/posts/e7a99a5e.html","796e31845fb0b4d41d38ecbc3397f0fd"],["/posts/e9318100.html","eaaae26f4459e35a5329c9a437548855"],["/posts/ed52e6a0.html","0b3091c3f9bd40274759ce5e999ec4b5"],["/posts/ee0ac59a.html","65cbe0d845091a7ef6b2c6c05606e61a"],["/posts/f09c1ee5.html","95cac1c6fd210e9131411ba22e0f3567"],["/posts/f1252f66.html","480ddf930c8b823dddaa953a5c61f406"],["/posts/f4af26a9.html","69bfa2a1fba2ef9a6ecad5bc5d3b798a"],["/posts/fa3cd62d.html","30face325694fbeb5ced3f27431efe6a"],["/posts/fb3794ef.html","dfdbb3c1707ad914aa805dbb85a65641"],["/posts/fda4520e.html","1a2de62230975b6ffcd146c6809c4c74"],["/posts/ffdfd6d4.html","d159e502ce802ee8fa566a89d5aa4a2f"],["/private/index.html","0e09c5d06ea9229d99461dc53ee99cfc"],["/random/index.html","7592b15f4c38f96b0a66eaffee6f953a"],["/sw-register.js","fa3d0f14a8fd7652bf3e3e5a610809c2"],["/tags/ACG/index.html","3a52f848da481a16e28cb8a56fdef741"],["/tags/AIR/index.html","eaf0c1008e5e701c5074031d1200aead"],["/tags/AliceSoft/index.html","a3f97812ffc96b4d86caa595bb5bcdb6"],["/tags/Butterfly/index.html","524c71ee492ae68b8b41337d2f24cf6c"],["/tags/C/index.html","91175562cd70e73b1864bc006fd6c3da"],["/tags/CLI/index.html","d2e8afd76e96e9e845d877bc4cd2d846"],["/tags/CMU/index.html","f824e4951a8c03196c925113ca30c277"],["/tags/Crash-Course/index.html","99f53e7a86f6337e968230c415e7ff1f"],["/tags/ETH-Zurich/index.html","69edf79a5e8069e98cd424798e34666c"],["/tags/Eushully/index.html","f015488cf353569b644af6469be7e736"],["/tags/Everlasting-Summer/index.html","00d0dbfb8c85877f797eb7356bd28271"],["/tags/GDB/index.html","1e825e1a11bee04b21d5e7fcda475871"],["/tags/GRIS/index.html","5d35d07dee40446859485cce80201c1f"],["/tags/GUI/index.html","8adc4916f289ba3bcdb54024a8c51741"],["/tags/Git/index.html","1b7a8e046e352094c7674429123fbbca"],["/tags/HTML/index.html","12e1621dd272cc842ebaa0bd4f6f36da"],["/tags/Haskell/index.html","9dc672b7ec00c7f8766a3b1572a90d3f"],["/tags/Java/index.html","22c6de49790d04ddfdcfb50195f4abf4"],["/tags/JavaScript/index.html","15c8eba089a131cf635bfc0bb80b2a3b"],["/tags/LaTeX/index.html","ea08c21f7b2e1dca813c4bde6836c030"],["/tags/Linux/index.html","2215a4dc49e0de6d3064416512327b51"],["/tags/MIT/index.html","9ff4da6d3347e1188e2151a7f55228e0"],["/tags/Markdown/index.html","0c19934d6d516d783ebcfa9b53a2d2e6"],["/tags/Mermaid/index.html","fd3fcb296722b039370c71f4239ccc9f"],["/tags/NTR/index.html","40615b2de5a11a030ad9039ce54b6751"],["/tags/Node-js/index.html","32ef196b12326991a2d91a78878088aa"],["/tags/Pixar/index.html","53b23d254ff340b93cdaa399781c6244"],["/tags/Princeton/index.html","61993c7c209b01d1aad84e30fa591474"],["/tags/Python/index.html","d8bdc0b77ed63e8b7061bfd04d7c383f"],["/tags/Qt/index.html","9e5b7cc97f4741755a3521a7c752e820"],["/tags/R18/index.html","84cf65f9ef48f47be615eb4c6ded7801"],["/tags/RISC-V/index.html","d35d46db7697fdd7861104809c53ce6c"],["/tags/Scheme/index.html","8f62608c39a83c1de3001777710b8fb0"],["/tags/Shell/index.html","7f31fdcfb1bdc5a92e8e6d2141b3630e"],["/tags/Stanford/index.html","f38124548d604179c125cd50553ccbcf"],["/tags/UC-Berkeley/index.html","d747e7d93e415b84b68b1eba32131984"],["/tags/University-of-Helsinki/index.html","d11e0cb0c0cc1c589ccb07b027f8b1d4"],["/tags/debug/index.html","daaeb1dc0a76a7291d5433886bfec0e5"],["/tags/index.html","d2d143fd406423007641cda3bc7ce815"],["/tags/key/index.html","76ac130cdf6c80071652b8a15a943c28"],["/tags/web/index.html","0cf39f7b72bdbd8bb020321722d07a70"],["/tags/三国演义/index.html","e456c939ab70c9c07153c560c1138034"],["/tags/丧尸/index.html","e94dede872f891ee50ec8e8f6861981b"],["/tags/京都动画/index.html","b54174852a7300f9ba8c7be2ce640ebc"],["/tags/京阿尼/index.html","5239851cac888ece871503bfd413be9a"],["/tags/体系结构/index.html","de043e74221105c5f5a40a6e0a43f077"],["/tags/信号与系统/index.html","3934de8a8b0840bb808694ba191c4d6d"],["/tags/信息论/index.html","408ae8a5ab034165325bde2f65014f44"],["/tags/傲慢与偏见/index.html","01187f508dc4cbb73c4d05c51e29bbfe"],["/tags/元稹/index.html","d69077ad4981eab195853d586be5851c"],["/tags/克苏鲁/index.html","fe4e5775bd7e88403cbb67338084ade3"],["/tags/公路片/index.html","8200ce0ecb30d4a32780eddb716a1c4b"],["/tags/兰斯/index.html","dff35389e03e1a7e1a05eea1f17aae2a"],["/tags/关于我转生变成史莱姆这档事/index.html","f53bd0d149eef425a78d6eb8d26da236"],["/tags/冒险/index.html","d40b04b0f5be470809d84a7e74d55f1a"],["/tags/函数式编程/index.html","8c6674987a6e7928e1f83ded0873069c"],["/tags/刺客信条/index.html","2bbc4bd9e9c6cd3ebd053a7eaa8c4983"],["/tags/卖肉/index.html","5ae226ad01af9b356254f809e38ef13a"],["/tags/博客/index.html","9a11cb33647863b60bc81cdce1451c48"],["/tags/去月球/index.html","97a8ed72a9e5c27d0b6da486977ae246"],["/tags/可汗学院/index.html","5bc30952713a5ced9f397d7b597fb518"],["/tags/史诗/index.html","e5fc03f962200cb88df8a3ff1c1517c6"],["/tags/吉卜力工作室/index.html","65dd4a9aef0ea9f665fab741219b2708"],["/tags/名侦探柯南/index.html","2028b9a35151b12900f436082aa6928e"],["/tags/后宫/index.html","f1a63d22df8ee28102ca9951923f3bf4"],["/tags/咒术回战/index.html","c51b32bff587e034aaad8397a60db7f3"],["/tags/哆啦A梦/index.html","8785792faa4470dc8843419952b245ec"],["/tags/哈利波特/index.html","377410ae81c50ade4a5e7743012557a0"],["/tags/喜剧/index.html","fe3339d0f27e715c81ad3f5c526bd25e"],["/tags/喜羊羊与灰太狼/index.html","140bbf0e8b38778d477aea256b0cb72c"],["/tags/四大名著/index.html","303f8b7b0141cc3ba9ee4b0be6481ca2"],["/tags/图表/index.html","6e28295d5ac69e09d3372f36253ae863"],["/tags/复变函数/index.html","188f5d55cf5816a675e498284f38cdf1"],["/tags/孔乙己/index.html","5c5354e23adbf58a291d50a2a8ba3a38"],["/tags/字符串/index.html","6869ede0d44d5f33a22226e5ac90bba8"],["/tags/学园默示录/index.html","ee7a86c930dd0d182c72bee2e528486a"],["/tags/寻找天堂/index.html","e1f8789af6a2f72372ac269f6a11fd4b"],["/tags/希伯来大学/index.html","9e312508ee7b2e5d1b2ff02926411cce"],["/tags/异世界/index.html","c100ff32d1a205051653f80780c701d6"],["/tags/微分方程/index.html","23dddb2d4e6da19f1950f61d164d1dda"],["/tags/微积分/index.html","586b2f3453c173751ea990986b67bc66"],["/tags/恋爱/index.html","cf6f709d1c0484c061cee86919ce31bc"],["/tags/情感/index.html","708d0f65c22d1f350c5d24515faf5f44"],["/tags/成为简奥斯汀/index.html","c03f4e1228d8e7b241d813bd36aa23d5"],["/tags/指环王/index.html","d31720caf246d3184f0d4afe3c95c3f5"],["/tags/搞笑/index.html","8b89d86a3548a6cade683fb43a8ca951"],["/tags/教育/index.html","67a4f145a6613dc3526d66f1699990cd"],["/tags/数据科学/index.html","2978ef9ffe8f3395dc87861af67665ed"],["/tags/数据结构/index.html","a58cae0dfed8b0956e48415b013a9120"],["/tags/数据结构与算法/index.html","b2f0b3bcf530eeb3ccdb8823cc5bd605"],["/tags/文字排版/index.html","e90ba5fa04f003efec919ca70f9207ba"],["/tags/文明VI/index.html","07361f78c4afb86491f0ed7dabb7c506"],["/tags/旅行/index.html","8cbf3a8837a67838db5f323298c55cd4"],["/tags/无彩限的怪灵世界/index.html","0add5e7baba76a40709d5d1fd2641038"],["/tags/时间刺客/index.html","0c763fe7e56fbb2e68b34fd988b33bd5"],["/tags/暗黑地牢/index.html","44c3f2fdb31f0f2c711b63fc57d3227d"],["/tags/有生之年/index.html","079a01728dc93bf2a88f42bfdcb0575a"],["/tags/李商隐/index.html","5e646ca1c147890282a76a1675b38772"],["/tags/李白/index.html","c19c821926a0e079078bbd019286157c"],["/tags/李贺/index.html","1601e82857ceb7f742db14de80d93433"],["/tags/杜甫/index.html","6b9f5b4dfdc3a27b47e421379f5cc457"],["/tags/校园/index.html","793fa5134c998d000bce79aab2227df4"],["/tags/概率论/index.html","1f12fc7a4e136f31094935bf84e910e3"],["/tags/正则表达式/index.html","c90ceab65e302b005230a863a91bbb11"],["/tags/死亡/index.html","1516b5eaee0d771f023d12e0d3bfff76"],["/tags/水仙/index.html","2ebcb4b2510c2ac5a152908288d0c148"],["/tags/治愈/index.html","51d46f7b70e3ec5109b450124ddd1268"],["/tags/烂尾/index.html","5bb114364c23bdd523258c65e3223eff"],["/tags/热血/index.html","7376a64ceaf2c27155ad0a852c107691"],["/tags/爱国/index.html","9f981358f068bfc5f91fd5c8c5a01c48"],["/tags/版本管理/index.html","acb42ac36ba40864ddb4a3d9ea606aaa"],["/tags/玉子市场/index.html","b92379daac39c4498ddeb31735225064"],["/tags/玉子爱情故事/index.html","02b24420d3c978368ec1f70e554cf6a0"],["/tags/王维/index.html","52dda3fb9a7fd07b1ed36f52f2f97b8b"],["/tags/现实/index.html","0194a95e68ad0d3451daa92d8b60feb9"],["/tags/甘城光辉游乐园/index.html","620e2b5e8bcf24d2a4b37c16eea6a50f"],["/tags/白居易/index.html","8467ccd038e33baf797bbf1f6bfbee5b"],["/tags/白毛/index.html","5f4a7de3d35061cdeb1d0d847657d9cb"],["/tags/短篇小说/index.html","a1d0f776c7ccda618eed8747dc9a77ef"],["/tags/神话/index.html","ebdf8c06214827df8162b7837ddc4741"],["/tags/离散数学/index.html","c952dd0f2feffa489221304b6d0f01df"],["/tags/种田流/index.html","8a44c9ea60365e41bff8f82efbb4447d"],["/tags/空洞骑士/index.html","8bc3be3a1dadd182eccd8de6631cd8fe"],["/tags/童年/index.html","6f08550e9000feea7306c268698facd6"],["/tags/童话/index.html","92f19f6ff375383516dd810b5b86311a"],["/tags/第九艺术/index.html","a2dd96078d3900912e9f29ef2496e779"],["/tags/策略游戏/index.html","fc39a10fe3ece854fb2e13ba5c4c5d8a"],["/tags/简奥斯汀/index.html","5b6f7c8c72d3ec811ede92566ace850b"],["/tags/紫罗兰永恒花园/index.html","3743a1fd28bf8c7c18410c88eff7b647"],["/tags/纯爱/index.html","3a30b084196058520f3dd6a057dfdab2"],["/tags/纵使手残仍大爱/index.html","30a139164493e33881b8cdae9c4c1891"],["/tags/线性代数/index.html","54928e54211e9c3e03027b25a147e778"],["/tags/编码/index.html","e9d58ac83005ed5bc05205496070a9db"],["/tags/致郁/index.html","3382405d803a1a1ab7088f582ea95467"],["/tags/苏联/index.html","cbd0a97018c1f834df50bf8dc66471bd"],["/tags/苏轼/index.html","38dd39321073672188030f8a68769159"],["/tags/英雄/index.html","4ce1ac07ac6d935953a9555fa9adca40"],["/tags/计算机科学/index.html","a91027f3cdb7fda460fca31762564b1a"],["/tags/计算机系统/index.html","8e8525f2622d9f0b26a92f628bd5cc93"],["/tags/计算机网络/index.html","22bd5830a0785065d46923272e734544"],["/tags/词中之龙/index.html","d8281c3344fa4c448c861b5a3fda9aeb"],["/tags/诗仙/index.html","73904e20480c8c8862c91dee488461ae"],["/tags/诗佛/index.html","827dd6ef3b809baa94fe5d092bb59048"],["/tags/诗圣/index.html","3371ebde4e5ce11b32c59f7db2ac237b"],["/tags/诗词/index.html","bbfabbf41b8f82c022eaab43da9c6300"],["/tags/诗鬼/index.html","54c251d505c878f81690ec26cbeb063a"],["/tags/读书/index.html","4ac516a0182fef5146d4e0c41ab6f646"],["/tags/豪放/index.html","e8a7899c01a57d6970ab5fbbfbe5d01e"],["/tags/赫尔辛基大学/index.html","37175d51649170b7f7882fad3f5295df"],["/tags/跳跃/index.html","78f166276161dd1c7685853aa932c8e6"],["/tags/辛弃疾/index.html","229bcb29fa06438d4cc42d0f164f13dc"],["/tags/运动/index.html","342a23b293391f57bc80607e2715524f"],["/tags/钉宫/index.html","571491c203c22ff337f7d25dc719f526"],["/tags/银河战士恶魔城/index.html","dc4c65eb6f29400668f6436804bf1171"],["/tags/陆游/index.html","292b395eb4c6cb07d508636520818941"],["/tags/零之使魔/index.html","75932b3a9da381e69957d8d2f3ea07c5"],["/tags/霍比特人/index.html","7484e3dc0f588eb3c30213ba42fa0689"],["/tags/飞屋环游记/index.html","12b1542799f54099fa8db0e0f776dfe3"],["/tags/魔戒/index.html","fe2b72bba13454992981ade2ec1e530e"],["/tags/魔法少女小圆/index.html","b9168a2707d9aa24c15bba1620185c12"],["/tags/鲁迅/index.html","84da0e33956ea5e53959a0d6565bbc5d"]];
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
