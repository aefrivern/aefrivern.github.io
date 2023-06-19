/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1958b6ec10f9afe2060dc53fd13877f2"],["/about/index.html","867ebda5b69dc29867cc6de257a092e8"],["/anime/index.html","8c4bb38042d5d61bcc65172fb7572c21"],["/archives/2022/11/index.html","da4909cb1dd4c1d26c9cfa8eeb2b9962"],["/archives/2022/12/index.html","4d473472afb398e16678a8c7a64db896"],["/archives/2022/index.html","3a2a65e5ef16f6c671f5850470a372ae"],["/archives/2022/page/2/index.html","86fe3ec2b44db123605b3f231e3dc4e9"],["/archives/2023/01/index.html","13f8ba263b471b0ee65dbe958c185308"],["/archives/2023/02/index.html","a69c33d761ee174d01d7690cdd5d31b1"],["/archives/2023/03/index.html","4c96724a1334e871d2b6de05b3659078"],["/archives/2023/04/index.html","d04c5072dbf070d214398683d213e51b"],["/archives/2023/04/page/2/index.html","3ee7f362ed57712eed0e862ba9a11aee"],["/archives/2023/04/page/3/index.html","1c264b1e0c8e7221d036d51f4a0b02ad"],["/archives/2023/05/index.html","db2cadc0c8bd146f93b8418506218643"],["/archives/2023/05/page/2/index.html","4f448ba34cce866acac8106e592f9290"],["/archives/2023/06/index.html","26901a367005172dafc431a60895f8cc"],["/archives/2023/index.html","b21b5a1d619d6f9bc984f6cb72b140f3"],["/archives/2023/page/2/index.html","889c39d7e5a8a7f1e317ad60d102e943"],["/archives/2023/page/3/index.html","0660343296210da367931856640578df"],["/archives/2023/page/4/index.html","0481147197ef52f80176da0755402ef2"],["/archives/2023/page/5/index.html","05cd67cf975eee01e60403046f8dfd91"],["/archives/2023/page/6/index.html","e2a78f9590e3344182c0a7cc03db54ad"],["/archives/index.html","59a581cca378d624bbe886ca729038b6"],["/archives/page/2/index.html","c378aa5118766270ef7e5fe7d3379263"],["/archives/page/3/index.html","a111fc02f3e3898c16d19a43b83a86cf"],["/archives/page/4/index.html","c628ea664368a91ae0777908c92af92c"],["/archives/page/5/index.html","2d66878abc78e5affd4ab4ae73f9408d"],["/archives/page/6/index.html","34614124ff74ea6757d2f0240180d681"],["/archives/page/7/index.html","0a25933b73c70c8e008a4696b25a33ae"],["/categories/ACG杂谈/index.html","3eaeec71fb281c86ddfa616551493442"],["/categories/ACG杂谈/page/2/index.html","ae96861f8ab8fdc7bc55fa74af7fcf0c"],["/categories/index.html","4bbeccab122656ea5909ae4d9cc060b6"],["/categories/学习笔记/index.html","2996d915189322fecd4719bffaf08bc7"],["/categories/学习笔记/page/2/index.html","baac327a0f582ae2edee1633a85be27c"],["/categories/工具/index.html","786cc821c4c3d4c8d262e0d727ca3e71"],["/categories/游戏人生/index.html","c2f2203cdf7169c58662aaa9a76586f3"],["/categories/读书笔记/index.html","8ee4e7cc99825f34e0a4641abd315cfb"],["/categories/读书笔记/page/2/index.html","85ade8388bc1ea2b3de3df8e107b936a"],["/categories/闲言碎语/index.html","f8562908dd9be5c3e5d0bdbe7db356f0"],["/census/index.html","77e893ea4e46eae8fbe45e9e13dd03b8"],["/charts/index.html","09ba3f3db97f9a5bc70511c84dc37258"],["/comments/index.html","2f84f72d2294cbb5331232dd243ddff2"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/index.css","bf842e7d897499cf17716fcafe1b2af9"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","3d12248cc0d4ea3d3b0e85304b6b9dfd"],["/gallery/index.html","5e66632d0e9905cdd35d525dea829aaf"],["/gallery/wallpaper/index.html","e3137325db2bf2c91f2f4805f80ee61a"],["/illustration/MIT 6.050J & 2.110J：信息与熵/复合电路比特.jpg","7f3b39dad7099b4a5344b0a883f437bc"],["/illustration/MIT 6.050J & 2.110J：信息与熵/源的熵.jpg","5e97d5ac9576435b2b958a0862bd444e"],["/illustration/MIT 6.050J & 2.110J：信息与熵/电路比特.jpg","aedc9d562cf39c1c4d799c698246e990"],["/illustration/MIT 6.050J & 2.110J：信息与熵/通信系统模型.jpg","2d9b043c66982f7eb2881d1a5dfebfee"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7c5795792b7e501d7c4a427cecee91b0"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","e42844b8ca0df72b08f6efbd41552a4e"],["/page/2/index.html","96cb5673255d400b4ab96a6492116f22"],["/page/3/index.html","970f90c89e915fe223b12b09f28166ee"],["/page/4/index.html","93b9733e44d2b69406a48e6463e53c75"],["/page/5/index.html","fc41c4327f1a04ed9a422c3026eddd43"],["/page/6/index.html","2f7dde20a0f05a1afb4a36e520f61a7c"],["/posts/1c5a0321.html","12551c5f0a2269fe6e366596a4148014"],["/posts/1ec7973e.html","ef02019097e73fba32be84199ff25763"],["/posts/1fb82448.html","db50e4929557f2f34940cb7563bd497c"],["/posts/29c507fa.html","8824a4f2864bb686a254eb3e71916122"],["/posts/2f34eb00.html","822c30576602c9176ff6a6efe0ffcb6b"],["/posts/2f57a694.html","164b36290cae1c14791ede4f1b1e423b"],["/posts/374b54d5.html","7fe5b20c4f33291ada4a5148f5650139"],["/posts/3871b764.html","c5e51e87f547bc01228b08c9a635ee9d"],["/posts/3b308caa.html","994e98c121cb36a2e0c6d611d048cafb"],["/posts/3c3cdb74.html","c9537572d963b34dc6a86e01525904c6"],["/posts/41f65cde.html","b12a6a4cd2201960ef4ee845aaf129f4"],["/posts/4208fd6c.html","3d7adeb0f908fadfb8d1d176b2fc20c1"],["/posts/4392373e.html","5ff2337f044d08d67673bf2543445046"],["/posts/440ed920.html","5f098217a6c6f957281ca4c1f96edaf7"],["/posts/4d2b51ac.html","f16db6df21ad0e895e75fc5191e2b1fe"],["/posts/503ae89.html","bc2c403db02b5176687c6c576602b90c"],["/posts/535fd087.html","04342488df37b043cb510b181a33eb22"],["/posts/5923cba3.html","42daae551cdacd428faed18c50598738"],["/posts/5f2caa2c.html","7a2c40f7de76c6e5951caea69afbfd30"],["/posts/616be7b6.html","9d099568ae74ac1c82e6e18d28840f58"],["/posts/62a1ec0c.html","9ef8526193277b0257046836017201b4"],["/posts/69fb361e.html","d6f20fed7315b7f766a095657762c738"],["/posts/70685119.html","08a432f601a8e10f30e90dffc7c927c7"],["/posts/743db4aa.html","448ad81789981102ead0930e81345e71"],["/posts/7b67faab.html","4e0b3d2e8a8a0f751b619b266bdd05a7"],["/posts/7b76be01.html","f0d822cf54b8317711bbba6d6b55476f"],["/posts/7bff939e.html","0d22552c776d230b6ccf6d2ff083ce6b"],["/posts/7cc4ca07.html","e5d97c3e8ba9b18bfaafd1bdc37a081f"],["/posts/7d257210.html","19319ccc9c659cc6bcbc546d1e07ab19"],["/posts/7ea0cbe4.html","8aeee61536f558a560c591b4487c76d2"],["/posts/7f382da2.html","ecaaa741cf256f0bdf923670f7e84ed9"],["/posts/8207aa48.html","92b38662ed1c6855b08ea51477ce66b0"],["/posts/84cae757.html","af64dd07c08d10134efe427b74b76354"],["/posts/88200036.html","1f0b5902dbde0bf7532fec3645169577"],["/posts/922fb64d.html","1294dabcc5f1b9ef3ebad7c63061e6f4"],["/posts/98332b29.html","e596a4dddf382e1cb93584f40eb7c5b1"],["/posts/9a1a736f.html","1e346055a498899a7192340566aaa577"],["/posts/9addd0bb.html","cebcc03e4081c8c4bb5a92a22a4219b6"],["/posts/9b44950b.html","efa65e9158fd876a046af6a326238f5b"],["/posts/9ca149ab.html","3cbc9fd7057f802e7a67d9cd7db99783"],["/posts/9e4446bf.html","523a9b1b92a05f56eb2eef8d32c5e6ad"],["/posts/a13c1dba.html","b88e0f8b092f59cc1c577d25ffb75a30"],["/posts/a1f2a4d4.html","c56d213186b5e8458cc6c224616ea150"],["/posts/a5f300de.html","3b41fb3b0d552810f9850fdf91d4e064"],["/posts/a9f63847.html","80afa93f59ea279ef55e3295f701b88e"],["/posts/ad31055e.html","326d5509ade98d45404c8537a061f8af"],["/posts/adcd6e20.html","a79fc9a594e0e402c18052487a6cdb20"],["/posts/b2feeab7.html","3624ee4704aeb533af51f271d84dbac5"],["/posts/b7525d11.html","27a0ba8c0caca8cf67b028eb4db1ec30"],["/posts/bb154b63.html","98a95ed69b90788e62d52e36b532a4af"],["/posts/cc86a40d.html","631a90ad351192a3caad969446e81cde"],["/posts/d36531a7.html","ccd167ba284fa00a3bc425ef55cca2bf"],["/posts/d442e51a.html","ef139786622cf78ae1cc5e51885e960f"],["/posts/d7fdf01f.html","a6b12f16df1d7c2fae8c6843d95c4abe"],["/posts/dcdf88c8.html","1c1f414526adece6dcf5daa2f746652e"],["/posts/dd378ae0.html","f82f5b7b0f61ac8cb7972f5fd0266793"],["/posts/e15be301.html","7389f29d0a885f7b0f1d5025c1f1e9ec"],["/posts/e2e4b4ce.html","a7e3266e49f2ad956fce61b6c1f05eb1"],["/posts/e35ef5bd.html","4d32bf4df789fbb4b878d55cd9b14d9f"],["/posts/e5cd9bbd.html","1eef98603fa79bdb32fd0771ad8c5284"],["/posts/e7a99a5e.html","b581ee63f5d757450285fc90e276845a"],["/posts/ed52e6a0.html","889f6ff9c46a3b83a9cce549569d2f9a"],["/posts/ee0ac59a.html","9f3e5775f5b30712abdc2212b532cf73"],["/posts/f09c1ee5.html","22f24137edd97a24f4cb72831ddc94c2"],["/posts/f4af26a9.html","10e14523d2e53ea3e9ea9c90f116c836"],["/posts/fa3cd62d.html","941a16ae64abf378791af050ae919a8e"],["/posts/ffdfd6d4.html","217ec4aba8fc48974dd68d82191a15bd"],["/private/index.html","149c4a5cf0306187bfb8045e1bb07082"],["/random/index.html","601fb15d7b6e6503c4633f4375784cef"],["/sw-register.js","4ec1eed9527ffdc2e922d926118cd619"],["/tags/ACG/index.html","2fce234c4835d647014352e7772d0663"],["/tags/AIR/index.html","7c5cdb6b1004a852fb80a2b8e4aa9d1e"],["/tags/Butterfly/index.html","6b66e55ae14af3f52f5465dbf64ae462"],["/tags/C/index.html","7b703acde0b049f7a78fddc92679045f"],["/tags/Crash-Course/index.html","7ae17765beb8c9ba96548d4e3b0550b4"],["/tags/GUI/index.html","1cbee5d1fe04186c96145b5f9a4989d6"],["/tags/Git/index.html","8830496c06a675e6e830adc619c59ec1"],["/tags/HTML/index.html","4cc1ee3486c6f58c33717394324dfed1"],["/tags/Haskell/index.html","feb6da0e8442b6c24f82246104c3432d"],["/tags/Java/index.html","6d3ca81af28342d852ed25254eb1c663"],["/tags/LaTeX/index.html","b93a004f2595e08c041ad341304faae1"],["/tags/MIT/index.html","5f51a3041733f60bda1746a2c2b1cc56"],["/tags/Markdown/index.html","bf73ad36b442d93ec1c6e1d26022cf23"],["/tags/Mermaid/index.html","43f4b522c01249b279fd517d7a75046f"],["/tags/NTR/index.html","aed0839407c0a47865fc797c2143f934"],["/tags/Pixar/index.html","8a0e3c238c01aec87324021f26c5d4ec"],["/tags/Princeton/index.html","e81b5ae1fe19d9c385388cbddbff1e98"],["/tags/Python/index.html","a4eb47ca4de5181c0b649738527c9319"],["/tags/Qt/index.html","1d8bb399a7e4339a21cc6c2b8a1eae4b"],["/tags/Scheme/index.html","27524fe9c8e5f46cfb1bbece5d5fa7fb"],["/tags/Stanford/index.html","6801feb8ad20cd5d687ca0606e2c6741"],["/tags/UC-Berkeley/index.html","0d15891310cae9569c126510d3ac22fb"],["/tags/University-of-Helsinki/index.html","81941dc7c6a767a22e6764217358d035"],["/tags/index.html","ca5fdeac4f0b813c303c1019d590d4eb"],["/tags/三国演义/index.html","d4a96d8faee01470befbbf5dac6d7217"],["/tags/丧尸/index.html","80402d596c6ea49c88aaa57112811254"],["/tags/京阿尼/index.html","ffd38148d27ab9c6842422e83d836948"],["/tags/信息论/index.html","f6337b1714b6cff7a2a6b702e0229dd2"],["/tags/元稹/index.html","b4cd9bd9c0f25c75f87a52e3ce576956"],["/tags/关于我转生变成史莱姆这档事/index.html","426c56c344cac992c17b4546ef295185"],["/tags/函数式编程/index.html","342d9710fbbfdb367abbe12ba3b1e571"],["/tags/刺客信条/index.html","3a1a88adbdd0416e589c23c91c3eae03"],["/tags/卖肉/index.html","24bc2d90f53027dabe0088b3f6f24e20"],["/tags/博客/index.html","36efd3d649fd0c8f718ae9d0a1ef1744"],["/tags/去月球/index.html","e3c5a9424781fc40928c9864f18409c6"],["/tags/可汗学院/index.html","63ff5fd790d8422d0f914a9a006a55e5"],["/tags/史诗/index.html","6ca26d0cfd4ecbf48db2ca893e6945be"],["/tags/吉卜力工作室/index.html","f1a34c2583558f22ec0283e1e438b80f"],["/tags/名侦探柯南/index.html","7fc6b183b36923d1017d0cc2a77131c9"],["/tags/后宫/index.html","331d52656450a9bcbc802d47e08d5712"],["/tags/咒术回战/index.html","3011a0c2ad1749bf8451a749a228ca0d"],["/tags/哆啦A梦/index.html","5bf4231e0decd1890e56a189aabf42cc"],["/tags/哈利波特/index.html","5431b5b30551bced684be58a58376fb3"],["/tags/喜羊羊与灰太狼/index.html","4a336e1fcb1ff2f5fa79da602bb3f1a6"],["/tags/四大名著/index.html","ba02181c93bffab67c0c448641466ead"],["/tags/图表/index.html","d9f6bbcc0b0f5e9179c7aaf5c6be0829"],["/tags/复变函数/index.html","147f4001d08ee3d03e9885e620d59236"],["/tags/孔乙己/index.html","cdbf851326e2d97528fa61a50e0084fc"],["/tags/字符串/index.html","f4ca86cf16ea775d208565de51fa66dd"],["/tags/学园默示录/index.html","63dab03787ee084b454876309bf3fede"],["/tags/异世界/index.html","5fb002f16d2692b3edfa79b372ac5fa4"],["/tags/微分方程/index.html","03aad4a88ed0f32feb8b0daa9bee1aaa"],["/tags/微积分/index.html","e6d9533f2a1a1649c73faedbf96a831d"],["/tags/情感/index.html","16893602a4d68959a7f0f0560336235a"],["/tags/指环王/index.html","23687ef0780f8e7b681a4a688ada7741"],["/tags/搞笑/index.html","d855d77e4cf75f9087af5aa582ecf732"],["/tags/教育/index.html","3e322dc5aaa7790287bc2d83a61ffd0e"],["/tags/数据结构/index.html","6640c9485c8be3c93a45c79d7bf0a65b"],["/tags/数据结构与算法/index.html","edb84b27cba867b325706552216c1fa7"],["/tags/文字排版/index.html","8182f1e60cd69c151dff7e8da53297d4"],["/tags/文明VI/index.html","bd39f5c73edcf24f1ba6a9dacf8179a9"],["/tags/无彩限的怪灵世界/index.html","7937292d422b34142024c9df09578c0d"],["/tags/时间刺客/index.html","69f953087a1a3b7ff7311eaf0aaf7de7"],["/tags/有生之年/index.html","80e684d0b221c31a192b6fce648b87ae"],["/tags/李商隐/index.html","0018f2a26574a599cdf183274ffafc73"],["/tags/李白/index.html","9caedef877a35341b1a68496df30a283"],["/tags/李贺/index.html","aed70dd67ba5f18c9879af5a36958211"],["/tags/杜甫/index.html","21cc775c2c001788e974e5e8985e0595"],["/tags/概率论/index.html","c7b1b1fe948aa0542c9666b53c3b6708"],["/tags/正则表达式/index.html","14182deacdbcd512210d13acdd8d632c"],["/tags/治愈/index.html","92a554ec9349b2c6b40592cdc3437b24"],["/tags/热血/index.html","c39cbc02f2e043c6751376d7dad43902"],["/tags/爱国/index.html","4e70c0eab80d25b6064a8f4c0aaec796"],["/tags/版本管理/index.html","0893b2448feaad97ea8c85d08e435ffc"],["/tags/玉子市场/index.html","0d9e10d4b0c42fad5a34f0008a600049"],["/tags/玉子爱情故事/index.html","c4c0f91112908eb7286aa9c0f51d8145"],["/tags/王维/index.html","6e4c7f064d83dcb49290708714403dbb"],["/tags/现实/index.html","6df21d9ef26800a7c33726a51ccc9ab2"],["/tags/甘城光辉游乐园/index.html","5b2c281ba60213012a36e3b27205430d"],["/tags/白居易/index.html","e346c39c2b4dc1cda9b900a15f3011a9"],["/tags/离散数学/index.html","5f6eda7b65dbbfa71d5b77e0b8b43bd9"],["/tags/种田流/index.html","f01d46e71bb4c811355addf661fea317"],["/tags/童年/index.html","a4d11879e097b2a8bb97a12ef7a66491"],["/tags/童话/index.html","366d003532faf054680944dc9768e2b2"],["/tags/策略游戏/index.html","474d1382543dfe20367cd259292f6fd4"],["/tags/紫罗兰永恒花园/index.html","675dc68df7f8064cb5d0e24eff67f8bc"],["/tags/纯爱/index.html","57464452526ca029bca638f594df20ad"],["/tags/线性代数/index.html","170e80820f4230daeba85932cf374d13"],["/tags/致郁/index.html","b5861c1ad1b04ce9615c377521229f1a"],["/tags/苏轼/index.html","6237690eba0c85e905173d6aff26c172"],["/tags/计算机科学/index.html","75641e0a1cde908213cfdaf832f89d57"],["/tags/词中之龙/index.html","773710f557d7c9127afbcab2f27a6879"],["/tags/诗仙/index.html","8cdb9690e53f54faa8a434996f50b5e3"],["/tags/诗佛/index.html","0d7ee7e7302b389ccf08763c3ed17616"],["/tags/诗圣/index.html","4e3f8471e627f58e9bb6742e09a6cfb0"],["/tags/诗词/index.html","e2fd677670501bf8e1e2eed95ee50c74"],["/tags/诗鬼/index.html","4b41ef068b94455a1d63fbeebc88842b"],["/tags/读书/index.html","bf19f3eb496f1f7846e4cfe73c38bc55"],["/tags/豪放/index.html","301bc9a712bfc7bd0209cc048c154f62"],["/tags/跳跃/index.html","8e28a63b19f4d1c9d2e1a61e22417f89"],["/tags/辛弃疾/index.html","1007703adfa97b06f4c7894711d6fcec"],["/tags/钉宫/index.html","0d790e8a0fa9a800f64cccd5447e81f8"],["/tags/银河战士恶魔城/index.html","1c397365187083cd03108cc5c5905b0e"],["/tags/陆游/index.html","2f2694b0de4aa4c8a9e3107ef67ee783"],["/tags/零之使魔/index.html","3952cc10c358e3705a7e6b60be36f118"],["/tags/霍比特人/index.html","7734b8701ca1f5a2fe9297d533202e99"],["/tags/飞屋环游记/index.html","70bf6d42744883960b86fa1599c0579d"],["/tags/魔戒/index.html","f082c6a18f9fe0957a779dab11e5758d"],["/tags/魔法少女小圆/index.html","e3e001c9cce855a4fb1bb4d393380270"],["/tags/鲁迅/index.html","7ededc2d62aa2d4aa1331e04b790beb3"]];
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
