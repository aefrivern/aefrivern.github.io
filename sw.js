/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","86869533d2a1f54683bd6893fdd91cb1"],["/about/index.html","1ec6e479b742d52be30b83444a2f86c5"],["/anime/index.html","df995e3c78c857cd138a44c7ccaa0518"],["/archives/2022/11/index.html","af73c4b41bd3cf831a9314ee9cbcc52b"],["/archives/2022/12/index.html","9181597c0e2db507c200ea10e83f814f"],["/archives/2022/index.html","528e240db824d17193819c18c1b2b739"],["/archives/2022/page/2/index.html","374d5de20e6bb62e362af66059471cf7"],["/archives/2023/01/index.html","3a0d4e13ec45977b39fa9a7d70200e2d"],["/archives/2023/02/index.html","f80ff74feed2e4024c246a415899a3e2"],["/archives/2023/03/index.html","c5624c337a90a31c7a8e1282277a9c20"],["/archives/2023/04/index.html","4ec24e7c93f4fad4d160afbd04dc8506"],["/archives/2023/04/page/2/index.html","d5571175a426e7e87c331fdd749a3c5c"],["/archives/2023/04/page/3/index.html","bf9096a77c37f07a4d4566dec1fd6397"],["/archives/2023/05/index.html","97cd93c7ac613a6c5646918bc1884660"],["/archives/2023/05/page/2/index.html","7bb98135386ec6e2ddb5222bc3b23d6a"],["/archives/2023/06/index.html","4b6e5f471cdfb6561aa52b728b116ee6"],["/archives/2023/08/index.html","3bd98ac910970e4081d3cbe2b4b31ce4"],["/archives/2023/09/index.html","889c292377db5330fa422438eebe13b9"],["/archives/2023/09/page/2/index.html","d46b267278551dd25874807a46087572"],["/archives/2023/10/index.html","d915ce4b1d81dfccbe5cf6736cc1bdef"],["/archives/2023/11/index.html","e079a3c5cba2518621008777e57ee045"],["/archives/2023/12/index.html","18d01a581fb4b1cd72a2a4e279fdf473"],["/archives/2023/index.html","a0e01c1f869ed99171f3d9c378d475e8"],["/archives/2023/page/2/index.html","a6359407681c9f9834384fe18ed4af87"],["/archives/2023/page/3/index.html","d2ec4faa922f5718da69dc5d5600aff6"],["/archives/2023/page/4/index.html","65f7fd8aee8f6be20f9a763d0ec05d5f"],["/archives/2023/page/5/index.html","422e01cb6ae97cd24c98cd3f0c606a1a"],["/archives/2023/page/6/index.html","8da96d7f7461522a7c2e73ff45f73e2c"],["/archives/2023/page/7/index.html","353ee50059ae17659f97261066e6bbdd"],["/archives/2023/page/8/index.html","615003dad492e53723e060021bd78c49"],["/archives/2023/page/9/index.html","5a88ea309bd0bc0e0dacb40806f68975"],["/archives/index.html","9f7b9e5b52c79bb9c5275b257de02e2f"],["/archives/page/10/index.html","1a5b93dfdaa0ec3eb21d4c37ff121e11"],["/archives/page/2/index.html","4992b95a3760cf90b132f384515650d8"],["/archives/page/3/index.html","f1a927d8a9f01525841a85042baedad9"],["/archives/page/4/index.html","dbfc5c1482ee1492e7f34dd75022e502"],["/archives/page/5/index.html","ce85b555979b7975913c5c1a195a06de"],["/archives/page/6/index.html","fe0e9419d1a2fe5e17e3177653b27da7"],["/archives/page/7/index.html","fee8bf1889c2878c402a6400c0cf607a"],["/archives/page/8/index.html","286ba3bc1bfcd7f2135e6fe8c123f7b1"],["/archives/page/9/index.html","0a6ce70db8b1b59f87402cd00250d35b"],["/categories/ACG杂谈/index.html","78cde9a64bcb3a844fdb26e4f9017f31"],["/categories/ACG杂谈/page/2/index.html","dc53bae7bf47c61d110a5af4b73dd611"],["/categories/ACG杂谈/page/3/index.html","1cbe56bcb7725b5249fa075bd31a17d9"],["/categories/index.html","92e8d16ff26d29899a405b2a7a088b9e"],["/categories/学习笔记/index.html","0cafe9f9fe3f68e222d1c0f54b198650"],["/categories/学习笔记/page/2/index.html","f165ecc7555d37c6a1efd901dcd91941"],["/categories/学习笔记/page/3/index.html","c18908f0ca85f936f5b9bc1df4b00530"],["/categories/工具/index.html","b4cecff4b008dd19f6c1b30ddaa6389e"],["/categories/工具/page/2/index.html","6dfd0815b435fd543b15201194faa52f"],["/categories/游戏人生/index.html","f6e8a251269ab70ab69c6705c716751a"],["/categories/游戏人生/page/2/index.html","8ea4af6f49e8a5a0639b2236c6f34b99"],["/categories/读书笔记/index.html","b5fd6e18e0a3266ba1e01a472107c665"],["/categories/读书笔记/page/2/index.html","f3ff66cfa45d5b3d91153acf29f10b33"],["/categories/闲言碎语/index.html","58bdbb06a53c390def3258107963b400"],["/census/index.html","912d1dd29d11c4c17401c2a65e75acce"],["/charts/index.html","76558eb139721919dac00ec598cc0777"],["/comments/index.html","e5ac65089dcce1a5ede6486f0ced2350"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","db908e647877869d9d85779aa1d052c7"],["/gallery/index.html","17047266d4acc338d346d4f94a0e498a"],["/gallery/wallpaper/index.html","aa1dd36fcfa93352ab69dd368a3b8128"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bbe9df921376fea429391e922cf7bcf6"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","20983d65b058e8360642cd9072997404"],["/page/2/index.html","3d7a1f5a02896e71ca1ae24de5c5d585"],["/page/3/index.html","2596c792fc66d92d5fc5d12763cdcfe1"],["/page/4/index.html","a71b3dd839d45fdcf95456f131c498e6"],["/page/5/index.html","a8ffa960c112c42e1fe389f6c12822e1"],["/page/6/index.html","811e90c730abc74ef92561824b35cf68"],["/page/7/index.html","3cb13a97788289403954eefb9c7d0c8e"],["/page/8/index.html","e3863823580395a63c683b697b6fdb90"],["/page/9/index.html","b9e15d09e0b568e024b5be5228c22a22"],["/posts/106331b4.html","a387887f3fba8c328eb87dd1e7d77eb2"],["/posts/1185a02e.html","016fe4644b5b18dd2c9d9cfac0b60be2"],["/posts/12e06b11.html","a8f0e9c29f81ee6f82e0ca48d37e6894"],["/posts/167c7c45.html","b89be17aefafade14cde8183b3a53674"],["/posts/1743dad6.html","ff0bc881b5516e1491b7c23625c1b7dc"],["/posts/175a8e1.html","89a0df1c9e6d6b9add34cfd219148702"],["/posts/1be398e4.html","0c8605ffb466f08db20911f4dc2dfee5"],["/posts/1c5a0321.html","8ae05f4d12ee69e3973c837c8e103824"],["/posts/1c5b1e9c.html","975e00d62aeb8b3c4450225dfc40ebd9"],["/posts/1ec7973e.html","e60baa094788091532a05c76ef28976c"],["/posts/1fb82448.html","2a21103dd214b3c2a540de0b41d671b0"],["/posts/21f18fd2.html","813d0d823db1d28a79bfa5522b72732c"],["/posts/29c507fa.html","38f4b9b949e18c64742dad75904a8c02"],["/posts/2f34eb00.html","0431b78a86b58385432d5753963254b2"],["/posts/2f57a694.html","5492b2408f23fd9a31cdd9fd65f726d1"],["/posts/374b54d5.html","b18e029faf1a71b30273a481ec39056b"],["/posts/3871b764.html","de08c31fe069ab238c0008b1fd994552"],["/posts/3b308caa.html","afc95dbeee1aa59d79c1e0a93a7c5d48"],["/posts/3c3cdb74.html","dcba1a429a21b77559a9c10687e9baa1"],["/posts/41f65cde.html","90b48916c34f481dbfcad8c058b086b8"],["/posts/4208fd6c.html","2a6c7a19ee2a462f4bf032c9f2a3b558"],["/posts/4392373e.html","d420c2218e91ed64cfabee7b4988c443"],["/posts/440ed920.html","f9293134d827bfc0b33534e426d28964"],["/posts/447a8d68.html","4b7c058be8025a13337c82427fda6eb3"],["/posts/4d2b51ac.html","780d1aa4ba5b9d748ac291eff9ee4a68"],["/posts/4db1a52a.html","539cadcf9493d7c2de5e92042dc02c36"],["/posts/503ae89.html","bdf8dd1bef22abe3da54d98939de34e5"],["/posts/518e2799.html","f4ab7604a58f60f69dafcfa088996322"],["/posts/535fd087.html","78398a41f3dbca020d3bd92f61b40713"],["/posts/5923cba3.html","251b5fd2180c802afa5ddf043e4ca6f1"],["/posts/5c1bb6b8.html","2488dd0f865d267ab66a5c452479d083"],["/posts/5dc45f0c.html","73b6a53aabdcc296302cecfb43732c0c"],["/posts/5f2caa2c.html","ccad8f08996fa8ec1b0f5eacc395e86d"],["/posts/616be7b6.html","ced0750e77b0ff0b84312ed49f074b65"],["/posts/62a1ec0c.html","9edeb20591412b5a222b9eeb43dec3ee"],["/posts/69fb361e.html","e82563d94c65cecfa17772eec04ce137"],["/posts/6a8518ce.html","56624533ab19015d73ec10f370681f80"],["/posts/70685119.html","7b078060eb5f6e06d469d11383e16512"],["/posts/743db4aa.html","54e70d26892bae30e718361ea147e5f0"],["/posts/7b67faab.html","b330117aec8884be06b9c2477551b48a"],["/posts/7b76be01.html","b6333cc5e0e09c0d511bf3110733427b"],["/posts/7bff939e.html","ce32f90018958f9203e55a6fd5639f48"],["/posts/7cc4ca07.html","db64fb2535abdf7a006c2fbf098ab01d"],["/posts/7d257210.html","054ed73dbc959df645523b2d64208765"],["/posts/7e6a5c94.html","35bbb41114fd939647aff09d9aa5f424"],["/posts/7ea0cbe4.html","dc0f026388ae0a3dd1f9b4efde8ecacf"],["/posts/7f382da2.html","eec23ea5164ab95d5b32deeef4dd1aa4"],["/posts/7f8d32f4.html","fd6e81b96b38494df6343e474f15a722"],["/posts/8207aa48.html","40f9d98625a257ea93430ec868cff117"],["/posts/836ea9bd.html","085e1ede692107da65528aa5d293b92a"],["/posts/84cae757.html","ce9e0f24c883b8b6b3a648b9e2b1413d"],["/posts/88200036.html","7ce63140b5d2c674f960eb8ae34e5062"],["/posts/922fb64d.html","ed10018ede36c0c9701d6843777f9123"],["/posts/98332b29.html","1f67e21c245a39da4edc07e07c54cc07"],["/posts/9a1a736f.html","1f0d6fdf9a45838d2a29fc5195dcf419"],["/posts/9addd0bb.html","f555b80b8c8431b7c80c3465a8ba1f6d"],["/posts/9b44950b.html","db804960345b00805aca93cbd78f4a00"],["/posts/9ca149ab.html","53c83930bdeccc000177c97b7698fa39"],["/posts/9e4446bf.html","3987e8dbfe4939b3d94c65c7c712a274"],["/posts/a0271e58.html","a19276f88522d24a16a30eae83db52f6"],["/posts/a13c1dba.html","dc9a575791169c2da2a1f53701e626a7"],["/posts/a1f2a4d4.html","9aaf8959e0a611f8436b122eb7871f92"],["/posts/a5f300de.html","3dd3ecdfe1c2d204d8f1b02aabfbe42b"],["/posts/a98766fe.html","9eea17f33688b11b564799c234193eec"],["/posts/a9f63847.html","ea23df49a11a4bb9d6c2fca19a1388e8"],["/posts/ad31055e.html","9a3ed3b0d42b29555b748928269f455b"],["/posts/adcd6e20.html","4826842106afadf4ce71807790ee6bb0"],["/posts/b0fa4c58.html","3695c1f101465fe68591c688b05ea2d1"],["/posts/b1168675.html","c4254b5e92ec338b8b657be55898c620"],["/posts/b291b1dc.html","084fa0011295a1ea2af8dc0ffa1a168e"],["/posts/b2feeab7.html","d8c823fdd50d73c934fb5edf7112a53a"],["/posts/b6d66f1b.html","63cb7e9fc0a10d236e65f0ee099b7bb3"],["/posts/b7525d11.html","2e091c2c1cebafbf044ae4bbd50575b0"],["/posts/bb154b63.html","60f2d18b43f17224a7ca991620f21b7c"],["/posts/cc86a40d.html","ff34f3070940c191b0df64bf25412e39"],["/posts/d36531a7.html","ce0f57e4296c8a7fb1cf2b9d244d028c"],["/posts/d442e51a.html","bce0a7d9bbcefd48e5155f0d3b5edf89"],["/posts/d7fdf01f.html","b051b9ea75b977e41f870b6ff6225fdf"],["/posts/d839b0e.html","7b518a13b5fcf8bb04c0807a3a0a7763"],["/posts/dcdf88c8.html","5f24d694f6650004fd6d2b26d2842c45"],["/posts/dd378ae0.html","8f1e3fd35e14944ffc40440b10f81b51"],["/posts/e15be301.html","8c65b7a784b54bc16b86f1d7a2561fb6"],["/posts/e2e4b4ce.html","fd032def799c61986aff3b318a961618"],["/posts/e35ef5bd.html","f4727e8bafb1777aa82553fae7beaab8"],["/posts/e462ba83.html","9e6e1c8943a184020a9bc1559714bae6"],["/posts/e53204e6.html","c02be6479dede3acf33be2c476c76857"],["/posts/e5cd9bbd.html","4e4c0c9f6820ae3892878db46d62d6b4"],["/posts/e7a99a5e.html","912b6f90b5fd2231348fb42f162c9d00"],["/posts/e9318100.html","d2769a44382eeb5b0d2b853f32add857"],["/posts/ed52e6a0.html","b67214a8b1b24bf55d4aebe8b9f61a43"],["/posts/ee0ac59a.html","65bb17685ca0fa152c8e33bc2307acba"],["/posts/f09c1ee5.html","b2c3bddd00289745be0ee94e130fb202"],["/posts/f1252f66.html","4b1adf6c3d8c3c5106a998223b4b0359"],["/posts/f4af26a9.html","93597eeb85fc0ec6fc5b196cb0c5742c"],["/posts/fa3cd62d.html","09207be5250a1eb7e1524351cc01bccc"],["/posts/fb3794ef.html","60d62194b5d48972a23c4cdc002a6aae"],["/posts/ffdfd6d4.html","002f8ffcf64549c3fff8e6c9dcc02184"],["/private/index.html","73cf61ce9739e4374cd57c4ec6c1af19"],["/random/index.html","9572b0e8de8fa05e6a6f9f57885b5794"],["/sw-register.js","4db4180c64aecf743ff67444c1ef2375"],["/tags/ACG/index.html","abcaaf6fc55ae0a4e2231012b4d1d7ef"],["/tags/AIR/index.html","b92eed9a6ac6a693a0abae2e1e354c06"],["/tags/AliceSoft/index.html","58e1a9d4d7206db0f17ecc8cd306cf74"],["/tags/Butterfly/index.html","a1caeff95634fb93b08503c72f68427f"],["/tags/C/index.html","96d4e52dd54b245c3efa8011f1da1338"],["/tags/CLI/index.html","2ae7c433f42b92ff8eae72458d1a805c"],["/tags/CMU/index.html","f13565a9639bc6cf3c2dcf31afe5a378"],["/tags/Crash-Course/index.html","51e5fe56a718e409e012847cba55ffaf"],["/tags/ETH-Zurich/index.html","5ef1a6223639043e3bad14ce306277dd"],["/tags/Eushully/index.html","e2b9b2684f030efd3663e43b21f44dd1"],["/tags/Everlasting-Summer/index.html","70545ec2705d08a75057dd1926e8a04d"],["/tags/GDB/index.html","31a18b7797e62c80b9bb5230a9aa3d67"],["/tags/GRIS/index.html","0fbfb3ce489dd4bbe91fdc409e96fdcf"],["/tags/GUI/index.html","083ba6d664876a26a17ab96e724f7932"],["/tags/Git/index.html","b58058413404e0d7af14fe51df716a2b"],["/tags/HTML/index.html","236ba8aacc617b1817393c15f70d4307"],["/tags/Haskell/index.html","fbe6085f327840bf8530ab4fb3be3b1d"],["/tags/Java/index.html","52abbc20098ce308833bcc0ca8948543"],["/tags/LaTeX/index.html","1d71fb93ff1d2a7d566f2b8ea8c1b39d"],["/tags/MIT/index.html","733440187c177cab512dae7417471ee3"],["/tags/Markdown/index.html","ccedd0c1bda5a279590f981345bac490"],["/tags/Mermaid/index.html","66e86c7781149fb90f98f523bc8a9f54"],["/tags/NTR/index.html","dd06239ebf1e9867a4f03cde6dd08467"],["/tags/Pixar/index.html","209d87e20f9229c5b9e67d976179c551"],["/tags/Princeton/index.html","0c0514b1ec9a64d43e50193a3fac6ae3"],["/tags/Python/index.html","56910644387eaf0f879744083e4d48df"],["/tags/Qt/index.html","d0978b7a6cfef22ae602dfe66972dbed"],["/tags/R18/index.html","df3fe5659bd154da7fcc760d91665591"],["/tags/RISC-V/index.html","b0b46a3b80fc3aa5f13941b956e08d4d"],["/tags/Scheme/index.html","c7af94d8b21d309cd35aa1753905a95c"],["/tags/Shell/index.html","889b3c775b5cce1d269d42340fdf5d5b"],["/tags/Stanford/index.html","34a23a1e4d841583e04e609142885063"],["/tags/UC-Berkeley/index.html","a9f196c91a7fe535cb6e25d926d52fdb"],["/tags/University-of-Helsinki/index.html","184bc077aef1914b39e88a6610e69e5c"],["/tags/debug/index.html","cdffbfee21fc7a99b7d01f7da4ef7a28"],["/tags/index.html","bc0eb0e207f2fd1bb50f78b2e3236114"],["/tags/key/index.html","0d90bf5f2e552bfda2f09f90f7b8292d"],["/tags/web/index.html","488c1605a6032447a69567bfe3a79173"],["/tags/三国演义/index.html","dea8b2ce8fb3a6e042cc1f20914da2ce"],["/tags/丧尸/index.html","56c3a91ac1245f09eb1ef89a6e1e54b4"],["/tags/京都动画/index.html","cb34b6fc58abe88df6a4ae017bddae4e"],["/tags/京阿尼/index.html","21e428a9e3e8cb2f05220cb37fec098a"],["/tags/体系结构/index.html","0517f310cebc302f2153211442f21359"],["/tags/信号与系统/index.html","37b69455ae179d374667d870f090f293"],["/tags/信息论/index.html","1c6d67f601f5fe56050d6fa6506bad8f"],["/tags/傲慢与偏见/index.html","e25846ae2bb94bfb4ac05f60f47428e2"],["/tags/元稹/index.html","63335debe7d395149a15aac7e935c192"],["/tags/公路片/index.html","0b2bec395e48b6f79e3359f757122ef2"],["/tags/兰斯/index.html","42cf4810a80966f7dc12dcd9195bb25b"],["/tags/关于我转生变成史莱姆这档事/index.html","c0c1cc7a068a65fe87279ae52019a021"],["/tags/冒险/index.html","097d46e698f905dca667678b757ab847"],["/tags/函数式编程/index.html","a6c2a7e69ba004e6171082a3d5652f7f"],["/tags/刺客信条/index.html","b604f1c261ed0a7847ca60ad99ba4c13"],["/tags/卖肉/index.html","16556e9a3c54dc7dc1cc56955c99a715"],["/tags/博客/index.html","e5f9021518c13f46d7b1e068850093c3"],["/tags/去月球/index.html","056dc0f7ffc31a8118cf2f47b506f5fa"],["/tags/可汗学院/index.html","f8fc743cf0c993d914436849c4c25ae6"],["/tags/史诗/index.html","dcce18b93d75530e9de5b43dc2a55e64"],["/tags/吉卜力工作室/index.html","2afedb49bff9d32c88ab1fd180866096"],["/tags/名侦探柯南/index.html","dc79a2393dab3c8d74f43310ad93c2bf"],["/tags/后宫/index.html","881618f874bc75c7b63dda6920424a62"],["/tags/咒术回战/index.html","1b25d17c9f12cd75ce024a273b7cde17"],["/tags/哆啦A梦/index.html","b12034a8d7ccca426c97ecb60fd5c4ce"],["/tags/哈利波特/index.html","cd6c748002dcdf8befe46ec394b71a66"],["/tags/喜剧/index.html","f26dde05f24e919a26ea5cd08cca9012"],["/tags/喜羊羊与灰太狼/index.html","ae54fe6a46cc3fb820e953b32c2d4627"],["/tags/四大名著/index.html","4d4fc3c7f852d61cc626ef4453146fa4"],["/tags/图表/index.html","afbd11dfda39a2c48be5c97ca9065d7b"],["/tags/复变函数/index.html","bae06e16ad38b6ed1a72f5877a88b44c"],["/tags/孔乙己/index.html","98212559f0ba937e67ef57dab7f43842"],["/tags/字符串/index.html","3349f59f907c87c69be1ed6feb274cf0"],["/tags/学园默示录/index.html","794bbd5cfa892ae9f7fce91f384077c5"],["/tags/寻找天堂/index.html","9571f4587a6e65e6b428647ad517a910"],["/tags/希伯来大学/index.html","8ad2912b7c3ba4ea11063ecc5a72f3be"],["/tags/异世界/index.html","3afd1812941289f239f3413756adaeea"],["/tags/微分方程/index.html","050d1e868920d158cd4915bcf7050cd1"],["/tags/微积分/index.html","416c645d894c9b369ffdd4763c5ac2ac"],["/tags/恋爱/index.html","481db229ef31d50049ccc6e3b0708fc1"],["/tags/情感/index.html","803eb62592b66b38aa672658ffc53fe1"],["/tags/成为简奥斯汀/index.html","d71242f889c59aebba04a6b45fcbee2c"],["/tags/指环王/index.html","cbb660ef9612323b8c79cfc14e3a9ffd"],["/tags/搞笑/index.html","d9b2f8df4cc8b057b107acdf6b145181"],["/tags/教育/index.html","40117092c6246f0226dba1e2a3630c7c"],["/tags/数据科学/index.html","4c07265e6f2844e9d94144bb6bd8840e"],["/tags/数据结构/index.html","46277c308b12808e3a9fe330d9a65ac0"],["/tags/数据结构与算法/index.html","93fc126bed597c2094ad661afdc40b7d"],["/tags/文字排版/index.html","1289f094d8701a2fa99d0cf8c2f0c092"],["/tags/文明VI/index.html","548b6506c51429f4828277bc16cf4972"],["/tags/旅行/index.html","9fa39a3ecc97dbf189c25e60f33ee34a"],["/tags/无彩限的怪灵世界/index.html","be24db92aa23760c152b81711a26e93c"],["/tags/时间刺客/index.html","271ce023736f6e4174bdc268d665b151"],["/tags/有生之年/index.html","8db49fed87c19fb365bc9fb45b52bde7"],["/tags/李商隐/index.html","63c888b2d4a60f48e8778912f2cd589e"],["/tags/李白/index.html","65a3048d4bdd0f7c4a22b6e80d2e26ae"],["/tags/李贺/index.html","8f78d8eef537195c86ed12c04d595bd1"],["/tags/杜甫/index.html","5fb6018aa9b8ca04b1e87c546c2f0da6"],["/tags/校园/index.html","f45789c8c326717c856edb16afc7bbb9"],["/tags/概率论/index.html","a0d47844e79714cb01f7b37282da0967"],["/tags/正则表达式/index.html","afdcd45cd4476257312a2920a9ad0fb1"],["/tags/死亡/index.html","f61078e0324db9d357fe289534574f3e"],["/tags/水仙/index.html","bb42504c67289a55d14301d19d658951"],["/tags/治愈/index.html","af1e37358dd9fc42ec597d8173c0d26a"],["/tags/烂尾/index.html","5cd35f68164128132b68391f691cda0a"],["/tags/热血/index.html","876ac0318e51b4af646c4505c19a3f45"],["/tags/爱国/index.html","ec3815482f1101c67e3fbb38075dbf2d"],["/tags/版本管理/index.html","19c9d454b43ee3b775bc8c8685af6558"],["/tags/玉子市场/index.html","c3bbeda4e0fc6487e8c22cb34596eabd"],["/tags/玉子爱情故事/index.html","3deb4beb76b71df9b07c4b01e7b300b9"],["/tags/王维/index.html","41fc1dbc5373c3f171da31f39f1c2514"],["/tags/现实/index.html","89a42a4b25089eb7bd393923bf48ed04"],["/tags/甘城光辉游乐园/index.html","7c2b19628cf8599dee56ac6926852f81"],["/tags/白居易/index.html","f16fb48adfa240e627504ecf14222121"],["/tags/白毛/index.html","39cece59d444fd3332987baccb547129"],["/tags/短篇小说/index.html","6df4f1f333c761da8333e721c31b02f7"],["/tags/神话/index.html","0dd4b4fd6725fa6f54952bb0ba53751a"],["/tags/离散数学/index.html","a34143cef62c23a0e25e35fa1620ec5a"],["/tags/种田流/index.html","1a5a33ca607a2d9814a59e05f851943e"],["/tags/空洞骑士/index.html","6956eb3c66e5e0c00c5e22ea487f062c"],["/tags/童年/index.html","1444a65927fd0c13bbd94f587ae311d4"],["/tags/童话/index.html","e2bd0b174064b5c80f4263741f247a2b"],["/tags/第九艺术/index.html","0405ba7ae72573e67a4325bcbe5d8fd8"],["/tags/策略游戏/index.html","bdc767ffae8a4b846c2ef56355402c18"],["/tags/简奥斯汀/index.html","5fc0a9a20e99fd4513a41bd0c32cb07e"],["/tags/紫罗兰永恒花园/index.html","46c5fa2584b8fb81147d4fb8520aad00"],["/tags/纯爱/index.html","28bb2415ae44afa740c8b7fd829bd26d"],["/tags/纵使手残仍大爱/index.html","46cdfa588e66ff967a1b7ff1868941fb"],["/tags/线性代数/index.html","472739c25c33914ca39ad88337da20cc"],["/tags/编码/index.html","d1aa917765dd386a537fd0f720a91d5e"],["/tags/致郁/index.html","9661d4ee682d2a01fc1f0175be1c513e"],["/tags/苏联/index.html","10d3c0642ca462ef6dcd051a094cb225"],["/tags/苏轼/index.html","306d56807107c7657ff9b4f7f3a81396"],["/tags/英雄/index.html","316c12803d800fd45162d8a0aa6b352f"],["/tags/计算机科学/index.html","9e7006fe2f6406cce9a9bfbf41b371ef"],["/tags/计算机系统/index.html","bd21190b40d4c4bc42c25d4cd95656b8"],["/tags/计算机网络/index.html","5854ad051da40a51bdd2a1947293edb7"],["/tags/词中之龙/index.html","57a1f7caf9e699853f02614096c9ec32"],["/tags/诗仙/index.html","61d94d85fc39bf9ef13e30f9d711d991"],["/tags/诗佛/index.html","56d72958f38f32737dcafe0eff8615e8"],["/tags/诗圣/index.html","b6b27e463770acb525c1132afdad0d24"],["/tags/诗词/index.html","7594c52602973672eb931fb0e5e79dc4"],["/tags/诗鬼/index.html","141bedb9eabb0d469beac45bb5274583"],["/tags/读书/index.html","edccc9d2eb89ffbee4c29b0ddbf9a3b9"],["/tags/豪放/index.html","ec2382cf5c785ff29871dfc46328475c"],["/tags/跳跃/index.html","ca5e212d4a96a985f277a73a98dac38e"],["/tags/辛弃疾/index.html","2652a825a7ace73ad0fe898c4fd2c829"],["/tags/运动/index.html","5ef7afa05f9870d3b53b3c22f0d9e344"],["/tags/钉宫/index.html","4d7d9601f3bdc5cdb5b293d8a2da9eb8"],["/tags/银河战士恶魔城/index.html","48e133cef09bfcfb02e2dfaefd2f9153"],["/tags/陆游/index.html","f4b76b616c13e297425040ada93a6b21"],["/tags/零之使魔/index.html","bc7874f5394b8caf82e5094e9a73b715"],["/tags/霍比特人/index.html","211c98bac63d2f65cbe9ba580863406c"],["/tags/飞屋环游记/index.html","5126dafc0c40d0f80c89a2d7060e0e13"],["/tags/魔戒/index.html","560a7abe1790a85caaa901588c393794"],["/tags/魔法少女小圆/index.html","8cbaf176c842b0325d5d1efc22ac9589"],["/tags/鲁迅/index.html","900a3676152f36c5b88a3c7aaf974fd3"]];
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
