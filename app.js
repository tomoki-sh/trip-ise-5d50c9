/* =========================================================================
   伊勢志摩 2026.9.21-22（1泊2日・鶴橋9:13発／海と真珠の旅）  ―  データ & レンダリング
   情報の追加・変更は基本このファイルの DATA を編集すればOK。
   ========================================================================= */

/* ---------- 定数 ---------- */
const TYPE_LABELS = { spot: "スポット", restaurant: "レストラン", cafe: "カフェ" };
const TYPE_ICONS  = { spot: "💎", restaurant: "🍽", cafe: "☕" };
const CAT_LABELS  = { confirmed: "確定", backup: "予備", warning: "要確認" };

/* ---------- データ ---------- */
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
        { text: "1日目の主役・要予約", cls: "priority-top" },
        { text: "実務上の第一案", cls: "priority-top" }
      ],
      ratings: { google: "4.2", googleReviews: "209" },
      desc: "この旅行の必須その2。アコヤ貝の真珠取り出し体験を、**二見で・短時間で・雨天でも**行える施設。真珠ができるまでの説明と映像 → 貝開け → 取り出し → 希望者は加工、という流れ。",
      meta: [
        ["営業", "**9:00〜17:00・年中無休**の案内。ただし体験枠は予約で満席になることがある"],
        ["料金", "**2026年4月以降1,980円**、施設が定める繁忙期は**2,200円**。金具代は別"],
        ["所要", "取り出し**約20分**、加工込みで**30〜45分**"],
        ["電話", "0120-663-186"],
        ["場所", "**二見町**。鳥羽駅から車で約25分、ここからホテルまで約50〜55分"],
        ["利点", "**真珠を加工せず持ち帰る選択ができる**ので、時間が押したときに加工工程を落として調整できる"]
      ],
      notes: "<strong>いちばん先に押さえるべき予約です。</strong>9月21日13:30前後・2名で空きを確認し、あわせて<strong>繁忙期料金かどうか</strong>と<strong>加工まで含めた終了見込み</strong>を聞いてください。シルバーウィークは予約枠が埋まりやすい一方、ここが取れれば「二見で現地ランチ → 体験 → 15時台にホテル」がいちばん素直につながります。満席だったときは<strong>パールファルコ → 菊池パール</strong>の順で近場を当たり、志摩半島西部の施設へ無理に移動しないでください。",
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
        ["持ち物", "**運転免許証**・決済手段・ETCカード（予約票はチケットタブにあります）"]
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
     ★原本は site/attachments/ にそのまま置いてある（ファイル名はASCIIに直してある。
       元のファイル名は NFD 正規化・全角スペース・角括弧を含み、URLとgitで事故るため）。
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
      summary: "**鶴橋 9:13 → 鳥羽 11:08**。チケットレス特急券なので、**乗車時にこの画面を出せるようにしておく**こと。",
      meta: [
        ["区間", "**鶴橋 9:13発 → 鳥羽 11:08着**（賢島ゆき）"],
        ["列車", "伊勢志摩ライナー **6903列車**"],
        ["座席", "**6号車 6B・6C**（デラックス）"],
        ["人数", "大人2人"],
        ["料金", "**4,120円**（特急料金3,280円＋デラックス料金840円）／お支払い済み（クレジット）"],
        ["予約番号", "A00789 ／ 券番号 31906699"],
        ["⚠️ 乗車券", "**これは特急券だけです。**別に紙のきっぷか交通系ICカードが必要"],
        ["変更・払戻", "近鉄の会員サイトにログインし「特急券の予約状況確認・取消・変更」から"]
      ],
      files: [
        { label: "券面（チケットレス特急券）", path: "attachments/ticket-out.png", type: "image" },
        { label: "購入結果メール", path: "attachments/kintetsu-out.eml", type: "eml" }
      ],
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
        ["予約番号", "A15015 ／ 券番号 32005799"],
        ["⚠️ 乗車券", "**これは特急券だけです。**別に紙のきっぷか交通系ICカードが必要"],
        ["変更・払戻", "近鉄の会員サイトにログインし「特急券の予約状況確認・取消・変更」から"]
      ],
      files: [
        { label: "券面（チケットレス特急券）", path: "attachments/ticket-in.png", type: "image" },
        { label: "購入結果メール", path: "attachments/kintetsu-in.eml", type: "eml" }
      ],
      links: [
        { label: "近鉄 会員サイト（変更・払戻）", url: "https://www.ticket.kintetsu.co.jp/M/MZZ/MZZ20.do?op=pDisplayServiceMenu" }
      ],
      note: "**往路と座席番号が違います。**乗る前に一度この画面を見て、6号車の 7B・7C だと確認してください。19:18発に対して、鳥羽駅前の夕食は18:35に出る計画です。"
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
        ["予約番号", "**98145307000**"],
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
      files: [
        { label: "予約確認メール", path: "attachments/toyota-rentacar.eml", type: "eml" }
      ],
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

/* ---------- ユーティリティ ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// **囲むと太字** だけ使える軽量記法。先にエスケープしてから変換するので、
// 生の < > を打たれても壊れない／XSSにもならない。esc() を通す表示はすべてこれを使う。
const mdBold = (s) => esc(s).replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
// place_id があれば検索結果ではなく「その地点そのもの」を開く（同名店の取り違えを防ぐ）
const placeMapsUrl = (p) => mapsUrl(p.maps || p.name) +
  (p.gmapsPlaceId ? "&query_place_id=" + encodeURIComponent(p.gmapsPlaceId) : "");
// 食べログURLは links から引く（DATAに二重で持たせない＝食い違いが起きない）
const tabelogUrl = (p) => ((p.links || []).find(l => /食べログ|tabelog/i.test(l.label)) || {}).url || null;

/* 全場所をフラットに（type 付き） */
function allPlaces() {
  return [
    ...DATA.spots.map(p => ({ ...p, type: "spot" })),
    ...DATA.restaurants.map(p => ({ ...p, type: "restaurant" })),
    ...DATA.cafes.map(p => ({ ...p, type: "cafe" }))
  ];
}
const placeId = (type, name) => `${type}:${name}`;
function getPlaceById(id) {
  const i = id.indexOf(":");
  const type = id.slice(0, i), name = id.slice(i + 1);
  return allPlaces().find(p => p.type === type && p.name === name) || null;
}
// 名前から placeId を逆引き（スケジュール項目とカードの紐付け用。名前は一意）
function placeIdByName(name) {
  const p = allPlaces().find(x => x.name === name);
  return p ? placeId(p.type, p.name) : null;
}
/* 2地点の直線距離（m）。coords は Places API の location をそのまま入れてあるので、
   「駅から歩けるか」のような判断を **データから計算できる**。
   ★エリアの割り当てをこれで検査する。手で付けたキーが実際の距離とズレても
     画面には何も出ないので、テストで拾う（0-2・追補L-1b）。 */
