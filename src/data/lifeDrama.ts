// 人生ドラマ制作（AIアニメ）LP のデータ。文言・動画・価格はここを編集するだけで反映されます。

/**
 * 入口商品：『人生ストーリー発見』セッション
 * 申し込みは暫定で「Facebookで友達申請 → メッセージ」。
 * 決済付きの予約に切り替えるときは reservationUrl と applySteps を差し替える。
 * （TimeRex 予約ページ: https://timerex.net/s/asami.marketinge_09f1/6ecd7454 ）
 */
export const lifeDramaOffer = {
  name: "『人生ストーリー発見』セッション",
  length: "60分",
  price: "3,000円",
  priceNumber: 3000,
  /** LP内のボタンはまず説明ページへ。説明ページの中で Facebook へ誘導する */
  detailPath: "/life-drama/session",
  detailLabel: "セッションの詳細・申し込みへ",
  reservationUrl: "https://www.facebook.com/asamikazuki1102/",
  applyLabel: "Facebookで申し込む",
  applyMessage: "『人生ストーリー発見』セッションをお願いします",
  applySteps: [
    "上のボタンから浅見和貴のFacebookを開き、友達申請を送る",
    "メッセージで「『人生ストーリー発見』セッションをお願いします」と送る",
    "日程とお支払い方法を、メッセージでご案内します",
  ],
  note: "前半30分のヒアリングと、後半30分のストーリー作成で、1分で伝わるPRアニメの設計図をお渡しします。合わないと思えば、セッションで終わって構いません。",
} as const;

/** セッション説明ページ（/life-drama/session）の内容 */
export const sessionDetail = {
  lead: "60分で、1分で伝わるPRアニメのストーリーをつくります。前半30分はヒアリング、後半30分はストーリー作成。終わるころには、そのままアニメ化できる1分の物語が手元に残ります。",
  forWhom: [
    "交流会で名刺を配っても、覚えてもらえない",
    "想いはあるのに「伝わらない」「自己紹介が弱い」と感じている",
    "コーチ・コンサル・士業・研修講師・保険・セラピストなど、形のない商品を扱っている",
    "借金・病気・倒産などの原体験を、同情ではなく誇れる物語に変えたい",
    "口下手・顔出しが苦手。でも、人生は面白いと言われる",
  ],
  flow: [
    {
      no: "前半30分",
      title: "ヒアリング",
      body: "こちらから質問します。うまく話せなくて大丈夫です。",
      points: [
        "原点：何に夢中になり、どう育ったか",
        "挫折：うまくいかなかった時期、失ったもの",
        "転機：何がきっかけで変わったか",
        "使命：いま誰のために、何をしているか",
      ],
    },
    {
      no: "後半30分",
      title: "ストーリー作成",
      body: "聴いた内容から、1分に収まる物語を一緒につくります。",
      points: [
        "1分に入れる「見せ場」を選ぶ",
        "あらすじ（場面の流れ）に整える",
        "冒頭のキャッチコピーを決める",
        "「覚えてほしいこと」を一文にまとめる",
      ],
    },
  ],
  deliverables: [
    "1分PRアニメのストーリー（あらすじ・場面の流れ）",
    "冒頭のキャッチコピーと、締めのひと言",
    "そのまま使える自己紹介文・プロフィール文の土台",
  ],
  preparation: [
    "準備は不要です。思い出せる範囲でお話しいただければ十分です",
    "あれば：昔の写真数枚、経歴がわかるメモ。1分のアニメを見せたい場面（交流会・SNSなど）を考えておくと、後半がスムーズです",
    "オンライン（Zoom）または対面（滋賀・長浜周辺）。どちらでも60分です",
  ],
  payment: "料金は3,000円（税込）。お支払い方法は、お申し込み後のメッセージでご案内します。アニメの制作は、セッション後に別途ご相談です。",
  after: "セッションのあと、合わないと思えばそこで終わって構いません。続けたい方には、このストーリーを60秒の名刺アニメに仕上げる制作へ。さらにしっかり伝えたい方には、24話の人生ドラマ制作へと進む道があります。",
} as const;

export type LpVideo = {
  id: string;
  title: string;
  caption?: string;
  /** YouTube の動画ID（youtubeId / instagramUrl / mp4 のいずれか1つ） */
  youtubeId?: string;
  /** Instagram 投稿・リールのURL */
  instagramUrl?: string;
  /** public/videos/ に置いた自社ホスティング動画 */
  mp4?: { src: string; poster?: string };
  vertical?: boolean;
};

