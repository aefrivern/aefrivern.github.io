/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","800a777757d8269844ef3663fbd67044"],["/about/index.html","9dd668941048a7578c074dc28581e371"],["/anime/index.html","93534fc4fe7a7ed6148fcd969e97e479"],["/archives/2022/11/index.html","117b94e3a531baaf8c3584569593e917"],["/archives/2022/12/index.html","4e10515844a415c0a0ae9b9c67ee787b"],["/archives/2022/index.html","aec0c1970ff5a08f21a15b3ac768a897"],["/archives/2022/page/2/index.html","9d12e70d109162b0cb961531b1a699a5"],["/archives/2023/01/index.html","d5d03b0569515670476dfbbf97810d4b"],["/archives/2023/02/index.html","d09f97749defc2831fd7212e52044838"],["/archives/2023/03/index.html","269be5e6e5285b18751af10a075c8f34"],["/archives/2023/04/index.html","8226a94ab8304fa9475fe43ccfe5f8e2"],["/archives/2023/04/page/2/index.html","7336a409fbef39aa0fbea79b0273f9f8"],["/archives/2023/04/page/3/index.html","7e65d9dc2b7fa1307dab036f353bfcec"],["/archives/2023/05/index.html","d21ab1d65f7e84278f3bb3894f069ccf"],["/archives/2023/05/page/2/index.html","784e7d0005e8bd16a6ead2e3e5a54641"],["/archives/2023/06/index.html","4f2d588bad18968c51426aea8b785930"],["/archives/2023/08/index.html","dea90ac1fc9181e9f5fec72f4e378de7"],["/archives/2023/09/index.html","b51c0f2e57824615554bec4d57cdf519"],["/archives/2023/09/page/2/index.html","1d1e78b0883ce4dbac9eae7e20bef6cc"],["/archives/2023/10/index.html","f152a6ad5ef9dbe31c00f15d6f06205e"],["/archives/2023/11/index.html","fa65fcae86bfee2e282b07a84a51f4be"],["/archives/2023/12/index.html","7ad48e6a98bae09a9e3cd1d96d0aa910"],["/archives/2023/index.html","54891596cb1b041f3b49c44a51256bdf"],["/archives/2023/page/2/index.html","4a37cf362f033888e503d3ae34a47917"],["/archives/2023/page/3/index.html","87383c038fbf52c745cbc9330737d517"],["/archives/2023/page/4/index.html","9fd0acfa10c1061b31addda0a457d206"],["/archives/2023/page/5/index.html","890e7ef2b17ed6a901b2f16ddffeb523"],["/archives/2023/page/6/index.html","5d52a841939af27999ce8ffac8dc65f3"],["/archives/2023/page/7/index.html","c2ae90b667fbfd5d4650f9d7944d987f"],["/archives/2023/page/8/index.html","54af589670c66ca8236aaff07a70dbe7"],["/archives/2023/page/9/index.html","66c4e225e6b8dacb08a45aa221a937bf"],["/archives/index.html","acf284f08472d0cca8fda76dcb9bd055"],["/archives/page/10/index.html","9f94b4f817b6753efa3dc4a8c2e931c3"],["/archives/page/2/index.html","12ab11c81637442a1dcb622177a6a7a9"],["/archives/page/3/index.html","04b3ea432d1a23902f4fbb6d0e5e0033"],["/archives/page/4/index.html","2f0a9d3d5b9552d179f1b3a1a5a21a56"],["/archives/page/5/index.html","eb6bdf2b961afc6883c75dfbc19ebc75"],["/archives/page/6/index.html","e46f460f10bfc024df1be7162b21d828"],["/archives/page/7/index.html","093744be530e36fb96d9a9f1ff5f1adf"],["/archives/page/8/index.html","6d3700f952c480b9862730e29132cc99"],["/archives/page/9/index.html","2666e6d588f68a9bcbc619c26db92c72"],["/categories/ACG杂谈/index.html","31b390212c3b3369c71310e2c31ba52c"],["/categories/ACG杂谈/page/2/index.html","2dc6b858a673c94935aaa0c930e1719d"],["/categories/ACG杂谈/page/3/index.html","8ce76abc64502c6b7e2f1bc92f8f1afb"],["/categories/index.html","acfec080337f6dd24916405ec32381ab"],["/categories/学习笔记/index.html","69820004d966061e4ebdbf29e9993a87"],["/categories/学习笔记/page/2/index.html","cc50563fdedcdda9bb02a28b3936e2f4"],["/categories/学习笔记/page/3/index.html","4406712727391d7306f14f6d350b8717"],["/categories/工具/index.html","772a4f143fc2f9f6a45c83fbf58c7c9a"],["/categories/工具/page/2/index.html","63f6534bb056723ef2c451ba8b93df8e"],["/categories/游戏人生/index.html","7e9af0152fad162e230cfaf7837b2f39"],["/categories/游戏人生/page/2/index.html","8477b1c93d63532defa140401893ae51"],["/categories/读书笔记/index.html","29ef24c7b9e7a4e05fc43204d75b0454"],["/categories/读书笔记/page/2/index.html","8d3417d3467f9c4e1c0758bf4f125282"],["/categories/闲言碎语/index.html","7277f3170fed759ef037b5596d2b172f"],["/census/index.html","7132cd58f6898ab8a25910a32891db0e"],["/charts/index.html","b6b2b87b611414205e010640755750fe"],["/comments/index.html","1b93cbcdedb4c7f6b266d8c3dbddb4d7"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/barber-shop.css","749527ac51cc272f7b2739436be19a5e"],["/css/card author.css","bc748b0a4687d85e3127887faa5977e7"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","848ce001ef15c6c2f206a811d8f3cc60"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","a7317a9ce2436d1eaed2e2ea6d1ce813"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","fd04b212b810599d155f7071879d0a78"],["/css/one graph flow.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/pointer.css","d482bd04de8bc7eefe76c4973b1a242b"],["/css/scrollbar.css","d0e572b9c1ad59064a1010e953aa015d"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","61f230aceb26e33ac4de1344d2101815"],["/gallery/index.html","7c67c8a46baeab6cba89f97c3367ec93"],["/gallery/wallpaper/index.html","578eaeb6e1524f1b9f863e82c5241426"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","37e9adbd89b2f0769c6d6f5aee8b5a09"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","5c7619315c956d8a485e2c3b83b4d7bf"],["/page/2/index.html","a9bebbdeb8ff4aa2e600bf341cc34570"],["/page/3/index.html","9555836a9ef3b6638252864191123bf6"],["/page/4/index.html","35d8c18d9061e6f3aeeeb8644bf968af"],["/page/5/index.html","a8be44d78a211142be2889b2a6ec2774"],["/page/6/index.html","01e3681ec5731dd5f7960960dff2b084"],["/page/7/index.html","3f250d4c073d720ede96f0e5b6a994d7"],["/page/8/index.html","0e0307b58b28ebdbb299aa1104fe8325"],["/page/9/index.html","540efedf42a2fdb303bdc4f74a6e66d9"],["/posts/106331b4.html","0dd67444c1a4f0e6b3f903320dfc4e8f"],["/posts/1185a02e.html","4e3aa9bc7f5303ec4d6042559a2081df"],["/posts/12e06b11.html","6da94be82f92c33780b9965e77bac36f"],["/posts/167c7c45.html","bebd8dbc60bf25332d269015e96194de"],["/posts/1743dad6.html","b6106cf9a064adc3252f12d6e3f8c0a7"],["/posts/175a8e1.html","e8c94e2ea1f85280782547d068d8d404"],["/posts/1be398e4.html","c51cb72c3d006069de1ccbcaeaef0409"],["/posts/1c5a0321.html","def85759a5afb24a70dcf9ab6a5eb28a"],["/posts/1c5b1e9c.html","f286a83e94b432f2110d1e418e640460"],["/posts/1ec7973e.html","e4c227c8c2e7b9849bbb909077cd8b3a"],["/posts/1fb82448.html","dc5fe27225ce86cff578bcee7d3c9121"],["/posts/21f18fd2.html","6bbec0d5980e0901ba6f0222e599b620"],["/posts/29c507fa.html","09655fa40cfc43067644d6c6b2844a4d"],["/posts/2f34eb00.html","d31bc8e43bb41223ed9087016fb14e1f"],["/posts/2f57a694.html","368dcf1f14e64d1661cf6767c2ff2b85"],["/posts/320cf12b.html","a69e192b72edcb794180dd7a4cf1675c"],["/posts/374b54d5.html","427fdd0637886eca64ce9082bfcc0884"],["/posts/3871b764.html","cebd38d7799c126e6800b54dca7a4c23"],["/posts/3b308caa.html","61c8b95a57ee3270dd6243d16cbf45cd"],["/posts/3c3cdb74.html","f418d8469c65b35dd5eb299c861806ff"],["/posts/41f65cde.html","9d7c5fcb0399d61b0b2028dff4f50b65"],["/posts/4208fd6c.html","f8c19e35312a025d35e1e7decbcafbde"],["/posts/4392373e.html","1a05bd489ac24b98dc17521e22f793da"],["/posts/440ed920.html","a3ae010e98b5623b84d6353f35da1bef"],["/posts/447a8d68.html","b5732274ced50cfc26d833f36be14b4b"],["/posts/4d2b51ac.html","20164da3f6b9eb6dd0a9801243be5b50"],["/posts/4db1a52a.html","bd0006221e0cf9fce7787e9626fa06ab"],["/posts/503ae89.html","82b797244dbbd6553d265cb1cdfa3ed4"],["/posts/518e2799.html","27662fb32ba0f5c0457bceda27aab65e"],["/posts/535fd087.html","70d04a149723dd85a5838c28a5f0e041"],["/posts/5923cba3.html","75030dd0a924048ae1e286dcfd11df8e"],["/posts/5c1bb6b8.html","57d0aab1aade435cff1c4d8b8c28c872"],["/posts/5dc45f0c.html","e1cd259a4e1440a6fd400193fddee17c"],["/posts/5f2caa2c.html","8bac2ad8a9893b13846d0ed00e5e4fe7"],["/posts/616be7b6.html","bf858703200a087078622033a929fd73"],["/posts/62a1ec0c.html","a1f9650c1abdb28815736de4dd2abfc1"],["/posts/69fb361e.html","9fbf3daafa36f3125bbcc5271bee731d"],["/posts/6a8518ce.html","a1dc83fb3492d0b5eef62e7dd9a265a4"],["/posts/70685119.html","360251068397680428c262b92353d397"],["/posts/743db4aa.html","f96859575573cfe53d666146cc687585"],["/posts/7b67faab.html","bae88eeec5ca20cb196fe16455ac45b6"],["/posts/7b76be01.html","5c0914460991ca3cf27f9eb53a98ef13"],["/posts/7bff939e.html","6d8c60faa27fbe91e0042ead02b93652"],["/posts/7cc4ca07.html","81a7848c04fec49e465c9c18970c7e4d"],["/posts/7d257210.html","c51737774754ec7b08acc47c90cb67f5"],["/posts/7e6a5c94.html","c1306957dd8ec9e69ef908db1ab44ae9"],["/posts/7ea0cbe4.html","87a157474722fdb164b5baa86f163479"],["/posts/7f382da2.html","6781107e7edc77d5860b2c4637b2f81a"],["/posts/7f8d32f4.html","7e119b701ebf74f409873052506a7f50"],["/posts/8207aa48.html","fa2cb8e168ea2020ff978d72e2e83649"],["/posts/836ea9bd.html","2d15659454b8ad0a8111709d075a8e9b"],["/posts/84cae757.html","fc741626a4183e5a185c42381be52dab"],["/posts/88200036.html","8eb50fe1b5ac92a256018b179a0f1f35"],["/posts/922fb64d.html","ec65dfca77a45f08d7d315015835c37c"],["/posts/98332b29.html","090ee5fd080a14b2ccd80f31608179fb"],["/posts/9a1a736f.html","320c94657c561a07413ec1320e96b1f3"],["/posts/9addd0bb.html","a933282ffc3fce6d01ab2369b9d69d52"],["/posts/9b44950b.html","e4307e9e5c99860991b3c25c9fab472f"],["/posts/9ca149ab.html","a49204be25008b89d73c344bf1d3b4e8"],["/posts/9e4446bf.html","048e0bb42f61438728c305a0e2a4a8ac"],["/posts/a0271e58.html","8c2527245407fcc07a9196611bf5b4d4"],["/posts/a13c1dba.html","21a7275c7f04a9977fb028c7b8671a6b"],["/posts/a1f2a4d4.html","8e1781e9712b93879ba0b141e171fc14"],["/posts/a5f300de.html","a6e77e5f79a29d23b75beedf0c16f54f"],["/posts/a98766fe.html","67a5a788b9c7a91cc04a2aa1e7d34a03"],["/posts/a9f63847.html","4662128430301d790ae49d465cb3d4e4"],["/posts/ad31055e.html","2a29785d26f10cad82d20d5e8ac9a204"],["/posts/adcd6e20.html","163ec9614794136a018d38cc34e39283"],["/posts/b0fa4c58.html","9938237891ef6bea0b19f26f78ac95fc"],["/posts/b1168675.html","991c6208c3ba6057039eb4649721c96c"],["/posts/b291b1dc.html","78f2893153ebb7610ae5ae42657f7e97"],["/posts/b2feeab7.html","c1ffeb68a62082d69d5d6a0bfac5ddba"],["/posts/b6d66f1b.html","c8fab898be13ccce037a78b83e5a99d2"],["/posts/b7525d11.html","fa900e1cee094b2704c8f8a98d975114"],["/posts/bb154b63.html","7e48dce8343a21cb246e864ab758b96f"],["/posts/cc1b9611.html","be8f1b1cb584f44cafabfb2073b2f5b6"],["/posts/cc86a40d.html","e15af526a6c22429fb25b05d86609f77"],["/posts/d36531a7.html","8453875f53e3ce64c0ba5b32dbdb2043"],["/posts/d442e51a.html","d40a8e876c1bb50a8c708b0560f0fb48"],["/posts/d7fdf01f.html","2945538a66fc5233d3d942697ca6f267"],["/posts/d839b0e.html","a2f4dc1b1937c98fb50dcef3e8093154"],["/posts/dcdf88c8.html","d4d6f09c0d7cffdec467f377e571d2f5"],["/posts/dd378ae0.html","102ffb360079d6fb7d9fdf18c3836446"],["/posts/e15be301.html","9b0e0500a620758b83e7aba19b6b2c9b"],["/posts/e2e4b4ce.html","a28f9d1d6c3c93c4aaa262e7e562568f"],["/posts/e35ef5bd.html","8f51779484ca8e8f6f311446f334ed40"],["/posts/e462ba83.html","9c18711a41caee7ae047d9477ba442de"],["/posts/e53204e6.html","2ae308be3837a75a751accd8e6b70c71"],["/posts/e5cd9bbd.html","0fd2a497905418ae6b6125163d5a4159"],["/posts/e7a99a5e.html","9a892295a7633c6a68d3515d12087251"],["/posts/e9318100.html","74fe5423546da4ec2b5433d4c92cf48c"],["/posts/ed52e6a0.html","a71f06f623c9b929b49c4c3939e03e4b"],["/posts/ee0ac59a.html","b709cececbe58ffa1642663f646866aa"],["/posts/f09c1ee5.html","4f1c2379eb9db9b0072db462c5b2cfc5"],["/posts/f1252f66.html","121b79bba98ae68dadc704fb8d3bf815"],["/posts/f4af26a9.html","80aa158eaa66833cc68e88859b7d02e3"],["/posts/fa3cd62d.html","b5f26c7172528814f2524d4b65e21730"],["/posts/fb3794ef.html","fa5545c0ada6553eb47c034632596f55"],["/posts/ffdfd6d4.html","5ed2a999a6f22e2342a48336c4ebefe8"],["/private/index.html","6cb23abc963056bd9d0aae3c0c664ae3"],["/random/index.html","7c901998806459aa6138b3eb5a3673b2"],["/sw-register.js","898d9c2acd671e84f23868a8d1a4be5a"],["/tags/ACG/index.html","407cba5dfb835e04f152bf1adfa6430a"],["/tags/AIR/index.html","e0909f2b9e7c8f143053c71373feee9a"],["/tags/AliceSoft/index.html","708252c8aa5a790b6ef396974b1ed336"],["/tags/Butterfly/index.html","a66ebd5a55c019c1ba0aecaeaaf3914b"],["/tags/C/index.html","64602649684e5fd91d4fa33e1677c455"],["/tags/CLI/index.html","f76c732ec1dbd68d1201e4e35c3dc6c8"],["/tags/CMU/index.html","deb580ee34392394f202b0760ebfa401"],["/tags/Crash-Course/index.html","5e8c25fd8dd32fe8a785ff31490b6942"],["/tags/ETH-Zurich/index.html","f75c7c7c17ebd9f8326a478f636a57cb"],["/tags/Eushully/index.html","7371ce73a14680181c1b64b49eaee9e6"],["/tags/Everlasting-Summer/index.html","4580f2e8771132fa30964fb1952ee60d"],["/tags/GDB/index.html","31fd857c761611da585dfa1e5b8ef8cb"],["/tags/GRIS/index.html","28c1cdee7e0cfe666d33462b0b9ee40e"],["/tags/GUI/index.html","628c16e79224170dcc091d364e891dfa"],["/tags/Git/index.html","1a34860aca6910746ccf2b64bc4acec2"],["/tags/HTML/index.html","a86b7d56b54898a3982cf255d43f85d1"],["/tags/Haskell/index.html","50798592b9553444b9f7fe3484d52aed"],["/tags/Java/index.html","dbfc187ac41ca1e52f7df3c0e8db0159"],["/tags/JavaScript/index.html","fdb9c038ef4b5af002ae1aeb5750273a"],["/tags/LaTeX/index.html","7be546df805b4d9098a8f7ecafed8c55"],["/tags/MIT/index.html","da15bfe1685aa4d1d281c49a5722e829"],["/tags/Markdown/index.html","d2359db35e7a0d4ca86bd7e3fef69783"],["/tags/Mermaid/index.html","f893985583c43209d1a9f9b272d2cf8d"],["/tags/NTR/index.html","20f68263640e5935531ed1a1f830f6fe"],["/tags/Pixar/index.html","bb7861876028b31ba00291b8f9555b2e"],["/tags/Princeton/index.html","517b2bb0b489a36491fd9fa15da874e9"],["/tags/Python/index.html","05c434ad54500044336ab67eddeb9f9d"],["/tags/Qt/index.html","e4b896169c06b0937319c4361da8b1fe"],["/tags/R18/index.html","2f7656936da122eea240a5e1196834de"],["/tags/RISC-V/index.html","3439f96a9b59b6df7255b728cf7c3a3a"],["/tags/Scheme/index.html","937fcdd12354f2d149210e3b2a70dfcd"],["/tags/Shell/index.html","22944a1566fafb031bcccd1470c939ca"],["/tags/Stanford/index.html","e3d37ecfea14d88299a6fde34389653d"],["/tags/UC-Berkeley/index.html","33cc5dbf9708327927f7071c16ef3e91"],["/tags/University-of-Helsinki/index.html","b48c8a30367fdc2d48da8903aa829d01"],["/tags/debug/index.html","47fbe1f7537ffda9f7ae4f4c2c098d6b"],["/tags/index.html","4455aa40e56174b03e18465c107fe2b6"],["/tags/key/index.html","7246d4b1d7800181771ec1da81054b2d"],["/tags/web/index.html","1ddb4764c064ff38655eaf90857f6ee7"],["/tags/三国演义/index.html","5736a5fe3cb42bc8c7e86b05b32888c4"],["/tags/丧尸/index.html","f9e7d44fb0e0799d0a348f0aa49d7bd6"],["/tags/京都动画/index.html","10c0c134eb03816e7ea7d25ca36827bb"],["/tags/京阿尼/index.html","6fb3f9a0de3b9cea6ee322b91058775d"],["/tags/体系结构/index.html","f67dcc3f8d8ebaf1e56f595837a7cea4"],["/tags/信号与系统/index.html","c67240d32c2eb8249997e74acf9f896d"],["/tags/信息论/index.html","0581e05429881bbcd7a1ab7a2e4f3ca8"],["/tags/傲慢与偏见/index.html","1e9286963f4864a531a9bd4e37511d87"],["/tags/元稹/index.html","23b70be9a7424a8c2395bf9b83f844c8"],["/tags/公路片/index.html","ea038d46a52b55075d976ed304e51cd3"],["/tags/兰斯/index.html","44dfe64c88ea64baf301cc256de39a66"],["/tags/关于我转生变成史莱姆这档事/index.html","172b6c4924866d84a7dab46b023efb3e"],["/tags/冒险/index.html","f9b6e86c9a91c4862d61b0253eb5af15"],["/tags/函数式编程/index.html","095e28cfcf451d1e38cacc051fb2951b"],["/tags/刺客信条/index.html","9ac0f729bee9992d083fa894c1faf95b"],["/tags/卖肉/index.html","d81d31ee0e44bbb6f8346896fc80f63b"],["/tags/博客/index.html","e713efe7469160e0923a0629dfe95a9b"],["/tags/去月球/index.html","1c7920e651152d3e578e9eb329f1567a"],["/tags/可汗学院/index.html","a1cc37268c6251c5cdfda9312f16c097"],["/tags/史诗/index.html","819a4241f8a9a4a3c98a0ea1f1599af7"],["/tags/吉卜力工作室/index.html","e2df9178db8e9df8397dbff6ab74aeb2"],["/tags/名侦探柯南/index.html","e457c704f189cc01c48b39d642763495"],["/tags/后宫/index.html","24e9a9244b060c72bdbb514daad1278d"],["/tags/咒术回战/index.html","3a6dc8c2dd887456d2370f11f0418b52"],["/tags/哆啦A梦/index.html","5c65a19443c19a03937b61b5ec7672ea"],["/tags/哈利波特/index.html","88c05359260bd3dd8f55a5e3fbfcd3cf"],["/tags/喜剧/index.html","814922b5eaa8a5e3d73a0e83850f18df"],["/tags/喜羊羊与灰太狼/index.html","b24e63d629edb0896aae70adc32d46df"],["/tags/四大名著/index.html","a353c2f9a42131027feb37a54c8f194a"],["/tags/图表/index.html","b3831430d27d906292ed63757d1d2b60"],["/tags/复变函数/index.html","5f13519dcb534c0399630ca3dc7da564"],["/tags/孔乙己/index.html","75bc8087e585e65a8f1cfb5646e03ad0"],["/tags/字符串/index.html","0e878b4daf35ee371129f55df09af885"],["/tags/学园默示录/index.html","155ec9daa2f7dfd155b1109afc212a7e"],["/tags/寻找天堂/index.html","b2aeb87050fa2bdf6aa5dda8e6ce54e2"],["/tags/希伯来大学/index.html","da405fb8912c00e18b0342178446eafa"],["/tags/异世界/index.html","a991ff8080ebc7ab7e16a677019488f2"],["/tags/微分方程/index.html","c9b13d59af4bd4b45c8c03e6846dd095"],["/tags/微积分/index.html","4c128c060d7cecda8103568e6f519920"],["/tags/恋爱/index.html","a963a9c210ef576678e93310c49385e3"],["/tags/情感/index.html","7485eaa42e581e61b7554cf254690633"],["/tags/成为简奥斯汀/index.html","1d2d202a46d1cd701dfa07b255bbb56e"],["/tags/指环王/index.html","2640ec01faf3adeee7bd589dd225634c"],["/tags/搞笑/index.html","e3f91fe359bf763d796907997c10b475"],["/tags/教育/index.html","a68a7d0bb68f16b9de5d53e17c25940c"],["/tags/数据科学/index.html","85d06a65a71b65548b4cbdebb01cb071"],["/tags/数据结构/index.html","29db5a815ddad537b9fc0787e816c6dc"],["/tags/数据结构与算法/index.html","54ee93540ad53b0ea2a3f04c047ea01d"],["/tags/文字排版/index.html","1c39d8cb1834fad651eebac6ee43bb8d"],["/tags/文明VI/index.html","a2edabb461a60ae33024ec5f74318f62"],["/tags/旅行/index.html","8a7f23a1c863c2a75f91c6a5caf1d937"],["/tags/无彩限的怪灵世界/index.html","4c0e46a6b5f8948955d92a79b0a3137b"],["/tags/时间刺客/index.html","59118267bb4cd451f1e646a770d81adb"],["/tags/有生之年/index.html","7ffe568592055d0fb1cc48dc3bb305fc"],["/tags/李商隐/index.html","8f77a8cadf067d912d232af9f16c2968"],["/tags/李白/index.html","03c0bf1631bff5ca379f8906591baa49"],["/tags/李贺/index.html","4866d03229af10af3ded3c0ab3a7b9ea"],["/tags/杜甫/index.html","426ee0de5a99b867c275ac743d857142"],["/tags/校园/index.html","3f6fb2b931a2b3c5ddb52f9b6bcbce44"],["/tags/概率论/index.html","a3cbf383e81ad27837140a2c8e2d08e2"],["/tags/正则表达式/index.html","2ec2338947afa4b838ea0de8ac8b9a26"],["/tags/死亡/index.html","de491d15684f984fc27406f2a532f6b0"],["/tags/水仙/index.html","98d771b9488d8b106088b81056f0a7e5"],["/tags/治愈/index.html","ce739ab8068f4c3ff4882a5ff840b20b"],["/tags/烂尾/index.html","09626028eb2c5a75004cdaefcf485a65"],["/tags/热血/index.html","8533da2dc812c09d7f4ae75bbd29ea62"],["/tags/爱国/index.html","0d82b036c644399816e24003803c34cd"],["/tags/版本管理/index.html","f4a78fcad399dd13c8cf8f487e8524c4"],["/tags/玉子市场/index.html","adaa6d119f0d6681698d97615d5ff438"],["/tags/玉子爱情故事/index.html","55a9dcb753813c49f6d558caf913bd3e"],["/tags/王维/index.html","4564b02b55c3206ce286644894e43d3c"],["/tags/现实/index.html","64b5b3179e44003e4204e3ffeec78ded"],["/tags/甘城光辉游乐园/index.html","462a942fd91c577ff479d9ee08088cf8"],["/tags/白居易/index.html","c36ef839e8cb06608e6e21c6d0551aff"],["/tags/白毛/index.html","b50a677b9a3f6e5e427f9524d085cd43"],["/tags/短篇小说/index.html","5f91ba6c72314c6274a528963afa6f50"],["/tags/神话/index.html","00a7dfa6e5e8d1368caf2c353322784e"],["/tags/离散数学/index.html","0a0d6c290fe8fac1d31a2db1c8943699"],["/tags/种田流/index.html","942dd3b0c51600cc14306bdc68bc9387"],["/tags/空洞骑士/index.html","513f7234145ab32fa596941fdd619af1"],["/tags/童年/index.html","be48b090d154dcab8127b99d739b09c8"],["/tags/童话/index.html","bce754f71017e7058a8acfed89341e6a"],["/tags/第九艺术/index.html","2bebd12650e8dd99ecc6b59badaad4cf"],["/tags/策略游戏/index.html","8048867d014b61a2df3ad1771282dd6f"],["/tags/简奥斯汀/index.html","f74b8d75433e57e2c8fb5e923696340e"],["/tags/紫罗兰永恒花园/index.html","e7357e50de241c3dd30b89ec1a39a748"],["/tags/纯爱/index.html","f75a6cfb4204f72406cd5b1cf9f580b7"],["/tags/纵使手残仍大爱/index.html","59e64dac02458fc5d15dc4546cdafbc5"],["/tags/线性代数/index.html","dc75e07ddac2f0ecebfc5f4e794c0c35"],["/tags/编码/index.html","b354568255e359cb2e406a595f66dbc0"],["/tags/致郁/index.html","40363c92f08d7cdb38c8bd62cd323cad"],["/tags/苏联/index.html","172495b56696de4766e95de4c0e33854"],["/tags/苏轼/index.html","21a980fa403d874822fc1e135f2ae5e9"],["/tags/英雄/index.html","52e800953321232e9fadd679206e5765"],["/tags/计算机科学/index.html","59ae701af286cfb68bf66b374a1db7fc"],["/tags/计算机系统/index.html","89d90709380cd87d9ed5ab779a8c4ecb"],["/tags/计算机网络/index.html","d3f506d9362ddda56101a35d0e1f6095"],["/tags/词中之龙/index.html","acb29b9952d01b65bde972fc357042b8"],["/tags/诗仙/index.html","7939f797bf5a4bbb6b05dad3e9c6ecd3"],["/tags/诗佛/index.html","cae24bfd8ff63aab5a05699223594649"],["/tags/诗圣/index.html","f61d51c7a407472c7a65eba5a629da98"],["/tags/诗词/index.html","268072e22e26ecfc2c185472c8ab44eb"],["/tags/诗鬼/index.html","dfa3cae6ce6e9da02a15c070a775fcaa"],["/tags/读书/index.html","e99d3f0d0b3bdf7f23ad39366e7be796"],["/tags/豪放/index.html","e6f303ca8cd22ad287e02e836c8fc336"],["/tags/赫尔辛基大学/index.html","664e4c9d80bced9b5c7c3396154b8439"],["/tags/跳跃/index.html","115fc2305fdb78798a14a8152739772f"],["/tags/辛弃疾/index.html","b303ec1fe0eb2188927cd983fc104a5c"],["/tags/运动/index.html","3f6bd09f3c67a9447ab4ed99c4971663"],["/tags/钉宫/index.html","18d2c325d9b7975828d288cb127773c5"],["/tags/银河战士恶魔城/index.html","a2ca084a50be3d1772881e8cd0d276ba"],["/tags/陆游/index.html","71637e10c7f9e2c27927e17640c11950"],["/tags/零之使魔/index.html","30ea0688bfbe9f18b54c7ff44c577ca7"],["/tags/霍比特人/index.html","7d4f76ca2a70b96b202f55eb6767d6d3"],["/tags/飞屋环游记/index.html","f2f94f5ec2cf88d0a3d75f607095ecfd"],["/tags/魔戒/index.html","24cfddd0986ba6f8faf0b484d953a1e6"],["/tags/魔法少女小圆/index.html","11bc851081155d993b342dd77454372e"],["/tags/鲁迅/index.html","a7750222b08bc7a5ebc739d9a2d373c6"]];
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