function distanceM(a, b) {
  if (!a || !b) return null;
  const R = 6371000, rad = d => d * Math.PI / 180;
  const p1 = rad(a[0]), p2 = rad(b[0]);
  const dp = rad(b[0] - a[0]), dl = rad(b[1] - a[1]);
  const h = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
/* 徒歩圏の中心からの距離（m）。中心が DATA に無い旅行では null を返す */
function metersFromWalkCenter(p) {
  const sta = getPlaceById(WALK_CENTER);
  return (sta && p && p.coords) ? distanceM(sta.coords, p.coords) : null;
}

/* =========================================================================
   確定/未確定ステート（全タブ共有・localStorage）
   スケジュール・カード・マップが同じ状態を参照し、どのタブで変えても全タブに反映する。
   「共有用に書き出す」で STATUS_DEFAULT に貼り替え＋STATUS_VERSION を +1 すれば全員反映。
   ========================================================================= */
const STATUS_KEY = "ise-trip-status";
const STATUS_VERSION = 1;   // STATUS_DEFAULT を更新したら必ず +1 する
// 全員に配る初期状態。空なら DATA の category から生成（confirmed→確定 / それ以外→未確定）。
const STATUS_DEFAULT = {};
function baseStatusMap() {
  const o = {};
  allPlaces().forEach(p => { o[placeId(p.type, p.name)] = p.category === "confirmed" ? "confirmed" : "tentative"; });
  return { ...o, ...STATUS_DEFAULT };
}
function loadStatusMap() {
  try {
    const raw = JSON.parse(localStorage.getItem(STATUS_KEY));
    if (raw && raw.v === STATUS_VERSION && raw.map) return { ...baseStatusMap(), ...raw.map };
  } catch (e) {}
  return baseStatusMap();
}
let statusMap = loadStatusMap();
function saveStatusMap() { localStorage.setItem(STATUS_KEY, JSON.stringify({ v: STATUS_VERSION, map: statusMap })); fbPush("status", statusToArray()); }
function getStatus(id) { return statusMap[id] === "confirmed" ? "confirmed" : "tentative"; }
function setStatus(id, s) { statusMap[id] = (s === "confirmed" ? "confirmed" : "tentative"); saveStatusMap(); rerenderStatus(); }
function toggleStatus(id) { setStatus(id, getStatus(id) === "confirmed" ? "tentative" : "confirmed"); }
const STATUS_LABEL = { confirmed: "確定", tentative: "未確定" };

/* =========================================================================
   行きたい度（★5段階）とメモ ── 2人で共有する
   ★確定/未確定（statusMap）とまったく同じ作法で持つ。地点idをキーにした map を
     localStorage に置き、fbPush で同期する。
   ★VERSION は 1 から。**この2つのバージョンを startFirebaseSync の一括リセット条件に
     足してはいけない**（FB.set はノード全体を置き換えるので、schedule まで初期値に戻る。追補F-21）。
     一方で、その FB.set の payload には必ず含めること——含めないと、
     誰かが SCHED_VERSION を上げた瞬間に★とメモが巻き添えで消える（追補L-6）。
   ========================================================================= */
const WANT_KEY = "ise-trip-want";
const WANT_VERSION = 1;
const NOTE_KEY = "ise-trip-note";
const NOTE_VERSION = 1;
const WANT_MAX = 5;

function loadKeyedMap(key, version) {
  try {
    const raw = JSON.parse(localStorage.getItem(key));
    if (raw && raw.v === version && raw.map) return { ...raw.map };
  } catch (err) {}
  return {};
}
let wantMap = loadKeyedMap(WANT_KEY, WANT_VERSION);
let noteMap = loadKeyedMap(NOTE_KEY, NOTE_VERSION);

// Firebase へは status と同じ「配列」の形で出す（RTDB がオブジェクトのキー順を保証しないため）
function wantToArray() { return Object.keys(wantMap).map(id => ({ id, n: getWant(id) })).filter(x => x.n > 0); }
function noteToArray() { return Object.keys(noteMap).map(id => ({ id, t: noteMap[id] })).filter(x => x.t); }

function getWant(id) { const n = parseInt(wantMap[id], 10); return (n >= 1 && n <= WANT_MAX) ? n : 0; }
function saveWant() { localStorage.setItem(WANT_KEY, JSON.stringify({ v: WANT_VERSION, map: wantMap })); fbPush("want", wantToArray()); }
function setWant(id, n) {
  const v = Math.max(0, Math.min(WANT_MAX, parseInt(n, 10) || 0));
  if (v === 0) delete wantMap[id]; else wantMap[id] = v;
  saveWant();
  refreshWantRows();
  // ピンに★を出しているときは地図も追随させる（pinlabel列）。地図をまだ開いていなければ何もしない
  if (typeof map !== "undefined" && map) refreshMarkers();
  // 「行きたい度順」で並べているタブだけは並び替え直す（それ以外は順番を動かさない＝押した場所が飛ばない）
  Object.keys(CARD_TABS).forEach(k => { if (cardView[k].sort === "want") renderCardTab(k); });
}
function getNote(id) { return noteMap[id] || ""; }
function saveNote() { localStorage.setItem(NOTE_KEY, JSON.stringify({ v: NOTE_VERSION, map: noteMap })); fbPush("note", noteToArray()); }
/* メモは打つたびに保存すると同期が煩いので少し待つ。★再描画はしない
   （入力中に innerHTML を作り直すと、IMEの変換とカーソル位置が飛ぶ） */
let noteTimer = null;
function setNoteDebounced(id, text) {
  if (text) noteMap[id] = text; else delete noteMap[id];
  clearTimeout(noteTimer);
  noteTimer = setTimeout(saveNote, 500);
}

/* ★の行だけを描き直す。カード全体を作り直さないので、開いているメモ欄が閉じない */
function wantStarsHtml(id) {
  const cur = getWant(id);
  const stars = Array.from({ length: WANT_MAX }, (_, i) => {
    const n = i + 1;
    return `<button class="want-star${n <= cur ? " on" : ""}" data-want-set="${esc(id)}|${n}"
      aria-label="行きたい度を${n}にする" title="行きたい度 ${n}">${n <= cur ? "★" : "☆"}</button>`;
  }).join("");
  return `<span class="want-label">行きたい度</span>${stars}` +
    (cur ? `<button class="want-clear" data-want-set="${esc(id)}|0" title="評価を消す">×</button>` : "");
}
function refreshWantRows() {
  $$("[data-want-row]").forEach(el => { el.innerHTML = wantStarsHtml(el.dataset.wantRow); });
  // 一覧表の★列も同じ値を見ているので一緒に直す（カードだけ変わって表が古いままにならないように）
  $$("[data-want-cell]").forEach(el => { el.innerHTML = wantStarsShort(el.dataset.wantCell); });
}
/* 同期で届いた★とメモを画面へ。★入力中のメモ欄だけは書き換えない（打っている字が消える） */
function refreshNotes() {
  const active = document.activeElement;
  $$("textarea[data-note]").forEach(t => {
    if (t === active) return;
    const v = getNote(t.dataset.note);
    if (t.value !== v) t.value = v;
  });
}
// status に依存する全ビューを再描画（カード・マップのピン・スケジュール）
function rerenderStatus() {
  renderAllCards();
  if (typeof map !== "undefined" && map) refreshMarkers();
  if ($("#sched-list")) renderScheduleEditor();
}
/* ===== カードの絞り込み・並び替え（スポット／レストラン／カフェ共通） =====
   絞り込みは「列」を単位にする。列どうしは AND、列の中のチップは OR。
   例) 種類＝屋内・展示 × 犬＝抱っこ → 抱っこで入れる屋内施設だけが残る。
   ★状態は cardView（メモリ）だけに持つ。localStorage にも Firebase にも保存しない
     ＝見る人ごとの一時的な操作であって、同行者の画面まで絞り込まれると事故になる（追補H-9）。 */

// 表示用の genre は店ごとに細かいので、絞り込みはこの粗い区分（genreKey）で行う
const GENRE_GROUPS = [
  ["kaisen",   "🐟 海鮮・和食"],
  ["yakigai",  "🐚 焼貝・さざえ"],
  ["shokudo",  "🍚 食堂・軽食"],
  ["yakiniku", "🍖 焼肉・焼鳥"],
  ["cafe",     "☕ カフェ・スイーツ"],
];
// スポットの種類（spotKey）。1地点1区分の排他。
const SPOT_GROUPS = [
  ["pearl",   "💎 真珠体験"],
  ["aqua",    "🦦 水族館・見学"],
  ["view",    "⛩ 景勝・社寺"],
  ["stay",    "♨️ ホテル"],
  ["station", "🚉 駅・レンタカー・土産"],
  ["park",    "🅿️ 駐車場"],
];
// エリア（areaKey）。スポットでも店でも同じ語彙を使い回す。
// ★「種類」とは別の列にするのが要点。この旅行は二見・鳥羽・磯部志摩という離れた地域を扱うので、
//   1つの列に混ぜると「二見の真珠体験だけ」のような掛け合わせが出せなくなる。
//   例: エリア＝二見・伊勢 × 種類＝真珠体験 → 三重県真珠が満席のとき、当日でも動ける代替だけが残る。
// ★並びは移動の順（大阪 → 二見 → 鳥羽 → 志摩）。地図と頭の中の順番を合わせる。
// ★鳥羽は「駅から歩けるか」で2つに割ってある。2日目はレンタカーを17時前に返してしまうので、
//   そのあと行けるのは徒歩圏だけになる——その線引きがそのままフィルタになる。
//   境界は鳥羽駅から 1km。**割り当ての正しさは coords から計算して tools/test_cardtools.js が検査する**
//   （手で付けた areaKey と実際の距離がズレたら落ちる。0-2 静かに壊れるものを作らない）。
const AREA_GROUPS = [
  ["michi",   "🚉 大阪・道中"],
  ["futami",  "🌊 二見・伊勢"],
  ["toba",    "⚓ 鳥羽駅ちかく（1km以内）"],
  ["tobafar", "🚗 鳥羽（車で移動）"],
  ["shima",   "🏝 磯部・志摩"],
];
/* 「徒歩圏かどうか」でエリアを割るときの境界。この旅行では鳥羽を
   toba（駅から1km以内）と tobafar（車で移動）に分けるのに使う。
   ★識別子は旅行に依存しない名前にする。テーマは値とラベルだけで表す（追補F-27）。
   ★中心の座標は DATA から引く（同じ事実を2か所に持たない。0-1）。
     この仕組みが要らない旅行では、AREA_GROUPS を距離で割らなければよいだけで、
     ここを消す必要はない（tools/test_days.js の検査は WALK_CENTER が
     DATA に無ければ丸ごと省略される）。 */
const WALK_LIMIT_M = 1000;
const WALK_CENTER = "spot:鳥羽駅";
// 列の定義。CARD_TABS の filters から参照する
const FILTER_GROUPS = {
  genre: { label: "ジャンル", field: "genreKey", groups: GENRE_GROUPS },
  spot:  { label: "種類",     field: "spotKey",  groups: SPOT_GROUPS },
  area:  { label: "エリア", field: "areaKey",  groups: AREA_GROUPS },
};
const CARD_SORTS = [
  ["default", "おすすめ順"],
  ["want",    "行きたい度の高い順（★）"],
  ["total",   "合計点数の高い順（食べログ＋Google）"],
  ["tabelog", "食べログ点数の高い順"],
  ["google",  "Google点数の高い順"],
];
// スポットには食べログ点数が無いので、店とは別の選択肢にする
const SPOT_SORTS = [
  ["default", "おすすめ順"],
  ["want",    "行きたい度の高い順（★）"],
  ["google",  "Google点数の高い順"],
  ["reviews", "口コミの多い順"],
];
// タブを増やすならここに1行足すだけ。filters は FILTER_GROUPS のキーの配列
const CARD_TABS = {
  spots: {
    target: "#cards-spots", tools: "#tools-spots", table: "#table-spots", type: "spot",
    label: "スポット",
    filters: ["spot", "area"], sorts: SPOT_SORTS, unit: "か所",
    empty: "条件に合う場所がありません。「すべて表示」で戻せます。",
    items: () => DATA.spots,
  },
  restaurants: {
    target: "#cards-restaurants", tools: "#tools-restaurants", table: "#table-restaurants", type: "restaurant",
    label: "レストラン",
    filters: ["genre", "area"], sorts: CARD_SORTS, unit: "店",
    empty: "条件に合う店がありません。「すべて表示」で戻せます。",
    items: () => DATA.restaurants,
  },
  cafes: {
    target: "#cards-cafes", tools: "#tools-cafes", table: "#table-cafes", type: "cafe",
    label: "カフェ",
    filters: ["genre", "area"], sorts: CARD_SORTS, unit: "店",
    empty: "条件に合う店がありません。「すべて表示」で戻せます。",
    items: () => DATA.cafes,
  },
};

/* ===== マップのフィルタ列 =====
   ★値もラベルも、すべてここから作る。index.html には1つも書かない。
     犬のラベルは AREA_GROUPS、日付は TRIP_DAYS が唯一の出どころなので、
     旅行を差し替えるときに index.html を触る必要がない（0-1・追補K-5）。 */
// 「状態」列。CAT_LABELS（確定/予備/要確認）はカードのバッジ用で語彙が違うので使わない
const STATUS_GROUPS = [["confirmed", "確定"], ["tentative", "未確定"]];
// off: true = 初期状態でチェックを入れない（「ルート内のみ」だけ）
const MAP_FILTER_COLUMNS = [
  /* ★日帰り（TRIP_DAYS が1件）のときは列ごと出さない。
     チップが1つだけの列は操作しても何も変わらず、押せるのに効かないUIになる。
     renderMapFilters() は chips が空の列を丸ごと落とし、currentFilters() は
     列が無ければ全日選択とみなすので、ここを空にするだけで筋が通る。
     複数日の旅行では TRIP_DAYS に行を足すだけで復活する。 */
  { group: "day",    label: "日",
    chips: () => TRIP_DAYS.length > 1
      ? TRIP_DAYS.map(d => [d.key, d.label.replace(/（.*?）/, "")]) : [] },
  { group: "type",   label: "種類",
    chips: () => Object.values(CARD_TABS).map(t => [t.type, `${TYPE_ICONS[t.type]} ${t.label}`]) },
  { group: "area",   label: "エリア",
    chips: () => groupsPresentIn(allPlaces(), "area").map(([k, l]) => [k, l]) },
  { group: "status", label: "状態",   chips: () => STATUS_GROUPS },
  /* 「ルート内」＝スケジュールの予定に紐づいている地点。ラベルは実態に合わせる。
     ★2チップにしてあるのは「まだ入れていない地点」を探せるようにするため
       （地図を見ながら予定を組むときに、いちばん見たいのがこれ）。
       他の列と同じく、0個チェックも全部チェックも「素通し」。 */
  { group: "route",  label: "予定", off: true,
    chips: () => [["route-only", "🗓 予定に入っている"], ["route-none", "🆕 まだ入っていない"]] },
  /* ピンに重ねる情報（点数・行きたい度）。★これは絞り込みではなく「表示の重ね着」。
     currentFilters() はこの列を読まないので、チェックしてもピンは消えないしルートも変わらない
     （検査は tools/test_days.js §8d）。初期オフ＝既定では地図が文字で埋まらない。
     ★チェック状態は DOM のチェックボックスだけに持つ。localStorage にも Firebase にも
       保存しない——見る人ごとの表示状態で、同行者の画面まで変わると事故になる（追補H-9）。
       マップの他の列と同じ持ち方なので、そのための仕掛けは何も要らない。 */
  { group: "pinlabel", label: "ピンに表示", off: true,
    chips: () => [["name", "🏷 地点名"], ["google", "⭐ Google点数"], ["tabelog", "🍴 食べログ点数"], ["want", "★ 行きたい度"]] },
];
// sets[列ID] が未設定 = 未初期化（初回に全選択にする）
// open: 一覧表の開閉。★localStorage にも Firebase にも保存しない（見る人ごとの表示状態。追補H-9）
//       ただし renderCardTab() は絞り込み・確定トグル・Firebase受信のたびに走るので、
//       ここに控えておかないとチップを押すたびに表が勝手に閉じる。
const cardView = {
  spots:       { sets: {}, sort: "default", open: false },
  restaurants: { sets: {}, sort: "default", open: false },
  cafes:       { sets: {}, sort: "default", open: false },
};

const numOr = (v) => { const n = parseFloat(v); return isNaN(n) ? null : n; };
// 合計は「片方しか無い店」も比較できるよう、欠けている側を0として足す（＝下に沈む）
/* 並び替えのキー。★want は地点idが要るので、呼ぶ側からタブの type をもらう
   （viewedItems が渡す p は DATA の生オブジェクトで type を持たない） */
function cardScore(p, kind, type) {
  if (kind === "want") { const n = getWant(placeId(type, p.name)); return n > 0 ? n : null; }
  const t = numOr(p.ratings && p.ratings.tabelog);
  const g = numOr(p.ratings && p.ratings.google);
  if (kind === "tabelog") return t;
  if (kind === "google")  return g;
  if (kind === "reviews") return numOr(p.ratings && p.ratings.googleReviews);
  if (kind === "total")   return (t == null && g == null) ? null : (t || 0) + (g || 0);
  return null;
}
/* その地点が属する区分。キーの付け忘れは "other" になり、どの区分にも含まれないので
   静かに一覧から消える（追補D-2c）。tools/test_cardtools.js の「キー欠落の検出」で拾う。 */
function groupKeyOf(p, gid) { return p[FILTER_GROUPS[gid].field] || "other"; }

function viewedItems(key) {
  const v = cardView[key], t = CARD_TABS[key], all = t.items();
  // 列どうしは AND、列の中は OR。未初期化の列は素通しする
  const list = all.filter(p => t.filters.every(gid => {
    const set = v.sets[gid];
    return !set || set.has(groupKeyOf(p, gid));
  }));
  if (v.sort === "default") return list;
  // 元の並びを保った安定ソート。点数が無い店は末尾へ
  return list.map((p, i) => ({ p, i })).sort((a, b) => {
    const sa = cardScore(a.p, v.sort, t.type), sb = cardScore(b.p, v.sort, t.type);
    if (sa == null && sb == null) return a.i - b.i;
    if (sa == null) return 1;
    if (sb == null) return -1;
    return (sb - sa) || (a.i - b.i);
  }).map(x => x.p);
}

/* 渡した地点の中に実在する区分だけを [キー, ラベル, 件数] で返す（0件の区分はチップを出さない）。
   ★カードは1タブぶん、マップは allPlaces()（全タブ）を渡す。絞り込みの語彙を二重に持たないため、
     どちらもこの1本を通す。 */
function groupsPresentIn(items, gid) {
  return FILTER_GROUPS[gid].groups
    .map(([k, label]) => [k, label, items.filter(p => groupKeyOf(p, gid) === k).length])
    .filter(x => x[2] > 0);
}
function presentGroups(key, gid) { return groupsPresentIn(CARD_TABS[key].items(), gid); }
/* 全列を全選択に戻す（初期化と「すべて表示」で共用） */
function resetCardFilters(key) {
  const v = cardView[key];
  CARD_TABS[key].filters.forEach(gid => { v.sets[gid] = new Set(presentGroups(key, gid).map(x => x[0])); });
}

function renderCardTools(key) {
  const t = CARD_TABS[key];
  const el = $(t.tools); if (!el) return;
  const all = t.items();
  const v = cardView[key];

  // 列ごとにチップを作る。data-fgroup でどの列のチップかを持たせる（値の重複に依存しない）
  // ★チップは必ず .chip-row で包む。2列グリッドの右カラムに収まるので、
  //   何行に折り返してもラベルの下に回り込まない（ゾーンの境目が見えなくなる原因だった）
  const rows = t.filters.map(gid => {
    const present = presentGroups(key, gid);
    if (!v.sets[gid]) v.sets[gid] = new Set(present.map(x => x[0]));
    const set = v.sets[gid];
    const chips = present.map(([k, label, n]) =>
      `<label class="chip"><input type="checkbox" data-fgroup="${gid}" value="${k}" ${set.has(k) ? "checked" : ""}> ${label}<span class="chip-n">${n}</span></label>`).join("");
    return `<div class="filter-group" data-fgroup="${gid}">
      <span class="filter-label">${esc(FILTER_GROUPS[gid].label)}</span>
      <div class="chip-row">${chips}</div>
    </div>`;
  }).join("");

  const opts = t.sorts.map(([k, l]) => `<option value="${k}"${v.sort === k ? " selected" : ""}>${esc(l)}</option>`).join("");
  const shown = viewedItems(key).length;
  // 「すべて表示」と件数は全ゾーンにかかる操作なので、ゾーンの外＝見出し行に置く
  el.innerHTML = `
    <div class="tools-head">
      <span class="tools-title">絞り込み</span>
      <span class="muted card-tool-count">${shown} / ${all.length}${t.unit}</span>
      <button class="btn-ghost card-tool-all">すべて表示</button>
    </div>` + rows + `
    <div class="filter-group">
      <span class="filter-label">並び替え</span>
      <div class="chip-row">
        <select class="card-tool-sort" aria-label="並び替え">${opts}</select>
      </div>
    </div>`;

  $$(t.tools + " input[type=checkbox]").forEach(i => i.addEventListener("change", e => {
    const gid = e.currentTarget.dataset.fgroup;
    const set = cardView[key].sets[gid], val = e.currentTarget.value;
    e.currentTarget.checked ? set.add(val) : set.delete(val);
    renderCardTab(key);
  }));
  // 「すべて表示」は絞り込みと並び替えの両方を初期化する（片方だけ戻ると迷子になる）
  $(t.tools + " .card-tool-all").addEventListener("click", () => {
    resetCardFilters(key);
    cardView[key].sort = "default";
    renderCardTab(key);
  });
  $(t.tools + " .card-tool-sort").addEventListener("change", e => {
    cardView[key].sort = e.currentTarget.value;
    renderCardTab(key);
  });
}

/* ===== 一覧表（各タブのカードの上に置く折りたたみ式の索引） =====
   ★行は viewedItems() をそのまま描く。絞り込み条件を二重に実装しないので、
     地点を足せば行も増え、チップを押せば表も追随する。 */
// 表の点数欄。狭いので口コミ件数は出さない。数値は p.ratings から引く（書き写さない）
/* 一覧表の★欄。押せるのはカード側だけにして、表は見るだけにする（行タップはカードへの移動） */
function wantStarsShort(id) {
  const n = getWant(id);
  return n ? `<span class="ct-star">${"★".repeat(n)}</span>` : `<span class="muted">—</span>`;
}
function tableScore(p) {
  const r = p.ratings || {}, out = [];
  if (r.tabelog) out.push(`<span class="ct-tabelog">🍴${esc(r.tabelog)}</span>`);
  if (r.google)  out.push(`<span class="ct-google">⭐${esc(r.google)}</span>`);
  return out.length ? out.join(" ") : `<span class="muted">—</span>`;
}
/* 行 → その地点のカードへ移動。
   地点idは "spot:五老ヶ岳公園・五老スカイタワー" のように : と日本語を含むので、CSSセレクタではなく
   data 属性の突き合わせで引く（エスケープ事故を避ける）。 */
function gotoPlaceCard(key, id) {
  const card = $$(CARD_TABS[key].target + " .card").find(c => c.dataset.place === id);
  if (!card) return;   // 表とカードは同じ viewedItems から作るので通常ここには来ない
  card.scrollIntoView({ behavior: "smooth", block: "start" });
  // 連続でタップしてもハイライトが再生されるよう、一度外してリフローを挟む
  card.classList.remove("just-jumped");
  void card.offsetWidth;
  card.classList.add("just-jumped");
}
function renderCardTable(key) {
  const t = CARD_TABS[key];
  const box = $(t.table); if (!box) return;
  const list = viewedItems(key), v = cardView[key];
  // ★viewedItems() が返すのは DATA の生オブジェクトで type を持たない
  //   （type は renderCards() が {...p, type} で足している）。
  //   ここで p.type を使うと data-goto が "undefined:五老ヶ岳公園・五老スカイタワー" になり、
  //   飛び先が静かに切れる。タブ定義の t.type を使うこと。
  const rows = list.map(p => {
    const id = placeId(t.type, p.name);
    return `<tr class="ct-row" data-goto="${esc(id)}" tabindex="0" role="button" title="${esc(p.name)}の詳細へ移動">
      <td class="ct-name">${TYPE_ICONS[t.type]} ${esc(p.name)}</td>
      <td class="ct-area">${areaChip(p)}</td>
      <td class="ct-want" data-want-cell="${esc(id)}">${wantStarsShort(id)}</td>
      <td class="ct-score">${tableScore(p)}</td>
    </tr>`;
  }).join("");
  box.innerHTML = `<details class="ct-details"${v.open ? " open" : ""}>
    <summary class="ct-summary">一覧で見る<span class="ct-n">${list.length}${esc(t.unit)}</span></summary>
    <div class="ct-wrap">
      <table class="ct">
        <thead><tr><th>名前</th><th>エリア</th><th>★</th><th>点数</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="4" class="muted">${esc(t.empty)}</td></tr>`}</tbody>
      </table>
    </div>
  </details>`;

  // 開閉を控える（再描画で閉じてしまわないように）
  $(t.table + " .ct-details").addEventListener("toggle", e => { cardView[key].open = e.currentTarget.open; });
  // 行をタップ／Enter でカードへ移動
  $$(t.table + " .ct-row").forEach(tr => {
    const go = () => gotoPlaceCard(key, tr.dataset.goto);
    tr.addEventListener("click", go);
    tr.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
    });
  });
}

function renderCardTab(key) {
  /* ★メモを打っている最中にこの関数が走ることがある（同行者の同期・絞り込み・確定切替）。
     innerHTML を作り直すと入力欄ごと消えるので、どこにカーソルがあったかを控えて戻す。
     控えないと「打っている途中で急に入力が効かなくなる」という、原因の分からない壊れ方をする。 */
  const act = document.activeElement;
  const keep = (act && act.matches && act.matches("textarea[data-note]"))
    ? { id: act.dataset.note, start: act.selectionStart, end: act.selectionEnd } : null;

  renderCardTools(key);
  renderCardTable(key);
  const t = CARD_TABS[key], list = viewedItems(key);
  const box = $(t.target); if (!box) return;
  if (list.length) renderCards(t.target, list, t.type);
  else box.innerHTML = `<p class="muted">${esc(t.empty)}</p>`;

  if (keep) {
    const back = $$("textarea[data-note]").find(x => x.dataset.note === keep.id);
    if (back) {
      back.focus();
      try { back.setSelectionRange(keep.start, keep.end); } catch (err) {}
    }
  }
}

/* ★カード再描画の唯一の入口。個別に renderCards() を呼ぶとツールバーを通らず、
   器はあるのに中身が空になる（追補F-11でいちばん時間を溶かした落とし穴）。 */
function renderAllCards() {
  Object.keys(CARD_TABS).forEach(renderCardTab);
}

/* =========================================================================
   カードレンダリング
   ========================================================================= */
function renderImageBlock(p) {
  const imgs = p.images || [];
  if (!imgs.length) return `<div class="card-imgwrap"><div class="card-noimg">${TYPE_ICONS[p.type] || "🖼"}</div>${catRibbon(p)}</div>`;
  const data = esc(JSON.stringify(imgs));
  const main = `<button class="card-img-btn" data-images='${data}' data-index="0" aria-label="拡大">
      <img class="card-img" src="${esc(imgs[0])}" alt="${esc(p.name)}" loading="lazy"></button>`;
  let thumbs = "";
  if (imgs.length > 1) {
    thumbs = `<div class="card-thumbs">` + imgs.slice(1, 4).map((src, k) =>
      `<button class="thumb-btn" data-images='${data}' data-index="${k + 1}" aria-label="拡大"><img class="thumb" src="${esc(src)}" alt="" loading="lazy"></button>`
    ).join("") + `</div>`;
  }
  return `<div class="card-imgwrap">${main}${catRibbon(p)}</div>${thumbs}`;
}
function catRibbon(p) {
  const id = placeId(p.type, p.name);
  const st = getStatus(id);
  return `<button type="button" class="cat-ribbon status-${st}" data-status-toggle="${esc(id)}" title="タップで確定／未確定を切替">${STATUS_LABEL[st]}</button>`;
}
function ratingChips(p) {
  if (!p.ratings) return "";
  const r = p.ratings, chips = [];
  const rev = (n) => n ? `（${esc(n)}件）` : "";
  // 点数チップはタップで出典へ飛ぶ。食べログは links の食べログURL、Googleは place_id 付きマップURL。
  // URLが無い地点は <span> のまま（リンク切れを作らない）。
  const chip = (cls, label, url) => url
    ? `<a class="rating-chip ${cls} is-link" href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`
    : `<span class="rating-chip ${cls}">${label}</span>`;
  // 飲食店は食べログ・Googleの両点数を件数つきで併記（§8-2）。google は Places API で取得。
  if (r.tabelog) chips.push(chip("tabelog", `🍴 食べログ ${esc(r.tabelog)}${rev(r.tabelogReviews || r.reviews)}`, tabelogUrl(p)));
  if (r.google)  chips.push(chip("google",  `⭐ Google ${esc(r.google)}${rev(r.googleReviews)}`, placeMapsUrl(p)));
  return chips.length ? `<div class="ratings">${chips.join("")}</div>` : "";
}
function linkPills(p) {
  const pills = [`<a class="pill maps" href="${placeMapsUrl(p)}" target="_blank" rel="noopener">📍 Googleマップ</a>`];
  (p.links || []).forEach(l => {
    const cls = /食べログ|tabelog/i.test(l.label) ? "pill tabelog" : "pill";
    const icon = /食べログ/.test(l.label) ? "🍴" : "🔗";
    pills.push(`<a class="${cls}" href="${esc(l.url)}" target="_blank" rel="noopener">${icon} ${esc(l.label)}</a>`);
  });
  // その地点に紐づくチケットがあれば、チケットタブへのピルを出す（紐づけは DATA.tickets 側が持つ）
  ticketsFor(placeId(p.type, p.name)).forEach(t =>
    pills.push(`<button class="pill ticket" data-goto-ticket="${esc(t.id)}">🎫 ${esc(t.title)}</button>`));
  pills.push(`<button class="pill add-sched" data-add-sched="${esc(placeId(p.type, p.name))}">＋ スケジュールに追加</button>`);
  return `<div class="card-links">${pills.join("")}</div>`;
}
/* メモ欄の開閉は「見る人ごとの一時的な表示状態」なので保存も同期もしない（追補H-9）。
   ただし再描画のたびに閉じると入力が続けられないので、メモリには控えておく。 */
const cardNoteOpen = {};
function renderCard(p) {
  const pid = placeId(p.type, p.name);
  const badges = (p.badges || []).map(b => `<span class="badge ${esc(b.cls)}">${esc(b.text)}</span>`).join("");
  const meta = (p.meta || []).map(m => `<li><b>${esc(m[0])}</b><span>${mdBold(m[1])}</span></li>`).join("");
  return `<article class="card" data-place="${esc(pid)}">
    ${renderImageBlock(p)}
    <div class="card-body">
      <h3 class="card-title">${esc(p.name)}</h3>
      <div class="card-sub">
        ${p.genre ? `<span class="genre-chip">${esc(p.genre)}</span>` : ""}
        <span class="card-area">${esc(p.area)}</span>
      </div>
      ${badges ? `<div class="badges">${badges}</div>` : ""}
      ${ratingChips(p)}
      <div class="want-row" data-want-row="${esc(pid)}">${wantStarsHtml(pid)}</div>
      <p class="card-desc">${mdBold(p.desc)}</p>
      ${meta ? `<ul class="card-meta">${meta}</ul>` : ""}
      ${p.notes ? `<div class="card-notes">${p.notes}</div>` : ""}
      <details class="note-box"${cardNoteOpen[pid] ? " open" : ""}>
        <summary>📝 メモ${getNote(pid) ? `<span class="note-dot" title="メモがあります">●</span>` : ""}</summary>
        <textarea class="note-input" data-note="${esc(pid)}"
          placeholder="ここに書いたメモは2人で共有されます（例: 予約した／席の希望／苦手なもの）">${esc(getNote(pid))}</textarea>
      </details>
      ${linkPills(p)}
    </div>
  </article>`;
}
function renderCards(targetId, items, type) {
  $(targetId).innerHTML = items.map(p => renderCard({ ...p, type })).join("");
}

/* =========================================================================
   スケジュール / ルート / 持ち物 / 注意
   ========================================================================= */
/* =========================================================================
   スケジュールの「読む」表示（②形式）

   ★本命プラン（schedule）と予備プラン（plans[].items）は同じ形の行を持つので、
     描画はこの1本だけ。二重に実装しない（0-1）。
     行の形 = { day, time, end, text, status, ref }
   ========================================================================= */

/* 行を日ごとにまとめる（TRIP_DAYS の順。day を持たない行は初日に寄せる） */
function rowsByDay(rows) {
  const m = new Map();
  rows.forEach(it => {
    const d = normalizeDay(it.day);
    if (!m.has(d)) m.set(d, []);
    m.get(d).push(it);
  });
  return DAY_KEYS.filter(d => m.has(d)).map(d => ({ day: d, rows: m.get(d) }));
}

/* 1行ぶんの「読む」表示。★表示専用。入力欄もトグルも出さない（誤タップ対策）。 */
function scheduleRowReadHtml(it) {
  // 確定状態は ref があれば全タブ共有のものを引く（プラン内の文字列ではなく“いまの本物”）
  const st = it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
  const time = it.time || "—";
  const when = it.end ? `${esc(time)}<span class="tl-end">〜${esc(it.end)}</span>` : esc(time);
  /* ★紐づいている地点は名前を出す。本文からは読み取れないことが多いため
     （例:「伊根 到着・駐車」→ 伊根浦公園駐車場 / 「三宮を出発」→ 三宮（合流・送迎））。
     この ref がマップのピン順を決めているので、見えないと確認できない。
     リンクは地点チップだけにする（本文にも張ると1行にリンクが2つになる）。 */
  /* 地点チップは行き先が2つある。押し分けられるよう1つのピルを区切って並べる。
     ・地点名 → その地点のカード（写真・営業時間・点数・犬の条件）
     ・🗺    → Googleマップのその場所のページ（ナビはユーザーがそこで開始する）
     URLは placeMapsUrl() を使い回す（カードの「📍 Googleマップ」やマップのピンと同じもの）。 */
  const p = it.ref ? getPlaceById(it.ref) : null;
  const place = p
    ? `<span class="tl-links">
        <a class="tl-place" href="#" data-goto-ref="${esc(it.ref)}"
           title="${esc(p.name)}のカードを見る">${TYPE_ICONS[p.type] || "📍"} ${esc(p.name)}</a>
        <a class="tl-maps" href="${placeMapsUrl(p)}" target="_blank" rel="noopener"
           title="Googleマップで開く" aria-label="${esc(p.name)}をGoogleマップで開く">🗺</a>
      </span>`
    : "";
  /* その行に紐づくチケット（日と地点が両方一致したときだけ）。
     ★.tl-links の中に入れないこと。tools/test_days.js が .tl-place と .tl-maps の数を
       地点チップの数と突き合わせており、同じ器に別のリンクを足すと検査が壊れる（追補L-5）。 */
  const tickets = ticketsForRow(it).map(t =>
    `<a class="tl-ticket" href="#" data-goto-ticket="${esc(t.id)}"
        title="${esc(t.title)}を見る">🎫</a>`).join("");
  return `<li>
      <span class="tl-time">${when}</span>
      <span class="tl-body">${esc(it.text || "")}<span class="st-chip ${st}">${st === "confirmed" ? "確定" : "未確定"}</span>${tickets}${place}</span>
    </li>`;
}

/* 行の集まりを日ごとのカードで描く。opts.editable=true なら日ごとに「編集」ボタンを出す。 */
function scheduleCardsHtml(rows, opts = {}) {
  const groups = rowsByDay(rows);
  if (!groups.length) return `<p class="muted">予定がありません。</p>`;
  const today = todayKey();
  return groups.map(g => {
    const edit = opts.editable
      ? `<button class="plan-edit" data-edit-day="${esc(g.day)}">編集</button>` : "";
    /* ★「今日」は本命プランにだけ出す。予備プラン（過去の控え）に出すと
         どれが今日の予定なのか分からなくなる。旅行期間外は today がどの日にも
         一致しないので、何も起きない＝次の旅行にそのまま引き継げる。 */
    const isToday = opts.editable && g.day === today;
    return `<div class="plan-card featured${isToday ? " is-today" : ""}" data-day="${esc(g.day)}">
      <div class="plan-head"><h3>${esc(dayLabel(g.day))}</h3>
        ${isToday ? `<span class="tag today">今日</span>` : ""}
        <span class="tag top">${g.rows.length}件</span>${edit}</div>
      ${daySub(g.day) ? `<p class="plan-route">${esc(daySub(g.day))}</p>` : ""}
      <ol class="timeline">${g.rows.map(scheduleRowReadHtml).join("")}</ol>
    </div>`;
  }).join("");
}

/* ---- 本命プラン（= schedule そのもの） ---- */
function renderMasterPlan() {
  const box = $("#master-plan"); if (!box) return;
  /* ★編集モード中は出さない。理由は2つある。
     ・編集セクションの入力ハンドラは saveSchedule() しか呼ばない（カーソルとIME変換を
       飛ばさないため、入力のたびに再描画しない）。出したままだと本命の表示だけが取り残され、
       他端末は applyRemote で更新されるのに「編集している本人だけが古い表示を見る」ことになる
     ・隠せば、編集の操作を足すたびに renderMasterPlan() を呼ぶことを覚えておかずに済む（0-3）
     見る人ごとの表示状態なので、同行者の画面は隠れない（追補H-9）。
     隠すことで「編集を終える」がタブの先頭に来るので、編集モードの出口も分かりやすくなる。 */
  if (schedEditing) { box.innerHTML = ""; return; }
  box.innerHTML = `
    <div class="plan-section-head">
      <h3 class="sched-subhead">本命プラン</h3>
      <span class="muted">全員で共有している旅程です。変更は同行者にもすぐ反映されます</span>
    </div>
    <div class="plan-list">${scheduleCardsHtml(schedule, { editable: true })}</div>
    <div class="plan-list-tools">
      <button class="btn-ghost" id="plan-edit-all">全体を編集</button>
      <button class="btn-ghost" id="plan-backup">予備プランへ書き出す</button>
    </div>`;
  $$("#master-plan .plan-edit").forEach(b =>
    b.addEventListener("click", () => openSchedEditor(b.dataset.editDay)));
  $("#plan-edit-all").addEventListener("click", () => openSchedEditor("all"));
  $("#plan-backup").addEventListener("click", exportScheduleAsBackup);
  // 地点チップ（.tl-place）のクリックは init() の委任で拾う。本命プランと予備プランの
  // 両方が同じ行の描画関数を使うので、描くたびに配線しない

  /* 旅行中は今日のカードまで自動で送る。★初回だけ（上の todayScrolled の理由）。
     scrollIntoView は jsdom に無いのでガードする。 */
  if (!todayScrolled && DAY_KEYS.includes(todayKey())) {
    todayScrolled = true;
    const el = $("#master-plan .plan-card.is-today");
    if (el && el.scrollIntoView) el.scrollIntoView({ block: "start" });
  }
}

/* 予定行の ref から、その地点のカードタブへ移動して光らせる */
function gotoRefCard(ref) {
  const type = String(ref).split(":")[0];
  const tabOf = { spot: "spots", restaurant: "restaurants", cafe: "cafes" }[type];
  if (!tabOf) return;
  const tab = $$("#tabs .tab").find(t => t.dataset.tab === tabOf);
  if (tab) tab.click();
  setTimeout(() => gotoPlaceCard(tabOf, ref), 60);
}

/* ===== チケット・予約 =====
   ★紐づけは DATA.tickets の refs（地点）と days（日）だけが持つ。
     地点カードとスケジュール行はそれを引くだけなので、
     チケットを1件足せば関係する場所すべてに自動で出る（同じ事実を2か所に持たない。0-1）。 */
function allTickets() { return DATA.tickets || []; }
function getTicketById(id) { return allTickets().find(t => t.id === id) || null; }
/* その地点に紐づくチケット */
function ticketsFor(pid) { return allTickets().filter(t => (t.refs || []).includes(pid)); }
/* その予定行に紐づくチケット。★日と地点の両方が一致した行にだけ出す。
   refs だけで判定すると、同じ駅を指す行すべてに往路券と復路券が並んでしまう。 */
function ticketsForRow(it) {
  if (!it || !it.ref) return [];
  return allTickets().filter(t =>
    (t.refs || []).includes(it.ref) && (t.days || []).includes(normalizeDay(it.day)));
}
function gotoTicket(id) {
  const tab = $$("#tabs .tab").find(t => t.dataset.tab === "tickets");
  if (tab) tab.click();
  setTimeout(() => {
    const el = $$("#tickets-content .ticket-card").find(c => c.dataset.ticket === id);
    if (el && el.scrollIntoView) el.scrollIntoView({ block: "start", behavior: "smooth" });
    if (el) { el.classList.add("just-jumped"); setTimeout(() => el.classList.remove("just-jumped"), 1200); }
  }, 60);
}

/* ---- 予備プラン（本命から書き出した控え。ユーザー間で同期する） ---- */
function renderBackupPlans() {
  const box = $("#backup-plans"); if (!box) return;
  const rank = k => { const i = planView.order.indexOf(k); return i < 0 ? Infinity : i; };
  const list = plans.slice().map((p, i) => ({ p, i }))
    .sort((a, b) => (rank("u:" + a.p.id) - rank("u:" + b.p.id)) || (a.i - b.i)).map(x => x.p);
  const cards = list.map(p => `
    <details class="backup-plan" data-id="${p.id}">
      <summary><span class="bp-title">${esc(p.title)}</span>
        <span class="tag alt">${(p.items || []).length}件</span></summary>
      <div class="plan-actions">
        <button class="bp-restore" data-id="${p.id}">本命へ上書き</button>
        <button class="bp-copy" data-id="${p.id}">コピー</button>
        <button class="bp-del" data-id="${p.id}" aria-label="この予備プランを削除">削除</button>
      </div>
      <div class="plan-list">${scheduleCardsHtml(p.items || [])}</div>
    </details>`).join("");
  box.innerHTML = `
    <div class="plan-section-head">
      <h3 class="sched-subhead">予備プラン</h3>
      <span class="muted">本命プランの控え。同行者にも共有されます</span>
    </div>
    ${cards || '<p class="muted">まだありません。本命プランの「予備プランへ書き出す」で控えを残せます。</p>'}`;
  $$("#backup-plans .bp-restore").forEach(b => b.addEventListener("click", () => restoreBackupPlan(+b.dataset.id)));
  $$("#backup-plans .bp-copy").forEach(b => b.addEventListener("click", () => copyBackupPlan(+b.dataset.id, b)));
  $$("#backup-plans .bp-del").forEach(b => b.addEventListener("click", () => deleteBackupPlan(+b.dataset.id)));
}

/* 現在の本命プランを予備プランへ複製する。
   ★日で絞るのは「編集セクションを開いてその日を見ているとき」だけ。
     schedDayView は編集を閉じても最後の日が残るので、これを条件にすると
     全体を控えたつもりが1日ぶんだけ書き出される（静かに間違う）。 */
function exportScheduleAsBackup() {
  const scope = (schedEditing && schedEditing !== "all") ? schedEditing : null;
  const src = scope ? schedule.filter(it => normalizeDay(it.day) === scope) : schedule;
  if (!src.length) { window.alert("本命プランが空です。先に予定を入れてください。"); return; }
  const def = scope ? `${dayLabel(scope)} の控え` : `本命の控え ${plans.length + 1}`;
  const title = (window.prompt("予備プランの名前を入力してください:", def) || "").trim();
  if (!title) return;
  const id = plans.reduce((m, p) => Math.max(m, p.id || 0), 0) + 1;
  // ★行をそのまま複製する（ref・day・end を落とさない。落とすと上書き時に連動が壊れる）
  plans.push({ id, title, items: JSON.parse(JSON.stringify(src)) });
  savePlans();
  renderBackupPlans();
  window.alert(`「${title}」を予備プランに残しました。`);
}

/* 予備プランで本命プランを置き換える（★破壊的。同行者の画面にも即反映される） */
function restoreBackupPlan(id) {
  const p = plans.find(x => x.id === id); if (!p) return;
  if (!window.confirm(
      `「${p.title}」で本命プランを置き換えます。\n\n`
    + `現在の本命プラン（${schedule.length}件）は失われます。\n`
    + `同行者の画面にもすぐ反映されます。よろしいですか？`)) return;
  schedule = JSON.parse(JSON.stringify(p.items || []));
  saveSchedule();
  syncRouteFromSchedule();
  rerenderAll();
  window.alert(`本命プランを「${p.title}」に置き換えました。`);
}

function deleteBackupPlan(id) {
  const p = plans.find(x => x.id === id); if (!p) return;
  if (!window.confirm(`予備プラン「${p.title}」を削除しますか？（同行者の画面からも消えます）`)) return;
  plans = plans.filter(x => x.id !== id);
  planView.order = planView.order.filter(k => k !== "u:" + id);
  savePlanView();
  savePlans();
  renderBackupPlans();
}

/* 予備プランをテキストでコピー（LINE等に貼れる形式） */
function copyBackupPlan(id, btn) {
  const p = plans.find(x => x.id === id); if (!p) return;
  const text = `【${p.title}】\n` + rowsByDay(p.items || []).map(g =>
    `■ ${dayLabel(g.day)}\n` + g.rows.map(it => {
      const st = it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
      return `${it.time || "—"}${it.end ? "〜" + it.end : ""}  ${it.text || ""}（${st === "confirmed" ? "確定" : "未確定"}）`;
    }).join("\n")).join("\n\n");
  const done = () => { if (btn) { const o = btn.textContent; btn.textContent = "コピー済"; setTimeout(() => { btn.textContent = o; }, 1200); } };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => window.prompt("コピーしてください:", text));
  else window.prompt("コピーしてください:", text);
}

/* 当日の調整方針（DATA.branches） */
function renderSchedule() {
  renderMasterPlan();
  renderSchedEditorSection();
  renderBackupPlans();
  const box = $("#schedule-content"); if (!box) return;
  box.innerHTML = `<div class="branch-grid">${DATA.branches.map(b =>
    `<div class="branch ${esc(b.cls)}"><h4>${esc(b.title)}</h4><p>${mdBold(b.text)}</p></div>`).join("")}</div>`;
}

/* ---- 予備プラン（共有）と表示状態（この端末に保存） ---- */
const PLANS_KEY = "ise-trip-plans";
const PLANS_VERSION = 1;   // PLANS_DEFAULT を更新したら必ず +1 する
const PLANVIEW_KEY = "ise-trip-planview";
/* この旅行に最初から用意しておく予備プラン（真珠体験の施設を変える2案＋2日目の調整版）。
   ★「本命の控え」ではなく「当日どちらを採るか決めるための実行可能な別案」なので、
     コードから配る。DATA.plans のような別形式では持たない——行の形が本命と同じでないと
     ref・day・end が落ち、「本命へ上書き」でマップ連動と確定同期が壊れる（チェックリストF）。
   ★「本命へ上書き」はスケジュール全体を置き換えるので、各プランは**両日ぶん**を持つ。
     1日目だけの差し替えのつもりで書くと、2日目が消える。
   ★地点名ではなく ref（"種別:名前"）を直接持つ。実在しない ref は
     tools/test_days.js の「予備プランの ref がすべて実在する」で落ちる。 */
const PLANS_DEFAULT = [
  {
    id: 1, title: "パール美樹（御座）案｜雰囲気を最優先する",
    items: [
      {day: "2026-09-21", time: "08:40", text: "鶴橋駅で集合", status: "confirmed", ref: "spot:鶴橋駅（集合・解散）"},
      {day: "2026-09-21", time: "09:13", text: "伊勢志摩ライナー・デラックス席で鳥羽へ", status: "confirmed"},
      {day: "2026-09-21", time: "11:15", text: "鳥羽駅でレンタカー受取", status: "tentative", ref: "spot:トヨタレンタカー 鳥羽駅前店"},
      {day: "2026-09-21", time: "11:30", text: "御座方面へ移動（片道約1時間5〜15分）", status: "confirmed"},
      {day: "2026-09-21", time: "12:45", text: "パール美樹で真珠体験（完全予約制・約60分）", status: "confirmed", ref: "spot:真珠体験 パール美樹"},
      {day: "2026-09-21", time: "13:45", text: "ホテルへ移動（約1時間5〜25分）", status: "confirmed"},
      {day: "2026-09-21", time: "15:10", text: "ホテル到着・チェックイン【着いたらすぐQRで夕食枠】", status: "confirmed", ref: "spot:グランドメルキュール伊勢志摩リゾート＆スパ"},
      {day: "2026-09-21", time: "15:30", text: "ラウンジ・客室・温泉【ランチが軽いぶんラウンジのスナックで補う】", status: "confirmed"},
      {day: "2026-09-21", time: "18:30", text: "夕食ビュッフェ", status: "tentative"},
      {day: "2026-09-22", time: "07:30", text: "朝食", status: "confirmed"},
      {day: "2026-09-22", time: "10:30", text: "チェックアウト（11:00目標）", status: "confirmed", ref: "spot:グランドメルキュール伊勢志摩リゾート＆スパ"},
      {day: "2026-09-22", time: "11:15", text: "海鮮食堂はま﨑で早めの昼食", status: "tentative", ref: "restaurant:海鮮食堂はま﨑"},
      {day: "2026-09-22", time: "12:45", text: "駐車・入館", status: "confirmed", ref: "spot:鳥羽水族館 公式駐車場（A・B）"},
      {day: "2026-09-22", time: "13:30", text: "ラッコ観覧の列へ（遅くとも14:30には並ぶ）", status: "confirmed", ref: "spot:鳥羽水族館"},
      {day: "2026-09-22", time: "16:10", text: "退館・給油", status: "confirmed", ref: "spot:給油所（ENEOS セルフ鳥羽SS）"},
      {day: "2026-09-22", time: "16:50", text: "レンタカー返却", status: "confirmed", ref: "spot:トヨタレンタカー 鳥羽駅前店"},
      {day: "2026-09-22", time: "17:30", text: "丸栄で夕食", status: "tentative", ref: "restaurant:丸栄"},
      {day: "2026-09-22", time: "19:18", text: "伊勢志摩ライナーで鶴橋へ（21:12頃着）", status: "confirmed", ref: "spot:鳥羽駅"}
    ]
  },
  {
    id: 2, title: "真珠の里（越賀）案｜金具400種・自由度を取る",
    items: [
      {day: "2026-09-21", time: "08:40", text: "鶴橋駅で集合", status: "confirmed", ref: "spot:鶴橋駅（集合・解散）"},
      {day: "2026-09-21", time: "09:13", text: "伊勢志摩ライナー・デラックス席で鳥羽へ", status: "confirmed"},
      {day: "2026-09-21", time: "11:15", text: "鳥羽駅でレンタカー受取", status: "tentative", ref: "spot:トヨタレンタカー 鳥羽駅前店"},
      {day: "2026-09-21", time: "11:30", text: "あじへい磯部店などで昼食を短時間で【11:30頃に済ませる】", status: "tentative", ref: "restaurant:あじへい 磯部店"},
      {day: "2026-09-21", time: "12:10", text: "越賀方面へ移動（約1時間）", status: "confirmed"},
      {day: "2026-09-21", time: "12:30", text: "真珠の里で真珠体験【第1駐車場は急坂。不安なら第2駐車場へ】", status: "confirmed", ref: "spot:真珠工房 真珠の里"},
      {day: "2026-09-21", time: "14:00", text: "ホテルへ移動", status: "confirmed"},
      {day: "2026-09-21", time: "15:15", text: "ホテル到着・チェックイン【着いたらすぐQRで夕食枠】", status: "confirmed", ref: "spot:グランドメルキュール伊勢志摩リゾート＆スパ"},
      {day: "2026-09-21", time: "15:30", text: "ラウンジ・客室・温泉", status: "confirmed"},
      {day: "2026-09-21", time: "18:30", text: "夕食ビュッフェ", status: "tentative"},
      {day: "2026-09-22", time: "07:30", text: "朝食", status: "confirmed"},
      {day: "2026-09-22", time: "10:30", text: "チェックアウト（11:00目標）", status: "confirmed", ref: "spot:グランドメルキュール伊勢志摩リゾート＆スパ"},
      {day: "2026-09-22", time: "11:15", text: "海鮮食堂はま﨑で早めの昼食", status: "tentative", ref: "restaurant:海鮮食堂はま﨑"},
      {day: "2026-09-22", time: "12:45", text: "駐車・入館", status: "confirmed", ref: "spot:鳥羽水族館 公式駐車場（A・B）"},
      {day: "2026-09-22", time: "13:30", text: "ラッコ観覧の列へ（遅くとも14:30には並ぶ）", status: "confirmed", ref: "spot:鳥羽水族館"},
      {day: "2026-09-22", time: "16:10", text: "退館・給油", status: "confirmed", ref: "spot:給油所（ENEOS セルフ鳥羽SS）"},
      {day: "2026-09-22", time: "16:50", text: "レンタカー返却", status: "confirmed", ref: "spot:トヨタレンタカー 鳥羽駅前店"},
      {day: "2026-09-22", time: "17:30", text: "丸栄で夕食", status: "tentative", ref: "restaurant:丸栄"},
      {day: "2026-09-22", time: "19:18", text: "伊勢志摩ライナーで鶴橋へ（21:12頃着）", status: "confirmed", ref: "spot:鳥羽駅"}
    ]
  },
  {
    id: 3, title: "ラッコの列が長い・展示中止のときの2日目調整版",
    items: [
      {day: "2026-09-21", time: "08:40", text: "鶴橋駅で集合", status: "confirmed", ref: "spot:鶴橋駅（集合・解散）"},
      {day: "2026-09-21", time: "09:13", text: "伊勢志摩ライナー・デラックス席で鳥羽へ", status: "confirmed"},
      {day: "2026-09-21", time: "11:15", text: "鳥羽駅でレンタカー受取", status: "tentative", ref: "spot:トヨタレンタカー 鳥羽駅前店"},
      {day: "2026-09-21", time: "12:00", text: "二見で現地ランチ", status: "tentative", ref: "restaurant:日本料理 さらさ廣"},
      {day: "2026-09-21", time: "13:30", text: "三重県真珠で真珠取り出し体験", status: "confirmed", ref: "spot:三重県真珠（MIEKEN PEARL）"},
      {day: "2026-09-21", time: "15:00", text: "ホテル到着・チェックイン【着いたらすぐQRで夕食枠】", status: "confirmed", ref: "spot:グランドメルキュール伊勢志摩リゾート＆スパ"},
      {day: "2026-09-21", time: "18:30", text: "夕食ビュッフェ", status: "tentative"},
      {day: "2026-09-22", time: "07:30", text: "朝食", status: "confirmed"},
      {day: "2026-09-22", time: "10:30", text: "チェックアウト（11:00目標）", status: "confirmed", ref: "spot:グランドメルキュール伊勢志摩リゾート＆スパ"},
      {day: "2026-09-22", time: "11:15", text: "あじへい磯部店で時間の読める昼食【待ちを作らない】", status: "tentative", ref: "restaurant:あじへい 磯部店"},
      {day: "2026-09-22", time: "12:30", text: "駐車・入館【早めに入って列の状況を見る】", status: "confirmed", ref: "spot:鳥羽水族館 公式駐車場（A・B）"},
      {day: "2026-09-22", time: "13:00", text: "ラッコ列の待ち時間を確認。中止ならジュゴン・セイウチ・アシカへ切替", status: "confirmed", ref: "spot:鳥羽水族館"},
      {day: "2026-09-22", time: "15:30", text: "早めに退館。土産は鳥羽1番街で（17:30閉店）", status: "tentative", ref: "spot:鳥羽1番街"},
      {day: "2026-09-22", time: "16:00", text: "給油", status: "confirmed", ref: "spot:給油所（ENEOS セルフ鳥羽SS）"},
      {day: "2026-09-22", time: "16:30", text: "レンタカー返却", status: "confirmed", ref: "spot:トヨタレンタカー 鳥羽駅前店"},
      {day: "2026-09-22", time: "17:30", text: "丸栄で夕食をゆっくり", status: "tentative", ref: "restaurant:丸栄"},
      {day: "2026-09-22", time: "19:18", text: "伊勢志摩ライナーで鶴橋へ（21:12頃着）", status: "confirmed", ref: "spot:鳥羽駅"}
    ]
  }
];

function loadPlans() {
  // ★保存バージョンが現行と一致するときだけ端末の控えを使う（schedule / info と同じ作法）。
  //   これが無いと PLANS_DEFAULT を直しても既存の端末には永久に届かず、
  //   どの端末が最初に同期したかで DB の中身が変わる。
  try { const s = JSON.parse(localStorage.getItem(PLANS_KEY)); if (s && s.v === PLANS_VERSION && Array.isArray(s.items)) return s.items; } catch (e) {}
  // ★初回はコードの既定を配る（[] にすると当日の切替先が無くなる）
  return JSON.parse(JSON.stringify(PLANS_DEFAULT));
}
function savePlans() { localStorage.setItem(PLANS_KEY, JSON.stringify({ v: PLANS_VERSION, items: plans })); fbPush("plans", plans); }
/* 予備プランの並び順だけ端末に持つ（見る人ごとの表示状態。同期しない。追補H-9） */
function loadPlanView() {
  try { const s = JSON.parse(localStorage.getItem(PLANVIEW_KEY)); if (s && typeof s === "object") return { order: Array.isArray(s.order) ? s.order : [] }; } catch (e) {}
  return { order: [] };
}
function savePlanView() { localStorage.setItem(PLANVIEW_KEY, JSON.stringify(planView)); }
let plans = loadPlans();
let planView = loadPlanView();

/* ---- 編集できるスケジュール（ドラッグ並び替え・時刻入力・確定切替・localStorage保存） ----
   ★共有の初期表示（A仕様）: 下の SCHED_DEFAULT が「全員に配られる初期スケジュール」。
     並びを確定したら「共有用に書き出す」ボタンの出力を SCHED_DEFAULT に貼り替え、
     必ず SCHED_VERSION を +1 して commit すること。
     → 各端末は保存済みバージョンが古いと自動で新しい初期表示に更新される。

   ★4泊5日対応（この旅行で追加）: 各行が day（YYYY-MM-DD）を持つ。
     schedule は全日ぶんを1本の配列で保持し、
       ・「全体」サブタブ … 日付見出し行を挟んで全件を表示
       ・日別サブタブ    … その日の行だけを表示
     と描き分ける。データが1本なので、どちらで編集しても即座に他方へ反映される。
     全体タブで行を別の日の見出しの下へドラッグすると、その行の day が入れ替わる。 */
const SCHED_KEY = "ise-trip-schedule";
const SCHED_VERSION = 2;   // SCHED_DEFAULT を更新したら必ず +1 する

/* この旅行の日付。key は day の値、label はサブタブと見出しの表記。
   ★日帰りでも配列は残す。TRIP_DAYS.length === 1 のときは <body> に day-single が付き、
     日サブタブとマップの「日」フィルタが CSS で隠れる（DOM と配線はそのまま残るので、
     次に複数日の旅行が来たらここに行を足すだけで復活する。追補K・T）。 */
const TRIP_DAYS = [
  { key: "2026-09-21", label: "9/21（月・祝）", sub: "鶴橋9:13発 ─ 二見ランチ → 真珠体験 → ホテル15時" },
  { key: "2026-09-22", label: "9/22（火・祝）", sub: "11時チェックアウト ─ 早い昼食 → 鳥羽水族館 → 鳥羽19:18発" },
];
const DAY_KEYS = TRIP_DAYS.map(d => d.key);
const FIRST_DAY = DAY_KEYS[0];
function dayLabel(key) { const d = TRIP_DAYS.find(x => x.key === key); return d ? d.label : key; }
function daySub(key) { const d = TRIP_DAYS.find(x => x.key === key); return d ? d.sub : ""; }
/* 不正・未設定の day は初日に寄せる（古い保存データや手編集への保険） */
function normalizeDay(d) { return DAY_KEYS.includes(d) ? d : FIRST_DAY; }

/* 端末のローカル日付を "YYYY-MM-DD" で返す（TRIP_DAYS の key と同じ形）。
   ★toISOString() を使わないこと。UTCに変換されるため、日本時間の 0:00〜8:59 は
     前日の日付になり、朝いちばんに開くと「今日」が昨日の予定を指す。 */
function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
/* 今日のカードへ自動スクロールしたか。★保存しない（見る人ごとの状態）。
   rerenderAll() は同期を受け取るたびに走るので、初回だけにしないと
   同行者が編集するたびに読んでいる場所が飛ぶ。 */
let todayScrolled = false;

// ref: 地点カードの placeId（"種別:名前"）。付けるとカード/マップと確定状態・並び順が連動する。
// ★既定は資料の仮タイムスケジュール（三重県真珠 13:30 案）。真珠体験を別施設にするときは
//   スケジュールタブ下部の予備プランの「本命へ上書き」を押す（追補M）。
// ★1日目の鶴橋には ref を付け、2日目の復路（鶴橋着）には付けない。
//   同じ地点を同じ日に2回 ref すると経由地が増えるだけで、ナビの順序は変わらないため。
// ★Googleマップの経由地は9件が上限。ref を付けるのは「車で実際に立ち寄る地点」だけにする
//   （鳥羽1番街のような徒歩の寄り道には付けない）。
const SCHED_DEFAULT = [
  { day: "2026-09-21", time: "09:00", text: "鶴橋駅で集合。飲み物を買って9:13発に余裕をもって乗る【チケットレスの画面は2人とも出せるように】", status: "confirmed", ref: "spot:鶴橋駅（集合・解散）" },
  { day: "2026-09-21", time: "09:13", end: "11:08", text: "伊勢志摩ライナー・デラックス席で鳥羽へ（約1時間55分）", status: "confirmed" },
  { day: "2026-09-21", time: "11:08", end: "11:15", text: "鳥羽駅 到着。駅前のトヨタレンタカーへ", status: "confirmed", ref: "spot:鳥羽駅" },
  { day: "2026-09-21", time: "11:15", end: "11:30", text: "レンタカー受取【予約は11:00開始。事前に遅着連絡か11:30開始へ変更しておく。給油所も聞いておく】", status: "tentative", ref: "spot:トヨタレンタカー 鳥羽駅前店" },
  { day: "2026-09-21", time: "11:30", end: "11:55", text: "二見エリアへ移動【鳥羽中心部と内宮方面は通らない。9/20〜22は伊勢IC等に出口規制】", status: "confirmed" },
  { day: "2026-09-21", time: "12:00", end: "12:55", text: "二見で現地ランチ（第一候補：さらさ廣。待つなら maruru cafe へ即切替）", status: "tentative", ref: "restaurant:日本料理 さらさ廣" },
  { day: "2026-09-21", time: "12:55", end: "13:20", text: "真珠施設へ移動・受付。早着して体験内容と金具を確認する", status: "confirmed" },
  { day: "2026-09-21", time: "13:30", end: "14:10", text: "アコヤ貝の真珠取り出し体験【取り出し約20分・加工込み30〜45分。押していれば加工せず持ち帰る】", status: "confirmed", ref: "spot:三重県真珠（MIEKEN PEARL）" },
  { day: "2026-09-21", time: "14:10", end: "15:05", text: "ホテルへ移動【連休の道路状況により15:15頃まで許容】", status: "confirmed" },
  { day: "2026-09-21", time: "15:00", end: "15:20", text: "ホテル到着・チェックイン【★到着後すぐ専用QRで夕食枠を予約する。これが最優先】", status: "confirmed", ref: "spot:グランドメルキュール伊勢志摩リゾート＆スパ" },
  { day: "2026-09-21", time: "15:20", end: "17:30", text: "ラウンジ（イブニングソーシャル15:00〜18:00）・客室・温泉でゆっくり", status: "confirmed" },
  { day: "2026-09-21", time: "18:30", end: "20:00", text: "夕食ビュッフェ（第一案は18:30枠）【ナイトバブル19:00〜20:00を優先するなら20:00枠へ】", status: "tentative" },
  { day: "2026-09-21", time: "20:00", text: "温泉・ナイトキャップ・客室で休憩【予定を追加しない】", status: "confirmed" },

  { day: "2026-09-22", time: "07:30", end: "08:30", text: "朝食【7:00〜9:30・最終入場9:00。混雑を避けるなら7:15〜7:30開始も】", status: "confirmed" },
  { day: "2026-09-22", time: "08:30", end: "10:30", text: "朝風呂（大浴場6:00〜10:00・最終9:30）・休憩・荷造り", status: "confirmed" },
  { day: "2026-09-22", time: "10:30", end: "11:00", text: "最終準備・チェックアウト【11:00を目標。急がずここまで滞在する】", status: "confirmed", ref: "spot:グランドメルキュール伊勢志摩リゾート＆スパ" },
  { day: "2026-09-22", time: "11:15", end: "12:05", text: "早めの昼食（第一案：海鮮食堂はま﨑・磯部）【駐車5台。混んでいたらあじへいへ】", status: "tentative", ref: "restaurant:海鮮食堂はま﨑" },
  { day: "2026-09-22", time: "12:05", end: "12:45", text: "鳥羽水族館方面へ移動【連休の進入・駐車待ちを含めて余裕を見る】", status: "confirmed" },
  { day: "2026-09-22", time: "12:45", end: "13:10", text: "駐車・入館【公式A・Bを優先。満車なら周回せず駅西・佐田浜へ即切替】", status: "confirmed", ref: "spot:鳥羽水族館 公式駐車場（A・B）" },
  { day: "2026-09-22", time: "13:10", end: "13:30", text: "トイレ・飲み物・待ち時間の確認【★2人そろってから列に入る。途中合流は不可】", status: "confirmed", ref: "spot:鳥羽水族館" },
  { day: "2026-09-22", time: "13:30", end: "14:30", text: "ラッコ観覧の列に並ぶ【13:00のお食事タイム直後のピークが落ち着く時間。遅くとも14:30には並ぶ】", status: "confirmed" },
  { day: "2026-09-22", time: "14:40", end: "16:10", text: "館内を選択的に見学（ジュゴン・セイウチ・アシカ）【全展示の制覇は目指さない】", status: "tentative" },
  { day: "2026-09-22", time: "16:10", end: "16:40", text: "退館・給油へ【ラッコ列の遅れにより最大16:40頃まで】", status: "confirmed", ref: "spot:給油所（ENEOS セルフ鳥羽SS）" },
  { day: "2026-09-22", time: "16:50", end: "17:10", text: "レンタカー返却【予約は19:00までだが、駅前の夕食のため早めに返す】", status: "confirmed", ref: "spot:トヨタレンタカー 鳥羽駅前店" },
  { day: "2026-09-22", time: "17:30", end: "18:35", text: "鳥羽駅前で夕食（第一候補：丸栄・要予約）【19:30閉店なので17:30に入る】", status: "tentative", ref: "restaurant:丸栄" },
  { day: "2026-09-22", time: "18:35", end: "19:05", text: "駅へ戻る・飲み物・乗車準備【⚠️鳥羽1番街は17:30に閉まる。土産は夕食の前に】", status: "confirmed", ref: "spot:鳥羽駅" },
  { day: "2026-09-22", time: "19:18", end: "21:12", text: "伊勢志摩ライナー・デラックス席で鶴橋へ（21:12頃着・解散）", status: "confirmed" }
];
let schedule = loadSchedule();
function loadSchedule() {
  try {
    const raw = JSON.parse(localStorage.getItem(SCHED_KEY));
    // 保存バージョンが現行と一致する場合のみローカル編集を採用。
    // 古い／無い場合は新しい共有初期表示(SCHED_DEFAULT)に更新する。
    if (raw && raw.v === SCHED_VERSION && Array.isArray(raw.items)) {
      return raw.items.map(x => ({ ...x, day: normalizeDay(x.day) }));
    }
  } catch (e) {}
  return SCHED_DEFAULT.map(x => ({ ...x }));
}
function saveSchedule() { localStorage.setItem(SCHED_KEY, JSON.stringify({ v: SCHED_VERSION, items: schedule })); fbPush("schedule", schedule); }

/* 表示中のサブタブ。"all" = 全体、それ以外は TRIP_DAYS の key。
   ★端末ごとの一時的な表示状態なので localStorage にも Firebase にも保存しない
     （同行者の画面まで勝手に切り替わると事故になる。絞り込みと同じ方針） */
let schedDayView = "all";

/* 編集モード。null = 編集していない（＝編集セクションを描かない）。
   ★「隠す」ではなく「描かない」。display:none にしても SortableJS は生きたままで、
     スマホのスクロール中の誤タップで予定が入れ替わる事故が実際に起きていた。
     端末ごとの状態なので保存しない（追補H-9）。 */
let schedEditing = null;

/* 編集モードで地図を開いているか。★既定は閉じている。
   スマホでは編集画面がごちゃつくと予定そのものが読めなくなるので、
   地図は「見たい人が開くもの」にしてある。開いた地図は借り物で、
   置き場所は syncMapDock() が決める（この変数は「開きたいか」だけを持つ）。
   ★schedDayView と同じく端末ローカル。保存も同期もしない（追補H-9）。 */
let schedMapOpen = false;

// 候補名から予定行を作る。地点カードに一致すれば ref を付け、確定状態を引き継ぐ。
// day は「いま見ているサブタブの日」。全体タブから足したときは初日に入る。
function schedItemFromName(name, day) {
  const ref = placeIdByName(name) || undefined;
  return { day: normalizeDay(day || (schedDayView === "all" ? FIRST_DAY : schedDayView)),
           time: "", text: name, status: ref ? getStatus(ref) : "tentative", ref };
}
// スケジュールの地点項目（ref）の並び順を、マップのルートに反映する（片方向連動）
// ★全日ぶんをまとめて1本のルートにする。日ごとの絞り込みはマップの「日」フィルタで行う。
/* スケジュールの並び順から作るルート（副作用なし）。★routeIds の唯一の作り手。 */
function routeFromSchedule() {
  const seen = new Set(), out = [];
  schedule.forEach(it => {
    if (it.ref && getPlaceById(it.ref) && !seen.has(it.ref)) { seen.add(it.ref); out.push(it.ref); }
  });
  return out;
}
/* スケジュールを編集したあとに呼ぶ。保存はしない（導出値なので） */
function syncRouteFromSchedule() {
  routeIds = routeFromSchedule();
  if ($("#route-list")) renderRouteEditor();
  if (typeof map !== "undefined" && map) { refreshMarkers(); drawRouteLine(); applyFilters(); }
}
/* 地点id → その地点が入っている日の集合（マップの「日」フィルタ用） */
function daysOfPlace(id) {
  const s = new Set();
  schedule.forEach(it => { if (it.ref === id) s.add(normalizeDay(it.day)); });
  return s;
}

/* 現在の並びを SCHED_DEFAULT 用のコード片として書き出す（A仕様の更新を簡単に） */
function exportSchedule() {
  // ① スケジュール（day/ref付き。status は連動項目なら共通ステートの現状を出力）
  const lines = schedule.map(it => {
    const st = it.ref ? getStatus(it.ref) : (it.status || "tentative");
    const parts = [`day: ${JSON.stringify(normalizeDay(it.day))}`, `time: ${JSON.stringify(it.time || "")}`,
                   `text: ${JSON.stringify(it.text || "")}`, `status: ${JSON.stringify(st)}`];
    if (it.end !== undefined && it.end !== null) parts.push(`end: ${JSON.stringify(it.end)}`);
    if (it.ref) parts.push(`ref: ${JSON.stringify(it.ref)}`);
    return `  { ${parts.join(", ")} }`;
  }).join(",\n");
  const schedOut = `const SCHED_DEFAULT = [\n${lines}\n];`;
  // ② 確定/未確定の状態（カード・マップ・スケジュールで変更した分を全員へ）
  const statusLines = Object.keys(statusMap).sort().map(id =>
    `  ${JSON.stringify(id)}: ${JSON.stringify(getStatus(id))}`
  ).join(",\n");
  const statusOut = `const STATUS_DEFAULT = {\n${statusLines}\n};`;
  const out =
    `/* ① app.js の SCHED_DEFAULT に貼り替え、SCHED_VERSION を +1 */\n${schedOut}\n\n` +
    `/* ② app.js の STATUS_DEFAULT に貼り替え、STATUS_VERSION を +1 */\n${statusOut}`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("下記を app.js に貼り替え、SCHED_VERSION と STATUS_VERSION をそれぞれ +1 して commit すると、並び順・確定状態が全員に反映されます（クリップボードにもコピー済み）:", out);
}

/* 1行ぶんのHTML。i は schedule 配列の実インデックス（日別表示でも実インデックスを渡す） */
function schedRowHtml(it, i) {
  // 効果的な確定状態: refがあれば共通ステート、なければ項目ローカルの status
  const st = it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
  const linked = it.ref ? ` <span class="sched-linked" title="地点カード・マップと連動">📍</span>` : "";
  // 終了時間はオプション。未設定なら「＋終了」ボタン、設定済みなら「〜 終了時刻 ×」
  const endUi = (it.end === undefined || it.end === null)
    ? `<button class="sched-addend" data-i="${i}" title="終了時間を追加">＋終了</button>`
    : `<span class="sched-tilde">〜</span><input class="sched-endtime" type="time" value="${esc(it.end)}" data-i="${i}" aria-label="終了時刻"><button class="sched-rmend" data-i="${i}" title="終了時間を消す">×</button>`;
  // ★時刻と終了UIは .sched-when でひとまとめにする。
  //   「＋終了」1個の行と「〜 終了時刻 ×」3個の行で幅が変わると、
  //   そのぶん右の「予定」の左端が行ごとにズレて縦に読みにくくなるため。
  return `
      <li class="sched-item ${st}" data-i="${i}" data-day="${esc(normalizeDay(it.day))}">
        <span class="sched-handle" aria-label="ドラッグして並び替え" title="ドラッグで並び替え">≡</span>
        <span class="sched-when">
          <input class="sched-time" type="time" value="${esc(it.time || "")}" data-i="${i}" aria-label="開始時刻">${endUi}
        </span>
        <span class="sched-ctrl">${linked}
          <button class="sched-status st-chip ${st}" data-i="${i}" title="確定／未確定を切替${it.ref ? "（カード・マップと連動）" : ""}">${STATUS_LABEL[st]}</button>
          <button class="sched-rm" data-i="${i}" aria-label="この行を削除">✕</button>
        </span>
        <input class="sched-text" type="text" value="${esc(it.text || "")}" data-i="${i}" placeholder="予定を入力" aria-label="予定">
        <select class="sched-ref" data-i="${i}" aria-label="紐づける地点">${placeOptionsHtml("📍 地点なし", it.ref || "")}</select>
      </li>`;
}

/* ===== 編集セクションの組み立て・撤去 =====
   ★編集モードでないときは DOM ごと作らない。隠すだけでは SortableJS が生き残り、
     スマホのスクロール中の誤タップで予定が入れ替わる（実際に頻発していた）。 */
function openSchedEditor(day) {
  schedEditing = day || "all";
  schedDayView = schedEditing;
  renderMasterPlan();          // 編集中の日を示すため描き直す
  renderSchedEditorSection();
  const host = $("#sched-editor-host");
  if (host && host.scrollIntoView) host.scrollIntoView({ behavior: "smooth", block: "start" });
}
function closeSchedEditor() {
  schedEditing = null;
  schedDayView = "all";        // 次に開いたとき前回の日が残らないようにする
  renderSchedEditorSection();  // ここで DOM ごと消える＝Sortable も一緒に捨てられる
  renderMasterPlan();
  renderBackupPlans();
}
function renderSchedEditorSection() {
  const host = $("#sched-editor-host"); if (!host) return;
  /* ★innerHTML を書く前に、借りている地図を必ず家へ返す。
     下の2つの分岐はどちらも host.innerHTML を書き換えるので、分岐より前に置くこと。
     ここを飛ばすと Leaflet のコンテナごと捨てられ、地図が二度と戻らない。
     tools/test_days.js「16. 地図の間借り」がこの順序をソースでも固定している。 */
  undockMap();
  if (!schedEditing) {
    // ★空にすると、Sortable が握っていた要素ごと GC される。フラグも戻す
    host.innerHTML = "";
    schedSortInit = false;
    return;
  }
  host.innerHTML = `
    <div class="sched-editor is-editing${schedMapOpen ? " with-map" : ""}">
      <div class="sched-edit-head">
        <h3 class="sched-subhead">編集中${schedEditing === "all" ? "（全体）" : `（${esc(dayLabel(schedEditing))}）`}</h3>
        <button class="btn-primary sched-done">編集を終える</button>
      </div>
      <p class="sched-hint muted">変更は<strong>入力した時点で同行者にも反映</strong>されます（保存ボタンはありません）。「編集を終える」で読みやすい表示に戻ります。</p>
      <div class="sched-legend">
        <span class="st-chip confirmed">確定</span><span>タップで未確定に切り替わります</span>
        <span class="st-chip tentative">未確定</span><span>地点に紐づく行（📍）はカード・マップとも連動します</span>
      </div>
      <div class="sched-day-tabs" id="sched-day-tabs" aria-label="日の切替"></div>
      <!-- ★地図は既定でたたんである。開いたときだけ #map-dock が #sched-map-slot へ引っ越す。
           スロットは .sched-cols の直下＝タイムスケジュールと横に並ぶ位置に置く。
           ・#sched-candidates の中には入れない（renderSchedCandidates() の innerHTML で地図ごと消える）
           ・広い画面で予定一覧の真横に来るので、ドラッグの距離が短く、両方が同時に見える -->
      <div class="sched-map-bar">
        <button class="btn-ghost sched-map-toggle" id="sched-map-toggle" aria-expanded="${schedMapOpen ? "true" : "false"}" aria-controls="sched-map-slot">${schedMapOpen ? "🗺 地図を閉じる" : "🗺 地図で選ぶ"}</button>
        <span class="muted sched-map-hint">${schedMapOpen ? "ピンをつまんで予定へドラッグ（パソコン）。<strong>行と行の間に落とすと新しい予定が入り、行の真ん中に落とすとその予定にその地点が紐づきます</strong>。スマホではピンをタップして「＋ スケジュールに追加」。" : "地図で位置関係を見ながら予定に足せます"}</span>
      </div>
      <div class="sched-cols${schedMapOpen ? " with-map" : ""}">
        <div id="sched-map-slot"${schedMapOpen ? "" : " hidden"}></div>
        <div class="sched-col">
          <h4 class="sched-col-h">タイムスケジュール <span class="muted">ドラッグ並び替え・時刻入力・確定切替</span></h4>
          <ol class="sched-list" id="sched-list"></ol>
          <div class="sched-toolbar">
            <select id="sched-add-place" class="sched-select"><option value="">＋ 候補から追加…</option></select>
            <button class="btn-ghost" id="sched-add-row">＋ 空の行</button>
            <button class="btn-ghost" id="sched-reset">おすすめ順に戻す</button>
            <button class="btn-ghost" id="sched-clear">空にする</button>
            <button class="btn-ghost" id="sched-export">開発者向け：初期表示を書き出す</button>
          </div>
          <p class="sched-hint muted">行はドラッグで並べ替えられます。<strong>「おすすめ順に戻す」で本命プラン（伊根集中）の初期状態に戻せます。</strong>時刻・本文の変更は入力した時点で同行者にも反映されます（保存ボタンはありません）。</p>
        </div>
        <div class="sched-col">
          <h4 class="sched-col-h">候補リスト <span class="muted">ドラッグ or ⊕ で左へ追加</span></h4>
          <div class="sched-cand-tabs" id="sched-cand-tabs">
            <button class="sched-cand-tab active" data-filter="all">すべて</button>
            <button class="sched-cand-tab" data-filter="spots">🌿 スポット</button>
            <button class="sched-cand-tab" data-filter="restaurants">🍽 レストラン</button>
            <button class="sched-cand-tab" data-filter="cafes">☕ カフェ</button>
          </div>
          <ul class="sched-cand-list" id="sched-candidates"></ul>
        </div>
      </div>
      <div class="sched-edit-foot">
        <button class="btn-primary sched-done">編集を終える</button>
      </div>
    </div>`;
  // 中身を作ってから配線する（毎回作り直すので addEventListener の重複は起きない）
  renderSchedDayTabs();
  renderScheduleEditor();
  renderSchedCandidates();
  setupSchedCandTabs();
  setupSchedMapToggle();
  populateSchedAddSelect();
  schedSortInit = false;       // 新しい DOM に対して張り直す
  setupScheduleSortable();
  wireSchedToolbar();
  // 編集セクションは縦に長いので、出口は先頭と末尾の2か所に置く
  $$(".sched-done").forEach(b => b.addEventListener("click", closeSchedEditor));
  /* 行にポインタを乗せると、その地点のピンが目立つ（地図を開いているときの道しるべ）。
     ★行は data-i しか持たない。ref を data 属性に写すと同じ事実が2か所になるので、
       schedule から引く（0-1）。 */
  const list = $("#sched-list");
  if (list) {
    list.addEventListener("pointerover", e => {
      const row = e.target && e.target.closest && e.target.closest(".sched-item");
      const it = row ? schedule[+row.dataset.i] : null;
      focusPin(it && it.ref);
    });
    list.addEventListener("pointerleave", () => focusPin(null));
  }
  // ★最後に地図の置き場所を決め直す。開いていれば、いま作ったスロットへ入れ直す
  syncMapDock();
}

/* 「地図で選ぶ」の開閉。★開閉そのものはこの関数が持たず、schedMapOpen を変えて
   syncMapDock() に判断させる。ボタンの見た目は再描画で作り直す（状態は1か所）。 */
function setupSchedMapToggle() {
  const btn = $("#sched-map-toggle"); if (!btn) return;
  btn.addEventListener("click", () => {
    schedMapOpen = !schedMapOpen;
    renderSchedEditorSection();
    if (schedMapOpen) {
      const slot = $("#sched-map-slot");
      if (slot && slot.scrollIntoView) slot.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

/* 編集セクションのツールバー。★日別タブを開いているときはその日だけに効く（追補K-4） */
function wireSchedToolbar() {
  $("#sched-add-row").addEventListener("click", () => {
    const day = schedDayView === "all" ? FIRST_DAY : schedDayView;
    insertSchedItem({ day, time: "", text: "", status: "tentative" });
  });
  $("#sched-reset").addEventListener("click", () => {
    if (schedDayView === "all") {
      schedule = SCHED_DEFAULT.map(x => ({ ...x }));
    } else {
      const others = schedule.filter(it => normalizeDay(it.day) !== schedDayView);
      const restored = SCHED_DEFAULT.filter(x => x.day === schedDayView).map(x => ({ ...x }));
      // 元の日付順を保つため、日付キーで並べ直す
      schedule = others.concat(restored).sort((a, b) => DAY_KEYS.indexOf(normalizeDay(a.day)) - DAY_KEYS.indexOf(normalizeDay(b.day)));
    }
    saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor(); renderMasterPlan();
  });
  $("#sched-clear").addEventListener("click", () => {
    const what = schedDayView === "all" ? "すべての予定" : `${dayLabel(schedDayView)}の予定`;
    if (!confirm(`${what}を消しますか？（同行者の端末にも反映されます）`)) return;
    schedule = schedDayView === "all" ? [] : schedule.filter(it => normalizeDay(it.day) !== schedDayView);
    saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor(); renderMasterPlan();
  });
  /* ★開発者向け。押すと SCHED_DEFAULT に貼るコードが prompt で出る。
     同行者には意味が分からないので、読むモードには置かず編集セクションの中だけに出す。 */
  $("#sched-export").addEventListener("click", exportSchedule);
}

function renderScheduleEditor() {
  const list = $("#sched-list");
  if (!list) return;
  const viewing = schedDayView;                       // "all" or 日付キー
  // 実インデックスを保ったまま、表示対象だけを抜き出す
  const rows = schedule.map((it, i) => ({ it, i }))
                       .filter(r => viewing === "all" || normalizeDay(r.it.day) === viewing);

  if (!rows.length) {
    const where = viewing === "all" ? "" : `${dayLabel(viewing)}の`;
    list.innerHTML = `<li class="sched-empty">${where}予定がありません。「＋ 空の行」や「候補から追加」で作成できます。</li>`;
  } else if (viewing === "all") {
    // 全体表示: 日付見出し行を挟む。見出しは .sched-item ではないのでドラッグ対象にならない
    let html = "", cur = null;
    rows.forEach(({ it, i }) => {
      const d = normalizeDay(it.day);
      if (d !== cur) {
        cur = d;
        html += `<li class="sched-day-head" data-day="${esc(d)}">
          <span class="sched-day-rule"></span>
          <span class="sched-day-name">${esc(dayLabel(d))}</span>
          <span class="sched-day-sub">${esc(daySub(d))}</span>
          <span class="sched-day-rule"></span>
        </li>`;
      }
      html += schedRowHtml(it, i);
    });
    list.innerHTML = html;
  } else {
    list.innerHTML = rows.map(({ it, i }) => schedRowHtml(it, i)).join("");
  }

  // 入力・操作イベント（textはinputで都度保存、フォーカス維持のため再描画しない）
  $$("#sched-list .sched-time").forEach(el => el.addEventListener("change", e => { schedule[+e.currentTarget.dataset.i].time = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-endtime").forEach(el => el.addEventListener("change", e => { schedule[+e.currentTarget.dataset.i].end = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-addend").forEach(el => el.addEventListener("click", e => { schedule[+e.currentTarget.dataset.i].end = ""; saveSchedule(); renderScheduleEditor(); }));
  $$("#sched-list .sched-rmend").forEach(el => el.addEventListener("click", e => { delete schedule[+e.currentTarget.dataset.i].end; saveSchedule(); renderScheduleEditor(); }));
  $$("#sched-list .sched-text").forEach(el => el.addEventListener("input", e => { schedule[+e.currentTarget.dataset.i].text = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-status").forEach(el => el.addEventListener("click", e => {
    const it = schedule[+e.currentTarget.dataset.i];
    if (it.ref) { toggleStatus(it.ref); }   // 連動: 共通ステート更新 → rerenderStatus が全タブ再描画
    else { it.status = it.status === "confirmed" ? "tentative" : "confirmed"; saveSchedule(); renderScheduleEditor(); }
  }));
  $$("#sched-list .sched-rm").forEach(el => el.addEventListener("click", e => {
    schedule.splice(+e.currentTarget.dataset.i, 1); saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
  }));
  // 地点の紐づけ。★ここを変えるとマップのピン順（ルート）と確定状態の出どころが変わる
  $$("#sched-list .sched-ref").forEach(el => el.addEventListener("change", e => {
    setSchedRef(+e.currentTarget.dataset.i, e.currentTarget.value);
  }));
  updateSchedDayCounts();
}

/* 日別サブタブ（全体／8/8…8/12）。件数バッジ付き */
function renderSchedDayTabs() {
  const bar = $("#sched-day-tabs"); if (!bar) return;
  const btn = (key, label, sub) =>
    `<button class="sched-day-tab${schedDayView === key ? " active" : ""}" data-day="${esc(key)}"${sub ? ` title="${esc(sub)}"` : ""}>${esc(label)}<span class="chip-n" data-count="${esc(key)}"></span></button>`;
  bar.innerHTML = btn("all", "全体") + TRIP_DAYS.map(d => btn(d.key, d.label, d.sub)).join("");
  $$(".sched-day-tab", bar).forEach(t => t.addEventListener("click", () => {
    schedDayView = t.dataset.day;
    renderSchedDayTabs();
    renderScheduleEditor();
  }));
  updateSchedDayCounts();
}
function updateSchedDayCounts() {
  $$("#sched-day-tabs .chip-n").forEach(el => {
    const k = el.dataset.count;
    el.textContent = k === "all" ? schedule.length : schedule.filter(it => normalizeDay(it.day) === k).length;
  });
}

/* ===== 地点プルダウンの中身 =====
   ★グループ分けには カードの絞り込みと同じ SPOT_GROUPS / GENRE_GROUPS を使う。
     語彙を2か所に持たない（0-1）ので、区分を直せば絞り込みと選択の両方に効く。
     種類（スポット/レストラン/カフェ）の3つだけで分けるとスポットが25件の一かたまりになり、
     スマホのピッカーで探せない。区分で分けると最大6件になる。 */
function placeOptionGroups() {
  const out = [];
  const push = (label, xs) => { if (xs.length) out.push([label, xs]); };
  SPOT_GROUPS.forEach(([k, label]) =>
    push(label, DATA.spots.filter(p => (p.spotKey || "other") === k).map(p => ({ p, type: "spot" }))));
  const eats = [...DATA.restaurants.map(p => ({ p, type: "restaurant" })),
                ...DATA.cafes.map(p => ({ p, type: "cafe" }))];
  GENRE_GROUPS.forEach(([k, label]) =>
    push(label, eats.filter(x => (x.p.genreKey || "other") === k)));
  // ★区分キーが付いていない地点を必ず拾う。落とすとその地点だけ紐づけられなくなり、
  //   しかもエラーが出ない（このプロジェクトで繰り返し起きた「静かに消える」型）。
  const listed = new Set(out.flatMap(([, xs]) => xs.map(x => placeId(x.type, x.p.name))));
  push("― 区分なし（キーの付け忘れ）―",
       allPlaces().filter(p => !listed.has(placeId(p.type, p.name))).map(p => ({ p, type: p.type })));
  return out;
}
/* <select> の中身（先頭の空項目＋optgroup 群）。値は地点id。
   ★行の紐づけプルダウンと「＋ 候補から追加…」の両方がこれを使う
     （同じ画面で並びが違うと迷うため）。 */
function placeOptionsHtml(blankLabel, selectedRef) {
  const opts = placeOptionGroups().map(([label, xs]) =>
    `<optgroup label="${esc(label)}">` + xs.map(({ p, type }) => {
      const id = placeId(type, p.name);
      return `<option value="${esc(id)}"${id === selectedRef ? " selected" : ""}>${esc(p.name)}</option>`;
    }).join("") + `</optgroup>`).join("");
  // ★消えた地点を指している ref を「地点なし」に見せると、他を触った拍子に紐づけが消える。
  //   選択済みの警告項目として残し、気づけるようにする。
  const missing = (selectedRef && !getPlaceById(selectedRef))
    ? `<option value="${esc(selectedRef)}" selected>⚠️ 見つからない地点（${esc(selectedRef)}）</option>` : "";
  return `<option value=""${selectedRef ? "" : " selected"}>${esc(blankLabel)}</option>${missing}${opts}`;
}

function populateSchedAddSelect() {
  const sel = $("#sched-add-place"); if (!sel) return;
  sel.innerHTML = placeOptionsHtml("＋ 候補から追加…", "");
  sel.addEventListener("change", () => {
    if (!sel.value) return;
    const p = getPlaceById(sel.value);
    if (p) insertSchedItem(schedItemFromName(p.name));
    sel.value = "";
  });
}

/* 予定行と地点の紐づけを変える唯一の関数。ref が空なら解除。
   ★各行のプルダウンの change と、マップのピンを行の真ん中へ落としたときが
     どちらもここを通る。2か所で書くと、片方だけ直して静かにズレる（0-1）。
   ★ここを変えるとマップのピン順（ルート）と確定状態の出どころが変わる。 */
function setSchedRef(i, ref) {
  const it = schedule[i]; if (!it) return;
  if (ref) {
    // 紐づけると確定状態は共有ステート（getStatus）に従うようになる。表示が切り替わるのは正しい
    it.ref = ref;
    // 「＋ 空の行」で作った行は本文が空。空のときだけ地点名を入れる。
    // 本文がすでにあるときは触らない（「伊根 到着・駐車」の文面を勝手に変えない）
    if (!it.text) it.text = (getPlaceById(ref) || {}).name || "";
  } else {
    // 解除するときは、いまの見た目の状態を行に写しておく（勝手に未確定へ落ちないように）
    it.status = it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
    delete it.ref;
  }
  // 再描画してよい（テキスト入力と違い、カーソルもIME変換も飛ばない操作からしか呼ばれない）
  saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
}

/* 落とした場所から「どの日の、schedule の何番目に入れるか」を決める。
   beforeNode ＝ 新しい行がその手前に入る #sched-list の子要素（null なら末尾）。

   ★候補リストからのドラッグ（SortableJS の onAdd）と、地図のピンからのドラッグが
     この1本を共有する。規則を2か所に書くと、片方だけ直して静かにズレる（0-1）。
   ★位置の測定（elementFromPoint など）は呼ぶ側の仕事にしてある。
     ここは DOM ノードを渡せば答えが決まる純粋な計算なので、テストで直接検査できる。 */
function schedDropSlot(beforeNode) {
  const list = $("#sched-list");
  const kids = list ? Array.prototype.slice.call(list.children) : [];
  const found = beforeNode ? kids.indexOf(beforeNode) : -1;
  const pos = found >= 0 ? found : kids.length;   // 見つからなければ末尾に落ちたとみなす
  // 落とした位置より上にある日付見出しが、その行の所属日になる
  let day = schedDayView === "all" ? FIRST_DAY : schedDayView;
  if (schedDayView === "all") {
    for (let k = pos - 1; k >= 0; k--) {
      if (kids[k].classList.contains("sched-day-head")) { day = normalizeDay(kids[k].dataset.day); break; }
    }
  }
  // 直前の予定行の実インデックスの次に挿す
  let at = -1;
  for (let k = pos - 1; k >= 0; k--) {
    if (kids[k].classList.contains("sched-item")) { at = +kids[k].dataset.i + 1; break; }
  }
  if (pos === 0 || at < 0) at = schedule.findIndex(it => normalizeDay(it.day) === day);
  return { day, at: at >= 0 ? at : undefined };
}

/* 予定行を「いま見ている日」の末尾に挿す。全体タブならその日のブロックの末尾へ入る */
function insertSchedItem(item, at) {
  if (typeof at === "number" && at >= 0) {
    schedule.splice(at, 0, item);
  } else {
    // その日の最後の行の直後に入れる（日をまたいで混ざらないようにする）
    let last = -1;
    schedule.forEach((it, i) => { if (normalizeDay(it.day) === item.day) last = i; });
    if (last >= 0) schedule.splice(last + 1, 0, item);
    else schedule.push(item);
  }
  saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
}

/* 右側の候補リスト（スポット/レストラン/カフェ）を描画。ドラッグまたは⊕で左へ追加。
   filter: "all" | "spots" | "restaurants" | "cafes" */
function renderSchedCandidates(filter = "all") {
  const el = $("#sched-candidates"); if (!el) return;
  const groups = [["spots", "🌿 スポット", "spot"], ["restaurants", "🍽 レストラン", "restaurant"], ["cafes", "☕ カフェ", "cafe"]];
  const shown = filter === "all" ? groups : groups.filter(g => g[0] === filter);
  const withHead = filter === "all";  // 「すべて」のときだけ見出しを挟む
  el.innerHTML = shown.map(([key, label, emoji]) => {
    const head = withHead ? `<li class="sched-cand-head">${label}</li>` : "";
    const items = DATA[key].map(p =>
      `<li class="sched-cand-item" data-name="${esc(p.name)}">
        <span class="type-emoji">${TYPE_ICONS[emoji]}</span>
        <span class="nm">${esc(p.name)}</span>
        <button class="cand-add" data-name="${esc(p.name)}" aria-label="左に追加">⊕</button>
      </li>`).join("");
    return head + items;
  }).join("");
  $$("#sched-candidates .cand-add").forEach(b => b.addEventListener("click", () => {
    insertSchedItem(schedItemFromName(b.dataset.name));
  }));
}

/* 候補リストのサブタブ（すべて／スポット／レストラン／カフェ）切替 */
function setupSchedCandTabs() {
  const bar = $("#sched-cand-tabs"); if (!bar) return;
  $$(".sched-cand-tab", bar).forEach(t => t.addEventListener("click", () => {
    $$(".sched-cand-tab", bar).forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    renderSchedCandidates(t.dataset.filter);
  }));
}

/* 並び替え後、DOMの順番どおりに schedule を組み直す。
   全体表示では日付見出し行を境に day を振り直すので、
   別の日の見出しの下へドラッグするとその行の所属日が切り替わる。 */
function rebuildScheduleFromDom() {
  const kids = Array.prototype.slice.call($("#sched-list").children);
  if (schedDayView === "all") {
    let cur = FIRST_DAY;
    const next = [];
    kids.forEach(li => {
      if (li.classList.contains("sched-day-head")) { cur = normalizeDay(li.dataset.day); return; }
      if (!li.classList.contains("sched-item")) return;
      const it = schedule[+li.dataset.i];
      if (it) next.push({ ...it, day: cur });
    });
    schedule = next;
  } else {
    // 日別表示: この日の行だけを並べ替え、他の日の行は元の位置のまま据え置く
    const order = kids.filter(li => li.classList.contains("sched-item")).map(li => +li.dataset.i);
    const reordered = order.map(i => ({ ...schedule[i], day: schedDayView }));
    const slots = [];
    schedule.forEach((it, i) => { if (normalizeDay(it.day) === schedDayView) slots.push(i); });
    const next = schedule.slice();
    slots.forEach((slot, n) => { next[slot] = reordered[n]; });
    schedule = next;
  }
}

let schedSortInit = false;
function setupScheduleSortable() {
  if (schedSortInit || typeof Sortable === "undefined" || !$("#sched-list")) return;
  schedSortInit = true;
  // タイムスケジュール: 内部並び替え＋候補からの受け入れ
  Sortable.create($("#sched-list"), {
    group: { name: "sched-shared", pull: false, put: true },
    animation: 150, handle: ".sched-handle", draggable: ".sched-item",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onAdd: (evt) => {
      // 候補リストから落ちてきた要素を予定に変換。
      // 落とし場所の解釈は schedDropSlot() が持つ（地図のピンからの投入と同じ規則）
      const name = evt.item.dataset.name;
      const slot = schedDropSlot(evt.item);   // evt.item は既にその位置へ挿し込まれている
      evt.item.remove();
      if (name != null) insertSchedItem(schedItemFromName(name, slot.day), slot.at);
    },
    onUpdate: () => {
      rebuildScheduleFromDom();
      saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
    }
  });
  // 候補リスト: クローンを引き出すだけ
  Sortable.create($("#sched-candidates"), {
    group: { name: "sched-shared", pull: "clone", put: false },
    sort: false, animation: 150, draggable: ".sched-cand-item"
  });
}

function renderRoutes() {
  $("#routes-content").innerHTML = DATA.legs.map(l =>
    `<div class="leg">
      <div class="leg-route"><b>${esc(l.from)}</b><span class="leg-arrow">→</span><b>${esc(l.to)}</b></div>
      <div class="leg-time">${esc(l.time)}</div>
      ${l.note ? `<div class="leg-note">${mdBold(l.note)}</div>` : ""}
    </div>`).join("");
}

/* ===== チケット・予約タブ =====
   添付は site/attachments/ に原本のまま置いてある。
   ・画像 … 既存のライトボックスに .card-img-btn + data-images で相乗りする（新しい配線は要らない）
   ・.eml … 原本を配信し、開いたときにブラウザ側でデコードして表示する。
            テキストに展開したコピーをリポジトリに置かずに済む（同じ内容を2か所に持たない）
   ========================================================================= */
/* .eml の本文を取り出す。この3通は single-part / text/plain; charset=UTF-8 / base64 で、
   改行は \n のみ。ヘッダと本文は最初の空行で分かれる。
   ★catch の引数は err にすること。tools/test_site.js が天気の失敗処理を
     ソース走査で検査しており、同じ形の catch を増やすと誤爆する（追補F-37）。 */
function emlBodyText(raw) {
  try {
    const m = String(raw).match(/\r?\n\r?\n/);
    if (!m) return String(raw);
    const b64 = String(raw).slice(m.index + m[0].length).replace(/\s+/g, "");
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
  } catch (err) {
    return "";
  }
}
/* <details> を開いたときにだけ取りにいく。★init では読まない
   （誰も開かない添付を毎回落とさないため。jsdom には fetch が無いのでガードする） */
function loadEmlInto(box, path) {
  if (!box || box.dataset.loaded) return;
  box.dataset.loaded = "1";
  if (typeof fetch !== "function") { box.textContent = "（この環境では表示できません）"; return; }
  fetch(path)
    .then(r => r.text())
    .then(t => { box.textContent = emlBodyText(t) || "（本文を取り出せませんでした。原本をダウンロードしてください）"; })
    .catch(() => { box.textContent = "（読み込めませんでした。原本をダウンロードしてください）"; });
}

function ticketFileHtml(f) {
  if (f.type === "image") {
    return `<div class="ticket-file">
      <button class="ticket-shot card-img-btn" data-images='${esc(JSON.stringify([f.path]))}' data-index="0"
              aria-label="${esc(f.label)}を拡大"><img src="${esc(f.path)}" alt="${esc(f.label)}" loading="lazy"></button>
      <div class="ticket-file-links">
        <span class="ticket-file-label">${esc(f.label)}</span>
        <a class="pill" href="${esc(f.path)}" target="_blank" rel="noopener">🔍 原寸で開く</a>
      </div>
    </div>`;
  }
  // .eml（予約メールの原本）
  return `<details class="eml">
    <summary>📧 ${esc(f.label)}を読む</summary>
    <pre class="eml-body" data-eml="${esc(f.path)}">読み込み中…</pre>
    <a class="pill" href="${esc(f.path)}" download>⬇ 原本（.eml）をダウンロード</a>
  </details>`;
}

function renderTickets() {
  const box = $("#tickets-content"); if (!box) return;
  box.innerHTML = allTickets().map(t => {
    const meta = (t.meta || []).map(m => `<li><b>${esc(m[0])}</b><span>${mdBold(m[1])}</span></li>`).join("");
    const links = (t.links || []).map(l =>
      `<a class="pill" href="${esc(l.url)}" target="_blank" rel="noopener">🔗 ${esc(l.label)}</a>`).join("");
    const places = (t.refs || []).map(r => {
      const p = getPlaceById(r);
      return p ? `<a class="pill" href="#" data-goto-ref="${esc(r)}">${TYPE_ICONS[p.type]} ${esc(p.name)}</a>` : "";
    }).join("");
    return `<article class="ticket-card" data-ticket="${esc(t.id)}">
      <div class="ticket-head">
        <span class="ticket-icon">${esc(t.icon || "🎫")}</span>
        <h3 class="ticket-title">${esc(t.title)}</h3>
        ${t.when ? `<span class="ticket-when">${esc(t.when)}</span>` : ""}
      </div>
      ${t.summary ? `<p class="ticket-summary">${mdBold(t.summary)}</p>` : ""}
      ${meta ? `<ul class="card-meta">${meta}</ul>` : ""}
      ${t.note ? `<div class="card-notes">${mdBold(t.note)}</div>` : ""}
      <div class="ticket-files">${(t.files || []).map(ticketFileHtml).join("")}</div>
      <div class="card-links">${places}${links}</div>
    </article>`;
  }).join("");
  // 添付メールは開いたときに取りにいく
  $$("#tickets-content .eml").forEach(d => d.addEventListener("toggle", e => {
    if (e.currentTarget.open) {
      const pre = e.currentTarget.querySelector(".eml-body");
      loadEmlInto(pre, pre.dataset.eml);
    }
  }));
}
function renderPacking() {
  const KEY = "ise-trip-packing";
  const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
  $("#packing-content").innerHTML = DATA.packing.map(g =>
    `<div class="pack-group"><h3>${esc(g.group)}</h3><ul class="pack-list">${
      g.items.map(it => {
        const id = g.group + "::" + it;
        return `<li><label><input type="checkbox" data-pack="${esc(id)}" ${saved[id] ? "checked" : ""}><span>${esc(it)}</span></label></li>`;
      }).join("")
    }</ul></div>`).join("");
  $$("#packing-content input[data-pack]").forEach(cb => {
    cb.addEventListener("change", () => {
      saved[cb.dataset.pack] = cb.checked;
      localStorage.setItem(KEY, JSON.stringify(saved));
    });
  });
}
/* ===== 注意・要確認（ブラウザから編集できる。誤タップ防止に編集モード制） ===== */
const INFO_KEY = "ise-trip-info";
const INFO_VERSION = 2;   // INFO_DEFAULT を更新したら必ず +1 する
const INFO_DEFAULT = DATA.info;
let infoItems = loadInfo();
// 編集モードは保存しない：読み込み直後は必ず閲覧モード＝誤タップで書き換わらない
let infoEditing = false;
let infoSortable = null;

function loadInfo() {
  try {
    const raw = JSON.parse(localStorage.getItem(INFO_KEY));
    if (raw && raw.v === INFO_VERSION && Array.isArray(raw.items)) return raw.items;
  } catch (e) {}
  return INFO_DEFAULT.map(x => ({ ...x }));
}
function saveInfo() {
  localStorage.setItem(INFO_KEY, JSON.stringify({ v: INFO_VERSION, items: infoItems }));
  fbPush("info", infoItems);
}
// 注意タブの本文も同じ軽量記法（定義は mdBold）。
const infoText = mdBold;

/* =========================================================================
   特集（読み物）
   ★記事は ref で地点を指すだけ。写真・営業時間・点数・リンクは DATA から引くので、
     地点を直したときに特集だけ古いまま残ることがない。
   ========================================================================= */
// 空行で段落を分ける（本文は **囲む** の軽量記法のみ。生HTMLは書かない）
function featureText(s) {
  return String(s || "").split(/\n{2,}/).map(t => `<p>${mdBold(t)}</p>`).join("");
}
// エリアのチップ。ラベルは絞り込みと同じ AREA_GROUPS を使い回す
function areaChip(p) {
  const g = AREA_GROUPS.find(([k]) => k === p.areaKey);
  return g ? `<span class="feature-chip area-${esc(p.areaKey)}">${esc(g[1])}</span>` : "";
}
// 特集タブのおすすめカードに出す meta の行（地点カードの meta から引くラベル）。
// ★ここに書いたラベルと、地点の meta の見出しは**同じ文字列**にすること（前方一致ではない）。
// この旅行では「営業 / 料金 / 所要」が判断に直結する。無いラベルは黙って飛ばされる。
const FEATURE_PICK_META = ["営業", "料金", "所要"];
/* 特集は複数本置ける。target が描き込み先、blocks がその記事の中身。
   ★1タブ1記事。タブボタンとパネルは index.html 側に置く（setupTabs は #panel-<name> で汎用に動く）。
     記事を増やすならここに1行足して index.html にタブとパネルを足すだけでよい。 */
const FEATURE_TABS = [
  { target: "#feature-content",  blocks: () => DATA.feature  },   // ラッコ観覧
  { target: "#feature2-content", blocks: () => DATA.feature2 },   // 真珠取り出し体験
];
// meta から指定ラベルの行を引く（営業時間や料金を記事側に書き写さないため）
function metaOf(p, label) {
  const row = (p.meta || []).find(m => m[0] === label);
  return row ? row[1] : "";
}
function renderFeaturePick(it) {
  const p = getPlaceById(it.ref);
  if (!p) return "";   // ★ref切れは何も描かずエラーも出ない。tools/test_days.js が検出する
  const imgs = p.images || [];
  const img = imgs.length
    ? `<button class="feature-pick-img card-img-btn" data-images='${esc(JSON.stringify(imgs))}' data-index="0" aria-label="${esc(p.name)}の写真を拡大">
         <img src="${esc(imgs[0])}" alt="${esc(p.name)}" loading="lazy"></button>`
    : "";
  // ★記事に営業時間や料金を書き写さず、地点カードの meta から引く（同じ事実を2か所に書かない）。
  //   旅行ごとに見せたい行が違うなら、FEATURE_PICK_META のラベルだけを変える。
  const rows = FEATURE_PICK_META.map(label => [label, metaOf(p, label)]).filter(([, v]) => v);
  return `<article class="feature-pick">
    ${img}
    <div class="feature-pick-body">
      <div class="feature-pick-head">
        ${it.tag ? `<span class="feature-pick-tag">${esc(it.tag)}</span>` : ""}
        ${areaChip(p)}
      </div>
      <h4 class="feature-pick-name">${TYPE_ICONS[p.type]} ${esc(p.name)}</h4>
      <p class="feature-pick-why">${mdBold(it.why)}</p>
      ${rows.length ? `<ul class="feature-pick-meta">
        ${rows.map(([k, v]) => `<li><b>${esc(k)}</b><span>${mdBold(v)}</span></li>`).join("")}
      </ul>` : ""}
      ${ratingChips(p)}
      ${linkPills(p)}
    </div>
  </article>`;
}
/* meta の1行を表のセルに詰める。散文なので先頭の **強調** だけを抜き、
   無ければ全文を使う。落とした部分は title 属性で読めるようにする。
   ★短縮するだけで、事実の出どころは meta のまま（記事側に書き写さない。0-1） */
function metaHead(p, label) {
  const full = metaOf(p, label);
  if (!full) return { short: "—", full: "" };
  const m = full.match(/\*\*([^*\n]+)\*\*/);
  return { short: m ? m[1] : full, full };
}
/* 比較表。既存の一覧表と同じ .ct-wrap > table.ct を使い回す（スマホでは横スクロール） */
function renderFeatureTable(b) {
  const cols = b.cols || [];
  const rows = (b.items || []).map(it => {
    const p = getPlaceById(it.ref);
    if (!p) return "";   // ★ref切れは何も描かない。tools/test_days.js が検出する
    const cells = cols.map(c => {
      const { short, full } = metaHead(p, c);
      return `<td${full ? ` title="${esc(full.replace(/\*\*/g, ""))}"` : ""}>${mdBold(short)}</td>`;
    }).join("");
    return `<tr class="ct-row" data-goto-ref="${esc(it.ref)}" tabindex="0" role="button"
      title="${esc(p.name)}のカードを見る">
      <td class="ct-name">${TYPE_ICONS[p.type]} ${esc(p.name)}${
        it.tag ? `<span class="ct-tag">${esc(it.tag)}</span>` : ""}</td>${cells}</tr>`;
  }).join("");
  return `<div class="ct-wrap"><table class="ct">
    <thead><tr><th>施設</th>${cols.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

/* 記事1ブロックぶんのHTML。★どのコンテナに入るかを知らない＝2本目の記事でもそのまま使える */
function featureBlockHtml(b) {
  const head = `<h3 class="feature-section-h">${esc(b.title)}</h3>` +
    (b.lead ? `<div class="feature-section-lead">${featureText(b.lead)}</div>` : "");
  if (b.kind === "picks") {
    return `<section class="feature-section${b.tone === "top" ? " top" : ""}">${head}
      <div class="feature-picks">${(b.items || []).map(renderFeaturePick).join("")}</div>
    </section>`;
  }
  if (b.kind === "list") {
    return `<section class="feature-section">${head}
      <dl class="feature-list">${(b.items || []).map(i =>
        `<dt>${esc(i.label)}</dt><dd>${mdBold(i.text)}</dd>`).join("")}</dl>
    </section>`;
  }
  if (b.kind === "table") {
    return `<section class="feature-section">${head}${renderFeatureTable(b)}</section>`;
  }
  if (b.kind === "sources") {
    return `<section class="feature-section">${head}
      <ul class="feature-sources">${(b.items || []).map(i =>
        `<li><a href="${esc(i.url)}" target="_blank" rel="noopener">🔗 ${esc(i.label)}</a></li>`).join("")}</ul>
    </section>`;
  }
  // kind: "note"
  return `<div class="info-card feature-note${b.warn ? " warn" : ""}">
    <h3>${esc(b.title)}</h3>${featureText(b.text)}</div>`;
}

function renderFeature() {
  FEATURE_TABS.forEach(t => {
    const box = $(t.target); if (!box) return;
    box.innerHTML = (t.blocks() || []).map(featureBlockHtml).join("");
  });
}

function renderInfo() {
  const box = $("#info-content"); if (!box) return;
  const panel = $("#panel-info");
  if (panel) panel.classList.toggle("editing", infoEditing);
  const btn = $("#info-edit-toggle");
  if (btn) {
    btn.textContent = infoEditing ? "✓ 編集を終える" : "✏️ 編集する";
    btn.classList.toggle("on", infoEditing);
  }

  if (!infoEditing) {
    box.innerHTML = infoItems.length
      ? infoItems.map(i =>
          `<div class="info-card ${i.warn ? "warn" : ""}"><h3>${esc(i.title)}</h3><p>${infoText(i.text)}</p></div>`).join("")
      : `<p class="muted">項目がありません。「✏️ 編集する」→「＋ 項目を追加」で作成できます。</p>`;
    if (infoSortable) { infoSortable.destroy(); infoSortable = null; }
    return;
  }

  box.innerHTML = infoItems.map((it, i) => `
    <div class="info-card edit ${it.warn ? "warn" : ""}" data-i="${i}">
      <div class="info-edit-head">
        <span class="info-handle" title="ドラッグで並び替え" aria-label="ドラッグして並び替え">≡</span>
        <input class="info-title" type="text" data-i="${i}" value="${esc(it.title || "")}" placeholder="見出し" aria-label="見出し">
        <button class="info-warn ${it.warn ? "on" : ""}" data-i="${i}" title="重要マーク（左の線が赤くなります）">${it.warn ? "⚠️ 重要" : "重要にする"}</button>
        <button class="info-del" data-i="${i}" aria-label="この項目を削除" title="削除">✕</button>
      </div>
      <textarea class="info-text" data-i="${i}" rows="4" placeholder="内容を入力（**で囲むと太字）" aria-label="内容">${esc(it.text || "")}</textarea>
    </div>`).join("")
    || `<p class="muted">項目がありません。「＋ 項目を追加」で作成できます。</p>`;

  // 入力中は再描画しない（カーソル位置とIME変換が飛ぶため）
  $$("#info-content .info-title").forEach(el => el.addEventListener("input", e => {
    infoItems[+e.currentTarget.dataset.i].title = e.currentTarget.value; saveInfo();
  }));
  $$("#info-content .info-text").forEach(el => el.addEventListener("input", e => {
    infoItems[+e.currentTarget.dataset.i].text = e.currentTarget.value; saveInfo();
  }));
  $$("#info-content .info-warn").forEach(el => el.addEventListener("click", e => {
    const it = infoItems[+e.currentTarget.dataset.i]; it.warn = !it.warn; saveInfo(); renderInfo();
  }));
  $$("#info-content .info-del").forEach(el => el.addEventListener("click", e => {
    const i = +e.currentTarget.dataset.i;
    if (!confirm(`「${infoItems[i].title || "（無題）"}」を削除しますか？`)) return;
    infoItems.splice(i, 1); saveInfo(); renderInfo();
  }));
  setupInfoSortable();
}

function setupInfoSortable() {
  if (typeof Sortable === "undefined" || !$("#info-content")) return;
  if (infoSortable) infoSortable.destroy();
  infoSortable = Sortable.create($("#info-content"), {
    animation: 150, handle: ".info-handle", draggable: ".info-card",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onEnd: () => {
      infoItems = $$("#info-content .info-card").map(el => infoItems[+el.dataset.i]);
      saveInfo(); renderInfo();
    }
  });
}

/* 現在の注意項目を INFO_DEFAULT 用のコード片として書き出す */
function exportInfo() {
  const lines = infoItems.map(it =>
    `  {\n    warn: ${it.warn ? "true" : "false"},\n    title: ${JSON.stringify(it.title || "")},\n    text: ${JSON.stringify(it.text || "")}\n  }`
  ).join(",\n");
  const out = `/* app.js の DATA.info に貼り替え、INFO_VERSION を +1 */\ninfo: [\n${lines}\n],`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("下記を app.js の DATA.info に貼り替え、INFO_VERSION を +1 して commit すると、全員の初期表示が更新されます（クリップボードにもコピー済み）:", out);
}

/* =========================================================================
   ライトボックス
   ========================================================================= */
const lb = { images: [], index: 0 };
function openLightbox(images, index) {
  lb.images = images; lb.index = index;
  $("#lightbox").classList.remove("hidden");
  $("#lightbox").setAttribute("aria-hidden", "false");
  updateLightbox();
}
function updateLightbox() {
  $("#lb-img").src = lb.images[lb.index];
  $("#lb-counter").textContent = `${lb.index + 1} / ${lb.images.length}`;
  const multi = lb.images.length > 1;
  $("#lb-prev").style.display = multi ? "" : "none";
  $("#lb-next").style.display = multi ? "" : "none";
}
function closeLightbox() {
  $("#lightbox").classList.add("hidden");
  $("#lightbox").setAttribute("aria-hidden", "true");
}
function lbNext() { lb.index = (lb.index + 1) % lb.images.length; updateLightbox(); }
function lbPrev() { lb.index = (lb.index - 1 + lb.images.length) % lb.images.length; updateLightbox(); }
function setupLightbox() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-img-btn, .thumb-btn");
    if (btn) {
      const imgs = JSON.parse(btn.dataset.images);
      openLightbox(imgs, parseInt(btn.dataset.index, 10) || 0);
    }
  });
  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-next").addEventListener("click", lbNext);
  $("#lb-prev").addEventListener("click", lbPrev);
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") lbNext();
    else if (e.key === "ArrowLeft") lbPrev();
  });
}

