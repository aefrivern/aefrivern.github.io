/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fb7cc02174fdf78478461d9b907d1ddf"],["/about/index.html","6e1a7eb5fa55696e41a265cf8d2d2f98"],["/anime/index.html","773ab4e6da3b06735d49bd75c1222f17"],["/archives/2022/11/index.html","2225fdb9e8266665d9b6fe87280dd504"],["/archives/2022/12/index.html","aeaaaf9b747f3f992b6a5933f23bbf51"],["/archives/2022/index.html","7b1684154d5389eca728fda25ee07a55"],["/archives/2022/page/2/index.html","5ee56e49643a23f1b2d2de3d0867ad11"],["/archives/2023/01/index.html","6d42ff0563908cdec46106b8109fca19"],["/archives/2023/02/index.html","df8525e775e6fc50748322237aa8f615"],["/archives/2023/03/index.html","31a11f195b2959abbb43ec8dbbdc639b"],["/archives/2023/04/index.html","5114c27131c71df76ace63020ff7957c"],["/archives/2023/04/page/2/index.html","ca362ed3b7958b78d14302ab06b7eff3"],["/archives/2023/04/page/3/index.html","c3077482415fd34b3cccdd92e01cb3f9"],["/archives/2023/05/index.html","07c075230f463e2f40a40ecede45b5fa"],["/archives/2023/05/page/2/index.html","abfa6c95f6660cbc91969c7e36630a7a"],["/archives/2023/06/index.html","9da972dd725bf3761d8f9d20b9eb5d04"],["/archives/2023/index.html","93f13e29f98eceae29a0912dab4627d4"],["/archives/2023/page/2/index.html","b1e53fbf490c38db16be23f5162612ce"],["/archives/2023/page/3/index.html","91d4e0d301d3f2198da7dbbcc343e616"],["/archives/2023/page/4/index.html","4395d838bb0ced41635eb34bac5672d6"],["/archives/2023/page/5/index.html","89563517cdfe940e9897be8fd3997fd0"],["/archives/2023/page/6/index.html","6c884abf211692d7b3c01f1bdea42f89"],["/archives/index.html","2e8a0288e9bf59fb50464f0e0c383fde"],["/archives/page/2/index.html","b7798b171935ae8af324e6809183e289"],["/archives/page/3/index.html","ea7c85a01585692c61c50021a8b69d8d"],["/archives/page/4/index.html","ea7815cd0b84cd6e026c881378860029"],["/archives/page/5/index.html","141efdc83e223e3ff394b0812ba63d9d"],["/archives/page/6/index.html","890b1adadc8d89fbd2b5e3047bd6704e"],["/archives/page/7/index.html","45bb90b03619c45910973c9f478de798"],["/categories/ACG杂谈/index.html","96d56c3f317f6587c9334ef8747a7b4d"],["/categories/ACG杂谈/page/2/index.html","efbcf956ba1b8b31822ed2ae2b0b8ad5"],["/categories/index.html","8e7cd902bf19a9ee556d5e2318536ee7"],["/categories/学习笔记/index.html","ac602ddca214b87a82bde61056a06085"],["/categories/学习笔记/page/2/index.html","1c0f98d9a751ce27f8257defd7d9cb4b"],["/categories/工具/index.html","6c961dfc5662fe646598dddc8701dedf"],["/categories/游戏人生/index.html","f03f8c77287f45c5a22460c9430e1315"],["/categories/读书笔记/index.html","9a16d216b17b00dcf5185d31d7d507c0"],["/categories/读书笔记/page/2/index.html","294b920cf75b3bee2037b5e1606c6dd5"],["/categories/闲言碎语/index.html","e798e09775a96108ac17802f0eba498a"],["/census/index.html","9884df8e740e29adc8f3fb03f4a81a10"],["/charts/index.html","c50fd6c539fd8bfe86ec84aed142fe12"],["/comments/index.html","72cdb6bdac2c52447c674fdf5893ba34"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/index.css","bf842e7d897499cf17716fcafe1b2af9"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","be8e82b0f772ae213db9e11ae3bfb886"],["/gallery/index.html","87eac328e81c081fae91f10e443ac425"],["/gallery/wallpaper/index.html","a2e8e0d3b5622c0aa322c6de556158e1"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","af017c0f265e2601ff633e4dc83d9057"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","0b1d38efde18db44b6d8b9689042b0a6"],["/page/2/index.html","4a6c8761611bac404c309788759e7ca2"],["/page/3/index.html","ecce1b99406ca398fc883bd987d07fef"],["/page/4/index.html","0b06e8c91a0777ec16c36d821332aa6a"],["/page/5/index.html","6e52da64a8d66e58d29bec50ed2e42d4"],["/page/6/index.html","8b0916d2a28d453a158ad477a95588f8"],["/posts/1c5a0321.html","d92a22550126c506de35c96e8d83c5ed"],["/posts/1ec7973e.html","a9ddac0a391e7f4e621afb9c596b36bc"],["/posts/1fb82448.html","5a5c2f93180d20ff65fc7271723123e7"],["/posts/29c507fa.html","393b77870d858494d4dbda9cfd67f9bd"],["/posts/2f34eb00.html","bfbb3663ebf0e73e939f636465462e4c"],["/posts/2f57a694.html","385a0b5c38a8a45387bb16687f8b9df8"],["/posts/374b54d5.html","e94c05fb078491ebc4419bc561256e9f"],["/posts/3871b764.html","6d2f2f5086768912383cd92746501a38"],["/posts/3b308caa.html","5a8afaaea8cfd5152f0b11307b6c12e1"],["/posts/3c3cdb74.html","752d5d659c4f9500f5bac320d497004d"],["/posts/41f65cde.html","7844d94e4184c7793f8e92a78c0ced0d"],["/posts/4208fd6c.html","585769c186f3d6b9b5cba8a993e5ae71"],["/posts/4392373e.html","ee8f5bd5e47bbe4d0f202434d7afc883"],["/posts/440ed920.html","62052b4864c5d89454a371beab7dcab3"],["/posts/4d2b51ac.html","13692425bdbb0a2c66b2859976149d8f"],["/posts/503ae89.html","faad060061c9b8ad64ce409de266cf1c"],["/posts/535fd087.html","0c29ddf0868cce7f3f3c3396368f3c83"],["/posts/5923cba3.html","b3276d6cb04fa5f0e052499b36642df9"],["/posts/5f2caa2c.html","6ffeb9629564ee546ce2e18457b2653e"],["/posts/616be7b6.html","9ba2b420190994e7480fb7185148aa78"],["/posts/62a1ec0c.html","4e890f2ac699f6806c1d85689ad85296"],["/posts/69fb361e.html","6dc7f8a38c90eca45b12b6a44c567877"],["/posts/70685119.html","045ed07669f2015bf31bacae5fdaf5a4"],["/posts/743db4aa.html","3e45a33d051ba6fe077764ebc2f2983b"],["/posts/7b67faab.html","6530b07006146c0961b5c5fbb9c89bf0"],["/posts/7b76be01.html","543d3142594bb44654ea89076c98a7a7"],["/posts/7bff939e.html","5c6890437e38fd7db8e3b8b1e436dd56"],["/posts/7cc4ca07.html","37a22c0fb668e578a90e7d9b87c52617"],["/posts/7d257210.html","34b1d49711ac6179be4c4e81e822e2b9"],["/posts/7ea0cbe4.html","a4fdddac631d24fb282c3a0a3a73fa6c"],["/posts/7f382da2.html","d0f270c83ca92c73f39e4a5efc8c3a68"],["/posts/8207aa48.html","94240603eadd7f291713e74501efd213"],["/posts/84cae757.html","8280da25ccbb5c322c115259001c7e5f"],["/posts/88200036.html","2f9d13b59fc5104642a27801e465718f"],["/posts/922fb64d.html","f12bd7d98f8a8510e4e31dbb4f844e4d"],["/posts/98332b29.html","65d4de5b7893ae34d911160cc820c28e"],["/posts/9a1a736f.html","0b9d316d8f7d6e1c35d4adaf657c7804"],["/posts/9addd0bb.html","6bb297bc8ab33dcdb9afb3ce3a71eb75"],["/posts/9b44950b.html","4915e67b2e21892098b5d6837f436301"],["/posts/9ca149ab.html","9f30015af93931989dd7fda003863a45"],["/posts/9e4446bf.html","102599d07d9e544f918a67ecb76a9c1f"],["/posts/a13c1dba.html","4a2771ab92f84e5db62e14b0f82cbae2"],["/posts/a1f2a4d4.html","83fbb9f431a99b9a0e79db5c9a63f645"],["/posts/a5f300de.html","a82bd8f597f6111b1ebc39483ce80ec1"],["/posts/a9f63847.html","18b1c463f59a0022b1d9d60957c9e290"],["/posts/ad31055e.html","db96a7c1346791df9495691a0d2f3a3b"],["/posts/adcd6e20.html","2cc8b4093b336f16e7de639bbf12ff19"],["/posts/b0fa4c58.html","d4af20073cb7acc1f46f70b0d20dc0e8"],["/posts/b2feeab7.html","40c724e1fc890bf631f3f1115a563b48"],["/posts/b7525d11.html","f4bf7f4dab2d8af7a695f3b815aa2b7c"],["/posts/bb154b63.html","46a7ff21b2738e2195d551c73bc476d2"],["/posts/cc86a40d.html","cf74a181d714a5216ef4f704bcbf52f1"],["/posts/d36531a7.html","d9bc73595c0f867a1eca457bf61ad098"],["/posts/d442e51a.html","1dd9e774c85acd278d5667dc6d0119bf"],["/posts/d7fdf01f.html","2d8eef1294636e33aa7414171064c8e9"],["/posts/dcdf88c8.html","ac6919491393ad4c2c23a255c6ff7f68"],["/posts/dd378ae0.html","d4c4e98c1f9702187bc77d95449cb497"],["/posts/e15be301.html","962d1bbaa2fddcefc25e5c40e1ca56d4"],["/posts/e2e4b4ce.html","dca55bdab4d36f0c709c668197540e1d"],["/posts/e35ef5bd.html","2b6e0595877979caa9fb6e6eb3d8e10e"],["/posts/e5cd9bbd.html","e1581eccabf43e1dcbca12c7345849f9"],["/posts/e7a99a5e.html","6bfbc49836f3e8c4019d1973ffe21edd"],["/posts/ed52e6a0.html","366813f50021b073599f155230a66344"],["/posts/ee0ac59a.html","777086f6c1b20b8e4548184ede14e5ec"],["/posts/f09c1ee5.html","d8ec09a3463a62de81104f5deebcf690"],["/posts/f4af26a9.html","9be9124dd7b065bed9781a386c3eefc0"],["/posts/fa3cd62d.html","fdd974bf386f632958d4459737b67435"],["/posts/ffdfd6d4.html","57176dca416efe7c1fc6d0df956ff49e"],["/private/index.html","daa50ad707467787696147c018a73754"],["/random/index.html","4ad575b3ecfd0cda8f2049da56095383"],["/sw-register.js","3453e736740748cb4c743e718cbdf493"],["/tags/ACG/index.html","8967aeadfa0d7e0b27b551e5ab16f43a"],["/tags/AIR/index.html","876a5b4539e0ac65a6e3e17d0fad52ec"],["/tags/Butterfly/index.html","f7d4c8439a6342c865cac31276493cd2"],["/tags/C/index.html","46cce4c9eee2d0636e67c0ca1af2c139"],["/tags/Crash-Course/index.html","44770d111268ab5512bdb2b16754bd61"],["/tags/GUI/index.html","cc7e98f7ef24c3065dc1ae75b9ad186a"],["/tags/Git/index.html","2af9f5411a630f8c711c1a5c80fc8a9f"],["/tags/HTML/index.html","9c7b4f797a21db4be3913353f365e2cc"],["/tags/Haskell/index.html","727e8263e544b9987c76dd95384769d7"],["/tags/Java/index.html","33bff6671976802a478698aaa9fcc1d3"],["/tags/LaTeX/index.html","b1b97ec99093564f12ec4bce13bec64e"],["/tags/MIT/index.html","8123bf7a4b0475444ad319b04623a824"],["/tags/Markdown/index.html","784ea62c42872fe980e639d9c16e51a7"],["/tags/Mermaid/index.html","76167bce6feb97ddb0a5e8528ae03bab"],["/tags/NTR/index.html","671b682a685d8fac1335e1a404c243dc"],["/tags/Pixar/index.html","533dee979df1e6be784996dbd429bf52"],["/tags/Princeton/index.html","3da3fd998e52f23db1e2ca3541746eb8"],["/tags/Python/index.html","69559d16293d00fa8d66bafd9411fbc4"],["/tags/Qt/index.html","21d5350e0f8c3b3ce5e11824519d1ec2"],["/tags/Scheme/index.html","52766cc2918c48534f5fe51e5371b0b8"],["/tags/Stanford/index.html","ea364b586adae6ad3cade04ad4fec5c1"],["/tags/UC-Berkeley/index.html","e6549287feb43f08c2a55f3e18d134ed"],["/tags/University-of-Helsinki/index.html","66e10ef6bcd6417a84808f8b551b40ab"],["/tags/index.html","fc9fb5888bf459251c2cb9a8d89b2acb"],["/tags/三国演义/index.html","7eff9d5fa5ad81928e0cc1eedd7d55bb"],["/tags/丧尸/index.html","e2afb844cff2df6b7c58749b5a195f82"],["/tags/京阿尼/index.html","fb27e6f5c5b414de21ca57d1ddc4b619"],["/tags/信息论/index.html","15366932a5212b688aac11cbd78b1725"],["/tags/元稹/index.html","1ba918a45499b38a89b7d6adf6ab444c"],["/tags/关于我转生变成史莱姆这档事/index.html","87be2565c543cc017c25b307166217ef"],["/tags/函数式编程/index.html","ad2e1ae153579e3ad18639563533107a"],["/tags/刺客信条/index.html","08937fea5b0b78f8dcc0e664cc9a7223"],["/tags/卖肉/index.html","ef864b9873278c9cec28a2d0903a3442"],["/tags/博客/index.html","04b1580e59a7e0158106a400513eca75"],["/tags/去月球/index.html","78a898ec97fdce25a9aad7c822418fa6"],["/tags/可汗学院/index.html","e2edcd13e954cfa1538c79ef622747d1"],["/tags/史诗/index.html","2f70df7a28c44939485ac673ddc115b3"],["/tags/吉卜力工作室/index.html","29a8d986b434cf61f9618d8e21abd49f"],["/tags/名侦探柯南/index.html","4be50fbf023b32ad10726350b8266a47"],["/tags/后宫/index.html","aaf86756017746d5eb91eeede0e40627"],["/tags/咒术回战/index.html","b87269ecb52862d0ec2ae499bf971fa8"],["/tags/哆啦A梦/index.html","d1cf762a8fa149807bdf4febbef8ee4d"],["/tags/哈利波特/index.html","c08144cf7f71b25d85d803e35b0b96b8"],["/tags/喜羊羊与灰太狼/index.html","e1ebed34b659a7ee994c216b55ca1ce8"],["/tags/四大名著/index.html","1c1656924a8ba93b3d73704100169de6"],["/tags/图表/index.html","f48d36685877e675e27f27306687b453"],["/tags/复变函数/index.html","cd4bd3482f770593c61ddc8c179efe55"],["/tags/孔乙己/index.html","d8a567e9fca2114364780da98d5ce1f9"],["/tags/字符串/index.html","835572ae75b7bbd1abfdcf7d23ba7b49"],["/tags/学园默示录/index.html","37a8fdafb42ec211a0436c0ebe21569e"],["/tags/异世界/index.html","27108693dc9db99a7953958b6701ddba"],["/tags/微分方程/index.html","358146d9772b9194f086658bb26cae53"],["/tags/微积分/index.html","e7b9f0f9823a16ae5d9c7ef4141f31ee"],["/tags/情感/index.html","bab22e9bf54e6bfb4ef383235337157c"],["/tags/指环王/index.html","93c1b810a163614d588f459c4cbd7a37"],["/tags/搞笑/index.html","ba5e3d20553bc11c7dc196badb74f14b"],["/tags/教育/index.html","2b4ef4041500ed9418f8bbe9d839b601"],["/tags/数据结构/index.html","df31aadeeba1e4df1d931e7ad04a6ceb"],["/tags/数据结构与算法/index.html","8f5ea2a7abab0280cf333fd7814f7c9c"],["/tags/文字排版/index.html","67e3117303836e67c9b7a7332a23f37a"],["/tags/文明VI/index.html","e6f741b930499c343a8fd3f44d048492"],["/tags/无彩限的怪灵世界/index.html","ec7ba8ff3e318c66a7128c208ac97772"],["/tags/时间刺客/index.html","3eaf4c3a5fd49b7f4cd04f3b6bd61204"],["/tags/有生之年/index.html","7aa7e214e06b6c5dd17d2589f353888b"],["/tags/李商隐/index.html","61227b3aed67451ea905a5572763e0e4"],["/tags/李白/index.html","265603920cb2fa8d24e9def865a899d7"],["/tags/李贺/index.html","22506c24f55db201de24fdbd67015637"],["/tags/杜甫/index.html","537183dfd0ce32e393738f60109f07e8"],["/tags/概率论/index.html","fe9350d6c1efd364b141a121da610d63"],["/tags/正则表达式/index.html","f1c6ef882b3563b276ac2d80c15912d4"],["/tags/治愈/index.html","2738d5f2ac8aedb1e01f66e1ced602cf"],["/tags/热血/index.html","c53f4b165ef983d1dd6bfbb4fdb7c45c"],["/tags/爱国/index.html","73f8a133155f2abe01355607dd198c13"],["/tags/版本管理/index.html","2905c64c941f5a5dc9cb8a09a8efbb6d"],["/tags/玉子市场/index.html","fd9bd5b964e0e4f049442cff027e68ec"],["/tags/玉子爱情故事/index.html","7a9c491e3f6dd8111463d86b5d8daf70"],["/tags/王维/index.html","daf7728980cc9d4a6a953bb2882e0e4d"],["/tags/现实/index.html","0890b861a61e5d9f6436c0678f0e8cfd"],["/tags/甘城光辉游乐园/index.html","0731b1e0fde9d729e7aa281de79f43ba"],["/tags/白居易/index.html","e76619dee9592127233da6ed72eadb9d"],["/tags/离散数学/index.html","e0dac487e326efe3c70242ee44c5e3c8"],["/tags/种田流/index.html","05bb84f58e6f0ab9c77e20c35782487b"],["/tags/童年/index.html","823f8a9659f4fd0b730f7601b86c0fb1"],["/tags/童话/index.html","fbd60992b8a5c3d5365b06f78f824c6e"],["/tags/策略游戏/index.html","d257f408ea7883b4fb02fcc093d7bbd0"],["/tags/紫罗兰永恒花园/index.html","0a40f036f9fba6cf40ca1f28e560d80d"],["/tags/纯爱/index.html","d4e7d3fa79d33cc17836f3541176bd3f"],["/tags/线性代数/index.html","3d6772c47901ce4ad84c3210fb7165d4"],["/tags/致郁/index.html","b7fa8d1041ad634c3bcf4d514752ec51"],["/tags/苏轼/index.html","ff2f1dfd2db3206b60832ed290d301db"],["/tags/计算机科学/index.html","fe4c8e3e9243a9e0de0e5c9acd06aa10"],["/tags/词中之龙/index.html","db1e64fd2f340c616f54c207fc2005ed"],["/tags/诗仙/index.html","99cd2e7abfe6705fda9616ee1a7a530b"],["/tags/诗佛/index.html","eddd07221dbdf7830e0b80dbccb9de3a"],["/tags/诗圣/index.html","8ed29ef12bb2ddff3dfe740efd538537"],["/tags/诗词/index.html","31c381c6436a211389a97154fb2b3dc3"],["/tags/诗鬼/index.html","a442cc8d19e170bf4b6c1152f18c7a3d"],["/tags/读书/index.html","dc3a894f6ff0ce8899ba297f2865a09f"],["/tags/豪放/index.html","334f7e9f20a03270cad88dd00e36ecc7"],["/tags/跳跃/index.html","b466a0d4f31042a1c44e90d3e5a68d74"],["/tags/辛弃疾/index.html","5856035554bc7440f050824bb6496a00"],["/tags/钉宫/index.html","0ec234772ced5c7d163f668d5d92cd8f"],["/tags/银河战士恶魔城/index.html","0367c84610377888eeeace8e3519e2f3"],["/tags/陆游/index.html","1947214392050439172be62a2e2c80eb"],["/tags/零之使魔/index.html","b5301db264339a469f2493ce6f792585"],["/tags/霍比特人/index.html","3418a8814ec4ff8337185f1957a51768"],["/tags/飞屋环游记/index.html","9026c2bf56de3337f0367706e5ab985b"],["/tags/魔戒/index.html","cf6328b3e8a6b1156dfeebaa93b25740"],["/tags/魔法少女小圆/index.html","07d54c1d2fbcb8fa5206b84d5e90d35f"],["/tags/鲁迅/index.html","aa5625ac9669b32da755eb24b05e6f26"]];
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
