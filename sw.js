/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0feb76b841069eb00f4ac4fc7995c87f"],["/about/index.html","bc1212854bcaf93e044966d4bef01531"],["/anime/index.html","c9a3e0e9b490b6523d78c3a0d373df9e"],["/archives/2022/11/index.html","49731b6542504c0da3702c95b81112bd"],["/archives/2022/12/index.html","91f81620640ad15d26bfdb39cf44a798"],["/archives/2022/index.html","f5d43ab22dbdce7da87f786bfb53efd1"],["/archives/2022/page/2/index.html","13478d75975713bd1672010be00673eb"],["/archives/2023/01/index.html","d73ca01db1004cb9f667e84547a086ff"],["/archives/2023/02/index.html","03a051255fdcf2c85ffee578abdd2de2"],["/archives/2023/03/index.html","bd8cd06763ec30cd850b8c6be0725f33"],["/archives/2023/04/index.html","4c910df6c0516d8708da5224fcddcbf7"],["/archives/2023/04/page/2/index.html","bc21532c0079c227e143792515f34906"],["/archives/2023/04/page/3/index.html","82ae79bfa396769f2fda187033105ed9"],["/archives/2023/05/index.html","c8282b6ae4102ac91b1ba9dfed762b7e"],["/archives/2023/05/page/2/index.html","1626f5f91b49709fda53b9a3fd45280f"],["/archives/2023/06/index.html","9c41b981bee3c6f0dddf087292e76ba9"],["/archives/2023/08/index.html","a7e35540c70073c31b232c34119a6e44"],["/archives/2023/09/index.html","317fa58b12d3221a8c55b51890238966"],["/archives/2023/09/page/2/index.html","0feb7c71b3367cf68c3440a8afa25257"],["/archives/2023/10/index.html","ce5720d8dd4910f1accc81730c584e1f"],["/archives/2023/11/index.html","3b2cfd8adcf54f9c97db5464191fdb14"],["/archives/2023/12/index.html","4a2eed29959978357d20741e8995b67f"],["/archives/2023/index.html","8d5efb96087f5e93c9492002688b4935"],["/archives/2023/page/2/index.html","fd534e062f6dd24622bb13f1b028ea05"],["/archives/2023/page/3/index.html","1bf01027935569683d71660008a94ac0"],["/archives/2023/page/4/index.html","9fd1633837e593c758b16153df6676c9"],["/archives/2023/page/5/index.html","3a5ec35089a541767075a3cb1a1f1899"],["/archives/2023/page/6/index.html","5607c44518bf2dc4f2d4898f73508189"],["/archives/2023/page/7/index.html","93c76406ce1b9da11ba34bcc8f547bc6"],["/archives/2023/page/8/index.html","b22b8484105f87cb156e5c5305959954"],["/archives/2023/page/9/index.html","dec475cac2ac8da4a6dcc01903e0649f"],["/archives/2024/01/index.html","4eb23b8fb6c5869bd274d51b2b49554c"],["/archives/2024/02/index.html","ba3cce13defb246702adfa6da2e2d126"],["/archives/2024/03/index.html","198bf1ebcb5e4bc1288bd1d5fcc51dc2"],["/archives/2024/index.html","7be37687721e8b19268877cd38eee9eb"],["/archives/index.html","214e7aa473ab64d13101b1612c7156c3"],["/archives/page/10/index.html","7e1cf924e2016b1313b1363178539df0"],["/archives/page/11/index.html","ade42e4d8ead3b48ae0a969a13e4f1de"],["/archives/page/2/index.html","31b64ff257d5597fb4c1199be7cf38df"],["/archives/page/3/index.html","010a6f96f11a77d3854bd33a596e8c2c"],["/archives/page/4/index.html","f8a2d2b3a1bca56dc4b791d72869c92d"],["/archives/page/5/index.html","702b955bdfe01d1958cca96cd5045ec9"],["/archives/page/6/index.html","3c964d881f676af5de7a4ea1a122ce13"],["/archives/page/7/index.html","d17b898f46059efa899f643236f921a6"],["/archives/page/8/index.html","7abd75336f2421bd39c4fd7d4d62924d"],["/archives/page/9/index.html","a8cbf0d6c01dd8524408ba16597f5832"],["/categories/ACG杂谈/index.html","0ead326fe307b5955e0ae2dc17b6729e"],["/categories/ACG杂谈/page/2/index.html","2d0a0264fd508ac521c378734d02a84e"],["/categories/ACG杂谈/page/3/index.html","b428ff9deb8c4aa4be8dc07897310e9d"],["/categories/index.html","cd6353a529023661350dee1dd4551734"],["/categories/学习笔记/index.html","368f22579ffcb5c00dfaa4b9fc044433"],["/categories/学习笔记/page/2/index.html","a1e5ba148407cbc39cf09318c070fb8e"],["/categories/学习笔记/page/3/index.html","dd2e0c11bd5300d1bc001ed148e85b21"],["/categories/工具/index.html","5b6da8e8e84f470bfa10db6434e5d7db"],["/categories/工具/page/2/index.html","63df620df70097b8a7a358cf5e46b708"],["/categories/游戏人生/index.html","5439be2e550c41c0b47adfc6e4a76e19"],["/categories/游戏人生/page/2/index.html","2be27caeff7a33a73d7daf814071cbcc"],["/categories/读书笔记/index.html","2faf89f751470cefb6a203867c7b3010"],["/categories/读书笔记/page/2/index.html","6aa23478b6c4915fcd22bdf97bc55206"],["/categories/闲言碎语/index.html","1d94133c8b7beb5b075d6c88fab484c2"],["/census/index.html","8a326a6ccd3f20296d65458ff610e466"],["/charts/index.html","fa83c779b06681f6c2af8fd241f3053a"],["/comments/index.html","e95a90e47fc9a1bf0d0e3c99c7f54164"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","0eb4413aa204cf60d74b78c3d1be4a9f"],["/gallery/index.html","435a195f8c95477e0e5ccc9d8d72d294"],["/gallery/wallpaper/index.html","47c4bbdbe2c39de4afa15e123dcd439f"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e44275f19b39f1871429265a916d6978"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","2695b8d4d4fd67304462255ae7438e8a"],["/page/2/index.html","e9931722e8b788173887bd00e6e85fc7"],["/page/3/index.html","58bea082235de735ac3e2d2c2a7623ef"],["/page/4/index.html","db6085235b538cd0e8bac77d24b5e042"],["/page/5/index.html","3b67950f77177e49a067900e315dc419"],["/page/6/index.html","79ccee5a99377246b2350728ff4e65cb"],["/page/7/index.html","b900d85c3c5df73e8b0d5d2add34892c"],["/page/8/index.html","a3c6a51727c7d6adce3323b546a1b747"],["/page/9/index.html","87562c5e71f78b0ae1b59ec5e502a4a9"],["/posts/106331b4.html","cf8c511c40ae5f72067ca3a69bf45c2a"],["/posts/1185a02e.html","d228054ee5e410281db2da4a657f3cbd"],["/posts/12e06b11.html","d0a4e99eaf4b403f403b7a49826def95"],["/posts/13aafbc3.html","07b5f0dc79ff65ca2302be9808b5e629"],["/posts/167c7c45.html","f86c18156fa350c42d59bc904698b480"],["/posts/1743dad6.html","5b62693b5805c8adeb305c16b4f2da98"],["/posts/17492bb9.html","e851bcfb6ab046e7a34ba56c91108565"],["/posts/175a8e1.html","329478b21e353083f16889ceb4d8f9a2"],["/posts/1be398e4.html","fcd09fd5904007046476a36f839e3265"],["/posts/1c5a0321.html","9a72b471e61cd1680daa6a6c3dc583fc"],["/posts/1ec7973e.html","75962fe1f981862859076da32bae05c7"],["/posts/1fb82448.html","bdf1f039fcf7a119f8db389fab1b3e35"],["/posts/21f18fd2.html","a0f18a6ad4524adcea1bd067931c9a68"],["/posts/29c507fa.html","489fab604be3233896f13bc62eb324a8"],["/posts/2f34eb00.html","a2072807e012acae428fcb465643f44d"],["/posts/2f57a694.html","292f4e854b95bb4810e84d85b2ef1e90"],["/posts/320cf12b.html","f7beb1837318c998aa93e17236bcee69"],["/posts/353e70c9.html","3006725019fb28c2a1cc293ee78b0d7a"],["/posts/374b54d5.html","2594e64fe06046f684fde5d2129a79bf"],["/posts/3871b764.html","761767cce3fc938ab7b9b44402270ca7"],["/posts/3b308caa.html","32fb0aac057a58f0a878d5753d4dd858"],["/posts/3c3cdb74.html","6c92fed99533fc7a7fe391f4251a77ad"],["/posts/41f65cde.html","f3f719b11264a4230a716852a6d9f80c"],["/posts/4208fd6c.html","06f9aef03306218c54dea62578ab2e52"],["/posts/4392373e.html","a4ff95e936e98ee49974719c65b9fd2e"],["/posts/440ed920.html","81dd18db9b54d7ebcda85c1ae5e322fa"],["/posts/447a8d68.html","2d0a7c6fd5527997e12220e7e7ce4b36"],["/posts/4d2b51ac.html","31acd456769df60bdaa0aecfba0cb196"],["/posts/4db1a52a.html","f90d3f0d2f2e36577f8fc9c999806219"],["/posts/503ae89.html","a0d1ec9255b58762838b30b577b5a75d"],["/posts/518e2799.html","abb45dc92bf1c08ad00875d2850582c3"],["/posts/535fd087.html","1da78247f764091c860206ac32c8ab11"],["/posts/5923cba3.html","4f9ecd44ca5c5c6f8c1d993667ae2725"],["/posts/5c1bb6b8.html","00e51780ccb289a105e9455af5770647"],["/posts/5dc45f0c.html","4ccf418c127f0e5d99719d1f6b52fd3a"],["/posts/5f2caa2c.html","2fada1977af0f231e85d1b8549d862f5"],["/posts/616be7b6.html","d0826c1ba38cf1a04fd9d1f3c16baad0"],["/posts/62a1ec0c.html","c4d303465c2286fa6a79b147ba322491"],["/posts/69fb361e.html","ef6ec26e4bde27e2669f7f71308a18b8"],["/posts/6a8518ce.html","cf4a20fa68ee82380b1a2cab32439938"],["/posts/70685119.html","105d2180d8b26cbd52cf150da5f0dd80"],["/posts/743db4aa.html","7b2a8a92bf571a793fc163782b2d6720"],["/posts/7b67faab.html","efa483aae98b2f36fee54d193b44878b"],["/posts/7b76be01.html","b5ee6d6d46eeae00b604941172b29131"],["/posts/7bff939e.html","9c567a85be9e9bf81e9bb1f97f16a78e"],["/posts/7cc4ca07.html","d724d7c73bdbc5f3de8a824ac6aca298"],["/posts/7d257210.html","901d973556ff5ff62cc313b75a118e2e"],["/posts/7e6a5c94.html","70e7d79ce00938915474bb363a65091c"],["/posts/7ea0cbe4.html","0b8ad917fd4baebaed1af56a474b6580"],["/posts/7f382da2.html","ba474023684d8e6598b858e442aac77c"],["/posts/7f8d32f4.html","60f720b332ddc5fa4507b548eb3c5b64"],["/posts/7f92999e.html","b6840ec57c48582e00c035f28cc37cee"],["/posts/8207aa48.html","5fc00b0f9776c1bcf6300b3190d7fa1b"],["/posts/828c2ccd.html","ccc23bfafbf295eca7605d98b51873b9"],["/posts/836ea9bd.html","d0e97ff7ee47834956fc01c256d0ad8f"],["/posts/84cae757.html","7b04b124e65a88437b73e65b36982a45"],["/posts/88200036.html","925d9767649967b9e76a12d6af36edb2"],["/posts/922fb64d.html","77af886c5f68b54311cde89bce046afa"],["/posts/98332b29.html","551def972ffc5dbb8fb894fdcc355694"],["/posts/9a1a736f.html","ea12090c62fd33d2942fa4cd4102e8a0"],["/posts/9addd0bb.html","06089f0e3a264fca91b534c4666424bc"],["/posts/9b44950b.html","af19ee3df2f8ca1a3d8ed62a6eb43596"],["/posts/9ca149ab.html","6f260f07823273963a00a2cf53ccbceb"],["/posts/9e4446bf.html","237c33d9a5e4a9aa2400997b724cb29b"],["/posts/a0271e58.html","d47bc3998dd0c25f621ef8e1359bec93"],["/posts/a13c1dba.html","2ee684559d29102fe5a2f4e2996d22fc"],["/posts/a1f2a4d4.html","c8c808efba0309fcfd9818adf2f5278f"],["/posts/a541262a.html","f524876b08c7cba99ca783e4e19e3b2c"],["/posts/a5f300de.html","1641aa02470b92df4d6ec01af65438fd"],["/posts/a98766fe.html","761926885c42c61833beb057c0738f19"],["/posts/a9f63847.html","9706e0a52106e05e140daf2ba2485719"],["/posts/ad31055e.html","4181c2ab3b6865b138171c087283b304"],["/posts/adcd6e20.html","88743a99b57510344fa2ec93d3ca6722"],["/posts/b0fa4c58.html","d4872a859d7a534fadf2f3dd8dcaf8f6"],["/posts/b1168675.html","877073ad9a4e52ba728de850106e8fdb"],["/posts/b291b1dc.html","86f2b45ba9df4782e1487e31deac4ae6"],["/posts/b2feeab7.html","53ccba2e86ed6ca22b3bdac9a83dcbaa"],["/posts/b6d66f1b.html","2551f39fb1e3677c40b87cd74bb3cfb7"],["/posts/b7525d11.html","18954151d5d7fdcceb0b8520ffb7cfea"],["/posts/bb154b63.html","cf7fda78f473e4a12ee423730db780e1"],["/posts/cc1b9611.html","fdb1cc1ab45e2f7f2be3c8a464476fd7"],["/posts/cc86a40d.html","d412cee8d90b58bd65446f288ef505e8"],["/posts/d36531a7.html","853fc084d418cd3b54620f9042bb6495"],["/posts/d442e51a.html","2f200b5e2141ca3728924d8a2995e3a0"],["/posts/d7fdf01f.html","b0fcad2d6597ae596c065ba0d6022530"],["/posts/d839b0e.html","22d1a526fdc3f32d3e0b7add493b77e7"],["/posts/dcdf88c8.html","0a66d686eef8a2fd54b546825b010bb9"],["/posts/dd378ae0.html","afcbb6bcbecf01b751e2d75c829ad3ca"],["/posts/df2849ec.html","15d3ffcdd321f60431f94075c0565e74"],["/posts/e15be301.html","56c9aa0ae8f7a5b5ad9e4766215f755a"],["/posts/e2e4b4ce.html","fd68b7a2abedbf5ab3f4887ae97d1db1"],["/posts/e35ef5bd.html","489b7ff0f7e33a1e9c71f13cd0d4d173"],["/posts/e462ba83.html","edcc4210c638434ac4e27efbc3742774"],["/posts/e53204e6.html","067a995b37949e0a4c8bf7050c0fe5a2"],["/posts/e5cd9bbd.html","d2e0962bb6d622046edb580fc9e0b9ea"],["/posts/e5d89884.html","568bdfc0ccb0f0c68d44e967e2871e81"],["/posts/e7a99a5e.html","f195313dbb9e3207664329e36bfbfd44"],["/posts/e9318100.html","a6fca695aa01f81dd4c258d3d71850a1"],["/posts/ed52e6a0.html","4db53d6b65a91b7bf6f57f13cc0251ae"],["/posts/ee0ac59a.html","72ff2f49f42614ee44db4d1cb8557d49"],["/posts/f09c1ee5.html","c8f7384c27be061c3728a47373f77308"],["/posts/f1252f66.html","37b4698be319701e28d4b0a7f9317343"],["/posts/f4af26a9.html","89b2014c47ea25c730260b835f8ff702"],["/posts/fa3cd62d.html","525becb7c8c61f7b957eb1f77e5c924a"],["/posts/fb3794ef.html","666923d9d1940c66ad2a5e161c664527"],["/posts/fda4520e.html","f459af17b7662f5d32c7b025e909fa1e"],["/posts/ffdfd6d4.html","66d1c5144fb16b97bdfb5c280e8f52a7"],["/private/index.html","9709b9d437c751f2ab14cc91eb68957b"],["/random/index.html","c4e1c0415b437a2fbb772f9e90798b59"],["/sw-register.js","8555f95f60b665ba6d9b7647951136fb"],["/tags/ACG/index.html","6ffcea2c15101f49b6517dff91359547"],["/tags/AIR/index.html","4ff1177b2c703c6dca615465a525baf4"],["/tags/AliceSoft/index.html","22abf8d30e807db0d707eb3a5a958e37"],["/tags/Butterfly/index.html","33261c9cfd9e4a6097409002c1643c60"],["/tags/C/index.html","697d3984c5ebd8a027233f26ebb4717a"],["/tags/CLI/index.html","118f1dc55a45266fba206369fe649565"],["/tags/CMU/index.html","5702676eb632718eaf8794e6e8899e67"],["/tags/Crash-Course/index.html","eeea4deb378d03dffdbbb8a73a155ca1"],["/tags/ETH-Zurich/index.html","5e1a388f95b6eccb9fc94f70f62bd2f9"],["/tags/Eushully/index.html","e19d089d1e564d42ae3f2e04a2e92009"],["/tags/Everlasting-Summer/index.html","38792b69bf6acf2699ebc938bf1ee329"],["/tags/GDB/index.html","6539374007d74732c4b523896962c605"],["/tags/GRIS/index.html","033228488e8858bfecc60c4acb93f69c"],["/tags/GUI/index.html","60cdf1ff61fd46e9fc239f4c27d23bff"],["/tags/Git/index.html","14e1d359bb13a3cacb779c9af0cfa1c7"],["/tags/HTML/index.html","29bebe7a02668ee8497833d162d6f8af"],["/tags/Haskell/index.html","f838ffb2d860867a9e9f453ae4ea1493"],["/tags/Java/index.html","a0cb3a63d27505b1b94384ce69819331"],["/tags/JavaScript/index.html","61cea80a96668296779e5f84f1cb6869"],["/tags/LaTeX/index.html","78e9c03b7514eeeff57a92f7c259426b"],["/tags/Linux/index.html","abbe78e401fd6fad3e7e661f35003302"],["/tags/MIT/index.html","72507ac05392e629de410fe781af6532"],["/tags/Markdown/index.html","5b14a353acad61cf38584a94ff52187e"],["/tags/Mermaid/index.html","5bde8d0e84e6dfed15a280afc60afc3f"],["/tags/NTR/index.html","555353f0bb5a2a1dcfad4033ef7f9284"],["/tags/Node-js/index.html","69278a058830169725f2db4a447449a2"],["/tags/Pixar/index.html","1daf80937426e30ca6148fd3cc7d6301"],["/tags/Princeton/index.html","62a41f29bed57c5bcca8c0838d0e10b0"],["/tags/Python/index.html","2b90c66eb327e830d617ef6d8f809bd3"],["/tags/Qt/index.html","9230cc26d7637d5a9ed8334e1cb123e7"],["/tags/R18/index.html","7f65f74742d38eb98e525be93e44cf32"],["/tags/RISC-V/index.html","141e3dab9f4aa1dff3d2dfb93a2349c3"],["/tags/Scheme/index.html","0066967091316708481bebe835e8226d"],["/tags/Shell/index.html","242876f9142d22ab1202ebe9849cb65a"],["/tags/Spring-Boot/index.html","7a5df8567c99024e981ee2e6de2aa90e"],["/tags/Stanford/index.html","282f20b3c7dc81ddb925b9097bc987c1"],["/tags/UC-Berkeley/index.html","109fe8aa240fb22ea119e8e086e0215d"],["/tags/University-of-Helsinki/index.html","d82efc326842ce8228e7c4603de630d8"],["/tags/debug/index.html","f69a81f139c4bf4bcb81945df7ba0c00"],["/tags/index.html","34bfcc5de0f2fbcd8365dac5ab04cf29"],["/tags/key/index.html","387b1db9063b1bc03aaaf8a28455b610"],["/tags/web/index.html","57becdb5ad70e7536710d4609d51f603"],["/tags/三国演义/index.html","74769b8ea60bae05076417c08168c04b"],["/tags/丧尸/index.html","719d11ac0cbe3b98b30c8b3cdbab5832"],["/tags/京都动画/index.html","0bbc5dac301e91879ec162a5c2a142e9"],["/tags/京阿尼/index.html","00c91202796090b3d45000b533fe8f3d"],["/tags/体系结构/index.html","a8d82ecd7ef9461381ad1eadffa8bdb5"],["/tags/信号与系统/index.html","ce7cdca431cf59a2456a5f3cd218c203"],["/tags/信息论/index.html","1b463f831b30b4b38d00addbc033f026"],["/tags/傲慢与偏见/index.html","f9e6bec6f3e70a7baf85394115b6bf2c"],["/tags/元稹/index.html","d6d56e4c33368bc3b5581bd8caa430ec"],["/tags/克苏鲁/index.html","d1795600abd1a7d9cb4e03a582afd76a"],["/tags/公路片/index.html","32d53c59443722d70c18bae2ae6f3978"],["/tags/兰斯/index.html","e7f63548298da8bfa7b52c4fb6a6c753"],["/tags/关于我转生变成史莱姆这档事/index.html","faa59139db8a2621406c37c332f74ea2"],["/tags/冒险/index.html","6fa5670f0f1d9c7e1b1ecb0a4d91e12b"],["/tags/冰汽时代/index.html","b72c00410c8a1a9a076ae3ff3f68234c"],["/tags/函数式编程/index.html","f6205bf4dfd8bd6360a23fe9d34e8bb7"],["/tags/刺客信条/index.html","fa599e3481fc3c5b920a1f750863dfde"],["/tags/卖肉/index.html","07394ee58e98362ad03b5292bf50a633"],["/tags/博客/index.html","b5eef1fd95db97a44e7d7e95c18079fb"],["/tags/去月球/index.html","eb8794276362099378a157ad8729b1c2"],["/tags/可汗学院/index.html","60e89a190c62a11c6afc921307d3e759"],["/tags/史诗/index.html","149f141799adaa8f4911cc64e62bdc57"],["/tags/吉卜力工作室/index.html","610d0f3c4c6b2a78262187820ee09c5d"],["/tags/名侦探柯南/index.html","bb7d09df3b7248562ad4bf4e7a2b94b0"],["/tags/后宫/index.html","943354ede4ff786072a6b8666527e63c"],["/tags/咒术回战/index.html","51c4a4e24a9e0ee278b3e028ff979b46"],["/tags/哆啦A梦/index.html","6bc2ec1a18eafddf8ef0534475732d95"],["/tags/哈利波特/index.html","676254dfc32cdfbcb45897a085017576"],["/tags/喜剧/index.html","46877bf40593eec0cfb6862504f99969"],["/tags/喜羊羊与灰太狼/index.html","1dc93c4a155ed0fe2afc4cb9ef3bdf99"],["/tags/四大名著/index.html","793ef795119d41ba88d97f91919fe148"],["/tags/图表/index.html","b95ede8f290bc65970944d39dae856c3"],["/tags/复变函数/index.html","3f73894f12f8c74aed7dd828aa4d5e93"],["/tags/孔乙己/index.html","31430425b0cdba7ca3ea98fac4433ba2"],["/tags/字符串/index.html","7d961e50a5202e518924fbade155bbb9"],["/tags/学园默示录/index.html","ac4926a15d5d47db73af25b1e66fe815"],["/tags/寻找天堂/index.html","6498fb6a6e557bf81bc9c4c215affc33"],["/tags/希伯来大学/index.html","ab8e85850838d3c14c0343011f8a4dc6"],["/tags/异世界/index.html","9059c7dbd018b4a927f0edcbfd2e69cc"],["/tags/微分方程/index.html","1f9c3a820c3bad25720f3a52e9bf09f2"],["/tags/微积分/index.html","0773ff2540c860bae73ef4f419e46d4d"],["/tags/恋爱/index.html","fd7f9edb65deb083b1aa5bf7a7f63fc7"],["/tags/情感/index.html","abff43e322ff24b756a35f2d5057d965"],["/tags/成为简奥斯汀/index.html","9759f15492675a37e6ed17c6f48befa4"],["/tags/指环王/index.html","aa07fc9808ffceea5bcfa1a2d3d6cda9"],["/tags/搞笑/index.html","cc88ec3ef677c3ae525d3582c71f58ff"],["/tags/教育/index.html","fc5be838692324064eb5915c6f59c566"],["/tags/数据库/index.html","93480655e624828d80b97597ca2eb32a"],["/tags/数据科学/index.html","481e4fb0d93a23e12402b3aa81b50509"],["/tags/数据结构/index.html","85feeac4867bdadadb77891bb3b0120a"],["/tags/数据结构与算法/index.html","53b1d0a745430ec9304ca03a5db4f9bf"],["/tags/文字排版/index.html","8f3c059c19c3149f89adb3d13e078d70"],["/tags/文明VI/index.html","fbe65c46e49ca1a1ef806fc05e5cad8c"],["/tags/旅行/index.html","2a12f01c0c25c121c9735786168d66f9"],["/tags/无彩限的怪灵世界/index.html","1877390d1a51591ed812c8da669f38b1"],["/tags/时间刺客/index.html","368761d9580d87bfce8514b7bae1c314"],["/tags/暗黑地牢/index.html","3561aff405ad6c05eb32ce63b6731b48"],["/tags/有生之年/index.html","eddabc50160fcbd959758a7700f04392"],["/tags/末日求生/index.html","04d9bb71ff3dc6c8162ead0031f53f21"],["/tags/李商隐/index.html","5c8e0feaa614cc794941226df01e8fc1"],["/tags/李白/index.html","0256fb0ff59595ad1004782339fbe522"],["/tags/李贺/index.html","9d1fbe5b92e237f653b10c731341dcd3"],["/tags/杜甫/index.html","9734d0b54a95276d3aa4ed28a4b40aa5"],["/tags/校园/index.html","45fbf90244ef5f051b28c9864df2faa2"],["/tags/概率论/index.html","c89fba51dcabb1b2ac058807fb8f2d83"],["/tags/正则表达式/index.html","aab59c6812ce7b8fbd55646ec878961e"],["/tags/死亡/index.html","6113b26432a5401314848b584890da99"],["/tags/水仙/index.html","e27648e26198d29054c432d0ba288e9a"],["/tags/治愈/index.html","9dcef79d4e5108d6fd1b16ed258c9fd5"],["/tags/烂尾/index.html","14b2e76e4933de53ccd1861db212ec90"],["/tags/热血/index.html","0e4e92c0b4534b15dd00533d93aa5d01"],["/tags/爱国/index.html","5776aae2f838ca69816f85d0ab52f052"],["/tags/版本管理/index.html","6d038d923de8d85aed78cc72a30693a4"],["/tags/玉子市场/index.html","f092a4635097c62ec424d07d2de705ef"],["/tags/玉子爱情故事/index.html","9c25e070a3ce9304da87c5dcbdd34bc1"],["/tags/王维/index.html","7a9ab0915b4e814ed7d809ced3ec9066"],["/tags/现实/index.html","a670a73b9f0ca7464ec08c37a03ee6a5"],["/tags/甘城光辉游乐园/index.html","93a601f40681858f8d305d3f18924b5f"],["/tags/白居易/index.html","37e2e5ad53f9a543d9d11190678ab800"],["/tags/白毛/index.html","73a8b9b9875465c8b7de8305246148bc"],["/tags/短篇小说/index.html","5cf25e104883fafd67d691e3a6094d4d"],["/tags/神话/index.html","75404653d2917a771649fca85a02b583"],["/tags/离散数学/index.html","01bd56a27ad2ebb1ed2f75564b3c40b0"],["/tags/种田流/index.html","3c3ab4bd199e666391b4d859a5885905"],["/tags/空洞骑士/index.html","9fb0e5d693a88d26a9b5b5ce9c2683bc"],["/tags/童年/index.html","05537601c12f353769552594d1bab3ea"],["/tags/童话/index.html","7af4a47bcb14379cba540b5bd9bbd7e0"],["/tags/第九艺术/index.html","cba469e06bb954a2a6d335e9d2cec984"],["/tags/策略游戏/index.html","a73384502525d3c74b59f0821da07864"],["/tags/简奥斯汀/index.html","b3d6865d3bd5d3b0653e10caa4341092"],["/tags/紫罗兰永恒花园/index.html","d25dfd6afb89612ebba8036eb3210c35"],["/tags/纯爱/index.html","fd0c5ede36ca56ddc948a7b6af2bec11"],["/tags/纵使手残仍大爱/index.html","553fceb5d2e92542fb45b2264ec739fc"],["/tags/线性代数/index.html","f01f127ab7b5cc24f24cf648cff7495e"],["/tags/编码/index.html","fca2c546ca67df5c9855ad34b01f4b21"],["/tags/致郁/index.html","4e8fbe808c24fe05b9571f4ebe5a35b9"],["/tags/苏联/index.html","8a04335b528ea27b060e2efb9f5dce2a"],["/tags/苏轼/index.html","cb68375f4cad792a308b85dbf699abed"],["/tags/英雄/index.html","011ae72ca5f4fbadc5ab247f0dfb2c99"],["/tags/计算机科学/index.html","0ec5aa15a2c4ea727f0944982c66df5c"],["/tags/计算机系统/index.html","760c4dc0554bf82cd6501b352c240d7f"],["/tags/计算机网络/index.html","0dc37f812f284b52cf14d9adc6e2a620"],["/tags/词中之龙/index.html","f1d4eee20c989ef3c00a1f8527503272"],["/tags/诗仙/index.html","66a089c1cee5531580c47950ce5e9fe6"],["/tags/诗佛/index.html","b38d48f5fec2764642e0cda9e495bfc2"],["/tags/诗圣/index.html","5a027c7a3890e2267e1371158a4a1569"],["/tags/诗词/index.html","f1c8723b8a776f8c13adaa8d9c91f032"],["/tags/诗鬼/index.html","2b9b58fea259b47405fa62e47286e4f3"],["/tags/读书/index.html","76d261e0fe7ecf570eec83d4db95e658"],["/tags/豪放/index.html","faa849fab5d3c972cf8942199697c5d3"],["/tags/赫尔辛基大学/index.html","f03ba84c3a12428099548e28fdef52a6"],["/tags/跳跃/index.html","305d44d8be1ffedbefc5724cf626c7b2"],["/tags/辛弃疾/index.html","829954a6c8071b04e90003f41c796273"],["/tags/运动/index.html","0d2d166c8aaeb05f260cad1a43862d85"],["/tags/钉宫/index.html","4871d49d1ce428a315d0457158df9643"],["/tags/银河战士恶魔城/index.html","b635f8b547397ade1fbb5b35eac868fb"],["/tags/陆游/index.html","546042aa8ddcd116e8db09d8e69e6140"],["/tags/零之使魔/index.html","44316612f8881077a3f8628764aef14d"],["/tags/霍比特人/index.html","8eee501013e220c3970c87f7f739cf0d"],["/tags/飞屋环游记/index.html","4b960f4c518c23d198a2482be8eea135"],["/tags/魔戒/index.html","6a464389db5755c615ccfd3ecb233055"],["/tags/魔法少女小圆/index.html","841eb467fe6521a1ffa149e6244430a7"],["/tags/鲁迅/index.html","75943642b46f69d8c4990546d3458ff5"]];
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
