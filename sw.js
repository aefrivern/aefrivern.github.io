/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ecc5ad3c621e6df711f8df68c054f61a"],["/about/index.html","d3964123c98b037c6bcecccebfd381b3"],["/anime/index.html","0e44c8a05e9e305443292ef72a29e22f"],["/archives/2022/11/index.html","42ae5fc278c4f438474bad0e960350f1"],["/archives/2022/12/index.html","1ccd6b692a946d3748e352e50f18761f"],["/archives/2022/index.html","2257819357e83cb0d4e67743ebc8af43"],["/archives/2022/page/2/index.html","1af192734b34da0be259ba9833ee3594"],["/archives/2023/01/index.html","ea9a65dd80b6dbb341016181d50d4dd5"],["/archives/2023/02/index.html","8d2328fcf01c10109d6758cf2a349202"],["/archives/2023/03/index.html","782177956641f5668c5588b58eae88a6"],["/archives/2023/04/index.html","ea656425c33e24ad08d4199acc33caca"],["/archives/2023/04/page/2/index.html","8ebe55b81a780438b0c52b683e938fb0"],["/archives/2023/04/page/3/index.html","e3921de35cc583b3107a496f64337be1"],["/archives/2023/05/index.html","39ce372688fb8fb2301e101c348eda9f"],["/archives/2023/05/page/2/index.html","cc6e98fb4311e5761ed0548b3b669109"],["/archives/2023/06/index.html","06153245bd3097a7336450a4d8e14d33"],["/archives/2023/08/index.html","28d02ccaa09cde48592d4cdc8e1a1ff9"],["/archives/2023/09/index.html","b424f18de93f92f2e74cd7f9d6b76624"],["/archives/2023/09/page/2/index.html","5adf0a79aa58db67e1670a8c71438b24"],["/archives/2023/10/index.html","2b32c0c9cee1841c6880e0bce8bf6a13"],["/archives/2023/11/index.html","29fd8322f03d36efd30e5804fc88c79d"],["/archives/2023/12/index.html","6fa2829695e334f172f0cdec17af10b7"],["/archives/2023/index.html","795da35d74fd4f1d0b90a95b7b36b5cb"],["/archives/2023/page/2/index.html","5cb82a88f9da00b4d1fde74108409235"],["/archives/2023/page/3/index.html","60c11052aac0b51275e42053958f156b"],["/archives/2023/page/4/index.html","5e642bd91345da469ae4a2cd8b899cd0"],["/archives/2023/page/5/index.html","1bacbb6541b5f59a627e6fb63966f031"],["/archives/2023/page/6/index.html","52fedbd3e5f03741897dad4fd649bd6c"],["/archives/2023/page/7/index.html","39fbf25b6525f9e1ba4117eea6851b80"],["/archives/2023/page/8/index.html","6837a6d820193d6ae1ac66778bd67c7f"],["/archives/2023/page/9/index.html","c300d6c87d659e8bd6ae8d771f59bad9"],["/archives/2024/01/index.html","97c37a2e04b14c63dbc98f77628ba531"],["/archives/2024/02/index.html","fab925cbd042d16414ab5df61221acf9"],["/archives/2024/03/index.html","f86c5c600d83d6468d28d133d5b5d58f"],["/archives/2024/04/index.html","5bed34a60189016e5125258cc8c9c16a"],["/archives/2024/index.html","1a4cfa8d45be08ef262c45862c02808d"],["/archives/2024/page/2/index.html","621df309e1d1242e56fadc3127792213"],["/archives/index.html","450cbc60a7ac11616563fe5fe081e3bb"],["/archives/page/10/index.html","16cda55b7a874ac66c5edb858795ab20"],["/archives/page/11/index.html","f89aee4ce39e937c8e848b2108cfe5de"],["/archives/page/12/index.html","575278f37d94bae5521505c5aa4b617a"],["/archives/page/2/index.html","02bbadff31dfaae7c183913c2f44495e"],["/archives/page/3/index.html","36ff17aabe9179df96507131c87bc0eb"],["/archives/page/4/index.html","dbbf9cc9f4c5d97dcf6a8faf0d5e9b04"],["/archives/page/5/index.html","61f09026abb2617ba3f52b72e851b6a7"],["/archives/page/6/index.html","5d49065334b2f3b5b6c49674c451ffb2"],["/archives/page/7/index.html","ecd4273d276a92edd817149617cf1c90"],["/archives/page/8/index.html","0314ed62fde05e9a006391b22da7ec48"],["/archives/page/9/index.html","8c415b0c661673701cfbd371b7b83fea"],["/categories/ACG杂谈/index.html","d2f99fb576349a938fa7f141f02a7c35"],["/categories/ACG杂谈/page/2/index.html","96e83c50a44d8fe5162582ca86b483df"],["/categories/ACG杂谈/page/3/index.html","c6c58bc392e101cf8cfa5b1c0bc6a553"],["/categories/index.html","de2a21f0bfa461251e5db79c605579be"],["/categories/学习笔记/index.html","825560bff97eeb7b9d7386735e749644"],["/categories/学习笔记/page/2/index.html","471b1b598512c7c89761ca01794c0171"],["/categories/学习笔记/page/3/index.html","432dda3660bc46769eaa8c896bfb7d59"],["/categories/工具/index.html","70b9acb9dd53089d74b2fc42f6af34bc"],["/categories/工具/page/2/index.html","d2d014f7d334c8800c4f0689be41b2b2"],["/categories/工具/page/3/index.html","364196855d67e9f56413131d7dd70aa0"],["/categories/游戏人生/index.html","ab3367f676d0078d0d3535165e35cb37"],["/categories/游戏人生/page/2/index.html","bf262cd92c766140395b0a8b64056fef"],["/categories/读书笔记/index.html","07ffda627cfb4ba1dcc2ba60f7e65e61"],["/categories/读书笔记/page/2/index.html","e7c012da7b11820e0cfc13967c80a175"],["/categories/闲言碎语/index.html","021895a7d426dfa89454b62a8e4b758e"],["/charts/index.html","59d98069b68b438a9027f87a1ad6ab68"],["/comments/index.html","df7807d7ae4f8b1e1bd4bf14ebc5d8c6"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","83cdf0f5a4c0ed6c00d4bb8f2d69c302"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","cb0eaf99bc9c333c24123c8a31bfb126"],["/gallery/index.html","e57dd3c36d6046ee5779ffe1e6fbe93d"],["/gallery/wallpaper/index.html","f205087ce0b72e36dba0129d66bf04f2"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7d187f82d5179e68f8367a66a08c55eb"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/10/index.html","1f2ec9b1c56eda17f1df13df006d4fba"],["/page/2/index.html","4c426452d758ff45467285c3cf96d97d"],["/page/3/index.html","935918ba4c623107e46dd6a334a96ce8"],["/page/4/index.html","5292cc06e9e7747b386cf9f21d4d8209"],["/page/5/index.html","2a7108025250c796efdac414d433fe3d"],["/page/6/index.html","c2f7748cb60ca338e4586189cb4308f9"],["/page/7/index.html","48661b33ddbb3e396e33f8b737d876e9"],["/page/8/index.html","3d9059aa84ebb9b469bc3f22434bef87"],["/page/9/index.html","b594de168dd49d8057cecafe66453be8"],["/posts/106331b4.html","cf9c247c482a6e3fc824ca297041515c"],["/posts/1185a02e.html","d3c5a7d4e285985160fa708808e1b5ff"],["/posts/12e06b11.html","0fcf952312e925c268e0ecd7577bc42d"],["/posts/13aafbc3.html","dbcad0fcde8fdc1558586101eea0190f"],["/posts/167c7c45.html","f79472b1253e38ea07fdadb860ffdbe3"],["/posts/1743dad6.html","1ed06a4701855a9666f4e228a5b61753"],["/posts/17492bb9.html","076a2a0fd65f76ae747e1b4e63b6e812"],["/posts/175a8e1.html","4f7509f9edd5a534edb0ca6b97fe6746"],["/posts/1be398e4.html","d5a705ad1af2d7d0a8181b19e3dacd67"],["/posts/1c5a0321.html","7b9aebe6416bd5048e725b942fffe850"],["/posts/1ec7973e.html","b2e89827cee966bb825c282e12946f09"],["/posts/1fb82448.html","f01894ed8477e9b45d57f23127d3516e"],["/posts/2069534c.html","a7937e2bd8487d0bc29152cd479d8d4e"],["/posts/21f18fd2.html","db1c0d04bf9ee9ee0381c863adcc7b8e"],["/posts/29c507fa.html","e4f2b83817cd91c89a31c6cc0f2c586e"],["/posts/2f34eb00.html","3dc5610117861efef23b76702c5b85cb"],["/posts/2f57a694.html","3afeeea0fff6e63bf60135aa8173f4f7"],["/posts/320cf12b.html","dc5b92ddfd905912b80e17539eff8b77"],["/posts/353e70c9.html","cddaa5935a6981aa5dd3f84a77b2ac0d"],["/posts/374b54d5.html","6beee5d8a4d5e978685226a622a40e02"],["/posts/3871b764.html","48b93f67141b501935b41ef8125f51fd"],["/posts/3b308caa.html","31c49758f98b51058ecb64b3029b07dc"],["/posts/3c3cdb74.html","ba296074a2ec46358c143ae5ccdcfd70"],["/posts/41f65cde.html","743679a1b04d77e0afea5cd5becfddff"],["/posts/4208fd6c.html","a5fd75916a7507fb0cee77e21e02ce3c"],["/posts/4392373e.html","44c46de25472edcfa49dc0615cf96221"],["/posts/440ed920.html","fda94bae509f290fb58e06e88352c0b6"],["/posts/447a8d68.html","7ce11e95218ba0615c0fca928f9fbf6c"],["/posts/4d2b51ac.html","d990527b454251c0e283ddc6579128f3"],["/posts/4db1a52a.html","5ec37823a1fbd6e01ab30d8bb7d17846"],["/posts/503ae89.html","6a2eaba90900387b9508906a50624878"],["/posts/518e2799.html","b258e6ed3dd60954c8fcacd0b246765e"],["/posts/535fd087.html","37c3bd496aec54f328c1b5e857065faf"],["/posts/5923cba3.html","829b74f8315ff50fdded53302f23257d"],["/posts/5c1bb6b8.html","f7e6f4e4412ef2f73be5b7cab045665a"],["/posts/5dc45f0c.html","8ff6d0aae515b9cca7a729ba2e608817"],["/posts/5f2caa2c.html","350dbf2f6e6eb217176ffa87d283f4d2"],["/posts/60d11614.html","be5346593267670fdf0aa4eeed2d4c74"],["/posts/616be7b6.html","20625134036fa471c5fcd32fa162292c"],["/posts/62a1ec0c.html","ed3c9c1627177cbdccd3cd90b16905aa"],["/posts/6441a1ac.html","e8b3491ef093a18c71f781064a1eface"],["/posts/69fb361e.html","9281cceacd35180c41092afd93ff176b"],["/posts/6a8518ce.html","0eee6d83186963bbc8187dcce6cc08f4"],["/posts/70685119.html","ecc7e5468274bdc7146e07de59827172"],["/posts/743db4aa.html","995012285fa2bcdb4e50d35bdbe54937"],["/posts/7b67faab.html","4ed51d484f99312fdf70c308c2cfa29c"],["/posts/7b76be01.html","782a838042445c09f9056963d975ebab"],["/posts/7bff939e.html","878a051f466917574718dba45cb90577"],["/posts/7cc4ca07.html","7a70b52ea9e64d1cd70f856519cf2c1a"],["/posts/7d257210.html","84385e416b850f6babd0b2b44e71d5e1"],["/posts/7e6a5c94.html","7a474ec13e6fd3afecb9ac682c8a447b"],["/posts/7ea0cbe4.html","8ea4d046799daa562cc305781bcaac0d"],["/posts/7f382da2.html","1991b8663aaedb0ababf4d46a9aa73a4"],["/posts/7f8d32f4.html","7c0ac29b4f5d26ebf2134a792991a9ac"],["/posts/7f92999e.html","a146855ee39e39cf9b7ea13bee1cbfca"],["/posts/8207aa48.html","5879c109bd8d01f40ff3092491b4ad12"],["/posts/828c2ccd.html","b6e7ca01ab77b3993ac82b80c307f3bb"],["/posts/836ea9bd.html","1ca8ecde10fa3e667c6fded7e24bf59d"],["/posts/84cae757.html","0fefbfb2330bbd707439da5492165645"],["/posts/88200036.html","04c98e92084da95a1fd4fff5e19fbe3c"],["/posts/922fb64d.html","b53de108d33bfc8a679a03ec6c3266c1"],["/posts/98332b29.html","266c8cab5e8a561fc0a4b355e93a17e0"],["/posts/9a1a736f.html","4c7ae5701a33673c93bfe324ae7b6d88"],["/posts/9addd0bb.html","5806a67e4961af7ddb6dca0f1d6473ff"],["/posts/9b44950b.html","a88a36e0ce7b8849829c1ba25c3c6deb"],["/posts/9ca149ab.html","557bedfbf9312d5418866eb163aeeecb"],["/posts/9e4446bf.html","95c21b887bb6ec9d86aaf0a6aa627abe"],["/posts/a0271e58.html","c2dc432eee90388ee290649a9382fd41"],["/posts/a13c1dba.html","ec380b1b80f233af9e871b567d7841a4"],["/posts/a1f2a4d4.html","8b98824e21a84174ff7bc51b21c51258"],["/posts/a541262a.html","fb8806dc56034efb03c6eae477cb5e26"],["/posts/a5f300de.html","7a42664f7e4c3ce4f19e86bed8bb0735"],["/posts/a98766fe.html","f65b8fc68413a290acb5f1bfb3faff06"],["/posts/a9f63847.html","0a5cfd2ed09774a3bbdcd2a0e2c42e99"],["/posts/ad31055e.html","35abb769a8ef616078eaf983167854c5"],["/posts/adcd6e20.html","a0684bc2f4dfb216448d69cb0fa0c99b"],["/posts/b0fa4c58.html","7a3fdb2a5d81ef290d20463ff1213ca7"],["/posts/b1168675.html","7a6503bdd9c97db94dfce1ed261fc1ea"],["/posts/b291b1dc.html","67eb88b7e4c6ebb6c550095acbe80ecb"],["/posts/b2feeab7.html","7c1517879944feaf1eb099e740fdb9bf"],["/posts/b6d66f1b.html","8bc399b18fc440b5034f0b744ac458c7"],["/posts/b7525d11.html","263392ef27c4fca6271abead6d956733"],["/posts/bb154b63.html","5f85e77de46e960f53d38e779c17d97d"],["/posts/cc1b9611.html","880daca405b8fa72e15a5f543656d904"],["/posts/cc86a40d.html","d2fb61e0e511466e98f1afa2988e7922"],["/posts/d36531a7.html","40d4fe48bcc673a48ca749fb2a1dce50"],["/posts/d442e51a.html","8c2909ba6ae5c5c1b80d2c4d52b58223"],["/posts/d7fdf01f.html","72041b56c4ca525676e5984907c96c4d"],["/posts/d839b0e.html","b57eb051b8f89fb93904508d01d4e936"],["/posts/dc5fbc03.html","c18080cdf737dcc6edb3d62eb4dc4f13"],["/posts/dcdf88c8.html","0c01240f518598eebb6d2a2485d36b08"],["/posts/dd378ae0.html","da58da029fb282a48350b15361641f28"],["/posts/df2849ec.html","15299bc4bfefb916f1efb8de49020cc3"],["/posts/e15be301.html","2c2e6835636b2244710fef199f98691e"],["/posts/e2e4b4ce.html","bde21539ecdcbf7e82a3381a1be9159c"],["/posts/e35ef5bd.html","70189a44a1003681c544af1a3030183c"],["/posts/e462ba83.html","e4c9cc21daa9d84867642324f97ba3a4"],["/posts/e53204e6.html","b491fe292d5b30b65d5ad764c6f43a6a"],["/posts/e5cd9bbd.html","f238522f6098cf891ba08b7dbddb982e"],["/posts/e5d89884.html","ec2633b5fe6d59b528955f8de5c07c86"],["/posts/e7a99a5e.html","a7b60989147eb0bddab31a5d3a8a4dc9"],["/posts/e9318100.html","1a4177af334478abf5f6985790545cec"],["/posts/ed52e6a0.html","220cf27257b6e124fcf24e64aa72fba2"],["/posts/ee0ac59a.html","e6feae4367d8b65ee5d558d9c356b29c"],["/posts/f09c1ee5.html","c4e5ebb441666335242fb6d217b47d2f"],["/posts/f1252f66.html","9f898d5d6dd985ac4f80faefe63a1b9b"],["/posts/f4af26a9.html","7d9d90a0a35c54ea35fb7056509defa4"],["/posts/f8060ffb.html","3c435dfb6da9bc5d211e8dadc1637e01"],["/posts/fa3cd62d.html","a663e62897a4a7c59c58691026e6012c"],["/posts/fb3794ef.html","8718049969698b2faf542f576a1dfbc5"],["/posts/fda4520e.html","419636fc021d89967c686e0d0fbce4c0"],["/posts/ffdfd6d4.html","ae62ffd0e5821aeb8f0d5d9b45ba7e16"],["/random/index.html","04a36ef89a21cfdaf66326aa9904cd6d"],["/sw-register.js","419b13889b88f353bafd38bcf74c88ae"],["/tags/ACG/index.html","b25e05cde83ceaf15539f7667eecaceb"],["/tags/AIR/index.html","d3098eeec896a26238247d1b5123cda5"],["/tags/AliceSoft/index.html","28cde2f9e2f157aa1396f84bcd150c5b"],["/tags/Butterfly/index.html","045e7ae8f483839186f07df6d5389fc9"],["/tags/C/index.html","8965945dabb746bb92b497878473ea1e"],["/tags/CLI/index.html","6eea5412207bd8f32008d3a5cee346e8"],["/tags/CMU/index.html","388a96c1edfdbefb42dc07c2bc349245"],["/tags/Crash-Course/index.html","3d1d996584ec334db6be67c4d7f12afb"],["/tags/ETH-Zurich/index.html","fefebc5f2063b621ade452a3ce96ae05"],["/tags/Eushully/index.html","403f730dea26a976ae3e7e99c552a321"],["/tags/Everlasting-Summer/index.html","27ab412fa16c31a2974b5452953ebc7c"],["/tags/GDB/index.html","58826270660f3b8419ed2a39bdf073c2"],["/tags/GRIS/index.html","4df9aac7145131c2accf73d7dbff4692"],["/tags/GUI/index.html","92c52bbaca82bd5c3419d86e586e84b9"],["/tags/Git/index.html","a0db0e4d024f8e9d363b87aae386adbe"],["/tags/HTML/index.html","f636791aaed58ae072231ebbafa8c69a"],["/tags/Haskell/index.html","8bcd2cb596a1085daee7e82b18fd6a26"],["/tags/IDE/index.html","0808f0a5306de1123d48ffa290fc813a"],["/tags/Java/index.html","a961532529b3c0733c4b24adfd6d40ea"],["/tags/JavaScript/index.html","a6ab6014ae31e356115bbefb2354a0d9"],["/tags/JetBrains/index.html","c9922e8b74dff1c5162df9115c4c6cae"],["/tags/LaTeX/index.html","612e9a0bb64379e169ff19fa2e0cd177"],["/tags/Linux/index.html","9574d9fc93d08fd0847e372d034d660b"],["/tags/MIT/index.html","698359bea0d42798a39341d677b82310"],["/tags/Makefile/index.html","9e3c4d65ba72e3fd1cd94df132288427"],["/tags/Markdown/index.html","fd771b5051ad14b7631aceb08df87e1d"],["/tags/Mermaid/index.html","a2ad76feaf3757c6b736770dd355d731"],["/tags/NTR/index.html","b5d8d806adf500ae862016cabb65a840"],["/tags/Node-js/index.html","bb6a4091c04bb966b5574df420e614fa"],["/tags/Pixar/index.html","6b55369b73645f2d4ba039aa42e3c80e"],["/tags/Princeton/index.html","0c248477c6a929657008e1eb98d1da73"],["/tags/Python/index.html","9e467c85631ea84b2d20051a05eee335"],["/tags/Qt/index.html","da8a78a1a48d1a398f8e3f4c45f1b436"],["/tags/R18/index.html","096c8d16ee291079494c22e58585d56f"],["/tags/RISC-V/index.html","a0993515c789458ecfdb8a8e2c88698a"],["/tags/Scheme/index.html","b41b2ecad43625d56880170d5ed5c067"],["/tags/Shell/index.html","7225ce7b478014bad1256e929d1e4c2b"],["/tags/Spring-Boot/index.html","8b28e7d43f2fcd84480b4f00f34cfadc"],["/tags/Stanford/index.html","38df569e076ae9bfc2c88841ae31d3eb"],["/tags/UC-Berkeley/index.html","7f4f47e2e1c7d5493e1e3ec77991f84c"],["/tags/University-of-Helsinki/index.html","b515208b2a89af376a640cd842db86d8"],["/tags/VS-Code/index.html","68dbe2b07c6547d78c75b55ae784c063"],["/tags/debug/index.html","01340b06bdbc0ad55aee68ba6cd85677"],["/tags/index.html","963dedd79a5508081a6b0e10aad2993d"],["/tags/key/index.html","d684cb5fb727ea298acc9e5e9f7f6130"],["/tags/web/index.html","08d59dc5abe36ab9c5b616345b3cf69f"],["/tags/三国演义/index.html","ab528a626549fd6fa877411cf0b754e1"],["/tags/丧尸/index.html","72d114e909c1a16765d3d512976ca92b"],["/tags/京都动画/index.html","a43ebed59974252722f61ebebd6d5aae"],["/tags/京阿尼/index.html","70f7f9636095eaf09340ebdf7229a53c"],["/tags/体系结构/index.html","3f218f09747d0c9683974906f7f9120f"],["/tags/信号与系统/index.html","1d044d3e3564f0c69c726c4824d6e1cd"],["/tags/信息论/index.html","1596bc9ae241c7c149e0cf2218b07ada"],["/tags/傲慢与偏见/index.html","73c181218457d3db81b3cecc34bd366b"],["/tags/元稹/index.html","353d5152abc7eaef15c88b9312de960f"],["/tags/克苏鲁/index.html","5fe883d34fd9db39a2ebc66d2d7945ee"],["/tags/公路片/index.html","f4690901eac52b9d0fa7b1016adbd213"],["/tags/兰斯/index.html","6c75965df0c47d5675a99583a69a09ba"],["/tags/关于我转生变成史莱姆这档事/index.html","2f2469a6fd5ca6c3baa8be1bb0e52d00"],["/tags/冒险/index.html","8bb277fdeda82d84305470a1c070c2e6"],["/tags/冰汽时代/index.html","e84d83daaa9ca96e2ecd9fdf8c9949ac"],["/tags/函数式编程/index.html","6c44c9fef822dc0245c2161cb9cf4bf6"],["/tags/刺客信条/index.html","457a1082dafd5884c4e8fa4ac3d8b55d"],["/tags/卖肉/index.html","677f56d64f1cc80d1a065a71b0e5d03e"],["/tags/博客/index.html","c4b55e53a59230eac37906d9034c7634"],["/tags/去月球/index.html","dff11665a9cae8bc271308512d372f42"],["/tags/可汗学院/index.html","b7a34eb75bac71652afe10f3906259ca"],["/tags/史诗/index.html","2307efc1a1986be4cbeea228fd720745"],["/tags/吉卜力工作室/index.html","0c5832dd7976041b555c91cab377d7fc"],["/tags/名侦探柯南/index.html","ccd804dad69c5b49d79c0145e8463eda"],["/tags/后宫/index.html","e9114a44fc7e6eac509f32a3b425e8c4"],["/tags/咒术回战/index.html","27ed06d0edfe6e97865b8e52afd85cef"],["/tags/哆啦A梦/index.html","6eb3beade247f9b649c2c04efb8c061e"],["/tags/哈利波特/index.html","8f120436a2b34a2e2fd52db9983951ed"],["/tags/喜剧/index.html","ba8a2836cc1f8bb7e6b6cc05a8cb887b"],["/tags/喜羊羊与灰太狼/index.html","afa87cae197b74a0590c1e78406a882b"],["/tags/四大名著/index.html","43a3f7cd6cbc53b26007c48c21a8e065"],["/tags/图表/index.html","d21c05aa8b7277c68e8174f4a7fa0106"],["/tags/复变函数/index.html","c942d317e965563a109862b295421abd"],["/tags/孔乙己/index.html","0560b190c704ac769f00ca2c74aa2c80"],["/tags/孔子/index.html","aaad713ba0519d488ff13fde2643cfff"],["/tags/字符串/index.html","7abb69a884b5fbef5b243e315930d679"],["/tags/学园默示录/index.html","2ce49f53acfde9360c69a151753e7340"],["/tags/寻找天堂/index.html","b10aab10e4d7aa7ac721c780c7c18bbc"],["/tags/希伯来大学/index.html","0743277a24fbbed8cc4bf8cba1909835"],["/tags/异世界/index.html","dee2919e0b92b80c5197e71d099ae76b"],["/tags/微分方程/index.html","48e085e157f54ef91bcfcfdd96c03075"],["/tags/微积分/index.html","5ab2d1ea94c037a91ab85cf5d07875fd"],["/tags/恋爱/index.html","25125da4f746a23ef39efadc41eeef6d"],["/tags/情感/index.html","50cb697a968b97cba66f4455c7c4ca2e"],["/tags/成为简奥斯汀/index.html","42aab0a48f881e66f0fcc83182cb0886"],["/tags/指环王/index.html","dd9dcb884f2406654d2c72f38b976555"],["/tags/搞笑/index.html","e58329b5b290f8afa80977b039468db6"],["/tags/教育/index.html","77382d88107d5257b1a1ed7baf80d25a"],["/tags/数据库/index.html","dc8028736b4a329e08838ca3a048c25f"],["/tags/数据科学/index.html","7dd0f2772c0679ec713db4f8a7b59027"],["/tags/数据结构/index.html","17661840ab49fd4c0613f3db781d97cc"],["/tags/数据结构与算法/index.html","aac04c7f88ef025a8ee0cdd21130ef2d"],["/tags/文字排版/index.html","705e8c31cadf48698340ccfc324f53ad"],["/tags/文明VI/index.html","299289f9ccc9e674459be51896eb02e3"],["/tags/旅行/index.html","355a352fbee8439c4b96dffd422cdff8"],["/tags/无彩限的怪灵世界/index.html","8b365b2f4b2a4828863963e24d23dc92"],["/tags/时间刺客/index.html","c7e65e3cd526cbb0c46201034af9977f"],["/tags/暗黑地牢/index.html","4fe646afc1a4deb42df084a9dc21616f"],["/tags/有生之年/index.html","89325144daadec9f9a480752b6feec4b"],["/tags/末日求生/index.html","e7bc352a416047ef86db05b294b186bb"],["/tags/李商隐/index.html","672b07a4e7c2f3ca6598f354cdb0c17a"],["/tags/李白/index.html","62287220565133ae1f8f55e3b7099af1"],["/tags/李贺/index.html","50e27d5b02f184d83298f572dca01363"],["/tags/杜甫/index.html","8c2c598a3e930207426ebd56d549c475"],["/tags/校园/index.html","9392c514cbe9e2f329f39ad41f52c032"],["/tags/概率论/index.html","cb1d3c5d6d5cb1750a629e6996bb5bbd"],["/tags/正则表达式/index.html","a626b15178266c4b94b1575cde84fa26"],["/tags/死亡/index.html","7693f5b8ad079425db170b8d8d9aead6"],["/tags/水仙/index.html","5ed66cdfe00a0c77e7540ca64d6b6093"],["/tags/治愈/index.html","c8d3f508eb18dda8bf3ab1bc382bd590"],["/tags/烂尾/index.html","30536fb4f4fa84302596bec103552f42"],["/tags/热血/index.html","7a5b785680b8809169c48867da8a3e8f"],["/tags/爱国/index.html","e37256e9b3d680c9c5444f0a7e6a38dc"],["/tags/版本管理/index.html","c5985accdfff09c571945b0dc3c64f34"],["/tags/玉子市场/index.html","bb1cee30f0fca624a801609dd0c1ccdc"],["/tags/玉子爱情故事/index.html","3af5ab127d227f2891fea22982bb454a"],["/tags/王维/index.html","202c952a9bb15ab27d93c3c9f2c339e1"],["/tags/现实/index.html","8ed8dee0761455d1ed252402e5829413"],["/tags/甘城光辉游乐园/index.html","346d53643689be45958f27464129e0a1"],["/tags/白居易/index.html","e6425881aa6495e610f953f55f18173e"],["/tags/白毛/index.html","57a5eebbb01bfb50b98ef97eb273799a"],["/tags/短篇小说/index.html","724bdf17ec8510ce4f6a073be73e8e54"],["/tags/神话/index.html","6e267c06d54bfe0d9b75224a975abe20"],["/tags/离散数学/index.html","ebfffa263c3b9095a7365fc9cafcd709"],["/tags/种田流/index.html","055559a657e33faa8f17aaa97eeef461"],["/tags/空洞骑士/index.html","01b501ae855a286d75463848cc2ec321"],["/tags/童年/index.html","b8de0bf6080cf79419a4dfba27a0cb47"],["/tags/童话/index.html","d6ae5505045e2c7798e159741006391d"],["/tags/第九艺术/index.html","263b108b4f03b95ba72f7785d918da83"],["/tags/策略游戏/index.html","8491a4cf66100ea8caad24f737a30e4c"],["/tags/简奥斯汀/index.html","2ac7159eed152db6a063a98e81242122"],["/tags/紫罗兰永恒花园/index.html","4d6febdef4fc04d103255d89c7668afe"],["/tags/纯爱/index.html","c03e8f7e596a7b32c643a0dbafcd4115"],["/tags/纵使手残仍大爱/index.html","759c73d582cb929853df4955915aa803"],["/tags/线性代数/index.html","7c56b530045ccfb1a6141c9b4619fb5e"],["/tags/编码/index.html","0635e965dc02eb9191d78116b3aad9b9"],["/tags/编译/index.html","f195da6339c3502ed3987362968064b0"],["/tags/致郁/index.html","6c3dc2b1825da800545de0f8541cc7ff"],["/tags/苏联/index.html","17175970c7728fe8d69abcac3fd13767"],["/tags/苏轼/index.html","3c7a1f11d3497e4079af919988288c76"],["/tags/英雄/index.html","0194513b11e86196df88433554e0e453"],["/tags/计算机科学/index.html","54e0b67e7693796790d64bb96b67e343"],["/tags/计算机系统/index.html","f88d62e0dfa85e409fdc2a751381c0a4"],["/tags/计算机网络/index.html","0c39c7169d39d8497a766ddb05356188"],["/tags/论语/index.html","09c6b8614bb7463cc71852d38e18f740"],["/tags/词中之龙/index.html","dd1e4a2c4dbc8a0310c45332f43ac382"],["/tags/诗仙/index.html","507b7557c711561f6238bd866b354d75"],["/tags/诗佛/index.html","97a34d8cc4c99d31e326d21fb70fe071"],["/tags/诗圣/index.html","7236e240fe56ac3903b80d20c5242467"],["/tags/诗词/index.html","2aa7e50485f6da207a7f7f60044ecf2b"],["/tags/诗鬼/index.html","727b82641085f534e44b32ed0cccae64"],["/tags/读书/index.html","be9cae0e1f741123162ff0554d3ac5d8"],["/tags/豪放/index.html","4eafd28e4b86ca9f50c32b0820c44c5b"],["/tags/赫尔辛基大学/index.html","fd2d7b04e842adca8ef01a650a6f439c"],["/tags/跳跃/index.html","1e2c8573b331274ba6bd963a5717febe"],["/tags/辛弃疾/index.html","dd9cebcb46b765738299ddf147bb649d"],["/tags/运动/index.html","5f8c0adad458d1d5562595f899e5db53"],["/tags/钉宫/index.html","e648a40c7774e5b7caf9de708149e2ed"],["/tags/银河战士恶魔城/index.html","fd91bee8ad8927345136d2d38035b60b"],["/tags/陆游/index.html","a6d7c30d5b5fb9ae124cf08b6bb24f16"],["/tags/零之使魔/index.html","7918243046923c0b2c4c3a585fb7a1f8"],["/tags/霍比特人/index.html","800dc358f7a3178ea3e9e39a3430fab2"],["/tags/飞屋环游记/index.html","4db52826a06cf3acf24ca894c4d6791e"],["/tags/魔戒/index.html","d0efe0d3f5b4201a0b4eade4857f4ce5"],["/tags/魔法少女小圆/index.html","0a464ea88acbab3ef2238648f208dd85"],["/tags/鲁迅/index.html","3f8391859f8b418fb8c50a0f1331aa20"]];
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
