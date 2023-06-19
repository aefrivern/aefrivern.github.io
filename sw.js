/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9a31ebb9c97bd9d09271aca0981d9d31"],["/about/index.html","a0b2c24cb508ab84dee50d4e5bc6dc86"],["/anime/index.html","1846fbecdd3835dc697202f22394ed1c"],["/archives/2022/11/index.html","83cb9a3b25f50c0b816cd717f92e218a"],["/archives/2022/12/index.html","af0fff4769e0e0819d6acf780eca0930"],["/archives/2022/index.html","f2507573daa0d7dc31191fb0d33443c3"],["/archives/2022/page/2/index.html","c05cede6b100645083883e3b9010ce09"],["/archives/2023/01/index.html","c428f9f4d2332ad5bc231df38d01f98c"],["/archives/2023/02/index.html","29cea0f9e008a120ade64df910f1b5da"],["/archives/2023/03/index.html","e03314b44b5ade1a0b4970d939e7e731"],["/archives/2023/04/index.html","9a57289dc0dd1fb79a16f4d111a444aa"],["/archives/2023/04/page/2/index.html","e8fdc96353c4e5d2d61adc94c357722f"],["/archives/2023/04/page/3/index.html","0aedf3164b2311419e0007d1a758e265"],["/archives/2023/05/index.html","e903f316983b3f9d2482416f5dab3ffd"],["/archives/2023/05/page/2/index.html","4716edf9c08fe6fb252c53a32a43860c"],["/archives/2023/06/index.html","85590c9e6eff39435fe2687048e0b0f7"],["/archives/2023/index.html","12504f207a0436f9523e96f0a24d24a0"],["/archives/2023/page/2/index.html","29bf4c2f921299e594b340e96ff61068"],["/archives/2023/page/3/index.html","99ae3a6fa64c0785ebc77e9429e9a0c3"],["/archives/2023/page/4/index.html","2eee5092b79acd4d40cc34e0f93fdc23"],["/archives/2023/page/5/index.html","46ab91beec2705970a11dda60fbef428"],["/archives/2023/page/6/index.html","38635e27bbbd30168a59a0fb17487092"],["/archives/index.html","5caf556b086c06a2bf12b8aa31761577"],["/archives/page/2/index.html","153a7eb26fdcfe39530d4f8a21e72fdb"],["/archives/page/3/index.html","50513fb4903c4689ec38ef38dd05aa64"],["/archives/page/4/index.html","4db1db132bcde42b64edf0d35e6736f1"],["/archives/page/5/index.html","fa9d1afc25323da834a8e0e6fb7c0e93"],["/archives/page/6/index.html","ea799134b9b2441398f815bc50365ef2"],["/archives/page/7/index.html","e51368feeaa32781be5111f3bad13a06"],["/categories/ACG杂谈/index.html","ac481b387d1d2a5494f6b199826dc44f"],["/categories/ACG杂谈/page/2/index.html","ba58514b5f749c220995077c8fcd6a81"],["/categories/index.html","6696ab96815dbc950e060e83756a6da8"],["/categories/学习笔记/index.html","c088d161c732620d306f79deabfaee64"],["/categories/学习笔记/page/2/index.html","5a2a94b20731b970cd7d6c42a1c3dec0"],["/categories/工具/index.html","0b30b1e88e46b8519a4d749328c816fd"],["/categories/游戏人生/index.html","cdf8164fd02714e8296ebf4061a59ee9"],["/categories/读书笔记/index.html","0f9ca4674fbaab473ffe122fc393c40d"],["/categories/读书笔记/page/2/index.html","5552cdd11dcf0616803cee5115d81ff5"],["/categories/闲言碎语/index.html","b27cb4209f96fcc33fab557dc35fe935"],["/census/index.html","2348319d90fb95a7137d47f0b62e1bf3"],["/charts/index.html","cfe5052c469a5dca999f3a13cee397ca"],["/comments/index.html","6fa0c2d02ee1356c416f5479bb3c57f1"],["/css/article title.css","6b7209beeb292c669df45fabe4508aac"],["/css/barber-shop.css","32de8603d9f22cc139cc10588c309f30"],["/css/card author.css","7851bc6f1480ba0a75d3db04d2d7b8d7"],["/css/clock.min.css","6ab76894169e31784e05f17f79372c32"],["/css/custom.css","55768840ef03d1fc1d66d4ba6952c5c2"],["/css/font.css","e7b9a2b7a8f4742bd59818a2dbc42a92"],["/css/index.css","bf842e7d897499cf17716fcafe1b2af9"],["/css/navigation bar.css","56b0cf2e6003c7eb6f875a22497126c7"],["/css/one graph flow.css","4a02296fc353bb47e52332711dc30686"],["/css/pointer.css","66e13c44f801ca3826b1e6fce212cc68"],["/css/scrollbar.css","27a4d9dfec9ad800feadbaae09c6068f"],["/css/transpancy.css","eb0015dd05bd2ae9c72bde82b88196b2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono-Bold.woff2","f3651b6798df8522d47bdcffd14c9651"],["/fonts/JetBrainsMono-BoldItalic.woff2","377822127270229aead6c9294b0532d7"],["/fonts/JetBrainsMono-Italic.woff2","5ec153f348a797f5f5b0ae2ae06c37b3"],["/fonts/JetBrainsMono-Light.woff2","c91599d112d3f77413bd94c6d7d7cbf4"],["/fonts/JetBrainsMono-LightItalic.woff2","5a5a61f07d0b8667b61f1f40fd52cbb3"],["/fonts/JetBrainsMono-Medium.woff2","ef0a727397711dfea95d620e569923aa"],["/fonts/JetBrainsMono-MediumItalic.woff2","3af9726ce759ff980b2685974f1d2d91"],["/fonts/JetBrainsMono-Regular.woff2","4e0581ae831b349f3f42c0f58d344122"],["/fonts/JetBrainsMono-SemiBold.woff2","17523973c520eb996bd96e74b3aed047"],["/fonts/JetBrainsMono-SemiBoldItalic.woff2","720fc5b7d1426f16f1f3c792b565abee"],["/fonts/JetBrainsMono-Thin.woff2","48a63835963c9bdff9b619673e00a6f5"],["/fonts/JetBrainsMono-ThinItalic.woff2","a967aabe5297ba7c6c49afe17aa74742"],["/fonts/XHei.woff2","9abdb878821f9d27249314900f650d0b"],["/gallery/cover/index.html","708a7e2b1ff6ea4b7e2643ae28104b9f"],["/gallery/index.html","93107e04f975047b04a9f5e8a295c8c2"],["/gallery/wallpaper/index.html","3f3c0e80ed1b671545ebf247166494ae"],["/illustration/MIT 6.050J & 2.110J：信息与熵/复合电路比特.jpg","7f3b39dad7099b4a5344b0a883f437bc"],["/illustration/MIT 6.050J & 2.110J：信息与熵/源的熵.jpg","5e97d5ac9576435b2b958a0862bd444e"],["/illustration/MIT 6.050J & 2.110J：信息与熵/电路比特.jpg","aedc9d562cf39c1c4d799c698246e990"],["/illustration/MIT 6.050J & 2.110J：信息与熵/通信系统模型.jpg","2d9b043c66982f7eb2881d1a5dfebfee"],["/illustration/hexo-butterfly-envelope/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4df593bc012192440c3753441618a101"],["/js/echarts.min.js","6f114043a370ef8abe89d339954758bc"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/movies/index.html","68fff7daad07093d42b63e429f5fac8c"],["/page/2/index.html","5ca93f50738a5dbda1c2586b5234f4bc"],["/page/3/index.html","dc593891da5b7bd35c37c6b3991a35d0"],["/page/4/index.html","b774a6e236eb0e17e742a7d0a83b934f"],["/page/5/index.html","396294f69e876f20a7b6017ec0fdaeed"],["/page/6/index.html","77fd01f37e2ab4754e2e1b981802f051"],["/posts/1c5a0321.html","dff6bfe80de8dd05d6f7109a38d94273"],["/posts/1ec7973e.html","51398f986d7d77b467c5fb149de2a000"],["/posts/1fb82448.html","6869a1f0647ceee641fc64f90ea5f768"],["/posts/29c507fa.html","900ca7a00c41570a594e50ed9fd48a53"],["/posts/2f34eb00.html","16ab5134adc6f9e4591bb910f8f9dbd4"],["/posts/2f57a694.html","e60b2e4a05597b82f0545bf6b58f054e"],["/posts/374b54d5.html","23da86dfbbf078450297d54b48ddfa39"],["/posts/3871b764.html","e60b873ee2232732ca54fc2140fc3009"],["/posts/3b308caa.html","4464bbc9bf106a8c27d77f533d15e888"],["/posts/3c3cdb74.html","f08af36e77c041b0bbaba46b2a4e0349"],["/posts/41f65cde.html","439d54870bfe1103546eb742ea1126f2"],["/posts/4208fd6c.html","d92819eb263609d077811cc57437cda6"],["/posts/4392373e.html","9a903b075800d82adeb423d8d432d176"],["/posts/440ed920.html","5e7370f13307016a1787f2c60d92013d"],["/posts/4d2b51ac.html","dcbbe0dbced1e3cf7a1c3b5b49971455"],["/posts/503ae89.html","dd303c22427b182d838cce3fc62693c6"],["/posts/535fd087.html","f9f6cbc2239d9bcdd4e66b3ec510b5e6"],["/posts/5923cba3.html","1f443e5e8ca9e8ff6b7c7bc488726132"],["/posts/5f2caa2c.html","5868d6413b21e996441f045cd5e5d11c"],["/posts/616be7b6.html","5691fcfa9c73871375e66ccbf2e9ca9b"],["/posts/62a1ec0c.html","a76370b6ded3e14bb804a62769d020d1"],["/posts/69fb361e.html","bfb77927d9f403a7999b83bb8f51d4e5"],["/posts/70685119.html","f4409156af4ee7b3081ac8fa45139545"],["/posts/743db4aa.html","e6db4e6ab56045aa1c165d6f1d19e22c"],["/posts/7b67faab.html","f41eb1c7bcf61df8ebccf82a862c66d7"],["/posts/7b76be01.html","746037b382e9ea7ebb414b24d5073205"],["/posts/7bff939e.html","402bbe0c656ea865a344c8d6bf00460d"],["/posts/7cc4ca07.html","66ed91568dd9e5bf82ea669f067f6254"],["/posts/7d257210.html","63e46f3a27b4acd39160372ca9601157"],["/posts/7ea0cbe4.html","a840c999b1ee8db2c313becc6c76162b"],["/posts/7f382da2.html","d02d65181f43ebb727462befd3e4a3ff"],["/posts/8207aa48.html","ffc4f92bbb3182fa256f87cf0810967f"],["/posts/84cae757.html","6774c5369a5483283538082c64805d56"],["/posts/88200036.html","a5880510464d748b6eae61d928b52fe7"],["/posts/922fb64d.html","3f41af3d62dd902b198596a7c993b9fd"],["/posts/98332b29.html","ff050efe9582a5e57fcb700d40cbfd57"],["/posts/9a1a736f.html","34b63eb5f29af725f45deb46d67e2f32"],["/posts/9addd0bb.html","81b61f43b3be9320190fb533c3f6ec0c"],["/posts/9b44950b.html","62e0657b773ed412fa18cd50167e57e7"],["/posts/9ca149ab.html","fbd4a9b16d6c425471e4ec7ededb656f"],["/posts/9e4446bf.html","da5d2acdd9975719b6410564cbbaff98"],["/posts/a13c1dba.html","a0c43072c49e81e63d16e8f4011f4c26"],["/posts/a1f2a4d4.html","3dab4708e1e8e940978523b9ddd6e4a7"],["/posts/a5f300de.html","847405bc1a111d2584d950a5b7fb2e8a"],["/posts/a9f63847.html","516b4b1165de242bad3706a2824ba392"],["/posts/ad31055e.html","da780ab38fc9b89fdeb5aea164d2ae3d"],["/posts/adcd6e20.html","fec5473378505f07c10cca92421a4e95"],["/posts/b2feeab7.html","b769707b69f0ffb2fa750d30e6dc9819"],["/posts/b7525d11.html","084855847c8d00e7149fc2131b7d4dfe"],["/posts/bb154b63.html","fbaefd8f44c995fb5e947364401525db"],["/posts/cc86a40d.html","af711b4fab7593f0b26d173e1e181f9a"],["/posts/d36531a7.html","6993b14a8a732e32e57e98e1987debda"],["/posts/d442e51a.html","e8b76fe64eed7f103fe4d6b05a1ecdd8"],["/posts/d7fdf01f.html","dc8b3de447ef1223645ebecf15bba75b"],["/posts/dcdf88c8.html","aacdacc8374f5de0bbbbf12821a0ba2c"],["/posts/dd378ae0.html","0054c44daea70d7aaa75fbbd7ac3ed36"],["/posts/e15be301.html","6a4f64f4fa6402d934967d24349f1da3"],["/posts/e2e4b4ce.html","002ccd6fac3accb82aa711ce2e25cc3e"],["/posts/e35ef5bd.html","9768b03b2ea6ab0f7a5cd6281dbfd311"],["/posts/e5cd9bbd.html","196792a65e289fe7bd225f35d65cd649"],["/posts/e7a99a5e.html","bdcdb613b44bc8b740445bad66cd4cdd"],["/posts/ed52e6a0.html","c77990e300f9ffb98f173dc8a6a0ae12"],["/posts/ee0ac59a.html","6723ae596ab6451f57d3b331727af30f"],["/posts/f09c1ee5.html","46b70c35f7c260c864537845870f9b67"],["/posts/f4af26a9.html","25b9a81ef33aceb3759a4aa53f293b77"],["/posts/fa3cd62d.html","6dfba9a98d9d1869d8a929233e1b03d4"],["/posts/ffdfd6d4.html","8b9e22c33d9721d60e4f2300872a2475"],["/private/index.html","13032f5389eecf3925d61e22674bc094"],["/random/index.html","a8df6c6e26f4ce7892198e7349a0a413"],["/sw-register.js","7b19409d9a161f088013efacfb4b60ad"],["/tags/ACG/index.html","4624293e35917df27075560319f69b68"],["/tags/AIR/index.html","b907bcbc739facba79839ecd76c99015"],["/tags/Butterfly/index.html","5edf7ff4533c123ee39632ee4bc25201"],["/tags/C/index.html","0706fe21acbc7a0dbe5f291441668954"],["/tags/Crash-Course/index.html","92d84330b260fbcdcd924718313e94e8"],["/tags/GUI/index.html","300a2102bd01c39c91e2c2c3bc5b24e5"],["/tags/Git/index.html","b64feafece867f9b3a774a6ea2204400"],["/tags/HTML/index.html","eb2a42ecf793cf45428def466cc20c88"],["/tags/Haskell/index.html","5c2c0c43ce33d592f8e07ce525d89a30"],["/tags/Java/index.html","7554076a89f73b4dc8fdfa507103563e"],["/tags/LaTeX/index.html","da7e701a0d08f84c98c00598422ba08a"],["/tags/MIT/index.html","37acfc9c5efac06548bf30aa4436e165"],["/tags/Markdown/index.html","aa5f7aa1c62a9666b2c5bdf4cc00d6e0"],["/tags/Mermaid/index.html","6297e0a3b53b8250ddaaa6b741a79d88"],["/tags/NTR/index.html","2f7aad7ebb5d7cd5b40006966bfac678"],["/tags/Pixar/index.html","74059ab5b620a0ffe0750e5cab52520d"],["/tags/Princeton/index.html","195e4e8c96f5634eb28bcfe40db23020"],["/tags/Python/index.html","af805ff267cc580ce39f32febae4b98c"],["/tags/Qt/index.html","57a6f1f70fc0f28b06ed223abf5bf6ab"],["/tags/Scheme/index.html","a51dcba277542e4ee9716985d7780804"],["/tags/Stanford/index.html","87a73b7ee86fc03989aa7c9c23708708"],["/tags/UC-Berkeley/index.html","548784ce98f966028955feb326569325"],["/tags/University-of-Helsinki/index.html","42f0078805bda7da721ef42705937e1a"],["/tags/index.html","1c8976ee8c7395f62f86607737782d31"],["/tags/三国演义/index.html","ace8e3e1289ee6794929dcc4fa573074"],["/tags/丧尸/index.html","1f0d3a3fdf47fd05432cb9bead2c12f2"],["/tags/京阿尼/index.html","34f0085bebb79e34932abb7e03564d54"],["/tags/信息论/index.html","bb188b855f97c7d805497f84373741fb"],["/tags/元稹/index.html","aa340b9940c187768437666831f58990"],["/tags/关于我转生变成史莱姆这档事/index.html","bd584a594367ba7f6d1dcd3cde9f5447"],["/tags/函数式编程/index.html","dd68c8fbbc3b3f8bd05003740886e627"],["/tags/刺客信条/index.html","858bc8ec4b425f9cc5af9a16d948ac40"],["/tags/卖肉/index.html","84ccbd749efeb5a4d2dfaad2258e840f"],["/tags/博客/index.html","d90f20aea71a23ad90848af1ca48b3a3"],["/tags/去月球/index.html","233ac1ad3f510c193192541a0a8ba10f"],["/tags/可汗学院/index.html","597088230a139e38fdfc9544fb17cfa5"],["/tags/史诗/index.html","3b529f304c0ee6090f404c000a1a5681"],["/tags/吉卜力工作室/index.html","379978dd7d440843b3992939ad4705c7"],["/tags/名侦探柯南/index.html","7cd7729584aafbf7a7b40c4593bf5d38"],["/tags/后宫/index.html","51f8e583acf0197691b7109faf9c1dae"],["/tags/咒术回战/index.html","1b4a042013e417aeb3114e87c15ca064"],["/tags/哆啦A梦/index.html","9ba4c0d31452bdb16166b49ba8031ca9"],["/tags/哈利波特/index.html","5f875756bb0a4b19295d2349c826e93d"],["/tags/喜羊羊与灰太狼/index.html","16134cd3271d5d00c73b4a458ec24b68"],["/tags/四大名著/index.html","a0e4fbb5680ddd76e6904a94bc3897d8"],["/tags/图表/index.html","4fa2c85405f1c2ea58a4de58d0345b48"],["/tags/复变函数/index.html","16bc705db8822da713b9f9c3889a1e8e"],["/tags/孔乙己/index.html","e65179922be1cfe4fea1df257cf76869"],["/tags/字符串/index.html","ec04e3c08d093228e57eb95ba5bfb83b"],["/tags/学园默示录/index.html","7550ac8b56ad354adc590d39d9af4999"],["/tags/异世界/index.html","75d5d236f47791f2b8aa3139e438f8d1"],["/tags/微分方程/index.html","048dd19ffd87fe6629ce2191706b7a30"],["/tags/微积分/index.html","ee57fd1b3dab529b9323ee68b7168340"],["/tags/情感/index.html","07675e3fe6e94009850d638d233b00f0"],["/tags/指环王/index.html","da9c27abfe6caa26d1a5532c07b16fea"],["/tags/搞笑/index.html","2f24fb3221e61c00ddb882c7153c8309"],["/tags/教育/index.html","727eb10b0a2927da448db91306d9c8f0"],["/tags/数据结构/index.html","56094d5e82338c2dc468fe68e11a52bf"],["/tags/数据结构与算法/index.html","777e05b4b1f373ec3f6d0f4b54b139b2"],["/tags/文字排版/index.html","359e0dfb6a96c94183871b1f995fc362"],["/tags/文明VI/index.html","c663f17860f113f73a7c73c7d4a8027f"],["/tags/无彩限的怪灵世界/index.html","a2cc36be6892df3475a186b3831d909e"],["/tags/时间刺客/index.html","9a1990b7eb5b2ece81b44223ac242ef1"],["/tags/有生之年/index.html","865b7874b58380094b5f7db083acf46d"],["/tags/李商隐/index.html","3a276044eeb0f21f2cbb7296a8f82506"],["/tags/李白/index.html","c71a604fa43d5e13ca2adff6b98126d9"],["/tags/李贺/index.html","731d143b8d3c38a6e0f110877696a51b"],["/tags/杜甫/index.html","320370cb0b91efa47a68eb7394be26f9"],["/tags/概率论/index.html","9a9d4074dfeafec0bcd5f2c3c85af3ad"],["/tags/正则表达式/index.html","d175323c22d608cd3850a9c5587f32f7"],["/tags/治愈/index.html","50c338d01d78c8a657e470e0edcd591f"],["/tags/热血/index.html","4b061341fd3dc9fe96ba071fba97e3b2"],["/tags/爱国/index.html","31c0866fdcac5d05258673aafad0c0ab"],["/tags/版本管理/index.html","ca1b747ab175c86cd05205e85b25a8a5"],["/tags/玉子市场/index.html","6acf525c76871aad5e6204e8e07c38e5"],["/tags/玉子爱情故事/index.html","ae4747a89716cc123daed5d2d22c4570"],["/tags/王维/index.html","f0228a30f82edb71225d71bbdb4f17b6"],["/tags/现实/index.html","4cd1c8886470936bf250448efb776d28"],["/tags/甘城光辉游乐园/index.html","e61d5aca7cee96817d0887933d4a64e2"],["/tags/白居易/index.html","c457aac99910bada076cee89815d708c"],["/tags/离散数学/index.html","8bf42a152c7f0c96fbbbdc4ce16aebe6"],["/tags/种田流/index.html","f2a4d36cc925179c8edf4fcae8f6675f"],["/tags/童年/index.html","05ddf7156ac62b19e2abbec05a3c4a04"],["/tags/童话/index.html","dbde1d90d865ad1e13c5bccbd9854615"],["/tags/策略游戏/index.html","6f092dc0cc762b4796f52aee71b98fc8"],["/tags/紫罗兰永恒花园/index.html","cbdb581365ad2efd6d997404a7cb0faa"],["/tags/纯爱/index.html","e6d9945eb749d9ce67a2f3619ea28196"],["/tags/线性代数/index.html","30dd8ba128dd4024ddbdf5c1f8eb23ee"],["/tags/致郁/index.html","316562ee746350bb8053869722b2981e"],["/tags/苏轼/index.html","157be262f9dcea19b2e94340230238fb"],["/tags/计算机科学/index.html","c89828ed925f6c95d01f6061da1548c5"],["/tags/词中之龙/index.html","d62b5549d8da4e631a056796bcc40b69"],["/tags/诗仙/index.html","c7dc91058819be612a61880507a68bef"],["/tags/诗佛/index.html","6a2fd9da2ff6117f56846523b16abfca"],["/tags/诗圣/index.html","4412df3bd0d11bee06f1c234324c0985"],["/tags/诗词/index.html","10c3253f92b2f27b4eb2f81cd5a2d938"],["/tags/诗鬼/index.html","e9ec6f6340a9161d8aaf4c8b76dca5b9"],["/tags/读书/index.html","ec4396abd56f24b9ce7b581280b75223"],["/tags/豪放/index.html","ad141bfdd381bfd484500fdfcd1baf31"],["/tags/跳跃/index.html","b45aa304a47f7bb75033b22c135c2811"],["/tags/辛弃疾/index.html","5778f87fb9318b32e727496ff7a03312"],["/tags/钉宫/index.html","5fef63c3f4a80d936be8068f04521550"],["/tags/银河战士恶魔城/index.html","dea08dd996460d2ba22f5b7444571205"],["/tags/陆游/index.html","882579655b16a3e0a3525fde474dfa44"],["/tags/零之使魔/index.html","76f9df6baabd56c4443e08e6de6c5799"],["/tags/霍比特人/index.html","6c512f3b5d2f368bc8e8653ed6c62cdd"],["/tags/飞屋环游记/index.html","575aa7e946b894241c65178c5173d5b3"],["/tags/魔戒/index.html","f2d90ca9cea510be3eb31ab4a51e374f"],["/tags/魔法少女小圆/index.html","9189048205651802f373ab1978c7627c"],["/tags/鲁迅/index.html","7d94bd963185f3e9650b0a9d78baf6d3"]];
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
