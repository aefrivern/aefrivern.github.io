/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","63f0f7fb389d5e3b260c96bd7e328203"],["/about/index.html","e7fcd12cdd19482d80e67ec4755ee676"],["/anime/index.html","a78f91ebe8d0f20237dc6d9cb506c043"],["/archives/2022/11/index.html","a3e168020b51204bf6537356fbab66f4"],["/archives/2022/12/index.html","9757514562c9e99358401e6d3457b8a1"],["/archives/2022/index.html","330b0e5c8ef1db5f122a7b4e9ae22df7"],["/archives/2022/page/2/index.html","60ed4f296f88c679624646aaf4ff2098"],["/archives/2023/01/index.html","9b043586e0064d06b9dd6757034655a8"],["/archives/2023/02/index.html","900114e2b3b10197c1f674e577c89340"],["/archives/2023/03/index.html","46eadd87e470e65171aef6fcc1053b97"],["/archives/2023/04/index.html","3e0cb89e3eb89394405bef52f3d6fb47"],["/archives/2023/04/page/2/index.html","83cac287ba0de7058aade58ba6ebc975"],["/archives/2023/04/page/3/index.html","f6cc0284e75701557aaf5c7e7cd4b6af"],["/archives/2023/05/index.html","8abbee31cbb340f4b8f6457b5149510b"],["/archives/2023/05/page/2/index.html","9c613417619ee13db1be3a15e9820eb1"],["/archives/2023/06/index.html","fae26a8df7364009347615ba6908f360"],["/archives/2023/08/index.html","b6f644190064f5296ce0c484f7695a79"],["/archives/2023/09/index.html","1d334b098f1dda8985a7f61cdbf39a35"],["/archives/2023/09/page/2/index.html","436506ded981a467c5b770712150f39f"],["/archives/2023/10/index.html","576e655d8cac1851e4bc7404a8803836"],["/archives/2023/index.html","f59f60c1b695fa26456ffc39164c4d93"],["/archives/2023/page/2/index.html","4b083982225b14896b3bab770fd13951"],["/archives/2023/page/3/index.html","271b28ef4f295b36a5b82002e02cc648"],["/archives/2023/page/4/index.html","01686909242701f3c1f8da7fff95ab42"],["/archives/2023/page/5/index.html","0f11bb47a469d683f4550dc729912da0"],["/archives/2023/page/6/index.html","27cfbcebad3da2b3be8e07243bbccbb6"],["/archives/2023/page/7/index.html","35346da7dc7424741b2ee151892f38d8"],["/archives/2023/page/8/index.html","520cc33001681d8f8b035b70b2c69e39"],["/archives/index.html","dc775c4a43569b6401bd21eebbccd644"],["/archives/page/2/index.html","79ace549fbad1fe02ffc255ceea5b108"],["/archives/page/3/index.html","9e463aaecca1b13623cb023abb031ce9"],["/archives/page/4/index.html","0568ff9c489515c117675126d105bce4"],["/archives/page/5/index.html","00b0ac1cca3e8785b5519ebea1dbbb2b"],["/archives/page/6/index.html","21bd015341d84d3bef22603ac67cb7f3"],["/archives/page/7/index.html","8bb640e350618d7852a663b9488b5642"],["/archives/page/8/index.html","8915e8aa8d47a040f8974a89c0c2366e"],["/archives/page/9/index.html","adf6d3a40777807d45ef31a056067180"],["/categories/ACG杂谈/index.html","2be2ded7fcf59f7726deecd68276dd7d"],["/categories/ACG杂谈/page/2/index.html","e3ff962916ed888f7d7b67f46cefe1bb"],["/categories/ACG杂谈/page/3/index.html","2562c1d5a1ba34d198b71bca1b7351fa"],["/categories/index.html","de261a63484a61792e8654e0b84a1f9b"],["/categories/学习笔记/index.html","b63dd9a54f958769ab4479a295b6f086"],["/categories/学习笔记/page/2/index.html","579b5314a6829555a95031ca939b46de"],["/categories/学习笔记/page/3/index.html","f15dc6ef9b20e67fbab8e5de9ca1eb82"],["/categories/工具/index.html","4ef3430815270746f55d657a73f925fc"],["/categories/工具/page/2/index.html","2cdd4ac78b19c597ac12e4e84d6efba2"],["/categories/游戏人生/index.html","dea27aef3147177974c7f88691998ae9"],["/categories/游戏人生/page/2/index.html","5f5634f9b3bfd9c8e733cd87a1e4c313"],["/categories/读书笔记/index.html","348166ee527d208f639e4fc6e1ae74e8"],["/categories/读书笔记/page/2/index.html","76347826ed9ff00940422c6658e25536"],["/categories/闲言碎语/index.html","6aadf3cea0f9df15e00f0b5f55585b33"],["/census/index.html","3af54afb1900a57e212748bf50058a50"],["/charts/index.html","c680cee5d4262af36cfc91a1457e688d"],["/comments/index.html","325dbcb1f1ed4f7bf3b1d5c0a35aba1a"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","8aab2e49fd249b6f4b63204fa8882770"],["/gallery/index.html","1dcc7152096b417385703f658fd36238"],["/gallery/wallpaper/index.html","d232eea19f75e0f586862deb7bee038e"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/UCB Data100：数据科学原理与技术/DataFrame.png","e6c0b5b29de36cd8b467e52344d8d800"],["/illustration/UCB Data100：数据科学原理与技术/MSE vs MAE.png","347859217d6bc16b428fe457c00f4c98"],["/illustration/UCB Data100：数据科学原理与技术/Pivot Tables.png","88d47bc8c69ac0ec18415870dab20f7e"],["/illustration/UCB Data100：数据科学原理与技术/Tukey-Mosteller Bulge Diagram.png","7b76d3505a1fb03f06e9c9569d757d78"],["/illustration/UCB Data100：数据科学原理与技术/groupby.png","c7cf52abd16b67ddd3ee39f1d65163c2"],["/illustration/UCB Data100：数据科学原理与技术/安斯库姆四重奏.png","cd1114adeaaf8be53b57b970b9ad9f2a"],["/illustration/UCB Data100：数据科学原理与技术/数据科学的生命周期.png","a31f31c8aef19f1103642e34aa9280bd"],["/illustration/UCB Data100：数据科学原理与技术/采样.png","290455ceaad9dfa53b878f115289b53e"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","669a3861955a301e15a0dbd777dbaa8c"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","cbbe4dea77d7ebfb3df42cc0f4869a3e"],["/page/2/index.html","2536aa5e246bd7bc7cac35f1f6a7ca52"],["/page/3/index.html","0e9258dc39d67e8e3fc25191f4d6689b"],["/page/4/index.html","c31e093ca772c232a2276c23a49c30b5"],["/page/5/index.html","a5d43fd6ade74aad5d6ca8718310ab63"],["/page/6/index.html","93b4b990264a7ecf5b9169c5939ed2cc"],["/page/7/index.html","e7d898fcf721baa51c0ab329df911e5c"],["/page/8/index.html","2487a91caae1ca498793b279543dffd3"],["/posts/106331b4.html","fccb9929518216c6c9dfc6910c959aa5"],["/posts/1185a02e.html","bbd45f92bde5ff601da74d2a03b58591"],["/posts/167c7c45.html","b78e06404988f4db9422e52ef6b842fc"],["/posts/1743dad6.html","d31371fede2bea0db1b44edecd509c54"],["/posts/175a8e1.html","6689b4ab1fde3384ba4b4b6b27e3d109"],["/posts/1be398e4.html","de9474d18f19d47f62114ae23f969e3b"],["/posts/1c5a0321.html","d6d2dc9e6a36913dff5a2efd1db0680e"],["/posts/1c5b1e9c.html","a17f0d8307053b41ac160ca248d61f1d"],["/posts/1ec7973e.html","55c25c5ae8f1304ff20ae58b2d7033cc"],["/posts/1fb82448.html","6b41772628796a1f369c1066d10bfe92"],["/posts/21f18fd2.html","b5bce05847a6fe09fc6fbe0540863df6"],["/posts/29c507fa.html","c5a0ff317fcab95d0d9d01d478323657"],["/posts/2f34eb00.html","d15ed5cabe2f0355c48c18cc7163aaf9"],["/posts/2f57a694.html","1e6d9f4c340d35fee42034d4030ab608"],["/posts/374b54d5.html","edc09aef4addfad0a9637b43e31392a5"],["/posts/3871b764.html","0b8856277cc70d61850ee96677c5aa51"],["/posts/3b308caa.html","749ec2b6691ee1c9b91e224b1058fd72"],["/posts/3c3cdb74.html","ad1e0e96152084e6f9fac0e0052df45e"],["/posts/41f65cde.html","2772e986b789ee6aee7cda395f96e442"],["/posts/4208fd6c.html","1457443d187586418d0631fb48f1654e"],["/posts/4392373e.html","4e5f36e90ebbe83adeea0708cd879370"],["/posts/440ed920.html","174c64ff06d3cfb7dd26b53c7d0db840"],["/posts/4d2b51ac.html","6b2c28e22dd090fdbd220365d576a95a"],["/posts/4db1a52a.html","4402d675fec83156602a239515b651f6"],["/posts/503ae89.html","f0ab4845d11477ea61d4ce4a10c3fec3"],["/posts/535fd087.html","75464d08ecbfcc8ae71335b925ead2be"],["/posts/5923cba3.html","6de006af631b16706b2b8711c8a45d96"],["/posts/5c1bb6b8.html","7450b53c98b66b8517aec91b1df11d88"],["/posts/5dc45f0c.html","aff7fa4f7f0762592c566e75caa65c7c"],["/posts/5f2caa2c.html","8ef51fe7f42e41e44b6d1a9b76320397"],["/posts/616be7b6.html","c217bff2696b32bf0210d7186f04a9ea"],["/posts/62a1ec0c.html","e6b86ad9bf06f1172381849e9e613d08"],["/posts/69fb361e.html","d5e77ca3e90db1282aba21a4740022e7"],["/posts/6a8518ce.html","222b5a5b83354d8fc34b3a52b56f26da"],["/posts/70685119.html","144a77c85c77752b20e6a1ead0223f3e"],["/posts/743db4aa.html","44dcc32a1f905375514fae4dcdba3595"],["/posts/7b67faab.html","85b4dbc592dd64d1c238071eae34e4db"],["/posts/7b76be01.html","dc3cf3f98b69e9eb0f4ccbda6345dae4"],["/posts/7bff939e.html","c23ecb8b2c91ff2add0cb3db7833d6a4"],["/posts/7cc4ca07.html","a1e3242ae319510fa0d89e405ece8c68"],["/posts/7d257210.html","3466aadc69ed9c0ff76f30d831e2c45a"],["/posts/7ea0cbe4.html","5d8fefb2d6774ff0a2acd6858d05779c"],["/posts/7f382da2.html","1db5739281cdf299ea06ed89ca191041"],["/posts/8207aa48.html","29de16050cc4d57a7313ee380c29af93"],["/posts/836ea9bd.html","8c3444dcbac8ee7f88b6506c0807ee3a"],["/posts/84cae757.html","3b6c1afdf2820b3d2f0a9c4414c66216"],["/posts/88200036.html","10b99386cbd164a7c36f1eed57c75236"],["/posts/922fb64d.html","7ce0ca29d9592b46f844db0b643909bc"],["/posts/98332b29.html","27fc11000db2313334d29554e66d0610"],["/posts/9a1a736f.html","6fe3ada9cb922f61d203f01af71f1bb1"],["/posts/9addd0bb.html","bf0fb067e243b584e5d5a3a8ed4d7b70"],["/posts/9b44950b.html","a1493fbe491ec22a1389aa6cbb896a91"],["/posts/9ca149ab.html","fb5883b4b2d69a23322c983a45eb272a"],["/posts/9e4446bf.html","cee2df57fe229188a5264ca87a0b409b"],["/posts/a0271e58.html","c937290824b968715744566cd5e1fc8d"],["/posts/a13c1dba.html","c87ecb148a253636bc073ff6f55fa488"],["/posts/a1f2a4d4.html","b21153ab9ef95c750f86bb46d3aad03c"],["/posts/a5f300de.html","14a58d796a54e738e241042018f884d1"],["/posts/a98766fe.html","50516270e9d3279f6167dc367e1b5bf9"],["/posts/a9f63847.html","617d923512e65d4c141567a260072642"],["/posts/ad31055e.html","c4013e1432b860c069aa4a559b94541a"],["/posts/adcd6e20.html","328133e5ed855124575d7346a4168cc7"],["/posts/b0fa4c58.html","ec962a6d580ac27a7539be8de918803e"],["/posts/b1168675.html","38bdead46ff5775dd5c824d479b15640"],["/posts/b2feeab7.html","5b8438733c8a21be482189b7cdd66363"],["/posts/b6d66f1b.html","05048fae3d0f488dcebb721c84dad66f"],["/posts/b7525d11.html","23c2744eb9a070395d66c89b61808137"],["/posts/bb154b63.html","eb1683cad7b52c71708b923eb04129e6"],["/posts/cc86a40d.html","09aed6519dadab21cac10658d520fe00"],["/posts/d36531a7.html","366bb209bac8f218f5102b45aae4bf66"],["/posts/d442e51a.html","9003b924127fa8a6c96f6349cfb8a192"],["/posts/d7fdf01f.html","d8c62590ce531446e0f57bf55eee56a5"],["/posts/d839b0e.html","a15907386a5fa103f07089220294d261"],["/posts/dcdf88c8.html","53c72c31e8d4afb482a415deacec611a"],["/posts/dd378ae0.html","20fa0325fbd7d0cf5f9418983503fdf0"],["/posts/e15be301.html","48b45f3936082e5674b7087a81ab75bb"],["/posts/e2e4b4ce.html","7ff12a019c9901be0b98502ea4858fc2"],["/posts/e35ef5bd.html","49150b00281646562b11f6f289548e8b"],["/posts/e462ba83.html","4b00dba492f35f2e3a36cfb15dbdc7ee"],["/posts/e53204e6.html","34c0ddf566faeef444eb96d246e47896"],["/posts/e5cd9bbd.html","751fdf0f2f5f70e609b9c3150d6ed7cc"],["/posts/e7a99a5e.html","af8ce0988b67f21832b6123550a27cf2"],["/posts/e9318100.html","37eb477c33da4e66b55f3c50960deb3d"],["/posts/ed52e6a0.html","dd678e3ed15bb98a60edb18534fe6620"],["/posts/ee0ac59a.html","16d9a2ac638b95415c8e2095ba89e915"],["/posts/f09c1ee5.html","07cf923bedcc47cee29e2792213391b0"],["/posts/f4af26a9.html","9ef12e02a7bafadecdf2efc2214f5933"],["/posts/fa3cd62d.html","bc6d19ff64d85c39dce1384317ebfb97"],["/posts/fb3794ef.html","25feddaf6b87747ff8c0cad4eac5772e"],["/posts/ffdfd6d4.html","c72d72f9e2748afe395da21bebf8ffa8"],["/private/index.html","418a67cb716772084424c844df4b2949"],["/random/index.html","01f03dd66c18b46b7ccf63c29cb56738"],["/sw-register.js","8856d7ac05a4aa87c704e14b4a0c2de0"],["/tags/ACG/index.html","8836c16275ca9780bbaec085485ad2be"],["/tags/AIR/index.html","03e6bec3a2125c5e7525bc1eb4a28852"],["/tags/AliceSoft/index.html","4f1052df98090db72d18c90e768b6455"],["/tags/Butterfly/index.html","6c1757ea8423085079763802edc9c09f"],["/tags/C/index.html","ada4959c76144e46df3360837709732a"],["/tags/CMU/index.html","b9321ba7f998495668e2e4ced1f5554f"],["/tags/Crash-Course/index.html","11f87e4fe65ba544130a305acce2c026"],["/tags/Eushully/index.html","cdfad450370a8823ecbd217fa4e84b76"],["/tags/Everlasting-Summer/index.html","e318b588b6f98a5b871c8b3c06898d8f"],["/tags/GDB/index.html","18cbdd8818d845e24bf3c65827eeae0e"],["/tags/GRIS/index.html","a68d0b3cd5ee529aa9f1c04da861247c"],["/tags/GUI/index.html","7520fe3350e7b177d9b779bd0a22a71f"],["/tags/Git/index.html","327befcffbc820db0473daefdf698e06"],["/tags/HTML/index.html","93c58e8494a53fd1598eba8bc22a5c96"],["/tags/Haskell/index.html","af082e05ff51319aa007bed75e65f049"],["/tags/Java/index.html","c76d246dc8665fd9ed2336385f1cc04c"],["/tags/LaTeX/index.html","0ab8a727eb10f364fc02c9ffe20b31b2"],["/tags/MIT/index.html","0a111ac29193828f94b04b1488bedb17"],["/tags/Markdown/index.html","623149fec7ed54ea0e036adc9cce94b1"],["/tags/Mermaid/index.html","ea3e5c8bac067a9ef1334d85a5e7cc96"],["/tags/NTR/index.html","418186cfffe545d7518cc26403ebe78b"],["/tags/Pixar/index.html","4d5bd6308837052387c3aea82148f54a"],["/tags/Princeton/index.html","d7f58225070c24880ddd770725e8634a"],["/tags/Python/index.html","63b9a8c3fc1a22bd1d2093a8027d57c7"],["/tags/Qt/index.html","b0ce7d2f2619edcd4f40980103761040"],["/tags/R18/index.html","0cd988482ae5c3c8989321b0ff3ca6cd"],["/tags/Scheme/index.html","96513935b04e9a244231ea46e31085f1"],["/tags/Stanford/index.html","5b682503f4829d63fb458c74400e3b29"],["/tags/UC-Berkeley/index.html","73a796bb46d2fcc1d749cfffb528564c"],["/tags/University-of-Helsinki/index.html","5d9e69f52efc6fd219cdb91e311faed4"],["/tags/debug/index.html","ce93fb7fa10dd0663412088627dfebee"],["/tags/index.html","a285b900b409c0d378d4dc4616258ba4"],["/tags/key/index.html","7e8c043e56e82d3db792d60f9227f583"],["/tags/web/index.html","6d5aaebd9da50f3f378f88d3153429a4"],["/tags/三国演义/index.html","1f375b3bbcefb21a4a311f4b5e57b578"],["/tags/丧尸/index.html","63cf1969056e525614b14144b310047b"],["/tags/京都动画/index.html","4bbcd80a350e5f1d2d310edd6e4b978c"],["/tags/京阿尼/index.html","a9baf893fb64cad4a6071c4f73ca15f9"],["/tags/体系结构/index.html","38543a0ebe3d02dc1a6661c9ef1e9c56"],["/tags/信息论/index.html","74185d9a0764c53bc3c260b754d2a3f4"],["/tags/元稹/index.html","d9a5cf89349519a8a29cb9044d8d266b"],["/tags/公路片/index.html","2ced53bdc39c97cc03e575a155399e8c"],["/tags/兰斯/index.html","2809d76e82724eaf83465197aec8c528"],["/tags/关于我转生变成史莱姆这档事/index.html","206c3d753d3b56b608724c920795de0e"],["/tags/冒险/index.html","aa8c80eef8aac67b3b0d39c41b46c065"],["/tags/函数式编程/index.html","eb42a5f5fad4a65160a81b1b0ab6b867"],["/tags/刺客信条/index.html","eede6d27fcc720c7442ceea48e1a70ff"],["/tags/卖肉/index.html","9ecb34194b3709be62d2b37fda32b739"],["/tags/博客/index.html","83cb12b30957b092152677b8c3235b67"],["/tags/去月球/index.html","a3ca67fe9045ce519d91fd457bc7f8de"],["/tags/可汗学院/index.html","bab6b6b8498d806e7e53655d2c9ccafe"],["/tags/史诗/index.html","b4108ad5a9f8e7685e9c9d46f046b5d2"],["/tags/吉卜力工作室/index.html","76bc12587d7776e1b60fee1904e2d5ff"],["/tags/名侦探柯南/index.html","2480d15314d6b54aee6cd6e6d18df3db"],["/tags/后宫/index.html","371c78f5149679fbe938a5191d0120ec"],["/tags/咒术回战/index.html","d6a40cedbdad58c2e6f43cd0a1b769e9"],["/tags/哆啦A梦/index.html","31887d767878a9fdbccdb44df73a0fda"],["/tags/哈利波特/index.html","43f3806ca4f6e49157952d2693d2f6c6"],["/tags/喜羊羊与灰太狼/index.html","53b4b0b4ae33fcbcaef40ed12455bc93"],["/tags/四大名著/index.html","0bf3e1b02294c652104378ddf666cdaf"],["/tags/图表/index.html","6ad76bf66cfefbf29ca445c60917cd17"],["/tags/复变函数/index.html","a4e2c275b470f3837226dfc1e30ca47d"],["/tags/孔乙己/index.html","a4a44d052b9727ae894c355380078c73"],["/tags/字符串/index.html","17056f7d0f041d7728396945b840844c"],["/tags/学园默示录/index.html","a336f3b3ffbf5ad795f09bdbe116aa32"],["/tags/寻找天堂/index.html","639da306fe0e227f79c9182826440f4f"],["/tags/希伯来大学/index.html","4e1487a1cb5298b1fcdbb1f5d30c0a1f"],["/tags/异世界/index.html","b6376dd97571d93547aa0f30749fcaa7"],["/tags/微分方程/index.html","57e7ae1a0b008c96d16c64935e3f226f"],["/tags/微积分/index.html","4c3252f4b6ca58cf91ebaf9e513e7951"],["/tags/情感/index.html","0505d9a1e47ecde22714b7f2e7e629cd"],["/tags/指环王/index.html","215a7919cbdf61ecf4f311b78eb226f7"],["/tags/搞笑/index.html","b0c9ab0a988bb29852bf2696eadfc45a"],["/tags/教育/index.html","7db51647e8683de45848c2bbaea213e5"],["/tags/数据科学/index.html","6f5a19f7185100584353587b426ad1ba"],["/tags/数据结构/index.html","c680614fd786fbd49bfed2fbc9aa52b1"],["/tags/数据结构与算法/index.html","6b093e7bc8a49cdc556c3dc8e668f700"],["/tags/文字排版/index.html","a54301e5443af656880aa74738acc908"],["/tags/文明VI/index.html","1c245cee43b10aa49510c93462491d14"],["/tags/旅行/index.html","742349b7ad5fbcc9c8c3de7d9151698b"],["/tags/无彩限的怪灵世界/index.html","51371c9949ebdf74e7f8e164ff861e99"],["/tags/时间刺客/index.html","bd977628599eab517455b22ac87f6210"],["/tags/有生之年/index.html","b8bffdfb577d62dad9cc7356db9af70e"],["/tags/李商隐/index.html","3b7e38f1039c479b771cfc1521e85c66"],["/tags/李白/index.html","26c07471938c05457ec71294661b4da7"],["/tags/李贺/index.html","635c3df9cd5e837f5d3db38527f78e11"],["/tags/杜甫/index.html","1cfbae7b03979d3f48db86f34d14c218"],["/tags/概率论/index.html","2206c52610be013e78c92de0b6c53bad"],["/tags/正则表达式/index.html","3936ff20e0d9fd8a4c34a41135feab3a"],["/tags/死亡/index.html","7fec3378609b7a871ee1b9a7b41af4aa"],["/tags/水仙/index.html","2d857f842cfbfb2fcd8fce5a8f270891"],["/tags/治愈/index.html","81314b51e2de5f03172df327da28e315"],["/tags/热血/index.html","d1bfc66a5ef3dfcd5e2dfa9ec7cb5804"],["/tags/爱国/index.html","2ce19104cb00770119b49f6386d575af"],["/tags/版本管理/index.html","de834483ce4e360724e0ab3ebbcef768"],["/tags/玉子市场/index.html","5838338484fbe40225bab2078a28a9ba"],["/tags/玉子爱情故事/index.html","eefd1ee07f8cbe65c3f4f11d164fea23"],["/tags/王维/index.html","42c2c8b5d6351a78c31589823da29654"],["/tags/现实/index.html","c3a06d4029459da81b017085ffa2c9c4"],["/tags/甘城光辉游乐园/index.html","901c26ff98a76c0a9ea2cc59e91d3b50"],["/tags/白居易/index.html","576ddd135cee169cb7e0b6ac7c37a356"],["/tags/白毛/index.html","dd3d54bcbcac378365d055f33a98b4f0"],["/tags/短篇小说/index.html","a138e5f545614f4b471c57ecc9dad855"],["/tags/神话/index.html","60a4fc4eeb20b8af19cf7c53bc55a2ae"],["/tags/离散数学/index.html","dcad4f1cd550c71b14f823f0f6e6e399"],["/tags/种田流/index.html","342dfa37aa49178037e0305c886243a7"],["/tags/空洞骑士/index.html","3dbbe4adda7723bef368d31c6ae59351"],["/tags/童年/index.html","11f67403239e3496f8680071f663f788"],["/tags/童话/index.html","82a25d41d1f7778787d3f32707fc35f7"],["/tags/第九艺术/index.html","efbe72189f28747aab4285bce6fb428d"],["/tags/策略游戏/index.html","f2be5a97969da7f8e17b2509b8cacb3c"],["/tags/紫罗兰永恒花园/index.html","c963d6237bf1825a80bc566b6f92940b"],["/tags/纯爱/index.html","29c919e90f10d52bacaa70fb7ed937f9"],["/tags/纵使手残仍大爱/index.html","23828ecde436520d72c7effeb22ce2df"],["/tags/线性代数/index.html","96189c2c88f07ce4cd82e8aa6fd67bca"],["/tags/编码/index.html","d61955eee89db0c3db2cd1e7bddb1c4d"],["/tags/致郁/index.html","abef47d9120c882ed582a69130067217"],["/tags/苏联/index.html","1d3bd8890e4dd9ff696d6a58f35a90e7"],["/tags/苏轼/index.html","bae10b1ade3d92e7a4b675fd9690e0ef"],["/tags/英雄/index.html","01dc1df2e2c6b3c385e2afcb461c31c9"],["/tags/计算机科学/index.html","8f958f877988dc6c48f285213a8d57d3"],["/tags/计算机系统/index.html","217c0b8a3ac940042653e74d98b6767e"],["/tags/词中之龙/index.html","709fedadfb34a1130beae3230f136743"],["/tags/诗仙/index.html","49c1d51d2cb84d8d008013c2157431d5"],["/tags/诗佛/index.html","1ab0b4d74804ddafd42f37566adaa6e4"],["/tags/诗圣/index.html","79f6a244305805f3ececa4da2531794d"],["/tags/诗词/index.html","f146200b2560ab374e85a15ca7c8acdf"],["/tags/诗鬼/index.html","c079bbadb4de39fe49051af93acfef46"],["/tags/读书/index.html","8a60dd6743bcc644c79a91583e6e668d"],["/tags/豪放/index.html","544cc2bfec7555747c3432b8a9df3bdc"],["/tags/跳跃/index.html","5d4bebfbc13f9ea6208ae7205468218a"],["/tags/辛弃疾/index.html","ba86dcf9978c3c31f17913fd47c5d5fa"],["/tags/运动/index.html","3c1ec5b0118dfad46982b2b07dafa92b"],["/tags/钉宫/index.html","46657987a4eed17506c58d318c0e11fc"],["/tags/银河战士恶魔城/index.html","06a419e927e8dbb6f8d47748c3d7a2b3"],["/tags/陆游/index.html","05deaa8b170e47d711421559c23b4230"],["/tags/零之使魔/index.html","d8f1044546dd78ccb56f82ee14aa2060"],["/tags/霍比特人/index.html","7bdeb7d1cb98128d8d4d7de6a589a541"],["/tags/飞屋环游记/index.html","0f329b750db0295d68dde8690c81ee0d"],["/tags/魔戒/index.html","1bfc2709a6be714df3f23f2f64b8cebf"],["/tags/魔法少女小圆/index.html","3f1e815d93233555ef6cffeb04a38966"],["/tags/鲁迅/index.html","d56c2b65f97553c97c85e812e139424f"]];
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
