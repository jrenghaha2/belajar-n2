/* ================= DATA (dipertahankan dari versi sebelumnya) ================= */






/* ===== Pengayaan Kanji: on/kun + kata turunan ===== */
const KDETAIL = {
  k1:{c:'曖 あい / 昧 まい', w:[['曖昧な態度','あいまいなたいど','sikap yang samar'],['曖昧にする','あいまいにする','menyamarkan sesuatu']]},
  k2:{c:'複 ふく / 雑 ざつ', w:[['複数','ふくすう','jamak'],['雑誌','ざっし','majalah'],['複雑化','ふくざつか','menjadi rumit']]},
  k3:{c:'妥 だ / 協 きょう', w:[['協力','きょうりょく','kerja sama'],['協定','きょうてい','persetujuan resmi'],['妥結','だけつ','sepakat setelah negosiasi']]},
  k4:{c:'貢 こう / 献 けん', w:[['献立','こんだて','menu masakan'],['貢献度','こうけんど','tingkat kontribusi']]},
  k5:{c:'余 よ / 裕 ゆう', w:[['余る','あまる','bersisa'],['余計','よけい','berlebihan'],['余分','よぶん','cadangan']]},
  k6:{c:'矛 む / 盾 じゅん', w:[['盾になる','たてになる','menjadi tameng'],['矛先','ほこさき','arah serangan/kritik']]},
  k7:{c:'把 は / 握 あく', w:[['握手','あくしゅ','jabat tangan'],['握る','にぎる','menggenggam']]},
  k8:{c:'犠 ぎ / 牲 せい', w:[['犠牲者','ぎせいしゃ','korban'],['犠牲になる','ぎせいになる','menjadi korban']]},
  k9:{c:'詳 しょう / 細 さい', w:[['詳しい','くわしい','rinci'],['細かい','こまかい','detail, halus'],['詳説','しょうせつ','penjelasan rinci']]},
  k10:{c:'検 けん / 討 とう', w:[['検査','けんさ','pemeriksaan'],['討論','とうろん','debat'],['検索','けんさく','pencarian']]},
  k11:{c:'徹 てつ / 底 てい', w:[['徹夜','てつや','begadang'],['底','そこ','dasar'],['徹する','てっする','mendedikasikan diri']]},
  k12:{c:'緊 きん / 張 ちょう', w:[['緊急','きんきゅう','darurat'],['張る','はる','meregang'],['引っ張る','ひっぱる','menarik']]},
  k13:{c:'頻 ひん / 繁 はん', w:[['頻度','ひんど','frekuensi'],['繁栄','はんえい','kemakmuran'],['頻繁に','ひんぱんに','secara sering']]},
  k14:{c:'誇 こ / 張 ちょう', w:[['誇る','ほこる','membanggakan'],['誇大','こだい','berlebihan (skala)']]},
  k15:{c:'詐 さ / 欺 ぎ', w:[['欺く','あざむく','menipu'],['詐取','さしゅ','penipuan (perampasan)']]},
  k16:{c:'脅 きょう / 威 い', w:[['脅す','おどす','mengancam'],['威厳','いげん','wibawa'],['脅迫','きょうはく','intimidasi']]},
  k17:{c:'迅 じん / 速 そく', w:[['速い','はやい','cepat'],['速度','そくど','kecepatan'],['速達','そくたつ','surat kilat']]},
  k18:{c:'勤 きん / 勉 べん', w:[['勤める','つとめる','bekerja'],['勉強','べんきょう','belajar'],['通勤','つうきん','perjalanan kerja']]},
  k19:{c:'謙 けん / 虚 きょ', w:[['謙譲','けんじょう','merendahkan diri (formal)'],['虚しい','むなしい','hampa']]},
  k20:{c:'傲 ごう / 慢 まん', w:[['自慢','じまん','pamer'],['慢心','まんしん','terlalu percaya diri']]},
  k21:{c:'寛 かん / 容 よう', w:[['寛ぐ','くつろぐ','bersantai'],['容認','ようにん','mengizinkan'],['内容','ないよう','isi']]},
  k22:{c:'敏 びん / 感 かん', w:[['感じる','かんじる','merasakan'],['感謝','かんしゃ','terima kasih'],['感動','かんどう','terharu']]},
  k23:{c:'柔 じゅう / 軟 なん', w:[['柔らかい','やわらかい','lembut'],['柔道','じゅうどう','judo'],['軟化','なんか','melunak']]},
  k24:{c:'頑 がん / 固 こ', w:[['頑張る','がんばる','berusaha keras'],['固い','かたい','keras'],['頑丈','がんじょう','kokoh']]},
  k25:{c:'残 ざん / 酷 こく', w:[['残る','のこる','tersisa'],['残念','ざんねん','sayang sekali'],['酷い','ひどい','kejam, parah']]},
  k26:{c:'節 せつ / 約 やく', w:[['約束','やくそく','janji'],['季節','きせつ','musim'],['予約','よやく','reservasi']]},
  k27:{c:'浪 ろう / 費 ひ', w:[['費用','ひよう','biaya'],['消費','しょうひ','konsumsi'],['浪費家','ろうひか','pemboros']]},
  k28:{c:'収 しゅう / 穫 かく', w:[['収入','しゅうにゅう','pemasukan'],['収める','おさめる','mendapatkan'],['獲得','かくとく','memperoleh']]},
  k29:{c:'推 すい / 薦 せん', w:[['推測','すいそく','dugaan'],['推薦状','すいせんじょう','surat rekomendasi'],['推す','おす','merekomendasikan']]},
  k30:{c:'採 さい / 用 よう', w:[['採る','とる','mengambil'],['利用','りよう','pemanfaatan'],['採点','さいてん','menilai ujian']]},
  k31:{c:'解 かい / 雇 こ', w:[['解約','かいやく','pembatalan kontrak'],['雇う','やとう','mempekerjakan'],['雇用','こよう','pekerjaan']]},
  k32:{c:'交 こう / 渉 しょう', w:[['交換','こうかん','pertukaran'],['交通','こうつう','lalu lintas'],['渉外','しょうがい','hubungan luar (humas)']]},
  k33:{c:'契 けい / 約 やく', w:[['契約書','けいやくしょ','dokumen kontrak'],['予約','よやく','reservasi'],['公約','こうやく','janji publik']]},
  k34:{c:'違 い / 反 はん', w:[['違う','ちがう','berbeda / salah'],['反対','はんたい','menentang'],['違法','いほう','ilegal']]},
  k35:{c:'罰 ばつ / 金 きん', w:[['罰する','ばっする','menghukum'],['金額','きんがく','jumlah uang'],['料金','りょうきん','biaya']]},
  k36:{c:'保 ほ / 証 しょう', w:[['保険','ほけん','asuransi'],['証明','しょうめい','pembuktian'],['保証人','ほしょうにん','penjamin']]},
  k37:{c:'貯 ちょ / 金 きん', w:[['貯める','ためる','menabung'],['貯蓄','ちょちく','tabungan'],['金庫','きんこ','brankas']]},
  k38:{c:'投 とう / 資 し', w:[['投げる','なげる','melempar'],['資金','しきん','dana'],['投資家','とうしか','investor']]},
  k39:{c:'噂 うわさ（訓読み）', w:[['噂話','うわさばなし','gosip'],['風評','ふうひょう','rumor yang merugikan']]},
  k40:{c:'勧 かん / 誘 ゆう', w:[['勧める','すすめる','menyarankan'],['誘う','さそう','mengajak'],['誘導','ゆうどう','pengarahan']]},
  k41:{c:'従 じゅう / 事 じ', w:[['従う','したがう','mengikuti'],['仕事','しごと','pekerjaan'],['従業員','じゅうぎょういん','karyawan']]},
  k42:{c:'展 てん / 示 じ', w:[['展覧会','てんらんかい','pameran'],['示す','しめす','menunjukkan'],['展示会','てんじかい','pameran']]},
  k43:{c:'診 しん / 察 さつ', w:[['診断','しんだん','diagnosis'],['観察','かんさつ','observasi'],['警察','けいさつ','polisi']]},
  k44:{c:'処 しょ / 方 ほう / 箋 せん', w:[['処置','しょち','tindakan'],['方法','ほうほう','metode'],['便箋','びんせん','kertas surat']]},
  k45:{c:'回 かい / 復 ふく', w:[['回る','まわる','berputar'],['復習','ふくしゅう','mengulang pelajaran'],['回復期','かいふくき','masa pemulihan']]},
  k46:{c:'予 よ / 防 ぼう', w:[['予約','よやく','reservasi'],['防ぐ','ふせぐ','mencegah'],['予防接種','よぼうせっしゅ','vaksinasi']]},
  k47:{c:'感 かん / 染 せん', w:[['感じる','かんじる','merasakan'],['染まる','そまる','terwarnai / tercemar'],['感染症','かんせんしょう','penyakit menular']]},
  k48:{c:'症 しょう / 状 じょう', w:[['状況','じょうきょう','keadaan'],['状態','じょうたい','kondisi'],['重症','じゅうしょう','kondisi parah']]},
  k49:{c:'手 しゅ / 術 じゅつ', w:[['手伝う','てつだう','membantu'],['技術','ぎじゅつ','teknologi'],['術後','じゅつご','pascaoperasi']]},
  k50:{c:'麻 ま / 酔 すい', w:[['麻痺','まひ','kelumpuhan'],['酔う','よう','mabuk'],['全身麻酔','ぜんしんますい','bius total']]},
  k51:{c:'遺 い / 伝 でん', w:[['伝える','つたえる','menyampaikan'],['遺伝子','いでんし','gen'],['伝統','でんとう','tradisi']]},
  k52:{c:'分 ぶん / 析 せき', w:[['分かれる','わかれる','terbagi'],['分析結果','ぶんせきけっか','hasil analisis'],['部分','ぶぶん','bagian']]},
  k53:{c:'評 ひょう / 価 か', w:[['評判','ひょうばん','reputasi'],['価格','かかく','harga'],['高評価','こうひょうか','penilaian tinggi']]},
  k54:{c:'診 しん / 断 だん', w:[['断る','ことわる','menolak'],['判断','はんだん','penilaian'],['診断書','しんだんしょ','surat diagnosis']]},
  k55:{c:'治 ち / 療 りょう', w:[['治る','なおる','sembuh'],['治める','おさめる','memerintah'],['療養','りょうよう','perawatan pemulihan']]},
  k56:{c:'設 せつ / 備 び', w:[['設立','せつりつ','pendirian'],['備える','そなえる','mempersiapkan'],['準備','じゅんび','persiapan']]},
  k57:{c:'維 い / 持 じ', w:[['持つ','もつ','memegang'],['維持費','いじひ','biaya pemeliharaan'],['支持','しじ','dukungan']]},
  k58:{c:'改 かい / 善 ぜん', w:[['改める','あらためる','memperbaiki'],['改善点','かいぜんてん','poin perbaikan'],['改善する','かいぜんする','memperbaiki']]},
  k59:{c:'悪 あく / 化 か', w:[['悪い','わるい','buruk'],['化ける','ばける','berubah wujud'],['変化','へんか','perubahan']]},
  k60:{c:'拡 かく / 大 だい', w:[['拡張','かくちょう','ekspansi'],['大切','たいせつ','penting'],['拡大鏡','かくだいきょう','kaca pembesar']]},
  k61:{c:'縮 しゅく / 小 しょう', w:[['縮む','ちぢむ','menyusut'],['小さい','ちいさい','kecil'],['縮小版','しゅくしょうばん','versi mini']]},
  k62:{c:'供 きょう / 給 きゅう', w:[['提供','ていきょう','penyediaan'],['給料','きゅうりょう','gaji'],['子供','こども','anak']]},
  k63:{c:'需 じゅ / 要 よう', w:[['必要','ひつよう','perlu'],['要求','ようきゅう','tuntutan'],['要る','いる','membutuhkan']]},
  k64:{c:'消 しょう / 費 ひ', w:[['消える','きえる','hilang'],['消費者','しょうひしゃ','konsumen'],['費用','ひよう','biaya']]},
  k65:{c:'生 せい / 産 さん', w:[['生まれる','うまれる','lahir'],['産業','さんぎょう','industri'],['生産者','せいさんしゃ','produsen']]},
  k66:{c:'輸 ゆ / 出 しゅつ', w:[['輸送','ゆそう','transportasi'],['出る','でる','keluar'],['輸出品','ゆしゅつひん','barang ekspor']]},
  k67:{c:'輸 ゆ / 入 にゅう', w:[['入る','はいる','masuk'],['輸入品','ゆにゅうひん','barang impor'],['入学','にゅうがく','masuk sekolah']]},
  k68:{c:'破 は / 産 さん', w:[['破る','やぶる','merobek'],['破壊','はかい','kehancuran'],['倒産','とうさん','kebangkrutan perusahaan']]},
  k69:{c:'繁 はん / 栄 えい', w:[['栄える','さかえる','makmur'],['繁華街','はんかがい','pusat keramaian'],['栄光','えいこう','kejayaan']]},
  k70:{c:'衰 すい / 退 たい', w:[['衰える','おとろえる','melemah'],['退く','しりぞく','mundur'],['退院','たいいん','keluar dari RS']]},
  k71:{c:'義 ぎ / 務 む', w:[['義母','ぎぼ','ibu mertua'],['事務','じむ','administrasi'],['義務教育','ぎむきょういく','wajib belajar']]},
  k72:{c:'権 けん / 利 り', w:[['権力','けんりょく','kekuasaan'],['利益','りえき','keuntungan'],['利用','りよう','pemanfaatan']]},
  k73:{c:'責 せき / 任 にん', w:[['責める','せめる','menyalahkan'],['任せる','まかせる','menyerahkan'],['責任者','せきにんしゃ','penanggung jawab']]},
  k74:{c:'課 か / 題 だい', w:[['課長','かちょう','kepala bagian'],['問題','もんだい','masalah / soal'],['話題','わだい','topik']]},
  k75:{c:'処 しょ / 分 ぶん', w:[['処置','しょち','tindakan'],['分ける','わける','membagi'],['処分する','しょぶんする','membuang / menghukum']]},
  k76:{c:'摩 ま / 擦 さつ', w:[['摩耗','まもう','keausan'],['摩擦係数','まさつけいすう','koefisien gesekan'],['摩擦音','まさつおん','bunyi gesekan']]},
  k77:{c:'絶 ぜつ / 望 ぼう', w:[['絶える','たえる','terputus'],['望む','のぞむ','berharap'],['絶望的','ぜつぼうてき','tanpa harapan']]},
  k78:{c:'訂 てい / 正 せい', w:[['正しい','ただしい','benar'],['訂正版','ていせいばん','edisi revisi'],['修正','しゅうせい','koreksi']]},
  k79:{c:'履 り / 歴 れき', w:[['履く','はく','memakai (kaki)'],['歴史','れきし','sejarah'],['履歴書','りれきしょ','CV']]},
  k80:{c:'曇 どん / 天 てん', w:[['曇る','くもる','mendung'],['天気','てんき','cuaca'],['曇り空','くもりぞら','langit mendung']]},
  k81:{c:'偶 ぐう / 然 ぜん', w:[['偶像','ぐうぞう','idola'],['自然','しぜん','alam'],['偶然に','ぐうぜんに','secara kebetulan']]},
  k82:{c:'突 とつ / 然 ぜん', w:[['突っ込む','つっこむ','menyelidiki / meluruskan'],['突然に','とつぜんに','tiba-tiba'],['突進','とっしん','serbuan']]},
  k83:{c:'必 ひつ / 然 ぜん', w:[['必要','ひつよう','perlu'],['必然的','ひつぜんてき','niscaya'],['必然性','ひつぜんせい','keniscayaan']]},
  k84:{c:'妥 だ / 当 とう', w:[['妥協','だきょう','kompromi'],['当たる','あたる','kena / tepat'],['本当','ほんとう','benar']]},
  k85:{c:'漠 ばく / 然 ぜん', w:[['砂漠','さばく','gurun'],['漠然と','ばくぜんと','secara samar'],['当然','とうぜん','wajar']]},
  k86:{c:'明 めい / 白 はく', w:[['明るい','あかるい','cerah'],['白い','しろい','putih'],['説明','せつめい','penjelasan']]},
  k87:{c:'鮮 せん / 明 めい', w:[['新鮮','しんせん','segar'],['鮮やか','あざやか','cemerlang'],['明確','めいかく','jelas']]},
  k88:{c:'顕 けん / 著 ちょ', w:[['著しい','いちじるしい','signifikan'],['著者','ちょしゃ','penulis'],['顕在','けんざい','nyata']]},
  k89:{c:'微 び / 妙 みょう', w:[['微笑','びしょう','senyum tipis'],['妙','みょう','aneh / janggal'],['微妙な','びみょうな','tipis / halus']]},
  k90:{c:'膨 ぼう / 大 だい', w:[['膨らむ','ふくらむ','mengembang'],['膨張','ぼうちょう','ekspansi'],['大量','たいりょう','jumlah besar']]},
  k91:{c:'些 さ / 細 さい', w:[['細かい','こまかい','halus / rinci'],['細い','ほそい','ramping'],['些細な','ささいな','sepele']]},
  k92:{c:'重 じゅう / 大 だい', w:[['重い','おもい','berat'],['重大な','じゅうだいな','serius'],['大事','だいじ','penting']]},
  k93:{c:'緊 きん / 急 きゅう', w:[['緊張','きんちょう','tegang'],['急ぐ','いそぐ','buru-buru'],['緊急事態','きんきゅうじたい','keadaan darurat']]},
  k94:{c:'企 き / 画 かく', w:[['企てる','くわだてる','merencanakan'],['計画','けいかく','rencana'],['企画書','きかくしょ','proposal']]},
  k95:{c:'運 うん / 営 えい', w:[['運ぶ','はこぶ','mengangkut'],['営業','えいぎょう','bisnis'],['運営者','うんえいしゃ','operator']]},
  k96:{c:'経 けい / 営 えい', w:[['経済','けいざい','ekonomi'],['経験','けいけん','pengalaman'],['経営者','けいえいしゃ','pengusaha']]},
  k97:{c:'利 り / 益 えき', w:[['利用','りよう','pemanfaatan'],['有益','ゆうえき','bermanfaat'],['利益率','りえきりつ','margin keuntungan']]},
  k98:{c:'損 そん / 失 しつ', w:[['損する','そんする','rugi'],['失う','うしなう','kehilangan'],['失敗','しっぱい','kegagalan']]},
  k99:{c:'売 ばい / 上 じょう', w:[['売る','うる','menjual'],['売店','ばいてん','kios'],['売上高','うりあげだか','omzet']]},
  k100:{c:'宣 せん / 伝 でん', w:[['宣言','せんげん','deklarasi'],['伝える','つたえる','menyampaikan'],['宣伝文句','せんでんもんく','slogan promosi']]},
  k101:{c:'広 こう / 告 こく', w:[['広い','ひろい','luas'],['報告','ほうこく','laporan'],['広告主','こうこくぬし','pengiklan']]},
  k102:{c:'動 どう / 機 き', w:[['動く','うごく','bergerak'],['機械','きかい','mesin'],['機会','きかい','kesempatan']]},
  k103:{c:'衝 しょう / 動 どう', w:[['衝突','しょうとつ','tabrakan'],['衝動的','しょうどうてき','impulsif'],['感動','かんどう','terharu']]},
  k104:{c:'忍 にん / 耐 たい', w:[['忍ぶ','しのぶ','menahan diri / menyelinap'],['耐える','たえる','bertahan'],['忍耐力','にんたいりょく','daya tahan']]},
  k105:{c:'挑 ちょう / 戦 せん', w:[['挑む','いどむ','menantang'],['戦う','たたかう','bertarung'],['試合','しあい','pertandingan']]},
  k106:{c:'達 たっ / 成 せい', w:[['達する','たっする','mencapai'],['成る','なる','menjadi'],['成功','せいこう','sukses']]},
  k107:{c:'挫 ざ / 折 せつ', w:[['折れる','おれる','patah'],['折り返し','おりかえし','titik balik'],['挫折感','ざせつかん','rasa gagal']]},
  k108:{c:'克 こく / 服 ふく', w:[['服','ふく','pakaian'],['服従','ふくじゅう','kepatuhan'],['克明','こくめい','teliti']]},
  k109:{c:'警 けい / 戒 かい', w:[['警察','けいさつ','polisi'],['警報','けいほう','alarm'],['戒める','いましめる','menasihati']]},
  k110:{c:'回 かい / 避 ひ', w:[['避ける','さける','menghindari'],['回す','まわす','memutar'],['避難','ひなん','evakuasi']]},
  k111:{c:'対 たい / 策 さく', w:[['対する','たいする','terhadap'],['政策','せいさく','kebijakan'],['対応','たいおう','tanggapan']]},
  k112:{c:'防 ぼう / 止 し', w:[['防ぐ','ふせぐ','mencegah'],['止める','とめる','menghentikan'],['予防','よぼう','pencegahan']]},
  k113:{c:'発 はっ / 生 せい', w:[['発つ','たつ','berangkat'],['生きる','いきる','hidup'],['発見','はっけん','penemuan']]},
  k114:{c:'解 かい / 決 けつ', w:[['解く','とく','memecahkan'],['決める','きめる','memutuskan'],['理解','りかい','pemahaman']]},
  k115:{c:'処 しょ / 理 り', w:[['理由','りゆう','alasan'],['整理','せいり','merapikan'],['理論','りろん','teori']]},
  k116:{c:'保 ほ / 存 ぞん', w:[['保つ','たもつ','menjaga'],['存在','そんざい','eksistensi'],['保管','ほかん','penyimpanan']]},
  k117:{c:'削 さく / 除 じょ', w:[['削る','けずる','memangkas'],['除く','のぞく','menghapuskan'],['削減','さくげん','pemotongan']]},
  k118:{c:'登 とう / 録 ろく', w:[['登る','のぼる','mendaki'],['記録','きろく','rekor / catatan'],['登場','とうじょう','kemunculan']]},
  k119:{c:'接 せつ / 続 ぞく', w:[['接する','せっする','bersentuhan'],['続く','つづく','berlanjut'],['直接','ちょくせつ','langsung']]},
  k120:{c:'検 けん / 索 さく', w:[['検査','けんさ','pemeriksaan'],['索引','さくいん','indeks'],['検討','けんとう','pertimbangan']]},
  k121:{c:'改 かい / 札 さつ', w:[['札','ふだ','kartu / label'],['名札','なふだ','name tag'],['改札口','かいさつぐち','pintu loket tiket']]},
  k241:{c:'地 ち / 震 しん', w:[['地面','じめん','permukaan tanah'],['震える','ふるえる','bergetar'],['震度','しんど','skala gempa (JMA)']]},
  k122:{c:'切 せつ / 符 ふ', w:[['切る','きる','memotong'],['符号','ふごう','tanda / kode'],['切手','きって','prangko']]},
  k123:{c:'往 おう / 復 ふく', w:[['往く','ゆく','pergi (formal)'],['復習','ふくしゅう','mengulang pelajaran'],['復旧','ふっきゅう','pemulihan infrastruktur']]},
  k124:{c:'片 かた / 道 どう', w:[['片方','かたほう','salah satu sisi'],['道','みち','jalan'],['片付ける','かたづける','merapikan']]},
  k126:{c:'到 とう / 着 ちゃく', w:[['着く','つく','tiba'],['到達','とうたつ','pencapaian'],['着席','ちゃくせき','duduk (formal)']]},
  k127:{c:'満 まん / 員 いん', w:[['満ちる','みちる','penuh'],['店員','てんいん','pramuniaga'],['満足','まんぞく','puas']]},
  k129:{c:'駐 ちゅう / 車 しゃ', w:[['車','くるま','mobil'],['駐車場','ちゅうしゃじょう','tempat parkir'],['駐在','ちゅうざい','penempatan luar negeri']]},
  k130:{c:'信 しん / 号 ごう', w:[['信じる','しんじる','percaya'],['番号','ばんごう','nomor'],['信号機','しんごうき','lampu lalu lintas']]},
  k140:{c:'遅 ち / 刻 こく', w:[['遅い','おそい','lambat'],['時刻','じこく','waktu'],['深刻','しんこく','serius']]},
  k141:{c:'欠 けつ / 席 せき', w:[['欠ける','かける','kurang'],['席','せき','kursi'],['出席','しゅっせき','hadir']]},
  k142:{c:'出 しゅつ / 席 せき', w:[['出る','でる','keluar'],['座席','ざせき','kursi duduk'],['欠席','けっせき','tidak hadir']]},
  k144:{c:'宿 しゅく / 題 だい', w:[['宿','やど','penginapan'],['旅館','りょかん','penginapan Jepang'],['話題','わだい','topik']]},
  k145:{c:'提 てい / 出 しゅつ', w:[['提供','ていきょう','penyediaan'],['提案','ていあん','usulan'],['提示','ていじ','penyajian']]},
  k149:{c:'合 ごう / 格 かく', w:[['合う','あう','cocok'],['合格点','ごうかくてん','nilai lulus'],['価格','かかく','harga']]},
  k152:{c:'卒 そつ / 業 ぎょう', w:[['卒業式','そつぎょうしき','wisuda'],['業務','ぎょうむ','tugas dinas'],['授業','じゅぎょう','pelajaran']]},
  k146:{c:'準 じゅん / 備 び', w:[['基準','きじゅん','standar'],['備える','そなえる','menyiapkan'],['準備中','じゅんびちゅう','sedang disiapkan']]},
  k274:{c:'情 じょう / 報 ほう', w:[['感情','かんじょう','emosi'],['報告','ほうこく','laporan'],['情報源','じょうほうげん','sumber informasi']]},
  k271:{c:'連 れん / 絡 らく', w:[['連れる','つれる','membawa'],['絡む','からむ','terlibat'],['連絡先','れんらくさき','kontak']]},
  k269:{c:'説 せつ / 明 めい', w:[['説く','とく','menjelaskan'],['小説','しょうせつ','novel'],['説明書','せつめいしょ','manual']]},
  k304:{c:'管 かん / 理 り', w:[['管','くだ','pipa'],['理解','りかい','pemahaman'],['管理人','かんりにん','pengelola']]},
  k307:{c:'担 たん / 当 とう', w:[['担ぐ','かつぐ','memanggul'],['本当','ほんとう','benar'],['担当者','たんとうしゃ','penanggung jawab']]},
  k314:{c:'資 し / 料 りょう', w:[['資金','しきん','dana'],['料金','りょうきん','biaya'],['材料','ざいりょう','bahan']]},
  k322:{c:'販 はん / 売 ばい', w:[['売る','うる','menjual'],['販売員','はんばいいん','pramuniaga'],['通販','つうはん','belanja online']]},
  k329:{c:'品 ひん / 質 しつ', w:[['品','しな','barang'],['品物','しなもの','barang dagangan'],['質問','しつもん','pertanyaan']]},
  k334:{c:'予 よ / 算 さん', w:[['予約','よやく','reservasi'],['計算','けいさん','perhitungan'],['予定','よてい','rencana']]},
  k345:{c:'雇 こ / 用 よう', w:[['雇う','やとう','mempekerjakan'],['使用','しよう','penggunaan'],['採用','さいよう','penerimaan']]},
  k351:{c:'建 けん / 設 せつ', w:[['建てる','たてる','membangun'],['建物','たてもの','gedung'],['設立','せつりつ','pendirian']]},
  k430:{c:'環 かん / 境 きょう', w:[['境','さかい','batas'],['環状線','かんじょうせん','jalur lingkar'],['国境','こっきょう','perbatasan']]},
  k411:{c:'統 とう / 計 けい', w:[['統一','とういつ','penyeragaman'],['計る','はかる','mengukur'],['合計','ごうけい','total']]},
  k421:{c:'構 こう / 造 ぞう', w:[['構う','かまう','mempedulikan'],['造る','つくる','membuat'],['創造','そうぞう','kreasi']]},
  k422:{c:'組 そ / 織 しき', w:[['組む','くむ','merangkai'],['組み合わせ','くみあわせ','kombinasi'],['編む','あむ','merajut']]},
  k424:{c:'基 き / 準 じゅん', w:[['基礎','きそ','dasar'],['基づく','もとづく','berdasarkan'],['準備','じゅんび','persiapan']]},
  k427:{c:'範 はん / 囲 い', w:[['囲む','かこむ','mengelilingi'],['範囲内','はんいない','dalam jangkauan'],['雰囲気','ふんいき','suasana']]},
  k437:{c:'保 ほ / 護 ご', w:[['保つ','たもつ','menjaga'],['保険','ほけん','asuransi'],['弁護士','べんごし','pengacara']]},
  k442:{c:'細 さい / 胞 ぼう', w:[['細かい','こまかい','rinci'],['細い','ほそい','ramping'],['胞子','ほうし','spora']]},
  k445:{c:'神 しん / 経 けい', w:[['神','かみ','Tuhan / dewa'],['神社','じんじゃ','kuil Shinto'],['経験','けいけん','pengalaman']]},
  k460:{c:'記 き / 憶 おく', w:[['記事','きじ','artikel'],['記入','きにゅう','pengisian'],['記憶力','きおくりょく','daya ingat']]},
  k467:{c:'出 しゅつ / 版 はん', w:[['出版社','しゅっぱんしゃ','penerbit'],['版権','はんけん','hak cipta'],['看板','かんばん','papan nama']]},
  k470:{c:'編 へん / 集 しゅう', w:[['編む','あむ','merajut'],['集める','あつめる','mengumpulkan'],['編集者','へんしゅうしゃ','editor']]},
  k485:{c:'定 てい / 義 ぎ', w:[['定める','さだめる','menetapkan'],['決定','けってい','keputusan'],['義務','ぎむ','kewajiban']]},
  k487:{c:'結 けつ / 論 ろん', w:[['結ぶ','むすぶ','mengikat'],['結果','けっか','hasil'],['議論','ぎろん','perdebatan']]},
  k489:{c:'段 だん / 階 かい', w:[['階段','かいだん','tangga'],['手段','しゅだん','cara'],['段々','だんだん','perlahan']]},
  k496:{c:'方 ほう / 針 しん', w:[['方','かた','arah / orang (sopan)'],['針','はり','jarum'],['方針転換','ほうしんてんかん','perubahan arah']]},
  k507:{c:'実 じつ / 施 し', w:[['実は','じつは','sebenarnya'],['施設','しせつ','fasilitas'],['実験','じっけん','eksperimen']]},
  k511:{c:'強 きょう / 化 か', w:[['強い','つよい','kuat'],['勉強','べんきょう','belajar'],['変化','へんか','perubahan']]},
  k516:{c:'削 さく / 減 げん', w:[['削る','けずる','memangkas'],['減る','へる','berkurang'],['減少','げんしょう','penurunan']]},
  k525:{c:'配 はい / 置 ち', w:[['配る','くばる','membagikan'],['置く','おく','meletakkan'],['心配','しんぱい','khawatir']]},
  k526:{c:'展 てん / 開 かい', w:[['展示','てんじ','pameran'],['開く','ひらく','membuka'],['発展','はってん','perkembangan']]},
  k532:{c:'指 し / 導 どう', w:[['指','ゆび','jari'],['導く','みちびく','membimbing'],['指摘','してき','penunjukan']]},
  k542:{c:'対 たい / 応 おう', w:[['対する','たいする','terhadap'],['応じる','おうじる','menanggapi'],['反応','はんのう','reaksi']]},
  k549:{c:'提 てい / 供 きょう', w:[['提案','ていあん','usulan'],['提出','ていしゅつ','pengumpulan'],['供給','きょうきゅう','pasokan']]},
  k552:{c:'議 ぎ / 論 ろん', w:[['議会','ぎかい','dewan'],['会議','かいぎ','rapat'],['理論','りろん','teori']]},
  k553:{c:'批 ひ / 判 はん', w:[['批判的','ひはんてき','kritis'],['判断','はんだん','penilaian'],['批評','ひひょう','kritik']]},
  k554:{c:'主 しゅ / 張 ちょう', w:[['主な','おもな','utama'],['主語','しゅご','subjek'],['緊張','きんちょう','tegang']]},
  k555:{c:'表 ひょう / 現 げん', w:[['表す','あらわす','menyatakan'],['現在','げんざい','sekarang'],['発表','はっぴょう','presentasi']]},
  k557:{c:'共 きょう / 有 ゆう', w:[['共に','ともに','bersama'],['共有する','きょうゆうする','berbagi'],['有る','ある','ada']]},
  k589:{c:'信 しん / 頼 らい', w:[['信じる','しんじる','percaya'],['頼む','たのむ','meminta'],['頼り','たより','andalan']]},
  k596:{c:'不 ふ / 安 あん', w:[['不安な','ふあんな','cemas'],['安い','やすい','murah'],['安心','あんしん','lega']]},
  k606:{c:'期 き / 待 たい', w:[['待つ','まつ','menunggu'],['期間','きかん','periode'],['期待する','きたいする','mengharapkan']]},
  k608:{c:'満 まん / 足 そく', w:[['満ちる','みちる','penuh'],['足','あし','kaki'],['満員','まんいん','penuh']]},
  k614:{c:'価 か / 値 ち', w:[['値段','ねだん','harga'],['価格','かかく','harga'],['数値','すうち','nilai angka']]},
  k624:{c:'通 つう / 信 しん', w:[['通る','とおる','melewati'],['通信販売','つうしんはんばい','belanja online'],['自信','じしん','percaya diri']]},
  k646:{c:'進 しん / 化 か', w:[['進む','すすむ','maju'],['進歩','しんぽ','kemajuan'],['進化論','しんかろん','teori evolusi']]},
  k653:{c:'気 き / 候 こう', w:[['天気','てんき','cuaca'],['気温','きおん','suhu udara'],['気候変動','きこうへんどう','perubahan iklim']]},
  k171:{c:'自 じ / 習 しゅう', w:[['習う','ならう','belajar'],['予習','よしゅう','belajar persiapan'],['復習','ふくしゅう','mengulang pelajaran']]},
};

