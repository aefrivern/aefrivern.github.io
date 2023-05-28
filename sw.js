/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8605b8da0a00359a6d5f88db08608804"],["/about/index.html","0d806684e63ce5282ca654e95f112a00"],["/anime/index.html","215f0cc67eb483c7af02403938624dee"],["/archives/2022/11/index.html","5d9040e018d2af51a446c511e7378380"],["/archives/2022/12/index.html","429f69ab02c8da9abd9eaba8a4c3d292"],["/archives/2022/index.html","193268122932d6e16fdba5d29538480b"],["/archives/2022/page/2/index.html","176ba3a5daf96a7b8b00ec815712f0ff"],["/archives/2023/01/index.html","83df30778f80c4104c49d4805cef5704"],["/archives/2023/02/index.html","29803c5d4b246cd3190dcc5a15589978"],["/archives/2023/03/index.html","44f65eb0f87f4852a305752a3211e363"],["/archives/2023/04/index.html","848ceda82f49727ee1f07b48b0fc747e"],["/archives/2023/04/page/2/index.html","8b880332c0ed7df0f2e52f1b51657997"],["/archives/2023/04/page/3/index.html","9750e1c8fd4cdcc2ac50132f17e165ff"],["/archives/2023/05/index.html","64edeb83c8d5df62cd4093f40c52434d"],["/archives/2023/05/page/2/index.html","1888157ce35bdb0f76c045da122d4fad"],["/archives/2023/index.html","f7da541bacf48121a8ccef1096475ac6"],["/archives/2023/page/2/index.html","810b170b655713312b9febb1831fef4d"],["/archives/2023/page/3/index.html","00c5b4d8c7c8e117a053f91deea0f083"],["/archives/2023/page/4/index.html","6e7a21e333caaef7bc92c989e3991bd4"],["/archives/2023/page/5/index.html","d5f1be60c4c178057e750e10e3e7ccaf"],["/archives/index.html","400dbf12ecb69a7c8d302a7696696103"],["/archives/page/2/index.html","bd8f74b4cfc4a855941293db2fc894cc"],["/archives/page/3/index.html","c434868974820b0252731c9eb789474e"],["/archives/page/4/index.html","81b529955493860262ca4d6e5e61f288"],["/archives/page/5/index.html","a0d8c4ebf46b49361e59a10817b52a57"],["/archives/page/6/index.html","6174b0095aebe8935cba6bb425bca368"],["/archives/page/7/index.html","54fdce11f1f32d85db014c35668f40b9"],["/categories/ACG杂谈/index.html","3d77efdfbf1f5b7a1d0e4fc4391497cf"],["/categories/ACG杂谈/page/2/index.html","8dfb310b9efc4749b199514842aa93a5"],["/categories/index.html","12e8bd19ae4c780f71594ff2e43f51a5"],["/categories/学习笔记/index.html","7f11089613601070e68405950bd9bf74"],["/categories/学习笔记/page/2/index.html","0d4bd287fadaf7289e057452c64a1dcf"],["/categories/工具/index.html","e342caf195de575f1ebf2a08ca490b08"],["/categories/游戏人生/index.html","8b916195fd2d17c8bda2ed76b0abbb96"],["/categories/读书笔记/index.html","cf837d2a75f254f827bc90e7bdf5789b"],["/categories/读书笔记/page/2/index.html","9a93b9ac5cb8b8f65289d8e297a09a4c"],["/categories/闲言碎语/index.html","61a261fd82c287fa06f115769358c4a9"],["/census/index.html","30c0058583f28c724e11326235e341be"],["/charts/index.html","7e71df3b0e70a07cc03468d4d4a4f15e"],["/comments/index.html","741df8838714f1fe9b989c0b48946463"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/index.css","bf842e7d897499cf17716fcafe1b2af9"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","4d78d802e6ed6d4eb4b018e5d4a5160f"],["/gallery/index.html","2896f86ede948a61ac20f691df8db711"],["/gallery/wallpaper/index.html","b829c63a94093933ac5299ed8690cdb6"],["/illustration/MIT 6.050J & 2.110J：信息与熵/复合电路比特.jpg","7f3b39dad7099b4a5344b0a883f437bc"],["/illustration/MIT 6.050J & 2.110J：信息与熵/源的熵.jpg","5e97d5ac9576435b2b958a0862bd444e"],["/illustration/MIT 6.050J & 2.110J：信息与熵/电路比特.jpg","aedc9d562cf39c1c4d799c698246e990"],["/illustration/MIT 6.050J & 2.110J：信息与熵/通信系统模型.jpg","2d9b043c66982f7eb2881d1a5dfebfee"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","aff003cf49904b1cceb41e0e4e14c90b"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","1e7e6c2f28fc38de2e1ba3c703365372"],["/page/2/index.html","6fb659a0eb43f5b02be5b74cc5401915"],["/page/3/index.html","f008e617e8a9f0dac42c5c8762203045"],["/page/4/index.html","4b2aff7ed26a4b502c3e9df5e000b257"],["/page/5/index.html","30d2cea1200f8b690513a90c4ce31221"],["/page/6/index.html","d31277a0e34fa9b50f04213ecb928f5a"],["/posts/1c5a0321.html","005726b82bacd334f3bcc8e1747adb53"],["/posts/1ec7973e.html","e74c239afd9998f8997a88e618ba40a8"],["/posts/1fb82448.html","81a62b8b4b4749c74c7bb13bd564889e"],["/posts/2f34eb00.html","76194f00ea603fe21daf129035144576"],["/posts/2f57a694.html","00b2fbfaeca7037682e50fcacb92cf7e"],["/posts/374b54d5.html","3e5d194c084b025227c31047d339e7a4"],["/posts/3871b764.html","3cce6d2c84ddee866e0e56aea0e1f4bc"],["/posts/3b308caa.html","e34f073d3d23a60a15413fd10ef832f1"],["/posts/3c3cdb74.html","d90fbd8da545c447ba67f523761bc45e"],["/posts/41f65cde.html","f2499fd6c63292895979d45a61f7844f"],["/posts/4208fd6c.html","8a74a66b42e51f6237bd98b46eb1b6fb"],["/posts/4392373e.html","e8fcf4d2cabb4ba9488f895d44909654"],["/posts/440ed920.html","9e606003cd3ba1be3b4e9c458e70271e"],["/posts/4d2b51ac.html","f6ba193308cfb6f3589acf2366071443"],["/posts/503ae89.html","ce0b7b1511792ef65862680b4251033e"],["/posts/535fd087.html","2c4ea529f279ecdcfb327214f53d9ade"],["/posts/5923cba3.html","41b48fb36a5f74f14f5932d50dd3d1b2"],["/posts/5f2caa2c.html","d2f1a3406d888319b2081b67c962589d"],["/posts/616be7b6.html","995c0f71246a4a4a0e521fbf5406615c"],["/posts/62a1ec0c.html","bf2efe3c64c713bcd14d427142e431ba"],["/posts/69fb361e.html","966bf716bb157a975708dc30a53cd36a"],["/posts/70685119.html","8ccfd9284ff4bacb1c7e5ba4394ba961"],["/posts/743db4aa.html","834644ee0ebd1871bbc10eccf12ca00b"],["/posts/7b67faab.html","b1a7188937f32ac96e31fd8d07eba263"],["/posts/7b76be01.html","69e962771ab653af5407e580a20be19e"],["/posts/7bff939e.html","adf55f5cf637b02de6d22e078bea4374"],["/posts/7cc4ca07.html","28d35777d5cd894263031042aaba2199"],["/posts/7d257210.html","a560951d0b8d56763edcb814f7bdf448"],["/posts/7ea0cbe4.html","0eb9e86b73fce9cd11050b8d108133ca"],["/posts/7f382da2.html","c767a3b92861613b4f1e5a045bbb5c76"],["/posts/8207aa48.html","0e6bb959dd3799299db96e787e56a295"],["/posts/84cae757.html","30a0fbf0290b75e93e01ddee47031539"],["/posts/88200036.html","d6bb7fff4709250ac4cd8b36dc6e2fdf"],["/posts/922fb64d.html","52fadde7fe7ee90e00cd4d557673eac0"],["/posts/98332b29.html","e2ee4970101e6ef0e3fc4765c1c5d0d6"],["/posts/9a1a736f.html","ac616e7e4fbdf7b05f695c1bc676a613"],["/posts/9addd0bb.html","00f8e694c53a1dbd7af2991da30e0a39"],["/posts/9b44950b.html","1a8421ec4f3bc885d8173fd8462bcbd4"],["/posts/9ca149ab.html","b69dc6d963ad08ff0542536d100e0867"],["/posts/9e4446bf.html","7b0558fd97a18b61e876cc040a2ecda5"],["/posts/a13c1dba.html","f5b0a044ecaeaab1ca302740a4c833a4"],["/posts/a1f2a4d4.html","be391bdaf9b687dc30d997f42362da5d"],["/posts/a5f300de.html","7d798ac3df8d3ced83f09ba43da880b8"],["/posts/a9f63847.html","6f5811b11f4ef3d28364f518ce08308c"],["/posts/ad31055e.html","d90799309946e2a5fab9cec076301879"],["/posts/adcd6e20.html","ef944a27a1f36c20183edbfaffe72a28"],["/posts/b2feeab7.html","76b6e2354d25c5d39ae87006a3bcc847"],["/posts/b7525d11.html","4f56ae9d78cc3df890bfbb49774a067d"],["/posts/cc86a40d.html","745b2dcb2318f1ba053856af8e598605"],["/posts/d36531a7.html","4d98f1e5b35b35e67918c1e356babbc5"],["/posts/d7fdf01f.html","21a2c235e1c913771b60cdb9375c6b35"],["/posts/dcdf88c8.html","dfd83864356104ff3c2b42cf27d638d7"],["/posts/dd378ae0.html","1c4cf2d31ab6268897e91d2332aa721a"],["/posts/e15be301.html","8f14748e1d99f8fee7702d30440a47fe"],["/posts/e2e4b4ce.html","e3cc7c41ab9f1e6c0c0ff9f647bf258b"],["/posts/e35ef5bd.html","4f73de34408f86927ccfe8e3d5a5f764"],["/posts/e5cd9bbd.html","09bfad0c7ecf7653777fe7e89cedf27b"],["/posts/e7a99a5e.html","ee32737cf6d9d0f780514df429e0cf78"],["/posts/ed52e6a0.html","765389666aca3eb433f56529a990be2a"],["/posts/ee0ac59a.html","c73399bc81ccb2c45b32bf498a98d69b"],["/posts/f09c1ee5.html","4cc0e7fdb5159f4af3f162143042e6dd"],["/posts/f4af26a9.html","0f7ba76bbb7d375555fc178ee38ce46b"],["/posts/fa3cd62d.html","daade9025e55ea03c9efbc2737403c0a"],["/posts/ffdfd6d4.html","24057249a4bfbb7c97875ddaea80579a"],["/private/index.html","c4ecadbac99d7530673170ed1c53250d"],["/random/index.html","0c29354151740a2d70a344b744cbd8fb"],["/sw-register.js","c797d26fc61a29789e8cd6986e584700"],["/tags/ACG/index.html","464aebc4d19e6b81498771860d3cfe4c"],["/tags/AIR/index.html","956d4ae44b99b3efd57d6e041a49edca"],["/tags/Butterfly/index.html","0bd1f1b127f4c436bc0cac7f7ca9dcb6"],["/tags/C/index.html","5eed25eaacaf8da175858ba035c26fe6"],["/tags/Crash-Course/index.html","2e8a02ec77136042ab50d1452da02a59"],["/tags/GUI/index.html","f46f652d591a3d300b2114bd076deb0f"],["/tags/Git/index.html","6c5ae62ed1cbb9b612e39d397f62cd2d"],["/tags/HTML/index.html","63f237fbffd7528768241ab264033d23"],["/tags/Haskell/index.html","16c50e4d7309ad9b6dbc1fc565b1698e"],["/tags/Java/index.html","c147856f46983fc119bec9cbc315a765"],["/tags/LaTeX/index.html","4ce5287dd52b48565277094398e65dce"],["/tags/MIT/index.html","55fb0aaf63c7cdaebafb86c9db5f5636"],["/tags/Markdown/index.html","b845496521edd01666d3c08625770af9"],["/tags/Mermaid/index.html","d6a01388899cc19775f17abd768a468c"],["/tags/NTR/index.html","b244f7a7cabe8d07482bcc9a407e346a"],["/tags/Pixar/index.html","918914026dda1242255e61ae6932dd91"],["/tags/Princeton/index.html","ab31f78c3ea8b943ab6b6643d62d866a"],["/tags/Python/index.html","ef45147d388b6b0ed18ccded7eb1b72d"],["/tags/Qt/index.html","501df2724e915329c1ef6d60dad07285"],["/tags/Scheme/index.html","412b1fc9de3e23f50f911a31e8dc5a5a"],["/tags/Stanford/index.html","0154c0c124ba146f4494593ed068ae89"],["/tags/UC-Berkeley/index.html","7407c7ccbcd67718b4d18fd590e5d153"],["/tags/University-of-Helsinki/index.html","c03aa5cf0147028af3e9b182591c03d8"],["/tags/index.html","992adb39218d871b9578b596111bd16d"],["/tags/三国演义/index.html","0d858264ebb5aadca0fdceb1c191f740"],["/tags/丧尸/index.html","475cdc1230a78a236074c4cea9607d4b"],["/tags/京阿尼/index.html","40734d4652fc8983362a7ae1aed43d1a"],["/tags/信息论/index.html","82e14b6698a1a35033b4fe0cb0f1bcc9"],["/tags/元稹/index.html","395918c86c332ff2792b4597ca1b7dcc"],["/tags/关于我转生变成史莱姆这档事/index.html","ac12778ce49e176f01b3771b3a599776"],["/tags/函数式编程/index.html","38b930a924f998a9689e4bb048661a83"],["/tags/刺客信条/index.html","a16ab5b52bd0944cce88894a809bc80b"],["/tags/卖肉/index.html","6e1d188e737687716912dc5bcb8e5f61"],["/tags/博客/index.html","fcb08559e712118b790fedcf6caffded"],["/tags/去月球/index.html","d922f96261971e84221e6882c76abc2a"],["/tags/可汗学院/index.html","6197e9588f7f8a41361bdee98fb794ce"],["/tags/史诗/index.html","5c27236e5a885e4bca113be23e8c5a42"],["/tags/名侦探柯南/index.html","7df8a7cb2c1dc42bf1ff0d4799517210"],["/tags/后宫/index.html","d26b158079967ecd3ab09929ff416ded"],["/tags/咒术回战/index.html","41cf545f87154c7ba0be653248b51108"],["/tags/哆啦A梦/index.html","9a557e9a36322ab400426da097776fe0"],["/tags/哈利波特/index.html","ed399c1b973cd5695a434cceada14776"],["/tags/喜羊羊与灰太狼/index.html","6c5e997bd2064a6036e546cb41ea6555"],["/tags/四大名著/index.html","11dbe42d98665cbbfbb8fc2f56c4c49e"],["/tags/图表/index.html","b05c5798f0d44d46058c8db69adb30e0"],["/tags/复变函数/index.html","45dc7308e62398fe06d2b083e9be1d95"],["/tags/孔乙己/index.html","2e9bb60bfe2958fe59d5487d377e01fa"],["/tags/字符串/index.html","67d7a48fd23098bae0f892df545bf6d2"],["/tags/学园默示录/index.html","83e7156d751f0b617066ba3a8aabac08"],["/tags/异世界/index.html","c0e2cb27aa6400fe8283ffce45b80d29"],["/tags/微分方程/index.html","cd7631fcc0c5cf3a05246a3dd85907fd"],["/tags/微积分/index.html","972eb96b06eb6c0872e3509e45d59c07"],["/tags/情感/index.html","0353edc7195c3058f9b706ec7f657ae9"],["/tags/指环王/index.html","9e7fa8ab97b8312815656b69d8fbc7b8"],["/tags/搞笑/index.html","1d6aa56da3cefc46f2796721a2aa9157"],["/tags/教育/index.html","86757e4ac6010af5d5554cf5a028b3e7"],["/tags/数据结构/index.html","179ee78b4e78303f058711f60531afc3"],["/tags/数据结构与算法/index.html","91b004f493543b1114619405e4576c63"],["/tags/文字排版/index.html","79a20bc62502e4cd36af43702b53a2ea"],["/tags/文明VI/index.html","726f556ce0cc89acac84740e68d33a28"],["/tags/无彩限的怪灵世界/index.html","2b65b399468cf47288c47cdd136ec0b2"],["/tags/时间刺客/index.html","692e0ced6c8a9f1112e7dab867b00f34"],["/tags/有生之年/index.html","4b3ee072385b92eb793bb10f64737791"],["/tags/李商隐/index.html","aea1afb5449249790bf6d4c0d3d153d5"],["/tags/李白/index.html","8e2d29e34692729c88e48be29d9f110b"],["/tags/李贺/index.html","2904cb9e2a56ef134a5d508136737594"],["/tags/杜甫/index.html","3659a4c07b5082818e2e407dbf03b357"],["/tags/概率论/index.html","0e5b80edd553d3ce110bea87069c27e8"],["/tags/正则表达式/index.html","dc8af54e5caf17be5f8a9c91c6bc43d9"],["/tags/治愈/index.html","b0f41bd6a711172fc813e6bb8bc06f0f"],["/tags/热血/index.html","5469eccdf6eee346dc9f069835f364ac"],["/tags/爱国/index.html","2688aaf266c008f854320c366674ec0d"],["/tags/版本管理/index.html","1adec5892447f6e3d84c83499b0aee16"],["/tags/玉子市场/index.html","1455c3d8ba095172659ef128c4d4fb68"],["/tags/玉子爱情故事/index.html","29eb6b165158ce48760d8c5647d6f2ef"],["/tags/王维/index.html","085a2f8aef971a9864b3f4f8c3b76bec"],["/tags/现实/index.html","e26d007138f0370c0dda8f30e43c296b"],["/tags/甘城光辉游乐园/index.html","c0890495007d4dafa5292e24074c8add"],["/tags/白居易/index.html","2f9e5876fa2b2456ae525c9612f7a782"],["/tags/离散数学/index.html","9adc91bf6270f397ae36a3c198dc99dd"],["/tags/种田流/index.html","9fc8b75015a6541fa7c14bbeebd7edc6"],["/tags/童年/index.html","e37f8dc12de78edd871fc28883efd076"],["/tags/童话/index.html","8ac0c33e06c50846a2ee103114e57dba"],["/tags/策略游戏/index.html","8a8ee9068850f98e4cf456da25e3140e"],["/tags/紫罗兰永恒花园/index.html","53eaeaeeae89ad8816f650f2c0ea11a2"],["/tags/纯爱/index.html","a1a98fbf7916462077fa2c7bffaa75b5"],["/tags/线性代数/index.html","3a1b4dc17ae9dc43047b5c3aaf65d09a"],["/tags/致郁/index.html","c712f611ad2a4d16310fa86ff963515b"],["/tags/苏轼/index.html","71363713a00b79f60cf56a15009d39de"],["/tags/计算机科学/index.html","bce681ead69bfcd8d941b0b287d85216"],["/tags/词中之龙/index.html","993e23dd3ce230eb7a9861bbf77fcea1"],["/tags/诗仙/index.html","e2bb66612950ee69262eae4b6da281a0"],["/tags/诗佛/index.html","2046e07129ac36457a179be837696fcc"],["/tags/诗圣/index.html","3e040f8eda5c5aeac22fe3232f377c09"],["/tags/诗词/index.html","46f7cce121c2789c41854cd18e1c696b"],["/tags/诗鬼/index.html","c309b3624d2e255f8f9483cbacaf02f6"],["/tags/读书/index.html","26d37b238a3a8bfd114af7f73d896ed0"],["/tags/豪放/index.html","ca3aaaf5c360095bc3e9732db940cac5"],["/tags/辛弃疾/index.html","479928123ca2b84dd8445b68a2164668"],["/tags/钉宫/index.html","007a2058c0aede778fa28c43c35bb4de"],["/tags/陆游/index.html","02456b3e13db826d2100e2404c27106d"],["/tags/零之使魔/index.html","7a7f3a3f46c2bfb2656b4b14120f8aac"],["/tags/霍比特人/index.html","0353942310ef5f0f7ff71fa8ca88aae5"],["/tags/飞屋环游记/index.html","ff92388433454605aa70682c5f8e9bcf"],["/tags/魔戒/index.html","c695eede1d7066410d66ebb0ac9e8c8e"],["/tags/魔法少女小圆/index.html","3e8f122ece93ecf1e846922fc476069d"],["/tags/鲁迅/index.html","fe3dd41b06fd28a231e77e8d2db909f4"]];
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
