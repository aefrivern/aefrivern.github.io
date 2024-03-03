/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9d63d92fbe6c0cb0205c524cf4b01c1e"],["/about/index.html","213c1463ec902b05e04d6a1bab001fd3"],["/anime/index.html","78f8fc8bb544a4a959d656578cc314b1"],["/archives/2022/11/index.html","d9f3bde0b947163faa848c18a5a9701d"],["/archives/2022/12/index.html","7bf6abc02e635c1397844142e8602120"],["/archives/2022/index.html","082467b5d29a09de3ff90b4b3bcab97a"],["/archives/2022/page/2/index.html","19d13856db98797d74fb9c36e1ffddb5"],["/archives/2023/01/index.html","d19682b03768fa2c3a3581b40c37b758"],["/archives/2023/02/index.html","67362e0c4ec82a6d8912f6180f8f1fbe"],["/archives/2023/03/index.html","e0930a6b8b2cc111310d3a651ece3f1e"],["/archives/2023/04/index.html","3eedf67282abc3f87a2fa1a4e38bd0a6"],["/archives/2023/04/page/2/index.html","161875a37130fbbb5b0286dd72990837"],["/archives/2023/04/page/3/index.html","39a1475edcf632ed57722b05b0a0e7dc"],["/archives/2023/05/index.html","d65e491807a4a321d2f67debb8d12c89"],["/archives/2023/05/page/2/index.html","a997110976fa71854dd25709b43ac771"],["/archives/2023/06/index.html","9f2782958f8736cc2f1ab3caec6c1fdb"],["/archives/2023/08/index.html","d7a81a555840bb8ac7afff431dd73058"],["/archives/2023/09/index.html","8c6e93c6f39ea9d56b4c29b178dd5989"],["/archives/2023/09/page/2/index.html","faf23b523d841f3e0b4f1d82452c3506"],["/archives/2023/10/index.html","e4ac03ed572b9b8cf581a5929b68b0bc"],["/archives/2023/11/index.html","5d45d53825de374f3d5bbc6cf43591eb"],["/archives/2023/12/index.html","eb3f54ffd3adaa42743a49fc4568b9d4"],["/archives/2023/index.html","6522fa143d46bc1b4066a6078f42fe78"],["/archives/2023/page/2/index.html","7ff3060728d801d749b8573d7b9c868e"],["/archives/2023/page/3/index.html","df0633211bb453a933d1aed992332128"],["/archives/2023/page/4/index.html","324a0be2948000d64c56367d89fc9800"],["/archives/2023/page/5/index.html","9b4ae5c3ef605e3efbe896d9146db8b0"],["/archives/2023/page/6/index.html","41b58fbc42bbdd45757d817d80fb9f8a"],["/archives/2023/page/7/index.html","745b8af1f6600a28da723bd3258d8f1a"],["/archives/2023/page/8/index.html","2eb2576313baddec9016223bfd8168b0"],["/archives/2023/page/9/index.html","632a9478d22e4d837bffd058da8cbeed"],["/archives/2024/02/index.html","80faa1e44a7e384d87afbd1ef1f31410"],["/archives/2024/index.html","b8a6c184054399f94b20168ed4818869"],["/archives/index.html","fd3035a479200f956348bc7a2aa40d1a"],["/archives/page/10/index.html","68b3c3301ab7766b212bab712bab9ba8"],["/archives/page/11/index.html","f967edbd56a1a6ee336110f3a27a3091"],["/archives/page/2/index.html","0a116518d7abe1c7d97aa8cdb76a159f"],["/archives/page/3/index.html","1ad33096604e33e4fbc2065b2248d66a"],["/archives/page/4/index.html","e301f3e6ea9e46d24fbc1904401f64fe"],["/archives/page/5/index.html","0524ae952c147c329019a5969c45a353"],["/archives/page/6/index.html","03f3e448b623430ced03496e35ec6dde"],["/archives/page/7/index.html","41e813e7f65632b74b77b40375234b25"],["/archives/page/8/index.html","bebd4e33faba79e2ec234206c2b67cf7"],["/archives/page/9/index.html","60dc93265eb01f7f82b651908db7affe"],["/categories/ACG杂谈/index.html","a45cc7be5a52e585e76272c13d19965d"],["/categories/ACG杂谈/page/2/index.html","a6c0e1c6d502e7248a8f56d811437e7f"],["/categories/ACG杂谈/page/3/index.html","158c4f43e7fb378af8e651e9b5d4b939"],["/categories/index.html","cea541a9f2232149198716f817380439"],["/categories/学习笔记/index.html","5b5820a4dde6aeb891c57126842093b0"],["/categories/学习笔记/page/2/index.html","7da4dfb19d61f9776262e11ab500e049"],["/categories/学习笔记/page/3/index.html","30b770ad0b4c0d761a2c60186f12aa8e"],["/categories/工具/index.html","3879c7a50dd14730df08073c1bb8a86b"],["/categories/工具/page/2/index.html","78bbc4b3b72aff48fd745cc0885bd8a1"],["/categories/游戏人生/index.html","c84361ab608330b247963a392c83bf55"],["/categories/游戏人生/page/2/index.html","f4147aaa6611adad222c258972adfd4b"],["/categories/读书笔记/index.html","b8fb8db724f8de2788a55aaacc4fe344"],["/categories/读书笔记/page/2/index.html","fbb19024bcad9f692792026a2bb83370"],["/categories/闲言碎语/index.html","81da7b55780c01658a165d1c28aa7323"],["/census/index.html","29ec232ba9ed7e9d8d46a1df013fbf6e"],["/charts/index.html","a6537d26e2725b1d15aeeeb004ee7065"],["/comments/index.html","63e100ed9bba8727f8a133996246fd15"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","de7e20d679ecddb444483f48fb6ddfc0"],["/gallery/index.html","a732446f23d5e778e8baf47c4adbd9a8"],["/gallery/wallpaper/index.html","95f13d5f24f62795b71e81d0b94af870"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b17a8e4b57a3e1828482e6fbdf52d743"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","77cc67385f89a9377030ef34f9a36768"],["/page/2/index.html","14dcd0b30cd4b4e53f8ee6a071d5252c"],["/page/3/index.html","7001a096b0ff3375c32e6c6daef3af41"],["/page/4/index.html","e8442efd08721cbc8d947a0191de90dc"],["/page/5/index.html","e28b52a634bcadaa1285a5ab1bda3a92"],["/page/6/index.html","6d8d06f3e905d6beeb2e781b57ab05ae"],["/page/7/index.html","b31dcb034626e29235eda8d84b5fc6a1"],["/page/8/index.html","c5d0258237816212224e29bc46f9122c"],["/page/9/index.html","c5b7d1d762aea69a3f52881fa4904cde"],["/posts/106331b4.html","9e594195bde02fedd0353956af8951c7"],["/posts/1185a02e.html","20d8047aa027034ffac23c4d8c624aa7"],["/posts/12e06b11.html","8ba0bdfe322c34d67e9e26b5e9748ce6"],["/posts/13aafbc3.html","14ae62cc1c5d713da032a332501517a1"],["/posts/167c7c45.html","5c881ff1f740b4cabf0c734a0cc4c3d0"],["/posts/1743dad6.html","80db4dfbd3822e86a30c93670b0712df"],["/posts/175a8e1.html","0b9dfc35982a33711b2a5eca7c04f20b"],["/posts/1be398e4.html","4d2cbf3b30e16b1c01042a8aa84c561a"],["/posts/1c5a0321.html","75ed44e5cc4672a55430749889eb3675"],["/posts/1ec7973e.html","7de1f6ff85ca5b01992f70984ed9acf6"],["/posts/1fb82448.html","16b226c200b98ab8a7d9082f2fb45ae1"],["/posts/21f18fd2.html","822872626c020c6097896c4186f484e2"],["/posts/29c507fa.html","40ad88c88fb2d7b559d890977f71a46c"],["/posts/2f34eb00.html","c30d33816da52bfed51ce813f9746edf"],["/posts/2f57a694.html","e7d698ced3e7edc7bb366019ff216ce3"],["/posts/320cf12b.html","aa8f75b74162550f0afbbfca68a5dc22"],["/posts/374b54d5.html","8464ffcbd9d1a614505934f344ce23e2"],["/posts/3871b764.html","3b3e61024523c97abfb6212783209d95"],["/posts/3b308caa.html","14868b4d83f8f26794d8336bb4930bc3"],["/posts/3c3cdb74.html","ef1c5fd52a4085da7ecb90bf8b404ae1"],["/posts/41f65cde.html","ebd789cbaebdb03167f28afab6c80ea7"],["/posts/4208fd6c.html","0828878462d3002a5876b6a87886a51a"],["/posts/4392373e.html","9286d7f177dfb2152d66d7951d00eab8"],["/posts/440ed920.html","5ad3eaf0bc3b19f688ae326f4ca2f2f9"],["/posts/447a8d68.html","1aad3715089c0d55d99ee0c963c529bc"],["/posts/4d2b51ac.html","d42acba29ceb8a25701b2f26251dfdee"],["/posts/4db1a52a.html","2bf15f12b5532bc5c7d94ce04c12c99d"],["/posts/503ae89.html","3c3e96a5b7dc9382b314fe80fccf69f5"],["/posts/518e2799.html","676b31bae1de2b02e506bf6a63c0a6c4"],["/posts/535fd087.html","9f1ab8a1f99639c8e798d7cfda45d6c3"],["/posts/5923cba3.html","4c82b123c37527a12c70ffcc0e9d43d7"],["/posts/5c1bb6b8.html","a7630c654c4e4aa38f8cf172ea2326b7"],["/posts/5dc45f0c.html","70f7e90b29238f30d11e11aafc68ff28"],["/posts/5f2caa2c.html","20383ea8628c8ee083c1638dc0570ec0"],["/posts/616be7b6.html","fad5c91b1a6d809cab27f8454f5fcba9"],["/posts/62a1ec0c.html","3ea1e3e653a992f98a3254cd62f53f9c"],["/posts/69fb361e.html","8d5507744e43848efb9b1068c056a33e"],["/posts/6a8518ce.html","9ade6b6bfaf1a6d12b0d23fd5bcd18e7"],["/posts/70685119.html","82385fd0c20932e7a2022c06ccab0f92"],["/posts/743db4aa.html","ab4d20fbd5b13d17b07d37c3ca87946e"],["/posts/7b67faab.html","24288dec8bd8e5b7dfeaf24d6d04a2a9"],["/posts/7b76be01.html","03be790f96ed7c233481c871a4c18cb4"],["/posts/7bff939e.html","56c547311d5f8a6869e7b8ba4d9ff306"],["/posts/7cc4ca07.html","19fadd06d3c9a84c69e4d766c4f6fbdf"],["/posts/7d257210.html","144250b61e41e6c54e0a2e32ba8f6049"],["/posts/7e6a5c94.html","80b98954f80b8bc087b0a5646ecb0a6c"],["/posts/7ea0cbe4.html","5f354013e11fc9150fcf4a893b6291ba"],["/posts/7f382da2.html","addc77a14ba41b63787c372f0ae55356"],["/posts/7f8d32f4.html","642086d5848f66e4723a05272624efe6"],["/posts/8207aa48.html","28ac5b1f491d0cf13cb302ea1a6944be"],["/posts/836ea9bd.html","0dc47e339ee3dc72e2ff7b45d63df6f2"],["/posts/84cae757.html","f538759984b089896450888cd59dd98e"],["/posts/88200036.html","9ba7c239988c6bec39bb6aa966973f12"],["/posts/922fb64d.html","a892679abdf80b904ec4674cd984fdea"],["/posts/98332b29.html","d15a59abad48619ab100f3f1ba5aa27b"],["/posts/9a1a736f.html","5394769d8fa8bcc567746cea9b36e70d"],["/posts/9addd0bb.html","278ded0b2d71207d6666861f77a5e466"],["/posts/9b44950b.html","58bec5e611222cab1b528fc76b569082"],["/posts/9ca149ab.html","436190fd238b4d3afed5f72b905b584a"],["/posts/9e4446bf.html","4e8f829974594945c529c657b14eea79"],["/posts/a0271e58.html","c0890f43bcb2b29b8c66fd4058af31c5"],["/posts/a13c1dba.html","326b073714e0de77fd7b94fb2a059da8"],["/posts/a1f2a4d4.html","2fcd2d636ca125dde8b5e98b84e95d90"],["/posts/a5f300de.html","b7dc0b0f57bc40f831b0d70a413b6a4a"],["/posts/a98766fe.html","9f7723a974f22a36bc60a83c25534d4f"],["/posts/a9f63847.html","d2221811eb9d310ea747d7be8016a4a6"],["/posts/ad31055e.html","2eeb52ffd3ae72700afe83e6a1b6f0ef"],["/posts/adcd6e20.html","2fde428f5528603ac948411897ca415f"],["/posts/b0fa4c58.html","51d4a56d89c27c8dd6738d4da389fe33"],["/posts/b1168675.html","2f9c13bc3b91ac7b363f162ac7e18291"],["/posts/b291b1dc.html","266a6953aab2537f701ab8adfe25ce97"],["/posts/b2feeab7.html","f2befe72b8be3aad6f0b06878212256f"],["/posts/b6d66f1b.html","2f8d77524286d83b4077274beadb3e02"],["/posts/b7525d11.html","4b273a1a7bf346b6e45e78d3ae90be3d"],["/posts/bb154b63.html","c506f4fa479fbcaefd397d67585b096f"],["/posts/cc1b9611.html","4cffef0153b4e8fde883ac2ed656bf19"],["/posts/cc86a40d.html","6ea0e991603b95f388b1aa9d426a1fad"],["/posts/d36531a7.html","31d27be26b9560295207291dc122b7bc"],["/posts/d442e51a.html","38e33a6b1cc86c7ba455b3601f3d4bb5"],["/posts/d7fdf01f.html","f5d4117be89b02d3576665424e782fa2"],["/posts/d839b0e.html","0029c158efdd20fe422553274ab660b0"],["/posts/dcdf88c8.html","2181c23173578b98a8c6571a9542a354"],["/posts/dd378ae0.html","606fc90b5647d9f62406018711fa0375"],["/posts/df2849ec.html","9db21e49b9c37ae43939b140ff9c1358"],["/posts/e15be301.html","2b560da40f5ef548bb9324da8506f165"],["/posts/e2e4b4ce.html","3c59159614db1f026c3ecc2acf373b7b"],["/posts/e35ef5bd.html","98ee8306019e30928baeca9b85c9fd8b"],["/posts/e462ba83.html","94978f374e2ced6b97b551986f81647a"],["/posts/e53204e6.html","1ab5f0cea40cf4463a4db14636b2e75d"],["/posts/e5cd9bbd.html","93aec5bf002aba09df8db2859a886a06"],["/posts/e7a99a5e.html","e494a3a4ee4b7aeee35f8189fc711965"],["/posts/e9318100.html","65f9cd5dcfdfd6fac174487d5fca6f16"],["/posts/ed52e6a0.html","20cc17c4da6be1d157e55debc839c7e7"],["/posts/ee0ac59a.html","2d8d3e2721ac704b409c929c114ad107"],["/posts/f09c1ee5.html","663c01520b4917d765e492aef3f09fbc"],["/posts/f1252f66.html","e795b1e2804e83e9c11ebfedbeded1f9"],["/posts/f4af26a9.html","b64fa6faf768ad62f1462a090e768796"],["/posts/fa3cd62d.html","220a69ef1380a982f892ef3d6902e648"],["/posts/fb3794ef.html","958e77b40995638dfa6480ce13efddc9"],["/posts/fda4520e.html","e71f085b866cb7ad29e0fcd3dc801958"],["/posts/ffdfd6d4.html","ef241a715d44fb9f99ca3f0964922720"],["/private/index.html","18f4e1c6719b44cf49913930e8ce5d39"],["/random/index.html","4e45c6b31d2aaa4fbadbc327907e2578"],["/sw-register.js","ac7dcd5ecaeea246541c24879ecea0ee"],["/tags/ACG/index.html","4f6f893cf7ede49869c04307c8784427"],["/tags/AIR/index.html","27094d526c442b10a9b8ceff73069a04"],["/tags/AliceSoft/index.html","8354360a5066f9140b9c2c9695c7bba1"],["/tags/Butterfly/index.html","99abf27a11abd8d5cc57b916ed823e24"],["/tags/C/index.html","5d27f0a20f8ff56e701752d7570f1e31"],["/tags/CLI/index.html","eea41c996fccf39d15b33a1393936e2f"],["/tags/CMU/index.html","0b65f890df561728303ae73513aa9eef"],["/tags/Crash-Course/index.html","ea5559511639c881e8eff9acb614e631"],["/tags/ETH-Zurich/index.html","1ede592c9d7c83b979b12810b84268a4"],["/tags/Eushully/index.html","0541da692cd138ba189c733b55814051"],["/tags/Everlasting-Summer/index.html","4fd58cd860876dbe434d907bbdba1a20"],["/tags/GDB/index.html","590301a377fbc82b9cdd7fcb25bdd68c"],["/tags/GRIS/index.html","87eaa6e9df9dd5d14fefaf3aed10cbe1"],["/tags/GUI/index.html","5f1d6c3829ef09268d2d0449bafea5f3"],["/tags/Git/index.html","b46faa1915c8b5166c256dc48370c2bc"],["/tags/HTML/index.html","281f5457cf20541f061db124ad4de707"],["/tags/Haskell/index.html","e430446cf3b1b20027bdfaf9f6500e39"],["/tags/Java/index.html","13b7c2e09b65494832134f3b05955e0c"],["/tags/JavaScript/index.html","64d6e4c3c9419fe48d62e5aaed9b3133"],["/tags/LaTeX/index.html","f05117e02294f369adab4ed8d5365d7e"],["/tags/Linux/index.html","30db856a0b9e5ca544212ac6772e3b59"],["/tags/MIT/index.html","fcf5e49a50c443adbf14e741e53d31e2"],["/tags/Markdown/index.html","2845a8e997f018fa10dec6bbf451207e"],["/tags/Mermaid/index.html","ef9aef6815c67823ac17542643cc0203"],["/tags/NTR/index.html","34dc3295990636c3b700084db5d5b13d"],["/tags/Node-js/index.html","e29f5d1d18e844e1da24f44c9b0f063b"],["/tags/Pixar/index.html","53d34e6ce1adbbc57028049e7c67bc51"],["/tags/Princeton/index.html","e2f1610a34e8d45233bd990709ebccfa"],["/tags/Python/index.html","b9ca55ebb60c54763f21602be2af694e"],["/tags/Qt/index.html","4d97b5a31adb43e447cd4b7a52069ab3"],["/tags/R18/index.html","56211a4990c8b42bae3aa54eca4ce4c8"],["/tags/RISC-V/index.html","c4372fe95b3fe014b1acab0a6569ff38"],["/tags/Scheme/index.html","40bbfaea4f5e2bdf1597d9b19a95fe12"],["/tags/Shell/index.html","e52c80c2f5b54c2e0c5c915f54ee1681"],["/tags/Stanford/index.html","50667215aba6a1f6cb880ffeb2c92462"],["/tags/UC-Berkeley/index.html","09f9dbbc3902210330f7ea6397382b24"],["/tags/University-of-Helsinki/index.html","c549b07c6f0268262bd74cd318458d61"],["/tags/debug/index.html","8eccca35714002a1eaf17945458fbac7"],["/tags/index.html","3c77c89826ca5f540185fda248305dc1"],["/tags/key/index.html","9b3130ce46054b2195b5cb6ef210d618"],["/tags/web/index.html","997652058a32ca743f547c4be884b065"],["/tags/三国演义/index.html","9761cc9a6b4651ca5cf5c1a5c4a844a3"],["/tags/丧尸/index.html","d10fa2bd0327a22b76281e3bec2ae3d1"],["/tags/京都动画/index.html","f61f87c8e28e762de60464e58387c153"],["/tags/京阿尼/index.html","4d7f9fc870c8668a3b81f5f95fc5465d"],["/tags/体系结构/index.html","5abffccdcc63c6dff0327b50041f2f72"],["/tags/信号与系统/index.html","9de8fdc90fcce9ce6ca13fe0c8dc631d"],["/tags/信息论/index.html","35eaeb9070cf1d5f119e5ccfc28a71a5"],["/tags/傲慢与偏见/index.html","3c6efef0c42546b4edc24e285ed2c1dc"],["/tags/元稹/index.html","cacd9f9b1dff06dd65999c4f219504ae"],["/tags/公路片/index.html","23519be8426c1b70e00e10dffe094060"],["/tags/兰斯/index.html","aa399f9909e8eba94000140b29868add"],["/tags/关于我转生变成史莱姆这档事/index.html","bb8d88e76e29d48be2aed3ca4fdf6d58"],["/tags/冒险/index.html","6bd42ddeecae1d1d7b9e518773a8341c"],["/tags/函数式编程/index.html","3e87a10ea60e22a7cc4a07ae7c1a660f"],["/tags/刺客信条/index.html","72434169ec7b23876599252d1ddf11d6"],["/tags/卖肉/index.html","964ffde86053c9b90ceca6c1a76ce8dc"],["/tags/博客/index.html","20e6922db38bec515aaa760d21ed8c64"],["/tags/去月球/index.html","2622464c27d4e9e6872361a81803cae3"],["/tags/可汗学院/index.html","f181517b6cd11973f64c2c77010173bb"],["/tags/史诗/index.html","f8b2c39d7eec1fac3fd347314fd95767"],["/tags/吉卜力工作室/index.html","e0ad38cf8faf1e862e9768c99a658adc"],["/tags/名侦探柯南/index.html","6eb6edae0f71565a512ee2b55753b61b"],["/tags/后宫/index.html","a16a5bccf7ca0e4f4da0359551c592d0"],["/tags/咒术回战/index.html","6f4be1dcbcfae9e15a05ad7c2d86e0d2"],["/tags/哆啦A梦/index.html","62011a91faadd0421cd88690770ec605"],["/tags/哈利波特/index.html","e6ba43e6ac8714eaf539e2b0587236d0"],["/tags/喜剧/index.html","1f1ce848f29f9a2b049e354cb80adbe4"],["/tags/喜羊羊与灰太狼/index.html","1b6e9b70b3e859e6d90d46be30cab917"],["/tags/四大名著/index.html","dd50377579141fb43a08fd2b53f9b0b0"],["/tags/图表/index.html","4662c04f5d8b40a0c8ae30b9adde6cd4"],["/tags/复变函数/index.html","5fedfa93f60b21df93aa766c9c2a88d9"],["/tags/孔乙己/index.html","30a7f7cb77d0480bd7dd4b94e2b95dee"],["/tags/字符串/index.html","a1a1a136ba4ef372d687d9733823298b"],["/tags/学园默示录/index.html","8df51e3b66dd1bdf3cca50fac7b2029f"],["/tags/寻找天堂/index.html","3ba615df6496d8e02b0f314f728a88ab"],["/tags/希伯来大学/index.html","9a08d8980e78eadb6f4620a886b98989"],["/tags/异世界/index.html","c878264aceb18652e051ce8016c9bedf"],["/tags/微分方程/index.html","630e20483ca4b2041df3f044c277df3f"],["/tags/微积分/index.html","b30cbd54e722b1f7f1133c907ac1811c"],["/tags/恋爱/index.html","90a4bea919564a54883f626a5f472947"],["/tags/情感/index.html","35a1c05fa068ce59c3578e60d296e5b9"],["/tags/成为简奥斯汀/index.html","bc46621d03905d800ff38cf7f7b41664"],["/tags/指环王/index.html","315c1087f0660c5e05f5b5dc59d1f0e4"],["/tags/搞笑/index.html","408b21717a76b009edb671ad47d53c49"],["/tags/教育/index.html","88688d70344b0fa8dbfced716bf6957f"],["/tags/数据科学/index.html","fde789e31facf4ed735f3b7323b379d0"],["/tags/数据结构/index.html","f654f9ac6e541b7cf7dd97cf0c66a776"],["/tags/数据结构与算法/index.html","7560c97c7dd1e5dbd4b428c0126e4cea"],["/tags/文字排版/index.html","3d348bc6ebc72751ada0c4c473cc8c20"],["/tags/文明VI/index.html","28f5fac644de7ecc6661809ebbca63d1"],["/tags/旅行/index.html","91cb4a4a89b775dc48185f56316ec099"],["/tags/无彩限的怪灵世界/index.html","b5df29e22756697d5a10bb3b58661578"],["/tags/时间刺客/index.html","ec4f74c798372b2ab8eb8284fab76085"],["/tags/有生之年/index.html","b8a2f64dd22b25c4fc9c4daf1cc47410"],["/tags/李商隐/index.html","32765d2a53720be86539b5645cb0b038"],["/tags/李白/index.html","bec3a129829b25216adfd97ec6dab94c"],["/tags/李贺/index.html","e199dfb0932da725e210bb24b418f321"],["/tags/杜甫/index.html","fc4f072b05a9dba7e8714f554609de13"],["/tags/校园/index.html","0a4d272f1af5a2887e5cf83fc94a615b"],["/tags/概率论/index.html","4b4c189cfe696e651ee1eee92ccd4564"],["/tags/正则表达式/index.html","5dea2ab64f62eb4502c85c4db7cf552b"],["/tags/死亡/index.html","53ce164bc4097cf1ac61db2b3d83df39"],["/tags/水仙/index.html","de3fbcb89aeb41c8127e64f473add017"],["/tags/治愈/index.html","70bd0d1e7c439a2629df62a87e205f21"],["/tags/烂尾/index.html","be5c31d434eaa3c86daf3be5e0aa470d"],["/tags/热血/index.html","4d8413472eb3027bc2ecdca51866cd51"],["/tags/爱国/index.html","01bfeb3a287736d487b57982061d1261"],["/tags/版本管理/index.html","2477c50bce903ff16f0f93dd71ab7eb1"],["/tags/玉子市场/index.html","ee601a95f4a03c4bcf5f29a07e220c56"],["/tags/玉子爱情故事/index.html","1e4cc047138a12dfaa5ae9ea743ddaa7"],["/tags/王维/index.html","4ab73cba77ee046d00f01630c5886bc5"],["/tags/现实/index.html","eaba97dee59ac7a0ae1665b3a14ff467"],["/tags/甘城光辉游乐园/index.html","498f6a227b383dd39837d3ed36834fa2"],["/tags/白居易/index.html","03f74b8f31440a05af60dcebc1021a50"],["/tags/白毛/index.html","ec238ed8650a0e257822e8d2c18859d2"],["/tags/短篇小说/index.html","c84b551a11da9d1f0dda9becc3a32b69"],["/tags/神话/index.html","0992fe52f1dd28bd7d49c6382349fcdb"],["/tags/离散数学/index.html","d22de1a3e96627281227dcac915a4e3b"],["/tags/种田流/index.html","23a8d18290aef0fc5edc897daa59192e"],["/tags/空洞骑士/index.html","787ffb168938de82505c3494e1c19472"],["/tags/童年/index.html","58bf68dfef4be27d3592d326c3fb924c"],["/tags/童话/index.html","d95d088bda6aaa4694aec529b0cb5b94"],["/tags/第九艺术/index.html","34be748c489506939d036ea2e4e26bdc"],["/tags/策略游戏/index.html","247c7bfa374956e9022632222bdea3c0"],["/tags/简奥斯汀/index.html","70103f21b54af2da579688961c667b07"],["/tags/紫罗兰永恒花园/index.html","4f668ac5ade1c0e3dfc27860d9cbf23b"],["/tags/纯爱/index.html","d69b37c349503331c62f219c0c00c2a0"],["/tags/纵使手残仍大爱/index.html","7b75f7d29346482819e1718d31345e56"],["/tags/线性代数/index.html","86a1a23b34943ed208aa28a4ebdc581f"],["/tags/编码/index.html","4221bc83130a210729cde5d70810569f"],["/tags/致郁/index.html","b40d7ace890d4c8402b86d4c5d4182e8"],["/tags/苏联/index.html","0e41a94a6316d78c8529e7eb15f14003"],["/tags/苏轼/index.html","222bc61b49761c690da3a1a5f9a0d88e"],["/tags/英雄/index.html","01d9febe2528d90013c9ba275ca6ed6f"],["/tags/计算机科学/index.html","a44228f92b586bd9049a043942201864"],["/tags/计算机系统/index.html","668040bbe283e43807fddc74b80bd59f"],["/tags/计算机网络/index.html","148abc42ef631daaf913abbb844c952c"],["/tags/词中之龙/index.html","0e9c65bb4fa3f685255aaa81adf204d1"],["/tags/诗仙/index.html","4e6253c5aa7e47aa0b4ed64f22e6d27f"],["/tags/诗佛/index.html","9b6ab50f00ac5cf64bb084703536c705"],["/tags/诗圣/index.html","c588ea407a6abcec50d94a0463546b2e"],["/tags/诗词/index.html","5ffa741579d67879deac9c9ce7460eb0"],["/tags/诗鬼/index.html","5953ef5b68310d900c0490be5752f1d6"],["/tags/读书/index.html","de1d5eb0f948502fbf5c40c01297bdbf"],["/tags/豪放/index.html","c874f86beb05da2287a442657030a86a"],["/tags/赫尔辛基大学/index.html","5d3be5b513a39e60d309b4b07d840080"],["/tags/跳跃/index.html","d12203e93888fc84fe190c6653c82661"],["/tags/辛弃疾/index.html","486f011f9903e9b50e127916f7e37209"],["/tags/运动/index.html","ae7a1a86a1522613d696b3e3d47940dc"],["/tags/钉宫/index.html","8dd93969c6d781f289d0daa7372698a7"],["/tags/银河战士恶魔城/index.html","534848ed2d83ac4a1fdd4481b19a7bba"],["/tags/陆游/index.html","03f97ac9f95d3f5883488cbd9ff91de2"],["/tags/零之使魔/index.html","fe2010f25ffa1f91fc86e2160be83d3e"],["/tags/霍比特人/index.html","36de72d3c471bbf572ecdd7b8a544841"],["/tags/飞屋环游记/index.html","3eb73d7af93b8cc4162d61e25419982d"],["/tags/魔戒/index.html","00a6e76025ea0ed72b305b24ed54f808"],["/tags/魔法少女小圆/index.html","82be11e868e5b422e510e0817d0665ce"],["/tags/鲁迅/index.html","8f102dedbefdc7ebf2370fbf77532a39"]];
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