/* ===== Pengayaan Kotoba: kolokasi, sinonim, register ===== */
const KCOL = {
  w1:{col:[['友人を励ます','menyemangati teman'],['声をかけて励ます','menyemangati dengan sapaan']], syn:'元気づける', reg:'Netral'},
  w3:{col:[['夢を諦める','menyerah pada mimpi'],['途中で諦める','menyerah di tengah jalan']], ant:'続ける / 貫く', mix:'断念する = lebih formal'},
  w4:{col:[['商品を扱う','menjual produk'],['テーマを扱う','mengangkat tema'],['人を丁寧に扱う','memperlakukan orang dengan baik']], reg:'Netral'},
  w5:{col:[['目を疑う','tak percaya pada mata sendiri'],['真実を疑う','meragukan kebenaran']], ant:'信じる'},
  w6:{col:[['信頼を裏切る','mengkhianati kepercayaan'],['仲間を裏切る','mengkhianati teman']], ant:'忠実である'},
  w7:{col:[['誘いを断る','menolak ajakan'],['申し出を断る','menolak tawaran']], ant:'受ける', reg:'Netral'},
  w9:{col:[['人混みを避ける','menghindari keramaian'],['話題を避ける','menghindari topik'],['リスクを避ける','menghindari risiko']], ant:'向き合う'},
  w10:{col:[['家族を支える','menopang keluarga'],['屋根を支える','menopang atap'],['活動を支える','mendukung kegiatan']], syn:'支持する'},
  w12:{col:[['休日を過ごす','menghabiskan liburan'],['時間を過ごす','menghabiskan waktu'],['夜を過ごす','melewati malam']]},
  w13:{col:[['新しい方法を試みる','mencoba metode baru'],['改革を試みる','mencoba reformasi']], syn:'試す', reg:'Agak formal / tertulis'},
  w18:{col:[['財布を盗む','mencuri dompet'],['人目を盗む','diam-diam, menghindari mata orang']]},
  w20:{col:[['痛みを我慢する','menahan sakit'],['怒りを我慢する','menahan marah']], syn:'耐える', mix:'耐える = tahan terhadap kondisi; 我慢する = menahan dorongan/emosi'},
  w22:{col:[['慎重に進める','maju dengan hati-hati'],['慎重な態度','sikap hati-hati']], ant:'軽率'},
  w25:{col:[['派手な服','pakaian mencolok'],['派手な演出','penampilan meriah']], ant:'地味'},
  w26:{col:[['地味な色','warna kalem'],['地味な作業','pekerjaan tidak mencolok']], ant:'派手'},
  w28:{col:[['無謀な計画','rencana gegabah'],['無謀な挑戦','tantangan nekat']], ant:'慎重'},
  w32:{col:[['慌ただしい朝','pagi yang sibuk'],['慌ただしく過ごす','melewati dengan tergesa-gesa']]},
  w34:{col:[['悔しい思いをする','merasakan kekesalan'],['負けて悔しい','kesal karena kalah']]},
  w41:{col:[['誤解を解く','meluruskan salah paham'],['誤解を招く','mengundang salah paham'],['誤解される','disalahpahami']]},
  w46:{col:[['遠慮なく言う','bilang tanpa sungkan'],['遠慮する','menahan diri / sungkan']], reg:'Sopan'},
  w52:{col:[['一旦中止する','dihentikan sementara'],['一旦帰宅する','pulang dulu untuk sementara']], reg:'Agak formal'},
  w54:{col:[['必ずしも正しくない','tidak selalu benar'],['必ずしもそうとは限らない','tidak selalu demikian']], reg:'Selalu dipasangkan dengan bentuk negatif'},
  w57:{col:[['徐々に回復する','pulih perlahan'],['徐々に増える','bertambah perlahan']], syn:'だんだん (lebih kasual)'},
  w59:{col:[['うっかり忘れる','lupa tanpa sengaja'],['うっかり話す','keceplosan']]},
  w60:{col:[['ぐっすり眠る','tidur nyenyak'],['ぐっすり眠れる','bisa tidur nyenyak']]},
  w65:{col:[['返事を促す','mendesak balasan'],['注意を促す','mengingatkan'],['成長を促す','mendorong pertumbuhan']], reg:'Agak formal'},
  w66:{col:[['責任を伴う','disertai tanggung jawab'],['痛みを伴う','disertai rasa sakit'],['変化に伴う','menyertai perubahan']], reg:'Agak formal'},
  w67:{col:[['仕事に携わる','terlibat dalam pekerjaan'],['教育に携わる','berkecimpung di pendidikan']], reg:'Formal'},
  w68:{col:[['時間を費やす','menghabiskan waktu'],['お金を費やす','menghabiskan uang'],['労力を費やす','menguras tenaga']]},
  w69:{col:[['手間を省く','menghemat tenaga/kerja'],['工程を省く','menghilangkan proses']], reg:'Agak formal'},
  w70:{col:[['税を含む','termasuk pajak'],['意図を含む','mengandung maksud']]},
  w72:{col:[['事実に基づく','berdasar fakta'],['経験に基づく','berdasar pengalaman']], reg:'Agak formal'},
  w74:{col:[['人数を限る','membatasi jumlah'],['期間を限る','membatasi periode'],['〜に限る','paling cocok adalah ~ (idiom)']]},
  w77:{col:[['裁判所に訴える','menggugat ke pengadilan'],['痛みを訴える','mengeluhkan sakit'],['平和を訴える','menyerukan perdamaian']]},
};