/* =========================================================================
   ルート状態（localStorage）
   ========================================================================= */
/* ★ルートは「状態」ではなく「スケジュールから毎回作る値」。
   保存も Firebase 同期もしない。書き換えるのは routeFromSchedule() の結果だけ。

   かつては手で並べ替え・追加・削除ができたが、スケジュールを編集するたびに
   syncRouteFromSchedule() が丸ごと作り直すため、手動の編集は黙って消えていた
   （リロードだけでも消えた）。「編集できる見た目」のほうを無くして矛盾を解消した。
   順番を変えたいときはスケジュールタブで編集する（追補F）。 */
let routeIds = routeFromSchedule();
function routeIndex(id) { return routeIds.indexOf(id); }

/* =========================================================================
   地図（Leaflet）
   ========================================================================= */
let map, markerLayer, routeLine;
const markers = {}; // id -> marker

/* ★初期表示の範囲は「見えるようになってから」当てる。
   高さ0のコンテナで fitBounds を呼ぶと getBoundsZoom が最大ズーム(18)に張り付き、
   あとから invalidateSize() を呼んでも直らない（invalidateSize は中心をずらすだけで
   ズームを計算し直さない）。マップタブを一度も開かずに編集モードで地図を出すと
   この経路に入るため、当たるまで持ち越す。
   なお fitBounds を当てるまで Leaflet は _loaded にならず、addLayer は内部で
   キューに積まれるだけなので、先にピンや点線を足しておいても落ちない。 */
