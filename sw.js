/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","115d5be47a255d10173b1bcddcce3ebc"],["/about/index.html","2e4ec75360c3e44fba2bb6fe7a7128bc"],["/anime/index.html","d615624525525b37830f8ea802053ccf"],["/archives/2022/11/index.html","2a48785da1945c738d87dbc90c540bef"],["/archives/2022/12/index.html","f249af72b1e0f05169a8b31887ff582a"],["/archives/2022/index.html","f4f5acb35b7d7577879cc9c9b3e02d35"],["/archives/2022/page/2/index.html","8bc794732404ffeb2900dc47ef0efed8"],["/archives/2023/01/index.html","8a72d562d5af51e6c7d4e17c37b6134a"],["/archives/2023/02/index.html","c3b4f4427f2e7dee5eabe531850a4f72"],["/archives/2023/03/index.html","3b9310434f82d784ddebcb2c26cf9fab"],["/archives/2023/04/index.html","a987a853d5088572e011eee4804cee0f"],["/archives/2023/04/page/2/index.html","b717074117a73e71d382149471ed73bc"],["/archives/2023/04/page/3/index.html","d646635f8e04c83f4b28a267c365748c"],["/archives/2023/05/index.html","d0f26f82ad5ea27b48f0979f0e5522eb"],["/archives/2023/05/page/2/index.html","476584b80a0de457eb6f027d7a2fbaa8"],["/archives/2023/06/index.html","1b9bcecb89b702628660ca6bde1d5a9b"],["/archives/2023/08/index.html","58908088d8d831710638979a81f4aca3"],["/archives/2023/09/index.html","f4fa00c7c0432929f1db24ffe7cbe7f4"],["/archives/2023/09/page/2/index.html","b95b5c7f659edffbc3329d5c1a433c7c"],["/archives/2023/10/index.html","d2a86bed880c3bdf259173fc3d8bfec7"],["/archives/2023/11/index.html","39c6cb6a1d09c5decd1cc049c3afcd20"],["/archives/2023/12/index.html","c884612e556569f7e13d1b0251d13ddb"],["/archives/2023/index.html","938b7401b8ec76b6798831a12d95b038"],["/archives/2023/page/2/index.html","e0af15209c71839635f600a2c4d4c888"],["/archives/2023/page/3/index.html","fcb70bae857dabdfe6d8c195c04857b5"],["/archives/2023/page/4/index.html","dc70da4f233b1e03bd3dda31d55c1422"],["/archives/2023/page/5/index.html","3ce70cc415c4fdd99878e76de245c0f7"],["/archives/2023/page/6/index.html","bc32c7b4ef7b80faec9d3ff79ef34a84"],["/archives/2023/page/7/index.html","14dc29637981c51bcd43596220044c11"],["/archives/2023/page/8/index.html","e0ffec6a24358e6d339c3cd483aafc0c"],["/archives/2023/page/9/index.html","c1f8487d586a878b1ae9ebe1e78de27d"],["/archives/2024/02/index.html","f807aeef062cace6b12a4a2bcbae4a51"],["/archives/2024/03/index.html","e0e3b6cce97ab5ae787f1a0653e9080c"],["/archives/2024/index.html","08a960f89f0745af6bd15756e2d53b0d"],["/archives/index.html","7ca6f6a47c29da2e8c1b2bd36ed532ae"],["/archives/page/10/index.html","ad80c08b93798f260185aabe042c4f1b"],["/archives/page/11/index.html","a8ff245aed77fa9944b74cdfbbb4cf99"],["/archives/page/2/index.html","e149a91f367091d7fb2687b69b675154"],["/archives/page/3/index.html","3bfcc4f425b2fea07a5a098b09df292f"],["/archives/page/4/index.html","b3d49a452a5d27d6265aa3672689df7a"],["/archives/page/5/index.html","dea575e26b060fcc4e44168d95505dcf"],["/archives/page/6/index.html","c411578d24159f2ccb6b3e1ba305a7ef"],["/archives/page/7/index.html","77ce0f20a9bd2c225b716d6f9f11aa49"],["/archives/page/8/index.html","11e9fe4b2b4aa9863513762c24854048"],["/archives/page/9/index.html","68a0b50a674577c508ec7945f7e7a72d"],["/categories/ACG杂谈/index.html","2050846dc42ce88350e8cf8261ac6097"],["/categories/ACG杂谈/page/2/index.html","993f10f8dc48dabb94753ece12776a76"],["/categories/ACG杂谈/page/3/index.html","81d47e013e8e2cc33b1b74e97dc44948"],["/categories/index.html","31f814d6ede9fb2837a5c2dc71c3c2cc"],["/categories/学习笔记/index.html","758319a946cde78ee51998cef2a64a80"],["/categories/学习笔记/page/2/index.html","902a556253f17ebf4107a3817e404ec9"],["/categories/学习笔记/page/3/index.html","37cd4781cd4fabdf3d85988e7f692c4e"],["/categories/工具/index.html","a621b216c1e6ae4c0cbe7577297be113"],["/categories/工具/page/2/index.html","f73278e0a65fa441c259f88d4223a622"],["/categories/游戏人生/index.html","f090c82817cf4e11d55e0d501f890920"],["/categories/游戏人生/page/2/index.html","e1594dc3d72ae2b0a1e70ad41696f198"],["/categories/读书笔记/index.html","7a93da15a5c0770664dc5080d318fc16"],["/categories/读书笔记/page/2/index.html","85cf57894bfbb1ccd91ec9664e6ee034"],["/categories/闲言碎语/index.html","640f2a8736e8e5d5041ef1e3ab85348c"],["/census/index.html","d2d7fad49185ca7160d3143cc7472d81"],["/charts/index.html","f342e07f2c7f834fdc8c9e0f8fd8f5fa"],["/comments/index.html","2bc352bc532bd43c00611a7125ee52a2"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","a8f892bad92a36029ea68a3871b47640"],["/gallery/index.html","a521ce86bf5e92c168fad11de3c3b0c0"],["/gallery/wallpaper/index.html","3c66393df510690d2e1afd6e8fd6422e"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","42989caa7f8b005e2a759c5ba1c2b81b"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","a24c91d3d96acb1ade671fd4445a673a"],["/page/2/index.html","5d5f4c63edf7086f75e38a5e69e05881"],["/page/3/index.html","658df4b55420b5589434e4589f4fc3ac"],["/page/4/index.html","694dcfc67faddd382d0d68564ad8a05b"],["/page/5/index.html","0c3164468700cf664d0724c6fb011d58"],["/page/6/index.html","c2fb29fba9768d5c838d6b52d203db1f"],["/page/7/index.html","7fa40c13d869109b30f0a8742284c4d7"],["/page/8/index.html","8c53f5832fbf6e27df0dd44547dedf0d"],["/page/9/index.html","6e4013c3b0a89b89621fde4ff52203f3"],["/posts/106331b4.html","a045fea1ed9ea29cd2cb00559b8446de"],["/posts/1185a02e.html","100840f8b90575e76e5543222c56bb78"],["/posts/12e06b11.html","0ef7207b49735b1f33dcb932dc5aaa65"],["/posts/13aafbc3.html","9edeaac6b449815f8b1ead434681f22c"],["/posts/167c7c45.html","ca5434278d38d519cdd502bde1ff6d46"],["/posts/1743dad6.html","b79c165650934e8b8175384b8d71a8d4"],["/posts/175a8e1.html","01e8551e245e2f4e7aa8cfc3f41e0add"],["/posts/1be398e4.html","50a6450e4add012e81e7ab4f4e717810"],["/posts/1c5a0321.html","495f6bf4cfd4da73ca85eaad6014a08c"],["/posts/1ec7973e.html","70494635f1cf0ac097b34fbd692fd697"],["/posts/1fb82448.html","995c6d817d74ce18bfd9848c4a631aa9"],["/posts/21f18fd2.html","2d09b045d0ba4480645786991b8ad44d"],["/posts/29c507fa.html","aed430dbf595ff351348707969c90950"],["/posts/2f34eb00.html","b382933ba5e717c6779244da3c86c6c9"],["/posts/2f57a694.html","b5ad3629bb8e6a9556f2704a8f2fae24"],["/posts/320cf12b.html","1b377c9046ab26b24c6948739924a477"],["/posts/353e70c9.html","6e595733c6d5b5da06b14195e6db36a9"],["/posts/374b54d5.html","d1720e8af51c04e4eb218c617165dfc9"],["/posts/3871b764.html","6c7558dd2bc35b3e41009aec75d4f676"],["/posts/3b308caa.html","1280ee71c22ee633320d2aa4f8752f6d"],["/posts/3c3cdb74.html","be13a08844e99f93ef72b6b5657d861d"],["/posts/41f65cde.html","2c7f5c5a32edd5ddfa2d74dec66da75f"],["/posts/4208fd6c.html","10781a82badb6c5dd4ef0ccf4249353d"],["/posts/4392373e.html","ab98ac80e1708cb1e5e7cf9430189d1b"],["/posts/440ed920.html","c10e8f912053818e37da8de761d22fcc"],["/posts/447a8d68.html","5b559e203973ee0662d84dd638502f3b"],["/posts/4d2b51ac.html","055efef25703ac724736ee593017f475"],["/posts/4db1a52a.html","b8fe2200e0e3d726643a9076acf15a44"],["/posts/503ae89.html","93ec233bd49c567585d97c5e2f7348c0"],["/posts/518e2799.html","ceeccfa3ba0660ebd86077742cf6be19"],["/posts/535fd087.html","f3c6b3e5d33ecaad8d5dad5ba2e40124"],["/posts/5923cba3.html","f4de7e845ca9d12ce338852ea9dbc3b4"],["/posts/5c1bb6b8.html","4be0f87483654e759740579059b7da27"],["/posts/5dc45f0c.html","9d0ac38c90a4465337448ea618674d87"],["/posts/5f2caa2c.html","60323a40407a45040adf4590ee7c7055"],["/posts/616be7b6.html","c2f3c006b77ef6571108697784171157"],["/posts/62a1ec0c.html","23db00dc87a209f5ead4222f591d7d0a"],["/posts/69fb361e.html","638e561b79aff157dcda3da0ee1a8c0e"],["/posts/6a8518ce.html","d0c97558a88c89ca7b89950c3a3bfac8"],["/posts/70685119.html","4f8e252637d94d9830eb32f2c02d9186"],["/posts/743db4aa.html","b92fd01e3f495eb5ec315cf52380e013"],["/posts/7b67faab.html","aceaf78e0747442329d20cc050ea75db"],["/posts/7b76be01.html","f59288bee94e6e29891af729f6ad7d1d"],["/posts/7bff939e.html","ed19821804c7d3eecaeb50ba973db3a2"],["/posts/7cc4ca07.html","45be18ae93295fa00f4852c3c27fa746"],["/posts/7d257210.html","39454f11df4cf9482ec9aa2baf7fc07b"],["/posts/7e6a5c94.html","cb6b0b9ed1f26bb310c3d5fe65afc601"],["/posts/7ea0cbe4.html","e4d2150ff80ec05f1ba53b2869c2c518"],["/posts/7f382da2.html","fd6f1ded026e10364e07d4d83dd8f26a"],["/posts/7f8d32f4.html","7a132e082a05030ce34f07a531adb4f1"],["/posts/7f92999e.html","3823a67cd3c1591fb925db90bae01f3d"],["/posts/8207aa48.html","c135a2d14fc9911504f04012afa47b45"],["/posts/836ea9bd.html","2e27a4247c2609cc87a8dd044f4af53b"],["/posts/84cae757.html","6413010d6a1f7304740b33dd6c0f4d1e"],["/posts/88200036.html","8ccdbfbe6b72621342baff74356a246f"],["/posts/922fb64d.html","314fafc1ea40a3f94a565f2463c24ddf"],["/posts/98332b29.html","7742b48407d75de4fe8c3e1c3b461ce7"],["/posts/9a1a736f.html","0a0049d2ca9b37afa84ee72f35eb946d"],["/posts/9addd0bb.html","a75d7a90669523c76f02da58138dcd0a"],["/posts/9b44950b.html","efb7bb4aa270cf0a7d740da7c0e66735"],["/posts/9ca149ab.html","e8c11d9edfc33492615b3b7718ddabc5"],["/posts/9e4446bf.html","d5f0ff35be2c8e6cf66da57cad0031aa"],["/posts/a0271e58.html","1465224722d7c954ec38b1357013a065"],["/posts/a13c1dba.html","f83ee0fe3da6fd4052e6789b3148f20c"],["/posts/a1f2a4d4.html","6c4a0facdaa7561b10215900fb90235d"],["/posts/a5f300de.html","1223b59f5e8f7dea6d56ce4a8005c212"],["/posts/a98766fe.html","78d263e0e20554cc18e5c65ec6fcd237"],["/posts/a9f63847.html","c86d9d09a2cfffd8db038788d2a2ef37"],["/posts/ad31055e.html","070e2b7c5818d23f91cd6ac442c05446"],["/posts/adcd6e20.html","414f2a39d3cb48e5f93eb1a4a6280d4c"],["/posts/b0fa4c58.html","20e5386146f15080febbf4cf16b0655a"],["/posts/b1168675.html","b402009019284f70acef43ac225fbcfd"],["/posts/b291b1dc.html","7edc0306852df66268356af787d858c1"],["/posts/b2feeab7.html","5e6168e6da126c6de490215bfd3f7330"],["/posts/b6d66f1b.html","9cee47920b251c6b592b41e4e4b97b7e"],["/posts/b7525d11.html","9f5f96bd9534c3a45d19b5da580d5bac"],["/posts/bb154b63.html","e99aed6b19718f585a4509f5fa7efb3a"],["/posts/cc1b9611.html","675ec8b4ea22fbcb71f933a5364c3732"],["/posts/cc86a40d.html","a5c7e5f63b0f9a8f971077bfc79bdc5d"],["/posts/d36531a7.html","7481f102d490a1530ab30296da9b3605"],["/posts/d442e51a.html","f4c2d7ee862528d2827f45fc70860297"],["/posts/d7fdf01f.html","7d9bc62cc6f0928169a09d88378daf3b"],["/posts/d839b0e.html","0a9f461b66a546e9bcbaf4eb46ed79ac"],["/posts/dcdf88c8.html","bd05e16649d04add7ee7a4e17e320410"],["/posts/dd378ae0.html","124e9736dc052ce796e8767e2553426d"],["/posts/df2849ec.html","9e550b552457562100a8141a14a56907"],["/posts/e15be301.html","e0f3aa5b6d9555cc8ab2c2ad2fe00300"],["/posts/e2e4b4ce.html","9bfc3d30b7b29a5def49357d2ea52eb4"],["/posts/e35ef5bd.html","ec248c616861f8bad689941a28d5e8d3"],["/posts/e462ba83.html","94b2a19a9a01dfd9e151656aedc6a900"],["/posts/e53204e6.html","b21205dd6fdacf5f9a191c183a2ec318"],["/posts/e5cd9bbd.html","56e6379b533e27405cd63749ce47d7f9"],["/posts/e7a99a5e.html","64c44989ad36ace2765de400c425fc4d"],["/posts/e9318100.html","5a5271df27d35e1149eb2aeef592750b"],["/posts/ed52e6a0.html","8b24ac2f400f3da9af0dfc5152fa3b06"],["/posts/ee0ac59a.html","97f7fb95e20ba41daa80761ae9e9a56d"],["/posts/f09c1ee5.html","7fdeaeaf65bfb487bd8334cab5029e4e"],["/posts/f1252f66.html","66af6f44818e67b422223c9276193d5a"],["/posts/f4af26a9.html","baef310d6b043e32d761a7cd805eee64"],["/posts/fa3cd62d.html","035559e7f6181b0a3ee3917eb40fdb69"],["/posts/fb3794ef.html","3a27573e1b372b31d6dcd7e5c3aa87da"],["/posts/fda4520e.html","499a008025f624ad5d1123e7bedb79bd"],["/posts/ffdfd6d4.html","552ec11670dbd069564b4d37037e26e0"],["/private/index.html","de5e4d94077e36827885386f39268ff1"],["/random/index.html","7c65f0bf431c0aef67dc16ad33f1a2a5"],["/sw-register.js","054316bbedee6215b8838f53bf49507a"],["/tags/ACG/index.html","937a1c285473670b808abd2120573d9b"],["/tags/AIR/index.html","8186181a80737a61d079850c9fc50238"],["/tags/AliceSoft/index.html","57c55325c56498304fb113e670c9842f"],["/tags/Butterfly/index.html","0be2bb7a5eaef393bfeb0eed02513a96"],["/tags/C/index.html","1a806f97f5e26d465442e8bb4232778a"],["/tags/CLI/index.html","3efc7ab6554a135152262c05c3e33304"],["/tags/CMU/index.html","eac0323259bb76a05147de3bac6d2e1d"],["/tags/Crash-Course/index.html","145a642fa0e33a81ec9bbfad867422de"],["/tags/ETH-Zurich/index.html","6b077f8cb9a8e9aa9c6610d0f7957a23"],["/tags/Eushully/index.html","51638abe05ac4e0d5d0b4f6dc07415aa"],["/tags/Everlasting-Summer/index.html","bcde391016e33756b7bcb94a9e169c48"],["/tags/GDB/index.html","be198369ab928894e780e1edd77a97ac"],["/tags/GRIS/index.html","bf3aa26db23000378b0f9e376b9b1e48"],["/tags/GUI/index.html","8007f6be7f54df5585f3b5f3d45336a5"],["/tags/Git/index.html","28297794670d157a64b44f4631e27878"],["/tags/HTML/index.html","7ba0ad8eb6c7c322f5ab99ffb0bc1667"],["/tags/Haskell/index.html","263f01dccb80aa7fa2739bfd1cdb2c78"],["/tags/Java/index.html","944246687ea08e87a1faadfe16abf6ab"],["/tags/JavaScript/index.html","8c34449d83fbac114eb56528240303bc"],["/tags/LaTeX/index.html","cd8427a63f51dba7e8ae57e41ff84af6"],["/tags/Linux/index.html","52f3209878cc705f3de1c940a13d71bc"],["/tags/MIT/index.html","c8dd9a8e25c799de8f63230b74ae82ec"],["/tags/Markdown/index.html","6b14525f62b6f72a59bc3965ecc14526"],["/tags/Mermaid/index.html","ca971f4de6363a4bd5dc267cc1a34d3a"],["/tags/NTR/index.html","bffab04424e8565494115cf1008e7e9d"],["/tags/Node-js/index.html","0362c8bb3e16d45f44b8fb53b78cf415"],["/tags/Pixar/index.html","987efe426c0d2bc0db052a472538bac5"],["/tags/Princeton/index.html","e8932c98a3e75927d6f692c92e69d507"],["/tags/Python/index.html","a09d0fa82e127e94470d026cca887325"],["/tags/Qt/index.html","afb779c439861f66b4a4dac4fd3ed41c"],["/tags/R18/index.html","e43bec9c16ab76541e0e0683191d9724"],["/tags/RISC-V/index.html","966d72d566d75e528a94c399cdbbaa64"],["/tags/Scheme/index.html","43437b2bad05c8c03738b191f94c0299"],["/tags/Shell/index.html","f7c77108e8bc407a6f5f81c0af8d94ff"],["/tags/Stanford/index.html","de61d9b565c260fd15cd07e2a78388eb"],["/tags/UC-Berkeley/index.html","7b3f28de4466fd40136b2ba9b7849375"],["/tags/University-of-Helsinki/index.html","58861f5fdde06d4ce9ead4df3420e111"],["/tags/debug/index.html","a9fd0771f7de7d6ccd60293d38917675"],["/tags/index.html","f3b8c310eefa2717c10f43c048411451"],["/tags/key/index.html","d3103070fc2acdfb26adfa44c04e97e7"],["/tags/web/index.html","8789ea0dc4402d674fa202f7e960a50c"],["/tags/三国演义/index.html","9f6bca1487f9075e665bfa33c092956a"],["/tags/丧尸/index.html","c901037819f755e8d5cd969ea485b67b"],["/tags/京都动画/index.html","090b37280c16fd03e79901756dcef664"],["/tags/京阿尼/index.html","721fe417844882939ca073ed14fe557d"],["/tags/体系结构/index.html","b241bc0c03f407996996d5df255d1c17"],["/tags/信号与系统/index.html","1d842e4a74c1a521fa8f3ba47c507abf"],["/tags/信息论/index.html","a95adea18650c3ddf5b8d4a904cb0260"],["/tags/傲慢与偏见/index.html","f46574b7f93f48a5e2df72bd80022f38"],["/tags/元稹/index.html","38b6889c4187813574b290b10363ae04"],["/tags/克苏鲁/index.html","91df57412e73b2ea684c384839f90ed2"],["/tags/公路片/index.html","c541fe21478be8f0ef993b7cae49ef70"],["/tags/兰斯/index.html","b62b4408e65c7bf89dd65e82dc06260d"],["/tags/关于我转生变成史莱姆这档事/index.html","986d262a13690655d257920768099a9e"],["/tags/冒险/index.html","90609849deb8a6f09c3dfead26a76fc4"],["/tags/函数式编程/index.html","0d75d2cb99a01b55c7d93bd4be4e8f64"],["/tags/刺客信条/index.html","8f2575dd5200f40befadcf2f1cd280ba"],["/tags/卖肉/index.html","59c694d7c5c473f92036bdaae799891f"],["/tags/博客/index.html","13e66ae8ae6d2dfe660631377b904e7a"],["/tags/去月球/index.html","a2832488705e65ed375da1f0aecca206"],["/tags/可汗学院/index.html","89bbfb33536b640200e62ccb0f779038"],["/tags/史诗/index.html","5a3c76043942af7e00865ea151028ed1"],["/tags/吉卜力工作室/index.html","3e806ed21e0f68bd092529f493adb964"],["/tags/名侦探柯南/index.html","acde616caf8c13503c7127486afcf2ab"],["/tags/后宫/index.html","a8de30b88b725c49b1e021023f68d270"],["/tags/咒术回战/index.html","5d6fe72bafa2201e2a516348ae586360"],["/tags/哆啦A梦/index.html","8505fcd729c3d0b356daf130617dcb97"],["/tags/哈利波特/index.html","19f19f9223cc44a59d08de5e7fcfc557"],["/tags/喜剧/index.html","b875bd27a7077366bc727aa3035d927a"],["/tags/喜羊羊与灰太狼/index.html","db78358ba94c60d63633b25dfa0929b4"],["/tags/四大名著/index.html","cd2bb4b9f20b350e6aca5964b2d6a9d6"],["/tags/图表/index.html","eb6c3550c0b7cc70d8f54dbbe7cf957d"],["/tags/复变函数/index.html","545c6097cd8cf8b94a4d49ceb2db7cc4"],["/tags/孔乙己/index.html","840aae4d7ac6877016b487bc01250c99"],["/tags/字符串/index.html","1f3023aff7e36b87fa88ed533e4e7496"],["/tags/学园默示录/index.html","581c7fa1e34152fb930d85e602ed2a41"],["/tags/寻找天堂/index.html","1f751ee032eee0e616fa57ead686fd0d"],["/tags/希伯来大学/index.html","7bfa5f136037678e9cbc5bce0f01b1d3"],["/tags/异世界/index.html","5baadac8dd44aad3644027a668be634c"],["/tags/微分方程/index.html","c34b10bb069377cebdec1a4da4d1e6db"],["/tags/微积分/index.html","de8963501ed8b2cf809519bb6be5a952"],["/tags/恋爱/index.html","46b6b92035314c89efd2a4e73944ac13"],["/tags/情感/index.html","929a5b5076808f593bd7f75d00c23454"],["/tags/成为简奥斯汀/index.html","85b6e53850856a772a8e794d416d9d0b"],["/tags/指环王/index.html","70e414a6d844fd7bb866d9f7066f64ec"],["/tags/搞笑/index.html","77f953bc20fc40f3ec1388c9adb04c38"],["/tags/教育/index.html","8fa840665c1bd28b3b13b3d90ce2aca5"],["/tags/数据科学/index.html","bf289a72aa652c7ec4d09d10eb968ed6"],["/tags/数据结构/index.html","74e39c0f633caf457985708bd956cdd9"],["/tags/数据结构与算法/index.html","a4cc9c7189c0ea5c0d6d2e99e1642a0d"],["/tags/文字排版/index.html","33d87d42461e2cf2b371229302e738f2"],["/tags/文明VI/index.html","aa33c7e0eaa243f2f430862d286e19ff"],["/tags/旅行/index.html","d11d680c2841dc6862c2977a10d06c87"],["/tags/无彩限的怪灵世界/index.html","0a2f93307806cf90a91841417f1433d5"],["/tags/时间刺客/index.html","1cff9dfb97d3e609e48c84b1a6a35dcc"],["/tags/暗黑地牢/index.html","1e8744f5bc2dde3e7304e2af2d5eaf17"],["/tags/有生之年/index.html","80cdefdc30186516480fd111d8180c70"],["/tags/李商隐/index.html","c39c92474ebcf8315e01c4c1e5d7fa67"],["/tags/李白/index.html","5a6cccb5876c6e13256b5e5dbe96825f"],["/tags/李贺/index.html","2ba90f8321e21a21d42ae214f0ce2aa8"],["/tags/杜甫/index.html","cb8387f158e51e20a4a6b68f9d23b488"],["/tags/校园/index.html","3a1ef67321ee78129836777db44b8a57"],["/tags/概率论/index.html","a642d61c645569620ca30d945c357a0e"],["/tags/正则表达式/index.html","612bc40990a7b0eb3a1a8b2498f40137"],["/tags/死亡/index.html","f9f12cd283e27d1718e77694b5e8e534"],["/tags/水仙/index.html","f5af3a8fbca3f8a0afa9ed2a1dd25ad7"],["/tags/治愈/index.html","c418f6ad4bfc5f9df5b4e3a805d30afd"],["/tags/烂尾/index.html","a3c0df16d5a5b9d21d80d37b544c05b4"],["/tags/热血/index.html","45aef101c45c7cfe814fd844907217c4"],["/tags/爱国/index.html","2168e78acb00a025f1504c5b63c193b8"],["/tags/版本管理/index.html","f1ea7766995bc6f3abddadca8453df66"],["/tags/玉子市场/index.html","a5fc8534e52310f786a7375a36cc6b71"],["/tags/玉子爱情故事/index.html","07eb98d715192d9476a80fbcb3239b1a"],["/tags/王维/index.html","e2edf58723e3a07b21ad738aadb6cb3e"],["/tags/现实/index.html","ecc67dd129e5cffce126a8f3a8e5ff8f"],["/tags/甘城光辉游乐园/index.html","285759b751719616f6c0b514f3bab43b"],["/tags/白居易/index.html","1864e53b5fecc2d54c74860eef7697e9"],["/tags/白毛/index.html","aae76293dab6c9c0b9278f8190775e51"],["/tags/短篇小说/index.html","6ba34f9c3e1447fe10bd1cdc44c27bd9"],["/tags/神话/index.html","41e4b930deea943cd956d1728f1149ee"],["/tags/离散数学/index.html","e4bcbad6d18c5f0baf586abdc0f6b553"],["/tags/种田流/index.html","348a71dc00c1acadca6b18d754e06b09"],["/tags/空洞骑士/index.html","b45a38514d4f4f384fd933c320812b12"],["/tags/童年/index.html","dec068c113015ab3f1242484983520c1"],["/tags/童话/index.html","81112476c23da0ed8f4ecc6f6331ed35"],["/tags/第九艺术/index.html","c3c0703c09fbdf4aec133498ea9c9744"],["/tags/策略游戏/index.html","88fd21f4714b4f65c47dd3217e8c52fe"],["/tags/简奥斯汀/index.html","c765cbd7c9bc1e43995f283df765c12f"],["/tags/紫罗兰永恒花园/index.html","d7cb3cbfb492413e8cb48e4f0672b607"],["/tags/纯爱/index.html","7692ea55a3401060633537e9d845d4d5"],["/tags/纵使手残仍大爱/index.html","07298c788bc5bb5bfcc5cf19555acdfa"],["/tags/线性代数/index.html","6c459930e761f7dc5b32e13bba782ebb"],["/tags/编码/index.html","558aee1806178f1ed1e53ce8f1c42e10"],["/tags/致郁/index.html","56fde5beea88a0649a695dc72d784c1a"],["/tags/苏联/index.html","41d8f87ac8fb2f208392493a2e4eaf08"],["/tags/苏轼/index.html","ceb3215c07f16fc9c7deff43faec5938"],["/tags/英雄/index.html","7322a4dc10dd35eebd0b7985b0409cdd"],["/tags/计算机科学/index.html","d6367fb2e1e83385a36e0d8d17276276"],["/tags/计算机系统/index.html","5a4d89d1ae33d894295f6e161ffbc942"],["/tags/计算机网络/index.html","c12fa3ed9cb3884d8e357e0b9fb3212f"],["/tags/词中之龙/index.html","9eb0e81dfe5901641f8c8e184f98ec77"],["/tags/诗仙/index.html","6cf6fbc5f313bbf57052613f7471ab70"],["/tags/诗佛/index.html","02ed1be92dd789e19c8075b5fb83fec9"],["/tags/诗圣/index.html","e101d56e92b70c2c4147ca432c5121fa"],["/tags/诗词/index.html","0a8e07b127c517e504b2783512145cce"],["/tags/诗鬼/index.html","4bb88c904c7f8b412248f0799e37c070"],["/tags/读书/index.html","60fce70ebfd06727830644c991886311"],["/tags/豪放/index.html","62f4a63d1fb7409cf9b6ff05613eee48"],["/tags/赫尔辛基大学/index.html","a1ec6b0dddd43692565cf4a0b4e96ada"],["/tags/跳跃/index.html","568880569d86f3df366b696f9a840877"],["/tags/辛弃疾/index.html","cb674b281796823e77c11ceaae12308a"],["/tags/运动/index.html","8f1d627c29b93b8085bcdb011722196c"],["/tags/钉宫/index.html","055e03f448c3fc040e4a746ec179870b"],["/tags/银河战士恶魔城/index.html","7c43447c7f3286d8f9c83e30ab7db89a"],["/tags/陆游/index.html","3bcfa05ffc87d0770c8e1f4c33fc2acb"],["/tags/零之使魔/index.html","15f9c4b9bff919785baa343a6a31bd55"],["/tags/霍比特人/index.html","90cf69c537c63b19008c7e8d6ea068d7"],["/tags/飞屋环游记/index.html","8d8b6d860745d7276fc3039f4da09294"],["/tags/魔戒/index.html","37908e2385a3bb28bc18ddd0ff89f30a"],["/tags/魔法少女小圆/index.html","70458713bcf6a88e9fadd73446b76fdb"],["/tags/鲁迅/index.html","1d1959e20c3aab7162711087014c8491"]];
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
