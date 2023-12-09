/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d470fff4458f5ab5184075ebf8bb4f05"],["/about/index.html","e55479e46a0f0fa56fa280433dac64f2"],["/anime/index.html","1044e37563af854ba18105be70e774ec"],["/archives/2022/11/index.html","85097d2c77b343acda05c661ca4f501b"],["/archives/2022/12/index.html","46eacc2665a6de64fa404b3a6bb9f6ea"],["/archives/2022/index.html","459ecbc381011bb5c12189780e1899cc"],["/archives/2022/page/2/index.html","9384475e3bd8a34e0a73dcc93f09365e"],["/archives/2023/01/index.html","409b73595f4d0512982004e9074aa6d7"],["/archives/2023/02/index.html","6d4d46f08a150368e90aee7138696281"],["/archives/2023/03/index.html","508588a69c6d0cb126b91f8d95ab63a8"],["/archives/2023/04/index.html","64361969624aaad0a3eacc66f740639f"],["/archives/2023/04/page/2/index.html","8436d2907da4c3bb39dc348d5211502c"],["/archives/2023/04/page/3/index.html","eb848cab0e60f9c2f18b7cc5ab56c196"],["/archives/2023/05/index.html","722cc3d13bd5c813f49bbef2ce7528b8"],["/archives/2023/05/page/2/index.html","884010708b5074366ddd3f92a76d82ce"],["/archives/2023/06/index.html","849eeaa92e372a264fc6fa9e60f95c8b"],["/archives/2023/08/index.html","d51fc5d85a78af89e82d3aeb1702af68"],["/archives/2023/09/index.html","bf913ee81346e67210b1ac8a9708080d"],["/archives/2023/09/page/2/index.html","826393d75f02d4aff0c64f04529762e0"],["/archives/2023/10/index.html","50181b2f3104f5ccb113e15e8481566c"],["/archives/2023/11/index.html","40d91029a864e00a6ad98618bef417d9"],["/archives/2023/12/index.html","62a75a5f89ede37a72963b798af00f9f"],["/archives/2023/index.html","fa8948bf7e37c584b27075aa4af24fa0"],["/archives/2023/page/2/index.html","6ed6d9db6c02e444066488df4cfa8ca9"],["/archives/2023/page/3/index.html","f45c5343baf08d594fd04a9828edfdce"],["/archives/2023/page/4/index.html","76e67554714a23c0a8aba01af7b0e8bb"],["/archives/2023/page/5/index.html","d19462873715552379dbc0b70a2efc87"],["/archives/2023/page/6/index.html","b229e18e7d4322d722b8dbcf6ea62d26"],["/archives/2023/page/7/index.html","b36b952e277e99d3982e59760c0daa57"],["/archives/2023/page/8/index.html","836047cdf1e2477fcd2d8c79006778ec"],["/archives/2023/page/9/index.html","bd19630dc352707daa5f5c06e1cd5069"],["/archives/index.html","3219361f7351d98f93e6cccd626b3dfd"],["/archives/page/10/index.html","38011c2444dbc422de5e9e14dc772264"],["/archives/page/2/index.html","38721b2dfa9ed8be67aa191df54e7b2a"],["/archives/page/3/index.html","680b1bc42ff653a9470a403067d8ef3a"],["/archives/page/4/index.html","7b374bf300fa84148d4d21c4d168bbee"],["/archives/page/5/index.html","62dce87a459a95b81eb7950aa70c902a"],["/archives/page/6/index.html","b83700ad9354bb5a98e211ed08e929c2"],["/archives/page/7/index.html","deb0811d15347ca6c57224024afa6d37"],["/archives/page/8/index.html","cd8392c8a8a97ef86d45793331f70778"],["/archives/page/9/index.html","d69f596e0412ed4445f843ab9b81eeb7"],["/categories/ACG杂谈/index.html","f185dd8694d192b734079bcfae771b08"],["/categories/ACG杂谈/page/2/index.html","f1d86d929340c744d0a0331792d8f48f"],["/categories/ACG杂谈/page/3/index.html","8c66185c0667371141805e9d36db81dd"],["/categories/index.html","1bbab8a38dc398f60e34a9cb4d3f88e9"],["/categories/学习笔记/index.html","c3432e69863edb84aabb048bbb04e8cf"],["/categories/学习笔记/page/2/index.html","0798e48e8be72e12adf9c7d9008146a1"],["/categories/学习笔记/page/3/index.html","37b9cbaa65eafb66f23dca9633d06401"],["/categories/工具/index.html","de3b99784fd50a0761ea626e8d8a7e8a"],["/categories/工具/page/2/index.html","f47521ce01a59fb229cbc255260c77b4"],["/categories/游戏人生/index.html","03fa73dd863dd1783d6e04fd246e22f0"],["/categories/游戏人生/page/2/index.html","949f128b6af654166f217f6d3ff6a88f"],["/categories/读书笔记/index.html","3e46d840df0897ea2c2467b824a50364"],["/categories/读书笔记/page/2/index.html","cb888f89c0cfe4b5e4e1e6cc0fc1ac09"],["/categories/闲言碎语/index.html","8a6173b03dd61c2f45a531fbe7bbcb93"],["/census/index.html","3dc23ea74935adb992d1248bd43adfc3"],["/charts/index.html","4e55ce42ca87666ab9b261174da1dcc2"],["/comments/index.html","51644a608494a5dbe33c9d5061d096e5"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","4b569f797f803dfbeab8fc8687b3c269"],["/gallery/index.html","b9ff3d4f7a14c38b9705849454277121"],["/gallery/wallpaper/index.html","d8e94e626ae036988bd2e07a6a06675e"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6bc4989cf59a132ddaf08115f6e91af5"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","efe6c31d7f088383a46fe8e0aa92e873"],["/page/2/index.html","ef1638be03b06f1fb6313d91bdf6de23"],["/page/3/index.html","1796d7582fc5240cb11bc2eecdbb055c"],["/page/4/index.html","be14ef79472aeef3990f14f87ba411af"],["/page/5/index.html","909e2315a16c91519e1d7a93e3a20f3b"],["/page/6/index.html","1cc341214629ded6df92a038ca7f21bc"],["/page/7/index.html","8632084a6c6995f753f69511d09c8d26"],["/page/8/index.html","a176a904c8579e493b3687753c867291"],["/posts/106331b4.html","6d6104557d9dac4f2dddf4b2784c4657"],["/posts/1185a02e.html","7ebf5e9e3ef6f13741f7b03e08c2de26"],["/posts/12e06b11.html","fb562ef338bc143f3035e7d4cdf74319"],["/posts/167c7c45.html","394c2e2c6a571db1c17a5523399931dd"],["/posts/1743dad6.html","9c237b381fc4376578e2ce47582be7c0"],["/posts/175a8e1.html","4c73bccb061735261e738b038c709404"],["/posts/1be398e4.html","9afa923ef839646f8e72d251f4a66a0e"],["/posts/1c5a0321.html","1e4c89328e2217fd9c215613bb4bea22"],["/posts/1c5b1e9c.html","0e345056cb5b841ec283e841953557bc"],["/posts/1ec7973e.html","4ba6b28a502453e8ee9ac25358f34d51"],["/posts/1fb82448.html","ea467dd420224c8da7415b2c2d569c68"],["/posts/21f18fd2.html","ce3fdf21680ee9fd510aff681eab3c53"],["/posts/29c507fa.html","76bc66b74387ae061514ebb8dca38a07"],["/posts/2f34eb00.html","616fc962d72e7e80468fb0c4f2475961"],["/posts/2f57a694.html","7d7a7dc913dbcc2b282f2cd0b0afeb43"],["/posts/374b54d5.html","ea7435e618dd5f7aedb6bb474b51189f"],["/posts/3871b764.html","4e635f636f7fbf852997d37500785858"],["/posts/3b308caa.html","035c5690455cbde58f185e61a50173d0"],["/posts/3c3cdb74.html","90655762cf3861c95dccd57d8a074359"],["/posts/41f65cde.html","5b75a359476e1ca97611be4628f1e655"],["/posts/4208fd6c.html","34b2eb781f4d0d7699f9526ef59502ae"],["/posts/4392373e.html","b5a7c6cfe42911e7e6611ecfa7374f99"],["/posts/440ed920.html","1ea79a56a62d8040a7748bb9b13e5c88"],["/posts/4d2b51ac.html","8b27a82d73d50df905cc91c40fd43fa3"],["/posts/4db1a52a.html","c92b96f15c0133c7d23c24472e36e2b6"],["/posts/503ae89.html","6e2c6481a7f36629c9b55b0932dcecb9"],["/posts/518e2799.html","f0433b98ed3c5da7c8708b2dc6ed44a6"],["/posts/535fd087.html","216eb0852c8d9ea71ba9a8e6a5500507"],["/posts/5923cba3.html","9e380ea2cc535abd9770b79cb6ca7181"],["/posts/5c1bb6b8.html","0e532d0182b2417c21b2e64efd4eaacb"],["/posts/5dc45f0c.html","5a0f5be43a14166897a3f68d9dc7a811"],["/posts/5f2caa2c.html","7bb9fb348df9843d4664b97883fb94e1"],["/posts/616be7b6.html","291e678f65c66920583a05d4f8750b77"],["/posts/62a1ec0c.html","7fad78f72e229a48c16824afffed6b1f"],["/posts/69fb361e.html","00928e47ce91962a9a04ebcbe9a071e4"],["/posts/6a8518ce.html","e479f30055dbe5732dda98466bf40441"],["/posts/70685119.html","e436ac330604c60312389f7adb25b982"],["/posts/743db4aa.html","17abc376bf4ed9fc30be83501d66381c"],["/posts/7b67faab.html","3fb6f742a8882c2028c1dfb3eabe9bac"],["/posts/7b76be01.html","d08278bc71876ede4463966bae7274be"],["/posts/7bff939e.html","48d43171f2765c825f6be47de980f21c"],["/posts/7cc4ca07.html","4de0ffc75c4ae94ea9979814dff47433"],["/posts/7d257210.html","ac2d364faaf5c36e336983053fa204bf"],["/posts/7e6a5c94.html","1f1cc3491cec1e8ab1fadc7652b31cb7"],["/posts/7ea0cbe4.html","3588323417270af6c2a480c79bf2d228"],["/posts/7f382da2.html","458a8cfea453fa6d0892ace3ab2d2d92"],["/posts/7f8d32f4.html","2595d3a67a5b6f258adf3ec5440e35de"],["/posts/8207aa48.html","14fb2345e66b98a16cd81f2102fed5c9"],["/posts/836ea9bd.html","d274deda733ee364e4a732582bc6feb9"],["/posts/84cae757.html","2f65368a76832a971da6152a6bbe86c1"],["/posts/88200036.html","cc65715550d934fbe53e12a30556e2af"],["/posts/922fb64d.html","bba6d7e66d977e9aa22e55042c6940c3"],["/posts/98332b29.html","b5de9e84e70e43c4e6aa48b00257bd60"],["/posts/9a1a736f.html","cfd76b3a88cda1f8b986c715f7d5f29a"],["/posts/9addd0bb.html","76790115ea75cbbca8c5dc98a295bfc2"],["/posts/9b44950b.html","72775d89ae87e9dbf3db7ca9df015533"],["/posts/9ca149ab.html","4d7e6afcb10e4830b76cb695caa3e0b1"],["/posts/9e4446bf.html","eb95c1318c9235e8a819eff013d468c6"],["/posts/a0271e58.html","c2e94cae1079191de7060c34d486fad4"],["/posts/a13c1dba.html","5c88974584201af3b54cf4c1225d993a"],["/posts/a1f2a4d4.html","f6f80b79cd8a132ee9e1f380ce0f75e3"],["/posts/a5f300de.html","c11d63945076bbc2687e38d187590af1"],["/posts/a98766fe.html","8444f3495aed9bd8b8c26e8cf765c169"],["/posts/a9f63847.html","ade818658263381ae3c3bcea07bd9afe"],["/posts/ad31055e.html","25cfcb908d4b0f603794ce179a94008e"],["/posts/adcd6e20.html","e0d458b8c997155648e2594ecb82ecb6"],["/posts/b0fa4c58.html","1304a3cd4a937c87c6b18fd9df612e5a"],["/posts/b1168675.html","0ce115a6130cdc7488990f19123e2cdc"],["/posts/b291b1dc.html","e7d0ce299646562690fd6a85cf308812"],["/posts/b2feeab7.html","b0bfc028ef04383444def0ef153453f2"],["/posts/b6d66f1b.html","13f90a261d321253b32263b13157196c"],["/posts/b7525d11.html","3cc607b7edf5fff8d1875afe8e9b65ac"],["/posts/bb154b63.html","ee7299bda0e2d54c1faea0dc84130d70"],["/posts/cc86a40d.html","fedee7c4db9b4fc5f343361e919eef9d"],["/posts/d36531a7.html","759599428e6c12be0183d612756e599f"],["/posts/d442e51a.html","87795385c51f0231bb50e6e79a92bca4"],["/posts/d7fdf01f.html","6dc695a3dc0b3f37669ba40265242824"],["/posts/d839b0e.html","93cdd50f4d7fb8c5ef2bfa8e2a96a10d"],["/posts/dcdf88c8.html","33da24667bd9f5a4d64ee5961cc8f86d"],["/posts/dd378ae0.html","c43f18e82c8f084db43d7d564e9224b3"],["/posts/e15be301.html","e7705a1816f83c90154d7aaebf074fe4"],["/posts/e2e4b4ce.html","a49027b4f1b67c3f8a99c64c2dd4e699"],["/posts/e35ef5bd.html","2bd991c08ad0199a89a100d653f6eb4c"],["/posts/e462ba83.html","cd4cac09760fea4407be1800a0f0a209"],["/posts/e53204e6.html","1657e8e7e39a08668104e86888969f64"],["/posts/e5cd9bbd.html","2e52159f0845bf307a827b3c85af55a0"],["/posts/e7a99a5e.html","317fd2a3de89f50d6a8ec8364e57b9bf"],["/posts/e9318100.html","8bfd655e4b0915232e163c74f4858ed6"],["/posts/ed52e6a0.html","8c797e231d7ec63acbc920bc4f96bca1"],["/posts/ee0ac59a.html","4f88704038aa9ff1c101343ff9f5d836"],["/posts/f09c1ee5.html","15164c8fde5eb5bb416701ed62f43fe2"],["/posts/f1252f66.html","52ec1f713ca75ee1a72bbdd136cbd32f"],["/posts/f4af26a9.html","326ac5e459e25ef740ac9ec272b24f17"],["/posts/fa3cd62d.html","3e4471c25e6ee6f36cd61ef3e43fd8e7"],["/posts/fb3794ef.html","215548a39713fb2fbf3569a943ecbc0d"],["/posts/ffdfd6d4.html","33e1bd0489722fa470435f000a57883d"],["/private/index.html","bc0b140c7fb95c322674b068296a1bf3"],["/random/index.html","6a65c4c0db417998b5c835463aedd6c7"],["/sw-register.js","22b0fbc8090ac01f043b9ffec24fd7e4"],["/tags/ACG/index.html","8c1cee218b2af110921b68d5b8c8842b"],["/tags/AIR/index.html","4a105709ffca87895a05ff8997eb6d4f"],["/tags/AliceSoft/index.html","52df8cb426fde6ff67a6a0ee522af6c4"],["/tags/Butterfly/index.html","6ba2ae9562bd055a63868c6610c0c337"],["/tags/C/index.html","3cc70030a502997a1f0a8ee243012c62"],["/tags/CLI/index.html","ea3fb2c89bed4218d8dacc11c903754d"],["/tags/CMU/index.html","4a250eaf85dafaa23c20987092cfaeb0"],["/tags/Crash-Course/index.html","d9a2b5c283a9b8a7de584592e682065d"],["/tags/ETH-Zurich/index.html","8186fe7b8028a628fb943b84785b24f6"],["/tags/Eushully/index.html","87e2e7851feb2f014351984afc0fd0e7"],["/tags/Everlasting-Summer/index.html","5c9d0422bc64ffb9432f669db5119ce8"],["/tags/GDB/index.html","2598f8fa9a99a579eb2005d7596f9bdd"],["/tags/GRIS/index.html","f9ced638cdaa1b776b81a6c7c412ba0c"],["/tags/GUI/index.html","691c6f748a745ff6cbefd80c2634fe3c"],["/tags/Git/index.html","2724f584cb17c5dfdb89f1a838559eb0"],["/tags/HTML/index.html","a2a1c260c612bafa713434014910ab4e"],["/tags/Haskell/index.html","aa62faad558c1767993078be706c3f3d"],["/tags/Java/index.html","cac687519c24fbcc5ff375764d580e7c"],["/tags/LaTeX/index.html","a13af74ac7ff8573f1cf4e9e7c26d018"],["/tags/MIT/index.html","6b775ce2bfe5b284a89524d0ae173888"],["/tags/Markdown/index.html","f3a5c9637da6b9199684fed92a588738"],["/tags/Mermaid/index.html","2a259f99b75c8866f482bc21b52a7c7c"],["/tags/NTR/index.html","2e725901c1845df25909cfe35c5db1fa"],["/tags/Pixar/index.html","a05d5192342453a6f5339099b880a370"],["/tags/Princeton/index.html","4e8a78503ab2c33ea462d8d2219be3ad"],["/tags/Python/index.html","fee1f5c63700e765df0edf541ff5f421"],["/tags/Qt/index.html","edd2ec4b2829f4c5a316b7815fbaab8f"],["/tags/R18/index.html","d7a86bf6109b96f5047469c9f38fa634"],["/tags/RISC-V/index.html","065d20c6886bc6aa6213212690ab7b83"],["/tags/Scheme/index.html","1f0301a4715389ec4ddc9227fb675400"],["/tags/Shell/index.html","38853d6d1a1a821382e305db145da406"],["/tags/Stanford/index.html","3eed5f5f7b598ed302cdb32ef62716c8"],["/tags/UC-Berkeley/index.html","b25a60e1d466a5f3501b0fc1cc3dd8c0"],["/tags/University-of-Helsinki/index.html","a8db32c1c8c6b93c2a91a7dc51dca481"],["/tags/debug/index.html","844f5b25aa7160619b2f640153663ecb"],["/tags/index.html","80928a899be57a807c96cd8316262de4"],["/tags/key/index.html","c6d06823768e820a9822e1a66b647309"],["/tags/web/index.html","6da2dcd4d6e8ebfd04c38253ab068be7"],["/tags/三国演义/index.html","dd250c52b804443f3d70eb4071addbf3"],["/tags/丧尸/index.html","6cf70843d1fe52e9110d21249679d998"],["/tags/京都动画/index.html","bb55608b24dbd1a8dd4951eafa8ea7cf"],["/tags/京阿尼/index.html","a4786910db6bafce9b0f7d7f7889217e"],["/tags/体系结构/index.html","4c72ec825b29bc379f70931a16603e6a"],["/tags/信号与系统/index.html","712884ee61333f263fd42b333187b704"],["/tags/信息论/index.html","856cbdb8fc398917da4142e2cf06246f"],["/tags/傲慢与偏见/index.html","650ad930d71bd3e4c41fdcecbab14cee"],["/tags/元稹/index.html","55b5fcfb9ab35fc0f446e2d859672167"],["/tags/公路片/index.html","a9844f18be887eb30d9f2d531de3c713"],["/tags/兰斯/index.html","6f6733f63e60074bc6d4a06d8170b9fa"],["/tags/关于我转生变成史莱姆这档事/index.html","d478c8ca53fe3ac0f43d526549b547ad"],["/tags/冒险/index.html","4f17f2a221db0641a3b1bfcdb30f6053"],["/tags/函数式编程/index.html","0a1b5760291d713e454a752742a914c8"],["/tags/刺客信条/index.html","badba5dcfd4e3dbb20757b1271e78dac"],["/tags/卖肉/index.html","f9a3a3a0b97824cdfd3cb0e51f65843f"],["/tags/博客/index.html","e0c803462b1f2ec1c2067ecef8745bcd"],["/tags/去月球/index.html","c73e3b733fc7d0e194796227e127e0e5"],["/tags/可汗学院/index.html","232867d02d359a8087c81044c975172d"],["/tags/史诗/index.html","1d8c72536386413c1310753d019ad56b"],["/tags/吉卜力工作室/index.html","b2495c928b86e2c77f96f654388715b8"],["/tags/名侦探柯南/index.html","e86b260069cee6630fa3f095a2513b82"],["/tags/后宫/index.html","dff450e1360a860bc3bdfa19bd639c5b"],["/tags/咒术回战/index.html","87315350171a663ce0fdc39f669e81df"],["/tags/哆啦A梦/index.html","f5c3264e842d1111eb1df6adbfd379ff"],["/tags/哈利波特/index.html","8031048eef6276fe8c755a40d26d26d1"],["/tags/喜剧/index.html","361a395fa6c69d44d616cfb1efbd9c9b"],["/tags/喜羊羊与灰太狼/index.html","34aff4d46b0fe3beb627c3ceadbb9e74"],["/tags/四大名著/index.html","331ca00e350310c68f140e636a0f91aa"],["/tags/图表/index.html","cb27fd4905b991687bcbf039751ad07b"],["/tags/复变函数/index.html","ebdce12d49008d9721720f3229b65d51"],["/tags/孔乙己/index.html","ecbe1588263cf7050e5d317a6890a7b3"],["/tags/字符串/index.html","bb45f0dad229f36564a0f9946471692b"],["/tags/学园默示录/index.html","90ac0394c8385084bf2ca8a907f31377"],["/tags/寻找天堂/index.html","06032b5b4bfffb118b1c1a3a39c5e50a"],["/tags/希伯来大学/index.html","655b49ff28a50ead9edc8b614c787a11"],["/tags/异世界/index.html","cbcd7277491b29480710c09c79a6b35a"],["/tags/微分方程/index.html","be9adeedb035defa3ee9de92ca47d87b"],["/tags/微积分/index.html","0338e080e2c74cea74977897770f0ae5"],["/tags/恋爱/index.html","fb21fb59d374294f8602718b1c7e3043"],["/tags/情感/index.html","686ba229997b930112076677b454b90d"],["/tags/成为简奥斯汀/index.html","d77aad2e908b8a7f9a4208d182e098d4"],["/tags/指环王/index.html","c4c8b99b2aa2059bd637f93aafefcf2a"],["/tags/搞笑/index.html","852bb643849c6158fbf8298b8fcd8fa6"],["/tags/教育/index.html","d210fae8a15dd9cf3d58756d5f8127cb"],["/tags/数据科学/index.html","ba2792ad819a866b1eb560a5e282c79e"],["/tags/数据结构/index.html","2564c0ef9ab7dd6df71fdb23aa73ad73"],["/tags/数据结构与算法/index.html","3d62f74d8145b754765463a83a7c869f"],["/tags/文字排版/index.html","3d6b0220b39992d40615d15f4dcf015c"],["/tags/文明VI/index.html","0494761d40419f5b41fb7fdd4d845121"],["/tags/旅行/index.html","d2a3106b2bdbb43cae64f85fb427433b"],["/tags/无彩限的怪灵世界/index.html","1d3063b28767e6a467c15f32a2fdce74"],["/tags/时间刺客/index.html","92a50f417900449595251c353a415c3c"],["/tags/有生之年/index.html","97d4ce5288d8cb6da202b43fdfadb2a7"],["/tags/李商隐/index.html","eaa7e700e8f289cc80413abfc7ea7e83"],["/tags/李白/index.html","17b7b9a9f0c3af1f3e946ddb297a17c0"],["/tags/李贺/index.html","436ac0d8c6cf4132a544d4ffe36c95b2"],["/tags/杜甫/index.html","6941567b3192f69542acce09e96018d4"],["/tags/校园/index.html","832472376ad2788357761893ed154d4b"],["/tags/概率论/index.html","db0c3e70abfc6aac25a237477477c9b8"],["/tags/正则表达式/index.html","20a21301a215f95db8b1ae82764e0d22"],["/tags/死亡/index.html","fea18964b5d20f99385286724a0e6331"],["/tags/水仙/index.html","7e470c1d820a36056a2ef0cddfd0a829"],["/tags/治愈/index.html","3f3a22e65dde9607a6465c0bbd36b427"],["/tags/烂尾/index.html","0d00691ea20fcff725685c22a428467a"],["/tags/热血/index.html","e6ecdfb2be5febcac453a113cb54abf0"],["/tags/爱国/index.html","e9729eba8379336bcde64cca3ba8d294"],["/tags/版本管理/index.html","c5625b0652f7ceafb529fb95969f9a90"],["/tags/玉子市场/index.html","d4130f9fce9393f5a14961351a6cc917"],["/tags/玉子爱情故事/index.html","ea9dde56dabc32bfc883d583bc2b204d"],["/tags/王维/index.html","ffe46f6106380251fda3d6994637afc4"],["/tags/现实/index.html","e06630a77b441a483357e0d7692debc4"],["/tags/甘城光辉游乐园/index.html","2d49e3e8239565d67f13012d03c94d00"],["/tags/白居易/index.html","02880328cd8677258eb533bd58287215"],["/tags/白毛/index.html","aacd1f4a33757606f7abdd513c106182"],["/tags/短篇小说/index.html","c67b221b52221692f6e936f412e094fa"],["/tags/神话/index.html","94e27724da500943e20a64b775b17242"],["/tags/离散数学/index.html","580885bd90e782c84bf7ca6d49737def"],["/tags/种田流/index.html","03dc6344f40dedc15643176a09febe81"],["/tags/空洞骑士/index.html","2ad711eb1cd39ae0178b31543e9e1f03"],["/tags/童年/index.html","42b92dbf42f8a078acd99cd3179cd42c"],["/tags/童话/index.html","f533955471c943ebfbe2707017bcac4b"],["/tags/第九艺术/index.html","2fb920ac9941b83549b5deed11f3bcb5"],["/tags/策略游戏/index.html","331da2c795fbf468c601e37e48eb7ea2"],["/tags/简奥斯汀/index.html","4b70b35a4731a101c8952c76839d2761"],["/tags/紫罗兰永恒花园/index.html","2d650106ac0cfb894f07a765baa7d3e6"],["/tags/纯爱/index.html","b7efd6bb198ff0c643a403281993b8ae"],["/tags/纵使手残仍大爱/index.html","977625406e2d5818cc4e30b3bf872f88"],["/tags/线性代数/index.html","4ef28ca5497b7b2adb2dd52c06018e0a"],["/tags/编码/index.html","63b83b212de614e6a0ab460324b9592e"],["/tags/致郁/index.html","ea86b87b8083a52e0bfdbc0cfb804da1"],["/tags/苏联/index.html","0703ba40f18ca63e6df157a9977070bb"],["/tags/苏轼/index.html","12b240fcec22799487979862dd5f28c5"],["/tags/英雄/index.html","9abbcf2270d983ff6e4bbd6fb27ff20a"],["/tags/计算机科学/index.html","52277813dbd2161e0cb867c786ff4f0e"],["/tags/计算机系统/index.html","78482033cb4494b5603c2ae71620b7d9"],["/tags/词中之龙/index.html","28971d76d8845ea4ba9ae623a0144b85"],["/tags/诗仙/index.html","0f88688d59c38f9dda994c815bda3195"],["/tags/诗佛/index.html","81a4efc5b8eb06cb49dbfb4e42118509"],["/tags/诗圣/index.html","78451c6a07cda71045c4e320fd5fc10a"],["/tags/诗词/index.html","3cdccd20dea9831de326d4af1cd9d1ff"],["/tags/诗鬼/index.html","ed359f2ad896da133622ed99f2d6e58e"],["/tags/读书/index.html","7d36f8dce0cbf72b5c2affdca7567f59"],["/tags/豪放/index.html","ae833b44e04a837818869940b4e13236"],["/tags/跳跃/index.html","88f3f9458aecc78060ab025ab50120bc"],["/tags/辛弃疾/index.html","3b9636f5b159e25eefd5b390ec2b4103"],["/tags/运动/index.html","e8e4c067cf7907307eaa3b05968f5c31"],["/tags/钉宫/index.html","af7f2d39b1cf12adddaf27b5a3ace890"],["/tags/银河战士恶魔城/index.html","dfcbdd70cfc0556df3fd501fe13236fa"],["/tags/陆游/index.html","23143abfd4364c9baec46100a327694a"],["/tags/零之使魔/index.html","5ae5eb18d83646245c3c438f3fe5d13e"],["/tags/霍比特人/index.html","fd4327c7bfa7cade9e1e84bf7008e0cc"],["/tags/飞屋环游记/index.html","144575f6e93133cdd3cf9d50780c8380"],["/tags/魔戒/index.html","796118f983581a29c0705bdeb16b00b7"],["/tags/魔法少女小圆/index.html","a8b6fc0e65a986370eb2a9e4dc6d0a6b"],["/tags/鲁迅/index.html","771400d9ab74445c556e8c2ff78c48b0"]];
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
