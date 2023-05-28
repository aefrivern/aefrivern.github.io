/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0c3ddb24cddccb4fe4dc7f49cdc1a8ff"],["/about/index.html","0d806684e63ce5282ca654e95f112a00"],["/anime/index.html","215f0cc67eb483c7af02403938624dee"],["/archives/2022/11/index.html","72992e4afd3b8c8041ebec266c45da86"],["/archives/2022/12/index.html","30faf48dc866efd21df8ad8a9fd04d99"],["/archives/2022/index.html","5e21442053516e286cd4434e5f666ce3"],["/archives/2022/page/2/index.html","13d4370bc70575b5671261c58d07d7ff"],["/archives/2023/01/index.html","7c25fd67ca777666b2a4ac397b7253f2"],["/archives/2023/02/index.html","442c26f4ba1536e83125d676fcc56811"],["/archives/2023/03/index.html","7e17094587d8410adca1244ad6247f9f"],["/archives/2023/04/index.html","43f196de40558489cf6c86f9ea66a014"],["/archives/2023/04/page/2/index.html","995f11f8095f1a4202ed471beee9edd7"],["/archives/2023/04/page/3/index.html","e3198db97eb5022cc444be1677ec766a"],["/archives/2023/05/index.html","950c57355a933bef21819e584f7ff994"],["/archives/2023/05/page/2/index.html","280764952dbd70a8551d724336b14981"],["/archives/2023/index.html","fb64ab0a2ebb1006abcebe3957e6a202"],["/archives/2023/page/2/index.html","70ded7cdc3b74ea8cc8fb071b1bcc79c"],["/archives/2023/page/3/index.html","1f790aa3d3f7e3a0ce55859ff4c9052f"],["/archives/2023/page/4/index.html","267c4c4c59e32dcfbc2d57df4825c8c6"],["/archives/2023/page/5/index.html","f0460899c7a3a96f588a77fd9b2c9794"],["/archives/index.html","dd86f3dbad81431ba491bc99f0a96ec8"],["/archives/page/2/index.html","cff24e87934d123d4656925d524db64c"],["/archives/page/3/index.html","e8d3c3029273e6c7b03af89c7a9c8232"],["/archives/page/4/index.html","76ca6a1cbb9c4bb29d11e0cfb1ee999a"],["/archives/page/5/index.html","d64b83462d2e3bb6450dc1b169361fbe"],["/archives/page/6/index.html","f7d3b5d8b953d463579a27da0ab4d5c2"],["/archives/page/7/index.html","b9343c99d3fe0e5b74eb23ad7fde3298"],["/categories/ACG杂谈/index.html","5a7e69e6d2d28963c05fa67203b8f23d"],["/categories/ACG杂谈/page/2/index.html","76a6cc2d30b5ba6aaa2b896410264e9c"],["/categories/index.html","c3d302d8b280f23a3818489f7e35f0e7"],["/categories/学习笔记/index.html","282a83b24a0d795c1beae006b31b3924"],["/categories/学习笔记/page/2/index.html","1c581ac97fbd171acdc2e51fee138cfa"],["/categories/工具/index.html","70218ff6f5328047e9f715a4d2708372"],["/categories/游戏人生/index.html","f5c38b5c6b6b97d7681af2166424b4a0"],["/categories/读书笔记/index.html","26a273768ab0ce7d9036335bb3054535"],["/categories/读书笔记/page/2/index.html","9b38871854c2cc2d8d82aab55fb0bd35"],["/categories/闲言碎语/index.html","ce3a5b21abd19539eb52fafe11777fdf"],["/census/index.html","5b435c6ec7ffde9b961a00eeee947bfd"],["/charts/index.html","33a1443b9bb7c4ecc8ebd323444fad71"],["/comments/index.html","a65c196b037bd76ccf50007120bb88e0"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/index.css","bf842e7d897499cf17716fcafe1b2af9"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","4d78d802e6ed6d4eb4b018e5d4a5160f"],["/gallery/index.html","2896f86ede948a61ac20f691df8db711"],["/gallery/wallpaper/index.html","b829c63a94093933ac5299ed8690cdb6"],["/illustration/MIT 6.050J & 2.110J：信息与熵/复合电路比特.jpg","7f3b39dad7099b4a5344b0a883f437bc"],["/illustration/MIT 6.050J & 2.110J：信息与熵/源的熵.jpg","5e97d5ac9576435b2b958a0862bd444e"],["/illustration/MIT 6.050J & 2.110J：信息与熵/电路比特.jpg","aedc9d562cf39c1c4d799c698246e990"],["/illustration/MIT 6.050J & 2.110J：信息与熵/通信系统模型.jpg","2d9b043c66982f7eb2881d1a5dfebfee"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","cc277851bde0aefc3f0a9f2e00a39c01"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","6d718426bd15202b11f89d4671bb93b5"],["/page/2/index.html","fd62749b4ee4dc5f27bc9b83cbb2775f"],["/page/3/index.html","b195c69503e5209bbc571a573d124f7d"],["/page/4/index.html","02f5dda137114efbe1423e87c96d46fd"],["/page/5/index.html","e649eecf8baca6efab54e9b799f08de7"],["/page/6/index.html","f26bcb2118d94b2b17c96e358d742ac4"],["/posts/1c5a0321.html","005726b82bacd334f3bcc8e1747adb53"],["/posts/1ec7973e.html","e74c239afd9998f8997a88e618ba40a8"],["/posts/1fb82448.html","792787b01132710169333386e4bcc646"],["/posts/2f34eb00.html","1fc49267cbba7796fc4344acc93d576a"],["/posts/2f57a694.html","a0bb4f499492187abcfe3c631d967b86"],["/posts/374b54d5.html","d0fab683537b3a3021909dd699ca9e66"],["/posts/3871b764.html","4c9036ed44babc29c362bba173e89b7b"],["/posts/3b308caa.html","e34f073d3d23a60a15413fd10ef832f1"],["/posts/3c3cdb74.html","d90fbd8da545c447ba67f523761bc45e"],["/posts/41f65cde.html","e3ad1728f3528a15df9f6a8771500800"],["/posts/4208fd6c.html","8a74a66b42e51f6237bd98b46eb1b6fb"],["/posts/4392373e.html","7b8f4f810b24ead99189d010e5cb1493"],["/posts/440ed920.html","aca28b70355bd1f48e0836fa1d25f8df"],["/posts/4d2b51ac.html","31f9a0dc182ca800bddb683ae23de404"],["/posts/503ae89.html","39b73260d733b0df5caaae7b5b315425"],["/posts/535fd087.html","2c4ea529f279ecdcfb327214f53d9ade"],["/posts/5923cba3.html","109f246a1084a2476050e398ed4ae217"],["/posts/5f2caa2c.html","d2f1a3406d888319b2081b67c962589d"],["/posts/616be7b6.html","995c0f71246a4a4a0e521fbf5406615c"],["/posts/62a1ec0c.html","69c8980f6adc5987091eb9abad3122e0"],["/posts/69fb361e.html","966bf716bb157a975708dc30a53cd36a"],["/posts/70685119.html","8ccfd9284ff4bacb1c7e5ba4394ba961"],["/posts/743db4aa.html","834644ee0ebd1871bbc10eccf12ca00b"],["/posts/7b67faab.html","b1a7188937f32ac96e31fd8d07eba263"],["/posts/7b76be01.html","69e962771ab653af5407e580a20be19e"],["/posts/7bff939e.html","69df4c06c109fbea35ecde28be86e077"],["/posts/7cc4ca07.html","28d35777d5cd894263031042aaba2199"],["/posts/7d257210.html","c9de5981267e072581e54c9efdef0aa7"],["/posts/7ea0cbe4.html","71ad2af3f8f4064e51faf11e8c8a703c"],["/posts/7f382da2.html","c767a3b92861613b4f1e5a045bbb5c76"],["/posts/8207aa48.html","0e6bb959dd3799299db96e787e56a295"],["/posts/84cae757.html","30a0fbf0290b75e93e01ddee47031539"],["/posts/88200036.html","d6bb7fff4709250ac4cd8b36dc6e2fdf"],["/posts/922fb64d.html","52fadde7fe7ee90e00cd4d557673eac0"],["/posts/98332b29.html","e2ee4970101e6ef0e3fc4765c1c5d0d6"],["/posts/9a1a736f.html","ac616e7e4fbdf7b05f695c1bc676a613"],["/posts/9addd0bb.html","6d5f5e175cce13551a40a47fb6d87b9a"],["/posts/9b44950b.html","9e207fd3cce46cc1e9485fd1d10cdd80"],["/posts/9ca149ab.html","b69dc6d963ad08ff0542536d100e0867"],["/posts/9e4446bf.html","7b0558fd97a18b61e876cc040a2ecda5"],["/posts/a13c1dba.html","346bd58d18d988003f2c4921855fcd5a"],["/posts/a1f2a4d4.html","be391bdaf9b687dc30d997f42362da5d"],["/posts/a5f300de.html","7d798ac3df8d3ced83f09ba43da880b8"],["/posts/a9f63847.html","6f5811b11f4ef3d28364f518ce08308c"],["/posts/ad31055e.html","6cd4fe0842d2784754f261297fcfa000"],["/posts/adcd6e20.html","100811906068bcb7d5305376abf11b06"],["/posts/b2feeab7.html","76b6e2354d25c5d39ae87006a3bcc847"],["/posts/b7525d11.html","ce7d18bdcfc13b9ba46d0dd8e546f4c6"],["/posts/cc86a40d.html","745b2dcb2318f1ba053856af8e598605"],["/posts/d36531a7.html","44e912e414abdb3e9bf5d2847ddfee4e"],["/posts/d7fdf01f.html","21a2c235e1c913771b60cdb9375c6b35"],["/posts/dcdf88c8.html","dfd83864356104ff3c2b42cf27d638d7"],["/posts/dd378ae0.html","1c4cf2d31ab6268897e91d2332aa721a"],["/posts/e15be301.html","8f14748e1d99f8fee7702d30440a47fe"],["/posts/e2e4b4ce.html","605a02ab60e6e9d1de49471b0cb93747"],["/posts/e35ef5bd.html","4f73de34408f86927ccfe8e3d5a5f764"],["/posts/e5cd9bbd.html","09bfad0c7ecf7653777fe7e89cedf27b"],["/posts/e7a99a5e.html","7aa5c7d6ed3be8860eacb2bb2d80c583"],["/posts/ed52e6a0.html","0f5131a23d80a08d1a91f8949689e760"],["/posts/ee0ac59a.html","c73399bc81ccb2c45b32bf498a98d69b"],["/posts/f09c1ee5.html","4cc0e7fdb5159f4af3f162143042e6dd"],["/posts/f4af26a9.html","0f7ba76bbb7d375555fc178ee38ce46b"],["/posts/fa3cd62d.html","8b1e35bdc6c0379dde91cb43087a1376"],["/posts/ffdfd6d4.html","80121f55d48e8c09c970f5898338bd56"],["/private/index.html","29a12e9190019a7d6436570c7ba0d504"],["/random/index.html","6e065067f6d21706299c87aae517f086"],["/sw-register.js","abe7f6308bd1be20598344668c9c552a"],["/tags/ACG/index.html","6a41c0163b8c349a51ee60cfd991b4b5"],["/tags/AIR/index.html","6be424dee7cd5d9f1271117586d1db00"],["/tags/Butterfly/index.html","3bdf416985bd376fe80b326af285ca11"],["/tags/C/index.html","2effdd5a39f74bad45e63d031aebdaca"],["/tags/Crash-Course/index.html","1081c4a3de66c2dc9b6c765a4696ef28"],["/tags/GUI/index.html","3657d8ea45c44019a612fa82d11ff841"],["/tags/Git/index.html","79ae3d801b37e5cbfb7ab1ac24a8f63b"],["/tags/HTML/index.html","396c2ad20764d0105b4eb77511db7fc9"],["/tags/Haskell/index.html","bc97b78430635358185303c9641f63d0"],["/tags/Java/index.html","9ffe0c8a11c4ec6015d50cf3a07e111c"],["/tags/LaTeX/index.html","1b3dc8ed3979cb7576dce6fb76d0f37a"],["/tags/MIT/index.html","8c90072ee4428c350f14c77294910b5c"],["/tags/Markdown/index.html","3697b84e91d97e76793d2dc20700979c"],["/tags/Mermaid/index.html","e9f18ea79972f16b61bd6ccee000cdeb"],["/tags/NTR/index.html","6f3a68bef87d3cf969c8fd16a1f0bd88"],["/tags/Pixar/index.html","00ebbf0feea1c191c3295a3791d99a17"],["/tags/Princeton/index.html","da88fa619c12d04e0b9f5bd31b7e0a61"],["/tags/Python/index.html","fd775924a6c9178427a6bf5f68629b7f"],["/tags/Qt/index.html","79a64801ff61c53aaaf0800b09797cf8"],["/tags/Scheme/index.html","dce8791f402d4bb43068b186ebab7d4b"],["/tags/Stanford/index.html","cb596035d55fe073361006c1a7d21f56"],["/tags/UC-Berkeley/index.html","1a243db90056afb47a0056ad347de838"],["/tags/University-of-Helsinki/index.html","5acfe27b4c159fe22f736bd44cc66f05"],["/tags/index.html","cb5c8359979de2d91d9a2c5668f7f3b2"],["/tags/三国演义/index.html","b21d42c529eee9765768c00079ed5003"],["/tags/丧尸/index.html","fe46309b4313713134a4b362c5d7f740"],["/tags/京阿尼/index.html","039b17a4eca8c8db3e039985f2ca84fe"],["/tags/信息论/index.html","40607e85ca36aa09bce2fefc44940f7f"],["/tags/元稹/index.html","a1ac356b0efe75a635cb2c675fc78745"],["/tags/关于我转生变成史莱姆这档事/index.html","ccc6094a1db4ce597f475df147703235"],["/tags/函数式编程/index.html","fbede41a68168fbadef7ff679516d75d"],["/tags/刺客信条/index.html","94a4dcfced623d4ae68452bc9561439b"],["/tags/卖肉/index.html","587cc951ee574e76f219b96929e20418"],["/tags/博客/index.html","952381c05a69d390f0ca7a08dd31fe60"],["/tags/去月球/index.html","074d3a6cda05f2075ee67cf470e7585d"],["/tags/可汗学院/index.html","311a90918739ba1a43a0c2d6a8673ae2"],["/tags/史诗/index.html","4f675f4f06ab64c95a9249c7cc3f9ccc"],["/tags/名侦探柯南/index.html","76d8be64098ec5c033efa746ead78873"],["/tags/后宫/index.html","f60c97f33a0e2a9d77614c9c237ed765"],["/tags/咒术回战/index.html","9c3087f774128c781cdee5e6abc2444c"],["/tags/哆啦A梦/index.html","d417331d23f93c54c5a18a9d00603022"],["/tags/哈利波特/index.html","8bf12d532aebb1ae9b601016ce494ee9"],["/tags/喜羊羊与灰太狼/index.html","ba712548555235805553e3ab465280f7"],["/tags/四大名著/index.html","fa7ef942b0f931c39d5b7910081c21ba"],["/tags/图表/index.html","ee6301886eb3279f60d43e1944664454"],["/tags/复变函数/index.html","9848d2b9bdf1ee28e37cd3407345f6c1"],["/tags/孔乙己/index.html","9bbf74064610f0f68d08f01026aa59b2"],["/tags/字符串/index.html","435ee17499999a64adeab1310d0631d3"],["/tags/学园默示录/index.html","1d38943a2583a3acbfd9c0d93c987162"],["/tags/异世界/index.html","4adc40238ef1b0cd7a84233f49fbf4c3"],["/tags/微分方程/index.html","020c4e00dbd8a8be8ab3911489f08567"],["/tags/微积分/index.html","ef11614b9066c54a407f4e63d28fcb9d"],["/tags/情感/index.html","336408525f9a30a82de4c5723b0a5740"],["/tags/指环王/index.html","710a442d2c347ce3f434de816ae1f11f"],["/tags/搞笑/index.html","44f6ea5e7afb3194f7ec15c60fefd691"],["/tags/教育/index.html","7e3b5af52b5c4a4019f0cca6784285ca"],["/tags/数据结构/index.html","14cf0b8471e9a555b82126973f2a5128"],["/tags/数据结构与算法/index.html","71e82277940441b360ae8074508bffec"],["/tags/文字排版/index.html","5655f84349ac41467413ed76f4b50d8d"],["/tags/文明VI/index.html","1ca1c82df067f14707e8b412b740aa86"],["/tags/无彩限的怪灵世界/index.html","bcae858410f8ec8934edc8681e21b212"],["/tags/时间刺客/index.html","0fc5924110e14f500465becb92d83246"],["/tags/有生之年/index.html","accfad99a1d1869deb22b65a884b5dd3"],["/tags/李商隐/index.html","e3fca41be6e45eac3b594e8832abb8f1"],["/tags/李白/index.html","44ae0cb92669c61b1558e3d3057331a7"],["/tags/李贺/index.html","3d45fd3f0ad0d3ffde9f588ed0a1f6bb"],["/tags/杜甫/index.html","d06b18eed87946d2101af5437aa144b1"],["/tags/概率论/index.html","d625e2e93671fafdc787fb541a24de2a"],["/tags/正则表达式/index.html","93e70dcede0c04f7538207c71ffd217b"],["/tags/治愈/index.html","9fd97b7c3b67f33c00dd6e0cefa68b42"],["/tags/热血/index.html","f3ebb71084284884e68c8d42f6e388bb"],["/tags/爱国/index.html","ab945d817c7612a7a1e4712674d870df"],["/tags/版本管理/index.html","e4c7c861c4c318f980ae99dbb50cbe34"],["/tags/玉子市场/index.html","54e77d439c5d6a93f33f5576be097d81"],["/tags/玉子爱情故事/index.html","021f98eafec86b8450e77d3c0f16b468"],["/tags/王维/index.html","202d127d8b60e2465a7de4337e393093"],["/tags/现实/index.html","0eed5db66330ff4334a4c52a76b7aac7"],["/tags/甘城光辉游乐园/index.html","1d8674d215d804e08bbc5150c3e7e2a2"],["/tags/白居易/index.html","3e9b274bb2995a34185c1ad2e9d4ccea"],["/tags/离散数学/index.html","4139c6486b34cf66cd5c7600b232f0f5"],["/tags/种田流/index.html","03faa59560280cd4578e93dad83d4583"],["/tags/童年/index.html","fc0bba8a62b96bc085277cbcd586e6b6"],["/tags/童话/index.html","259725db7e91729a203e2527d6654230"],["/tags/策略游戏/index.html","18634c1ce4d03a5803294d3a92d4eee2"],["/tags/紫罗兰永恒花园/index.html","a2589a76be2f041b9fc50ab03a066785"],["/tags/纯爱/index.html","f414cb8c73926ce1ec364ab80dab649a"],["/tags/线性代数/index.html","e6a499d2e615c3d5cc7b827eafdf4392"],["/tags/致郁/index.html","11318db42d46a1248e055b6a95487cad"],["/tags/苏轼/index.html","9341ae7be3ecfa971cad6f40c9d85e2e"],["/tags/计算机科学/index.html","5f90c22567a41f214dbb94e3248ae1b6"],["/tags/词中之龙/index.html","5027531d26759d7442bf5fd8b127b167"],["/tags/诗仙/index.html","f725431503f575472e173c364f26e4c5"],["/tags/诗佛/index.html","29d2af1428db273c56dcf4681048ca4b"],["/tags/诗圣/index.html","cef9f76414506c153dea088537aca259"],["/tags/诗词/index.html","811c901d4ca89fff600654c1c79eaa79"],["/tags/诗鬼/index.html","9ae29049ff855b2d8ea87bf27efd1104"],["/tags/读书/index.html","280a057e34d53645714b4d5b822161c8"],["/tags/豪放/index.html","b8a8d9fee3315eec3e5576ffb35b62c6"],["/tags/辛弃疾/index.html","c90f18999a4fb680a17d94bacb35c2c8"],["/tags/钉宫/index.html","481953b037474173b6f378e6c68b0643"],["/tags/陆游/index.html","15b8d4f2b47a4ae4e5edc2f0f1198cd3"],["/tags/零之使魔/index.html","2e2e966234c2ad8afb86a225472e022b"],["/tags/霍比特人/index.html","aa7ce1b098df5e6932d25fec38a650ae"],["/tags/飞屋环游记/index.html","c434f84e1321a41516c355efd50ce89d"],["/tags/魔戒/index.html","48aad5b5ab2c16253996c5514d175e77"],["/tags/魔法少女小圆/index.html","9b005c04a3d12720cb478c82bcba3a60"],["/tags/鲁迅/index.html","46cfe2ee2ebff63b17753ccceebec701"]];
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
