const READING = [
  {id:'r1', lv:'Pendek', kind:'Pengumuman', title:'図書館からのお知らせ',
   paras:['来月5日から10日まで、図書館は蔵書整理のため休館します。期間中は貸出・返却ができませんので、ご注意ください。返却期限が休館中に来る本は、11日以降にお持ちいただければ延滞料金はかかりません。なお、電子書籍サービスは通常どおりご利用いただけます。'],
   qs:[
     {q:'このお知らせの内容は何ですか。', opts:['図書館が一時的に休館すること','図書館が新しく建て替えられること','延滞料金が上がること','電子書籍サービスが始まること'], a:0, type:'mainidea', d:'Ide utama: pemberitahuan penutupan sementara perpustakaan untuk penataan koleksi.'},
     {q:'休館中に返却期限が来る本はどうすればよいですか。', opts:['急いで休館前に返しに行く','<ruby>罰金<rt>ばっきん</rt></ruby>を電話で払う','11日以降に持って行けば延滞料金はかからない','返却はできない'], a:2, type:'detail', d:'Detail teks: buku yang jatuh tempo saat tutup bisa dikembalikan mulai tanggal 11 tanpa denda.'},
     {q:'休館中でも使えるものはどれですか。', opts:['貸出カウンター','返却ボックス','閲覧室','電子書籍サービス'], a:3, type:'detail', d:'Teks menyebut layanan e-book tetap berjalan seperti biasa.'},
   ]},
  {id:'r2', lv:'Pendek', kind:'Email', title:'メール：会議時間の変更',
   paras:['鈴木様 お疲れ様です。山田です。来週火曜日の定例会議ですが、クライアントとの打ち合わせが長引く見込みのため、開始時間を午後2時から3時に変更させていただけないでしょうか。場所は変わりません。資料は前日までにメールでお送りします。ご都合が悪ければご連絡ください。'],
   qs:[
     {q:'このメールの目的は何ですか。', opts:['会議をキャンセルすること','資料を早くもらうこと','会議の開始時間を変更したいこと','打ち合わせの場所を変えること'], a:2, type:'tujuan', d:'Tujuan penulis: meminta perubahan jam mulai rapat dari pukul 2 ke pukul 3 sore.'},
     {q:'会議の開始が遅れる理由は何ですか。', opts:['山田が休むから','会議室が使えないから','資料がまだできていないから','クライアントとの打ち合わせが長くなりそうだから'], a:3, type:'alasan', d:'Alasannya: rapat dengan klien diperkirakan molor (長引く見込み).'},
     {q:'鈴木さんが都合が悪い場合、どうすべきですか。', opts:['連絡する','直接会社に行く','返事は不要','資料を待つ'], a:0, type:'detail', d:'Kalimat terakhir: ご都合が悪ければご連絡ください — hubungi jika tidak berkenan.'},
   ]},
  {id:'r3', lv:'Sedang', kind:'Artikel pendek', title:'リモートワークの広がり',
   paras:['ここ数年、リモートワークを導入する企業が増えている。通勤時間が不要になり、多くの人が時間を有効に使えるようになった。',
          '一方で、同僚と直接顔を合わせる機会が減り、孤独感を<ruby>訴える<rt>うったえる</rt></ruby>人も少なくない。ある調査では、週に一度は出社したいと答えた人が全体の六割に上った。',
          '企業は、完全なリモートか、週数日の出社を組み合わせるか、働き方の選択肢を増やすことが求められている。'],
   qs:[
     {q:'この文章のテーマは何ですか。', opts:['リモートワークの歴史','通勤時間の減らし方','リモートワークの利点と<ruby>課題<rt>かだい</rt></ruby>','調査のやり方'], a:2, type:'mainidea', d:'Ide utama: kelebihan (efisiensi waktu) dan tantangan (kesepian) kerja remote.'},
     {q:'調査で六割の人が望んだことは何ですか。', opts:['完全なリモートワーク','給料アップ','週に一度は出社すること','転職'], a:2, type:'detail', d:'Detail: 週に一度は出社したい人が六割.'},
     {q:'筆者が企業に望んでいることは何ですか。', opts:['リモートを完全にやめること','働き方の選択肢を増やすこと','出社を<ruby>義務<rt>ぎむ</rt></ruby>化すること','調査を続けること'], a:1, type:'infer', d:'Inferensi dari paragraf terakhir: perusahaan dituntut menambah pilihan cara kerja.'},
     {q:'「少なくない」はどういう意味ですか。', opts:['ほとんどいない','かなり多い','全員','誰もいない'], a:1, type:'kata', d:'少なくない dalam konteks = tidak sedikit → cukup banyak.'},
   ]},
  {id:'r4', lv:'Sedang', kind:'Opini', title:'スマホ時代の読書',
   paras:['スマートフォンの普及で、本を読む時間が減ったとよく言われる。確かに、電車の中で新聞や本を開く人は以前より少なくなった。',
          'しかし、私は読書が消えたのではなく、形を変えただけだと考える。電子書籍やSNSの文章も、立派な読書体験である。問題は量ではなく、深く考えながら読むかどうかだ。',
          '大切なのは、短い文を流し読みするだけでなく、時には長い文章にじっくり向き合う時間を持つことではないだろうか。'],
   qs:[
     {q:'筆者の主張はどれですか。', opts:['読書は形を変えて続いており、深く読むことが大切','スマホは悪いので使うべきではない','電車では本を読むべきだ','SNSは読書ではない'], a:0, type:'mainidea', d:'Main idea: membaca tidak hilang, hanya berubah bentuk; yang penting membaca dengan mendalam.'},
     {q:'筆者が「形を変えただけ」と言う理由は何ですか。', opts:['紙の本がもうないから','電子書籍やSNSの文章も読書体験だから','読書量が増えたから','新聞が人気だから'], a:1, type:'alasan', d:'Alasan: e-book dan tulisan SNS juga merupakan pengalaman membaca yang layak.'},
     {q:'「じっくり向き合う」に近い意味はどれですか。', opts:['集中して読むこと','速く読むこと','声に出して読むこと','飛ばして読むこと'], a:0, type:'kata', d:'じっくり向き合う = menghadapi dengan sungguh-sungguh → membaca dengan fokus.'},
     {q:'最後の段落で筆者が勧めていることは何ですか。', opts:['長い文章にも時間をかけて向き合うこと','短文だけを読むこと','スマホを捨てること','毎日新聞を読むこと'], a:0, type:'tujuan', d:'Tujuan akhir: sesekali luangkan waktu untuk menghadapi teks panjang dengan serius.'},
   ]},
  {id:'r5', lv:'N2', kind:'Penjelasan abstrak', title:'日本語の「曖昧さ」',
   paras:['日本語はよく「曖昧な言語だ」と言われる。<ruby>断定<rt>だんてい</rt></ruby>的な表現を避け、「〜と思う」「〜かもしれない」と柔らかく言い換える傾向が確かに存在する。',
          'しかし、この<ruby>曖昧<rt>あいまい</rt></ruby>さは日本語の欠点ではない。相手の立場に配慮し、対立を<ruby>避ける<rt>さける</rt></ruby>ためのコミュニケーションの<ruby>工夫<rt>くふう</rt></ruby>だと考えるべきだろう。はっきり言うことが常に正しいとは限らないからだ。',
          'もちろん、<ruby>曖昧<rt>あいまい</rt></ruby>さには弊害もある。<ruby>責任<rt>せきにん</rt></ruby>の所在が不明確になり、ビジネスや国際交流で<ruby>誤解<rt>ごかい</rt></ruby>を生むことがある。重要なのは、場面に応じて<ruby>曖昧<rt>あいまい</rt></ruby>さと明確さを使い分ける力である。'],
   qs:[
     {q:'この文章で筆者が最も伝えたいことは何ですか。', opts:['日本語は<ruby>曖昧<rt>あいまい</rt></ruby>すぎる','<ruby>曖昧<rt>あいまい</rt></ruby>さは欠点であり直すべきだ','明確に話す練習をすべきだ','<ruby>曖昧<rt>あいまい</rt></ruby>さの功罪を理解し使い分けることが重要だ'], a:3, type:'mainidea', d:'Main idea: penting memahami kelebihan-kekurangan kesamaran dan memakainya sesuai situasi.'},
     {q:'筆者によると、<ruby>曖昧<rt>あいまい</rt></ruby>さの背景にあるものは何ですか。', opts:['文法の弱さ','相手への配慮と対立の<ruby>回避<rt>かいひ</rt></ruby>','漢字の多さ','教育の問題'], a:1, type:'alasan', d:'Alasan versi penulis: kesamaran lahir dari kepedulian pada posisi lawan bicara dan menghindari konflik.'},
     {q:'<ruby>曖昧<rt>あいまい</rt></ruby>さの弊害として挙げられているものはどれですか。', opts:['会話が長くなる','敬語が使えなくなる','<ruby>責任<rt>せきにん</rt></ruby>の所在が不明確になる','文が書けなくなる'], a:2, type:'detail', d:'Detail paragraf 3: letak tanggung jawab jadi tidak jelas dan memicu salah paham.'},
     {q:'「使い分ける力」とは何ですか。', opts:['早口で話す力','二か国語を話す力','状況に応じて表現の明確さを調整する力','<ruby>曖昧<rt>あいまい</rt></ruby>にだけ話す力'], a:2, type:'infer', d:'Inferensi: kemampuan mengatur tingkat kejelasan sesuai situasi.'},
   ]},
  {id:'r6', lv:'N2', kind:'Argumentasi', title:'AIと語学学習',
   paras:['AI翻訳の精度が上がり、「もう外国語を学ぶ必要はない」という声を聞くことが増えた。確かに、旅行や簡単な連絡なら、翻訳アプリで十分かもしれない。',
          'だが、言語を学ぶ意義は翻訳のためだけではない。外国語を学ぶ過程で、私たちは異なる文化や考え方に触れ、自国の言語をも客観的に見つめ直すことができる。',
          'むしろAI時代だからこそ、機械に任せられる部分と、人間が自ら学ぶべき部分を見極める力が求められるのだ。'],
   qs:[
     {q:'筆者の考えに最も近いものはどれですか。', opts:['語学学習はもう不要だ','AIがあれば翻訳は完璧だ','翻訳アプリは使うべきではない','AIの利点を認めつつも、語学学習の意義は残る'], a:3, type:'mainidea', d:'Main idea: AI berguna, tapi makna belajar bahasa tetap ada.'},
     {q:'語学学習の意義として筆者が挙げていないものはどれですか。', opts:['異文化に触れられる','自国の言語を見直せる','異なる考え方に触れられる','翻訳の仕事が増える'], a:3, type:'detail', d:'Yang TIDAK disebut: bertambahnya pekerjaan penerjemah.'},
     {q:'「見極める」に近い意味はどれですか。', opts:['見逃す','見上げる','見分けて判断する','じっと見つめる'], a:2, type:'kata', d:'見極める = membedakan dan menilai → 見分けて判断する.'},
     {q:'筆者が読者に求めている態度はどれですか。', opts:['便利な部分はAIに任せ、学ぶべき部分は自分で学ぶ','AIを全面的に<ruby>拒否<rt>きょひ</rt></ruby>する','すべて自分で翻訳する','外国語の勉強をやめる'], a:0, type:'tujuan', d:'Tujuan penulis: gunakan AI untuk bagian yang bisa diserahkan mesin, pelajari sendiri sisanya.'},
   ]},
  {id:'r7', lv:'N2', kind:'統合理解 (A/B)', title:'リモートワークの是非', src:'rbnhd/jlpt-n2-reading #005',
   paras:['【文章A】<br>リモートワークは現代の理想的な働き方だと言える。まず、通勤時間がなくなることで、その時間を家族や趣味、自己啓発に有効に使える。片道1時間の通勤であれば、1日2時間、週に10時間もの時間が節約できる計算だ。また、自分のペースで仕事ができるため、生産性も大幅に向上する。会議もオンラインで効率的に行え、移動時間や会議室の準備といった無駄な時間が削減される。さらに、家族との時間も増え、ワークライフバランスが大きく改善される。育児や介護と仕事の両立も可能になり、特に子育て世代や介護を抱える社員にとっては大きなメリットとなる。これからの時代、リモートワークは標準的な働き方になるべきだろう。企業側も、オフィス維持費の削減や優秀な人材の確保といったメリットを享受できる。',
          '【文章B】<br>リモートワークには見過ごせない多くの課題がある。まず、直接会って話すことで生まれる創造的なアイデアや、偶然の出会いから生まれる新しい発想が失われてしまう。オンライン会議では、細かいニュアンスや雰囲気を読み取ることが難しい。また、新入社員の教育も深刻な問題だ。先輩の仕事を見て学ぶ機会がなくなり、技術の伝承が困難になる。成長が遅れ、キャリア形成に支障をきたす可能性もある。さらに、仕事とプライベートの境界が曖昧になり、かえって長時間労働につながったり、ストレスが増える人も少なくない。やはり、対面でのコミュニケーションは欠かせないものであり、完全なリモートワークには慎重であるべきだ。'],
   qs:[
     {q:'文章AとBの筆者が共通して認識している点は何か。', opts:['リモートワークは生産性を向上させる','新入社員教育は簡単になる','対面コミュニケーションは不要である','リモートワークは働き方に大きな変化をもたらす'], a:3, type:'togou', d:'両者とも、リモートワークが働き方に大きな影響を与えることは認識していますが、その評価が異なります。'},
     {q:'文章Bの筆者が最も懸念していることは何か。', opts:['創造性や人材育成の機会が失われること','会議の効率が悪くなること','通勤時間が長くなること','家族との時間が減ること'], a:0, type:'detail', d:'文章Bでは、創造的なアイデアの喪失と新入社員教育の困難さ、技術伝承の問題を主要な課題として挙げています。'},
   ]},
  {id:'r8', lv:'N2', kind:'統合理解 (A/B)', title:'「失敗」から学ぶこと', src:'rbnhd/jlpt-n2-reading #023',
   paras:['【文章A：リスク管理の観点から】<br>失敗は可能な限り避けるべきものだ。現代の競争社会では成功こそが評価され、失敗は恥や無能の証とされがちである。だからこそ、失敗しないように慎重に計画を立て、リスクを分析し、着実に行動することが何より大切である。',
          '特にビジネスの世界では、一度の大きな失敗が会社に取り返しのつかない損失をもたらすこともある。新製品の開発に失敗すれば巨額の投資が無駄になり、顧客の信頼を失えば回復に何年もかかる。優秀なリーダーとは、リスクを最小限に抑え、確実に成功する方法を選択できる人物だ。過去のデータを分析し、成功事例を学び、失敗の可能性を徹底的に排除する。失敗を恐れることは、決して悪いことではない。それは責任感の表れであり、組織を守るために必要な慎重さなのである。無謀な挑戦よりも、確実な成功を積み重ねることこそが、長期的な発展につながる。',
          '【文章B：成長の機会として】<br>失敗は成長の糧であり、むしろ積極的に経験すべきものだ。多くの成功者が、自身の最大の失敗から学んだ教訓について熱く語っている。スティーブ・ジョブズは一度アップル社を追われたが、その経験が後の偉大な成功の礎となった。失敗を恐れて何も行動しなければ、成長の貴重な機会を永遠に失ってしまう。',
          '新しいことに勇気を持って挑戦し、たとえ失敗しても、そこから教訓を得て次に活かすことが何より重要だ。失敗を通じて初めて、自分の弱点や改善点、思考の癖が明確に見えてくる。成功からは学べないことを、失敗は教えてくれるのだ。',
          'むしろ、若いうちに多くの小さな失敗を経験することで、将来の致命的な大きな失敗を避けられるのではないだろうか。失敗のコストが比較的小さい段階で試行錯誤を重ね、学ぶ。それが真の成長につながる。失敗を恐れない勇気と、失敗から学ぶ謙虚さこそが、イノベーションを生み出す原動力となり、個人の可能性を最大限に引き出すのである。完璧を目指して何もしないよりも、不完全でも行動し、改善し続けることの方がはるかに価値がある。'],
   qs:[
     {q:'文章Aと文章Bの共通点は何か。', opts:['失敗は絶対に避けるべきだ','失敗から学ぶことはできない','失敗について考えることは重要だ','成功者は失敗しない'], a:2, type:'togou', d:'両者とも失敗について異なる視点から論じており、失敗について考えることの重要性を示唆しています。'},
     {q:'文章Bの筆者が失敗について述べていることとして正しいのはどれか。', opts:['失敗から学ぶことで成長できる','失敗を避けることが最も重要だ','失敗は恥である','失敗は責任感の欠如だ'], a:0, type:'detail', d:'文章Bでは「失敗は成長の糧である」と述べ、失敗から学ぶことの重要性を強調しています。'},
   ]},
  {id:'r9', lv:'N2', kind:'主張理解・長文', title:'睡眠と健康の関係', src:'rbnhd/jlpt-n2-reading #007',
   paras:['現代社会において、睡眠不足は深刻な問題となっている。日本人の平均睡眠時間は先進国の中でも特に短く、成人の約4割が6時間未満の睡眠しか取っていないという調査結果がある。2019年のOECDの調査によれば、日本人の平均睡眠時間は7時間22分で、加盟国33カ国中最も短い。特に働き盛りの30代から40代においては、5時間台という人も珍しくない。長時間労働や通勤時間の長さ、夜型のライフスタイルなどが、この睡眠不足の背景にある。',
          '睡眠不足がもたらす影響は、単に日中の眠気だけではない。集中力の低下により仕事のミスが増え、生産性が下がる。アメリカの研究では、睡眠不足による経済損失は年間約4000億ドルにも上るという報告がある。また、免疫力が低下し、風邪やインフルエンザなどの感染症にかかりやすくなる。さらに深刻なのは、慢性的な睡眠不足が生活習慣病のリスクを高めることだ。糖尿病や高血圧、心臓病、肥満などの発症率が、睡眠不足の人では明らかに高いことが複数の研究で示されている。特に、睡眠時間が5時間未満の場合、糖尿病のリスクは約2.5倍に、心筋梗塞のリスクは約2倍に増加すると言われている。',
          '精神面への影響も無視できない。睡眠不足はストレスホルモンであるコルチゾールの分泌を増加させ、ストレスを増大させる。その結果、うつ病や不安障害のリスクを高める。十分な睡眠は、脳が日中に獲得した情報を整理し、記憶を定着させ、感情を安定させるために不可欠なのだ。レム睡眠中には感情記憶の処理が行われ、ノンレム睡眠中には新しい情報が長期記憶として定着する。',
          'では、理想的な睡眠時間はどのくらいだろうか。個人差はあるものの、一般的に成人は7〜8時間の睡眠が推奨されている。しかし、単に時間を確保すればよいわけではない。睡眠の質も重要だ。深い睡眠であるノンレム睡眠の第3段階、第4段階を十分に取ることが、心身の回復には欠かせない。',
          '睡眠の質を高めるためには、規則正しい生活リズムを保つことが大切だ。毎日同じ時間に寝起きすることで、体内時計が整う。また、寝る前のスマートフォンやパソコンの使用を控える。これらの機器から発せられるブルーライトは、睡眠ホルモンであるメラトニンの分泌を抑制してしまうからだ。さらに、日中の適度な運動と、就寝前のカフェインやアルコールの摂取を控えることも効果的だ。寝室の環境も重要で、暗く静かで、温度は16〜19度が理想的とされている。',
          '現代人にとって、十分な睡眠を確保することは容易ではない。仕事の締め切り、家事、育児、さまざまな社会活動など、時間を奪う要因は数多い。しかし、睡眠を軽視することの代償は大きい。健康的な生活を送るために、睡眠の重要性を再認識し、意識的に睡眠時間を確保する努力が必要である。「睡眠は最高の投資」という認識を持ち、自分の健康を第一に考える生活習慣を築いていくべきだ。'],
   qs:[
     {q:'睡眠不足がもたらす影響として述べられていないものはどれか。', opts:['生産性の低下','免疫力の低下','記憶力の向上','生活習慣病のリスク増加'], a:2, type:'detail', d:'記憶力の向上は述べられていません。むしろ集中力の低下が指摘されています。'},
     {q:'睡眠の質を高める方法として挙げられていないものはどれか。', opts:['規則正しい生活リズム','適度な運動','寝る前の読書','カフェインを控える'], a:2, type:'detail', d:'寝る前の読書については言及されていません。スマートフォンの使用を控えることは述べられています。'},
     {q:'筆者の主張として最も適切なものはどれか。', opts:['睡眠時間は個人の自由である','睡眠の重要性を認識し、意識的に確保すべきだ','現代社会では睡眠不足は避けられない','睡眠時間より仕事を優先すべきだ'], a:1, type:'mainidea', d:'最終段落で「睡眠の重要性を再認識し、意識的に睡眠時間を確保する努力が必要」と結論づけています。'},
     {q:'本文によれば、睡眠時間が5時間未満の場合、どのような健康リスクがあるか。', opts:['風邪のリスクが高まる','ストレスが軽減される','記憶力が向上する','糖尿病のリスクが約2.5倍、心筋梗塞のリスクが約2倍になる'], a:3, type:'detail', d:'本文で「睡眠時間が5時間未満の場合、糖尿病のリスクは約2.5倍に、心筋梗塞のリスクは約2倍に増加する」と述べられています。'},
   ]},
  {id:'r10', lv:'N2', kind:'情報検索', title:'カルチャーセンター春期講座のご案内', src:'rbnhd/jlpt-n2-reading #004',
   paras:['【市民カルチャーセンター　春期講座募集】',
          '当センターでは、春期講座（4月～6月、全12回）の受講生を募集いたします。初めての方も経験者の方も大歓迎です。',
          '■料理教室<br>・初級コース：毎週火曜 10:00-12:00（和食中心）<br>・中級コース：毎週木曜 14:00-16:00（洋食・中華）<br>・受講料：各12,000円（材料費込み）<br>・定員：各15名<br>※エプロン、三角巾をご持参ください<br>※アレルギーのある方は事前にお知らせください',
          '■語学講座<br>・英会話（初級）：毎週月曜 19:00-20:30（日常会話）<br>・中国語（入門）：毎週水曜 19:00-20:30（発音から）<br>・韓国語（初級）：毎週金曜 19:00-20:30（ハングルから）<br>・受講料：各15,000円（テキスト代別途3,000円）<br>・定員：各20名<br>※ネイティブ講師が担当します',
          '■フィットネス<br>・ヨガ：毎週土曜 9:00-10:00（リラックスヨガ）<br>・ピラティス：毎週日曜 10:00-11:00（体幹トレーニング）<br>・受講料：各10,000円<br>・定員：各25名<br>※ヨガマット貸出無料<br>※動きやすい服装でお越しください',
          '【申込方法】<br>2月1日（木）9:00より受付開始<br>・窓口申込：センター1階受付にて（その場で手続き完了）<br>・電話申込：03-1234-5678（平日9:00-17:00）<br>・Web申込：当センターホームページより（24時間受付）',
          '※定員になり次第締め切ります<br>※受講料は初回授業時に現金またはクレジットカードでお支払いください<br>※一度納入された受講料は原則として返金できません'],
   qs:[
     {q:'料理教室の中級コースを受講したい人が用意すべきものは何か。', opts:['エプロンと材料費','エプロンと三角巾','テキストと15,000円','動きやすい服装'], a:1, type:'retrieval', d:'料理教室は受講料12,000円（材料費込み）で、エプロンと三角巾を持参する必要があります。'},
     {q:'平日の夜に通える講座の中で、最も費用が高いのはどれか。', opts:['英会話（初級）','中国語（入門）','韓国語（初級）','どれも同じ費用'], a:3, type:'retrieval', d:'語学講座はすべて15,000円+テキスト代3,000円で計18,000円となり、同じ費用です。'},
     {q:'Web申込の特徴は何か。', opts:['24時間受付可能','手数料が無料','優先的に受付される','割引がある'], a:0, type:'retrieval', d:'Web申込は「24時間受付」と明記されています。'},
   ]},
  {id:'r11', lv:'N2', kind:'情報検索', title:'お祭りボランティア募集', src:'rbnhd/jlpt-n2-reading #010',
   paras:['【第25回さくら祭り　ボランティアスタッフ大募集！】',
          '開催日：4月7日（土）・8日（日）午前9:00～午後5:00<br>場所：中央公園特設会場（JR中央駅より徒歩5分）',
          '例年5万人以上が訪れる地域最大級の春のイベントです。今年は25回目の記念大会となり、より多くのボランティアの皆様のご協力が必要です。皆さんと一緒に、素晴らしいお祭りを作り上げていきたいと思います！',
          '■募集内容<br>①会場案内係（各日20名）<br>・来場者への案内、パンフレット配布、迷子対応<br>・経験不問、笑顔で元気に対応できる方<br>・外国語対応可能な方は特に歓迎（英語、中国語など）',
          '②屋台運営補助（各日15名）<br>・地元名物料理、飲み物の販売補助、レジ対応<br>・立ち仕事が可能で、接客が好きな方<br>・食品衛生講習会に参加していただきます（4月1日開催予定）',
          '③環境美化係（各日10名）<br>・会場内のゴミ回収、分別指導、トイレ清掃<br>・体力に自信のある方、環境問題に関心のある方歓迎',
          '④子供広場係（各日8名）<br>・子供向けゲームコーナーの運営補助、安全管理<br>・子供が好きな方、保育・教育経験者優遇<br>・応急手当の基礎知識があれば尚可',
          '■参加特典<br>・昼食支給（特製弁当・飲み物）<br>・記念Tシャツプレゼント（サイズ指定可）<br>・交通費補助（上限1,000円/日）<br>・ボランティア活動証明書発行（希望者のみ、就職活動等に活用可）<br>・打ち上げ交流会ご招待（4月15日予定）',
          '■応募条件<br>・18歳以上（高校生不可）<br>・両日参加できる方を優先的に採用<br>・事前説明会（3月25日土曜日14:00～16:00、市民会館にて）への参加必須<br>・当日は動きやすい服装でご参加ください',
          '■応募方法<br>下記のいずれかの方法でご連絡ください。<br>メール：sakura@festival.jp（件名に「ボランティア応募」と明記）<br>電話：0120-XXX-XXXX（受付：平日10:00～16:00）<br>Webフォーム：www.sakurafes.jp/volunteer',
          '締切：3月20日（火）必着<br>※応募者多数の場合は、抽選となります。結果は3月22日までにメールでお知らせします。'],
   qs:[
     {q:'子供広場係として応募したい大学生が確認すべき条件は何か。', opts:['保育経験があるかどうか','3月25日の説明会に参加できるかどうか','記念Tシャツのサイズ','昼食の内容'], a:1, type:'retrieval', d:'応募条件として「事前説明会（3月25日14:00～）に参加可能な方」とあり、これは必須条件です。保育経験は優遇条件であり必須ではありません。'},
     {q:'高校3年生で18歳の人は応募できるか。', opts:['できる','記載されていない','保護者の同意があればできる','できない'], a:3, type:'retrieval', d:'応募条件に「18歳以上（高校生不可）」と明記されているため、18歳でも高校生は応募できません。'},
   ]},
];

