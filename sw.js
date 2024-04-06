/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","220500e5f57416ed9b41ae75cfa0244e"],["/about/index.html","0cd22ddc37b6960aa525c2f4b01901aa"],["/anime/index.html","d0b30ee0e328166d6f0a808927101c0c"],["/archives/2022/11/index.html","f28cda7c970eb980789d01aefed5b601"],["/archives/2022/12/index.html","16c75aa77bc3a7fde3e8e8b12ca7069a"],["/archives/2022/index.html","46927e3ed6bdf0db2376516a7ea21bd4"],["/archives/2022/page/2/index.html","3cbea576da92d6ed77a3bc66d5d319a7"],["/archives/2023/01/index.html","e0b12d15a3d00b0b1811401d49bca79b"],["/archives/2023/02/index.html","409e51758d9cb029dec0b1244dcba7a8"],["/archives/2023/03/index.html","bc9fe6191ff2b5bcea3dcc3a2f46258c"],["/archives/2023/04/index.html","6a4163b27029ff143f0ec180d40c164b"],["/archives/2023/04/page/2/index.html","186dc72502f1c46fa743654a8a50dede"],["/archives/2023/04/page/3/index.html","957466dd754ce4632fb4bae5b4945c5d"],["/archives/2023/05/index.html","039fe99f2a4f4a9f9efb8c7babd5f8dc"],["/archives/2023/05/page/2/index.html","a3eb5a755f812780f0ab2b517fb5e84a"],["/archives/2023/06/index.html","698e4abef2a50fa295bab21dc7b0563b"],["/archives/2023/08/index.html","8d09019ad4c669910f5bc56ff26eae66"],["/archives/2023/09/index.html","2634cb2e6a2f6a2707f838130338da54"],["/archives/2023/09/page/2/index.html","4564b3e5f66a9b38ad5586ef28bc3209"],["/archives/2023/10/index.html","fa9996a7b64dd78c8dd00b27f4fb4658"],["/archives/2023/11/index.html","93c7bafd04920a05babdab999d6d8b03"],["/archives/2023/12/index.html","ee53d4a8db9598ed05317512ff54ffbc"],["/archives/2023/index.html","0d7c648c01bd12f062dbaa6a9d619f68"],["/archives/2023/page/2/index.html","505ae1d7a75e02c9e0f7d0ea874de7d8"],["/archives/2023/page/3/index.html","4f7935bac63df29f3f5d694d7e88a032"],["/archives/2023/page/4/index.html","e7c1313bb3188fc2692bacdd94e8a412"],["/archives/2023/page/5/index.html","581d87c4013550590d57c44f78a50724"],["/archives/2023/page/6/index.html","781e47649d0839784d9c5d2b0a6a2565"],["/archives/2023/page/7/index.html","80984ece9c352958ebaa63a36a4e6e40"],["/archives/2023/page/8/index.html","e3cc47b5cc67ce003eedd02811ce54f3"],["/archives/2023/page/9/index.html","ca0c20326deb2c18758319a04c0c00af"],["/archives/2024/01/index.html","685f4b185648bfc6120b2d1b70f3f30f"],["/archives/2024/02/index.html","2aa9e08b8270e8a614fe591ef6a4ae35"],["/archives/2024/03/index.html","59ce481ba311e2cfb51c71ccbc96d243"],["/archives/2024/04/index.html","6c95f558f08d6c5e454f5da2da746544"],["/archives/2024/index.html","9cad013dfe6182fb62994ca5620a21ce"],["/archives/index.html","92a9452de25e1020b6822a10bb89bd30"],["/archives/page/10/index.html","c4deb55442c0dbe6ce823c3c429b4464"],["/archives/page/11/index.html","6944274dd9a05fe6f0ac473abdf58d51"],["/archives/page/2/index.html","833fc471426900fbe6801d249f120f48"],["/archives/page/3/index.html","5b02bd8a550c94b3cecbb4adf4b5bd31"],["/archives/page/4/index.html","10ae560dce57617d45004a7d3e606740"],["/archives/page/5/index.html","15f33405d731f3b3435467c38d7c2461"],["/archives/page/6/index.html","20c7f4232722c704221181f4a58c4d1c"],["/archives/page/7/index.html","3ab5cabcb07bf69dc48302f4b7a472b2"],["/archives/page/8/index.html","b3215d512a3eddc32866bbdf247d2d84"],["/archives/page/9/index.html","b529eb3a6b7865586221975a3e6eb770"],["/categories/ACG杂谈/index.html","0e4614af5a7c75eb56de14a237892dfb"],["/categories/ACG杂谈/page/2/index.html","4b0393a002fe9b80f7cec0af4059e9bd"],["/categories/ACG杂谈/page/3/index.html","18299c2c96c6a1b17c127f0e0ee6b253"],["/categories/index.html","7df0fab33edf2bc26a458c089e82f49d"],["/categories/学习笔记/index.html","aa909290b6a3f9de80306b7cb6549acd"],["/categories/学习笔记/page/2/index.html","7634cf690ce39c48cae73cc7e14fe8d5"],["/categories/学习笔记/page/3/index.html","8553f981a2a83283321961973d7b18d6"],["/categories/工具/index.html","02881feb40a1477677173bb2f343c995"],["/categories/工具/page/2/index.html","c7d6a82731cd9400535e271d3c886212"],["/categories/工具/page/3/index.html","86d753c9e244bfdb5a6399f3bd165076"],["/categories/游戏人生/index.html","2e8d4fc65733e4a9d01988f1d611a8b8"],["/categories/游戏人生/page/2/index.html","4a604e15a9977fd1601b40916d54762f"],["/categories/读书笔记/index.html","b71d4a32d972c7a7584418d5a2ad2893"],["/categories/读书笔记/page/2/index.html","e76681136adbeab0d5645c1929d49dfd"],["/categories/闲言碎语/index.html","47c9cf0cfb758d8fba380328b90544b5"],["/charts/index.html","1ae68eadb144711690af77e0a279bbd7"],["/comments/index.html","8914f9cd0cb5bd9d215e099ac9a07183"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","83cdf0f5a4c0ed6c00d4bb8f2d69c302"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","ef6b7e27ca68bbcb0f26f509de34810a"],["/gallery/index.html","2457bee31e2dbc8ffdd14939c02ddae1"],["/gallery/wallpaper/index.html","5c1073b430c83208ca43a7487de352ba"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d07e41013285155f673aecb6fd7c602e"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/10/index.html","0da7449c09d95c7a8ebfc1da19ac804d"],["/page/2/index.html","fd664a910f74dc87717413f2a19af1c2"],["/page/3/index.html","e8321e8ee87bf9cbcc2d8fbf3a5e5099"],["/page/4/index.html","0d14cb0e98924fdad390169df8e9d6c6"],["/page/5/index.html","2680d58247d33e8b0a44570cbc929200"],["/page/6/index.html","307a822608e4c26bfa35293baf3af850"],["/page/7/index.html","ae8b307c5385655382063617533a8b69"],["/page/8/index.html","ba4e5f1044f59989f41d45a835b9f099"],["/page/9/index.html","bca6506f4519560cf916c054307e93f9"],["/posts/106331b4.html","ff0b1fd696edf1723c6c4bb608b051bc"],["/posts/1185a02e.html","54350dbd8988911911412871c93c2859"],["/posts/12e06b11.html","53a66daae4d3e9e92d119ef3f8c56848"],["/posts/13aafbc3.html","396dc7f1caa6be70adaa8e72a4489252"],["/posts/167c7c45.html","571d655627bb804bd6853cd54e802471"],["/posts/1743dad6.html","98adaa3716391af45d5976fce483b939"],["/posts/17492bb9.html","d581e0a9a1e15a90c6794e32647b07d7"],["/posts/175a8e1.html","fb25ed059e47e27eac31d95263f8871b"],["/posts/1be398e4.html","3b0d563bac1dcdefa26f59b3aea58040"],["/posts/1c5a0321.html","0bd6aeef8ffa114d853d4a40ef890771"],["/posts/1ec7973e.html","a02876615bb6a8e8faf8f650c567aed9"],["/posts/1fb82448.html","85594467e311300a8be2103193f86bca"],["/posts/21f18fd2.html","07d02ad1305ca208d85a1cf49f449df4"],["/posts/29c507fa.html","abd61721d3ee79dc964bfee7d8e12a40"],["/posts/2f34eb00.html","4e2dc19c746877b310c241d5fbace8ee"],["/posts/2f57a694.html","7a76c8cbc3b4bb44cad9d1b0e7d0ebe6"],["/posts/320cf12b.html","79fb632e5026387a2248cbec65fdfa32"],["/posts/353e70c9.html","d1f5c851fad292b1564ee572fc56cf0a"],["/posts/374b54d5.html","c9a0b37e37b7d0c0e27c12283b61fc1b"],["/posts/3871b764.html","93518dee611e5c8facb736ce1685e5da"],["/posts/3b308caa.html","3c0a578541b71db45a29d2e756842fd0"],["/posts/3c3cdb74.html","c1265ca767b085da3b79669ba6f0e096"],["/posts/41f65cde.html","406387dada628d9be38839690298458c"],["/posts/4208fd6c.html","0ff6d9b6a99c3f38e204536a8e8fa4ac"],["/posts/4392373e.html","fe04480d4d21dc59be33457970bbc38f"],["/posts/440ed920.html","b35efa27d46dcdbf799e8730bdced31f"],["/posts/447a8d68.html","501822bf2b8d737fa696e30eef8f8044"],["/posts/4d2b51ac.html","b6dc55728657b637478f47a921c59343"],["/posts/4db1a52a.html","ef8da5f5a49df92288ac1720de22da08"],["/posts/503ae89.html","5dd323f01f47ad2588c969a8b7d1cf1f"],["/posts/518e2799.html","a1791441092a65211bcca7e29702f397"],["/posts/535fd087.html","6638502870359449aaa364b1b141e15e"],["/posts/5923cba3.html","e4d11bff395215359a1871af5a22703b"],["/posts/5c1bb6b8.html","d9a489dbe7d74d3230a1fb4653a99f29"],["/posts/5dc45f0c.html","69450047298275fe91493bc1253e8683"],["/posts/5f2caa2c.html","5f537d1b60203b0c3e40cc9d6ea577cc"],["/posts/60d11614.html","1ff1b2844df8d839c6c19941871d0611"],["/posts/616be7b6.html","7d4cd39a28269d432b278c66b235680d"],["/posts/62a1ec0c.html","73058dc8bcaa97bd48cf811f978a8f1d"],["/posts/69fb361e.html","50d792e7d2ba299a81837e588f5e0339"],["/posts/6a8518ce.html","a281c8f1ee1a0b7b1d60cb7917c55cf7"],["/posts/70685119.html","d37ca7c920463d2f6307e2c661e153e4"],["/posts/743db4aa.html","10c039ca82ddc2b641f7338edc0d7e97"],["/posts/7b67faab.html","f1ca6d2b8f845f8c68568e44155cc6e1"],["/posts/7b76be01.html","b11d1de32766580e02a60cf3ec4a850c"],["/posts/7bff939e.html","e731a0c6b8e860bf49513f708341e5f1"],["/posts/7cc4ca07.html","756303c2fca984a34e1fd9e1e72ded00"],["/posts/7d257210.html","c28630ca3a9aaef11c0e2aec1754650f"],["/posts/7e6a5c94.html","56aebc8ff88f1303902b1fd65308a611"],["/posts/7ea0cbe4.html","491193cc9949ff7608018d3a000d73f9"],["/posts/7f382da2.html","cd926540fb87849a7642f9cd0e4dc6fe"],["/posts/7f8d32f4.html","4cb613c5d74f5341a9b7db86aae7a6f0"],["/posts/7f92999e.html","168c4f35e6e3ec1f7e0c6eb44bfdee97"],["/posts/8207aa48.html","ec2e6dfbd04729b009d1298eab283956"],["/posts/828c2ccd.html","1645789b4d94763c957328988782f1e9"],["/posts/836ea9bd.html","140f5523663cab710060acf4e5c6fdf6"],["/posts/84cae757.html","e86d6e53b5c46a2dfd06d375b781208d"],["/posts/88200036.html","d9ce4e28dcf2658f823b1388cd6c1505"],["/posts/922fb64d.html","990d8b9916db9277ef020ea3208b0270"],["/posts/98332b29.html","4f8d3d932b5f1af4ad29da9dab12c263"],["/posts/9a1a736f.html","4414dd1fcb48f1818233aab2e861e73e"],["/posts/9addd0bb.html","de31b06f4f921a338a5e5209d99d66f4"],["/posts/9b44950b.html","67068eaf45736eb3465e16f9a1f638bc"],["/posts/9ca149ab.html","bb9fbc68fc9409e04447f1fba87ec763"],["/posts/9e4446bf.html","88bd45e2f516e1c408611c5ff6458483"],["/posts/a0271e58.html","0bb33d6fc00169cc32e7941db4c7b424"],["/posts/a13c1dba.html","3bf124d36005c22554db88d092e53136"],["/posts/a1f2a4d4.html","26a92b9f6cf469198a43d634d4bdd913"],["/posts/a541262a.html","233253a780190aa3bc87ea6afae6ecb1"],["/posts/a5f300de.html","9a7ac7aff2978ff1e08f075c0ad7dac3"],["/posts/a98766fe.html","8bec59997d8c98d9e6f1e799a51f29a1"],["/posts/a9f63847.html","bdbfbc0f4fe42a1176293106d6fb7b43"],["/posts/ad31055e.html","8e0d69981fd5f9390da9ffc99a7369c5"],["/posts/adcd6e20.html","ee6298bef3cf5664b4d884e00edfe853"],["/posts/b0fa4c58.html","285eb4b8ee531400ef3a2162b07a34bd"],["/posts/b1168675.html","939906a8511863999a75f3cd5963b7bd"],["/posts/b291b1dc.html","d3cec21bc55097406e1dd028965eaa0c"],["/posts/b2feeab7.html","aa545a69ed337a638081a2d6780deda9"],["/posts/b6d66f1b.html","4adac2388a65aa35ff14e963d4ec854d"],["/posts/b7525d11.html","e0ca4986166b63b041b140ee4a518e24"],["/posts/bb154b63.html","7012efde2ff10789cd69e733a81cf348"],["/posts/cc1b9611.html","5730397de817da8b25b79f7aff2d22a5"],["/posts/cc86a40d.html","92c98f88ecf66d70bdb493eda9471836"],["/posts/d36531a7.html","bd86cb29054f121ac734d275915573e4"],["/posts/d442e51a.html","b59fcdec02ecf11a356b25ac10b8f1dd"],["/posts/d7fdf01f.html","6d74549cd9665f3ec836358346452a03"],["/posts/d839b0e.html","85b4efe1a124f111fc391b265acda124"],["/posts/dcdf88c8.html","45ec60f6e80ec93cd62075dd0f97e3db"],["/posts/dd378ae0.html","bc952164b524819d6af91bd54f609dc9"],["/posts/df2849ec.html","c490adec84256754970b7ce1ee0c513c"],["/posts/e15be301.html","d6a3555666b20491778879bbcb71d570"],["/posts/e2e4b4ce.html","30e5afdfe6fa73312dbfa9513303ca1b"],["/posts/e35ef5bd.html","351aae8aeb73d8a327f7a7ab7d53c5c0"],["/posts/e462ba83.html","86553f6ce6f3067d090e32bcc3b649be"],["/posts/e53204e6.html","be8f0357c54fd45f00f8fe8a29af55f0"],["/posts/e5cd9bbd.html","d1c0dd24f33b29b38c608312087675c3"],["/posts/e5d89884.html","96a821cc485691bb6f04074bc90ce469"],["/posts/e7a99a5e.html","770922810660c03ff2f5e73c937a9b33"],["/posts/e9318100.html","3b2d44d85a3acba7f4c7f08a707b86e4"],["/posts/ed52e6a0.html","99ad1186fbaad455c32dcad0d5215c11"],["/posts/ee0ac59a.html","181d1b46e236c79ed8a55a680c01f3b2"],["/posts/f09c1ee5.html","3039ca825a21a0a68d295bbdc5bb6e8e"],["/posts/f1252f66.html","bcffe3f839f0f56013fb12e8a60d2863"],["/posts/f4af26a9.html","c6ca14e30e2e0eb2e8195f5343a130d4"],["/posts/f8060ffb.html","23d4c2cc4ad94ff7a4a2318a35d0fc30"],["/posts/fa3cd62d.html","3804072cfc67e8adebf9fbf5e1850580"],["/posts/fb3794ef.html","08b24c4e1ea29aaef685d90e80bb7221"],["/posts/fda4520e.html","28205c5c6a80f52f0f188def6aa91eec"],["/posts/ffdfd6d4.html","bf99b0710643bcb24b14bd36cce931a6"],["/random/index.html","fdf8be8bf48954e88f6aed9c87b2f56d"],["/sw-register.js","6e957623a0c4bcf7828c8bc4ea367096"],["/tags/ACG/index.html","5d1c37bdc0520bee6cda1f2bf4f2e96d"],["/tags/AIR/index.html","8e194c11669086c54b9612e496eeddf4"],["/tags/AliceSoft/index.html","5a2aaecc7b42ad1a86f7d58d997a9372"],["/tags/Butterfly/index.html","5a8e56c16f77e8411fd714d5019054c5"],["/tags/C/index.html","830bbf08c4faf7c7aab1af329c14ecb0"],["/tags/CLI/index.html","26f1ef6ca75c6dfd9a3d8721fec2f496"],["/tags/CMU/index.html","103d2ca8fdb5a1518371e52bd12cc24f"],["/tags/Crash-Course/index.html","aea10d6302395b596902776f579e30b6"],["/tags/ETH-Zurich/index.html","af1fb52ae56d393e4714fed999c6d2ff"],["/tags/Eushully/index.html","9a3c1ed67d4ba9e33138c3450f77ee9c"],["/tags/Everlasting-Summer/index.html","4c051f8354f03b22f7abf995e084995d"],["/tags/GDB/index.html","15ae94224a1ac0651eb4b9487a018ad9"],["/tags/GRIS/index.html","81a052a8190ec6c1437f293be4c3c1df"],["/tags/GUI/index.html","19c6068c435ae139fe836799947c6ba0"],["/tags/Git/index.html","4dab98d45006a00110617cb551950d92"],["/tags/HTML/index.html","ae69d954f650b6b2d98137c82d0b4fff"],["/tags/Haskell/index.html","34027c6d22a1b0e70000f4c4ff481d18"],["/tags/IDE/index.html","0ea56bb27e8d901a929725bd3c7f0371"],["/tags/Java/index.html","eb1616db8dfc7546f4f10968a3023646"],["/tags/JavaScript/index.html","a89cff347ef614484e76ed9af5ee7970"],["/tags/LaTeX/index.html","e21b72a08f567f15c44847694d290eca"],["/tags/Linux/index.html","a61522c98451aa8602cbc8507848c050"],["/tags/MIT/index.html","3b03f64d0bc5bfa42e1254039ccfc722"],["/tags/Markdown/index.html","8e5f8a5e355a3f40ec0de783a87d2f93"],["/tags/Mermaid/index.html","683460e6e82876e90cc2d22fde3ceb67"],["/tags/NTR/index.html","7a2b6e918f01a550eb95418ab26705a6"],["/tags/Node-js/index.html","b71554daf7df5ff297ef854c79915430"],["/tags/Pixar/index.html","093d6fbba05c81069178ecea475af55f"],["/tags/Princeton/index.html","9f820922a507a98f0d410475d1c8ab50"],["/tags/Python/index.html","bbea18008a5fad1b04dcbac1379951d8"],["/tags/Qt/index.html","c11153defcfc4f29be248f71c3bd9a14"],["/tags/R18/index.html","c9e97cac9df63b46814965a76ed4f455"],["/tags/RISC-V/index.html","136d35dcd392192be3a38a249c5dcf58"],["/tags/Scheme/index.html","99eaa002ca58453cec3cbc1e998c036b"],["/tags/Shell/index.html","0dfa4cdd4e05c2fcd127a835d3a2e808"],["/tags/Spring-Boot/index.html","8bffc6ba278a92f2462ff8235733dcbe"],["/tags/Stanford/index.html","e7916716379eaf89c7c2d3b2445bbf0a"],["/tags/UC-Berkeley/index.html","67d2a5dced96af4549ce824c029cda0c"],["/tags/University-of-Helsinki/index.html","b8f1a5c3420f9b59a9f5f9d8aff802a4"],["/tags/VS-Code/index.html","ad4f1d071a834ea3f8e6d3f144afdd43"],["/tags/debug/index.html","d7a43d17a06ad591363ea000da797d74"],["/tags/index.html","b418dbbf66df6658db8399a25c0a896d"],["/tags/key/index.html","60c3994782b8bb8634ef75c93e94202f"],["/tags/web/index.html","b8c301cfaa618694bd74c7ae2560ee6c"],["/tags/三国演义/index.html","f8f820edcfd776f80e3b029907b1fcf8"],["/tags/丧尸/index.html","cdf81d4f39e30eae09e2feeb156d9421"],["/tags/京都动画/index.html","d698ed4887f80217cd8f5652da94ec3e"],["/tags/京阿尼/index.html","42df2b3b4e1bbf5d98e7247514b703e1"],["/tags/体系结构/index.html","60938d9245d297e213ab326427f5d632"],["/tags/信号与系统/index.html","e55a11c8dfacdefab5dea180a843d80d"],["/tags/信息论/index.html","4e4b8d564903c646c908bd68fc1fcb33"],["/tags/傲慢与偏见/index.html","592f5456f21f1b1554c0f01ccdd457ec"],["/tags/元稹/index.html","9e9e1ea5aa6b7a6e233be9bb719c9caa"],["/tags/克苏鲁/index.html","bb00a2d9d6331bb3bffea16c2aa5eb5c"],["/tags/公路片/index.html","18a3044fb3bd3691f565710d39bbd5fb"],["/tags/兰斯/index.html","8737fd0b70a34a50152e5b0940d319a1"],["/tags/关于我转生变成史莱姆这档事/index.html","ec372cdd109c2c155f588fa6abd6f7b7"],["/tags/冒险/index.html","b2989066d2a6e77eb062a291ed60232a"],["/tags/冰汽时代/index.html","eacc196b4429cca33730130a234d25d0"],["/tags/函数式编程/index.html","65d0016d809607d2ff0084c1613c8dc1"],["/tags/刺客信条/index.html","255f90a1b89af87c3ea28be6dee0fbc3"],["/tags/卖肉/index.html","5d0c7685a08563947b554d3acb9c4f01"],["/tags/博客/index.html","aa83b110c057d7dbf2314c20e4d6374e"],["/tags/去月球/index.html","449fbc86e1c29a6c253e05c32f91e8b2"],["/tags/可汗学院/index.html","e13aac8f122d7a1f942c813ab213629b"],["/tags/史诗/index.html","752541973198167f5a23b52f1878f3e8"],["/tags/吉卜力工作室/index.html","4ee2ddb61286d818b42af3a9361d2bd7"],["/tags/名侦探柯南/index.html","86370d122badb5ae68288061478c0853"],["/tags/后宫/index.html","c60117c48e9f158c82d2b0ab7132a9a3"],["/tags/咒术回战/index.html","fb7556903c69d2e186bbc4d4374cd829"],["/tags/哆啦A梦/index.html","132ce22e65ad31ad38b8923e8cddbcd5"],["/tags/哈利波特/index.html","21d9e9eabaa6b8501236c606171456a6"],["/tags/喜剧/index.html","f98a8b526ca05d84745be550bb351ea6"],["/tags/喜羊羊与灰太狼/index.html","598af85c976556699da636e1a793e5f4"],["/tags/四大名著/index.html","6eebabd541825d6df9e61e8ab385bc52"],["/tags/图表/index.html","850e490ac21b6eda65575524aad292ed"],["/tags/复变函数/index.html","aaaf53117617f304d6160c9fc36a3414"],["/tags/孔乙己/index.html","1ff4fb259f4b7d0560c0e7d5b38cb3bf"],["/tags/字符串/index.html","2ca3eb74673dbb1ce6574f2ff8116e8d"],["/tags/学园默示录/index.html","c9dc1ddb1bf1ee578fa6cb51606f460e"],["/tags/寻找天堂/index.html","40044444a2d88a57cb9e11721011cc4f"],["/tags/希伯来大学/index.html","53f5bc15f024c7c3da1d35c218fe59aa"],["/tags/异世界/index.html","0df0a5ab48c6d3c4805a148978aa1a9c"],["/tags/微分方程/index.html","ca15fb91e5a81a63f8e2116a60a217c1"],["/tags/微积分/index.html","2579dbc9c87d9998ad8e460868c29ec2"],["/tags/恋爱/index.html","092ab26b772e069248d695ec60076c59"],["/tags/情感/index.html","8c4fec10b0ec238a82ac04f1ad0f9f0b"],["/tags/成为简奥斯汀/index.html","cc827bffca48ca638d0167bdcb5f7e60"],["/tags/指环王/index.html","0cfa41400fe4ef736558255c4015236c"],["/tags/搞笑/index.html","7229343d7b2edf0318f6eb1b0c677b63"],["/tags/教育/index.html","22a4ff8799293d05ddc574c9a80965df"],["/tags/数据库/index.html","9520abf25dda12f7c3c8f45681166557"],["/tags/数据科学/index.html","6f5cd8c4b24500fb69961e163249cf0b"],["/tags/数据结构/index.html","b09d8d7c8d73c2267a5925f8a9618196"],["/tags/数据结构与算法/index.html","a296c51c3d0d4660f54f36fa46939eee"],["/tags/文字排版/index.html","2be2c77abf917518f7244a43d36a2626"],["/tags/文明VI/index.html","01fdb0e8b9644ae32671911dad7c242f"],["/tags/旅行/index.html","9d7c5dea54e996aed96b98a31d6df4b9"],["/tags/无彩限的怪灵世界/index.html","e3ffff368846efd245fa3a4a79715dc3"],["/tags/时间刺客/index.html","104dabe6c8df012341942420bef612ba"],["/tags/暗黑地牢/index.html","6e0ba19f6e2085bf6a09f5d5b242cafb"],["/tags/有生之年/index.html","8a8ec60108b02a6936504f70431c8707"],["/tags/末日求生/index.html","3f4c136b42cee8f764a15aa323f79597"],["/tags/李商隐/index.html","d2694e9156917f42f62e4b5577df1926"],["/tags/李白/index.html","43fae049806cd9b84ec7cb8dbfca69c0"],["/tags/李贺/index.html","7599fa8be452def6de99cffbd05c9fe9"],["/tags/杜甫/index.html","bfee2f2fc9cb86fe7bcb9247b4a2bd59"],["/tags/校园/index.html","f953259e166d3b34ddfd0d142bc4688d"],["/tags/概率论/index.html","ce58ae5d61eac43dda198b739eb2b6a2"],["/tags/正则表达式/index.html","54b7d01a8693fba9c317b87ad2dcfd9b"],["/tags/死亡/index.html","6012901db6ecce1adcc742039f223cb4"],["/tags/水仙/index.html","822fb4b86e5072a2a751154b01941068"],["/tags/治愈/index.html","3e6383b4bf564cd823c648bb2725021a"],["/tags/烂尾/index.html","0355f6d3fbba1db3fef12fdc2424bd0f"],["/tags/热血/index.html","4172517ffd65e91534a868cecfbfcb31"],["/tags/爱国/index.html","94193be3b4bfa22ae02537a9eb8831af"],["/tags/版本管理/index.html","7171ba07508636ccdb16cf448f4eea03"],["/tags/玉子市场/index.html","1f07d7d68797de781bea7b03bc48856d"],["/tags/玉子爱情故事/index.html","159bf2996f0c66cfcbbe89f879d97639"],["/tags/王维/index.html","cbfec8d179bb5d61a5b73670f105e412"],["/tags/现实/index.html","034d78f00f8cb9349ae01d92f6795aaf"],["/tags/甘城光辉游乐园/index.html","25ef157293a9e050877d7d1f808b99b4"],["/tags/白居易/index.html","cd34fb361e5825e867084d63d04262ae"],["/tags/白毛/index.html","f07ee61f17e36350e58f8e0ddf146c3f"],["/tags/短篇小说/index.html","1e143d60b2fdd438f51eb3ec6f9fd1e6"],["/tags/神话/index.html","fd04fabf6610601d9091a4eecc469293"],["/tags/离散数学/index.html","ab84a0bbc4e057fb558d4e4aec3bb3f0"],["/tags/种田流/index.html","b476f1d20ebfa42e5c077273a7803133"],["/tags/空洞骑士/index.html","9a28d92f15c4687bda4f91ee707ee122"],["/tags/童年/index.html","5a8db52226d3f76baa3da0eb4348ac5f"],["/tags/童话/index.html","764553918d85b9b4c9c6fdebf3dfebcc"],["/tags/第九艺术/index.html","feb271686aa208babf22edbf98ff4cd2"],["/tags/策略游戏/index.html","8ebb420d970a171c0f7406fd46eadf2e"],["/tags/简奥斯汀/index.html","9e91e4578a7918b7649e78b0904552e5"],["/tags/紫罗兰永恒花园/index.html","b9ee00897af8055a23ba541cc095724a"],["/tags/纯爱/index.html","6f64271afcdbf2e8ba68eafd01ae8225"],["/tags/纵使手残仍大爱/index.html","ff13f9184e4e2f93458cc5e24e310fef"],["/tags/线性代数/index.html","ce5e90f359be11c2cd75d067d9be751a"],["/tags/编码/index.html","91c4beb547f313f72fd0c2ca5eaf7180"],["/tags/致郁/index.html","547a135e999876deba0c7d800d528b09"],["/tags/苏联/index.html","399fa52be1f3ed1af727982d7fed1449"],["/tags/苏轼/index.html","f5e510e43ef729c22bf5ba79ad1b9e4f"],["/tags/英雄/index.html","94b0a8ae262ad4813b40a7537ef5f629"],["/tags/计算机科学/index.html","2b7e6dc288f85b0f5b0aa39317bf1c0e"],["/tags/计算机系统/index.html","526058808fd904f665764918eb0aeaaf"],["/tags/计算机网络/index.html","e91f6ce0829c83030b95c01c65454de9"],["/tags/词中之龙/index.html","f21d117fd13d468f6a23bde66e50316a"],["/tags/诗仙/index.html","97d4cea6ef7575b531f958c0e0980681"],["/tags/诗佛/index.html","0914bbc90ea0bf208c93555ca76ac2ab"],["/tags/诗圣/index.html","1fd800f85df86b47b3a323fbca0d7b5c"],["/tags/诗词/index.html","b6625cbd46ac15dca574b2b810557081"],["/tags/诗鬼/index.html","1b5c5f79074a7cc83c2926c4b98b5b29"],["/tags/读书/index.html","010e70e7e465d9624d73bb48a9e0e387"],["/tags/豪放/index.html","d32b1915be4fd61f18df0e1e1f2977b9"],["/tags/赫尔辛基大学/index.html","102bad52f82844df0076ae3cf37dd24e"],["/tags/跳跃/index.html","027dcb2ec5e0bbb4b01b46b4dd768aee"],["/tags/辛弃疾/index.html","82907e1b48d5d1cdceafa0bfeb25312a"],["/tags/运动/index.html","94b33f66736fb69741be2cd527dbd4a6"],["/tags/钉宫/index.html","20986ba8645dce02373c50cb1c36b81e"],["/tags/银河战士恶魔城/index.html","fb6773385c2daa623052a6c4f1a5c826"],["/tags/陆游/index.html","b320ffd6407781250379ce72718b4a36"],["/tags/零之使魔/index.html","d023444499e50ad1a1a116c7dd6323b2"],["/tags/霍比特人/index.html","34c5f37cc96a5040cd8a5f96857d7b63"],["/tags/飞屋环游记/index.html","4123c7dc5f053b26b86c126fef213248"],["/tags/魔戒/index.html","56630c7933fc9e8cf86aee6d723b92ca"],["/tags/魔法少女小圆/index.html","883261317efbb3534cda30a64ddd8840"],["/tags/鲁迅/index.html","80c3f0e5048812457a11abe609ff3c3a"]];
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
