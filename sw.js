/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","546f728944092f80db8d156eab8b27da"],["/about/index.html","e7fcd12cdd19482d80e67ec4755ee676"],["/anime/index.html","a78f91ebe8d0f20237dc6d9cb506c043"],["/archives/2022/11/index.html","4a0076f44fa60af54f2fdc85bce9a38d"],["/archives/2022/12/index.html","a12653016db0a874917f38580898e92a"],["/archives/2022/index.html","3fcc37f5c30564456783f5b0c1bd67fb"],["/archives/2022/page/2/index.html","5dc86b0b0a7a6517750fa193dc1ef0ef"],["/archives/2023/01/index.html","801d090320b331d73d8a512ca2fbcf62"],["/archives/2023/02/index.html","6310a8615733b4bb44b4cc536968f320"],["/archives/2023/03/index.html","2871563aa352dfd28c71e2a3c66fa2e1"],["/archives/2023/04/index.html","00cc4fb717094beabfea0e6d3b4c0dc5"],["/archives/2023/04/page/2/index.html","37ffb06bbbdaee86eeb3e57e413888e8"],["/archives/2023/04/page/3/index.html","a661d74bdbf36d3594a6cd8d08575fac"],["/archives/2023/05/index.html","70b37efab40c6317545b0ce0e3e7b3c9"],["/archives/2023/05/page/2/index.html","a6733fe681687cd5aa92f825176f504f"],["/archives/2023/06/index.html","797ffcb7e458a75476257b028fcd7851"],["/archives/2023/08/index.html","92b47a24f2b5a1243d690c8dac94a5d7"],["/archives/2023/09/index.html","581bc36464054eeda7d9e95abb9f6f6f"],["/archives/2023/09/page/2/index.html","9bcb71c9bd6917fffc730af0a372f0e4"],["/archives/2023/10/index.html","bbfc32702dd10b3ee6c16cd531484410"],["/archives/2023/index.html","4f95d3f8a39886b40fd4dacb3cd1e473"],["/archives/2023/page/2/index.html","712cd2ee4f7a584087e4290efde9abfa"],["/archives/2023/page/3/index.html","f289bc7e4b06dfa4ab0dde9c56a96645"],["/archives/2023/page/4/index.html","1563f7e44382201fb0e2ac7a32631bd4"],["/archives/2023/page/5/index.html","066f228e28cf152a81a387738f587e81"],["/archives/2023/page/6/index.html","647cce1553db011f2874341f93de9ee9"],["/archives/2023/page/7/index.html","68c3e96a59f071fb6b9bf394101139ad"],["/archives/2023/page/8/index.html","09d2b4b39024543af807acd80aae643b"],["/archives/index.html","43a9bc7c889df1dfc2f84ac380e2980f"],["/archives/page/2/index.html","922c42ad96a316331ab35b62ce818099"],["/archives/page/3/index.html","5409f74be1a1f721803a83e3172e7328"],["/archives/page/4/index.html","7ac3adc298d75eca86b661d29fbb48f0"],["/archives/page/5/index.html","532c910f71de5e5dae4973a7293efbd2"],["/archives/page/6/index.html","ff1c6dc47909cdff6b60571af50977d5"],["/archives/page/7/index.html","e9e0d0e0f8c771a28e345d46bbb560fd"],["/archives/page/8/index.html","45917c7485a81a5f1fee7a04f8edd7eb"],["/archives/page/9/index.html","e81093606b53cf14ac30bec9d08d8408"],["/categories/ACG杂谈/index.html","743737ed8aecda39a4ce82772f1e0c73"],["/categories/ACG杂谈/page/2/index.html","e7695a5de919e7adc8f8c41ddc5ea880"],["/categories/ACG杂谈/page/3/index.html","90209641780e0f3c20f135a4f1fffe7e"],["/categories/index.html","8c9c1d6b6f0a0338172a0cba78a93214"],["/categories/学习笔记/index.html","0a24aa45a30fd98e36947c6322e30e9c"],["/categories/学习笔记/page/2/index.html","70d2603616f82c1d711377c92d422b9d"],["/categories/学习笔记/page/3/index.html","408e7ff6dffb0fcf13e90194c47a2654"],["/categories/工具/index.html","e8f8a614e84d72e033363d813353f671"],["/categories/工具/page/2/index.html","69ca9a65f7835eef5dc847a826ae8b9b"],["/categories/游戏人生/index.html","527f96cec4f7faf6489d32140c1a0523"],["/categories/游戏人生/page/2/index.html","c859fef5616b9265618911ea4cbbd0cd"],["/categories/读书笔记/index.html","6871560683bcdf9e3408a6a8251d9e0f"],["/categories/读书笔记/page/2/index.html","02744b672800edbef1ebfafa0644e695"],["/categories/闲言碎语/index.html","4ef8551fb522b199dd7e8c35ea6ce315"],["/census/index.html","bb1eb2631e365cd08c4d9a15d47bbe96"],["/charts/index.html","0a249baeb05c7ffe46fe215a3db944c8"],["/comments/index.html","a3663338e92e4ddf30f7ef3393eca9e4"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","8aab2e49fd249b6f4b63204fa8882770"],["/gallery/index.html","1dcc7152096b417385703f658fd36238"],["/gallery/wallpaper/index.html","d232eea19f75e0f586862deb7bee038e"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/UCB Data100：数据科学原理与技术/DataFrame.png","e6c0b5b29de36cd8b467e52344d8d800"],["/illustration/UCB Data100：数据科学原理与技术/MSE vs MAE.png","347859217d6bc16b428fe457c00f4c98"],["/illustration/UCB Data100：数据科学原理与技术/Pivot Tables.png","88d47bc8c69ac0ec18415870dab20f7e"],["/illustration/UCB Data100：数据科学原理与技术/Tukey-Mosteller Bulge Diagram.png","7b76d3505a1fb03f06e9c9569d757d78"],["/illustration/UCB Data100：数据科学原理与技术/groupby.png","c7cf52abd16b67ddd3ee39f1d65163c2"],["/illustration/UCB Data100：数据科学原理与技术/安斯库姆四重奏.png","cd1114adeaaf8be53b57b970b9ad9f2a"],["/illustration/UCB Data100：数据科学原理与技术/数据科学的生命周期.png","a31f31c8aef19f1103642e34aa9280bd"],["/illustration/UCB Data100：数据科学原理与技术/采样.png","290455ceaad9dfa53b878f115289b53e"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","99a084aabd8c384c67d8807b061a21ea"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","f79179611ef13dd66e1db556f032fa1e"],["/page/2/index.html","537c7d02a376845f8a9587739e419774"],["/page/3/index.html","f19d76d6aeb9177092bf0ef43b7ea3bc"],["/page/4/index.html","4307ac5f85301e8ea0a8f5957f6cb764"],["/page/5/index.html","f46f032f7cb3f960435828d59cbf2c4f"],["/page/6/index.html","5a68b6cfea2e052e8a24380d15b0ff20"],["/page/7/index.html","c2f3f6665685bd2773942d6d5f171ab2"],["/page/8/index.html","41fa17fe11f474a037b9b6469b42f4ae"],["/posts/106331b4.html","fccb9929518216c6c9dfc6910c959aa5"],["/posts/1185a02e.html","bbd45f92bde5ff601da74d2a03b58591"],["/posts/167c7c45.html","b78e06404988f4db9422e52ef6b842fc"],["/posts/1743dad6.html","d31371fede2bea0db1b44edecd509c54"],["/posts/175a8e1.html","6689b4ab1fde3384ba4b4b6b27e3d109"],["/posts/1be398e4.html","de9474d18f19d47f62114ae23f969e3b"],["/posts/1c5a0321.html","d6d2dc9e6a36913dff5a2efd1db0680e"],["/posts/1c5b1e9c.html","a17f0d8307053b41ac160ca248d61f1d"],["/posts/1ec7973e.html","1bed4f2a2483620043dee4a95f6049f0"],["/posts/1fb82448.html","5799495ef8de9517cb992b617192c346"],["/posts/21f18fd2.html","b5bce05847a6fe09fc6fbe0540863df6"],["/posts/29c507fa.html","c5a0ff317fcab95d0d9d01d478323657"],["/posts/2f34eb00.html","94bf23a1f8a8d45f92eac8b1f7e54b4a"],["/posts/2f57a694.html","1e6d9f4c340d35fee42034d4030ab608"],["/posts/374b54d5.html","1f6c737929ca7bf6df6170e6f7e84bfe"],["/posts/3871b764.html","1af997a4f3ee9d0e53f4eb4b52048d02"],["/posts/3b308caa.html","749ec2b6691ee1c9b91e224b1058fd72"],["/posts/3c3cdb74.html","ad1e0e96152084e6f9fac0e0052df45e"],["/posts/41f65cde.html","6e5d4f19d99f99de8dab38fe5655e01d"],["/posts/4208fd6c.html","1457443d187586418d0631fb48f1654e"],["/posts/4392373e.html","b398ea57c0827091cd12fea742c8a80a"],["/posts/440ed920.html","d7f511a59af41b59cb78139930190d32"],["/posts/4d2b51ac.html","6b2c28e22dd090fdbd220365d576a95a"],["/posts/4db1a52a.html","4402d675fec83156602a239515b651f6"],["/posts/503ae89.html","ab563161370b29f82bdc7d1afde795a1"],["/posts/535fd087.html","75464d08ecbfcc8ae71335b925ead2be"],["/posts/5923cba3.html","971c77cda8fb3efbf0a88beca6f2b942"],["/posts/5c1bb6b8.html","7450b53c98b66b8517aec91b1df11d88"],["/posts/5dc45f0c.html","aff7fa4f7f0762592c566e75caa65c7c"],["/posts/5f2caa2c.html","8ef51fe7f42e41e44b6d1a9b76320397"],["/posts/616be7b6.html","689b1b0dde22e886f80ccb63387b9c3d"],["/posts/62a1ec0c.html","50924e64c6e3ae3849c9fc219d532e32"],["/posts/69fb361e.html","d5e77ca3e90db1282aba21a4740022e7"],["/posts/6a8518ce.html","222b5a5b83354d8fc34b3a52b56f26da"],["/posts/70685119.html","144a77c85c77752b20e6a1ead0223f3e"],["/posts/743db4aa.html","44dcc32a1f905375514fae4dcdba3595"],["/posts/7b67faab.html","85b4dbc592dd64d1c238071eae34e4db"],["/posts/7b76be01.html","dc3cf3f98b69e9eb0f4ccbda6345dae4"],["/posts/7bff939e.html","a28f7bd440c33ccd94143e803877df8d"],["/posts/7cc4ca07.html","a1e3242ae319510fa0d89e405ece8c68"],["/posts/7d257210.html","dd760c76d181e23d86866e4f81ff632d"],["/posts/7ea0cbe4.html","b35d5c92a03599b6f4e13b4230d1fc09"],["/posts/7f382da2.html","7dcc81238e1cebf004cc906ec0258016"],["/posts/8207aa48.html","29de16050cc4d57a7313ee380c29af93"],["/posts/836ea9bd.html","e429659621d2f49d8789ea712df10d0a"],["/posts/84cae757.html","3b6c1afdf2820b3d2f0a9c4414c66216"],["/posts/88200036.html","10b99386cbd164a7c36f1eed57c75236"],["/posts/922fb64d.html","54ae45ddcb8adf527ad1746b7c708feb"],["/posts/98332b29.html","27fc11000db2313334d29554e66d0610"],["/posts/9a1a736f.html","09efa9022517b4f254d4711a6888cdc5"],["/posts/9addd0bb.html","dac97a9299a93efb76fbf0dbbd144a4f"],["/posts/9b44950b.html","47c7c41151c6f6cf143e475fc7a7c7e2"],["/posts/9ca149ab.html","0ec13d6abd258e4a8b11b1bf8b0afb9c"],["/posts/9e4446bf.html","cee2df57fe229188a5264ca87a0b409b"],["/posts/a0271e58.html","c937290824b968715744566cd5e1fc8d"],["/posts/a13c1dba.html","c87ecb148a253636bc073ff6f55fa488"],["/posts/a1f2a4d4.html","b21153ab9ef95c750f86bb46d3aad03c"],["/posts/a5f300de.html","14a58d796a54e738e241042018f884d1"],["/posts/a98766fe.html","50516270e9d3279f6167dc367e1b5bf9"],["/posts/a9f63847.html","617d923512e65d4c141567a260072642"],["/posts/ad31055e.html","ac8e0d4defc6b5d730971e898514ae09"],["/posts/adcd6e20.html","b4ca7de2ab07dced2c20606960e4ef63"],["/posts/b0fa4c58.html","ec962a6d580ac27a7539be8de918803e"],["/posts/b1168675.html","38bdead46ff5775dd5c824d479b15640"],["/posts/b2feeab7.html","5b8438733c8a21be482189b7cdd66363"],["/posts/b6d66f1b.html","14b43f84b78b16d9f598d424c092a955"],["/posts/b7525d11.html","3e2d3f42fdf20ee676589005b1270649"],["/posts/bb154b63.html","41f7c0439e9d00bd20a132af95dfa451"],["/posts/cc86a40d.html","09aed6519dadab21cac10658d520fe00"],["/posts/d36531a7.html","5e3493bee8d0669ddc7df92daa8fd8af"],["/posts/d442e51a.html","ea79cfcaea9564f70c3813d3e29b007a"],["/posts/d7fdf01f.html","d8c62590ce531446e0f57bf55eee56a5"],["/posts/d839b0e.html","a15907386a5fa103f07089220294d261"],["/posts/dcdf88c8.html","53c72c31e8d4afb482a415deacec611a"],["/posts/dd378ae0.html","20fa0325fbd7d0cf5f9418983503fdf0"],["/posts/e15be301.html","48b45f3936082e5674b7087a81ab75bb"],["/posts/e2e4b4ce.html","7ff12a019c9901be0b98502ea4858fc2"],["/posts/e35ef5bd.html","fbfccc6d7a0f54940bbdef6d52371cb3"],["/posts/e462ba83.html","4b00dba492f35f2e3a36cfb15dbdc7ee"],["/posts/e53204e6.html","35061b2325af3bd7fcd3aeb3516152a6"],["/posts/e5cd9bbd.html","751fdf0f2f5f70e609b9c3150d6ed7cc"],["/posts/e7a99a5e.html","af8ce0988b67f21832b6123550a27cf2"],["/posts/e9318100.html","37eb477c33da4e66b55f3c50960deb3d"],["/posts/ed52e6a0.html","08767db3824c8d6145181f8ecb399c14"],["/posts/ee0ac59a.html","16d9a2ac638b95415c8e2095ba89e915"],["/posts/f09c1ee5.html","75012ddec1c11b855207ee931d28279e"],["/posts/f4af26a9.html","9ef12e02a7bafadecdf2efc2214f5933"],["/posts/fa3cd62d.html","abfc506db2201b242240b4b09fd2c160"],["/posts/fb3794ef.html","25feddaf6b87747ff8c0cad4eac5772e"],["/posts/ffdfd6d4.html","56d4c7767d43e966f8a44753b1b94c4c"],["/private/index.html","68b64bf515b761c601e51d5935b98211"],["/random/index.html","37212ea6c6034f462f3c619541330aac"],["/sw-register.js","04a3e462d99774e9b045a72df29f15cb"],["/tags/ACG/index.html","ccf848d8a8376efe9da7895ad9195631"],["/tags/AIR/index.html","7e0978dc22cba1e01dc647c7397cd832"],["/tags/AliceSoft/index.html","5719645aebc00d96750612307e2c9370"],["/tags/Butterfly/index.html","92962cde3c903bd145e78a992acad2e2"],["/tags/C/index.html","68c65246d5dbc59fc09ee5db25b7b946"],["/tags/CMU/index.html","411b14531f64a512e2e52d68241c26b4"],["/tags/Crash-Course/index.html","a3bec1d54ff8281f2c878179d2d46bb6"],["/tags/Eushully/index.html","e6833f19c096bc9f26fcbdaaabfc3f12"],["/tags/Everlasting-Summer/index.html","30d661945b9e6e05fbf1e5825a66b975"],["/tags/GDB/index.html","797ab0a7657f6cc93709f6ad68610c5f"],["/tags/GRIS/index.html","49cfc6dcb1acc45f87c3fb14530e716f"],["/tags/GUI/index.html","ab4157db23341e37a5732e0adeeacc89"],["/tags/Git/index.html","9907b33d4dc509dd3722adf0334beb21"],["/tags/HTML/index.html","ef3208beb158fe0de7b5ca1274037f25"],["/tags/Haskell/index.html","6c52275e6afc2f5dc69d0748ef746c86"],["/tags/Java/index.html","15a18ab4a3d156fa000538f9ac890145"],["/tags/LaTeX/index.html","409122808fc952e0756eee64cc7bad43"],["/tags/MIT/index.html","13a020a61b92b96b90dfc3ddb8ed8abb"],["/tags/Markdown/index.html","c9845c62e16c741499eaeea5830fb0f5"],["/tags/Mermaid/index.html","265477e74190fc3703b31763beccce4f"],["/tags/NTR/index.html","6f2a802a9cf12ef6a4fa846c36d8a233"],["/tags/Pixar/index.html","3107c155bafd4dff7b4022da6fca14f2"],["/tags/Princeton/index.html","de9219271f89ee34dd7cdcd52f26d418"],["/tags/Python/index.html","d42aadc63ba7752f149e98d9e08947ff"],["/tags/Qt/index.html","cac10376eaf7150d15491a3e80414717"],["/tags/R18/index.html","a38eb7aae1e0151218dcb58ec6583b9f"],["/tags/Scheme/index.html","e9ab811f47f046504bbb2b6ae6f7342c"],["/tags/Stanford/index.html","788d23d93f1189be10d8a4ea5b946d98"],["/tags/UC-Berkeley/index.html","f3c01db5f32c55712d2cef36a11783c7"],["/tags/University-of-Helsinki/index.html","5e105ec084f2f50aa9dcba0b80ea6667"],["/tags/debug/index.html","4c6822e4daf7183afd40a4678be588a6"],["/tags/index.html","836a1f87aff79a4cdc401a7a83932b90"],["/tags/key/index.html","699d19d0c805502282dfe8a7d7a652e4"],["/tags/web/index.html","3a0458dab86a40b42a12909b805babb6"],["/tags/三国演义/index.html","7b74371b2ad5a58ae3b6da0cb12c6880"],["/tags/丧尸/index.html","8b5b95212eee636b0700872ff22b8501"],["/tags/京都动画/index.html","4827318776a62140fdfd9a26072c3541"],["/tags/京阿尼/index.html","9486441aea4ac4a5506feccee10d41d1"],["/tags/体系结构/index.html","60de79b7cc4c056ab58d06936ddbcf07"],["/tags/信息论/index.html","4439fec4e57267ddf142ad3df999020f"],["/tags/元稹/index.html","7d8e9049c543c6ec39c4098cec3471a1"],["/tags/公路片/index.html","f1dd978435f7b9bb708be4f76ace345f"],["/tags/兰斯/index.html","c19a37cabdd8b1216a114298784f8646"],["/tags/关于我转生变成史莱姆这档事/index.html","a889e53ba8fd1fbc166ba61f93ce004b"],["/tags/冒险/index.html","4ae33d071f16339ea65974af4738cbd9"],["/tags/函数式编程/index.html","3982f3e1c14da0da5dce957febf0a434"],["/tags/刺客信条/index.html","584c9a43898cf7e4f469b790f08386b0"],["/tags/卖肉/index.html","a46e6f8e0ae0cd46f7c4e7620f5dc854"],["/tags/博客/index.html","bdd269890d66d20c90434321173f20cf"],["/tags/去月球/index.html","48a3dfd4eeb1b7bbf26183f43bb8abf1"],["/tags/可汗学院/index.html","eef10779cd7a58181182aa9277b30f68"],["/tags/史诗/index.html","e72fe0e78a1e211125173b4b6764f9e9"],["/tags/吉卜力工作室/index.html","b084bf609b2b0045477a6197584bbaa9"],["/tags/名侦探柯南/index.html","4cb6dca3029384199adaeedf6bbfdd05"],["/tags/后宫/index.html","ead5f72b12d6b5fe05a39f5d645c2b2b"],["/tags/咒术回战/index.html","4b3b55c0da15d1718647ef0ce9468d1f"],["/tags/哆啦A梦/index.html","ab4a812c65d7a8cce00a4d9aff217c45"],["/tags/哈利波特/index.html","378d0f441a168d6fac8947802ff8cd47"],["/tags/喜羊羊与灰太狼/index.html","e7350f9ebbf6336cc4d75b0b54ee91d3"],["/tags/四大名著/index.html","c6018dc4058fbaa31866f82eb5f8f0c5"],["/tags/图表/index.html","a88ac48573c400fe99c88eca2e4b5158"],["/tags/复变函数/index.html","d3dc14619c79fc2883bb431136570530"],["/tags/孔乙己/index.html","3e811b61d4e48496cb7f93c41183e4ca"],["/tags/字符串/index.html","1f352968e7e0ea5260d80cdd041c1c8b"],["/tags/学园默示录/index.html","492e1f1717ab0a697416bb51b5162ab5"],["/tags/寻找天堂/index.html","639c5f8c8ad7e7784c18ea58b3e61582"],["/tags/希伯来大学/index.html","a27ee9952bd137a03966aa621e244240"],["/tags/异世界/index.html","24efc4ece351815034aa7029f353b43d"],["/tags/微分方程/index.html","35eec68f0318190e01ca6734353ec883"],["/tags/微积分/index.html","69e6d236da3faf47e899bbe74766d49f"],["/tags/情感/index.html","6f9484d98f49054099311dfc382926e9"],["/tags/指环王/index.html","b4c5519e3ae8fa8cbb36acc4e1a16b45"],["/tags/搞笑/index.html","7ae49ff5694241648c205fd5821e2666"],["/tags/教育/index.html","dd9f90fee130dd14f3e209cb89fc5ff7"],["/tags/数据科学/index.html","98dc363fbb9d81b2baaffa5e331560cf"],["/tags/数据结构/index.html","8bb6f35573eb7eebd5a81b34e055cf6b"],["/tags/数据结构与算法/index.html","091c05dc3eecaab39689d43a2c77ecbe"],["/tags/文字排版/index.html","f1e8b1852db5f72735c48d8f483ec23d"],["/tags/文明VI/index.html","2527c2bc3727506a5c630fc2725a8bd4"],["/tags/旅行/index.html","2e9b151ace211927ab45163bcceff715"],["/tags/无彩限的怪灵世界/index.html","781888de2e72333684cb3fe4fa28ebfa"],["/tags/时间刺客/index.html","4c7ce2ff667135e0388ea26077bd6d4e"],["/tags/有生之年/index.html","58ae88d36bdadfc850a7c1a1c323d961"],["/tags/李商隐/index.html","55e02119e37b8c0931c1601ebb66703e"],["/tags/李白/index.html","4cdc8f56d12f52a2213707e955b5a7f2"],["/tags/李贺/index.html","280782db2068150a13096129d4142e3f"],["/tags/杜甫/index.html","1c5e8bd18bc81ed6f376eaebae9ff008"],["/tags/概率论/index.html","4eea2d122de0ec974232f03d0140a763"],["/tags/正则表达式/index.html","4d9d13339eeafd556c8e07c226d4e909"],["/tags/死亡/index.html","d9395c665e835d8fa420f6ac63a12b06"],["/tags/水仙/index.html","19117fa8f18e2d3432633c85e3063f5d"],["/tags/治愈/index.html","1998be07d85720dc07c02d10e6c645ff"],["/tags/热血/index.html","1fd7233153d002ead2dfea38ae617318"],["/tags/爱国/index.html","8b5d674cd2b6b1a2f1c8ab62ba6cd578"],["/tags/版本管理/index.html","63d8017fd47334de9ccd05c987483b21"],["/tags/玉子市场/index.html","3aefdeb6a33e127a6ac30dafc6e88869"],["/tags/玉子爱情故事/index.html","ac914ff8388405a1f9175768e0ced0ae"],["/tags/王维/index.html","36103d531c3eaaa5bd1c0eecb12206b2"],["/tags/现实/index.html","985cc67c0f15029170ddfab020454dd1"],["/tags/甘城光辉游乐园/index.html","3a085d2fa6bab973242d17a4a7af0e2d"],["/tags/白居易/index.html","4075a76427309b2891e27399836d2999"],["/tags/白毛/index.html","0b16f0add6d50dbc437f3f9d080ee859"],["/tags/短篇小说/index.html","a5c8391c035be57bf97c5edbcae55851"],["/tags/神话/index.html","fd445060218312f03b8b46c5eac1e2b4"],["/tags/离散数学/index.html","7edd5748202fc1253f0acddfaa7a6019"],["/tags/种田流/index.html","24a416e71567edabe92755ccf3ea16cd"],["/tags/空洞骑士/index.html","447e3c71aa8340bd8328ddded626bf03"],["/tags/童年/index.html","cc64c486788e9c20ea29ee6e0365cce8"],["/tags/童话/index.html","8157bb24c45830e8e3c68a4300a604f4"],["/tags/第九艺术/index.html","da2cd3137770c8f11c6abaa6241bca86"],["/tags/策略游戏/index.html","258a4216ab8442397007bb3eff71ae76"],["/tags/紫罗兰永恒花园/index.html","130588f22a264c8434aea66130454c9a"],["/tags/纯爱/index.html","3618fd69f54cb7bc56c9dfb7f27ed518"],["/tags/纵使手残仍大爱/index.html","deb8e7ff406c4c3131d839a79dfbdd1c"],["/tags/线性代数/index.html","07dccef7a024f8ac642d7350ae3ec923"],["/tags/编码/index.html","88ece8f2b034e05d804d13e8cfb43a88"],["/tags/致郁/index.html","6cee139563dd7d9cbfef3b7714d69dfe"],["/tags/苏联/index.html","70def8942001a89b75c0c731ea65b36f"],["/tags/苏轼/index.html","d9c9108792e04420ce902c519d360439"],["/tags/英雄/index.html","adaa805ba361faa4c7149d2b0033a0ce"],["/tags/计算机科学/index.html","c21a813632b12be65b28bb26b4eb00a1"],["/tags/计算机系统/index.html","c34cd19532fd01b9741406c06ae61f7b"],["/tags/词中之龙/index.html","3bf787811c798aaa11c2702912fa631c"],["/tags/诗仙/index.html","592abd8aaa3240030d7cd2ca10a2fdac"],["/tags/诗佛/index.html","e46b98b5523d5a35af67c041a9a59eec"],["/tags/诗圣/index.html","9c0f2ead93a0412ff7e1a0a4e06c031a"],["/tags/诗词/index.html","3fe84c3d3401693a5ef5495366e6bd83"],["/tags/诗鬼/index.html","0dc65e3248783f599364215bb026d011"],["/tags/读书/index.html","387d95eb6f6e97bcdd860fd81c9ce816"],["/tags/豪放/index.html","5a891c76d5bed85000d1bb4ee3e0e347"],["/tags/跳跃/index.html","f661fe8f50f42cc9a9d3097b5f65615b"],["/tags/辛弃疾/index.html","ee73123db592af440e5129106d464937"],["/tags/运动/index.html","234c6ac8f7127c81c5e371d75fe2108f"],["/tags/钉宫/index.html","5b1355f6d1d9602a45ff2dbab5b61dda"],["/tags/银河战士恶魔城/index.html","6f7938e555f0280b259824d315425f45"],["/tags/陆游/index.html","46183734f03d85f05ab6e6222e152795"],["/tags/零之使魔/index.html","b488eb30d6bbc02084fcca52a6b9f481"],["/tags/霍比特人/index.html","d6c225f072fbfea58f34dc9517ea3fbc"],["/tags/飞屋环游记/index.html","7be065d434245d1b67cf48d362212f13"],["/tags/魔戒/index.html","5ac1302b4a016b7d39fa05e01ec16081"],["/tags/魔法少女小圆/index.html","522788a395c86beaf6b9e2e42d7206fd"],["/tags/鲁迅/index.html","91a006ac440cfde78260054202186fbd"]];
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
