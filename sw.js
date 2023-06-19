/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d291e1f92e52ffa8d95f717ea50dae66"],["/about/index.html","867ebda5b69dc29867cc6de257a092e8"],["/anime/index.html","8c4bb38042d5d61bcc65172fb7572c21"],["/archives/2022/11/index.html","72de7faa11fb6a07f754dbf30c4d1316"],["/archives/2022/12/index.html","364d97f8a405acba2114ab636cb64215"],["/archives/2022/index.html","8bff3f0c4d3a37e1708e911b84ab75eb"],["/archives/2022/page/2/index.html","3571b6731efb4bab1a5dc4028404241f"],["/archives/2023/01/index.html","3e70cbb15160de760f76da6a14d5c9e1"],["/archives/2023/02/index.html","638c9d529068717b5ba3b04a8f7a9c76"],["/archives/2023/03/index.html","18cde2d2d82c372ce7aab95b7a1602fe"],["/archives/2023/04/index.html","e9576d953791d8cd84b97155ee80a306"],["/archives/2023/04/page/2/index.html","72810aaae55f56a1f281c3b821bf5334"],["/archives/2023/04/page/3/index.html","3846b06c80b1aed0a8b0249c3854a9a6"],["/archives/2023/05/index.html","83ae92b4402f362abdb668fc736110fd"],["/archives/2023/05/page/2/index.html","d111bd4ccd34b6b642d469e869b9d1ac"],["/archives/2023/06/index.html","eb4c733be6b541971f22e974cc40de1c"],["/archives/2023/index.html","181ea53f7f7326a00461ce50ae670484"],["/archives/2023/page/2/index.html","c313f91562991ad02dbcf34db4e7c8f3"],["/archives/2023/page/3/index.html","87e30e49fe18f7b29303c44c590d45c7"],["/archives/2023/page/4/index.html","6223dbcffd086bdef3ce91db19cfd667"],["/archives/2023/page/5/index.html","bea1f7e37472b9290e18010f41d1cacf"],["/archives/2023/page/6/index.html","e72248b97a3d41a34ea3f94efa662a37"],["/archives/index.html","8bae0272793ab1e725d662d50abbf484"],["/archives/page/2/index.html","5e26b720ac263e1d6db63fef9bbb2e4d"],["/archives/page/3/index.html","daacce9a001c5d55bba9cce712d41f6e"],["/archives/page/4/index.html","7a2af4c3bfa3ed247a0db76a4cf3cd33"],["/archives/page/5/index.html","fd902901d16420a3955d4989a514fe8d"],["/archives/page/6/index.html","0292e5fc8f0c15f616cbade0c0874a9f"],["/archives/page/7/index.html","6c17f705e1c8c26b74adce15a1aa57a2"],["/categories/ACG杂谈/index.html","ccc1a930cef132b508590c1f58530a2f"],["/categories/ACG杂谈/page/2/index.html","8dafa71cf1c2b5c2d8b90debb80c9fb5"],["/categories/index.html","f32f9d4b68258a2ea658c0750901748f"],["/categories/学习笔记/index.html","53a829d3e1514226bb243422a61daace"],["/categories/学习笔记/page/2/index.html","a4b0b773d9ee14aa16dc022cbd1eb311"],["/categories/工具/index.html","6daddebdf5ea49694caefd2fc07f3799"],["/categories/游戏人生/index.html","48ca317b05c1cbf8815477418ad08d73"],["/categories/读书笔记/index.html","a04ef7284444b3835f4f20c4fb381310"],["/categories/读书笔记/page/2/index.html","cf66ba4a853b758d515666996ecbd3f6"],["/categories/闲言碎语/index.html","fa583e2e9a6c15855af8c94140f59c29"],["/census/index.html","6a6bfb10070c1f2248263d8eb3d7a457"],["/charts/index.html","67e2008bd3b4f3c085e3307adb3070e6"],["/comments/index.html","cdb11b1b66252dadd7f3bf5cd145db46"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/index.css","bf842e7d897499cf17716fcafe1b2af9"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","3d12248cc0d4ea3d3b0e85304b6b9dfd"],["/gallery/index.html","5e66632d0e9905cdd35d525dea829aaf"],["/gallery/wallpaper/index.html","e3137325db2bf2c91f2f4805f80ee61a"],["/illustration/MIT 6.050J & 2.110J：信息与熵/复合电路比特.jpg","7f3b39dad7099b4a5344b0a883f437bc"],["/illustration/MIT 6.050J & 2.110J：信息与熵/源的熵.jpg","5e97d5ac9576435b2b958a0862bd444e"],["/illustration/MIT 6.050J & 2.110J：信息与熵/电路比特.jpg","aedc9d562cf39c1c4d799c698246e990"],["/illustration/MIT 6.050J & 2.110J：信息与熵/通信系统模型.jpg","2d9b043c66982f7eb2881d1a5dfebfee"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4ae723c08c60a9aeea106d6745024f7b"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","a740d62e69583c64f92fd672ad648fc4"],["/page/2/index.html","5b04036145375ac15a283cf4dc1ced5e"],["/page/3/index.html","fb338a406409390aa5ea0b329abb62db"],["/page/4/index.html","5889ec2f2ff3f2ef5166478a7f9ce94e"],["/page/5/index.html","38842a23d9791be7d9ad65b0f1ad8896"],["/page/6/index.html","49add7868c3df93a436327ec8c04c8cc"],["/posts/1c5a0321.html","12551c5f0a2269fe6e366596a4148014"],["/posts/1ec7973e.html","9bcb9bbbde0a47aa47149c054c490563"],["/posts/1fb82448.html","fe66b48155b1338bf75443ebe35f6381"],["/posts/29c507fa.html","8824a4f2864bb686a254eb3e71916122"],["/posts/2f34eb00.html","c2690ec21fdf8a986c6058cc583d38a6"],["/posts/2f57a694.html","643999facef8d8074961b1bd96315a07"],["/posts/374b54d5.html","7fe5b20c4f33291ada4a5148f5650139"],["/posts/3871b764.html","e91b2fbad94ef99c19c3a5b2fd312ebc"],["/posts/3b308caa.html","994e98c121cb36a2e0c6d611d048cafb"],["/posts/3c3cdb74.html","c9537572d963b34dc6a86e01525904c6"],["/posts/41f65cde.html","b12a6a4cd2201960ef4ee845aaf129f4"],["/posts/4208fd6c.html","3d7adeb0f908fadfb8d1d176b2fc20c1"],["/posts/4392373e.html","7845c02cde2fe5930863cb494e9c2b87"],["/posts/440ed920.html","45b386e26a16a3958f8c44be07af406d"],["/posts/4d2b51ac.html","e3860e7338e0e56751660b85bb7f090d"],["/posts/503ae89.html","edb0d8c5915fe437b1623bab2865628c"],["/posts/535fd087.html","04342488df37b043cb510b181a33eb22"],["/posts/5923cba3.html","b1f708c576900ee77403fc5f5e229a26"],["/posts/5f2caa2c.html","7a2c40f7de76c6e5951caea69afbfd30"],["/posts/616be7b6.html","9d099568ae74ac1c82e6e18d28840f58"],["/posts/62a1ec0c.html","42f37e15d30c3a4622a7ed580bff1cb6"],["/posts/69fb361e.html","d6f20fed7315b7f766a095657762c738"],["/posts/70685119.html","cd48668a8a51925d8fddbb48942c57f6"],["/posts/743db4aa.html","448ad81789981102ead0930e81345e71"],["/posts/7b67faab.html","4e0b3d2e8a8a0f751b619b266bdd05a7"],["/posts/7b76be01.html","f0d822cf54b8317711bbba6d6b55476f"],["/posts/7bff939e.html","48793b0e6bf9da7f4bda499361efb822"],["/posts/7cc4ca07.html","e5d97c3e8ba9b18bfaafd1bdc37a081f"],["/posts/7d257210.html","8db9297cac4b1b82b4e79ab3aaa70602"],["/posts/7ea0cbe4.html","ea8e276bffe664cbfda73347e0a7025c"],["/posts/7f382da2.html","ecaaa741cf256f0bdf923670f7e84ed9"],["/posts/8207aa48.html","92b38662ed1c6855b08ea51477ce66b0"],["/posts/84cae757.html","af64dd07c08d10134efe427b74b76354"],["/posts/88200036.html","3acbd6ea562ef83c8f3f6d6dfcba0248"],["/posts/922fb64d.html","1294dabcc5f1b9ef3ebad7c63061e6f4"],["/posts/98332b29.html","e596a4dddf382e1cb93584f40eb7c5b1"],["/posts/9a1a736f.html","116e426a8ca070c92f91920ba86bb00b"],["/posts/9addd0bb.html","189fe594fa7d1dff041d577df4dad375"],["/posts/9b44950b.html","e65462b8f2800c7a6f68f42d69aa3756"],["/posts/9ca149ab.html","9aace2c79a8e56f95411d56d3a4123b6"],["/posts/9e4446bf.html","523a9b1b92a05f56eb2eef8d32c5e6ad"],["/posts/a13c1dba.html","b697db41a4292cf466e421c4aafac401"],["/posts/a1f2a4d4.html","44cafed366074c8d2c228f1ab80b3c22"],["/posts/a5f300de.html","3b41fb3b0d552810f9850fdf91d4e064"],["/posts/a9f63847.html","80afa93f59ea279ef55e3295f701b88e"],["/posts/ad31055e.html","925e3b7e103129e16ada50c1315f3688"],["/posts/adcd6e20.html","c2adf136db781d1de46d8e4f9fe1c13c"],["/posts/b2feeab7.html","3624ee4704aeb533af51f271d84dbac5"],["/posts/b7525d11.html","136f01c41fa65a23927cbd3711244e81"],["/posts/bb154b63.html","95696873b74ca2c2353a45f63621bcae"],["/posts/cc86a40d.html","631a90ad351192a3caad969446e81cde"],["/posts/d36531a7.html","04e7c1a9ad186566d8e7e5084b1f2876"],["/posts/d442e51a.html","ef139786622cf78ae1cc5e51885e960f"],["/posts/d7fdf01f.html","73837cd5eba847230fd38644738fc075"],["/posts/dcdf88c8.html","1c1f414526adece6dcf5daa2f746652e"],["/posts/dd378ae0.html","a65156a600956af3ea9dd2423f4bb12f"],["/posts/e15be301.html","7389f29d0a885f7b0f1d5025c1f1e9ec"],["/posts/e2e4b4ce.html","4e221d2e82cf4ea9eb36f7beac885722"],["/posts/e35ef5bd.html","4d32bf4df789fbb4b878d55cd9b14d9f"],["/posts/e5cd9bbd.html","1eef98603fa79bdb32fd0771ad8c5284"],["/posts/e7a99a5e.html","582040b900b2752462219a31965fb47f"],["/posts/ed52e6a0.html","d70472e0ff4c8ee6a8218af69e572870"],["/posts/ee0ac59a.html","9f3e5775f5b30712abdc2212b532cf73"],["/posts/f09c1ee5.html","22f24137edd97a24f4cb72831ddc94c2"],["/posts/f4af26a9.html","10e14523d2e53ea3e9ea9c90f116c836"],["/posts/fa3cd62d.html","f3afdf506b9a45bec7badfcadeacdf7d"],["/posts/ffdfd6d4.html","27b58a921bddddfd5e2300e9cad76593"],["/private/index.html","c099b02f6068e484134e8d60891ad802"],["/random/index.html","5dbd1dab8bef321d79a00fe2f9cb0699"],["/sw-register.js","8fc2e681b42d801a6b7e726bf1d3a7d5"],["/tags/ACG/index.html","2b7767134a704d11dc4bb7b7fc6b13ba"],["/tags/AIR/index.html","80e2b81fe3f2826850ca6ef8bb594489"],["/tags/Butterfly/index.html","1625969b8af3f589aa5ffa330925dbb2"],["/tags/C/index.html","f8392c925b4201f1bfd8682b83e8c619"],["/tags/Crash-Course/index.html","8a7b8f2a3a81c54be3aef2fc04ee00c4"],["/tags/GUI/index.html","66213940a0408368d3d6cc67cf5c57b0"],["/tags/Git/index.html","13c7896e91490c737ce16d7fb5c4e0da"],["/tags/HTML/index.html","da31857494feeee81961e73fbb4b887e"],["/tags/Haskell/index.html","4d60ca9c13e4e5633e84b11eace70a72"],["/tags/Java/index.html","b4969c024f288dbcd014dbb8b115004b"],["/tags/LaTeX/index.html","b1a2ef3e82694f32a131a06b4eead812"],["/tags/MIT/index.html","51330cfa5f3452fca91c7f5d775225bc"],["/tags/Markdown/index.html","e4d4ab7c03e731af866038d17f5d885e"],["/tags/Mermaid/index.html","471bc8d9af8f7f6c0294e1cf6e87a1ea"],["/tags/NTR/index.html","55799dd8ad56387821fb120f47560f7f"],["/tags/Pixar/index.html","867d7aa5318fb83f795907e9e54bf97d"],["/tags/Princeton/index.html","4ef4a7268a01aa4aa5a91567117e6578"],["/tags/Python/index.html","bdbccc4771c05ffadc7ba7293607f689"],["/tags/Qt/index.html","ec4b066e5bfc8565c9074f3c34bc6058"],["/tags/Scheme/index.html","df70b1c4cea9706d4dfe791d07b50324"],["/tags/Stanford/index.html","b5bc3dfff7fbcbecdc0addcf4e7a42a9"],["/tags/UC-Berkeley/index.html","63ab168eb12160135ad7e85f1093dbf2"],["/tags/University-of-Helsinki/index.html","9e97c2acd231afa8a17fa659a7665fd1"],["/tags/index.html","31b79ef0c514ae13649925f92353d7a1"],["/tags/三国演义/index.html","c9df42536f01e32de3d240cadb8c612f"],["/tags/丧尸/index.html","62584dae178a6092ec04edaf7bf46d99"],["/tags/京阿尼/index.html","241857b4019c4222411074e4acdbc3a5"],["/tags/信息论/index.html","f10158448ff531870b13b6d77882450d"],["/tags/元稹/index.html","11ba06c6d0131fbbb1730593a0f53969"],["/tags/关于我转生变成史莱姆这档事/index.html","2e2f0101f5f561d1a3254bebf80ae952"],["/tags/函数式编程/index.html","af3eedaeb11d375463147d44b22b1ea6"],["/tags/刺客信条/index.html","78b89a37238539c3d90b5603fbba5d8c"],["/tags/卖肉/index.html","97de853f68f4d3946258213030f87635"],["/tags/博客/index.html","bed4b96d6bb05abd081dfad32ff300b3"],["/tags/去月球/index.html","c12129a0ad41a79fa70332ae7cb6f541"],["/tags/可汗学院/index.html","8d9acd8b5c93fe1f42daee57e2061a6e"],["/tags/史诗/index.html","5534cdf8c4f053808f86269149ad4d59"],["/tags/吉卜力工作室/index.html","12b61531d9fade3bf91cfde7f57bc2cc"],["/tags/名侦探柯南/index.html","95dc9b76f5aff814481c4a60d709b05d"],["/tags/后宫/index.html","828a67a0d2ab9f84588b7a44a897ca07"],["/tags/咒术回战/index.html","d139f1247a3e1331211f73fda6f2d22e"],["/tags/哆啦A梦/index.html","23b275de8c2a349bfdda5715f8b5af01"],["/tags/哈利波特/index.html","f18932704d147dc9f2a00ef9fc74aae3"],["/tags/喜羊羊与灰太狼/index.html","ad098418009f426f9bd21a123c924081"],["/tags/四大名著/index.html","93c55584462156c26142b7bebc220e37"],["/tags/图表/index.html","4de542247af79bebd070882380218281"],["/tags/复变函数/index.html","7deb821690744e67ca6fbe05e588ae02"],["/tags/孔乙己/index.html","4d2ce27f264fbc88256bd97b1942df96"],["/tags/字符串/index.html","f279c13367a14b17e43248863da3dc5b"],["/tags/学园默示录/index.html","239b8b00afd0c4ed682c3d4b3eb9fac8"],["/tags/异世界/index.html","6a125a1496701cff1b8866ae22d4688d"],["/tags/微分方程/index.html","c5d6424bce26f617c63b0e83cde1df74"],["/tags/微积分/index.html","43880ff593afc8c554a08d09b6e2a599"],["/tags/情感/index.html","a880a7220c77dbb33304c89cc0e401fa"],["/tags/指环王/index.html","01537dba6bf5cef1a33ee5b035392200"],["/tags/搞笑/index.html","99ee43e7e9c61c0ce60ed8ef1e008745"],["/tags/教育/index.html","76da64c099c5b7b50f4fee0713a7dc4c"],["/tags/数据结构/index.html","3d4c8092d6d4f78f721b377529efafb5"],["/tags/数据结构与算法/index.html","5ad07a08012a4dcff49efec54ed12851"],["/tags/文字排版/index.html","70d1c346dc0b8c8c72852237c8325eb1"],["/tags/文明VI/index.html","615a4fa8504e807cfb25903e183faf71"],["/tags/无彩限的怪灵世界/index.html","444935583cfba9a4960e078f063b34af"],["/tags/时间刺客/index.html","3913465a8a4b2350232dd0c1f3ab8efa"],["/tags/有生之年/index.html","29d43b4f2365ae5298c0fc51d76607e4"],["/tags/李商隐/index.html","3f4cb83f24529cc4c06dd914216364de"],["/tags/李白/index.html","635a20214ab77cc405e47aae8bcfd870"],["/tags/李贺/index.html","f7689cbcef63a499ae81a9a5f433f25c"],["/tags/杜甫/index.html","ec0ebf212749a2e648402d36c728e776"],["/tags/概率论/index.html","81f039205175abd3726840341d6589ee"],["/tags/正则表达式/index.html","3379cd60b7087536d7f3855d324fc98e"],["/tags/治愈/index.html","31bd9816c609f41008d92e39fc8f1183"],["/tags/热血/index.html","d154c4c03d45fed82d8cc31bd6eb7894"],["/tags/爱国/index.html","794fa63741f950171b9b082fe07f5608"],["/tags/版本管理/index.html","1f3971bba859adeabe82d5d1b2e77b7a"],["/tags/玉子市场/index.html","fefbf4184240f26fbd773b632f1a16e4"],["/tags/玉子爱情故事/index.html","d8bce5a30fc8aa29ca5217d027b3323b"],["/tags/王维/index.html","04e2a75ade6218203be81654441f624f"],["/tags/现实/index.html","eb2b89e8f4024763e74feea40e9e72c8"],["/tags/甘城光辉游乐园/index.html","54853f0a21b97935a51b66b1632b7762"],["/tags/白居易/index.html","361d200be3330b784d188b73821eb8ab"],["/tags/离散数学/index.html","f82e4e8ee50ef8e1dd81d05050dc865a"],["/tags/种田流/index.html","70d45b252ff6661bc21d13d6af06c57c"],["/tags/童年/index.html","4a9309b27d47159657a2880c8920626e"],["/tags/童话/index.html","1284e8ef12b3832346ce9063a44c3816"],["/tags/策略游戏/index.html","6aef3ca567c736681ad428e1a3fe6e0e"],["/tags/紫罗兰永恒花园/index.html","fefa1dd1ebccf235f4bb22523537f54c"],["/tags/纯爱/index.html","d9b51c03d358f805dfe48c580a40b384"],["/tags/线性代数/index.html","b30cbd747d54b0c973d722abf4f4bd5c"],["/tags/致郁/index.html","87794c03f3040ed46226369d627ead7a"],["/tags/苏轼/index.html","c3bba693f1515cad356e5eb1bdea8205"],["/tags/计算机科学/index.html","744658ad01d22df2abf094da85459b15"],["/tags/词中之龙/index.html","7d136a13f9e6eaa6632d9c2e0602f961"],["/tags/诗仙/index.html","b035284c618d4d3d49ff59c255a9621f"],["/tags/诗佛/index.html","67873a2adbbe049c34442aed25e9bf44"],["/tags/诗圣/index.html","0d20dc257256788fe7fe536182a9f4a7"],["/tags/诗词/index.html","d8c47d31e310b30f70e631555c39adfc"],["/tags/诗鬼/index.html","7e6a2024c67f5dfd6e9708c4b11cbe0c"],["/tags/读书/index.html","8518259f3839bb6f5e17024a354ce4ae"],["/tags/豪放/index.html","1162ed2510b5663e4a8b539414fc81e6"],["/tags/跳跃/index.html","cdfc117094ee2ff43a958e260ecf7d52"],["/tags/辛弃疾/index.html","5edd637b304d8ab1ec07e5104d954c6c"],["/tags/钉宫/index.html","bca789887c171e75535f7a982feb1fa5"],["/tags/银河战士恶魔城/index.html","ab06c20fc121b79ed434c30cdaf2597e"],["/tags/陆游/index.html","1f382df00bb1435dd861070702893e88"],["/tags/零之使魔/index.html","01f38e705de1bd7c4928d59118c5862c"],["/tags/霍比特人/index.html","437f4c6c51d76d1fed900cbfad237ab5"],["/tags/飞屋环游记/index.html","b668df81810753b89b0439957d047d79"],["/tags/魔戒/index.html","19d653ec0c9e0a4712ba8bd66853d630"],["/tags/魔法少女小圆/index.html","fef48e177634a301b2ba1f6c577f9bb1"],["/tags/鲁迅/index.html","f219dd6b39efb3f1bac9944851410bc2"]];
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
