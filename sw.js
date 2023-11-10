/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8f725723379306b1b1da7558cbc00fa9"],["/about/index.html","089eca77cc262f9758f663f8d4b714b8"],["/anime/index.html","672955aa52a5a3c90732b01808d2ad19"],["/archives/2022/11/index.html","e9a32fdfb59acb94206cb61b9c87408f"],["/archives/2022/12/index.html","4df76a79695ed3312eeab69634c386ec"],["/archives/2022/index.html","e51ab4a0f520aced5714f27353cfa210"],["/archives/2022/page/2/index.html","8b34b23f2460a98f1b2cf3c1f9ddac64"],["/archives/2023/01/index.html","6c22e42badf17671dae043aa5ea2a351"],["/archives/2023/02/index.html","74132ab26c7e32bdc142a9fcfb6a5b41"],["/archives/2023/03/index.html","b60f78dd8a7fdf6015586ede5f912dcb"],["/archives/2023/04/index.html","35ededf48cb31131d1a7464cb80ff67a"],["/archives/2023/04/page/2/index.html","a8a895bc341c5d4ee0fa29de84c4bc89"],["/archives/2023/04/page/3/index.html","c5aa13daf46fb99af676e1045352bf33"],["/archives/2023/05/index.html","112ff4ccd6ae6a6c8b5be3f1414c987a"],["/archives/2023/05/page/2/index.html","5412a46851aefbe3fce9ddbb15347234"],["/archives/2023/06/index.html","3b2aa64887ac015490a45c628e6da284"],["/archives/2023/08/index.html","892aa311ada77d6aaa07a4053e8090a1"],["/archives/2023/09/index.html","cd27155f4d146786b18f0a7664982760"],["/archives/2023/09/page/2/index.html","24c1ee2b9a496e1fdd063c2fd6653543"],["/archives/2023/10/index.html","d5baeeb3db3183d772df83caeeb0a4c3"],["/archives/2023/11/index.html","87047e15a86b8b1a089252be65867719"],["/archives/2023/index.html","1edf3207e17bf1eba148522371bb6ae3"],["/archives/2023/page/2/index.html","6760623c548878d75b91f742c110942d"],["/archives/2023/page/3/index.html","8ee4bfa6f71e8b0e70c607e2910eff69"],["/archives/2023/page/4/index.html","3cbe86f09bd7f875ad596731bf3d1cea"],["/archives/2023/page/5/index.html","5394ad21a0df22d8dcc4500fc232c02f"],["/archives/2023/page/6/index.html","a9ea30819966121416e1d6c33222bdb7"],["/archives/2023/page/7/index.html","6d5a520f3f9a8f0855a3272a94717f5c"],["/archives/2023/page/8/index.html","387f5239fcf3049920acbb972af58e76"],["/archives/index.html","2d1431208d2bc3875768f78bb08d85b1"],["/archives/page/10/index.html","8006d7418572e2df7fc94c243bd4015c"],["/archives/page/2/index.html","decaf06b600186928ddec630b4ac7323"],["/archives/page/3/index.html","f8e0ef975f982f7243c305147d10aa7c"],["/archives/page/4/index.html","2bb58b02c2704b31bc40437ebe60d939"],["/archives/page/5/index.html","5a2a5d3c33e768d86ed401684267078b"],["/archives/page/6/index.html","f10fbd7765f68b4f8a505dcc221b10a2"],["/archives/page/7/index.html","9bfe13fc8a44a3da06a40e5f60cc645c"],["/archives/page/8/index.html","5328c618db3f4312054b6196fcbddfb8"],["/archives/page/9/index.html","9bfe984605a158bc06358cd6038b1a95"],["/categories/ACG杂谈/index.html","a2d7293afa9cf434d20a3e92fc5c1c60"],["/categories/ACG杂谈/page/2/index.html","070f97b88544fc4a05cafbcdfbef6c6c"],["/categories/ACG杂谈/page/3/index.html","06b76f52291b3d8445140234591df83f"],["/categories/index.html","188f88f0342936f0ac4a6084322570a0"],["/categories/学习笔记/index.html","9b926055bd782a80d8c8c0678311b8f2"],["/categories/学习笔记/page/2/index.html","8e25ae713111dd0f1de27f40798a3249"],["/categories/学习笔记/page/3/index.html","0be410ccad1ae872b8d4ce6708147320"],["/categories/工具/index.html","4e99cc0dddfb6b49b4cec0ecaa0fbf05"],["/categories/工具/page/2/index.html","9575f71d7562c6fe592473a7a60181db"],["/categories/游戏人生/index.html","4086662a27fe644399896677030b36c4"],["/categories/游戏人生/page/2/index.html","9b0fbefc192c1340d3e5429e93010864"],["/categories/读书笔记/index.html","bc99a2f56c0b06cf86c42d66bb7a5cd6"],["/categories/读书笔记/page/2/index.html","98933da62384bfc9090910c75cc04594"],["/categories/闲言碎语/index.html","b3a15dc1f4b69bac0390fc0dd2915ccc"],["/census/index.html","3bef61ebf3cffb780c4c2fe7ebbd01f9"],["/charts/index.html","634ae9d95d184ffc18a6317868d006e1"],["/comments/index.html","10b305b2677848d986758f9f13ee1791"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","af30ae09e0018c1938521799cd2b8423"],["/gallery/index.html","a9c99bacae507c4b44eefb45d85f6edb"],["/gallery/wallpaper/index.html","90c67efbc1ce1afcb7505a8dddcae007"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","36e5d5baa81be9e22ffe86a0a282f11b"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","13718f368a43a0ed924551e5027c60b5"],["/page/2/index.html","4d56587610bf47ad56ef5872d193f407"],["/page/3/index.html","a0ec1f779d98c6668d815214b2c3b823"],["/page/4/index.html","b6e3c5c92c91377b27c9ab9f92d555af"],["/page/5/index.html","7962435adfd43370970c071c53bd2f1a"],["/page/6/index.html","7d50dcb0b27d1982c95725c220aa2080"],["/page/7/index.html","21ea83ad802351d4b4c4bbac1d4042a3"],["/page/8/index.html","6f5da3670dfcaa02abd833fb0b2595e3"],["/posts/106331b4.html","81c16b1c6d07ba96638d4f006e755749"],["/posts/1185a02e.html","9963070441cc62aa8a8e32ec66212ded"],["/posts/12e06b11.html","fdf4f243e7b090e13219adc22fe75339"],["/posts/167c7c45.html","b3d46b3c46679dfe736c2a86746dd77d"],["/posts/1743dad6.html","304b5010b208f0f063b84579bf428daf"],["/posts/175a8e1.html","d46d309b7ca00a2a18867d8dfe4841ae"],["/posts/1be398e4.html","3067dfca468ad8a4f59c63d6640d8a5b"],["/posts/1c5a0321.html","5ec891efb3b3135e8c07b6b0ae16451e"],["/posts/1c5b1e9c.html","cdde2b617c5b17e4d33668eb42e2d9c5"],["/posts/1ec7973e.html","d54acfb408bca71bda69c3dd29d24a08"],["/posts/1fb82448.html","142079a3af111f7818866970c0165fa4"],["/posts/21f18fd2.html","a990a00c0e39fc9181c41ebe29d4a9d7"],["/posts/29c507fa.html","05d84d646bb13d9faa5cbe0415bee396"],["/posts/2f34eb00.html","d7254ffe61d1712bde5f796ef8e98cd5"],["/posts/2f57a694.html","f9ab942e72656086298dde32f2c8a70e"],["/posts/374b54d5.html","4197467014130fcd4a83b921120dae9e"],["/posts/3871b764.html","1ea68b280c704075ddf6ee8e6f028859"],["/posts/3b308caa.html","3184f28fe04cb7a440a4bc121dd57245"],["/posts/3c3cdb74.html","839a2b08489e660153a3ef9f2986940d"],["/posts/41f65cde.html","080619969da65bf05292069a8e6d2e2f"],["/posts/4208fd6c.html","0952d19893a851b3ce2267f7e022ac2c"],["/posts/4392373e.html","f49e9837bb3080815e1c93d1ef29d91a"],["/posts/440ed920.html","296f9fe7111ad6d3184f6f837468d956"],["/posts/4d2b51ac.html","e7e9bd07d8ca04178d610b4b5384372a"],["/posts/4db1a52a.html","ae14dd230d7cf7f6239209636a5d0023"],["/posts/503ae89.html","8178f0d2d251221bd51a6c8b13a82202"],["/posts/518e2799.html","e910166e4d21ac25f1a5b2d1566cd458"],["/posts/535fd087.html","22ae90d143116fc02c4ca3f3e2c20ce2"],["/posts/5923cba3.html","c6c9bc32eafd392d380e439a53517435"],["/posts/5c1bb6b8.html","8fd10370d254f7c2c319c9cfffff65d5"],["/posts/5dc45f0c.html","931c2953bfefeca1a59517407394b9c1"],["/posts/5f2caa2c.html","c4583ef72eeefa245762213f6633695d"],["/posts/616be7b6.html","f97cd86b7499b2b9e8fb8cc3b4668bf7"],["/posts/62a1ec0c.html","23a4634fd371fef484c01e5c3d52d161"],["/posts/69fb361e.html","ac6d7cc4a0758cbed751314084387006"],["/posts/6a8518ce.html","2f13a80c462102ccd15b5c93a0a6aebc"],["/posts/70685119.html","38f1118ae8bf5c4fbaaf2e92a5e01dff"],["/posts/743db4aa.html","479d1c00cc7d511181d8b0de23ac6c31"],["/posts/7b67faab.html","7d1725bcab9cbad8471b6f03fe4c3640"],["/posts/7b76be01.html","36638c5ad4d7f7b5c14eaf51c8b2e467"],["/posts/7bff939e.html","9361f2746b45e30346f09234338befce"],["/posts/7cc4ca07.html","9296979859a475cc2d33023b613ffc75"],["/posts/7d257210.html","f3e774c386a102fbaec020c2f50e1713"],["/posts/7e6a5c94.html","96cc044d76cb7508d6643402d68c6876"],["/posts/7ea0cbe4.html","5aa641d69ad10c953b471ef6b597ff65"],["/posts/7f382da2.html","1ab0902d31b5e6fbd61ec6a5120578c3"],["/posts/8207aa48.html","134aa607f72a38c4bdaeb0b71c587a47"],["/posts/836ea9bd.html","a0acb41938870c1b79d83033d1b3fe99"],["/posts/84cae757.html","8fd6c49b9f448048c3ef0ccfc01b9e11"],["/posts/88200036.html","de3fc904ec17f9c6ea6a6fe3e60169cc"],["/posts/922fb64d.html","a43ef298d5a838f5f9102141545277e8"],["/posts/98332b29.html","715fd0c288aae6f17744c6f20d3392e8"],["/posts/9a1a736f.html","aadacb59d6023b4c25a8d89f6185d8ab"],["/posts/9addd0bb.html","0d7c82547140afdaf85d8037ff2fbe71"],["/posts/9b44950b.html","b2a3522b12f4d272cc152786c079d46c"],["/posts/9ca149ab.html","320705f3eac95e6c8cc40e4f9efb4f08"],["/posts/9e4446bf.html","35dcc7507ee88684fde8aa2f512225d6"],["/posts/a0271e58.html","cbebf2aa051ca95075384a39fba914a6"],["/posts/a13c1dba.html","ef7c70c7ef0992060057ada19318f097"],["/posts/a1f2a4d4.html","fdb0486620a2c25270d04255f68f7f81"],["/posts/a5f300de.html","b1e64c0a7aab2418017e7a8e99f67090"],["/posts/a98766fe.html","151253870854593c8ec21fe92cf4f670"],["/posts/a9f63847.html","448f2bad35aa46854c0234b5d6a5544c"],["/posts/ad31055e.html","8e211398e5485f65510db2dbda7f00e1"],["/posts/adcd6e20.html","7c143f0be4ae22037d1684ad728b7cc4"],["/posts/b0fa4c58.html","1b73451dea1bd804f7eb66bdfab1a955"],["/posts/b1168675.html","88aeb3a92c2a2fedc62a44a13053bd96"],["/posts/b2feeab7.html","d2142c901a78581a3582d7fb6f50aa2b"],["/posts/b6d66f1b.html","6b284a42bf3edaa8a788af3ded7be7cb"],["/posts/b7525d11.html","8ba6c7a561bdb18b66fa38568ac1c89a"],["/posts/bb154b63.html","037d2e96c942c5309618d180edff599d"],["/posts/cc86a40d.html","5cdbfec2c7e0204c0a2a8a0cad0f6c3e"],["/posts/d36531a7.html","a83fe655855b96d229671ef15d4d787b"],["/posts/d442e51a.html","b8d0db7a26ed1cf2764b3199b544949a"],["/posts/d7fdf01f.html","773c8bc0937d3a9874f7d64112367e1c"],["/posts/d839b0e.html","931c79b4b5b754fce6a839130202c8c3"],["/posts/dcdf88c8.html","043c5e2b3d2ef69528520874cc4aaf2e"],["/posts/dd378ae0.html","d9e064f6d192c00b17bf637e4b5d21d1"],["/posts/e15be301.html","b03ee367c52a95206c28fa253274178e"],["/posts/e2e4b4ce.html","ccf2868942f6319ce9c71f34b52c4032"],["/posts/e35ef5bd.html","a833368fae923fa983ab48a970110824"],["/posts/e462ba83.html","48a1a5ccddf0379d7bf4be325916eddd"],["/posts/e53204e6.html","ef5ce774a10c70327c8644eae29fb3ac"],["/posts/e5cd9bbd.html","7f44fe273de1fb5ea425abde2c519263"],["/posts/e7a99a5e.html","fda4f752a2fcf1cd4f4fbb4fada495aa"],["/posts/e9318100.html","78bbc24dae8c0d63cc1c1acfdc28a28d"],["/posts/ed52e6a0.html","54be22f9e1018491b7c8b8f35eb56505"],["/posts/ee0ac59a.html","36cd1f402d0532ac5c0195b798a4b3a8"],["/posts/f09c1ee5.html","a1db2fc86f97173856c17732a3b1355c"],["/posts/f1252f66.html","5bff6541426f88e30e0197444aed0b1d"],["/posts/f4af26a9.html","f2ca6189140fc876c8cf3dbbb4aac241"],["/posts/fa3cd62d.html","3cc5692e9dfeb17475d6efeb3d25d934"],["/posts/fb3794ef.html","7c5e34aef72ea3e7fc6101996cdb2c01"],["/posts/ffdfd6d4.html","d3cf0f929b05d38d9998f38ab0f742f3"],["/private/index.html","63823eb834907bce82b5c8da86e410d6"],["/random/index.html","c3dcc4dcb6171502e92dc28e61bb3ea3"],["/sw-register.js","1f39130b1d2b4b8650b9e7841601a1c5"],["/tags/ACG/index.html","fce36439b8bdb1ff4500b97f9aad06b2"],["/tags/AIR/index.html","adf097453c9318cd3551631767570be6"],["/tags/AliceSoft/index.html","c3b778a0b7262a9862371e292c4216ab"],["/tags/Butterfly/index.html","7afae45d70a66740e0b0eeead11a7a53"],["/tags/C/index.html","9c14a107d471e805d0d068b10fd7edaa"],["/tags/CMU/index.html","7ddf8c58c0ae401cdf8df364ee169559"],["/tags/Crash-Course/index.html","aa863912020d96fb080bef80a960d1e7"],["/tags/ETH-Zurich/index.html","646d70dfefd13b61534ce38b1ac8c7ab"],["/tags/Eushully/index.html","a67ce441001cf780b1491907eeb04ac3"],["/tags/Everlasting-Summer/index.html","b115fd8ff19b86b723cce312afed5020"],["/tags/GDB/index.html","f787c2b3c565abcf49ec9496cd44669e"],["/tags/GRIS/index.html","58e7226b9e2c8ee3cbe83fcfc7e375ec"],["/tags/GUI/index.html","43848ec1a480af725fd77c0bce60db7e"],["/tags/Git/index.html","77b2be9965125ae8db449d015a6cd4f3"],["/tags/HTML/index.html","7ec0f41bfb00acfcb577498b44b16e5e"],["/tags/Haskell/index.html","071df1a19364fb023cdd9624315d0bbf"],["/tags/Java/index.html","07827b431eec97d8b67f4bf3a010afbe"],["/tags/LaTeX/index.html","134078e8c7641d3ac0e01818cf527676"],["/tags/MIT/index.html","c382d549b1857eeffe049841d9bae3d1"],["/tags/Markdown/index.html","7fa96b7d7234e3dd790139df9f1e3467"],["/tags/Mermaid/index.html","1af58f9ecd18b52a954ce8b3d17fa189"],["/tags/NTR/index.html","a7cd79ec1976a2af302eb98231b918ec"],["/tags/Pixar/index.html","a912f81ea56bfe739e708fd3aecd4928"],["/tags/Princeton/index.html","3fbf0d18013219e94d39dddc9a9c1aca"],["/tags/Python/index.html","c15e8f5ba3e26c6468aa928aad164e6a"],["/tags/Qt/index.html","02a7c7bb8ef0fd63f30496ac17281672"],["/tags/R18/index.html","7063ba2918acd6e5f677aad8123de9ec"],["/tags/RISC-V/index.html","df5e8fa58a3d3d4d2635b2592e8b1d60"],["/tags/Scheme/index.html","e56a3d1f93b64d83842d3a4f0f197721"],["/tags/Stanford/index.html","9d454a5a5d5146c53074c56e701e8877"],["/tags/UC-Berkeley/index.html","f8a513816b35c57e73727cca06cd7eff"],["/tags/University-of-Helsinki/index.html","59542612eb4dbfd37c51eac6f39b08f9"],["/tags/debug/index.html","e60564982dab7c706f543b366e74f60c"],["/tags/index.html","36ac25acadb2b9c35adfb8d3d1efa371"],["/tags/key/index.html","5a29a9eeb843c666fb33429f254ed477"],["/tags/web/index.html","c8782d1e60680ed87f975f92f1fa061c"],["/tags/三国演义/index.html","f6c5e65ab2e549cc69e14e22eaccc572"],["/tags/丧尸/index.html","920386b1d16a994d4e1bdbb87731edc1"],["/tags/京都动画/index.html","d5f0f7efe972ed61ae1f09034a547fff"],["/tags/京阿尼/index.html","123a12cc97c14e9bbd4d4828411a66d6"],["/tags/体系结构/index.html","7b69af533e0948a369a524f2d7c0c2f8"],["/tags/信息论/index.html","4ce1930b8928383175aeb7c5e54629f0"],["/tags/傲慢与偏见/index.html","7034de6cc9697b4ab10e30a392691493"],["/tags/元稹/index.html","23c9fca636625d6c4d23ff76d61f2030"],["/tags/公路片/index.html","4008b7161783d59d20ae509624ff3a65"],["/tags/兰斯/index.html","54b9d09174633c01bda5dda56d29f622"],["/tags/关于我转生变成史莱姆这档事/index.html","405073ebdc3de47a773e1a314cb3726d"],["/tags/冒险/index.html","63e7173944e9c6920dfda92bd6438793"],["/tags/函数式编程/index.html","81b3b0df0e4988f6910c5c787a73ae1d"],["/tags/刺客信条/index.html","9caa7e21f86e0b61afa260c24cbb98fd"],["/tags/卖肉/index.html","165a0e5ddf79429b5ea1ff08c93681dc"],["/tags/博客/index.html","8a65d3cea2c4842e7e6d45d9d2041af0"],["/tags/去月球/index.html","12543de619cb0bea2b5c92e472fb02c9"],["/tags/可汗学院/index.html","75fc1d1a4efdc1237445388726f46506"],["/tags/史诗/index.html","3c9a1386f253eefc7d170f41e3d6c0e3"],["/tags/吉卜力工作室/index.html","0ad7905100c33fa36f822cc12c19f65e"],["/tags/名侦探柯南/index.html","73b333525bf56a5272a93be065d08f03"],["/tags/后宫/index.html","3330f1ebc39fe1239f468fd81fb7ec99"],["/tags/咒术回战/index.html","67b5a8b90ef976848733acf567439419"],["/tags/哆啦A梦/index.html","d9ca9c0b4d948e12ec262ee39be33646"],["/tags/哈利波特/index.html","9381ab636d5ac637aa9a6eeff44a2721"],["/tags/喜剧/index.html","e1ceb0c43d7066a41145d949418d7f9a"],["/tags/喜羊羊与灰太狼/index.html","5e37a0e487d089925041cb484788c9fd"],["/tags/四大名著/index.html","54c2502b00c84c01929414e6f7b9b21d"],["/tags/图表/index.html","c95e4dbb6cb2ca20dd1781819ef3c494"],["/tags/复变函数/index.html","db21cc062f4e856df6545c956ae80a1c"],["/tags/孔乙己/index.html","b94564e23eff4dd318407e6b7af334a5"],["/tags/字符串/index.html","a771d3247571e75ef0197979ae55669c"],["/tags/学园默示录/index.html","bc4e157647a87e4eb810ebe012e38c0e"],["/tags/寻找天堂/index.html","7fb3e1a9074fed96a554c237718cbc06"],["/tags/希伯来大学/index.html","abdf164ff20a7478b0bf2a986a99c81e"],["/tags/异世界/index.html","c6409f090979311d376ef64d61a4c74f"],["/tags/微分方程/index.html","8d9a6b4c0b59959eeacf8103aa4241ce"],["/tags/微积分/index.html","005f60a11ad9416a4e5e508e00b02710"],["/tags/恋爱/index.html","4aa31c55f361813821aff97b9982dc27"],["/tags/情感/index.html","8bf9d985eb26b9225fec881d17874b0c"],["/tags/成为简奥斯汀/index.html","615cee159c12dc9921c06bca4291ce76"],["/tags/指环王/index.html","eab3ccc45bb0cb2ef520578954c41293"],["/tags/搞笑/index.html","0699a6a8f691e4ec243d895e77e0ddcb"],["/tags/教育/index.html","ec4cbdd87702163ed6d4e408b573946f"],["/tags/数据科学/index.html","4544d6ca194b03f2b7b7d55197a73d07"],["/tags/数据结构/index.html","653d351b7258835ea199a9e84fa395e7"],["/tags/数据结构与算法/index.html","674b21e3711ef0868bef9ddd89d5f82b"],["/tags/文字排版/index.html","99f4ed6259e45be00362a421e997a4ba"],["/tags/文明VI/index.html","c1af20621f597f86a85bdef6a2e127f5"],["/tags/旅行/index.html","1853a14d428c8f8eec96cd9f54a2eaa7"],["/tags/无彩限的怪灵世界/index.html","943c1ae14a5b7362100d6e7f682f60d5"],["/tags/时间刺客/index.html","166af7ec0ad3f4c6445baf4932f1cf19"],["/tags/有生之年/index.html","91697db8a2b9b0622bf7dcd531e6ac22"],["/tags/李商隐/index.html","e8e4845c69ee34c83e71f20343984819"],["/tags/李白/index.html","d893a167a388da6ea1f1cb869f237044"],["/tags/李贺/index.html","2da3865c3fd887791008d210ab2333a4"],["/tags/杜甫/index.html","723eeeec2f79fd03adad3993aabcda35"],["/tags/校园/index.html","1cf4463dd9935c2eaa4ecf95eb703935"],["/tags/概率论/index.html","06d60fd11f2731752319c817d0fa7a1b"],["/tags/正则表达式/index.html","ee62f18158ae3a8180295e0f1ab04c9a"],["/tags/死亡/index.html","a2221d6580a1a91628f31a9b10603632"],["/tags/水仙/index.html","da690cb08e3a63a5fe0f0104b6c0d8b4"],["/tags/治愈/index.html","b07812665dc6200c97e20664df96b654"],["/tags/烂尾/index.html","0e2399b9aa97d4fdbfbac60844d6afe8"],["/tags/热血/index.html","ecc9e4e77d6933ab46b4fa65603f4389"],["/tags/爱国/index.html","c6adf4003f049120ffc545f68a14d593"],["/tags/版本管理/index.html","4e693af38737138371b9508c81416c1b"],["/tags/玉子市场/index.html","3d285ccf45982fce244d85d07ee82330"],["/tags/玉子爱情故事/index.html","e15650f1728bcd67eaa979efdd967950"],["/tags/王维/index.html","05173ccbc9da88695691744cbdb48a1c"],["/tags/现实/index.html","75d86f0e5ea9523d80b673be194b0a3d"],["/tags/甘城光辉游乐园/index.html","3806ebe328802dfaf752b933543b11a2"],["/tags/白居易/index.html","eae10b018b75c0bdaa84ab7968a904ed"],["/tags/白毛/index.html","9e9034f0280fbc0d96402b557487675c"],["/tags/短篇小说/index.html","5ee1cbf64bcf03973b90c4567fe386e8"],["/tags/神话/index.html","1d140074ad19751a11661192cdcca59e"],["/tags/离散数学/index.html","f8639fc63df9009d459fefd788dbf4d8"],["/tags/种田流/index.html","4a584f178709b38775d76e3b706b8d04"],["/tags/空洞骑士/index.html","be1d7d8eb282fd1a1301b5c9cbd9ed0a"],["/tags/童年/index.html","a1e2edc07c8ef7f664fe9c36d9178b7f"],["/tags/童话/index.html","4a82efe2af2312f1c76b1bc2071ff06a"],["/tags/第九艺术/index.html","1e4316029458502fa33aa12d7f9af427"],["/tags/策略游戏/index.html","83bea21507cde276b09c11ea9ef22c16"],["/tags/简奥斯汀/index.html","b03fde56d5a7bf04ab2e3aa354dd1ec0"],["/tags/紫罗兰永恒花园/index.html","67de571e1d298bd8049d7bd31d305890"],["/tags/纯爱/index.html","df7a8a9c87e7e848715c27772e27be32"],["/tags/纵使手残仍大爱/index.html","9843ff60bf47f253ca9cf50e31365b0c"],["/tags/线性代数/index.html","56784c9133219eb8f137bdf1db932cf4"],["/tags/编码/index.html","a69d68e09e58fa955f582a987146b095"],["/tags/致郁/index.html","a74835d901ab0b10b54124698504b709"],["/tags/苏联/index.html","105b2489b7437fd18ecb85c6bf9b2451"],["/tags/苏轼/index.html","e5d1ee5d15c96d5742f7693c585f0c56"],["/tags/英雄/index.html","07071e7205ea847052c57b0505d5ffe7"],["/tags/计算机科学/index.html","06202b120fda864e17d7943a5fd8c7e6"],["/tags/计算机系统/index.html","19dc75c547c7d86a70497d331e307ffa"],["/tags/词中之龙/index.html","ba6745b19f053faea104bc791cbf63f1"],["/tags/诗仙/index.html","beed297320e9c28f8f49b1da84348f35"],["/tags/诗佛/index.html","847fcf5299ec433e5d576df39cf8dbc5"],["/tags/诗圣/index.html","6e4b13ed1d296f509f9008a21a476c23"],["/tags/诗词/index.html","e02b51fb004df9ae7161e10b276734d6"],["/tags/诗鬼/index.html","55fe63d3dfee468c2425d7054995c8f7"],["/tags/读书/index.html","e453eea04a5a791ed5e87acbafd11f8c"],["/tags/豪放/index.html","b91044c142eacc1da0e9196181e44668"],["/tags/跳跃/index.html","4592723e05310cdd6cba23675d9af307"],["/tags/辛弃疾/index.html","ffae111704f0f585b93946df08fad9b7"],["/tags/运动/index.html","c205dfcb4a853b6ee6c0f68d35ae663e"],["/tags/钉宫/index.html","a2a341213c86614f30fce5f6e0fe9c95"],["/tags/银河战士恶魔城/index.html","42996dd628b7c88c33def629967a5490"],["/tags/陆游/index.html","6619ac2714f2840d9f4064cf08b76d6c"],["/tags/零之使魔/index.html","e7eee1d25d50221c043009390f3402c3"],["/tags/霍比特人/index.html","b218c3439e80e157e17d0ab8cae0ecef"],["/tags/飞屋环游记/index.html","0c207f64c5c34eff8ff2e05644f897a9"],["/tags/魔戒/index.html","2c6b45ba69432e135f26276032dfcee6"],["/tags/魔法少女小圆/index.html","db9d601f206197899f7e04b5b83e0a66"],["/tags/鲁迅/index.html","222920d476640ced37a409362b2ee52f"]];
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