/* ================= Renderer bacaan + feedback instan ================= */
(function () {
  function el(id) { return document.getElementById(id); }

  var current = null;
  var state = null;

  function renderMenu() {
    var list = el('readList');
    if (!list) return;
    list.innerHTML = READING.map(function (r) {
      return '<button type="button" class="card tile read-tile" data-read-id="' + r.id + '" style="display:block;width:100%;text-align:left;cursor:pointer">'
        + '<div class="row between">'
        +   '<div class="grow">'
        +     '<div class="label">' + r.kind + ' · ' + r.lv + '</div>'
        +     '<div class="mt4">' + r.title + '</div>'
        +   '</div>'
        +   '<span class="tag">' + r.qs.length + ' soal</span>'
        + '</div>'
        + '</button>';
    }).join('');
    list.querySelectorAll('[data-read-id]').forEach(function (b) {
      b.addEventListener('click', function () { openReading(b.getAttribute('data-read-id')); });
    });
  }

  function openReading(id) {
    current = READING.find(function (r) { return r.id === id; });
    if (!current) return;
    state = { answered: {}, score: 0 };
    el('readMenu').hidden = true;
    el('readView').hidden = false;
    el('readTitle').innerHTML = current.title;
    el('readMeta').innerHTML =
      '<span class="tag">' + current.kind + '</span>' +
      '<span class="tag">' + current.lv + '</span>' +
      '<span class="tag" id="readScoreTag"></span>';
    el('readBody').innerHTML = current.paras.map(function (p) { return '<p class="mt8">' + p + '</p>'; }).join('');
    renderQuiz();
    updateScore();
    window.scrollTo(0, 0);
  }

  function renderQuiz() {
    el('readQuiz').innerHTML = current.qs.map(function (it, qi) {
      return '<div class="card mt12" data-q="' + qi + '">'
        + '<div class="label">Soal ' + (qi + 1) + '/' + current.qs.length + '</div>'
        + '<div class="mt8 q-sentence">' + it.q + '</div>'
        + '<div class="opts mt8">'
        + it.opts.map(function (o, oi) {
            return '<button type="button" class="btn btn-outline btn-block read-opt" data-opt="' + oi + '" style="text-align:left">' + o + '</button>';
          }).join('')
        + '</div>'
        + '<div class="feedback mt8" hidden></div>'
        + '</div>';
    }).join('');
    el('readQuiz').querySelectorAll('[data-q]').forEach(function (card) {
      card.querySelectorAll('[data-opt]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          answer(+card.getAttribute('data-q'), +btn.getAttribute('data-opt'));
        });
      });
    });
  }

  function answer(qi, oi) {
    if (!current || state.answered[qi] !== undefined) return; // 1 soal hanya bisa dijawab 1x
    state.answered[qi] = oi;
    var it = current.qs[qi];
    var correct = oi === it.a;
    if (correct) state.score++;

    var card = el('readQuiz').querySelector('[data-q="' + qi + '"]');
    card.querySelectorAll('[data-opt]').forEach(function (b, i) {
      b.disabled = true;
      if (i === it.a) {          // jawaban benar selalu di-highlight hijau
        b.style.borderColor = '#16a34a';
        b.style.background = '#dcfce7';
        b.style.color = '#166534';
      } else if (i === oi) {     // pilihan user yang salah -> merah
        b.style.borderColor = '#dc2626';
        b.style.background = '#fee2e2';
        b.style.color = '#991b1b';
      } else {
        b.style.opacity = '.55';
      }
    });

    var fb = card.querySelector('.feedback');
    fb.hidden = false;
    fb.innerHTML = correct
      ? '<div class="tag" style="background:#dcfce7;color:#166534">✅ Benar!</div><p class="small muted mt4">' + it.d + '</p>'
      : '<div class="tag" style="background:#fee2e2;color:#991b1b">❌ Salah — jawaban benar: ' + it.opts[it.a] + '</div><p class="small muted mt4">' + it.d + '</p>';

    updateScore();

    if (Object.keys(state.answered).length === current.qs.length) {
      var pct = Math.round((state.score / current.qs.length) * 100);
      var done = document.createElement('div');
      done.className = 'card tint mt16 read-done';
      done.innerHTML = '<div class="label">Bacaan selesai 🎉</div>'
        + '<div class="big mt4">' + state.score + '/' + current.qs.length + ' benar (' + pct + '%)</div>'
        + '<button type="button" class="btn btn-outline btn-block mt8" id="readRetry">↻ Ulangi bacaan ini</button>';
      el('readQuiz').appendChild(done);
      el('readRetry').addEventListener('click', function () { openReading(current.id); });
    }
  }

  function updateScore() {
    var t = el('readScoreTag');
    if (t && current) t.textContent = 'Skor: ' + state.score + '/' + current.qs.length;
  }

  function backToMenu() {
    el('readView').hidden = true;
    el('readMenu').hidden = false;
    window.scrollTo(0, 0);
  }

  function init() {
    if (!el('readList')) return;
    renderMenu();
    var back = el('readBack');
    if (back) back.addEventListener('click', backToMenu);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
