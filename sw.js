/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2dfde936da250252f61351d05afd117f"],["/about/index.html","b7e2db19f7970c92ef17af77cc4f98cf"],["/anime/index.html","022658954adc87c0d80b08efb7331d28"],["/archives/2022/11/index.html","1acf76c929b1439b79541a6fb687c416"],["/archives/2022/12/index.html","746fa9590c5ac02f2e207fa003c8dbac"],["/archives/2022/index.html","fc1699f78b108b13f6c8d5f556580ac7"],["/archives/2022/page/2/index.html","0ba10bc1dfef74d513e89953dd868204"],["/archives/2023/01/index.html","35e3567ffd58630652b114749a877bdb"],["/archives/2023/02/index.html","3ba04d59892b7e7785fbda7c47aaf9ed"],["/archives/2023/03/index.html","5c41cee944f149f95c38b983ff3c8d45"],["/archives/2023/04/index.html","dcb73873c2410fda336c358b39b7ca17"],["/archives/2023/04/page/2/index.html","359697ed30ef12d29fe2e8ab89ad61d7"],["/archives/2023/04/page/3/index.html","431fa668992909bb965b868a2aa4732b"],["/archives/2023/05/index.html","32e1f94abd0e7e344a605e1a2ab9b07a"],["/archives/2023/05/page/2/index.html","0fd12a5f221fbd09f3b25639e97d3e2e"],["/archives/2023/06/index.html","817fe04d383b2f0bf431b20a7c65a27e"],["/archives/2023/08/index.html","14dacf1affbbdfb1d6c6a4b1eb3d740f"],["/archives/2023/09/index.html","992176d47f6a557e91671eb8efef7c02"],["/archives/2023/09/page/2/index.html","8115ef3a8763ca1242d7daac59a779af"],["/archives/2023/10/index.html","5f73c66db3bf711949e074f14b05fb4a"],["/archives/2023/11/index.html","e5c3ca1122e65a67ed0914e32d17c0bd"],["/archives/2023/12/index.html","67f747167434c16af713301f2a55a6c6"],["/archives/2023/index.html","e926c092d577ed56929a9d857f346cc8"],["/archives/2023/page/2/index.html","1888325a0f5be60ceec539da3fb18d13"],["/archives/2023/page/3/index.html","8c63ea15b9bea4101b05d3b2ad34ba08"],["/archives/2023/page/4/index.html","c0d0e9f452cbe023e76e485c9e03fb1f"],["/archives/2023/page/5/index.html","f8467df5c4b07790f6468b6cc540dc90"],["/archives/2023/page/6/index.html","38a35c85b594a195ed5bfb4c31dd5bb7"],["/archives/2023/page/7/index.html","99e97feadcdf1c4fdf4db3bc784ffdf0"],["/archives/2023/page/8/index.html","5c4bf0cfeb225b658e9c5fe3f49419ff"],["/archives/2023/page/9/index.html","0516e681dad8adaedcddcb576d9f58e3"],["/archives/2024/01/index.html","d72e0105062857e0e05ee0aec24e2a3e"],["/archives/2024/02/index.html","a866369b30658abaf6a7f3bcea061125"],["/archives/2024/03/index.html","96abc0e67bb5a3c1d8d09aeb7d3ab6fc"],["/archives/2024/index.html","73e5cbbd0f4ae1d3033f0957e7c59552"],["/archives/index.html","f6e83b2897034d997b8730525fe38167"],["/archives/page/10/index.html","6d694db2981a607809acf364a321c2c9"],["/archives/page/11/index.html","d9a5af36102b1f6d3d02e966677da8fc"],["/archives/page/2/index.html","b3d4d6e712e264d0f735c12c4e1b81e9"],["/archives/page/3/index.html","bd9ec874063af8231b180d27b91daebc"],["/archives/page/4/index.html","f7ef1b5e3495dea4fb2108e92c6f5df3"],["/archives/page/5/index.html","c7a648ab3871911e212e13fee9c239a6"],["/archives/page/6/index.html","6729d422a803f618da300280b5b3d4fe"],["/archives/page/7/index.html","55dcb30a5d386c6fa67e4a5289722f27"],["/archives/page/8/index.html","08cc420ac7566517c90a28260a30eaf4"],["/archives/page/9/index.html","3cfc1ed30c61e5ca599a5303163ae055"],["/categories/ACG杂谈/index.html","26eb8cbcbe5d38632e49832ebd8c8554"],["/categories/ACG杂谈/page/2/index.html","dc3e9b2a156b2aef9278fe9699dc2b6b"],["/categories/ACG杂谈/page/3/index.html","6db7debbb2c3c57a0b641cd2171e5913"],["/categories/index.html","58a2a500fcee0f7e0db07201f5fd73af"],["/categories/学习笔记/index.html","2a1ee2f5257b8ef0e1f298562e3a5da3"],["/categories/学习笔记/page/2/index.html","754275b00c1eff6e8d6f0209d2fce7e7"],["/categories/学习笔记/page/3/index.html","416697651231834ee229afcdbba22c26"],["/categories/工具/index.html","83b5de1f04fd71ed15685ee67700b051"],["/categories/工具/page/2/index.html","a968e7ca948b1dd131e43280ba380051"],["/categories/游戏人生/index.html","0e1cf87b0f8ee4d370f05148d26f55ec"],["/categories/游戏人生/page/2/index.html","723ff85bf7eae1b3827908222e0dcad4"],["/categories/读书笔记/index.html","87fc89f0d86a515274b5af690db4e31e"],["/categories/读书笔记/page/2/index.html","5829b71fa6678f630ab1211bdea04d84"],["/categories/闲言碎语/index.html","c5085dea7cc6bf87fdb387c755646d87"],["/census/index.html","fa5966cf6d456037996dc03717d352f9"],["/charts/index.html","6aa4ab167654e413f9914b4f6f1f9898"],["/comments/index.html","42462676376920807f934fa2cc81d8fb"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","bc4a9d2581c69d47613b74fe796c57e2"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/tag_plugins.css","05ce0243042c95c777e9c46881a9ced5"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/Poem.woff2","5a7055f7abf16aa447b1c9173d35fc05"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","fced603f9fc0bd05714470cbd3cd687c"],["/gallery/index.html","431de6a5c9e4fb718f55a532baf609b1"],["/gallery/wallpaper/index.html","b0b5a91e8761b13264e8ac7d93fe20ac"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","407cbddc81cad7df8e30cd0b796e6257"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","b65c0e5ab4304a75f2d69748a1a4ae55"],["/page/2/index.html","03ac2f2bad3eca71802d6eaaf98fafa9"],["/page/3/index.html","a80197b895967c7b0df2079a0bc9a785"],["/page/4/index.html","152bfed0b07f535696573adbd8cbdb95"],["/page/5/index.html","e0ef44c87cdae4c790d9b5c43911c91d"],["/page/6/index.html","572387231c54e0320e5a6b33b5a0aec4"],["/page/7/index.html","523d501461034c4c01dbe435e0cfc91b"],["/page/8/index.html","a5a7e3e79f9410a7808b9ec885481c63"],["/page/9/index.html","fd85bc64d24e69bd2e478b2b1768808f"],["/posts/106331b4.html","8e1323981477c9f4ecbca4637cdd539f"],["/posts/1185a02e.html","97123a156688ab4ece92b273bf89e4ed"],["/posts/12e06b11.html","428b23a11eaca7c2706cfbfdd579d5b1"],["/posts/13aafbc3.html","dd461a65a32c60ead23f9c4bdfb93437"],["/posts/167c7c45.html","39a75acf3b0a34883f4adf0b088c8086"],["/posts/1743dad6.html","958c2af7906fbad21dd544b51ad40078"],["/posts/175a8e1.html","e0bff55ecdeef739dd5fb4d96fb6003d"],["/posts/1be398e4.html","fa69a285cf969236c4b51e20f3aa2c88"],["/posts/1c5a0321.html","b40e60a13897385f7e266264751455fd"],["/posts/1ec7973e.html","02257ebbce78f1894d8ab6fdacba26fd"],["/posts/1fb82448.html","d6b95e3f6f7881289ce6aedcde891222"],["/posts/21f18fd2.html","4a9cd9d224ee82f455fccbe1d5e7a29c"],["/posts/29c507fa.html","65908036f94176f412b839839d61b7f2"],["/posts/2f34eb00.html","e5b2688ca980b54605b0b42b990fe172"],["/posts/2f57a694.html","ceb66e38455453c96869126fd86598ed"],["/posts/320cf12b.html","dd0626b4224562310f0a5077d0840f4a"],["/posts/353e70c9.html","88bc814a425f255cced15f39aeaa6285"],["/posts/374b54d5.html","7d4cd9716fa2581fde8311fdbbd9ffe7"],["/posts/3871b764.html","dd3b3bf431eafd7358a362ff78bc9cff"],["/posts/3b308caa.html","171588b46d644a0fff4d89aaefb04004"],["/posts/3c3cdb74.html","fc6346f7eff1ea734fbdd66e6a962926"],["/posts/41f65cde.html","3041a715da2f42fe5f91c72e9cb691e9"],["/posts/4208fd6c.html","0c00253f30bd0499fb897b3123502825"],["/posts/4392373e.html","727045c8965beded56d363060a91789c"],["/posts/440ed920.html","d903669c7da53b425e47fa71a56d1980"],["/posts/447a8d68.html","fc29897c74d9bb57b24598601a7b80ee"],["/posts/4d2b51ac.html","32c17d9b80eba9a4300e934eb8ea046b"],["/posts/4db1a52a.html","ca9c224579de7fdd15cf4cab39ed016a"],["/posts/503ae89.html","cddbbcc4806ad4993fdc146dcdf9f707"],["/posts/518e2799.html","9b04495018d4462e0639f36d3c246c17"],["/posts/535fd087.html","2b74dd2f4d9bdf9ba6a117131fa0efa7"],["/posts/5923cba3.html","d2ff5c3b28c344c7af0dd7c80d591102"],["/posts/5c1bb6b8.html","efd46f6c4a8d9472c87850ae33405f55"],["/posts/5dc45f0c.html","ef6fdf5647f8913d9e4d6682d8daf622"],["/posts/5f2caa2c.html","1e0b49280ede42507cc2cda9b726f670"],["/posts/616be7b6.html","946ae4de28441e6dd701c0841fb7de39"],["/posts/62a1ec0c.html","33c0a4651b87d139a86cdb48cc49718d"],["/posts/69fb361e.html","aedd02627d72f6b773a501d60cf4c036"],["/posts/6a8518ce.html","1e376630dbf5f2da0c7906d792fc4fc1"],["/posts/70685119.html","3ac6074d67e64582b2157f344b982b23"],["/posts/743db4aa.html","5f8954091ad73add0a448ffac0c7282d"],["/posts/7b67faab.html","7561f6cf5caf735b054576c0086feaca"],["/posts/7b76be01.html","51f89132b756a812d71e52f3a44a2375"],["/posts/7bff939e.html","dab97ba2afee981e284282284f850d6b"],["/posts/7cc4ca07.html","768c8ed3f5f2f5bef698ce527ca7af50"],["/posts/7d257210.html","a7db3634ec05872a4525a5fc97c73c76"],["/posts/7e6a5c94.html","ea30ce3192a29651abfff846628b756f"],["/posts/7ea0cbe4.html","fc0af9dfea8602ee6470aa659a761726"],["/posts/7f382da2.html","798ac5b9709c5f5ae72ad59758454978"],["/posts/7f8d32f4.html","ffed52f54653757a77aad4d5ac132dbe"],["/posts/7f92999e.html","e5a75d6188ed70b8ce388cd87b99c503"],["/posts/8207aa48.html","c9c413b93b80769220e177d5abb5ade9"],["/posts/828c2ccd.html","a9cfd57a5f6d3467b9e37e2d940037cc"],["/posts/836ea9bd.html","c3257b029e04f6d764d8894f35198911"],["/posts/84cae757.html","243785b8fd44125dc963a4e67c96d696"],["/posts/88200036.html","f5d6106ca1bdabc91c760128e3fe51ec"],["/posts/922fb64d.html","bdd1bcb0e518203a6b0c6adc9f4401a8"],["/posts/98332b29.html","7cacceb08a4197b02fcf8550c7605904"],["/posts/9a1a736f.html","85b8e53a91867936ce5aea420167e3db"],["/posts/9addd0bb.html","a2f5a7e9b20d8352a2277c9fe082f538"],["/posts/9b44950b.html","772df261c0437ee444e21ea9d1e353c7"],["/posts/9ca149ab.html","a1acd42ee74b0a24704dea1cc6b2e3be"],["/posts/9e4446bf.html","6ee85bf45ce4613d082158ebe0fa2510"],["/posts/a0271e58.html","41f1ab7ce3daba210afd27d827663b42"],["/posts/a13c1dba.html","71e9660ccb967857b569dafc7e9da69f"],["/posts/a1f2a4d4.html","6422676bc846c6649668f2c54d318283"],["/posts/a541262a.html","407d7b4421fcd6620f27756a319f0ef7"],["/posts/a5f300de.html","4ae79406f952a0bc7671a2bb27e0dbc6"],["/posts/a98766fe.html","3b05e8f92dee84624850899240a1ceb9"],["/posts/a9f63847.html","8e71281945bf1d68d8413c5ac5bc4162"],["/posts/ad31055e.html","3cf4768283c1bdb26dad7586ce12978e"],["/posts/adcd6e20.html","521728bcf5d30afccf78e9de1baa5c1c"],["/posts/b0fa4c58.html","f4cc6276505d5654e122d631cf43b512"],["/posts/b1168675.html","bb63247e7df488ab428c66d31e805f79"],["/posts/b291b1dc.html","28ac6ea09ff1905894ddce202aa891c2"],["/posts/b2feeab7.html","efb5c6fcd0c325a4364587c0a3d66f65"],["/posts/b6d66f1b.html","2c5a634df989044fffc857a3c9a3cf36"],["/posts/b7525d11.html","4dba9e229835f74938206c1b979cafb9"],["/posts/bb154b63.html","884f0aa17ab4fe3acb612463dc9f2218"],["/posts/cc1b9611.html","a44586424cda4b82e59da789ef750316"],["/posts/cc86a40d.html","11340b3e298473542c2e29bbc28232d7"],["/posts/d36531a7.html","9a0a81091c0a2cb183ee805de3b1ec82"],["/posts/d442e51a.html","5a2d51ab5c6ccb078d4f80aef9de7377"],["/posts/d7fdf01f.html","21ebfd6748e123e5f9276237c9a7ccec"],["/posts/d839b0e.html","27813293a55f75e65e1fd72fed48dcd9"],["/posts/dcdf88c8.html","beca076431607a96606a9924f51dfe69"],["/posts/dd378ae0.html","9651e0ac20c6108e1ff016f065934e08"],["/posts/df2849ec.html","19e9d6d2582007c82565b2c622bb373c"],["/posts/e15be301.html","16f3428ac1775fbc78bff7eb89308043"],["/posts/e2e4b4ce.html","4041183df23fd05b716a9825bb3d1069"],["/posts/e35ef5bd.html","8d5108babb42466ca63a0581839ef88f"],["/posts/e462ba83.html","3187015af75a1a1bc8e395a198b4d1a0"],["/posts/e53204e6.html","cb24f3c352c96a3eb7441897f0cf5244"],["/posts/e5cd9bbd.html","af9cbfb6b4063ff25d920d40949c4df0"],["/posts/e5d89884.html","a5ea65ff69b69424a7cf6c86c85ca1f8"],["/posts/e7a99a5e.html","7a1d6f7e9de87c8c6fbb38bd9cb82b1d"],["/posts/e9318100.html","567dfa7eaa60506cd523f652ce9b4ce9"],["/posts/ed52e6a0.html","f8b4ef21120078fd858a1db3077da432"],["/posts/ee0ac59a.html","1cfe0b6b6a24b135d3bbfc259fc56100"],["/posts/f09c1ee5.html","2a887cb3c34a420a98736038031f3914"],["/posts/f1252f66.html","7f4914f43c99cb1db3fcaacf18bdef57"],["/posts/f4af26a9.html","419dff534af38d583852022de5af5a56"],["/posts/fa3cd62d.html","7afe21e007edbbc1fffe312387573f11"],["/posts/fb3794ef.html","ad460efbd66637d6d061ba7cc4be9ee9"],["/posts/fda4520e.html","c8e9dcd5bc1c10dad86ae10efdcf1186"],["/posts/ffdfd6d4.html","db7e64508bf5ce36ab810752168695c8"],["/private/index.html","e0691cea40911e420109842b08d2f56e"],["/random/index.html","eaec14e44afb1543716ebce57f853b7e"],["/sw-register.js","d18fe2de65c278c4669aa962f62d2e40"],["/tags/ACG/index.html","f89ee27c6d1dbc37f2f5df981af29c59"],["/tags/AIR/index.html","aad787e5b37ae10550d73491192ff2b2"],["/tags/AliceSoft/index.html","a5215e3af986760a5c8507c3242fbb65"],["/tags/Butterfly/index.html","d60c3f5a8acb6e6994097cce453aa028"],["/tags/C/index.html","4aa161021ed0773346f8836e18286380"],["/tags/CLI/index.html","f03273730128c00180a1362058eb5b36"],["/tags/CMU/index.html","ce3465289344e4129517cb66caeb1cb3"],["/tags/Crash-Course/index.html","928c8799dba08a034d6c9771ea8d7042"],["/tags/ETH-Zurich/index.html","905e82dead3a32a3981ca149893413bf"],["/tags/Eushully/index.html","639df9c6d6542117126eef4bd789ec3e"],["/tags/Everlasting-Summer/index.html","c6e8fa876afba118c87ceaf0ba16e5ed"],["/tags/GDB/index.html","f0b1bd923d3acbb54b4d351da75bc8fc"],["/tags/GRIS/index.html","d33929f66f0398f013492f40e792274b"],["/tags/GUI/index.html","e45a6edd1ec3b7136dfa5cda78322451"],["/tags/Git/index.html","66824858e8e2db7d9700145c025e5a05"],["/tags/HTML/index.html","7740755d1ed4953d6e90861c7a259249"],["/tags/Haskell/index.html","25031b09787b949189088041be85aa35"],["/tags/Java/index.html","569d03db71f6af5949011bd51de68609"],["/tags/JavaScript/index.html","5411038071c9a446eb4a1845027d067b"],["/tags/LaTeX/index.html","dabccf70a4a3a49a0389a2cbad2d3e6f"],["/tags/Linux/index.html","6c92f519da4eea26e1605f6d095a83a1"],["/tags/MIT/index.html","0f53a545bb92b8d0f49abbb58b391c7c"],["/tags/Markdown/index.html","31962fbb25a37e012b916a15e5b03c4d"],["/tags/Mermaid/index.html","86171a80e53434889c8ecd962a031f07"],["/tags/NTR/index.html","d5a97c8dd23b5a6a9edbbf004cf47361"],["/tags/Node-js/index.html","7eb57535567835159a3ef4e5c0464db5"],["/tags/Pixar/index.html","5be3c4d8a145715adda53fc0d1f40c78"],["/tags/Princeton/index.html","794e67ab7573cf6cb08da6b7e0233fce"],["/tags/Python/index.html","96869c1ab010b768b0d4b19bd31d8010"],["/tags/Qt/index.html","c915eedad2082fcb115fd50ab8ff3d83"],["/tags/R18/index.html","f2c19c48f8457a2a78d999388c3dc11a"],["/tags/RISC-V/index.html","ac87594d4500260c26dbf3ed8093e2bb"],["/tags/Scheme/index.html","02b4455f7488e45de8eb215a057ed4b9"],["/tags/Shell/index.html","9c8d75b4d80ea3507c96af1673b2529a"],["/tags/Spring-Boot/index.html","4b097493182bb0f01e6bc1b6d3de2d37"],["/tags/Stanford/index.html","2fe6fe26d923ffe0b27151d13bfefe39"],["/tags/UC-Berkeley/index.html","c51f63f344c9d9f2d9cc3676c1e4dd32"],["/tags/University-of-Helsinki/index.html","839437b562a6658e3169bf40f578fb88"],["/tags/debug/index.html","47108ec0742589ca3fb183a2a4246c7f"],["/tags/index.html","ec4234c70618ce778299ca8069b1a2c7"],["/tags/key/index.html","53079c8eea0ad29dd09bc4fbcdca2c3f"],["/tags/web/index.html","c6c1610178f63a2e2ea4ff5b6b79eaec"],["/tags/三国演义/index.html","3b9253833e8beb07607d0e8952ca2726"],["/tags/丧尸/index.html","cf76e6b33ccbd458fca8374ce6f5724d"],["/tags/京都动画/index.html","c64237f8b38712b4ddc7b75a56e81f2e"],["/tags/京阿尼/index.html","eeb08fc4f6a9a16dcb6e101cbd4068ba"],["/tags/体系结构/index.html","e3573d3bee35dd0f7b07588ce0da1e96"],["/tags/信号与系统/index.html","709a241040c8248919c1f0d8255e91e5"],["/tags/信息论/index.html","9cf63e167b44a5b0ffe39f9cdad7d987"],["/tags/傲慢与偏见/index.html","35880b71fc8e81a9325684bda8456fab"],["/tags/元稹/index.html","ef3b3a8234fa40df8a5858d1bb775c29"],["/tags/克苏鲁/index.html","b41f8130f4dd52acf6b168bb4c76c728"],["/tags/公路片/index.html","20cb1d1061555c6578841ad1706a5b13"],["/tags/兰斯/index.html","1095258e108dcc9ef31fc199c5b6e88c"],["/tags/关于我转生变成史莱姆这档事/index.html","311cce596f7cd50bf0cca9357535e132"],["/tags/冒险/index.html","98005987794d4bc0cab15811762efc27"],["/tags/冰汽时代/index.html","98f4b0e65bb8d4e620907c686b167720"],["/tags/函数式编程/index.html","fffc6918bf9a491c9cc8c89995f2e7a3"],["/tags/刺客信条/index.html","c19b40a8565228f7d2a8e36c6d09489d"],["/tags/卖肉/index.html","d3a6a950ea1a803764b20506f4bb4b67"],["/tags/博客/index.html","68bddcefbe40e8c9d387ca107abe8cdd"],["/tags/去月球/index.html","52ac31741e9b4d0c3cb5feaffd8d2c34"],["/tags/可汗学院/index.html","1b2160c591ee5d214b90c166069b05fc"],["/tags/史诗/index.html","3f061c6c12291ef260a8e6a4a257ce50"],["/tags/吉卜力工作室/index.html","543871d0160576520519c66a5012fb51"],["/tags/名侦探柯南/index.html","11f51cfeccf159f47fa210cfa8689a3e"],["/tags/后宫/index.html","503df92e473cdb52d61ac3ff5f9cc8e6"],["/tags/咒术回战/index.html","30ec0c7a9f27b50b7b191f0bd6a391ce"],["/tags/哆啦A梦/index.html","d767bc42daed140120f66ce3558fb529"],["/tags/哈利波特/index.html","ddf0d59db32fbcfaf6f3a140c3607646"],["/tags/喜剧/index.html","4eef3533461259db233a8ada426bff89"],["/tags/喜羊羊与灰太狼/index.html","5f168459386bb3b04f190de09afdd1b2"],["/tags/四大名著/index.html","2b048b247d0a4a1226659ed6c1e88e97"],["/tags/图表/index.html","659c348eba9bf2cd623573a49946074d"],["/tags/复变函数/index.html","6cc5c96e0a7f1f0fc1736ceb60385c20"],["/tags/孔乙己/index.html","ce8d8d8bd2f19f0acb3be0a2af72036f"],["/tags/字符串/index.html","19dae24395943bde99ac9f74661cc4f2"],["/tags/学园默示录/index.html","674d1e000a9cec2714e5baf33acefe73"],["/tags/寻找天堂/index.html","bbab8302ad0a3bd4e8d9bcff4094f9ba"],["/tags/希伯来大学/index.html","32ed8cee09af10fd041ec1d0fb08d26a"],["/tags/异世界/index.html","f7ccf95ed090dd791bc5d59e9afdbdc7"],["/tags/微分方程/index.html","8e3bf3ae854775dd9c09f3431bd1058f"],["/tags/微积分/index.html","c5d099a902055c24d02ee01a427bd958"],["/tags/恋爱/index.html","4a76c82bccaa385f6e8bcb3a01b5a719"],["/tags/情感/index.html","fe078ddf8e900a2e9c898e063018b516"],["/tags/成为简奥斯汀/index.html","09e37343b5de770ce44e2986876c1d0c"],["/tags/指环王/index.html","0efcffe7fe88e56a8c33cd2e7f45c077"],["/tags/搞笑/index.html","b78f2408bf22ff2d33ef6279b198e16c"],["/tags/教育/index.html","f7febf7b99cf3cff60ad9090543ea361"],["/tags/数据库/index.html","8bbcbc74abce8541167dcd3410864099"],["/tags/数据科学/index.html","f615cae33a0a6db5cf0b5e85306f2e24"],["/tags/数据结构/index.html","7b78744705b2599ddd37a9892b82b488"],["/tags/数据结构与算法/index.html","ab9d8380a45194fcd71fdf148a6189a9"],["/tags/文字排版/index.html","3909c2ef3dfc5cd6c96a669dd3e7a973"],["/tags/文明VI/index.html","c46d707bc05021537e067c6d19b7ca6e"],["/tags/旅行/index.html","7faa9679cfaa9d0d44afcde10b089823"],["/tags/无彩限的怪灵世界/index.html","57ff95b4272903507674414456ed0807"],["/tags/时间刺客/index.html","0757e342668d0a6c8fd41144f7309879"],["/tags/暗黑地牢/index.html","bddde8c54a614019f61db4e20b325aa0"],["/tags/有生之年/index.html","9d61e041e9ed7f27f5b362f045f7b4bb"],["/tags/末日求生/index.html","f9217122de945dbb28fc9a7286f9a8bb"],["/tags/李商隐/index.html","854326eb44a5780efc2923b9d5e75125"],["/tags/李白/index.html","4e41e3b3b78755713d0dfde45d2fa7a2"],["/tags/李贺/index.html","14e560e2784f81757b1a2578cfee0e17"],["/tags/杜甫/index.html","5c8266ddd2521cc063f0ed9a50bb99b2"],["/tags/校园/index.html","4065adecf31cd7faf99728dd697bb2b8"],["/tags/概率论/index.html","2d7e84bc3a99290973b0ac6938ef5856"],["/tags/正则表达式/index.html","db7c5821ffa411cbae02260b7fdd4b12"],["/tags/死亡/index.html","42c8ed9a9b72021cbf064d6d5cfa4412"],["/tags/水仙/index.html","f99f47b68251282a25e13296b738d568"],["/tags/治愈/index.html","6934266950d4a9513515943e4017df63"],["/tags/烂尾/index.html","5ca78533b83e0000002a15f7fedd2c75"],["/tags/热血/index.html","d8206f82a8b25362a25bd84799d0ae1f"],["/tags/爱国/index.html","a735210bb2b6fd121ea2dad04b9223ea"],["/tags/版本管理/index.html","51d1af5a22f6c741705545a99989906f"],["/tags/玉子市场/index.html","136ac541c232588db5fc3b8463c15021"],["/tags/玉子爱情故事/index.html","d58f7f3d443c8a298c983c6eb0d9fa1c"],["/tags/王维/index.html","1e910b278ba6c5d5173d760652ddb636"],["/tags/现实/index.html","da9ba57d32579becbf8c5868ca7e81bf"],["/tags/甘城光辉游乐园/index.html","20d7227032d816876e269e6d5cfc5732"],["/tags/白居易/index.html","8239acec9ec667828fec47ed575aa3da"],["/tags/白毛/index.html","5721a0471742424705fc9e28a3f0b914"],["/tags/短篇小说/index.html","dca7b499ad268d1edffc5afac491295b"],["/tags/神话/index.html","92d1e0f7ac5faee9edb8a2b443e5b91e"],["/tags/离散数学/index.html","d9b584373ad8190623ed83cb1ead1a5f"],["/tags/种田流/index.html","685f85693ff25ae5e5a5ff72eba2b7bb"],["/tags/空洞骑士/index.html","fc9842307a6f1b1a4255f468050467f5"],["/tags/童年/index.html","3fc9b0fe46d71805687d38e6275974a6"],["/tags/童话/index.html","88e16243029f98ae8f1c188532c3a06b"],["/tags/第九艺术/index.html","66207a14a4798c1e0ec00886ea5e5479"],["/tags/策略游戏/index.html","4b509d877d2203982c061a4e3bb64ab1"],["/tags/简奥斯汀/index.html","1fdbbf88c7d93fd2ec9093e54e79f8a5"],["/tags/紫罗兰永恒花园/index.html","1fbbb44ceb7773c432b7a939f343501d"],["/tags/纯爱/index.html","faadf84bea998f66692fd29391a7c132"],["/tags/纵使手残仍大爱/index.html","27c3afbf073b96ac0fde313e965391f7"],["/tags/线性代数/index.html","9bfa3fc4ea75c7bebfd21bfb0142b8bf"],["/tags/编码/index.html","76962cd0b79cd75ee153e3947649b836"],["/tags/致郁/index.html","95903471e19cb5072c4ce1e2f1612531"],["/tags/苏联/index.html","2c673bb620f6efa8162045a928e040ea"],["/tags/苏轼/index.html","120383a240af6e7f2c4cbaa33b32961f"],["/tags/英雄/index.html","1c49fb9d8463d04f7c3829a66c764272"],["/tags/计算机科学/index.html","5ef3998ed432bc915f232dc3e405281b"],["/tags/计算机系统/index.html","479cd83cab69fd63c086a8e6c113826c"],["/tags/计算机网络/index.html","e940e219537d32a5a93c555fcdb9ddf1"],["/tags/词中之龙/index.html","64ed1243bbd4484a20d5b66147d50389"],["/tags/诗仙/index.html","79ef213d569b444741e5cd2c626c54a8"],["/tags/诗佛/index.html","605148832165f73b2f8c27dd0fd0fc51"],["/tags/诗圣/index.html","fadef92d7775699cfc8008aab3e53ec1"],["/tags/诗词/index.html","655973bc4d23aab2c65552cf184080a2"],["/tags/诗鬼/index.html","b27d0c110a22daf218a0f41ddae129e9"],["/tags/读书/index.html","1f5d39dbedb5b0dfeb6628c873717c25"],["/tags/豪放/index.html","ed4863c8ad3804f65180763e769e04fb"],["/tags/赫尔辛基大学/index.html","8c076fec2b77f8b43e37bdfdbdb52fc5"],["/tags/跳跃/index.html","3429fd3ac5bfb91e3d8714509f382c53"],["/tags/辛弃疾/index.html","b63223e530a345b5d134a04bcbaf3d07"],["/tags/运动/index.html","9c85258cb3ce72bca59870803f06747f"],["/tags/钉宫/index.html","c6acabf673eae8ccef76ac5235ab1e7b"],["/tags/银河战士恶魔城/index.html","183d4845376d36888a9143aeb88a8a44"],["/tags/陆游/index.html","08e1aecd6f4327165eeefe96c50786cf"],["/tags/零之使魔/index.html","27e4f89a121dc6bc7589ab0c3956c2ee"],["/tags/霍比特人/index.html","d678493b0856d4345990bfb056c2012b"],["/tags/飞屋环游记/index.html","3300bf58dab44bdf876f9fc69bdeba07"],["/tags/魔戒/index.html","ef227ec7d73c7dc0aabdac3009409f42"],["/tags/魔法少女小圆/index.html","4fd3d70b5fbf8dfae38c46fad7c9d675"],["/tags/鲁迅/index.html","064dd1689827659843a86c97e6876116"]];
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
