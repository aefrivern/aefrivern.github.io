/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2b14cee83aa6c8e1db9a88692a6c55df"],["/about/index.html","1ec6e479b742d52be30b83444a2f86c5"],["/anime/index.html","df995e3c78c857cd138a44c7ccaa0518"],["/archives/2022/11/index.html","89ec238c4569185eafc003e57abf2d38"],["/archives/2022/12/index.html","ad5755aa873157db62af049661e1a073"],["/archives/2022/index.html","1f5e50464d7c96a881e62862dbb9ec2f"],["/archives/2022/page/2/index.html","4da8216e7b80bc63ff4dde68dad90780"],["/archives/2023/01/index.html","3dd7010a689730ea0de9f05d5c1b3180"],["/archives/2023/02/index.html","d9a861f039e149ac832bd8e9dd9448a5"],["/archives/2023/03/index.html","1ae9e7b65131fad6a7635147e3bfa3be"],["/archives/2023/04/index.html","f82b31886479175af96aa4f52459782b"],["/archives/2023/04/page/2/index.html","3df226900eecfe642630157512d34e40"],["/archives/2023/04/page/3/index.html","ab0d1c550dee8a53ee7e351f079a9ad8"],["/archives/2023/05/index.html","6283e47d52239543150473e901843f5d"],["/archives/2023/05/page/2/index.html","19eb4361c9f52c9990531cac17ae4516"],["/archives/2023/06/index.html","73ca846962d6fd1c372e9ca00dd07e99"],["/archives/2023/08/index.html","a5bfbd563bb4fb7e202eebb86b876801"],["/archives/2023/09/index.html","246b614c570b51067e4c76328b4ecfd6"],["/archives/2023/09/page/2/index.html","9ad7a6a12655c77581a135ac6d521bd6"],["/archives/2023/10/index.html","1c2e99da7e70af08b3bda67fe879d619"],["/archives/2023/11/index.html","cacf0acc06aced9cbf812537f5f289c8"],["/archives/2023/12/index.html","312e84db2069f0f12a00c492e014f05a"],["/archives/2023/index.html","fbab23870e80e989dc4a86c392ec849d"],["/archives/2023/page/2/index.html","cb3a8a3def38a444c5a682de54de1df6"],["/archives/2023/page/3/index.html","0ea030d31d3dbb0ab717636738c99fe9"],["/archives/2023/page/4/index.html","2970601ba1618a721d6eef5b4b72ff80"],["/archives/2023/page/5/index.html","f56c0061fd1846027f54b3a8984f7e01"],["/archives/2023/page/6/index.html","8a5a4c08e58819065ea417bd89297d9c"],["/archives/2023/page/7/index.html","778f3d0a87fc613a65d790d25c8696d2"],["/archives/2023/page/8/index.html","043fb98546c2c6ee15af93c86452f0c4"],["/archives/2023/page/9/index.html","22701b65e72b7591977e99d2ebb8f167"],["/archives/index.html","186905107738757ba13277c73a6ebfb9"],["/archives/page/10/index.html","7ec7ebfa27452db752855cfe98359dcf"],["/archives/page/2/index.html","afa1ea3e1ab2925d8494267416347475"],["/archives/page/3/index.html","3246d5110af7e10c02afcbece0abb28a"],["/archives/page/4/index.html","18097f4bd2d780f6870fbcf904e777a7"],["/archives/page/5/index.html","6ccfd4e474f2275870e6951f738899ea"],["/archives/page/6/index.html","26dabc17c72fcbc567e180afbb40310d"],["/archives/page/7/index.html","5960fd2d54170d9eb6e97b6d507005ba"],["/archives/page/8/index.html","1259d20e7c5538d078de36eb3e25fd34"],["/archives/page/9/index.html","0abcf7e2183f795cec8e9c3374b6f581"],["/categories/ACG杂谈/index.html","a2b55dd19e2b4a82bd40c6d7d60f1f85"],["/categories/ACG杂谈/page/2/index.html","d4df767f97740cfe305bc07209e764be"],["/categories/ACG杂谈/page/3/index.html","be4ed523b259adb61f397cf7198694d2"],["/categories/index.html","efb3a0976c18276b078e1d3798ec5bb7"],["/categories/学习笔记/index.html","ade0b710170e348f646898e883d6fdd2"],["/categories/学习笔记/page/2/index.html","09b151f60970b2952f150fadce5887b9"],["/categories/学习笔记/page/3/index.html","72d72f2ff707b36f96dc07363299a4a4"],["/categories/工具/index.html","4aec334a60f0b53d0524cbf24ee57fae"],["/categories/工具/page/2/index.html","dedb6fc441865e20e45265943ac4dce4"],["/categories/游戏人生/index.html","896db4765524343845a21135bac732f7"],["/categories/游戏人生/page/2/index.html","5f4b03456f50e6f60b3f100b5fdde287"],["/categories/读书笔记/index.html","50907fd50bb6cef141bb65f4896523f9"],["/categories/读书笔记/page/2/index.html","89c0ba9fc6511b9dfa537f5d781ee8e3"],["/categories/闲言碎语/index.html","e496ffbdbacf438472738efca9293b68"],["/census/index.html","9214747af49877fdade7fe0368239160"],["/charts/index.html","5ef0187083d31e07a3693a28153841a5"],["/comments/index.html","59e94b829455a7bc29452da0fd2ccb8f"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/highlight.css","1d5f2a1540221b08913c2e60596ca53c"],["/css/index.css","e9c8d8a8fb9b33cfbe02cbb945dcbf70"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","db908e647877869d9d85779aa1d052c7"],["/gallery/index.html","17047266d4acc338d346d4f94a0e498a"],["/gallery/wallpaper/index.html","aa1dd36fcfa93352ab69dd368a3b8128"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fc43df739bdaf082447e1bf4ea8f68fd"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","cc02ee57b8fcc0af7e6b9e6c95c35dd2"],["/page/2/index.html","6419e124896cca069d7a4cdb247dee55"],["/page/3/index.html","56268f5075a5b3b00e02dfd12dffbb7d"],["/page/4/index.html","2a28a2b1761bf23a121fe83615abfdba"],["/page/5/index.html","b109a0bffb8efcf4e04ec8f8d3bc0a48"],["/page/6/index.html","8737149ebc692982802c170c12b77287"],["/page/7/index.html","c06a64e30bcec456054d136afa9114a9"],["/page/8/index.html","40f390b22ffbedb145d395df152d3739"],["/page/9/index.html","2b08740be364d6d672d19b859158af40"],["/posts/106331b4.html","a387887f3fba8c328eb87dd1e7d77eb2"],["/posts/1185a02e.html","016fe4644b5b18dd2c9d9cfac0b60be2"],["/posts/12e06b11.html","a8f0e9c29f81ee6f82e0ca48d37e6894"],["/posts/167c7c45.html","b89be17aefafade14cde8183b3a53674"],["/posts/1743dad6.html","ff0bc881b5516e1491b7c23625c1b7dc"],["/posts/175a8e1.html","89a0df1c9e6d6b9add34cfd219148702"],["/posts/1be398e4.html","0c8605ffb466f08db20911f4dc2dfee5"],["/posts/1c5a0321.html","8ae05f4d12ee69e3973c837c8e103824"],["/posts/1c5b1e9c.html","975e00d62aeb8b3c4450225dfc40ebd9"],["/posts/1ec7973e.html","056cb4de366b414ef63e0dfc477752aa"],["/posts/1fb82448.html","24e4be8db234986195e827ca6fd7bfdb"],["/posts/21f18fd2.html","813d0d823db1d28a79bfa5522b72732c"],["/posts/29c507fa.html","38f4b9b949e18c64742dad75904a8c02"],["/posts/2f34eb00.html","659880ad243e9f516ff2d7e96a9f0ccc"],["/posts/2f57a694.html","5492b2408f23fd9a31cdd9fd65f726d1"],["/posts/374b54d5.html","b18e029faf1a71b30273a481ec39056b"],["/posts/3871b764.html","5302356a3cf71f93c734fe92ad9c7c6d"],["/posts/3b308caa.html","afc95dbeee1aa59d79c1e0a93a7c5d48"],["/posts/3c3cdb74.html","dcba1a429a21b77559a9c10687e9baa1"],["/posts/41f65cde.html","7c123e881f9d727cf92d4ca6bf8df808"],["/posts/4208fd6c.html","2a6c7a19ee2a462f4bf032c9f2a3b558"],["/posts/4392373e.html","ace13e45d63e2c22655abe13ea192c02"],["/posts/440ed920.html","4daac4cf3d99b434714031b952cc084f"],["/posts/447a8d68.html","923dc8e070fbe69d6f7fa23d8d788875"],["/posts/4d2b51ac.html","5ba9898472a95e69def836bc08205aaf"],["/posts/4db1a52a.html","539cadcf9493d7c2de5e92042dc02c36"],["/posts/503ae89.html","3834dccd404daaf717ede1e40ae70add"],["/posts/518e2799.html","f4ab7604a58f60f69dafcfa088996322"],["/posts/535fd087.html","78398a41f3dbca020d3bd92f61b40713"],["/posts/5923cba3.html","a059f8481defa4a81bc461d3773ccb31"],["/posts/5c1bb6b8.html","2488dd0f865d267ab66a5c452479d083"],["/posts/5dc45f0c.html","73b6a53aabdcc296302cecfb43732c0c"],["/posts/5f2caa2c.html","ccad8f08996fa8ec1b0f5eacc395e86d"],["/posts/616be7b6.html","098e5fb83873c2431f03fe658bfafe23"],["/posts/62a1ec0c.html","44e49fa26c915a1c5fee261756f3ea30"],["/posts/69fb361e.html","e82563d94c65cecfa17772eec04ce137"],["/posts/6a8518ce.html","56624533ab19015d73ec10f370681f80"],["/posts/70685119.html","92da360862134fc71e8698416617096e"],["/posts/743db4aa.html","54e70d26892bae30e718361ea147e5f0"],["/posts/7b67faab.html","b330117aec8884be06b9c2477551b48a"],["/posts/7b76be01.html","b6333cc5e0e09c0d511bf3110733427b"],["/posts/7bff939e.html","ce32f90018958f9203e55a6fd5639f48"],["/posts/7cc4ca07.html","db64fb2535abdf7a006c2fbf098ab01d"],["/posts/7d257210.html","b187a19da1e5afdf43a2c07dd2890f34"],["/posts/7e6a5c94.html","35bbb41114fd939647aff09d9aa5f424"],["/posts/7ea0cbe4.html","c97bd6196baadfac8b618b3bbb37ff44"],["/posts/7f382da2.html","eec23ea5164ab95d5b32deeef4dd1aa4"],["/posts/7f8d32f4.html","b64eddc93aaa24afbae1a4e694c7191d"],["/posts/8207aa48.html","40f9d98625a257ea93430ec868cff117"],["/posts/836ea9bd.html","085e1ede692107da65528aa5d293b92a"],["/posts/84cae757.html","ce9e0f24c883b8b6b3a648b9e2b1413d"],["/posts/88200036.html","da4c7e9561c8e328cb0a2ea93470ed19"],["/posts/922fb64d.html","d2fba98cf6d4ef953d06a931b3a4389a"],["/posts/98332b29.html","1f67e21c245a39da4edc07e07c54cc07"],["/posts/9a1a736f.html","e36a50886f255bc106c12d92eb3dc6c7"],["/posts/9addd0bb.html","c5cbb196665cc34d7cc46a7ca58a04be"],["/posts/9b44950b.html","f913cef5349f788584dd2606a51e3f6a"],["/posts/9ca149ab.html","414351517aa4bed5314d32b482822bcc"],["/posts/9e4446bf.html","3987e8dbfe4939b3d94c65c7c712a274"],["/posts/a0271e58.html","a19276f88522d24a16a30eae83db52f6"],["/posts/a13c1dba.html","dc9a575791169c2da2a1f53701e626a7"],["/posts/a1f2a4d4.html","9aaf8959e0a611f8436b122eb7871f92"],["/posts/a5f300de.html","3dd3ecdfe1c2d204d8f1b02aabfbe42b"],["/posts/a98766fe.html","9eea17f33688b11b564799c234193eec"],["/posts/a9f63847.html","ea23df49a11a4bb9d6c2fca19a1388e8"],["/posts/ad31055e.html","5bd76718682fc15ad72d0e7543ea125f"],["/posts/adcd6e20.html","7bcb6eb18547ae0d1fd9a471358aa186"],["/posts/b0fa4c58.html","6c6355a1627d6ece9bf007def3353925"],["/posts/b1168675.html","c4254b5e92ec338b8b657be55898c620"],["/posts/b291b1dc.html","084fa0011295a1ea2af8dc0ffa1a168e"],["/posts/b2feeab7.html","d8c823fdd50d73c934fb5edf7112a53a"],["/posts/b6d66f1b.html","e7138615fa2bd678285d816bf92dfc90"],["/posts/b7525d11.html","334701a4b6ef2228dcf09f83f0738cc0"],["/posts/bb154b63.html","ef26898715206f8e065ecd94a0e99dff"],["/posts/cc86a40d.html","ff34f3070940c191b0df64bf25412e39"],["/posts/d36531a7.html","ce0f57e4296c8a7fb1cf2b9d244d028c"],["/posts/d442e51a.html","68cbd420560044f653f0b3d27d2aa913"],["/posts/d7fdf01f.html","b051b9ea75b977e41f870b6ff6225fdf"],["/posts/d839b0e.html","7b518a13b5fcf8bb04c0807a3a0a7763"],["/posts/dcdf88c8.html","6fa74a1a0609f2aa29b5129c1b621acc"],["/posts/dd378ae0.html","8f1e3fd35e14944ffc40440b10f81b51"],["/posts/e15be301.html","8c65b7a784b54bc16b86f1d7a2561fb6"],["/posts/e2e4b4ce.html","fd032def799c61986aff3b318a961618"],["/posts/e35ef5bd.html","15ac75bb6b38845769eba0ada00110e5"],["/posts/e462ba83.html","9e6e1c8943a184020a9bc1559714bae6"],["/posts/e53204e6.html","c02be6479dede3acf33be2c476c76857"],["/posts/e5cd9bbd.html","4e4c0c9f6820ae3892878db46d62d6b4"],["/posts/e7a99a5e.html","a1ce1e460eb33205bedb85aa793bd341"],["/posts/e9318100.html","d2769a44382eeb5b0d2b853f32add857"],["/posts/ed52e6a0.html","db491487dbe6e773026bf49946fa06b4"],["/posts/ee0ac59a.html","65bb17685ca0fa152c8e33bc2307acba"],["/posts/f09c1ee5.html","b2c3bddd00289745be0ee94e130fb202"],["/posts/f1252f66.html","4b1adf6c3d8c3c5106a998223b4b0359"],["/posts/f4af26a9.html","93597eeb85fc0ec6fc5b196cb0c5742c"],["/posts/fa3cd62d.html","255036c8686b0683b7808a161812a937"],["/posts/fb3794ef.html","60d62194b5d48972a23c4cdc002a6aae"],["/posts/ffdfd6d4.html","91e1a267c5866022bf0113a30ca9f478"],["/private/index.html","1c6b656d2f0e49fae286dbaf4c25aa63"],["/random/index.html","5f70562ff358a9f136ac93f802a18b27"],["/sw-register.js","0f524eb8fb6db42c7e8c6c1fc69cc61e"],["/tags/ACG/index.html","01a8e86cc22a75491cf593407c76b75f"],["/tags/AIR/index.html","aa4026fa536540462487c18af3ab4744"],["/tags/AliceSoft/index.html","d0ce01f128a12a76f843582d50ba6fec"],["/tags/Butterfly/index.html","455ed98e3c3c060ca9d27a3e654a3568"],["/tags/C/index.html","97586c1740d20093e1d3051983a0d44a"],["/tags/CLI/index.html","5f974c8315e2b344581b9a6e27298fd1"],["/tags/CMU/index.html","13b06f08af879ca1d6105065fa01f60a"],["/tags/Crash-Course/index.html","3cbd14d69187e7aa99c8f6b6f03055c2"],["/tags/ETH-Zurich/index.html","7b188cc8df9eefe30ce466f38ed06371"],["/tags/Eushully/index.html","306a88d0b3888645d00f036ce6187e65"],["/tags/Everlasting-Summer/index.html","92269c9ac2312e60fcc1a6944a01277a"],["/tags/GDB/index.html","f86e9a6909ffa7ab2118172769540f76"],["/tags/GRIS/index.html","788ed80bd1565fb3b16fa1ac47603fb2"],["/tags/GUI/index.html","8cbc61c1b14db42d71f1d1c08d003217"],["/tags/Git/index.html","fdae307c0c0272ee85f1e3f8c02c8468"],["/tags/HTML/index.html","2940752332b91f49d0eaf6a75f5b049a"],["/tags/Haskell/index.html","6e42ee320424a44594784e9d48a81039"],["/tags/Java/index.html","f619740f693c5d66ff1c6bc6f2a40623"],["/tags/LaTeX/index.html","410263a943ba530104a2c1df5bc6c236"],["/tags/MIT/index.html","95f7623f92c067dbeb5f34fe20011c8b"],["/tags/Markdown/index.html","0512f33be4da8193390061c741ef65ac"],["/tags/Mermaid/index.html","e383d21bacc5d0ce53af5aa9ef0cfbdf"],["/tags/NTR/index.html","cc6c21ef5920f16429afc1473889f419"],["/tags/Pixar/index.html","761a44f91e3b2a8950b4d0baec89c8f1"],["/tags/Princeton/index.html","580dc73496f47b586aa6ce1f5fab4699"],["/tags/Python/index.html","24e2e9dd2a30b4389f79a9223849d4b4"],["/tags/Qt/index.html","a8b892c9e7cc46b6423317c7ac533cf5"],["/tags/R18/index.html","db652ca7606d1503eb0f4b193023f128"],["/tags/RISC-V/index.html","3988bb8b80641e4ba4d0504e164e17b0"],["/tags/Scheme/index.html","42e4f6bb8b0162eb27040ebb0a98bbbb"],["/tags/Shell/index.html","aef83dfeff12be38d755ece3f60debe3"],["/tags/Stanford/index.html","16c3b6ff8dbfa898f0905705dada80e7"],["/tags/UC-Berkeley/index.html","12878d132407b53a85ff05b98079272f"],["/tags/University-of-Helsinki/index.html","aff44069ef301b65e287b1e88f2901f4"],["/tags/debug/index.html","19b04959b8469a2cfbd181e6869bf312"],["/tags/index.html","e99d079e82cb293021fdacf2d711a852"],["/tags/key/index.html","a835c6819c48ea0de4501edcb602d9d8"],["/tags/web/index.html","60f38a896b101df853db46ef12874455"],["/tags/三国演义/index.html","47ce9762d79192bf4bb66defbdab0044"],["/tags/丧尸/index.html","8a00a29a136fe64d691939102399bb13"],["/tags/京都动画/index.html","82d400477bcbbccaa5782f9ce532ced4"],["/tags/京阿尼/index.html","5029e2a768fd2aebdd80d7da120fd44f"],["/tags/体系结构/index.html","bdd022ec28ac2e9ab03d65b976b35bc5"],["/tags/信号与系统/index.html","5f73f9d32ec0918e72bd1d28000afa96"],["/tags/信息论/index.html","a5bfc6cda66573417b8b0ea3b1216e5a"],["/tags/傲慢与偏见/index.html","ae17c2e129616a6722a7bc2d560afc14"],["/tags/元稹/index.html","f5e92204ff83b14c5204248cba4e1a6b"],["/tags/公路片/index.html","8240efe0ac694276141b9040454d1424"],["/tags/兰斯/index.html","c2fb3665a5e4b6849925cd0161814f4e"],["/tags/关于我转生变成史莱姆这档事/index.html","e1572244b3ec2a3e1e905923887c8bf2"],["/tags/冒险/index.html","8f9699fb6fff361d706de5f3d67ea9a4"],["/tags/函数式编程/index.html","9132f4715eb0b08615f42e65f11b83b6"],["/tags/刺客信条/index.html","4eae5b691f66bed212256d94387e690f"],["/tags/卖肉/index.html","c20fe99b419e48ddb50646436d15a448"],["/tags/博客/index.html","6fe8d4e7cd25bd6b623dd309b091e155"],["/tags/去月球/index.html","7b25e48f5eafde3be0f7aeb7961b96e7"],["/tags/可汗学院/index.html","03b53ebe968b59e73a5e58c630385e07"],["/tags/史诗/index.html","d115c8a89f8a54c69439ef91c865103c"],["/tags/吉卜力工作室/index.html","ab73c31b69b392266f92223ed58f82fa"],["/tags/名侦探柯南/index.html","8fa783180b14ffc97183457ef366892e"],["/tags/后宫/index.html","65e71f04a3d904586f505cb47331e1cc"],["/tags/咒术回战/index.html","5a1fa8e245e66d1af6d8b53c4549e270"],["/tags/哆啦A梦/index.html","6ab7de74a6debea21085f24a921d49da"],["/tags/哈利波特/index.html","337ef1df3376a3ff63f81d99f9b2b3b0"],["/tags/喜剧/index.html","69b614ec23f8460ee30c31fca98f0bdf"],["/tags/喜羊羊与灰太狼/index.html","0296dbee85d5f65061f1d44cb82426a7"],["/tags/四大名著/index.html","cad45cd7553b221b682ffff2c81fd6e1"],["/tags/图表/index.html","1afab961f9aeee0dd97c78a12437ce5d"],["/tags/复变函数/index.html","0dffc3418033955d061eb863c256408c"],["/tags/孔乙己/index.html","ed32c510a2bc93b08f391e051406944e"],["/tags/字符串/index.html","2962656c1760b23b565a6d499a77cfd5"],["/tags/学园默示录/index.html","2400222ea21b3e9cdd2ca45864454c4d"],["/tags/寻找天堂/index.html","e97bf458163d0844a99369d8c8df910f"],["/tags/希伯来大学/index.html","d391fb9eb2df6a2064772c73c7d51389"],["/tags/异世界/index.html","30d4de64bdf1fa09fcb37e70f7d60f31"],["/tags/微分方程/index.html","292ee54a2f83ff09b17f7fbe9c9f3984"],["/tags/微积分/index.html","512b3c0120121f1ae3e4b5002c29faea"],["/tags/恋爱/index.html","a20f198a124e4902cde2771890bc3cbf"],["/tags/情感/index.html","079f3369deed045e393cde6e0ba9d5b8"],["/tags/成为简奥斯汀/index.html","d2b27ca33a816c3e7fb30ab5586dd4c6"],["/tags/指环王/index.html","a90d049e62db385fac4e1997fc5ad96a"],["/tags/搞笑/index.html","7b07d67e79322dd05d933be199de500f"],["/tags/教育/index.html","b360658f674730f69b3a6aace0e95659"],["/tags/数据科学/index.html","0f0bfc3588fbbf213e569a9ef899207d"],["/tags/数据结构/index.html","6ad9c7092b4d945784eeaa938a824563"],["/tags/数据结构与算法/index.html","78c65e6b9db9718f401eae2ed79cef60"],["/tags/文字排版/index.html","78075c4adf6cffbc7e1f2e568af966d4"],["/tags/文明VI/index.html","e562b4f76d43a0737f68657d467073b7"],["/tags/旅行/index.html","c9f1c19dbd05673fc2c5c51ac022ae59"],["/tags/无彩限的怪灵世界/index.html","e6d30894d4ff66c1ffd7b3254d37bf8f"],["/tags/时间刺客/index.html","9948cf66c0dccb09201183602b818120"],["/tags/有生之年/index.html","6ec286b2d9bb87487f9fbfa3da93e961"],["/tags/李商隐/index.html","8c87f27097d3543b5567708de14f0999"],["/tags/李白/index.html","e40b999c647cf74c435b113647385c4d"],["/tags/李贺/index.html","073b951b12b5cb3b782312f126363139"],["/tags/杜甫/index.html","949f84639bfd637098fb6949f43094c7"],["/tags/校园/index.html","66ee2a23d0e88a8bb3a6bc788e69fee8"],["/tags/概率论/index.html","f827ca5f1f5df48f8a23518fb89b72cb"],["/tags/正则表达式/index.html","017e61d29d4e9a3b9a66fefa7b575b99"],["/tags/死亡/index.html","599e0d2500e57dff0c5c7022d85e203f"],["/tags/水仙/index.html","e0e0ab21af21359e180b5f2ad234659c"],["/tags/治愈/index.html","688989a5d9d8ce1f0f5c4e8a8753655f"],["/tags/烂尾/index.html","03cfc5ea6bb5ba7f15a8c69d52311df4"],["/tags/热血/index.html","78d2aa0727fa60f19e3bf94a68557027"],["/tags/爱国/index.html","1b1f7ca4205cc9a87e3ee62ab53beaea"],["/tags/版本管理/index.html","ffe6ceb4732d856c53d7a24e53eedaf2"],["/tags/玉子市场/index.html","f74e189cb16c0d37f8ecaa6a4f79af78"],["/tags/玉子爱情故事/index.html","f420d48ddac3d8e5467ee67ac10a6526"],["/tags/王维/index.html","55c6489c3d2ef1e2657467a4f2a0cdf8"],["/tags/现实/index.html","52a11ab39537b7692b06393bbbbc1329"],["/tags/甘城光辉游乐园/index.html","39d0fb31ad626dfb3e6373ff1f1810b9"],["/tags/白居易/index.html","47b59c28d3635525afffa4d15c4a0349"],["/tags/白毛/index.html","d3d13d96532fb83489353adbb542c5df"],["/tags/短篇小说/index.html","c9b3c23561d8179d2bd1912cf621a17e"],["/tags/神话/index.html","7dc2bed1a46f07ad2ed44537bcd50182"],["/tags/离散数学/index.html","847a93970dbbd5d0c564b3e593b592ac"],["/tags/种田流/index.html","d4b84b1fc7070b40b35b790ea2fa8b2e"],["/tags/空洞骑士/index.html","953bdeb3f3cebd9eb297034e473e4c89"],["/tags/童年/index.html","8a3333df26698f557a022d7866ffe3f9"],["/tags/童话/index.html","6bf9ff1634d6b830584a64f8340fc3de"],["/tags/第九艺术/index.html","ca046e3268ed3e98d006fc7be14e5d8a"],["/tags/策略游戏/index.html","2dc3861d253f31189605ed6598608ba2"],["/tags/简奥斯汀/index.html","25329d30ad3fb90e8571724f93ba664a"],["/tags/紫罗兰永恒花园/index.html","3b8974887a7071d5bcb24db7a4b1dc47"],["/tags/纯爱/index.html","edf0d2e6dc02ee9c46a9668d2f0f6934"],["/tags/纵使手残仍大爱/index.html","0bceac4fb3e40c431260df17babff906"],["/tags/线性代数/index.html","1e2c4da054babbe6dce27fd888e9ee18"],["/tags/编码/index.html","7d4a19e780ab0479e1564aa009ec814d"],["/tags/致郁/index.html","acc75ec089b17f229464be461a5aebd9"],["/tags/苏联/index.html","7473036e9a8734dbe719e147020c89ff"],["/tags/苏轼/index.html","a4181721e03a520ecbd5c4c03444c55d"],["/tags/英雄/index.html","715b9a616fb771451ee9be18b06df3af"],["/tags/计算机科学/index.html","27dcd227997a87d8f3fc161dad0c5982"],["/tags/计算机系统/index.html","23b01133ad3c93481f935285bca58c93"],["/tags/计算机网络/index.html","e2d0d596606b140e0fb1d0fe407eb437"],["/tags/词中之龙/index.html","5861e3465415f8e5edef04e74c239510"],["/tags/诗仙/index.html","5e8ab524a1d766d053228205b42e0f4d"],["/tags/诗佛/index.html","72dba8a53cbd0b805337fa4a80172d97"],["/tags/诗圣/index.html","faf41f1d69c9fe0bd278611907bf108d"],["/tags/诗词/index.html","20f8b8bd1af462925d089ccd8415f2f9"],["/tags/诗鬼/index.html","eadbffb62d3988c003af8e248bf66c3a"],["/tags/读书/index.html","dee9b4d300187b7fb682651d6a44cecc"],["/tags/豪放/index.html","b2e0a5b5e756dbb7378c042968d9ab5a"],["/tags/跳跃/index.html","47ae5cf10b62a5c814f5eb2f827d46c7"],["/tags/辛弃疾/index.html","98d0598faafc10d0eb6561b43c32416a"],["/tags/运动/index.html","a66972ad8bf9d9b46697c40f7da6674c"],["/tags/钉宫/index.html","f25ac5f6d855565bb763eb0c034d8cba"],["/tags/银河战士恶魔城/index.html","e488b2bfba47bda48b3c4c3363a8d9d1"],["/tags/陆游/index.html","e0c0c93718fcd2d6dcf5734de2e1b55d"],["/tags/零之使魔/index.html","6d316da04095f91532f9416d27a26764"],["/tags/霍比特人/index.html","5700a8f4d45cd8157d720df19856c45e"],["/tags/飞屋环游记/index.html","1312e60a8cd4426ed2b1448ce9083196"],["/tags/魔戒/index.html","e11fdcb5ffbbb501225b56a6b3d5309d"],["/tags/魔法少女小圆/index.html","9f7dcdae3c822d6db508b23a1e6e98d4"],["/tags/鲁迅/index.html","f29a347e650c9fbc6e1e2b7232bf6593"]];
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