let pendingFit = null;
function fitMapToPlaces() {
  if (!map || !pendingFit) return;
  const el = $("#map");
  if (!el || !el.clientHeight) return;   // まだ見えていない。次の機会に当てる
  map.fitBounds(pendingFit.pad(0.15));
  pendingFit = null;
}

function makeIcon(p, id) {
  const idx = routeIndex(id);
  let ring = "";
  if (idx >= 0) ring = "ring-route";
  else if (getStatus(id) === "confirmed") ring = "ring-confirmed";
  const num = idx >= 0 ? `<span class="pin-num">${idx + 1}</span>` : "";
  /* ★data-id は「地図から予定へドラッグする」ときの持ち手。#map に張った1本の
     pointerdown がここから地点を引くので、マーカーごとに listener を張らずに済む。
     ★title で「もう予定に入っている（N番）」を明示する。番号は routeIds の
     ＊最初の出現＊の順で、同じ地点をもう一度予定に足しても動かない（往復で
     起終点が2回出てくるため、あえて重複を除いている）。動かないことを黙って
     見せると「操作が効かなかった」と読まれるので、掴む前に分かるようにしておく。 */
  const label = idx >= 0
    ? `${p.name}（すでに予定 ${idx + 1} 番目に入っています）`
    : `${p.name}（まだ予定に入っていません）`;
  /* ピンの下に重ねるタグ（pinlabel列）。値の並びはチップのDOM順そのまま＝
     「何をどの順で出すか」の出どころを MAP_FILTER_COLUMNS 1か所に保つ（0-1）。
     点数は p.ratings から引く（一覧表の tableScore() と同じ出どころ）。
     ★持っていない値は出さない。食べログの無いスポットや★未評価は「データの欠け」であって
       故障ではないので、ここは黙って省くのが正しい（0-2 が禁じているのは壊れたまま動くこと）。
     ★このタグに title を付けないこと。tools/test_days.js §17 が html の＊最初の＊
       title を読んで「すでに予定N番目」を検査しているため、前に title が入ると意味が変わる。
     ★地点名だけ <span class="pin-name"> で包む。長さが青天井なのはこの値だけなので、
       幅の制限をそこに閉じ込める。タグ全体を切ると、名前の長い地点で後ろの点数まで
       消える（「グランドメルキュール伊勢志摩リゾート＆スパ」は21文字＋⭐3.6）。 */
  const on = $$('.filter-group[data-group="pinlabel"] input:checked').map(i => i.value);
  const r = p.ratings || {};
  const parts = on.map(v =>
    v === "name"                   ? `<span class="pin-name">${esc(p.name)}</span>` :
    v === "google"  && r.google    ? `⭐${esc(r.google)}` :
    v === "tabelog" && r.tabelog   ? `🍴${esc(r.tabelog)}` :
    v === "want"    && getWant(id) ? "★".repeat(getWant(id)) : "").filter(Boolean);
  /* ★.pin の「子」ではなく「兄弟」に置く。.pin は rotate(-45deg) の雫形なので、
     中に入れると文字まで斜めになり、逆回転を足す羽目になる（.pin span / .pin-num が実例）。 */
  const tag = parts.length ? `<div class="pin-tag">${parts.join(" ")}</div>` : "";
  return L.divIcon({
    className: "",
    html: `<div class="pin pin-${p.type} ${ring}" data-id="${esc(id)}" title="${esc(label)}"><span>${TYPE_ICONS[p.type]}</span>${num}</div>${tag}`,
    iconSize: [30, 30], iconAnchor: [15, 28], popupAnchor: [0, -28]
  });
}
function popupHtml(p, id) {
  const img = (p.images && p.images[0]) ? `<img src="${esc(p.images[0])}" alt="">` : "";
  return `<div class="popup-card">
    ${img}
    <h4>${esc(p.name)}</h4>
    ${p.genre ? `<div class="p-genre">${esc(p.genre)}</div>` : ""}
    <div class="p-area">📍 ${esc(p.area)}</div>
    <p class="p-desc">${mdBold(p.desc)}</p>
    <div class="p-actions">
      <button class="p-btn add" data-add-sched="${esc(id)}">＋ スケジュールに追加</button>
      <a class="p-btn maps" href="${placeMapsUrl(p)}" target="_blank" rel="noopener">📍マップ</a>
    </div>
  </div>`;
}
/* マップのフィルタ列を描く。★中身は MAP_FILTER_COLUMNS だけが決める（index.html には書かない）。
   呼ぶ場所に注意: setupMap() はマップタブを初めて開くまで走らないが、currentFilters() は
   init() の renderRouteEditor() から即座に呼ばれる。ここで #map-filters が空だと
   ルート列の .checked を読めずページ全体が落ちるので、init() の早い段階で呼ぶこと。 */
