/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","65dc9773827ff35a1f79bfb09b269490"],["/about/index.html","54c2ade9107880677e7c6dda3815669c"],["/anime/index.html","74a8749c4dddeb21fc370ae04441d8dd"],["/archives/2022/11/index.html","4c6db57466f6ca43d222b8e55d389401"],["/archives/2022/12/index.html","3ea78c94b921224bff423d2aeb650038"],["/archives/2022/index.html","281c8184321fbf48c1c1d9a4545e38d6"],["/archives/2022/page/2/index.html","01f78b8990c0c3a73920d931c6a70696"],["/archives/2023/01/index.html","f071b5636e4ccf9fd948cc025a1adf3d"],["/archives/2023/02/index.html","f33490837d1d0bc7fc05cb8cd570e411"],["/archives/2023/03/index.html","c9d036a869fc722daa703986556f1ee5"],["/archives/2023/04/index.html","58565eaee752d292c9a764e1debb60d4"],["/archives/2023/04/page/2/index.html","ac95b863118d3ab92eb3f7299d6ae37d"],["/archives/2023/04/page/3/index.html","1dfe47b314f3dd2c8dd710c3c8fb19f9"],["/archives/2023/05/index.html","4fefe96e5be11e8f4c417ed400657f55"],["/archives/2023/05/page/2/index.html","a47007f9d2d6bf0b5c698eb7216e139d"],["/archives/2023/06/index.html","756bbcebd6d5e893f06e640a6a364be7"],["/archives/2023/08/index.html","50a3a1e6c4f01ba413b4d36198269902"],["/archives/2023/09/index.html","f7b1ed743b2ec6d4bc6ba59872e4e8d0"],["/archives/2023/09/page/2/index.html","59248abec9e12e87327d81f24af1efcc"],["/archives/2023/10/index.html","a7e991314808951e5a509a05141dcd27"],["/archives/2023/11/index.html","824e51141ab2e5b7b20d2964b5c65b00"],["/archives/2023/12/index.html","2877f77d120a0a4c12e3895a37e97730"],["/archives/2023/index.html","69c1039a41d4396c1c9feb418bb23d58"],["/archives/2023/page/2/index.html","dc49b3a5f0371026780c4840b1ab15db"],["/archives/2023/page/3/index.html","dc85f9ee37d708d687a2992e5e48384c"],["/archives/2023/page/4/index.html","4e43461fd0381d627b79d84e4b2b9843"],["/archives/2023/page/5/index.html","7b2bdb6968db7ffcb4bac14eeaecaaa9"],["/archives/2023/page/6/index.html","8d3a4b5eb1524bb130bbb5efead4c2e6"],["/archives/2023/page/7/index.html","f4ac311a7adf06c11003a94d340d0583"],["/archives/2023/page/8/index.html","cf4bc629e6751b1afe1d25e81c2230b2"],["/archives/2023/page/9/index.html","9d9190106d957f1efee31d2b264ddfb6"],["/archives/index.html","a642d4d799efababe57450b7d00794ec"],["/archives/page/10/index.html","10c12dc0b4a7c0edc4bd5524d16efc86"],["/archives/page/2/index.html","0398515e8d676f0905e08c1a7660c41f"],["/archives/page/3/index.html","9ceb7d0e0f4b0a99f5d5efce9c0a777c"],["/archives/page/4/index.html","def1104c377e2df1d817d4814094596c"],["/archives/page/5/index.html","cc0fbeb9fc30c1fbb4727c8220153be7"],["/archives/page/6/index.html","637f95429936f22ccd8811d18578e05c"],["/archives/page/7/index.html","7809724318495b2add0befe37b31b26a"],["/archives/page/8/index.html","251a7cea7977825aee5cf970cd798f09"],["/archives/page/9/index.html","b5f2ff0899aa1a4fafa9afb3ac57b595"],["/categories/ACG杂谈/index.html","40411eba5c8b5b0e19cc4f8de54e6878"],["/categories/ACG杂谈/page/2/index.html","11a20275a5a140613af1b5c9c267eac5"],["/categories/ACG杂谈/page/3/index.html","3ed4cf60705561183a5a6a9f21541801"],["/categories/index.html","71f2bb17a8f110dfd675e061857f9ad9"],["/categories/学习笔记/index.html","9be4b01d3d6a634401289c4306ffeaac"],["/categories/学习笔记/page/2/index.html","c8e11c7e77f6d38566bd505e20cfc454"],["/categories/学习笔记/page/3/index.html","e4e87aba859d171e8ffe4bbf27a8a0c0"],["/categories/工具/index.html","7ff34bf82f9ac47665822889b86ed00c"],["/categories/工具/page/2/index.html","2978f6d6dc94cfa36397ac0b2ab47b82"],["/categories/游戏人生/index.html","5ff0550721e2667af2cba5b71d80dc1f"],["/categories/游戏人生/page/2/index.html","f13cdd151c0c750f591556ea6b0db5c3"],["/categories/读书笔记/index.html","e6f6ff45af608aad728b12274a000042"],["/categories/读书笔记/page/2/index.html","64b9519d1d286772189cb071efbf1a58"],["/categories/闲言碎语/index.html","0c76d2cf41983b68a1ab0c9f6e2c8d76"],["/census/index.html","d5680b08dfca6f0b07b3976e5988aa96"],["/charts/index.html","49bb01a7bf96ac998f2758edd045b9bd"],["/comments/index.html","18c2ccb49a5a96dc9f2cc89c07da193e"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","6f6f93cf71946997c122c2e368955310"],["/gallery/index.html","6a3ccff4bb27b7abe9d516257a5abad7"],["/gallery/wallpaper/index.html","29748883755230c2fe92be0d7d13cab3"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fbb1b62b4adec015cffd0341fc16c1d9"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","c2346e64555e69cf31a7f3d379ca70de"],["/page/2/index.html","de11e54a81bd14b0f679bdb8a87fe668"],["/page/3/index.html","7f3df4a7bac7515eda15033b62537219"],["/page/4/index.html","fe6a90a3c4cbad0d9bfc128a6813e1b0"],["/page/5/index.html","e89ba0e60203d8610c1f08f28c299605"],["/page/6/index.html","40d4305c9cb4f329ca57b8c674be27ab"],["/page/7/index.html","3d304d939f1e1f2cd2b8b07f29a86066"],["/page/8/index.html","9df18845b7fb59a9b2859e46c791a757"],["/posts/106331b4.html","58853a3890b3ec3d4a680a56ba38a6c9"],["/posts/1185a02e.html","b895fd1917f4772d2ab0b614399be8d7"],["/posts/12e06b11.html","c8fffd1902d933bfa550dae922727977"],["/posts/167c7c45.html","9cf0c57262ca9d1408fb9317e84a6f5f"],["/posts/1743dad6.html","cc7d38045497d3dd40edffb4cf8a30f0"],["/posts/175a8e1.html","5acb7b3d50f2fd0a8d0e7867225e4150"],["/posts/1be398e4.html","2cab123fd23e79f348db1870ce661c9b"],["/posts/1c5a0321.html","b8bc35c3cfb6a5967905adfeee355526"],["/posts/1c5b1e9c.html","0215bfc417d9930943c37b058261b0f1"],["/posts/1ec7973e.html","d512a5d7ad2ed6849488848dc04d47ba"],["/posts/1fb82448.html","56e93e043eb2b5d334348c7f989f6649"],["/posts/21f18fd2.html","f007ed63e3d7f58ea1f742bd0a822a7c"],["/posts/29c507fa.html","028cd0ccd1dbc47cc93ac54e8a60526a"],["/posts/2f34eb00.html","75ba72c4ec3985e87debad00c8162bf7"],["/posts/2f57a694.html","6c5480d88a9aab205492c9ecde88164b"],["/posts/374b54d5.html","4fb7b3f78b0612ab6c9cd70e1938f1ff"],["/posts/3871b764.html","8130062e7020a474001a2c9ce7a3f0a4"],["/posts/3b308caa.html","32cc2fd281122d8590122079dda5cbbc"],["/posts/3c3cdb74.html","da72dee7b8890d954edda395e87bdcd6"],["/posts/41f65cde.html","29aff4522faceba0d0272d8d40c35380"],["/posts/4208fd6c.html","35da1abfbf56cf418d9d7b3c18ae3e60"],["/posts/4392373e.html","1cf4c67f6a89b63e7f5256b548405ffc"],["/posts/440ed920.html","8089859389eef6fdc00ca71d6938e126"],["/posts/4d2b51ac.html","a253efc99ca73ecac6838086aece3dff"],["/posts/4db1a52a.html","61516d9df780fcba09aa01e8748e2976"],["/posts/503ae89.html","3d95fba7b55d11558023f3485532d5b9"],["/posts/518e2799.html","4a3956f2046a4a6ff2b5836135455a31"],["/posts/535fd087.html","eac9a70b7944cbe6211734389e7fb697"],["/posts/5923cba3.html","b7bcc6eb9d57cecc05c9d8f9cfbf553f"],["/posts/5c1bb6b8.html","9cf9d7061c464d850367e93e72dd3ef1"],["/posts/5dc45f0c.html","56db8a270849021224007e68b8f2d22f"],["/posts/5f2caa2c.html","9c09a31da9ae240258a98c62daeafeac"],["/posts/616be7b6.html","2b1270a5bc4eb24f61f62e6f3dc94e9c"],["/posts/62a1ec0c.html","0d729fa09fa97568b1a2b9e810e01cb6"],["/posts/69fb361e.html","aa75c20c9c498a9e6f5ec57fedcdaedf"],["/posts/6a8518ce.html","e788de302e54423a2c4c8a4f00829c33"],["/posts/70685119.html","2dccfffb02f85eea786e52db70e3d337"],["/posts/743db4aa.html","ce4f7750ac34496e7642af9f557f9ee6"],["/posts/7b67faab.html","620a18e62322eb64d66dcfe909298ef0"],["/posts/7b76be01.html","993f2b5565e6c374f9f71a8ecbc76a8e"],["/posts/7bff939e.html","33f81eaeaafa3efeb6cdf862fae2d948"],["/posts/7cc4ca07.html","34fa26bca2bb77a1916332c624942d45"],["/posts/7d257210.html","5b2ca5e6219bc00fccc6496a29042497"],["/posts/7e6a5c94.html","3c2a70b2fd99cd40c0cd30cef53a9fb2"],["/posts/7ea0cbe4.html","d21f684e5ec3abc3fecbf35596e366c1"],["/posts/7f382da2.html","9da47226a133b717a00a3c976ebad0d8"],["/posts/7f8d32f4.html","a236fc47da0b3561f8598a645c8d11d5"],["/posts/8207aa48.html","2f2a8a369bc8a1e200339c1430b4ee3e"],["/posts/836ea9bd.html","7f5988e82172c03be6130d1b24f3ed90"],["/posts/84cae757.html","b0ec2eb8f92d7183fac0e349842b8954"],["/posts/88200036.html","b9d35370560679c4d698a05ad0d2b8fb"],["/posts/922fb64d.html","c69f24bf2bb4f88f1c7dc652344d5110"],["/posts/98332b29.html","319b8b122e16304d8a3c3cd07b28436f"],["/posts/9a1a736f.html","ad3d7e8e57a94a5fe9365f4713ed5a59"],["/posts/9addd0bb.html","645de445029cf5ef0def4c8d973d882f"],["/posts/9b44950b.html","98f668305cbf18c9eaf6d5ba2cfcbe01"],["/posts/9ca149ab.html","b4805f0074c13956fe16f1d9bb22d842"],["/posts/9e4446bf.html","5042884afe87983f9a7d924341fd2099"],["/posts/a0271e58.html","ee20fdb55808b42e7323593e404283c3"],["/posts/a13c1dba.html","b0d30d47a283e7fd758a4126d155a60b"],["/posts/a1f2a4d4.html","0a9722cfac0e03c3865d92cd63dd4472"],["/posts/a5f300de.html","8b7a9abb21ed3f6d2aa865656375388c"],["/posts/a98766fe.html","a718e3ad66a56cdd26fcaf4a20603aca"],["/posts/a9f63847.html","f78281c091d1c480d804debce20673d7"],["/posts/ad31055e.html","eb3eaa1e8e30456a157545f8b4b09b4f"],["/posts/adcd6e20.html","1744405a8a1401a2a6a497155d826ebf"],["/posts/b0fa4c58.html","abed2d194d95056e4dd8cb62e1a4f092"],["/posts/b1168675.html","57af443902b453ef93e7301c04e83e5d"],["/posts/b291b1dc.html","46a2870dc982c59cc78e95936cb2bcad"],["/posts/b2feeab7.html","ce4fc46e99076f0aabcc7b3f91a01827"],["/posts/b6d66f1b.html","14d015054bebb3b0ab2736959bcd6811"],["/posts/b7525d11.html","9e6f0a61ae26e489312a84c213271397"],["/posts/bb154b63.html","59e62abb30d37ddb30489c67979e9f08"],["/posts/cc86a40d.html","d7d9f3ba1a2b8a8ba44925e6d520ffa9"],["/posts/d36531a7.html","e0e84814e01a17c7ec00abf5076afb94"],["/posts/d442e51a.html","ba08c148a045aff9afd0bd1c827a442b"],["/posts/d7fdf01f.html","1d155bc77c99a71aeea80539079f972e"],["/posts/d839b0e.html","1a4fa55e0e15d12f695782c7d82cc71e"],["/posts/dcdf88c8.html","a8289a7a158460f26f2207ff31c7f0f8"],["/posts/dd378ae0.html","45736a83d033c4ebbccb9b3ffadc3c21"],["/posts/e15be301.html","83f3105d75cf41c12c3242a68e2448c7"],["/posts/e2e4b4ce.html","a924d0c250bdf923bdd8010dcd913b0f"],["/posts/e35ef5bd.html","d50f14959dde2da21f77a08cd11b7433"],["/posts/e462ba83.html","2fa8137fc31d1235a0a1b7b5cbd8ad51"],["/posts/e53204e6.html","476726c8d0b04c70a2b221e9e78ad36d"],["/posts/e5cd9bbd.html","6c07a3f51615e52de1b4bffb3f804caf"],["/posts/e7a99a5e.html","98989b731634c3bfc6346c01c60924b5"],["/posts/e9318100.html","4db8f32bb05ab82a891c2b5fc24bad40"],["/posts/ed52e6a0.html","a36267331787e83add4648975c4c40ab"],["/posts/ee0ac59a.html","501f1bd6f3344d77dca32b36a9b01077"],["/posts/f09c1ee5.html","2034865a07c5258e608bc9d5049022a6"],["/posts/f1252f66.html","2d6e2ff3a17d98fac8799b63131b460c"],["/posts/f4af26a9.html","ea1d91e17dfc5d834e9e20510153149d"],["/posts/fa3cd62d.html","90b2f8dc90c11325a8d249c2013f7d92"],["/posts/fb3794ef.html","91aaffa206da71417d6e5980c218552a"],["/posts/ffdfd6d4.html","cbe337a0be1da9aa738a0df4edca1d84"],["/private/index.html","6ee2cb152171ff0b0d0df46fe3b47cd8"],["/random/index.html","86774926aeb9f8334d1ba71ec60c8185"],["/sw-register.js","108cf6f9e72d71b39e03b5dcd7e79b21"],["/tags/ACG/index.html","bae81b0283abc95e53705d12b03f5d73"],["/tags/AIR/index.html","bd1ea9f9c6ccf8b338f233ceaf458fe9"],["/tags/AliceSoft/index.html","812553e55db263f08a45b24a8b0bc66b"],["/tags/Butterfly/index.html","990b3ba1877d8409aba3a251f493dd18"],["/tags/C/index.html","f89adb5d8dc2ce0003c765a2a644ffdf"],["/tags/CLI/index.html","ae2db6a0af37ddeb61bafa718c5b8657"],["/tags/CMU/index.html","bb1782312b694cdfd65060a4073b2085"],["/tags/Crash-Course/index.html","c72776283759562420712630f622ffb0"],["/tags/ETH-Zurich/index.html","2e78c97dd717e59f0fe1bd40c41ef741"],["/tags/Eushully/index.html","f242bb7b57e861b9fece5e325bb892da"],["/tags/Everlasting-Summer/index.html","ea864bfa76ad0055cf1415d14ca172e5"],["/tags/GDB/index.html","8bcb7a641bcbac66fc20a1dec4f13df9"],["/tags/GRIS/index.html","26affb240bc2674abec9aff5f8fbd146"],["/tags/GUI/index.html","12f41f64fc1b5c579d104706b8870b3e"],["/tags/Git/index.html","509311ccbffd142d51ee39b4ed39c29b"],["/tags/HTML/index.html","c340167ca09d8d0a2d3ee67b5d32baad"],["/tags/Haskell/index.html","c1d90b2f20dfd317ac08170b93298539"],["/tags/Java/index.html","8fad1d9ff3891b0450821417ccde355b"],["/tags/LaTeX/index.html","bcf2b52a90a608bf11b63587da8558ce"],["/tags/MIT/index.html","283a6ce67153a7aef71b06a27488e633"],["/tags/Markdown/index.html","06dc516efa27d430031cc7c35e802e6c"],["/tags/Mermaid/index.html","3f59f9f10b11ceaead9050d5f0125672"],["/tags/NTR/index.html","0767d118c8eed7ecfa44352c3ddc5a1b"],["/tags/Pixar/index.html","c4409f2ac1c13b58eef676edbc956050"],["/tags/Princeton/index.html","91f99a15dbfbcb14d10a778a0724d78d"],["/tags/Python/index.html","8417a9561e4aaa5adda4890237884824"],["/tags/Qt/index.html","99c5e41c5694f253f96794f4695ac22a"],["/tags/R18/index.html","69f12d3b78dfcce33ce9268df4a9cea9"],["/tags/RISC-V/index.html","4ea97dac0f2862ab807de4d62e164637"],["/tags/Scheme/index.html","5d897b70bd11b6d66d7298d8e87c3ec8"],["/tags/Shell/index.html","e97a68f598d840b685a1604c1d8fee8e"],["/tags/Stanford/index.html","33dab69082599f2c3c8a32a9b108ae9d"],["/tags/UC-Berkeley/index.html","ce4ae2a82facb5a35e0756d812221d62"],["/tags/University-of-Helsinki/index.html","1b0943dfea7d7ed3c23be9cccc792d1f"],["/tags/debug/index.html","9802315863ebe6b21b98983e3e670fe8"],["/tags/index.html","64987d8aadf7a7236ea3f383467340fd"],["/tags/key/index.html","0b3cdbe808cf04d412a426e9f4f6c751"],["/tags/web/index.html","c0d0bb4a1b47d8a72fc7cbbc216912f5"],["/tags/三国演义/index.html","dafc410825d9de34efeead0d916ba036"],["/tags/丧尸/index.html","f4c90a5ce7e3e07a941fd2bd1ac57733"],["/tags/京都动画/index.html","c8197fabbab5759902b6bc3d2071882e"],["/tags/京阿尼/index.html","1b534b4f38fdabfd7a733369341daf81"],["/tags/体系结构/index.html","93200700305f724c993302c7f292ee6e"],["/tags/信号与系统/index.html","2b1d1c2dec22c2f8f7009a02bb7624e5"],["/tags/信息论/index.html","066c432e74c4b8e2fa8f4c7ac335423a"],["/tags/傲慢与偏见/index.html","6e84eef872aaaf7592147ce84f0faa4c"],["/tags/元稹/index.html","6709fb2e5c9bcb9d338d7bcef7bb256b"],["/tags/公路片/index.html","de948b0a350a6b872768b9ce11b11200"],["/tags/兰斯/index.html","fe7062faecbec9bc2b308417bb9bd99e"],["/tags/关于我转生变成史莱姆这档事/index.html","c1c5ee6a09d313d80b6de7c5ec3045a4"],["/tags/冒险/index.html","6d0e3e7b2414efaafa91e8647f3f2615"],["/tags/函数式编程/index.html","879f610efb258dfe4255783abd21fac2"],["/tags/刺客信条/index.html","acfb7af34da757be4c1da8b381827031"],["/tags/卖肉/index.html","ac204b1ea093965d3c0b038fd4115a45"],["/tags/博客/index.html","29895d985e71c9488d88082182f7c2a6"],["/tags/去月球/index.html","6af472e113e52e5c04ed79a235b92610"],["/tags/可汗学院/index.html","c012078b11b2f463d34d80501c169eae"],["/tags/史诗/index.html","e3a6b93fb028af3c50433eeae3a32ca5"],["/tags/吉卜力工作室/index.html","cbd9eedde6d8d75ba52f2e8fca46d909"],["/tags/名侦探柯南/index.html","eb88080801ee9f4f67efdc367694f847"],["/tags/后宫/index.html","8d6bb8ff54f4506c19c0551f6048d793"],["/tags/咒术回战/index.html","7644ccf8b4c31b8ffc093455e7039668"],["/tags/哆啦A梦/index.html","757f86023b3aad6d5d04184557c35521"],["/tags/哈利波特/index.html","efc6648851a47dafdebf1dd98a3a1f9d"],["/tags/喜剧/index.html","d0bda61bd24a73a1aa74939f1d22c288"],["/tags/喜羊羊与灰太狼/index.html","62fe026b81c4955d63be7745e5c28980"],["/tags/四大名著/index.html","5e2a62ff372b6fa90c9b57cb259c800f"],["/tags/图表/index.html","da8a5fddee63f46b00539454c5a0ced6"],["/tags/复变函数/index.html","f1255a6410bb5adeacf1256af2ccaf80"],["/tags/孔乙己/index.html","ec6cbf88f301bcf83033d9b86f28abf5"],["/tags/字符串/index.html","ef2127665ae5e492933bc4a2943f894e"],["/tags/学园默示录/index.html","a782cf8433c4d64ff3b51c3280b97427"],["/tags/寻找天堂/index.html","b786a24eaf52263d16a5d4ee3e493eb1"],["/tags/希伯来大学/index.html","53ddd5430c2d82b0cd46f30da44f2aa9"],["/tags/异世界/index.html","4ae5ba66a6e1fb3c6dae7e9848ccec70"],["/tags/微分方程/index.html","bcd9b26a9b625b3f47f6947532dfc5c8"],["/tags/微积分/index.html","e5f70fc202ffaafc883d7dfd1a9992f6"],["/tags/恋爱/index.html","b1fdc83e12a85961014000a0318982cb"],["/tags/情感/index.html","08f5218d09311e3e2b92ddaab89bb1b8"],["/tags/成为简奥斯汀/index.html","89878daae2619eec1d82ac29b4834d7d"],["/tags/指环王/index.html","eb205187d2ab3c88498e55a483d7fc8a"],["/tags/搞笑/index.html","11c6ad4832f985ea22dad6edb8cd9de3"],["/tags/教育/index.html","61688c7f576a492ed86aa09110f7f369"],["/tags/数据科学/index.html","5d4ee2ba19245eae3fe102b07a08112c"],["/tags/数据结构/index.html","8fd27e354d81b80ee05efc497d627a51"],["/tags/数据结构与算法/index.html","45e3fca911eb61e5297e80a6cacaa98e"],["/tags/文字排版/index.html","b83404f8b6e88f679d70803a811c2e57"],["/tags/文明VI/index.html","ffee9eeeee0f743530ce73e5887978c9"],["/tags/旅行/index.html","35f2750bd4c73bf74ce2880f4f25d2f7"],["/tags/无彩限的怪灵世界/index.html","e043f9711663702b8adfe12cc14a674d"],["/tags/时间刺客/index.html","41366d163ee348371ae02af79e70c86c"],["/tags/有生之年/index.html","a569001cf13fe374c7c0b58d74c86a55"],["/tags/李商隐/index.html","4397607d0b1793ea20e932f7bcbe952a"],["/tags/李白/index.html","9f5b261c1ce2508d63641565e474f7b3"],["/tags/李贺/index.html","325d529fc187f01be0f4ff2a6246df8f"],["/tags/杜甫/index.html","ef84efdd827123801d30eb323967a4f8"],["/tags/校园/index.html","122996b8ea5a44b8a2eb08f6f742aa39"],["/tags/概率论/index.html","c0b2c55f1a2b213f21cc198b36386f70"],["/tags/正则表达式/index.html","b28045f968eb4c631cef2496ce646ef3"],["/tags/死亡/index.html","89dbef1634f98028ed4b7d0e1558462d"],["/tags/水仙/index.html","f1195d61b3cbe10f6240e2e256b2f97c"],["/tags/治愈/index.html","fd25507f2f685db5398c65aca967399c"],["/tags/烂尾/index.html","b1577d1547da11e260a371d87e9109bc"],["/tags/热血/index.html","2dfa2c01d983c4bcde0b3e8c67e0334d"],["/tags/爱国/index.html","4dbfa03f01c2bc89eb2ff67aff4804d6"],["/tags/版本管理/index.html","6b0714db2e388df78d410bc99b33fb41"],["/tags/玉子市场/index.html","db8dd43a6a89c72ec56d37f9a14f8b11"],["/tags/玉子爱情故事/index.html","a339e414d9d8e18533baccb075397a56"],["/tags/王维/index.html","e0d490deb66becc4fb6a4c629051a452"],["/tags/现实/index.html","a04169609ff7a7b00eb37dbaf33b4de8"],["/tags/甘城光辉游乐园/index.html","5f1766fcb29678bbb77d0499d6df6f02"],["/tags/白居易/index.html","ab83884e89a4c72728c3c486d62c0b7f"],["/tags/白毛/index.html","d2263295e117a934de3c5ea96c3350a0"],["/tags/短篇小说/index.html","127e799cee5e236d5d4d2938905f9af8"],["/tags/神话/index.html","7ab7a7b016303fbc00aa4f3bd4be17c4"],["/tags/离散数学/index.html","cb302b97e2ff4dfef74108b130a6bd54"],["/tags/种田流/index.html","ea5a4bfb0741e9b7f609ef58f1c18070"],["/tags/空洞骑士/index.html","c81c6cd2b252edf32012bac771719e34"],["/tags/童年/index.html","0d2a376f0b92dca398b60b9ac75bdb50"],["/tags/童话/index.html","4412725db4e2163cd270d324203e87ee"],["/tags/第九艺术/index.html","11db91ca757b177585b538fbe0abb196"],["/tags/策略游戏/index.html","d13d9b7b4657faa60d65a3d1c1aada52"],["/tags/简奥斯汀/index.html","ff984be45e4a4c9c5be4aa7421b1c93c"],["/tags/紫罗兰永恒花园/index.html","39d7fa8ee7e103d6c7d4905dc9f35baa"],["/tags/纯爱/index.html","92b86f66f1e686e3efdb56a471bfb8a5"],["/tags/纵使手残仍大爱/index.html","a5bfcab69d0bf8bc8d3fa91f50459530"],["/tags/线性代数/index.html","b36e95d711f33c3de5f3dff37e080f4e"],["/tags/编码/index.html","6bb21e08a11ff3fc9e7274aca1ef3b0f"],["/tags/致郁/index.html","1792e32fefaed6c9848aad46c8ca9cad"],["/tags/苏联/index.html","05bcf3a5d524063c1b7e701aad119cb2"],["/tags/苏轼/index.html","54754dd4f8b9002041ac1c78d93f964c"],["/tags/英雄/index.html","4dd4ee9c744a59a4c2e348595cd6fda7"],["/tags/计算机科学/index.html","d609917dcd1fb0ade201de8c291de48c"],["/tags/计算机系统/index.html","c88887a290af2cfdb5cfc084594a75cb"],["/tags/词中之龙/index.html","a0906a6387624a9a44c96e74c7adce55"],["/tags/诗仙/index.html","fb3bed34d439f289c0e7fd0d2db9eb7c"],["/tags/诗佛/index.html","fd7b7d84e4e4339aff3b4ec66c1f21fc"],["/tags/诗圣/index.html","b0300f07d3944908930465716af5181c"],["/tags/诗词/index.html","1dc9a5fe36311adbc53ce763e92fd53d"],["/tags/诗鬼/index.html","e045ca2129d98aa8930a9d954f2b44fe"],["/tags/读书/index.html","60dc02418bb42c7c36a2878ec13645e3"],["/tags/豪放/index.html","fcab9ab51000acb3b406b2e670d6ab6c"],["/tags/跳跃/index.html","d020aa6b7862f21a32c6ba3bdfe531bb"],["/tags/辛弃疾/index.html","60a6fb278da5fe1709378094a2bbf8d5"],["/tags/运动/index.html","37076591081721306af7f3ee887e745a"],["/tags/钉宫/index.html","9e482fd87699d56d9e14cc546c03bb8f"],["/tags/银河战士恶魔城/index.html","29facc20b4b12a59175dc25810f88d78"],["/tags/陆游/index.html","2c04c1168b7de3c5515672c183889993"],["/tags/零之使魔/index.html","2cb32a1ac8240cce7ee3b9f6bc97a9e4"],["/tags/霍比特人/index.html","51a8dbabe223c8f8a02f97874205ff02"],["/tags/飞屋环游记/index.html","a2602b4213b26fe17012e7fc54586803"],["/tags/魔戒/index.html","a1aaa02e6be5b3b4a2fe6bbf84427cb0"],["/tags/魔法少女小圆/index.html","cd871c720c2cd3ddae3758f39b9f58ee"],["/tags/鲁迅/index.html","d288cb1b0d5db5f6aabec96e00e79dcf"]];
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