/* ===== Pengayaan Bunpou: 接続, nuansa, kesalahan umum, pola mirip ===== */
const POLA_EXTRA = {
  p1:{setsu:'Vない → Vざるを得ない（例外: する → せざるを得ない）', nua:'Terpaksa karena tidak ada pilihan lain; bernuansa formal/tertulis.', miss:'✗ するざるを得ない → ✓ せざるを得ない', simi:'〜なければならない = kewajiban umum; 〜しかない = lebih kasual, "cuma bisa"'},
  p2:{setsu:'Bentuk biasa (V/A/AN/N) + に違いない', nua:'Keyakinan kuat berdasarkan bukti; lebih objektif daripada 〜はず.', miss:'Jangan dipakai untuk dugaan tanpa bukti — gunakan 〜ようだ / らしい.', simi:'〜はずだ / 〜に決まっている / 〜わけだ'},
  p3:{setsu:'Bentuk biasa + わけではない', nua:'Menyangkal SEBAGIAN — "bukan berarti sepenuhnya ~".', miss:'Beda dengan 〜わけがない (mustahil total).', simi:'〜わけがない / 〜わけにはいかない / 〜わけだ'},
  p4:{setsu:'Bentuk biasa + ばかりか', nua:'Penambahan yang mengejutkan; bisa positif maupun negatif.', miss:'Jangan tertukar dengan 〜どころか (yang menyangkal hal pertama).', simi:'〜だけでなく / 〜どころか'},
  p5:{setsu:'Bentuk biasa + ことか（sering dengan どんなに / どれほど）', nua:'Seruan perasaan mendalam; nuansa tertulis/sastra.', miss:'Bukan untuk pertanyaan biasa.', simi:'〜なんて / 〜ことだろう'},
  p6:{setsu:'Bentuk biasa + わけがない', nua:'Mustahil secara logika — penyangkalan total.', miss:'Beda dengan 〜わけではない (sangkal sebagian).', simi:'〜わけではない / 〜はずがない'},
  p7:{setsu:'Bentuk biasa + わりに', nua:'Kenyataan melebihi/kurang dari ekspektasi standar ("untuk ukuran ~").', miss:'Bukan perbandingan dua hal spesifik — itu 〜に比べて.', simi:'〜に比べて / 〜にしては'},
  p8:{setsu:'N + に比べて', nua:'Perbandingan objektif dua hal.', miss:'Jangan dipakai untuk makna "untuk ukuran" — itu 〜わりに.', simi:'〜わりに / 〜より'},
  p9:{setsu:'N + に対して', nua:'Arah sikap/tindakan; juga kontras "sedangkan".', miss:'〜に対して (target) ≠ 〜にとって (sudut pandang).', simi:'〜にとって / 〜について'},
  p10:{setsu:'N + にとって', nua:'Sudut pandang / posisi si penilai.', miss:'Bukan target tindakan — itu 〜に対して.', simi:'〜に対して / 〜として'},
  p11:{setsu:'N + によって', nua:'Pelaku pasif formal / cara / "berbeda tergantung".', miss:'Pasif sehari-hari cukup pakai particle に.', simi:'〜による / 〜で'},
  p12:{setsu:'N + によると', nua:'Mengutip sumber informasi.', miss:'Tidak untuk pengalaman sendiri.', simi:'〜によれば / 〜の話では'},
  p13:{setsu:'Bentuk biasa + おかげで', nua:'Sebab POSITIF; ada rasa terima kasih.', miss:'Hasil negatif → pakai 〜せいで.', simi:'〜せいで / 〜ため'},
  p14:{setsu:'Bentuk biasa + せいで', nua:'Sebab NEGATIF; nada menyalahkan.', miss:'Jangan untuk hasil positif.', simi:'〜おかげで / 〜ために'},
  p15:{setsu:'Vる / N の + おそれがある', nua:'Kemungkinan buruk; formal — berita & peringatan.', miss:'Hanya untuk hal buruk.', simi:'〜かねない / 〜危険がある'},
  p16:{setsu:'Vます + かねない', nua:'"Bisa saja (berakibat buruk)" — kekhawatiran pembicara.', miss:'Beda arti dengan 〜かねる (tidak dapat).', simi:'〜おそれがある / 〜かもしれない'},
  p17:{setsu:'Vます + かねる', nua:'Penolakan halus/formal: "tidak dapat ~".', miss:'Kebalikan nuansa 〜かねない.', simi:'〜できない / 〜わけにはいかない'},
  p18:{setsu:'Vます + がたい', nua:'Sulit secara mental/emosional: 信じがたい, 許しがたい.', miss:'Kesulitan fisik → 〜にくい / 〜づらい.', simi:'〜にくい / 〜づらい'},
  p19:{setsu:'Vます / N + がち', nua:'Kecenderungan yang agak NEGATIF.', miss:'Bukan untuk kebiasaan positif.', simi:'〜っぽい / 〜気味'},
  p20:{setsu:'N / Vます + っぽい', nua:'Kesan "-seperti / -nya"; kasual.', miss:'Terlalu kasual untuk tulisan formal.', simi:'〜がち / 〜ような'},
  p21:{setsu:'Jumlah + ずつ', nua:'Pembagian sama rata.', miss:'Bukan "kira-kira" (それは くらい).', simi:'〜ごとに / 〜おきに'},
  p22:{setsu:'Vば + Vる + ほど（verba yang sama diulang）', nua:'Perubahan berjenjang yang sebanding.', miss:'Harus verba sama: 読めば読むほど.', simi:'〜ほど / 〜くらい'},
  p23:{setsu:'Bentuk biasa + ほど', nua:'Tingkat ekstrem: "sampai-sampai ~".', miss:'Beda dengan 〜くらい (netral/perkiraan).', simi:'〜くらい / 〜ば〜ほど'},
  p24:{setsu:'Bentuk biasa + くらい', nua:'Tingkat/perkiraan; kadang nada meremehkan.', miss:'Sering tertukar dengan ほど — ほど lebih formal/ekstrem.', simi:'〜ほど / 〜ぐらい'},
  p25:{setsu:'Bentuk biasa + ものの', nua:'"Sudah ~, tetapi (hasil tak sesuai)".', miss:'Beda dengan 〜ものを (penyesalan).', simi:'〜のに / 〜けれど'},
  p26:{setsu:'Bentuk biasa + ものだ', nua:'Kebenaran umum / nostalgia (〜たものだ).', miss:'Bukan untuk pendapat pribadi sesaat.', simi:'〜べきだ / 〜ことだ'},
  p27:{setsu:'Vる / Vない + ことだ', nua:'Nasihat lembut: "sebaiknya ~".', miss:'Bukan perintah keras — 〜べきだ lebih tegas.', simi:'〜べきだ / 〜た方がいい'},
  p28:{setsu:'(kata perasaan) + ことに', nua:'Pembuka perasaan: "yang mengejutkan / sayangnya…".', miss:'Dipakai di AWAL kalimat, bukan akhir.', simi:'〜ことか / 〜のに'},
  p29:{setsu:'N + に加えて', nua:'Penambahan sejenis; formal.', miss:'Penambahan kasual → 〜し〜し.', simi:'〜ばかりか / 〜だけでなく'},
  p30:{setsu:'N + に反して', nua:'Berlawanan dengan harapan/aturan.', miss:'Bukan "tentang" (〜について).', simi:'〜に対して / 〜にもかかわらず'},
  p31:{setsu:'N + にわたって', nua:'Rentang LUAS waktu/wilayah.', miss:'Titik waktu tertentu → particle に.', simi:'〜を通じて / 〜にかけて'},
  p32:{setsu:'N + をはじめ', nua:'Contoh utama dari banyak hal; formal.', miss:'Versi kasual: 〜とか〜とか.', simi:'〜を中心に / 〜など'},
  p33:{setsu:'N + をめぐって', nua:'Isu yang diperdebatkan seputar N.', miss:'Bukan sekadar "tentang" yang netral.', simi:'〜について / 〜に関して'},
  p34:{setsu:'Bentuk biasa + にもかかわらず', nua:'Kontras kuat "padahal"; formal.', miss:'Lebih formal daripada のに.', simi:'〜ものの / 〜のに'},
  p35:{setsu:'N / bentuk biasa + にすぎない', nua:'Meremehkan: "hanya ~, tidak lebih".', miss:'Murni evaluasi, bukan larangan.', simi:'〜だけ / 〜にほかならない'},
  p36:{setsu:'N + にほかならない', nua:'Penegasan identitas/sebab: "tidak lain adalah ~".', miss:'Untuk kepastian, bukan kemungkinan.', simi:'〜にすぎない / 〜こそ'},
  p37:{setsu:'Vる + べきだ（する → すべきだ）', nua:'Kewajiban moral / nasihat tegas.', miss:'Bentuk baku: すべき（するべき umum tapi kurang baku).', simi:'〜なければならない / 〜ことだ'},
  p38:{setsu:'Vている / N の + 最中に', nua:'"Di tengah-tengah sedang ~" — ada gangguan muncul.', miss:'Bukan "selama" (〜間に).', simi:'〜間に / 〜うちに'},
  p39:{setsu:'Vます + 次第', nua:'"Segera setelah selesai"; formal/bisnis.', miss:'Beda dengan N次第 (tergantung N).', simi:'〜たらすぐ / N〜次第で'},
  p40:{setsu:'Bentuk biasa + からには', nua:'"Karena sudah terlanjur ~, harus ~".', miss:'Bukan sebab biasa (〜から).', simi:'〜以上は / 〜上は'},
  p41:{setsu:'Bentuk biasa + うちに', nua:'Selagi keadaan masih berlaku.', miss:'Beda dengan 間に (titik waktu).', simi:'〜間に / 〜最中に'},
  p42:{setsu:'Vる / N の + たびに', nua:'"Setiap kali ~".', miss:'Bukan "kadang-kadang" (それは 時々).', simi:'〜ごとに / 〜たび'},
  p43:{setsu:'N の / Vる + 代わりに', nua:'Pengganti; juga "sebagai kompensasi".', miss:'Bukan "sambil" (〜ながら).', simi:'〜のかわり / 〜に対して'},
  p44:{setsu:'Jumlah waktu/jarak + おきに', nua:'Interval teratur.', miss:'三日おきに = tiap selang 3 hari (bukan 3 hari berturut).', simi:'〜ごとに / 〜ずつ'},
  p45:{setsu:'Bentuk biasa + に決まっている', nua:'Keyakinan kuat, kasual/emosional.', miss:'Lebih subjektif daripada に違いない.', simi:'〜に違いない / 〜はずだ'},
  p46:{setsu:'Bentuk biasa + わけだ', nua:'Kesimpulan logis: "pantas saja / jadi ~".', miss:'Bukan penyangkalan (〜わけではない).', simi:'〜というわけだ / 〜はずだ'},
  p47:{setsu:'Vる + わけにはいかない', nua:'"Tidak bisa ~ (meski ingin)" karena alasan sosial/posisi.', miss:'Bukan ketidakmampuan fisik (〜できない).', simi:'〜わけではない / 〜かねる'},
  p48:{setsu:'Vない + ずにはいられない（する → せずにはいられない）', nua:'Tak tahan untuk tidak ~ (emosional).', miss:'✗ しないずには → ✓ せずにはいられない.', simi:'〜ざるを得ない / 〜てたまらない'},
  p49:{setsu:'Vます + づらい', nua:'Sulit dilakukan (fisik/mental); agak kasual.', miss:'Versi lebih netral/formal: 〜にくい.', simi:'〜にくい / 〜がたい'},
  p50:{setsu:'Bentuk biasa + かのようだ', nua:'"Seolah-olah ~" (kenyataannya tidak).', miss:'Beda dengan 〜ようだ biasa (kemiripan nyata).', simi:'〜ようだ / 〜みたいだ'},
  p51:{setsu:'Bentuk biasa + といっても', nua:'"Walaupun dibilang ~, kenyataannya tidak sepenuhnya".', miss:'Bukan kutipan (〜という).', simi:'〜けれど / 〜からといって'},
  p52:{setsu:'N から N にかけて', nua:'Rentang yang batasnya tidak tegas.', miss:'Batas tegas → から〜まで.', simi:'〜から〜まで / 〜にわたって'},
  p53:{setsu:'N + をきっかけに', nua:'Pemicu perubahan.', miss:'Bukan sebab langsung (〜ので).', simi:'〜を契機に (lebih formal) / 〜のおかげで'},
  p54:{setsu:'N + を通じて', nua:'Sarana/perantara; juga "selama (periode)".', miss:'Beda tipis dengan によって (cara/pelaku).', simi:'〜によって / 〜を通して'},
  p55:{setsu:'N + に沿って', nua:'Mengikuti garis / pedoman / rencana.', miss:'Bukan "dekat" (〜のそば).', simi:'〜に従って / 〜どおりに'},
  p56:{setsu:'N / Vる + に伴って', nua:'Perubahan paralel: "seiring dengan".', miss:'Mirip につれて — に伴って juga dipakai untuk akibat resmi.', simi:'〜につれて / 〜とともに'},
  p57:{setsu:'N + に応じて', nua:'Menyesuaikan respons dengan kondisi/permintaan.', miss:'Bukan "menurut sumber" (〜によると).', simi:'〜によって / 〜に従って'},
  p58:{setsu:'N + に関して', nua:'Topik pembicaraan; formal.', miss:'Versi lebih kasual: 〜について.', simi:'〜について / 〜に対して'},
  p59:{setsu:'N + をもとに', nua:'Bahan dasar pembuatan sesuatu.', miss:'Bukan "berdasar pendapat orang" (〜によると).', simi:'〜に基づいて / 〜から'},
  p60:{setsu:'Vた + とたん', nua:'"Begitu ~, langsung ~" (ada kejutan).', miss:'Bukan urutan rutin (〜たら).', simi:'〜た瞬間 / 〜次第'},
};

