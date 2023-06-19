/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c7fb12501a7b0ab87c7fee24339199a0"],["/about/index.html","a0b2c24cb508ab84dee50d4e5bc6dc86"],["/anime/index.html","1846fbecdd3835dc697202f22394ed1c"],["/archives/2022/11/index.html","fbde2171bb7e0b5a310f5109f3340394"],["/archives/2022/12/index.html","aa6c4c3badb579110f82a278e53326f5"],["/archives/2022/index.html","236dd656902d0cd456dd2b6cff2a1058"],["/archives/2022/page/2/index.html","a26c945a23831aee8e25d502233ae09b"],["/archives/2023/01/index.html","6b11c18b3a72e71f6738966de1ffb85d"],["/archives/2023/02/index.html","a29171539f250256d63a92e8b7ef3467"],["/archives/2023/03/index.html","01b8220431d39a67109a5643c1c7fd81"],["/archives/2023/04/index.html","a7a8a335b8bd288e1915f938b09319f7"],["/archives/2023/04/page/2/index.html","6f8177c7a00d4a0855c7349dba6f65fd"],["/archives/2023/04/page/3/index.html","a6c91f493493aa305d4151ecdc4463ab"],["/archives/2023/05/index.html","ec64e0f093fc7c7b1d0fdbc4b1e82b2f"],["/archives/2023/05/page/2/index.html","f35b31581ead6e216dae62e0bd21ab91"],["/archives/2023/06/index.html","47373e6413dca8090b50ff5272c732fd"],["/archives/2023/index.html","48bb41ae8823a59cc6bdd6af5bbf7cfc"],["/archives/2023/page/2/index.html","5367acb56797c8d5ef8a98f487b255fd"],["/archives/2023/page/3/index.html","a2cc255097a1d0558c011679a44fa756"],["/archives/2023/page/4/index.html","31a7c53867a965689e38df5cdecb4e39"],["/archives/2023/page/5/index.html","c831257b4258d97e84159eb3dfb9d34d"],["/archives/2023/page/6/index.html","e0a27e1c1cf31dbb4ef92931e160416a"],["/archives/index.html","1c7e378a443a345cc63b5fe30ef6588b"],["/archives/page/2/index.html","46398a76aa098ef4f34732e4b1fa4e28"],["/archives/page/3/index.html","48f3e9f2f86152ebcfb9fc64560972c1"],["/archives/page/4/index.html","b46a985262c7659bd037aa9aef491a48"],["/archives/page/5/index.html","a196cc4e8ea7c8501d95c49dfff0f3f6"],["/archives/page/6/index.html","42d96183a710cacbb01fa260fb9bb8c6"],["/archives/page/7/index.html","6ef0ee39f1eaebe4cb9e7715ba6434bc"],["/categories/ACG杂谈/index.html","18689e1a3d7b9e63ca11c0b18aefb377"],["/categories/ACG杂谈/page/2/index.html","174ec6e0e30589ff2ba690bfb3f4468e"],["/categories/index.html","c561499487d64ddbfa513e17ae5d0357"],["/categories/学习笔记/index.html","70c982f5a73210c09e6369d39810a70b"],["/categories/学习笔记/page/2/index.html","4b55ca1e7701129b1ab25c9cec4ce6ee"],["/categories/工具/index.html","298cf08cbdcffd145d795db0415d06ee"],["/categories/游戏人生/index.html","9453a9a33a41904e7d213328bf0cc723"],["/categories/读书笔记/index.html","b07aecaa71597f843a0eb1d051a7af56"],["/categories/读书笔记/page/2/index.html","fdedeb62a073b5df1bba6e3261deee96"],["/categories/闲言碎语/index.html","d8687b904b74042a8d707664c8dc5d74"],["/census/index.html","648efae44c09aa196f9d1f06abaa288e"],["/charts/index.html","5ed9773aedbd7859818c12828a9395c2"],["/comments/index.html","17aff1741cae8f2c630e25ada13e1d52"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/index.css","bf842e7d897499cf17716fcafe1b2af9"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","708a7e2b1ff6ea4b7e2643ae28104b9f"],["/gallery/index.html","93107e04f975047b04a9f5e8a295c8c2"],["/gallery/wallpaper/index.html","3f3c0e80ed1b671545ebf247166494ae"],["/illustration/MIT 6.050J & 2.110J：信息与熵/复合电路比特.jpg","7f3b39dad7099b4a5344b0a883f437bc"],["/illustration/MIT 6.050J & 2.110J：信息与熵/源的熵.jpg","5e97d5ac9576435b2b958a0862bd444e"],["/illustration/MIT 6.050J & 2.110J：信息与熵/电路比特.jpg","aedc9d562cf39c1c4d799c698246e990"],["/illustration/MIT 6.050J & 2.110J：信息与熵/通信系统模型.jpg","2d9b043c66982f7eb2881d1a5dfebfee"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c6ef4170c44300485dd92e5486b59881"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","9158f44fbf95f81fecb1a4edc337d0ca"],["/page/2/index.html","332f1b8d5d39048303a70faa3182b3dc"],["/page/3/index.html","c878d4ca1b8730ea617d7c020e202753"],["/page/4/index.html","6b082e3ebf8d3ed5e9490f96568ea2fc"],["/page/5/index.html","7aa927e11ca7ad8b1a66a715edb99c7d"],["/page/6/index.html","24fccb50f925ead5c3ed068928fdfb8b"],["/posts/1c5a0321.html","dff6bfe80de8dd05d6f7109a38d94273"],["/posts/1ec7973e.html","0997528f5a2f2596002895b0990d4a8e"],["/posts/1fb82448.html","daced4154776e830baea89053d4ebf90"],["/posts/29c507fa.html","900ca7a00c41570a594e50ed9fd48a53"],["/posts/2f34eb00.html","a6b26e06b65ba028b515c74831cd1b6b"],["/posts/2f57a694.html","e60b2e4a05597b82f0545bf6b58f054e"],["/posts/374b54d5.html","23da86dfbbf078450297d54b48ddfa39"],["/posts/3871b764.html","63eedb059980ce64021aeb98bee7f230"],["/posts/3b308caa.html","4464bbc9bf106a8c27d77f533d15e888"],["/posts/3c3cdb74.html","f08af36e77c041b0bbaba46b2a4e0349"],["/posts/41f65cde.html","f11850eb780020865f505e6b90f64194"],["/posts/4208fd6c.html","d92819eb263609d077811cc57437cda6"],["/posts/4392373e.html","c33917b3d5583da50c14faeedd1cb5a6"],["/posts/440ed920.html","acacb8798e0f087a6dea488824870a62"],["/posts/4d2b51ac.html","dcbbe0dbced1e3cf7a1c3b5b49971455"],["/posts/503ae89.html","49cf1dd5be79499bcb41a212f00d3831"],["/posts/535fd087.html","f9f6cbc2239d9bcdd4e66b3ec510b5e6"],["/posts/5923cba3.html","b97865416717c016bdf12d284009e195"],["/posts/5f2caa2c.html","5868d6413b21e996441f045cd5e5d11c"],["/posts/616be7b6.html","5691fcfa9c73871375e66ccbf2e9ca9b"],["/posts/62a1ec0c.html","a76370b6ded3e14bb804a62769d020d1"],["/posts/69fb361e.html","e3caf16b1621ca6531bf8cbce755ec82"],["/posts/70685119.html","f4409156af4ee7b3081ac8fa45139545"],["/posts/743db4aa.html","e6db4e6ab56045aa1c165d6f1d19e22c"],["/posts/7b67faab.html","f41eb1c7bcf61df8ebccf82a862c66d7"],["/posts/7b76be01.html","746037b382e9ea7ebb414b24d5073205"],["/posts/7bff939e.html","402bbe0c656ea865a344c8d6bf00460d"],["/posts/7cc4ca07.html","66ed91568dd9e5bf82ea669f067f6254"],["/posts/7d257210.html","f0928e3fc0a57c6749d21715c3f7f5ed"],["/posts/7ea0cbe4.html","a840c999b1ee8db2c313becc6c76162b"],["/posts/7f382da2.html","b383880f4ef88fd55fb7e1510553a701"],["/posts/8207aa48.html","ffc4f92bbb3182fa256f87cf0810967f"],["/posts/84cae757.html","6774c5369a5483283538082c64805d56"],["/posts/88200036.html","a5880510464d748b6eae61d928b52fe7"],["/posts/922fb64d.html","3f41af3d62dd902b198596a7c993b9fd"],["/posts/98332b29.html","ff050efe9582a5e57fcb700d40cbfd57"],["/posts/9a1a736f.html","34b63eb5f29af725f45deb46d67e2f32"],["/posts/9addd0bb.html","3635b375dc609cdadedd4fa1e5603007"],["/posts/9b44950b.html","5c9ccd6c213531e625dd2e623bf7f325"],["/posts/9ca149ab.html","1e7314b0bc29af7396569a2f13e41f8e"],["/posts/9e4446bf.html","da5d2acdd9975719b6410564cbbaff98"],["/posts/a13c1dba.html","a0c43072c49e81e63d16e8f4011f4c26"],["/posts/a1f2a4d4.html","3dab4708e1e8e940978523b9ddd6e4a7"],["/posts/a5f300de.html","847405bc1a111d2584d950a5b7fb2e8a"],["/posts/a9f63847.html","516b4b1165de242bad3706a2824ba392"],["/posts/ad31055e.html","589eac591c2c8ae0d2290e779abb527b"],["/posts/adcd6e20.html","601c120a69e1079e40f2bda16914bd78"],["/posts/b2feeab7.html","b769707b69f0ffb2fa750d30e6dc9819"],["/posts/b7525d11.html","4a86fdde73619b3823bbffcb78417474"],["/posts/bb154b63.html","4d5449ee752f55c986bdd98b065ba402"],["/posts/cc86a40d.html","af711b4fab7593f0b26d173e1e181f9a"],["/posts/d36531a7.html","6993b14a8a732e32e57e98e1987debda"],["/posts/d442e51a.html","d34dc6fa1bffb041903218a6c60f9946"],["/posts/d7fdf01f.html","dc8b3de447ef1223645ebecf15bba75b"],["/posts/dcdf88c8.html","aacdacc8374f5de0bbbbf12821a0ba2c"],["/posts/dd378ae0.html","0054c44daea70d7aaa75fbbd7ac3ed36"],["/posts/e15be301.html","6a4f64f4fa6402d934967d24349f1da3"],["/posts/e2e4b4ce.html","002ccd6fac3accb82aa711ce2e25cc3e"],["/posts/e35ef5bd.html","9768b03b2ea6ab0f7a5cd6281dbfd311"],["/posts/e5cd9bbd.html","196792a65e289fe7bd225f35d65cd649"],["/posts/e7a99a5e.html","bdcdb613b44bc8b740445bad66cd4cdd"],["/posts/ed52e6a0.html","e9140ccb57ad91f758ad9d7a0f06e498"],["/posts/ee0ac59a.html","6723ae596ab6451f57d3b331727af30f"],["/posts/f09c1ee5.html","133c492a8efae61a2c9178e0b019589e"],["/posts/f4af26a9.html","25b9a81ef33aceb3759a4aa53f293b77"],["/posts/fa3cd62d.html","424aa922b7e46723a0805b08759f1237"],["/posts/ffdfd6d4.html","7e31939d6e6485847f51a3109030325c"],["/private/index.html","72a5cf15198e6af05e313eadf0226a5e"],["/random/index.html","15073a8591de3474b8035204f3c20be7"],["/sw-register.js","77bd912f87f71cfb0cf075c52eb9f1d1"],["/tags/ACG/index.html","1be60a71a5b338db79d48c679ecca7dc"],["/tags/AIR/index.html","662a6e26fc7994eef2abe2bf8d6c8dce"],["/tags/Butterfly/index.html","9bb6508c64067db0c5bfe373957f227c"],["/tags/C/index.html","86708c23fc809abec5f94af6452a303f"],["/tags/Crash-Course/index.html","2ec99b322bb22ee5e7bbf56b6c2023ee"],["/tags/GUI/index.html","00b65f82aa54bbff5503f71a30cf192e"],["/tags/Git/index.html","6a0a39379f0649d1da37423a3e3cda7a"],["/tags/HTML/index.html","d64db04cdb028bc5e917723ada98bcc7"],["/tags/Haskell/index.html","a9627acc5807367032fe83348abc824c"],["/tags/Java/index.html","8021121b15673e0f9b04ca1deb682712"],["/tags/LaTeX/index.html","1351f3ff4148ccac5f2a0606924632fc"],["/tags/MIT/index.html","527a525bd0027744a5d84ed4ee8b6fe2"],["/tags/Markdown/index.html","38669880886d8bf9cf5b9d3338593372"],["/tags/Mermaid/index.html","97765f25fbc3abc6d352e5b6c29c4872"],["/tags/NTR/index.html","9129666cf7e2353dced17a8ac79f5960"],["/tags/Pixar/index.html","54b7bafdfd8f2fe476dd088d4d947821"],["/tags/Princeton/index.html","c404e7d2ba1e6f3cc5b980e14a75a033"],["/tags/Python/index.html","0d4ace5cccdc70aca433fa81c24aad7f"],["/tags/Qt/index.html","4503f2d7df00332016941b0edba8b8c5"],["/tags/Scheme/index.html","f6502441e27163dcc5bf17940de13ab1"],["/tags/Stanford/index.html","0f447af922d54b9edcc7546ee34f14e4"],["/tags/UC-Berkeley/index.html","2b2196d0bd2da6fc139982df360edeb6"],["/tags/University-of-Helsinki/index.html","ea4e6b051b76f6c225b584da1a7cf36f"],["/tags/index.html","bb2647eab804ddc7f3a1bbdbbb25f39f"],["/tags/三国演义/index.html","2acd1ad4c796fb3495ea5d973617511a"],["/tags/丧尸/index.html","7be7e4b290aa03fc6f19ede7c7ec47b6"],["/tags/京阿尼/index.html","0d651e793460c4435d53d16b3e9adf4f"],["/tags/信息论/index.html","dffdbe4cea98c97142dd866afe32512c"],["/tags/元稹/index.html","cefa2d59cecb59402928f37dfdcdeb72"],["/tags/关于我转生变成史莱姆这档事/index.html","5447be189c90077688a9175afb47a2c6"],["/tags/函数式编程/index.html","1ba9bf0b8ab9311a93e95a4454d11d03"],["/tags/刺客信条/index.html","cc2354a57536d4430b59f930f7f08380"],["/tags/卖肉/index.html","015ef96a2d24a160a76db417c41797cf"],["/tags/博客/index.html","99ce3f894bee5b5f25b8fa1528f4d775"],["/tags/去月球/index.html","cb70877ca39a15550b22a090dbfd9ded"],["/tags/可汗学院/index.html","99b553f7a8f336d28cbd314dae869734"],["/tags/史诗/index.html","34571cc67d820e478dc2a79cdfec76e3"],["/tags/吉卜力工作室/index.html","36a7945562719d04ca31bc63f36c1542"],["/tags/名侦探柯南/index.html","cf99a3ec2fb2b823d5458ef57dfdfac7"],["/tags/后宫/index.html","56cd033062dd40aa28ef11339f36cb7f"],["/tags/咒术回战/index.html","aa9759a3fba90d594392e1130d488c62"],["/tags/哆啦A梦/index.html","ad630010f754886a0971e470dd9d3a52"],["/tags/哈利波特/index.html","e09603d3da5cd60bc240940cfbbbd52c"],["/tags/喜羊羊与灰太狼/index.html","d495fb77af3272ae163ebbb2b308fd4f"],["/tags/四大名著/index.html","824f94b6a91f5e20de4867c39b33a816"],["/tags/图表/index.html","c1c3aeda4d61f17c568ecb52e2989ff6"],["/tags/复变函数/index.html","be61ea60fe67d3cf8fb70851454f8326"],["/tags/孔乙己/index.html","8304fa8f03a253db2e5856dbd3cebf88"],["/tags/字符串/index.html","92fd1584bf8d398644769a9aa52798c7"],["/tags/学园默示录/index.html","88151749d79b98cde3742a03b1aebfd4"],["/tags/异世界/index.html","bd92192f394d332fcf2f5dd00b5f2429"],["/tags/微分方程/index.html","49a0f302b7575ea70007d3d220c84c5c"],["/tags/微积分/index.html","31c7b810ddc041e00f08a60a58bd3ab0"],["/tags/情感/index.html","62d847c4006a6779e24b49f052fc0105"],["/tags/指环王/index.html","b951f9ffb75cbef000994169f2105bbd"],["/tags/搞笑/index.html","04cc5bb8e1684848bf202875bd2eb229"],["/tags/教育/index.html","2af9f71688252927cca1331595571744"],["/tags/数据结构/index.html","28f8409236a8d52b0f51ad9aba883801"],["/tags/数据结构与算法/index.html","ee031b0192d7c1aac92db07fa8300c83"],["/tags/文字排版/index.html","ad36a60c707f655b85cd84513e0e8942"],["/tags/文明VI/index.html","7e45d816045d83d54b991b33e434983c"],["/tags/无彩限的怪灵世界/index.html","528ba6eaf90a785eae27c95de7097c84"],["/tags/时间刺客/index.html","5016e1f25e9d8499c886e4f1df520cc2"],["/tags/有生之年/index.html","6e48ee74fccd8be2a3afaf450a3a39e2"],["/tags/李商隐/index.html","c60437e1328ac93e22a34eeb64f54bf1"],["/tags/李白/index.html","a09751094d76dc0514762484c4b256e1"],["/tags/李贺/index.html","d48cb4f193935d8ee8beb9396c0171cb"],["/tags/杜甫/index.html","f7820a101e8116bb236e546d0f9e65a7"],["/tags/概率论/index.html","2281404d7caeabbba29405ca75695c31"],["/tags/正则表达式/index.html","39da3de65d1341a26c3b8ed0575d8d6a"],["/tags/治愈/index.html","2c0729bf6dde1e0a2c4586be82ad10f1"],["/tags/热血/index.html","d4b62d0f9b07e40e260be2a0c7476e2e"],["/tags/爱国/index.html","055bca30fd7165e57fddb937aaf5760b"],["/tags/版本管理/index.html","fe0285d995fc34f1ab9d7ae5a6706e3f"],["/tags/玉子市场/index.html","79e2b3331f3e809eccff34506fbed4d3"],["/tags/玉子爱情故事/index.html","185a02bea58ae3f68445f94d31ae3bed"],["/tags/王维/index.html","396af8494bdd7febd4f0961d02f405f3"],["/tags/现实/index.html","4c8c4f253e06cadd5bfa756f2497b005"],["/tags/甘城光辉游乐园/index.html","7f4caf5ca70854ebdb699a6dd583f95b"],["/tags/白居易/index.html","8c9ff4ac7d111c26013b58248f4b9229"],["/tags/离散数学/index.html","bcfe333735acfa6eca220d8282900333"],["/tags/种田流/index.html","2c84ddbb6243aa30142d176b7d2dbe43"],["/tags/童年/index.html","5da2c011a67295d4766a361b5ab25546"],["/tags/童话/index.html","b0f7bf9d065a837ee4294bbeaa5e69d7"],["/tags/策略游戏/index.html","734da9174baa38c786c30995ea654cee"],["/tags/紫罗兰永恒花园/index.html","515a2fec3e21631e4c643f7b9c4ba3ac"],["/tags/纯爱/index.html","74b5b67171a4303460dded6bbc39e9fd"],["/tags/线性代数/index.html","64cbd349504f330284fc47661d12cd0f"],["/tags/致郁/index.html","7210466d8b7ade6d29cc3e3cc075229a"],["/tags/苏轼/index.html","a4a46de161a6bbc4264002839e446737"],["/tags/计算机科学/index.html","8149705e0efa3ccb6ca4ba15b3a90812"],["/tags/词中之龙/index.html","3c83d2e22d68f42ef2c2513196cdf9d2"],["/tags/诗仙/index.html","3eb0fd023a56a98ef728f22f8a212f2c"],["/tags/诗佛/index.html","7825d7dd1cc6dcc196ad070e17f76e8b"],["/tags/诗圣/index.html","441eb2ff9542b19b9cf416c0376a0b68"],["/tags/诗词/index.html","d3f0bd81ec1821e41f3f3334307979db"],["/tags/诗鬼/index.html","37c8e80f72b63a418f5b79fe2f45de7f"],["/tags/读书/index.html","36f954b89114eee0e147014a299dece7"],["/tags/豪放/index.html","e4b75f9e0e48aa4cd9b99b913b3e3cea"],["/tags/跳跃/index.html","246e1d32a450ac9320a0558852ebcf08"],["/tags/辛弃疾/index.html","7ea54bbc038f2aae821679b80dc69e85"],["/tags/钉宫/index.html","bfb411a334c992362919e89486e64ef0"],["/tags/银河战士恶魔城/index.html","879e39ce955417c1492caa6560bcd3b3"],["/tags/陆游/index.html","ea8f140022a1476507681ed21d2fdb52"],["/tags/零之使魔/index.html","e86c339e892fd075779336ea7d0420b6"],["/tags/霍比特人/index.html","d31c65e641a029776dd3b37022b08061"],["/tags/飞屋环游记/index.html","8848856078290467814a8071980591f4"],["/tags/魔戒/index.html","22dd01852aa9a190a6e3af35547fdc16"],["/tags/魔法少女小圆/index.html","255c3d053369bc504a4187c26cc34d1d"],["/tags/鲁迅/index.html","d0dc213b0f1361b167d3cb16bf6b4154"]];
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
