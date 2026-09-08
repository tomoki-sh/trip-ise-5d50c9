/* 伊勢志摩旅行の公開データ。氏名・予約番号・予約原本は含めない。 */
const DATA = {
  /* === スポット === */
  spots: [
    {
      name: "鳥羽水族館",
      area: "鳥羽市鳥羽3-3-6（鳥羽駅から徒歩約10分）",
      coords: [34.4815825, 136.8456926],
      category: "confirmed",
      spotKey: "aqua",
      areaKey: "toba",
      images: ["images/aquarium.jpg", "images/aquarium_2.jpg", "images/aquarium_3.jpg", "images/aquarium_4.jpg"],
      gmapsPlaceId: "ChIJVVVANuv1A2ARyCiTNeo9qAs",
      links: [
        { label: "公式サイト", url: "https://aquarium.co.jp/" },
        { label: "営業案内（SW期間）", url: "https://aquarium.co.jp/eigyo/" },
        { label: "ラッコ観覧の方法", url: "https://aquarium.co.jp/topics/250201_01" },
        { label: "ショー・お食事タイム", url: "https://aquarium.co.jp/show/" }
      ],
      badges: [
        { text: "2日目の主役・ラッコ", cls: "priority-top" },
        { text: "WEBチケットを事前購入", cls: "priority-top" }
      ],
      ratings: { google: "4.4", googleReviews: "16746" },
      desc: "この旅行の必須その1。**ラッコの観覧は予約も整理券も無く、当日「Iコーナー・極地の海」入口から列に並ぶ方式**なので、いつ列に入るかだけで満足度が決まる。館内は広いので、全展示の制覇は最初から狙わない。",
      meta: [
        ["営業", "**シルバーウィーク（9/19〜23）は9:00〜17:30・最終入館16:30**。通常より30分早く開き、30分長く営業する"],
        ["料金", "大人2,800円（2026年時点の一般料金。WEBチケットは公式で確認）"],
        ["所要", "ラッコの列に**最大90〜120分**、館内の選択見学に約90分。今回は12:45入館〜16:10退館で設計"],
        ["ラッコ列", "水槽前へ**約10人ずつ**案内。正面での観覧は**1グループ約1分**。**途中合流・場所取りは禁止**で、列を離れたら最後尾から並び直し"],
        ["お食事タイム", "**9:40 / 13:00 / 16:10**。今回は13:00回が終わったあとの**13:30〜14:30**を狙う"],
        ["撮影", "写真・動画は可、**フラッシュは禁止**。ガラスの映り込みを減らすなら白い服より暗めの服が有利"],
        ["締切", "通常の列締切は16:30だが、**混雑時は予告なく早まる**"],
        ["電話", "0599-25-2555"]
      ],
      notes: "<strong>ラッコの展示は「確約」できません。</strong>動物の体調等で展示中止・時間変更になる可能性があり、そのときは代替がききません（ジュゴン・セイウチ・アシカへ切り替え、駅前の夕食をゆっくり取る形になります）。<strong>2人そろってから列に入ってください。</strong>片方を先に降ろして並ばせ、あとから合流する方法は禁止されています。入館後・列へ行く前に、2人ともトイレと飲み物を済ませておくこと。WEBチケットを事前に買ってもラッコ列の予約にはなりませんが、入館券を買う列は短縮できます。",
      maps: "鳥羽水族館"
    },
    {
      name: "三重県真珠（MIEKEN PEARL）",
      area: "伊勢市二見町江681-16",
      coords: [34.5041214, 136.7951488],
      category: "confirmed",
      spotKey: "pearl",
      areaKey: "futami",
      images: ["images/miekenpearl.jpg", "images/miekenpearl_2.jpg", "images/miekenpearl_3.jpg", "images/miekenpearl_4.jpg"],
      gmapsPlaceId: "ChIJP0gmR4VXBGARuEg6ydmz8Cw",
      links: [
        { label: "公式サイト", url: "https://miekenpearl.jp/" },
        { label: "2026年の体験料金改定", url: "https://miekenpearl.jp/%E4%BD%93%E9%A8%93%E6%96%99%E9%87%91%E3%81%AE%E6%94%B9%E5%AE%9A%E3%81%AB%E3%81%A4%E3%81%8D%E3%81%BE%E3%81%97%E3%81%A6/" }
      ],
      badges: [
        { text: "1日目の主役・予約確定", cls: "priority-top" },
        { text: "実務上の第一案", cls: "priority-top" }
      ],
      ratings: { google: "4.2", googleReviews: "209" },
      desc: "この旅行の必須その2。アコヤ貝の真珠取り出し体験を、**二見で・短時間で・雨天でも**行える施設。真珠ができるまでの説明と映像 → 貝開け → 取り出し → 希望者は加工、という流れ。",
      meta: [
        ["営業", "**9:00〜17:00・年中無休**の案内。ただし体験枠は予約で満席になることがある"],
        ["料金", "**2026年4月以降1,980円**、施設が定める繁忙期は**2,200円**。金具代は別。**今回の予約は繁忙期料金2,200円×2名＝4,400円で確定**（内訳はチケットタブ）"],
        ["所要", "取り出し**約20分**、加工込みで**30〜45分**"],
        ["電話", "0120-663-186"],
        ["場所", "**二見町**。鳥羽駅から車で約25分、ここからホテルまで約50〜55分"],
        ["利点", "**真珠を加工せず持ち帰る選択ができる**ので、時間が押したときに加工工程を落として調整できる"]
      ],
      notes: "<strong>9月21日13:30・2名で予約が確定しました。</strong>料金は繁忙期の2,200円×2名＝4,400円で、<strong>現地支払い</strong>です。金具代は体験料とは別なので、加工する場合は当日加算されます。予約概要はチケットタブ、原本は手元のメールで確認できます。<strong>無断キャンセルは100%請求</strong>の規定なので、間に合わなくなりそうなときは着く前に店へ連絡してください。これで「二見で現地ランチ → 体験 → 15時台にホテル」がそのままつながります。<strong>当日の残りの確認事項は、加工まで含めた終了見込みだけ</strong>です（受付時に聞けば足ります）。",
      maps: "三重県真珠 伊勢市二見町"
    },
    {
      name: "グランドメルキュール伊勢志摩リゾート＆スパ",
      area: "志摩市磯部町的矢（笠取）",
      coords: [34.3733051, 136.8509163],
      category: "confirmed",
      spotKey: "stay",
      areaKey: "shima",
      images: ["images/hotel.jpg", "images/hotel_2.jpg", "images/hotel_3.jpg", "images/hotel_4.jpg"],
      gmapsPlaceId: "ChIJFWrLEkcABWARZOiul2uB7EI",
      links: [
        { label: "公式サイト", url: "https://grand-mercure-iseshima-resortandspa.jp/" },
        { label: "2026シルバーウィーク案内", url: "https://grand-mercure-iseshima-resortandspa.jp/plan/silver-week-2026/" },
        { label: "ラウンジ案内", url: "https://grand-mercure-iseshima-resortandspa.jp/lounge/the-lounge/" }
      ],
      badges: [
        { text: "宿泊（確定）", cls: "priority-top" },
        { text: "着いたらすぐQRで夕食枠", cls: "priority-warn" }
      ],
      ratings: { google: "3.6", googleReviews: "3137" },
      desc: "1日目の15時台から2日目の11時まで、この旅行でいちばん長く過ごす場所。**予定を詰めずにここでゆっくりする**のが今回の方針なので、夕食後は何も足さない。",
      meta: [
        ["チェックイン", "**15:00**。14:45〜15:10着を目標にする"],
        ["チェックアウト", "**11:00**。今回は11:00まで滞在する前提"],
        ["夕食", "**3部制・各90分：17:00〜18:30 / 18:30〜20:00 / 20:00〜21:30**。第一案は18:30枠"],
        ["夕食予約", "**チェックイン後、専用QRから先着順**。到着後いちばんに操作する"],
        ["朝食", "**7:00〜9:30・最終入場9:00**。混雑を避けるなら7:15〜7:30開始"],
        ["大浴場", "**15:00〜23:00（最終22:30）／ 6:00〜10:00（最終9:30）**。露天・サウナあり"],
        ["ラウンジ", "**15:00〜18:00 イブニングソーシャル ／ 18:00〜23:00 ナイトキャップ**"],
        ["SW限定", "屋外プール・キッチンカー・**ナイトバブル19:00〜20:00（先着）**の案内。ナイトバブル優先なら夕食を20:00枠へ"]
      ],
      notes: "<strong>予約プランが「夕朝食付き」「オールインクルーシブ対象」かを、出発前に必ず確認してください。</strong>プランによって夕食・朝食の有無が変わります。オールインクルーシブでも<strong>昼食は含まれません</strong>（だから両日とも外で食べる旅程になっています）。ラウンジではビール・ワイン・ソフトドリンク・コーヒー・スナック等を楽しめ、夕食時のドリンクがフリーフローになるプランもあります。ラウンジの飲食物を客室へ持ち出せない等の運用があるので現地案内に従ってください。<strong>チェックイン直後・夕食前・朝食終了前はエレベーターとレストランが混みます。</strong>大浴場へ行けないエレベーターもあるので、館内案内を確認してください。",
      maps: "グランドメルキュール伊勢志摩リゾート＆スパ"
    },
    {
      name: "鳥羽水族館 公式駐車場（A・B）",
      area: "鳥羽市鳥羽3丁目（水族館に隣接）",
      coords: [34.4802233, 136.8463072],
      category: "confirmed",
      spotKey: "park",
      areaKey: "toba",
      images: ["images/aqua_p.jpg", "images/aqua_p_2.jpg", "images/aqua_p_3.jpg", "images/aqua_p_4.jpg"],
      gmapsPlaceId: "ChIJyW39JcD4BGARNpqJQYpt04g",
      links: [
        { label: "車・駐車場案内（公式）", url: "https://aquarium.co.jp/eigyo/kuruma/" }
      ],
      badges: [
        { text: "第一候補", cls: "priority-top" },
        { text: "満車なら周回せず切替", cls: "priority-warn" }
      ],
      ratings: { google: "3.7", googleReviews: "32" },
      desc: "水族館にいちばん近くて快適な公式駐車場。**乗用車1日1,000円**。空きがあって入庫待ちが長くなければ、迷わずここ。",
      meta: [
        ["料金", "**乗用車1日1,000円**"],
        ["営業", "9:20〜17:30（水族館の営業に連動。SW期間は要現地確認）"],
        ["公式C", "料金は比較的安いが**徒歩距離がA・Bより増える**。案内に従う"],
        ["判断", "**満車なら周回して空きを待たない。**鳥羽駅西・佐田浜へ即切替える"]
      ],
      notes: "<strong>当日12:30頃に、ナビで水族館周辺の駐車・道路状況を一度確認してください。</strong>連休は進入と入庫の待ちが読めません。旅程では12:45〜13:10に駐車と入館を置いていますが、ここが押すとラッコ列の開始が遅れ、そのまま退館時刻と返車時刻に響きます。",
      maps: "鳥羽水族館 駐車場"
    },
    {
      name: "鳥羽駅西・佐田浜第1駐車場",
      area: "鳥羽市鳥羽1丁目（鳥羽駅の西側）",
      coords: [34.4886439, 136.8445427],
      category: "backup",
      spotKey: "park",
      areaKey: "toba",
      images: ["images/ekinishi_p.jpg", "images/ekinishi_p_2.jpg", "images/ekinishi_p_3.jpg", "images/ekinishi_p_4.jpg"],
      gmapsPlaceId: "ChIJS0MkiOP5BGARqWfakVZUsYE",
      links: [
        { label: "鳥羽市観光協会 駐車場案内", url: "https://www.toba.gr.jp/helpful/parking/" }
      ],
      badges: [
        { text: "公式が満車のときの切替先", cls: "priority-mid" },
        { text: "特定日は最大2,000円", cls: "priority-warn" }
      ],
      ratings: { google: "3.7", googleReviews: "58" },
      desc: "鳥羽駅の西側にある大型駐車場。水族館まで**徒歩約10〜15分**かかるが、公式駐車場が満車のときの現実的な切替先。",
      meta: [
        ["料金", "通常の休日は**最大600円**、**特定日は最大2,000円**の運用。旅行1週間前に特定日料金かを確認する"],
        ["営業", "24時間"],
        ["徒歩", "水族館まで**約10〜15分**。残暑の日中は水を持って歩く"],
        ["電話", "0599-25-4834"],
        ["その他", "周辺の佐田浜駐車場群も時間課金で使える。混雑時はここも含めて早めに切替える"]
      ],
      notes: "公式駐車場から流れてくる車と競合するので、<strong>「公式が満車だ」と分かった時点で即座に向かう</strong>のが要点です。周回して空きを待つと、その時間がまるごとラッコの待ち時間に上乗せされます。",
      maps: "鳥羽駅西駐車場 佐田浜"
    },
    {
      name: "トヨタレンタカー 鳥羽駅前店",
      area: "鳥羽市鳥羽1丁目2380-29（鳥羽駅すぐ）",
      coords: [34.4868737, 136.8416998],
      category: "confirmed",
      spotKey: "station",
      areaKey: "toba",
      images: ["images/rentacar.jpg", "images/rentacar_2.jpg", "images/rentacar_3.jpg", "images/rentacar_4.jpg"],
      gmapsPlaceId: "ChIJ5_32lZL4BGARITJLZFnDXgI",
      links: [
        { label: "トヨタレンタカー（予約）", url: "https://rent.toyota.co.jp/" },
        { label: "鳥羽市観光協会 レンタカー案内", url: "https://www.toba.gr.jp/helpful/rental/" }
      ],
      badges: [
        { text: "予約確定（貸出・返却とも鳥羽駅前店）", cls: "priority-top" },
        { text: "⚠️ 免責補償は非加入", cls: "priority-warn" }
      ],
      ratings: { google: "3.5", googleReviews: "63" },
      desc: "貸出9/21 11:00〜返却9/22 19:00、**貸出・返却とも鳥羽駅前店で確定**。C1クラス（コンパクト）1台・禁煙・AT。**11:08着であることは予約時に申告済み**。",
      meta: [
        ["営業", "**毎日8:00〜19:00**。返却予約の19:00は**閉店時刻そのもの**なので、余裕を持って返す"],
        ["貸出", "**9/21 11:00**開始で予約済み。到着列車として**11:08着を申告済み**なので、そのまま向かえばよい"],
        ["返却", "予約上は**9/22 19:00**（19:18発も申告済み）。ただし**駅前で夕食を取るため16:50〜17:10に返す**"],
        ["車種", "**C1クラス**（コンパクト）1台・禁煙車・AT"],
        ["料金", "**総額15,682円**（基本17,424円 − メンバー割引10% 1,742円）。**店頭でお支払い**"],
        ["⚠️ 免責補償", "**非加入**で予約されている。事故時の免責額が自己負担になるので、**当日店頭で加入するかを2人で決めておく**"],
        ["電話", "**0599-26-7100**（店舗）／予約センター 0800-7000-111（8:00〜20:00）"],
        ["取消手数料", "7日前まで無料 → 6〜3日前20% → 2〜1日前30% → 当日以降50%（上限13,000円）"],
        ["変更・取消", "利用1時間前までWebサイト、それ以降は**出発店舗へ直接連絡**"],
        ["持ち物", "**運転免許証**・決済手段・ETCカード（予約原本は手元のメールで確認してください）"]
      ],
      notes: "<strong>docxの段階で未確定だった「店舗名」と「11:08着の連絡」は、予約票で両方とも解決しました。</strong>貸出・返却とも鳥羽駅前店（鳥羽市鳥羽1丁目2380-29）で、到着列車も申告済みです。<strong>残る判断は免責補償</strong>——予約は「非加入」なので、事故のときの免責額（一般に5〜10万円）が自己負担になります。当日カウンターで加入できるので、乗る前に2人で決めておいてください。日産ノートe-POWERは希望に合いますが、オリックスの鳥羽店は18時閉店で水族館後の余裕が小さいため、今回はトヨタで確定しています。<strong>返却は同一店舗</strong>（鵜方への乗り捨てはワンウェイ料金が発生し、鳥羽駅前の駐車場代より高くなりやすい）。",
      maps: "トヨタレンタカー 鳥羽駅前店"
    },
    {
      name: "鳥羽駅",
      area: "鳥羽市鳥羽1-8-13",
      coords: [34.4866765, 136.8431256],
      category: "confirmed",
      spotKey: "station",
      areaKey: "toba",
      images: ["images/tobaeki.jpg", "images/tobaeki_2.jpg", "images/tobaeki_3.jpg", "images/tobaeki_4.jpg"],
      gmapsPlaceId: "ChIJOSc38JL4BGARF8pDeNlKgPg",
      links: [
        { label: "近鉄 駅時刻・乗換案内", url: "https://eki.kintetsu.co.jp/" }
      ],
      badges: [
        { text: "往路11:08着 / 復路19:18発", cls: "priority-top" }
      ],
      ratings: { google: "3.8", googleReviews: "470" },
      desc: "この旅行の現地の起点。到着後すぐ駅前のトヨタレンタカーへ向かい、最終日は駅前で夕食を取ってから19:18発に乗る。水族館へは**徒歩約10分**。",
      meta: [
        ["往路", "**11:08着**（鶴橋9:13発・伊勢志摩ライナー 6903列車／6号車 6B・6C）"],
        ["復路", "**19:18発 → 鶴橋21:12頃着**（伊勢志摩ライナー 1902列車／6号車 7B・7C）"],
        ["徒歩", "鳥羽水族館まで**約10分**、ミキモト真珠島まで約5分"],
        ["買い物", "駅直結の**鳥羽1番街**。ただし祝日は17:30〜18:00に閉まる店が多い"],
        ["乗車前", "18:35〜19:05に飲み物・土産・トイレ。**チケットレスの画面は2人とも**出せるようにしておく"]
      ],
      notes: "<strong>最終日の18:35〜19:05は思ったより余裕がありません。</strong>鳥羽1番街は火曜17:30閉店の案内があり、夕食を終えてから土産を探すと間に合わない可能性があります。買っておきたいものがあるなら、<strong>夕食前か、水族館を出たあとの時間に済ませてください。</strong>",
      maps: "鳥羽駅"
    },
    {
      name: "鶴橋駅（集合・解散）",
      area: "大阪市生野区鶴橋2-1-20",
      coords: [34.6652458, 135.530318],
      category: "confirmed",
      spotKey: "station",
      areaKey: "michi",
      images: ["images/tsuruhashi.jpg", "images/tsuruhashi_2.jpg", "images/tsuruhashi_3.jpg", "images/tsuruhashi_4.jpg"],
      gmapsPlaceId: "ChIJWSyBX6ngAGARPB_btzzU7ow",
      links: [
        { label: "近鉄 伊勢志摩ライナー 座席案内", url: "https://www.kintetsu.co.jp/gyoumu/Express/train/ise-liner.html" },
        { label: "近鉄 特急券案内", url: "https://www.kintetsu.co.jp/gyoumu/kippu/tokkyuuken/tokkyuuken.html" }
      ],
      badges: [
        { text: "8:40〜8:50 集合", cls: "priority-top" }
      ],
      ratings: { google: "3.6", googleReviews: "1286" },
      desc: "往路と復路の起点。移動効率だけなら途中乗車のほうが折り返しが少ないが、今回は**出発から一緒に過ごし、同じデラックス席に同時に乗る**ことを優先して2人とも鶴橋から乗る。",
      meta: [
        ["集合", "**8:40〜8:50**。飲み物を買って9:13発に余裕をもって乗る"],
        ["往路", "**9:13発 → 鳥羽11:08着**（伊勢志摩ライナー 6903列車／**6号車 6B・6C**・デラックス／約1時間55分）"],
        ["復路", "**鳥羽19:18発 → 21:12頃着**（1902列車／**6号車 7B・7C**）。ここで解散"],
        ["料金", "購入済みの特急券は**片道2人ぶんで4,120円**（特急3,280円＋デラックス840円）。往復8,240円。**別に乗車券（普通運賃）が要る**ので、2人往復の総額は約17,600円"],
        ["⚠️ 乗車券", "**買ってあるのは特急券だけです。**乗車には別途、紙のきっぷか交通系ICカードが必要（メールにも明記あり）"],
        ["座席", "デラックス席は前向きでリクライニングする。ツイン席（対面・追加料金なし）は固定式でリクライニングしないため今回は選んでいない"]
      ],
      notes: "<strong>前日までに、特急券の座席・乗車時刻・チケットレスの画面を2人とも確認してください。</strong>運賃・特急料金は改定されることがあるので、購入時点で区間表示と金額を最終確認すること。9:26発では伊勢志摩ライナーのデラックス席を選べず汎用車両の可能性があったため、9:13発を選んでいます。",
      maps: "鶴橋駅"
    },
    {
      name: "パールファルコ 伊勢店",
      area: "伊勢市一色町101",
      coords: [34.500219, 136.747788],
      category: "backup",
      spotKey: "pearl",
      areaKey: "futami",
      images: ["images/pearlfalco.jpg", "images/pearlfalco_2.jpg", "images/pearlfalco_3.jpg", "images/pearlfalco_4.jpg"],
      gmapsPlaceId: "ChIJgdyHB_hZBGAR0AYzT1E62e8",
      links: [
        { label: "公式サイト", url: "https://www.pearlfalco.com/jp/" }
      ],
      badges: [
        { text: "三重県真珠が満席のとき①", cls: "priority-mid" }
      ],
      ratings: { google: "3.3", googleReviews: "225" },
      desc: "室内で真珠養殖の歴史、品質の見分け方、手入れまで学べる施設。取り出し体験の**教育性がいちばん高い**。加工は任意。",
      meta: [
        ["営業", "月〜金**9:30〜16:00**、土日**9:30〜17:00**（Googleの案内）"],
        ["料金", "基本**2,000円＋金具**"],
        ["所要", "**約30〜40分**"],
        ["電話", "0120-108-065"],
        ["場所", "伊勢市一色町。三重県真珠から車で約10分、鳥羽駅からは約30分"]
      ],
      notes: "三重県真珠が満席だったときの<strong>第一の代替</strong>です。ただし9月21日は月曜（祝日）で、Googleの表示は<strong>16:00終了</strong>。13:30開始で30〜40分なら収まりますが、遅れが出たときの余裕は三重県真珠より小さくなります。電話で当日の営業終了時刻と空き枠を確認してください。",
      maps: "パールファルコ 伊勢店"
    },
    {
      name: "菊池パール",
      area: "伊勢市通町112-4（五十鈴ケ丘の近く）",
      coords: [34.4989098, 136.7406165],
      category: "backup",
      spotKey: "pearl",
      areaKey: "futami",
      images: ["images/kikuchipearl.jpg", "images/kikuchipearl_2.png", "images/kikuchipearl_3.jpg", "images/kikuchipearl_4.jpg"],
      gmapsPlaceId: "ChIJ-SzxHRtaBGARKr22SPmHlD4",
      links: [
        { label: "真珠取り出し体験（公式）", url: "https://kikuchipearl.com/trial.html" }
      ],
      badges: [
        { text: "三重県真珠が満席のとき②", cls: "priority-mid" },
        { text: "加工は必須の扱い", cls: "priority-warn" }
      ],
      ratings: { google: "3.5", googleReviews: "46" },
      desc: "水槽から自分で貝を選び、職人がその場で加工してくれる。**完成品の仕上がりを重視するならここ**。取り出しだけで持ち帰る形は取りにくい。",
      meta: [
        ["営業", "**9:00〜17:00・水曜定休**（9/21は月曜なので営業見込み）"],
        ["料金", "過去の案内で**取り出し1,100円＋金具1,650円〜**。現行プランは要確認"],
        ["所要", "**約40分**（加工必須の扱い）"],
        ["電話", "0596-23-2233"]
      ],
      notes: "料金の案内が過去のものなので、<strong>現行プランと所要時間を電話で確認</strong>してください。加工が必須の扱いだと、時間が押したときに「真珠だけ持ち帰って短縮する」という逃げが使えません。三重県真珠・パールファルコがどちらも取れなかったときの三番手として考えてください。",
      maps: "菊池パール 伊勢市通町"
    },
    {
      name: "真珠体験 パール美樹",
      area: "志摩市志摩町御座65-1（志摩半島西部）",
      coords: [34.2753777, 136.7763629],
      category: "backup",
      spotKey: "pearl",
      areaKey: "shima",
      images: ["images/pearlmiki.jpg", "images/pearlmiki_2.jpg", "images/pearlmiki_3.jpg", "images/pearlmiki_4.jpg"],
      gmapsPlaceId: "ChIJvzU1L26pBWAR3V1agnKxZA0",
      links: [
        { label: "施設案内（伊勢志摩観光）", url: "https://isesima.info/pearl-miki/accessories/" }
      ],
      badges: [
        { text: "雰囲気は第1希望", cls: "priority-top" },
        { text: "鳥羽から片道約1時間", cls: "priority-warn" },
        { text: "完全予約制", cls: "priority-warn" }
      ],
      ratings: { google: "4.6", googleReviews: "44" },
      desc: "静かな真珠養殖場、真珠小屋、海上の筏。**特別感はここがいちばん高い**。海況がよければ筏の上で体験し、粗塩で磨いて約200種の金具から加工する。",
      meta: [
        ["営業", "**10:00〜15:00・水曜定休**（資料では水・木休。完全予約制）"],
        ["料金", "**取り出し3,000円＋金具2,000円〜**、または3,500円等。公式と観光情報で表示に差があるので**要電話確認**"],
        ["所要", "**約60分**"],
        ["電話", "0599-88-3592"],
        ["移動", "鳥羽駅から**片道約1時間前後**。ここを選ぶとホテル到着は15:10〜15:30になる"],
        ["注意", "天候・海況・施設都合で**筏ではなく陸上体験**になることがある"]
      ],
      notes: "<strong>雰囲気だけで選ぶなら本来はここが第1希望です。</strong>それでも実務上の第一案を三重県真珠にしているのは、鳥羽から遠く「現地ランチ＋15時台のホテル到着」と両立しにくいからです。ここを選ぶ場合は、<strong>ランチを道中の短時間利用・テイクアウト・ホテルのラウンジのスナックで補う</strong>形になります。予備プランの「パール美樹（御座）案」で本命に上書きできます。9月21日は月曜祝日で通常の定休日ではありませんが、営業と空き枠は必ず電話で確認してください。",
      maps: "真珠体験 パール美樹 志摩市御座"
    },
    {
      name: "真珠工房 真珠の里",
      area: "志摩市志摩町越賀1125-88（※鳥羽市ではない）",
      coords: [34.2735989, 136.7935658],
      category: "backup",
      spotKey: "pearl",
      areaKey: "shima",
      images: ["images/shinjunosato.jpg", "images/shinjunosato_2.jpg", "images/shinjunosato_3.jpg", "images/shinjunosato_4.jpg"],
      gmapsPlaceId: "ChIJ71wpTY-pBWARg86ONEZFyUM",
      links: [
        { label: "公式サイト", url: "https://s-tamachan.net/" }
      ],
      badges: [
        { text: "第2希望・金具400種以上", cls: "priority-mid" },
        { text: "鳥羽から移動が長い", cls: "priority-warn" }
      ],
      ratings: { google: "4.6", googleReviews: "92" },
      desc: "実際の養殖場。養殖網からアコヤ貝を自分で選んで取り出せる。**取り出した真珠を見てから、加工するか真珠のまま持ち帰るかを決められる**のが強み。",
      meta: [
        ["営業", "**9:30〜16:00・火曜定休**（9/21は月曜なので営業見込み）"],
        ["料金", "土日祝の事前予約で**アコヤ貝1個2,500円**の案内"],
        ["所要", "**30〜60分**（内容によって1〜1.5時間）"],
        ["金具", "**400種類以上**。チタン・シルバー・K18等"],
        ["電話", "0599-85-0515"],
        ["駐車", "**第1駐車場は急坂**。車高や運転に不安があれば第2駐車場を使う案内がある"]
      ],
      notes: "自由度と体験感ではパール美樹に次ぐ第2希望です。<strong>12:30前後の予約なら成立しますが、昼食を11:30頃に短時間で済ませる必要があり、ホテル到着は15:15前後になります。</strong>資料の注意として、この施設は<strong>鳥羽市ではなく志摩市志摩町越賀</strong>です（ネット上の情報で所在地が混同されていることがあります）。予備プランの「真珠の里（越賀）案」で本命に上書きできます。",
      maps: "真珠工房 真珠の里 志摩市越賀"
    },
    {
      name: "給油所（ENEOS セルフ鳥羽SS）",
      area: "鳥羽市安楽島町1412-1（鳥羽駅から約2.5km）",
      coords: [34.4674841, 136.852456],
      category: "warning",
      spotKey: "station",
      areaKey: "tobafar",
      images: ["images/gs.jpg", "images/gs_2.jpg", "images/gs_3.jpg", "images/gs_4.jpg"],
      gmapsPlaceId: "ChIJp8Tdqc34BGARVNjbfgufd7s",
      links: [
        { label: "店舗情報（ENEOS）", url: "https://eneos-ss.com/search/ss/pc/detail.php?SCODE=705110" }
      ],
      badges: [
        { text: "⚠️ 受取時に返却店へ確認", cls: "priority-warn" }
      ],
      ratings: { google: "3.6", googleReviews: "141" },
      desc: "返却前の給油に使える候補。**この店を指定されているわけではない**ので、レンタカーを受け取るときに「どこで給油して返せばよいか」を必ず聞いてください。",
      meta: [
        ["営業", "**毎日6:00〜22:00**"],
        ["場所", "鳥羽市安楽島町。**鳥羽駅から約2.5km・車で5〜7分**"],
        ["電話", "0599-37-7300"],
        ["段取り", "水族館を16:10〜16:40に出て給油、16:50〜17:10に返却、という順で組んである"]
      ],
      notes: "<strong>返却店が別のスタンドを指定していることがあります。</strong>受取時に確認して、違っていればこのカードの予定を差し替えてください。給油を忘れると返却時に割高な精算になります。",
      maps: "ENEOS セルフ鳥羽SS"
    },
    {
      name: "鳥羽1番街",
      area: "鳥羽市鳥羽1丁目（鳥羽駅直結）",
      coords: [34.4872325, 136.8438861],
      category: "warning",
      spotKey: "station",
      areaKey: "toba",
      images: ["images/ichibangai.jpg", "images/ichibangai_2.jpg", "images/ichibangai_3.jpg", "images/ichibangai_4.jpg"],
      gmapsPlaceId: "ChIJf-L-xpL4BGAR8qJHDlY3VaU",
      links: [
        { label: "公式サイト", url: "https://www.toba1ban.co.jp/" }
      ],
      badges: [
        { text: "⚠️ 19時には閉まっている", cls: "priority-warn" }
      ],
      ratings: { google: "3.6", googleReviews: "1503" },
      desc: "鳥羽駅に直結した飲食・土産の施設。**夕食の本命には早すぎ、土産を買う時間としては遅すぎる**という、今回いちばんタイミングが噛み合わない場所。",
      meta: [
        ["営業", "月〜水**9:30〜17:30**・木曜定休・土日**9:30〜18:00**（Googleの案内）"],
        ["9/22", "火曜なので**17:30閉店**の見込み。19:18の乗車前には**開いていない**"],
        ["電話", "0599-26-3331"],
        ["使いどころ", "土産を買うなら**水族館を出たあと・夕食の前**に寄る"]
      ],
      notes: "旅程では18:35〜19:05を「駅へ戻る・買い物・乗車準備」にしていますが、<strong>その時間に鳥羽1番街は閉まっている可能性が高い</strong>です。買いたいものがあるなら、16:40〜17:30のレンタカー返却前後か、夕食前に済ませてください。祝日の営業時間は直前に変わることがあるので、当日は現地の掲示を見てください。",
      maps: "鳥羽1番街"
    },
    {
      name: "ミキモト真珠島",
      area: "鳥羽市鳥羽1-7-1（鳥羽駅から徒歩約5分）",
      coords: [34.4833052, 136.8467809],
      category: "backup",
      spotKey: "aqua",
      areaKey: "toba",
      images: ["images/mikimoto.jpg", "images/mikimoto_2.jpg", "images/mikimoto_3.jpg", "images/mikimoto_4.jpg"],
      gmapsPlaceId: "ChIJDRi-Buv4BGARimZ9EZCKxFA",
      links: [
        { label: "公式サイト", url: "https://www.mikimoto-pearl-island.jp/" }
      ],
      badges: [
        { text: "任意（必須から外した）", cls: "priority-mid" }
      ],
      ratings: { google: "4.0", googleReviews: "191" },
      desc: "真珠博物館、御木本幸吉記念館、海女の実演、ショップ。真珠の島として有名だが、**真珠取り出し体験は別施設で行うので今回は必須から外している**。",
      meta: [
        ["場所", "鳥羽駅から徒歩約5分。鳥羽水族館の隣"],
        ["扱い", "**任意**。追加すると2日目が過密になる"],
        ["特別ツアー", "通常入場とは別の**約2.5時間・1人22,000円**のツアー（町歩き・英語ガイド・限定の真珠取り出し等）は、時間・料金ともに大きく今回は不採用"]
      ],
      notes: "水族館のすぐ隣なので物理的には寄れますが、<strong>ラッコの待ち時間が読めないうちに予定を足すと、退館時刻と返車時刻に直接響きます。</strong>入れるとしたら「ラッコの列が短くて時間が余った」と分かってからにしてください。",
      maps: "ミキモト真珠島"
    },
    {
      name: "伊勢志摩真珠館",
      area: "鳥羽市堅神町545（鳥羽駅から車で約10分）",
      coords: [34.480334, 136.814705],
      category: "backup",
      spotKey: "aqua",
      areaKey: "tobafar",
      images: ["images/shinjukan.jpg", "images/shinjukan_2.jpg", "images/shinjukan_3.jpg", "images/shinjukan_4.jpg"],
      gmapsPlaceId: "ChIJDQ7kHTJWBGAREajkG91O7vs",
      links: [
        { label: "公式サイト", url: "http://www.shinju.ne.jp/" },
        { label: "館内紹介（公式）", url: "http://www.shinju.ne.jp/guide" },
        { label: "よくあるご質問（公式）", url: "http://www.shinju.ne.jp/faq" },
        { label: "施設案内（伊勢志摩観光ナビ）", url: "https://www.iseshima-kanko.jp/spot/1285" }
      ],
      badges: [
        { text: "入館無料・年中無休", cls: "priority-mid" },
        { text: "⚠️ 取り出し体験は公式に案内が無い", cls: "priority-warn" },
        { text: "1日目の二見→ホテルの動線上", cls: "priority-mid" }
      ],
      ratings: { google: "3.2", googleReviews: "398" },
      desc: "**入館無料**の真珠テーマ館。**ガラス越しに加工場と彫金の作業が見える**のが本体で、200インチのシアターもある。ただし**真珠の取り出し体験は公式に案内が無い**。",
      meta: [
        ["営業", "**公式は8:00開館・17:00最終入館・年中無休**（公式FAQ）。ただし**Googleの表示は全曜日9:00〜17:00**で食い違う。早い時間を狙うなら電話で確認する"],
        ["料金", "**入館無料**（公式FAQ・伊勢志摩観光ナビ）。じゃらんは「入館料1,320円〜」と表示しているが、これは体験プランの最低額と思われる"],
        ["⚠️ 取り出し体験", "**公式サイトには取り出し体験の案内が無い**（館内紹介は「1階＝販売／2階＝見学コース・シアター・加工場」、体験は本真珠でアクセサリーを作る**加工体験**の案内のみ）。**じゃらんには「真珠の『取り出し』体験（ピアス制作付き）2,640円〜」の記載があるが、同じページの住所が「伊勢市宮後545」と誤っている**ため裏が取れない。**やるなら必ず電話で確認**（0599-21-0077）"],
        ["できること", "200インチ・120席のシアター「ゼルダ」→ **ガラス越しの加工場と彫金の見学** → ギャラリー → 1階の販売エリア。**真珠75,000個で作られた城の模型**が「撮影スポット人気NO1」として置かれている"],
        ["所要", "**ガイド付きの見学で最低30分**（公式FAQ）。自由に見るだけなら15〜20分"],
        ["場所", "**鳥羽駅から2.9km・鳥羽水族館から2.8km・二見の三重県真珠から3.9km**。1日目の「二見 → ホテル」の動線上にある"],
        ["送迎", "**前日までに予約すればJR・近鉄鳥羽駅まで迎えに来る**（公式）。駅からタクシーなら約10分。今回はレンタカーなので使わない"],
        ["支払い", "各種クレジットカード・電子マネー・J-Debit。**伊勢市観光協会の真珠クーポンや、ホテルの提携クーポンが使える**"],
        ["おまけ", "6〜8人用の大型酸素ボックスがあり、**マイカーで来た客は15分無料**（通常は1グループ1時間3,240円）"],
        ["電話", "0599-21-0077"]
      ],
      notes: "<strong>ご質問への答え：ここでは真珠の取り出し体験ができるという確証が取れませんでした。</strong>公式サイトの館内紹介・よくある質問のどちらにも取り出し体験の案内が無く、施設の説明も「真珠の加工・販売・見学施設」です。伊勢志摩観光ナビも「本真珠でアクセサリーを作る体験プラン」としか書いていません。じゃらんにだけ「真珠の『取り出し』体験（ピアス制作付き）2,640円〜」とありますが、<strong>同じページの住所が「伊勢市宮後545」と誤っている</strong>ので、この1件だけを根拠にはできません。<strong>取り出し体験が目的なら、本命どおり二見の三重県真珠（または予備の志摩西部2施設）で予約してください。</strong>この施設の価値は別のところにあります——<strong>入館無料で、加工と彫金の現場をガラス越しに見られる</strong>のは他の候補に無い体験です。1日目の「二見 → ホテル」の途中にあるので、真珠体験が早く終わったときの寄り道には向いています。なお<strong>Google 3.2（398件）はこのサイトの地点の中では低いほう</strong>です。1階が販売エリアという構成は承知のうえで行ってください。",
      maps: "伊勢志摩真珠館 鳥羽市堅神町"
    },
    {
      name: "二見興玉神社（夫婦岩）",
      area: "伊勢市二見町江575",
      coords: [34.5089247, 136.7878294],
      category: "backup",
      spotKey: "view",
      areaKey: "futami",
      images: ["images/meotoiwa.jpg", "images/meotoiwa_2.jpg", "images/meotoiwa_3.jpg", "images/meotoiwa_4.jpg"],
      gmapsPlaceId: "ChIJBVDBdIBXBGARJUnwAzEVmGk",
      links: [
        { label: "公式サイト", url: "https://futamiokitamajinja.or.jp/" }
      ],
      badges: [
        { text: "資料に無い追加候補", cls: "priority-mid" },
        { text: "寄るなら15〜20分", cls: "priority-mid" }
      ],
      ratings: { google: "4.4", googleReviews: "12362" },
      desc: "二見のシンボル。**三重県真珠から車で5分以内**にあり、境内から夫婦岩まで歩いてすぐ。このサイトのヒーロー画像もここ。",
      meta: [
        ["参拝", "境内は24時間。夫婦岩は海岸沿いで、駐車場から数分歩く"],
        ["所要", "**15〜20分**の寄り道として"],
        ["電話", "0596-43-2020"],
        ["立ち位置", "**資料の予定には入っていない**。真珠体験が早く終わったときや、ランチの待ちが無かったときの余り時間用"]
      ],
      notes: "<strong>これは資料に無い、サイト側で足した近接候補です。</strong>本命プランには入れていません。1日目は「二見のランチ → 真珠体験 → 15時台にホテル」が優先なので、<strong>入れるとしたら、どこかを削るのではなく余った時間に充てる</strong>形にしてください。残暑の日中は日陰が少ないので、暑い日は無理をしないこと。",
      maps: "二見興玉神社 夫婦岩"
    },
    {
      name: "志摩地中海村",
      area: "志摩市浜島町迫子2619-1（志摩半島西部・英虞湾の南岸）",
      coords: [34.3026286, 136.8051357],
      category: "backup",
      spotKey: "view",
      areaKey: "shima",
      images: ["images/chichukai.jpg", "images/chichukai_2.jpg", "images/chichukai_3.jpg", "images/chichukai_4.jpg"],
      gmapsPlaceId: "ChIJtYRSvyGqBWAR1Oz8reDNTgk",
      links: [
        { label: "公式サイト", url: "https://www.puebloamigo.jp/" },
        { label: "日帰りプラン", url: "https://www.puebloamigo.jp/dayuse/" },
        { label: "営業・休村日のお知らせ", url: "https://www.puebloamigo.jp/eigyo/" }
      ],
      badges: [
        { text: "志摩西部の真珠体験から車で15分", cls: "priority-mid" },
        { text: "入村料 大人700円", cls: "priority-mid" },
        { text: "ホテルから片道30〜40分", cls: "priority-warn" }
      ],
      ratings: { google: "4.0", googleReviews: "2583" },
      desc: "英虞湾を見下ろす丘に白壁の建物が並ぶ、**スペインの村を模したリゾート**。宿泊しなくても**入村料を払えば村内を歩ける**が、今回の本命の動線からは外れる。",
      meta: [
        ["営業", "日帰りの入村は**10:00〜16:30最終受付・17:00退出**。**9/21・9/22は休村日ではない**（2026年9月の休村は9/2正午〜9/4午前のみ）"],
        ["料金", "**入村料 大人（中学生以上）700円／小学生300円／幼児以下無料／ペット1匹300円**。**志摩市・伊勢市・鳥羽市・度会郡在住なら無料**（在住者1名につき4名まで・住所を証明できるものが必要）"],
        ["所要", "**歩いて見るだけなら60〜90分**。カフェやレストランに入るならさらに1時間程度"],
        ["移動", "**ホテル（的矢）から片道30〜40分**。英虞湾の入り江を回り込むので直線距離（約9km）より時間がかかる。**鳥羽駅からは片道50分〜1時間**"],
        ["組み合わせ", "**真珠工房 真珠の里（越賀）から約3km・車で10〜15分、パール美樹（御座）からは約4km・15分**。志摩半島西部の真珠体験を選んだときだけ、素直につながる"],
        ["飲食", "レストラン（RIAS by Kokotxa／タベルナ アスール）とカフェ（カフェ アミーゴ／ペスカドール）がある。営業日はヴィレッジカレンダーで確認する"],
        ["撮影", "個人で楽しむ撮影は無料。**三脚・レフ板・ドローンは料金を払っても不可**。コスプレ・グループ撮影は事前許可が必要"],
        ["電話", "0599-52-1226（ホテル代表）／0599-52-1336（予約専用・9:00〜18:00）"],
        ["立ち位置", "**本命の旅程には入れていない**。1日目・2日目のどちらの動線からも外れる"]
      ],
      notes: "<strong>これは本命プランに入っていない、遠方の追加候補です。</strong>1日目は「二見のランチ → 真珠体験 → 15時台にホテル」、2日目は「11時チェックアウト → 磯部で早い昼食 → 13時前に鳥羽水族館」なので、<strong>そのままの旅程には入りません</strong>。<strong>入れるとしたら、予備プランで志摩半島西部の真珠体験（パール美樹・真珠の里）を選んだときです。</strong>どちらも地中海村から車で10〜15分なので、真珠体験のあとに寄ってからホテルへ向かう形になります。ただしその場合、ホテル到着は<strong>16時以降</strong>になり、ラウンジのイブニングソーシャル（15:00〜18:00）と温泉の時間が削れます。「ホテルでゆっくりする」という今回の方針とは正面からぶつかるので、<strong>どちらを取るかを先に決めてください。</strong>入村料は当日窓口で払えます。日帰りプランのうち食事付き等のプランは予約制なので、使うなら事前に電話を。",
      maps: "志摩地中海村 志摩市浜島町"
    },
    {
      name: "伊勢神宮 内宮（今回は行きません）",
      area: "伊勢市宇治館町1",
      coords: [34.4550157, 136.7251851],
      category: "backup",
      spotKey: "view",
      areaKey: "futami",
      images: ["images/naiku.jpg", "images/naiku_2.jpg", "images/naiku_3.jpg", "images/naiku_4.jpg"],
      gmapsPlaceId: "ChIJ8zef3-tQBGARpwz2UzdmCfA",
      links: [
        { label: "伊勢神宮 公式", url: "https://www.isejingu.or.jp/" },
        { label: "NEXCO中日本 SW交通対策", url: "https://www.c-nexco.co.jp/corporate/pressroom/news_release/6647.html" }
      ],
      badges: [
        { text: "⚠️ 今回は旅程から外しています", cls: "priority-warn" }
      ],
      ratings: { google: "4.7", googleReviews: "33169" },
      desc: "伊勢志摩の代表的な観光地だが、**今回は意図的に旅程から外している**。「なぜ伊勢に来て伊勢神宮に行かないのか」への答えがこのカード。",
      meta: [
        ["参拝", "5:00〜18:00（季節で変動）"],
        ["理由①", "**9月20〜22日は伊勢神宮の混雑対策で、伊勢IC・伊勢西IC等に出口規制・閉鎖が予定されている**"],
        ["理由②", "内宮・おかげ横丁はシルバーウィークの最混雑エリア。ここを入れると1日目の真珠体験と15時台のホテル到着が両方危うくなる"],
        ["結論", "**内宮・おかげ横丁を通らない動線**にして、二見 → ホテルへ抜ける。別の旅行で早朝から回すのがよい"]
      ],
      notes: "<strong>規制は伊勢神宮へ向かう交通が対象で、伊勢から志摩方面の全道路が通れなくなるわけではありません。</strong>ただし伊勢市街・内宮・朝熊周辺・国道23号では迂回交通と所要時間の不確実性があります。当日は<strong>ナビだけでなく、道路標識と現地の交通整理を優先</strong>してください。旅行1週間前に規制内容の最新案内を確認しておくと安心です。",
      maps: "伊勢神宮 内宮"
    },
    {
      name: "鳥羽水族館 鳥羽駅前駐車場",
      area: "鳥羽市鳥羽1丁目11（鳥羽駅のすぐ前）",
      coords: [34.485844, 136.8427752],
      category: "backup",
      spotKey: "park",
      areaKey: "toba",
      images: ["images/ekimae_p.jpg", "images/ekimae_p_2.jpg", "images/ekimae_p_3.jpg", "images/ekimae_p_4.jpg"],
      gmapsPlaceId: "ChIJV5Jxoqz5BGAR5VV1PzImF8A",
      links: [
        { label: "水族館のアクセス案内（公式）", url: "https://www.aquarium.co.jp/eigyou/access.html" }
      ],
      badges: [
        { text: "水族館が運営・駅前", cls: "priority-mid" },
        { text: "水族館までは徒歩10分", cls: "priority-warn" }
      ],
      ratings: { google: "3.8", googleReviews: "10" },
      desc: "**鳥羽水族館が運営している駅前の駐車場**。水族館そのものからは離れるが、鳥羽駅から**約100m**なので、駅前で夕食を取る2日目の夕方には都合がよい。",
      meta: [
        ["場所", "**鳥羽駅から約100m**。水族館までは徒歩10分ほど"],
        ["運営", "鳥羽水族館の公式駐車場のひとつ。料金・運用は公式のアクセス案内で確認する"],
        ["使いどころ", "**水族館のA・Bが満車のときの選択肢**。ここに停めれば、退館後そのまま駅前の店へ歩ける"]
      ],
      notes: "水族館の入口からは離れているので、<strong>「ラッコの列に急ぎたい日」の第一候補にはなりません</strong>。逆に、2日目のようにレンタカーを駅前で返してから駅周辺で夕食を取る動線では、駅に近いぶん扱いやすい駐車場です。料金は公式のアクセス案内で当日の運用を確認してください。",
      maps: "鳥羽水族館 鳥羽駅前駐車場"
    }
  ],

  /* === レストラン === */
  restaurants: [
    {
      name: "日本料理 さらさ廣",
      area: "伊勢市二見町茶屋537-20（キャッスルイン伊勢夫婦岩1F）",
      coords: [34.5081095, 136.7813275],
      category: "confirmed",
      genre: "地魚・和食",
      genreKey: "kaisen",
      areaKey: "futami",
      images: ["images/sarasahiro.jpg", "images/sarasahiro_2.jpg", "images/sarasahiro_3.jpg", "images/sarasahiro_4.jpg"],
      gmapsPlaceId: "ChIJKcBHetZZBGAR_Xc8CIwPiIo",
      links: [
        { label: "公式サイト", url: "https://sarasahiro.co.jp/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240301/24004967/" }
      ],
      badges: [
        { text: "1日目ランチ 第一候補", cls: "priority-top" },
        { text: "12:00予約を照会中", cls: "priority-warn" }
      ],
      ratings: { google: "4.2", googleReviews: "96", tabelog: "3.08", tabelogReviews: "23" },
      desc: "二見で**現地らしい海鮮ランチ**を食べたいときの第一候補。地魚を使った和食で、ホテルに着くまでの間に「旅行に来た」と感じられる一食になる。",
      meta: [
        ["営業", "**11:30〜14:30（L.O.13:30）** / 17:00〜20:30。**水・木定休**"],
        ["9/21", "月曜なので**営業見込み**"],
        ["電話", "**0596-43-1717**"],
        ["今回の使い方", "**12:00に予約**して、**12:55には出る**。1時間で出られるかを予約時に確認する"],
        ["場所", "夫婦岩の近く。三重県真珠まで車で約5分"]
      ],
      notes: "<strong>12:00前後で予約が取れるかを、いちばん先に電話で確認してください。</strong>ここが押さえられれば「ランチ → 13:30の真珠体験 → 15時台のホテル」がきれいにつながります。L.O.が13:30なので、12:00入店なら余裕はありますが、<strong>「1時間で出たい」ことを予約時に伝えておく</strong>と当日が楽になります。取れなければ maruru cafe（時間が読みやすい）へ切り替えてください。",
      maps: "日本料理 さらさ廣 二見"
    },
    {
      name: "海鮮食堂はま﨑",
      area: "志摩市磯部町穴川1183",
      coords: [34.3455657, 136.8138629],
      category: "confirmed",
      genre: "志摩の海鮮・寿司",
      genreKey: "kaisen",
      areaKey: "shima",
      images: ["images/hamazaki.jpg", "images/hamazaki_2.jpg", "images/hamazaki_3.jpg", "images/hamazaki_4.jpg"],
      gmapsPlaceId: "ChIJdeW2Bo-qBWAR9IndJTAf9PE",
      links: [
        { label: "公式サイト", url: "https://ise-shima-hamazaki.com/about/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240303/24017421/" }
      ],
      badges: [
        { text: "2日目ランチ 第一候補", cls: "priority-top" },
        { text: "駐車5台のみ", cls: "priority-warn" }
      ],
      ratings: { google: "3.6", googleReviews: "122", tabelog: "3.19", tabelogReviews: "23" },
      desc: "ホテルから鳥羽へ向かう動線上にある磯部の海鮮。**11:15の早い昼食**にちょうどよく、ここで食べておくと13時台の水族館入館に間に合う。",
      meta: [
        ["営業", "**11:00〜14:30** / 17:00〜21:00。**水曜定休**"],
        ["9/22", "火曜なので**営業見込み**"],
        ["電話", "**0599-55-3331**"],
        ["駐車", "**5台のみ**。連休は満車になりやすい"],
        ["今回の使い方", "**11:15前後・2名**で予約または営業確認。12:05には出る"]
      ],
      notes: "<strong>駐車場が5台しかありません。</strong>予約が取れるかを電話で確認し、取れないなら到着時刻を早めるか、あじへい磯部店（11:00〜23:00通しで時間が読める）に切り替えてください。2日目は<strong>13時台に水族館へ入るのが最優先</strong>なので、ここで待つ判断はしないこと。",
      maps: "海鮮食堂はま﨑 志摩市磯部町"
    },
    {
      name: "丸栄",
      area: "鳥羽市鳥羽1-6-19（鳥羽駅から徒歩圏）",
      coords: [34.4844494, 136.8444034],
      category: "confirmed",
      genre: "海鮮・刺身・海鮮丼",
      genreKey: "kaisen",
      areaKey: "toba",
      images: ["images/maruei.jpg", "images/maruei_2.jpg", "images/maruei_3.jpg", "images/maruei_4.jpg"],
      gmapsPlaceId: "ChIJ2yeXVpP4BGAR9-p_SVDzOfY",
      links: [
        { label: "公式サイト", url: "http://toba-maruei.com/menu.shtml" },
        { label: "鳥羽市観光協会", url: "https://www.toba.gr.jp/eat/1976/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24000993/" }
      ],
      badges: [
        { text: "2日目ディナー 第一候補", cls: "priority-top" },
        { text: "17:30予約・19:30閉店", cls: "priority-warn" }
      ],
      ratings: { google: "4.1", googleReviews: "348", tabelog: "3.34", tabelogReviews: "76" },
      desc: "鳥羽駅の徒歩圏で、刺身盛り・海鮮丼・天然車海老フライ。**レンタカーを早めに返してから、列車まで約1時間の夕食を取る**という今回の設計の要。",
      meta: [
        ["営業", "**11:00〜14:30 / 17:30〜19:30**（Google・食べログとも同じ）"],
        ["定休", "食べログには**記載なし**。公式サイトには「水曜日（不定休）」との記載があり情報が割れている"],
        ["電話", "**0599-25-3155**"],
        ["今回の使い方", "**9/22 17:30・2名で予約**。18:35頃に出て、19:18発に乗る"],
        ["注意", "**19:30閉店**。17:30に入れないと、ゆっくり食べる時間が残らない"]
      ],
      notes: "<strong>「営業しているか」と「17:30に2名で入れるか」を電話で確認してください。</strong>不定休の情報があるので、予約が取れれば当日の不確実性が一気に減ります。予約が取れると<strong>「遅くとも何時に水族館を出るか」が自動的に決まる</strong>のが大きな利点です。休み・満席なら一栄へ、それも難しければ大阪屋（17:00〜20:00・予約可）か焼貝いろは（18:30まで）へ切り替えます。",
      maps: "丸栄 鳥羽"
    },
    {
      name: "一栄",
      area: "鳥羽市鳥羽1-22-21（鳥羽駅の近く）",
      coords: [34.4888434, 136.8384135],
      category: "backup",
      genre: "海鮮・和食",
      genreKey: "kaisen",
      areaKey: "toba",
      images: ["images/ichiei.jpg", "images/ichiei_2.jpg", "images/ichiei_3.jpg", "images/ichiei_4.jpg"],
      gmapsPlaceId: "ChIJ13RL8o74BGARZG8EB7jxpMc",
      links: [
        { label: "Instagram", url: "https://instagram.com/kazuei.toba" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24000078/" }
      ],
      badges: [
        { text: "丸栄が休み・満席のとき", cls: "priority-mid" },
        { text: "夜のみ・23時まで", cls: "priority-mid" }
      ],
      ratings: { google: "4.4", googleReviews: "453", tabelog: "3.57", tabelogReviews: "153" },
      desc: "駅近の海鮮・和食。**夜のみの営業**で、予約できれば時間を固定しやすい。点数はGoogle 4.4・食べログ3.57と高い。",
      meta: [
        ["営業", "**17:00〜23:00（夜のみ）**。**水曜定休**"],
        ["9/22", "火曜なので**営業見込み**"],
        ["電話", "**0599-25-2885**"],
        ["価格", "丸栄よりやや高め想定"],
        ["利点", "**23時まで営業**なので、水族館の退館が押しても受け止められる"]
      ],
      notes: "丸栄が休み・満席だったときの<strong>いちばん強い代替</strong>です。夜のみの営業なので昼には使えません。19:18発に乗るなら、17:30〜18:35という枠は丸栄と同じです。",
      maps: "一栄 鳥羽"
    },
    {
      name: "天びん屋 本店",
      area: "鳥羽市鳥羽1-4-61（鳥羽駅から徒歩圏）",
      coords: [34.48422, 136.842986],
      category: "warning",
      genre: "郷土料理・海鮮",
      genreKey: "kaisen",
      areaKey: "toba",
      images: ["images/tenbinya.jpg", "images/tenbinya_2.jpg", "images/tenbinya_3.jpg", "images/tenbinya_4.jpg"],
      gmapsPlaceId: "ChIJ4yOjb5P4BGARZbhaIX9qlic",
      links: [
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24000079/" }
      ],
      badges: [
        { text: "⚠️ 9/22が振替休業の可能性が高い", cls: "priority-warn" }
      ],
      ratings: { google: "3.9", googleReviews: "722", tabelog: "3.43", tabelogReviews: "250" },
      desc: "駅の徒歩圏にある郷土料理・海鮮の店。点数も口コミ数も十分だが、**今回はいちばん営業が読めない**。",
      meta: [
        ["営業", "火〜日**11:30〜14:00 / 17:00〜21:00**"],
        ["定休", "**月曜定休。ただし祝日の場合は営業し、翌日に休業**"],
        ["9/21", "月曜だが祝日なので**営業見込み**"],
        ["9/22", "⚠️ **9/21が祝日営業になるぶん、火曜のこの日が振替休業になる可能性が高い**"],
        ["電話", "050-5493-6980"]
      ],
      notes: "<strong>9月22日に行くつもりなら、必ず直接電話して営業を確認してください。</strong>「月曜定休・祝日は営業して翌日休み」という運用がそのまま当てはまると、9/22（火）は休みになります。資料の時点でも「9/22の営業を直接確認できた場合のみ候補」と整理されていました。確認が取れないなら、候補から外して丸栄・一栄で組んでください。",
      maps: "天びん屋 本店 鳥羽"
    },
    {
      name: "家庭料理 扇屋",
      area: "伊勢市二見町茶屋6-1",
      coords: [34.5047222, 136.7769444],
      category: "backup",
      genre: "二見の家庭料理・定食",
      genreKey: "shokudo",
      areaKey: "futami",
      images: ["images/ougiya.jpg", "images/ougiya_2.jpg", "images/ougiya_3.jpg", "images/ougiya_4.jpg"],
      gmapsPlaceId: "ChIJI6HJ-NdZBGARqOQN3LuEfLk",
      links: [
        { label: "公式サイト", url: "http://ougiyafutami.com/" },
        { label: "伊勢志摩観光ナビ", url: "https://www.iseshima-kanko.jp/gourmet/1404" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240301/24001121/" }
      ],
      badges: [
        { text: "1日目ランチ 第二候補", cls: "priority-mid" },
        { text: "⚠️ 予約不可・現金のみ", cls: "priority-warn" }
      ],
      ratings: { google: "4.1", googleReviews: "564", tabelog: "3.44", tabelogReviews: "184" },
      desc: "二見の地元食材を使った家庭料理。気軽で点数も高い（食べログ3.44・口コミ184件）が、**予約ができず現金のみ**なので、時刻が決まっている今回は待ち時間のリスクを抱える。",
      meta: [
        ["営業", "**11:00〜14:00** / 17:00〜19:00。**木曜定休**"],
        ["9/21", "月曜なので**営業見込み**"],
        ["電話", "0596-43-3890"],
        ["注意", "**予約不可・現金のみ**の案内。現金を用意しておく"],
        ["判断", "**店頭の待ちが10〜15分を超えたら、迷わず他へ**"]
      ],
      notes: "祝日の待ち時間が読めないのが弱点です。さらさ廣が取れなかったときの候補ですが、<strong>13:30の真珠体験に間に合わせることが最優先</strong>なので、店頭で待つ判断はしないでください。待ちが出ていたら maruru cafe へ回すのが確実です。",
      maps: "家庭料理 扇屋 二見"
    },
    {
      name: "あじへい 磯部店",
      area: "志摩市磯部町穴川1162-25",
      coords: [34.3523627, 136.8126579],
      category: "backup",
      genre: "ラーメン・定食（通し営業）",
      genreKey: "shokudo",
      areaKey: "shima",
      images: ["images/ajihei.jpg", "images/ajihei_2.jpg", "images/ajihei_3.jpg", "images/ajihei_4.jpg"],
      gmapsPlaceId: "ChIJkxs1LpGqBWARtiyn_wtOS08",
      links: [
        { label: "公式サイト", url: "http://www.ajihei-isobe.com/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240303/24005699/" }
      ],
      badges: [
        { text: "時間が読める代替", cls: "priority-mid" },
        { text: "ほぼ無休・通し営業", cls: "priority-top" }
      ],
      ratings: { google: "4.0", googleReviews: "557", tabelog: "3.05", tabelogReviews: "51" },
      desc: "**10:30〜23:00の通し営業でほぼ無休**。ローカルな海鮮感は低いが、「2日目の昼で時間を落としたくない」ときの安全弁としては最良。はま﨑のすぐ近く。",
      meta: [
        ["営業", "**10:30〜23:00（通し）**。基本無休（年末年始を除く）"],
        ["電話", "0599-55-2580"],
        ["立ち位置", "**時間優先の代替**。はま﨑が満席・待ちのときにそのまま回れる距離"],
        ["利点", "開店時刻が早いので、ホテルを11:00に出てすぐ入れる"]
      ],
      notes: "2日目の昼が混雑したときの切替先です。<strong>13時台の水族館入館を守ること</strong>を優先して、迷ったらここにしてください。",
      maps: "あじへい 磯部店"
    },
    {
      name: "鳥羽割烹 たまも",
      area: "鳥羽市安楽島町1395-3（駅前ではない）",
      coords: [34.4654754, 136.8551942],
      category: "backup",
      genre: "海鮮割烹",
      genreKey: "kaisen",
      areaKey: "tobafar",
      images: ["images/tamamo.jpg", "images/tamamo_2.jpg", "images/tamamo_3.jpg", "images/tamamo_4.jpg"],
      gmapsPlaceId: "ChIJAZDtRC3_BGARYBDfcj41DPw",
      links: [
        { label: "公式サイト", url: "http://www.tamamo.net/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24000455/" }
      ],
      badges: [
        { text: "駅前ではない（車移動）", cls: "priority-warn" }
      ],
      ratings: { google: "3.1", googleReviews: "110", tabelog: "3.06", tabelogReviews: "13" },
      desc: "予約利用向けの海鮮割烹。ただし**鳥羽駅前ではなく安楽島町**なので、車かタクシーでの移動になる。「返却前に駅から離れて食べる」形になり、今回の希望とはずれる。",
      meta: [
        ["営業", "平日**11:30〜15:00 / 17:00〜21:00**、土日祝**11:00〜21:00**（食べログの案内）"],
        ["定休", "情報が割れている（「無休」と「不定休」の両方あり）。**要電話確認**"],
        ["電話", "0599-25-4741"],
        ["場所", "**鳥羽駅から約2.5km**。給油所と同じ安楽島町方面"],
        ["立ち位置", "「レンタカーを返す前に食べる」なら成立するが、今回の「返してから駅前でゆっくり」とは逆"]
      ],
      notes: "今回の設計とは動線が合わないので、<strong>優先度は低い</strong>候補です。載せているのは、駅前の店がすべて休み・満席だったときに「車がまだある時間なら、こういう選択肢もある」と思い出せるようにするためです。",
      maps: "鳥羽割烹 たまも"
    },
    {
      name: "大阪屋 鳥羽店",
      area: "鳥羽市鳥羽1-4-64（鳥羽駅から約280m）",
      coords: [34.4841146, 136.8428446],
      category: "backup",
      genre: "海老フライ・鰻・和食",
      genreKey: "shokudo",
      areaKey: "toba",
      images: ["images/osakaya.png", "images/osakaya_2.jpg", "images/osakaya_3.jpg", "images/osakaya_4.jpg"],
      gmapsPlaceId: "ChIJTVUScJP4BGARKfLOOHW8joY",
      links: [
        { label: "公式サイト", url: "http://www.oosakaya.net/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24000562/" }
      ],
      badges: [
        { text: "★ 丸栄の代替では最有力", cls: "priority-top" },
        { text: "夜営業・予約可・駐車場あり", cls: "priority-top" }
      ],
      ratings: { google: "4.1", googleReviews: "392", tabelog: "3.50", tabelogReviews: "129" },
      desc: "背開きの**海老フライ**と秘伝のタレの**鰻蒲焼一本**が看板の割烹。駅前の徒歩圏で、**夜営業・予約可・駐車場ありの3つが揃う数少ない店**。",
      meta: [
        ["営業", "**11:00〜14:00 / 17:00〜20:00**。**木曜定休（祝日の場合は営業）**"],
        ["9/21・9/22", "どちらも月・火なので**営業見込み**"],
        ["電話", "**0599-25-2336**"],
        ["予約", "**予約可**"],
        ["駐車場", "**あり**"],
        ["名物", "海老フライ、鰻蒲焼一本、鳥羽産一本釣りの天然鯵"],
        ["予算", "2,000〜2,999円"]
      ],
      notes: "<strong>2日目の夕食（17:30〜18:35）で、丸栄が休み・満席だったときのいちばん現実的な代替です。</strong>17:00開店・20:00閉店なので17:30入店に無理がなく、予約もできます。駐車場があるので、レンタカーを返す前に寄るという順番にも組み替えられます。木曜定休ですが9/21は月曜、9/22は火曜なのでどちらも営業見込みです。",
      maps: "大阪屋 鳥羽店"
    },
    {
      name: "焼貝 いろは",
      area: "鳥羽市鳥羽1-8-5（さざえストリート・鳥羽駅から徒歩1分）",
      coords: [34.4861547, 136.84364420000003],
      category: "backup",
      genre: "焼貝・居酒屋",
      genreKey: "yakigai",
      areaKey: "toba",
      images: ["images/iroha.jpg", "images/iroha_2.jpg", "images/iroha_3.jpg", "images/iroha_4.jpg"],
      gmapsPlaceId: "ChIJxVRZgW35BGARgnLk4Vzfsno",
      links: [
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24010352/" }
      ],
      badges: [
        { text: "さざえストリートで唯一18:30まで", cls: "priority-top" },
        { text: "予約可・通し営業", cls: "priority-mid" }
      ],
      ratings: { google: "4.3", googleReviews: "282", tabelog: "3.51", tabelogReviews: "275" },
      desc: "さざえストリートでいちばん鳥羽駅寄り（**徒歩1分**）の焼貝店。答志島産しらすが一押しで、**10:15〜18:30の通し営業＋予約可**という、この並びでは例外的に使い勝手のよい店。",
      meta: [
        ["営業", "**10:00〜18:30（L.O.18:00）**の通し。最終予約17:45"],
        ["定休", "**不定期（＝不定休）**。曜日で判断できないので要電話確認"],
        ["電話", "**0599-25-4809**（予約は050-5595-9662）"],
        ["予約", "**予約可**。当日キャンセル不可・無連絡10分超はキャンセル扱い・キャンセル料1名1,000円"],
        ["駐車場", "無し（近くのコインパーキング）"],
        ["名物", "答志島産しらす。5月〜9月末は**期間限定の岩牡蠣**"],
        ["予算", "昼2,000〜2,999円 / 夜4,000〜4,999円"]
      ],
      notes: "<strong>さざえストリートの4店のなかで、夕食に使えるのはここだけです</strong>（水沼17:00・ちさと17:00・松本16:00で閉まります）。17:30に入れば18:00のL.O.までは食べられるので、19:18発にも間に合います。ただし<strong>定休日が「不定期」</strong>で曜日から判断できないため、当てにするなら必ず予約してください。キャンセル規定が厳しめな点にも注意。",
      maps: "焼貝 いろは 鳥羽"
    },
    {
      name: "海女小屋 ちさと",
      area: "鳥羽市鳥羽1-8-7（さざえストリート・鳥羽駅から徒歩3分）",
      coords: [34.4860737, 136.8438008],
      category: "backup",
      genre: "焼貝・海鮮",
      genreKey: "yakigai",
      areaKey: "toba",
      images: ["images/chisato.jpg", "images/chisato_2.jpg", "images/chisato_3.jpg", "images/chisato_4.jpg"],
      gmapsPlaceId: "ChIJZ03YJpP4BGARMGXG86vsmTE",
      links: [
        { label: "Instagram", url: "https://instagram.com/amagoyachisato" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24006770/" }
      ],
      badges: [
        { text: "9/22は営業と告知あり", cls: "priority-top" },
        { text: "予約不可", cls: "priority-warn" }
      ],
      ratings: { google: "4.4", googleReviews: "345", tabelog: "3.52", tabelogReviews: "175" },
      desc: "さざえストリートの焼貝専門店。あわび・伊勢海老・さざえを秘伝のタレで焼き上げる。**9月の火曜定休について「22日は営業」と店から明示されている**のが心強い。",
      meta: [
        ["営業", "**10:00〜17:00（L.O.16:30）**"],
        ["定休", "火曜日（**祝日の場合は営業し木曜が代休**）。店の告知に「9月は毎週火曜と14日・24日が休み、**ただし22日は営業**」とある"],
        ["9/22", "**営業の見込み**（上記の告知どおりなら）。ただし告知に年の明記が無いので直前に再確認する"],
        ["電話", "0599-26-7520"],
        ["予約", "**予約不可**"],
        ["駐車場", "無し（近隣の有料パーキング）"]
      ],
      notes: "<strong>17:00で閉まるので夕食には使えません。</strong>2日目に水族館を早く出られた日の、列車までの軽い一杯という使い方になります。予約ができないので、3連休は並ぶ前提で。店の告知は年が書かれていないため、旅行の直前にもう一度ページを見てください。",
      maps: "海女小屋 ちさと 鳥羽"
    },
    {
      name: "水沼サザエ店",
      area: "鳥羽市鳥羽1-8-7（さざえストリート・鳥羽駅から徒歩3分）",
      coords: [34.4860983, 136.8438024],
      category: "backup",
      genre: "焼貝・海鮮",
      genreKey: "yakigai",
      areaKey: "toba",
      images: ["images/mizunuma.jpg", "images/mizunuma_2.jpg", "images/mizunuma_3.jpg", "images/mizunuma_4.jpg"],
      gmapsPlaceId: "ChIJ0Txg_Gj5BGARUBKO6q8baRk",
      links: [
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24010333/" }
      ],
      badges: [
        { text: "さざえストリートで最高点", cls: "priority-mid" },
        { text: "全席喫煙可", cls: "priority-warn" }
      ],
      ratings: { google: "4.4", googleReviews: "133", tabelog: "3.58", tabelogReviews: "182" },
      desc: "さざえストリートの焼貝屋台。サザエ・焼貝・伊勢海老の刺身など。**食べログ3.58はこの並びで最高点**だが、**全席喫煙可**なので苦手なら避けたほうがよい。",
      meta: [
        ["営業", "**9:00〜17:00**（食べログは8:30〜の表記）。定休日の記載が無い"],
        ["電話", "0599-25-2511"],
        ["予約", "予約可"],
        ["駐車場", "無し（近くの駐車場が2時間まで無料の案内あり）"],
        ["席", "13席（カウンター5席＋4人テーブル×2）。**全席喫煙可**"],
        ["予算", "4,000〜4,999円"]
      ],
      notes: "<strong>定休日の情報そのものが無い</strong>ため、行くなら電話で確認するのが安全です。<strong>全席喫煙可</strong>という点は、屋台とはいえ食事中ずっと影響するので事前に把握しておいてください。17:00で閉まるので夕食には使えません。",
      maps: "水沼サザエ店 鳥羽"
    },
    {
      name: "松本さざえ店",
      area: "鳥羽市鳥羽1-8-5（さざえストリート・鳥羽駅から徒歩3分）",
      coords: [34.4861422, 136.8436781],
      category: "backup",
      genre: "焼貝・郷土料理",
      genreKey: "yakigai",
      areaKey: "toba",
      images: ["images/matsumoto.jpg", "images/matsumoto_2.jpg", "images/matsumoto_3.jpg", "images/matsumoto_4.jpg"],
      gmapsPlaceId: "ChIJ4T6WRj75BGARSjWsWvYftOI",
      links: [
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24002147/" }
      ],
      badges: [
        { text: "1962年創業の老舗", cls: "priority-mid" },
        { text: "16:00で閉店", cls: "priority-warn" }
      ],
      ratings: { google: "4.5", googleReviews: "61", tabelog: "3.51", tabelogReviews: "89" },
      desc: "創業1962年の老舗貝料理店。さざえのつぼ焼きをはじめ、多種の新鮮な貝類。**さざえストリートで最も早く16:00に閉まる**。",
      meta: [
        ["営業", "**10:00〜16:00**（食べログは9:00〜の表記）"],
        ["定休", "**水曜日**（水曜が祝日の場合は営業）。9/21・9/22はどちらも**営業見込み**"],
        ["電話", "0599-25-2444"],
        ["予約", "**予約不可**"],
        ["駐車場", "無し（近くのコインパーキング）"]
      ],
      notes: "<strong>16:00閉店</strong>なので、2日目の水族館を16:10に出る旅程とは噛み合いません。使うなら1日目か、水族館を早く切り上げた日の昼過ぎです。予約不可なので3連休は待つ前提で。",
      maps: "松本さざえ店 鳥羽"
    },
    {
      name: "鳥羽海鮮料理 屋形船おきた",
      area: "鳥羽市鳥羽1-2383-51（鳥羽駅から約330m）",
      coords: [34.4896472, 136.84340989999998],
      category: "warning",
      genre: "屋形船・海鮮",
      genreKey: "kaisen",
      areaKey: "toba",
      images: ["images/okita.jpg", "images/okita_2.jpg", "images/okita_3.jpg", "images/okita_4.jpg"],
      gmapsPlaceId: "ChIJQ6R4yfL4BGAR1rI8Uod_QpY",
      links: [
        { label: "公式サイト", url: "http://tobayakatabune.jp/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24014971/" }
      ],
      badges: [
        { text: "⚠️ 1日2便のみ（12:30 / 18:30出航）", cls: "priority-warn" },
        { text: "⚠️ 最少催行6名", cls: "priority-warn" }
      ],
      ratings: { google: "4.8", googleReviews: "410", tabelog: "3.08", tabelogReviews: "21" },
      desc: "三重県で唯一の屋形船。伊勢エビ・鮑・牡蠣を目の前で焼いて食べられる。Google 4.8と評価は高いが、**乗船枠と最少催行人員の制約が強く、今回の旅程には組み込みにくい**。",
      meta: [
        ["営業", "**1日2便のみ。昼12:30出航 / 夜18:30出航**（集合は出航15分前）。無休"],
        ["所要", "**約1時間20分**"],
        ["料金", "伊勢海老8,450円 / あわび8,450円 / 肉7,800円 / 蒸し牡蠣5,950円 / ランチ焼き貝4,800円（乗船料込）"],
        ["予約", "**事実上必須**。TEL 0599-25-7133（9:00〜21:00）／Web・予約サイトからも可"],
        ["⚠️ 人数", "**2名から予約できるが、乗合船で最少催行6名**。6名に満たないと予約確定後でもキャンセルになる"],
        ["駐車場", "あり（船の目の前に有料駐車場）"]
      ],
      notes: "<strong>2日目の夕食（17:30〜18:35）には使えません。</strong>夜便は18:30出航の1枠だけで、所要が約1時間20分あるため19:18発の列車に間に合いません。<strong>そして2名だけの予約は、最少催行6名に届かず当日キャンセルになるリスクがあります。</strong>どうしても乗りたい場合は、旅程を「昼12:30便」に組み替えるか、別の旅行で検討してください。荒天時は停泊したまま海上レストランとして使える場合があります。",
      maps: "鳥羽海鮮料理 屋形船おきた"
    },
    {
      name: "焼肉 Itsuki〜樹〜",
      area: "鳥羽市鳥羽3-9-8（鳥羽駅から約540m）",
      coords: [34.4818141, 136.8425988],
      category: "backup",
      genre: "焼肉・ホルモン",
      genreKey: "yakiniku",
      areaKey: "toba",
      images: ["images/itsuki.png", "images/itsuki_2.jpg", "images/itsuki_3.jpg", "images/itsuki_4.jpg"],
      gmapsPlaceId: "ChIJebS-8JT4BGAR4CJEMYN6Gro",
      links: [
        { label: "Facebook", url: "https://www.facebook.com/257722horu/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24021769/" }
      ],
      badges: [
        { text: "海鮮に飽きたときの一手", cls: "priority-mid" },
        { text: "17:00開店・両日営業見込み", cls: "priority-mid" }
      ],
      ratings: { google: "4.5", googleReviews: "114" },
      desc: "駅から徒歩圏の焼肉・ホルモン。**海鮮づくしの旅程に一軒だけ違うものを挟みたいとき**の選択肢。17:00開店なので2日目の夕食枠にそのまま入る。",
      meta: [
        ["営業", "**17:00〜22:00**。**日曜定休**（9/21・9/22はどちらも営業見込み）"],
        ["電話", "0599-37-7069"],
        ["予約", "予約可"],
        ["予算", "4,000〜4,999円程度（カード・QR決済不可の案内あり）"],
        ["注意", "**食べログに点数がまだ付いていない**（口コミ1件）。掲載情報も少ないので、行くなら電話で確認する"]
      ],
      notes: "Googleは4.5（114件）と高い一方、<strong>食べログはまだ点数が算出されていません</strong>（口コミ1件）。情報が少ない店なので、営業と予約は電話で確認してください。現金のみという案内があるので、行くなら現金を用意しておくと安心です。",
      maps: "焼肉 Itsuki 鳥羽"
    },
    {
      name: "久兵衛",
      area: "鳥羽市鳥羽2-4-3（鳥羽駅から約480m）",
      coords: [34.482836999999996, 136.84071169999999],
      category: "warning",
      genre: "焼鳥・居酒屋",
      genreKey: "yakiniku",
      areaKey: "toba",
      images: ["images/kyubei.jpg", "images/kyubei_2.jpg", "images/kyubei_3.jpg", "images/kyubei_4.jpg"],
      gmapsPlaceId: "ChIJgyJs9JP4BGAR6PWOafy9mxk",
      links: [
        { label: "Instagram", url: "https://www.instagram.com/tobakyubei/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24005241/" }
      ],
      badges: [
        { text: "⚠️ 18:00開店（17:30には入れない）", cls: "priority-warn" },
        { text: "⚠️ 9/21は休みの公算", cls: "priority-warn" }
      ],
      ratings: { google: "4.6", googleReviews: "88", tabelog: "3.09", tabelogReviews: "15" },
      desc: "1971年創業、鳥羽で最古参の焼き鳥居酒屋。三重の地酒と地元の魚介、伊勢どり。**18:00開店なので今回の夕食枠（17:30〜18:35）には間に合わない**。",
      meta: [
        ["営業", "**18:00〜24:00**"],
        ["定休", "情報が割れている。Googleとぐるなびは**月曜・日曜定休**、食べログは「日曜（**月曜が祝日の場合は日曜も営業**）」"],
        ["9/21", "⚠️ 月曜なので**休みの公算が大きい**"],
        ["9/22", "火曜なので営業見込み。ただし**18:00開店**で19:18発には間に合わない"],
        ["電話", "0599-25-5506"],
        ["予約", "予約可"],
        ["駐車場", "あり"],
        ["席", "16席。**全席喫煙可**"]
      ],
      notes: "<strong>今回の旅程では時間が合いません。</strong>18:00開店に対して19:18発の列車なので、実質1時間もありません。載せているのは「もし旅程が崩れて鳥羽にもう一泊するような展開になったら」という想定の記録です。9/21（月・祝）は定休の可能性が高い点も要注意。",
      maps: "久兵衛 鳥羽"
    },
    {
      name: "西村食堂",
      area: "鳥羽市石鏡町336-1（鳥羽駅から約8km・車で約20分）",
      coords: [34.446613899999996, 136.91848890000003],
      category: "backup",
      genre: "海鮮食堂",
      genreKey: "shokudo",
      areaKey: "tobafar",
      images: ["images/nishimura.jpg", "images/nishimura_2.jpg", "images/nishimura_3.jpg", "images/nishimura_4.jpg"],
      gmapsPlaceId: "ChIJORoHYcb9BGARQBUR1WNBmDQ",
      links: [
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24000942/" }
      ],
      badges: [
        { text: "★ このサイトの食べログ最高点", cls: "priority-top" },
        { text: "食堂百名店2026", cls: "priority-top" },
        { text: "⚠️ 車で20分・予約不可", cls: "priority-warn" }
      ],
      ratings: { google: "4.2", googleReviews: "649", tabelog: "3.68", tabelogReviews: "320" },
      desc: "石鏡（いじか）漁港近くの食堂。名物は分厚い刺身が並ぶ**まな板セット**。**食べログ3.68はこのサイトの全店で最高点**で、食堂百名店2026にも選ばれている。",
      meta: [
        ["営業", "**11:00〜19:00**。**木曜定休**（9/21・9/22はどちらも営業見込み）"],
        ["電話", "0599-32-5578"],
        ["予約", "**予約不可**"],
        ["駐車場", "あり"],
        ["場所", "**鳥羽駅から約8km・車で約20分**（パールロード方面）"],
        ["予算", "2,000〜3,999円"]
      ],
      notes: "<strong>点数だけを見ればこのサイトで一番の店ですが、今回の旅程には収まりません。</strong>2日目は11時にホテルを出て13時前に水族館へ入る必要があり、石鏡町へ往復40分を足すと成立しません。<strong>予約不可＋百名店なので待ち時間も読めません。</strong>載せているのは、旅程が大きく崩れて時間が余ったときと、次に鳥羽へ来るときのためです。",
      maps: "西村食堂 鳥羽市石鏡町"
    },
    {
      name: "季節料理 馳走",
      area: "鳥羽市安楽島町350-1（鳥羽駅から約3.2km）",
      coords: [34.4608109, 136.8595032],
      category: "backup",
      genre: "日本料理・コース",
      genreKey: "kaisen",
      areaKey: "tobafar",
      images: ["images/chisou.jpg", "images/chisou_2.jpg", "images/chisou_3.jpg", "images/chisou_4.jpg"],
      gmapsPlaceId: "ChIJqeieEZz_BGARwAupedK8DQo",
      links: [
        { label: "公式サイト", url: "https://chiso-toba.com/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24016645/" }
      ],
      badges: [
        { text: "落ち着いて食べたいとき", cls: "priority-mid" },
        { text: "⚠️ コースは全て要予約", cls: "priority-warn" }
      ],
      ratings: { google: "4.6", googleReviews: "101", tabelog: "3.08", tabelogReviews: "16" },
      desc: "和食一筋40年の店主が、昆布と鰹節の自家製出汁にこだわる日本料理店。安楽島町なので**車が要る**が、駅前の賑わいとは違う落ち着いた食事になる。",
      meta: [
        ["営業", "**17:00〜21:30前後**（食べログ22:00 / 公式21:30 / Google21:00 と表記に差がある）"],
        ["定休", "**木曜**（公式は「木曜と不定休」。臨時休業の告知実績あり）"],
        ["料金", "コース**6,000円〜 / 8,000円〜 / 10,000円〜**。ふぐ・すっぽん・天草大王鍋のコースもあり"],
        ["予約", "**コースは全て要予約**。一品料理もあるが20〜24席の小規模店なので実質要予約"],
        ["電話", "0599-25-4320"],
        ["駐車場", "**専用無料5台**（先着順）"]
      ],
      notes: "<strong>レンタカーを返す前に食べるなら成立します</strong>が、今回の「17時前に返して駅前で夕食」という設計とは動線が逆になります。安楽島町は給油所やたまもと同じ方面です。<strong>不定休があるので、行くなら必ず電話で営業とコースの予約を確認</strong>してください。",
      maps: "季節料理 馳走 鳥羽"
    },
    {
      name: "たこ焼き わらい屋",
      area: "鳥羽市鳥羽4-4-7（鳥羽駅から約1.1km）",
      coords: [34.476441099999995, 136.84443779999998],
      category: "warning",
      genre: "たこ焼き・軽食",
      genreKey: "shokudo",
      areaKey: "tobafar",
      images: ["images/waraiya.jpg", "images/waraiya_2.jpg", "images/waraiya_3.jpg", "images/waraiya_4.jpg"],
      gmapsPlaceId: "ChIJ01nry7H5BGAR12KTraRd-7w",
      links: [
        { label: "鳥羽なかまち（店舗紹介）", url: "https://tobanakamachi.com/tobanakamachi_shop/waraiya" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24017682/" }
      ],
      badges: [
        { text: "⚠️ 祝日が定休かどうか情報が割れている", cls: "priority-warn" },
        { text: "Google 5.0", cls: "priority-mid" }
      ],
      ratings: { google: "5.0", googleReviews: "21", tabelog: "3.04", tabelogReviews: "6" },
      desc: "2020年開業、昭和の駄菓子屋のような雰囲気のたこ焼き店（8個400円）。たこせん、ホルモン焼きそばも。イートインできる。**Google 5.0**だが件数は少ない。",
      meta: [
        ["営業", "**11:30〜17:45頃**（食べログは11:30〜17:00、鳥羽なかまちは11:30〜18:00）"],
        ["⚠️ 定休", "**情報が割れている**。食べログは「土曜・日曜・**祝日**」、Googleと鳥羽なかまち公式は「日曜のみ」"],
        ["9/21・9/22", "⚠️ **どちらも祝日**なので、食べログの記載どおりなら休み。**電話確認が必須**"],
        ["電話", "090-9912-8918"],
        ["予約", "**予約不可**"],
        ["駐車場", "あり2台"],
        ["場所", "鳥羽駅から約1.1km。**歩くと15分ほど**なので車のほうが楽"]
      ],
      notes: "<strong>今回いちばん営業が読めない店です。</strong>食べログは「祝日は定休」、Googleと地元の商店街サイトは「日曜のみ定休」と真っ向から食い違っており、9/21も9/22も祝日なので影響が直撃します。<strong>行くなら必ず090-9912-8918へ電話</strong>してください。食べログには「都合により休業の張り紙が出る日がある」という注記もあります。",
      maps: "たこ焼き わらい屋 鳥羽"
    }
  ],

  /* === カフェ === */
  cafes: [
    {
      name: "maruru cafe",
      area: "伊勢市二見町茶屋277-2",
      coords: [34.5064902, 136.7777663],
      category: "backup",
      genre: "カフェランチ・ダイニング",
      genreKey: "cafe",
      areaKey: "futami",
      images: ["images/maruru.jpg", "images/maruru_2.png", "images/maruru_3.jpg", "images/maruru_4.jpg"],
      gmapsPlaceId: "ChIJE8XG6qRZBGARk8rbR6Aybsw",
      links: [
        { label: "公式サイト", url: "https://maruru-cafe.com/" },
        { label: "Instagram", url: "https://www.instagram.com/marurucafe.futami/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240301/24020274/" }
      ],
      badges: [
        { text: "時間を管理しやすい安定候補", cls: "priority-top" },
        { text: "駐車場あり", cls: "priority-mid" }
      ],
      ratings: { google: "3.8", googleReviews: "73", tabelog: "3.15", tabelogReviews: "20" },
      desc: "二見のカフェ＆ダイニング。**駐車場があり、予約の相談ができて、時間が読みやすい**。「13:30の真珠体験に絶対遅れたくない」日のいちばん確実な選択肢。",
      meta: [
        ["営業", "**11:00〜20:00（L.O.19:30）**。不定休"],
        ["電話", "0596-43-0900"],
        ["立ち位置", "**さらさ廣が取れないとき／扇屋が混んでいるときの切替先**"],
        ["注意", "資料では「ランチ11:00〜13:30・カフェ〜17:00」の案内で、GoogleとSNSの表示に差がある。**電話かSNSで当日の営業を確認**"]
      ],
      notes: "<strong>1日目のランチで「待つ」判断をしないための逃げ場です。</strong>予約の相談ができるので、さらさ廣が取れなかった時点でここへ切り替えてしまうのも十分ありです。列車が遅れた・レンタカーの受取が押した、という日にもここが効きます。",
      maps: "maruru cafe 二見"
    },
    {
      name: "御福餅 本家",
      area: "伊勢市二見町茶屋568-1（さらさ廣から徒歩約3分）",
      coords: [34.5081733, 136.7838705],
      category: "backup",
      genre: "和菓子・甘味処",
      genreKey: "cafe",
      areaKey: "futami",
      images: ["images/ofukumochi.jpg", "images/ofukumochi_2.png", "images/ofukumochi_3.jpg", "images/ofukumochi_4.jpg"],
      gmapsPlaceId: "ChIJHS23d9dZBGARGjGtebVit8g",
      links: [
        { label: "公式サイト", url: "http://ofukumochi.com/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240301/24020823/" }
      ],
      badges: [
        { text: "資料に無い追加候補", cls: "priority-mid" },
        { text: "ランチのさらさ廣から徒歩3分", cls: "priority-mid" },
        { text: "寄れるのは1日目だけ", cls: "priority-warn" }
      ],
      ratings: { google: "4.2", googleReviews: "597", tabelog: "3.49", tabelogReviews: "190" },
      desc: "**1738年創業**の二見の餅菓子。こしあんで餅を包んだ、伊勢の赤福とよく似た形の菓子で、**ガラス越しに手で丸める工程が見える**。買うだけなら5分で済む。",
      meta: [
        ["営業", "**9:00〜17:00（L.O.16:30）・年中無休**。Googleの営業時間も全曜日9:00〜17:00で一致。**9/21・9/22とも営業見込み**"],
        ["料金", "**〜999円**（食べログの昼予算）。店頭の「おすすめ3種盛り」が人気"],
        ["所要", "**買って帰るだけなら5〜10分**。甘味処で座って食べるなら30分ほど見る"],
        ["場所", "**さらさ廣から233m・maruru cafeから144m・夫婦岩から372m・三重県真珠から461m**。1日目の二見の行き先はすべて徒歩圏内に固まっている"],
        ["見どころ", "**餅を手で丸める作業がガラス越しに見える**。買うだけでも数分眺める価値がある"],
        ["予約", "**不可**（食べログ）。並ぶとしても店頭販売なので回転は速い"],
        ["支払い", "**カード・電子マネー・QRコード決済が使える**（扇屋のような現金のみの店とは違う）"],
        ["駐車", "あり（食べログ）。ただし今回は徒歩圏なので、車は移動先に置いたままでよい"],
        ["電話", "0596-43-3500"]
      ],
      notes: "<strong>これは資料に無い、サイト側で足した近接候補です。</strong>本命プランには入れていません。<strong>寄れるのは1日目だけ</strong>で、2日目は磯部から鳥羽へ向かう動線なので二見を通りません。1日目に入れるなら、<strong>ランチのあと（13:00頃）か、真珠体験のあと（14:10頃）の10〜15分</strong>です。ただし<strong>ホテル15時台の到着を守るなら、店内で食べずに買うだけにしてください。</strong>餅菓子は日持ちが短いので、買ったら車内かホテルで早めに食べるつもりで。ホテルは夕食付きなので、量は控えめに買うのが無難です。",
      maps: "御福餅本家 二見"
    },
    {
      name: "創作和食 汀の杜",
      area: "伊勢市二見町江580（伊勢夫婦岩めおと横丁 2階）",
      coords: [34.5075639, 136.7900334],
      category: "warning",
      genre: "創作和食・海を望むランチ",
      genreKey: "cafe",
      areaKey: "futami",
      images: ["images/miginomori.jpg", "images/miginomori_2.jpg", "images/miginomori_3.jpg", "images/miginomori_4.jpg"],
      gmapsPlaceId: "ChIJ8dV0aDpXBGARkBRO0FDhKZc",
      links: [
        { label: "伊勢夫婦岩めおと横丁", url: "https://ise-meotoiwa.jp/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240301/24022517/" }
      ],
      badges: [
        { text: "2026年開業・情報が少ない", cls: "priority-warn" },
        { text: "ランチのみ（15:00終了）", cls: "priority-warn" }
      ],
      ratings: { google: "3.5", googleReviews: "15", tabelog: "3.02", tabelogReviews: "4" },
      desc: "夫婦岩めおと横丁の2階にある2026年開業の創作和食。海を望む景観は魅力だが、**開業直後で口コミが少なく、連休の待ちが読めない**。三重県真珠から車で1分。",
      meta: [
        ["営業", "**11:00〜15:00（L.O.14:30）のランチのみ**"],
        ["点数", "食べログ3.02・口コミ4件。**開業直後の初期値に近く、実質的な評価情報はほぼ無い**"],
        ["場所", "**三重県真珠のすぐ隣**（めおと横丁内）。移動時間がほぼゼロ"],
        ["注意", "最新の予約可否・営業時間を要確認"]
      ],
      notes: "<strong>立地だけを見れば理想的です</strong>——三重県真珠と同じ「めおと横丁」の建物にあるので、ランチと体験の移動がゼロになります。ただし開業して間もなく、連休の混み方も待ち時間もまったく読めません。<strong>予約が取れるなら強い候補、取れないなら当日の飛び込みは避ける</strong>という扱いにしてください。",
      maps: "創作和食 汀の杜 二見"
    },
    {
      name: "ザ・ロビーラウンジ（鳥羽国際ホテル）",
      area: "鳥羽市鳥羽1-23-1",
      coords: [34.4916996, 136.8419896],
      category: "backup",
      genre: "チーズケーキ・カフェラウンジ",
      genreKey: "cafe",
      areaKey: "toba",
      images: ["images/tobahotel.jpg", "images/tobahotel_2.jpg", "images/tobahotel_3.jpg", "images/tobahotel_4.jpg"],
      gmapsPlaceId: "ChIJGUotdlP5BGAR5PuIbt4RTCM",
      links: [
        { label: "カフェ・ラウンジ（公式）", url: "https://www.tobahotel.co.jp/restaurant_list/cafe-lounge/" },
        { label: "ホテルショップ", url: "https://www.tobahotel.co.jp/shop/" }
      ],
      badges: [
        { text: "任意（原則省略）", cls: "priority-mid" },
        { text: "席の予約は不可", cls: "priority-warn" }
      ],
      ratings: { google: "3.4", googleReviews: "8" },
      desc: "宿泊者以外も使えるラウンジで、名物のチーズケーキが目当て。**優先度は「任意」**で、今回は原則省略している。",
      meta: [
        ["営業", "ケーキの提供は**10:00〜17:00（L.O.16:30）**"],
        ["予約", "**席の予約は不可**"],
        ["電話", "0599-26-4121"],
        ["ショップ", "カット・ホール・詰合せを扱う。9月は栗系の季節商品の案内あり"],
        ["今回の扱い", "**原則省略**。2日目は16時台に水族館を出て駅前で夕食を取るため、ここへ寄ると動線が逆になり過密になる"]
      ],
      notes: "<strong>どうしても食べたいなら、選択肢は2つです。</strong>（1）1日目に二見へ行かず、鳥羽国際ホテルを組み込む——ただし真珠体験と15時台のホテル到着を諦めることになります。（2）2日目の水族館を短縮して、<strong>ショップでテイクアウト</strong>する。鳥羽国際ホテル以外で通常のチーズケーキを常設カフェ提供する確実な店は確認できていません。",
      maps: "鳥羽国際ホテル ロビーラウンジ"
    },
    {
      name: "MUSEA（ミュゼア）",
      area: "鳥羽市鳥羽3-5-24（鳥羽駅・水族館ともに徒歩5分）",
      coords: [34.4837522, 136.8435025],
      category: "warning",
      genre: "自家焙煎コーヒー・洋食",
      genreKey: "cafe",
      areaKey: "toba",
      images: ["images/musea.jpg", "images/musea_2.jpg", "images/musea_3.jpg", "images/musea_4.jpg"],
      gmapsPlaceId: "ChIJ7yz1n5T4BGAROm7pv-FHePs",
      links: [
        { label: "公式サイト", url: "http://www.mu-sea.com/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24012244/" }
      ],
      badges: [
        { text: "⚠️ 月・火が定休＝両日とも該当", cls: "priority-warn" },
        { text: "駅・水族館から徒歩5分", cls: "priority-mid" }
      ],
      ratings: { google: "4.2", googleReviews: "160", tabelog: "3.27", tabelogReviews: "86" },
      desc: "自家焙煎コーヒー、スパイシーなシーフードカレー、自家製ワッフルプレート。**鳥羽駅からも水族館からも徒歩5分**という位置は理想的だが、**定休日が今回の旅行日と真正面からぶつかる**。",
      meta: [
        ["営業", "**11:00〜16:00**"],
        ["⚠️ 定休", "**月曜・火曜**。9/21が月、9/22が火なので**両日とも定休日に当たる**"],
        ["祝日の扱い", "食べログの営業時間欄には「祝日 11:00〜16:00」の記載もあり、**定休日欄と矛盾している**"],
        ["電話", "**0599-37-7211**"],
        ["予約", "予約可"],
        ["駐車場", "**あり（10台〜17番。七越茶屋の裏に専用スペース）**"],
        ["予算", "1,000〜1,999円"]
      ],
      notes: "<strong>今回の2日間はどちらも定休日に当たります。</strong>ただし食べログの営業時間欄には「祝日 11:00-16:00」という記載もあり、月火が祝日のときの扱いが読み取れません。9/21も9/22も祝日なので、まさにその境目です。<strong>寄りたいなら 0599-37-7211 へ電話して確認</strong>してください。開いていれば、水族館の帰りに徒歩で寄れるいい位置です。",
      maps: "MUSEA ミュゼア 鳥羽"
    },
    {
      name: "Ephemere（エフェメール）",
      area: "鳥羽市鳥羽1-2383-13（鳥羽一番街・鳥羽駅から約100m）",
      coords: [34.4871961, 136.8440761],
      category: "warning",
      genre: "クレープ（テイクアウト）",
      genreKey: "cafe",
      areaKey: "toba",
      images: ["images/ephemere.jpg", "images/ephemere_2.jpg", "images/ephemere_3.jpg", "images/ephemere_4.jpg"],
      gmapsPlaceId: "ChIJ_eiUfAD5BGARhB1M9em_3uA",
      links: [
        { label: "Instagram", url: "https://www.instagram.com/ephemere_toba/" },
        { label: "食べログ", url: "https://tabelog.com/mie/A2403/A240302/24022227/" }
      ],
      badges: [
        { text: "Google 4.9・駅から100m", cls: "priority-top" },
        { text: "⚠️ 9/22（火）は定休", cls: "priority-warn" }
      ],
      ratings: { google: "4.9", googleReviews: "21", tabelog: "3.02", tabelogReviews: "2" },
      desc: "鳥羽商船高専の学生3人が運営する**テイクアウト専門のクレープ店**（2027年2月までの期間限定）。鳥羽一番街の中で、駅から約100m。**Google 4.9**と評判はよい。",
      meta: [
        ["営業", "**13:00〜17:30頃**（Google。食べログは13:00〜17:00、土日は18:00まで）"],
        ["⚠️ 定休", "**火曜・水曜・木曜**。9/21（月）は営業見込み、**9/22（火）は定休**"],
        ["支払い", "**現金・PayPay**"],
        ["駐車場", "近隣の佐田浜駐車場（1時間以内無料の案内あり）"],
        ["注意", "**2027年2月までの期間限定営業**。学生の運営なので祝日の運用は読みにくい"]
      ],
      notes: "<strong>1日目（9/21・月）の夕方なら開いていますが、この日は15時にはホテルに入っている旅程なので寄れません。2日目（9/22・火）は定休日です。</strong>つまり今回の旅程とはタイミングが合いません。列車待ちに甘いものを、という場面で思い出せるように載せてあります。運営が学生3人なので、行くなら Instagram で当日の営業を確認してください。",
      maps: "Ephemere 鳥羽一番街"
    }
  ],


  /* === チケット・予約 ===
     ★予約原本は親フォルダの private/reservations/ に保管する。公開するのは個人識別情報を除いた概要だけ。
     ★どの予定・どの地点に紐づくかは **チケット側だけ** が持つ（refs / days）。
       スケジュール行や地点カードにフィールドを足さないので、SCHED_VERSION を上げずに済む
       ＝ 同行者がブラウザで編集した旅程を巻き込まない。
     ★ticket の id を予定行の ref に入れてはいけない。ref はマップの経由地順と確定状態に
       流れており、allPlaces() で実在検証される（追補L-5）。 */
  tickets: [
    {
      id: "ticket:往路 特急券",
      icon: "🚄",
      title: "往路 特急券（伊勢志摩ライナー デラックス）",
      when: "9/21（月・祝）",
      refs: ["spot:鶴橋駅（集合・解散）", "spot:鳥羽駅"],
      days: ["2026-09-21"],
      summary: "**鶴橋 9:13 → 鳥羽 11:08**。チケットレス特急券なので、**乗車時に近鉄の会員サイトで券面を表示できるようにしておく**こと。",
      meta: [
        ["区間", "**鶴橋 9:13発 → 鳥羽 11:08着**（賢島ゆき）"],
        ["列車", "伊勢志摩ライナー **6903列車**"],
        ["座席", "**6号車 6B・6C**（デラックス）"],
        ["人数", "大人2人"],
        ["料金", "**4,120円**（特急料金3,280円＋デラックス料金840円）／お支払い済み（クレジット）"],
        ["⚠️ 乗車券", "**これは特急券だけです。**別に紙のきっぷか交通系ICカードが必要"],
        ["変更・払戻", "近鉄の会員サイトにログインし「特急券の予約状況確認・取消・変更」から"]
      ],
      files: [],
      links: [
        { label: "近鉄 会員サイト（変更・払戻）", url: "https://www.ticket.kintetsu.co.jp/M/MZZ/MZZ20.do?op=pDisplayServiceMenu" }
      ],
      note: "**記載の日時の列車・座席以外は利用できません。**乗車の際は、チケットレス特急券を表示できるスマートフォンを携行してください。2人とも表示できる状態にしておくのが安全です。"
    },
    {
      id: "ticket:復路 特急券",
      icon: "🚄",
      title: "復路 特急券（伊勢志摩ライナー デラックス）",
      when: "9/22（火・祝）",
      refs: ["spot:鳥羽駅"],
      days: ["2026-09-22"],
      summary: "**鳥羽 19:18 → 鶴橋 21:12**。往路とは**座席番号が違う**（6B・6C → 7B・7C）ので注意。",
      meta: [
        ["区間", "**鳥羽 19:18発 → 鶴橋 21:12着**（大阪上本町ゆき）"],
        ["列車", "伊勢志摩ライナー **1902列車**"],
        ["座席", "**6号車 7B・7C**（デラックス）／往路の 6B・6C とは違う"],
        ["人数", "大人2人"],
        ["料金", "**4,120円**（特急料金3,280円＋デラックス料金840円）／お支払い済み（クレジット）"],
        ["⚠️ 乗車券", "**これは特急券だけです。**別に紙のきっぷか交通系ICカードが必要"],
        ["変更・払戻", "近鉄の会員サイトにログインし「特急券の予約状況確認・取消・変更」から"]
      ],
      files: [],
      links: [
        { label: "近鉄 会員サイト（変更・払戻）", url: "https://www.ticket.kintetsu.co.jp/M/MZZ/MZZ20.do?op=pDisplayServiceMenu" }
      ],
      note: "**往路と座席番号が違います。**乗る前に一度この画面を見て、6号車の 7B・7C だと確認してください。19:18発に対して、鳥羽駅前の夕食は18:35に出る計画です。"
    },
    {
      id: "ticket:真珠取り出し体験",
      icon: "💎",
      title: "真珠取り出し体験（三重県真珠）",
      when: "9/21（月・祝）13:30",
      refs: ["spot:三重県真珠（MIEKEN PEARL）"],
      days: ["2026-09-21"],
      summary: "**9/21 13:30・大人2名・4,400円（現地払い）で予約確定**。二見のランチのあと、ここへ向かう。",
      meta: [
        ["日時", "**2026年9月21日（月・祝）13:30開始**"],
        ["コース", "**アコヤ真珠取り出し体験 ＆アクセサリー作り**"],
        ["人数", "**2名**"],
        ["料金", "**合計4,400円（お一人様2,200円 × 2）**。カードの案内にある**繁忙期料金2,200円が適用**された金額（通常は1,980円）"],
        ["支払い", "**現地支払い**。事前決済ではないので、当日の支払い手段を用意しておく"],
        ["⚠️ キャンセル", "**無断キャンセルは100%**。行けなくなったら必ず店へ連絡する"],
        ["店の連絡先", "mail@miekensinju.com（予約確定メールの差出人）"],
        ["金具代", "**体験料とは別**。加工する場合は当日の選択で加算される"]
      ],
      files: [],
      links: [
        { label: "三重県真珠 公式", url: "https://miekenpearl.jp/" }
      ],
      note: "**支払いは現地なので、事前決済は済んでいません。**体験料4,400円に加えて、加工する場合は**金具代が別にかかります**。13:30開始なので、二見のランチは12:55までに切り上げてください。**無断キャンセルは100%請求**の規定です。列車の遅れなどで間に合わなくなりそうなときは、着く前に店へ連絡を入れてください。"
    },
    {
      id: "ticket:レンタカー",
      icon: "🚗",
      title: "トヨタレンタカー（鳥羽駅前店）",
      when: "9/21 11:00 〜 9/22 19:00",
      refs: ["spot:トヨタレンタカー 鳥羽駅前店"],
      days: ["2026-09-21", "2026-09-22"],
      summary: "**貸出・返却とも鳥羽駅前店**。**11:08着の列車であることは予約時に申告済み**なので、着いたらそのまま向かえばよい。",
      meta: [
        ["店舗", "**鳥羽駅前店**（貸出・返却とも）／鳥羽市鳥羽1丁目2380-29"],
        ["電話", "**0599-26-7100**"],
        ["貸出", "**2026/09/21 11:00**（到着列車として11:08着を申告済み）"],
        ["返却", "**2026/09/22 19:00**（19:18発を申告済み）。実際は16:50〜17:10に返す"],
        ["車種", "**C1クラス**（コンパクト）1台・禁煙車・AT"],
        ["料金", "**総額15,682円**（基本17,424円 − メンバー割引10% 1,742円）／**店頭でお支払い**"],
        ["⚠️ 免責補償", "**非加入**で予約されている。当日カウンターで加入するかを決める"],
        ["取消手数料", "7日前まで無料 → 6〜3日前20% → 2〜1日前30% → 当日以降50%（上限13,000円）"],
        ["変更・取消", "利用1時間前までWeb、それ以降は**店舗へ直接連絡**"],
        ["持ち物", "**運転免許証**・決済手段・ETCカード"]
      ],
      files: [],
      links: [
        { label: "トヨタレンタカー（予約確認・変更）", url: "https://rent.toyota.co.jp/" }
      ],
      note: "**免責補償が非加入**なので、事故のときの免責額（一般に5〜10万円）が自己負担になります。当日カウンターで加入できるので、走り出す前に2人で決めておいてください。出発予定時刻を1時間過ぎても契約しないと予約が取り消されることがあります。"
    }
  ],

  /* === 当日の調整方針 === */
  branches: [
    { cls: "sun", title: "☀️ 残暑がきついとき", text: "9月下旬でも真夏日になる。屋外に立つ時間を削り、車内・館内・店内に体を置く。夫婦岩まわりの散策は入れない。水は1人1L以上を車に積み、電解質飲料も足す。ラッコの列は屋内だが人が密集するので、列に入る前に必ず飲み物を持つ。駐車場から水族館の入口までは屋外を歩くので、日傘か帽子を車から出しておく。ホテルでは無理に屋外プールへ行かず、ラウンジと温泉を優先してよい。" },
    { cls: "rain", title: "🌧 雨・荒天のとき", text: "この旅程はもともと屋内中心なので、大きく崩す必要はない。真珠体験（三重県真珠）は室内で確実に行える。徒歩は鳥羽駅前の短距離だけに限定し、水族館は公式駐車場を優先して入口までの距離を短くする。駐車場から入口までの傘を1本すぐ出せるところに置く。台風・警報が出たときは、列車の運行と道路情報を朝いちばんに確認し、無理に時刻を守ろうとしない。" },
    { cls: "fun", title: "⏰ 予定が遅れているとき", text: "1日目：列車が遅れたら三重県真珠へ電話し、ランチをmaruru cafe等の短時間店か軽食に切り替える。加工をせず真珠だけ持ち帰れば体験は30分で終えられるので、ホテル15時台の到着を守れる。レンタカーの受取が遅れたら昼食を45分に短縮し、体験の受付時刻を電話で調整する。2日目：昼食が混んでいたらあじへい等の時間が読める店へ切替、13時台の水族館入館を守る。道路混雑で返却が遅れそうなら16時台前半に水族館を出て、18時を超えそうなら店舗へ連絡して夕食を短縮する。" },
    { cls: "tired", title: "🦦 ラッコの列が長い・展示が中止のとき", text: "13:30の表示が60分以内ならそのまま並ぶ。60〜90分なら周辺展示を15〜20分だけ見て再確認し、14:00には並ぶ。90分超でも他展示を削って遅くとも14:30には列に入る。これ以上は先送りしない。列に入ったら途中で離れない（最後尾からやり直しになる）。動物の体調等で展示が中止になったときは代替がきかないので、ジュゴン・セイウチ・アシカに切り替え、早めに退館して駅前の夕食をゆっくり取る方向へ振る。" }
  ],

  /* === 移動区間 ===
     所要は資料の時刻表と地図から導いた目安の幅。当日はカーナビの予測を優先する。 */
  legs: [
    { from: "鶴橋", to: "鳥羽", time: "1時間55分", note: "伊勢志摩ライナー・デラックス席 9:13発→11:08着。2人とも鶴橋から乗車" },
    { from: "鳥羽駅", to: "二見（三重県真珠・ランチ各店）", time: "約25分", note: "鳥羽中心部と内宮方面を避けて二見へ。11:30〜11:55を想定" },
    { from: "二見", to: "ホテル（磯部・的矢）", time: "約50〜55分", note: "14:10発→15:05着が目標。連休の道路状況で15:15頃まで許容" },
    { from: "ホテル", to: "海鮮食堂はま﨑（磯部）", time: "約15〜20分", note: "2日目11:00発→11:15着。鳥羽へ向かう動線上にある" },
    { from: "はま﨑（磯部）", to: "鳥羽水族館", time: "約40分", note: "12:05発→12:45着。連休の進入・駐車待ちを含めて余裕を見る" },
    { from: "鳥羽水族館", to: "給油 → レンタカー返却", time: "約30〜40分", note: "16:10〜16:40に退館、給油を挟んで16:50〜17:10に返却" },
    { from: "鳥羽", to: "鶴橋", time: "1時間54分", note: "伊勢志摩ライナー・デラックス席 19:18発→21:12頃着" },
    { from: "鳥羽駅", to: "パール美樹（御座）", time: "約1時間5〜15分", note: "代替案のときのみ。往復で2時間以上かかり、ホテル到着は15:10〜15:30になる" },
    { from: "鳥羽駅", to: "真珠の里（越賀）", time: "約1時間", note: "代替案のときのみ。12:30体験なら昼食を11:30頃に短時間で済ませる必要がある" },
    { from: "真珠の里（越賀）／パール美樹（御座）", to: "志摩地中海村（浜島）", time: "約10〜15分", note: "代替案のときのみ。志摩半島西部の真珠体験を選んだときだけ、寄り道として現実的につながる" },
    { from: "志摩地中海村（浜島）", to: "ホテル（磯部・的矢）", time: "約30〜40分", note: "代替案のときのみ。ここを挟むとホテル到着は16時以降になり、ラウンジと温泉の時間が削れる" }
  ],

  /* === 持ち物 === */
  packing: [
    { group: "必須", items: [
      "運転免許証",
      "レンタカー予約票",
      "ETCカード",
      "特急券（チケットレスの画面／2人とも出せるように）",
      "スマートフォン",
      "モバイルバッテリー・充電ケーブル",
      "現金（扇屋は現金のみの案内）",
      "各店・ホテル・レンタカー店の電話番号"
    ]},
    { group: "ラッコの列で効くもの", items: [
      "暗めの服（ガラスの映り込みが減る）",
      "満充電のスマホ（フラッシュはOFFに）",
      "飲み物（列で最大90〜120分）",
      "歩きやすい靴",
      "列に入る前に済ませるトイレ"
    ]},
    { group: "残暑対策", items: [
      "水1L以上／人",
      "電解質飲料",
      "帽子",
      "日傘",
      "サングラス",
      "日焼け止め",
      "冷却タオル・汗ふきシート",
      "携帯扇風機"
    ]},
    { group: "雨・天候", items: [
      "折り畳み傘",
      "レインウェア",
      "防水スマホケースまたはストラップ",
      "タオル",
      "薄手の羽織り（冷房・夜の海風用）"
    ]},
    { group: "ホテル泊", items: [
      "常備薬",
      "化粧品・スキンケア",
      "客室で使う充電器",
      "大浴場で使うもの（館内着・タオルはホテルの用意を確認）",
      "翌日の着替え"
    ]},
    { group: "あると安心", items: [
      "エコバッグ（土産用）",
      "ウェットティッシュ",
      "酔い止め（山道の運転が不安なら）",
      "ゴミ袋",
      "軽食"
    ]}
  ],

  /* === 注意・要確認 ===
     ★本文は **囲むと太字** の軽量記法だけ。生のHTMLは書かない（infoText が esc 後に変換するため） */
  info: [
    { warn: true, title: "① いま押さえる予約（上から順に）", text: "**1. 三重県真珠** — 9月21日13:30前後・2名の空き確認。繁忙期料金かどうかと、加工を含む終了見込みも一緒に聞く。\n**2. 1日目のランチ** — さらさ廣（0596-43-1717）へ12:00前後で照会。時間が読めなければ maruru cafe（0596-43-0900）へ。\n**3. トヨタレンタカー** — 店舗名の確認と、11:08着の連絡（後述②）。\n**4. ホテル** — 予約プランが夕朝食付き・オールインクルーシブ対象かを確認。\n**5. 丸栄** — 9月22日17:30・2名（0599-25-3155）。\n**6. 海鮮食堂はま﨑** — 9月22日11:15前後・2名（0599-55-3331）。\n**7. 鳥羽水族館のWEBチケット** — 事前購入して入館券の列を短縮する。" },
    { warn: true, title: "② レンタカーは「店舗名」と「11:08着」の2点", text: "予約は**9/21 11:00開始**だが、列車の到着は**11:08**。このままだと受取が遅刻扱いになる。**事前に電話で遅着を伝えるか、開始時刻を11:30へ変更**しておくこと。あわせて、予約している店舗が本当に**鳥羽駅前店**かを予約票で確認する。返却予約は9/22 19:00だが、これは**店舗の閉店時刻そのもの**。今回は駅前で夕食を取るため16:50〜17:10に返す。**返却前の給油をどこですればよいか**も、受取のときに聞いておく。" },
    { warn: true, title: "③ ラッコの列は途中合流できない", text: "現行のラッコ観覧は**予約・時間指定・整理券のいずれも無く、当日「Iコーナー・極地の海」の入口から並ぶ方式**。水槽前には約10人ずつ案内され、**正面での観覧は1グループ約1分**。**途中合流・場所取りは禁止**で、列を離れたら最後尾から並び直しになる。つまり**片方を先に降ろして並ばせ、あとから合流する方法は使えない**。2人とも駐車を終えてから、トイレと飲み物を済ませて一緒に列へ入ること。写真・動画は可だが**フラッシュは禁止**。通常の列締切は16:30だが、**混雑時は予告なく早まる**。" },
    { warn: true, title: "④ ホテルに着いたら、最初にやるのは夕食枠の予約", text: "夕食は**3部制・各90分（17:00〜18:30 / 18:30〜20:00 / 20:00〜21:30）**で、**チェックイン後に専用QRから先着順**。到着してすぐ操作しないと希望の枠が埋まる。**取る担当を出発前に決めておく**こと。第一案は18:30枠。ただし**ナイトバブル（19:00〜20:00・先着）**を優先するなら20:00枠へ回す。ラウンジは15:00〜18:00がイブニングソーシャル、18:00〜23:00がナイトキャップ。大浴場は15:00〜23:00（最終22:30）と6:00〜10:00（最終9:30）。" },
    { warn: true, title: "⑤ 9/22の夕食は「その店が開いているか」で決まる", text: "9/21も9/22も祝日なので、**定休日の振替**が起きやすい。\n**天びん屋 本店**は月曜定休で「祝日は営業し翌日に休業」の運用 → **9/22（火）が休みになる可能性が高い**。\n**丸栄**は食べログに定休日の記載が無く、公式サイトには「水曜日（不定休）」とあり情報が割れている。\n**一栄**（水休・夜のみ）と**はま﨑**（水休）は両日とも営業見込み。\n第一候補の丸栄が押さえられれば、**遅くとも何時に水族館を出るかが自動的に決まる**ので、まずここに電話するのが有効。\n\n**丸栄が取れなかったときの駅前の代替**（新しく足した店から）:\n**大阪屋**（0599-25-2336）が最有力。**17:00〜20:00・予約可・駐車場あり**で、木曜定休なので両日とも営業見込み。\n**焼貝いろは**（0599-25-4809）は**18:30まで**の通し営業で予約可。17:30入店なら間に合うが、**定休日が「不定期」**なので要予約。\n**焼肉 Itsuki**（0599-37-7069）は17:00開店で日曜定休。海鮮以外を挟みたいときに。\n⚠️ **使えない店もはっきりした**: **屋形船おきた**は1日2便（12:30／18:30出航）で**最少催行6名**なので、2名の17:30夕食には使えない。**久兵衛**は18:00開店。**さざえストリートの水沼・ちさと・松本は16:00〜17:00に閉店**（いろはだけ18:30まで）。" },
    { warn: true, title: "⑥ 9月20〜22日は伊勢IC・伊勢西IC等で出口規制", text: "伊勢神宮周辺の混雑対策として、**伊勢IC・伊勢西IC等で出口規制・閉鎖が予定**されている。規制は伊勢神宮へ向かう交通が対象で、伊勢から志摩方面の全道路が通れなくなるわけではない。ただし**伊勢市街・内宮・朝熊周辺・国道23号**では迂回交通と所要時間の不確実性がある。今回は**内宮・おかげ横丁を旅程から外し**、鳥羽で借りて二見→ホテルへ抜ける動線にしてある。当日は**ナビだけでなく、道路標識と現地の交通整理を優先**すること。" },
    { warn: false, title: "⑦ 駐車場は「満車なら周回せず即切替」", text: "**鳥羽水族館の公式A・Bが第一候補**（乗用車1日1,000円）。公式Cは料金が安いが徒歩距離が増える。満車のときは**周回して空きを待たず、鳥羽駅西・佐田浜へ直ちに切り替える**（水族館まで徒歩10〜15分）。駅西は通常の休日で最大600円だが、**特定日は最大2,000円**の運用があるので、旅行1週間前に確認しておく。周回して待った時間は、そのままラッコの待ち時間に上乗せされる。**当日12:30頃にナビで駐車・道路状況を一度見る**こと。" },
    { warn: false, title: "⑧ 鳥羽1番街は19時には閉まっている", text: "旅程では18:35〜19:05を「駅へ戻る・買い物・乗車準備」にしているが、**鳥羽1番街は火曜17:30閉店**の案内（土日は18:00）。19:18発の前に土産を買うつもりでいると間に合わない。買いたいものがあるなら、**水族館を出たあと（16:40〜17:30）か夕食の前**に済ませること。祝日の営業時間は直前に変わることがあるので、当日は現地の掲示を優先する。" },
    { warn: false, title: "⑨ 旅行1週間前に見直すこと", text: "**天気** — 鳥羽・志摩・二見の予報、最高気温、降水、台風情報。\n**道路** — 伊勢神宮周辺の交通規制、第二伊勢道路、鳥羽周辺の渋滞予測。\n**水族館** — シルバーウィーク特別案内と、ラッコ観覧ルールの変更。\n**駐車場** — 鳥羽駅西が特定日料金・一部閉鎖になっていないか。\n**飲食店** — 営業確認を再度。**祝日・振替休業がとくに重要**。" },
    { warn: false, title: "⑩ 前日〜当日の段取り", text: "**前日** — 近鉄特急の座席・乗車時刻・チケットレス画面を2人とも確認。レンタカー予約票・免許証・決済手段・ETCカード。スマホ、モバイルバッテリー、充電ケーブル、雨具、暑さ対策。**ホテル到着直後に夕食枠を取る担当を決める**。\n**当日** — 水族館では**ラッコ撮影の役割分担を事前に決める**（1人は動画、もう1人は写真か肉眼中心。正面は1分しかない）。**12:30頃に鳥羽水族館周辺の駐車・道路状況をナビで確認**する。" },
    { warn: false, title: "⑪ 情報の基準日と、直前の再確認のお願い", text: "このサイトの営業時間・料金・点数・道路情報は、**資料の基準日 2026年8月31日**と、**サイト作成時に Googleマップ・食べログ・各公式サイトで確認した内容**です。営業時間・料金・イベント・動物の展示・予約状況は変わります。とくに**臨時休業は定休日とは別の話**で、Googleの営業時間には反映されません。**スケジュールに入れる店と施設は、公式サイトを開くか電話で直接確認**してください。点数は参考値として扱ってください。" }
  ],

  /* === 天気 === */
  weatherPoint: { lat: 34.4816, lon: 136.8434, label: "鳥羽（鳥羽駅周辺）", tripDate: "2026-09-21" },

  /* === 天気の分岐文言 ===
     日付ごとに [平常, 猛暑, 雨] の3文。★loadWeather() の中に直書きしないこと。
     旅程を差し替えたときにここだけ前の旅行の地名が残る事故を防ぐため DATA 側に集約している。 */
  weatherAdvice: {
    "2026-09-21": [
      "**二見のランチ → 13:30の真珠の取り出し → 15時台にホテル**の順を守れば、あとはホテルでゆっくりできる。着いたらまず夕食枠をQRで取る。",
      "屋外に立つ時間を削る。海辺の散策は入れず、**車内と室内**に体を置く。水は1人1L以上を車に積んでおく。",
      "**三重県真珠の取り出しは室内なので雨でも実施できる。**ランチは駐車場のある maruru cafe が動きやすい。ホテルへの移動に余裕を見て早めに出る。"
    ],
    "2026-09-22": [
      "**13:30〜14:30にラッコの列へ入る**のがこの日の要。12:45には駐車を終えたい。16:10〜16:40に退館、給油して17:10までに返車。",
      "駐車場から水族館の入口までは屋外を歩く。**帽子と飲み物を車から出してから**向かう。列に入る前に2人ともトイレと飲み物を済ませる。",
      "**公式駐車場を優先**して入口までの距離を短くする。満車なら周回せず駅西へ切替（徒歩10〜15分なので傘が要る）。館内は屋内なので旅程自体は崩れない。"
    ]
  },

  /* === 特集（読み物）＝ラッコ観覧と真珠体験
     ★店名・営業時間・点数・写真・電話・リンクはここに書き写さない。
       ref（地点id）で DATA の該当地点を指し、記事側は「なぜそこか」の一文だけを持つ。
       スケジュールの ref と同じ仕組みで、地点を直したときに記事だけ古いまま残る事故を防ぐ。
     ★本文は **囲むと太字** の軽量記法だけ。生のHTMLは書かない（featureText を通すため）。 */
  feature: [
    { kind: "note", title: "🦦 ラッコ観覧｜予約も整理券もありません",
      text: "鳥羽水族館のラッコは、**事前予約・時間指定・整理券のいずれも無く、当日その場で列に並ぶ**方式です。並ぶ場所は「Iコーナー・極地の海」の入口。水槽の前には**約10人ずつ**案内され、**正面で見られるのは1グループ約1分**です。\n\nつまり、当日コントロールできるのは**「いつ列に入るか」だけ**。それ以外に手はありません。だからこの旅程は、2日目の昼食を早めて**13時台には入館している**形にしてあります。\n\n**途中合流と場所取りは禁止**です。列を離れたら最後尾からやり直しになるので、片方を先に降ろして並ばせておく——という方法は使えません。**2人とも駐車を終え、トイレと飲み物を済ませてから、一緒に列に入ってください。**" },

    { kind: "list", title: "お食事タイムと、混雑の関係",
      items: [
        { label: "9:40", text: "朝の食事。イカミミジャンプが見られる可能性がある。**開館直後から食事目当ての客が集中**するので、午前は全体的に混む。" },
        { label: "13:00", text: "貝のみのお食事タイム。**正午前後から列が伸びやすい。今回はここを避ける。**" },
        { label: "16:10", text: "夕方の食事。イカミミジャンプの可能性。ただし**列の締切前・レンタカー返却前**でリスクが高いので、今回の主目標にはしない。" },
        { label: "★13:30〜14:30", text: "**今回の狙い目。**13:00回が終わってピークが落ち着く時間帯。公式も「大型連休は午前が混むので、ゆっくり見るなら午後」と案内している。ただし**「午後ならいつでも空く」わけではなく**、ラッコ列は食事時間の前後に独自のピークがある。" }
      ] },

    { kind: "list", title: "13:30に待ち時間の表示を見て、この表のとおりに動く",
      items: [
        { label: "60分以内", text: "**そのまま並ぶ。**連休中としては十分に許容範囲。" },
        { label: "60〜90分", text: "周辺の展示を**15〜20分だけ**見て、一度戻って再確認する。**14:00頃には並ぶ。**" },
        { label: "90分超", text: "20分程度だけ待つ選択肢もある。ただし他の展示を削ることになる。**遅くとも14:30には並ぶ。**" },
        { label: "14:30に到達したら", text: "**待ち時間が長くても列に入る。これ以上は先送りしない。**旅程は最大90〜120分の待ちを吸収できるように組んである。" },
        { label: "参考：実際の待ち時間", text: "通常の休日で20〜60分程度、繁忙日で60〜90分以上、お盆級では1時間超や開館前からの行列も報告されている。**シルバーウィーク当日の正確な待ち時間は予測できない。**" }
      ] },

    { kind: "picks", title: "当日いちばん効く3か所", tone: "top",
      lead: "ラッコを快適に見られるかどうかは、**入館する前**にほとんど決まります。12:45までに駐車を終えられるかが分かれ目です。",
      items: [
        { ref: "spot:鳥羽水族館", tag: "★ 2日目の主役",
          why: "**シルバーウィーク（9/19〜23）は9:00〜17:30・最終入館16:30**と、通常より30分早く開いて30分長く営業します。館内は広いので、ラッコを見終えたあとは**ジュゴン・セイウチ・アシカに絞って**、16時台前半に出るのが今回の設計です。全展示の制覇は目指しません。" },
        { ref: "spot:鳥羽水族館 公式駐車場（A・B）", tag: "★ まずここを狙う",
          why: "水族館にいちばん近く、**乗用車1日1,000円**。空きがあって入庫待ちが長くなければ迷わずここです。**満車だと分かった時点で周回せずに切り替える**——待った時間はそのままラッコの待ち時間に上乗せされます。" },
        { ref: "spot:鳥羽駅西・佐田浜第1駐車場", tag: "満車のときの切替先",
          why: "水族館まで**徒歩10〜15分**かかりますが、公式が埋まったときの現実的な逃げ場です。**特定日は最大2,000円**の運用があるので、旅行1週間前に料金を確認しておいてください。" }
      ] },

    { kind: "note", title: "1分をどう使うか——役割を先に決めておく",
      text: "正面で見られるのは**1グループ約1分**です。その場で「どっちが撮る？」と相談する時間はありません。**1人は動画、もう1人は写真か肉眼中心**、と出発前に決めておいてください。\n\n・**フラッシュはOFF**にしておく（撮影自体は可、フラッシュのみ禁止）\n・スマホは**満充電**で。列に並んでいる間の消費も見込んでおく\n・**白い服よりも暗めの服**のほうが、ガラスへの映り込みが減る\n・列に入る前に、2人ともトイレと飲み物を済ませる\n\nそして、**ラッコを見終えるまでは昼食以外の予定を入れない**こと。この日は待ち時間を吸収することが最優先です。\n\n最後にひとつ。動物の体調等で**展示中止や時間変更になる可能性があり、完全な「確約」はできません**。そのときは代替がきかないので、ジュゴン・セイウチ・アシカに切り替えて、早めに退館して駅前の夕食をゆっくり取る方向へ振ってください。" },


    { kind: "sources", title: "主な情報源（最終確認は必ずリンク先で）",
      items: [
        { label: "鳥羽水族館 ラッコ観覧の方法", url: "https://aquarium.co.jp/topics/250201_01" },
        { label: "鳥羽水族館 営業案内（SW期間）", url: "https://aquarium.co.jp/eigyo/" },
        { label: "鳥羽水族館 ショー・お食事タイム", url: "https://aquarium.co.jp/show/" },
        { label: "鳥羽水族館 車・駐車場案内", url: "https://aquarium.co.jp/eigyo/kuruma/" },
        { label: "鳥羽市観光協会 駐車場案内", url: "https://www.toba.gr.jp/helpful/parking/" }
      ] }
  ],

  /* === 特集2（読み物）＝真珠取り出し体験の比較 ===
     ★1タブ1記事。どのコンテナに描くかは FEATURE_TABS が持つ。 */
  feature2: [
    { kind: "note", title: "💎 真珠取り出し体験｜なぜ「三重県真珠」を第一案にしたのか",
      text: "本来の好みで言えば、**雰囲気がいちばん特別なのはパール美樹**（志摩市御座）です。静かな真珠養殖場、真珠小屋、海上の筏——カップル旅行の思い出としては最も濃い体験になります。それでも実務上の第一案を三重県真珠にしたのは、**時間の計算が合わないから**です。\n\n9:13鶴橋発を選んだので鳥羽着は11:08。レンタカーの手続きを終えてから、**ホテル15時台到着までに使える時間は約3時間半**しかありません。パール美樹・真珠の里は志摩半島西部にあり、鳥羽から**片道約1時間前後**。体験60分と昼食を足すと、15:00到着はかなり不安定になります。\n\n三重県真珠は**二見**にあって鳥羽から近く、体験は**30〜45分**で終わります。周辺にランチ候補もあり、**真珠を加工せず持ち帰る選択ができる**ので、時間が押したときに加工工程を落として調整できます。雨天でも室内で確実に行えます。\n\n**「現地らしいランチを食べる」と「15時前後からホテルを満喫する」を両方かなえたい**——この2つが今回の優先順位に入っている以上、二見で完結する形がいちばん素直につながります。" },

    { kind: "picks", title: "二見・伊勢で完結する3施設", tone: "top",
      lead: "どれも鳥羽から近く、当日でも動ける範囲です。**上から順に空きを当たってください。**遠方の施設へ無理に移動しないのが原則です。",
      items: [
        { ref: "spot:三重県真珠（MIEKEN PEARL）", tag: "★ 第一案",
          why: "**二見にあって鳥羽から約25分**、体験は取り出し約20分・加工込み30〜45分。年中無休で雨天でも確実に行えます。**真珠だけ持ち帰る選択ができる**ので、遅れたときに加工を落として時間を作れるのが大きい。シルバーウィークは予約枠が埋まりやすいので、ここだけは早めに押さえてください。" },
        { ref: "spot:パールファルコ 伊勢店", tag: "満席のとき①",
          why: "室内で真珠養殖の歴史・品質の見分け方・手入れまで学べる、**教育性のいちばん高い**施設。加工は任意です。ただし9/21（月）はGoogleの表示で**16:00終了**なので、13:30開始なら収まるものの、遅れたときの余裕は三重県真珠より小さくなります。" },
        { ref: "spot:菊池パール", tag: "満席のとき②",
          why: "水槽から自分で貝を選び、職人がその場で加工します。**完成品の仕上がりを重視するならここ**。ただし**加工が必須の扱い**なので、「真珠だけ持ち帰って短縮する」という逃げが使えません。料金の案内が古いので、現行プランを電話で確認してください。" }
      ] },

    { kind: "picks", title: "志摩半島西部の2施設（雰囲気は最高だが、遠い）",
      lead: "**どちらを選んでも、現地ランチかホテル15時台到着のどちらかを緩めることになります。**それでも行きたいなら、予備プランから本命に上書きできます。",
      items: [
        { ref: "spot:真珠体験 パール美樹", tag: "雰囲気は第1希望",
          why: "海況がよければ**海上の筏**で体験し、粗塩で磨いて約200種の金具から加工します。完全予約制で所要は約60分。鳥羽から片道約1時間なので、これを選ぶと**ランチは道中の短時間利用・テイクアウト・ホテルのラウンジのスナック**で補う形になり、ホテル到着は15:10〜15:30。天候や施設都合で陸上体験になることもあります。" },
        { ref: "spot:真珠工房 真珠の里", tag: "第2希望・自由度が高い",
          why: "実際の養殖場で、養殖網からアコヤ貝を自分で選べます。**取り出した真珠を見てから、加工するか真珠のまま持ち帰るかを決められる**のが強み。金具は400種類以上。パール美樹より時間調整はしやすいものの、12:30前後の予約だと**昼食を11:30頃に短時間で済ませる**必要があり、ホテルは15:15前後になります。" }
      ] },

    /* 5施設の一覧比較。★セルは各地点の meta から metaOf() で引くので、
       ここに料金や所要を書き写さない（書き写すとカードを直したとき表だけ古くなる。0-1）。
       cols のラベルは meta の見出しと同じ文字列にすること。 */
    { kind: "table", title: "5施設をひと目で比べる",
      lead: "**料金・所要・営業はカードと同じ出どころ**なので、カードを直せばこの表も一緒に直ります。行をタップするとその施設のカードへ飛びます。",
      cols: ["料金", "所要", "営業"],
      items: [
        { ref: "spot:三重県真珠（MIEKEN PEARL）", tag: "★ 第一案" },
        { ref: "spot:パールファルコ 伊勢店",       tag: "満席のとき①" },
        { ref: "spot:菊池パール",                 tag: "満席のとき②" },
        { ref: "spot:真珠体験 パール美樹",         tag: "雰囲気は第1希望" },
        { ref: "spot:真珠工房 真珠の里",           tag: "第2希望" }
      ] },

    { kind: "note", title: "今回は候補から外したもの",
      text: "**ミキモト真珠島の特別ツアー** — 通常入場とは別の約2.5時間ツアー（町歩き・英語ガイド・限定の真珠取り出し等）で**1人22,000円**。時間も料金も大きく、鳥羽水族館とホテル滞在に正面から競合するため不採用。\n\n**UMIKAZE／田辺真珠養殖場** — 養殖船、筏見学、貝掃除、珠出し、核入れ、約1年養殖後の送付までを含む本格的な体験。問い合わせ型で、真珠産業の体験を主目的にする別の旅行向けです。\n\n**オンリーワンの真珠ジュエリー体験** — 2人で約32個の貝を開けて選別・制作する高付加価値企画で、1人約13万円等。通常の観光体験の枠を超えます。\n\n**TASAKI** — 自社養殖場で採苗から浜揚げまで一貫して行っており、外部関係者が珠出しを体験した事例はあります。ただし**2026年8月時点で、一般旅行者が日時・料金を指定して予約できる常設の取り出し体験は確認できませんでした。**\n\n**伊勢志摩真珠館（鳥羽市堅神町）** — 入館無料の真珠テーマ館。加工場と彫金をガラス越しに見学でき、200インチのシアターもあります。ただし**公式サイトには真珠の取り出し体験の案内がありません**（じゃらんにだけ「取り出し体験2,640円〜」の記載がありますが、同じページの住所が誤っているため裏が取れませんでした）。**取り出し体験の候補ではなく、見学の寄り道先**として地点カードに載せてあります。\n\n**伊勢志摩みやげセンター王将** — 現行の公式情報で真珠取り出し体験を確認できず、候補から除外。\n\nなお、ネット上の口コミ回答には**所在地やプランが混同された記載**があります。とくに**真珠の里は鳥羽市ではなく志摩市志摩町越賀**です。料金も古い情報が残りやすいので、最終的には公式サイトか電話で確認してください。" },

    { kind: "sources", title: "主な情報源（最終確認は必ずリンク先で）",
      items: [
        { label: "三重県真珠 公式", url: "https://miekenpearl.jp/" },
        { label: "三重県真珠 2026年の料金改定", url: "https://miekenpearl.jp/%E4%BD%93%E9%A8%93%E6%96%99%E9%87%91%E3%81%AE%E6%94%B9%E5%AE%9A%E3%81%AB%E3%81%A4%E3%81%8D%E3%81%BE%E3%81%97%E3%81%A6/" },
        { label: "パールファルコ", url: "https://www.pearlfalco.com/jp/" },
        { label: "菊池パール", url: "https://kikuchipearl.com/trial.html" },
        { label: "真珠体験 パール美樹", url: "https://isesima.info/pearl-miki/accessories/" },
        { label: "真珠工房 真珠の里", url: "https://s-tamachan.net/" },
        { label: "ミキモト真珠島", url: "https://www.mikimoto-pearl-island.jp/" }
      ] }
  ]
};