function renderMapFilters() {
  const el = $("#map-filters"); if (!el) return;
  const rows = MAP_FILTER_COLUMNS.map(c => {
    const chips = c.chips();
    if (!chips.length) return "";   // その旅行に該当が無い列は丸ごと出さない
    // ★チップは必ず .chip-row で包む。2列グリッドの右カラムに収まるので、
    //   何行に折り返してもラベルの下に回り込まない（カード側と同じ理由）
    return `<div class="filter-group" data-group="${esc(c.group)}">
      <span class="filter-label">${esc(c.label)}</span>
      <div class="chip-row">${chips.map(([v, l]) =>
        `<label class="chip"><input type="checkbox" value="${esc(v)}"${c.off ? "" : " checked"}> ${esc(l)}</label>`
      ).join("")}</div>
    </div>`;
  }).join("");
  // 件数バッジ #map-filter-count は applyFilters() の書き込み先。消さないこと
  el.innerHTML = `
    <div class="tools-head">
      <span class="tools-title">地図に出すピン</span>
      <span class="muted map-filter-count" id="map-filter-count"></span>
    </div>` + rows;
}
function currentFilters() {
  const get = g => $$(`.filter-group[data-group="${g}"] input:checked`).map(i => i.value);
  // ★「日」フィルタ（4泊5日対応）。閲覧者ごとのローカル操作なので同期しない。
  //   グループが無い場合（テスト等）は全日選択とみなす。
  const dayInputs = $$(`.filter-group[data-group="day"] input`);
  const days = dayInputs.length ? get("day") : DAY_KEYS.slice();
  // 「犬」フィルタ。列が無ければ null＝素通し（犬連れでない旅行では列ごと外せる）
  const areaInputs = $$(`.filter-group[data-group="area"] input`);
  /* 「予定」フィルタ。★1つ目のチップを決め打ちで読まないこと。
     チップを増やしたときに、読む対象が並び順で入れ替わって静かに壊れる。
     他の列と同じく「チェックされた値の配列」で持ち、
     0個（＝どちらも選んでいない）と全部チェックはどちらも素通しにする。 */
  const routeInputs = $$(`.filter-group[data-group="route"] input`);
  const plan = get("route");
  return { type: get("type"), status: get("status"),
           area: areaInputs.length ? get("area") : null,
           plan, planFilterOn: routeInputs.length > 0 && plan.length > 0 && plan.length < routeInputs.length,
           days, dayFilterOn: dayInputs.length > 0 && days.length < DAY_KEYS.length };
}
/* いま表示対象になっている日の地点だけを、スケジュール順に並べて返す
   （点線・Googleマップのナビはこれを使う）

   ★ここが見ているのは「日」だけ。種類・状態・犬で絞ってもルートは変わらない。
     書き忘れではなく仕様。犬で絞ってナビの経由地が減ると、
     「犬不可の場所を外したらルートが途中で切れた」という事故になるため。
     日だけが例外なのは、Googleマップの経由地が9件までで5日ぶんを1本に渡せないから（追補K-5）。 */
