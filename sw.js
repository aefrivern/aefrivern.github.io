/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","332a6bd17211a65bfec190190ae64a8c"],["/about/index.html","bc0ef047f72f3ee115905c7625a2371e"],["/anime/index.html","f2607b9ccf198924b475648cdd1ec5a2"],["/archives/2022/11/index.html","8ecab29c1d2fe4ee677d2a106f18bf40"],["/archives/2022/12/index.html","4d67bc368de19cec6feffd5a06b62b87"],["/archives/2022/index.html","67f4296165669f81df1a6e5d3824cfed"],["/archives/2022/page/2/index.html","8b2a35e303a3de11a8c469ac7e01542e"],["/archives/2023/01/index.html","e9a382f9f0af3e3004ccb25b57128b98"],["/archives/2023/02/index.html","dfe67d75eee67911843411cabdf16e95"],["/archives/2023/03/index.html","7ecd182a9c2145a99d36a50046684fb3"],["/archives/2023/04/index.html","c038e794a3a493a882d714b4d242ff55"],["/archives/2023/04/page/2/index.html","92fd7fd0b0d0688eca778620ca667ab2"],["/archives/2023/04/page/3/index.html","47bb40a5013f379e7fe7fd5488597b86"],["/archives/2023/05/index.html","c4a393f452f3bf7bf6b856923ec85c74"],["/archives/2023/05/page/2/index.html","486c8f7b7090a31917ffcec486fa18a6"],["/archives/2023/06/index.html","9246a716565b2c74131ab5b22632cb07"],["/archives/2023/08/index.html","3224b55a41a00c84f128cdba21b67782"],["/archives/2023/09/index.html","092f40bd8827d1571a6d8b89f0323709"],["/archives/2023/09/page/2/index.html","930e4374640ba5296420f1b37cf3afab"],["/archives/2023/10/index.html","1a5c7db834d2c58e2f065daa5ea4c2f9"],["/archives/2023/11/index.html","cff54ad52b6802338e398f195039fdd2"],["/archives/2023/12/index.html","7162263626477a29ebd6c32390ba53ce"],["/archives/2023/index.html","3755548c69481940f419e53903eac5e4"],["/archives/2023/page/2/index.html","75eb314c06e50408e1b6fa614c5661c4"],["/archives/2023/page/3/index.html","2b8f9e35c1ea4953bc1bd5780462e1a8"],["/archives/2023/page/4/index.html","20ccbba7652d7a4ee75ecc07899d8627"],["/archives/2023/page/5/index.html","e1d35cd4acb38eaf113c659fe26ba9af"],["/archives/2023/page/6/index.html","bb3d352e8da8a8a7089b359361410487"],["/archives/2023/page/7/index.html","74f01c8f7de4a47a3dc7854ffa54fe97"],["/archives/2023/page/8/index.html","0b5f6c2b797d30d844c7a472ac8878c1"],["/archives/2023/page/9/index.html","2ab572c3e40cbad6731ee2bbdffa05c6"],["/archives/2024/02/index.html","64e5716e3ee9e2d5e473e1ceeeb2a190"],["/archives/2024/03/index.html","7c312cfa5f8b6c0f6b0b4ff7cf86b016"],["/archives/2024/index.html","424141a01b47d279485b356c03d89972"],["/archives/index.html","73b5bffd3f046622a043648165a1a5d1"],["/archives/page/10/index.html","7bb4fb45db80587a99795f846c5d588e"],["/archives/page/11/index.html","0c986509d1c49247408eb9529835a3ee"],["/archives/page/2/index.html","b7c1ab21b77abd5e1a2026a706f76444"],["/archives/page/3/index.html","bb62da2ed5848888f8bb7eb6eee8660a"],["/archives/page/4/index.html","229b85752aeaf04bc51f3d669867cb13"],["/archives/page/5/index.html","8483f8266a6274eb56751e1818862e51"],["/archives/page/6/index.html","5e83e867274a0502e93be0aa931b752f"],["/archives/page/7/index.html","f3c9b8e47ac7bef4bd4cc8792c0c031f"],["/archives/page/8/index.html","df5b245741604122a866b6f6bc97dec3"],["/archives/page/9/index.html","ad537163d86e1a07c75fcaed31cfa128"],["/categories/ACG杂谈/index.html","1f3cb15eafe6dfb594e7a9784822bce1"],["/categories/ACG杂谈/page/2/index.html","32c30d864a7e43435167af014e7db74a"],["/categories/ACG杂谈/page/3/index.html","884430b1f91e7658f9163b09fb0e8b4a"],["/categories/index.html","2311bdfad45097a462aebe3cf01a7788"],["/categories/学习笔记/index.html","1c5bf39dca83c980692b1143655ab25f"],["/categories/学习笔记/page/2/index.html","2add685284734f90e97c0671ffe1a031"],["/categories/学习笔记/page/3/index.html","58e0fe0237578cc5a61197ac7ffbe108"],["/categories/工具/index.html","b8bb06b9078cac11a2cdd4108f50c043"],["/categories/工具/page/2/index.html","eac672ec15bde8e0be37851973201886"],["/categories/游戏人生/index.html","3242f082e4b7ebbedd84fe77d3298c2d"],["/categories/游戏人生/page/2/index.html","f86af8261be1290cbe0d2ae58b38c0e4"],["/categories/读书笔记/index.html","654bdbba335a084d35a91832bec534ae"],["/categories/读书笔记/page/2/index.html","2a5941ec02bca5a53083499606b91102"],["/categories/闲言碎语/index.html","9e10bf6c85feb58dabd169cd424ba847"],["/census/index.html","faef77f759877430c7714f8a6bb4efa2"],["/charts/index.html","ca6df0c2cb455fa254a27dc39123a0cc"],["/comments/index.html","1a175dc2cd95df77bfce17a286f6a709"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","67dcbdcf7f5bb5db41e89627fe3c3264"],["/gallery/index.html","a521ce86bf5e92c168fad11de3c3b0c0"],["/gallery/wallpaper/index.html","75d1d659743f2cb354221ad5ff955f68"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6fd7880f105295b8cbb3185c2539d2b1"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","49ea271628412ec90963f3c4b6bd070c"],["/page/2/index.html","a72db03c0023799b69599470ccfb75e7"],["/page/3/index.html","e52b5a0caf604d998bad034bfb61c0d4"],["/page/4/index.html","2461f661e86247d05834d0dca3c614af"],["/page/5/index.html","b3dee2653576d1ebafbfb79765f28536"],["/page/6/index.html","e340131b5e5c79faf71947ea2cde92f2"],["/page/7/index.html","2cd4bd9e9cf9d537a3e82af89473c2c3"],["/page/8/index.html","a779a74078ff21366cf7935270902a33"],["/page/9/index.html","54e146fbb352dc7a891ce5e6aa23701c"],["/posts/106331b4.html","d208e3c4c0a84f28de6fc524995dcfc7"],["/posts/1185a02e.html","9a794f5b41772742c19c486be10ae59e"],["/posts/12e06b11.html","009fc83bc92df8ce5fe0f4419652a56e"],["/posts/13aafbc3.html","e01f86402894e0f076f2df868fc5603f"],["/posts/167c7c45.html","785c9220eb452a72078e8b37ece13434"],["/posts/1743dad6.html","83ca749394b5c1fedd67eed50d022d9c"],["/posts/175a8e1.html","dabec7f530d6a3452afe2de90fe5d981"],["/posts/1be398e4.html","aa2a05a22aa301be01752a9ed8ce2a93"],["/posts/1c5a0321.html","c32e766a637ce3769b67277d625c9a9a"],["/posts/1ec7973e.html","8e978ae0cb96a5353d09ae2d74709f3b"],["/posts/1fb82448.html","89558b2b2eab76a383aef4fcf1b4c271"],["/posts/21f18fd2.html","c06108e8e140a2a59204975b862c0418"],["/posts/29c507fa.html","edf2de90d3130306424255ffd0a1d830"],["/posts/2f34eb00.html","abf996cbbaf840004f042ae6cd2c011b"],["/posts/2f57a694.html","8549eb2974e8aa983ad5875a3120ba6e"],["/posts/320cf12b.html","b2456befccf7ae742093f0677cf203a7"],["/posts/353e70c9.html","ebf0bf8a43f3c8c25575f8199d47a567"],["/posts/374b54d5.html","5795e5e5cee6345a1224d75b528f3320"],["/posts/3871b764.html","84e3666ccc3a6d9e1a9505bc08f1158d"],["/posts/3b308caa.html","f83ca032511940095cd28a40156cac28"],["/posts/3c3cdb74.html","757c9185f882c2d3b0faf954837020ec"],["/posts/41f65cde.html","5fc8829a9c3871efdefac9cd2beeac91"],["/posts/4208fd6c.html","cefff314920919aebcb49fa6dc9fbc90"],["/posts/4392373e.html","38ab1ca7a945f4e9ee1acc30ab61eeed"],["/posts/440ed920.html","af0fa29abaef92150e008c802a7d8803"],["/posts/447a8d68.html","3b643653bd4c585b292ec56ff19ff2b0"],["/posts/4d2b51ac.html","4298f9ce71f33b9f4b88306777826428"],["/posts/4db1a52a.html","fe9d6c855727840cdb727aedb32c6475"],["/posts/503ae89.html","d86a9af3260f4a475a57a99d568449e1"],["/posts/518e2799.html","91eb1223bd5ede09b1c5cf8c65ef74d1"],["/posts/535fd087.html","c503abcccabf2b159bf6057f72b25da8"],["/posts/5923cba3.html","277cd69842919d2bc47972996485398a"],["/posts/5c1bb6b8.html","a6838b455c30b398118b07b1120be5bf"],["/posts/5dc45f0c.html","be4e000bc25f3c678347d2230ba03f2c"],["/posts/5f2caa2c.html","eaf8e8532885b0f295716495a750bbb5"],["/posts/616be7b6.html","28c30a8b35783cf0b3ab9395a8c2aa3c"],["/posts/62a1ec0c.html","50dea3f74a3b9a2dcf777540b0599280"],["/posts/69fb361e.html","d554a3855d055462108089f9779fa18f"],["/posts/6a8518ce.html","8cfbd89c7841e8a7f2d2258233bb9171"],["/posts/70685119.html","8a167f8a772ac4f5425255b824ca1dd0"],["/posts/743db4aa.html","d2e961dc2189b2f4f00b60456f521456"],["/posts/7b67faab.html","51bce78d838f0ca37a83b5fb87f5deea"],["/posts/7b76be01.html","396ba0a50ee5e2f52b7f6b36e8d7a903"],["/posts/7bff939e.html","f7fd0c23e3b9c44ebb2fe813c6455fec"],["/posts/7cc4ca07.html","497024f499045c1d304e22ce694d9a87"],["/posts/7d257210.html","5a06dedb6813cca7b7953f77cc0dfe07"],["/posts/7e6a5c94.html","0c283f07671a72222f72ba6186a43b4a"],["/posts/7ea0cbe4.html","8cef533875f078117b33594abc0e3f99"],["/posts/7f382da2.html","ad6391f3881cb5a28e156755740529cd"],["/posts/7f8d32f4.html","b130c61491ad1129ba1ac43dd623dc55"],["/posts/7f92999e.html","919454eb40499c53bd2ca450ee632002"],["/posts/8207aa48.html","3f5786544e558d7d9f3f73607318bd12"],["/posts/836ea9bd.html","719de3b158cd5b8e495f73c14ed83a1b"],["/posts/84cae757.html","a858b3b7da81809ce74462ef18c3c950"],["/posts/88200036.html","b832f377cec20f43ab74e762f82fc6a6"],["/posts/922fb64d.html","6ddc30bb8cb409161ecea4e89cc1c9b6"],["/posts/98332b29.html","86dc1c5681aee014bd6e542cec9de86d"],["/posts/9a1a736f.html","9c6984490a58dbaf2c5b133d8f870992"],["/posts/9addd0bb.html","9f47b0455b173c95fe1dc6784a68a977"],["/posts/9b44950b.html","ba0bc68d0c1c050653464af14c52ebd8"],["/posts/9ca149ab.html","5f5cd33ef5e47a03771b9bf8efd01aef"],["/posts/9e4446bf.html","c26f28c6122b77b4a40d9b450c26375d"],["/posts/a0271e58.html","99efe76b79b60969527a3cc2481e9e89"],["/posts/a13c1dba.html","f2dc256552983648acd5acb3794d8673"],["/posts/a1f2a4d4.html","69177756be13409e29ffd494278bc549"],["/posts/a5f300de.html","c16173e915aa2f3f609b21135a223987"],["/posts/a98766fe.html","1741a441d5bca27c3667b2be15405bf1"],["/posts/a9f63847.html","041d2147a65ba838e37ca33ccb90d53d"],["/posts/ad31055e.html","df2bfac747b35db09ef0dc921cd91e82"],["/posts/adcd6e20.html","97e0197def15f793c4ddc14b600584a5"],["/posts/b0fa4c58.html","5bf2484e982060e6a41f8bcfc904d1a4"],["/posts/b1168675.html","e6e0cd80504d73232057f4e0e9a9541f"],["/posts/b291b1dc.html","efc86e270c953280297a1448f443c0fc"],["/posts/b2feeab7.html","81d0ad9bc6e50d9177756c2746418fa1"],["/posts/b6d66f1b.html","ef142003035a0baa46d5de8d62f0d65a"],["/posts/b7525d11.html","abe365e7ee5b72ee982acc4e532e1adf"],["/posts/bb154b63.html","9aa236f09f989377aace210925772060"],["/posts/cc1b9611.html","c8d1c02a87eaa26626f715cebbfd9780"],["/posts/cc86a40d.html","2f8b6bc5779fc57330b47c48765198a0"],["/posts/d36531a7.html","6ece27a45fe8a9f4b3ba6a6f6912070d"],["/posts/d442e51a.html","42f2af00c8a8863c4644c9ce76e63399"],["/posts/d7fdf01f.html","43225f47aa95936186fc67e6d15340f8"],["/posts/d839b0e.html","59fdb0c02f62597771ebbb09cc4635ea"],["/posts/dcdf88c8.html","4f3a0dd489f2335e08406035717122a1"],["/posts/dd378ae0.html","0794eaa8113f24c8a9aaf291add1940a"],["/posts/df2849ec.html","41aa9d34c07ff63024a6ccb2e3e4e327"],["/posts/e15be301.html","ce0172deda1c428a39eab9d484349f18"],["/posts/e2e4b4ce.html","1605a7da73c4a9402120fdcb339d0d01"],["/posts/e35ef5bd.html","4d6ba96f6c2b9f1ffaae8cb19df25c09"],["/posts/e462ba83.html","5c40d60fe38b60e7b1fb907f9fb5d1df"],["/posts/e53204e6.html","3840ad663c252418a0e94b9758547d11"],["/posts/e5cd9bbd.html","b0ccba2e521de55935719b55e6e5b8fe"],["/posts/e7a99a5e.html","03b1584e76368f8cca2937ea9abe02d3"],["/posts/e9318100.html","5a0a1e9a53473c9aa7c03efa47b08791"],["/posts/ed52e6a0.html","bd5c748775a828ec7a449f35f878fe71"],["/posts/ee0ac59a.html","dbec303e99e589835ef77f792ca73f9e"],["/posts/f09c1ee5.html","fe9778c8eb8c247f40cd957df8b2f274"],["/posts/f1252f66.html","176d89adb748dd91bb752231da62f0b8"],["/posts/f4af26a9.html","e9d30e0a4d8fc1a180b0327c1f5fade0"],["/posts/fa3cd62d.html","e4517c179c5390f6c14e04c9332b764b"],["/posts/fb3794ef.html","b84a5e73caedfb95ca3c1d967d54dca2"],["/posts/fda4520e.html","81eb77e5eacc913c2398454dc845d657"],["/posts/ffdfd6d4.html","507839d35189678005e0b11243afe78b"],["/private/index.html","869e10475d58b074873b8c79cd7ea95b"],["/random/index.html","3bdce789936d8886c1d2d0bd04b78fd7"],["/sw-register.js","f5a060cd5a0b45c835de1bf959200ad8"],["/tags/ACG/index.html","7cd020cdeff541dd21af619b39cc8642"],["/tags/AIR/index.html","4575f1b26833a1a68965a22c3168555a"],["/tags/AliceSoft/index.html","c85f466ce1f10da2228a31f3da205864"],["/tags/Butterfly/index.html","80cdcbff5e103701b2d7d24bf5e10e5a"],["/tags/C/index.html","1e16f5ad9b0476a526680cfcd0c88a73"],["/tags/CLI/index.html","cc0bdf5bc9048f8877909c2debe50e0d"],["/tags/CMU/index.html","5719a99416b83f06602426491e72858b"],["/tags/Crash-Course/index.html","96e15eca7d09431e5127ee6d0a43939a"],["/tags/ETH-Zurich/index.html","cd4b01882d7b87f9cdf80865ef229886"],["/tags/Eushully/index.html","d5c66dfe59fc4becd08a7e613f6f0bf1"],["/tags/Everlasting-Summer/index.html","313f8f470e3251adde94f4a09ab6a8a0"],["/tags/GDB/index.html","ef23c6e5a0cb3b555a614e6ff526ee0e"],["/tags/GRIS/index.html","1eba5c49cd5545301e8f8267696ea55e"],["/tags/GUI/index.html","fbec79f088c6e6710ee2cd57066c113f"],["/tags/Git/index.html","398751f99d058f3172fb15d880192eb4"],["/tags/HTML/index.html","344a15f3b5b253bb3bce8d16baad6958"],["/tags/Haskell/index.html","4907f17c5cc342fe15ccd60e574746f2"],["/tags/Java/index.html","e5dbaf35c7764ecc8a1e19d259e4ade5"],["/tags/JavaScript/index.html","c5585e116ee0075c1f80b45c3b671dd2"],["/tags/LaTeX/index.html","1cbae749ad55fa46e77f21c8b5050fa8"],["/tags/Linux/index.html","1815862b5c554b2df166a9326f9161cd"],["/tags/MIT/index.html","caeeee57a45b96292e73d01119c71eb6"],["/tags/Markdown/index.html","3734557a76879f3d4f8118d989db9327"],["/tags/Mermaid/index.html","07c7c74c5ea8cc13e412fbaf91d39ac5"],["/tags/NTR/index.html","2d7babf941c7b15dcd923c8c70876ed5"],["/tags/Node-js/index.html","5b312408e83afded0a126de02f83d9e1"],["/tags/Pixar/index.html","cc01fa48830579381f7dfa8bfa5d95c6"],["/tags/Princeton/index.html","f7d084a15eb6a475ffb566355e48b88d"],["/tags/Python/index.html","9e1c2f8f2f46663207f2750cf7c717d2"],["/tags/Qt/index.html","7878a92c89f642d1ef6bab5fbf33e092"],["/tags/R18/index.html","670571fa93b4f05f623d0f0b4eed04db"],["/tags/RISC-V/index.html","36caa566cf6a11ce1e6f9ab84c0b67a5"],["/tags/Scheme/index.html","d94ae1bac713b4f1999c5c3cc1d4e671"],["/tags/Shell/index.html","2262f7033beeb7f4679ed10e0068ee64"],["/tags/Stanford/index.html","fe64f9a7be56cc46fda4a0deeba1cecb"],["/tags/UC-Berkeley/index.html","d730d21f962168924b36f3630eaa9c54"],["/tags/University-of-Helsinki/index.html","47bd6e0f9896e22ec4c525d523f78fc3"],["/tags/debug/index.html","e0027178b26eec8f4a3b82162bf34517"],["/tags/index.html","b19415b9721af972438a3c1892c3da27"],["/tags/key/index.html","ba853c833b0feb33ddc7fc2abe25d7ce"],["/tags/web/index.html","a337a12ba946fae9eed25a5cc19d512d"],["/tags/三国演义/index.html","9f867969efb0b43ac6c4e94cc3b372db"],["/tags/丧尸/index.html","e7c39bc107f938454eca7fca6a6d02b7"],["/tags/京都动画/index.html","f76e817dc709478b889f9978d2b084ee"],["/tags/京阿尼/index.html","7a41a1ba283f016634b5941ad40ad840"],["/tags/体系结构/index.html","8ec0c8d89cc7fa7b13182da540efe6f6"],["/tags/信号与系统/index.html","49459bab97692c0b29de538f8652d613"],["/tags/信息论/index.html","19f1806d0cea962d8582444e4d0981ef"],["/tags/傲慢与偏见/index.html","89136ab3781fed143df575334e214b29"],["/tags/元稹/index.html","862104ea396c8f931c4b6f925abec75f"],["/tags/克苏鲁/index.html","6d9d66720fa407e3108c7fe480270462"],["/tags/公路片/index.html","ad886128f2348e9e42d13890e785efa4"],["/tags/兰斯/index.html","91fd2e595b678dfb18b7539fc6e48692"],["/tags/关于我转生变成史莱姆这档事/index.html","fc59fdfdf30d532f69cbfb5086635ebb"],["/tags/冒险/index.html","626111463cc0f1d006ee274efca63563"],["/tags/函数式编程/index.html","423b581751802dc849e1b272d2da9af2"],["/tags/刺客信条/index.html","000e02a8ebae10c15ab8be69c29866d4"],["/tags/卖肉/index.html","9e6ce6ee7be17b4e615652e7416b0b68"],["/tags/博客/index.html","df7a88b1ccfaa429b322b50f075c4f50"],["/tags/去月球/index.html","4648802099d64f3b828835681d184b3c"],["/tags/可汗学院/index.html","57fd870dadc3471540ff392f3f6c7ae0"],["/tags/史诗/index.html","19337666ffe813e2d8a766e076db0b85"],["/tags/吉卜力工作室/index.html","32622014bf435bcbc0f09d3f0971104e"],["/tags/名侦探柯南/index.html","c47f5a0b4b420445193bdbd8c1adbe13"],["/tags/后宫/index.html","7febf2d45129c77581b26b0a4d5d2d01"],["/tags/咒术回战/index.html","8841277762ce04ca7c01ece84e07af53"],["/tags/哆啦A梦/index.html","bab0e8308a7d9dc0eaae6d50a6039a72"],["/tags/哈利波特/index.html","1ffce495c0dc5c692557f9f81fbd2e9f"],["/tags/喜剧/index.html","8c2060248adad1027af058a38f1b468c"],["/tags/喜羊羊与灰太狼/index.html","731c7319fde63bd1df3facb5f803ee57"],["/tags/四大名著/index.html","1440099e64cd38d7ecb725b17337323e"],["/tags/图表/index.html","2cec574ba15b16416b8bf442ed1f6bfc"],["/tags/复变函数/index.html","9cec6d99a6bd710fd9496d2a71abfaad"],["/tags/孔乙己/index.html","8529e08cc8458e90fe566b01b5ff1a99"],["/tags/字符串/index.html","a1c6d41769460b7c74707706045e6952"],["/tags/学园默示录/index.html","3f71a4d7238a2692fd467e4cf9f17721"],["/tags/寻找天堂/index.html","adf65d2a374b9a48e35bc8a04f6e9310"],["/tags/希伯来大学/index.html","ab1b99e24e36de58def15eb2d3505726"],["/tags/异世界/index.html","c56ecf295a0e037aecf18884aaa0f918"],["/tags/微分方程/index.html","7ff4dd94a76286703e919f8e0fdbe739"],["/tags/微积分/index.html","f94e78f643db1fb710c39127f308af13"],["/tags/恋爱/index.html","d2cf5801d5098b88a6ee3463928b4708"],["/tags/情感/index.html","7ed47290dfaca014f3007eb4d56bf1d4"],["/tags/成为简奥斯汀/index.html","7c4a9f60e607046712e231113944aee9"],["/tags/指环王/index.html","395f0940f49a1ac553da39f06a19ea80"],["/tags/搞笑/index.html","50a4e6dc049b3edf7158eba92f4fcf05"],["/tags/教育/index.html","a1f1d0b205f744ae8b667beeb83ef4ee"],["/tags/数据科学/index.html","ef2362fd8bbfc03063bfb80d6738d600"],["/tags/数据结构/index.html","5e38507d04d9189dadeff6a3d59eb943"],["/tags/数据结构与算法/index.html","6cad98f6d75130c4edecee9046759a1c"],["/tags/文字排版/index.html","c1184baaefd0b1650677072b6ff98d0a"],["/tags/文明VI/index.html","caa55bafa7068a14bc652333c586c7e9"],["/tags/旅行/index.html","ad289805fe8e057ab9a9640dec80926b"],["/tags/无彩限的怪灵世界/index.html","e7010de9136d9c0661265b246fc85791"],["/tags/时间刺客/index.html","3bcf587bfdea7d8cf08935f1f7667b90"],["/tags/暗黑地牢/index.html","18c3665f37a4dfbf39ea15314f20673f"],["/tags/有生之年/index.html","338330578ed5c1456c0b4ca1300d4d6d"],["/tags/李商隐/index.html","d7f269b50f17c789abc7a5f069e3066d"],["/tags/李白/index.html","1696142c22c1e5295b996d39a2de5c65"],["/tags/李贺/index.html","2023d85dee963884874df9ac881d6a50"],["/tags/杜甫/index.html","cf0aed80281feb751a8bc62ea947ba9d"],["/tags/校园/index.html","9ac7ccd39a15504a98fb4983447736e5"],["/tags/概率论/index.html","d7448cb54a140e86a9683d7fda9fb8f8"],["/tags/正则表达式/index.html","0d60522fcad621eb8014a34a0fc566ac"],["/tags/死亡/index.html","ca515aa2ff5be321d3d0789ea00a6aa7"],["/tags/水仙/index.html","e50ea376134c2dd54a5a8c592bb1281d"],["/tags/治愈/index.html","3154daadb8a49f542f8c022fd32590c2"],["/tags/烂尾/index.html","bdf925698e345e648ed7f5912582dc13"],["/tags/热血/index.html","af9730431126254ee71682149cb3f887"],["/tags/爱国/index.html","8f8d0644c0bcda1d4c8d690c60a7e79b"],["/tags/版本管理/index.html","8e53452ea833165ffea11af4da01d7b1"],["/tags/玉子市场/index.html","587931aa9edab6e89b146f8160e2e726"],["/tags/玉子爱情故事/index.html","367fd47418c8576cec681c1cdee52d9b"],["/tags/王维/index.html","e2f221654134c1420a699aa2569be0ae"],["/tags/现实/index.html","718108e01bc87692a1388760aa88a755"],["/tags/甘城光辉游乐园/index.html","0bad4f35a9881c9c81351508d04a5943"],["/tags/白居易/index.html","b2a101db33d61bee6aede99c708fa608"],["/tags/白毛/index.html","27f2a08cb658c1a1201d11df082e9339"],["/tags/短篇小说/index.html","326343f45c6000f177e9f38ae35410b9"],["/tags/神话/index.html","1bb58c458b25656e9dc212be7d621f5b"],["/tags/离散数学/index.html","48e04211ff18c69192fc6cddd618851e"],["/tags/种田流/index.html","7c3b19f2ba17b3f882e87ee732ffd86e"],["/tags/空洞骑士/index.html","019b66e5de10b3afd12fc61c84b1cefc"],["/tags/童年/index.html","b5aa5c6778bd54dd0f81fb1dc09c5caf"],["/tags/童话/index.html","1b5dd6aba96913119cc9a07a1e7a0dce"],["/tags/第九艺术/index.html","01d96b9562c1bd830b253fde7139465a"],["/tags/策略游戏/index.html","656c77c90f57af9b05f70c7129e46772"],["/tags/简奥斯汀/index.html","c69fd4647875a11ee885a96828098b59"],["/tags/紫罗兰永恒花园/index.html","385dbc9587b31aecb078f7067bee1361"],["/tags/纯爱/index.html","2c145fa5e731409faec9a39e5bfecf6e"],["/tags/纵使手残仍大爱/index.html","fe6ba5f024c89002e7174034c7b215ba"],["/tags/线性代数/index.html","6cda53720fce254fffaf3c91ccbb781a"],["/tags/编码/index.html","5bf7bf1f1be993a8a93dded30ce7b207"],["/tags/致郁/index.html","f94f74e31ed8d9856a7c7cdfe129109d"],["/tags/苏联/index.html","c480a56f09e3c0f9fc36eec121578573"],["/tags/苏轼/index.html","a52a261d3f3aa022fc8b03424db5e1fe"],["/tags/英雄/index.html","5c8e4f7ff209416b44841d6bb3cf5d1e"],["/tags/计算机科学/index.html","c3aa10572c5fdf254529bdda35fc1100"],["/tags/计算机系统/index.html","6411a1fdd299c638cdc399cf798dc852"],["/tags/计算机网络/index.html","bbdcafcd936b87858e40a9079f42fd5b"],["/tags/词中之龙/index.html","bf112dae6f708ba2a1bd740d49bc3089"],["/tags/诗仙/index.html","114e02d95f7a8ba5790515eec43d8d26"],["/tags/诗佛/index.html","e0f8f8e022fe9c1969e90615f204dd27"],["/tags/诗圣/index.html","8cccdf2d7beb55c3a19933d0a83f9235"],["/tags/诗词/index.html","55dcf9054ba06bcd854ae31e6ccee3df"],["/tags/诗鬼/index.html","af363e386873dd7e1b9b1d94ac4c3bbb"],["/tags/读书/index.html","99abf7cb1066447546508df5168222a2"],["/tags/豪放/index.html","667c2dda1ea66050960f2534deb241bf"],["/tags/赫尔辛基大学/index.html","2d572c82bbaf27bcf6aff4086a0f76b9"],["/tags/跳跃/index.html","44460f7d66beb4afd6a5252adf7f71bd"],["/tags/辛弃疾/index.html","6fb49f7124bfd417a302931c89e5c6eb"],["/tags/运动/index.html","46f9f9247cfaf028776616a05909839c"],["/tags/钉宫/index.html","6445de32a881d399c376dc708fabf363"],["/tags/银河战士恶魔城/index.html","a0d6d10d1015e83e2c20cd0dbbddda51"],["/tags/陆游/index.html","ef63fc65bd4c84b8bb177d48d460fb60"],["/tags/零之使魔/index.html","4c04fad39cdc10a00360334908c4e683"],["/tags/霍比特人/index.html","49613462d2fc8fe559e9d78ff108c37e"],["/tags/飞屋环游记/index.html","ae7b426596a675aeb23a89cfac9f1aae"],["/tags/魔戒/index.html","0646238d5dd14db81f4acf67f4beca27"],["/tags/魔法少女小圆/index.html","98b6c357345446e79ac35f9c0586109e"],["/tags/鲁迅/index.html","9ec3adf2a9ae83a494b99ed28a1fa677"]];
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