/** ① 心を動かすストーリー動画（この順に掲載） */
export const storyVideos: LpVideo[] = [
  {
    id: "story-cf-pr",
    title: "クラウドファンディングPR（実写＋アニメ）",
    caption: "クラージュデザイン株式会社様。実写とAIアニメを組み合わせ、創業の想いを届けたクラファンPR動画",
    youtubeId: "2CNthQ-K52c",
  },
  {
    id: "story-pet-cemetery",
    title: "ペット霊園ストーリー",
    caption: "大切な家族を見送る場所の物語を、やさしいアニメで",
    youtubeId: "R082iXjsK1E",
  },
  {
    id: "story-guide-dog-mv",
    title: "盲導犬ミュージックビデオ",
    caption: "盲導犬と歩む日々を、歌とアニメで描いたMV",
    youtubeId: "zI98r25OJw4",
  },
  {
    id: "story-founding",
    title: "創業物語アニメ",
    caption: "ゼロから事業を立ち上げた経営者の一代記",
    youtubeId: "BYM1_ve_o1o",
  },
];

/** ② 名刺アニメの紹介動画（見出し直下に配置） */
export const meishiIntroVideo: LpVideo = {
  id: "meishi-intro",
  title: "名刺動画",
  caption: "名刺紹介（縦型・60秒前後）。交流会でスマホを見せるだけで、人生の第1話が伝わります",
  mp4: { src: "/videos/life-drama/meishi-intro.mp4", poster: "/videos/life-drama/meishi-intro-poster.jpg" },
  vertical: true,
};

/** ② 60秒 名刺アニメ（自社ホスティング） */
export const meishiVideos: LpVideo[] = [
  {
    id: "meishi-cyber-insurance",
    title: "サイバー保険 名刺動画",
    caption: "保険代理店の方の「なぜこの仕事をしているか」を60秒で",
    mp4: { src: "/videos/life-drama/meishi-cyber-insurance.mp4", poster: "/videos/life-drama/meishi-cyber-insurance-poster.jpg" },
  },
  {
    id: "meishi-car-dealer",
    title: "車販売 名刺動画",
    caption: "お客様との出会いと、仕事への想いを物語に",
    mp4: { src: "/videos/life-drama/meishi-car-dealer.mp4", poster: "/videos/life-drama/meishi-car-dealer-poster.jpg" },
  },
  {
    id: "meishi-toyama",
    title: "當山さん 名刺動画（縦型）",
    caption: "交流会でスマホを見せるだけ。縦型ならその場で再生できます",
    mp4: { src: "/videos/life-drama/meishi-toyama.mp4", poster: "/videos/life-drama/meishi-toyama-poster.jpg" },
    vertical: true,
  },
  {
    id: "mv-pet-taxi-global",
    title: "ペットタクシー 海外向けMVアニメ（縦型）",
    caption: "海外のお客様に向けて、言葉を超えて伝わるMV仕立て",
    mp4: { src: "/videos/life-drama/mv-pet-taxi-global.mp4", poster: "/videos/life-drama/mv-pet-taxi-global-poster.jpg" },
    vertical: true,
  },
];

/** ③ 歴史ドラマ（史実と人物への敬意） */
export const historyVideos: LpVideo[] = [
  {
    id: "history-oichi",
    title: "お市の方様の生き様",
    caption: "滋賀・小谷寺様 歴史PR動画。本堂再建クラファンで全国の歴史好きへ届けました",
    youtubeId: "0WZN2Ob8USQ",
  },
  {
    id: "history-chacha",
    title: "茶々様（ショート）",
    caption: "浅井三姉妹の物語をショート動画で",
    youtubeId: "DSoPE3juP00",
    vertical: true,
  },
];

/** ④ 物語をその先へ：広告・SNS動画 */
export const adVideos: LpVideo[] = [
  {
    id: "ad-meishi-reel",
    title: "名刺動画（Instagramリール）",
    caption: "SNSでそのまま流せる名刺アニメ",
    instagramUrl: "https://www.instagram.com/reels/DbDbAq-Tlw3/",
  },
  {
    id: "ad-pet-cremation",
    title: "ペット火葬 広告動画",
    caption: "株式会社ZERO様。物語のトーンを引き継いだSNS広告",
    instagramUrl: "https://www.instagram.com/p/DSB-NEQkrOY/",
  },
  {
    id: "ad-manga",
    title: "漫画広告",
    caption: "タンデムデザイン様。漫画のコマ割りで一気に読ませる広告動画",
    youtubeId: "s_WJVysuQM0",
  },
];

