/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5a9829b6cfe2e2bc5911d2f0108d707a"],["/about/index.html","950ce57800e0b0eb00fa4920e9ea449a"],["/anime/index.html","c22b53ca46250009ab3c12d8a375850e"],["/archives/2022/11/index.html","d5268c2d6d51cadcd98a1151209c4bfd"],["/archives/2022/12/index.html","e77ec5aa70d98e5d0e389aa321e1be70"],["/archives/2022/index.html","da9bde220bcb2d011ce2af3d9ba800ba"],["/archives/2022/page/2/index.html","1f970160c1effbce1414828a527d4d5b"],["/archives/2023/01/index.html","8a231ed5d271dfca113908bd93e5b2bc"],["/archives/2023/02/index.html","582ae02446bfd5ebf2791974a362fcb4"],["/archives/2023/03/index.html","bed9d705130c629401c01765ef4b0ece"],["/archives/2023/04/index.html","71a8bd839d0e428bbae329f0b5cfb882"],["/archives/2023/04/page/2/index.html","7ed3dc71036cbe0f6140f38caacf3320"],["/archives/2023/04/page/3/index.html","e31572703ee345c53cc34868da2fa0e9"],["/archives/2023/05/index.html","69392b905ea73f3702354336d765add6"],["/archives/2023/05/page/2/index.html","869913e08ea521c6c467b2cf673ac95d"],["/archives/2023/06/index.html","7b38fac2611568d211c42617eebdeb56"],["/archives/2023/08/index.html","fab45010468a91b0b246a61740a6421d"],["/archives/2023/09/index.html","4647d889b8393c18340294264ba589b0"],["/archives/2023/09/page/2/index.html","5a3f87d9c586546d736893ee14ca4652"],["/archives/2023/10/index.html","b94daa308a1bf75c9bb25ccd229b4d9f"],["/archives/2023/11/index.html","0667f117325dc56481eddabbdf89b2ec"],["/archives/2023/12/index.html","83b808d18bba19f0e615ae919864ef7d"],["/archives/2023/index.html","fe6c195e122c5755294b291f1a34cb24"],["/archives/2023/page/2/index.html","bbb068c5f67cde2c72bd82d9cfe3eb69"],["/archives/2023/page/3/index.html","b17cb09ec7a39da8b82cb2a0198cc7ff"],["/archives/2023/page/4/index.html","0e15e54e93f5cdda9c4667bad3c9b68c"],["/archives/2023/page/5/index.html","bf96cd64ef2012c8686ff6c585a6faf4"],["/archives/2023/page/6/index.html","1439f6437489ab33abf2162b5a2e7511"],["/archives/2023/page/7/index.html","f40463940f5bfef122ee59f4ffdc0188"],["/archives/2023/page/8/index.html","64a6b0f772e840c67c5a120898424779"],["/archives/2023/page/9/index.html","1ac1c6e3f77abe0964c719b662c8988d"],["/archives/2024/01/index.html","8221bbf1112f5ee0753b0162a0332526"],["/archives/2024/02/index.html","76b84c046d7353c2ad3a48647e185481"],["/archives/2024/03/index.html","32af19fa0e0bf5a87b8b9a97de28b5f4"],["/archives/2024/04/index.html","108cc27b557c6cd5c187b38a6648407d"],["/archives/2024/index.html","f7caab1887876d5bea7709fb1220ea40"],["/archives/2024/page/2/index.html","030d9ed51a996b396654b09a40a1faab"],["/archives/index.html","efcb6866f6acad9d57efd27bdee97be0"],["/archives/page/10/index.html","da3053ac85a8995485cc38ef54129cdf"],["/archives/page/11/index.html","7d2a53b15f8500bf91a33da3686dfb8f"],["/archives/page/12/index.html","3f89731e34c2d5c264a80de1d791bb6c"],["/archives/page/2/index.html","746f62e0a7f1337c08c1175819abfe9f"],["/archives/page/3/index.html","4a7492341ab377de1747c6b6569de96b"],["/archives/page/4/index.html","465c1fa38d8c5f7d372412a4b4165d99"],["/archives/page/5/index.html","0c4782ffd8d284fa9e0b66b96a8b3c96"],["/archives/page/6/index.html","b8a06828e306537f210714075cc4f20f"],["/archives/page/7/index.html","38c143dd812d29b63bbed3f1b088531d"],["/archives/page/8/index.html","1ff2d533969fd3ef913ee3446bf46fae"],["/archives/page/9/index.html","247797f1b8e6aa6a1f43eb68cba5f523"],["/categories/ACG杂谈/index.html","22e5a5ffaff3fb150d272bcd8bf45f6f"],["/categories/ACG杂谈/page/2/index.html","e30ea673b3491ad28694f1860ff2558e"],["/categories/ACG杂谈/page/3/index.html","25cb1e9367a5046a547246b1b2e84b03"],["/categories/index.html","f6ca3e3072cd9b22c34dcbb2d0de5b56"],["/categories/学习笔记/index.html","f34c6ac9e4791beb1ffc538756d1c1ae"],["/categories/学习笔记/page/2/index.html","99ae1d164c13cc9e249e78617afa0e53"],["/categories/学习笔记/page/3/index.html","5f017fcaade3cc9556179267ba5c1eaa"],["/categories/工具/index.html","54ce5fb498f292acb8767d82a4370119"],["/categories/工具/page/2/index.html","3713f99310985eeb310a0a8c9960e26a"],["/categories/工具/page/3/index.html","aa1512a8d4b2182d5cbdb55e0360ba3b"],["/categories/游戏人生/index.html","a6cd90990f0e87b59941f0979769fa41"],["/categories/游戏人生/page/2/index.html","3172f95536f4492f9dde8d67d16d5c59"],["/categories/读书笔记/index.html","1145ebec190d5c031fca0a3a82b9e8d1"],["/categories/读书笔记/page/2/index.html","7770f55c41b4be450f1798f9b59f97d3"],["/categories/闲言碎语/index.html","e67e537756e642c0a36256ee5941becf"],["/charts/index.html","a5fbd52d902f32b6f871392aad3899bf"],["/comments/index.html","94b8596707e6f2dedd61e64ddfeb46f4"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","83cdf0f5a4c0ed6c00d4bb8f2d69c302"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","9b7276b4fea8a70b006af2e8f43527e0"],["/gallery/index.html","fb499d9a71a25278c3d903e0642f9a76"],["/gallery/wallpaper/index.html","6775854f22a7c8cc8e6adbb400a684c8"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","293dd5d64d7886f7396e24c944363cd1"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/10/index.html","a9120c9fc91cf8d93927f49d2c85f75b"],["/page/2/index.html","441b09468e7bba67b2a5b4728a579d91"],["/page/3/index.html","2aa91fc674f790af60d33c0a46898af0"],["/page/4/index.html","a660107e5a1a83a2b502803697bd89d1"],["/page/5/index.html","52929248807bbb85bc5e82ef5e0e5f5e"],["/page/6/index.html","5e47c64b04bc0dfbac097dc261f0e802"],["/page/7/index.html","d57244be86bc6596aa62363b43933d9d"],["/page/8/index.html","52b341a3811aedeffd0d83b6e3f9163b"],["/page/9/index.html","0aa3167f237cb9e49a62b0a333fded1a"],["/posts/106331b4.html","e3cc827b156a7b7424515f18809e7476"],["/posts/1185a02e.html","8e613fd8c95f335969b87ac02530f71f"],["/posts/12e06b11.html","c559501a1885ae7c2774556929b383ee"],["/posts/13aafbc3.html","b7380b80fd8f4ab1d3c398bb3dda78a5"],["/posts/167c7c45.html","c4ee3dc227ba7219ff4cc2b08bf78bb3"],["/posts/1743dad6.html","2f4adc54c5bb5ca2c3f9c49382c86dc1"],["/posts/17492bb9.html","6e71662af26534a7ef26fe510eddcf10"],["/posts/175a8e1.html","408bdaa7a0a0549a63aacc1ee1a1081a"],["/posts/1be398e4.html","2dcac0e24b5f58b92cfb5d4642412d78"],["/posts/1c5a0321.html","2aea5039e2fc9554efdaf02a4993bdff"],["/posts/1ec7973e.html","369207a8edd131fa9c33b1a72a6f1131"],["/posts/1fb82448.html","1cfdb86bc79f5320f2fe52165fae04f5"],["/posts/2069534c.html","811e9b92a6fac311f09bea2cd0d06aec"],["/posts/21f18fd2.html","08580292bebec6d022020bb440de7766"],["/posts/29c507fa.html","88df01c2e006a4a49d4c219fe5ee9153"],["/posts/2f34eb00.html","be8c7c0283e29dbce95c5616624df056"],["/posts/2f57a694.html","b65deec178b0b791c2414a96e2405f87"],["/posts/320cf12b.html","2725f66792b7873d25503c030170dc93"],["/posts/353e70c9.html","0ab98c917b6b23725ab85ceef4cb4631"],["/posts/374b54d5.html","c795d63969118922c49a94a0ab112b7d"],["/posts/3871b764.html","9795df07ffaf3b9674e667c230f28f3e"],["/posts/3b308caa.html","bf23181e5ca4c85e7076ba0621a9e1d8"],["/posts/3c3cdb74.html","ca66cd59cd32210685177977821ec7f6"],["/posts/41f65cde.html","ead712cd644fa20b6cee004a9a3ce90d"],["/posts/4208fd6c.html","a60c0cbcbabe5e11a0a0c9463e1d0b02"],["/posts/4392373e.html","48a84f2015842d7d76d318732659a488"],["/posts/440ed920.html","6f6c4794481d7b090e72dead4cb57030"],["/posts/447a8d68.html","ebac8bf12f50818c3144afb50ad26ba6"],["/posts/4d2b51ac.html","c987391bc5b36d69fda73eff8acbca17"],["/posts/4db1a52a.html","5ead7f010b0be2a9bd4f127e394516d0"],["/posts/503ae89.html","25bbf02fd0df682881bdef9865ee8f98"],["/posts/518e2799.html","030ea6bd942172f1689f87e3936d1660"],["/posts/535fd087.html","7bebd7599d7017325858592a35d65c75"],["/posts/5923cba3.html","a0cd8a3752aa286337979b9a597cda94"],["/posts/5c1bb6b8.html","8b31b36974f76b55def4ef80d513c9ef"],["/posts/5dc45f0c.html","acccd03ddd9343e808c98e11f53a5238"],["/posts/5f2caa2c.html","90b9d312500ff01abf0d80845ef3edbd"],["/posts/60d11614.html","4c0de186f7a5c33597ba5c21ebf628c8"],["/posts/616be7b6.html","6eeffa8c5766a79726f37ba180fe1abb"],["/posts/62a1ec0c.html","eb8371930fd9f232093ae75c9d6d411a"],["/posts/6441a1ac.html","fa76831d5534956799b978335567d1c4"],["/posts/69fb361e.html","53972b4a6994d95d1cc98c8e20491107"],["/posts/6a8518ce.html","bb624d380345b8ae18f782f24ccee96d"],["/posts/70685119.html","e33dd62169c4f4a971ae35af368445e9"],["/posts/743db4aa.html","acb0d3061cb812890a03813a042cfef6"],["/posts/74c3ade.html","85ab77cea71c48d08c0fdfcd62657181"],["/posts/7b67faab.html","e2d72bc3863ba08606b9a5c56b976a23"],["/posts/7b76be01.html","c8b87318ace3b312e100f0772b3eac1c"],["/posts/7bff939e.html","5d0dcf26f3b5ea3b7091893cd89a0300"],["/posts/7cc4ca07.html","8cb08cfcbec8fe06def623aab5340226"],["/posts/7d257210.html","63b67e52ce6ecc4996dea3cede34439a"],["/posts/7e6a5c94.html","de09054f07cd816506466dd44acf95ca"],["/posts/7ea0cbe4.html","5c23c9518bb719bd91f4224e47515843"],["/posts/7f382da2.html","6cb0ab529c52aade19119579c3ee623f"],["/posts/7f8d32f4.html","f162bf0481cae686138f9a1e6d0371fe"],["/posts/7f92999e.html","97559b991706ade4495a9eebc5083cd1"],["/posts/8207aa48.html","dcd424b87319c0b1c4de2fdbc1ff7bd5"],["/posts/828c2ccd.html","54bb52e47958f8cb192b650c8c9337f7"],["/posts/836ea9bd.html","356a249f006d3acb321e018036b7df4a"],["/posts/84cae757.html","c7bd2148292afd9c96937478f6673a92"],["/posts/88200036.html","6bf85707958411739621a8ae56b42729"],["/posts/922fb64d.html","1f4c2107e4159d652354bdd3a56ff3d1"],["/posts/98332b29.html","2b1e5acf988b7851217c51caf5a70501"],["/posts/9a1a736f.html","2f92bb68a23d114dfc69747c92da444f"],["/posts/9addd0bb.html","0185f1e3f25cc82d525816a03f62db7d"],["/posts/9b44950b.html","09352900c109ad374a10925a15d452fb"],["/posts/9ca149ab.html","595f86bfe5b59ae4cfc629a6b0f601ab"],["/posts/9e4446bf.html","4401d0bde58b8af1d801b184d79d19ec"],["/posts/a0271e58.html","65c104bbf1404b4282074ece3d69a84c"],["/posts/a13c1dba.html","0473183902687140b4a8acf2386e0e97"],["/posts/a1f2a4d4.html","9d1a0e12112398c4fbe20a430016bccb"],["/posts/a541262a.html","ab161137c49e6c1fa159ccdbd971eebd"],["/posts/a5f300de.html","2ba5e9d75b4c191a69fb8fe64d4a87eb"],["/posts/a98766fe.html","57dbc4aebcd8d33860470d275513a17b"],["/posts/a9f63847.html","123607667543d58fde91887ad116df28"],["/posts/ad31055e.html","80df3d37ab50a05a95bb0c3ed9cac134"],["/posts/adcd6e20.html","1f3b0f7ef130284950cdad02a8dce205"],["/posts/b0fa4c58.html","df40af45bec272fde8ae56ab5fd7e2b3"],["/posts/b1168675.html","c00432322c994e185df73da5684d431f"],["/posts/b291b1dc.html","f034efc5d69832dfe11e8371fb1119bd"],["/posts/b2feeab7.html","59adabac3cf3dd5c88fdafb72f5fecaf"],["/posts/b6d66f1b.html","02a2953f96e51b8330d0265ef6bbdcca"],["/posts/b7525d11.html","08338f1dfcfdcb0811b400146a620de7"],["/posts/bb154b63.html","ddd97e35e17ba6eea3f9df9562c2b320"],["/posts/cc1b9611.html","be5ec6849a2acd7a260f63711d0ae165"],["/posts/cc86a40d.html","9bbc2a26a04ef01697bc9ceb42bee461"],["/posts/d36531a7.html","3d059451bcb68de645da63147c4e55da"],["/posts/d442e51a.html","7c50ea6d76f1b32ef2d563f343b36b6c"],["/posts/d7fdf01f.html","179ab51b6663fe72fd6f98ddc21155e9"],["/posts/d839b0e.html","cead53dfdacf5651ecd9a45d44be449d"],["/posts/dc5fbc03.html","cad5ccd6110d33a9109691245ca30957"],["/posts/dcdf88c8.html","247d61cb7fb0eaffb115e43dae3e62e2"],["/posts/dd378ae0.html","22fba8f2a9e55abafd00d96df21675f9"],["/posts/df2849ec.html","dc45a4e4f08fb5eb99d30de28525d1d2"],["/posts/e15be301.html","1305bb33dcc09c2e0b33f7ffd83568fc"],["/posts/e2e4b4ce.html","7f3fee73aa9ec882129c49e9113a36e7"],["/posts/e35ef5bd.html","6167d2bfa4e1e380f5728cb70cb7f2de"],["/posts/e462ba83.html","dcc1f3895fab2fced25d97f7d2bc87d2"],["/posts/e53204e6.html","2d34bccd77ae1af0ca1afeb7cb4ad63b"],["/posts/e5cd9bbd.html","a7f2117bb4a024f14463c8ae6a8cbe89"],["/posts/e5d89884.html","59416b77584758521e56c988a520ddeb"],["/posts/e7a99a5e.html","125b71e21472bb2670cb8e1d45cec586"],["/posts/e9318100.html","a4e1cdb2fd55632db591e49ac0f0b9f9"],["/posts/ed52e6a0.html","b13c3c98fdc7f01f967c5818c16a1e52"],["/posts/ee0ac59a.html","1e82890414fbd359c896bd27d3d55832"],["/posts/f09c1ee5.html","1e697b096056ffcfbca5e0197a194493"],["/posts/f1252f66.html","fd58ef4d8c0bc1b02b7edb732a37f2ef"],["/posts/f4af26a9.html","8a98c8975f96ccada759842e3de16ef1"],["/posts/f8060ffb.html","db2a5bf5134472cdcc8ab5a0152ff85e"],["/posts/fa3cd62d.html","15ef91c2b81d6426b90a7f9d911259f3"],["/posts/fb3794ef.html","4897df5c11bacb52788a525f044d6f9a"],["/posts/fda4520e.html","961e79d00f489a0bdf876ad4c6c688e3"],["/posts/ffdfd6d4.html","f16f03db10fce6ac68720e9920cd4df9"],["/random/index.html","22fbe00c52386992ff560e0ff0cac81b"],["/sw-register.js","043bd46e5ac3919e73d8c5aab7474e0a"],["/tags/ACG/index.html","8916ead3f8b1fa2786851301abec187d"],["/tags/AIR/index.html","95c23335f239a66ecf44c6de696626c5"],["/tags/AliceSoft/index.html","759edc17314d58b2df0b285a827ce054"],["/tags/Butterfly/index.html","b6425f23f05de5a62b38917cd8311997"],["/tags/C/index.html","c283e37c5c0420544741c5463c353305"],["/tags/CLI/index.html","3a63c95871e02413399ca8b89ec7b1e5"],["/tags/CMU/index.html","b012c2e72c4bb26cc49c94e2a42686a5"],["/tags/Crash-Course/index.html","1d607620d2bc887a3dcbf96d859e8a7f"],["/tags/ETH-Zurich/index.html","56086137b5a7f89b1fc6cfc03a4c48a0"],["/tags/Eushully/index.html","949f011c7d6edea56af6037e4fd2f574"],["/tags/Everlasting-Summer/index.html","69edb0ad2364bfb793e3e4244478af06"],["/tags/GDB/index.html","5877286f1b2b2b8c4152c2a21f528a76"],["/tags/GRIS/index.html","ddfa7720857f3dcd88fa5360fbd2b1ab"],["/tags/GUI/index.html","39b75ddc5e8e5ea5fc9ed50696209e12"],["/tags/Git/index.html","b651df913014a37c346cd541d109c092"],["/tags/HTML/index.html","bd39da538cb892f1fac155da2a079330"],["/tags/Haskell/index.html","8896200801f57abbde50b883fd0b6725"],["/tags/IDE/index.html","bc2be2d9192a02462390e7fcac2834af"],["/tags/Java/index.html","936877a2c42a444d8bb2604c0ad15e9c"],["/tags/JavaScript/index.html","a28e1405d482f7995d5efb7d1b38aa67"],["/tags/JetBrains/index.html","a5e2426b7b070cc8002d9d79170e785c"],["/tags/LaTeX/index.html","35ec3c3249390a1cc30bffa5c6decf25"],["/tags/Linux/index.html","46f9b28d5cb62d1a57b55b21ccb400ac"],["/tags/MIT/index.html","85dada11c740b05192fb790417963e4a"],["/tags/Makefile/index.html","2d73a5ad7393cb101ae277d7b593a6cd"],["/tags/Markdown/index.html","312ccd6f4d4a77cbcb7cde4b07d7f0f0"],["/tags/Mermaid/index.html","3665bb9c301a12f75a45360e845d8442"],["/tags/NTR/index.html","4b7d5bd4bb92ea0937ab24995ed34de0"],["/tags/Node-js/index.html","2e0d6243adfbf8885622bb6f339f3dd5"],["/tags/Pixar/index.html","4ea3d74a2f987dfc8fe496fde58f7770"],["/tags/Princeton/index.html","f0ef6647f31ecd697ba4af655acd10ec"],["/tags/Python/index.html","d219f028aba23a15b785e6841f5ab985"],["/tags/Qt/index.html","26f92fe7fae878c90a26c0cbab743aee"],["/tags/R18/index.html","7112c8768983f0e34acaba104c73eaaa"],["/tags/RISC-V/index.html","1a3008fa7789f98e16c4308d4f11be7d"],["/tags/Scheme/index.html","70b1ce1f4bdab48816b4e23365dc44fe"],["/tags/Shell/index.html","0a2c8aab25863d0c20a62b495d5bc72e"],["/tags/Spring-Boot/index.html","2aa165a265af60654643bf8df5f667f0"],["/tags/Stanford/index.html","641105f877208e94f3c0d5fd00451e65"],["/tags/UC-Berkeley/index.html","67f3f1edd3194aed8333f58387902426"],["/tags/University-of-Helsinki/index.html","9c82e535ff651d3a8abb78ca8ca6be20"],["/tags/VS-Code/index.html","aeb24979c667aa88f65272f40b13fe9a"],["/tags/debug/index.html","52a6897ed2f654760cf2b5cc1368fdfd"],["/tags/index.html","11e9bae346b8be905e4c328fee2f3cbe"],["/tags/key/index.html","9a4bec04cf029c25a3f2203e9de8c938"],["/tags/web/index.html","15a8893ab218857ce37339edd67935c5"],["/tags/三国演义/index.html","e2c7b7756cff1393601489353da5e653"],["/tags/丧尸/index.html","eec6fd035a3e8eee7f6b3401143f5f16"],["/tags/京都动画/index.html","bb6c1f90a6a9808f52b637eeb69e5abe"],["/tags/京阿尼/index.html","2f3daa59bafc042d285d4394e587e7ba"],["/tags/代码规范/index.html","c4d41e55b395be83b69f151ceaca1357"],["/tags/体系结构/index.html","d2a809462538c1eb320b460d83c37601"],["/tags/信号与系统/index.html","ba138808852c8a8fff16a355efeaf12b"],["/tags/信息论/index.html","1ecea2bc3063c403aa59a751158b65a4"],["/tags/傲慢与偏见/index.html","50ad616c1520561417586decfadfb3e3"],["/tags/元稹/index.html","0a41d9a3fbc553a7c69d026a9254de9d"],["/tags/克苏鲁/index.html","b316b43e8d53959e7b9ce7d1a1ba0e52"],["/tags/公路片/index.html","19dd7fc470d9dadc0ba28ba29277b30e"],["/tags/兰斯/index.html","dd3fef8e97edc001a9e3c89c75f955ed"],["/tags/关于我转生变成史莱姆这档事/index.html","b7f45ad9f47c08dcbc6721202fa956be"],["/tags/冒险/index.html","386c585429ccf0d7b36d9724d355c859"],["/tags/冰汽时代/index.html","316b78a757700765c516f1252bcd119f"],["/tags/函数式编程/index.html","107e9343650bbd5bb753407b567a59d4"],["/tags/刺客信条/index.html","c7d4d8c11e6467b51483df9ed7fa246a"],["/tags/卖肉/index.html","12f6485dc57afa8c15391a3449fa6795"],["/tags/博客/index.html","ac05a15aa2132f01d4a49b0b2411f880"],["/tags/去月球/index.html","62f6c938ee34be9f9aa627b94163cd39"],["/tags/可汗学院/index.html","5eb09cf98a10b4e53f06c4863a8d0ebb"],["/tags/史诗/index.html","be5b28fcfad815017fdebbdef5def023"],["/tags/吉卜力工作室/index.html","8ed05cf8e51f5baf497d2339cbdaa91f"],["/tags/名侦探柯南/index.html","a1c094337faf2a290ee89eb1f5c3c51d"],["/tags/后宫/index.html","7095494fc2da48290055429a7552c48c"],["/tags/咒术回战/index.html","0d187065bd0799e35e556b87e3b66036"],["/tags/哆啦A梦/index.html","cf5c1138d475f8942b9b8f77dd68fcaf"],["/tags/哈利波特/index.html","142f9a270dd7f5c13754c7fabf7e4223"],["/tags/喜剧/index.html","b19959f684647cb90badb8c4328ab430"],["/tags/喜羊羊与灰太狼/index.html","1f5460a0151ec8a196f8fc3783a77e99"],["/tags/四大名著/index.html","5d765488ce4eab128cfcbe7c36883161"],["/tags/图表/index.html","d841ff5297f54d25d3b903affc5b4761"],["/tags/复变函数/index.html","bd3247c1d821561feee6ef7373b91a2d"],["/tags/孔乙己/index.html","c4d577d5d4dca0f3643e0b584a9f0d31"],["/tags/孔子/index.html","c8621de0e2472f5a6a71733f74abb644"],["/tags/字符串/index.html","7edaad6d290ddf20f96f30b69b6050d5"],["/tags/学园默示录/index.html","04ca7c71fd3bf8ea0826195d00b60902"],["/tags/寻找天堂/index.html","872e5a7480344f4c64a693ffa60709a9"],["/tags/希伯来大学/index.html","748039ec4a9086168998193fb3b54ffa"],["/tags/异世界/index.html","b753ed6192870ddc65d7548db8af5bd9"],["/tags/微分方程/index.html","5ab9fc5990539a0c5d2a9e7a4c9a0ab7"],["/tags/微积分/index.html","d7c65d7c90741743232b07db6a29e7c6"],["/tags/恋爱/index.html","db5cfea281658991e079ec5bc3e0dbfc"],["/tags/情感/index.html","030134084c28b91fe561a8fd4597a731"],["/tags/成为简奥斯汀/index.html","cf2deff9335459565f1f21f74d736789"],["/tags/指环王/index.html","d0e6bd3382a752297a83d70e1e8c95ba"],["/tags/搞笑/index.html","8caec8809b45f7cb5edaf70e153c3e25"],["/tags/教育/index.html","64686b7de8a3154ddd7506e6adf0f2b9"],["/tags/数据库/index.html","32cc6eff6ebf0db2bdc1c06fe5ee4672"],["/tags/数据科学/index.html","0bfa9c9e3f8a97d63491e95c43104cf2"],["/tags/数据结构/index.html","aaf7c83a87d53f9e72439858af3d8137"],["/tags/数据结构与算法/index.html","307a4c15940583a53f869fb31ec9a1c4"],["/tags/文字排版/index.html","6f903d29748c4b5e19e4aca46c3913a3"],["/tags/文明VI/index.html","a499161ff58ca62a460a3e58f7f32a98"],["/tags/旅行/index.html","40d70b2db819a472d856ed8209412ed4"],["/tags/无彩限的怪灵世界/index.html","1316fd7daf77d4b9ae8d15b6716ad7c7"],["/tags/时间刺客/index.html","5e9e0c49f53b883a6c9438891435198f"],["/tags/暗黑地牢/index.html","fee952cde6bbcfcf4d2c94cc40ab65e1"],["/tags/有生之年/index.html","5acb0f1fcf5bbe7bacebb0a7e7a13a3c"],["/tags/末日求生/index.html","5ffd635b4250086e20e86a16a4fb9d2a"],["/tags/李商隐/index.html","2f6f832188c275510624fd58a3ba18fb"],["/tags/李白/index.html","904a9eb8135916cf5b05a3bd84120ea3"],["/tags/李贺/index.html","436c1eeb61892e1e516ed7d2ad356c61"],["/tags/杜甫/index.html","a6fbf70aa3a6bc06ad57ae721a345189"],["/tags/校园/index.html","87d9d363d3240a374c7bc3b505ea1565"],["/tags/概率论/index.html","9c87cfa83b8d0453f68108feecd93fb1"],["/tags/正则表达式/index.html","74d0330b6efc0d56c3a2d8480a22ebad"],["/tags/死亡/index.html","d17b52afb2e317fd32687a07f1304918"],["/tags/水仙/index.html","80c4e4d2b33693d1f21c45e7fb427d02"],["/tags/治愈/index.html","b5cc5ec3a96d9d073d3d7e102551099f"],["/tags/烂尾/index.html","b2d301c5b2e0e37a363190797fc33d02"],["/tags/热血/index.html","c2e20531badd78fab62fccd466cfaf51"],["/tags/爱国/index.html","a8df12f44635e470144b7cbeb470f878"],["/tags/版本管理/index.html","f72f2538e72bfb923bf0e92252b7286a"],["/tags/玉子市场/index.html","e7dd7cb6f1693f69ef576331637ab178"],["/tags/玉子爱情故事/index.html","668035e6c5eb385f56e2ad50ba1f569d"],["/tags/王维/index.html","d701db3da0f9a881b9e0a5dfaeca14cc"],["/tags/现实/index.html","a8ac9f102e8c72f71fbabb33c5c63ec5"],["/tags/甘城光辉游乐园/index.html","3f5fd2e379dfffa9da5b1819c76f1160"],["/tags/白居易/index.html","4182c68faf8f7d3bac47b4b21286fa15"],["/tags/白毛/index.html","2265c5c525f0da6acb0480e1604f267a"],["/tags/短篇小说/index.html","9d8e1c5f43d0d234aed9712e41c2b6c1"],["/tags/神话/index.html","e9289201d2292c85f1814cf276264cb4"],["/tags/离散数学/index.html","79779507d5a19d596ef9e78924985354"],["/tags/种田流/index.html","2c6bc5fca5e18d724435381b204287d7"],["/tags/空洞骑士/index.html","8c2c03a0dfa8aef809e68d06d387bd0b"],["/tags/童年/index.html","40b6aee6bb58123a4be9c88a8b87d100"],["/tags/童话/index.html","06f40f57223074810a1715e10ac11113"],["/tags/第九艺术/index.html","13d1d673c1b2098dfc84506dd73cb539"],["/tags/策略游戏/index.html","1f7652432348a131efb86b6806459d03"],["/tags/简奥斯汀/index.html","0438896d7b7fc815a6b390e7966f05bf"],["/tags/紫罗兰永恒花园/index.html","3d25a3413d51a365b317988239cecfb4"],["/tags/纯爱/index.html","0e4d21e46dcc96e9650366f516d2ede2"],["/tags/纵使手残仍大爱/index.html","415fd681ab6287174ee1d24b7c486af3"],["/tags/线性代数/index.html","9d0340ab0468684b2d8153b5290ab842"],["/tags/编码/index.html","64d407469548a3c3a815901eae8f9359"],["/tags/编译/index.html","bbb98b52d18d391128c9bd180ee09a4b"],["/tags/致郁/index.html","4483da9f204573d8b320ea2b74eab64b"],["/tags/苏联/index.html","b296fbb9d952b50c859364be7731e97b"],["/tags/苏轼/index.html","0757609304a8f10bee35be8f1f000323"],["/tags/英雄/index.html","66f888e1510b16190c245e4329732bca"],["/tags/计算机科学/index.html","d45f74460f66d27309f7c39da68f155c"],["/tags/计算机系统/index.html","a365674eb8ddd122d66a170505a52ed4"],["/tags/计算机网络/index.html","dfd108808436030b521426723e683fb7"],["/tags/论语/index.html","b960725305e7cd32a2fa73e6dd5cec0d"],["/tags/词中之龙/index.html","453cd5898c10d57eec8af6f607f81bd6"],["/tags/诗仙/index.html","7c5bd9cfbbaa80ad9e2163b5624857ea"],["/tags/诗佛/index.html","16ff4f88ebe53ccf4aa9df3f26410687"],["/tags/诗圣/index.html","b251e841d08559c6b43348bc1a6ed5b9"],["/tags/诗词/index.html","1f64d15abca79edb4b918064b30a4bd8"],["/tags/诗鬼/index.html","08417845c601771a695a3ce84e57df6a"],["/tags/读书/index.html","9b78bca4d9a7978b24448990aae0847e"],["/tags/豪放/index.html","6ec97af815fd13d80558ffff7430fc92"],["/tags/赫尔辛基大学/index.html","1881710fd380901cd8f608f3c1c2ddd0"],["/tags/跳跃/index.html","53d210209ef1b19d52188ae530e98511"],["/tags/辛弃疾/index.html","6bb54620a6c68c7a8df47de61e14647c"],["/tags/运动/index.html","e41e099f9b60afdc25bb83c4fb1156e7"],["/tags/钉宫/index.html","bdca020c1de94d8930af6d9f7a1c79df"],["/tags/银河战士恶魔城/index.html","17ac04a51a40698d917b438d7eb567fd"],["/tags/阿里巴巴/index.html","0cf9e1a6b5686e8c0b62c85b96fefcfe"],["/tags/陆游/index.html","bae49c1c4f0ef4db74dd7c9fbff68575"],["/tags/零之使魔/index.html","af5e9d3c7898a1aa696851af5e09e56f"],["/tags/霍比特人/index.html","f253eb096bf3239345daa007d9be19ec"],["/tags/飞屋环游记/index.html","81740e08c89b74a499eb8319dc123cf0"],["/tags/魔戒/index.html","09df2fcf5da5bd077656379095e2711e"],["/tags/魔法少女小圆/index.html","6985feb9d4a7c09eca45b5dcae682be8"],["/tags/鲁迅/index.html","eb33a822dfbc346557bcc09ee42e80f9"]];
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
