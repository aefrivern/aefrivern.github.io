/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","985f4f5538dc37077b5ea3670a10dabc"],["/about/index.html","b1980de0f3c0313e34daacd2a6578520"],["/anime/index.html","325b596041c48da6f523d169fe0d3af6"],["/archives/2022/11/index.html","f0c528a6bfe21ad0c5e076e4be55b0a7"],["/archives/2022/12/index.html","7d20b39e06d5c7407c4b3dc9e6a95695"],["/archives/2022/index.html","eb02dffdf40f640fe222aaebb33a60b9"],["/archives/2022/page/2/index.html","eaa2bb7755e6bd546090ab362d29319a"],["/archives/2023/01/index.html","8b1706759d74eb0f84e249e92f0b22f9"],["/archives/2023/02/index.html","e865ca4218758b2833170f12c6762a35"],["/archives/2023/03/index.html","f1953adaba69e9aa29d15d5d06f3a090"],["/archives/2023/04/index.html","d3afe216ef86589cc9d715bef425a5fb"],["/archives/2023/04/page/2/index.html","3a55b6916bd3870794716aa2da77e640"],["/archives/2023/04/page/3/index.html","c24e297a008d80a275b83c0d1906c255"],["/archives/2023/05/index.html","2b6b092327c69a4aeaaf2a2036d926b2"],["/archives/2023/05/page/2/index.html","8d6827b9c33725bed5a83f18ef423dc9"],["/archives/2023/06/index.html","c2595b47e41af506544717c269c4234b"],["/archives/2023/08/index.html","0f88c33af1228c9c22359d08573db25c"],["/archives/2023/09/index.html","a4abb07cde07eb620d03a65ef26b2678"],["/archives/2023/09/page/2/index.html","b9f9a4fb8216c87fb767462412dff3b5"],["/archives/2023/10/index.html","da20c4bfb8bd44339bb26a722b206d11"],["/archives/2023/11/index.html","1ac7b9116e8e2860a16e22786c1b85b9"],["/archives/2023/12/index.html","970d3d015a903a79359eb54615136710"],["/archives/2023/index.html","3c603f3eed551f8c8a795afa2dac8c2d"],["/archives/2023/page/2/index.html","642bb5d387c6e7f3f81e13f623ed4772"],["/archives/2023/page/3/index.html","37169dec14fee20e9e4f81e36fc611dc"],["/archives/2023/page/4/index.html","ccc3d07d6b9536ae33cb2dc727483a22"],["/archives/2023/page/5/index.html","6f1924a908a97a366b1b543be8983361"],["/archives/2023/page/6/index.html","1ac95cbd2d11b45b39c303b5abf7cf84"],["/archives/2023/page/7/index.html","6e686ac64397cb54f641d4336ad0fc25"],["/archives/2023/page/8/index.html","0cac1f31c0bda9ce9b5bdefae8efe504"],["/archives/2023/page/9/index.html","2845f1c91ae7d7f625c5bfb78f70d416"],["/archives/index.html","88cfd525a5d83415743be5b643b5f08a"],["/archives/page/10/index.html","78af6a61bf1431bdc4e93f0726309093"],["/archives/page/2/index.html","96e34a3bfba2cd05f9a476883efa2f24"],["/archives/page/3/index.html","6e1133b327c4b226db69354a6e0cd8ea"],["/archives/page/4/index.html","251b5f240e716276dc21b4338cf237a1"],["/archives/page/5/index.html","6bd12d1324d26493c712c24d9ab38ab4"],["/archives/page/6/index.html","d7810b6dcbc50da7d67a6b28a5eef5bb"],["/archives/page/7/index.html","3cd0103c77b818bb35486fcf9da68195"],["/archives/page/8/index.html","21c3cbc3ee44b4ed42469d1842a5046f"],["/archives/page/9/index.html","1aedd71eafc5c0f40cb07cc8677eb580"],["/categories/ACG杂谈/index.html","12ad4d338783628238bb293d1f75f5b0"],["/categories/ACG杂谈/page/2/index.html","75592f1cdbfd44a3875115d30dfdc14b"],["/categories/ACG杂谈/page/3/index.html","187bdc793c11e06e4bfb77e911de4338"],["/categories/index.html","123c3ca217f8146bd68154478aa186d6"],["/categories/学习笔记/index.html","0e0a358e00274193947d43f9a3e418b9"],["/categories/学习笔记/page/2/index.html","fda51e59fa9f05f2a1cb2444cb324f47"],["/categories/学习笔记/page/3/index.html","6dd8e5d4b797ee270effc8b8a2c25d18"],["/categories/工具/index.html","42c38b49f77d32b7422b44b99192fbc9"],["/categories/工具/page/2/index.html","4dbf4ba4442a2ce3bdf3b84dd04d1a4e"],["/categories/游戏人生/index.html","a44623e24d84bd5b1a269e3a1f6df322"],["/categories/游戏人生/page/2/index.html","0900c034d121336c5c75f0f471bc92fb"],["/categories/读书笔记/index.html","3e4702d694cc2e4af50d7fd1c2e36b72"],["/categories/读书笔记/page/2/index.html","9f3342a7ac7cee3b3b05a27f0cc21c48"],["/categories/闲言碎语/index.html","ebf52fa06907e1bd98e5dba4c401bdf6"],["/census/index.html","53d4dc2258aa923d465368206007ddd8"],["/charts/index.html","f3787c37e2082cfedb100c59cebad485"],["/comments/index.html","3e7f1d111d4b75adadf7bd7709be06b9"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","4f03d30d7035fe69784d78ef59cc3980"],["/gallery/index.html","0ab1a9f0edf823fccb5f68ba13a2d275"],["/gallery/wallpaper/index.html","800247821c563b53e4da49ff44277e69"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","874a1acbd353b8982e992ae080fa45ad"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","7468d44d7fb8147b5683caa980d5104b"],["/page/2/index.html","81d6c8d6c57eff7654b4cd5786cb4bc6"],["/page/3/index.html","8032f5d7fddf10dd42e9dee0fcee22ed"],["/page/4/index.html","a13d2f03fab07db1938fd03b0252c49b"],["/page/5/index.html","e030637e2d3223e33113f27a7f79e47b"],["/page/6/index.html","85602e87bf8cb298b6b4e88febcb9290"],["/page/7/index.html","fc136f8991cc84db8304a07a269fbba2"],["/page/8/index.html","f467983deffd4555150f0e81e634897e"],["/page/9/index.html","2eb6b9ab35f3ae7bddb6a3cc26bab245"],["/posts/106331b4.html","bf2f9e68dc08483091110558e7eaa769"],["/posts/1185a02e.html","83cdcea050884dc53811bdf1c582eb58"],["/posts/12e06b11.html","8e95c6f978ec2cf45a15c2c7213f22c0"],["/posts/167c7c45.html","0a772976e93984f1b611977a32823de5"],["/posts/1743dad6.html","3ce131d2eb61a4dd7498a6bd0ae6a1af"],["/posts/175a8e1.html","64734c58d69c18506a7be6ff845e2f7b"],["/posts/1be398e4.html","c95b00a2a205f75ab84f00c5431ebefe"],["/posts/1c5a0321.html","c00de925b740417493403f465b703a99"],["/posts/1c5b1e9c.html","eaae307057d49638b7173c0a2e572bd6"],["/posts/1ec7973e.html","f6d7bcdbcc0eeada58ea5aeb9258595a"],["/posts/1fb82448.html","7e6915186fb0b897af0b16c758260bf1"],["/posts/21f18fd2.html","3c06e946a301a6a924515e4a6a715f84"],["/posts/29c507fa.html","663c561bc6b7d18afc14da8a7fcd76a4"],["/posts/2f34eb00.html","f621d3d6b21d7ed81952d56f02930ad0"],["/posts/2f57a694.html","0cb53cdb8bf0f7a92429a54c8c47e567"],["/posts/374b54d5.html","20588230adba5c0d635dc6376fb0fea0"],["/posts/3871b764.html","1d1eb00ec672b9bc24e068f94560881c"],["/posts/3b308caa.html","775044049ac40c553de08a09c54fa3ca"],["/posts/3c3cdb74.html","635342d0abe717aa7c4f1e79da5b1dfd"],["/posts/41f65cde.html","df0f4f824be28c19044ae73ac70c3f24"],["/posts/4208fd6c.html","1c037e004c26d2ef6da773350b1c4184"],["/posts/4392373e.html","4d581c14b449350dbabd4ea4bc969375"],["/posts/440ed920.html","84fb11c32649cec02d08b68890884d03"],["/posts/447a8d68.html","ff575dc15c797aaa3d9047f163ac4c00"],["/posts/4d2b51ac.html","08b7dbc4bcd345ac467b11c821628d5c"],["/posts/4db1a52a.html","abce684a283722fca2e5e6dd1c9e871c"],["/posts/503ae89.html","3654a279acc4060914e297eaca87dd24"],["/posts/518e2799.html","4cf6b92be5df965f6eac86b6491408da"],["/posts/535fd087.html","6cb92f486fdd511c62af569b1f574476"],["/posts/5923cba3.html","675ae824a28b2c337f1844cee678bd82"],["/posts/5c1bb6b8.html","37c85b3ab69def1564c02833a2df8a3a"],["/posts/5dc45f0c.html","0dd71282f68d299298bd9891cda6356e"],["/posts/5f2caa2c.html","72e0892b733ae604b49c660beb5f3b68"],["/posts/616be7b6.html","36bf78dede5b80b3553a94d22f9bf713"],["/posts/62a1ec0c.html","2ffee590ab182036834a30eeb05b6216"],["/posts/69fb361e.html","ce2139f0fed02d3a48ca61af6dc9fdb4"],["/posts/6a8518ce.html","0082d6abcdd8fc56af21ce388b7066b4"],["/posts/70685119.html","13d87e3d3b794b267aecfadac0f5ff16"],["/posts/743db4aa.html","da35109614ff016ade0edd92763de096"],["/posts/7b67faab.html","599108b74ca8e881ab35b66bf0fcc9c4"],["/posts/7b76be01.html","d96debd7b292de966c9ce1dc5275023c"],["/posts/7bff939e.html","8ffd8dff3db0321d91d2380397f4c68c"],["/posts/7cc4ca07.html","421d4e4675ec666cc7b547f96d73c4e3"],["/posts/7d257210.html","7e67c88dff45d090a16194873b33c859"],["/posts/7e6a5c94.html","44e501ee0063954b8f30f7d7e9b15f78"],["/posts/7ea0cbe4.html","d10330e1e7f883171a282d349cb4de90"],["/posts/7f382da2.html","ef0da9550e84144a35dd6d1d05681ae6"],["/posts/7f8d32f4.html","fce3b8cb708614a42d192c5bc2438fe3"],["/posts/8207aa48.html","1f53bf731ad4a2a73083336e5da77a87"],["/posts/836ea9bd.html","8580101b08e1bdea5282fbda07cf99bd"],["/posts/84cae757.html","bab1c4f1218e0bb4d940f43eb5c702c4"],["/posts/88200036.html","bf928130d360b41eda74b15e5dde4155"],["/posts/922fb64d.html","f99e25a63b64b25bbebafe24e6c3fba4"],["/posts/98332b29.html","169a838a5d15f9dff0b038d0d5e50e97"],["/posts/9a1a736f.html","af5cbbfbd3117cbcdf6f2412bae841e0"],["/posts/9addd0bb.html","de9636bf623b836543b374299e72e1d8"],["/posts/9b44950b.html","9a874316257f6730af36bb9acc38bcd8"],["/posts/9ca149ab.html","ae22c3ce50e604af20cfeb30d3f81e38"],["/posts/9e4446bf.html","e12ef9f32646bd04e5fdbc7fdb09f85e"],["/posts/a0271e58.html","022605c900be1ceea2e72458d97bd890"],["/posts/a13c1dba.html","bfc6581c9bc9629b82f91cbe4aaf8916"],["/posts/a1f2a4d4.html","c4db3d1aac9a42ea695445b1764c1b05"],["/posts/a5f300de.html","d23f77cbdf103ece4d2caf3c09451a7c"],["/posts/a98766fe.html","e24608cb4e2e60004f027a4978f44d86"],["/posts/a9f63847.html","5d53725e7220a2d663379b62c1caaeae"],["/posts/ad31055e.html","954991fd53226da08656f448494330f9"],["/posts/adcd6e20.html","9005a6133676e4a3f0fbf965caa7726e"],["/posts/b0fa4c58.html","5967258b752a6e51867733b2011e541d"],["/posts/b1168675.html","c6103162807b31d1a9dd04afcbf41ef9"],["/posts/b291b1dc.html","54a7d1ce21005c615f2535ddd0e0a994"],["/posts/b2feeab7.html","98f51f14474f6875c3166a8643111bb8"],["/posts/b6d66f1b.html","65b53eacf7cb634d89abd2a3eea1ef40"],["/posts/b7525d11.html","247862bdf66fda7fdf739a7dd2a3eeee"],["/posts/bb154b63.html","f26a1311eaf379f5e4b2647231982e1b"],["/posts/cc86a40d.html","e5a4d510913462352f2df525e1c49878"],["/posts/d36531a7.html","294d5350144ba46e0cd9659fee21f852"],["/posts/d442e51a.html","482ddab90c911b90eadbd2a719951639"],["/posts/d7fdf01f.html","c9fb630072a3e68b4107607d15d34ce7"],["/posts/d839b0e.html","11f50b4642b8cb89e8abb58817f7aebc"],["/posts/dcdf88c8.html","11f3b90de714a8f49d6f391e0b071662"],["/posts/dd378ae0.html","52d6861a07b27767d99c8c5d12bd1a2c"],["/posts/e15be301.html","f33e12b4fa713dd897bbb0832ee8b1fc"],["/posts/e2e4b4ce.html","e6a69fda61a150f6f2be68a04b30cee3"],["/posts/e35ef5bd.html","cd3a13ef5f7c2879a5433c5b41836594"],["/posts/e462ba83.html","d7676a6dff9fb5b122de6661aebb5885"],["/posts/e53204e6.html","aea3b0409e986e2b2cef50f20dbe9a04"],["/posts/e5cd9bbd.html","34c0e33283878a728f75c65d8482abb0"],["/posts/e7a99a5e.html","a1d1a70d44e214725b278b6f47031898"],["/posts/e9318100.html","8f4275525c5c387fad046e9d8b922cb4"],["/posts/ed52e6a0.html","153317153ccdd5ade39eeb72df946014"],["/posts/ee0ac59a.html","ec6b60823c5c584bd311162ad6a4b983"],["/posts/f09c1ee5.html","7acc79ceb7367297a590fca6532c137c"],["/posts/f1252f66.html","25b7421c5f9d367fc4eeaac074176bb2"],["/posts/f4af26a9.html","6df17d7e8510511ded48a671ef1b1746"],["/posts/fa3cd62d.html","be13c8117c1dc504d8208586e2229e97"],["/posts/fb3794ef.html","debfc139ac5b51c2bb7f1574cc7f6d97"],["/posts/ffdfd6d4.html","778ca55ea557e78224a4810c41fad699"],["/private/index.html","dee82d804fcb68635769d8dd82f486b2"],["/random/index.html","8c6710e9bfbac9d398c1aa3c8a9f0f2a"],["/sw-register.js","6f4ae37e921af2d508625852614e2d08"],["/tags/ACG/index.html","fd8079bd53dc3ac04b1cfdd0f5becf8b"],["/tags/AIR/index.html","4278b4b8f2b42fa1c6c3eb5d56fb5b7e"],["/tags/AliceSoft/index.html","84ca72d72ee2e47621fa478e0de0321f"],["/tags/Butterfly/index.html","383b8f4350a807233f054ce46060cac9"],["/tags/C/index.html","aa53687bf0af242ecac14520390e2f32"],["/tags/CLI/index.html","b98c82203d035c77f5d15d57a4dada92"],["/tags/CMU/index.html","f58285a59527db7b4cdd9b1225efd12c"],["/tags/Crash-Course/index.html","54b8933a8df032b3626be2bd1e4c2453"],["/tags/ETH-Zurich/index.html","93520d2f3fe6c7364208b46c7309f1c6"],["/tags/Eushully/index.html","5a1b5775a7b28bb3b8752d554ccc4417"],["/tags/Everlasting-Summer/index.html","1ef3eb8d59aa64f8fca9bc450f8896b3"],["/tags/GDB/index.html","78d276706a2bd14188641fe559334f58"],["/tags/GRIS/index.html","2bd4e2f80e0a29e0443f18e2af6710ca"],["/tags/GUI/index.html","40900192e43cdcbbf17540d8f002de8c"],["/tags/Git/index.html","5e451b067638654d5f35449e39e9e5e1"],["/tags/HTML/index.html","93d45e0aa374f8695cfa302db8268fd7"],["/tags/Haskell/index.html","e8c2dd1f2ebc850827e637c23007c37c"],["/tags/Java/index.html","27b8edd1d9e21b67ce22c5c5e7f125b3"],["/tags/LaTeX/index.html","13c5a1b0df73f5f1028005e280900ee9"],["/tags/MIT/index.html","13326d88de80f2ba84b61b30da0ec2bc"],["/tags/Markdown/index.html","706e35827fe3008cff22484bb4fd29c9"],["/tags/Mermaid/index.html","0568e492a46eb9e90f5c784d35c7aea4"],["/tags/NTR/index.html","b92a7e2ed870572421ac2ecb21ec7961"],["/tags/Pixar/index.html","71e9288c80750262b5bbb72dcfffa3c1"],["/tags/Princeton/index.html","a3288e449ebee7eca1d484bb079d6aa5"],["/tags/Python/index.html","58cb31db28e11d1238464db871c93f30"],["/tags/Qt/index.html","a82f17b01ffeeaf2a1815a59e6d60bc9"],["/tags/R18/index.html","2f5c86f879569aab8458f4cb5ff355d8"],["/tags/RISC-V/index.html","60352c074850baf7d89b870de2e2c322"],["/tags/Scheme/index.html","1502580a8167b976373cb9f7c933dafc"],["/tags/Shell/index.html","f7c85fa6df87789075e06ef98f7a6a15"],["/tags/Stanford/index.html","5311abf14785260f35557f1091039cb7"],["/tags/UC-Berkeley/index.html","2469fbe07813ca0fbd24497982a4ec6e"],["/tags/University-of-Helsinki/index.html","7b823c3858ecc7453c8ad2456a9c6d58"],["/tags/debug/index.html","0e38e47a34eefc0b498a595abefb2389"],["/tags/index.html","814d88d99775052ddb3f14bfbe34d563"],["/tags/key/index.html","e5c1076b94b99b59e3d8d4df3687447a"],["/tags/web/index.html","2a2b531639c2bd0b856eacf955a62eb5"],["/tags/三国演义/index.html","3ff896eec4612d78aeab563151186f27"],["/tags/丧尸/index.html","bcf575ed85f9df7223d15c778dbbc356"],["/tags/京都动画/index.html","133907ad31e1b08c2e29b19ad62a8e58"],["/tags/京阿尼/index.html","edff17c769ce1105d67747bc60607388"],["/tags/体系结构/index.html","db765e6a9feb94ffa786f38692008ea6"],["/tags/信号与系统/index.html","74ef29bc9cac62f70be3930ded08a4ed"],["/tags/信息论/index.html","53cb6ff89c635b9fb99f62549f531d02"],["/tags/傲慢与偏见/index.html","027c3f34d429712bd2fb9cedb6f68777"],["/tags/元稹/index.html","c98ff3bbcbf18a382d16c8811d50fabe"],["/tags/公路片/index.html","724f729bb7cdf572c77dfda90c30bae4"],["/tags/兰斯/index.html","6e09c264d9ee32e615c529ea41084f89"],["/tags/关于我转生变成史莱姆这档事/index.html","463e7925dc6be90c8b3513203c143997"],["/tags/冒险/index.html","b4942b44d124d8a85a3e4a9587ae406c"],["/tags/函数式编程/index.html","2b555c4361809cff34f2b7684e910a29"],["/tags/刺客信条/index.html","c49e1c12e9106a941472cd947e3ef0a3"],["/tags/卖肉/index.html","6daa88c340d65e0e7c544676ddb32c8d"],["/tags/博客/index.html","d23fb2a6cbb0567d934cb26dd28f1d40"],["/tags/去月球/index.html","7dd03bc4eda9c9954ebb1082db681a5f"],["/tags/可汗学院/index.html","c175b821c8ab04874cc3dd5a2fd4b001"],["/tags/史诗/index.html","c148b6f3a49588195715630755c4a814"],["/tags/吉卜力工作室/index.html","d99beed78c66487445b0b7eda41d68dc"],["/tags/名侦探柯南/index.html","ceb12c82212a257780fb0d9ef7496ebd"],["/tags/后宫/index.html","54c76fba7925e9bfb6f3051b8f3ee003"],["/tags/咒术回战/index.html","268b85d6c72e29cde2f4be11a01b81f2"],["/tags/哆啦A梦/index.html","a0125f03f2598d4bf749d8841286bdb6"],["/tags/哈利波特/index.html","f70997eb7c4df66fcd7743a645cd2dc6"],["/tags/喜剧/index.html","419d6ee9a7f0999111ca43b550cd4031"],["/tags/喜羊羊与灰太狼/index.html","756382a52cd197a92eac076efbc0b094"],["/tags/四大名著/index.html","82e9f17c7e7263f546a677acf2f52733"],["/tags/图表/index.html","fb85c9d1d49c20c27ccf17a7d3fc0824"],["/tags/复变函数/index.html","f42cea70c59479939836b5b8abc452b7"],["/tags/孔乙己/index.html","8feaadbeb6a3267a30cd49999eaba9bb"],["/tags/字符串/index.html","f354f2eb3e7ea85d8a0cf70232b1d937"],["/tags/学园默示录/index.html","ce597fa3adeaf72dc09cc59d35662cac"],["/tags/寻找天堂/index.html","4af11f0d364ccef658aacb663538c1ec"],["/tags/希伯来大学/index.html","29c19bc60dfc27c0be5d5efa29230e46"],["/tags/异世界/index.html","9491df4b16bc7ff4c5d56c8c90f779b8"],["/tags/微分方程/index.html","11b3b52c817e570f26f84c524f698d6b"],["/tags/微积分/index.html","0c371f64e71a91770d6845c7584df082"],["/tags/恋爱/index.html","5c63774b408a8960169737656ab1884f"],["/tags/情感/index.html","d5f837be6472ff994b002ff85bd161fd"],["/tags/成为简奥斯汀/index.html","b0c8f4954f72b86a6a8989f82140c96d"],["/tags/指环王/index.html","62e901f8b859d6d201a14ad95435847c"],["/tags/搞笑/index.html","af7551bf19555dbdc3e9cbb2a4b9a450"],["/tags/教育/index.html","c2f89d8abccd4471b48ba7713cf431f0"],["/tags/数据科学/index.html","2ffd63a51b423de22a04200e15e12f1a"],["/tags/数据结构/index.html","c858b9fde4c1e901634b57fd6a5000bc"],["/tags/数据结构与算法/index.html","c154f765f2b676e00a62c5b18947f2fa"],["/tags/文字排版/index.html","27da282ba43278cb4cbcac3b573a09aa"],["/tags/文明VI/index.html","e4b25b2ada2d2ec1f03cdd4c9119982e"],["/tags/旅行/index.html","b880b8608f17c12d9583c24821389481"],["/tags/无彩限的怪灵世界/index.html","1aba9b27e7971fe75232ad3a309f02f6"],["/tags/时间刺客/index.html","7d2586835470a055fbf2be4865e01d7d"],["/tags/有生之年/index.html","bead2f2cf3d0e99e313a6626fcb0660d"],["/tags/李商隐/index.html","f10f600360a0fbe8a1e9693fec7e5593"],["/tags/李白/index.html","1b7740e3dc4a34e44a9f5cb859313a46"],["/tags/李贺/index.html","9226ca5bc73afe04f6ea786f2c4f7db1"],["/tags/杜甫/index.html","47e526559e81ca513374fb1cfeeda3a5"],["/tags/校园/index.html","b47894361e1a06adca0c598d314258a0"],["/tags/概率论/index.html","9164555f0ef063c9d3872f00cb96f438"],["/tags/正则表达式/index.html","2b41a8e6d9432be1d2576962620eaf18"],["/tags/死亡/index.html","209847649553bde9a84e284314ee9e99"],["/tags/水仙/index.html","7be6bdc9da5c01e75fe96f5a89d4b14f"],["/tags/治愈/index.html","47cb9f910268afb17f3976ea91058759"],["/tags/烂尾/index.html","f6bb2ca920c127f78166eefdf3b4679f"],["/tags/热血/index.html","fa77f39385bdaa28825f8fd6798df552"],["/tags/爱国/index.html","99febed2e6bbaf7f81ef8ac1971d5592"],["/tags/版本管理/index.html","ecaeb3e990827685b4a34a4955afddbb"],["/tags/玉子市场/index.html","1078500733dc3c0aad9837b92e747fde"],["/tags/玉子爱情故事/index.html","8d19294644fcbd12f90b0370589cb271"],["/tags/王维/index.html","90c5eaeb64406baf12c1398f4a716d52"],["/tags/现实/index.html","eb6295e6368650ef165b711bfb19cc1a"],["/tags/甘城光辉游乐园/index.html","8baa6dbb9afee4a55bee36c3994b75cc"],["/tags/白居易/index.html","6f974adece3c62a2c1e7d6232d2344d4"],["/tags/白毛/index.html","14afd3eb1449d95d6494c814e33820e1"],["/tags/短篇小说/index.html","acc133ea3269f8e930e92f8c97f86354"],["/tags/神话/index.html","85129cd0900f6827fdf237d5e1cc18dd"],["/tags/离散数学/index.html","94770b0a0a2dd06e03972843a8274844"],["/tags/种田流/index.html","c599c5b3dd6214e239b7841f74311a53"],["/tags/空洞骑士/index.html","b6df2572ce367061cb954ba330038c15"],["/tags/童年/index.html","def90ff006d006220adceb7236dd14b1"],["/tags/童话/index.html","b08a05ea12596bc7fd9aad3dcbbdbc70"],["/tags/第九艺术/index.html","391069e7066105cc5a04106c172c2f83"],["/tags/策略游戏/index.html","6a3985947b148ad73254363023c1b9f9"],["/tags/简奥斯汀/index.html","a67df27890b6cd0ae380e8e84f5ebc0d"],["/tags/紫罗兰永恒花园/index.html","9de3167c8820873b7942a797d53fae11"],["/tags/纯爱/index.html","0e6d52e9269865fa5ff1a79cf3e75b24"],["/tags/纵使手残仍大爱/index.html","b1b1179340f0987d9386c37799003f1f"],["/tags/线性代数/index.html","13bb441809aaff96d7e0474d4e9923d8"],["/tags/编码/index.html","ce84735bdd78aa35f61bfaab65eb8f53"],["/tags/致郁/index.html","73bc8d3d467cabc0142432020db9c95a"],["/tags/苏联/index.html","f3c8d826f7fb73c820ab6653eb1f9caa"],["/tags/苏轼/index.html","0892f124efce94e50ab53c76d287edbd"],["/tags/英雄/index.html","fdfb565476135c62b65b127974f1f653"],["/tags/计算机科学/index.html","6f54c021c26f9aaf4ac5cd0360a6244c"],["/tags/计算机系统/index.html","3430de38af7c1b07a8589907544f3492"],["/tags/计算机网络/index.html","3d17ef5ecceee54179e4e53222e2d2cf"],["/tags/词中之龙/index.html","bf7af3f8edbc92c88f40b4c50ffb4247"],["/tags/诗仙/index.html","30830c3937cfe69e63b769d27e768092"],["/tags/诗佛/index.html","90f4b90adb26af9d72b64803a448b820"],["/tags/诗圣/index.html","d410a3b04d8a4dec352d4f7f47f69542"],["/tags/诗词/index.html","378ade7c6aa2bf5a80f2be1ceb1f0d72"],["/tags/诗鬼/index.html","1fb42f4f04de016af29b6e574ffd957b"],["/tags/读书/index.html","d55e4b05d37aae35c7820210ed4da700"],["/tags/豪放/index.html","d03c004612187359abdc5a6f146634e0"],["/tags/跳跃/index.html","5ebd4a06f66a8f54da927df12f2a938f"],["/tags/辛弃疾/index.html","09dd718cda3bb8c3f91c1f0b41b6af75"],["/tags/运动/index.html","63dc3d22e73f778b51dcb31914c51460"],["/tags/钉宫/index.html","db06d291a2a26f942fd9a19c69866617"],["/tags/银河战士恶魔城/index.html","04a50e68d2878e1ed5a2db58c1c17e38"],["/tags/陆游/index.html","a7ef1150bd468f8dc1530288f5d33b3b"],["/tags/零之使魔/index.html","82ddbdb56af74973f242451f74aca0f5"],["/tags/霍比特人/index.html","68a4914a4a8aecfc095258f384021c65"],["/tags/飞屋环游记/index.html","7b52c429cc6a0ec978cf84d37f1c8351"],["/tags/魔戒/index.html","943f97584f5684e4c16bf1472b188485"],["/tags/魔法少女小圆/index.html","b4d64ba75e2e3bc00ddae0eaebe5b0d5"],["/tags/鲁迅/index.html","f6e65454905afb0ef5ffc9d04d6f96c0"]];
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
