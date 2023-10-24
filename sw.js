/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b7d7356c5b5b00b236032a70a0899e77"],["/about/index.html","cdbbd6d7a893c35d006dcd9cce5a3f90"],["/anime/index.html","4db0a6678bed59a14218eb58d480408a"],["/archives/2022/11/index.html","5dc102ecc5c13707ecc2cdf4dc809c61"],["/archives/2022/12/index.html","50071ab54d84668cf09d1e81ebc02bbb"],["/archives/2022/index.html","8087a8210d69b429ddc9b44abd5ef1f2"],["/archives/2022/page/2/index.html","3f1fcd94bbf8abe359d2d2ec6f40a804"],["/archives/2023/01/index.html","e899cf9cf5c4d25dd74577fb9b7b6662"],["/archives/2023/02/index.html","25e34858bab98c3c27b691f59c8dfd01"],["/archives/2023/03/index.html","d2dc6973dd7d1c47587cad1f676187d2"],["/archives/2023/04/index.html","7035fa4803150c1d672738530dd0f7e5"],["/archives/2023/04/page/2/index.html","881742dccd7f84a9083ebd44cd24ddaa"],["/archives/2023/04/page/3/index.html","f4f19f9983392d5cb2735125db8a6868"],["/archives/2023/05/index.html","661d16188a46db43bde1e9a7e5ed08cb"],["/archives/2023/05/page/2/index.html","e000cba7c26876f5e4ff4d817b59a147"],["/archives/2023/06/index.html","b6a218d8d4685d09dc722289a337ed30"],["/archives/2023/08/index.html","57a5ebe68235b5a7c7993e8bd45a241d"],["/archives/2023/09/index.html","6e94ce23fa0109dd4efdb8dbc1fa12fe"],["/archives/2023/09/page/2/index.html","47c1e65a53713a11b6144639f5464477"],["/archives/2023/10/index.html","eca3e4aaabcbcc9d91abf56c67697177"],["/archives/2023/index.html","c10cc0510a35d91961f97477b0839278"],["/archives/2023/page/2/index.html","ef17a9629827242cc7275329f8e1f1c7"],["/archives/2023/page/3/index.html","768d3a7cb0866591c4d2505d2d8902cc"],["/archives/2023/page/4/index.html","79ab1b035a70a20d4da0aeb90755539f"],["/archives/2023/page/5/index.html","c6ecfabc3fcd1f4b842237797d32d583"],["/archives/2023/page/6/index.html","6175e77a14c044058e7d5210adf16593"],["/archives/2023/page/7/index.html","a710ec126b176448ebca17d02aced845"],["/archives/2023/page/8/index.html","89e3f7ddb97da233365affd076a9e5b2"],["/archives/index.html","7eb7d571c5ab5c3bbb89c6bd00d67fff"],["/archives/page/10/index.html","a9e19ab565b19143cf8520fc70a5873d"],["/archives/page/2/index.html","62e11fe2b554bb0a6d52bdf50805f759"],["/archives/page/3/index.html","8c173ba55441a2d2956d2aad0682cc18"],["/archives/page/4/index.html","f38d518f2a32d1b62ab2bca26fda44f2"],["/archives/page/5/index.html","2012c505d460e61dd6b3fa028bb7d0cd"],["/archives/page/6/index.html","5670581f3b7ac7499b5adda6b9abdc04"],["/archives/page/7/index.html","6f9412477f986603217851642c3bd66f"],["/archives/page/8/index.html","d1f3ba412701e52a3cd7d0d827aecb37"],["/archives/page/9/index.html","e56f37aea7f6a11ae4c2b125aa4d808f"],["/categories/ACG杂谈/index.html","3f5d54927cb27c07a403c8eb788d6b3a"],["/categories/ACG杂谈/page/2/index.html","a88dcca3a4c9d6664a92c60ab85375dc"],["/categories/ACG杂谈/page/3/index.html","1cecf64c3cff5072502c0c681dd1c900"],["/categories/index.html","1b9c330ab73709a06c1128787b59e0e9"],["/categories/学习笔记/index.html","774479e175b2e7c0abc9964a319f81eb"],["/categories/学习笔记/page/2/index.html","08b0f0a6c6207edb6897a9233b803647"],["/categories/学习笔记/page/3/index.html","a7fa85682e96bc7a2b7398319091e3b5"],["/categories/工具/index.html","d529f7580f31b79a270e3283d88108e0"],["/categories/工具/page/2/index.html","258996ae8f9f6960035469910730988f"],["/categories/游戏人生/index.html","267ffe10f110dd8970265d9e105133f3"],["/categories/游戏人生/page/2/index.html","92f33aa8e2bd8a7ac1656705c8da2807"],["/categories/读书笔记/index.html","06a1188f8ef3fb422972db889f6cbb95"],["/categories/读书笔记/page/2/index.html","a824405382edffbbc0b1ba7d732651f6"],["/categories/闲言碎语/index.html","54909b64c9cd36b7b22cbbc65c5d4baa"],["/census/index.html","d14ef23523c093f23083defa38a06424"],["/charts/index.html","303a77ff2d4326fbff2917319214d795"],["/comments/index.html","0ed7b02e769705bf5b013220a78abe21"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","7b2d67a005ca6303d1d96d3136067cc1"],["/gallery/index.html","29253c6860410a43eb5b0b92781926e6"],["/gallery/wallpaper/index.html","e3b7eaad7cd55ca96da1e560e0608e38"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8acda76113dbdb08a37fb729c765be5a"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","fd49dbff2567209ef7a7a182dabcbeac"],["/page/2/index.html","03c05f45afc2e4b769ad3bfd17e2c655"],["/page/3/index.html","fa19e97be053f3be301de06ad1e09b03"],["/page/4/index.html","342e6a60384f3b24c9cdcc6d0008e22c"],["/page/5/index.html","41a1a7ed6ada34d35ab158bf83f48eff"],["/page/6/index.html","85717eae700e67ab5712b6c919fe1442"],["/page/7/index.html","8944acf4889fa1671a3baa8e93ae65e6"],["/page/8/index.html","3b1125f1c78542c45a2b540a793b8350"],["/posts/106331b4.html","a61feac76f28e07457da96f2536a3824"],["/posts/1185a02e.html","2482f8ac7babe44c1683a22f6d384e52"],["/posts/167c7c45.html","7fcb6349956d8a78bddfcfaf56bfdfcf"],["/posts/1743dad6.html","b254cd9867af3fdf08d676166efbc2b4"],["/posts/175a8e1.html","ec6abb784e68841836dc345f9ad7bdd3"],["/posts/1be398e4.html","95bd15b9f73e9eb050a87dee8c4a5ad9"],["/posts/1c5a0321.html","de8bfba77188e3c16e22870f877a7cd1"],["/posts/1c5b1e9c.html","e1a2b703119af38145adb2a05a96a7cf"],["/posts/1ec7973e.html","b561ab67a384290240c6871e3755cca7"],["/posts/1fb82448.html","7b6cd0b2e55dcd750993e0b55337e00a"],["/posts/21f18fd2.html","37b9a9a42cfb4a4235d6262001f83175"],["/posts/29c507fa.html","1eba7451fb515d8ab24adc12a979e513"],["/posts/2f34eb00.html","c224eae42bc3a956d3f03d975225d231"],["/posts/2f57a694.html","1050267c46f51ffa6b5248b560990e20"],["/posts/374b54d5.html","394f11042aa58d2bec7abf9427616b92"],["/posts/3871b764.html","38233d4c78dd1de982fc64129134e324"],["/posts/3b308caa.html","3990350459aa3bba780e2d783f3a6adb"],["/posts/3c3cdb74.html","74c9335bd25909c1fd4f30cf45c4983a"],["/posts/41f65cde.html","6d44d1559a3a68fc15e768d52dae1e2c"],["/posts/4208fd6c.html","a8184f863ea4f9d4253832cb6718ab8c"],["/posts/4392373e.html","66bed58e13b4b3968ec236346d446291"],["/posts/440ed920.html","6068552fc1a7f08f37a7dfe6e6148da7"],["/posts/4d2b51ac.html","6e941fb7b0e8019de1a48448355ab070"],["/posts/4db1a52a.html","22eafcbf7d24550273d752fb116340e2"],["/posts/503ae89.html","059073cfa0d5a5db1c0f66579fd2798b"],["/posts/518e2799.html","bbb6e17e23555da35554e91e018a376b"],["/posts/535fd087.html","81044aa0a22690caa6184972c84820ef"],["/posts/5923cba3.html","d7a375def38258bc871a9f19f86527ea"],["/posts/5c1bb6b8.html","c8216fe2fe7fee706fd5092079959e4b"],["/posts/5dc45f0c.html","d4c5320d82ada2c2d5cd4361ee52b491"],["/posts/5f2caa2c.html","0d30e796eb14466a8469513873a35941"],["/posts/616be7b6.html","1176df7e239b619d666456b001a228f2"],["/posts/62a1ec0c.html","330b213798de3a5e4abe26fc77daa25d"],["/posts/69fb361e.html","7a7861822d2fe057140f58ef6cbcb8cb"],["/posts/6a8518ce.html","de38a82fad5d65097409a87a5a4fca22"],["/posts/70685119.html","a2a88f12d8012f7351a7bb413e1dc074"],["/posts/743db4aa.html","42fa75a88d7eb0568e31e76d4569df80"],["/posts/7b67faab.html","0a37491f97cd79487ae9ef6003d40cf1"],["/posts/7b76be01.html","8eb191e982b00c3069410af00d838bfc"],["/posts/7bff939e.html","f31c60f5e4456bb306c9585a9a95896b"],["/posts/7cc4ca07.html","74b19dc55da224397be3c0f33b02fa64"],["/posts/7d257210.html","b1bb43c33a70a8e93d21caeaf997a62f"],["/posts/7e6a5c94.html","563a0345cb7cc9eabad34d5b903eb08f"],["/posts/7ea0cbe4.html","304593486958dd5c0152084ef01ff4cb"],["/posts/7f382da2.html","1afee4b69adf6f4d27ad2217707a2a45"],["/posts/8207aa48.html","1e6e34ddaf58f32ed7ed320b89fb0144"],["/posts/836ea9bd.html","7493a52f1601f03b282d0d0efcac61e5"],["/posts/84cae757.html","a62e71e3e04b7fe210bbf610ac658d9a"],["/posts/88200036.html","5fe62f665d0db10db7ca677858ba61a1"],["/posts/922fb64d.html","27cfaccc59a4fd683bc87351ff07362c"],["/posts/98332b29.html","3766cf02e3f0f32752d945b3b6935293"],["/posts/9a1a736f.html","27fd412d805c2c61ca69113aefc1124a"],["/posts/9addd0bb.html","7bffe622d891062c8789cff0cd356d00"],["/posts/9b44950b.html","aa934090a60fef3bd0d160f72e04e987"],["/posts/9ca149ab.html","e82a1341a6a5d5de750337fbbe6fd463"],["/posts/9e4446bf.html","8c899407c6f8e2060616614f27812c13"],["/posts/a0271e58.html","e36f4d2702c4724b10493710077c343c"],["/posts/a13c1dba.html","76b118f8ad20b6c29eaec78174fdc4e2"],["/posts/a1f2a4d4.html","fef212177a47244144ba1274960e3b04"],["/posts/a5f300de.html","62814d59332007e7d03e54d497dbd092"],["/posts/a98766fe.html","57ae3c99626dd3ec9394664049bcca09"],["/posts/a9f63847.html","8dc9bf6625c3d68e2e01143c16700444"],["/posts/ad31055e.html","ade918ce250954ad759d53d00476bbf2"],["/posts/adcd6e20.html","cdbf4c41ec9d368da932f23a6a6628ff"],["/posts/b0fa4c58.html","d744904d200fc32a0a0a0a21a28855c9"],["/posts/b1168675.html","6c01941169c8ede70e451ed9e7bd2448"],["/posts/b2feeab7.html","bd9d0d90cd8bd593be7b258f9d910a2b"],["/posts/b6d66f1b.html","e13292f1c7e9b9ac0dda0b7e00585f8d"],["/posts/b7525d11.html","8d236426452b644841b91c833c259e64"],["/posts/bb154b63.html","cc294bc40fd7570dd625c35016cab303"],["/posts/cc86a40d.html","b25b4d3813a002fd50baae51ca258407"],["/posts/d36531a7.html","a069b73b864a65c2b1a1ec6b90b7c43b"],["/posts/d442e51a.html","ad3fb44b59e0d26740e2720253f82549"],["/posts/d7fdf01f.html","dd0e3337fb56df9c049b0d196fca9eab"],["/posts/d839b0e.html","8c07afd693d02910f2e9c48a9deed1d3"],["/posts/dcdf88c8.html","34d5adcc02b3beda0a585b80eb4f20c0"],["/posts/dd378ae0.html","ec927bf7931ca46901d14686769d6ecc"],["/posts/e15be301.html","6fca0fc9ad6a12fc132193f37d6e5b79"],["/posts/e2e4b4ce.html","933217a509496ec80f0b2c67bf64207c"],["/posts/e35ef5bd.html","c1264fddd74881d6d9db32549b886b90"],["/posts/e462ba83.html","1fc4577e2833f8d9a58ddd7565c7873c"],["/posts/e53204e6.html","b28da65bf77ea2103748f56ebea9b526"],["/posts/e5cd9bbd.html","39eb48cc34f64cbdcca2f055cc3e03fa"],["/posts/e7a99a5e.html","7fb0d5a20470c0e98e6cdeb565bc54af"],["/posts/e9318100.html","cf16888bfa55a801c037e934c5b402f1"],["/posts/ed52e6a0.html","de40b240d9049e6cb43fdb0f2ca2fcd4"],["/posts/ee0ac59a.html","14a1c07a03de61892ac85c40fe6e449f"],["/posts/f09c1ee5.html","63eea3c017b0359153f4a35a6174a38d"],["/posts/f4af26a9.html","0ba622f49bee78c65a7c85139dec5c6b"],["/posts/fa3cd62d.html","dada032d13097299e50d2ef14502145a"],["/posts/fb3794ef.html","f8b70d1a89fb989e43075ddd8ff8364b"],["/posts/ffdfd6d4.html","e84837d2c57eb2d8825b93ccf9a9cd5e"],["/private/index.html","4c85fc97dd187ac2ba409b40defc4edd"],["/random/index.html","9c1cb69cf426d1f8026249bd70460a1c"],["/sw-register.js","91de4874f846de8b56a9eb07e3dadf9f"],["/tags/ACG/index.html","ca44b1346facacf79a3c82a4d15225ca"],["/tags/AIR/index.html","72e0c60379932d2f53d2ff35c7272c31"],["/tags/AliceSoft/index.html","32b61c8ffaa14be1c4a67c73069bc84a"],["/tags/Butterfly/index.html","fc8c25e393c1fe2d1b526979f7c6e0d7"],["/tags/C/index.html","e0d28099f3023f2eb46e7c7223152b71"],["/tags/CMU/index.html","be592a90d41af50ec43afcd2153d4266"],["/tags/Crash-Course/index.html","58b8bd6bc4b683c049af0861971c8d2d"],["/tags/Eushully/index.html","cbd107ac66615ef165b07dedfbff2f57"],["/tags/Everlasting-Summer/index.html","7069447eb0d5977a10445af836931270"],["/tags/GDB/index.html","e17c93c42dfdc65d2b060f32c58abdad"],["/tags/GRIS/index.html","df602871f6a06210d193d5e04ff2c9d7"],["/tags/GUI/index.html","819e7f126c60dede0b24efd7d79159b0"],["/tags/Git/index.html","abc3ac0fda50450e31acbd8f2d5621b8"],["/tags/HTML/index.html","f619c413abb8f1cdf4f326df66d071c2"],["/tags/Haskell/index.html","7ef3f962f3d627336c4609faacecee24"],["/tags/Java/index.html","51357eabd7d5de07a9e571f26e64437e"],["/tags/LaTeX/index.html","1abcbf79c0db45b788500681ba847722"],["/tags/MIT/index.html","8983b53f4a6dd229baac12ec05cad713"],["/tags/Markdown/index.html","c432725d8bd94e95c0501bc65bcf259f"],["/tags/Mermaid/index.html","eecd56789f21f604f01efe336480085b"],["/tags/NTR/index.html","71bdd4b965fc14673c425540794e97b9"],["/tags/Pixar/index.html","6139c1c4d0d184abeece7b7429a5505c"],["/tags/Princeton/index.html","50a0eac72545af8d2d39240da3910bc6"],["/tags/Python/index.html","438f0cc6bc8eb2e6a07ee7bf666b4f2a"],["/tags/Qt/index.html","7f9e4c81ef6da812849e0e26d641eddf"],["/tags/R18/index.html","70914f30a0276c6087a49f29814b1bad"],["/tags/RISC-V/index.html","2083fff2bd2248f4cbb2f5ecba943288"],["/tags/Scheme/index.html","67b867401aee28093a498aaab2220c1f"],["/tags/Stanford/index.html","bab46fb4e04f021ee1dc463195feb470"],["/tags/UC-Berkeley/index.html","371db1772617dc472740fc1fdfc3a5c9"],["/tags/University-of-Helsinki/index.html","b799871b0b97fcb5d599dd7d643ea5f5"],["/tags/debug/index.html","0d0873faaa6891bcc65c338b92176f2f"],["/tags/index.html","5f86fc1455dc54068af4b1ff87e2adb9"],["/tags/key/index.html","d877baea88cf34dac1bc09e60b7bca3f"],["/tags/web/index.html","72d70336fbb56961789345c40eacfd46"],["/tags/三国演义/index.html","07b74ba30e3870a5afcf798839dd0463"],["/tags/丧尸/index.html","1d45d5058a1f89fd978d274af27b4ded"],["/tags/京都动画/index.html","0fed6e1256a8a9ab03d78f781497ac3c"],["/tags/京阿尼/index.html","b290211a0d707064bdd70d9557db8353"],["/tags/体系结构/index.html","250dd1eff764b087f638b795da76a810"],["/tags/信息论/index.html","79520e20f3bbc2269d18e795bff6ad30"],["/tags/元稹/index.html","1825badd3c00c77323a19da3f8239567"],["/tags/公路片/index.html","8e5ca7b2ae7d37306540f087d59a5bfd"],["/tags/兰斯/index.html","638ec682933b7ab90de2a459b1a8dd5b"],["/tags/关于我转生变成史莱姆这档事/index.html","69d3cfa3258b5505655a1ed6d142bd44"],["/tags/冒险/index.html","de198fb177d4b8ab0ad42a8ad466d0ff"],["/tags/函数式编程/index.html","ec6f97523b7bc890ff379a4dad34aa0a"],["/tags/刺客信条/index.html","a7af56617d8e0844b7f83dffdc996b5e"],["/tags/卖肉/index.html","a642a8358fd1e638ea59769015046c1b"],["/tags/博客/index.html","d42fc17da2186b82e892cdc0b7792a67"],["/tags/去月球/index.html","c16781d2bd21c3448f8909d8456ddb87"],["/tags/可汗学院/index.html","d3ac5a8696470504712c2a2cb0fce541"],["/tags/史诗/index.html","c91242c07f01dc276386de91a1aa88a1"],["/tags/吉卜力工作室/index.html","ec542dcbc553ff5bdb3227350f3ec648"],["/tags/名侦探柯南/index.html","20577fc869f89a5f23929d0825d5a5b4"],["/tags/后宫/index.html","0929e38770ef94e5f21d4f4b95d137ba"],["/tags/咒术回战/index.html","443ce68ee042a4f6e724e047c40164db"],["/tags/哆啦A梦/index.html","9b521ddd62f591f8e71cc647b5740005"],["/tags/哈利波特/index.html","31eea537997a0bda0af85fbdc58c1f4a"],["/tags/喜剧/index.html","3ef2f5db959b2f3e7ce934475a6e7249"],["/tags/喜羊羊与灰太狼/index.html","a51f4785ebe0c545590e2292fc59c1fe"],["/tags/四大名著/index.html","887e9e255cc7623f5594a1dacec5afe0"],["/tags/图表/index.html","a03fa3205d7427b06dce7672659b0d7d"],["/tags/复变函数/index.html","9cf4c3931f1b08c887fca005fa084247"],["/tags/孔乙己/index.html","0d5c9c72adb3762a2e463e50441b7498"],["/tags/字符串/index.html","33b9a452838233d239198504d71a0e95"],["/tags/学园默示录/index.html","3736d3072dc2c2253e87b3eb342e76ab"],["/tags/寻找天堂/index.html","c24df6030b5d6f6357b64b3c7c41212f"],["/tags/希伯来大学/index.html","5374d4b794752906971d6cdde073d21e"],["/tags/异世界/index.html","68049f43c7fd853fb72605c959c48f38"],["/tags/微分方程/index.html","4cd0e29add625c4949ed64422b14bac4"],["/tags/微积分/index.html","57d9a50619c1b9ffbdecd0315eadad89"],["/tags/恋爱/index.html","2f830dc9146f34130b20b0497e3a31d8"],["/tags/情感/index.html","c625449138751d052af27952d2dad224"],["/tags/指环王/index.html","ea712f88f1579a66f025dbb2c143408f"],["/tags/搞笑/index.html","7c2447996ee71d9701be22beaa278071"],["/tags/教育/index.html","744aadfb7e1e8efcc03d60fb3f2913e8"],["/tags/数据科学/index.html","54b63b6fd4f9878b6dfb05233c095985"],["/tags/数据结构/index.html","182e618c064f3203dade083552527375"],["/tags/数据结构与算法/index.html","940bf0b93fab4be70d6c330eae06fc1c"],["/tags/文字排版/index.html","0b143dd97f5a9f17832e358e2fc60ab2"],["/tags/文明VI/index.html","b8ed4402ba7acc7d5e7133a4f5c372e8"],["/tags/旅行/index.html","68845bdc7e46cb6f36ed2a3124f2b546"],["/tags/无彩限的怪灵世界/index.html","556dde30c63ef8c7cf078203abc9fc26"],["/tags/时间刺客/index.html","ffedeb7590298a7e3623da5d1efb808d"],["/tags/有生之年/index.html","2f2e59f71664f834268a5fd94a03c566"],["/tags/李商隐/index.html","092c0a6e02189327e4281de8e244601f"],["/tags/李白/index.html","d93a544ce57e9eee9c7c5f848bce96a8"],["/tags/李贺/index.html","f487fa8c681f63f46e740985413e0df5"],["/tags/杜甫/index.html","8118571ddbe087e2f0c2cae0e8538476"],["/tags/校园/index.html","7e429d57feb762c4d6a6fc3347fb4b13"],["/tags/概率论/index.html","7b2e19b362158e5b77786503fb9c93ea"],["/tags/正则表达式/index.html","75dcc8bfbb1c01a41f9006596fb44292"],["/tags/死亡/index.html","1ab2abecfe5659b01f4e019aad7af35f"],["/tags/水仙/index.html","7efb80b747330eb44ed8abf3ab2ce407"],["/tags/治愈/index.html","1ae4cb2737b9349f7007f3d89117ae8c"],["/tags/烂尾/index.html","d1840a613fd596b860156bc343751743"],["/tags/热血/index.html","70d556798af099f84abdf1bb6360b908"],["/tags/爱国/index.html","3ea2949f3ce695434c67b517aeee8854"],["/tags/版本管理/index.html","05dfebb02b92c4a117a336fab9b16d62"],["/tags/玉子市场/index.html","33d480437dd2ef4bbc4963ef0e499a52"],["/tags/玉子爱情故事/index.html","45c72542ba8fde5dea3ddbad8ddb339a"],["/tags/王维/index.html","8f0db65e40b30e96474af6d69deb3473"],["/tags/现实/index.html","271d5f2d10831a5aba7feeed568dd9bd"],["/tags/甘城光辉游乐园/index.html","9bde542ea8b0373e236112fd492f2f08"],["/tags/白居易/index.html","a7b5d842e70b2a4176c23fd60be2f908"],["/tags/白毛/index.html","807220a05ca420f5fd6ca80872f6939c"],["/tags/短篇小说/index.html","61dc6fe063e0b6c0accf5a7f10f77f46"],["/tags/神话/index.html","7e5961d99a78a91864800350e437ad2e"],["/tags/离散数学/index.html","4e5d7625950f22ac64eec8b42411efe4"],["/tags/种田流/index.html","4b239679cad8cbc19f45be5723a5b2f2"],["/tags/空洞骑士/index.html","7552f5866c5e419cf511c65acec72d8e"],["/tags/童年/index.html","008e7cb9e9b8aec94144564332adcede"],["/tags/童话/index.html","e573192e1eb4cec27a84a53db3273f51"],["/tags/第九艺术/index.html","2708ab6ff24e2133fb9b955052a3899d"],["/tags/策略游戏/index.html","bf55af904a45945e75868f2c010f65c2"],["/tags/紫罗兰永恒花园/index.html","36c6cd3fa53e447d7d724c7867bac3f2"],["/tags/纯爱/index.html","e4605fdba1fbfbb93058bda1f861fa17"],["/tags/纵使手残仍大爱/index.html","0d9c724a357be3232e65c67c457981e2"],["/tags/线性代数/index.html","47b474646350b24323e3cc57b1ca4016"],["/tags/编码/index.html","e78a786de5445430a23db9c8968a442a"],["/tags/致郁/index.html","83e45264282364bc0fde74fb568f340f"],["/tags/苏联/index.html","e1a8b825692d4bac266c8b3a7231b99b"],["/tags/苏轼/index.html","4e05330cb7bd56e4fe4b143ed37601f5"],["/tags/英雄/index.html","337f5537e595ba1f3d80daf56a1320f4"],["/tags/计算机科学/index.html","bf3d08823414b4894ad88a196e3410d5"],["/tags/计算机系统/index.html","9c5574d93b88410f8340a4675241a91e"],["/tags/词中之龙/index.html","c1ee6d8a6b97ec07329805ab09b18b0e"],["/tags/诗仙/index.html","4d9afca57ff1194be59c30316eefae04"],["/tags/诗佛/index.html","f1cb2248d4fbd8263fc23e0a883dbf76"],["/tags/诗圣/index.html","8a99a3eb7d075f8615cf36309bf4c615"],["/tags/诗词/index.html","a826946c75067b665b40c7564f24a0b9"],["/tags/诗鬼/index.html","ad4f48d4b401225e1900da82e65b45a3"],["/tags/读书/index.html","7e858ef1a784ad09a22d18dc211232fc"],["/tags/豪放/index.html","0f546f5823a535c5c6c5288bb5c9242c"],["/tags/跳跃/index.html","1d61a89bd14d18d1c18c588a4bc7dcab"],["/tags/辛弃疾/index.html","04ab0af93f8ca368005e4c41151778b5"],["/tags/运动/index.html","37615a91dec3e946e0d2063c7369bccf"],["/tags/钉宫/index.html","60a863d12fe3187cdfce74407b865fdc"],["/tags/银河战士恶魔城/index.html","d9b105e8e4d47211a09428f6dbf2b6fe"],["/tags/陆游/index.html","982d56d49d3a21c0a71faf27bfdab99b"],["/tags/零之使魔/index.html","262474f9ba29e3e08c706e1e2bccf381"],["/tags/霍比特人/index.html","03d76193c8e3cbc2e65ab7ce82cdd3cf"],["/tags/飞屋环游记/index.html","7fea0c0c11b8eb57aafdcbfd6e8cd99c"],["/tags/魔戒/index.html","e58391aebc71667806f9d625396c8e2d"],["/tags/魔法少女小圆/index.html","61c7af70ff21a34a0d254404f8ce5196"],["/tags/鲁迅/index.html","de2612bf2ca9bede247f6d603196c8b0"]];
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