/* ===== DIAGNOSTIC BANK: 474 soal, 6 kategori - setiap sesi 24 soal diacak dari bank ===== */
const DIAG_CATS = {n3k:'N3 · Kanji', n3v:'N3 · Kosakata', n3g:'N3 · Grammar', n2k:'N2 · Kanji', n2v:'N2 · Kosakata', n2g:'N2 · Grammar'};


/* ===== CONTRASTIVE GRAMMAR: 6 kelompok pola mirip ===== */


/* ===== READING: 3 tingkat kesulitan ===== */


/* ===== LISTENING (TTS perangkat, transkrip tersembunyi) ===== */


/* ===== BANK SOAL: berkategori + bertag (untuk adaptive review) ===== */







/* ================= STATE (localStorage, dengan migrasi) ================= */
const $ = id=>document.getElementById(id);
const LS_KEY = 'n2jago.v1';
const dayStr = (d=new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const mondayStr = () => { const d=new Date(); const off=(d.getDay()+6)%7; d.setDate(d.getDate()-off); return dayStr(d); };

const defaults = () => ({
  xp:0, streak:0, lastVisit:null,
  mastered:[], hard:[], kataDilihat:[], polaDibaca:[], polaHafal:[],
  quizBest:0, challengeDone:null,
  today:{date:dayStr(), count:0},
  week:{key:mondayStr(), cards:0, soal:0, xp:0},
  /* --- baru: program N3→N2 --- */
  diag:null,            /* hasil diagnostic: {n3k,n3v,n3g,n2k,n2v,n2g} */
  errors:{},            /* riwayat kesalahan: key -> {label, cat, count} */
  packBest:{},          /* skor terbaik per paket (persen) */
  readBest:{},          /* skor terbaik per bacaan (persen) */
  mockBest:null,        /* practice score terbaik (persen) */
  contrastDone:[],      /* kelompok kontras yang sudah dilatih */
  diagHistory:{n3k:[],n3v:[],n3g:[],n2k:[],n2v:[],n2g:[]}, /* riwayat soal diagnostik per kategori */
  diagLast:null,        /* hasil sesi diagnostik terakhir: {date, scores, correct, total} */
  diagBest:null,        /* skor terbaik per kategori + total */
  furigana:{kanji:true,kotoba:true,bunpou:true,contrast:true,reading:true,listening:true,quiz:true,diagnostic:true,mock:false},
})
let state;
try{ state = Object.assign(defaults(), JSON.parse(localStorage.getItem(LS_KEY)||'{}')); }
catch(e){ state = defaults(); }
/* migrasi aman: field baru diisi default, data lama tidak disentuh */
['mastered','hard','kataDilihat','polaDibaca','polaHafal','contrastDone'].forEach(k=>{ if(!Array.isArray(state[k])) state[k]=[]; });
['errors','packBest','readBest'].forEach(k=>{ if(typeof state[k]!=='object'||!state[k]) state[k]={}; });
state.furigana = Object.assign(defaults().furigana, (typeof state.furigana==='object'&&state.furigana)||{});
if(typeof state.diagHistory!=='object'||!state.diagHistory) state.diagHistory={};
Object.keys(defaults().diagHistory).forEach(k=>{ if(!Array.isArray(state.diagHistory[k])) state.diagHistory[k]=[]; });
if(typeof state.diagLast!=='object') state.diagLast=null;
if(typeof state.diagBest!=='object') state.diagBest=null;
Object.values(state.errors).forEach(e=>{ e.okCount=e.okCount||0; e.interval=e.interval||1; e.lastWrong=e.lastWrong||0; e.nextReview=e.nextReview||0; });
function save(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(state)); }catch(e){} }

function rolloverWindows(){
  if(state.today.date !== dayStr()) state.today = {date:dayStr(), count:0};
  if(state.week.key !== mondayStr()) state.week = {key:mondayStr(), cards:0, soal:0, xp:0};
}
function initStreak(){
  const t = dayStr();
  if(state.lastVisit === t) return;
  const y = dayStr(new Date(Date.now()-86400000));
  state.streak = (state.lastVisit === y) ? state.streak+1 : 1;
  state.lastVisit = t;
}
function addXp(n){ state.xp += n; state.week.xp += n; }
function bumpToday(){ state.today.count++; state.week.cards++; }

/* --- error history & adaptive --- */
function labelFor(tag){
  if(tag.startsWith('listen:')){ const li=LISTEN.findIndex(x=>x.id===tag.slice(7)); return li>=0 ? 'Listening · soal '+(li+1) : 'Listening'; }
  const p=POLA.find(x=>x.id===tag); if(p) return p.p;
  const k=KANJI.find(x=>x.id===tag); if(k) return k.k;
  const w=KATA.find(x=>x.id===tag); if(w) return w.w;
  if(tag.startsWith('rdg:')) return 'Reading · ' + tag.slice(4);
  if(tag.startsWith('diag:')) return 'Diagnostik · ' + (DIAG_CATS[tag.slice(5)]||tag);
  return tag;
}
function catFor(tag){
  if(tag.startsWith('rdg:')) return 'Reading';
  if(tag.startsWith('listen:')) return 'Listening';
  if(tag.startsWith('diag:')) return 'Diagnostik';
  const c = tag[0];
  return c==='p' ? 'Grammar' : c==='k' ? 'Kanji' : c==='w' ? 'Kotoba' : 'Lainnya';
}
const DAY_MS = 86400000;
const REVIEW_INTERVALS = [1,3,7,14,30]; /* hari, makin panjang tiap jawaban benar */
function recordError(tag){
  const e = state.errors[tag] || {label:labelFor(tag), cat:catFor(tag), count:0, okCount:0, interval:1, lastWrong:0, nextReview:0};
  e.count++; e.okCount=0; e.interval=REVIEW_INTERVALS[0];
  e.lastWrong=Date.now(); e.nextReview=Date.now()+e.interval*DAY_MS;
  state.errors[tag] = e;
}
function recordOk(tag){
  const e = state.errors[tag];
  if(!e) return;
  e.okCount=(e.okCount||0)+1;
  e.interval = REVIEW_INTERVALS[Math.min(e.okCount, REVIEW_INTERVALS.length-1)];
  e.nextReview = Date.now() + e.interval*DAY_MS;
}
function weakTags(){ return Object.keys(state.errors).filter(t=>state.errors[t].count>=2); }
function dueWeakTags(){
  const now = Date.now();
  return Object.keys(state.errors).filter(t=>{
    const e=state.errors[t];
    return e.count>=1 && (!e.nextReview || e.nextReview<=now);
  }).sort((a,b)=>{
    const ea=state.errors[a], eb=state.errors[b];
    return (eb.count-ea.count) || ((ea.nextReview||0)-(eb.nextReview||0)) || ((ea.lastWrong||0)-(eb.lastWrong||0));
  });
}
function polaStatus(id){
  if(state.polaHafal.includes(id)) return ['mastered','Hafal'];
  if(state.errors[id] && state.errors[id].count>=2) return ['weak','Lemah'];
  if(state.polaDibaca.includes(id)) return ['learning','Belajar'];
  return ['new','Baru'];
}

/* ================= NAV ================= */
const screens = document.querySelectorAll('[data-screen]');
const navBtns = document.querySelectorAll('[data-nav]');
function go(name, seg){
  screens.forEach(s=>s.classList.toggle('active', s.dataset.screen===name));
  navBtns.forEach(b=>b.classList.toggle('active', b.dataset.nav===name));
  if(name==='belajar') setBSeg(seg||'kanji');
  if(name==='progres') setPSeg(seg||'statistik');
  if(name==='soal') showPackMenu();
  document.getElementById('main').scrollTop = 0;
}
navBtns.forEach(b=>b.addEventListener('click', ()=>go(b.dataset.nav)));
document.querySelectorAll('[data-go]').forEach(el=>
  el.addEventListener('click', ()=>go(el.dataset.go, el.dataset.seg)));
document.querySelectorAll('[data-goscreen]').forEach(el=>
  el.addEventListener('click', ()=>go(el.dataset.goscreen)));

function setBSeg(seg){
  document.querySelectorAll('[data-bseg]').forEach(b=>b.classList.toggle('active', b.dataset.bseg===seg));
  document.querySelectorAll('[data-bpanel]').forEach(p=>p.hidden = p.dataset.bpanel!==seg);
}
function setPSeg(seg){
  document.querySelectorAll('[data-pseg]').forEach(b=>b.classList.toggle('active', b.dataset.pseg===seg));
  document.querySelectorAll('[data-ppanel]').forEach(p=>p.hidden = p.dataset.ppanel!==seg);
}
document.querySelectorAll('[data-bseg]').forEach(b=>b.addEventListener('click', ()=>setBSeg(b.dataset.bseg)));
document.querySelectorAll('[data-pseg]').forEach(b=>b.addEventListener('click', ()=>setPSeg(b.dataset.pseg)));

function setKView(v){
  document.querySelectorAll('[data-kview]').forEach(b=>b.classList.toggle('active', b.dataset.kview===v));
  document.querySelectorAll('[data-kpanel]').forEach(p=>p.hidden = p.dataset.kpanel!==v);
  if(v==='list') renderKanjiList();
}
document.querySelectorAll('[data-kview]').forEach(b=>b.addEventListener('click', ()=>setKView(b.dataset.kview)));

/* ================= BERANDA: diag card + learning path ================= */
const pct = (a,b)=>Math.round(a/b*100);
const avg = arr => Math.round(arr.reduce((x,y)=>x+y,0)/arr.length);

function renderDiagHome(){
  const el = $('diagHomeBody');
  if(!state.diag){
    el.innerHTML = `
      <div class="label">🧭 Tes diagnostik</div>
      <div class="mt8" style="font-weight:700; font-size:17px">Belum ada profil kemampuanmu</div>
      <p class="small muted mt8">Ikuti tes 24 soal (±7 menit) untuk memetakan kemampuan N3 &amp; N2-mu, lalu dapatkan rekomendasi belajar yang tepat.</p>
      <button class="btn btn-primary btn-block mt12" id="diagCta">Mulai Tes Diagnostik</button>`;
    $('diagCta').addEventListener('click', ()=>go('diag'));
  } else {
    const d = state.diag;
    const rows = [['n3k','N3 Kanji'],['n3v','N3 Kosakata'],['n3g','N3 Grammar'],['n2k','N2 Kanji'],['n2v','N2 Kosakata'],['n2g','N2 Grammar']];
    el.innerHTML = `
      <div class="row between">
        <div class="label">🧭 Profil diagnostik</div>
        <button class="toggle-btn" id="diagRetake" style="min-height:36px">Ulangi tes</button>
      </div>
      <div class="mt8">${rows.map(([k,nm])=>`
        <div class="row between small"><span class="muted">${nm}</span><b>${d[k]}%</b></div>
        <div class="bar" style="margin:4px 0 8px"><i style="width:${d[k]}%"></i></div>`).join('')}</div>
      ${revHomeLine()}`;
    $('diagRetake').addEventListener('click', ()=>go('diag'));
    const rh=$('diagRevHome'); if(rh) rh.addEventListener('click', ()=>{ go('diag'); openDiagReview('all','home'); });
  }
}

function pathStages(){
  const d = state.diag;
  const s1 = d ? avg([d.n3k,d.n3v,d.n3g]) : (state.packBest.n3||0);
  const s2 = Math.round(((state.packBest.bridge||0) + pct(state.contrastDone.length, CONTRAST.length))/2);
  const n2pola = POLA.filter(p=>p.lv==='N2');
  const n2polaHafal = n2pola.filter(p=>state.polaHafal.includes(p.id)).length;
  const s3 = Math.round(((state.packBest.n2g||0) + pct(n2polaHafal, n2pola.length))/2);
  const s4 = avg([pct(state.mastered.length,KANJI.length), state.packBest.n2v||0, state.packBest.n2k||0]);
  const s5 = pct(Object.keys(state.readBest).length, READING.length);
  const s6 = state.packBest.mixed||0;
  const s7 = state.mockBest||0;
  const stages = [
    ['N3 Foundation', s1, 'Perkuat fondasi: paket N3 Review'],
    ['N3 → N2 Bridge', s2, 'Jembatan: paket Bridge + tab Kontras'],
    ['N2 Grammar Core', s3, 'Pola N2: paket Grammar + tandai hafal'],
    ['N2 Vocabulary & Kanji', s4, 'Flashcard + paket Kosakata/Kanji'],
    ['N2 Reading', s5, 'Bacaan bertingkat di tab Bacaan'],
    ['Mixed Practice', s6, 'Latihan campuran semua materi'],
    ['N2 Mock Test', s7, 'Simulasi 模擬試験 dengan timer'],
  ];
  let cur = stages.findIndex(s=>s[1]<60);
  if(cur<0) cur = stages.length-1;
  return {stages, cur};
}
function renderPath(){
  const {stages, cur} = pathStages();
  $('pathList').innerHTML = stages.map(([name,val,hint],i)=>{
    const cls = val>=60 ? 'done' : (i===cur ? 'now' : '');
    return `<div class="path-step ${cls}">
      <div class="path-rail">
        <div class="path-dot">${val>=60?'✓':i+1}</div>
        ${i<stages.length-1?'<div class="path-line"></div>':''}
      </div>
      <div class="path-body">
        <div class="row between"><b>${name}</b><b class="small">${val}%</b></div>
        <div class="bar mt8"><i style="width:${val}%"></i></div>
        ${i===cur?`<div class="mini-note mt8">▶ Tahap kamu sekarang — ${hint}</div>`:''}
      </div>
    </div>`;
  }).join('');
}

/* ================= DIAGNOSTIC TEST: sesi acak dari bank soal ================= */
const DIAG_PER_CAT = 4;                  /* 6 kategori x 4 soal = 24 soal per sesi (tetap) */
const DIAG_PLAN = [['easy',1],['medium',2],['hard',1]]; /* campuran kesulitan per kategori */
let di=0, dScore=null, dAnswered=false, dSession=[], dLog=[], dT0=0;

function diagBankFor(cat){ return DIAG_BANK.filter(q=>q.c===cat); }

/* Pemilihan soal per kategori. Prioritas: belum pernah muncul -> paling lama tidak muncul ->
   baru diulang. Campuran difficulty dijaga lewat DIAG_PLAN; topik ganda dihindari bila bisa. */
function pickDiagCat(cat){
  const bank = diagBankFor(cat);
  const hist = (state.diagHistory[cat]||[]).filter(id=>bank.some(q=>q.id===id));
  const histSet = new Set(hist);
  const unseen = shuffleArr(bank.filter(q=>!histSet.has(q.id)));
  const pool = unseen.concat(hist.map(id=>bank.find(q=>q.id===id)));
  /* difficulty = preferensi lunak: kuota DIAG_PLAN hanya diambil dari soal yang BELUM pernah muncul.
     Bila stok suatu difficulty habis, kekurangan diisi soal unseen lain - tidak memaksa pengulangan. */
  const byDiff = {easy:[], medium:[], hard:[]};
  unseen.forEach(q=>{ (byDiff[q.diff]||byDiff.medium).push(q); });
  const picked=[], usedId=new Set(), usedTopic=new Set();
  const take = (arr, need, respectTopic)=>{
    for(const q of arr){
      if(need<=0 || picked.length>=DIAG_PER_CAT) break;
      if(usedId.has(q.id)) continue;
      if(respectTopic && q.topic && usedTopic.has(q.topic)) continue;
      usedId.add(q.id); if(q.topic) usedTopic.add(q.topic);
      picked.push(q); need--;
    }
  };
  DIAG_PLAN.forEach(([df,n])=>take(byDiff[df], n, true));
  if(picked.length<DIAG_PER_CAT) take(unseen, DIAG_PER_CAT-picked.length, true);
  if(picked.length<DIAG_PER_CAT) take(pool, DIAG_PER_CAT-picked.length, true);
  if(picked.length<DIAG_PER_CAT) take(pool, DIAG_PER_CAT-picked.length, false);
  return shuffleArr(picked);
}