/** なぜ人生ドラマなのか（其の一〜四） */
export const reasons = [
  {
    no: "其の一",
    title: "価格競争から抜ける",
    body: "物語で心が動けば、比較される前に「この人に頼みたい」になります。",
    image: "/images/life-drama/reason-01.webp",
    alt: "物語に心を動かされ、迷わず一人の人物を選ぶ人々のアニメ風イラスト",
  },
  {
    no: "其の二",
    title: "忘れられなくなる",
    body: "名刺は翌日捨てられても、60秒のアニメは記憶に残り続けます。",
    image: "/images/life-drama/reason-02.webp",
    alt: "スマホで再生された60秒アニメに見入る交流会の参加者のアニメ風イラスト",
  },
  {
    no: "其の三",
    title: "挫折が、武器になる",
    body: "借金・病気・倒産。重い原体験も、アニメなら同情ではなく共感と信頼に変わります。",
    image: "/images/life-drama/reason-03.webp",
    alt: "嵐の中を進んだ過去が、誇れる物語として描かれるアニメ風イラスト",
  },
  {
    no: "其の四",
    title: "話さずとも、伝わる",
    body: "撮影なし・顔出し不要。口下手でも、動画があなたの代わりに語ります。",
    image: "/images/life-drama/reason-04.webp",
    alt: "本人は黙っていても、動画が代わりに想いを語っているアニメ風イラスト",
  },
];

/** 本編（24話連載）のストーリーボード例（パン屋の創業物語） */
export const storyboard = [
  { src: "/images/life-drama/scene-01.webp", alt: "故郷の田んぼに立つ少年", label: "原点" },
  { src: "/images/life-drama/scene-02.webp", alt: "帰郷の電車の窓辺", label: "帰郷" },
  { src: "/images/life-drama/scene-03.webp", alt: "夜、ひとり決意する主人公", label: "決意" },
  { src: "/images/life-drama/scene-04.webp", alt: "嵐の海へ漕ぎ出す船", label: "挫折" },
  { src: "/images/life-drama/scene-05.webp", alt: "開店の朝、店先に立つ", label: "転機" },
  { src: "/images/life-drama/scene-06.webp", alt: "笑顔でパンを手渡す店主", label: "使命" },
];

/** ご依頼の流れ */
export const steps = [
  {
    step: "01",
    tag: "入口",
    title: lifeDramaOffer.name,
    body: "60分の個別セッション。前半30分のヒアリングと後半30分のストーリー作成で、1分PRアニメの設計図をお渡しします。",
    price: `${lifeDramaOffer.price}`,
    sub: `${lifeDramaOffer.length}・個別・オンライン可`,
  },
  {
    step: "02",
    tag: "第1話",
    title: "60秒 名刺アニメ",
    body: "交流会で名刺代わりに見せる「人生の予告編」。出会った瞬間にファンにします。",
    price: "個別お見積り",
    sub: "撮影なし・写真と資料だけ",
  },
  {
    step: "03",
    tag: "本編",
    title: "人生大河アニメ制作",
    body: "24話連載のショートドラマ＋セールス動画（VSL）を納品。SNS・講演・LP・出版に一生使える資産に。",
    price: "300,000円〜",
    sub: "24話＋VSL",
  },
  {
    step: "04",
    tag: "その先",
    title: "発信・講演・出版へ",
    body: "SNS運用、講演オープニング映像、出版・採用にも展開。物語は一度つくれば、何度でも使えます。",
    price: "ご相談",
    sub: "SNS・講演・出版・採用",
  },
];

/** 実績の数字 */
export const stats = [
  { value: "736万円", label: "歴史クラファン 支援総額" },
  { value: "388名", label: "支援者数" },
  { value: "147%", label: "達成率" },
  { value: "約20本", label: "撮影なし・週3本で制作した歴史アニメ" },
];

/** よくある質問 */
export const lifeDramaFaqs = [
  {
    q: "本当に撮影なし・顔出しなしで作れますか？",
    a: "はい。お手元の写真と資料をお送りいただくだけで、本人そっくりのアニメキャラクター（武将姿なども可）を生成して制作します。顔出しが苦手な方ほど向いています。",
  },
  {
    q: "話すのが苦手でも、セッションは大丈夫ですか？",
    a: "大丈夫です。前半30分は、こちらから質問しながら原点・挫折・転機・使命を順にお聞きします。うまく話せなくても、聴き取った内容を後半30分で1分の物語の形に整えるのが私の仕事です。",
  },
  {
    q: "セッションを受けたら、必ず本編を頼まないといけませんか？",
    a: "いいえ。セッションでお渡しするストーリーは、そのまま自己紹介やプロフィール文にも使えます。合わないと思えば、セッションで終わって構いません。",
  },
  {
    q: "どんな業種の方に向いていますか？",
    a: "コーチ・コンサル・士業・研修講師・保険・セラピストなど、形のない商品を扱う方。借金や病気、倒産などの原体験を、同情ではなく誇れる物語に変えたい経営者の方に特に喜ばれています。",
  },
  {
    q: "遠方でも依頼できますか？",
    a: "できます。滋賀県長浜市を拠点にしていますが、セッションはオンラインでも可能です。制作は写真と資料のやり取りだけで進むため、全国どこからでもご依頼いただけます。",
  },
];
