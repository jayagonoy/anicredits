var AniCredits = angular.module('AniCredits', []);

AniCredits.controller('DisplayPanel', function ($scope) {
  $scope.events = [
	{'title': 'A Good Librarian Like a Good Shepherd','credit': '©AUGUST・白崎つぐみと迷える子羊たち'},
	{'title': 'Amagi Brilliant Park','credit': '© Kadokawa Corporation 2014'},
	{'title': 'Cardfight!! Vanguard G','credit': '©bushiroad All Rights Reserved.'},
	{'title': 'Celesital Method','credit': '©霧弥湖町観光協会'},
	{'title': 'Chaika the Coffin Princess: Avenging Battle','credit': '©2014 榊一郎・Nitroplus／ＫＡＤＯＫＡＷＡ 富士見書房刊／「棺姫のチャイカAB」製作委員会'},
	{'title': 'Cross Ange Rondo of Angel and Dragon','credit': '© SUNRISE/PROJECT ANGE'},
	{'title': 'Denki-gai no Honya-san','credit': '© 2014 水あさと／株式会社KADOKAWA メディアファクトリー刊／コミックうまのほね'},
	{'title': 'Fate/Stay Night: Unlimited Blade Works','credit': '©TYPE-MOON・ufotable・FSNPC　©TYPE-MOON'},
	{'title': 'Garo: The Carved Seal of Flame','credit': '©2014「炎の刻印」雨宮慶太／東北新社'},
	{'title': 'Girl Friend BETA','credit': 'Copyright © CyberAgent, Inc. All Rights Reserved.'},
	{'title': 'Gonna be the Twin-Tails!!','credit': '©水沢 夢・小学館／製作委員会はツインテールになります。 '},
	{'title': 'Gugure! Kokkuri-san','credit': '©遠藤ミドリ／スクウェアエニックス・「繰繰れ！コックリさん」製作委員会'},
	{'title': 'Gundam Build Fighters Try','credit': '©創通・サンライズ・テレビ東京'},
	{'title': 'Gundam: Reconguista in G','credit': '©創通・サンライズ・ＭＢＳ'},
	{'title': 'Hi☆sCoool! Sega Hard Girl','credit': '©SEGA/セハガガ学園理事会'},
	{'title': 'I Can\'t Understand What My Husband Is Saying','credit': '©クール教信者/一迅社・旦那が製作委員会2014'},
	{'title': 'Laughing Under the Clouds','credit': '© Karakara Kemuri / MAG Garden'},
	{'title': 'Log Horizon','credit': '©橙乃ままれ・KADOKAWA／NHK・NEP'},
	{'title': 'Lord Marksman and Vanadis','credit': '©2014 川口士・株式会社KADOKAWA メディアファクトリー刊／魔弾の王と戦姫製作委員会'},
	{'title': 'Magic Kaito 1412','credit': '©青山剛昌／小学館・読売テレビ・A-1 Pictures 2014'},
	{'title': 'Mushishi: The Next Chapter 2nd Season','credit': '©漆原友紀／講談社・アニプレックス'},
	{'title': 'Ohenro. Eighty-Eight Steps Chronicle','credit': '©ufotable'},
	{'title': 'Parasyte: Probability of Survival','credit': '© 岩明均／講談社・VAP・NTV・4cast'},
	{'title': 'Psycho-Pass','credit': '© PSYCHO-PASS Committee'},
	{'title': 'Rage of Bahamut: Genesis','credit': '© Cygames/MAPPA/BAHAMUT GENESIS'},
	{'title': 'Ronia the Robber\'s Daughter','credit': '©NHK・NEP・Dwango, licensed by Saltkrakan AB, The Astrid Lindgren Company'},
	{'title': 'Searching for the Lost Future','credit': '© Atelier Hi-Key/In Search of the Lost Future production committee'},
	{'title': 'Selector WIXOSS','credit': '©LRIG/Project Selector'},
	{'title': 'SHIROBAKO','credit': '©「SHIROBAKO」製作委員会'},
	{'title': 'Tenchi Muyo! Love','credit': '©梶島正樹／愛・天地無用！'},
	{'title': 'Terra Formars','credit': '©貴家悠・橘賢一／集英社・Project TERRAFORMARS'},
	{'title': 'The Circumstances in My Home\'s Bathtub','credit': '©2014いときち/株式会社KADOKAWA メディアファクトリー刊/オレフロ製作委員会'},
	{'title': 'The Fruit of Grisaia','credit': '©Frontwing/Project GRISAIA'},
	{'title': 'The Seven Deadly Sins','credit': '©鈴木央・講談社／「七つの大罪」製作委員会・MBS'},
	{'title': 'Trinity Seven','credit': '©サイトウケンジ・奈央晃徳／ＫＡＤＯＫＡＷＡ 富士見書房／トリニティセブン製作委員会'},
	{'title': 'When Supernatural Battles Became Commonplace','credit': '©2014　望 公太・ＳＢクリエイティブ／泉光高校文芸部'},
	{'title': 'Wolf Girl and Black Prince','credit': '©八田鮎子／集英社・「オオカミ少女と黒王子」製作委員会'},
	{'title': 'World Trigger','credit': '©葦原大介／集英社・テレビ朝日・東映アニメーション'},
	{'title': 'Yona of the Dawn','credit': '© Mizuho Kusanagi, Hakusensha/Akatsukino Yona Production Committee'},
	{'title': 'Your Lie in April','credit': '©新川直司・講談社／「四月は君の嘘」製作委員会'},
	{'title': 'Yowamushi Pedal: Grande Road','credit': '©渡辺航（週刊少年チャンピオン）／弱虫ペダル製作委員会'},
	{'title': 'Yuuna Yuuki is a Hero','credit': '©2014 Project 2H'},
	{'title': 'Abarenbō Rikishi!! Matsutarō','credit': '© Tetsuya Chiba/TV Asahi, Toei Animation © C/T, T'},
	{'title': 'Baby Steps','credit': '© Hikaru Katsuki, Kodansha/NHK, NEP'},
	{'title': 'Black Bullet','credit': '© 2013 Shiden Kanzaki/Kadokawa/ASCII Media Works/Black Bullet Production Committee'},
	{'title': 'Blade and Soul','credit': '© NCSoft, Blade & Soul Anime Production Committee'},
	{'title': 'Break Blade (TV)','credit': '© Yunosuke Yoshinaga, Flex Comix/Broken Blade Production Committee'},
	{'title': 'Brynhildr in the Darkness','credit': '© Lynn Okamoto/Shueisha, Brynhildr in the Darkness Production Committee'},
	{'title': 'Captain Earth','credit': '©BONES/CAPTAIN EARTH COMMITEE, MBS'},
	{'title': 'Chaika the Coffin Princess','credit': '© Ichiro Sakaki, Namaniku ATK (Nitroplus)'},
	{'title': 'Daimidaler the Sound Robot','credit': '©Asaki Nakama/ENTERBRAIN/PENGUIN EMPIRE'},
	{'title': 'Dai-Shogun - Great Revolution','credit': '©2014 Project-D'},
	{'title': 'Date A Live II','credit': '© 2013 Koushi Tachibana, Tsunako/Fujimi Shobo/Date A Live Production Committee'},
	{'title': 'Dragonar Academy','credit': '©2014 Shiki Mizuchi, PUBLISHED BY KADOKAWA CORPORATION MEDIAFACTORY/Dragonar Project'},
	{'title': 'Haikyuu!!','credit': '© Haruichi Furudate, Shueisha/Haikyuu!! Production Committee'},
	{'title': 'JoJo\'s Bizaare Adventure','credit': '©荒木飛呂彦/集英社・ジョジョの奇妙な冒険製作委員会'},
	{'title': 'Kamigami no Asobi','credit': 'Copyright (C) BROCCOLI'},
	{'title': 'Kindaichi Case Files Returns','credit': '© Seimaru Amagi, Fumiya Sato, Kodansha/YTV, Toei Animation'},
	{'title': 'La Corda d\'Oro -Blue Sky-','credit': '© Yuki Kure, Hakusensha, KOEI Co., Ltd./Corda Production Committee'},
	{'title': 'One Week Friends','credit': '©MATCHA HAZUKI/SQUARE ENIX'},
	{'title': 'Riddle Story of Devil (Akuma no Riddle)','credit': '©高河ゆん・南方純／ＫＡＤＯＫＡＷＡ刊／「悪魔のリドル」製作委員会'},
	{'title': 'The irregular at magic high school','credit': '© Tsutomu Satou / Kadokawa ASCII Media Works Publication / Mahōka Kōkō Production Committee'},
	{'title': 'The Kawai Complex Guide to Manors and Hostel Behavior','credit': '©宮原るり・少年画報社／委員会はみんな河合荘'},
	{'title': 'The World is Still Beautiful','credit': '© Dai Shiina, Hakusensha/Ooshitsu Kaihō Magazine Editorial Department'},
	{'title': 'Ai Mai Mi: Mousou Catastrophe','credit': '© Choboraunyopomi/Takeshobo'},
	{'title': 'Akame ga Kill!','credit': '© タカヒロ・田代哲也／スクウェアエニックス・「アカメが斬る！」製作委員会'},
	{'title': 'Aldnoah.Zero','credit': '© Olympus Knights/Aniplex, Project AZ'},
	{'title': 'Ao Haru Ride','credit': '© 2014 咲坂伊緒／集英社・「アオハライド」製作委員会'},
	{'title': 'Bakumatsu Rock','credit': '© 2014 Marvelous AQL'},
	{'title': 'Barakamon','credit': '©ヨシノサツキ／スクウェアエニックス・「ばらかもん」製作委員会'},
	{'title': 'DRAMAtical Murder','credit': '© Nitroplus／DRAMAtical Murder製作委員会'},
	{'title': 'Fate/kaleid liner Prisma☆Illya 2wei!','credit': '©2014 ひろやまひろし・TYPE-MOON／ＫＡＤＯＫＡＷＡ 角川書店刊／「プリズマ☆イリヤ ツヴァイ！」製作委員会'},
	{'title': 'Free! Eternal Summer','credit': '© Kōji Ōji, Kyoto Animation/Iwatobi High School Swimming Club'},
	{'title': 'Futsuu no Joshikousei ga [Locodol] Yatte Mita.','credit': '©小杉光太郎・一迅社／流川市ふるさと振興課'},
	{'title': 'Gekkan Shoujo Nozaki-kun','credit': '©椿いづみ／スクウェアエニックス・「月刊少女野崎くん」製作委員会'},
	{'title': 'Glasslip','credit': '© glasslip project'},
	{'title': 'Hanamonogatari','credit': '© NISIOISIN/KODANSHA, ANIPLEX, SHAFT'},
	{'title': 'Hanayamata','credit': '©浜弓場 双・芳文社／ハナヤマタ製作委員会'},
	{'title': 'Jinsei','credit': '©川岸殴魚・小学館／人生製作委員会'},
	{'title': 'Kuroshitsuji: Book of Circus','credit': '© 枢やな/スクウェアエニックス・黒執事Project・MBS'},
	{'title': 'Love Stage!!','credit': '©影木栄貴 蔵王大志'},
	{'title': 'Majimoji Rurumo','credit': '© Wataru Watanabe, Kodansha/Magimoji Rurumo Production Committee'},
	{'title': 'Minarai Diva','credit': '© 2014 mmbi,Inc.'},
	{'title': 'Momo Kyun Sword','credit': 'Copyright© Kibidango Project All Rights Reserved.'},
	{'title': 'Nobunaga Concerto','credit': '© 石井あゆみ・小学館／フジテレビジョン'},
	{'title': 'Persona 4 The Golden Animation','credit': 'Copyright (C)ATLUS (C)SEGA/P4GA Committee'},
	{'title': 'Pri Para','credit': '©Ｔ－ＡＲＴＳ / syn Sophia / テレビ東京 / PP製作委員会'},
	{'title': 'RAIL WARS!','credit': '©豊田 巧/創芸社・ProjectRW!'},
	{'title': 'Re:␣Hamatora','credit': '© Café Nowhere/Hamatora Production Committee'},
	{'title': 'Rokujouma no Shinryakusha!?','credit': '©健速・HobbyJAPAN／ころな荘管理組合'},
	{'title': 'Sabagebu!','credit': '© 松本ひで吉・講談社／「さばげぶっ！」製作委員会'},
	{'title': 'Seirei Tsukai no Blade Dance','credit': '©2014 志瑞祐・株式会社KADOKAWA メディアファクトリー刊／精霊使いの剣舞製作委員会'},
	{'title': 'Sengoku Basara: Judge End','credit': '© CAPCOM/BASARA JE'},
	{'title': 'Shirogane no Ishi: Argevollen','credit': '©AIOS/PROJECT ARGEVOLLEN'},
	{'title': 'Shounen Hollywood -Holly Stage for 49-','credit': '© King Records Co., Ltd. © Noel Japan Agency'},
	{'title': 'Space☆Dandy','credit': '© Project SPACE DANDY'},
	{'title': 'Sword Art Online','credit': '©2014 Reki Kawahara / KADOKAWA / ASCII Media Works / SAO II Project'},
	{'title': 'Tokyo ESP','credit': '©2014 瀬川はじめ／KADOKAWA角川書店刊／[東京ESP]製作委員会'},
	{'title': 'Tokyo Ghoul','credit': '©石田スイ／集英社・東京喰種製作委員会'},
	{'title': 'Yama no Susume','credit': '©しろ / アース・スター エンターテイメント'},
	{'title': 'Zankyou no Terror','credit': '©残響のテロル製作委員会 _このホームページに掲載されている一切の文書・図版・写真等を、手段や形態を問わず複製、転載することを禁じます'},
	{'title': 'Kyoukai no Kanata','credit': '© Kyoto Animation'},
	{'title': 'Yuru Yuri','credit': '© Ichijinsha / Dogakobo'},
	{'title': 'Yuru Yuri 3','credit': '© Ichijinsha / TYO Animations'},
	{'title': 'CLANNAD','credit': '© key/Visual Art\'s'},
	{'title': 'Tamako Market','credit': '© Kyoto Animation'},
	{'title': 'Buddy Complex','credit': '©SUNRISE/BUDDY COMPLEX COMMITTEE'},
	{'title': 'Chuunibyou demo Koi ga Shitai!','credit': '© 虎虎／京都アニメーション／中二病でも製作委員会'},
	{'title': 'D-Frag!','credit': '© Tomoya Haruno/PUBLISHED BY KADOKAWA CORPORATION MEDIAFACTORY/D-Fragments Project'},
	{'title': 'Future Card Buddyfight','credit': '© 相棒学園／テレビ愛知'},
	{'title': 'Gin no Saji','credit': '© 荒川弘・小学館／エゾノー祭実行委員会'},
	{'title': 'HappinessCharge Precure!','credit': '©ABC・東映アニメーション'},
	{'title': 'Hamatora','credit': '© カフェノーウェア/ハマトラ製作委員会'},
	{'title': 'Inari, Kon Kon, Koi Iroha','credit': '© 2014 よしだもろへ／KADOKAWA 角川書店刊／いなり製作委員会 / © 京都府 まゆまろ 13176 / © 2013 City of Kyoto. All rights reserved.'},
	{'title': 'Magical Warfare','credit': '© スズキヒサシ／株式会社KADOKAWA　メディアファクトリー刊／すばる魔法学院'},
	{'title': 'Maken-ki Two','credit': '© 2013 Hiromitsu Takeda/PUBLISHED BY KADOKAWA Fujimishobo/MAKEN-KI TWO Partners'},
	{'title': 'Mikakunin DE Shinkoukei','credit': '© 荒井チェリー／一迅社・未確認で進行形製作委員会'},
	{'title': 'Nisekoi','credit': '© 古味直志／集英社・アニプレックス・シャフト・ＭＢＳ'},
	{'title': 'Nobunaga the Fool','credit': '© 河森正治・サテライト／ALC／GP／ノブナガ・ザ・フール製作委員会'},
	{'title': 'Nobunagun','credit': '© 久正人 ／アース・スター エンターテイメント・「ノブナガン製作委員会」'},
	{'title': 'Noragami','credit': '© Adachitoka/Kodansha/Noragami Production Committee'},
	{'title': 'No-rin','credit': '© 2014 白鳥士郎・SBクリエイティブ／のうりんプロジェクト'},
	{'title': 'Saikin, Imouto no Yousu ga Chotto Okashiinda ga.','credit': '© Mari Matsuzawa, Kadokawa Fujimi Shobo/ImoCho. Production Committee'},
	{'title': 'Saki: Zenkoku-hen','credit': '© 小林 立/スクウェアエニックス・咲全国編製作委員会'},	
	{'title': 'K-On!','credit': '© Houbunsha / Kyoto Animation'}
  ];
  $scope.title = "World";
});