function visibleRouteIds() {
  const f = currentFilters();
  if (!f.dayFilterOn) return routeIds.slice();
  // ★日で絞ったときは routeIds の順ではなく「その日のスケジュール順」に並べ直す。
  //   三宮のように往路と復路の両方に出てくる地点があると、routeIds は先頭の1回しか
  //   持たないため、そのままでは復路のナビが逆向きになってしまう。
  const seen = new Set(), out = [];
  schedule.forEach(it => {
    if (!it.ref || !getPlaceById(it.ref)) return;
    if (!f.days.includes(normalizeDay(it.day))) return;
    if (seen.has(it.ref)) return;
    seen.add(it.ref); out.push(it.ref);
  });
  // ★かつては「手でルートへ足した、どの日にも属さない地点」を末尾に足していたが、
  //   ルートがスケジュールの導出値になったので、そういう地点は存在しなくなった
  return out;
}
function applyFilters() {
  const f = currentFilters();
  const all = allPlaces();
  let shown = 0;
  all.forEach(p => {
    const id = placeId(p.type, p.name);
    const m = markers[id];
    if (!m) return;
    const inRoute = routeIndex(id) >= 0;
    const pdays = daysOfPlace(id);
    const dayOk = !f.dayFilterOn || pdays.size === 0 || f.days.some(x => pdays.has(x));
    // 犬の条件はカードと同じ groupKeyOf() で引く。areaKey の付け忘れは "other" になり
    // どの区分にも入らないので静かに消える（test_cardtools.js が全件を検査している）
    const areaOk = !f.area || f.area.includes(groupKeyOf(p, "area"));
    // 予定に入っているか。チップの値と対にして、日・犬と同じ「列内は OR」で扱う
    const planOk = !f.planFilterOn || f.plan.includes(inRoute ? "route-only" : "route-none");
    const show = f.type.includes(p.type) && f.status.includes(getStatus(id)) && dayOk && areaOk && planOk;
    if (show) { shown++; if (!markerLayer.hasLayer(m)) m.addTo(markerLayer); }
    else { if (markerLayer.hasLayer(m)) markerLayer.removeLayer(m); }
  });
  // カードのツールバーの件数表示と対にする（日で絞ったとき何地点残るか分かる）
  const c = $("#map-filter-count");
  if (c) c.textContent = `${shown} / ${all.length}地点`;
}
function routeCoords() {
  return visibleRouteIds().map(getPlaceById).filter(Boolean).map(p => p.coords);
}
// 現在のルート（経由地の順）をGoogleマップのナビURLにする。スマホではGoogleマップアプリが起動する。
function googleMapsDirUrl() {
  // ★経由地はURL仕様上9件が上限。4泊5日を1本にすると必ず溢れるので、
  //   マップの「日」フィルタで絞られた地点だけを対象にする。
  const pts = visibleRouteIds().map(getPlaceById).filter(Boolean);
  if (!pts.length) return null;
  const c = p => `${p.coords[0]},${p.coords[1]}`;
  if (pts.length === 1) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c(pts[0]))}`;
  const origin = c(pts[0]), destination = c(pts[pts.length - 1]);
  // 経由地はURL仕様上ほどほどに（先頭=出発, 末尾=目的地, 中間=waypoints）
  const mid = pts.slice(1, -1).map(c).slice(0, 9);
  let url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
  if (mid.length) url += `&waypoints=${encodeURIComponent(mid.join("|"))}`;
  return url;
}
function drawRouteLine() {
  const coords = routeCoords();
  if (routeLine) map.removeLayer(routeLine);
  routeLine = L.polyline(coords, { color: "#1f9c9c", weight: 3, dashArray: "7 7", opacity: .85 }).addTo(map);
}
function refreshMarkers() {
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    if (markers[id]) markers[id].setIcon(makeIcon(p, id));
  });
}
/* 予定の行にポインタを乗せたとき、その地点のピンを目立たせる。
   ★状態は持たない。クラスを付けて外すだけなので、refreshMarkers() でピンが
     作り直されても次にポインタを乗せた時点で付き直る（ズレが残らない）。 */
function focusPin(id) {
  $$("#map .pin.is-focus").forEach(el => el.classList.remove("is-focus"));
  if (!id || !markers[id] || !markers[id].getElement) return;
  const el = markers[id].getElement();
  const pin = el && el.querySelector(".pin");
  if (pin) pin.classList.add("is-focus");
}
/* ピンから予定行へ。編集中で一覧が出ているときだけ意味がある */
function scrollSchedRowIntoView(id) {
  if (!id || !$("#sched-list")) return;
  const i = schedule.findIndex(it => it.ref === id);
  if (i < 0) return;
  const row = $$("#sched-list > li.sched-item").find(li => +li.dataset.i === i);
  if (!row) return;   // 別の日を表示中で、その行が出ていない
  if (row.scrollIntoView) row.scrollIntoView({ behavior: "smooth", block: "center" });
  row.classList.add("is-flash");
  setTimeout(() => row.classList.remove("is-flash"), 1200);
}
function setupMap() {
  map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);

  const pts = [];
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    const m = L.marker(p.coords, { icon: makeIcon(p, id) });
    m.bindPopup(popupHtml(p, id));
    markers[id] = m;
    m.addTo(markerLayer);
    pts.push(p.coords);
  });
  drawRouteLine();
  applyFilters();
  pendingFit = L.latLngBounds(pts);
  fitMapToPlaces();       // ★見えていれば今すぐ、見えていなければ次の機会に（上の説明）

  // フィルタ
  $$("#map-filters input").forEach(i => i.addEventListener("change", () => {
    applyFilters();
    drawRouteLine();      // 日で絞ったら点線も追随させる
    renderRouteEditor();  // 「Googleマップでルートを開く」のURLを組み直す
    refreshMarkers();     // 「ピンに表示」列（pinlabel）のタグを描き直す
  }));

  // ポップアップ内「追加」
  map.on("popupopen", (e) => {
    const btn = e.popup._contentNode.querySelector("[data-add-sched]");
    if (btn) btn.addEventListener("click", () => { map.closePopup(); addPlaceToSchedule(btn.dataset.addSched); });
    // 編集中に地図を開いているときは、その地点の予定行まで一覧を送る（逆方向の道しるべ）
    if (btn) scrollSchedRowIntoView(btn.dataset.addSched);
  });

  // ピンをスケジュールへドラッグする配線（パソコンのみ。中で判定している）
  setupPinDrag();
}

/* 地図の遅延初期化はここだけ。マップタブと、編集モードの「地図で選ぶ」の両方から呼ぶ。
   ★「初期化済みか」を別のフラグで持たない。map の有無がそのまま答えなので、
     フラグを足すと同じ事実が2か所になる（0-1）。 */
function ensureMap() {
  if (map || typeof L === "undefined" || !$("#map")) return;
  setupMap();
}
/* 地図を見せたあとに必ず呼ぶ。非表示の div の中でサイズが 0 のままになっているのを直す */
function revealMap() {
  if (!map) return;
  map.invalidateSize();
  fitMapToPlaces();
}

/* ===== 地図の間借り（編集モードへの引っ越し） =====
   ★地図は1つしか作らない。編集モードで「地図で選ぶ」を開いたときは、
     2つ目を作るのではなく #map-dock ごと引っ越す。2つ持つと「いまどのピンが
     出ているか」という同じ事実が2か所になり、refreshMarkers()／applyFilters()／
     drawRouteLine()／currentFilters() を両方に効かせる同期コードが要る。
     それは二重化を固定するということで、かつて廃止した「スケジュールの控え」と
     同じ轍を踏む（0-1）。同期を足して解決しようとしない。

   ★置き場所は「状態から毎回決める」。routeFromSchedule() と同じ考え方で、
     「編集セクションを作り直す前に地図を返すのを忘れないこと」という
     人間向けの手順を作らない（0-3）。判断者は syncMapDock() ただ一つ。 */
function undockMap() {
  endPinDrag();   // ★引っ越しの前に、進行中のドラッグを畳む（地図が固まったままにしない）
  const dock = $("#map-dock"), home = $("#map-dock-home");
  if (!dock || !home) return;
  if (dock.parentNode !== home) home.appendChild(dock);
  dock.classList.remove("in-editor");
}
function syncMapDock() {
  const dock = $("#map-dock"), home = $("#map-dock-home"), slot = $("#sched-map-slot");
  if (!dock || !home) return;
  const schedPanel = $("#panel-schedule");
  const schedVisible = !!schedPanel && schedPanel.classList.contains("active");
  const wantSlot = !!slot && !!schedEditing && schedMapOpen && schedVisible;
  const target = wantSlot ? slot : home;
  if (dock.parentNode === target) return;
  if (!wantSlot) { undockMap(); return; }
  target.appendChild(dock);
  dock.classList.add("in-editor");
  ensureMap();   // マップタブを一度も開いていなくても、ここで作られる
  revealMap();   // 新しい親でサイズを測り直し、持ち越していた初期表示の範囲を当てる
}

/* ===== 地図のピンをスケジュールへドラッグして入れる（プランニング） =====
   ★書き換えるのは正本の schedule だけ。導出値の routeIds には触らない。
     触っても次の syncRouteFromSchedule() が作り直すので黙って消える
     （チェックリストD／追補F-24）。落とし場所の解釈は schedDropSlot() に任せ、
     投入は insertSchedItem() を通す＝スケジュールへの書き込み経路を増やさない。

   ★SortableJS でも HTML5 の dragstart でもなく Pointer Events を直に使う理由:
     ・Leaflet のマーカーは transform で配置され DOM の並び順に意味がない。
       SortableJS の「並べ替え」モデルに乗らない
     ・HTML5 の dragstart は iOS Safari で発火しない
     ・どのみち map.dragging を止めないと、ピンを掴んだ瞬間に地図がパンする

   ★ドラッグの最中に掴んでいる .pin が消えることがある。refreshMarkers() → setIcon()
     は Leaflet の DivIcon が innerHTML で中身を作り直すので、同行者の編集が
     Firebase で届いただけで要素が入れ替わる。そのため:
     ・setPointerCapture() を使わない（要素が消えると pointerup が届かず、
       map.dragging.enable() が永久に呼ばれずに地図が操作不能になる）
     ・move / up / cancel は window に張る
     ・地点は掴んだ時点で控える（落とすときに DOM から読み直さない）
     ・落とし先は落とした瞬間に解決する（hover 中に覚えておかない） */
const PIN_DRAG_THRESHOLD = 8;   // これ未満の動きはタップ扱い（ポップアップを開く）
let pinDrag = null;
let pinScrollRaf = 0, pinScrollDir = 0;

/* ★スマホでは登録しない。地図は「見るため」に開くもので、予定への投入は
   ポップアップの「＋ スケジュールに追加」を使う。
   「スマホでは使わない」を人の記憶ではなくメディアクエリで担保する（0-3）。 */
function pinDragEnabled() {
  return typeof window.matchMedia === "function"
      && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}
function setupPinDrag() {
  const el = $("#map");
  if (!el || el.dataset.pinDrag || !pinDragEnabled()) return;
  el.dataset.pinDrag = "1";     // #map は作り直さないので、この1本で足りる
  el.addEventListener("pointerdown", onPinDown);
}
/* 地図側のジェスチャはまとめて止め、まとめて戻す。片方だけ戻し忘れると
   「パンできないのにスクロールは通る」という分かりにくい壊れ方をする。 */
function setMapGestures(on) {
  ["dragging", "touchZoom", "tapHold"].forEach(k => {
    if (map && map[k]) map[k][on ? "enable" : "disable"]();
  });
}

function onPinDown(e) {
  if (!e.isPrimary || (e.button != null && e.button > 0)) return;
  const pin = e.target && e.target.closest && e.target.closest(".pin[data-id]");
  if (!pin || !$("#sched-list")) return;   // 編集モードで地図を開いているときだけ効く
  const place = getPlaceById(pin.dataset.id);
  if (!place) return;
  endPinDrag();
  pinDrag = { id: pin.dataset.id, name: place.name, x0: e.clientX, y0: e.clientY, moved: false, ghost: null };
  setMapGestures(false);
  window.addEventListener("pointermove", onPinMove);
  window.addEventListener("pointerup", onPinUp);
  window.addEventListener("pointercancel", onPinUp);
}
function onPinMove(e) {
  if (!pinDrag) return;
  if (!e.isPrimary) { endPinDrag(); return; }   // 2本目の指が来たら中止（座標が崩れる）
  if (!pinDrag.moved) {
    if (Math.abs(e.clientX - pinDrag.x0) < PIN_DRAG_THRESHOLD &&
        Math.abs(e.clientY - pinDrag.y0) < PIN_DRAG_THRESHOLD) return;
    pinDrag.moved = true;
    /* ★ここで範囲選択を止める。pointerdown では preventDefault できない
       （Leaflet のクリック→ポップアップが死ぬ）ので、そのぶんブラウザの既定の
       ドラッグ選択が始まっている。すでに選ばれたぶんを消し、以後を止める。
       最初から user-select:none にはしない——予定の本文をコピーできなくなる。 */
    const sel = window.getSelection && window.getSelection();
    if (sel && sel.removeAllRanges) sel.removeAllRanges();
    document.body.classList.add("pin-dragging");
    pinDrag.ghost = document.createElement("div");
    pinDrag.ghost.className = "pin-ghost";
    document.body.appendChild(pinDrag.ghost);
  }
  e.preventDefault();
  pinDrag.ghost.style.left = e.clientX + "px";
  pinDrag.ghost.style.top = e.clientY + "px";
  const target = dropTargetAt(e.clientX, e.clientY);
  // 落とすと何が起きるかを、掴んだまま分かるようにする
  pinDrag.ghost.textContent = (target && target.onto) ? `📍 この行に紐づけ：${pinDrag.name}` : pinDrag.name;
  pinDrag.ghost.classList.toggle("is-onto", !!(target && target.onto));
  markDropTarget(target);
  const list = $("#sched-list");
  const r = list && list.getBoundingClientRect();
  pinScrollDir = !r ? 0 : (e.clientY < r.top + 48 ? -1 : e.clientY > r.bottom - 48 ? 1 : 0);
  if (pinScrollDir && !pinScrollRaf) pinScrollRaf = requestAnimationFrame(pinAutoScroll);
}
function onPinUp(e) {
  if (!pinDrag) return;
  const moved = pinDrag.moved, name = pinDrag.name, id = pinDrag.id;
  const target = moved ? dropTargetAt(e.clientX, e.clientY) : null;
  endPinDrag();                 // ★先に畳む。このあと何が起きても地図は生き返る
  if (!moved || !target) return;   // タップ、または一覧の外＝ポップアップに任せる
  /* ★落とし先は「いま」の DOM から解決する。ドラッグ中に同行者の編集が届いて
     一覧が描き直されていることがあるので、hover 中に覚えた行は当てにしない。 */
  if (target.onto && target.onto.isConnected) {
    // 行の真ん中に落とした＝その予定に地点を紐づける（新しい行は増やさない）
    setSchedRef(+target.onto.dataset.i, id);
    return;
  }
  const before = target.before && target.before.isConnected ? target.before : null;
  const slot = schedDropSlot(before);
  insertSchedItem(schedItemFromName(name, slot.day), slot.at);
}
function endPinDrag() {
  if (!pinDrag) return;
  const moved = pinDrag.moved;
  if (pinDrag.ghost) pinDrag.ghost.remove();
  document.body.classList.remove("pin-dragging");   // ★出口はここ1本。必ず選択を戻す
  markDropTarget(null);
  if (pinScrollRaf) cancelAnimationFrame(pinScrollRaf);
  pinScrollRaf = 0; pinScrollDir = 0;
  window.removeEventListener("pointermove", onPinMove);
  window.removeEventListener("pointerup", onPinUp);
  window.removeEventListener("pointercancel", onPinUp);
  pinDrag = null;
  setMapGestures(true);         // ★どの出口を通っても、必ずここを通ること
  if (moved) {
    // 実際に動かしたあとの合成 click でポップアップが開かないよう、1回だけ握り潰す
    const el = $("#map");
    if (el) el.addEventListener("click", ev => { ev.stopPropagation(); ev.preventDefault(); },
                                { capture: true, once: true });
  }
}
function pinAutoScroll() {
  pinScrollRaf = 0;
  if (!pinDrag || !pinScrollDir) return;
  const list = $("#sched-list");
  // 一覧が自前のスクロール枠を持っていればそれを、無ければページを動かす
  if (list && list.scrollHeight > list.clientHeight + 1) list.scrollTop += pinScrollDir * 14;
  else window.scrollBy(0, pinScrollDir * 14);
  pinScrollRaf = requestAnimationFrame(pinAutoScroll);
}
/* 行の矩形のどこに落ちたか。
   ★上下の端は「行と行の間に入れる」、真ん中は「その行に地点を紐づける」。
     端の幅は行の高さの3割（最大14px）。行が低いときでも真ん中が潰れないようにする。
   ★矩形を渡すだけの純関数にしてある。位置の測定は dropTargetAt() の仕事で、
     こちらは jsdom でもそのまま検査できる（0-6 の線引き）。 */
function dropZoneIn(rect, y) {
  const edge = Math.min(14, rect.height * 0.3);
  if (y < rect.top + edge) return "before";
  if (y > rect.bottom - edge) return "after";
  return "onto";
}
/* ポインタの真下がどこかを返す。一覧の外なら null。
   ・{ before: li }   … その行の手前に新しい予定を入れる（li が null なら末尾）
   ・{ onto: li }     … その予定に地点を紐づける（行は増えない）
   ★行の矩形で判定する。行と行のすき間に落としても受け付けたいので
     elementFromPoint（＝真下の1要素）は使わない。 */
function dropTargetAt(x, y) {
  const list = $("#sched-list"); if (!list) return null;
  const r = list.getBoundingClientRect();
  if (x < r.left || x > r.right || y < r.top || y > r.bottom) return null;
  const rows = $$("#sched-list > li");
  for (let i = 0; i < rows.length; i++) {
    const rr = rows[i].getBoundingClientRect();
    if (y > rr.bottom) continue;                       // まだ下の行
    const zone = dropZoneIn(rr, y);
    // 日付見出しには紐づけられない（data-i を持たない）ので、常に「間に入れる」
    const linkable = rows[i].classList.contains("sched-item");
    if (zone === "onto" && linkable) return { onto: rows[i] };
    if (zone === "after") return { before: rows[i + 1] || null };
    return { before: rows[i] };
  }
  return { before: null };   // 末尾へ
}
/* 落ちる場所の目印。★行を挿し込まずクラスだけで出す（挿し込むと
   schedDropSlot() が数える子要素が変わってしまう）。
   線＝間に入る／枠＝その行に紐づく、で見分けられるようにする。 */
function markDropTarget(target) {
  const list = $("#sched-list"); if (!list) return;
  $$("#sched-list > li.drop-before, #sched-list > li.drop-onto")
    .forEach(el => el.classList.remove("drop-before", "drop-onto"));
  list.classList.remove("drop-end");
  if (!target) return;
  if (target.onto) target.onto.classList.add("drop-onto");
  else if (target.before) target.before.classList.add("drop-before");
  else list.classList.add("drop-end");
}

/* =========================================================================
   ルート編集 UI（SortableJS）
   ========================================================================= */
function renderRouteEditor() {
  const list = $("#route-list");
  if (!routeIds.length) {
    list.innerHTML = `<li class="route-empty">スケジュールに地点が紐づいていません。スケジュールタブで予定に地点を紐づけると、ここに順番が出ます。</li>`;
  } else {
    list.innerHTML = routeIds.map(id => {
      const p = getPlaceById(id); if (!p) return "";
      return `<li class="route-item" data-id="${esc(id)}">
        <span class="num"></span>
        <span class="type-emoji">${TYPE_ICONS[p.type]}</span>
        <span class="nm">${esc(p.name)}</span>
      </li>`;
    }).join("");
  }
  // ★閲覧専用。並べ替え・追加・削除の手段は置かない（順番はスケジュールが決める）
  // Googleマップでルートを開くボタンのリンクを更新（空なら無効化）
  const g = $("#route-gmaps");
  if (g) {
    const url = googleMapsDirUrl();
    const n = visibleRouteIds().length;
    // ★経由地は9件が上限。件数を出して「多すぎる」ことがその場で分かるようにする
    g.textContent = n ? `🗺 Googleマップでルートを開く（${n}地点）` : "🗺 Googleマップでルートを開く";
    if (n > 11) g.title = "経由地は9件までしか渡せません。マップの「日」フィルタで1日だけに絞ってください。";
    else g.removeAttribute("title");
    g.classList.toggle("too-many", n > 11);
    if (url) { g.href = url; g.classList.remove("disabled"); g.removeAttribute("aria-disabled"); }
    else { g.removeAttribute("href"); g.classList.add("disabled"); g.setAttribute("aria-disabled", "true"); }
  }
}

/* この地点をスケジュールに入れる（カード・特集タブ・マップのピンの「＋ スケジュールに追加」）。
   ★ルートに直接足すのではなく、唯一の正本であるスケジュールに行を足す。
     ルートはそこから自動で作られる。 */
function addPlaceToSchedule(id) {
  const p = getPlaceById(id); if (!p) return;
  // 編集中ならその日、そうでなければ初日の末尾へ。どこに入るかを先に伝える
  const day = (schedEditing && schedEditing !== "all") ? schedEditing : FIRST_DAY;
  if (!window.confirm(`「${p.name}」をスケジュールに追加します。\n`
    + `${dayLabel(day)}の末尾に、時刻なしで入ります。\n\n同行者の画面にも反映されます。`)) return;
  insertSchedItem(schedItemFromName(p.name, day));
  renderMasterPlan();   // insertSchedItem は編集セクションしか描き直さない
}

/* =========================================================================
   天気（Open-Meteo, APIキー不要）
   ========================================================================= */
const WX_ICONS = { 0:"☀️",1:"🌤",2:"⛅",3:"☁️",45:"🌫",48:"🌫",51:"🌦",53:"🌦",55:"🌧",61:"🌧",63:"🌧",65:"🌧",71:"🌨",80:"🌦",81:"🌧",82:"⛈",95:"⛈",96:"⛈",99:"⛈" };
/* 天気を読み込み済みか。★成功したときだけ true にする。
   失敗しても true にすると、電波の無い場所で一度開いただけで
   「タブを開き直しても二度と再試行しない」状態になる（実際そうなっていた）。
   setupTabs() のローカルではなくここに置くのは、成功判定が loadWeather() の中にあるため。 */
let weatherLoaded = false;
async function loadWeather() {
  const wp = DATA.weatherPoint;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${wp.lat}&longitude=${wp.lon}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo&forecast_days=7`;
  const box = $("#weather-content"), alert = $("#weather-alert");
  try {
    const r = await fetch(url);
    const d = await r.json();
    const dl = d.daily;
    const dows = ["日","月","火","水","木","金","土"];
    // ★4泊5日対応: 旅行期間中の日はすべて強調する（tripDate だけでなく DAY_KEYS 全部）
    const tripDays = (typeof DAY_KEYS !== "undefined") ? DAY_KEYS : [wp.tripDate];
    box.innerHTML = dl.time.map((iso, i) => {
      const dt = new Date(iso + "T00:00:00+09:00");
      const isTrip = tripDays.includes(iso);
      return `<div class="wx-day ${isTrip ? "is-trip" : ""}">
        <div class="wx-dow">${dows[dt.getDay()]}${isTrip ? " ★" : ""}</div>
        <div class="wx-date">${dt.getMonth()+1}/${dt.getDate()}</div>
        <div class="wx-icon">${WX_ICONS[dl.weather_code[i]] || "❔"}</div>
        <div class="wx-temp"><span class="hi">${Math.round(dl.temperature_2m_max[i])}°</span> / <span class="lo">${Math.round(dl.temperature_2m_min[i])}°</span></div>
        <div class="wx-pop">☔ ${dl.precipitation_probability_max[i] ?? "–"}%</div>
      </div>`;
    }).join("") + `<p class="wx-note muted">
      ☔ は <b>Open-Meteo</b>（欧米の数値予報モデル）の<b>1時間ごとの降水確率の最大値</b>です。
      気象庁・tenki.jp などの降水確率（<b>6時間区切りで1mm以上</b>）とは定義が違うため、<b>高めに出ます</b>。
      気温もモデルによって数℃変わります。<b>出発の判断は気象庁系の予報もあわせて</b>確認してください。
    </p>`;

    // 日付ラベルは weatherPoint.tripDate / DAY_KEYS から生成する（日付をハードコードしない）
    const fmt = iso => {
      const d = new Date(iso + "T00:00:00+09:00");
      return `${d.getMonth()+1}/${d.getDate()}（${dows[d.getDay()]}）`;
    };
    // その日の主目的に合わせた分岐文言。★中身は DATA.weatherAdvice にある（ここに直書きしない）
    const adviceFor = (iso, rain, hot) => {
      const plan = (DATA.weatherAdvice || {})[iso];
      if (!plan) return "";
      return mdBold(rain ? plan[2] : (hot ? plan[1] : plan[0]));
    };

    const rows = tripDays.map(iso => {
      const i = dl.time.indexOf(iso);
      if (i < 0) return null;
      const pop = dl.precipitation_probability_max[i];
      const wc = dl.weather_code[i];
      const hi = Math.round(dl.temperature_2m_max[i]);
      const rain = wc >= 51 || (pop ?? 0) >= 50;
      const hot = hi >= 33;
      return `<p class="wx-advice"><b>${fmt(iso)}:</b> ${WX_ICONS[wc] || ""} 最高${hi}° / 最低${Math.round(dl.temperature_2m_min[i])}° ・ 降水${pop ?? "–"}%。 ${adviceFor(iso, rain, hot)}</p>`;
    }).filter(Boolean);

    if (rows.length) {
      const anyBad = rows.some(r => r.includes("中止") || r.includes("短縮"));
      const missing = tripDays.filter(iso => dl.time.indexOf(iso) < 0);
      const note = missing.length
        ? `<p class="muted">${missing.map(fmt).join("・")}はまだ7日予報の範囲外です。出発が近づいたら、このページを開くだけで自動更新されます。</p>`
        : "";
      alert.innerHTML = `<div class="alert-box ${anyBad ? "" : "ok"}">
        <b>旅行期間（8/8〜8/12）の見込みと当日の動き方</b>
        ${rows.join("")}
        <p class="muted">予報は直前まで変わります。<b>各日の前夜と当日の朝に、雨雲・雷・最高気温を必ず再確認</b>してから屋外を実施するか決めてください。</p>
        ${note}
      </div>`;
    } else {
      alert.innerHTML = `<div class="alert-box ok">旅行期間（8/8〜8/12）はまだ7日予報の範囲外です。出発が近づいたら再確認を（このページを開くだけで自動更新されます）。</div>`;
    }
    weatherLoaded = true;          // ★ここまで来たときだけ。catch では立てない
  } catch (e) {
    // 文言と挙動を一致させる。フラグを立てないので、次にタブを開けば自動で再試行する
    box.innerHTML = `<p class="muted">天気情報を取得できませんでした（オフライン時など）。電波のある場所でこのタブを開き直すと、自動で再試行します。</p>`;
  }
}

