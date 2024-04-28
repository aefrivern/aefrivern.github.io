/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","534d4fed96a15884ffa33d0a4c3997ac"],["/about/index.html","cffedc044c19cc74591021640ed554cb"],["/anime/index.html","9b095a499d28887d5db05f81d1227774"],["/archives/2022/11/index.html","5382e35b77d45bcf89a1c65884c93944"],["/archives/2022/12/index.html","7c45753c677cf9e67d2698ddd9761da5"],["/archives/2022/index.html","ac88e54426187707d85ba99a6ed60505"],["/archives/2022/page/2/index.html","299d3afaad32310c1d26c2fdae0d7313"],["/archives/2023/01/index.html","ace6a0e3d5962b894ead370d4f389bcb"],["/archives/2023/02/index.html","8c04dfc5968ac402a145600345e026bb"],["/archives/2023/03/index.html","5dcd06a7387dc335965e6f6df74e532e"],["/archives/2023/04/index.html","e3ed654dc383164318d76c94b8d09f05"],["/archives/2023/04/page/2/index.html","f096f2d594a5e80d47274ee239f3a70a"],["/archives/2023/04/page/3/index.html","0bf16f120c806a14dac1e5aeb41f77c2"],["/archives/2023/05/index.html","ec5ca2d9371a47cf224ff19ff2b3ce7e"],["/archives/2023/05/page/2/index.html","77416d90f82189caeeeb1dd0613ead56"],["/archives/2023/06/index.html","baa766a4e823bc590b64d8736133590b"],["/archives/2023/08/index.html","29aba0414182f52b040306933122072c"],["/archives/2023/09/index.html","13715ba1b248cedd002c7010d18cd033"],["/archives/2023/09/page/2/index.html","c5bc9f6bce142786c08fb3b61f8b52db"],["/archives/2023/10/index.html","396ea596406d2b039db374ca2bab2343"],["/archives/2023/11/index.html","07bdd24a1e0a45484ed32bfbe8a6e5b9"],["/archives/2023/12/index.html","dc511c8cd4d600063927e0c2c9b4ea9b"],["/archives/2023/index.html","f75021e2b2522454a6943669d6821f82"],["/archives/2023/page/2/index.html","6a7b6526a5b9cffb31f20c817ec5182c"],["/archives/2023/page/3/index.html","9943994135f6b5fc275efc6e2b94ab56"],["/archives/2023/page/4/index.html","7f19cbf586ad61f31326ec1045ec7e7a"],["/archives/2023/page/5/index.html","7bac1d2da2b784053fc992d56200d9ee"],["/archives/2023/page/6/index.html","c0a50e4c182e7e9805f87eff076a70af"],["/archives/2023/page/7/index.html","2c2a3dfbdc9a4415fcd951f1c50d11e7"],["/archives/2023/page/8/index.html","0d01cc93ea4d172d2e53ff9b3a211f09"],["/archives/2023/page/9/index.html","e04d16c7949360560607466df3c63239"],["/archives/2024/01/index.html","2b8e7e19a4ce242b2a1057829f626aa9"],["/archives/2024/02/index.html","555061ba39ee89bb055fc62a7264b36b"],["/archives/2024/03/index.html","a7a4f715ec323c067d7778c8977111d4"],["/archives/2024/04/index.html","9049657369d9f3c5c52eee887bb91804"],["/archives/2024/04/page/2/index.html","1139a92fcba39868d7af306335961d69"],["/archives/2024/index.html","6f6e05d4e9f09a099939f28a46192bfc"],["/archives/2024/page/2/index.html","c33bf3e9c189b1b294acbc11b25e07f1"],["/archives/2024/page/3/index.html","7167b014c85c5b7ea73e9bda1529e092"],["/archives/index.html","c049911270be78afd90301cff78de5cd"],["/archives/page/10/index.html","a446c8312574785af7905404acb0085f"],["/archives/page/11/index.html","046d7775590303bcbf1f721b7283b3b5"],["/archives/page/12/index.html","e79425d4e43a1f60e45e44902edfaeea"],["/archives/page/2/index.html","4838dc8b9930262289073a04890efe64"],["/archives/page/3/index.html","e77eee8893f0a3cc418c27d6dbd356b0"],["/archives/page/4/index.html","de1837afa50050a3ba8370f1c3fc57e2"],["/archives/page/5/index.html","a7132782e61425193734ae78dd57ebfd"],["/archives/page/6/index.html","2113f2f7b4d5598a1d4ca8fe4abe247b"],["/archives/page/7/index.html","35045b8f588cc8eb49e308ab419b9519"],["/archives/page/8/index.html","4a7fcb2ae3f0b801788ef512763b4be2"],["/archives/page/9/index.html","4f551409796f58601cb4dea0111e5664"],["/categories/ACG杂谈/index.html","658a7e371732eb78926839f1d0055bcb"],["/categories/ACG杂谈/page/2/index.html","a3d6c010acea712b6edf99e7eb09bef5"],["/categories/ACG杂谈/page/3/index.html","5e5c920d58073c2022da1438fd4f4b4b"],["/categories/index.html","aa38bdb16d809a6b1070df6c1bddfbd7"],["/categories/学习笔记/index.html","17485e38cb4039b2d990d9274b05348e"],["/categories/学习笔记/page/2/index.html","8385b36c5c50377ba435de49285ffc34"],["/categories/学习笔记/page/3/index.html","9dcd7c1e181785c1ed0ba6333e8311ce"],["/categories/工具/index.html","e0123ca3ef85130547a57d86196bb48a"],["/categories/工具/page/2/index.html","3e11ebbaab5ac7803fc068f165c41391"],["/categories/工具/page/3/index.html","d9ad8c4afb91acc751625fb16527f40c"],["/categories/游戏人生/index.html","e34b1a9aa718cf780c446d9d2d01ba58"],["/categories/游戏人生/page/2/index.html","76e5651a3adb81208977d4aaebcc4162"],["/categories/读书笔记/index.html","78f8531f1687f8e6afca61f1995ff325"],["/categories/读书笔记/page/2/index.html","aaa18208f00149da41677e3550325721"],["/categories/闲言碎语/index.html","04fe4c20da92133df1c2701ea00b4e6a"],["/charts/index.html","e09633acc3cfcf97ca4654d0fcacd17f"],["/comments/index.html","1662905ed46ae0d51cbffed4ef1a229b"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","83cdf0f5a4c0ed6c00d4bb8f2d69c302"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","e1812532f5489d82c6c906f0bfa5087d"],["/gallery/index.html","8341460c9bb6e487971c46715676ff88"],["/gallery/wallpaper/index.html","fd8247311c47e8483f5133417101f61f"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8f7e1f75ef1fe80fb4e003186e76e2f4"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/10/index.html","653136ee67364c9edf5c2985a1746a59"],["/page/2/index.html","d5c182c0689c8ed2d1836b608780737d"],["/page/3/index.html","e690f42bffc70ce323b7656e9b839e9b"],["/page/4/index.html","762bf8e5f27891f2891a5ebee16d3781"],["/page/5/index.html","d343183364620a32012cc2bb3e678d12"],["/page/6/index.html","cbb59011bd39663b11abcad59840ff9e"],["/page/7/index.html","a8e000411dad88115a258e6fa032caf6"],["/page/8/index.html","e3926eab9916e2e5647d60fae9ec197d"],["/page/9/index.html","b2f91aebf2bafc3bd61806dc74dd918a"],["/posts/106331b4.html","48693ebed67634c31e542d849eb79429"],["/posts/1185a02e.html","c52c55d33fa7a947e501cf300fc1e291"],["/posts/12e06b11.html","2f2faa328173ed8f35dcc36ff25cf6da"],["/posts/13aafbc3.html","77256e45c353edf10a9401081b7a87eb"],["/posts/162e86b7.html","852ea482c84a41507ced51a6660f127f"],["/posts/167c7c45.html","96cf1bb19cb591c1fbd88b3afe7af3a9"],["/posts/1743dad6.html","82a73e5deabd9faff73c2a1ad87eefc5"],["/posts/17492bb9.html","ad125c813ee51533e70ca6866fe96a0b"],["/posts/175a8e1.html","69bfeb1c87e47d824889dd1cc3c74ea9"],["/posts/1be398e4.html","224cfafedc732b47861850f1444bd92e"],["/posts/1c5a0321.html","1c80b1dcf0b65be2e60ad06f8b3b72e4"],["/posts/1ec7973e.html","43089716524f19250f99bd7fa2183eda"],["/posts/1fb82448.html","b073f3b88a9387a1f2b6cc424383cc74"],["/posts/2069534c.html","0d951b3c27d9d887a81d52ace0a6a9cb"],["/posts/21f18fd2.html","57647aefca706deccd3889f12d61f353"],["/posts/29c507fa.html","046dafb433f755253de3c13c239c0fe6"],["/posts/2f34eb00.html","ebbc1b85d257f6e395a0ca1b7026ce7c"],["/posts/2f57a694.html","3bb8b3f11a3e73a3ba7078b5807aff41"],["/posts/30479bcf.html","02ef2c188c8b476c91a9de7b0e295d8a"],["/posts/320cf12b.html","ee826824f8ab1029e36c32ca3e00c6f6"],["/posts/353e70c9.html","6ec5280262a8fad4e2f5087b4ef910c0"],["/posts/364ea8cc.html","a8e44f77d0a09ed321eac1f3af2c5db6"],["/posts/374b54d5.html","57efbcaaa1ecbb096eee3fbdc8715c10"],["/posts/3871b764.html","e15327d21a216ba0ac924ee0c50e276e"],["/posts/3b308caa.html","866a07a8be2ff14dfe097ecd575aa0dd"],["/posts/3c3cdb74.html","1039cd5dc88827d60dd71260a6f47965"],["/posts/41f65cde.html","4c7c85b2906a050af02f37e368487e48"],["/posts/4208fd6c.html","8c7ab9fcad800fd24cf14d7d89979005"],["/posts/4392373e.html","2fa5fa5bdffd4f11a858bc39c1774d17"],["/posts/440ed920.html","ee8e9d857137c85bf2c3c4a941c94ff2"],["/posts/447a8d68.html","b154b493f4e5691ae25caa82b4b49c83"],["/posts/4d2b51ac.html","0bbcadcd9a8e5c98bab81f8dda91b4a2"],["/posts/4db1a52a.html","28e68a4a2340e56451d5f934ece8bed7"],["/posts/503ae89.html","de0b32d2ebed073c17084b9b9da197a1"],["/posts/518e2799.html","e1c85b4c5cc75013799fbc9a285551fd"],["/posts/535fd087.html","5c5edad5d643cc4050c6ba87e6fbea7f"],["/posts/5923cba3.html","c78b39f6e002d55d3aeb0480c5a279b0"],["/posts/5c1bb6b8.html","86be47bf0fb2da1906db734a6037914d"],["/posts/5dc45f0c.html","5b93bd4296fac613a4fd204a9fbdef9c"],["/posts/5f2caa2c.html","592a60b4679cc266815030efcdcc8622"],["/posts/60d11614.html","0cc9875477906fc94c355049159dad57"],["/posts/616be7b6.html","d7d96b6f7ff55b3a4767159b557de0a2"],["/posts/62a1ec0c.html","55f93d0fb2210c941c603a235ed034dd"],["/posts/6441a1ac.html","7b08d0569902cb16b44d3c1d17a33363"],["/posts/67bd69da.html","5ed3f1dba4413968840806eb5334901e"],["/posts/69fb361e.html","6f729a6d6965d019cc5a00497043a847"],["/posts/6a8518ce.html","27fe76c16a52b5e8cec96eaed09261b4"],["/posts/70685119.html","a24002897131fe4046d790b716b91c00"],["/posts/743db4aa.html","13ce89b15ef8eecbd518ffabeb925ccb"],["/posts/74c3ade.html","2ca9612759218eaab3e1ed0adf3f40cc"],["/posts/7b67faab.html","baf9db37b23afcfa0c5fab0133b0bcc0"],["/posts/7b76be01.html","13703eacf5a099c7ae2609c88cd89e0e"],["/posts/7bff939e.html","e0f5abfa9a493613a6c12b3ca168265c"],["/posts/7cc4ca07.html","00f896b418b393f5fdb59d544c2615d8"],["/posts/7d257210.html","d66754ad5238045f210fd04d570a742d"],["/posts/7e6a5c94.html","7c55dbbc62d1798b2e64697b9d939f96"],["/posts/7ea0cbe4.html","0b61476d16b424adcdde7ee6231a5384"],["/posts/7f382da2.html","5dbc55e23c4f44d06649f10030a59ed6"],["/posts/7f8d32f4.html","39c298325f2e3fc12dd1a9d96b20c7d0"],["/posts/7f92999e.html","536202262b087d6826fd95b7b757e858"],["/posts/8207aa48.html","8581f5a0b4ed6c45c5401678608f1cdb"],["/posts/828c2ccd.html","beae959e1cc449904ce84a41a62528e4"],["/posts/836ea9bd.html","76e24de1bd43bc8944f061244f872d78"],["/posts/84cae757.html","df031dccbf54354856ecc90aa321724b"],["/posts/8724ba9a.html","8515191390dc0c7ba4e0a3936127f2c4"],["/posts/88200036.html","eda538a186b1bb0ccbba0b8a6d983e35"],["/posts/888349a6.html","cf8c74301e9b718c6decbd44344de8a7"],["/posts/8d7f2967.html","ccd6353b5ba95af77735f4d68eb0a30f"],["/posts/922fb64d.html","0e15704b699cbb1ccdba55d50a29c7e5"],["/posts/98332b29.html","685c9dee78469d735c17e59c50a90a05"],["/posts/9a1a736f.html","b0184618bf2511ce03e110c40d162e9c"],["/posts/9addd0bb.html","9339003a22f14740d41ad5532a123fb0"],["/posts/9b44950b.html","c714967735d76867c8cf598d1d2bedfd"],["/posts/9ca149ab.html","426308f1f383cfd4f3f8f48cad98da31"],["/posts/9e4446bf.html","b1d700fda3a1c0241518df765e3827a7"],["/posts/a0271e58.html","98c541f5262b7b15c2b1674251adf4ac"],["/posts/a13c1dba.html","f86932fd16b7b91db013d26cdd8e44ec"],["/posts/a1f2a4d4.html","2975b13eae41581a8207ea9684638a56"],["/posts/a541262a.html","6d8e2e804183c5e34474582c0210cff7"],["/posts/a5f300de.html","75b40d2fa8626eb44dc473e98387ffdb"],["/posts/a98766fe.html","92b3444b9ce88329a6404e08e535cb10"],["/posts/a9f63847.html","b270cff5dec7885817a05348d8c3e7bd"],["/posts/ad31055e.html","e855547532e61ea23d65efe884557592"],["/posts/adcd6e20.html","c112a2fc2a83e3678ae246673ab56454"],["/posts/b0fa4c58.html","03e8331fc4b505db4fecfe5bb1bde9a5"],["/posts/b1168675.html","7d2ebe0528952e8ebe3a0633a821a990"],["/posts/b291b1dc.html","b5d29f5029bf27f6325ceca597db9514"],["/posts/b2feeab7.html","39f10ce2abd868b903d3e3b0702e6968"],["/posts/b6d66f1b.html","40490eacd65499df05a41ec332402421"],["/posts/b7525d11.html","a0d3ddab8f4e03bd32ca952f4a02adac"],["/posts/bb154b63.html","ae421f81b04cc9d0a9b5827dc1648ae0"],["/posts/cc1b9611.html","d46831393e2194130cee4e6008c47bc6"],["/posts/cc86a40d.html","148169fcc4fccef9ab1deaf94bfa52fc"],["/posts/d36531a7.html","870c078f889d9626cbcee75cf58482e6"],["/posts/d442e51a.html","c6563bb1f591b102d20eb00ee2b28c76"],["/posts/d7fdf01f.html","8b83f52db9fc6a366783487b0d7979cd"],["/posts/d839b0e.html","8c4cd2a79fa4605be1d50b4dd886a002"],["/posts/dc5fbc03.html","662ded2ad1a4fc309a4c4c7d577d962e"],["/posts/dcdf88c8.html","769d198571efea8cf4067739572fc85f"],["/posts/dd378ae0.html","23f6396dd1b9194ea00f11c7f03a61f4"],["/posts/df2849ec.html","400b9e5947777fe0fe4a74dce1ee4aed"],["/posts/e15be301.html","b813271a2115d995f322580b9e5d3e0e"],["/posts/e2e4b4ce.html","094c1def8ccbb9d347ae9a7bf162caa0"],["/posts/e35ef5bd.html","c1575b80eafee621bfd8ce81682920cf"],["/posts/e462ba83.html","78b6af67e165864df5ef8c7f4c1d48c3"],["/posts/e53204e6.html","ff8c4e9c62d805f1926e3445fad1b617"],["/posts/e5cd9bbd.html","7cfd2b47c671d7680f12615b6aba8c40"],["/posts/e5d89884.html","f21084442101d7978b007a87d8a36df5"],["/posts/e7a99a5e.html","a450b7b641a62b8aedba28bace886ad5"],["/posts/e9318100.html","d913a6ca6175bce31dae3cd2b777a1d1"],["/posts/ed52e6a0.html","8511b069b2507754403b6d57a42d67e1"],["/posts/ee0ac59a.html","61b0fdce37a68c84eb3ac5318f1eab1d"],["/posts/f09c1ee5.html","5dd78afa79a7ae24d85df0296b8b4086"],["/posts/f1252f66.html","ae90e977ba33f6789cd61eba401f0d9b"],["/posts/f4af26a9.html","7f901cf6add5a491e13ec935f16866b6"],["/posts/f8060ffb.html","54bf79367136132d25edf51db78b86fc"],["/posts/fa3cd62d.html","5312f5d46e08c31f1ef32908bf7cc5ae"],["/posts/fb3794ef.html","49ee4fd4095dbcca513ba4997afb161e"],["/posts/fda4520e.html","5c4a688e518e4b6e0525f4ab14051110"],["/posts/ffdfd6d4.html","d50b1475c27c1f0e9fd7bf9d0996e2b8"],["/random/index.html","3c51edb1e21e9df10652ebe68d03bf95"],["/sw-register.js","3d144266007e72a2ecbb61f3023eb0ea"],["/tags/ACG/index.html","1a3f8655508eb6247af65d2dadee4f16"],["/tags/AIR/index.html","2c833c4b0c1bb648c9da7b84d935529f"],["/tags/AliceSoft/index.html","51e9f3c13f391df3017b113169a02efe"],["/tags/Butterfly/index.html","5055e1087dbb85e1dabe0c762d532aac"],["/tags/C/index.html","a6c746072a113153718bd8f9bff8b901"],["/tags/CLI/index.html","ac654aca4415800a4c5ad4a83746faf2"],["/tags/CMU/index.html","f1c57a4a1b136a01b83ae8622562abbb"],["/tags/Crash-Course/index.html","f7fd795b677ac034dbd33ce9f41e3e79"],["/tags/ETH-Zurich/index.html","a5847e098e3ab76612517c566acf2bf3"],["/tags/Eushully/index.html","6ab9919b6f0f0ede718acf3025209a48"],["/tags/Everlasting-Summer/index.html","c2df40e31361e831cb6e2a1f23df2844"],["/tags/GDB/index.html","3521606c09f65d42a7bcc615b8292d9d"],["/tags/GRIS/index.html","923cfd5c3b98cc3efc7c37e60d158946"],["/tags/GUI/index.html","50e5f537e8c5b3eda9bb4f82386a4219"],["/tags/Git/index.html","2b52dc3cdeb442896ab6507331ce6f66"],["/tags/HTML/index.html","b4305b7462a1073075ba413a4099fc10"],["/tags/Haskell/index.html","c92fc95d12bdef90752f3de395057973"],["/tags/IDE/index.html","dfdc66273b4c6318136efd3612bbbae3"],["/tags/Java/index.html","64b8248a826364ef5edec401aa2d2ac1"],["/tags/JavaScript/index.html","c0694d3024ec5900136641d8ab090a79"],["/tags/JetBrains/index.html","5b3abc24b0f70d82e428ce221fa1ab8e"],["/tags/LaTeX/index.html","4914727d81874ea51c7b68872e6316d4"],["/tags/Linux/index.html","63d7839cd953c2f34733fcf69d6ed6c6"],["/tags/MIT/index.html","0374c04e47b0149163dc9373f9e7dbdd"],["/tags/Makefile/index.html","fb0cf3fe7cf157a2ae339efd029bd1e4"],["/tags/Markdown/index.html","9a9fa1fb86a9e43d3544643cd9821b24"],["/tags/Mermaid/index.html","32e9bf598e36973e8bdd966823faee53"],["/tags/NTR/index.html","572f294ac902bcb1ebd1f92716ea2443"],["/tags/Node-js/index.html","e985eccab386cc8cc3dd661ce6b4fbfc"],["/tags/Pixar/index.html","2be1804f21dd9c868a1c4042c619c50a"],["/tags/Princeton/index.html","4106c862130b73c183a5968bc7124500"],["/tags/Python/index.html","077199751f749e50e7019c53e373eb0d"],["/tags/Qt/index.html","f1bcee5bf04c19c7c5c14364c9ce4e73"],["/tags/R18/index.html","cfc62f4a8fde7d33cc5aad7d23d107d1"],["/tags/RISC-V/index.html","5dc020cbfd1300c9ec05b5422bf803bc"],["/tags/Scheme/index.html","4b825da93fcbf2b3a0177dc92f5eac42"],["/tags/Shell/index.html","889887bf369e48cad4f9d0da30604ad3"],["/tags/Spring-Boot/index.html","4bc3f5654752629a8ea143f48d230abd"],["/tags/Stanford/index.html","245bc42a4932273571f819688aa1d7ff"],["/tags/UC-Berkeley/index.html","74c51e260804083b80f6bfcf24a89683"],["/tags/University-of-Helsinki/index.html","e3e3b7283d34f78d383982b2c9322024"],["/tags/VS-Code/index.html","7c7729de9aba2149ecdf422c926f6a50"],["/tags/Windows/index.html","e94a5ea0f22bffa8bbe458490567e3df"],["/tags/debug/index.html","af7ea916ec3e9fc458c782d01e4a9e3d"],["/tags/index.html","a33d0e84573c5618199c5f216309b74b"],["/tags/key/index.html","d1f9ac8c40c6646aac0364a37c243ea2"],["/tags/web/index.html","c27e8b63d7c41c1d6a6c1e72ebf65b36"],["/tags/三国演义/index.html","4e2b3424f3a97cb7172598ff5b4e1a2d"],["/tags/丧尸/index.html","9c79c666951592c2faf18a032a8fa39f"],["/tags/京都动画/index.html","64a0a3421bbbe3fddf6cd4b5754e3e7d"],["/tags/京阿尼/index.html","085fd2f8a711c8a294960710cd7594e4"],["/tags/代码规范/index.html","78f9836c649e40c48d0cc3b4ae77f106"],["/tags/体系结构/index.html","dee46ce47eb56658c7f38fe9038fcd2a"],["/tags/信号与系统/index.html","07cad2a969e0f416cc67ff55de9a1de1"],["/tags/信息论/index.html","0ef2a25b95344461d9a835b21d52805a"],["/tags/傲慢与偏见/index.html","44f44646384dbb9526016643d9cb20c9"],["/tags/元稹/index.html","8d7a05340bcf3d8c9e2c2890b20e51fd"],["/tags/克苏鲁/index.html","6755c83c5e02d40413c8bb9f5fe3c430"],["/tags/公路片/index.html","fe51ef6309e29a0451764e61384b7522"],["/tags/兰斯/index.html","42f5e2ba0eec065e6fc451f799439fba"],["/tags/关于我转生变成史莱姆这档事/index.html","0a9e8bb63be48e110bbe698f7d34cef4"],["/tags/冒险/index.html","f973361c43b36637e9ddef27fd4d049d"],["/tags/冰汽时代/index.html","a43a86da1f3a739a454016a38dace102"],["/tags/函数式编程/index.html","7ad04a32ebfaf05558a7d497a0105051"],["/tags/刺客信条/index.html","5a485b9df52701cbfc7bd0556465e3c9"],["/tags/卖肉/index.html","f005bb24f9eac085857b3ba174ebc0ca"],["/tags/博客/index.html","5bc95550f6736a74ebb5e48050409be6"],["/tags/去月球/index.html","58b9994f08a701c98afe1fb8729bd2e9"],["/tags/可汗学院/index.html","193daa5ff2c94e636391e9c5acb13d3f"],["/tags/史诗/index.html","7cf798817022847fa5445fe925e26d44"],["/tags/吉卜力工作室/index.html","ff064709229193a68cb7db97077415dd"],["/tags/名侦探柯南/index.html","44b251ef98e654e90550812d234272ab"],["/tags/后宫/index.html","fbd7d79485964adbd45ec12578c64135"],["/tags/咒术回战/index.html","38060992c960a6e06319186789066af8"],["/tags/哆啦A梦/index.html","7c15367f0a8bec3073312d56ffc41a20"],["/tags/哈利波特/index.html","456d71de109ad01872224ec69372e5de"],["/tags/喜剧/index.html","59dfc0129ef813cd0113d6561a7c015a"],["/tags/喜羊羊与灰太狼/index.html","121a83be5bbeb6ab9a0fbc08a182f59e"],["/tags/四大名著/index.html","f6b9cc3d67b5aa294c2df14781634081"],["/tags/图表/index.html","d99c646f8f86220fd6474da71dc3bcaa"],["/tags/塔防/index.html","039878a8bb1f031a470ff4d42943b686"],["/tags/复变函数/index.html","06f9beb5ade8fc73621fb32b2a45e63f"],["/tags/孔乙己/index.html","4fd27f72dfe919761f65343b71ee19fb"],["/tags/孔子/index.html","ea78bbb5de7f7b73f3f374417f5fee4e"],["/tags/字符串/index.html","59e5734ec96caa94e57ab00af639bfff"],["/tags/学园默示录/index.html","85483fc660a04a81459da74a59c71086"],["/tags/寻找天堂/index.html","cab4ec82aee15f9350c08b290e924023"],["/tags/希伯来大学/index.html","dc108bd2dbdec57d05c98073f2973278"],["/tags/异世界/index.html","36cddfe966bae63fda2bf60c710b4ca8"],["/tags/微分方程/index.html","0b382bc933024753f8ff7016386ecc4a"],["/tags/微积分/index.html","6bb72177ddd7d641830e2c9d3f91e1c5"],["/tags/恋爱/index.html","01304e350210180c3210240f777542ac"],["/tags/情感/index.html","70118639c63e24e1941885286fddf8be"],["/tags/成为简奥斯汀/index.html","1adfbfcff46d8a819a19d9e089282c80"],["/tags/指环王/index.html","602f1e030335c7610c6750d5f5d2e7e5"],["/tags/搞笑/index.html","91f50544604ce8b899d9f04a25d70637"],["/tags/教育/index.html","0713b2ca9ae95c398025ae8a5e761adf"],["/tags/数据库/index.html","bab0157e10892afd837eda0f9c87a0c7"],["/tags/数据科学/index.html","a4245ca471a085a2b7babcc75e649d31"],["/tags/数据结构/index.html","b073a3b419af6d42d79a6c862f1cbca0"],["/tags/数据结构与算法/index.html","7f64c54b5c96c025f5e4bf5a29a68f76"],["/tags/文字排版/index.html","2b0e4a582b2a3a1cd8653a5fa4673d11"],["/tags/文明VI/index.html","643e7480e76ef2be454575bd97aec745"],["/tags/旅行/index.html","5e8f7bc571ef5268257e555680f1dd61"],["/tags/无彩限的怪灵世界/index.html","1ec0bdc766905945ecf16447fe32b076"],["/tags/时间刺客/index.html","0c6a5fe7e730c9fe4f56c897cd592497"],["/tags/暗黑地牢/index.html","a7a8066bec7f38dcb90d2ccd8c33b26e"],["/tags/有生之年/index.html","f9f34ad0badefadf8a31a43b9d78e85f"],["/tags/末日求生/index.html","7287fd4c987c3ba063ca663f117a84e5"],["/tags/李商隐/index.html","fe58a79999c23b9dad948f8d89e17978"],["/tags/李白/index.html","93a0fe52c9d28977234c05e18b8705ed"],["/tags/李贺/index.html","88eca7b6924c56c2aa9b3cd17297a5eb"],["/tags/杜甫/index.html","d7adc6dd0f7bbf245e7143dcc13ddb23"],["/tags/校园/index.html","e923ce51d381d45b40bf8ba8aab7c80c"],["/tags/植物大战僵尸/index.html","91ae184fbb4e2ca381842163b548ef22"],["/tags/概率论/index.html","a57a4cb841469288ecbb48fd3494d5f2"],["/tags/正则表达式/index.html","461db4b11f80dc846a534e00caabd29b"],["/tags/死亡/index.html","b1d5442849b9499ca3a477c63c07db14"],["/tags/水仙/index.html","7eeff62b5b4909a170fbff7a631bedf9"],["/tags/治愈/index.html","dac5cee09d55f3e73dc2e4ed28daa3b8"],["/tags/烂尾/index.html","5cb765ced96300c825c2813cb174fb62"],["/tags/热血/index.html","2f9e26c9b1f239f8b68115d61cfbcc35"],["/tags/爱国/index.html","ccc176c7fdcaf4b98c16e0182a979063"],["/tags/版本管理/index.html","eb37968efa375e89c25f733d38a0debc"],["/tags/玉子市场/index.html","5494d68b76df4e15ac0f2138ed627cdf"],["/tags/玉子爱情故事/index.html","39f4b15d389af05574b503a4b6faf206"],["/tags/王维/index.html","8d26364a6f4d76ff877c1d0f53047795"],["/tags/现实/index.html","e6aa771d912d945ceb6217c2d2bcf802"],["/tags/甘城光辉游乐园/index.html","201af73e6c842cbaf46fb03a464d2ac6"],["/tags/白居易/index.html","2698306debe38d381d55a5a513207741"],["/tags/白毛/index.html","0545b02651ffd6915c6e1df718287a4e"],["/tags/短篇小说/index.html","ad237b4dc07da3b87ea76457e0d5abf6"],["/tags/神话/index.html","ac6052ebd065f79f83c834c6c084dc73"],["/tags/离散数学/index.html","1aeab0c4454d20526be5cfb5dcb1e276"],["/tags/种田流/index.html","854b412d824e89148350908c93935902"],["/tags/空洞骑士/index.html","610b211928b6d450fe3011d277b26016"],["/tags/童年/index.html","e2a85a498ad7846289dda88ee92b56ee"],["/tags/童话/index.html","9b28b15395dfe58327a0833e464f4425"],["/tags/第九艺术/index.html","49049761685e547e508ab79521270786"],["/tags/策略游戏/index.html","1a020535e2a214e28723b793ee239b67"],["/tags/简奥斯汀/index.html","b2d6898b3f7978089c80623b694a0813"],["/tags/紫罗兰永恒花园/index.html","eb77315c3871270e1625fc421a0eae1d"],["/tags/纯爱/index.html","9c30bb1e46d355bb36a0fa0bd965953c"],["/tags/纵使手残仍大爱/index.html","10cd0618a24e8ddea5f90317c341c970"],["/tags/线性代数/index.html","c478484520822aaf93d46253a7113ce0"],["/tags/编码/index.html","cba5476051240b9cd07444511d0e5b3e"],["/tags/编译/index.html","be8ba5197bd674e5705c1f862a9cd156"],["/tags/致郁/index.html","b7fd29f26e80688121d7010b6970f385"],["/tags/苏联/index.html","1e066726a8f71900c02e97d4385c8682"],["/tags/苏轼/index.html","72e8660361fe89e1b1bd62980d9e7ea8"],["/tags/英雄/index.html","87c9f56ea47a6064a2c158d1c858d264"],["/tags/计算机科学/index.html","9c179bb6940576121da2b53286acf3a8"],["/tags/计算机系统/index.html","a7982896f39ae169ba694e167954cb64"],["/tags/计算机网络/index.html","6502641ee1be59d0ea78aae11df61062"],["/tags/论语/index.html","503fbcfb79cd7432f0e890ca45cd115f"],["/tags/词中之龙/index.html","26ca5097dbd4c4836fdfb5a456dd1f85"],["/tags/诗仙/index.html","7e2460ab67082b5d2a2cc2bccd6a05a7"],["/tags/诗佛/index.html","8827729cd546af48408dcc44d4474395"],["/tags/诗圣/index.html","fad2c7a4cffdf870d891b4371533059b"],["/tags/诗词/index.html","ca4dade1d7655a21958f4ea85a5e6823"],["/tags/诗鬼/index.html","5404b49975425ab131465913612d578c"],["/tags/读书/index.html","961efdb001ed53529abf00af78c48a75"],["/tags/豪放/index.html","f14709421d9a63543bd885247393a405"],["/tags/赫尔辛基大学/index.html","ea1ede4f0bf80751aa47c29c10c733e7"],["/tags/跳跃/index.html","0a587bbe3be72f1212da71c5374a02a4"],["/tags/软件开发/index.html","f4b43e354b70da1692eb59c504918032"],["/tags/辛弃疾/index.html","abfe47d73a393f73841d5fe5c26d7959"],["/tags/运动/index.html","2b54836632dd334ff58b7d65b6d19213"],["/tags/钉宫/index.html","200cd9524caae4f87bb54e7d75fd9638"],["/tags/银河战士恶魔城/index.html","9931fc458077976fc7cf9ccbfa76d675"],["/tags/闰土/index.html","c808930ef8a0ebc9f1ea7ec0eaf62f98"],["/tags/阿里巴巴/index.html","af9ea4ace5a902f4b6ac47ab7f8ebdbf"],["/tags/陆游/index.html","eb2f29abe512a18cde249f138ce1992e"],["/tags/零之使魔/index.html","9994d0016d1c014d9a3e052bbf47833c"],["/tags/霍比特人/index.html","a6abac0cb749aaf17b1ae084bf5bcc63"],["/tags/面向对象编程/index.html","94c27c9359228979e37de4dfbc3322a0"],["/tags/飞屋环游记/index.html","94ebbae739944555b8aed98948dc0b2e"],["/tags/魔戒/index.html","bad29909c208025c5a5c19cf30739d6e"],["/tags/魔法少女小圆/index.html","2842077aebf19c2344f85e930ba444a3"],["/tags/鲁迅/index.html","9755d88f54b013ff968cc1caf007b766"]];
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
