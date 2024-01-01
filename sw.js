/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7eb6574587633b696cac593056ccd977"],["/about/index.html","4d127c55dc697df293f5d4578cff5e33"],["/anime/index.html","014e2bf071ba2ca5017b604df0f67f70"],["/archives/2022/11/index.html","d10756272574c493ec87bf6d11c7e954"],["/archives/2022/12/index.html","853f4f5a61bddbd9c54b084e12d8e17e"],["/archives/2022/index.html","22d268f699bd4a43ee893c8126e77a40"],["/archives/2022/page/2/index.html","1e27265436eaec11a8fe2a302330f84b"],["/archives/2023/01/index.html","bc3e2fb7151df47d748f621ebf2dc4e3"],["/archives/2023/02/index.html","cd3c839c978d3011794a677dfe429c9f"],["/archives/2023/03/index.html","9435430a44ae6db8e69e890ac10a901c"],["/archives/2023/04/index.html","59259dd1ee6cc1080e4091adb8342c61"],["/archives/2023/04/page/2/index.html","333a7a85c05aa47884fe05839ab8deac"],["/archives/2023/04/page/3/index.html","41c98f7468de50f77bfe68cdd5f766a5"],["/archives/2023/05/index.html","90e9ccf2592f9b319431358da930d960"],["/archives/2023/05/page/2/index.html","b6a37e88f91386ab82d47226b3221d11"],["/archives/2023/06/index.html","0190c814eb0a729f0db4b7b7d6df00b9"],["/archives/2023/08/index.html","ef153da92f9ef87899a28c2aba622462"],["/archives/2023/09/index.html","9ef420617e2f604c4bd13cd1cec8c2f0"],["/archives/2023/09/page/2/index.html","26011a6183bf7b5f8bbb51afb07a86b8"],["/archives/2023/10/index.html","0ca193b52387d9c7c62efca20b3f415b"],["/archives/2023/11/index.html","9f01ae75b263119d05849b025ca5a660"],["/archives/2023/12/index.html","0f38b38f72a2cb57acf00d581febb4f0"],["/archives/2023/index.html","1d97418d11e1d1f46d6d102c8e11d281"],["/archives/2023/page/2/index.html","b2972c7ae83f1f11c98aea2e549796cb"],["/archives/2023/page/3/index.html","e73d73c48698f832e023c07d021e343d"],["/archives/2023/page/4/index.html","4371d0a488994de7a2ad2a78c3838375"],["/archives/2023/page/5/index.html","c8a3a5e47221a22921539dc7f3048227"],["/archives/2023/page/6/index.html","e72cfeac10e98b02a0cea35707d0f2ce"],["/archives/2023/page/7/index.html","2012db254ff68a9470d3f842547f01dc"],["/archives/2023/page/8/index.html","8d60d4fb9b2cd4289682b2493bccedcc"],["/archives/2023/page/9/index.html","44967808e3359e244c3b9d5bb617929b"],["/archives/index.html","f38ce2d78ecea8d45ec4652d0870b59b"],["/archives/page/10/index.html","87a7acb2c325cfbc345b1f123e558f16"],["/archives/page/2/index.html","04d5df5bc90a1f879f91a89789527084"],["/archives/page/3/index.html","7f817f3a99c171760aa765ff67a4ad17"],["/archives/page/4/index.html","51c5f2375d566e8faff0d73acc52a2c6"],["/archives/page/5/index.html","2c0b6c21e3941319addfbbdb0f4796ab"],["/archives/page/6/index.html","f1c38e9934ad1b5921504d4e88b5e00f"],["/archives/page/7/index.html","0ac3bee60abbd00c5f8aaba21f1288c8"],["/archives/page/8/index.html","ec0222bc59f301d4443fad0e23c215cc"],["/archives/page/9/index.html","83168ccff9328bccd84214df48db85cc"],["/categories/ACG杂谈/index.html","c056bb1bf46b02912f986e92e4025bbb"],["/categories/ACG杂谈/page/2/index.html","33f47e9f6f43fd91bc58f32632755545"],["/categories/ACG杂谈/page/3/index.html","459b08ee8cfb1c2e0695812788605afa"],["/categories/index.html","b3695f10051a0799327aa297dbc1d628"],["/categories/学习笔记/index.html","a6f972d093bd350397905b732ebd2c0a"],["/categories/学习笔记/page/2/index.html","272bf8b28f46bd7154670c89255076e9"],["/categories/学习笔记/page/3/index.html","9ba681c729eed0d86da257ac90790124"],["/categories/工具/index.html","02533fe5d0a5a580f129b64033ef6476"],["/categories/工具/page/2/index.html","3e3b269e2cd8a4fc90846e2fb9739645"],["/categories/游戏人生/index.html","b810979accbd3ee714d519bc45e501ff"],["/categories/游戏人生/page/2/index.html","14a2dc15561a1a66ed52bbd5fe27c8e6"],["/categories/读书笔记/index.html","69983798933a8dfecb11d4c1050405f6"],["/categories/读书笔记/page/2/index.html","6394be4e2aab94db60d68392996aea40"],["/categories/闲言碎语/index.html","e94748daaf2ab57dd66c539b630b46d9"],["/census/index.html","c48951ae4d971579a828e58cdd0dadf3"],["/charts/index.html","5f2cf276fb4484913ccd472d143bf01f"],["/comments/index.html","662b06619abd084bfce034971c32cb78"],["/css/article title.css","5839d1b7137269384621eb17b1ddfd8e"],["/css/card author.css","1acd970fdaf14dcc9a9d5bc12da2b572"],["/css/clock.min.css","a34c51603c296819dadc565d36cb0098"],["/css/custom.css","b7fcfdc16eadedcb55474b36155f9ca3"],["/css/font.css","13de3a9e870875cc9572162d04897dfe"],["/css/highlight.css","0269960a69c72569c95f60dd5cdcbab2"],["/css/index.css","a25d9a94bc01824aef4c640d4cb1c38f"],["/css/transpancy.css","31e2b043c24ddcd433ad1a01f3045f1d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","1d09c2fe8bc766c1cfc7adac7baa6334"],["/gallery/index.html","8bda5145f4fa7e914323a90d7d6311b6"],["/gallery/wallpaper/index.html","5c788c6ec78bdf12295a9c9c1d1d9f19"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bb27a70ca35fb417c19f3046071686b4"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/movies/index.html","51d89790570f06a317a13536f7bc252a"],["/page/2/index.html","602872437b4b7f07345e1ee1c21fca69"],["/page/3/index.html","63caab355adb6cae7b0f7fca54b413d3"],["/page/4/index.html","fd1dcb5e870242be08cb445d45ac4bdb"],["/page/5/index.html","28104927fde9f26d68c55bff4eb2085e"],["/page/6/index.html","c56b0ffbc9ac8566eb1001768542e42a"],["/page/7/index.html","74b650abbfa3bb6216200c108bfd31d9"],["/page/8/index.html","e2427d78ad045e9fd01f580855b418e7"],["/page/9/index.html","402e6bf33865ed64c9be344d0bb727e9"],["/posts/106331b4.html","3590f9d746a02971b87cc107af535a31"],["/posts/1185a02e.html","94511ee17bf2fc3b527ef2225b4eb41c"],["/posts/12e06b11.html","bb597df838d719207e2f339b09591785"],["/posts/13aafbc3.html","4731430e1109b27ed8118fe5ade5ff8f"],["/posts/167c7c45.html","128b0468c58115e64c727bb836a58a66"],["/posts/1743dad6.html","899a2ff757e349926a27e92d0314c357"],["/posts/175a8e1.html","7bd7a91aeb840fb6754a994e3f07ac13"],["/posts/1be398e4.html","1d24a10d46f6df048e6c4380bc9df410"],["/posts/1c5a0321.html","5d29620f54ddd3d9b4a5aaa0c133d5cc"],["/posts/1ec7973e.html","a963e22afafda6cb447eed94fbb58a01"],["/posts/1fb82448.html","1354a61762a8c2347d993c2bd84f5da1"],["/posts/21f18fd2.html","0276e335fca06d69165239bcd077923a"],["/posts/29c507fa.html","4b104d55b0c22e892efdda2963168f29"],["/posts/2f34eb00.html","e5e5f34c76eff28f254b20b59d221e96"],["/posts/2f57a694.html","156e33a955a5f433e80847b2de5a1b53"],["/posts/320cf12b.html","a9293e7db4615a1df54ed3454237bb6c"],["/posts/374b54d5.html","248f5b46ad9fbe081dcc2f0397495416"],["/posts/3871b764.html","6ca03abc0f9b5573dd4a5a35428ab64b"],["/posts/3b308caa.html","e2d83eae27a91a62739e9120701650f5"],["/posts/3c3cdb74.html","3c67304caba1652d5d1ac9e7e5b91265"],["/posts/41f65cde.html","1e38118813bd111ba0fa286ac07f91c1"],["/posts/4208fd6c.html","d713a0c78d372bc259af9cba6b2c0ffc"],["/posts/4392373e.html","83cc8f647fb2a699d34ad7e8a06341a4"],["/posts/440ed920.html","d6e337e65106c529007fbe2f90b23694"],["/posts/447a8d68.html","879cd99b06d5d88f1cff83dc8b6545fe"],["/posts/4d2b51ac.html","f572735e9dddfd094e6cda2d36cabf19"],["/posts/4db1a52a.html","fcfe558221722c0bec8f2baacddc7c4d"],["/posts/503ae89.html","420a64aa5fcdf058a49c81afdbf6aa55"],["/posts/518e2799.html","a7557cffb196adc73fbb807837572f59"],["/posts/535fd087.html","4de0dcd61d99f915d3811bd23c4a5af0"],["/posts/5923cba3.html","5031ac5f37dedf3256fe4ebee0d1e35a"],["/posts/5c1bb6b8.html","388f172a1d349914bbffa1030e28d92e"],["/posts/5dc45f0c.html","2f8d8f979dba21b26f76fa49a061fa3d"],["/posts/5f2caa2c.html","88efa03e7c96a42985eb40301116dd7f"],["/posts/616be7b6.html","5972c94a13817b66832dab9677e2b005"],["/posts/62a1ec0c.html","dc3f3b4af230f559ba79d771825ebcc1"],["/posts/69fb361e.html","a5068f1b58806ef7d3e9bce8a5e4cef5"],["/posts/6a8518ce.html","8f0070775eb4d7b18d15dc618eabb6f4"],["/posts/70685119.html","1ca6f9c752754b85734029382fa19f11"],["/posts/743db4aa.html","800357a1966074a7c499635d9ac19b40"],["/posts/7b67faab.html","9c40c328b88a40dc774e5cef518d0b08"],["/posts/7b76be01.html","95c4d880b72e5284a585d33e41175472"],["/posts/7bff939e.html","33ef5f47bb3b200231d19eddcd4eafba"],["/posts/7cc4ca07.html","114412f668c2587db9852b1cc7d91b89"],["/posts/7d257210.html","7d2961655cc7bcde58051099b3cd682d"],["/posts/7e6a5c94.html","617a5d82b1f83b3b80b4322690b356bf"],["/posts/7ea0cbe4.html","e434d5f220ddf0393f71f8a04f9dbc7c"],["/posts/7f382da2.html","12cf2c413346acb2d1601c51c3880ed7"],["/posts/7f8d32f4.html","cb2316ddf43e9b29045523666bcb20e6"],["/posts/8207aa48.html","115add8c95688bafda1a660f0b84865f"],["/posts/836ea9bd.html","6016a64d9d3cdc623b3c8a910b4e5cbf"],["/posts/84cae757.html","cb018cfa198017b4e6843594cee55256"],["/posts/88200036.html","714514e29bf4c8d63543a3bfb028da4c"],["/posts/922fb64d.html","a683e9fe718a94c3018f1aebe7b71466"],["/posts/98332b29.html","61601a00a399198bcfc281cd69cf433f"],["/posts/9a1a736f.html","f3540feb257b64162a2449623915e1d0"],["/posts/9addd0bb.html","bb18718e08e5af97ff34c98c7dc16dd2"],["/posts/9b44950b.html","70dc5a2e16f186e909b1e5b67061fd68"],["/posts/9ca149ab.html","b1531a393db155fa9cabe293348d3e52"],["/posts/9e4446bf.html","f8cb4e7364c2be00768cf4d95996e89e"],["/posts/a0271e58.html","b8268643109d715c7f79396d20331f2d"],["/posts/a13c1dba.html","6cbe1ea39bc4a3adc2ca6952f68caa2b"],["/posts/a1f2a4d4.html","7c2bd2e891e1db862cd996d6555b7705"],["/posts/a5f300de.html","5a9af8fa7062c8bf41e278155b693130"],["/posts/a98766fe.html","16d79124dd6e0de27e7cd94a235e364d"],["/posts/a9f63847.html","8ffae9c7e5a97c95e9615bea6840ce63"],["/posts/ad31055e.html","b55aa09424b1435d90c9d85d22260756"],["/posts/adcd6e20.html","5f72179012e362a5c5882abd86f61673"],["/posts/b0fa4c58.html","726205efaf12a555db22396ce52f1967"],["/posts/b1168675.html","d016a765cb6a85ee8c225e3fdd5b8f70"],["/posts/b291b1dc.html","a66fa072bad519437d05746952291e40"],["/posts/b2feeab7.html","7f28bd4e13945f8aee6030e0356fa3c9"],["/posts/b6d66f1b.html","1eb182104f715ae7ce879175d55429cb"],["/posts/b7525d11.html","31f71ff8768fc9bdce823efea00d4c47"],["/posts/bb154b63.html","d01436b3b5546cb01c34172c6bbef9a8"],["/posts/cc1b9611.html","14dd11c90cda5d304ae21548af73877f"],["/posts/cc86a40d.html","e7a48de04267066a1c644b550a9e78c6"],["/posts/d36531a7.html","d99cb2fd9385e31b1683bdae4bea9b98"],["/posts/d442e51a.html","cf07804ef27246b91043e17e6d4e1667"],["/posts/d7fdf01f.html","db2eddfaf716cb0d5bbc58322b3f2215"],["/posts/d839b0e.html","ec4862a39732b64d7421e357043bd55f"],["/posts/dcdf88c8.html","90be9c384c723befc4e3adc83beda509"],["/posts/dd378ae0.html","f2024d0580678236306f074fe22c0734"],["/posts/e15be301.html","e0b269c70555b94a42bb69891384b439"],["/posts/e2e4b4ce.html","d2697cd407bf5d2f71c258b12479ba96"],["/posts/e35ef5bd.html","43562ba7f814ba610f30ae11e5d15010"],["/posts/e462ba83.html","ff2b3302e20d619d89a1151fad86729b"],["/posts/e53204e6.html","b2e76e8ecfccdd5e9ddd13a2e03e37bf"],["/posts/e5cd9bbd.html","e021560d946d3345b4dbd51fca105912"],["/posts/e7a99a5e.html","7d8f55bcad6973a89b4ea92f5eab0fc7"],["/posts/e9318100.html","e4e240818902b9f41da08cf7a84ee8ba"],["/posts/ed52e6a0.html","5eb2e3cf6b4095c08be79d46d545d2ff"],["/posts/ee0ac59a.html","7c8f00f6f454ed52f55910927d7917e1"],["/posts/f09c1ee5.html","897848bfcaeb29aa1f330f5dad897149"],["/posts/f1252f66.html","5f3558e820d9f70f7ccd88226144ca92"],["/posts/f4af26a9.html","4dd6dc388f6ee422b6a4a2ee82f6b99f"],["/posts/fa3cd62d.html","0d17dc65d1dbc000d7b2380e9d569d53"],["/posts/fb3794ef.html","7873b36dfd43cc16ed7b63c49ba16c0e"],["/posts/ffdfd6d4.html","a0d91a5efc8c666a774b659c5a202656"],["/private/index.html","9274a498d786868a46da26a302b199a2"],["/random/index.html","225cba50ff4948b48daf9106b6576714"],["/sw-register.js","3b9b3c4f42e2b5df94f99140ffd6b983"],["/tags/ACG/index.html","290a8ef636aa779ad0cf71aa6890c982"],["/tags/AIR/index.html","89709e8d878b7d955e6dc4140cf3adba"],["/tags/AliceSoft/index.html","58d27fd3b54b04b686a21ef2db79807f"],["/tags/Butterfly/index.html","d6ebe6558dcb8ac9ea81d54d77e1b482"],["/tags/C/index.html","dd79b6ce5273a6971408acae458df4a5"],["/tags/CLI/index.html","061528ee9a9654a28674fd6c51343b4c"],["/tags/CMU/index.html","5fc0465c3bcb59d587676f256220cce5"],["/tags/Crash-Course/index.html","bfb973afdb8afe928b0cb5ed2040edc1"],["/tags/ETH-Zurich/index.html","20c40736b09336192f80d43ee176d29b"],["/tags/Eushully/index.html","2fb7b477b5ef72ec58929c024fcddbc9"],["/tags/Everlasting-Summer/index.html","9fe95810a84a20309099f0c454527e26"],["/tags/GDB/index.html","4f034ae0758d2fe487fce06683d03e73"],["/tags/GRIS/index.html","98ffc561ab769bae80832f3aaa80f887"],["/tags/GUI/index.html","96f6b32221b2ae8bba89831f1ed473a9"],["/tags/Git/index.html","a579a212b793e97be027338521cf78d0"],["/tags/HTML/index.html","79e3ce77120e2d287006df975edfa518"],["/tags/Haskell/index.html","8fb639d7774fb8dd49a9420719bab9c2"],["/tags/Java/index.html","d5c8befe70bb9349b9f0e0f9c036d71b"],["/tags/JavaScript/index.html","d1e5562e8f3681141e331f9fc6f9539a"],["/tags/LaTeX/index.html","161db8356545101262b15d73c66d8b35"],["/tags/Linux/index.html","e4b23ea58ad80ff78866c983ae7a9938"],["/tags/MIT/index.html","68671644971b45fd4dea4ef8a7218c28"],["/tags/Markdown/index.html","3b0a05d6ef8827db604374098c30e78e"],["/tags/Mermaid/index.html","6a9b59a0979b160ca14bc06d00fea79f"],["/tags/NTR/index.html","0d46cf00394b074949529e19d7e12d0b"],["/tags/Node-js/index.html","e33079ccba39c4eb9064ac507aabeb34"],["/tags/Pixar/index.html","64719b18305ea46eb1bb5454620893db"],["/tags/Princeton/index.html","2e022afd0ac2fed510882d46bbcbe610"],["/tags/Python/index.html","4aa0f9ac9b115156d4d820a3721a1f80"],["/tags/Qt/index.html","d592c3a6dbda01dc563c838446517dab"],["/tags/R18/index.html","ec4a616f1e2b3f866525c3fed7abe749"],["/tags/RISC-V/index.html","e2f02ec2ca3b7d5e401334a268cfec0a"],["/tags/Scheme/index.html","fe43d8df783e980cde9af9ab1dede16f"],["/tags/Shell/index.html","5d486e9f0b82cf80a9fd06ece5f99407"],["/tags/Stanford/index.html","a24058c957efce9a1d583f09009722f0"],["/tags/UC-Berkeley/index.html","ac25bcaf6efb762df005e9bb5135f3b3"],["/tags/University-of-Helsinki/index.html","a81866003f8119f0994fbc57a350c56b"],["/tags/debug/index.html","c457840a27d4cd6f272bbeb8fa55953b"],["/tags/index.html","3392c96b4254f1f46198fd1891ca3efb"],["/tags/key/index.html","59ac242a30808048a20238bcb578c2d5"],["/tags/web/index.html","b3cb953d1822c93e8362bff7ac77d4ff"],["/tags/三国演义/index.html","e0d8652bdbc7e2708ec9c7eb4dc7a664"],["/tags/丧尸/index.html","1c8ceed2a98c5c9ec6883376265e9e6d"],["/tags/京都动画/index.html","d51de477bdfef3df9e9ae69f315f2638"],["/tags/京阿尼/index.html","36da157935427b01c357e2f675d8fbd2"],["/tags/体系结构/index.html","48d764661d1d14c9692a143b5de8ede0"],["/tags/信号与系统/index.html","0e9b0003648f8e154e71fd5d84a5b803"],["/tags/信息论/index.html","9b0b364385650f70748d6e97a2f665bf"],["/tags/傲慢与偏见/index.html","2f9c9840602d474bdcbccf7e6f738d59"],["/tags/元稹/index.html","f4422829fc0a727471545bfa199f4cac"],["/tags/公路片/index.html","0db7f6968c8ef8c5c440fad100e4f390"],["/tags/兰斯/index.html","5cdb68a777033cfbe8b22d0d0507fe13"],["/tags/关于我转生变成史莱姆这档事/index.html","4d0e483a8e230072b5b73558776b1c81"],["/tags/冒险/index.html","7a30aa1646c726fbf9b34567d01ea501"],["/tags/函数式编程/index.html","b7b2ff34f04d7c79628bbec91f5c171a"],["/tags/刺客信条/index.html","77f2834132953db7ead94b03eb552219"],["/tags/卖肉/index.html","0b6d6cf002c803bf5babd123eb8a9eb2"],["/tags/博客/index.html","5dd1dae06d44daf6c8e20a2c3d33c605"],["/tags/去月球/index.html","b4330d77b0cf18a0c708fb9215143e54"],["/tags/可汗学院/index.html","61d6a2831ba03e49c0564c88b5a1ae2f"],["/tags/史诗/index.html","080a65c34701c8f8a991e4d658979eec"],["/tags/吉卜力工作室/index.html","29addac9a112c1e5bf6b84243a310417"],["/tags/名侦探柯南/index.html","aeb874b2af7cec30c875c81fbb29768f"],["/tags/后宫/index.html","2badfc7f5a3d5f3766ed441ec72550ac"],["/tags/咒术回战/index.html","67b10ffc72c3e1877271ae01f59fc70b"],["/tags/哆啦A梦/index.html","734f22df6aea494fc6b34c027431d020"],["/tags/哈利波特/index.html","3af5fa124e6ebde219babead24bc81fa"],["/tags/喜剧/index.html","71e4640df47fd6c461d92f6466e3d64d"],["/tags/喜羊羊与灰太狼/index.html","4320e8d39450cb79d75231a6c327ec5e"],["/tags/四大名著/index.html","14546162813d04866ff29a8f3e23e03f"],["/tags/图表/index.html","88b080b26461215a3849bcc1ee4e9d4d"],["/tags/复变函数/index.html","81bd90151f321cd0eeadef56107ddc3e"],["/tags/孔乙己/index.html","f28a8a3ce9aee3f3b88c1dd13381e775"],["/tags/字符串/index.html","92fcd49c5515404fd1b6be2ed24f1012"],["/tags/学园默示录/index.html","0c62aa1197fd804ad34632a3eaaf231c"],["/tags/寻找天堂/index.html","e021d8c1505f15e74e614938d9855b17"],["/tags/希伯来大学/index.html","9c47c0860cf0184d65654b46ada2a343"],["/tags/异世界/index.html","2d3bc3c7d91fef38e67a1a4180482c89"],["/tags/微分方程/index.html","9dded3ef7d832cb50412e34e656eafd5"],["/tags/微积分/index.html","0c068134f7948714d726661c2b4e592c"],["/tags/恋爱/index.html","26c35fc35bba6a1cdf193946a0979ede"],["/tags/情感/index.html","e7418de9ad854fc3688de63aea2ae289"],["/tags/成为简奥斯汀/index.html","3d5800f2dda65b794c13306a9975b663"],["/tags/指环王/index.html","4e3ec978a7f9a77da71cc77fbf1b002c"],["/tags/搞笑/index.html","b69d469d6b3b87355af8caafe9588310"],["/tags/教育/index.html","cf78795c67782aa2128d77956c191458"],["/tags/数据科学/index.html","acf4146cfea81ed8eb9c3e8b3caf8cac"],["/tags/数据结构/index.html","3a64f4cc263d7490bc9d7ce53943b83e"],["/tags/数据结构与算法/index.html","3b28ea2a55cc27754db25361da36576d"],["/tags/文字排版/index.html","53564eb78d2a4a065c0f006085f1db25"],["/tags/文明VI/index.html","9d1f04880dd4f37287cc80a2cbd544a3"],["/tags/旅行/index.html","5496c5156e66af20ec15a21fdee20db0"],["/tags/无彩限的怪灵世界/index.html","36b9b333cfadfa8c0ff2ddcc3af115d4"],["/tags/时间刺客/index.html","44c771f3ce78989e4baaa168bc750ffa"],["/tags/有生之年/index.html","345a44dc8726012281fa2ef1b1c6a1ca"],["/tags/李商隐/index.html","10c9561ee352b7bd8ab9f6292dad3b09"],["/tags/李白/index.html","e9afa2605dda9c3f59dcd6150f42c4ba"],["/tags/李贺/index.html","050d693068cca14340280a9e8045aa52"],["/tags/杜甫/index.html","bc9d2cf502887988d04e3947a066f9b1"],["/tags/校园/index.html","ce2dc39a286fa97975731ceded353fcf"],["/tags/概率论/index.html","9bdd8589a2fd134507632969663dd851"],["/tags/正则表达式/index.html","ee950ba8c36101a6f6282bad8c14e05c"],["/tags/死亡/index.html","ed9735caef9a4804370eb803f722aab3"],["/tags/水仙/index.html","5f5674d7d6bdfd43bebd0592f4ea5a4e"],["/tags/治愈/index.html","3008fb9d381fd2988240209999896f59"],["/tags/烂尾/index.html","b51e74b677e71b42d13f356b0e282e0e"],["/tags/热血/index.html","d7f81de762f6d774bbb68f74ef439c3d"],["/tags/爱国/index.html","32fc3eb189925739075c395e4f7ab587"],["/tags/版本管理/index.html","639590e6dfa1e9e8197a1f4ecb38a3b7"],["/tags/玉子市场/index.html","56a7e96c087205d16e4c37832b7399b4"],["/tags/玉子爱情故事/index.html","cd221d195d74c7b5dfc7096f5a758bfc"],["/tags/王维/index.html","d672caa6b9950abc547acea9a696fe73"],["/tags/现实/index.html","085925c8865b58033ad9d5f8af3509a3"],["/tags/甘城光辉游乐园/index.html","c3b5362220314428bb774ccbfa28ca9d"],["/tags/白居易/index.html","cb88743135a4e7b3f729e5877315876b"],["/tags/白毛/index.html","0c09d16eefa47fda66777faebe0dd67f"],["/tags/短篇小说/index.html","64e9d83323cb6768a526fc9d5f1af2cf"],["/tags/神话/index.html","7efa0096aa9cae51f747bf32975cd009"],["/tags/离散数学/index.html","7f9397fe6f2b4b9bb0119f05a1f48bb0"],["/tags/种田流/index.html","8bd719c1dfd1368742b97c999fd6be56"],["/tags/空洞骑士/index.html","44caa88c90b7bcb31d64628c1b2f8446"],["/tags/童年/index.html","cc220b1d83438be09a7749e18251be63"],["/tags/童话/index.html","c39f334271069ef4683f2d295f0f6814"],["/tags/第九艺术/index.html","c227685eac955551983576c3831c25eb"],["/tags/策略游戏/index.html","487e4db9dcf1aca24f61531f1215d5b1"],["/tags/简奥斯汀/index.html","573afc6614ab9c7aeefcb247c7aa043b"],["/tags/紫罗兰永恒花园/index.html","f96e0b6b64a0eafdb2188c93764d9caa"],["/tags/纯爱/index.html","6aa2b0038cf228e4f93bbf29d67ccee2"],["/tags/纵使手残仍大爱/index.html","f28a019979cf7c9933d35c0a9c6eed5f"],["/tags/线性代数/index.html","41a6aa6eb81105042f1cf9bde6f7c7b6"],["/tags/编码/index.html","703cb0d04b2015efc929244a4d2f7dd6"],["/tags/致郁/index.html","b83dfef4baa93ce1dda7795eaf0a4f61"],["/tags/苏联/index.html","29adb2f4da570c77c7c3a2e05492d0e8"],["/tags/苏轼/index.html","fd92d07fae6a4410346529b5305d2ef0"],["/tags/英雄/index.html","a1942f6f89534ce780bd60023f2d4e4f"],["/tags/计算机科学/index.html","25eec27fe4b04763394a7ad0eb7b1e4f"],["/tags/计算机系统/index.html","d6d7b6fddc9c532ba6d842f57fad54a0"],["/tags/计算机网络/index.html","6425963701c2284fcda9784dd307c952"],["/tags/词中之龙/index.html","82c61b25b33fc73c0d5d09b8f0ef19b9"],["/tags/诗仙/index.html","93b6d27a19123b876efb8a22dd937a04"],["/tags/诗佛/index.html","88e8f7b6c5ca72dbf0dcc2ae35b1c9fe"],["/tags/诗圣/index.html","2d94c7b258ce61d5d5ed10fd6da4483c"],["/tags/诗词/index.html","7360d47ca3109d2e1dc7ad3d76a1b417"],["/tags/诗鬼/index.html","1dc7e544f47d94a86de9620f20cdb0cf"],["/tags/读书/index.html","fae1ec79a6a7bf950af3d88a2f1f94e6"],["/tags/豪放/index.html","40f15835638b81c54df5f0bf4c5ff21c"],["/tags/赫尔辛基大学/index.html","7d25bcb2856390770ca6234e324430d5"],["/tags/跳跃/index.html","94f7ef905585712ddd3467c22a3e0460"],["/tags/辛弃疾/index.html","231948948c34466ad7050c449232bdcd"],["/tags/运动/index.html","c165aaad6ef238419741f6e14579566c"],["/tags/钉宫/index.html","b9d264fbf704d9853585b8c1ecf57d45"],["/tags/银河战士恶魔城/index.html","c0ba360ae686c71a0f399233f30847c0"],["/tags/陆游/index.html","fd81a8f06adefb9190ca59957feb2fbb"],["/tags/零之使魔/index.html","e26803ad1cd42dfc5e43ad74dc0fa59d"],["/tags/霍比特人/index.html","ec65ef7fd5923807ba1391c3ade22237"],["/tags/飞屋环游记/index.html","4c15c61a3316e9432073e09a68154f40"],["/tags/魔戒/index.html","e50a4089a97884206db9d141cffd03be"],["/tags/魔法少女小圆/index.html","30d4608443f4e4c3dc2645d4090e29f5"],["/tags/鲁迅/index.html","94656700c4528fd77e579b10b15d36a6"]];
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