/* =========================================================================
   タブ切替
   ========================================================================= */
function setupTabs() {
  $$("#tabs .tab").forEach(tab => {   // weatherLoaded は loadWeather() 側（成功時だけ立てる）
    tab.addEventListener("click", () => {
      $$("#tabs .tab").forEach(t => t.classList.remove("active"));
      $$(".panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const name = tab.dataset.tab;
      $("#panel-" + name).classList.add("active");
      // ★どのタブへ移っても地図の置き場所を決め直す。
      //   これを忘れると、編集モードに地図を貸したままマップタブへ行ったとき
      //   マップタブが空になる（syncMapDock() が唯一の判断者）。
      syncMapDock();
      if (name === "map") {
        ensureMap();
        setTimeout(revealMap, 60);
      }
      if (name === "weather" && !weatherLoaded) loadWeather();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================================================================
   初期化
   ========================================================================= */
/* =========================================================================
   Firebase リアルタイム同期（スケジュール・確定状態・ルートを全員で共有）
   ・Firebase未接続でも localStorage で通常どおり動く（オフラインファースト）
   ・window.FB は index.html の module スクリプトが用意する
   ========================================================================= */
let fbReady = false, applyingRemote = false;
function fbPush(key, value) {
  if (!fbReady || applyingRemote || !window.FB) return;
  // JSON往復で undefined プロパティを除去（Firebaseは undefined を拒否する）
  // set() は Promise を返すため .catch() が必須。同期 try/catch だけだと
  // permission denied（旅行終了後にDBルールで deny したとき）が未処理拒否になる。
  try {
    window.FB.set(window.FB.ref(window.FB.db, "ise-trip/" + key), JSON.parse(JSON.stringify(value ?? null)))
      .catch(e => console.warn("Firebase 書き込み失敗（ローカル保存は成功）:", e.code || e));
  } catch (e) { console.warn("Firebase 書き込み失敗:", e); }
}
// Firebaseのキーは "." 等を使えないため、status は配列 [{id, s}] にして id を値側に持たせる
function statusToArray() { return Object.keys(statusMap).map(id => ({ id, s: getStatus(id) })); }
// リモート（DB）の変更をローカルへ反映
function applyRemote(d) {
  if (!d) return;
  applyingRemote = true;
  let changed = false;
  if (d.schedule && JSON.stringify(d.schedule) !== JSON.stringify(schedule)) {
    schedule = d.schedule; localStorage.setItem(SCHED_KEY, JSON.stringify({ v: SCHED_VERSION, items: schedule })); changed = true;
  }
  if (Array.isArray(d.status)) {
    const incoming = {};
    d.status.forEach(x => { if (x && x.id) incoming[x.id] = (x.s === "confirmed" ? "confirmed" : "tentative"); });
    // ★DBのstatusは「書き込まれた時点にあった地点」しか持たない。あとから地点を足すと
    //   そのidが欠けたまま届くので、丸ごと置き換えると新しい地点が statusMap から消える。
    //   DATA の category 由来の既定値に上書きする形で合成し、欠けた地点が
    //   （category が confirmed でも）未確定に落ちるのを防ぐ。
    const merged = { ...baseStatusMap(), ...incoming };
    if (JSON.stringify(merged) !== JSON.stringify(statusMap)) {
      statusMap = merged; localStorage.setItem(STATUS_KEY, JSON.stringify({ v: STATUS_VERSION, map: statusMap })); changed = true;
    }
  }
  // ★route は同期しない。スケジュールから作る導出値なので、受信側で作り直す（rerenderAll の先頭）
  if (Array.isArray(d.info) && JSON.stringify(d.info) !== JSON.stringify(infoItems)) {
    infoItems = d.info; localStorage.setItem(INFO_KEY, JSON.stringify({ v: INFO_VERSION, items: infoItems })); changed = true;
  }
  if (Array.isArray(d.plans) && JSON.stringify(d.plans) !== JSON.stringify(plans)) {
    plans = d.plans; localStorage.setItem(PLANS_KEY, JSON.stringify({ v: PLANS_VERSION, items: plans })); changed = true;
  }
  /* 行きたい度とメモ。★カード全体を作り直さず、その部分だけ書き換える。
     同行者が★を付けるたびに再描画すると、こちらが入力中のメモのカーソルが飛ぶ。 */
  if (Array.isArray(d.want)) {
    const inc = {}; d.want.forEach(x => { if (x && x.id) inc[x.id] = x.n; });
    if (JSON.stringify(inc) !== JSON.stringify(wantMap)) {
      wantMap = inc; localStorage.setItem(WANT_KEY, JSON.stringify({ v: WANT_VERSION, map: wantMap }));
      refreshWantRows();
      /* ★ピンの★表示（pinlabel列）もここで描き直す。この分岐は上のとおり changed を立てない
         ので rerenderAll() が走らず、これが無いと「同行者が付けた★が自分の地図に出ない」
         状態になる。自分で★を付けたときは出るので気づけない（0-2）。
         refreshMarkers() はマーカーの絵だけを作り直すので、メモ入力中のカーソルには触らない。 */
      if (typeof map !== "undefined" && map) refreshMarkers();
    }
  }
  if (Array.isArray(d.note)) {
    const inc = {}; d.note.forEach(x => { if (x && x.id) inc[x.id] = x.t; });
    if (JSON.stringify(inc) !== JSON.stringify(noteMap)) {
      noteMap = inc; localStorage.setItem(NOTE_KEY, JSON.stringify({ v: NOTE_VERSION, map: noteMap }));
      refreshNotes();
    }
  }
  applyingRemote = false;
  if (changed) rerenderAll();
}
// status/並び順/ルートに依存する全ビューを再描画
function rerenderAll() {
  /* ★ルートを作り直す。これが無いと「同行者がスケジュールを編集しても、
     こちらの地図のピン順が古いまま」になる。
     以前は route も Firebase で送られてきたので揃っていたが、同期をやめたぶん
     受信側で作り直す必要がある。自分の端末では正常に見えるので気づけない。 */
  routeIds = routeFromSchedule();
  renderAllCards();
  if ($("#info-content")) renderInfo();
  // renderSchedule() が本命・編集セクション・予備プランをまとめて描き直す。
  // ★編集中に他端末の変更が届いても、編集セクションは作り直さない
  //   （入力中のカーソルとIME変換が飛ぶため）。本命と予備だけ更新する。
  if ($("#master-plan")) {
    renderMasterPlan();
    renderBackupPlans();
    if (schedEditing) { renderSchedDayTabs(); renderScheduleEditor(); }
    else renderSchedule();
  }
  if ($("#route-list")) renderRouteEditor();
  if (typeof map !== "undefined" && map) { refreshMarkers(); drawRouteLine(); applyFilters(); }
}
// 匿名ログイン完了後に module から呼ばれる
window.startFirebaseSync = async function () {
  if (!window.FB || fbReady) return;
  fbReady = true;
  try {
    const tripRef = window.FB.ref(window.FB.db, "ise-trip");
    const snap = await window.FB.get(tripRef);
    const d = snap.val();
    // コード側の初期バージョンが新しい（SCHED_DEFAULT/STATUS_DEFAULT を更新した）ら、
    // DB を現在のコードの初期値で作り直す（＝全員に配る初期表示の更新）。
    // ★★ここに新しいキーのバージョン条件を足してはいけない。★★
    //    FB.set(tripRef, …) は「ノード全体」を置き換えるので、
    //    たとえば plans を配るために条件を足すと、schedule も巻き添えで初期値に戻り、
    //    ブラウザで編集した旅程が消える。新しいキーは必ず下のように単独で用意する。
    if (!d || (d.schedVersion || 0) < SCHED_VERSION || (d.statusVersion || 0) < STATUS_VERSION
           || (d.infoVersion || 0) < INFO_VERSION) {
      await window.FB.set(tripRef, JSON.parse(JSON.stringify({
        schedule, schedVersion: SCHED_VERSION,
        status: statusToArray(), statusVersion: STATUS_VERSION,
        info: infoItems, infoVersion: INFO_VERSION,
        plans, plansVersion: PLANS_VERSION,
        /* ★一括リセットの「対象」ではないが、FB.set はノード全体を置き換えるので
           ここに書かないと行きたい度とメモが巻き添えで消える。
           DBに既にあるものを優先して書き戻す＝リセットしない（追補L-6）。 */
        want: (d && Array.isArray(d.want)) ? d.want : wantToArray(), wantVersion: WANT_VERSION,
        note: (d && Array.isArray(d.note)) ? d.note : noteToArray(), noteVersion: NOTE_VERSION
      })));
    } else if (!Array.isArray(d.plans)) {
      // 予備プランはあとから足したキー。既存のDBには無いので、ここだけ単独で用意する
      // （上の一括リセットには絶対に混ぜない）
      fbPush("plans", plans);
      fbPush("plansVersion", PLANS_VERSION);
    }
    window.FB.onValue(tripRef, s => applyRemote(s.val()));
    console.log("Firebase 同期を開始しました");
  } catch (e) { console.warn("Firebase 同期の開始に失敗:", e); fbReady = false; }
};

function init() {
  // ★日帰り（TRIP_DAYS が1件）のときは、日サブタブと日付見出しを CSS で畳む。
  //   DOM も配線も残すので tools/test_days.js はそのまま通り、
  //   複数日の旅行では TRIP_DAYS に行を足すだけで復活する（追補K・T）。
  //   マップの「日」列は MAP_FILTER_COLUMNS 側で落としている。
  document.body.classList.toggle("day-single", TRIP_DAYS.length === 1);
  // ★最初に呼ぶ。setupMap() はマップタブを開くまで走らないが、下の renderRouteEditor() が
  //   currentFilters() 経由でルート列の .checked を読むため、ここで無いとページ全体が落ちる。
  renderMapFilters();
  // ★スケジュールタブは「本命プラン（読む）＋ 予備プラン」。編集セクションは
  //   renderSchedule() の中で schedEditing を見て作られる（既定は作られない＝誤タップ防止）
  renderSchedule();
  renderAllCards();   // スポット＋（絞り込み・並び替え付きの）レストラン／カフェ
  renderRoutes();
  renderPacking();
  renderInfo();
  renderFeature();   // 特集（読み物。FEATURE_TABS のぶんだけ描く）
  renderTickets();   // チケット・予約（添付は開いたときに読み込む）
  syncRouteFromSchedule();   // スケジュールの地点順を初期ルートに反映（片方向連動）
  renderRouteEditor();
  setupLightbox();
  setupTabs();

  // カード・特集タブの「＋ スケジュールに追加」（ルートではなくスケジュールに足す）
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-add-sched]");
    if (b) addPlaceToSchedule(b.dataset.addSched);
  });

  // 確定／未確定バッジ（カード・スケジュール共通）: どこで押しても全タブに反映
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-status-toggle]");
    if (t) toggleStatus(t.dataset.statusToggle);
  });

  // 予定行の地点チップ → その地点のカードへ移動。本命プランと予備プランで共通なので委任で拾う
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-goto-ref]");
    if (a) { e.preventDefault(); gotoRefCard(a.dataset.gotoRef); }
  });
  // 比較表の行はキーボードでも押せるようにする（role=button の <tr> は Enter で click が出ない）
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const a = e.target.closest && e.target.closest("tr[data-goto-ref]");
    if (a) { e.preventDefault(); gotoRefCard(a.dataset.gotoRef); }
  });

  // 🎫 チップ・ピル → チケットタブのそのカードへ移動
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-goto-ticket]");
    if (a) { e.preventDefault(); gotoTicket(a.dataset.gotoTicket); }
  });

  // ★行きたい度。押した行だけ描き直す（カードを作り直さないのでメモ欄が閉じない）
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-want-set]");
    if (!b) return;
    const [id, n] = b.dataset.wantSet.split("|");
    setWant(id, n);
  });
  // メモ。★入力のたびに再描画しない（IMEの変換とカーソルが飛ぶ）
  document.addEventListener("input", (e) => {
    const t = e.target.closest("textarea[data-note]");
    if (t) setNoteDebounced(t.dataset.note, t.value);
  });
  // メモ欄の開閉を控える（再描画で閉じないように。保存も同期もしない）
  document.addEventListener("toggle", (e) => {
    const d = e.target.closest && e.target.closest(".note-box");
    const t = d && d.querySelector("textarea[data-note]");
    if (t) cardNoteOpen[t.dataset.note] = d.open;
  }, true);

  // 注意タブの編集モード（誤タップ防止：既定は閲覧モード）
  $("#info-edit-toggle").addEventListener("click", () => { infoEditing = !infoEditing; renderInfo(); });
  $("#info-add").addEventListener("click", () => {
    infoItems.push({ warn: false, title: "", text: "" });
    saveInfo(); infoEditing = true; renderInfo();
    const last = $$("#info-content .info-title").pop(); if (last) last.focus();
  });
  $("#info-reset").addEventListener("click", () => {
    if (!confirm("注意タブを初期状態に戻しますか？（同行者の端末にも反映されます）")) return;
    infoItems = INFO_DEFAULT.map(x => ({ ...x })); saveInfo(); renderInfo();
  });
  $("#info-export").addEventListener("click", exportInfo);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
