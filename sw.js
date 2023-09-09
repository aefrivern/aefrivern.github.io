/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5fbe7986899185564ab910eb72a571ed"],["/about/index.html","887ed3ddf06e070bd7f94067c4503b6a"],["/anime/index.html","37c56439b3c7012ce70a37db8798721b"],["/archives/2022/11/index.html","c122c6a8fab4ea3fb7cd5ee40a25b117"],["/archives/2022/12/index.html","0d4f3c3324e2563be7a1b079c54abfc3"],["/archives/2022/index.html","e212ffb7a21e799e78235f9cdd3bf480"],["/archives/2022/page/2/index.html","6cc7efbd4f748891c0bb84f67f4ab528"],["/archives/2023/01/index.html","ce1e520278879150b3dbbaf4dd210bf5"],["/archives/2023/02/index.html","f2e06ec28af4c28c3d241b7fd4b7db90"],["/archives/2023/03/index.html","776e1660bf325b3bd07a611b7ba7db2a"],["/archives/2023/04/index.html","1c50320823dda5b8606868819d76c92c"],["/archives/2023/04/page/2/index.html","640f99f2721f35d604a0736cf79cecc0"],["/archives/2023/04/page/3/index.html","2696ceab7dfefbb64790de9c5ff2ad39"],["/archives/2023/05/index.html","8265104b7758c7ba02ff65ac4cc23889"],["/archives/2023/05/page/2/index.html","a77b9b4f0b5287044aced1dd668a4279"],["/archives/2023/06/index.html","3c9620a69a2650dbe434f66ddb0ff19c"],["/archives/2023/08/index.html","137c5b42b97e8676b866fd762d7be34b"],["/archives/2023/09/index.html","8d542b5d1ca7c1777e9dabe5b7c974fe"],["/archives/2023/index.html","d30c7e344f22c8781352f3e1e962659f"],["/archives/2023/page/2/index.html","07d9683ae4ccaa9f186b239e71e42eac"],["/archives/2023/page/3/index.html","4d3d1f712d25c42e17340277bb023318"],["/archives/2023/page/4/index.html","99ac035c2df8d8e6e452312924d7e165"],["/archives/2023/page/5/index.html","ff2a9e57c40cf0c21ee93e6b2f0072ec"],["/archives/2023/page/6/index.html","0c2fadce855be1b4fbf22d6399ca2d0c"],["/archives/2023/page/7/index.html","707c255c8a8909824b5750595e51e453"],["/archives/index.html","6165c6ce0757925ae664774e08807c86"],["/archives/page/2/index.html","ee07f0d3c79997b6063280af7c0ab320"],["/archives/page/3/index.html","2579b8b982149ed19ef3e093c545c528"],["/archives/page/4/index.html","97772d88c36063e5bc229109605849c1"],["/archives/page/5/index.html","f440aef915e65ed389a8f0a37bdb3f06"],["/archives/page/6/index.html","adc3375246b11f9b081d36d1f25d8be8"],["/archives/page/7/index.html","d0e1fa4f7345b12d0867a049133f7bd6"],["/archives/page/8/index.html","bc40d16b2dfaff23baada78723048db6"],["/categories/ACG杂谈/index.html","abdb1e033520cbc0b47541928ed4869a"],["/categories/ACG杂谈/page/2/index.html","591291ad600832b99d24df95c3b866f7"],["/categories/index.html","bab4026853803cc27f95549b193bea65"],["/categories/学习笔记/index.html","9c73988f48b84b12696e03230101a555"],["/categories/学习笔记/page/2/index.html","6bf58e229842c90fe7eb38a959eaf892"],["/categories/学习笔记/page/3/index.html","32475f89740f8b890f6dcdef4a4ca3bc"],["/categories/工具/index.html","3c1640fcefd2c2c210c383dadc027768"],["/categories/工具/page/2/index.html","afa6e16d0af9657b98be6bd49c4172cd"],["/categories/游戏人生/index.html","65deffc7647ded5043344641629813ed"],["/categories/读书笔记/index.html","705050ffa78dadd4e086794bdcf1c54d"],["/categories/读书笔记/page/2/index.html","a2c5410f432cb9a509fbce716c16fec4"],["/categories/闲言碎语/index.html","dff7a75a099412a2f14529c6f180fac6"],["/census/index.html","c796fbd2db45efd5447c6d017bf8f325"],["/charts/index.html","b11142501a592dcbe2e29b265dfe9d01"],["/comments/index.html","59a6eaac2bb1d1a728ffbc3b8e1f92fd"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","df32c553b4a2582457e253195fae407a"],["/gallery/index.html","d2ced7dd754163fcaf16128339514f1a"],["/gallery/wallpaper/index.html","a2026ebba5d692666a99c4b0285d99cc"],["/illustration/CMU CS15-213：计算机系统导论/C语言编译流程.png","35601f8e4cf5c44789e217ecb9821dd8"],["/illustration/CMU CS15-213：计算机系统导论/union.png","790077e7ce5e561eefc81772be8d200e"],["/illustration/CMU CS15-213：计算机系统导论/内存布局.png","7b378d787023782c2202de91582f9e92"],["/illustration/CMU CS15-213：计算机系统导论/动态范围.png","cd33b70b1a34f328fefa102096b074b9"],["/illustration/CMU CS15-213：计算机系统导论/数据对齐1.png","f935e5f2eb497050627be64e14476a3e"],["/illustration/CMU CS15-213：计算机系统导论/数据对齐2.png","a7a1eb20c351e949c3d49c71196d8991"],["/illustration/CMU CS15-213：计算机系统导论/数轴上的浮点.png","25db3a67b77fc2b146382dc2a9f5e7cb"],["/illustration/CMU CS15-213：计算机系统导论/无符号和有符号的转换.png","c5b3472443c29514caa53f0e845c0a33"],["/illustration/CMU CS15-213：计算机系统导论/有符号整数加法.png","1fbc42e3384d9f1a058433fb83935110"],["/illustration/CMU CS15-213：计算机系统导论/栈.png","7546e5bc62c3f46e11fb429463ea97c9"],["/illustration/CMU CS15-213：计算机系统导论/浮点.png","3472e94845fd21b4517a4c44a5171eb3"],["/illustration/CMU CS15-213：计算机系统导论/浮点数在数轴上1.png","aca1bcf0e41f572f1a7a689c91b21e84"],["/illustration/CMU CS15-213：计算机系统导论/浮点数在数轴上2.png","76b1239b27ba3b8b57f51f23d17d7ccd"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","60ce55b03b74a2d0ff1bcd4b142939ab"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","647dd9d70afffbcfc98a57c807720588"],["/page/2/index.html","f5993ab02f1801e98f1ad404f6d091c3"],["/page/3/index.html","fafe53ef3229f79f30c8737072bbdb3e"],["/page/4/index.html","6f7d2c44abc3e570e76d9ca5e66051e2"],["/page/5/index.html","5676686723d99d0822f2c5822770bfe8"],["/page/6/index.html","f7afbd15f1d7515279eceac21b6a209a"],["/page/7/index.html","4bc3b862be62eb7a879817e15bdaa6c1"],["/posts/1185a02e.html","5f65402b147b93636d1df53cea078553"],["/posts/1743dad6.html","a18e01dc300ec340cb3cea789cca7a7e"],["/posts/1be398e4.html","55c45013926ff0d307b225966325c06c"],["/posts/1c5a0321.html","943f09a8fd4c8a87e2bc81e83f6f210a"],["/posts/1ec7973e.html","8197c75adba59ffecfdff9514d1dac86"],["/posts/1fb82448.html","81bec8be4a54f1f888836844fb06a863"],["/posts/29c507fa.html","724456e47160c80c2afc611d227e02a9"],["/posts/2f34eb00.html","d02638ad305627e795c34b8db16efe6d"],["/posts/2f57a694.html","6b602e89d1d68873dc5abff599392632"],["/posts/374b54d5.html","2ac02b8d32b3e5e82152b74f0d7e9ccc"],["/posts/3871b764.html","606463ceb246e23a54dbe3d0b4236375"],["/posts/3b308caa.html","3bcc72fbc4606c6a1924a50095a8f5f6"],["/posts/3c3cdb74.html","fb106ede1321a4b1ca274ee88ba59e6f"],["/posts/41f65cde.html","4d3e5e6df2b1ca1f8e4f143cf328abcc"],["/posts/4208fd6c.html","b8353c8b4c5c2c9436f49db2b110f1e6"],["/posts/4392373e.html","96b225f1d27374aec9c0ad707f82d462"],["/posts/440ed920.html","671b6dcce589296975e09d3322afaf73"],["/posts/4d2b51ac.html","3371f69bbccff52db9d17ea6771ea456"],["/posts/503ae89.html","6713a9eecbd5a66572bd24b5c28903a7"],["/posts/535fd087.html","2a67e696aa45b6ee03f9e4b56df291f7"],["/posts/5923cba3.html","946e999ce58c8f30b02234b5b94e1574"],["/posts/5c1bb6b8.html","68f4f05d12ca5db5367e89ae6dcdd9f1"],["/posts/5f2caa2c.html","311956b03663e11452565186fddea2d5"],["/posts/616be7b6.html","3f08ac7e5bbc42c1c069157b4a803ab5"],["/posts/62a1ec0c.html","8b080eaa4447ef37744ece4bd79ed010"],["/posts/69fb361e.html","050c81a5be1587043d8136ba8c40f085"],["/posts/70685119.html","4f571a846c30b9f6c4f188c9398f99ef"],["/posts/743db4aa.html","d076646129eb31633b53263b4a194bfa"],["/posts/7b67faab.html","8e8beb816bc8a365be5023666d5b77cd"],["/posts/7b76be01.html","61049fcaf9f08baa088d00f0681fdee2"],["/posts/7bff939e.html","763f9a608047483afe4f1a99d795252b"],["/posts/7cc4ca07.html","0ab98e293fec06005762da8b5e0e6664"],["/posts/7d257210.html","558673a076d9091e1001b5f33228380c"],["/posts/7ea0cbe4.html","0138e2968537650bd1b1b6ccdd5606d2"],["/posts/7f382da2.html","99b398ceaf765e1e62fb7aa83ec3e204"],["/posts/8207aa48.html","8d468de16a9b6138c6380ea8614d9adb"],["/posts/836ea9bd.html","c062caf3a4e4bd1b0107ee1e701728ab"],["/posts/84cae757.html","1e795f183ee53dada2b47c893d8cbc4f"],["/posts/88200036.html","341d55d819c094a968ce2b5b9071640a"],["/posts/922fb64d.html","01a1c1b21a1639c642f2328b29e8c9f5"],["/posts/98332b29.html","bc2f410538fcca238bfd0dc019dc920a"],["/posts/9a1a736f.html","ac04724931d63a36d3877ca6b645c153"],["/posts/9addd0bb.html","2cae6ed997c038124c65342a25a8d9e4"],["/posts/9b44950b.html","8aa93d434e07c77fa515ef0dd9aa2dc8"],["/posts/9ca149ab.html","bdbce53ed39120136095adf110408946"],["/posts/9e4446bf.html","a089ad3b9813720e421c6d79afb800a1"],["/posts/a0271e58.html","3d1b80c5227e5981ae149dbbad3b68b6"],["/posts/a13c1dba.html","4620824dcabba18146233ed64df2d3fd"],["/posts/a1f2a4d4.html","5a549bda4135957c54d85a851f9f390a"],["/posts/a5f300de.html","6e8577ed0eea764692b5394aa9edf357"],["/posts/a98766fe.html","4bde3d533f7cf876b3b8180444e88968"],["/posts/a9f63847.html","0cb8d22669cca1bc4ef8730356c812f9"],["/posts/ad31055e.html","52df99079962308944da177231583c70"],["/posts/adcd6e20.html","880a987f4ce6e7a1b7ed6435536dad3b"],["/posts/b0fa4c58.html","b9f02d762c73a16590b3084162fcfbfe"],["/posts/b2feeab7.html","209cf4d6056e24ae14eca28cae50ad5f"],["/posts/b7525d11.html","2dd0c9a30d0c37f4cdf64cb6121498dd"],["/posts/bb154b63.html","7bbf4f90d29fcd42dbe09c13f8ff78fd"],["/posts/cc86a40d.html","bb8d87b8a73461e6885e591f3cd080ee"],["/posts/d36531a7.html","fad9bd38529c36ef1423e8a9b497147d"],["/posts/d442e51a.html","bbdf20cb215983104168fbdb7d042c60"],["/posts/d7fdf01f.html","fb6c546612fa0f5f509065c3d20b3626"],["/posts/dcdf88c8.html","697a2b2c3fe0713163e1d51d6617ef4a"],["/posts/dd378ae0.html","bdd7709bef689b2db186a70c8dfb942a"],["/posts/e15be301.html","5ab995023047ffc2571e8e651792cda7"],["/posts/e2e4b4ce.html","1f7425c75c79a1f1f2d6612ef2f5cf65"],["/posts/e35ef5bd.html","e436901fdc4e8ee283543046d800eb04"],["/posts/e53204e6.html","9c5c715b55dbd3257e2c46cd5c6fa317"],["/posts/e5cd9bbd.html","3cc3b255d39a211f6d0aa7a79e744f07"],["/posts/e7a99a5e.html","8ffde76886746baae24e82630f7729c1"],["/posts/e9318100.html","517bb16be9f4782a13ce0637851fe095"],["/posts/ed52e6a0.html","440d5e4a4eaccdad782bfee884d5f66e"],["/posts/ee0ac59a.html","7c3f2c65b0c435b0ef0aff9cd14078b5"],["/posts/f09c1ee5.html","71f063e9566131de81302c19156e35e6"],["/posts/f4af26a9.html","e4ff6f2d4b9b3fdc52107c59658eba35"],["/posts/fa3cd62d.html","b0e57b4f5baee0e5ef5829e3d66e3e0c"],["/posts/fb3794ef.html","c98e0b2844b12e70cdb5f9da03f6afa1"],["/posts/ffdfd6d4.html","5b6e3cb0f7401cb3193a1fdf0241a389"],["/private/index.html","1ee7442df2a93041f9e468d2c66b6c00"],["/random/index.html","50992b470ae16fca8cbaf21864e8b904"],["/sw-register.js","d71ae0a5d5340b22c792c7c18f313c50"],["/tags/ACG/index.html","ea44b665a7c988488e88f25603e87d5c"],["/tags/AIR/index.html","a66d5046562c68452ea136990af174a7"],["/tags/Butterfly/index.html","c4f881f56761a00f97d7327a6d77bf48"],["/tags/C/index.html","8c9015587018da828ed88934dd927f4c"],["/tags/CMU/index.html","32d21b55bf95cb548e73ff7fbe89a649"],["/tags/Crash-Course/index.html","d9ae2c80e71674e59e59fe3bdf7da9d4"],["/tags/GDB/index.html","7719358ae363395932aee61bebfe9162"],["/tags/GUI/index.html","ba7e42713ee11b3aa2edd68f23e429be"],["/tags/Git/index.html","8bb199a892df3d70b13b32f415a23458"],["/tags/HTML/index.html","49276549e8280db81c5c304329b2ed27"],["/tags/Haskell/index.html","bc46bc1c05f3ef0733c8ccd6a5c3f32a"],["/tags/Java/index.html","b1108dae6810f9e30511ab2a42b51886"],["/tags/LaTeX/index.html","d47824a8ce61bfd34285633097a64e20"],["/tags/MIT/index.html","5aec1774de02c84a313ab58fbbca97d2"],["/tags/Markdown/index.html","3b711a1a6cfc004ab2a3e119edeed44c"],["/tags/Mermaid/index.html","5e1eeb9389697797fa8dd90997f7ec11"],["/tags/NTR/index.html","6d214f7b7cd5d5f716d62ad7b198db48"],["/tags/Pixar/index.html","f45b778bad64461ec7bde69baeb030e0"],["/tags/Princeton/index.html","d504b62ca15e14de66fa46a769b2b5e3"],["/tags/Python/index.html","ed864ad062b290499c6e2561f43cc5bf"],["/tags/Qt/index.html","b00109387da920e845e8436389010874"],["/tags/Scheme/index.html","575a2a0963c390fccc741c6a1e650447"],["/tags/Stanford/index.html","8de0a2a7eca734bc927a5cb1cf6c2bef"],["/tags/UC-Berkeley/index.html","d0cbb5cf8d95888ba3cb0c647106b2ac"],["/tags/University-of-Helsinki/index.html","644cb2a357dab5ef818bdf6338f05eeb"],["/tags/debug/index.html","2bd5e9c433125df45d2f83654e062f13"],["/tags/index.html","51b8ccf4e2f508f1313f86667aba650b"],["/tags/三国演义/index.html","d5319f65b8bb7403eb06c2bd7fe0ce0c"],["/tags/丧尸/index.html","227ab7f866b925160609ef7ac7e4bf24"],["/tags/京阿尼/index.html","366dbdcc26fa670067cdd640fa736683"],["/tags/体系结构/index.html","96fab77412809fd32825a4f4e58f398e"],["/tags/信息论/index.html","676776fa0961ba5d32b7056d19bd841b"],["/tags/元稹/index.html","a777411efa627d037a0ccf62add38f3d"],["/tags/公路片/index.html","034c35692524683c37a561ac1b3e55cf"],["/tags/关于我转生变成史莱姆这档事/index.html","409a05f973d294f05a376728ea4baeb0"],["/tags/函数式编程/index.html","815904d292027323c704b4d318130172"],["/tags/刺客信条/index.html","f1c0cd03a68ebb28fdd3b25772378faa"],["/tags/卖肉/index.html","82de128bc9a992a5334ddf8766b5e9f0"],["/tags/博客/index.html","a5e5c8b96cc36e07daa575901e351adc"],["/tags/去月球/index.html","b59c1fc5585111b52b42296ac7cbc197"],["/tags/可汗学院/index.html","1c3b6e621b596be223c56f447701e564"],["/tags/史诗/index.html","2c9d20eba350ba30e2f455d6c5ec32b2"],["/tags/吉卜力工作室/index.html","cc1d2b489529b8b8461d824c9ddd6f16"],["/tags/名侦探柯南/index.html","38c169ad18212eefe0ae3d4f89751125"],["/tags/后宫/index.html","451d2265eef275254483184e435a9b01"],["/tags/咒术回战/index.html","0cb3627d53264771b3ef64e890e0d2e1"],["/tags/哆啦A梦/index.html","f0dd0b0a856e5633ae77a96e4eed9020"],["/tags/哈利波特/index.html","78dec887b52222189dd1eff47e17297a"],["/tags/喜羊羊与灰太狼/index.html","f33c49f9464ac7a2f013f158d7dcfcdb"],["/tags/四大名著/index.html","824d83f25a0987690c3d3f59c53781e4"],["/tags/图表/index.html","d5ba8653c908c70ee0f68849d50eb876"],["/tags/复变函数/index.html","ca31a0efcfcb4e1ed09ccc3a0b98863e"],["/tags/孔乙己/index.html","a4a79124219464defe6b5370a2afec19"],["/tags/字符串/index.html","06a8fc342d8a2592c14430290fa5eea1"],["/tags/学园默示录/index.html","4864e969c85a0b3c9c4c087f8e8ede6e"],["/tags/希伯来大学/index.html","5d1802c0fbfc30404654a7c1437bc204"],["/tags/异世界/index.html","cc381caef4b60a57f2fb7f5cc37d1128"],["/tags/微分方程/index.html","925943dff7b3383d601f4f6dfbc359aa"],["/tags/微积分/index.html","bc0ba65edbb6eae5c31304d98697b1a9"],["/tags/情感/index.html","58aeb1b0c005384f44c3b366392f4e27"],["/tags/指环王/index.html","0faa561ee3f7305d7f7d0f1c51b9f605"],["/tags/搞笑/index.html","db6de87607f783d5f89f0dff25d8ed32"],["/tags/教育/index.html","2bbb8fff32edab16e09baca7c995cc7f"],["/tags/数据结构/index.html","a266badf81c747a56d0cc843c097ab1e"],["/tags/数据结构与算法/index.html","8443a3f0792669fe2e0e5925c31852a2"],["/tags/文字排版/index.html","ea05334ec847223eee4a5fa8514e4e98"],["/tags/文明VI/index.html","fb5ee4ae28ef7a0f694725c37be7eff9"],["/tags/无彩限的怪灵世界/index.html","93ff5d533964bfd2b401c91fdb2f43f8"],["/tags/时间刺客/index.html","d22acb633fed97f1853cd5608dc618e0"],["/tags/有生之年/index.html","168fd7c1bbd36217c50a63d80ab98094"],["/tags/李商隐/index.html","fc5cd97708cc3d1ec986cc0e599117f7"],["/tags/李白/index.html","9594f2ed54f941089858a9a2674b68ef"],["/tags/李贺/index.html","0bd56bf5f34a8ef327f2baa949914254"],["/tags/杜甫/index.html","ab88cb12cecc5b9f38943181733f1565"],["/tags/概率论/index.html","0fa8650f1ad25a757f2e683ae586a302"],["/tags/正则表达式/index.html","e0af4459fbde6cccb5662c7586fdbd0c"],["/tags/治愈/index.html","c13bfaed97dcbbc4a3cc642c26a7917e"],["/tags/热血/index.html","9c4a796f79a88bef3d539f98b4586dcc"],["/tags/爱国/index.html","699f7f0b007a34a952588fccf6cf8738"],["/tags/版本管理/index.html","bccf34c1da9c93ed1aae92f4f05c894c"],["/tags/玉子市场/index.html","5fc31075ad82eb93b55707e13b40007a"],["/tags/玉子爱情故事/index.html","9aeb816d2e5c9b56a8467f9f734386bb"],["/tags/王维/index.html","c241a4bf92c5a07f7466a5d7423ffb0f"],["/tags/现实/index.html","a18bc5bf401d3a1d1e39fb176bdfaa72"],["/tags/甘城光辉游乐园/index.html","2e7234d955c8cd2fb22f44ae53e1bdf2"],["/tags/白居易/index.html","ee70543fef499ae2d62e21046053a08c"],["/tags/白毛/index.html","3e09d0f0a9d4191dcc496a47371bd447"],["/tags/短篇小说/index.html","72fff365e95bef4a74c460af40d3b96f"],["/tags/离散数学/index.html","6e0b102c8768a7bae962b8f965caee7f"],["/tags/种田流/index.html","58f86eecbc2b61f28787e1da15cd5c69"],["/tags/空洞骑士/index.html","cb87f792874532ad16157aafa7a4ca2a"],["/tags/童年/index.html","ba43a89a36e102882464a3b5edabeefc"],["/tags/童话/index.html","76a3dd6472ec1a994714085908474a26"],["/tags/策略游戏/index.html","86f0d890674495a84428435a01e45acd"],["/tags/紫罗兰永恒花园/index.html","336383282fc77b07c552c867557ac8c4"],["/tags/纯爱/index.html","a7b668e024a80880523bca48e1077adc"],["/tags/纵使手残仍大爱/index.html","8b566ccddf5822d695012b1c0a830c61"],["/tags/线性代数/index.html","77c201e413cd0199b41fcac057542d95"],["/tags/致郁/index.html","61a557621e2cd505c8164e4f41bbeed4"],["/tags/苏轼/index.html","22d39c18395fb9b86c5d884c58734f62"],["/tags/英雄/index.html","799869cb92684ceec6f874c1d7e7d149"],["/tags/计算机科学/index.html","08e958bf0e338ad2eaab34222420ebc9"],["/tags/计算机系统/index.html","4b28034b1318250c217c7240af14cdde"],["/tags/词中之龙/index.html","acb73ee5f991223b1e569ceabe1ba370"],["/tags/诗仙/index.html","58ba452ce753de751d5a3ea9ee78d206"],["/tags/诗佛/index.html","88f3987ac207e245f7a3c4b6b1e7111d"],["/tags/诗圣/index.html","0d5355043a334472e42a10afb9844a0d"],["/tags/诗词/index.html","0c23e502b2cdf11e74cb3896b6becb87"],["/tags/诗鬼/index.html","1143cfe0f13a63c8bb759f7e56156e0c"],["/tags/读书/index.html","86f8864ab23a99942156e763defccff2"],["/tags/豪放/index.html","4c4f444e57f6a53126351913ccca44be"],["/tags/跳跃/index.html","1d009b0b173bd3234186591d1aa5ea0b"],["/tags/辛弃疾/index.html","0b6e661ed4b10d67a92c5e15d8a99daa"],["/tags/运动/index.html","a8a993395186e2c4d497520af6cb5810"],["/tags/钉宫/index.html","178ecd17c3b980dea7f19393161ca64f"],["/tags/银河战士恶魔城/index.html","75ce3ccddd40967a5c405c95d6c5c0c8"],["/tags/陆游/index.html","adcc9990a90dc80961f532830a81f878"],["/tags/零之使魔/index.html","a0815a0f58d6fc59d7961111d98b7bac"],["/tags/霍比特人/index.html","7ef97f9943ffcf3b5b46e4506b3eb3cb"],["/tags/飞屋环游记/index.html","2ebdbc8870ac14d73e6d5137f202d04c"],["/tags/魔戒/index.html","4f1f422ec60066424ca9cf14791b699a"],["/tags/魔法少女小圆/index.html","3ef75a8b0dbe843fc90273fd76d34211"],["/tags/鲁迅/index.html","d1978186e7cb5a1aa8c60010b73e14a6"]];
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
