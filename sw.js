/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e920bc16f6fdf7ff952001c3728c11c6"],["/about/index.html","cdbbd6d7a893c35d006dcd9cce5a3f90"],["/anime/index.html","4db0a6678bed59a14218eb58d480408a"],["/archives/2022/11/index.html","a66abdf40240ad4063d788f598a9a2fc"],["/archives/2022/12/index.html","32c876968531dbf43224bf7dbe5fc282"],["/archives/2022/index.html","57f2fd20c4496b04adf570bf00424756"],["/archives/2022/page/2/index.html","29c4c6bde50b1999543dd30d1982079a"],["/archives/2023/01/index.html","aafce2cf7ca67fc7d30ff0181254bac1"],["/archives/2023/02/index.html","2b7d40cd41a9bbf3dd46495efe2ba50b"],["/archives/2023/03/index.html","71d9f7310a51f872f80821c0c2069920"],["/archives/2023/04/index.html","e3541f3ad2ae3434a80be1d8149ba95b"],["/archives/2023/04/page/2/index.html","4cc6181d941934c00550d01ecd7b6386"],["/archives/2023/04/page/3/index.html","e1e433bdf2159c26c1ac48844142ea58"],["/archives/2023/05/index.html","d31f8d3d047a623239931be861bf7949"],["/archives/2023/05/page/2/index.html","6588bb96c93227f8c03ed7f59432920d"],["/archives/2023/06/index.html","a397c5ca6436cd2fa7b70d98f0c8c60c"],["/archives/2023/08/index.html","0fbfc78b82dc042f79c24e89c5a44eb4"],["/archives/2023/09/index.html","f688861e51bdde8200247ad4680705f8"],["/archives/2023/09/page/2/index.html","76ba0b893d3973a902e7f60dad9f129d"],["/archives/2023/10/index.html","76c3abbb0bef9c34fd10d61b5a7a1ca2"],["/archives/2023/index.html","aef3f9765e185b9dbe42ff550a12e73d"],["/archives/2023/page/2/index.html","cb31150aa689927587d6c3e3c10eb6f1"],["/archives/2023/page/3/index.html","148f9b3f924513b8c9000455290d9c6f"],["/archives/2023/page/4/index.html","83d4865ce88e1c44d3359bf07229dd78"],["/archives/2023/page/5/index.html","2f24c485805a1df7366204f1f837af4a"],["/archives/2023/page/6/index.html","2dcc2be3f0dc5a0834e0bdd88955245e"],["/archives/2023/page/7/index.html","b2c31e76a87679379d5ab9013c9e7760"],["/archives/2023/page/8/index.html","027499d701c1b900ab01c58459e873da"],["/archives/index.html","b0f88f0ff33e793299d07d7006576fc1"],["/archives/page/10/index.html","ee8c201b626f21f450c315b137ba39fe"],["/archives/page/2/index.html","3a7e29ddf9ca5dface598724c90e7647"],["/archives/page/3/index.html","ffc67d25b9105f21b8796ac98e0b6d3a"],["/archives/page/4/index.html","39c89eb9ac43418c34238122c59d0ad9"],["/archives/page/5/index.html","3d0c6ee54b6066d5350786bf5322824d"],["/archives/page/6/index.html","5410f8ba9146874b21af87e116def690"],["/archives/page/7/index.html","a59731ee6df76410e13e4437405235d6"],["/archives/page/8/index.html","114b27baad179387534cfecd8a7f1f28"],["/archives/page/9/index.html","0cfa14489b63f848a7bd9e98d9853701"],["/categories/ACG杂谈/index.html","4d8f5bf628c1b6977057b3022b111215"],["/categories/ACG杂谈/page/2/index.html","ae1e437814e9beba9b0fc9e1e04cf2cf"],["/categories/ACG杂谈/page/3/index.html","f010c07867811e6556c0405664583faf"],["/categories/index.html","9ddabb281fbc613a70c3b2f81478dc00"],["/categories/学习笔记/index.html","9c0b40af06c40091b6eb4a105111d525"],["/categories/学习笔记/page/2/index.html","dd9eda1a8746ca9b2d5467765de0e231"],["/categories/学习笔记/page/3/index.html","dab1659fb459b42d5318296fa3b1305b"],["/categories/工具/index.html","e2d3dcebf3e7f09475f77a51d71f79ab"],["/categories/工具/page/2/index.html","f3b66af63a351aca146c52d15496dabe"],["/categories/游戏人生/index.html","916867b52aa4a5ad6ca920e619458566"],["/categories/游戏人生/page/2/index.html","c81346627758d8b368d6aad1182c600c"],["/categories/读书笔记/index.html","034513ed33d4238c420e42b72d2b113c"],["/categories/读书笔记/page/2/index.html","0ec3f1d7a3e41282d1f8d9e79b43fa2c"],["/categories/闲言碎语/index.html","8386119f15f4e0e8bfaac97621bee26b"],["/census/index.html","03cedc6a28555d7746425fca6864a13b"],["/charts/index.html","8a267cf5ee9501dd85b56355463c8418"],["/comments/index.html","f0b4753c58ec992a2dc643758d4898f4"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","7b2d67a005ca6303d1d96d3136067cc1"],["/gallery/index.html","29253c6860410a43eb5b0b92781926e6"],["/gallery/wallpaper/index.html","e3b7eaad7cd55ca96da1e560e0608e38"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","59bcddb28a8ddb7942fc3187893d4181"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","9fbe72e9fd99ae94a488784fd0aa625e"],["/page/2/index.html","444c57ef602fc57b6e217296b3e49f0b"],["/page/3/index.html","d4f62fc2446f9c85b05d1e3cda4a9598"],["/page/4/index.html","864e58dce84435fe09b7a2ce7ab5079e"],["/page/5/index.html","f834a9d51a6d163901aaab219a6a1bc3"],["/page/6/index.html","170851c601d2c7b515127b5105783a98"],["/page/7/index.html","450ad8b0775474fb6f52a2d74d751d56"],["/page/8/index.html","b8fc5638558f78eb89b383da27d195a6"],["/posts/106331b4.html","a61feac76f28e07457da96f2536a3824"],["/posts/1185a02e.html","2482f8ac7babe44c1683a22f6d384e52"],["/posts/167c7c45.html","7fcb6349956d8a78bddfcfaf56bfdfcf"],["/posts/1743dad6.html","b254cd9867af3fdf08d676166efbc2b4"],["/posts/175a8e1.html","ec6abb784e68841836dc345f9ad7bdd3"],["/posts/1be398e4.html","95bd15b9f73e9eb050a87dee8c4a5ad9"],["/posts/1c5a0321.html","de8bfba77188e3c16e22870f877a7cd1"],["/posts/1c5b1e9c.html","e1a2b703119af38145adb2a05a96a7cf"],["/posts/1ec7973e.html","ce60034a525731fec432506028705c6d"],["/posts/1fb82448.html","ca18d66233d5bc2427a422305b7f5038"],["/posts/21f18fd2.html","37b9a9a42cfb4a4235d6262001f83175"],["/posts/29c507fa.html","1eba7451fb515d8ab24adc12a979e513"],["/posts/2f34eb00.html","99e1c5a7a6cd90bacd5f0ed5b06c62cb"],["/posts/2f57a694.html","1050267c46f51ffa6b5248b560990e20"],["/posts/374b54d5.html","27a532254302dac8b446da1e13c83cb0"],["/posts/3871b764.html","86df492efb5d4619ac85cfe77ba6e5fa"],["/posts/3b308caa.html","3990350459aa3bba780e2d783f3a6adb"],["/posts/3c3cdb74.html","74c9335bd25909c1fd4f30cf45c4983a"],["/posts/41f65cde.html","ee4af543880b028e6a90f07ce8962ae4"],["/posts/4208fd6c.html","a8184f863ea4f9d4253832cb6718ab8c"],["/posts/4392373e.html","6af8fa78a22dd7b0ac63eff522aef8c1"],["/posts/440ed920.html","1a143eb0ac88fd611df4f41b0b2dc9e9"],["/posts/4d2b51ac.html","6e941fb7b0e8019de1a48448355ab070"],["/posts/4db1a52a.html","22eafcbf7d24550273d752fb116340e2"],["/posts/503ae89.html","cb0d7611efb2c5844bfd94e0147b673b"],["/posts/518e2799.html","a8d8331554d42c5545a249d85e0bbd71"],["/posts/535fd087.html","81044aa0a22690caa6184972c84820ef"],["/posts/5923cba3.html","10f5ab3c0079840d9324b3410b0e8c17"],["/posts/5c1bb6b8.html","c8216fe2fe7fee706fd5092079959e4b"],["/posts/5dc45f0c.html","d1e2c856d56f741935c2a360200f36f2"],["/posts/5f2caa2c.html","0d30e796eb14466a8469513873a35941"],["/posts/616be7b6.html","d04a2a5c751d054470903d59d0e0be6d"],["/posts/62a1ec0c.html","e2b2d03e7de718a150a82ad4d50a701f"],["/posts/69fb361e.html","7a7861822d2fe057140f58ef6cbcb8cb"],["/posts/6a8518ce.html","de38a82fad5d65097409a87a5a4fca22"],["/posts/70685119.html","a2a88f12d8012f7351a7bb413e1dc074"],["/posts/743db4aa.html","42fa75a88d7eb0568e31e76d4569df80"],["/posts/7b67faab.html","0a37491f97cd79487ae9ef6003d40cf1"],["/posts/7b76be01.html","8eb191e982b00c3069410af00d838bfc"],["/posts/7bff939e.html","151c83480f6d8d21c8b8dd84cc8da807"],["/posts/7cc4ca07.html","74b19dc55da224397be3c0f33b02fa64"],["/posts/7d257210.html","f8ba43d2e7e0c41d95de5a8c06163759"],["/posts/7e6a5c94.html","563a0345cb7cc9eabad34d5b903eb08f"],["/posts/7ea0cbe4.html","cdec34ebc9701583fe55964848f3701d"],["/posts/7f382da2.html","92ac69b49718fd19732057b8df875add"],["/posts/8207aa48.html","1e6e34ddaf58f32ed7ed320b89fb0144"],["/posts/836ea9bd.html","7493a52f1601f03b282d0d0efcac61e5"],["/posts/84cae757.html","a62e71e3e04b7fe210bbf610ac658d9a"],["/posts/88200036.html","5fe62f665d0db10db7ca677858ba61a1"],["/posts/922fb64d.html","27cfaccc59a4fd683bc87351ff07362c"],["/posts/98332b29.html","3766cf02e3f0f32752d945b3b6935293"],["/posts/9a1a736f.html","27fd412d805c2c61ca69113aefc1124a"],["/posts/9addd0bb.html","90b908184f2be7fa75329c0c5bbccba8"],["/posts/9b44950b.html","f8be1d9c8ac3a88ed55e57bfdcacc591"],["/posts/9ca149ab.html","d9ef9307e13a6324389c9e88c6e72b14"],["/posts/9e4446bf.html","8c899407c6f8e2060616614f27812c13"],["/posts/a0271e58.html","e36f4d2702c4724b10493710077c343c"],["/posts/a13c1dba.html","76b118f8ad20b6c29eaec78174fdc4e2"],["/posts/a1f2a4d4.html","c965dcd64ea265ef3eef6b6b33dd0a1e"],["/posts/a5f300de.html","62814d59332007e7d03e54d497dbd092"],["/posts/a98766fe.html","57ae3c99626dd3ec9394664049bcca09"],["/posts/a9f63847.html","8dc9bf6625c3d68e2e01143c16700444"],["/posts/ad31055e.html","badc0af67f38944c9e9182698f83e5ee"],["/posts/adcd6e20.html","265abf1d63e2ca8e13364a00fd52f700"],["/posts/b0fa4c58.html","2848f9ce1d09bff79998bbb82b9d951f"],["/posts/b1168675.html","6c01941169c8ede70e451ed9e7bd2448"],["/posts/b2feeab7.html","bd9d0d90cd8bd593be7b258f9d910a2b"],["/posts/b6d66f1b.html","b3be9f8e3f52ec4e5be3e513230fe2a6"],["/posts/b7525d11.html","2bf235d0fe62f63e55306a62e070ba44"],["/posts/bb154b63.html","1f9222f4c36639da871fdede8d00fc40"],["/posts/cc86a40d.html","b25b4d3813a002fd50baae51ca258407"],["/posts/d36531a7.html","3708cfadd328c83c2b22902ba3728ac6"],["/posts/d442e51a.html","6f5acc68552229f5b129ca1c790b528c"],["/posts/d7fdf01f.html","dd0e3337fb56df9c049b0d196fca9eab"],["/posts/d839b0e.html","8c07afd693d02910f2e9c48a9deed1d3"],["/posts/dcdf88c8.html","34d5adcc02b3beda0a585b80eb4f20c0"],["/posts/dd378ae0.html","ec927bf7931ca46901d14686769d6ecc"],["/posts/e15be301.html","6fca0fc9ad6a12fc132193f37d6e5b79"],["/posts/e2e4b4ce.html","933217a509496ec80f0b2c67bf64207c"],["/posts/e35ef5bd.html","06aba88ce867644d69b67e8dbaa43090"],["/posts/e462ba83.html","1fc4577e2833f8d9a58ddd7565c7873c"],["/posts/e53204e6.html","3268110244e28d1a90f51f188c154651"],["/posts/e5cd9bbd.html","39eb48cc34f64cbdcca2f055cc3e03fa"],["/posts/e7a99a5e.html","c766bae16d4cca270d6276c7d4e91d22"],["/posts/e9318100.html","cf16888bfa55a801c037e934c5b402f1"],["/posts/ed52e6a0.html","1c0761582a7bb1b1a2203ecf32ca63b1"],["/posts/ee0ac59a.html","14a1c07a03de61892ac85c40fe6e449f"],["/posts/f09c1ee5.html","63eea3c017b0359153f4a35a6174a38d"],["/posts/f4af26a9.html","0ba622f49bee78c65a7c85139dec5c6b"],["/posts/fa3cd62d.html","8a310086a4377ded47341cc35f03bee4"],["/posts/fb3794ef.html","f8b70d1a89fb989e43075ddd8ff8364b"],["/posts/ffdfd6d4.html","d4df7c95cd8913394eb3992165fb9aae"],["/private/index.html","a4b76279fb40353e89b74041b807d4f7"],["/random/index.html","80cef949bb875340b3a490d97f6978a2"],["/sw-register.js","c3c517ea0dc715f86a5547b9a054364a"],["/tags/ACG/index.html","3b29d18382c6b07145e3b29fb1386fd1"],["/tags/AIR/index.html","e17c3fd8d567d1c60fda29ba25b219d4"],["/tags/AliceSoft/index.html","e18a814940963ad9f2126d348d5c47ba"],["/tags/Butterfly/index.html","a014443842bcd6f7772c9de6445cf664"],["/tags/C/index.html","3609e5c42dad93179565a3cb8b40a172"],["/tags/CMU/index.html","0c9b61f939785a33780b6481dde27647"],["/tags/Crash-Course/index.html","989775cbb06e5034a27fcbb6bdf4d016"],["/tags/Eushully/index.html","9569ab4f66d907cebd1a58ffb93123d5"],["/tags/Everlasting-Summer/index.html","811b62d9c9a6baad1ca3d08942a8e6e1"],["/tags/GDB/index.html","2a3bc3a748cca8d46089f29cf8d7535d"],["/tags/GRIS/index.html","20b277f3feb851c84feadcccaf6dc8dc"],["/tags/GUI/index.html","025a1f219df62b5380ca0f85faa73955"],["/tags/Git/index.html","0c792718b3dafbc40b7f1385e76cd0b1"],["/tags/HTML/index.html","4d9d66a2fc516df8cb0e2476318812ac"],["/tags/Haskell/index.html","070260afe0db0edf656130bda5ddc360"],["/tags/Java/index.html","c2cd4d783c75f033ce140cffb595654c"],["/tags/LaTeX/index.html","278f7f5a092a57bbad988066b99c67b9"],["/tags/MIT/index.html","9a231a780f25077bc49332af670c76a1"],["/tags/Markdown/index.html","2e3068f56966bb923daf4233c4584bf9"],["/tags/Mermaid/index.html","7b1b85b077e2d4440988de516480e0ad"],["/tags/NTR/index.html","9f8eaa7d3d9121b3829ef7ec2aa0058e"],["/tags/Pixar/index.html","26ed70822214e0330487a52bc970f709"],["/tags/Princeton/index.html","774667edd63af9ba182887ea83903f63"],["/tags/Python/index.html","ec6652864d8ec853dd7adcaa91ee2c9f"],["/tags/Qt/index.html","0665589b69e4101ba301e06c8607c7c2"],["/tags/R18/index.html","26befcdb28995c6ff1a6e99d71b6644f"],["/tags/RISC-V/index.html","3a85ccf018177c0ecaef2577dc7877c9"],["/tags/Scheme/index.html","74943e4e17b6fa4b7e31f95324e1efeb"],["/tags/Stanford/index.html","562fbd1ac027c09d98557068dde3cb1b"],["/tags/UC-Berkeley/index.html","335e637d00793892ba87288819568eb8"],["/tags/University-of-Helsinki/index.html","349bf7472c0609eabb8478f16b467e85"],["/tags/debug/index.html","6a69bf8bb5e9c4dea26c1c480ba50ee2"],["/tags/index.html","78c96882963f7ababd68074decd9e6a0"],["/tags/key/index.html","4c7d7cfe15ac1c7ff6c6ae53dba70cdc"],["/tags/web/index.html","98afdcbb9750495b0303ec8c7d5f1c38"],["/tags/三国演义/index.html","7c61cd609a019b9c19647a8e254f48b9"],["/tags/丧尸/index.html","e2c744fb67d1e3d018e17ee7157bd4a8"],["/tags/京都动画/index.html","6220ce33aa48151d3a4cfecc47f17389"],["/tags/京阿尼/index.html","e4dca1a0ecd4dcc1619a5e4cd3c62a03"],["/tags/体系结构/index.html","c97f9e723bc8bd4f69992293dfcb5be5"],["/tags/信息论/index.html","4e6bc41e625617d6046d3ed3fd5bd0da"],["/tags/元稹/index.html","dd539c002286cf030edb5b038b2282a9"],["/tags/公路片/index.html","4d356cd64a9155546137b9f48296a03b"],["/tags/兰斯/index.html","0ec469121c1b5e7e097ae6a250ff6813"],["/tags/关于我转生变成史莱姆这档事/index.html","9f8f9b6b44b1a73f3ced4313f5cd959f"],["/tags/冒险/index.html","cbcb539741fb9ce3b6f4becfeb25937a"],["/tags/函数式编程/index.html","94bf9a08a43eb84e9bb555daa0bc3f23"],["/tags/刺客信条/index.html","247b2698c95d37e7deacb092a92ec52b"],["/tags/卖肉/index.html","dadd4ddce9cb73af949d7f74014af684"],["/tags/博客/index.html","efa7363276d27a6e26d058654edb1ca6"],["/tags/去月球/index.html","90b1907a3162247223f805b2fa2760a3"],["/tags/可汗学院/index.html","76f491bad5f26d7df11f6bba689fa42c"],["/tags/史诗/index.html","b1aab0b929b3d25a99886bc4d926984b"],["/tags/吉卜力工作室/index.html","7de6d94259331829f01579383032c26c"],["/tags/名侦探柯南/index.html","dbce5dd9cd7fada28a0813be6ad723d8"],["/tags/后宫/index.html","7f1f7dcfa325877fe168f5cb664fdf18"],["/tags/咒术回战/index.html","e6489c48e6f2296c713f0a4d945f0861"],["/tags/哆啦A梦/index.html","ddf48d0f632c31eb3c0085529d3ab36b"],["/tags/哈利波特/index.html","4141dcc46a8cc6422f6ff6e94ffbcfa8"],["/tags/喜剧/index.html","6c56c3d2d8784e222142a4e516ecf3af"],["/tags/喜羊羊与灰太狼/index.html","89c7e773fc17021be660b8be82dd10a8"],["/tags/四大名著/index.html","91b95204c207a334ce354596fa3864a6"],["/tags/图表/index.html","b6b157b30870ad3812c6b5a7e3930c38"],["/tags/复变函数/index.html","c42a1610de8cb3d5ee51aad47e969719"],["/tags/孔乙己/index.html","e6d7e35f8672247b6386d64d7356e736"],["/tags/字符串/index.html","172390ec8ad1ffc1ef38eb115a574367"],["/tags/学园默示录/index.html","bf8793e2bd40822cb6ad46014e6a2f38"],["/tags/寻找天堂/index.html","a8509a3471e822b70ae3b3e74c908527"],["/tags/希伯来大学/index.html","7b8bb08a7a8aac7cc1d5b59b5c22883e"],["/tags/异世界/index.html","cd70444e26b1c6c0e6bc5e7cd0c00b7e"],["/tags/微分方程/index.html","e592fa48d8023f3adb441b2eef09f0db"],["/tags/微积分/index.html","38f83479485775c520720bb74ef22128"],["/tags/恋爱/index.html","cb211925468aca7ebfaa2262e9638e1a"],["/tags/情感/index.html","79fd5b3afad518d3c4c629b5b63e33aa"],["/tags/指环王/index.html","70aa96dfffe86996f1f6b2273c24d58b"],["/tags/搞笑/index.html","3806c19de3a642ae8aa0da0a965e8714"],["/tags/教育/index.html","ce78fbb320d27ad25f997cb1dba1fae2"],["/tags/数据科学/index.html","76bae7eba1f79bb3914bd7d3c6a3733c"],["/tags/数据结构/index.html","27ba2151288370e66a02c75d5b682145"],["/tags/数据结构与算法/index.html","38440fcbe77dbac2835449179ffd0f2f"],["/tags/文字排版/index.html","94539153db6d2a3c5010a323531f807c"],["/tags/文明VI/index.html","6ef753899a4cd44af8fa0b0959d74ff6"],["/tags/旅行/index.html","09ec69bcb7e491aadb939d5789b4cd8b"],["/tags/无彩限的怪灵世界/index.html","e8b1e668a5ef22304e555f6fb0d7b8b2"],["/tags/时间刺客/index.html","03e4aeeee4bc91b253bdc0f43ea4a998"],["/tags/有生之年/index.html","8b0b6983d1251b3ae2c9243076c16369"],["/tags/李商隐/index.html","cac37af22b7b643f6a6fba4ae4f4b145"],["/tags/李白/index.html","be9b8dbc1f7ab6573237c07f064b5acc"],["/tags/李贺/index.html","1e8feb0c7c7d9003fa2f2026f01c8026"],["/tags/杜甫/index.html","1b31dcf88eb8c4dba5e3d0e151967e4a"],["/tags/校园/index.html","5dfa80f27658477e025a9767c8610c39"],["/tags/概率论/index.html","8481189be97f329cfd296a76542eb9e6"],["/tags/正则表达式/index.html","ea626473bb5a6dc65f27ac74f7a87942"],["/tags/死亡/index.html","c3c96991475a2300d9c769365b2d3973"],["/tags/水仙/index.html","7e3e05566e0c884ae90441232a20b2bd"],["/tags/治愈/index.html","c21f9c3c7a81f53994f89a0e8e15b8e0"],["/tags/烂尾/index.html","c7b3c78cf79b0f67b1b126ffe11334a1"],["/tags/热血/index.html","43122e8606b5ba4534c0e2a2a6dc3bb1"],["/tags/爱国/index.html","b8a27dafd1fc01935e0c7af7a14a9fbc"],["/tags/版本管理/index.html","e7e64d45128f30e2cd41553fd2e1e6bc"],["/tags/玉子市场/index.html","17a0db56f388785a4926a418b7a17304"],["/tags/玉子爱情故事/index.html","0c204dbda0681f1479896d357d908011"],["/tags/王维/index.html","1ee6fcee63cc6e2e9761f8d300af6322"],["/tags/现实/index.html","2cb1469e92fa1d67437283c664d181e4"],["/tags/甘城光辉游乐园/index.html","d29ed7e9e5c87ee6f9b0486bd26dce5e"],["/tags/白居易/index.html","33bc57d0c95c05a82d69c717381f6262"],["/tags/白毛/index.html","e9fb90bdb416de879ea4b89bc62ae068"],["/tags/短篇小说/index.html","cfa6582e7160a6024bb0def4b2004463"],["/tags/神话/index.html","daf7b7b2deddd735d0a78246e2940de3"],["/tags/离散数学/index.html","37c6048a77d4c64145d3a1f9798a2b20"],["/tags/种田流/index.html","0b00d507e67bf60f0a7464620865cfb9"],["/tags/空洞骑士/index.html","2ae4877e5184d74d34688a5c5775db0a"],["/tags/童年/index.html","05f76c1cfb623c10512ce152ac0c678e"],["/tags/童话/index.html","1d41e44f678530f90e78723e60d90363"],["/tags/第九艺术/index.html","4580a3fb60ece16a8082677788cf4540"],["/tags/策略游戏/index.html","fed70ed615b610d41c859a43a05eb3b2"],["/tags/紫罗兰永恒花园/index.html","507abc957da996e2af4f9699f36928aa"],["/tags/纯爱/index.html","a181a4dd91f56fc5798884c82c0214f1"],["/tags/纵使手残仍大爱/index.html","c5dcf152d5a8882b64341acac4e891e8"],["/tags/线性代数/index.html","9af49f98322f575097c9ec0dd2d56346"],["/tags/编码/index.html","06a8beb8d76e1184183b06facaa4d20a"],["/tags/致郁/index.html","91e5035e42d0c68ee67888226b8e2aba"],["/tags/苏联/index.html","e11f5df980634936e37e046c9ef93967"],["/tags/苏轼/index.html","ff2ecd4593ca3d9d9ceeb72599064920"],["/tags/英雄/index.html","50a2097084d3a27d1bb475e41ef82ecf"],["/tags/计算机科学/index.html","59176128d20e668226451cdac4bcbfc4"],["/tags/计算机系统/index.html","0ddfb6a87c30d2c0ec05b0521388e126"],["/tags/词中之龙/index.html","24ed0a32704a3ef5f81984fd47edf700"],["/tags/诗仙/index.html","a6881485e52917b7bbaf572b75e3dcf8"],["/tags/诗佛/index.html","9dcb50d03f613fdb99247c5a31e172b9"],["/tags/诗圣/index.html","992f77eee8ff58b72666b7b96280fd2d"],["/tags/诗词/index.html","d3baa0cb6233b6dca0c6f1d6898d042d"],["/tags/诗鬼/index.html","5f17c26fc985efbe1ff205da92ec9e43"],["/tags/读书/index.html","d13d79fdcd5f679f75a0ca8138d8a1be"],["/tags/豪放/index.html","285b4c8c219244b09d6388cf12ac62db"],["/tags/跳跃/index.html","2c368712a988331effc976488ddc9943"],["/tags/辛弃疾/index.html","d3a3dc4ec61d1b57d035cca7154ddff1"],["/tags/运动/index.html","7d6ec465476a7f30a663d95497bb1c57"],["/tags/钉宫/index.html","5a86716dc9bebc6ba11a2768dec2d9d1"],["/tags/银河战士恶魔城/index.html","7a730080771a9b81453c83312d04ee83"],["/tags/陆游/index.html","bd7e67eac5e3a17385852b6457cc76e8"],["/tags/零之使魔/index.html","44e2b95d06b3c06e2b5e7bb413433cb2"],["/tags/霍比特人/index.html","d31eed3129d78e873a51c15a6a5124e3"],["/tags/飞屋环游记/index.html","4531b45ca0263af3c51e1e50e7f60bfd"],["/tags/魔戒/index.html","dbad368101a5e5cd27fa42790c9870c1"],["/tags/魔法少女小圆/index.html","55fd3195a9ea733c8b184d4817325f8f"],["/tags/鲁迅/index.html","04370573e1c28bfad9ae6f1a16c28da5"]];
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