function startDiag(){
  di=0;
  dScore={n3k:[0,0],n3v:[0,0],n3g:[0,0],n2k:[0,0],n2v:[0,0],n2g:[0,0]};
  dSession=[]; dLog=[];
  Object.keys(DIAG_CATS).forEach(cat=>{ dSession.push(...pickDiagCat(cat)); });
  $('diagIntro').hidden=true; $('diagResult').hidden=true; $('diagRun').hidden=false;
  renderD();
}
function renderD(){
  dAnswered=false; dT0=Date.now();
  const q = dSession[di];
  $('dCat').textContent = DIAG_CATS[q.c];
  $('dCounter').textContent = `Soal ${di+1}/${dSession.length}`;
  $('dBar').style.width = (di/dSession.length*100)+'%';
  $('dText').innerHTML = q.q.replace('____','<span class="blank">＿＿＿</span>');
  $('dOpts').innerHTML = q.opts.map((o,i)=>`
    <button class="opt" data-dopt="${i}"><span class="key">${'ABCD'[i]}</span>${o}</button>`).join('');
  document.querySelectorAll('[data-dopt]').forEach(el=>el.addEventListener('click', ()=>pickD(+el.dataset.dopt)));
}
function pickD(i){
  if(dAnswered) return; dAnswered=true;
  const q = dSession[di];
  const entry = {id:q.id, c:q.c, lv:q.lv, topic:q.topic||'', type:q.type||'', q:q.q, opts:q.opts.slice(), mine:i, ans:q.a, ok:i===q.a, ms:Date.now()-dT0, d:q.d||'', tags:(q.tags||[]).slice()};
  /* Metadata diagnosis Bunpou direkam saat tes berjalan: identitas pola tiap opsi (optPids)
     dan pola yang benar (pid). Identitas hanya dari kecocokan PERSIS teks opsi dengan nama
     kanonik di POLA - tanpa kecocokan persis id=null, tidak pernah dikarang.
     Soal Kanji/Kosakata tidak diberi field ini sama sekali. */
  if(REV_KIND(q.c)==='grammar'){
    const meta = revResolvePola(entry);
    entry.pid = meta.pid;
    entry.optPids = meta.optPids;
  }
  dLog.push(entry);
  dScore[q.c][1]++;
  if(i===q.a){ dScore[q.c][0]++; addXp(5); }
  else recordError('diag:'+q.c);
  di++;
  if(di>=dSession.length) finishDiag(); else renderD();
}
function finishDiag(){
  const d = {};
  Object.keys(dScore).forEach(k=>{ d[k] = pct(dScore[k][0], dScore[k][1]); });
  state.diag = d;
  /* riwayat soal: yang dipakai pindah ke akhir; bila seluruh bank sudah terpakai, pool direset otomatis */
  dSession.forEach(q=>{
    const h = state.diagHistory[q.c];
    const ix = h.indexOf(q.id); if(ix>=0) h.splice(ix,1);
    h.push(q.id);
    if(h.length >= diagBankFor(q.c).length){
      state.diagHistory[q.c] = dSession.filter(x=>x.c===q.c).map(x=>x.id);
    }
  });
  let totC=0, totN=0;
  Object.keys(dScore).forEach(k=>{ totC+=dScore[k][0]; totN+=dScore[k][1]; });
  state.diagLast = {date: dayStr(), scores: d, correct: totC, total: totN, log: dLog};
  if(!state.diagBest) state.diagBest = {};
  Object.keys(d).forEach(k=>{ state.diagBest[k] = Math.max(state.diagBest[k]||0, d[k]); });
  state.diagBest.total = Math.max(state.diagBest.total||0, pct(totC, totN));
  save();
  $('diagRun').hidden=true; $('diagResult').hidden=false;
  const rows = [['n3k','N3 Kanji'],['n3v','N3 Kosakata'],['n3g','N3 Grammar'],['n2k','N2 Kanji'],['n2v','N2 Kosakata'],['n2g','N2 Grammar']];
  const wrongByCat = {};
  dLog.forEach(e=>{ if(!e.ok) wrongByCat[e.c]=(wrongByCat[e.c]||0)+1; });
  $('diagBars').innerHTML = rows.map(([k,nm])=>{
    const w = wrongByCat[k]||0;
    return `
    <div class="diag-row">
      <div class="top"><span>${nm}</span><span><b>${d[k]}%</b>${w?` <button class="mini-rev" data-drev="${k}" title="Lihat ${w} soal salah di kategori ini">🔎 ${w}</button>`:''}</span></div>
      <div class="bar"><i style="width:${d[k]}%"></i></div>
    </div>`;
  }).join('');
  document.querySelectorAll('[data-drev]').forEach(b=>b.addEventListener('click', ()=>openDiagReview(b.dataset.drev,'result')));
  const n3weak = [['n3k','Kanji'],['n3v','Kosakata'],['n3g','Grammar']].filter(([k])=>d[k]<70).map(x=>x[1]);
  let reco;
  if(n3weak.length){
    reco = `Fondasi N3 ${n3weak.join(' dan ')} masih perlu diperkuat sebelum masuk ke materi N2 terkait. Mulai dari paket 🌱 N3 Review, lalu lanjut ke 🌉 Bridge. Pola N3 di tab Bunpou (lencana hijau) adalah prerequisite-nya.`;
  } else {
    reco = 'Fondasi N3 sudah cukup kuat. Kamu bisa fokus ke N2 Core: paket N2 Grammar, Kosakata & Kanji, lalu naik ke Reading dan Mixed Practice.';
  }
  if(d.n2g<50) reco += ' Grammar N2-mu masih rendah — prioritaskan tab Kontras untuk pola yang mudah tertukar.';
  $('diagReco').textContent = reco;
  const weakLinks = rows.filter(([k])=> (wrongByCat[k]||0)>0 && d[k]<70);
  $('diagRecoLinks').innerHTML = weakLinks.length
    ? '<span class="small muted">Telusuri penyebabnya:</span> ' + weakLinks.map(([k,nm])=>`<button class="mini-rev" data-rrec="${k}">${nm}</button>`).join(' ')
    : '';
  document.querySelectorAll('[data-rrec]').forEach(b=>b.addEventListener('click', ()=>openDiagReview(b.dataset.rrec,'result')));
  const wrongN = dLog.filter(e=>!e.ok).length;
  $('btnDiagReview').style.display = wrongN ? '' : 'none';
  $('revAllRight').style.display = wrongN ? 'none' : '';
  $('revCount').textContent = wrongN;
  refreshStats();
}
$('btnDiagStart').addEventListener('click', startDiag);
$('btnDiagRetake').addEventListener('click', startDiag);
$('btnDiagDone').addEventListener('click', ()=>go('home'));

/* ================= DIAGNOSTIC REVIEW: soal salah dari jawaban aktual =================
   Data berasal dari state.diagLast.log yang direkam pickD saat tes berjalan - bukan data acak.
   Hasil tes lama tanpa log -> tampil pesan "Detail jawaban tidak tersedia". */
let revCat='all', revLv='all', revFrom='result';
const REV_KIND = c => c.endsWith('k') ? 'kanji' : (c.endsWith('v') ? 'kotoba' : 'grammar');
const REV_KIND_LABEL = {kanji:'Kanji', kotoba:'Kosakata', grammar:'Grammar'};
const REV_CAT_LABEL = {n3k:'N3 · Kanji', n3v:'N3 · Kosakata', n3g:'N3 · Grammar', n2k:'N2 · Kanji', n2v:'N2 · Kosakata', n2g:'N2 · Grammar'};
const REV_STRIP = s => String(s).replace(/<[^>]+>/g,'');

function diagLog(){ return (state.diagLast && Array.isArray(state.diagLast.log)) ? state.diagLast.log : null; }

function openDiagReview(cat, from){
  revFrom = from||'result';
  if(cat && /^n\d/.test(cat)){ revCat = REV_KIND(cat); revLv = cat.slice(0,2).toUpperCase(); }
  else { revCat = cat||'all'; revLv = 'all'; }
  $('diagIntro').hidden=true; $('diagRun').hidden=true; $('diagResult').hidden=true;
  $('diagReview').hidden=false;
  renderDiagReview();
  document.getElementById('main').scrollTop = 0;
}
function closeDiagReview(){
  $('diagReview').hidden=true;
  if(revFrom==='home') $('diagIntro').hidden=false; else $('diagResult').hidden=false;
  document.getElementById('main').scrollTop = 0;
}

/* Teks pola tanpa ruby / tanda 〜 agar bisa dicocokkan dengan opsi jawaban. */
function polaPlain(p){ return REV_STRIP(p.p).replace(/^〜/,'').trim(); }

/* ============ Deteksi jenis kesalahan Bunpou: konservatif & berbasis metadata ============
   Prinsip: AKURASI > JUMLAH DIAGNOSIS. Jenis kesalahan hanya boleh diklaim bila dibuktikan
   oleh data soal + metadata grammar (POLA / POLA_EXTRA). Kemiripan karakter dan perbandingan
   substring TIDAK pernah dipakai sebagai bukti jenis kesalahan. Bila bukti tidak cukup,
   sistem WAJIB memakai fallback aman:
   "Jenis kesalahan belum dapat dipastikan dari jawaban ini." */

/* Normalisasi teks untuk IDENTITAS (bukan kemiripan): buang ruby/HTML, spasi pinggir, 〜 di awal.
   Urutan penting: spasi dipangkas SEBELUM 〜 — entri metadata hasil pecahan daftar "A / B"
   (mis. ' 〜どころか') dengan demikian ikut ternormalisasi menjadi 'どころか'. */
function polaNameKey(s){ return REV_STRIP(String(s==null?'':s)).trim().replace(/^〜/,'').trim(); }

/* Peta nama pola -> id POLA, dibangun sekali dari database. Nama yang dipakai lebih dari satu
   pola dianggap ambigu dan tidak pernah dipakai untuk identifikasi (lebih baik null). */
const POLA_NAME_IDS = (()=>{
  const m = {};
  POLA.forEach(p=>{ const k = polaNameKey(p.p); (m[k]=m[k]||[]).push(p.id); });
  Object.keys(m).forEach(k=>{ if(m[k].length>1) delete m[k]; });
  return m;
})();

/* Identitas pola sebuah opsi: hanya bila teks opsi PERSIS sama dengan nama kanonik tepat satu
   pola di POLA. Inilah hubungan soal -> opsi -> pola yang diketahui. Selain itu: null (tidak
   pernah mengarang id untuk opsi tanpa hubungan nyata dengan database). */
function polaIdFromText(s){ const ids = POLA_NAME_IDS[polaNameKey(s)]; return ids ? ids[0] : null; }

/* Nama-nama pola yang tercatat mudah tertukar dengan suatu pola, dari metadata POLA_EXTRA.simi.
   Format simi: '〜A / 〜B = catatan; 〜C' -> ['A','B','C']. Murni pembacaan metadata. */
function polaSimiNames(simi){
  if(!simi) return [];
  return String(simi).split(/[\/;]/)
    .map(part=>polaNameKey(part.split('=')[0].replace(/[（(].*$/,'')))
    .filter(Boolean);
}

/* Parse metadata miss menjadi ID pola yang BENAR-BENAR disebut eksplisit di dalamnya.
   - Segmen "✗ ... -> ✓ ..." adalah contoh kesalahan BENTUK, bukan daftar pola -> dibuang dulu.
   - Tiap run teks Jepang menjadi KANDIDAT nama pola; teks penjelasan (Indonesia) tak pernah
     menjadi kandidat.
   - Kandidat diverifikasi ke database POLA lewat exact identity (POLA_NAME_IDS via polaIdFromText):
     cocok persis dengan nama kanonik & ID unik -> diakui; selain itu dibuang (tidak mengarang ID).
   - Regex hanya dipakai untuk PARSING struktur kalimat; bukti akhir = exact match ke POLA.
     Tanpa indexOf/includes/substring/fuzzy/similarity terhadap nama pola.
   Hasil: array ID pola unik, urut kemunculan. Mis. '〜わけではない ≠ 〜わけがない' -> ['p3','p6']. */
function parseMissPatternIds(miss){
  if(!miss) return [];
  const body = String(miss).replace(/✗[^→]*→[^。.;\n]*/g, ' ');
  const ids = [];
  const re = /[〜々〆ヶぁ-んァ-ヶー一-龯]+/g;
  let m;
  while((m = re.exec(body))){
    const key = polaNameKey(m[0]);
    if(key.length < 2) continue;      /* terlalu pendek -> rawan; abaikan (konservatif) */
    const id = polaIdFromText(key);   /* exact identity ke POLA; null bila tak ada/ambigu */
    if(id && !ids.includes(id)) ids.push(id);
  }
  return ids;
}

/* Resolusi pola untuk 1 entri log: pola benar (pid) + identitas pola tiap opsi (optPids).
   Urutan sumber: metadata yang direkam pickD -> tag soal -> identitas persis teks opsi benar.
   Id tersimpan yang tidak lagi ada di POLA dibuang, sehingga data localStorage lama tetap aman. */
function revResolvePola(e){
  const tags = Array.isArray(e.tags) ? e.tags : [];
  const opts = Array.isArray(e.opts) ? e.opts : [];
  const valid = id => typeof id==='string' && POLA.some(p=>p.id===id);
  let pid = valid(e.pid) ? e.pid : null;
  if(!pid) pid = tags.find(t=>valid(t)) || null;
  const optPids = (Array.isArray(e.optPids) && e.optPids.length===opts.length)
    ? e.optPids.map(id=>valid(id)?id:null)
    : opts.map(o=>polaIdFromText(o));
  if(!pid && Number.isInteger(e.ans) && optPids[e.ans]) pid = optPids[e.ans];
  return {pid, optPids};
}

/* Diagnosis jenis kesalahan Bunpou. Hanya kategori yang terbukti dari metadata yang dihasilkan:
   B) "kemungkinan salah bentuk / 接続" - metadata kesalahan umum (miss) pola benar memuat
      pasangan terdokumentasi "✗ bentuk-salah -> ✓ bentuk-benar" dan opsi yang dipilih PERSIS
      bentuk salah itu (bentuk keliru pola yang sama, bukan pola grammar lain).
   D) "salah membedakan pola mirip" - metadata simi/miss mencatat pola benar & pola terpilih
      sebagai pasangan yang mudah tertukar, dan soal ini memang menyajikan keduanya sebagai
      opsi yang berbeda (konteks soal membedakan keduanya).
   E) fallback aman - bukti tidak cukup untuk menyebut penyebab.
   Kategori "salah memilih pola" & "salah memahami makna/fungsi" sengaja TIDAK dipakai:
   metadata soal saat ini tidak cukup untuk membuktikannya tanpa menebak. */
function revErrorKind(e, pid, p, optPids){
  const opts = Array.isArray(e.opts) ? e.opts : [];
  if(!opts.length || e.mine==null || e.ans==null || e.mine===e.ans) return '';
  const x = POLA_EXTRA[pid] || {};
  const chosenTxt = polaNameKey(opts[e.mine]);
  const correctTxt = polaNameKey(opts[e.ans]);
  const chosenPid = (optPids && optPids[e.mine] && optPids[e.mine]!==pid) ? optPids[e.mine] : null;
  const chosenPola = chosenPid ? POLA.find(q=>q.id===chosenPid) : null;
  const chosenName = chosenPola ? polaNameKey(chosenPola.p) : chosenTxt;

  /* B) Salah bentuk / 接続: miss pola benar memuat "✗ ... -> ✓ ..." dan pilihanmu persis bentuk
     keliru yang terdokumentasi untuk pola ini. */
  const mm = x.miss ? String(x.miss).match(/✗\s*([^→✓]+?)\s*→\s*✓\s*(.+)$/) : null;
  const missForm = s => polaNameKey(String(s).replace(/[。.．、,]+$/,''));
  if(mm && chosenTxt===missForm(mm[1]) && correctTxt===missForm(mm[2])){
    return `Jenis kesalahan: <b>kemungkinan salah bentuk / 接続</b> — bentuk yang kamu pilih tercatat sebagai bentuk keliru yang umum untuk pola ini. Bentuk yang tepat: <b>${REV_STRIP(opts[e.ans])}</b>.`;
  }

  /* D) Salah membedakan pola mirip: pola terpilih disebut eksplisit dalam metadata simi pola
     benar (atau pola benar disebut dalam simi pola terpilih), atau metadata miss pola benar
     secara eksplisit menamai pola terpilih sebagai hal yang mudah tertukar. Identitas pola
     terpilih sudah dibuktikan lewat kecocokan persis; metadata yang menyatakan hubungannya. */
  const correctName = polaNameKey(p.p);
  const linkedBySimi = polaSimiNames(x.simi).some(n=>n===chosenName)
                    || (chosenPid ? polaSimiNames((POLA_EXTRA[chosenPid]||{}).simi).some(n=>n===correctName) : false);
  /* namedInMiss: ID pola terpilih termasuk daftar ID pola yang TERVERIFIKASI disebut eksplisit
     di metadata miss pola benar - exact entity via parseMissPatternIds, BUKAN substring.
     (Segmen ✗->✓ sudah dibuang di dalam parser, jadi miss bentuk tak pernah menghasilkan entitas.) */
  const namedInMiss = !!chosenPid && parseMissPatternIds(x.miss).includes(chosenPid);
  if(linkedBySimi || namedInMiss){
    const chosenLabel = chosenPola ? `${chosenPola.p} (${chosenPola.m})` : `〜${chosenTxt}`;
    return `Jenis kesalahan: <b>salah membedakan pola mirip</b> — kamu memilih <b>${chosenLabel}</b>, padahal konteks kalimat ini meminta <b>${p.p}</b> (${p.m}). Keduanya tercatat di metadata sebagai pola yang mudah tertukar — perhatikan perbedaannya pada catatan kesalahan umum & nuansa di bawah.`;
  }

  /* E) Fallback aman: bukti tidak cukup untuk menyebut penyebab. Bila opsi terpilih terverifikasi
     sebagai pola lain di database, fakta itu boleh disampaikan - tanpa mengklaim bahwa itulah
     penyebab kesalahan (bisa saja konteks, nuansa, atau fungsi yang belum dipahami). */
  let msg = 'Jenis kesalahan <b>belum dapat dipastikan</b> dari jawaban ini.';
  if(chosenPola) msg += ` Yang terverifikasi dari data: opsi yang kamu pilih adalah pola <b>${chosenPola.p}</b> (${chosenPola.m}) — bandingkan fungsi & nuansanya dengan <b>${p.p}</b> (${p.m}) di bawah.`;
  return msg;
}

/* Feedback Bunpou: seluruhnya dari metadata POLA / POLA_EXTRA di database materi - bukan karangan. */
function revGrammarBlock(e){
  if(REV_KIND(e.c)!=='grammar') return '';
  /* Resolusi pid: metadata log (pickD) -> tag soal -> identitas persis opsi benar.
     Tanpa satu pun bukti itu, blok feedback tidak ditampilkan (tidak menebak pola). */
  const {pid, optPids} = revResolvePola(e);
  if(!pid) return '';
  const p = POLA.find(x=>x.id===pid);
  const x = POLA_EXTRA[pid]||{};
  return `
    <div class="ex-box" style="margin-top:12px">
      <div class="label" style="font-size:12px">Feedback Bunpou</div>
      <div class="small mt8">Pola: <b>${p.p}</b> — ${p.m}</div>
      <div class="small mt8">${revErrorKind(e, pid, p, optPids)}</div>
      <div class="mt12"><b class="small">Yang perlu diingat:</b></div>
      <div class="small mt8">📌 Pola: ${p.p} (${p.m})</div>
      ${x.setsu?`<div class="small mt8">🧩 Rumus/接続: ${x.setsu}</div>`:''}
      <div class="small mt8">✅ Alasan jawaban benar: ${e.d||p.d}</div>
      ${x.miss?`<div class="small mt8">⚠️ Kesalahan umum: ${x.miss}</div>`:''}
      ${x.nua?`<div class="small mt8">💡 Nuansa: ${x.nua}</div>`:''}
      <div class="ex-box" style="margin-top:10px"><div>${p.ex}</div><div class="example-id">${p.exi}</div></div>
    </div>`;
}

/* Materi terkait untuk soal Kanji/Kosakata, diambil dari KANJI/KATA yang dirujuk tag soal. */
function revMateriBlock(e){
  const kid = (e.tags||[]).find(t=>/^k\d+$/.test(t));
  if(kid){
    const k = KANJI.find(x=>x.id===kid);
    if(k) return `
    <div class="ex-box" style="margin-top:12px">
      <div class="label" style="font-size:12px">Materi terkait</div>
      <div class="mt8" style="font-size:20px"><ruby>${k.k}<rt>${k.r}</rt></ruby> <span class="muted small">${k.r}</span></div>
      <div class="small mt8">${k.m}</div>
      <div class="small mt8 muted">${k.ex} — ${k.exi}</div>
    </div>`;
  }
  const wid = (e.tags||[]).find(t=>/^w\d+$/.test(t));
  if(wid){
    const w = KATA.find(x=>x.id===wid);
    if(w) return `
    <div class="ex-box" style="margin-top:12px">
      <div class="label" style="font-size:12px">Materi terkait</div>
      <div class="mt8" style="font-weight:700">${w.w} <span class="muted small">${w.r}</span></div>
      <div class="small mt8">${w.m}</div>
      <div class="small mt8 muted">${w.ex} — ${w.exi}</div>
    </div>`;
  }
  return '';
}

/* Detail kartu: soal lengkap, opsi bertanda (✓ benar / ✗ pilihanmu), pembahasan, feedback. */
function revDetailHTML(e){
  const optsHtml = e.opts.map((o,i)=>{
    let cls='opt', mark='';
    if(i===e.ans){ cls+=' correct'; mark=' ✓'; }
    if(i===e.mine && i!==e.ans){ cls+=' wrong'; mark=' ✗ pilihanmu'; }
    return `<div class="${cls}" style="cursor:default"><span class="key">${'ABCD'[i]}</span><span>${o}${mark}</span></div>`;
  }).join('');
  const sec = Math.max(1, Math.round((e.ms||0)/1000));
  return `
    <p class="q-sentence" style="font-size:17px">${String(e.q).replace('____','<span class="blank">＿＿＿</span>')}</p>
    <div class="opts mt8" style="margin-top:10px">${optsHtml}</div>
    <div class="small mt12">Jawabanmu: <b style="color:var(--red)">${'ABCD'[e.mine]}. ${e.opts[e.mine]}</b></div>
    <div class="small mt8">Jawaban benar: <b style="color:var(--green)">${'ABCD'[e.ans]}. ${e.opts[e.ans]}</b></div>
    <div class="mini-note mt8">${REV_CAT_LABEL[e.c]||e.c} · ${e.type||'soal'} · ${sec} dtk</div>
    ${e.d?`<div class="explain" style="margin-top:12px"><b>Pembahasan</b><p class="mt8">${e.d}</p></div>`:''}
    ${revGrammarBlock(e)}
    ${revMateriBlock(e)}
  `;
}

function renderDiagReview(){
  document.querySelectorAll('[data-revcat]').forEach(b=>b.classList.toggle('active', b.dataset.revcat===revCat));
  document.querySelectorAll('[data-revlv]').forEach(b=>b.classList.toggle('active', b.dataset.revlv===revLv));
  const list = $('revList');
  const log = diagLog();
  if(!log){
    $('revSummary').textContent = '';
    list.innerHTML = '<div class="card"><p class="small muted">Detail jawaban tidak tersedia untuk tes ini. Kerjakan tes diagnostik terbaru — detail per soal mulai terekam dari tes itu.</p></div>';
    return;
  }
  const wrong = log.filter(e=>!e.ok);
  const filtered = wrong.filter(e=>(revCat==='all'||REV_KIND(e.c)===revCat)&&(revLv==='all'||e.lv===revLv));
  $('revSummary').textContent = `${wrong.length} soal salah dari ${log.length} soal · tes ${state.diagLast.date}`;
  if(!wrong.length){
    list.innerHTML = '<div class="card done"><div class="big">🎉</div><p class="small muted mt8">Tes terakhir tanpa kesalahan — tidak ada yang perlu di-review.</p></div>';
    return;
  }
  if(!filtered.length){
    list.innerHTML = '<p class="muted small">Tidak ada soal salah pada filter ini.</p>';
    return;
  }
  list.innerHTML = filtered.map((e,ix)=>`
    <div class="card pola tall" data-rev="${ix}" data-qid="${e.id}">
      <button aria-expanded="false">
        <span class="lvl ${e.lv==='N3'?'n3':'n2'}">${e.lv}</span>
        <div>
          <div class="jp" style="font-size:15px; line-height:1.5">${String(e.q).replace('____','＿＿＿')}</div>
          <div class="sub mt8">${REV_KIND_LABEL[REV_KIND(e.c)]}${e.topic?' · '+e.topic:''}</div>
          <div class="sub" style="margin-top:4px">Jawabanmu: <b style="color:var(--red)">${'ABCD'[e.mine]}</b> · Benar: <b style="color:var(--green)">${'ABCD'[e.ans]}</b> · <span style="color:var(--accent); font-weight:600">Lihat pembahasan</span></div>
        </div>
        <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>
      </button>
      <div class="body"><div class="inner">${revDetailHTML(e)}</div></div>
    </div>`).join('');
}

/* Baris review kecil di kartu diagnostik Home (hanya bila detail tersedia; hasil lama -> catatan aman). */
function revHomeLine(){
  const log = diagLog();
  if(!log) return '<p class="mini-note mt8">🔎 Detail per soal terekam mulai tes diagnostik berikutnya.</p>';
  const w = log.filter(e=>!e.ok).length;
  return w
    ? `<button class="mini-rev mt8" id="diagRevHome" style="min-height:32px">🔎 Review ${w} soal salah dari tes ${state.diagLast.date}</button>`
    : '<p class="mini-note mt8">Tes terakhir: semua soal benar 🎉</p>';
}

$('revBack').addEventListener('click', closeDiagReview);
$('btnDiagReview').addEventListener('click', ()=>openDiagReview('all','result'));
document.querySelectorAll('[data-revcat]').forEach(b=>b.addEventListener('click', ()=>{ revCat=b.dataset.revcat; renderDiagReview(); }));
document.querySelectorAll('[data-revlv]').forEach(b=>b.addEventListener('click', ()=>{ revLv=b.dataset.revlv; renderDiagReview(); }));
$('revList').addEventListener('click', e=>{
  const btn = e.target.closest('[data-rev] > button');
  if(!btn) return;
  const box = btn.closest('.pola');
  const opening = !box.classList.contains('open');
  box.classList.toggle('open');
  btn.setAttribute('aria-expanded', opening);
});


/* ================= FLASHCARD KANJI ================= */
let deck=[], ci=0, flipped=false, sessionXp=0, shuffleOn=false;

function shuffleArr(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function startDeck(hardOnly){
  let base = hardOnly ? KANJI.filter(k=>state.hard.includes(k.id)) : [...KANJI];
  if(base.length===0) base=[...KANJI];
  deck = shuffleOn ? shuffleArr(base) : base;
  ci=0; flipped=false; sessionXp=0;
  $('fcDone').hidden = true;
  $('flashWrap').style.display = '';
  $('fcActions').style.display = '';
  renderCard();
}
function renderCard(){
  const k = deck[ci];
  $('flashcard').classList.remove('flipped');
  $('cardKanji').textContent = k.k;
  $('cardReading').textContent = k.r;
  $('cardMeaning').textContent = k.m;
  $('cardExample').textContent = k.ex;
  $('cardExampleId').textContent = k.exi;
  $('cardCounter').textContent = `Kartu ${ci+1} dari ${deck.length}`;
  $('cardBar').style.width = (ci/deck.length*100)+'%';
  $('masteredInfo').textContent = `${state.mastered.length} hafal`;
}
function flip(){ flipped=!flipped; $('flashcard').classList.toggle('flipped', flipped); }
$('flashcard').addEventListener('click', flip);
$('flashcard').addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); flip(); }});

