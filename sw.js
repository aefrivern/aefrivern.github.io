/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0dff2a743b97c078cb197183c37c3f6e"],["/about/index.html","9a0d53723b5c4cd87b850906a62d2f4e"],["/anime/index.html","2aebdcade35d1d61b42fd90c2a77ef85"],["/archives/2022/11/index.html","eb530504e66d11d2199fcbf7d136dd61"],["/archives/2022/12/index.html","fc3c6cf22e59d79c482dae766463af52"],["/archives/2022/index.html","d10b3e40880f85da4713b1aed23088eb"],["/archives/2022/page/2/index.html","a9230133d64d57484101dc9778ad7414"],["/archives/2023/01/index.html","606bf3d61fbaefaaa621f69826316f9b"],["/archives/2023/02/index.html","76412bdce0e4534a626da5c7d8d2c91c"],["/archives/2023/03/index.html","34946f8bb068e64c672009fa742ed680"],["/archives/2023/04/index.html","bceb152b87754032eccb47be2ab0f4d8"],["/archives/2023/04/page/2/index.html","ba98807a46912620ec290dbfcd177b1f"],["/archives/2023/04/page/3/index.html","aaa66d58e756e9ec19bc1a9e37227c11"],["/archives/2023/05/index.html","7ea116cee73d66e729fe999511550452"],["/archives/2023/05/page/2/index.html","b7ad5f8438e3c9fe5db48ba5eb46f291"],["/archives/2023/06/index.html","8146ca3c06fbf79794a49fd433df8067"],["/archives/2023/08/index.html","a1eeffcfba142b2138d14056d0b091ee"],["/archives/2023/09/index.html","79c6491239917cc7f54c418d90352b9f"],["/archives/2023/09/page/2/index.html","21c8ecbe2489a70fabece2884fbf1277"],["/archives/2023/10/index.html","58ebfa9257e8bca5e0a6b8310a256ece"],["/archives/2023/11/index.html","527e047c07eb74d1ba055ce0d4e88275"],["/archives/2023/12/index.html","8179d138c4b8467316e9c1017869fa61"],["/archives/2023/index.html","0bdc41aa69f35884c7453920055106a6"],["/archives/2023/page/2/index.html","ca9e6e88dc31b494465ee6b098cefa89"],["/archives/2023/page/3/index.html","dd4bb5c428440dd82a7c4cc40dc70be2"],["/archives/2023/page/4/index.html","ada1b98f4b582084b76f4af143ec938b"],["/archives/2023/page/5/index.html","ffb17a876ac3320e44f82171e2d821f3"],["/archives/2023/page/6/index.html","b91d5ba3ff8f4108ebd55b8bc817f7d0"],["/archives/2023/page/7/index.html","b041a17ca1805e3ffb397c631a474d57"],["/archives/2023/page/8/index.html","bbba034bdd5c92968d9bf08a3b10d12e"],["/archives/2023/page/9/index.html","2b0766bd801c5a32c8f45e788cf21c66"],["/archives/2024/01/index.html","d9f69929451676f384670f6bc98a8ebc"],["/archives/2024/02/index.html","ee9439cc53f51af5d6582282e6cb5a0c"],["/archives/2024/03/index.html","bf912a44f72ca5c60362cdf4ad656d1f"],["/archives/2024/04/index.html","a2cd62c1d21e9542cb990b64c85dea73"],["/archives/2024/index.html","37cf579055ed42e3b6885d6478638bb0"],["/archives/2024/page/2/index.html","8d0702a14f48ed13c7559aa8eb1ea6b2"],["/archives/index.html","92e2eaae522fa0376e3e2ba875d17e46"],["/archives/page/10/index.html","bcd84dc84783e9e71528f7eed117e84e"],["/archives/page/11/index.html","b805500550670510ca48676c6edfc72a"],["/archives/page/12/index.html","14fcfb9c9fda5ed64c95cc787518be24"],["/archives/page/2/index.html","d71ee2d3bae5b4b7f2c3e9684541ef85"],["/archives/page/3/index.html","cda6bb280e62b6643fafa9c8e1b941c7"],["/archives/page/4/index.html","e2a91be7bbc4a107a671a46016993af3"],["/archives/page/5/index.html","0cd0ba48be2332b3c9e3c6918a52a441"],["/archives/page/6/index.html","df6be6542467a895f4b5541941aae435"],["/archives/page/7/index.html","f7fd1b0f3c121637f03598d5fc8abd57"],["/archives/page/8/index.html","fbf05aa306e872456561565a9e6c19d7"],["/archives/page/9/index.html","2135c4203837f6721b3ab6483cfa4172"],["/categories/ACG杂谈/index.html","d7be4aa34154ed52d54cafc0cd57beb6"],["/categories/ACG杂谈/page/2/index.html","a52015cdfe78ebd627dd3fa6f218bf5e"],["/categories/ACG杂谈/page/3/index.html","1c090f3c6e68aa85d3603242cdf92557"],["/categories/index.html","d9d3578d76a7d04d03d3b421b8670098"],["/categories/学习笔记/index.html","77acfb570f10edafcb29c1d7740594af"],["/categories/学习笔记/page/2/index.html","0539207b4bcd8c8f683b6b293d07f826"],["/categories/学习笔记/page/3/index.html","e4ffdefca1a8e7dc8a53c845436ec7fa"],["/categories/工具/index.html","0b8b132faa24e69cc416ea648c886058"],["/categories/工具/page/2/index.html","8a43d2ac1dd1f9c29b88cdc0f622a40c"],["/categories/工具/page/3/index.html","11a273e2d9e5e727880ea62fae5e2044"],["/categories/游戏人生/index.html","30765810095342b36b8335f719860a69"],["/categories/游戏人生/page/2/index.html","76be5084d350147ea39923857e7d2039"],["/categories/读书笔记/index.html","e3cd023ea7380a624b52c2843588e9a9"],["/categories/读书笔记/page/2/index.html","7b150f0bfb46d4974aa26eac09411a8c"],["/categories/闲言碎语/index.html","2e2ce1598b050eca6729e0135070ebe7"],["/charts/index.html","de2a006812929419f0e581daa2f7b1ac"],["/comments/index.html","89ff155489be224ed78912f66d8b85f8"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","83cdf0f5a4c0ed6c00d4bb8f2d69c302"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","0ae87f24b3584c4b5c7bc4826d3a6d2c"],["/gallery/index.html","9acd7cecadc1606331327dccee0f38c1"],["/gallery/wallpaper/index.html","f50ceb8d86d7e27ab22f945534587d63"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b4cc53c55912a3500007d4b67988ffd9"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/10/index.html","b284283f6ec7bb6141545b17b550e486"],["/page/2/index.html","0a2b83690e3d6dbb3e7ec8c0113c8f81"],["/page/3/index.html","45415e0bff261a3a9c8597f551598ca3"],["/page/4/index.html","c6d898abcbe98937fcbe9698e859e0e8"],["/page/5/index.html","7534e3a1298969a0c28ac26a4e934739"],["/page/6/index.html","1cdac7a2b4e8d7e696ac2e8430fcd6a6"],["/page/7/index.html","e30360ec5164bfe4a84b4b3b33eeaa73"],["/page/8/index.html","8d9e159177a5b5d5606c657b1f2a4dbb"],["/page/9/index.html","6d427037cb4899f45370658780f28ded"],["/posts/106331b4.html","aa66851725906131d0bb88a007b0551d"],["/posts/1185a02e.html","fc00fbe32b53e3ab759cf04606d84468"],["/posts/12e06b11.html","e6791e60cf298f0ac853006c201deb36"],["/posts/13aafbc3.html","6389b6c80d6e71335a733176c7be63d2"],["/posts/167c7c45.html","69fd8a11a088496555de527b24124ebc"],["/posts/1743dad6.html","82e84e58f17cba966fab8417aebcfb24"],["/posts/17492bb9.html","807ef4d0a1b1d9008031daf23d3ce7b3"],["/posts/175a8e1.html","a6f01d429bf6ad83b18eb0d55c5d7ed2"],["/posts/1be398e4.html","c2fe879fca0a8e3910acaea45afc9e74"],["/posts/1c5a0321.html","be6e7e61edd885cf62edf88868a84c3e"],["/posts/1ec7973e.html","11d4e722cd157cb6297ca842f65a7705"],["/posts/1fb82448.html","9bc83c9e4124540475f6e80e7114a9d9"],["/posts/2069534c.html","1de437aae95af6736e78d3b0d354b5f0"],["/posts/21f18fd2.html","e3cb81a326efe4ddeaf83600797db5ee"],["/posts/29c507fa.html","cea0be005b30882ada81e926d250e1d1"],["/posts/2f34eb00.html","a6a5e6ee27095c2826733824b5a3713e"],["/posts/2f57a694.html","2d68a307d08b92a7ecd251636c3cedc6"],["/posts/30479bcf.html","2ab039b38759bb1be58dbfc67f2aac03"],["/posts/320cf12b.html","e928100a9ac9ce961041de6a14d8dfea"],["/posts/353e70c9.html","7cfd09e2add813d1b9f4aa225879cb68"],["/posts/364ea8cc.html","d88f35adbeac5d414f411106e2f2eacc"],["/posts/374b54d5.html","1f456c0946f9b7d5b65a372a506e4a0f"],["/posts/3871b764.html","f6684c7ab78b1d835337b15804a76409"],["/posts/3b308caa.html","4ee22dd8d5f1bb0b9c33327bc5a26147"],["/posts/3c3cdb74.html","fd1c0046b3a554f1216581d03beac9d2"],["/posts/41f65cde.html","94cf350b1af294c919bfe65afb17fd0e"],["/posts/4208fd6c.html","aa0ceac70311dfca0e4ecd0e5f8f61b1"],["/posts/4392373e.html","1e83e7865e308c14662bd31a75f33dd0"],["/posts/440ed920.html","cb18f5420cb97dfc28577662858eec1c"],["/posts/447a8d68.html","1a4b25ae1ae11d9e760549af687bed70"],["/posts/4d2b51ac.html","e22e4657986545a070e2a9fa66594b6b"],["/posts/4db1a52a.html","f35c1059e980a8c004dd53e857bd2e4b"],["/posts/503ae89.html","f5f8ebc176a0d8bc463a4c867d67727f"],["/posts/518e2799.html","9e39132ce01addd7224a5c1cdb1e547a"],["/posts/535fd087.html","146510dda77241351be3430d586dbf53"],["/posts/5923cba3.html","c594d99f73ff330050949f7477aec7ac"],["/posts/5c1bb6b8.html","9c740a6b9571bc95d82fdeb27768e790"],["/posts/5dc45f0c.html","72463977c08f84a8abefc81513dba3fd"],["/posts/5f2caa2c.html","5acdbd463e3197c88cf160f43ac44c23"],["/posts/60d11614.html","56db2f062af8f97e10184c27a18c4b48"],["/posts/616be7b6.html","d2f5cc055bdd78a87c4f39607c87916f"],["/posts/62a1ec0c.html","c8b3f38cae592270ee902440cc3c4846"],["/posts/6441a1ac.html","c3b18bdf2710d92ed78f9c0a4929dfd9"],["/posts/67bd69da.html","b635ffcf6a12cca5ffaf5586f583bbe7"],["/posts/69fb361e.html","68c0f4b141654deac474697d559e645b"],["/posts/6a8518ce.html","f7d25b6863ee9d3d4a7c2c98cfeafbcf"],["/posts/70685119.html","523fedf4f1e27e1bf52aba7db45fc192"],["/posts/743db4aa.html","35956cf0b09c710b5099ac59a05463b0"],["/posts/74c3ade.html","5e9ca9ace5886538dd05e5ea15cc32af"],["/posts/7b67faab.html","df82e3f40d869500d3c1db1e43669b0a"],["/posts/7b76be01.html","ac429d8b19dbbb187857ff4992df6bc5"],["/posts/7bff939e.html","1b8134f48036b8b758708e499bf974dc"],["/posts/7cc4ca07.html","ee98ec087448c1936d1ad37e7264827d"],["/posts/7d257210.html","582906f2fb2ca3dfd21601a0051bfcc2"],["/posts/7e6a5c94.html","59abd39578f92523ff3cad6333434aae"],["/posts/7ea0cbe4.html","be7aa4acaa288d52a4834482b13a0918"],["/posts/7f382da2.html","aafee1fdd68cfb3dd88f4596391a1bee"],["/posts/7f8d32f4.html","849315e8a9fbc9e58d3b94912952954b"],["/posts/7f92999e.html","8f84de2d9e1bb69230f8ebdf9b33fcf5"],["/posts/8207aa48.html","847fcb6317b13bdc1d132cf4996ac81d"],["/posts/828c2ccd.html","10339f553770c58a19a642d6f42f0b7f"],["/posts/836ea9bd.html","a094370643b77571134aa13d20e98f37"],["/posts/84cae757.html","71624f3f285ae551d4b43fc66f680625"],["/posts/8724ba9a.html","d8c4bc83b7ccc3e0708342915ef270e9"],["/posts/88200036.html","1b36b3c95759e8c1d2a456c73f088d31"],["/posts/922fb64d.html","7ac5b0b995837ddfb9bd15540edbcc9a"],["/posts/98332b29.html","91b6006802844e69eac58bdb4a812988"],["/posts/9a1a736f.html","44807de4f5846f8582fdb2de6716ed1c"],["/posts/9addd0bb.html","8fc0382404698fee306b66342fe3941e"],["/posts/9b44950b.html","689a93a8cfde8de3862fa80f107e51f4"],["/posts/9ca149ab.html","0e5b664519a46e982c0924c9cbf830e6"],["/posts/9e4446bf.html","249019cb4aec716790d5569b13c06b80"],["/posts/a0271e58.html","a5ab985a1c95a9e9246561f8b319fe7c"],["/posts/a13c1dba.html","3ba92670b59b115a0823258d637ec757"],["/posts/a1f2a4d4.html","848b1e281a3ba5dd9ff445831e59f1ba"],["/posts/a541262a.html","a3500446d3477031d79af9e1c525a172"],["/posts/a5f300de.html","a321a4209a494825bc87a3084c70dce6"],["/posts/a98766fe.html","1c68d382bfbc1b709fc25bd66461285c"],["/posts/a9f63847.html","0ed9537f767582ad9fedfd6c8ed88614"],["/posts/ad31055e.html","dc78153e0e464f50d2cbe0159b535115"],["/posts/adcd6e20.html","5001fcfcbbe8dfd2dc4dc2a7b3e85627"],["/posts/b0fa4c58.html","fade6a408214588389d91baff18abcad"],["/posts/b1168675.html","0456c65893abbdbf6675015803cee067"],["/posts/b291b1dc.html","02dc4956305043cc6769d1d78e68d541"],["/posts/b2feeab7.html","a7b2efa6a69075dab1957a63b89e201c"],["/posts/b6d66f1b.html","86dfa5bac1be6911ee1e047a3114de11"],["/posts/b7525d11.html","d874fd342ff4b4951f795a6b856c1a71"],["/posts/bb154b63.html","5d0bcd26b0feadaf3d4530ed6176030e"],["/posts/cc1b9611.html","ca4e7b7e607b4afc29f97a94b4d69261"],["/posts/cc86a40d.html","d85eef872e80cccdf6314f9bf56284f9"],["/posts/d36531a7.html","88f6d95721088737dfd5c76d2d51ad43"],["/posts/d442e51a.html","1233884ee52bca5ee5fbaa57c57822b3"],["/posts/d7fdf01f.html","97a3857b5f9daed0cbc72d2e2e2362ef"],["/posts/d839b0e.html","d9c6595968a97677c8b1be9b91b03651"],["/posts/dc5fbc03.html","a351b0a186affeb1f862d49fdc86609e"],["/posts/dcdf88c8.html","2d832402c4b2161deccca83faa720c7d"],["/posts/dd378ae0.html","421f8087ab9b7116375a6e5a3f10c900"],["/posts/df2849ec.html","f03542c93facd488feb747d8857ec0f6"],["/posts/e15be301.html","ba3399669c0f3618456fb228ab29a50a"],["/posts/e2e4b4ce.html","5a84576bf301327d17680628d6fea2bc"],["/posts/e35ef5bd.html","ae4d94b52d2a38949e3eee40f8bb1376"],["/posts/e462ba83.html","98e385308a6ec3c19b5c95100bcac15f"],["/posts/e53204e6.html","d3176269350fd40fb42a58940b2adcd4"],["/posts/e5cd9bbd.html","2c355fcdc2f7683d1b6bdc54d58deead"],["/posts/e5d89884.html","4b0c5c914b82e2ef174ef11fde683cf7"],["/posts/e7a99a5e.html","e8f047794d1b0845064dfe6d1e222738"],["/posts/e9318100.html","f36075bc757921de7f63e5390f66b1f0"],["/posts/ed52e6a0.html","2c88e1d68e548c8f778a8e58ad21c519"],["/posts/ee0ac59a.html","cf80c3a22d702e64b9a8f9440023112b"],["/posts/f09c1ee5.html","a96f9d6e80110c1a0c349bf36b0d028e"],["/posts/f1252f66.html","ceb87294d0b075c990b821f7ee376dbb"],["/posts/f4af26a9.html","eb9fafc3221cde4e0eef79d3f2e0c1dd"],["/posts/f8060ffb.html","aa4097f07af48a2a3ace6cbdbfdf7ee7"],["/posts/fa3cd62d.html","0e0d167a9f54c5bf31c8ea30d5c34788"],["/posts/fb3794ef.html","8c5c2e3649d85b7ab84fba45d18df935"],["/posts/fda4520e.html","d0dd0aadb85880c4f0ffc08f6af930a5"],["/posts/ffdfd6d4.html","c511bcdf304b28f3ac67437882bdb170"],["/random/index.html","f072e0574124e26d5d16c131c7a406fe"],["/sw-register.js","2fb0f0e29fdac582ce4e31157d023c2c"],["/tags/ACG/index.html","f4b4bbb91980ec33bdb592379ac9bfef"],["/tags/AIR/index.html","c90c82893da264034e9e1b1d9cbfe4dd"],["/tags/AliceSoft/index.html","cdd9ce5883492f3b6557033b1f6375fa"],["/tags/Butterfly/index.html","f602f5b61de90aca9523abdffe439ad9"],["/tags/C/index.html","8dec1afee4e812e690187cde6a084865"],["/tags/CLI/index.html","4a0d17ddb68aa981f440a34d7683e935"],["/tags/CMU/index.html","8c13d6a18bfbcc4746769c2f08c6bf83"],["/tags/Crash-Course/index.html","88caa07fdf4453f9df71668f947965e8"],["/tags/ETH-Zurich/index.html","ca4684ab8e63584bab3346da4254abf4"],["/tags/Eushully/index.html","7554b6a030b3b3f1511a19c000996e21"],["/tags/Everlasting-Summer/index.html","214f05ba4dfa45cb76f41dbf889ff608"],["/tags/GDB/index.html","23cf44cb11f7676a490e51eb531d6cb1"],["/tags/GRIS/index.html","d161020dc66250f9f7f6989068e781bb"],["/tags/GUI/index.html","61a41ebecf1c25fafdd68388ca470fc3"],["/tags/Git/index.html","fb8729adbb6263292890e6e8b0daa18b"],["/tags/HTML/index.html","9e2d6dec9712aeed00e1412bf8ba5275"],["/tags/Haskell/index.html","d5bbb68353596fcd87b04ffd858531fc"],["/tags/IDE/index.html","dcea042eca773d64cddf7f9e872aba8e"],["/tags/Java/index.html","75bdc92bff22104585eb43e9f5d6af1c"],["/tags/JavaScript/index.html","c73d8d44a188c3033b3fe64f727b4f32"],["/tags/JetBrains/index.html","d423cd90365aac4ea197205fee698de7"],["/tags/LaTeX/index.html","bac092cb6c4f8be84f5f57561cb948de"],["/tags/Linux/index.html","bc9e09e266c6d60df4be62267fde3155"],["/tags/MIT/index.html","b0d35160e3dbf29f70dfd822de1f448b"],["/tags/Makefile/index.html","926529e1fc728e25a828c6f4b1296f38"],["/tags/Markdown/index.html","ac46150ec4a02f84092c78f477e5507b"],["/tags/Mermaid/index.html","dd09daf79cc52ad497c235e486f86f24"],["/tags/NTR/index.html","d125e4045f89d15e07a4c09ce0a3bdee"],["/tags/Node-js/index.html","bf46d059a812caaee112ca05944b9e26"],["/tags/Pixar/index.html","85ca8ae4fbabdc7a98545e568159d9e6"],["/tags/Princeton/index.html","899408fe8756802a5c4b8b6843caf013"],["/tags/Python/index.html","a157761b32e9e2fcc03694a3b9857b6f"],["/tags/Qt/index.html","ccaacf98f3998b20175b3a96340c3f0d"],["/tags/R18/index.html","982910dc420adee8415812e5fcc306fa"],["/tags/RISC-V/index.html","fb9d3c46d7ac9fbdc923b140047ebf1b"],["/tags/Scheme/index.html","02811535ecff88cb2ba8c124690da263"],["/tags/Shell/index.html","16c9052ed200636b3f2ff1265f55e57a"],["/tags/Spring-Boot/index.html","de9b2d8e0cdf062fc3e8fb5d257a8730"],["/tags/Stanford/index.html","4656bb99f2d11e87fb061d9f9349ade9"],["/tags/UC-Berkeley/index.html","c536b9565a8253057064e04e306151f7"],["/tags/University-of-Helsinki/index.html","da027475d46ef677ee7db74fac253951"],["/tags/VS-Code/index.html","243683b792d03f2a02be4f505cbb1b72"],["/tags/debug/index.html","94306fe6a86b3e98fab6a67cf211686b"],["/tags/index.html","47e28ae92b4c4a06d7028b365e2b4975"],["/tags/key/index.html","721370dab3c4de95ec7decf495d2e00a"],["/tags/web/index.html","828d195afe2ca925d1851129a1d20500"],["/tags/三国演义/index.html","e69c9dd9ef2a2e43ce5a656b329c2923"],["/tags/丧尸/index.html","52c22dfdbc0d12714f20ce85f32bc525"],["/tags/京都动画/index.html","49fb9da311a4a69afd19f4c7fd0fa873"],["/tags/京阿尼/index.html","86dc603a9da0aac438180f8a9331a82d"],["/tags/代码规范/index.html","dc7e2bbd3c6865153c8bdaf7a8c1fbaa"],["/tags/体系结构/index.html","7e5dcc674828c00994ce5d2104520e51"],["/tags/信号与系统/index.html","fd2a47b4e180b30cdc0b5ba8a3cf286c"],["/tags/信息论/index.html","9942f4ecca2c85f3ca9569698d8e40e0"],["/tags/傲慢与偏见/index.html","906eca32a5c15ab0652b56202d527f7c"],["/tags/元稹/index.html","d15dd5ebb300ce4de468e88fb7237b26"],["/tags/克苏鲁/index.html","fef429933c1c42748344402b124c507d"],["/tags/公路片/index.html","49d08a60cf7cfe168f3c9d84feac73ec"],["/tags/兰斯/index.html","54c837f3dbbbbd4041e7bb35d8fa590d"],["/tags/关于我转生变成史莱姆这档事/index.html","1aba4858c65504ef4b99fefc0adb90df"],["/tags/冒险/index.html","00a87a74a59fc4784ed4c0192df0b4cf"],["/tags/冰汽时代/index.html","79e227b4d8485f91a65e274a0a2609ee"],["/tags/函数式编程/index.html","49a230543767a4669b6a60216b6b02f8"],["/tags/刺客信条/index.html","a1168585cad8ec675934ff1f7b6de84b"],["/tags/卖肉/index.html","96ffcb8d0a6cd159c368fbc67c0af94f"],["/tags/博客/index.html","eb821d406844044c77fbd4a9cb2bd1d2"],["/tags/去月球/index.html","8e68795dee5ed6ee010b3b8150619e23"],["/tags/可汗学院/index.html","cecc64cfc21087dbb472b76d111c59b1"],["/tags/史诗/index.html","300bb7f9403ab3f2e6aac8ce727748e7"],["/tags/吉卜力工作室/index.html","4bef1b4b44c23116fea71f54cc3f754e"],["/tags/名侦探柯南/index.html","3d7f3ef888b06fdb22821ac9e3a46af7"],["/tags/后宫/index.html","9ae84f9fe65aa0a11f8b508b35646430"],["/tags/咒术回战/index.html","30ba53c321f922005ae7b179a9021206"],["/tags/哆啦A梦/index.html","5c891990b068e17e31a3d92661b96284"],["/tags/哈利波特/index.html","990277abfd5531705a801a71416cc077"],["/tags/喜剧/index.html","a43badfde19cddc5ad96d66ae17200af"],["/tags/喜羊羊与灰太狼/index.html","9c812d771407b615075a01a9df0abe8a"],["/tags/四大名著/index.html","218445bdafa341ea690253b49080113b"],["/tags/图表/index.html","f3460aa2597ae4f53ba0f765335aa05e"],["/tags/塔防/index.html","7b88d2df336dc6db046a8b0d9c02f5e9"],["/tags/复变函数/index.html","7e059f6b76d260d42e0e835cf0469048"],["/tags/孔乙己/index.html","45f085a5a3c088a1d55792e8cde13339"],["/tags/孔子/index.html","4ef4adf266cf10ab9ebc3b2a19685d4b"],["/tags/字符串/index.html","9a3287bcebb48b3f2c2c6e32c30c3957"],["/tags/学园默示录/index.html","98197c799a48d3581e8464326bfc7944"],["/tags/寻找天堂/index.html","10edcc1b5f17921d5473fc4d40255605"],["/tags/希伯来大学/index.html","f13b40caa1711e508421be7105477770"],["/tags/异世界/index.html","dc461cfce16af5205024c04ceed0ed89"],["/tags/微分方程/index.html","54f428bb498afeb19a7cc0d6346e6d53"],["/tags/微积分/index.html","4188735af14cb4f55688b9b9d51100e9"],["/tags/恋爱/index.html","edd79783fda5645efde9d72a8dcf599c"],["/tags/情感/index.html","5dead3272a8f2b5a6ded608e1d37970c"],["/tags/成为简奥斯汀/index.html","b22cccfdf7487cabe624baae76306d16"],["/tags/指环王/index.html","0c92d8dec83b5d4677076b233b199cfb"],["/tags/搞笑/index.html","fc2ab532d3966b88d1cffb7f5584ac8e"],["/tags/教育/index.html","51f8df5f20919d2b76d4611f675cf3f1"],["/tags/数据库/index.html","e4bda6e63908c7d05941398072e16b96"],["/tags/数据科学/index.html","307e273e6baea3d1d659d8b61bee8b97"],["/tags/数据结构/index.html","c8f74d7b0a0dab953ea1958c89f8965a"],["/tags/数据结构与算法/index.html","3f92cb75f4fc85236544013593c7844f"],["/tags/文字排版/index.html","087dbed4db65325aae37f82cde03a919"],["/tags/文明VI/index.html","8dcea0e2a20f4493ad6cddd2e9454da1"],["/tags/旅行/index.html","3c3bc54de9b4a368cacfc5798c6f4aac"],["/tags/无彩限的怪灵世界/index.html","d3b1f5a84a4b90eccd58560afbdad614"],["/tags/时间刺客/index.html","1924c0553773c4c441301e86fb1edd7e"],["/tags/暗黑地牢/index.html","b5031defb43856b0de9ba72ceec4a26c"],["/tags/有生之年/index.html","d8521f8ccf8ad92c0b0b57797d9e914d"],["/tags/末日求生/index.html","f9400ab4f0079ce45caaa04c8403a94d"],["/tags/李商隐/index.html","5ecda48d8b2979be277c518cc4ce02b6"],["/tags/李白/index.html","227afb38721e2eb4eba5292b087113c3"],["/tags/李贺/index.html","5836a33a19ad5b14c2c138e850f7b4d6"],["/tags/杜甫/index.html","ee4351ac6f6d057962b730a58faa05b0"],["/tags/校园/index.html","a22232205ddf8c8aa0c3acb972e90ed8"],["/tags/植物大战僵尸/index.html","ca2ee967889dc6c436fa399410bd30d9"],["/tags/概率论/index.html","8e8381f70568f0e5237127cd736bcff4"],["/tags/正则表达式/index.html","fd6bf71010f3bf9bd36af5d721f8a529"],["/tags/死亡/index.html","3932cf9a1f7a91a8fd89d8afa43377a5"],["/tags/水仙/index.html","ac10bef85d9b9896ffcbf9368c48b9ed"],["/tags/治愈/index.html","ba3594e2a5106eb80031e401f7fd4c81"],["/tags/烂尾/index.html","6ef9de37015efa31d56c8732edcdf02b"],["/tags/热血/index.html","3e0f80bb7a8268eeff3e47e861fe3e32"],["/tags/爱国/index.html","ef1140c9b909dfa22f88549bb4a4d4ef"],["/tags/版本管理/index.html","6501b24868ee575e1e8fbfb635579b01"],["/tags/玉子市场/index.html","5fcd03219772a139439f0442852385ca"],["/tags/玉子爱情故事/index.html","36c5a39e864997567b0799ef8642dd6e"],["/tags/王维/index.html","eba4a1549c28e7771301dcdbb55e46ed"],["/tags/现实/index.html","b68cbf9ab8359e40a6522f7e8dd59679"],["/tags/甘城光辉游乐园/index.html","25c8491ed9aff248c7123da32b2c6f5c"],["/tags/白居易/index.html","fbb1a1c46e5c4297d04a91d1395bec34"],["/tags/白毛/index.html","f36b535a3dea0626b7cecc1588ed3de6"],["/tags/短篇小说/index.html","d99a99ff4ffd3862562cc8f7a491b674"],["/tags/神话/index.html","7fa39a858613c90c5b71286db5250341"],["/tags/离散数学/index.html","3e44d3aa205ae259c5935cb6c64d0cab"],["/tags/种田流/index.html","9410fcbf222e6228e75a567d52bb9117"],["/tags/空洞骑士/index.html","dcc9805d93fc0446eae2fb499e11b049"],["/tags/童年/index.html","03d9911a91bd7bc82aba1a665ade2e55"],["/tags/童话/index.html","b11afce9943ef283c07e1f840e888078"],["/tags/第九艺术/index.html","ef6b2d0c95696ca8fad1e6373b19a303"],["/tags/策略游戏/index.html","8d36abcd3aca7dff7898157d34e196b4"],["/tags/简奥斯汀/index.html","53634f7bef653e6e3aa728e5df773d30"],["/tags/紫罗兰永恒花园/index.html","cc6ea1abe697976b1f82932c5b4a115a"],["/tags/纯爱/index.html","23af82e22c4b887e50bb359aefac47a9"],["/tags/纵使手残仍大爱/index.html","dddf805fa7ba7909938730146e83c607"],["/tags/线性代数/index.html","31b0ba7d3a5c3d61558e0b5277b25e02"],["/tags/编码/index.html","f4bd0451d1bc5c552e8bfb8f8d664ea5"],["/tags/编译/index.html","ee1041cfccba83b20fec0dc6c3a66b6d"],["/tags/致郁/index.html","041e6c7edc99d804e42859b75cb793f6"],["/tags/苏联/index.html","099e55450745bdc08ced8a62bffb96d1"],["/tags/苏轼/index.html","82e06601875676563ce83f11d3d4b93e"],["/tags/英雄/index.html","f03dd7291d6d69ad0287b805001483d9"],["/tags/计算机科学/index.html","860bc1b5342f6f85a109272bbf5d3ce1"],["/tags/计算机系统/index.html","3333833f610500f797f631bf5f50afac"],["/tags/计算机网络/index.html","9b15d3e73dba13254621ae5a2ff9c5c6"],["/tags/论语/index.html","3163bc9f19a4346e0435663f79e914f9"],["/tags/词中之龙/index.html","cfaf361c37d53bdbef4cfd3197bc3f66"],["/tags/诗仙/index.html","762fca836ccfb4d4815d128a3425a61a"],["/tags/诗佛/index.html","766a24580bb608679cc64fdaef0e0266"],["/tags/诗圣/index.html","f054bcee82cf47fb0589219fc1718aaf"],["/tags/诗词/index.html","92c031c807189a9589c61949e58c0cd0"],["/tags/诗鬼/index.html","8c2cfaa5a1ed661f510b383cb18e2cda"],["/tags/读书/index.html","5ddff94631dfae6d12fdc039f902ddbc"],["/tags/豪放/index.html","0602c69af5ad7c24c9b67dd923ddd592"],["/tags/赫尔辛基大学/index.html","1b8f8d4cb3976b87c2882cb4adc10a27"],["/tags/跳跃/index.html","208b22dd9469705428603f21e451d32e"],["/tags/软件开发/index.html","85f3230259056a876867e7134a593670"],["/tags/辛弃疾/index.html","cfe229f7c5160da386f182508f02e83b"],["/tags/运动/index.html","271cca95e62e7aeb13e2583b1622625b"],["/tags/钉宫/index.html","0e85ebdd5c4ca2774b87a2fee91ca4ef"],["/tags/银河战士恶魔城/index.html","5c5935f9c812e97082d3b8b87d71a912"],["/tags/阿里巴巴/index.html","429acd68c8ef7a7a2630d42973be3ca5"],["/tags/陆游/index.html","59e01e82ad75bd79a116f6f5d4c4edac"],["/tags/零之使魔/index.html","6c41e3fafd3f7c9e365fda192f79569b"],["/tags/霍比特人/index.html","d53be515cab821e78b81fcf3f064fd06"],["/tags/面向对象编程/index.html","9364a3f1dfa7e84ce71ea6c0646b7882"],["/tags/飞屋环游记/index.html","686cfcd549f3413c5725d005bb662ea5"],["/tags/魔戒/index.html","f799c2aeb2b603a3f377b4eeb48ab84d"],["/tags/魔法少女小圆/index.html","d4efd9f4c6d4bf0c03d5c483d97ea88e"],["/tags/鲁迅/index.html","968989d11a6e89db92b4622031d54f6f"]];
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
