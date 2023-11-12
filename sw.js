/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2bc68bafcf7a101276042cb78a77ce04"],["/about/index.html","089eca77cc262f9758f663f8d4b714b8"],["/anime/index.html","672955aa52a5a3c90732b01808d2ad19"],["/archives/2022/11/index.html","a607c58cf18ccc4092ed0bfa5b139b89"],["/archives/2022/12/index.html","f1c0a229c54a4cc973f3361208cebc13"],["/archives/2022/index.html","c3f42504db675016a8b7ef245de9ddac"],["/archives/2022/page/2/index.html","7df0976d6493533451a5775eef759631"],["/archives/2023/01/index.html","62caf97c55c48b430e3b1636a639ac65"],["/archives/2023/02/index.html","9e89c95fca1d256674d422b8ae38931f"],["/archives/2023/03/index.html","b62948ae6d99ea49abbf930294080806"],["/archives/2023/04/index.html","40eaf7a4c95b9bdf2d8c7fe5f1bcc001"],["/archives/2023/04/page/2/index.html","f9ce5bc735c5dfc550a28c77fed686fc"],["/archives/2023/04/page/3/index.html","cca88792453889901c6b4bae2bb8bec6"],["/archives/2023/05/index.html","ab5ed6cd6710e27c3f408c1330915694"],["/archives/2023/05/page/2/index.html","753ae2815c1c7e626cc50414e5d95142"],["/archives/2023/06/index.html","dc5b539d2fee0cd257d5ebd5f722c67c"],["/archives/2023/08/index.html","ea5db70996e45c0fda05749260947774"],["/archives/2023/09/index.html","8ec6aa110861ac399bf8abb4dabb1d3f"],["/archives/2023/09/page/2/index.html","a99f7627244eb7895da16fb136de9509"],["/archives/2023/10/index.html","e2cca85ddc53bb4b056e91c4544b8463"],["/archives/2023/11/index.html","700fc8d5d8177adb28963cb485403a79"],["/archives/2023/index.html","79ef908458f1c0dc01a9a1963bb49065"],["/archives/2023/page/2/index.html","d0e95a1925188dc2732c610cc1a0921f"],["/archives/2023/page/3/index.html","331f71bafbf3cdee3edcc3d2b925c81c"],["/archives/2023/page/4/index.html","ca55180affbd775a85fb856a6874a263"],["/archives/2023/page/5/index.html","83ee69cec61524d9fc28742f4a825f63"],["/archives/2023/page/6/index.html","672e5791da4bb92e52f489605323a55b"],["/archives/2023/page/7/index.html","41c087597544b068bf2a7ac738cf2d6b"],["/archives/2023/page/8/index.html","bb545691b76b74a81c5a0450fb093b26"],["/archives/index.html","ac137d77fa8d861b70657cfd1b1e1fea"],["/archives/page/10/index.html","e62422c1d4e264b21dca7faabbefd650"],["/archives/page/2/index.html","689fd10207fc12cd8475eb7e15447489"],["/archives/page/3/index.html","2252e1a2cd6896d7deefc55a35304d53"],["/archives/page/4/index.html","a068e99e1521866ec5e594f48c92cac4"],["/archives/page/5/index.html","37b180ab79ecf62835f8696afb63e37a"],["/archives/page/6/index.html","c3a28ae79f1ebd467c6803e2b68baef2"],["/archives/page/7/index.html","c6a120cab1afda39a1b0cb6ad441d709"],["/archives/page/8/index.html","c517ddd72bc6178c58eacd2e699441d5"],["/archives/page/9/index.html","84db99fca2109ff79c6e272ee345991b"],["/categories/ACG杂谈/index.html","f386b38c172925578a780d9800c0d231"],["/categories/ACG杂谈/page/2/index.html","d0615d99c82fff6086c54bf5a557be9a"],["/categories/ACG杂谈/page/3/index.html","506fd4301ea06d9416aeba803e35b298"],["/categories/index.html","cf2c0352b80626efb13a6760651ac43a"],["/categories/学习笔记/index.html","d5c40023ca2e63b91403303da5c5b7fe"],["/categories/学习笔记/page/2/index.html","fb450e0046e8588bfb6616ee25dd54a3"],["/categories/学习笔记/page/3/index.html","2959ab9a8c3e690abc43a1f25afac494"],["/categories/工具/index.html","32f54c297903c71156312c7999d611f3"],["/categories/工具/page/2/index.html","ffd302634c15a160422831b98a0a79fc"],["/categories/游戏人生/index.html","38330936b64e799963d7d5ae14e42043"],["/categories/游戏人生/page/2/index.html","a5e508d86936ca0756cd4ce3a13cb9b6"],["/categories/读书笔记/index.html","786b7d8e528d8bb42a1e643801b9e63d"],["/categories/读书笔记/page/2/index.html","d5c181084f7df60a66610325a22427ba"],["/categories/闲言碎语/index.html","71c0c026486a9dca41b6f5f5a6fc7a58"],["/census/index.html","5f063f4bebc0699e62096a9914bd4a78"],["/charts/index.html","fff7c00e229a0ae11fc20698197a5ec8"],["/comments/index.html","9f840fbb44fbfa8c5ba9eeeb6507af1d"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","af30ae09e0018c1938521799cd2b8423"],["/gallery/index.html","a9c99bacae507c4b44eefb45d85f6edb"],["/gallery/wallpaper/index.html","90c67efbc1ce1afcb7505a8dddcae007"],["/illustration/UCB CS126：概率论/MM1 队列.jpg","4549ba447393fe27d87700f90801cd95"],["/illustration/UCB CS126：概率论/有缓存的马尔科夫链.jpg","06c788325775d69c7bfd6602b3b66a8c"],["/illustration/UCB CS126：概率论/队列网络.jpg","05645f5f94b06cd9ad3322ea39a8a051"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","188eca692dc501b4d1b8c950e4f9f5f3"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","32c3ca821c8c740a008c708b7cb9debd"],["/page/2/index.html","8bdc6b7a74524df982acacf936bf5627"],["/page/3/index.html","339ac1ea34a62033e03850233846f0d7"],["/page/4/index.html","3eaaf1eb8e1830979805b22198034382"],["/page/5/index.html","89cb432e50134a718adca9205204ce50"],["/page/6/index.html","d87bdeb484bf0ce9065c999cb725fbdd"],["/page/7/index.html","b69c0e06ffb3e024a52075a6cfcdf2c4"],["/page/8/index.html","93994dba3e8519e88d5f925fae2873f0"],["/posts/106331b4.html","81c16b1c6d07ba96638d4f006e755749"],["/posts/1185a02e.html","9963070441cc62aa8a8e32ec66212ded"],["/posts/12e06b11.html","fdf4f243e7b090e13219adc22fe75339"],["/posts/167c7c45.html","b3d46b3c46679dfe736c2a86746dd77d"],["/posts/1743dad6.html","304b5010b208f0f063b84579bf428daf"],["/posts/175a8e1.html","d46d309b7ca00a2a18867d8dfe4841ae"],["/posts/1be398e4.html","3067dfca468ad8a4f59c63d6640d8a5b"],["/posts/1c5a0321.html","5ec891efb3b3135e8c07b6b0ae16451e"],["/posts/1c5b1e9c.html","cdde2b617c5b17e4d33668eb42e2d9c5"],["/posts/1ec7973e.html","a45bf5d5c1659861b4f8e2c6b0dfbe6d"],["/posts/1fb82448.html","21dab8980b6fbbd512f069b165af40c2"],["/posts/21f18fd2.html","a990a00c0e39fc9181c41ebe29d4a9d7"],["/posts/29c507fa.html","05d84d646bb13d9faa5cbe0415bee396"],["/posts/2f34eb00.html","09a646fd80d68c57d4f9f0e1be68dcd6"],["/posts/2f57a694.html","f9ab942e72656086298dde32f2c8a70e"],["/posts/374b54d5.html","d853610bf316db07b80bbc610d589893"],["/posts/3871b764.html","883e172c16e785d23ba6f5947e9c8178"],["/posts/3b308caa.html","3184f28fe04cb7a440a4bc121dd57245"],["/posts/3c3cdb74.html","839a2b08489e660153a3ef9f2986940d"],["/posts/41f65cde.html","080619969da65bf05292069a8e6d2e2f"],["/posts/4208fd6c.html","0952d19893a851b3ce2267f7e022ac2c"],["/posts/4392373e.html","8f8cce61f65c16c219292ea669d9d78c"],["/posts/440ed920.html","faddc5b9169025f6c436ac60da7a70e9"],["/posts/4d2b51ac.html","408514cf443a994e53042d3a7a0d90ef"],["/posts/4db1a52a.html","ae14dd230d7cf7f6239209636a5d0023"],["/posts/503ae89.html","f266e93f13e27c3d9d505788c96d9067"],["/posts/518e2799.html","e910166e4d21ac25f1a5b2d1566cd458"],["/posts/535fd087.html","22ae90d143116fc02c4ca3f3e2c20ce2"],["/posts/5923cba3.html","01c57a387c2021850ad0c70450a2ddd0"],["/posts/5c1bb6b8.html","8fd10370d254f7c2c319c9cfffff65d5"],["/posts/5dc45f0c.html","f3875c3a7c4d051cd07c0b0d0b9bacd1"],["/posts/5f2caa2c.html","c4583ef72eeefa245762213f6633695d"],["/posts/616be7b6.html","f97cd86b7499b2b9e8fb8cc3b4668bf7"],["/posts/62a1ec0c.html","702190ca5cc2494d56c59bc4088d8be8"],["/posts/69fb361e.html","ac6d7cc4a0758cbed751314084387006"],["/posts/6a8518ce.html","2f13a80c462102ccd15b5c93a0a6aebc"],["/posts/70685119.html","a22a762b072e905a7c0866ddca1679cd"],["/posts/743db4aa.html","479d1c00cc7d511181d8b0de23ac6c31"],["/posts/7b67faab.html","7d1725bcab9cbad8471b6f03fe4c3640"],["/posts/7b76be01.html","36638c5ad4d7f7b5c14eaf51c8b2e467"],["/posts/7bff939e.html","c43281cb4098f5092a15a638848e0043"],["/posts/7cc4ca07.html","9296979859a475cc2d33023b613ffc75"],["/posts/7d257210.html","3831f2ef62139541b3447127051416af"],["/posts/7e6a5c94.html","96cc044d76cb7508d6643402d68c6876"],["/posts/7ea0cbe4.html","467bac770c0c8aae0a642effb16a1c72"],["/posts/7f382da2.html","1ab0902d31b5e6fbd61ec6a5120578c3"],["/posts/8207aa48.html","134aa607f72a38c4bdaeb0b71c587a47"],["/posts/836ea9bd.html","a0acb41938870c1b79d83033d1b3fe99"],["/posts/84cae757.html","8fd6c49b9f448048c3ef0ccfc01b9e11"],["/posts/88200036.html","62d61ad52a93ca1a45ab13c19bf39ead"],["/posts/922fb64d.html","a43ef298d5a838f5f9102141545277e8"],["/posts/98332b29.html","715fd0c288aae6f17744c6f20d3392e8"],["/posts/9a1a736f.html","1328fa96d4bb2b82f26a423643a26449"],["/posts/9addd0bb.html","f692702526070371f6f782a088382b5b"],["/posts/9b44950b.html","ed14e45048187a0e903f7e53f9dfa339"],["/posts/9ca149ab.html","320705f3eac95e6c8cc40e4f9efb4f08"],["/posts/9e4446bf.html","35dcc7507ee88684fde8aa2f512225d6"],["/posts/a0271e58.html","cbebf2aa051ca95075384a39fba914a6"],["/posts/a13c1dba.html","ef7c70c7ef0992060057ada19318f097"],["/posts/a1f2a4d4.html","fdb0486620a2c25270d04255f68f7f81"],["/posts/a5f300de.html","b1e64c0a7aab2418017e7a8e99f67090"],["/posts/a98766fe.html","151253870854593c8ec21fe92cf4f670"],["/posts/a9f63847.html","448f2bad35aa46854c0234b5d6a5544c"],["/posts/ad31055e.html","8c0cd4960cc0993c5955d4f5a31999ae"],["/posts/adcd6e20.html","8c798c9704284d2090d65d32d01ea330"],["/posts/b0fa4c58.html","275cba2ff4aff8ba5b496d8882086e3a"],["/posts/b1168675.html","88aeb3a92c2a2fedc62a44a13053bd96"],["/posts/b2feeab7.html","d2142c901a78581a3582d7fb6f50aa2b"],["/posts/b6d66f1b.html","965b6a59094bcaa7f20f079834157230"],["/posts/b7525d11.html","34e982e30d9bc0b00430743f64217ea2"],["/posts/bb154b63.html","f1ccdbfcd6765146219ced8379b59cc6"],["/posts/cc86a40d.html","5cdbfec2c7e0204c0a2a8a0cad0f6c3e"],["/posts/d36531a7.html","18ca1fc157ea3c8e98b616199b02f292"],["/posts/d442e51a.html","e60508a3514200642256e59a580ceb94"],["/posts/d7fdf01f.html","773c8bc0937d3a9874f7d64112367e1c"],["/posts/d839b0e.html","931c79b4b5b754fce6a839130202c8c3"],["/posts/dcdf88c8.html","11478786abe3bf3539ddb0e751947583"],["/posts/dd378ae0.html","d9e064f6d192c00b17bf637e4b5d21d1"],["/posts/e15be301.html","b03ee367c52a95206c28fa253274178e"],["/posts/e2e4b4ce.html","ccf2868942f6319ce9c71f34b52c4032"],["/posts/e35ef5bd.html","a833368fae923fa983ab48a970110824"],["/posts/e462ba83.html","48a1a5ccddf0379d7bf4be325916eddd"],["/posts/e53204e6.html","3ad41568286d23eb5761a1c50459af2b"],["/posts/e5cd9bbd.html","7f44fe273de1fb5ea425abde2c519263"],["/posts/e7a99a5e.html","45615cb33440036f86d77ee635b39cca"],["/posts/e9318100.html","78bbc24dae8c0d63cc1c1acfdc28a28d"],["/posts/ed52e6a0.html","c7f9441b37065e600f7562f851ca807a"],["/posts/ee0ac59a.html","36cd1f402d0532ac5c0195b798a4b3a8"],["/posts/f09c1ee5.html","a1db2fc86f97173856c17732a3b1355c"],["/posts/f1252f66.html","8c1a0df6fe5defa0c810533950eb5f91"],["/posts/f4af26a9.html","f2ca6189140fc876c8cf3dbbb4aac241"],["/posts/fa3cd62d.html","fbd700cf21ff1837677cb53eef87d52a"],["/posts/fb3794ef.html","7c5e34aef72ea3e7fc6101996cdb2c01"],["/posts/ffdfd6d4.html","2cf8e6cde505e922760a31f6a22bceda"],["/private/index.html","0bb22b5293df0267bad0949413e52d59"],["/random/index.html","ef80cbc08fdf94d9237b8b8e4ca0d74f"],["/sw-register.js","a5b7e62a3e689fd7b9b2137e7f6ea9ef"],["/tags/ACG/index.html","073abc8e8b48cf4b9cbe919a230cbf95"],["/tags/AIR/index.html","364a3774ed25a7cd26f7ce97ff8be8b5"],["/tags/AliceSoft/index.html","6798ef58075eb8caab273c595d90211c"],["/tags/Butterfly/index.html","d2a76603c2ee56b8ddbd753d34aebeee"],["/tags/C/index.html","130d2dc67cfead8fb564ba398fe7aa9a"],["/tags/CMU/index.html","b07899f12ba349ad88d61dad25447bd7"],["/tags/Crash-Course/index.html","249afab1a8914fae9cd768610da20c2a"],["/tags/ETH-Zurich/index.html","796ba56a933dcbcde28e546661638042"],["/tags/Eushully/index.html","aa699c3f27e7daeb4452607aa4735402"],["/tags/Everlasting-Summer/index.html","546cdcb51741ae08c9bd40a9e679bfc0"],["/tags/GDB/index.html","48b36b6ee431f20307d988abed4361c5"],["/tags/GRIS/index.html","1548c8e817830f6b7562b5d1e1608589"],["/tags/GUI/index.html","ce48d5d5a7046f36d35fc35031db6cf2"],["/tags/Git/index.html","89bc720e63b9359ea589f99250eb922f"],["/tags/HTML/index.html","36594832f3a7ab687b59f0bb36ce5d37"],["/tags/Haskell/index.html","491060292ad35d83a4607358ce70f8c8"],["/tags/Java/index.html","8b9cad62f6f9fb3dd7c3eb0687dee98f"],["/tags/LaTeX/index.html","959729b6ee01c6fa376b1776beb06639"],["/tags/MIT/index.html","3a797ac74b4060785ff0a8847fa84330"],["/tags/Markdown/index.html","a96bac82e2b0d9ee6ba81d5c40b87e13"],["/tags/Mermaid/index.html","d570490723631f248a8e1f10b37d5891"],["/tags/NTR/index.html","8e719745bd055d0a632bfc18842742f9"],["/tags/Pixar/index.html","34b4f517e70a5a1322a2f782d33ddb06"],["/tags/Princeton/index.html","c3a19c51432b3bd88e5f7d3a31a5cba8"],["/tags/Python/index.html","38394b568a38a287c176c2efa2f71a10"],["/tags/Qt/index.html","94dc68baefbc1c0d61ea9057b5f9d60f"],["/tags/R18/index.html","effc15e8dd6e26cdd738472cfc9caec1"],["/tags/RISC-V/index.html","3f32a6a06e7f7059838a4ce332aebaa9"],["/tags/Scheme/index.html","ebe6862b2615a202c505f78af03f49d1"],["/tags/Stanford/index.html","188e440a2e1e66e09dcc91435be0599d"],["/tags/UC-Berkeley/index.html","8cb71ddebb140e76e9bf4d2bd35379b0"],["/tags/University-of-Helsinki/index.html","553c027d0383c7745c58b21f790638c5"],["/tags/debug/index.html","85a17d11ea4876e923025d5269e13d9b"],["/tags/index.html","5ca62fb98fdb0a2c7b87cc330a9820ea"],["/tags/key/index.html","4a6691bc78474705429c3e449655a360"],["/tags/web/index.html","b26312ddf9923c657052935f697bd032"],["/tags/三国演义/index.html","5780852b64810a90e90a2707755b2b8e"],["/tags/丧尸/index.html","093c7ff7473dd9d709a478591c7c23f3"],["/tags/京都动画/index.html","3fbe9fb1d8421b3a2c963d12b999fc34"],["/tags/京阿尼/index.html","f4afa2d35543dc0557c0e625f738f9f1"],["/tags/体系结构/index.html","d243a61602878bc51a217a6ada4737c3"],["/tags/信息论/index.html","539d1df6be1fd32d65d4b4f70603c266"],["/tags/傲慢与偏见/index.html","eb1feb97ecc38a91c0d47fa72b3747d1"],["/tags/元稹/index.html","e9766f15e0713793ea33285e18c6b737"],["/tags/公路片/index.html","be30e33bbb313585c217aa2403989cd2"],["/tags/兰斯/index.html","0aba421f65222f51642b5a787e2732ad"],["/tags/关于我转生变成史莱姆这档事/index.html","2fec60b3903d8795ccdf0c50e5efac5d"],["/tags/冒险/index.html","2fb605cf04e3cdfcb55779788f3f8aba"],["/tags/函数式编程/index.html","a04bb4ad894acea995d5e5e464c8c9de"],["/tags/刺客信条/index.html","898bf9d17c8f7bd7c3e5cecf1ab1a945"],["/tags/卖肉/index.html","9164ff5690a84a357216c009841e26e7"],["/tags/博客/index.html","a66bfa8d50fa544a1320c06b4d05e324"],["/tags/去月球/index.html","e5e924bc36b3ef8acf699762128d62d0"],["/tags/可汗学院/index.html","b39588bcf687ff3107fbedeb24ec179b"],["/tags/史诗/index.html","bd1af13772bf74b0c7f7c27ee223a15f"],["/tags/吉卜力工作室/index.html","e5168b9f5dd9b10250f48ef17db9f52d"],["/tags/名侦探柯南/index.html","25469fee920630b157c38012052e361c"],["/tags/后宫/index.html","83ab1e5e2742a1bfbefcc5a7e44aa2d6"],["/tags/咒术回战/index.html","d0df1fab479c6786629bd88c0a6348aa"],["/tags/哆啦A梦/index.html","670dbb17007ce71593cc3cbf13a89223"],["/tags/哈利波特/index.html","c05f29cd4b1d00dc3a4fcf13664d1cb9"],["/tags/喜剧/index.html","22e0e461723920ba2bf9094e383ff624"],["/tags/喜羊羊与灰太狼/index.html","823fce444e75d00c1efb9927122fe840"],["/tags/四大名著/index.html","a8216914419f1dba039809a0401d56bb"],["/tags/图表/index.html","2e0c2eb41aafba573daee580776b415f"],["/tags/复变函数/index.html","c13f183c2c77f50af6ea133ebc365992"],["/tags/孔乙己/index.html","49b11e01f24f5063bd10b22d36d657d6"],["/tags/字符串/index.html","f52d26c9791c794489810e5983e738d8"],["/tags/学园默示录/index.html","fb928d643d52b2f522c8e19561c16fe8"],["/tags/寻找天堂/index.html","4c9922e0b287f1342019dd0b433419c8"],["/tags/希伯来大学/index.html","71c460b1960782c8cc0be167a16b81fd"],["/tags/异世界/index.html","6c5b5a7ee61c2d502adcbadabb89f5ee"],["/tags/微分方程/index.html","3c218435d6eda2296d4b1c4502f40589"],["/tags/微积分/index.html","2cf483ead0931094938824b0538dd2d7"],["/tags/恋爱/index.html","e392bfc3d6689a66b0ab8f61e2571871"],["/tags/情感/index.html","1f8fa949edadb9f04625effe8532c525"],["/tags/成为简奥斯汀/index.html","ed4f434364b2eb94ce4fda2c6ac23ecb"],["/tags/指环王/index.html","d4f175a0223856ba4aac0fb19b5925a2"],["/tags/搞笑/index.html","ccfa73ac5c5fb029b410ed90fe697733"],["/tags/教育/index.html","584f03528ed063e2235f8b2b52777d3b"],["/tags/数据科学/index.html","f0851a19da1d766530d83a90bf1ff543"],["/tags/数据结构/index.html","53a3d9d296e917af933d48002aea9f39"],["/tags/数据结构与算法/index.html","2ac72c78e59602c6712f3a903df65658"],["/tags/文字排版/index.html","c02dc407f3fa68d2adbb74dd7a8579dd"],["/tags/文明VI/index.html","bbb476a10252aa64a0805b21f0fd719d"],["/tags/旅行/index.html","7f1d40ae6ba88d45f7f240e59b79d006"],["/tags/无彩限的怪灵世界/index.html","20b1a9189ec8be9a3357bec48adc8b20"],["/tags/时间刺客/index.html","c05fc260e013eb67d1485ea0aeeb6087"],["/tags/有生之年/index.html","c72721243f28ca76a8909ac5d42c14fe"],["/tags/李商隐/index.html","d5ca4f42409fa5fd0f5376a77759ec1d"],["/tags/李白/index.html","c76564c1ab0fd762ba3abf30eaf060c5"],["/tags/李贺/index.html","443308199486a1757fce0433f6882b8e"],["/tags/杜甫/index.html","40a907038f0302494e72d1f93087e480"],["/tags/校园/index.html","f5907393def5065236ff58d0b5c0919a"],["/tags/概率论/index.html","a6228835f06f1306725d4f853a02e393"],["/tags/正则表达式/index.html","2c9cfcef890a3a4ebbe32b56f78435d7"],["/tags/死亡/index.html","786a7b15ac2da7525aceca218d1f9313"],["/tags/水仙/index.html","5994699cd8f9a180e47a646b465a3ca3"],["/tags/治愈/index.html","21820183f12b0e1a0338e9d561145e16"],["/tags/烂尾/index.html","6e2e958a2f9f5510b11860ff81560615"],["/tags/热血/index.html","9ff4b0fa9258632a67e8eb100b89eb57"],["/tags/爱国/index.html","5afed2574d98bd3887d9ce0927f3d56f"],["/tags/版本管理/index.html","315e4413e3f8c302fcc291b2ffb42f76"],["/tags/玉子市场/index.html","c7350a8c9868f98e59fd47647bd2edd4"],["/tags/玉子爱情故事/index.html","43ff295b082b8ac5076465ebea2e1900"],["/tags/王维/index.html","4cd73f1554624cf8d47db6d2523b118a"],["/tags/现实/index.html","55f07c9ee1ce484a510efff007ab6a2f"],["/tags/甘城光辉游乐园/index.html","b2e2af41a80925f266d06d223e7ffc22"],["/tags/白居易/index.html","df558c03dba42b93bfa7974ac7a8f5a9"],["/tags/白毛/index.html","790f66afaf7dade4771af659898cf0ff"],["/tags/短篇小说/index.html","43da42a1e9d7f15904c59bc266d9f271"],["/tags/神话/index.html","ac95c4308abe0e1e9898676f3bcbcf2d"],["/tags/离散数学/index.html","11d32618ddc5720c912de78b57c963f2"],["/tags/种田流/index.html","31267d9e444ebf904766063fbe0381bc"],["/tags/空洞骑士/index.html","493f172425078eeda6ad6aa38592c3a7"],["/tags/童年/index.html","d58be85b9f3bd1a9bd97bab69b0a19d3"],["/tags/童话/index.html","38d62d3c2f5c2c5d78a1e58b1e082cae"],["/tags/第九艺术/index.html","5671eef19738e071964a41b1d713a63b"],["/tags/策略游戏/index.html","bde56beba1e0af92bb6e55f5a8c692ef"],["/tags/简奥斯汀/index.html","b3057517537ad54ae4e10ea4cd46ffbe"],["/tags/紫罗兰永恒花园/index.html","2443bdb84b55c1c220232eb99df3f4f5"],["/tags/纯爱/index.html","f0b035a6cd49919b9922a66a449b43d6"],["/tags/纵使手残仍大爱/index.html","781969cf0b3d061e66c062a6a1b26ce4"],["/tags/线性代数/index.html","bd755c47f7f4e9886146f70d5e8eda49"],["/tags/编码/index.html","dd22eb469fa4fc50b7ad4afb8e524915"],["/tags/致郁/index.html","6c8578e61ad07d16ae8fcda6ec83fa6d"],["/tags/苏联/index.html","116d3218477de78ab4b9b0643bd4bf54"],["/tags/苏轼/index.html","19d185de88ae0566529654e309f4bc61"],["/tags/英雄/index.html","ba2f71b86bb2d722fbba14a90636fe4c"],["/tags/计算机科学/index.html","27893b8289d1ad808198d01a5ca7e6ac"],["/tags/计算机系统/index.html","b48801dc29419436527ff96a985ffc05"],["/tags/词中之龙/index.html","01079c330bb2b9090862443a9d6e147b"],["/tags/诗仙/index.html","86aa7077b419bccbe2df3ed55c6c47e9"],["/tags/诗佛/index.html","416a6136b78d24908b5be2c6806ae762"],["/tags/诗圣/index.html","01bc6a95902299b74bcbba524a31eb90"],["/tags/诗词/index.html","4ec8a5f7ff26c3efe583f7428402376c"],["/tags/诗鬼/index.html","8afc4c068e62c17f392507ef27e4a46a"],["/tags/读书/index.html","fd944e8b2fc44785a746e911f3fe677b"],["/tags/豪放/index.html","50b886311e41bffcceb450fb6f3111f7"],["/tags/跳跃/index.html","e7c6c360cc9f72e31e2e432a54244705"],["/tags/辛弃疾/index.html","95d05f901598fcd1b67b9b83db372299"],["/tags/运动/index.html","290edda8791b8609b3161a0e51b5c7fd"],["/tags/钉宫/index.html","7c0246bc37db4600b170275d233515cc"],["/tags/银河战士恶魔城/index.html","d78f1321496d6677b3c7101e016e2cf8"],["/tags/陆游/index.html","b5eef4ad26893fbc3018ae0edf68f2ed"],["/tags/零之使魔/index.html","b9d50f91d5b35a58371b5d84c61c7809"],["/tags/霍比特人/index.html","c87b3de66ef6e7bd3f4731aaa15210fd"],["/tags/飞屋环游记/index.html","4922f0ee7e2923fdfa8e0aad9ec267db"],["/tags/魔戒/index.html","cd7b50dde20f183b7b5ad55904f198f2"],["/tags/魔法少女小圆/index.html","463a176939f9a10e97b6c1315f0b90c4"],["/tags/鲁迅/index.html","7b0214e22527d77fd4dc94ddf1078e81"]];
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