$('btnShuffle').addEventListener('click', ()=>{
  shuffleOn = !shuffleOn;
  $('btnShuffle').textContent = shuffleOn ? '🔀 Acak: aktif' : '🔀 Acak: mati';
  $('btnShuffle').classList.toggle('on', shuffleOn);
  $('btnShuffle').setAttribute('aria-pressed', shuffleOn);
  startDeck(false);
});

function mark(hafal){
  const k = deck[ci];
  bumpToday();
  if(hafal){
    if(!state.mastered.includes(k.id)){ state.mastered.push(k.id); addXp(10); sessionXp+=10; }
    state.hard = state.hard.filter(id=>id!==k.id);
  } else {
    if(!state.hard.includes(k.id)) state.hard.push(k.id);
    recordError(k.id);   /* masuk riwayat kesalahan → review adaptif */
  }
  if(state.today.count>=20 && !state.challengeDone){
    state.challengeDone = dayStr(); addXp(50); sessionXp+=50;
  }
  save(); refreshStats();
  ci++;
  flipped=false;
  if(ci>=deck.length){
    $('flashWrap').style.display='none';
    $('fcActions').style.display='none';
    $('fcDone').hidden=false;
    $('doneSummary').textContent = `${deck.length} kartu diulas · +${sessionXp} XP`;
    const hc = KANJI.filter(k=>state.hard.includes(k.id)).length;
    $('btnHardOnly').hidden = hc===0;
    $('hardCount').textContent = hc;
    $('cardBar').style.width='100%';
    $('cardCounter').textContent = `Kartu ${deck.length} dari ${deck.length}`;
  } else renderCard();
}
$('btnHafal').addEventListener('click', ()=>mark(true));
$('btnUlangi').addEventListener('click', ()=>mark(false));
$('btnRestart').addEventListener('click', ()=>startDeck(false));
$('btnHardOnly').addEventListener('click', ()=>startDeck(true));

/* ================= SHEET UMUM (detail kanji & kata) ================= */
function openSheetHTML(html, furiKey){
  $('sheetContent').innerHTML = html;
  const on = furiKey ? state.furigana[furiKey]!==false : true;
  $('sheet').classList.toggle('nf', !on);
  $('sheet').classList.toggle('fo', !!on);
  $('scrim').classList.add('show');
  $('sheet').classList.add('show');
}
function closeSheet(){ $('scrim').classList.remove('show'); $('sheet').classList.remove('show'); }
$('scrim').addEventListener('click', closeSheet);
$('sheetClose').addEventListener('click', closeSheet);

function openKanjiSheet(id){
  const k = KANJI.find(x=>x.id===id); if(!k) return;
  const det = KDETAIL[id];
  const mastered = state.mastered.includes(id);
  const hard = !mastered && state.hard.includes(id);
  openSheetHTML(`
    <span class="tag">${k.lv==='N3'?'JLPT N3':'JLPT N2'}</span>
    ${mastered?'<span class="tag green" style="margin-left:6px">✓ hafal</span>':''}
    ${hard?'<span class="tag orange" style="margin-left:6px">↺ sulit</span>':''}
    <div class="mt12" style="font-size:40px; font-weight:700; line-height:1.2"><ruby>${k.k}<rt>${k.r}</rt></ruby></div>
    <div style="font-size:20px; color:var(--accent); font-weight:600" class="mt8">${k.r}</div>
    <div style="font-size:18px" class="mt8">${k.m}</div>
    ${det ? `
    <div class="label mt16">Onyomi / pecahan kanji</div>
    <div class="ex-box mt8"><div>${det.c}</div></div>
    <div class="label mt16">Kata turunan & pasangan</div>
    <div class="list mt8">${det.w.map(w=>`
      <div class="ex-box"><div>${w[0]} <span class="example-id">${w[1]}</span></div><div class="example-id">${w[2]}</div></div>`).join('')}
    </div>` : ''}
    <div class="label mt16">Contoh kalimat</div>
    <div class="ex-box mt8"><div>${k.ex}</div><div class="example-id">${k.exi}</div></div>
  `, 'kanji');
}

/* ================= DAFTAR KANJI (render bertahap + pencarian) ================= */
const KJ_PAGE = 60; /* render bertahap agar 500+ kanji tetap ringan */
let kjShown = KJ_PAGE;
function kanjiMatch(k, f){
  const q = (f||'').trim().toLowerCase();
  if(!q) return true;
  return k.k.includes(f.trim()) || k.r.includes(q) || k.m.toLowerCase().includes(q)
      || (k.lv||'').toLowerCase()===q;
}
function kanjiItemHTML(k){
  const mastered = state.mastered.includes(k.id);
  const hard = !mastered && state.hard.includes(k.id);
  return `
    <button class="item" data-kj="${k.id}">
      <div>
        <div class="jp"><ruby>${k.k}<rt>${k.r}</rt></ruby></div>
        <div class="sub">${k.m}</div>
      </div>
      <span class="marks">
        ${mastered ? '<span class="tag green">✓ hafal</span>' : ''}
        ${hard ? '<span class="tag orange">↺ sulit</span>' : ''}
      </span>
      <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>
    </button>`;
}
function renderKanjiList(filter='', keepShown=false){
  if(!keepShown) kjShown = KJ_PAGE;
  const items = KANJI.filter(k=>kanjiMatch(k, filter));
  const slice = items.slice(0, kjShown);
  const more = items.length - slice.length;
  if(!items.length){ $('kanjiList').innerHTML = '<p class="muted small">Tidak ada kanji yang cocok.</p>'; return; }
  $('kanjiList').innerHTML = slice.map(kanjiItemHTML).join('')
    + (more>0 ? `<button class="btn btn-outline btn-block" id="kjMore">Tampilkan lebih banyak (${more} lagi)</button>` : '');
}
$('kanjiSearch').addEventListener('input', e=>renderKanjiList(e.target.value));
$('kanjiList').addEventListener('click', e=>{
  const moreBtn = e.target.closest('#kjMore');
  if(moreBtn){ kjShown += KJ_PAGE; renderKanjiList($('kanjiSearch').value, true); return; }
  const b = e.target.closest('[data-kj]');
  if(b) openKanjiSheet(b.dataset.kj);
});

/* ================= KOTOBA ================= */
function renderKata(filter=''){
  const f = filter.trim().toLowerCase();
  const items = KATA.filter(k=>!f || k.w.includes(filter.trim()) || k.r.includes(f) || k.m.toLowerCase().includes(f));
  $('kataList').innerHTML = items.map(k=>`
    <button class="item" data-kata="${k.id}">
      <div>
        <div class="jp"><ruby>${k.w}<rt>${k.r}</rt></ruby></div>
        <div class="sub">${k.m}</div>
      </div>
      <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>
    </button>`).join('') || '<p class="muted small">Tidak ada kosakata yang cocok.</p>';
  document.querySelectorAll('[data-kata]').forEach(el=>el.addEventListener('click', ()=>openKataSheet(el.dataset.kata)));
}
$('kataSearch').addEventListener('input', e=>renderKata(e.target.value));

function openKataSheet(id){
  const k = KATA.find(x=>x.id===id); if(!k) return;
  const col = KCOL[id];
  openSheetHTML(`
    <span class="tag">JLPT N2</span>
    ${col && col.reg ? `<span class="tag orange" style="margin-left:6px">${col.reg}</span>` : ''}
    <div class="mt12" style="font-size:40px; font-weight:700; line-height:1.2"><ruby>${k.w}<rt>${k.r}</rt></ruby></div>
    <div style="font-size:20px; color:var(--accent); font-weight:600" class="mt8">${k.r}</div>
    <div style="font-size:18px" class="mt8">${k.m}</div>
    ${col ? `
    <div class="label mt16">Kolokasi & pasangan umum</div>
    <div class="list mt8">${col.col.map(c=>`
      <div class="ex-box"><div>${c[0]}</div><div class="example-id">${c[1]}</div></div>`).join('')}
    </div>
    ${col.syn ? `<div class="small mt12">🔗 Sinonim: ${col.syn}</div>` : ''}
    ${col.ant ? `<div class="small mt8">↔️ Antonim: ${col.ant}</div>` : ''}
    ${col.mix ? `<div class="small mt8">⚖️ Mudah tertukar: ${col.mix}</div>` : ''}`
    : '<p class="small muted mt16">Belajar lewat contoh kalimat di bawah ini.</p>'}
    <div class="label mt16">Contoh kalimat</div>
    <div class="ex-box mt8"><div>${k.ex}</div><div class="example-id">${k.exi}</div></div>
    <div class="ex-box mt8"><div>${k.ex2}</div><div class="example-id">${k.exi2}</div></div>
  `, 'kotoba');
  if(!state.kataDilihat.includes(id)){ state.kataDilihat.push(id); save(); refreshStats(); }
}

