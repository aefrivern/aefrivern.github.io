/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4362b7527fcf3e8047d4381fd60bff07"],["/about/index.html","eea92c1cf9c21d38bab43955a0e6ff09"],["/anime/index.html","53765b108f7b7c3167a74519aaff66a4"],["/archives/2022/11/index.html","02a52f27da92d9ef970d5a55ddd9a8af"],["/archives/2022/12/index.html","f385bf9f3d35b3475c4dabec06a9992a"],["/archives/2022/index.html","0476d93af7734c26a211a719a9797bae"],["/archives/2022/page/2/index.html","a5b9c13319f1ec0d9a5580742d4515eb"],["/archives/2023/01/index.html","c0def2e8fe8a137b369d5b3d39bc5995"],["/archives/2023/02/index.html","819422c6cb1283adee258cba18bf0327"],["/archives/2023/03/index.html","6d561099670ffae3aecf6179fcce54c2"],["/archives/2023/04/index.html","17d9e1b3e5aa53e7e1f15a3620326b87"],["/archives/2023/04/page/2/index.html","d404d12412aa95ec9dace87ad7a5772a"],["/archives/2023/04/page/3/index.html","3b61c7ae719530c641f214d4d8f12c5b"],["/archives/2023/05/index.html","23b2cd4d3374ca3fbf2eb06057fa4854"],["/archives/2023/05/page/2/index.html","f932c19c55b2dadeaaf89eb82a847d05"],["/archives/2023/06/index.html","42deb4360baca365c78ec107c855dd89"],["/archives/2023/08/index.html","f9c89c36be604597e6cdda7ef1571581"],["/archives/2023/09/index.html","61ae57baf026bacd9be081c0f09de299"],["/archives/2023/index.html","27610b6aac3722c6a1cdfb3464b566fd"],["/archives/2023/page/2/index.html","8015f3d08e9608c036269194fcd454c9"],["/archives/2023/page/3/index.html","6481893a8f4693857b562b3a22ae2898"],["/archives/2023/page/4/index.html","eb7b31e3e5a68069e6fc8afffbc4624c"],["/archives/2023/page/5/index.html","59202904476a27f396f378eaa95c2d9b"],["/archives/2023/page/6/index.html","3c3c9ead23df2f3ed4e0a31c9957fb97"],["/archives/index.html","db0ebb87a068515688e8f7fa7ef65360"],["/archives/page/2/index.html","1b7c2fc4cc6d7b4ccfe9466418853c53"],["/archives/page/3/index.html","ebca71505e69c6254cd64a1fc020c42c"],["/archives/page/4/index.html","32153f21f539174a0b35c6ad30dd2a42"],["/archives/page/5/index.html","5681b813cdb3d89a6f3dff1490e811df"],["/archives/page/6/index.html","44119d1ed26e740d700a7aac79a2a566"],["/archives/page/7/index.html","65bebe6fd1639039d99379739f158956"],["/archives/page/8/index.html","68000d835cc359215cd6da635a20c6b7"],["/categories/ACG杂谈/index.html","df802f626d42a231ec527df7d6554963"],["/categories/ACG杂谈/page/2/index.html","31b3c8ccb9f879eb5d369a2ae1ea4d99"],["/categories/index.html","8dc8ab295027cb9f157ab00d7480fc48"],["/categories/学习笔记/index.html","b929b1be322999da751da4f232808030"],["/categories/学习笔记/page/2/index.html","00568f7258b57dd1419eb0df719adb96"],["/categories/工具/index.html","1749188b8b43559ab083bb6de86d4955"],["/categories/游戏人生/index.html","336390304203a1a0be2e138fb42874df"],["/categories/读书笔记/index.html","2e7b7b786e734cf2a11f4d6c5ce712c4"],["/categories/读书笔记/page/2/index.html","69be53ca7ca060ff3dc132427b0dd318"],["/categories/闲言碎语/index.html","cb7e96276d944b2ce56e346566c722a9"],["/census/index.html","ff2c2f52b47a167423db276df42e84d8"],["/charts/index.html","d2e5b183dd671e4df3d416efeb5d9b18"],["/comments/index.html","21312b7baa25dc4118d0ba06f4d64009"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","cbcb1dbc474bf5dad0aa76e10db24d53"],["/gallery/index.html","559b84e65406f56cf69c9a34169d96b4"],["/gallery/wallpaper/index.html","9d1b4249c9381dbdf894c2363b943dc1"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5e679e1132af185b22a716474f743c94"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","469ef01e2302df673f125ff8dbf25540"],["/page/2/index.html","f395682f3f4d420a20727819e76fa449"],["/page/3/index.html","7e5031b3f295f63f29314d6ffbbbab65"],["/page/4/index.html","b0ae7f6ffc80737b540de55928a88548"],["/page/5/index.html","e7b5bcd550f485b9c3879e33904e5a74"],["/page/6/index.html","c60a8b64e9b7ae839ae1e235484eba35"],["/page/7/index.html","a4a6263855141a7570aa882f00f45ea1"],["/posts/1185a02e.html","53159e3b9585dddb4a1e4493127b24e1"],["/posts/1c5a0321.html","119d07222162d78fdc05a116d5e6fba7"],["/posts/1ec7973e.html","b95b52ff7d9a8c3e56535c5f3aa6741f"],["/posts/1fb82448.html","a69d03c7ef675bb0267d3746f17c0278"],["/posts/29c507fa.html","e737c992e252f0a5a5ab2b5aeeba0129"],["/posts/2f34eb00.html","cfcb185bbd7971197ca816aae18980d0"],["/posts/2f57a694.html","f8596edb8df2c4a8bd27515ef2d7e774"],["/posts/374b54d5.html","34e613046cdd120eae8c7db9582d45f6"],["/posts/3871b764.html","2c466897258286c64b8dc7d3558c7189"],["/posts/3b308caa.html","a01295458cbf0619c95f8ffeda0be29d"],["/posts/3c3cdb74.html","764bd6c34d89a56427cb8b892b328850"],["/posts/41f65cde.html","c28ebecb402d787f2808d0191cdf6489"],["/posts/4208fd6c.html","c0bf0ab6bd9602eb2fa652038376020b"],["/posts/4392373e.html","b5f93fd549fd0dd2b39cd0bf45a41f2d"],["/posts/440ed920.html","9a35a570246bcae19a1d63055b4bf80b"],["/posts/4d2b51ac.html","ae954e1ac3053d687f1317317d59a116"],["/posts/503ae89.html","a282ddeec248523797043974cd3d1551"],["/posts/535fd087.html","deaceace785b42c5d58ae271e021fa18"],["/posts/5923cba3.html","9b01f001c8e3079f5cdd04d0446e1c48"],["/posts/5c1bb6b8.html","790e4e6bb280113e280132ac363b8928"],["/posts/5f2caa2c.html","f8d4edb8b22ce33f405451c4c4265c36"],["/posts/616be7b6.html","6ba1c77c5186a48ebf4df07860188df4"],["/posts/62a1ec0c.html","183598c2b540b93f18341be70c731c5b"],["/posts/69fb361e.html","5e500fe7e8f3146ad25091827f2b3bc3"],["/posts/70685119.html","bd38689b6538aad4c84805f26ce43af3"],["/posts/743db4aa.html","5d273980b2ebaa1e1196242a3384d092"],["/posts/7b67faab.html","fe0e9bd92770bc5f1b27cfc6af757369"],["/posts/7b76be01.html","07595a642374e38cb0c768259211d149"],["/posts/7bff939e.html","28ccd9ad684c0e89567e4986c69cbe8f"],["/posts/7cc4ca07.html","c91dc6e9a2742abd278ef88cdcf47c0b"],["/posts/7d257210.html","b76c4fbe903d780656510debcfbdbd57"],["/posts/7ea0cbe4.html","a689049ece43217d8f65d87e8da0e2e7"],["/posts/7f382da2.html","24f635799be71d5fa7c1e4bfc6395d05"],["/posts/8207aa48.html","89f9b32d58aeed53c45918ba26ce44e8"],["/posts/84cae757.html","95b8d06797a68cd14c44f7c0861d82b1"],["/posts/88200036.html","35176a0887e1a982804d79c567008a54"],["/posts/922fb64d.html","16b6173403ef6a5435f1a0be0506e902"],["/posts/98332b29.html","f575b37839363a0b587a657d7ca1a1a1"],["/posts/9a1a736f.html","9d778f46f776e4e9425a5a185ba07153"],["/posts/9addd0bb.html","3baef5897d4fd50d973c0e4926ef0f4e"],["/posts/9b44950b.html","2d376728b7220889e70551abaf7b1551"],["/posts/9ca149ab.html","e444de1ed55e6108b653fbdb68abc93c"],["/posts/9e4446bf.html","15c8e346bdc6a30cb4589e230d7eabeb"],["/posts/a0271e58.html","9fb6d155956d913814931760141ffdf6"],["/posts/a13c1dba.html","f2217fa0cd4edcea961448877ade298e"],["/posts/a1f2a4d4.html","86c371d915591d2a1d4e38d3f7ff8942"],["/posts/a5f300de.html","c0fb4a9f88374468033c06be5e8bc1da"],["/posts/a98766fe.html","1193a26993057fd6e60ac497d28a74fc"],["/posts/a9f63847.html","f3c5e84fd1d3b52439205926de35e176"],["/posts/ad31055e.html","55f8037d80d10f0556547adad18418cd"],["/posts/adcd6e20.html","4cdefac5b08912fc2ddb4a9922ebe052"],["/posts/b0fa4c58.html","0fcb8a22c618400076bea4f26bdfb51a"],["/posts/b2feeab7.html","66eefe1c8272547d059b441736047f33"],["/posts/b7525d11.html","e07e5b4a9430baa2e42fffdd04f22464"],["/posts/bb154b63.html","1dab5644a3cb32ec10d4d46c183623f5"],["/posts/cc86a40d.html","8f9e33d5223256d2d3e421ba1ef22e3c"],["/posts/d36531a7.html","6ed5208d0b7a407e72a5753363a2cf17"],["/posts/d442e51a.html","be99b1c481c2ec2fd2fc671c123c419b"],["/posts/d7fdf01f.html","dfea4e0acff0770483f5e3c0cd4cdf68"],["/posts/dcdf88c8.html","7920c86f958029be6253a0dfa32d8e64"],["/posts/dd378ae0.html","64004917f22404051887843cdb026311"],["/posts/e15be301.html","94af0f49b98a48291aa329199a312e55"],["/posts/e2e4b4ce.html","524cccf64caaaa84aa7c5e98f964523e"],["/posts/e35ef5bd.html","7de0f8d393b5201c95bcea20b8ac4a86"],["/posts/e5cd9bbd.html","f98cf9fef64e021ccfe845f1aa1054c8"],["/posts/e7a99a5e.html","3bb7d3d7c8132d66602e51431b1cf179"],["/posts/ed52e6a0.html","d7fe557a67144ba0981fabc51e8ddbe9"],["/posts/ee0ac59a.html","bf681c643b52b087f34bd7efa67ccee2"],["/posts/f09c1ee5.html","52543d5449863e454b3ee85eb5427138"],["/posts/f4af26a9.html","dd84c6786a9fae874c39c3218be0c1da"],["/posts/fa3cd62d.html","41fbb259066fc9ef0a9e64110b7d4dcc"],["/posts/fb3794ef.html","d0306e194974d97b1ebf268b02ea6873"],["/posts/ffdfd6d4.html","4d444dd610f1b2b2cbc6fd01c1f12276"],["/private/index.html","3d842482a6f90729757b8fb013d77068"],["/random/index.html","003aaab8d70186eba11eb1b029ca3cfa"],["/sw-register.js","607d170f66a7902c96d5f78dd1dde60b"],["/tags/ACG/index.html","1db834aba4628bf1a983b22e9632097c"],["/tags/AIR/index.html","f5c510a3561361141f79fc8a77fb0982"],["/tags/Butterfly/index.html","c86190c9cbe5a6916e34f654af108cfe"],["/tags/C/index.html","45c869b844a79d64c50efeeab7cbe453"],["/tags/Crash-Course/index.html","057692ac358e05f2c5c132395751e446"],["/tags/GUI/index.html","fcb24605f417af6c9cd032e222174348"],["/tags/Git/index.html","9502ccc2c865ecb7451b42591db10965"],["/tags/HTML/index.html","117afcf6e329cbe4268e742ae9b92491"],["/tags/Haskell/index.html","22242e71a505e48c264ce51d0571ee5b"],["/tags/Java/index.html","8d0ef0555d7f1aa8e17232af2a83c666"],["/tags/LaTeX/index.html","270a9d31ded5d2715642a64cefdbb862"],["/tags/MIT/index.html","5cd24609b4d36b7c08443158c7d2f4e9"],["/tags/Markdown/index.html","996a163583782783317610c97f1cb49a"],["/tags/Mermaid/index.html","710489033877d4530b3140494131b28b"],["/tags/NTR/index.html","2d7477b4b876e43a8d4e1c0e87aaa4bd"],["/tags/Pixar/index.html","8269fe50e99bc1f19851762cabef6c2f"],["/tags/Princeton/index.html","7abb104b77a9e124086afbc69aeea8de"],["/tags/Python/index.html","3ffed2338f4adb05e05fd9ec94fd418f"],["/tags/Qt/index.html","65dd37ecfe126358b880e8930b94f9e4"],["/tags/Scheme/index.html","e020a107d43a4f2b181f157beedac733"],["/tags/Stanford/index.html","e2f187cbc14ce73b9e7abe3c31c43349"],["/tags/UC-Berkeley/index.html","4909df6f6cd200d2ebb5993a16724b3f"],["/tags/University-of-Helsinki/index.html","b3cc16e935f090eaf43f903ec6f093e9"],["/tags/index.html","6234146704721378070b3ff4260ae1fd"],["/tags/三国演义/index.html","905ce90acc1e5399dbf8898fe5d64975"],["/tags/丧尸/index.html","538c532ec9e07a0b1681b09b7c6203e5"],["/tags/京阿尼/index.html","f3fc17ffab04d2346a0cef5a26eec4b8"],["/tags/体系结构/index.html","de43a06e3fd8144369ca3dd8658199b3"],["/tags/信息论/index.html","64863f0f9c2434e72b72a5f57a94cdfb"],["/tags/元稹/index.html","1280b15f635d6cfadc421301adada709"],["/tags/公路片/index.html","77315841f050a13ffeb1694665cf2ed7"],["/tags/关于我转生变成史莱姆这档事/index.html","84966ba871524691c1ee62ae28bb8f6e"],["/tags/函数式编程/index.html","be307a4f394e87174381ed393ae17216"],["/tags/刺客信条/index.html","70f051c5c65956b124435f4c9414a25e"],["/tags/卖肉/index.html","67e51e856a3ff905ccfecbdaf3d479e1"],["/tags/博客/index.html","51cd26b922883d6cc353934456b14a01"],["/tags/去月球/index.html","d1bb17da188e5fdfdec0098456c5df51"],["/tags/可汗学院/index.html","ffd329c13a0bcc4c37a7d8126434c18d"],["/tags/史诗/index.html","4422da0632de7b843651ed460e214a4a"],["/tags/吉卜力工作室/index.html","cae5ac1cd8c476709fda9c4b84279428"],["/tags/名侦探柯南/index.html","cfe00abeeeb0bddf2486a935fc9b1d1e"],["/tags/后宫/index.html","fc5ee85709e82a5053e9dc7e587dc9c5"],["/tags/咒术回战/index.html","48fbb58bc8fb57f543d4fb1744021e92"],["/tags/哆啦A梦/index.html","759f2dab7bc66a4cce5910da0dca551f"],["/tags/哈利波特/index.html","d81cd7cfbb03af886de576b02f0d6513"],["/tags/喜羊羊与灰太狼/index.html","73366960c446ab9c753f8388ce2c8d76"],["/tags/四大名著/index.html","aea822f3160fbee1169f26d817773d61"],["/tags/图表/index.html","d8e583fe49b1169fa2501e7e2aaa146d"],["/tags/复变函数/index.html","a3e9782944bc800b649e491954b7d871"],["/tags/孔乙己/index.html","04c27f05fbd79f60d6e1cf165db4efcc"],["/tags/字符串/index.html","b6635ba7f30ebae65e14b2811b25ec6c"],["/tags/学园默示录/index.html","6edc307d127bb0ab5de5d5ec4ce369c7"],["/tags/希伯来大学/index.html","c359927454b6b1be6b347fba8a6f85b3"],["/tags/异世界/index.html","6400deb5090c4facdf483f0df769656f"],["/tags/微分方程/index.html","4e25d5bce727617d0e5b6e47241f59bb"],["/tags/微积分/index.html","2a3b0295255f08cbf33766a8b5e24f51"],["/tags/情感/index.html","a38496553e851786f014b82387eff8d5"],["/tags/指环王/index.html","f79e034f8dd414a76190b9155be7b017"],["/tags/搞笑/index.html","0655b254c01c0e62f700df6956d42396"],["/tags/教育/index.html","c9a8f7695f5252d34d7151c0494c7964"],["/tags/数据结构/index.html","76517eb3549d70a4daa7c14d43606805"],["/tags/数据结构与算法/index.html","0b901985b733a5804319e74d08fbfd24"],["/tags/文字排版/index.html","7a7df02c3dc5893c6760e2d508bb8127"],["/tags/文明VI/index.html","0ee953bc47ef9f6d74108ac03064942f"],["/tags/无彩限的怪灵世界/index.html","ceeaa4b3e63583cb1012d5803ef85626"],["/tags/时间刺客/index.html","9fb2f644e343ef609117aa5d2ff647b7"],["/tags/有生之年/index.html","5d945802c48aca621b8e3fa10fd8c8e5"],["/tags/李商隐/index.html","7a58a09799fa0bbb61f5774c85d757bb"],["/tags/李白/index.html","f8f07cb9e35db5f055ca56dd6ec6dc26"],["/tags/李贺/index.html","dad56ad3638b3019f4953dca006efd0b"],["/tags/杜甫/index.html","5a3ef52cf75db32dd8c36b6c82651b20"],["/tags/概率论/index.html","ab21dff850015f995e810f867bdde6b1"],["/tags/正则表达式/index.html","358361345f43b953e822a4b06f37901f"],["/tags/治愈/index.html","f807ff33b7cf47bb8d44ec61a970dacb"],["/tags/热血/index.html","8def20dc57871415e4683b027ce6fd8b"],["/tags/爱国/index.html","944b0d2bfb1669126237290aeadce73e"],["/tags/版本管理/index.html","de50165d0d7834e37a308ce94fcaaf85"],["/tags/玉子市场/index.html","b169d0146443440ddb06baa13a833d96"],["/tags/玉子爱情故事/index.html","42baac6fc3704b803459df58a9496942"],["/tags/王维/index.html","4f526567079a7bc068990ba27b13e055"],["/tags/现实/index.html","8cf696686a91b662bf882d40e7aa4e6c"],["/tags/甘城光辉游乐园/index.html","d1b2e6028e8212fc589a915e74c45fd6"],["/tags/白居易/index.html","eafa371718793196c679752cc2a7ebb7"],["/tags/白毛/index.html","368050e4951552db38d74900dee4d9a9"],["/tags/短篇小说/index.html","76653740c23b981b33ee4efc089d34a2"],["/tags/离散数学/index.html","268c2ef42b6f8b7637515e2a37582c64"],["/tags/种田流/index.html","1f045e878f0346d054e167c8c11c7b6f"],["/tags/童年/index.html","b81b4ab9cf1cac840c3b9fc30459999e"],["/tags/童话/index.html","f6562360870d1a4e33ac7829944a6025"],["/tags/策略游戏/index.html","6a4633960003b66ef9e817ae2982d5f6"],["/tags/紫罗兰永恒花园/index.html","24b2879a23e98780c501b4887df294d9"],["/tags/纯爱/index.html","171fd2f7de49607f07befd467932efc4"],["/tags/线性代数/index.html","be377e76f1f7d11872b44c4fd450e195"],["/tags/致郁/index.html","131de0e3df6086b0cdd8cc7d23fecf94"],["/tags/苏轼/index.html","69c7c1b2e1242e06d212a32c5efd6268"],["/tags/英雄/index.html","5225d55fb4729876d4a4b7823a5bb4d0"],["/tags/计算机科学/index.html","90dc53240662e864b42156eb94725cbb"],["/tags/词中之龙/index.html","01081256252030408f868e18eeba5ffb"],["/tags/诗仙/index.html","11701412a637b5b15f189def010b1555"],["/tags/诗佛/index.html","557eacf43c776db29dc7723618b21f97"],["/tags/诗圣/index.html","525fd0a9ea33a3fbdbe47c82d4f5c4d0"],["/tags/诗词/index.html","feeda3a7a09cd5dfb120cddf238daa25"],["/tags/诗鬼/index.html","e5662d50fcf7a4d4acb50ad40e031cfd"],["/tags/读书/index.html","067b9340239000dd30109d3b92936d25"],["/tags/豪放/index.html","848ca2155c2b30530fad262535f9d0f4"],["/tags/跳跃/index.html","c685c9d7fe9ddb1e65104752e679daa8"],["/tags/辛弃疾/index.html","863635ab976933e117374dea01e6c518"],["/tags/运动/index.html","da36356e27147bbeb6af552a58e6444c"],["/tags/钉宫/index.html","06972f77c003a03f6486f00643fc9da2"],["/tags/银河战士恶魔城/index.html","a60ff2c139b7847935ff5809efff87bc"],["/tags/陆游/index.html","9095741a664f9fa8286406f6f0909d64"],["/tags/零之使魔/index.html","67d3c5bf63798d6652f2adafaeb02f40"],["/tags/霍比特人/index.html","cf923b20ee879d4443288be1d86e5f68"],["/tags/飞屋环游记/index.html","c5a6a6185aac06b772d6164830afb183"],["/tags/魔戒/index.html","e536485f7e3cfb68145ee1b222879c80"],["/tags/魔法少女小圆/index.html","9e4ab7e05e15fd2cbb5371c71e6eb2fa"],["/tags/鲁迅/index.html","34b7ca46e21ee9893d0262f4be40c3ad"]];
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
