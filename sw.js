/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5748bf09200dcec71d17f2dc691dd493"],["/about/index.html","867ebda5b69dc29867cc6de257a092e8"],["/anime/index.html","8c4bb38042d5d61bcc65172fb7572c21"],["/archives/2022/11/index.html","3667ab8ab2e0af82955ae28a4f7da6f2"],["/archives/2022/12/index.html","3982659c929c2ab0d0901c7c240cbc31"],["/archives/2022/index.html","5b60c89590cee8698bd7c696632583a6"],["/archives/2022/page/2/index.html","dc9c63ea761564115e8c44fdd810fb0f"],["/archives/2023/01/index.html","2737f52a2ae76eba7e99ff974b60bfc7"],["/archives/2023/02/index.html","13e8074bd0775d2fbc4d75d8c5cab4b4"],["/archives/2023/03/index.html","44f79469a772317ca7e85c4f305361ae"],["/archives/2023/04/index.html","1b8bce42513a3765ba23f00bd17a7fcb"],["/archives/2023/04/page/2/index.html","79f821e605a8116da1a9e6743b28fc38"],["/archives/2023/04/page/3/index.html","3b6007d93149719ff55a5ed0be3e879d"],["/archives/2023/05/index.html","cea55b4d1f2b64b8ce3b8bccf3e195a5"],["/archives/2023/05/page/2/index.html","827b064c180f09cc0e058e67b9ba6661"],["/archives/2023/06/index.html","4b38335fc6007670bbae4b0ea885d7f6"],["/archives/2023/index.html","3faca083e1adfe576153e6ea7dd636ed"],["/archives/2023/page/2/index.html","022044c019b8a106b29d385ac4bcd2ed"],["/archives/2023/page/3/index.html","e9cc5713f0c6ded3e5dfae3a813fdcad"],["/archives/2023/page/4/index.html","a428aecd6394754c90b07de5d2b90488"],["/archives/2023/page/5/index.html","f6ad8c675172291c1d3f2eac2e3e8a48"],["/archives/2023/page/6/index.html","77dc6a5e663639297bd19d12958bd094"],["/archives/index.html","b100b992104f97517969b77fd0695aac"],["/archives/page/2/index.html","ec21c9b05ae9cf7765904badcd2ffd74"],["/archives/page/3/index.html","4c965337cbff953898b65353dd4d575a"],["/archives/page/4/index.html","cff381170d0aec17be1f764b72ea790c"],["/archives/page/5/index.html","f9f7663de241e55378944871b0af9a4c"],["/archives/page/6/index.html","1bfe60c3684b83c0ca6ed1506d97b6c4"],["/archives/page/7/index.html","6cf55b8b8bf149b941d8d75455cbb5d9"],["/categories/ACG杂谈/index.html","45c71aa39a681d6746278da5ac627743"],["/categories/ACG杂谈/page/2/index.html","35217b0c1ad5d3e27e350545fc34c1f6"],["/categories/index.html","54dcfdc6cf709c855dafa8d68c5b94dd"],["/categories/学习笔记/index.html","0728bac75b8e029d54c96815a96fd517"],["/categories/学习笔记/page/2/index.html","459d0cd2bdf66cde5204e6d73964bf9b"],["/categories/工具/index.html","94c8499d9912033b6c08fa0b2e40ab6f"],["/categories/游戏人生/index.html","7be1ec6b6b94d206c7629667b086d1a8"],["/categories/读书笔记/index.html","e072f830c2eb85492d93f2f4d2495981"],["/categories/读书笔记/page/2/index.html","8f95667002afc18f50853408c72c95f4"],["/categories/闲言碎语/index.html","fc09c8587020c456cb35ac96bb924ead"],["/census/index.html","71dd41849312a77487c262379b990b19"],["/charts/index.html","924da1bfe5ce7a278086838e9d33873d"],["/comments/index.html","dbdaa24003437240c95dee447821ac1a"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/index.css","bf842e7d897499cf17716fcafe1b2af9"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","3d12248cc0d4ea3d3b0e85304b6b9dfd"],["/gallery/index.html","5e66632d0e9905cdd35d525dea829aaf"],["/gallery/wallpaper/index.html","e3137325db2bf2c91f2f4805f80ee61a"],["/illustration/MIT 6.050J & 2.110J：信息与熵/复合电路比特.jpg","7f3b39dad7099b4a5344b0a883f437bc"],["/illustration/MIT 6.050J & 2.110J：信息与熵/源的熵.jpg","5e97d5ac9576435b2b958a0862bd444e"],["/illustration/MIT 6.050J & 2.110J：信息与熵/电路比特.jpg","aedc9d562cf39c1c4d799c698246e990"],["/illustration/MIT 6.050J & 2.110J：信息与熵/通信系统模型.jpg","2d9b043c66982f7eb2881d1a5dfebfee"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6f0c45a879197fe1ee75bc5f02d44985"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","fadff288dc414103d2dda53a0adfb372"],["/page/2/index.html","ba18da0d2c236f72c8491dbbb17766fe"],["/page/3/index.html","2b542643345fa356175858f0b7839f3e"],["/page/4/index.html","ab2cfc27e9f693d14800fa3b6109b3ba"],["/page/5/index.html","a2c5689f64a935da3b5300bf81df08fa"],["/page/6/index.html","3636ecb31cff06c113af44c2561c2e58"],["/posts/1c5a0321.html","12551c5f0a2269fe6e366596a4148014"],["/posts/1ec7973e.html","f98c481c94bf4ef4986deb7af8b427fd"],["/posts/1fb82448.html","a092b8e488237051fad2e9549ed18abe"],["/posts/29c507fa.html","8824a4f2864bb686a254eb3e71916122"],["/posts/2f34eb00.html","c2690ec21fdf8a986c6058cc583d38a6"],["/posts/2f57a694.html","643999facef8d8074961b1bd96315a07"],["/posts/374b54d5.html","7fe5b20c4f33291ada4a5148f5650139"],["/posts/3871b764.html","e91b2fbad94ef99c19c3a5b2fd312ebc"],["/posts/3b308caa.html","994e98c121cb36a2e0c6d611d048cafb"],["/posts/3c3cdb74.html","c9537572d963b34dc6a86e01525904c6"],["/posts/41f65cde.html","b12a6a4cd2201960ef4ee845aaf129f4"],["/posts/4208fd6c.html","3d7adeb0f908fadfb8d1d176b2fc20c1"],["/posts/4392373e.html","94d0d692cfe5cc151e71f9748c83e8f0"],["/posts/440ed920.html","45b386e26a16a3958f8c44be07af406d"],["/posts/4d2b51ac.html","0dfe43d8bace8e683c9d72e03f6dc36e"],["/posts/503ae89.html","bae5cddf03be4ecd9ebd2d221ba81024"],["/posts/535fd087.html","04342488df37b043cb510b181a33eb22"],["/posts/5923cba3.html","87284c0f0d88f946a24136359955e386"],["/posts/5f2caa2c.html","7a2c40f7de76c6e5951caea69afbfd30"],["/posts/616be7b6.html","9d099568ae74ac1c82e6e18d28840f58"],["/posts/62a1ec0c.html","f14bfa6150efe413f557f926d84aa8d9"],["/posts/69fb361e.html","d6f20fed7315b7f766a095657762c738"],["/posts/70685119.html","08a432f601a8e10f30e90dffc7c927c7"],["/posts/743db4aa.html","448ad81789981102ead0930e81345e71"],["/posts/7b67faab.html","4e0b3d2e8a8a0f751b619b266bdd05a7"],["/posts/7b76be01.html","f0d822cf54b8317711bbba6d6b55476f"],["/posts/7bff939e.html","48793b0e6bf9da7f4bda499361efb822"],["/posts/7cc4ca07.html","e5d97c3e8ba9b18bfaafd1bdc37a081f"],["/posts/7d257210.html","be7ff702a5f0588a64321623a898205f"],["/posts/7ea0cbe4.html","ea8e276bffe664cbfda73347e0a7025c"],["/posts/7f382da2.html","ecaaa741cf256f0bdf923670f7e84ed9"],["/posts/8207aa48.html","92b38662ed1c6855b08ea51477ce66b0"],["/posts/84cae757.html","af64dd07c08d10134efe427b74b76354"],["/posts/88200036.html","1f0b5902dbde0bf7532fec3645169577"],["/posts/922fb64d.html","1294dabcc5f1b9ef3ebad7c63061e6f4"],["/posts/98332b29.html","e596a4dddf382e1cb93584f40eb7c5b1"],["/posts/9a1a736f.html","116e426a8ca070c92f91920ba86bb00b"],["/posts/9addd0bb.html","4ceeebc606037b0ff527e92997855a0c"],["/posts/9b44950b.html","c0e0d46d25dcf164804f233a250b5836"],["/posts/9ca149ab.html","3cbc9fd7057f802e7a67d9cd7db99783"],["/posts/9e4446bf.html","523a9b1b92a05f56eb2eef8d32c5e6ad"],["/posts/a13c1dba.html","b697db41a4292cf466e421c4aafac401"],["/posts/a1f2a4d4.html","44cafed366074c8d2c228f1ab80b3c22"],["/posts/a5f300de.html","3b41fb3b0d552810f9850fdf91d4e064"],["/posts/a9f63847.html","80afa93f59ea279ef55e3295f701b88e"],["/posts/ad31055e.html","67721699c4828b7990e694cb15d4729b"],["/posts/adcd6e20.html","182d14ab9b7e6bf817a0aaf3bfbdde2b"],["/posts/b2feeab7.html","3624ee4704aeb533af51f271d84dbac5"],["/posts/b7525d11.html","8fbef9fad57f413a61c8866d7fcaa217"],["/posts/bb154b63.html","d922a2a937a709ba898a2f159e7f74aa"],["/posts/cc86a40d.html","631a90ad351192a3caad969446e81cde"],["/posts/d36531a7.html","04e7c1a9ad186566d8e7e5084b1f2876"],["/posts/d442e51a.html","8036865ae4b9e90c9a6f58da52c916fa"],["/posts/d7fdf01f.html","a6b12f16df1d7c2fae8c6843d95c4abe"],["/posts/dcdf88c8.html","1c1f414526adece6dcf5daa2f746652e"],["/posts/dd378ae0.html","f82f5b7b0f61ac8cb7972f5fd0266793"],["/posts/e15be301.html","7389f29d0a885f7b0f1d5025c1f1e9ec"],["/posts/e2e4b4ce.html","4e221d2e82cf4ea9eb36f7beac885722"],["/posts/e35ef5bd.html","4d32bf4df789fbb4b878d55cd9b14d9f"],["/posts/e5cd9bbd.html","1eef98603fa79bdb32fd0771ad8c5284"],["/posts/e7a99a5e.html","582040b900b2752462219a31965fb47f"],["/posts/ed52e6a0.html","a5650ef8b8aeed190f8149639b140a26"],["/posts/ee0ac59a.html","9f3e5775f5b30712abdc2212b532cf73"],["/posts/f09c1ee5.html","22f24137edd97a24f4cb72831ddc94c2"],["/posts/f4af26a9.html","10e14523d2e53ea3e9ea9c90f116c836"],["/posts/fa3cd62d.html","9724e7c480a88644004bf5dc83b8a18c"],["/posts/ffdfd6d4.html","27b58a921bddddfd5e2300e9cad76593"],["/private/index.html","ace2fbd83e582a60d341a8ea13e2a14b"],["/random/index.html","0ce0ceb39770099366e2e669d04958a4"],["/sw-register.js","66ab16c269cff861b51743307c79cb83"],["/tags/ACG/index.html","44c1f4347bd00ecb44267eef83c9d639"],["/tags/AIR/index.html","ecff38e9cc7655fba56139b005bc604d"],["/tags/Butterfly/index.html","dead3d43759b202c916b4ad752f2e255"],["/tags/C/index.html","273e0cdc25b1108c1b836ea3386a3b36"],["/tags/Crash-Course/index.html","87eeb271d5b00e4ea84c3d3a382c9026"],["/tags/GUI/index.html","37084dc0236a4afed67654673b686edf"],["/tags/Git/index.html","4fed9fb4ec0bab6ae624c77c4ce4ad79"],["/tags/HTML/index.html","017be9206b45fcf0c38795636f5d161f"],["/tags/Haskell/index.html","47c9e1c7ffdac7c164f5f81512eb7a6d"],["/tags/Java/index.html","e37d08063cf537f2ef27c051ceff926a"],["/tags/LaTeX/index.html","678c62fca60f090065d73189fb0186b3"],["/tags/MIT/index.html","6ce25cbe4eec64beffc9ca5aeb561226"],["/tags/Markdown/index.html","dc8c4f58323c8f92681bc4e9855c4287"],["/tags/Mermaid/index.html","5f85c41336d97d526a57a8603b45124f"],["/tags/NTR/index.html","9dc22ae96c8eed978bac07a8b7b91413"],["/tags/Pixar/index.html","bff57645ab0da4e42076643ad8d4738c"],["/tags/Princeton/index.html","e16f8861e467ac04e843d82a96d89eea"],["/tags/Python/index.html","7d0c3d58f263c4b30ef05c904e1a432f"],["/tags/Qt/index.html","d2fc65fb3bd34b71e982256e6fac7eb7"],["/tags/Scheme/index.html","3374608f28dd2700bedc7ab60f8f7fba"],["/tags/Stanford/index.html","ab33b2e234c37051283fbe91b3fd4894"],["/tags/UC-Berkeley/index.html","6b44548f7fb01c90716d27e56238a90b"],["/tags/University-of-Helsinki/index.html","cf5bfb01593cfb81eed7aa067f59ec7f"],["/tags/index.html","903bea9014ec7266956dbf5f46773b0e"],["/tags/三国演义/index.html","46da741b5eb7daea8543343e0bd9c2fe"],["/tags/丧尸/index.html","65ab9bc915b2f7a78fe07bb233beed3b"],["/tags/京阿尼/index.html","45c0212f15751feb5077d64e1ea5a023"],["/tags/信息论/index.html","f5802f352e7d0f176dd08e52248f6397"],["/tags/元稹/index.html","ff45c6386daf9d7e1b613bf3d7ac66a2"],["/tags/关于我转生变成史莱姆这档事/index.html","3ad6be454d24e4964a846ef837fbe025"],["/tags/函数式编程/index.html","edaee13e0f86f797d8bd02f361cfed2b"],["/tags/刺客信条/index.html","5e5a7d49a7ba5d6f600249bba1faf669"],["/tags/卖肉/index.html","0e28510ee95e7bbc40bb6620aa656a1e"],["/tags/博客/index.html","b6f1375265581f38dfc28f3522ce7139"],["/tags/去月球/index.html","e980e12cec7c3fac25dd1b9d7248d917"],["/tags/可汗学院/index.html","daa04cc45188aae0037744963c7f9611"],["/tags/史诗/index.html","f3b0ce6d2bd374f1d02a17f92eef5e96"],["/tags/吉卜力工作室/index.html","9e2309a15cd5cfc79d7417751e7b8e96"],["/tags/名侦探柯南/index.html","0a72ff83f0f19db1620bd45c8c6640e2"],["/tags/后宫/index.html","f32a1e8880c9eeceaa4b867db27b4afc"],["/tags/咒术回战/index.html","5755094c149f4999caebdfc24b70ec23"],["/tags/哆啦A梦/index.html","ee7919516c679785f11ac0ac7dcf847a"],["/tags/哈利波特/index.html","159a0bdae3f44a70e1bee34a5fd29ba7"],["/tags/喜羊羊与灰太狼/index.html","55d9e8364a1fc7dddec2cd35a36676e8"],["/tags/四大名著/index.html","820a7f6160e47673fa55e61f9449fef4"],["/tags/图表/index.html","10787096efdfc8df1d466f2a7883815e"],["/tags/复变函数/index.html","a2e22a6c72090281dc1d850daf2af15d"],["/tags/孔乙己/index.html","ec6cd9d9b3e1487b8896e6b55a9a6f54"],["/tags/字符串/index.html","a59a485c51d035e05cc369cd0c492760"],["/tags/学园默示录/index.html","3964a39e27c457654e98a377a1baa015"],["/tags/异世界/index.html","3bc59a6870c7b00a019d4300bcc60a26"],["/tags/微分方程/index.html","29178ac2c833c0e0a4f9c6f713c42b1a"],["/tags/微积分/index.html","a2bff4c05885b2cf1921c9d6a756c865"],["/tags/情感/index.html","85cced92f07935dd6759b2dda22993f7"],["/tags/指环王/index.html","55cb736043b5f3d0e808106a84e7449f"],["/tags/搞笑/index.html","e025fd5e1bfdb5a14f3c2c2e629197e0"],["/tags/教育/index.html","5949ad70af8af1124858fea94c84ae53"],["/tags/数据结构/index.html","217f2122f403efd9a7e5cf9933ad2b23"],["/tags/数据结构与算法/index.html","85fbe1ccd8b74007af8a3772944920de"],["/tags/文字排版/index.html","9e0c5d7c7060262de0a8152676020f66"],["/tags/文明VI/index.html","e8bbeccaa7dd94b20b4ae1a6b25a7d06"],["/tags/无彩限的怪灵世界/index.html","6c9633da45adc467c859efa0e76d9e54"],["/tags/时间刺客/index.html","90a933156b64da55d9104598126ad09b"],["/tags/有生之年/index.html","c379f15e739074a07a8dfa4efd7388d6"],["/tags/李商隐/index.html","51bedc10d831d2596da6fc8f0bcebe34"],["/tags/李白/index.html","aa069742ed43087644c19ad307e8602b"],["/tags/李贺/index.html","166a28d9a0c5210a475af07195725f6a"],["/tags/杜甫/index.html","d080d71534ee4850989a7a20ffde3757"],["/tags/概率论/index.html","5f96da07ed18825458179990eef9f9a8"],["/tags/正则表达式/index.html","cb87bd5336446787a0f5be1b99959650"],["/tags/治愈/index.html","5dfc93954a44000502093de5fadbfa81"],["/tags/热血/index.html","3ede5769ce30a44d918e2fd566d5bc43"],["/tags/爱国/index.html","b906b3e2263f84b34f78afac78a51d9a"],["/tags/版本管理/index.html","2513f10852fc9b9f978a642ac8412720"],["/tags/玉子市场/index.html","0ec390b7af6d43b1f6844b5c6b9d9fee"],["/tags/玉子爱情故事/index.html","b5c836b3888c8a9d6ddc8ff8fbd4aab8"],["/tags/王维/index.html","1490406302b0b632e0f312c8af29d31d"],["/tags/现实/index.html","f20697dceb8312c4445ee2c24e41308a"],["/tags/甘城光辉游乐园/index.html","8b3e5997ce53c41ed229e3607197e9ca"],["/tags/白居易/index.html","12fc016ebfe04cd9acacd6967a53c23e"],["/tags/离散数学/index.html","e9385a30e8b679eed91943316d01390a"],["/tags/种田流/index.html","b4dd67fbfd29dd5fa329cb166455f9bc"],["/tags/童年/index.html","3fc9e3ba1669caa570fa2d91a3f34ff5"],["/tags/童话/index.html","d61032f1877a9a3d59125503addd955d"],["/tags/策略游戏/index.html","d034c8973268ed628d92228bccfc61d3"],["/tags/紫罗兰永恒花园/index.html","cd59b72f8cb483e527d6e5826476b9f1"],["/tags/纯爱/index.html","81c84d353420bae7c26339081d5520dd"],["/tags/线性代数/index.html","bd00b449449d3816087c641d4d813084"],["/tags/致郁/index.html","d3dd6a5df6b09da282c6576e7cc40b45"],["/tags/苏轼/index.html","d68da7aab97c8474096f04158d988274"],["/tags/计算机科学/index.html","ab9dcceb96da7960e4b460b45ed0ec35"],["/tags/词中之龙/index.html","fc26ebc4c4d6fb2d69cae580de64c07b"],["/tags/诗仙/index.html","13cf1285f196518f1a651cbca039bbd0"],["/tags/诗佛/index.html","ff46c0a5f328a9c168a24fe6022469a6"],["/tags/诗圣/index.html","87d5851a277efa78f5f0310bfb9ee6d8"],["/tags/诗词/index.html","f5c97a198c575964407e9bf7146b0e32"],["/tags/诗鬼/index.html","6bfb1455e489a27e343529131fd353c1"],["/tags/读书/index.html","f6e68b19ec7a8ac16b29db3085f9cb9c"],["/tags/豪放/index.html","a942f9835671d5080fc6f332160f86f4"],["/tags/跳跃/index.html","1ee34f1e1b2a0236ec240b7089baa516"],["/tags/辛弃疾/index.html","e175db333f1250762738e50ac76a5763"],["/tags/钉宫/index.html","451643257c515dcf445237308c5d99f7"],["/tags/银河战士恶魔城/index.html","edd3e2de45b8c2e74c125e49a36e1f8a"],["/tags/陆游/index.html","6ede8e753f3ddeba11389edc90662793"],["/tags/零之使魔/index.html","3edade34ef0b40dba6b6df6807b9997a"],["/tags/霍比特人/index.html","b5194ddd212373505eb7abc8ed17c199"],["/tags/飞屋环游记/index.html","9b6b47e22c99127a22c9aa2ac3b916dc"],["/tags/魔戒/index.html","24fa211096b433b4dcbf29b1221bce12"],["/tags/魔法少女小圆/index.html","b26d71ab4fcce2e530bd64df84edfbfd"],["/tags/鲁迅/index.html","e3a7c4c432100675554f128c06eefbc9"]];
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