/* ================= BUNPOU (diperkaya) ================= */
function renderPola(){
  $('polaList').innerHTML = POLA.map(p=>{
    const hafal = state.polaHafal.includes(p.id);
    const [st, stLabel] = polaStatus(p.id);
    const x = POLA_EXTRA[p.id] || {};
    return `
    <div class="card pola" data-pola="${p.id}">
      <button aria-expanded="false">
        <span class="lvl ${p.lv==='N3'?'n3':'n2'}">${p.lv}</span>
        <div>
          <div class="jp">${p.p}</div>
          <div class="sub">${p.m}</div>
        </div>
        ${hafal ? '<span class="status-tag st-mastered">✓ Hafal</span>'
          : st==='weak' ? '<span class="status-tag st-weak">⚠ Lemah</span>'
          : st==='learning' ? '<span class="status-tag st-learning">Belajar</span>' : ''}
        <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>
      </button>
      <div class="body"><div class="inner">
        <p class="small">${p.d}</p>
        ${x.setsu ? `<div class="ex-box"><div class="label" style="font-size:12px">接続 · cara menyambung</div><div class="small mt8">${x.setsu}</div></div>` : ''}
        ${x.nua ? `<div class="ex-box"><div class="label" style="font-size:12px">Nuansa</div><div class="small mt8">${x.nua}</div></div>` : ''}
        ${x.miss ? `<div class="ex-box"><div class="label" style="font-size:12px">Kesalahan umum</div><div class="small mt8">${x.miss}</div></div>` : ''}
        ${x.simi ? `<div class="ex-box"><div class="label" style="font-size:12px">Bandingkan dengan pola mirip</div><div class="small mt8">${x.simi}</div></div>` : ''}
        <div class="ex-box"><div>${p.ex}</div><div class="example-id">${p.exi}</div></div>
        <div class="ex-box"><div>${p.ex2}</div><div class="example-id">${p.exi2}</div></div>
        <button class="btn ${hafal?'hafal-btn on':'btn-outline'} btn-block" data-hafal="${p.id}">
          ${hafal ? '✓ Sudah hafal (ketuk untuk batal)' : 'Tandai sudah hafal'}
        </button>
      </div></div>
    </div>`;
  }).join('');
  document.querySelectorAll('[data-pola] > button').forEach(btn=>btn.addEventListener('click', ()=>{
    const box = btn.closest('.pola');
    const opening = !box.classList.contains('open');
    box.classList.toggle('open');
    btn.setAttribute('aria-expanded', opening);
    if(opening && !state.polaDibaca.includes(box.dataset.pola)){
      state.polaDibaca.push(box.dataset.pola); save(); refreshStats();
    }
  }));
  document.querySelectorAll('[data-hafal]').forEach(btn=>btn.addEventListener('click', e=>{
    e.stopPropagation();
    const id = btn.dataset.hafal;
    if(state.polaHafal.includes(id)){
      state.polaHafal = state.polaHafal.filter(x=>x!==id);
    } else {
      state.polaHafal.push(id);
      if(state.errors[id]) delete state.errors[id];  /* sudah dikuasai → keluar dari daftar lemah */
      addXp(5);
    }
    save(); refreshStats(); renderPolaKeepOpen(id);
  }));
}
function renderPolaKeepOpen(openId){
  renderPola();
  const box = document.querySelector(`[data-pola="${openId}"]`);
  if(box){ box.classList.add('open'); box.querySelector('button').setAttribute('aria-expanded','true'); }
}

/* ================= KONTRAS ================= */
function renderKontras(){
  $('kontrasList').innerHTML = CONTRAST.map(g=>{
    const done = state.contrastDone.includes(g.id);
    return `
    <div class="card pola" data-kontra="${g.id}">
      <button aria-expanded="false">
        <span style="font-size:20px">⚖️</span>
        <div>
          <div class="jp" style="font-size:17px">${g.title}</div>
          <div class="sub">${g.desc}</div>
        </div>
        ${done ? '<span class="status-tag st-mastered">✓ dilatih</span>' : ''}
        <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>
      </button>
      <div class="body"><div class="inner">
        ${g.items.map(it=>`
          <div class="kontra-line">
            <b>${it[0]}</b>
            <span class="small">${it[1]}<br><span class="muted">${it[2]}</span></span>
          </div>`).join('')}
        <button class="btn btn-primary btn-block" data-kontra-go="${g.id}">Latihan: ${g.title} (${g.qs.length} soal)</button>
      </div></div>
    </div>`;
  }).join('');
  document.querySelectorAll('[data-kontra] > button').forEach(btn=>btn.addEventListener('click', ()=>{
    const box = btn.closest('.pola');
    const opening = !box.classList.contains('open');
    box.classList.toggle('open');
    btn.setAttribute('aria-expanded', opening);
  }));
  document.querySelectorAll('[data-kontra-go]').forEach(btn=>btn.addEventListener('click', e=>{
    e.stopPropagation();
    startContrast(btn.dataset.kontraGo);
  }));
}
function startContrast(gid){
  const g = CONTRAST.find(x=>x.id===gid); if(!g) return;
  go('soal');
  startSession(g.qs.map(q=>({...q})), `Kontras · ${g.title}`, 'contrast:'+gid);
}

/* ================= QUIZ ENGINE (per paket) ================= */
let session=null;
function showPackMenu(){
  $('packMenu').hidden=false; $('quizRun').hidden=true;
  renderPackList();
}
function renderPackList(){
  $('packList').innerHTML = PACKS.map(p=>{
    const best = state.packBest[p.id];
    return `<button class="item" data-pack="${p.id}">
      <span style="font-size:22px">${p.icon}</span>
      <div class="grow">
        <div class="jp" style="font-size:16px">${p.name}</div>
        <div class="sub">${p.desc}</div>
      </div>
      ${best!=null?`<span class="pack-best">${best}%</span>`:''}
      <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>
    </button>`;
  }).join('');
  document.querySelectorAll('[data-pack]').forEach(el=>el.addEventListener('click', ()=>startPack(el.dataset.pack)));
  $('mockBestLine').textContent = state.mockBest!=null ? `Practice Score terbaik: ${state.mockBest}%` : 'Belum pernah simulasi';
}
function poolForPack(p){
  if(p.cat) return QUIZ.filter(q=>q.cat===p.cat);
  if(p.special==='mixed') return shuffleArr(QUIZ).slice(0,12);
  if(p.special==='contrast') return CONTRAST.flatMap(g=>g.qs);
  return QUIZ;
}
function startPack(id){
  const p = PACKS.find(x=>x.id===id); if(!p) return;
  startSession(poolForPack(p), p.icon+' '+p.name, p.id);
}
function startSession(pool, title, packId){
  session = {pool: shuffleArr(pool), idx:0, score:0, packId, title, xp:0, answered:false};
  $('packMenu').hidden=true; $('quizRun').hidden=false;
  $('quizDone').hidden=true; $('quizBody').style.display='';
  $('qPackName').textContent = title;
  renderQ();
  document.getElementById('main').scrollTop = 0;
}
function gradeSessionAnswer(ok, q, extraD){
  session.answered=true;
  if(ok){ session.score++; session.xp+=15; addXp(15); (q.tags||[]).forEach(t=>recordOk(t)); }
  else (q.tags||[]).forEach(t=>recordError(t));
  state.week.soal++;
  save(); refreshStats();
  $('qExplainText').textContent = (extraD?extraD+' - ':'') + q.d;
  $('qExplain').hidden = false;
  $('qNext').textContent = session.idx===session.pool.length-1 ? 'Lihat hasil' : 'Soal berikutnya';
}
function renderQ(){
  session.answered=false;
  const q = session.pool[session.idx];
  $('qCounter').textContent = `Soal ${session.idx+1}/${session.pool.length}`;
  $('qBar').style.width = (session.idx/session.pool.length*100)+'%';
  $('qType').textContent = q.type || '';
  $('qText').innerHTML = q.q.replace('____','<span class="blank">___</span>');
  $('qExplain').hidden = true;
  if(q.type==='fill'){
    $('qOpts').innerHTML = `
      <input class="fill-input" id="fillInput" placeholder="Ketik jawabanmu..." autocomplete="off" autocapitalize="none" spellcheck="false">
      <button class="btn btn-primary btn-block mt12" id="fillCheck">Periksa</button>`;
    const doCheck = ()=>{
      if(session.answered) return;
      const v = $('fillInput').value.trim();
      if(!v) return;
      const norm = x=>x.toLowerCase().replace(/\s+/g,'');
      const ok = (q.answers||[]).some(a=>norm(a)===norm(v));
      $('fillInput').classList.add(ok?'ok':'ng');
      $('fillInput').disabled = true; $('fillCheck').disabled = true;
      gradeSessionAnswer(ok, q, ok?null:`Jawaban benar: ${q.answers[0]}`);
    };
    $('fillCheck').addEventListener('click', doCheck);
    $('fillInput').addEventListener('keydown', e=>{ if(e.key==='Enter') doCheck(); });
  } else if(q.words){
    const shuffledChips = shuffleArr(q.words.map((w,i)=>({w,i})));
    let seq=[];
    $('qOpts').innerHTML = `
      <div class="order-line" id="orderLine"><span class="muted small">Ketuk potongan di bawah untuk menyusun.</span></div>
      <div class="chips">${shuffledChips.map((c,ci)=>`<button class="chip" data-chip="${ci}">${c.w}</button>`).join('')}</div>
      <div class="fc-actions" style="grid-template-columns:1fr 1fr">
        <button class="btn btn-outline" id="orderReset">Ulangi susun</button>
        <button class="btn btn-primary" id="orderCheck">Periksa</button>
      </div>`;
    document.querySelectorAll('[data-chip]').forEach(el=>el.addEventListener('click', ()=>{
      if(session.answered||el.classList.contains('used')) return;
      el.classList.add('used');
      seq.push(shuffledChips[+el.dataset.chip].w);
      $('orderLine').innerHTML = seq.map(w=>`<b>${w}</b>`).join(' ');
    }));
    $('orderReset').addEventListener('click', ()=>{
      if(session.answered) return;
      seq=[]; $('orderLine').innerHTML='<span class="muted small">Ketuk potongan di bawah untuk menyusun.</span>';
      document.querySelectorAll('[data-chip]').forEach(x=>x.classList.remove('used'));
    });
    $('orderCheck').addEventListener('click', ()=>{
      if(session.answered||seq.length<q.words.length) return;
      const ok = seq.join('')===q.words.join('');
      $('orderLine').style.borderColor = ok?'var(--green)':'var(--red)';
      if(!ok) $('orderLine').innerHTML += `<div class="small" style="color:var(--red); width:100%">Urutan benar: ${q.words.join(' ')}</div>`;
      gradeSessionAnswer(ok, q);
    });
  } else {
    $('qOpts').innerHTML = q.opts.map((o,i)=>`
      <button class="opt" data-opt="${i}"><span class="key">${'ABCD'[i]}</span>${o}</button>`).join('');
    document.querySelectorAll('[data-opt]').forEach(el=>el.addEventListener('click', ()=>pick(+el.dataset.opt)));
  }
}
function pick(i){
  if(session.answered) return;
  const q = session.pool[session.idx];
  document.querySelectorAll('[data-opt]').forEach(el=>{
    const n=+el.dataset.opt;
    if(n===q.a) el.classList.add('correct');
    else if(n===i) el.classList.add('wrong');
    el.disabled = true;
  });
  gradeSessionAnswer(i===q.a, q);
}
$('qNext').addEventListener('click', ()=>{
  session.idx++;
  if(session.idx>=session.pool.length){
    const total = session.pool.length, sc = session.score;
    const pc = pct(sc,total);
    if(session.packId){
      state.packBest[session.packId] = Math.max(state.packBest[session.packId]||0, pc);
      if(session.packId.startsWith('contrast:')){
        const gid = session.packId.split(':')[1];
        if(!state.contrastDone.includes(gid)) state.contrastDone.push(gid);
      }
    }
    state.quizBest = Math.max(state.quizBest, pc);
    save(); refreshStats();
    $('quizBody').style.display='none';
    $('quizDone').hidden=false;
    $('quizScoreTitle').textContent = `Skor kamu ${sc}/${total} (${pc}%)`;
    $('quizScoreSub').textContent = pc===100
      ? 'Sempurna! Lencana "Skor Sempurna" terbuka. 🎉'
      : `Kamu dapat +${session.xp} XP. Kesalahan tercatat otomatis untuk review adaptif.`;
    $('qBar').style.width='100%';
  } else renderQ();
});
$('quizRetry').addEventListener('click', ()=>startSession(session.pool, session.title, session.packId));
$('quizBack').addEventListener('click', ()=>showPackMenu());

