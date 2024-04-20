/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a8c55f05c2dff1de768102096d5210e1"],["/about/index.html","584ae9b9cbcf82c2b9b89e9e3778000e"],["/anime/index.html","92ee164fcf6a62ba0f1a2741fe3c9951"],["/archives/2022/11/index.html","a2b08d9ae0ecdf8a1e51c4807f8749cb"],["/archives/2022/12/index.html","03174499ddf053396d2eaceb6739ea47"],["/archives/2022/index.html","e8d7c0ef606edf2bfd68f8b89bd443fc"],["/archives/2022/page/2/index.html","c7e343231f8b12555162769bd92f045f"],["/archives/2023/01/index.html","cdc3afd830f80280bc1a80ad36efbcb4"],["/archives/2023/02/index.html","2e2372b27c7e4daf87985c1ea1c18585"],["/archives/2023/03/index.html","fc3efc38a8c258b048dacc1cd8e61cd8"],["/archives/2023/04/index.html","919028aeacf7800cc37345b125b57ed7"],["/archives/2023/04/page/2/index.html","41e4f7a3cf899f539926edc7d394fc87"],["/archives/2023/04/page/3/index.html","238e18be7043ef464a548b8cd882d3c0"],["/archives/2023/05/index.html","68992aa69366336e9a574503ae6c3397"],["/archives/2023/05/page/2/index.html","135ebc787cabdedee191a168bb19d524"],["/archives/2023/06/index.html","745570535fc55a586f579bdb2c3c81a6"],["/archives/2023/08/index.html","bff6b1977860cbf37316e204c218ccd5"],["/archives/2023/09/index.html","9c8d0392ddcf6bc141ef8b7d2c068edd"],["/archives/2023/09/page/2/index.html","337fd7da0b5dda5a2943b6ba5caebf28"],["/archives/2023/10/index.html","90ac102f89c11a3ef063963fa55377f1"],["/archives/2023/11/index.html","2cabdb1612727d7013fb0ba9d8612d28"],["/archives/2023/12/index.html","907a021fe13c93a6731307ae6512a378"],["/archives/2023/index.html","05962dab9e9feea060aa281c85cad530"],["/archives/2023/page/2/index.html","78eea65fc341b1e6849fa67a435a03d0"],["/archives/2023/page/3/index.html","365f6f8bee5494c988e55acb2e83cbc9"],["/archives/2023/page/4/index.html","b7c9035bd0a293981d1fee8d49f068c6"],["/archives/2023/page/5/index.html","7135992f3b47225f35de087f8f7af79d"],["/archives/2023/page/6/index.html","80dd4648ccbecef349eb032893621e5c"],["/archives/2023/page/7/index.html","33b2129aa97d87fb3fe4da50c0d5980f"],["/archives/2023/page/8/index.html","6240aa737c3822a72b94a70a5ef817f9"],["/archives/2023/page/9/index.html","2d23459079ec7bb5cfad261a0fe74625"],["/archives/2024/01/index.html","e2663dd68e426f2800302313bce11710"],["/archives/2024/02/index.html","f850a0eacd5c37e18c5d7a3b20493b9e"],["/archives/2024/03/index.html","dbe1a6fc4b9427cdf8412ebad3b12ca7"],["/archives/2024/04/index.html","2a459f674495a40910bcfeb7608e5ece"],["/archives/2024/index.html","742e8a34056acf2d253c014c84d90981"],["/archives/2024/page/2/index.html","db88e3bfa83027b741a2fa82bfc0d999"],["/archives/index.html","5a9103d031bebcab36b12958cbe32fd1"],["/archives/page/10/index.html","2cfc8f87eb3afa73e95359281035d482"],["/archives/page/11/index.html","da70e28da9d2f17ec541da7a2a36e17d"],["/archives/page/12/index.html","2bf39f5e103795026612049dc6d6c73b"],["/archives/page/2/index.html","9ca89b64730e9f299cbed91501accbcb"],["/archives/page/3/index.html","a95837180266423603beca0c86fb28bd"],["/archives/page/4/index.html","f4352fe98aaa47edbc89902e7c9855aa"],["/archives/page/5/index.html","7817b0deac7f5a5e0f65cee2b823d82b"],["/archives/page/6/index.html","0c75bc93afa51677bd5fa7ff9baf8e55"],["/archives/page/7/index.html","f9050fb5fb21488dab4cfcc2a8a4e036"],["/archives/page/8/index.html","69b7258898338891c4e9b0be325bb655"],["/archives/page/9/index.html","7ce8d7b9c76168dcf4dbbff22b2c52eb"],["/categories/ACG杂谈/index.html","445e6bd5737c043fca9b79be88d0c440"],["/categories/ACG杂谈/page/2/index.html","e5c9fff8b576f819455cfe38baed424e"],["/categories/ACG杂谈/page/3/index.html","36b1a14bae92224b1132c940e16ae092"],["/categories/index.html","23e4a299bc1b2254181607b0d56e6d93"],["/categories/学习笔记/index.html","7aa6a6dbdb32e7047a67a4edf9af2997"],["/categories/学习笔记/page/2/index.html","23cfb1e60ae0350e80caa5b3d58be85c"],["/categories/学习笔记/page/3/index.html","46d5f187dd832e2f2ce7863d31fb55ed"],["/categories/工具/index.html","1575334c631d0e96baa7d94038b506f1"],["/categories/工具/page/2/index.html","0062a4eab08e87ec03d03ed27584c9af"],["/categories/工具/page/3/index.html","f38acdf2e443debcceab9bd81702ee04"],["/categories/游戏人生/index.html","23cb54a65a64366ceec4c67abd6c858f"],["/categories/游戏人生/page/2/index.html","fc894f79e55056460317abc643e51b07"],["/categories/读书笔记/index.html","22048ea790a41dbf464d66e333b0360c"],["/categories/读书笔记/page/2/index.html","4e412d47fad761e757ff35f4f674d1f4"],["/categories/闲言碎语/index.html","ff57c9b6a76b3aabf7f2354a8f9eae26"],["/charts/index.html","86c9611314255c3d1ad58bdf98179d27"],["/comments/index.html","3bae40b3736cd969b6c9af0b7f4070e4"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","83cdf0f5a4c0ed6c00d4bb8f2d69c302"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","896961ee52f47fb8c51c181220bc0dfc"],["/gallery/index.html","ed8310c51c2de3e19e957fca7e7bd434"],["/gallery/wallpaper/index.html","95a5863c8673a88bc4d1f6c4c32fff2f"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f786017ed13673df635832b84e6155ac"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/10/index.html","5c8fba2f686383a928ab589ff6fd9d72"],["/page/2/index.html","25e868bf6dfb9352a36a273663a9d0f2"],["/page/3/index.html","10e95c32d3ccb0e50855f1270b19adc3"],["/page/4/index.html","f4b5b529f5aee040546e7f85f65d2858"],["/page/5/index.html","b00279cda1c7a591354f84f92233ae47"],["/page/6/index.html","5139040ffb088c92a8e3ad2d40f8221b"],["/page/7/index.html","fb60dadbda4e0427965c9d3865c1176d"],["/page/8/index.html","ab3085bc82cb09c1b7075fafde1694cb"],["/page/9/index.html","bde0e5e3f9349fb6c5e4e3076b976666"],["/posts/106331b4.html","9df31664ccd8691840eba605e8c7329f"],["/posts/1185a02e.html","fd26c7e9dbb3e2a96d5af11feea58cd5"],["/posts/12e06b11.html","7bab93ca499756336aee052dadc351cf"],["/posts/13aafbc3.html","b4991222ca8a460f053cd74bb399a18c"],["/posts/167c7c45.html","6665dcdb17c74d4346dc3a7eafab3452"],["/posts/1743dad6.html","6a9e36e4d1e41ab2b3521c2d7e301a64"],["/posts/17492bb9.html","e6eab5e2d7e521365285e24884e3ca98"],["/posts/175a8e1.html","05cd8cd7e7329cc1b63705c744268d40"],["/posts/1be398e4.html","2f99462c7eb6269b6bdcf9c22b0308fb"],["/posts/1c5a0321.html","14c73b32a5a3b09d3bfb213e9d2cdaed"],["/posts/1ec7973e.html","4f93d649d00d2ebb1c52e140084e08a7"],["/posts/1fb82448.html","818780b9b7999b26b861e46044c8cf92"],["/posts/2069534c.html","2705249d4f632895cef13b9f70941c8b"],["/posts/21f18fd2.html","861d00e60c98b47f122b57c1c68f7bf4"],["/posts/29c507fa.html","312dd9e7141e9f89822a005ae0b88900"],["/posts/2f34eb00.html","093fc916c9753db42c50e9b74adecb16"],["/posts/2f57a694.html","83c814faa35ced5ba656f0aa95807896"],["/posts/30479bcf.html","4663b1d59db0daed547dcb551eb13e06"],["/posts/320cf12b.html","ce79c62424154567d7f8c88b5c4a3062"],["/posts/353e70c9.html","f1de3e3f5fd745d59326b5309d2234d4"],["/posts/374b54d5.html","02a38ce5933059799967e036e5ee1d20"],["/posts/3871b764.html","837930c19905ea564356259df59639d5"],["/posts/3b308caa.html","e62d5374a6b6989d025fdc57b1e5126f"],["/posts/3c3cdb74.html","624c90d2b073bd6ea30fe7bcf2448bbd"],["/posts/41f65cde.html","6372b78ed1bfa00ea909cdc21e8e601e"],["/posts/4208fd6c.html","a60a8b55be4e0ac3aa50be9411d4c689"],["/posts/4392373e.html","6b0ae93f236d7c13ae57824df1f1f66c"],["/posts/440ed920.html","beada91adabb2c3b9961e845d939b6e2"],["/posts/447a8d68.html","5b503e890c62b6ac577d5b167bc382f3"],["/posts/4d2b51ac.html","371a7502e4d7a32cc9da2099f011d40f"],["/posts/4db1a52a.html","858cae5b3bbe48d0b4df64fd18b2d583"],["/posts/503ae89.html","a253bd88cbacf371ff3375892c3c8272"],["/posts/518e2799.html","b793b3ca5b3b2ba199018a9f8355c31e"],["/posts/535fd087.html","967884b988b9f18f46b7a05c83e4c63a"],["/posts/5923cba3.html","8f72a54a4fed7ee97ed7361958710237"],["/posts/5c1bb6b8.html","6e27aee0a10a5313fd907091dc118b86"],["/posts/5dc45f0c.html","50264e6ed62a9348b948fb2d1c64421b"],["/posts/5f2caa2c.html","68acbe1430c3c5c25e61707b57a98621"],["/posts/60d11614.html","4672c54ff5c0f355738ea74f8a7fe0f0"],["/posts/616be7b6.html","ae7171207b8b0a3759c1238df4548402"],["/posts/62a1ec0c.html","79622e2aa6e4aae20a0a141d2cb7046e"],["/posts/6441a1ac.html","2b9c94409554ced0348bf35bea79a7d1"],["/posts/69fb361e.html","5cfa320eb683c7f39ad6d638b8fdb140"],["/posts/6a8518ce.html","819930066ad7c37786b363915f19acc0"],["/posts/70685119.html","240817ca2965ef63863babd80142f26c"],["/posts/743db4aa.html","9e723ab90c16b761aaebc77709ba6d20"],["/posts/74c3ade.html","b2a6f4f0c79e7a140a58ce334a746af3"],["/posts/7b67faab.html","6fa2b49c71e992d0494e2d847cc1ee55"],["/posts/7b76be01.html","9ea836adf55c25127a93a24ac7d88eaf"],["/posts/7bff939e.html","db97c6dd85478667fc958e2e5c2746b8"],["/posts/7cc4ca07.html","04680535f037092117f7bb47adb6f8ba"],["/posts/7d257210.html","b099150977ed3d481ba02f0f9629f8d5"],["/posts/7e6a5c94.html","680ef33f9085b7f7e404f968b4672487"],["/posts/7ea0cbe4.html","364286e2ee5be1d547d163551af233d7"],["/posts/7f382da2.html","3a4a39efa42f399f4e116fb689091651"],["/posts/7f8d32f4.html","a49c9746671d039c06d5346e0247a033"],["/posts/7f92999e.html","9e0c7b36c7a7643253379c71698b5a63"],["/posts/8207aa48.html","ea98901c6502d9036cde7ff0a70e0ccc"],["/posts/828c2ccd.html","13fd4aecf8dfc2dab3775e1201063d09"],["/posts/836ea9bd.html","aef991961c43c2fbf9d3562eb8ad8ab9"],["/posts/84cae757.html","7aec1025273f2bd5537185f6ad3a5e8c"],["/posts/8724ba9a.html","05fdefd937d3020ae4c9d18149cfcd2d"],["/posts/88200036.html","1d922107ae261a0158d87c4032807108"],["/posts/922fb64d.html","b840a8cd1ec972f911766352ca9bc534"],["/posts/98332b29.html","1eb8be87db1ed4e5194214cff6cbe405"],["/posts/9a1a736f.html","5c58b0e91adf2f933f595a75c6d56161"],["/posts/9addd0bb.html","5105f1f48c57443a73d13ca9ffac512a"],["/posts/9b44950b.html","5110022c53eea275809784ce993036b6"],["/posts/9ca149ab.html","f64dd177fde3de9ebce13247a4defc66"],["/posts/9e4446bf.html","6681c36daa7fd992997c0cd5bb2309bc"],["/posts/a0271e58.html","377c64702ce482bef29b6bab29a9bc32"],["/posts/a13c1dba.html","d9264837e00ca467323c160e17945f9c"],["/posts/a1f2a4d4.html","ffcdfc401642f6e4dd3ece6aee3be0ef"],["/posts/a541262a.html","19277edf1f281fd58e39df7eda170b43"],["/posts/a5f300de.html","0540e0cc4c397d718757953525df1fd7"],["/posts/a98766fe.html","7652f6765310dbfd7138b61361d439a9"],["/posts/a9f63847.html","ec1034b297f0b9e82b5e8fff6a1a1eac"],["/posts/ad31055e.html","eb0fa2bef4a3d237982e4fed83e56318"],["/posts/adcd6e20.html","d09c6d0d4ecb4c6d4ed99ae7443c60ec"],["/posts/b0fa4c58.html","8f736d3d47a29859b91b5b1add337662"],["/posts/b1168675.html","fb03da4c423474963753daf70eb3173e"],["/posts/b291b1dc.html","5d623e3bddade240d61aecbe6abb767a"],["/posts/b2feeab7.html","ce7627d28703e7f5e79697a3b3796316"],["/posts/b6d66f1b.html","9d8c23fe93120443be4f21a28e1468ef"],["/posts/b7525d11.html","8217495e66a2b14b5b5c892d8fcfa5f8"],["/posts/bb154b63.html","ffc712474cc0d6dcd9a6aa0caa113ea9"],["/posts/cc1b9611.html","a89bb5c0d5e483c41aa9ce31da0eebf4"],["/posts/cc86a40d.html","b1322d0a87dfacd40bfc97a475c72b5e"],["/posts/d36531a7.html","2e37148a197abd0ebd2de9eeb4dd74ea"],["/posts/d442e51a.html","02731428d868ad05103df2d49e0b71d4"],["/posts/d7fdf01f.html","683591fc7479755d4640f4acb0c19063"],["/posts/d839b0e.html","2814559fc109dae81b984f8bb3b11814"],["/posts/dc5fbc03.html","987ce703d24a5f4abc4b63249273741c"],["/posts/dcdf88c8.html","182e732d2dd02765266ee0f5d9bb16ce"],["/posts/dd378ae0.html","6b58f7fb37f109ee9e845726b3bae7c6"],["/posts/df2849ec.html","ae73787f1c282197462ea77ccb953bd0"],["/posts/e15be301.html","e57c5964a19479ea545321344bed978e"],["/posts/e2e4b4ce.html","a08490dbf37fb17e02bfb3a6b437e2af"],["/posts/e35ef5bd.html","8ad1f54ee7618be2057f990f3bd4fb49"],["/posts/e462ba83.html","ba8de077506f5cf6b5d48676035418f3"],["/posts/e53204e6.html","ef90490e237382466a93541438755279"],["/posts/e5cd9bbd.html","0895b7d491648980b8cb80fef7eba15e"],["/posts/e5d89884.html","27a29090adf904d5730ca19b469bfec9"],["/posts/e7a99a5e.html","233696a6aa8c48d817b028527bd55acd"],["/posts/e9318100.html","a8154cb5d41ab9761e466167459c3ece"],["/posts/ed52e6a0.html","ac9854b74dda0dd484a7134ea8c80357"],["/posts/ee0ac59a.html","896f4fd045ec377d7e18bca07206903d"],["/posts/f09c1ee5.html","fd26d50c6129716226fa12431a39cdc3"],["/posts/f1252f66.html","60ed5b0eeb04101de4d41e81a44979d0"],["/posts/f4af26a9.html","1689248ba7a9614f477f3e7775c58a26"],["/posts/f8060ffb.html","91a2da0cd3a8a676cb743667c57b2901"],["/posts/fa3cd62d.html","3d9925c5e92e3bdf3a07d49e5033e1c6"],["/posts/fb3794ef.html","711c400eca0c3585bcadd31d7c719cd4"],["/posts/fda4520e.html","f91355222861c86e3f2763cfcdd00a2b"],["/posts/ffdfd6d4.html","97a257a7fb22f2ba66036ab8d370397d"],["/random/index.html","26e027819e4cf2b4da1f3f1e4b066d2d"],["/sw-register.js","55f038f771f3d612b6d29004dec61490"],["/tags/ACG/index.html","8686d155fd5b803ac931709693dda9e3"],["/tags/AIR/index.html","3de4251902b06953f2de3800da96e1ac"],["/tags/AliceSoft/index.html","025f92f10d0c95526b9e635bd7a2ba4a"],["/tags/Butterfly/index.html","1bba673d22a99ba1ce6b09991b732d62"],["/tags/C/index.html","891f76260bde066bdc58a5d450ef461e"],["/tags/CLI/index.html","72817d657e7c09e73ca3e38640da09db"],["/tags/CMU/index.html","c30a58a6986a3c4484a99899de176148"],["/tags/Crash-Course/index.html","84d9cb4627ac97b8e43b1f8380874ad2"],["/tags/ETH-Zurich/index.html","a42b2002a98f67713e21bbfd3772fc71"],["/tags/Eushully/index.html","68c1a439df9b13fd0b0b5bdab36495d2"],["/tags/Everlasting-Summer/index.html","7778ed01a10774eedc37a469dbc3a1d1"],["/tags/GDB/index.html","b3779ddcc7b8183e04f7da9ad6d61558"],["/tags/GRIS/index.html","ee6e93494b7585a840f9ff3c497f2da8"],["/tags/GUI/index.html","c052cb47e465d416ddf11469f7f9ded1"],["/tags/Git/index.html","8daa82af4d4c74a4035d9389e8c6a3f6"],["/tags/HTML/index.html","5cd5baa743106b5b17f2c103909c4800"],["/tags/Haskell/index.html","b7c8c69bf851daac084b6e98104f009a"],["/tags/IDE/index.html","e02033b8280b664f76ac41de7ef393e0"],["/tags/Java/index.html","d8d5b5c3fc375a23f28d736780f43340"],["/tags/JavaScript/index.html","10132984399f394763efd7bc068ce8db"],["/tags/JetBrains/index.html","6e6aa8ce58ed52b939490eb46775acc9"],["/tags/LaTeX/index.html","99a382a1a7039c0ced60053b6d96d5ae"],["/tags/Linux/index.html","3e66174207fab3b7cc751522abdbae0f"],["/tags/MIT/index.html","2a8ab386431066527f8c813c0bc84122"],["/tags/Makefile/index.html","48ac29e64fdbae3e33244e40a13f7bb1"],["/tags/Markdown/index.html","51952a85fe2a32a4afd5ace1cdacdaf4"],["/tags/Mermaid/index.html","e7187accf1bc1f4dc12e4a92703bab64"],["/tags/NTR/index.html","d8c02049513e66368c111ae246705266"],["/tags/Node-js/index.html","68e665bef2663686ae68a8dafd3ecb88"],["/tags/Pixar/index.html","140e254b28feb50f3a4f8f17ab133b70"],["/tags/Princeton/index.html","e4a3d4ed3eb7294a3909ef24df41b0de"],["/tags/Python/index.html","69df63f7504c2a9a9aa6f2cb7b74264e"],["/tags/Qt/index.html","6a12f75f4c1401e07c8f72910ca699a1"],["/tags/R18/index.html","d6db805ea4dd3a484ee66a56867bfdec"],["/tags/RISC-V/index.html","68528c8b6ce04d7d58020143fa221a02"],["/tags/Scheme/index.html","5e22045fc8ad98a4ea6805363d90dbdc"],["/tags/Shell/index.html","2173078c78feb820946b0b5ab98646c3"],["/tags/Spring-Boot/index.html","15dca9491647d5030765cbc00edb3e1f"],["/tags/Stanford/index.html","8d521f1c553d3f9f0f12cb499f738d6f"],["/tags/UC-Berkeley/index.html","2e4e8a9311a3b2f3026f480c0cebf841"],["/tags/University-of-Helsinki/index.html","1164991f63dfdb1783e23510f87eaf17"],["/tags/VS-Code/index.html","f4225d12748b25ce4a8deaadb0fc3f8a"],["/tags/debug/index.html","e4843d9ef9924b4308f90cc25c010ed3"],["/tags/index.html","7cc6b7fd631773c2a2b83d1170a8ce12"],["/tags/key/index.html","24f75355fe6502096de479b61e6022ed"],["/tags/web/index.html","c9b58101ecbedc378156580476adc9ab"],["/tags/三国演义/index.html","59aa45f2efda577b33646b2997c50e5c"],["/tags/丧尸/index.html","62921763793ac35f4246e226c9a7be84"],["/tags/京都动画/index.html","29067cb41508bcd3b90125b66eea797d"],["/tags/京阿尼/index.html","f9cf466cbd7138ebfac2e313574631cb"],["/tags/代码规范/index.html","4a707f859efb6b81936e7cb7bec18e95"],["/tags/体系结构/index.html","e0f7317727309e1fb3d35662446c4ecf"],["/tags/信号与系统/index.html","cbd6717721e2ec567c32893c051aa9bf"],["/tags/信息论/index.html","73a9b6b308f1fecc7f6260d5729b4abb"],["/tags/傲慢与偏见/index.html","5e3cfa0bfe4f0e2f77589982960e3ff7"],["/tags/元稹/index.html","0c47e0f6cb55638fbe07816d0d86e281"],["/tags/克苏鲁/index.html","47ac6dd53dbb353ce8c50fb75bbe576d"],["/tags/公路片/index.html","b33ae0d12a71ea1944b1746e2d64fe9e"],["/tags/兰斯/index.html","8830ec8a1c99d0b303180ccb061a26a6"],["/tags/关于我转生变成史莱姆这档事/index.html","b472063bdf85813527abd4f905e9feef"],["/tags/冒险/index.html","40200a925e6272bd1c94aa97246496a4"],["/tags/冰汽时代/index.html","884b1692459c931fdca6ed2292cd6419"],["/tags/函数式编程/index.html","dc8feaeaaaec4337240ec377c1bd0ef1"],["/tags/刺客信条/index.html","b0e95b9d52b6c493872bfc727630d457"],["/tags/卖肉/index.html","339796ee3a24fd573cbf4595b7fa6621"],["/tags/博客/index.html","7fd9d4a82e381c94272b43f5a1794767"],["/tags/去月球/index.html","cebbf84a62d83796b04afcc5a26ad44d"],["/tags/可汗学院/index.html","83f30709051cd53eb35947ad7b9283ab"],["/tags/史诗/index.html","b55ac8dde2febdc9867aa4b54cd32ddb"],["/tags/吉卜力工作室/index.html","4ce8f807643ca842a36f664367bce562"],["/tags/名侦探柯南/index.html","0e84965cf2e9b5141ccd76221a8933df"],["/tags/后宫/index.html","617b3dbc44033a21100981463834b693"],["/tags/咒术回战/index.html","1abb3b9ed265d1b8557be383ed3c7e62"],["/tags/哆啦A梦/index.html","d490d1d583e9c6d0a401b3aa5ae14910"],["/tags/哈利波特/index.html","3b778ad2587ea6a7b9495ef03a23d2f5"],["/tags/喜剧/index.html","27d6dac831dfce1722b7419b76a735c7"],["/tags/喜羊羊与灰太狼/index.html","022ec04f2117187cf7ca506b91465e05"],["/tags/四大名著/index.html","f06f58561bcfed213ef44777936e4691"],["/tags/图表/index.html","96b3d3bbbedb80b7d1b06b9aa1b7a94b"],["/tags/复变函数/index.html","378e303475c768988a1dba55c85a8309"],["/tags/孔乙己/index.html","7c5b046227c5e5693b037d1ee6222b2f"],["/tags/孔子/index.html","7b2c598300c0d6fcc0ebf01e5cfd7c0a"],["/tags/字符串/index.html","e1fa8f1c2129eb1e1cd8565eb6227d6f"],["/tags/学园默示录/index.html","414395a23a81497dce5a0600a89cf73a"],["/tags/寻找天堂/index.html","ea322e931f612c3be72f28939630e772"],["/tags/希伯来大学/index.html","6cc2e4be6332a72aa6a7ebcc20d132a3"],["/tags/异世界/index.html","62bc5138558d9929632e61468918c271"],["/tags/微分方程/index.html","bb3cb31e1eab82855364b2e7221b3037"],["/tags/微积分/index.html","a480e7047a42b8e23cbca90210277d45"],["/tags/恋爱/index.html","177fd9470c09cb3836f3996c11199643"],["/tags/情感/index.html","ffaffa2feaa0af33245fdb76648b8a7e"],["/tags/成为简奥斯汀/index.html","cffc9daf6d7df08898a839c177f6267c"],["/tags/指环王/index.html","d2c0c05821267df6a9394f244ad2b4ef"],["/tags/搞笑/index.html","5da1299f82bc42a8dee515591df04aaf"],["/tags/教育/index.html","c16c07cf6cb460890d9c11c46c463eab"],["/tags/数据库/index.html","01d05514368149efc58bd8b299815f65"],["/tags/数据科学/index.html","92eddd90951bf16a23eecff540d42740"],["/tags/数据结构/index.html","a5f603df16386b33ca3f7ab63bf042e5"],["/tags/数据结构与算法/index.html","baa7c00c3f68c521774ad17e98e59c81"],["/tags/文字排版/index.html","11e8c903475d7a381ee5baa8770ed917"],["/tags/文明VI/index.html","323b8ff8b4fea0427e2dc5a6aa6b208e"],["/tags/旅行/index.html","09606696331997943e3feeaa77f222db"],["/tags/无彩限的怪灵世界/index.html","cd89f5d4b3d52ad838139f7173f57da4"],["/tags/时间刺客/index.html","722aa984a2bc55ebbcdc600bdf11e39e"],["/tags/暗黑地牢/index.html","f7bd004d7aef8be9af9fcada0bdd7943"],["/tags/有生之年/index.html","42976cc300a7adc1c2b1fe1e1d1d6e17"],["/tags/末日求生/index.html","e979433a405efac2b1f8b7bfc8750b4e"],["/tags/李商隐/index.html","541f13bc4413b31fcfdffe3103b7dc51"],["/tags/李白/index.html","e99a141748a31af0b68783c05c0be816"],["/tags/李贺/index.html","85adc113102a599d45b2fcb192893b04"],["/tags/杜甫/index.html","00a4c7e62d7bccf637609bd37c86fb54"],["/tags/校园/index.html","45c7d35126da30d84e830ed6907f67bc"],["/tags/概率论/index.html","c4e08c036f296e2ac4145f7d9da27876"],["/tags/正则表达式/index.html","932192570e36d8a3834a4af4526912c1"],["/tags/死亡/index.html","98dd04d764b5bf680eadf8f5881dd2a0"],["/tags/水仙/index.html","e794997959ff043787c509a668ad25a4"],["/tags/治愈/index.html","9dcda776832480957d2c9c95aacc924d"],["/tags/烂尾/index.html","6a9de80e32101beade5d09824ca24f27"],["/tags/热血/index.html","2d2bf21c8d0df0fde2ed7dea3ada3287"],["/tags/爱国/index.html","acc24f7f1997ca924ebbaf211695f921"],["/tags/版本管理/index.html","0fecc41ec2ec073b7ce4cac9a199318f"],["/tags/玉子市场/index.html","e4a2a0f2db37a2e2061cdfa6fd905cb3"],["/tags/玉子爱情故事/index.html","dc8677b160181197bf1cd49f6a825ff7"],["/tags/王维/index.html","dc6d46143095c7befa39e26d941cab8d"],["/tags/现实/index.html","e38d6190e09b9fa52e32ce68d3a2378a"],["/tags/甘城光辉游乐园/index.html","b2a361984149ad4475845b6f678b7eb0"],["/tags/白居易/index.html","715048fc9efb9e169a475044056932d5"],["/tags/白毛/index.html","39f39021c104ccd258d54c65a25bc8f2"],["/tags/短篇小说/index.html","6a04df3ca424b96b0dd2a17681bc1341"],["/tags/神话/index.html","72957b2deacf6c38df99b073b1f170a7"],["/tags/离散数学/index.html","11a089fe4b628cb794c30ee9182555e9"],["/tags/种田流/index.html","fe30c4d2588d102ea3332d1632201a54"],["/tags/空洞骑士/index.html","b359758dc326f6db32d8b2e1ccf224db"],["/tags/童年/index.html","b637d50e5ce69b70b327cee05d766132"],["/tags/童话/index.html","10ea3fc6480d37e0a6f6e70c3c142e09"],["/tags/第九艺术/index.html","e7fff1088171a7d3b7947c46f034fdac"],["/tags/策略游戏/index.html","d68da630a07af90f405c98a655a2596c"],["/tags/简奥斯汀/index.html","8ce05d88eb725a4fdbba1419d080ea30"],["/tags/紫罗兰永恒花园/index.html","76f653ac145c0e5ebda269bbd043f145"],["/tags/纯爱/index.html","c0dd1b9135e9a0e2a44e51a860b7b2d8"],["/tags/纵使手残仍大爱/index.html","3af1ea892bd0ed465d6e57af4ed0e104"],["/tags/线性代数/index.html","1eb9a4be3a8bd90c776412ce6621e9a5"],["/tags/编码/index.html","53ce7fa0ce7250de286d750664ec050c"],["/tags/编译/index.html","f84b0fdee7d986e12ffed30da0c107f4"],["/tags/致郁/index.html","fc040f1cfe82f7927619c5b33ad5e770"],["/tags/苏联/index.html","b408b5078e2a0f189524f5a1426c4ee9"],["/tags/苏轼/index.html","d776e08bb905532a0d8782a0db738127"],["/tags/英雄/index.html","d2d3079abc20f6322f7869df2ff39da4"],["/tags/计算机科学/index.html","19bcbf1b7bf52fcb7a88f420e7006218"],["/tags/计算机系统/index.html","232ddbb8e88ac97573f62a2228e747cd"],["/tags/计算机网络/index.html","9375018340b03e5feef7289753a62346"],["/tags/论语/index.html","c4ac014ca8acfd5442472045a47b4a8a"],["/tags/词中之龙/index.html","a90495f0a7be3139c22519ca1df02ebf"],["/tags/诗仙/index.html","7f5fc971e353a635b6be0af4b0a4da8f"],["/tags/诗佛/index.html","0346c9cbaf6fa123b6f3aa9b60cece1f"],["/tags/诗圣/index.html","c55cf175844a16224bca5fa29465b15e"],["/tags/诗词/index.html","734cf4e0d5e0f9bbd791a1aa3a4acbde"],["/tags/诗鬼/index.html","ff1840c0028ffbf8921fc665a69c51e0"],["/tags/读书/index.html","5a46cc43b476a903726b6e41b417e77a"],["/tags/豪放/index.html","be01395dc77c4dad36b289c20f4759b3"],["/tags/赫尔辛基大学/index.html","bf7b3545d82d15cfd1fe73dc79305b00"],["/tags/跳跃/index.html","440f558cc9d5d23f55d072c2f4c28065"],["/tags/辛弃疾/index.html","036f6bfbab878b9f97f7bcb0ac19756a"],["/tags/运动/index.html","3224be016698dce5c2fa7d13ecd61f94"],["/tags/钉宫/index.html","91b633d77f172f9b8ad32634043956ed"],["/tags/银河战士恶魔城/index.html","1c23ce4be47b8dc32a4981b72173ca00"],["/tags/阿里巴巴/index.html","a6de9a6a313d4f488219f7663b321eba"],["/tags/陆游/index.html","3dfe1f26086395dbbd897b8c6c1ccda2"],["/tags/零之使魔/index.html","db65d64242c4218ea287b5332f3143f9"],["/tags/霍比特人/index.html","3d94e2939030be9819da694018d967a5"],["/tags/飞屋环游记/index.html","1bb8d92b0f48c3fb3dd2fd7ff0f0a4b3"],["/tags/魔戒/index.html","4b8f659f2b17609255620ab16dfbd33c"],["/tags/魔法少女小圆/index.html","ca8d61f1e145e1d15dc3e591a34618de"],["/tags/鲁迅/index.html","f10efecf4f7df1214718b1565f4503e5"]];
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
