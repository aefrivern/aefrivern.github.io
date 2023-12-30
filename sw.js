/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ce5265c41f797d5fad6843326bf3d7c2"],["/about/index.html","0238181ea59515fd6ce1818e074c2046"],["/anime/index.html","0fe6439e7adc92b12771c8b5de2db05f"],["/archives/2022/11/index.html","297a1e1def2cc732a1afb6d5d9131fd7"],["/archives/2022/12/index.html","67564e77f57216027815256016184d3c"],["/archives/2022/index.html","481b2328c97b4cf145ab376c58184309"],["/archives/2022/page/2/index.html","c2261ef003fe918a78c1a1aeab5ca74b"],["/archives/2023/01/index.html","84a8453b9a01f6ca60083812b2677237"],["/archives/2023/02/index.html","f6cf9334fbadbd4d529bf1ac716a24d3"],["/archives/2023/03/index.html","bef0f8756d385dba53231e8289f644bd"],["/archives/2023/04/index.html","57a98af8c9513609da852200e4b21c64"],["/archives/2023/04/page/2/index.html","5ec67bc6c71353fd4c2fdddacf273e2e"],["/archives/2023/04/page/3/index.html","4bc30ab3b6e2b0b1e610532f79ad1352"],["/archives/2023/05/index.html","2e06ddd9b19a9bdbce3c709aa88225b9"],["/archives/2023/05/page/2/index.html","5d5a818e2a8a92242392b1f7a4b2eea4"],["/archives/2023/06/index.html","2fb5aa97c6a7a4f366b31375f7ee205b"],["/archives/2023/08/index.html","dbc0d1de494d11907243d5619eeb706a"],["/archives/2023/09/index.html","36910fc1c756b541b50495d9a84bf126"],["/archives/2023/09/page/2/index.html","b7a88bf8204ab1f4f10ad3132eeefa18"],["/archives/2023/10/index.html","5fdda25be31387e82d83743d5ab2bced"],["/archives/2023/11/index.html","a27bb172c374b0af491d4b1aa7cde318"],["/archives/2023/12/index.html","44f3f042b3247b42cc642d909ae069f1"],["/archives/2023/index.html","c3cf22a53ef8f9e28df8fd9527560883"],["/archives/2023/page/2/index.html","4eb5cc62fda3dc1557f3bec77d1f7500"],["/archives/2023/page/3/index.html","192acfde02ee2fb9624a2693a571fac4"],["/archives/2023/page/4/index.html","3af4d8e4c435c830ec1ab3d86cde41a2"],["/archives/2023/page/5/index.html","afc667ba64a905fe1e323a771e2b2a64"],["/archives/2023/page/6/index.html","8b0f501ae5d18283c0ab760e6cd178fc"],["/archives/2023/page/7/index.html","7470f99a8be6ebfb0927e490a37c12b9"],["/archives/2023/page/8/index.html","53ab84230ee6e0f4bd06d2b75ac77387"],["/archives/2023/page/9/index.html","481a0904bfae643280353eb1a5e4749b"],["/archives/index.html","a09aeeda8d54e55229e2b688f951375c"],["/archives/page/10/index.html","842a856b5ecca6f8591612b6b2d6eef8"],["/archives/page/2/index.html","d7214be2e7cd3386963fd8ed0e90145a"],["/archives/page/3/index.html","bf5163cdb24aa613420de09fe5fbdba6"],["/archives/page/4/index.html","206903bc424024c44ddd1631fb5199e7"],["/archives/page/5/index.html","22071eb0c28d658625be1279572261e2"],["/archives/page/6/index.html","e765ce642c73064f95b0ca499b13d857"],["/archives/page/7/index.html","3c9dce4307babff271220e20ca51d572"],["/archives/page/8/index.html","30b10f90b654277bef0c2fa2edb47d81"],["/archives/page/9/index.html","76b6c0f4853e8c1cfdd94355c02784de"],["/categories/ACG杂谈/index.html","df6883a80b89655313d99c4b4d5691bc"],["/categories/ACG杂谈/page/2/index.html","95cb7b813ee4487ff0062d8221e8834f"],["/categories/ACG杂谈/page/3/index.html","b05ef2d2a36ac0f14480093d8d4b3464"],["/categories/index.html","915c6aac9a8c2d4fc43e6a56631d9e63"],["/categories/学习笔记/index.html","446ee438e2072c11e1657ace1a93dff8"],["/categories/学习笔记/page/2/index.html","6a4375d58af6393677b6eb31d5ff9653"],["/categories/学习笔记/page/3/index.html","8b15d3c19323c67626b85cf0c9100e5a"],["/categories/工具/index.html","148ceab192a5751cf91a9265747b0068"],["/categories/工具/page/2/index.html","da26d0d30192f78f3c64d6ccd5c8cc4a"],["/categories/游戏人生/index.html","d7e05e2c89946221b873c9ae7285e280"],["/categories/游戏人生/page/2/index.html","95eeeb4f120134a8c85d39f5180caf45"],["/categories/读书笔记/index.html","2bfbe5f3aadad7bf84318c6452731890"],["/categories/读书笔记/page/2/index.html","5214c99bfe4191b22ca6f1e49e69a76d"],["/categories/闲言碎语/index.html","454180a7345964325cdf843806496107"],["/census/index.html","402c65597e257e4741fce0c7b0d40d18"],["/charts/index.html","1bd87c3234a299b9fae532b7d0ac3a13"],["/comments/index.html","ee2eb9c1d97124cd9c67334a86de5d7b"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","bc748b0a4687d85e3127887faa5977e7"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","848ce001ef15c6c2f206a811d8f3cc60"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","27111e68143e7f4617eff2ffbd31aeaa"],["/css/one graph flow.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","4da4e0ad01b868b46e4b1e7e9cf8f1fc"],["/gallery/index.html","b53538750da4cd5cee3a83a0d2bab7f9"],["/gallery/wallpaper/index.html","a7332890f6bc3f835da8cac7425abddf"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","ccdafd317570787002c58595fdfba8c8"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","77974a9f06f29b344bf839222b8a3768"],["/page/2/index.html","a7eba986bd7993d07036d90ee219835a"],["/page/3/index.html","907638465e91ac509c65a5132eeb1b48"],["/page/4/index.html","6cbfa8979f61711accf3641dddbb3f95"],["/page/5/index.html","e6721c485a6902e21b10f35ec657db7c"],["/page/6/index.html","97070b6e62dd8e11e008436edd8e2fd3"],["/page/7/index.html","acff98356070edfa09282828a0703bad"],["/page/8/index.html","d67f8ae9667c1aa871447e5db25f22f0"],["/page/9/index.html","ec3c45f2b147228fb7f621ae9269674d"],["/posts/106331b4.html","312c25609ef90444651762c0a6d69419"],["/posts/1185a02e.html","c5219d38a35996cbfd60ebc871e15383"],["/posts/12e06b11.html","5204ecb20e578c601e1050fe59800722"],["/posts/167c7c45.html","314fe481d714529d9686fff9d5dababe"],["/posts/1743dad6.html","605dc6dcd683be658a425a5184576d1a"],["/posts/175a8e1.html","95edf78bc93cee0bcaa948896fdb4496"],["/posts/1be398e4.html","ca3a7750eb04f40e9e0ed63d119b8083"],["/posts/1c5a0321.html","0b2d7201d5f97e50ace9982934f41d0b"],["/posts/1c5b1e9c.html","2ff4b4ba370da3e337279ea551095b8b"],["/posts/1ec7973e.html","280670846a4a082d9a1f803ebe14b67a"],["/posts/1fb82448.html","5d551728097811c2a1e6d03e5e483528"],["/posts/21f18fd2.html","19c2592c7d6ecdea80fb4cf51f22c9a0"],["/posts/29c507fa.html","7bb29b2495a39599a531c951c165f504"],["/posts/2f34eb00.html","adb7940b1c82222659e08f5b3845adc4"],["/posts/2f57a694.html","ec3d864143a39fab04f48af0a7ce2913"],["/posts/320cf12b.html","1409023a421853c2f389f22456cc2396"],["/posts/374b54d5.html","c00c5a43130929e3a4dc3b056455fc27"],["/posts/3871b764.html","9be62f4c8df45d7325cfbe2a02aa9c77"],["/posts/3b308caa.html","042cd4fb88db185883a2a6e94b76be07"],["/posts/3c3cdb74.html","932dcadda6df4363745ba15a00b8b645"],["/posts/41f65cde.html","30336c420fe084e668152cae56e6e85e"],["/posts/4208fd6c.html","aa115d83b0e6bc4b6de337ffe9e92d44"],["/posts/4392373e.html","5ecaf7dc7c4f15fa08d89d6b9abea854"],["/posts/440ed920.html","0fe2a3ec561df2b3e07a9eaf4177e9fe"],["/posts/447a8d68.html","772035c05805d0f4a4d66b6aa2d7efae"],["/posts/4d2b51ac.html","c0963fa3b96c09558b6a2a5daf4e70f0"],["/posts/4db1a52a.html","c91af3cf270b38e912bd386ff387d5d4"],["/posts/503ae89.html","11b8dae7943e4be02e4f46a304b41403"],["/posts/518e2799.html","d0736f9cf2471c9cbd9bfb49e48f82a5"],["/posts/535fd087.html","d0a0e8c4227421dad8da7986854d74cb"],["/posts/5923cba3.html","6c327eadfcd5b2d5f232f205a7c5327a"],["/posts/5c1bb6b8.html","72ae6e0602796d3213b8207ebc7a4a82"],["/posts/5dc45f0c.html","c0abe757591eb3db88741ddbc57651be"],["/posts/5f2caa2c.html","444ebbc98a16c203946ff8862fc77a9f"],["/posts/616be7b6.html","ab16bee3e90246c7f8434a7e64f48c47"],["/posts/62a1ec0c.html","0457b2a1848ca39acbfa2472a6c264b9"],["/posts/69fb361e.html","a02815e8d23328f9310b7bfaed72edf3"],["/posts/6a8518ce.html","ea081c9aabbd4e15d1f0b0426e33c2d4"],["/posts/70685119.html","4430d362d03c2d079d315ee045211d72"],["/posts/743db4aa.html","a615976880eb842caf3e210acdb254c4"],["/posts/7b67faab.html","2ba22c95ccd426743d8738321c8ce2b7"],["/posts/7b76be01.html","1302d52866a3072dbbc4127461b8d3cb"],["/posts/7bff939e.html","7137e9a94787c149e206f64a532a5be1"],["/posts/7cc4ca07.html","4dc971ff923df79199f5f2fd8ab43286"],["/posts/7d257210.html","1813c6f7cd84b9d818eeff3037bcffd9"],["/posts/7e6a5c94.html","0ed6f3304003d9d93f3392a9d81aecfa"],["/posts/7ea0cbe4.html","9131e219bdf210de09bab5d671dfa527"],["/posts/7f382da2.html","de5f6dba1db26ef65ade5986aaa11c1e"],["/posts/7f8d32f4.html","b05a6cd80ff9dc0271074828e80118c7"],["/posts/8207aa48.html","15f99f3e402157d98fc087e132aef2e7"],["/posts/836ea9bd.html","619f2f7e97eda1fc59c425af142f29b8"],["/posts/84cae757.html","281e647fdaf0e4879bde7a2b193c1e1c"],["/posts/88200036.html","2a244f985f59a8c1624dda324ba286b9"],["/posts/922fb64d.html","65a603f999b6cac028d81e4429f08bb6"],["/posts/98332b29.html","9dbfd592d3cd48b9b9dbd66bd8509321"],["/posts/9a1a736f.html","2f55c4fc9096a61ec53e15b5a5f2e15f"],["/posts/9addd0bb.html","281edb70bc9cca97cb80a77d069f4771"],["/posts/9b44950b.html","c142f7fbe4d8a4f75bda0de834dca2d6"],["/posts/9ca149ab.html","d177ff342e12d6dac6db5bc846e6a723"],["/posts/9e4446bf.html","233001cee1f6c1824324bd77f77cd467"],["/posts/a0271e58.html","89d26dfd2f571a7e62725080b0d464d5"],["/posts/a13c1dba.html","071b61caff35861dda12abd80352abbe"],["/posts/a1f2a4d4.html","1175d54864965f8149ce63db8028d5cc"],["/posts/a5f300de.html","76d328eeb8682d7f5da2402381019fe4"],["/posts/a98766fe.html","07702587f143c74ce858e7d93f5b403c"],["/posts/a9f63847.html","559730da333622871fd8409d33e60737"],["/posts/ad31055e.html","f25773770064173d627afcc310bf1d2a"],["/posts/adcd6e20.html","3b4bc6917bc951c243290036b3ef9430"],["/posts/b0fa4c58.html","27fc54aa228edbb3a41b47c4b9a40e9d"],["/posts/b1168675.html","7df6eaa5bd03c68951c8291955e21dc0"],["/posts/b291b1dc.html","2aa6f582c3ed387280d7075fbd52f47d"],["/posts/b2feeab7.html","6de809d4c58cc1aed98f93bedf8eab39"],["/posts/b6d66f1b.html","674a3137c02ce43ddfb387188ba12aaf"],["/posts/b7525d11.html","328cd7980f1e130577504097d44fa4ed"],["/posts/bb154b63.html","453e40141ce909d197d868f55d8bf70e"],["/posts/cc1b9611.html","4a9d07b06eaad89d52a24daebb162c9b"],["/posts/cc86a40d.html","6845a6b6fdb20bd1bfa7c82c25279b30"],["/posts/d36531a7.html","c829825fb7a8b1f3ee025866d394d24e"],["/posts/d442e51a.html","271fa01b9ced347b5e33080c9dce983f"],["/posts/d7fdf01f.html","3cca19e64fb14af84a174213d4706b31"],["/posts/d839b0e.html","abcda10f892d99f1aa40a212e2d4f521"],["/posts/dcdf88c8.html","fc1b85e6946c624a880b2dd70e3b6764"],["/posts/dd378ae0.html","ef6974de812d26c438c619ef819e83b3"],["/posts/e15be301.html","e7af59fa768647ecbb3c030df36a7795"],["/posts/e2e4b4ce.html","6b2d6d439b9e8a95f6d59cb1e782f64a"],["/posts/e35ef5bd.html","f105b2b36dcbccbf3d106a7e92caa16f"],["/posts/e462ba83.html","fc4889b5f453efc4cbf84dfd5a02c75f"],["/posts/e53204e6.html","7279f5230f90104caf26f96bead53bd7"],["/posts/e5cd9bbd.html","b570157f3cf02fb7fc2aaac8fc6f7e6a"],["/posts/e7a99a5e.html","ed37ed7dd6d6b63b8bf3248688645d64"],["/posts/e9318100.html","be485b6e5d5c29237f0f55cac55b8434"],["/posts/ed52e6a0.html","7ca4a084dc26dcad9d853f8c15fed00f"],["/posts/ee0ac59a.html","6f5517fee86e499ca660a509f26736a7"],["/posts/f09c1ee5.html","89eafce4c9af3ac27549d76adee7ae03"],["/posts/f1252f66.html","84633bf57f21cc5e6836173e97414ecf"],["/posts/f4af26a9.html","4fc161d1e5d2f10dbbc270cd08093964"],["/posts/fa3cd62d.html","88139a9bac3cce4b893b32b6b3e322d1"],["/posts/fb3794ef.html","4b8fb2c0ebd926ea71411c405d8966ba"],["/posts/ffdfd6d4.html","71214062ccbc6fd5ea90ba5484d93114"],["/private/index.html","4b99ca2cc3490d6ff5ec2169b8369fab"],["/random/index.html","5412e55145b8ba9b0e31c41b3ff2c592"],["/sw-register.js","4fd704246eb0f1d84aaaf8da53f160d1"],["/tags/ACG/index.html","62ba1c4f799eb9e64b2e143d8a2dc86e"],["/tags/AIR/index.html","da563af0a957f9ecbc0adf72639df8fd"],["/tags/AliceSoft/index.html","a53612a110dda4c2caf85055b914201d"],["/tags/Butterfly/index.html","b9794df2d794e8454820cd23b9f2f91e"],["/tags/C/index.html","39b150c7742a2de546129b681b1e16a6"],["/tags/CLI/index.html","782a6e97b7219b870f6c8781a9b3a269"],["/tags/CMU/index.html","0c9daabdd2b01f29c92aeff62526e81e"],["/tags/Crash-Course/index.html","b86a0b01014d5be940a10ae7e6aadc9e"],["/tags/ETH-Zurich/index.html","229e60015cb0afea4826628dc7c587d8"],["/tags/Eushully/index.html","a98ce088102dc68a0206375fdc7a033a"],["/tags/Everlasting-Summer/index.html","343704bd37e92cb1523c9f8c7d2dec92"],["/tags/GDB/index.html","fa6ff3098e9e584d2d8bb9ddcc8c19cf"],["/tags/GRIS/index.html","b9c58ba73cc8bb5281f56ac010b3806e"],["/tags/GUI/index.html","4258e679d57421d2f0c9c67f9dbd97e2"],["/tags/Git/index.html","b367ac821079fe6775dc707f12812d67"],["/tags/HTML/index.html","077fc90b2df649168aadc2974f096ff4"],["/tags/Haskell/index.html","c4ce28533c11e557c8fa6f7a4ba05250"],["/tags/Java/index.html","464ad499ac6b6621214df6f3c63a824b"],["/tags/JavaScript/index.html","25aa8d017b796bbf8594e6048f364993"],["/tags/LaTeX/index.html","a6d5f631c6bfb5bc31a3b1e23c06124b"],["/tags/MIT/index.html","e196f89acba6ed9991423e8a91be150b"],["/tags/Markdown/index.html","885aca4d820b88c978ee62a50549cb34"],["/tags/Mermaid/index.html","736fa17494949e55b69eec35d55a5491"],["/tags/NTR/index.html","001ac2cede2106ad3140a8c11e266e9e"],["/tags/Pixar/index.html","25457ee2a4f5b79590fa4891e3d19458"],["/tags/Princeton/index.html","c7ed1d5c25d4c4f9cbe6aea7c3e658af"],["/tags/Python/index.html","2d9bd955acccd4bf2efcc835e5e36612"],["/tags/Qt/index.html","ebfcc5c84eb88cd9f5af9f4f166aadef"],["/tags/R18/index.html","3446762b804c7ee24309eb1e37b71e98"],["/tags/RISC-V/index.html","e92cd3df42ccd1d8c9aa9272094b01e4"],["/tags/Scheme/index.html","28f3fb4b6f210376ca8b112be37267b3"],["/tags/Shell/index.html","0b7686fb736b66e2e950e45fe1caef91"],["/tags/Stanford/index.html","21cfe8ba8e998d8d8deed6897f0cf2ec"],["/tags/UC-Berkeley/index.html","ec4dd3f3169c30a58458ae4f7396c475"],["/tags/University-of-Helsinki/index.html","49f39f4d329d766c31fa1014679d2d4a"],["/tags/debug/index.html","7cde56110281d0d724425acaf9953fa8"],["/tags/index.html","0c81fe8def5cef4d0f6627f25ef7000f"],["/tags/key/index.html","e1e707212c631bbbe62e0e8be2ff2490"],["/tags/web/index.html","aa7dbb94afdcbed6ab781b673c6c81e2"],["/tags/三国演义/index.html","3ad710ec8f1061e78d82bc7eea6afe83"],["/tags/丧尸/index.html","7cbfdf8f59192b750df7e8f1483ba3b1"],["/tags/京都动画/index.html","a0faac53a61e3fcc06544eb103840c76"],["/tags/京阿尼/index.html","b5a89dd8cf0c52a6ade186597e1403d4"],["/tags/体系结构/index.html","4ccc9d2050f5c046a355e2fa24bafeb1"],["/tags/信号与系统/index.html","7200dbc768033e9865d1b4c42e32a641"],["/tags/信息论/index.html","cb33edb12c6c73d1f96062cd0c31b7c3"],["/tags/傲慢与偏见/index.html","41a1f47de775af68ed18c65d29c662a7"],["/tags/元稹/index.html","dc128d39ff24498c619924ff8e86bf08"],["/tags/公路片/index.html","a784b7ae43ab6ac430017998ecdec283"],["/tags/兰斯/index.html","eb5f982878baca6910e8b5ea62659e4e"],["/tags/关于我转生变成史莱姆这档事/index.html","1ae665d67f6ca94b4957eb9e20bd539c"],["/tags/冒险/index.html","2f1dd1db5d0d3de228fb857d58ced7ec"],["/tags/函数式编程/index.html","4286922f5b21037487ec1957fab0f515"],["/tags/刺客信条/index.html","f7ebdbe39280396cbbc29f1bc114da49"],["/tags/卖肉/index.html","f28f9faa90796a828e7ff9c28fda012e"],["/tags/博客/index.html","20a93c527b3356535e86bc91940ba1e3"],["/tags/去月球/index.html","18716ba18f7efd1559c2ef55c5017002"],["/tags/可汗学院/index.html","fc59960396dd567d33b9868c6366beb9"],["/tags/史诗/index.html","dde4f0b52ffb03184276ce5e7be76356"],["/tags/吉卜力工作室/index.html","f7cd2f6242021718697e280d022e50eb"],["/tags/名侦探柯南/index.html","93dc392640001ff30b2e3367235a40b8"],["/tags/后宫/index.html","9356d20481c3b89d0972ba67c7728b02"],["/tags/咒术回战/index.html","59bf9837084f4d813ec39882aa862e8c"],["/tags/哆啦A梦/index.html","175c1023535c64e28649abaeeed9842b"],["/tags/哈利波特/index.html","32e5b1231fc814628fd9bda696ecea07"],["/tags/喜剧/index.html","98aa85c83969d0a0a3944fb797431282"],["/tags/喜羊羊与灰太狼/index.html","7c184258e259c08632aa1719e8a81aa5"],["/tags/四大名著/index.html","740e13a88cc488824adc2eba1af98e88"],["/tags/图表/index.html","5ad70a2191981605794205448b7f340b"],["/tags/复变函数/index.html","95e9a723f351d7fc912b91c3453d0aca"],["/tags/孔乙己/index.html","e9b9c7939c33738933d6553caa2c4c3b"],["/tags/字符串/index.html","c6f6dc2267d50a2ddf2a78b987f78e70"],["/tags/学园默示录/index.html","afdcb1a3c1a1882e30f16e9826b79c13"],["/tags/寻找天堂/index.html","d8aea20e5404d7f19c8d0347ccfadc54"],["/tags/希伯来大学/index.html","97a6ff1dd6bb72a366feafe4a7492bc4"],["/tags/异世界/index.html","5f2fa0fc3a3c74310a4608efc36354fb"],["/tags/微分方程/index.html","678d86f51d05acb4e80e7b58bb47cafa"],["/tags/微积分/index.html","f3c309c69fde88096f10e4478da3ac1a"],["/tags/恋爱/index.html","3cd457ca49bc4a3e93fb86e820e16229"],["/tags/情感/index.html","494058317bee98653a09f0271714f3da"],["/tags/成为简奥斯汀/index.html","281a12c0487dd82fbd6d8af74d742d79"],["/tags/指环王/index.html","ca6dd30598af083985545c0b577f0989"],["/tags/搞笑/index.html","8ff62a6a18d6aeca76c4541e81e41a55"],["/tags/教育/index.html","402be2b916a8aea829318d227793ca65"],["/tags/数据科学/index.html","e2ce0707b6fa369a342b5501e0ec631a"],["/tags/数据结构/index.html","5bf736285d1986b5d1ab6f58f90429f0"],["/tags/数据结构与算法/index.html","d981bbb3de32e9d2c11a9839ae598463"],["/tags/文字排版/index.html","2594f78f45aea6d1393c0d45e2ea7059"],["/tags/文明VI/index.html","fd1b3adb6492ab8be5123435b4cbde08"],["/tags/旅行/index.html","31bcaef21c6149a435f78ce894bc1b50"],["/tags/无彩限的怪灵世界/index.html","d6b79dc4df38bdc0e74969a655751b7b"],["/tags/时间刺客/index.html","e93006e1cdd482282086e7b3a6d8ae01"],["/tags/有生之年/index.html","e5bb04e2ae7a19784faf9fe36bcd3b76"],["/tags/李商隐/index.html","5e8c6b88af5aedfc8b11bc5621887bd0"],["/tags/李白/index.html","ee56030f04b6cc8c4982efa4899cf5c2"],["/tags/李贺/index.html","f4be7c2375da8c87eeea43406627f542"],["/tags/杜甫/index.html","b09571aab525baa643683e6ad6e1dfc1"],["/tags/校园/index.html","31acf3594d801893218d2871afcb9995"],["/tags/概率论/index.html","5de418f626ec8adafe31db9fda3be69e"],["/tags/正则表达式/index.html","b48817ba492518f25ecd7f115169f615"],["/tags/死亡/index.html","8ae52bdd69278e4ace8fdf975f6610c0"],["/tags/水仙/index.html","a3ff6904dca06dc7d4aafed27708d440"],["/tags/治愈/index.html","e01ae77bda78d24edac8f91077c6ac8c"],["/tags/烂尾/index.html","005aca5cac832a810e0f207a2cad4d11"],["/tags/热血/index.html","01a61f2747dc21a612fe479b422c083b"],["/tags/爱国/index.html","59136fca7b8bf2e12a861ed8d99487df"],["/tags/版本管理/index.html","bb8f63e1f4c1aca1139716c0c69f57ff"],["/tags/玉子市场/index.html","db5af0cbf25e23232cb39b1a47978318"],["/tags/玉子爱情故事/index.html","c2569a50a2db391cdc862474afee7f32"],["/tags/王维/index.html","0c1381c2b1106e5f8829b8a07f40becc"],["/tags/现实/index.html","9a24bf2b025a8b8f267fa46c4dbe9b4f"],["/tags/甘城光辉游乐园/index.html","5d3245ba7d8c5e91ffbf698415415ffb"],["/tags/白居易/index.html","f48cd6860674455185ba8739265a2e73"],["/tags/白毛/index.html","9a126f13945bc75fe4331a3dab77a9a0"],["/tags/短篇小说/index.html","ab2265c7cf86401a0f080fe9c7150feb"],["/tags/神话/index.html","5d2f68b1f23c0e786a674c2bc9cf4b4f"],["/tags/离散数学/index.html","31fa44480d0098acd37d85a3bd7b6823"],["/tags/种田流/index.html","4c31f680d9d392aded9b724a016a41f2"],["/tags/空洞骑士/index.html","c794d56b8f9861ac38f8938d7ed649d1"],["/tags/童年/index.html","0c048730711d118e04a8cd5785c108c7"],["/tags/童话/index.html","f9f0c5ea417da46dcd7859c29c167ab3"],["/tags/第九艺术/index.html","9d3eec2cac0989a7d433fc4d03a5885e"],["/tags/策略游戏/index.html","813c434996b62b62c1d5e68fb5015ff9"],["/tags/简奥斯汀/index.html","d12876f04bbc90013435c84e29916f0a"],["/tags/紫罗兰永恒花园/index.html","ac88b0b45abb4baa5b00264fe5f4172a"],["/tags/纯爱/index.html","a47acc8481ecbc00af6693768cee9958"],["/tags/纵使手残仍大爱/index.html","81aad096e70a940ad516ed9c91f1e3e7"],["/tags/线性代数/index.html","f71f0bdaab5ba769daf5e8ec053ee260"],["/tags/编码/index.html","90e943106e862bf1544e1c06982d829b"],["/tags/致郁/index.html","c4887cb3adb308e2487e4a2cceb0d702"],["/tags/苏联/index.html","350ce702e5bcd730a763e608bd5a831e"],["/tags/苏轼/index.html","954c7944db1a0f4bbcba1d98ad6559d0"],["/tags/英雄/index.html","9adf9b89af04a380b0a0a1839e17af25"],["/tags/计算机科学/index.html","aa64b6551f42f1d436e395f6ca01edfa"],["/tags/计算机系统/index.html","12ea6514dd8689728fe399dde885c142"],["/tags/计算机网络/index.html","436e1d3478c2b3ed528cbe41079e1875"],["/tags/词中之龙/index.html","7355bb0c16afd189157f3cc64bbb87fa"],["/tags/诗仙/index.html","6636f59271f2563c7f279a60dfa5b9b1"],["/tags/诗佛/index.html","3c28a2b108487f13d9dae58c047f9819"],["/tags/诗圣/index.html","7ebb19d63330a7e67f7a6bb0bb4d872b"],["/tags/诗词/index.html","52435180a959e0724107dd94cd87d3f0"],["/tags/诗鬼/index.html","ea747d43ab2f4f3e17ff2c56acec8b2c"],["/tags/读书/index.html","144c17da2bb3a446c65d4d018ef9bd68"],["/tags/豪放/index.html","61f923ae1021329c1decca0ddb97af88"],["/tags/赫尔辛基大学/index.html","c17c118db9e03043ca04fd5cb2dc9bc4"],["/tags/跳跃/index.html","a728c9ba74193b315cd4ed8c0f37107a"],["/tags/辛弃疾/index.html","5608a9ccb351ce9c36c9b85433d6ec2e"],["/tags/运动/index.html","6eda137e446be45ee20ec36f4df6a576"],["/tags/钉宫/index.html","3c4042520ce7d8b34a568d6cce2ba77a"],["/tags/银河战士恶魔城/index.html","b76279efe76cdb83ab10c45a07302533"],["/tags/陆游/index.html","e858db3ae2f16ec8353a361c94a79a30"],["/tags/零之使魔/index.html","6942695c86efb104056ec6d3eda80c7b"],["/tags/霍比特人/index.html","fe682040eabceab529cf67b2f93bfd36"],["/tags/飞屋环游记/index.html","2b84301fe5c247b893c628c6983763c6"],["/tags/魔戒/index.html","176f923ef75ed33d89fe6f3978031af2"],["/tags/魔法少女小圆/index.html","48f41341352148dec4a04cf6bfd03858"],["/tags/鲁迅/index.html","2d72c7a6bc2397a49ebfc7d693d2ea69"]];
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