/* ================= READING ================= */
let readSess=null;
function readLvTag(lv){
  if(lv==='N2') return '<span class="lvl n2">N2</span>';
  if(lv==='Sedang') return '<span class="lvl" style="background:var(--orange-soft); color:var(--orange)">Sedang</span>';
  return '<span class="lvl n3">Pendek</span>';
}
function renderReadList(){
  $('readList').innerHTML = READING.map(r=>{
    const best = state.readBest[r.id];
    return `<button class="item" data-read="${r.id}">
      ${readLvTag(r.lv)}
      <div class="grow">
        <div class="jp" style="font-size:16px">${r.title}</div>
        <div class="sub">${r.kind} · ${r.qs.length} soal pemahaman</div>
      </div>
      ${best!=null?`<span class="pack-best">${best}%</span>`:''}
      <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>
    </button>`;
  }).join('');
  document.querySelectorAll('[data-read]').forEach(el=>el.addEventListener('click', ()=>openRead(el.dataset.read)));
}
function openRead(id){
  const r = READING.find(x=>x.id===id); if(!r) return;
  readSess = {r, qi:0, score:0, answered:false};
  $('readMenu').hidden=true; $('readView').hidden=false;
  $('readTitle').textContent = r.title;
  $('readMeta').innerHTML = readLvTag(r.lv) + ` <span class="tag" style="margin-left:6px">${r.kind}</span>`;
  $('readBody').innerHTML = r.paras.map(p=>`<p style="margin-bottom:12px">${p}</p>`).join('');
  renderRQ();
  document.getElementById('main').scrollTop = 0;
}
function renderRQ(){
  const r = readSess.r, q = r.qs[readSess.qi];
  readSess.answered=false;
  $('readQuiz').innerHTML = `
    <div class="row between"><span class="label">Soal ${readSess.qi+1}/${r.qs.length}</span><span class="qtype">${q.type}</span></div>
    <div class="card mt12">
      <p class="q-sentence" style="font-size:17px">${q.q}</p>
      <div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-ropt="${i}"><span class="key">${'ABCD'[i]}</span>${o}</button>`).join('')}</div>
    </div>
    <div class="explain" id="rExplain" hidden>
      <b>Pembahasan</b>
      <p class="mt8">${q.d}</p>
      <button class="btn btn-primary btn-block mt12" id="rNext">${readSess.qi===r.qs.length-1?'Lihat hasil':'Soal berikutnya'}</button>
    </div>`;
  document.querySelectorAll('[data-ropt]').forEach(el=>el.addEventListener('click', ()=>pickR(+el.dataset.ropt)));
  $('rNext').addEventListener('click', ()=>{
    readSess.qi++;
    if(readSess.qi>=r.qs.length) finishRead(); else renderRQ();
  });
}
function pickR(i){
  if(readSess.answered) return; readSess.answered=true;
  const q = readSess.r.qs[readSess.qi];
  document.querySelectorAll('[data-ropt]').forEach(el=>{
    const n=+el.dataset.ropt;
    if(n===q.a) el.classList.add('correct');
    else if(n===i) el.classList.add('wrong');
    el.disabled = true;
  });
  if(i===q.a){ readSess.score++; addXp(15); }
  else recordError('rdg:'+q.type);
  state.week.soal++;
  save(); refreshStats();
  $('rExplain').hidden=false;
}
function finishRead(){
  const r = readSess.r;
  const pc = pct(readSess.score, r.qs.length);
  state.readBest[r.id] = Math.max(state.readBest[r.id]||0, pc);
  save(); refreshStats();
  $('readQuiz').innerHTML = `
    <div class="card done">
      <div class="big">📖</div>
      <h2 class="section mt8">${readSess.score}/${r.qs.length} benar (${pc}%)</h2>
      <p class="muted small mt8">Baca ulang teksnya, perhatikan bagian yang salah.</p>
      <button class="btn btn-primary btn-block mt16" id="readRetry">Ulangi bacaan ini</button>
      <button class="btn btn-outline btn-block mt12" id="readDoneBack">Kembali ke daftar bacaan</button>
    </div>`;
  $('readDoneBack').addEventListener('click', closeRead);
  $('readRetry').addEventListener('click', ()=>openRead(readSess.r.id));
}
function closeRead(){
  $('readView').hidden=true; $('readMenu').hidden=false;
  renderReadList();
}
$('readBack').addEventListener('click', closeRead);

/* ================= LISTENING (TTS perangkat) ================= */
let listenIdx=0, listenScore=0;
function renderListen(){
  const box = $('listenBox');
  const supported = 'speechSynthesis' in window;
  if(listenIdx>=LISTEN.length){
    box.innerHTML = `<div class="done" style="padding:16px">
      <div class="big">🎧</div>
      <p class="small muted mt8">Sesi listening selesai · ${listenScore}/${LISTEN.length} benar</p>
      <button class="btn btn-outline btn-block mt12" id="listenRestart">Ulangi sesi</button>
    </div>`;
    $('listenRestart').addEventListener('click', ()=>{ listenIdx=0; listenScore=0; renderListen(); });
    return;
  }
  const it = LISTEN[listenIdx];
  box.innerHTML = `
    <div class="row between"><span class="small muted">Soal ${listenIdx+1}/${LISTEN.length}</span></div>
    <button class="btn btn-primary btn-block mt12" id="listenPlay">▶ Putar audio</button>
    ${!supported ? '<p class="listen-note">⚠️ Perangkat ini tidak mendukung text-to-speech — transkrip bisa dibuka setelah menjawab.</p>' : '<p class="listen-note">Dengarkan dulu, baru jawab. Transkrip tersembunyi sampai kamu menjawab.</p>'}
    <div class="card mt12">
      <p class="q-sentence" style="font-size:17px">${it.q}</p>
      <div class="opts">${it.opts.map((o,i)=>`<button class="opt" data-lopt="${i}"><span class="key">${'ABCD'[i]}</span>${o}</button>`).join('')}</div>
    </div>
    <div class="explain" id="lExplain" hidden>
      <b>Pembahasan</b>
      <p class="mt8">${it.d}</p>
      <div class="ex-box mt12"><div class="label" style="font-size:12px">Transkrip</div><div class="small mt8">${it.sayFuri||it.say}</div></div>
      <button class="btn btn-primary btn-block mt12" id="lNext">${listenIdx===LISTEN.length-1?'Selesai':'Soal berikutnya'}</button>
    </div>`;
  $('listenPlay').addEventListener('click', ()=>{
    if(!supported) return;
    const u = new SpeechSynthesisUtterance(it.say);
    u.lang='ja-JP'; u.rate=0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  });
  document.querySelectorAll('[data-lopt]').forEach(el=>el.addEventListener('click', ()=>{
    const i = +el.dataset.lopt;
    document.querySelectorAll('[data-lopt]').forEach(x=>{
      const n=+x.dataset.lopt;
      if(n===it.a) x.classList.add('correct');
      else if(n===i) x.classList.add('wrong');
      x.disabled = true;
    });
    if(i===it.a){ listenScore++; addXp(10); recordOk('listen:'+it.id); }
    else recordError('listen:'+it.id);
    save(); refreshStats();
    $('lExplain').hidden=false;
    $('lNext').addEventListener('click', ()=>{ listenIdx++; renderListen(); });
  }));
}

/* ================= MOCK TEST N2 ================= */
let mock=null, mockTimer=null;
$('btnMock').addEventListener('click', ()=>go('mock'));
$('btnMockStart').addEventListener('click', startMock);
function startMock(){
  const moji = shuffleArr(QUIZ.filter(q=>q.cat==='n2k').concat(QUIZ.filter(q=>q.cat==='n2v'))).slice(0,8);
  const bun = shuffleArr(QUIZ.filter(q=>q.cat==='n2g').concat(QUIZ.filter(q=>q.cat==='bridge'))).slice(0,10);
  const rshort = READING.filter(r=>r.lv!=='N2');
  const rn2 = READING.filter(r=>r.lv==='N2');
  const rpicks = [rshort[Math.floor(Math.random()*rshort.length)], rn2[Math.floor(Math.random()*rn2.length)]];
  const dokkai = shuffleArr(rpicks.flatMap(r=>r.qs.map(q=>({...q, pas:r.paras.join(' '), ptitle:r.title, cat:'dokkai'})))).slice(0,6);
  const secs = [{name:'文字・語彙',qs:moji},{name:'文法',qs:bun},{name:'読解',qs:dokkai}];
  mock = {secs, flat:secs.flatMap((s,si)=>s.qs.map(q=>({q,si}))), idx:0, ans:{}, time:25*60};
  $('mockIntro').hidden=true; $('mockResult').hidden=true; $('mockRun').hidden=false;
  clearInterval(mockTimer);
  mockTimer = setInterval(()=>{
    mock.time--;
    $('mTimer').textContent = fmtTime(mock.time);
    if(mock.time<=0) finishMock();
  },1000);
  renderM();
  document.getElementById('main').scrollTop = 0;
}
const fmtTime = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
function renderM(){
  const item = mock.flat[mock.idx], q = item.q;
  $('mSec').textContent = mock.secs[item.si].name;
  $('mTimer').textContent = fmtTime(mock.time);
  $('mCounter').textContent = `Soal ${mock.idx+1}/${mock.flat.length} · terjawab ${Object.keys(mock.ans).length}`;
  $('mBar').style.width = (Object.keys(mock.ans).length/mock.flat.length*100)+'%';
  $('mText').innerHTML = (q.pas ? `<span class="small muted">〔${q.ptitle}〕</span><div class="read-body mt8" style="max-height:150px; font-size:14px">${q.pas}</div><span class="mt8" style="display:block">${q.q}</span>` : q.q.replace('____','<span class="blank">＿＿＿</span>'));
  $('mOpts').innerHTML = q.opts.map((o,i)=>{
    const sel = mock.ans[mock.idx]===i;
    return `<button class="opt" data-mopt="${i}" style="${sel?'border-color:var(--accent); background:var(--accent-soft)':''}"><span class="key">${'ABCD'[i]}</span>${o}</button>`;
  }).join('');
  document.querySelectorAll('[data-mopt]').forEach(el=>el.addEventListener('click', ()=>{
    mock.ans[mock.idx] = +el.dataset.mopt;
    renderM();
  }));
  renderMGrid();
}
function renderMGrid(){
  $('mGrid').innerHTML = mock.flat.map((_,i)=>{
    const cls = [i===mock.idx?'cur':'', mock.ans[i]!=null?'ans':''].join(' ');
    return `<button class="${cls}" data-mjump="${i}">${i+1}</button>`;
  }).join('');
  document.querySelectorAll('[data-mjump]').forEach(el=>el.addEventListener('click', ()=>{ mock.idx=+el.dataset.mjump; renderM(); }));
}
$('mPrev').addEventListener('click', ()=>{ if(mock.idx>0){ mock.idx--; renderM(); } });
$('mNext').addEventListener('click', ()=>{ if(mock.idx<mock.flat.length-1){ mock.idx++; renderM(); } });
$('mSkip').addEventListener('click', ()=>{ if(mock.idx<mock.flat.length-1){ mock.idx++; renderM(); } });
$('mReview').addEventListener('click', ()=>{ $('mGridCard').hidden = !$('mGridCard').hidden; });
$('mSubmit').addEventListener('click', ()=>{
  const un = mock.flat.length - Object.keys(mock.ans).length;
  if(un>0 && !confirm(`Masih ada ${un} soal belum terjawab. Kumpulkan sekarang?`)) return;
  finishMock();
});
function finishMock(){
  if(!mock||mock.finished) return;
  mock.finished=true;
  clearInterval(mockTimer);
  let total=0, correct=0;
  const secStat = mock.secs.map(()=>[0,0]);
  const wrongTags = {};
  mock.flat.forEach((it,i)=>{
    secStat[it.si][1]++; total++;
    if(mock.ans[i]===it.q.a){ secStat[it.si][0]++; correct++; }
    else (it.q.tags||[]).forEach(t=>{ wrongTags[t]=(wrongTags[t]||0)+1; recordError(t); });
  });
  const pc = pct(correct,total);
  state.mockBest = Math.max(state.mockBest||0, pc);
  save(); refreshStats();
  $('mockRun').hidden=true; $('mockResult').hidden=false;
  $('mScore').textContent = pc+'%';
  $('mBreak').innerHTML = mock.secs.map((s,i)=>`
    <div class="diag-row">
      <div class="top"><span>${s.name}</span><b>${secStat[i][0]}/${secStat[i][1]}</b></div>
      <div class="bar"><i style="width:${pct(secStat[i][0],secStat[i][1])}%"></i></div>
    </div>`).join('');
  const wk = Object.entries(wrongTags).sort((a,b)=>b[1]-a[1]).slice(0,5);
  $('mWeak').innerHTML = wk.length
    ? wk.map(([t,c])=>`<div class="row between small" style="padding:6px 0"><span>${labelFor(t)}</span><b style="color:var(--red)">×${c}</b></div>`).join('')
    : '<p class="small muted">Tidak ada kelemahan — sempurna! 🎉</p>';
  mock.lastWrongTags = wk.map(x=>x[0]);
  document.getElementById('main').scrollTop = 0;
}
$('mWeakBtn').addEventListener('click', ()=>{
  const tags = mock.lastWrongTags||[];
  let pool = QUIZ.filter(q=>(q.tags||[]).some(t=>tags.includes(t)));
  pool = pool.concat(CONTRAST.flatMap(g=>g.qs).filter(q=>(q.tags||[]).some(t=>tags.includes(t))));
  if(pool.length===0) pool = shuffleArr(QUIZ).slice(0,10);
  go('soal');
  startSession(pool, '🎯 Latihan Kelemahan', null);
});
$('mHome').addEventListener('click', ()=>go('soal'));

/* ================= STATS / PROGRES / ERROR HISTORY ================= */
const ERR_TAG_CLASS = {Grammar:'', Kanji:'orange', Kotoba:'green', Reading:'', Listening:'', Diagnostik:'orange', Lainnya:''};
function refreshStats(){
  rolloverWindows();
  $('streakNum').textContent = state.streak;
  $('streakBig').textContent = state.streak;
  const soalBest = Math.max(0, ...Object.values(state.packBest));
  const overall = Math.round((pct(state.mastered.length,KANJI.length)+pct(state.kataDilihat.length,KATA.length)+pct(state.polaHafal.length,POLA.length)+soalBest)/4);
  $('ringPct').textContent = overall+'%';
  $('ringFg').style.strokeDashoffset = 226.2*(1-overall/100);
  $('homeKanjiStat').textContent = `${state.mastered.length} dari ${KANJI.length} kanji hafal`;
  $('homeQuizStat').textContent = soalBest>0 ? `Skor paket terbaik: ${soalBest}%` : 'Belum ada skor latihan';
  const next = KANJI.find(k=>!state.mastered.includes(k.id));
  $('resumeTitle').textContent = next ? 'Flashcard Kanji' : 'Semua kanji terkuasai 🎉';
  $('resumeSub').textContent = next ? `Berikutnya: ${next.k} (${next.r})` : 'Ulas lagi biar makin mantap';
  const ch = Math.min(state.today.count,20);
  $('homeChallengeCount').textContent = `${ch}/20`;
  $('homeChallengeBar').style.width = (ch/20*100)+'%';
  $('chCount').textContent = `${ch}/20`;
  $('chBar').style.width = (ch/20*100)+'%';
  const done = !!state.challengeDone || state.today.count>=20;
  $('chStatus').textContent = done ? 'Selesai hari ini 🎉' : 'Belum selesai';
  $('chGo').textContent = done ? 'Ulas kartu lagi' : 'Kerjakan sekarang';
  $('pctKanji').textContent = pct(state.mastered.length,KANJI.length)+'%';
  $('barKanji').style.width = pct(state.mastered.length,KANJI.length)+'%';
  $('pctKotoba').textContent = pct(state.kataDilihat.length,KATA.length)+'%';
  $('barKotoba').style.width = pct(state.kataDilihat.length,KATA.length)+'%';
  $('pctBunpou').textContent = pct(state.polaHafal.length,POLA.length)+'%';
  $('barBunpou').style.width = pct(state.polaHafal.length,POLA.length)+'%';
  $('pctSoal').textContent = soalBest+'%';
  $('barSoal').style.width = soalBest+'%';
  $('weekCards').textContent = state.week.cards;
  $('weekSoal').textContent = state.week.soal;
  $('weekXp').textContent = state.week.xp;
  /* progres akademik */
  const {stages, cur} = pathStages();
  $('acadBars').innerHTML = stages.slice(0,5).map(([name,val])=>`
    <div class="diag-row">
      <div class="top"><span>${name}</span><b>${val}%</b></div>
      <div class="bar"><i style="width:${val}%"></i></div>
    </div>`).join('');
  $('greetSub').textContent = state.diag
    ? `Tahap kamu sekarang: ${stages[cur][0]}`
    : 'Ikuti tes diagnostik dulu untuk membuka peta jalur belajarmu.';
  /* rantai harian */
  const days=['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
  let html='';
  for(let i=6;i>=0;i--){
    const d=new Date(Date.now()-i*86400000);
    const on = i < Math.min(state.streak,7);
    html+=`<div class="day"><span class="dot ${on?'on':''}">${on?'🔥':''}</span>${days[d.getDay()]}</div>`;
  }
  $('dayDots').innerHTML = html;
  /* lencana */
  $('badgeGrid').innerHTML = BADGES.map(b=>{
    const earned = b.test(state);
    return `<div class="badge ${earned?'':'locked'}">
      <span class="emo">${b.emo}</span><b>${b.name}</b>
      <span>${earned?'Terbuka!':b.desc}</span></div>`;
  }).join('');
  /* papan peringkat */
  const me = {name:'Kamu', xp:2280+state.xp, me:true};
  const rows = [...RIVALS, me].sort((a,b)=>b.xp-a.xp);
  $('leaderboard').innerHTML = rows.map((r,i)=>`
    <div class="lb-row ${r.me?'me':''}">
      <span class="rank">${i+1}</span><b>${r.name}</b>
      <span class="xp">${r.xp.toLocaleString('id-ID')} XP</span>
    </div>`).join('');
  /* riwayat kesalahan */
  const errs = Object.entries(state.errors).sort((a,b)=>b[1].count-a[1].count).slice(0,8);
  const nowMs = Date.now();
  $('errList').innerHTML = errs.length
    ? errs.map(([t,e])=>{
      const due = !e.nextReview || e.nextReview<=nowMs;
      const rv = due ? 'siap di-review' : 'review: '+new Date(e.nextReview).toLocaleDateString('id-ID',{day:'numeric',month:'short'});
      return `
      <div class="row between" style="padding:8px 0; border-top:1px dashed var(--border)">
        <span class="small"><span class="tag ${ERR_TAG_CLASS[e.cat]||''}" style="font-size:12px; padding:2px 8px">${e.cat}</span> ${e.label}<br><span class="mini-note" ${due?'style="color:var(--orange); font-weight:600"':''}>${rv} - interval ${e.interval||1} hari</span></span>
        <b style="color:var(--red)">x${e.count}</b>
      </div>`;
    }).join('')
    : '<p class="small muted" style="padding:8px 0">Belum ada kesalahan tercatat. Bagus!</p>';
  /* segarkan tampilan terkait */
  renderPath();
  renderDiagHome();
  renderPackList();
  if(!document.querySelector('[data-kpanel="list"]').hidden) renderKanjiList();
}

/* ================= LATIHAN KELEMAHAN (adaptif) ================= */
$('btnWeak').addEventListener('click', ()=>{
  const weak = dueWeakTags();
  let pool = QUIZ.filter(q=>(q.tags||[]).some(t=>weak.includes(t)));
  pool = pool.concat(CONTRAST.flatMap(g=>g.qs).filter(q=>(q.tags||[]).some(t=>weak.includes(t))));
  let title = '🎯 Latihan Kelemahan';
  if(pool.length===0){
    pool = shuffleArr(QUIZ).slice(0,10);
    title = '🎯 Review Campuran (belum ada kelemahan tercatat)';
  }
  go('soal');
  startSession(pool, title, null);
});

/* ================= RESET & INIT ================= */
$('btnReset').addEventListener('click', ()=>{
  if(!confirm('Hapus semua progres lokal (termasuk hasil diagnostik & riwayat kesalahan)? Tindakan ini tidak bisa dibatalkan.')) return;
  const furiKeep = state.furigana;
  state = defaults(); state.furigana = furiKeep; initStreak(); save();
  clearInterval(mockTimer); mock=null;
  applyFuri();
  startDeck(false);
  renderKata(); renderPola(); renderKontras(); renderReadList();
  listenIdx=0; listenScore=0; renderListen();
  $('diagIntro').hidden=false; $('diagRun').hidden=true; $('diagResult').hidden=true;
  $('mockIntro').hidden=false; $('mockRun').hidden=true; $('mockResult').hidden=true;
  showPackMenu();
  refreshStats();
});

$('resumeBtn').addEventListener('click', ()=>{ go('belajar','kanji'); });

function greeting(){
  const h = new Date().getHours();
  if(h>=4 && h<11) return 'Selamat pagi! 👋';
  if(h>=11 && h<15) return 'Selamat siang! ☀️';
  if(h>=15 && h<18) return 'Selamat sore! 🌤️';
  return 'Selamat malam! 🌙';
}
$('greeting').textContent = greeting();

function applyHash(){
  const h = location.hash.replace('#','');
  if(!h){ go('home'); return; }
  const [scr,seg] = h.split('-');
  if(['home','belajar','soal','progres','diag','mock'].includes(scr)) go(scr,seg);
}
window.addEventListener('hashchange', applyHash);

$('mKanjiCount').textContent = `${KANJI.length} kartu`;
$('mKataCount').textContent = `${KATA.length} kata`;
$('mPolaCount').textContent = `${POLA.length} pola`;
$('mReadCount').textContent = `${READING.length} teks`;

/* ================= FURIGANA per bagian ================= */

const FURI_TARGET = {
  kanji:['[data-bpanel="kanji"]'], kotoba:['[data-bpanel="kotoba"]'], bunpou:['[data-bpanel="bunpou"]'],
  contrast:['[data-bpanel="kontras"]'], reading:['[data-bpanel="bacaan"]'], listening:['#listenBox'],
  quiz:['#quizRun'], diagnostic:['[data-screen="diag"]'], mock:['[data-screen="mock"]'],
};
function applyFuri(){
  const f = state.furigana;
  Object.entries(FURI_TARGET).forEach(([k,sels])=>{
    sels.forEach(sel=>document.querySelectorAll(sel).forEach(el=>{
      el.classList.toggle('nf', !f[k]);
      el.classList.toggle('fo', !!f[k]);
    }));
  });
}
function renderFuri(){
  $('furiList').innerHTML = FURI_SECTIONS.map(([k,label])=>{
    const on = !!state.furigana[k];
    return `<div class="furi-row"><b style="font-size:15px">${label}</b>
      <button class="toggle-btn ${on?'on':''}" data-furi="${k}" aria-pressed="${on}">${on?'ON':'OFF'}</button></div>`;
  }).join('');
  document.querySelectorAll('[data-furi]').forEach(el=>el.addEventListener('click', ()=>{
    const k = el.dataset.furi;
    state.furigana[k] = !state.furigana[k];
    save(); applyFuri(); renderFuri();
  }));
}
function closeFuri(){ $('furiScrim').classList.remove('show'); $('furiSheet').classList.remove('show'); }
$('btnFuri').addEventListener('click', ()=>{ renderFuri(); $('furiScrim').classList.add('show'); $('furiSheet').classList.add('show'); });
$('furiClose').addEventListener('click', closeFuri);
$('furiScrim').addEventListener('click', closeFuri);
rolloverWindows();
initStreak();
save();
applyFuri();
renderKata();
renderPola();
renderKontras();
renderReadList();
renderListen();
renderPackList();
startDeck(false);
refreshStats();
applyHash();
