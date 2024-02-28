/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","217c6d5178562df2cb200d06a91465b7"],["/about/index.html","e8e91776ddf2fce4756024d4d6efd5ea"],["/anime/index.html","9bbb7763c148596908bd6520c62466ba"],["/archives/2022/11/index.html","d880ec5b0989f98ca7c2c5d787ecf29b"],["/archives/2022/12/index.html","965859aa3b97c014b08da13f1a06b6dc"],["/archives/2022/index.html","35c1abe87a318a60f90806ce9012dc58"],["/archives/2022/page/2/index.html","15b8bd322557920b02e1ba9246aea911"],["/archives/2023/01/index.html","d81edb5b8cfff1b6e3cf2aeafaec7c9f"],["/archives/2023/02/index.html","1f07272a5eb041367f0aa230066ded2a"],["/archives/2023/03/index.html","73406edf63105a1341c9ec2d20355039"],["/archives/2023/04/index.html","0c501620bc443cf1452a50cd9804650a"],["/archives/2023/04/page/2/index.html","113cd2f88c11945ce3aba465b95b5fba"],["/archives/2023/04/page/3/index.html","882a2d88e4fea4359dc9d003140bab88"],["/archives/2023/05/index.html","a1160db72ea1e5cae98bc07cebebafff"],["/archives/2023/05/page/2/index.html","84205b3a37ab353fff3e0330a73d2274"],["/archives/2023/06/index.html","ffcba9136f61abdbd886204aa82f224b"],["/archives/2023/08/index.html","4b4a24b773793463751a9da7bd23e879"],["/archives/2023/09/index.html","b9a7fbf5e63db4113dde0d81f92e40dc"],["/archives/2023/09/page/2/index.html","56f86ce55c106d31b1668e05722bfaa3"],["/archives/2023/10/index.html","c7fdda6670f4ee14a9c22925aae8e911"],["/archives/2023/11/index.html","6281f1b54fbff1ccc491a823d145708e"],["/archives/2023/12/index.html","bb5df326133fd53f33168e0143e7fd91"],["/archives/2023/index.html","210b2a33d991723b0a541d8347223eba"],["/archives/2023/page/2/index.html","e1092a24e019b84083365d1bf55a586f"],["/archives/2023/page/3/index.html","2cb43435fa78c1249b5d2856b2f1d7b1"],["/archives/2023/page/4/index.html","5ec4d47e1e009d4859bcbc4b6c207af4"],["/archives/2023/page/5/index.html","5d5661ea34fc6b96b1968141394f5e31"],["/archives/2023/page/6/index.html","1186ad11c298e4d44796f1947c75f377"],["/archives/2023/page/7/index.html","3244387a07bd205eda6c5ef1826e5633"],["/archives/2023/page/8/index.html","65b602d3e87ad5bf470bfe46caa310b9"],["/archives/2023/page/9/index.html","8a0dd2f8437a946f0f5faf697405c4b7"],["/archives/2024/02/index.html","36ccf71400d494564c272c61844882bb"],["/archives/2024/index.html","be7d2579d3d1ea083d3cfecc467f9811"],["/archives/index.html","7715a4e54887fac656be014b5b8eefc0"],["/archives/page/10/index.html","6ee24da1c1b1b98cf63a66362dc7744d"],["/archives/page/2/index.html","bfd064203bfa197133ae881346dd58bc"],["/archives/page/3/index.html","c51e1f27978a5a578578fbabfc83329a"],["/archives/page/4/index.html","183d9fb09c3ed7ff37bf8dfa2df0640a"],["/archives/page/5/index.html","fa7dfc014ab16429e6ebba6a4b285656"],["/archives/page/6/index.html","8ec869465ba65c441a670639ad1f7639"],["/archives/page/7/index.html","d958191c7a5b66fd87dcbd53fc9029db"],["/archives/page/8/index.html","92fec492b4374584d9c160d5d07c0dc2"],["/archives/page/9/index.html","37bede0f0e82085bc1cc71c15b45b053"],["/categories/ACG杂谈/index.html","b204f39f4ac184f9799b31b2a42359a3"],["/categories/ACG杂谈/page/2/index.html","0f6771136d2e1a1c77e07c5099e74946"],["/categories/ACG杂谈/page/3/index.html","ccd632a6fe7baef054bdef354d965fd5"],["/categories/index.html","17dc174be0c6e26f0dbbd1be20a9c81b"],["/categories/学习笔记/index.html","ecb2a467885aa94ccc290a01a49a1832"],["/categories/学习笔记/page/2/index.html","abb18175e927e38634a37de05545122d"],["/categories/学习笔记/page/3/index.html","3190cdf9bc0d488e43e87912d7801f93"],["/categories/工具/index.html","0034b504fbc5e3fe206faca5fbabac18"],["/categories/工具/page/2/index.html","9b35a49a94843075e7259cca639a94b5"],["/categories/游戏人生/index.html","eaa36fbad0940398cd868cbcaab1abc3"],["/categories/游戏人生/page/2/index.html","2f5c2f084d49c31d25a0b006e04949f4"],["/categories/读书笔记/index.html","965690cb61fea379b69753eaa8b81bfc"],["/categories/读书笔记/page/2/index.html","0ea7017034017ccb01d52ccd159f4cd2"],["/categories/闲言碎语/index.html","dddcf670f21f6922bf4b402c0f473966"],["/census/index.html","8b5e11333c43de609ffd1259e0ee26ec"],["/charts/index.html","788522f99a88c9f28294e973e24b4d1d"],["/comments/index.html","59573bcd34e5c8ce4f88e295d2ef78c6"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","2559f48137fa5ef570ca1de178cc4a06"],["/gallery/index.html","de8fe9fce8f4666d7b8b12a04e3ec02d"],["/gallery/wallpaper/index.html","8dd26927596ca41fc837bfc2290c6543"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","64fff534e4988b2d4f6e450ae7d479fd"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","fea962e5d7120ba81f9477603a114949"],["/page/2/index.html","1488353f4d9a1f1feee8d2683074f7ef"],["/page/3/index.html","1b3146e809ab052a1a64eb1cc985cb42"],["/page/4/index.html","f89feb731a2fb2ab4f9b7494d77beceb"],["/page/5/index.html","8b68b799c5bbf50bb28b0de2af06acfe"],["/page/6/index.html","4b60ade7b52c305280cfa2f53f61fd9c"],["/page/7/index.html","1c4aaacca8f08073b7e3f23751fe9805"],["/page/8/index.html","7ddaab456a0f2530058cf9f4681d50e2"],["/page/9/index.html","3e7846ee14459d6caf412871ec8d8fa5"],["/posts/106331b4.html","5fc3817d9ad3b029d35334512d60f1ab"],["/posts/1185a02e.html","7a91fee55ab513a3b263f99c1b62b769"],["/posts/12e06b11.html","bd8f22e377b357377255df72bf540abe"],["/posts/13aafbc3.html","c77dbabc7153dc9a2e9988a009aca1e4"],["/posts/167c7c45.html","761b9c53883a398f3b6db75a429fd2fa"],["/posts/1743dad6.html","20e99d6124ee27ae6f89399de0fb6d48"],["/posts/175a8e1.html","f97e8b1750e10256f07fe0ce1e2136f5"],["/posts/1be398e4.html","891844f21f74e2ed9088e49c876e67e0"],["/posts/1c5a0321.html","f02a08cf11d1b2a061540c9ce63d37e3"],["/posts/1ec7973e.html","998b080600a10f64f32e216e80f7ddf0"],["/posts/1fb82448.html","b5c359bd35d3bdedd5ff159dd5be3e13"],["/posts/21f18fd2.html","b9a4d35894b9ae657a63a41c4c8d4bd3"],["/posts/29c507fa.html","df4f9fd3ba9b12329586f4e59beace5d"],["/posts/2f34eb00.html","ff55f89359a652c7471cfb9bd1e03536"],["/posts/2f57a694.html","98daefcd253307b37ed65b91f7b89804"],["/posts/320cf12b.html","a68d97e41f4b109b303bbb65c6b6e674"],["/posts/374b54d5.html","e0684d584834a4d68d6b5237870ff2d5"],["/posts/3871b764.html","bdd985396b93c3785882d44cfd98f469"],["/posts/3b308caa.html","bea4904abae0f48c4f182bb5a5cffaf7"],["/posts/3c3cdb74.html","fb1913f5090d00e1537c79f7faa36e84"],["/posts/41f65cde.html","b6fbeea0d27a4fcd53d9bab0def9184e"],["/posts/4208fd6c.html","b5b11eb376e4f67163688bfd85bf8d4c"],["/posts/4392373e.html","055f8acb5354e82681447fd9c8e1ad0c"],["/posts/440ed920.html","db2b8ea34d2d7a6f012732eac4c4b0f5"],["/posts/447a8d68.html","f004e679c5f3688cc258ce428dd83320"],["/posts/4d2b51ac.html","d265be8d8d29b5c62f3c8d02bb694248"],["/posts/4db1a52a.html","c052e0874c00f7e0926e97e7286c2f7b"],["/posts/503ae89.html","34e3ac1033be57696aecf7994b5b8918"],["/posts/518e2799.html","ee7c1eed2e9f34b344c8ea41c916af99"],["/posts/535fd087.html","da1d1f066dac14405bd68eaadcc3dc0e"],["/posts/5923cba3.html","e827e1bcd3b6d2f27581cf1fab92512f"],["/posts/5c1bb6b8.html","db912858ce58e52b46996c7e1e515d21"],["/posts/5dc45f0c.html","db538cd1cb012e4643811e77013c7531"],["/posts/5f2caa2c.html","69868946df17951298a2679426680f03"],["/posts/616be7b6.html","ad4cf47691753c564b25aada4969de1f"],["/posts/62a1ec0c.html","4716f66b7b81ed37dd80503790fae1de"],["/posts/69fb361e.html","169add6596dd6d7c9f8bfd2a5708e4ac"],["/posts/6a8518ce.html","50b1fcb79daa9b31965de8edf2161fac"],["/posts/70685119.html","036648dc87c9780406468ba73f43cfe0"],["/posts/743db4aa.html","cc9657ab549b56577a870fc594740564"],["/posts/7b67faab.html","d492bb85625b7882383d6efffff535fc"],["/posts/7b76be01.html","baa8483c3762b64a7ca8a19a4eac8b86"],["/posts/7bff939e.html","4228f485374aaa63b8f36a63a351377f"],["/posts/7cc4ca07.html","40e58998c2792dd2d4a5e8ff637181bd"],["/posts/7d257210.html","2f88aaf41582447bb29a153344d460ab"],["/posts/7e6a5c94.html","5f8cba9b41fbc98b4374181b504f6ab0"],["/posts/7ea0cbe4.html","e2707c782020c927d1d7a3c91269664d"],["/posts/7f382da2.html","621977463836b3f4934e34412f3f04c3"],["/posts/7f8d32f4.html","06685d62d03b732f986849b47de3462a"],["/posts/8207aa48.html","c61aaddbb61a3d2c8aefb368b010be40"],["/posts/836ea9bd.html","55f9aa60f575a314b2e47ac7d788b959"],["/posts/84cae757.html","76d110b2172d6c7d0730b8ba76d3e5a9"],["/posts/88200036.html","8b1074278f89d00119731a2e93d80dc2"],["/posts/922fb64d.html","1d524cf2ee488977e7cc43a2eb1ef5a2"],["/posts/98332b29.html","0783202cd3766c83760801aad8fb17fa"],["/posts/9a1a736f.html","1a60dd19eb441853244eb3392ac13872"],["/posts/9addd0bb.html","36d1b507e2a2c734899fec9de9b6d969"],["/posts/9b44950b.html","ca52a93281dbf7fe90c1a6dba3f7d214"],["/posts/9ca149ab.html","6f780611e35d3839696f680655af4529"],["/posts/9e4446bf.html","754dc6bf73ed7b993b7c2b20dd649489"],["/posts/a0271e58.html","17cc2ed42f834f7c7814465b7a358b79"],["/posts/a13c1dba.html","ae869cf4eb32215f47e1c88f82d9ac91"],["/posts/a1f2a4d4.html","a7f8f249b3e2f209cf2573d4407d53c3"],["/posts/a5f300de.html","def5cc94d4992fc606bb06412126d471"],["/posts/a98766fe.html","1643a21d3c363ce8f3632d5d2b9725c5"],["/posts/a9f63847.html","4678a0c0076786abb616c5d7b74b7796"],["/posts/ad31055e.html","e963869844e3f0807fd17b487eeeec8c"],["/posts/adcd6e20.html","a2cab432b13bee3f32368e948bffd942"],["/posts/b0fa4c58.html","1c806c8dbc73e900710f0f67e032fd66"],["/posts/b1168675.html","244566ad7e625f0f957d7482f7fcfc9e"],["/posts/b291b1dc.html","539918ea89f83170bbf889a6706c93c9"],["/posts/b2feeab7.html","5fa808ebdb82a00eaec27bcc648a2952"],["/posts/b6d66f1b.html","3ee431d3bd1f3a0d769c2df2de2f419a"],["/posts/b7525d11.html","0daa17ce4afaa9e16a9a0046cfe06de6"],["/posts/bb154b63.html","c6c5161aea932dec4a96eff136aa7bb3"],["/posts/cc1b9611.html","4a1c9b67fd2e804c88eaba22c7bfd775"],["/posts/cc86a40d.html","c380660690122a65425c8c7fa3bb3471"],["/posts/d36531a7.html","bbef104158dc2ba3e82a82927ddeefc4"],["/posts/d442e51a.html","f93605a731c43f78bcd8d976203761db"],["/posts/d7fdf01f.html","693e7c04e330b171b814ad53caacfb78"],["/posts/d839b0e.html","8efcbf9d3120a5796520e3c3e56b401b"],["/posts/dcdf88c8.html","d9908646b078508a9b84ca5247feeda0"],["/posts/dd378ae0.html","dea70c047d1c8ee1109bc605b065a592"],["/posts/df2849ec.html","5c6d3a50ee4e1dcfc3ac85ffda6abd87"],["/posts/e15be301.html","2374d83bde58c2ed73b4d72ea8c61bab"],["/posts/e2e4b4ce.html","06ca3db9e47cd952211a37c5cd4f5970"],["/posts/e35ef5bd.html","02aef7024ba18d4a19296357526c0014"],["/posts/e462ba83.html","642399bd5164ac0c9df53d64d4c59a5b"],["/posts/e53204e6.html","742e54e5b303bc5f614ce0cc1a507afb"],["/posts/e5cd9bbd.html","278d07cb8ac7c50d371c9db86edc84d8"],["/posts/e7a99a5e.html","cda1d82204356c21f4ecffcd9959a4cf"],["/posts/e9318100.html","e916b10a039503f66da5603a98fdb66d"],["/posts/ed52e6a0.html","62f6e0b6c8af3b07ae0136f11ca5534c"],["/posts/ee0ac59a.html","14ea95912fc8e6e1709eeadbd96cf621"],["/posts/f09c1ee5.html","5323136fd601df9669bb50cdff00cb68"],["/posts/f1252f66.html","4c368cdbb5a36a460575f54be3e51499"],["/posts/f4af26a9.html","a9e9fb6166cdca45d1bb7532db887688"],["/posts/fa3cd62d.html","a3fc40316a3cf76e2c05fddba728d3ef"],["/posts/fb3794ef.html","815d97d439258dd228c029fed2633c57"],["/posts/ffdfd6d4.html","2c85d5d36c5ccdc214999bad269ed5b6"],["/private/index.html","788324073baa2fc7fa6c837719ce3939"],["/random/index.html","3bf38a7dccc40d18d273807960b262d2"],["/sw-register.js","e2887b00883670e7bda31ab624d99735"],["/tags/ACG/index.html","e3da98ddb812aa000691f86bd08eb6cb"],["/tags/AIR/index.html","f0a84a757e4880a064d072bb4e7a2019"],["/tags/AliceSoft/index.html","a541cd3c01ef2858dd87c192abe8afb0"],["/tags/Butterfly/index.html","3b7ced89341f8b2461188e0e87d9fb02"],["/tags/C/index.html","d2f8135916e5e1d2bf3ccf11569d4c50"],["/tags/CLI/index.html","ff2e313b38528d2fa7f81f10ee4900ce"],["/tags/CMU/index.html","138f6ff301f95c3e4f430a46ff97b0b6"],["/tags/Crash-Course/index.html","1b0e2ffbdb0a85e5204ffd5fa40a96e8"],["/tags/ETH-Zurich/index.html","e50d5470088c348541dd5c2eee80158c"],["/tags/Eushully/index.html","53896aa55a79fea5cda6d3caf2962006"],["/tags/Everlasting-Summer/index.html","a31c524496c5c280579277662f291e15"],["/tags/GDB/index.html","c0c0101ea5571fa07a573afc06643f7d"],["/tags/GRIS/index.html","a2afcbd5b7781694616bb3a117eb626d"],["/tags/GUI/index.html","0753860c42482817ea648a21ff251244"],["/tags/Git/index.html","d72b4f6420da14d81412176b69d2a5b7"],["/tags/HTML/index.html","91f78a6ca9eedb790d470d9016a84cef"],["/tags/Haskell/index.html","c90dc1e2ac6e49512d7a55f9cc5147d1"],["/tags/Java/index.html","62e08dec60ef8363d370fd88853ec44c"],["/tags/JavaScript/index.html","db3a78dc28c44ed707f30ae0f1ce185d"],["/tags/LaTeX/index.html","0f4feb80eb330cd9e58df98a063a3d0c"],["/tags/Linux/index.html","b8be6ef7104aa7e9a73cd258e5c5adde"],["/tags/MIT/index.html","0a9ed9127ee12e68d472a247f967f60a"],["/tags/Markdown/index.html","1ab4fa7d29c10903379c9ac55367a3be"],["/tags/Mermaid/index.html","611f64be2e75809627fce80c62248916"],["/tags/NTR/index.html","017ca70be7eae9267c90f3c6326494c7"],["/tags/Node-js/index.html","76166c9a4c802435979c98dcf37325ce"],["/tags/Pixar/index.html","bf8d81985fb0e2d88c6783259fbe1702"],["/tags/Princeton/index.html","bc555ed50a449b04a5741aa0073ca573"],["/tags/Python/index.html","86fe58d0c5cbf80385b8b83cd8f0d66b"],["/tags/Qt/index.html","222e2db449ffe45a66b8ff332cd380a9"],["/tags/R18/index.html","6f8d0144fd6959865542586c84def7b4"],["/tags/RISC-V/index.html","cdf91a6ee899026939094dde086f37cc"],["/tags/Scheme/index.html","efab267e1ead88e7c65a7873d9016b18"],["/tags/Shell/index.html","63566c8e40f9e0bd62a610623dbd15d0"],["/tags/Stanford/index.html","271cefd7c3cb4ed598afcb776744326f"],["/tags/UC-Berkeley/index.html","5e8b5405e0da9c4ceaac8ade0b80d7be"],["/tags/University-of-Helsinki/index.html","378dda8eef6e009f84989ae0c48e31aa"],["/tags/debug/index.html","6e6b72ede6f13789ed32568b4e8bfafb"],["/tags/index.html","13c4b5380ef471feff642ff7aef05767"],["/tags/key/index.html","2ab11c76db380f4b463138b88df8a952"],["/tags/web/index.html","c173eae73acd7d5de3e70e18496ef7d8"],["/tags/三国演义/index.html","9be36782815de0af214047cb6496a551"],["/tags/丧尸/index.html","d0ae08453b3d61b7b5b501bceaf96c44"],["/tags/京都动画/index.html","788f881fa31359f4c2bcd4eec4e20d7c"],["/tags/京阿尼/index.html","d59b0923df1f2f6c835f0b158ca0731c"],["/tags/体系结构/index.html","136d42654099f41af6bacd2c01b851cd"],["/tags/信号与系统/index.html","a1a76442ec0a5528dadfd414e7764464"],["/tags/信息论/index.html","39e858f9daa867f9590cd297b117b86f"],["/tags/傲慢与偏见/index.html","9e4224d105f16d8ff2c040560ff8b230"],["/tags/元稹/index.html","662dde2d7c410e9a82d01b43189e6aa5"],["/tags/公路片/index.html","cb1c67206a66008f979ed685f01e907c"],["/tags/兰斯/index.html","8e6017c0036619eebb0eacc465ee7320"],["/tags/关于我转生变成史莱姆这档事/index.html","56484264faaf93be9a067074c4324b88"],["/tags/冒险/index.html","6673f130642fbe2050fde724d160881a"],["/tags/函数式编程/index.html","519a331d32f4e0b7c9c888f39d303f9b"],["/tags/刺客信条/index.html","14ba49c09b204eb5db8fc9ccbe4b006c"],["/tags/卖肉/index.html","0f421bcfe26031b33c45c5a317923c19"],["/tags/博客/index.html","106c3d8a3f2c0916c7e1164daa0f5626"],["/tags/去月球/index.html","47f7d841b200c4490aa8186ef6b634e2"],["/tags/可汗学院/index.html","24dfaff02e87aa9a7b95a45274f78c5f"],["/tags/史诗/index.html","52bd0b7fbb61de59083101a195dfac2d"],["/tags/吉卜力工作室/index.html","3ed3dfe1cce98cc1f4f319926a39ee09"],["/tags/名侦探柯南/index.html","87a7c34dbe568b287f4d773654a6d85a"],["/tags/后宫/index.html","1c64a1b34f033e1fbc33fe14a3f3abf8"],["/tags/咒术回战/index.html","a3662bae84b9a986f391098ab0c8ee57"],["/tags/哆啦A梦/index.html","e109f4da87e8b3b9bf26b094bccd96c4"],["/tags/哈利波特/index.html","01946fb5ae8f6b2cfea5508f686dffc5"],["/tags/喜剧/index.html","8ced01d3873272848cfe032ffea94bc8"],["/tags/喜羊羊与灰太狼/index.html","d6f2cbef7f6c649c9f5a4f3fdb5b0888"],["/tags/四大名著/index.html","73c05aa99b7dda6c351417f79357f18e"],["/tags/图表/index.html","7954559b60e39c3f533533d84aa5b1dc"],["/tags/复变函数/index.html","4edf7859820b4303c9a3f534441d5f41"],["/tags/孔乙己/index.html","ba95e43eb0345435fc92ff59a68838ed"],["/tags/字符串/index.html","7a37892413f31a2f711ed0cf9f8285d0"],["/tags/学园默示录/index.html","1ff0dcb5a719ef6d40b299bf770bf905"],["/tags/寻找天堂/index.html","b8b10576591f10c017cfee4ede147da8"],["/tags/希伯来大学/index.html","747f4e85dd70bfeccb10a87ded50e1a6"],["/tags/异世界/index.html","009c5d551052d833612254b7b4cbcb93"],["/tags/微分方程/index.html","bc1ed276717033de926bf42fb2019b1f"],["/tags/微积分/index.html","f2938300cdb70ba7098208619fa7e384"],["/tags/恋爱/index.html","bf5011d82bb28c1bbf08b02da6e7c11e"],["/tags/情感/index.html","0c326be5afcaebbe24e34c6920024cfc"],["/tags/成为简奥斯汀/index.html","f59443203b33f5ac49d11068f697d95e"],["/tags/指环王/index.html","92c3bb5f2994fde5e3516780f74be84c"],["/tags/搞笑/index.html","ea5b7ab5e485c09bf6145774a3fc7e2d"],["/tags/教育/index.html","6e1fb23c3ff10e06548b781ec96221a2"],["/tags/数据科学/index.html","d0b4f199e36f635e55fe9c4cb62d225e"],["/tags/数据结构/index.html","da02e09c725653db68e1162345d80fa5"],["/tags/数据结构与算法/index.html","1795e3f6dd83482d9ab9f7c2c2f246b6"],["/tags/文字排版/index.html","399757db593848ef90151a6e84522e2f"],["/tags/文明VI/index.html","fd71bf4edebefcbc944b0d1bbfa315d8"],["/tags/旅行/index.html","e71e536720bb65e678c382e9d6f845ae"],["/tags/无彩限的怪灵世界/index.html","957dc0b309c2c80a983cc89e0af57a04"],["/tags/时间刺客/index.html","52c62a26c1c62582e51da7293ff2975e"],["/tags/有生之年/index.html","76d42d1f30cb6022c5a3f97dcfcfd9e0"],["/tags/李商隐/index.html","657bd06f27bf078165ab48b6625dc990"],["/tags/李白/index.html","c7d8ad97a8e45f840de8d5156459ffad"],["/tags/李贺/index.html","0efd5f3e8b5a9bc5159ffb247210f1e3"],["/tags/杜甫/index.html","9b9d5135749bef03de17f005809f2079"],["/tags/校园/index.html","17d008aceddc59e58ff4fa471a799914"],["/tags/概率论/index.html","28d0579cbd172fbde5f303af7a49de7d"],["/tags/正则表达式/index.html","c0b243e0d8ca08f2e60e26583b3f0199"],["/tags/死亡/index.html","7eb883d3f56e9293084f03c2b4bd559e"],["/tags/水仙/index.html","ee774782464878b5536185672e7a1fa6"],["/tags/治愈/index.html","f92abc71e99e5145d52812945ca55127"],["/tags/烂尾/index.html","309f189e0f7bed314c49e7f4ed971b2e"],["/tags/热血/index.html","13713dcfb9b48c1e8063d09156b870bc"],["/tags/爱国/index.html","43fa21938ff6d79b80fdf0a592094126"],["/tags/版本管理/index.html","c1cbbc368f7c8997449e089a310b2cff"],["/tags/玉子市场/index.html","e009e03e415ba83ada0d2e6fbdd152b6"],["/tags/玉子爱情故事/index.html","8975ffa4a9a7c745e7e2f2d213923597"],["/tags/王维/index.html","b1fa39cf5818a8fa8b10abd3d8661e59"],["/tags/现实/index.html","7ffe068ac369afa8533cd50837945582"],["/tags/甘城光辉游乐园/index.html","d292aef859abb3cb839a7ca0cde4d415"],["/tags/白居易/index.html","2baddf87db8f3d0ddaa23326f37f8024"],["/tags/白毛/index.html","75a9912c70656d94b1e8b8ccf38f5d7a"],["/tags/短篇小说/index.html","98419e893af66faf39f29870695c5e27"],["/tags/神话/index.html","ad86cf67a094c912fcdcee1e7920e84c"],["/tags/离散数学/index.html","5d99c9eff45bd566bdf32cd2eab9ae26"],["/tags/种田流/index.html","8411f6c730af7dd8315856b7455e1981"],["/tags/空洞骑士/index.html","fae92e065c2173490b38fd6b544051da"],["/tags/童年/index.html","7e4743d7145a4c9707dbdc4557384168"],["/tags/童话/index.html","d7558ac115e3c556456277b9a5993c71"],["/tags/第九艺术/index.html","abc7d14faabe278cf3b2d930f85b1521"],["/tags/策略游戏/index.html","8afa4f60d145d21d09f4f8c32e010460"],["/tags/简奥斯汀/index.html","1611e68579e66f7eedacb7d78e07312a"],["/tags/紫罗兰永恒花园/index.html","af31c43de33bc53ad43dd43efd117728"],["/tags/纯爱/index.html","933eaebe4660846e12b26055e48451ec"],["/tags/纵使手残仍大爱/index.html","5232a3ce10825f2fe86d3f79bf4a7ea6"],["/tags/线性代数/index.html","7e4fbcc49e850e13355f3f3e060b0d43"],["/tags/编码/index.html","5f1560570ac15a5c6b2c24084b53e63c"],["/tags/致郁/index.html","3fd65bca02361b0ef342c15ca8668ddb"],["/tags/苏联/index.html","f6189c383905db538388a0fbd4439350"],["/tags/苏轼/index.html","f4d2845af92d3d81a200f9d7d2bff5f0"],["/tags/英雄/index.html","724e22fa237dad8b7f0a437e85801641"],["/tags/计算机科学/index.html","5d4aa80fe46ae7f115a5ad346a1a1df7"],["/tags/计算机系统/index.html","e2ec1bf427f4c75cae40277bc637c0da"],["/tags/计算机网络/index.html","12fe0cadc73ae6df29558b6b90b99b97"],["/tags/词中之龙/index.html","173256270419a44906ae8826a0687f37"],["/tags/诗仙/index.html","05f2d603fe1a9bed5d2976b1b346c200"],["/tags/诗佛/index.html","cb99d1e437f1d3b953fbc9c4fdec767a"],["/tags/诗圣/index.html","2b1a989d39f0659ae241a7620a0fafbf"],["/tags/诗词/index.html","d7fa101a5a4d557ef446efc0944bfe9d"],["/tags/诗鬼/index.html","a58ab5218d9b66580d0863af4d00ccfd"],["/tags/读书/index.html","9dce7ad9a7c1f7fe3e496a591024f9f8"],["/tags/豪放/index.html","5cb14b00c1bb37e612b79e1a19ccdcb5"],["/tags/赫尔辛基大学/index.html","b2dd8c35de58202ef69c9ae0cd368206"],["/tags/跳跃/index.html","916c55ea9bc8952a8e4feccce2abebae"],["/tags/辛弃疾/index.html","440334bbea5019c8b227d7bd86519a71"],["/tags/运动/index.html","9c4024b2260739fcca53df09feaec621"],["/tags/钉宫/index.html","10610ef19731929aeac8815270d82c93"],["/tags/银河战士恶魔城/index.html","44be7ff34f1075bef1fb6c9ebd7c6f84"],["/tags/陆游/index.html","c69938487c1ffe6fa18dce637078ed8e"],["/tags/零之使魔/index.html","b4d456db83dce55a20b200185d70f956"],["/tags/霍比特人/index.html","00c0b160f954c743c7dbd6b4b5eb596c"],["/tags/飞屋环游记/index.html","2777f25335502fbd533f0b5487dfadf9"],["/tags/魔戒/index.html","86ecf63dcf0377a5acde49fcdb98f19b"],["/tags/魔法少女小圆/index.html","c692b25285625b83aa95a4dd2b1e69f7"],["/tags/鲁迅/index.html","becbc2677fbd23cbc50d6fe0b0c4b049"]];
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
