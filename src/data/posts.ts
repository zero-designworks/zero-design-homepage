// お知らせ・コラムの記事データ。
// ここに追記するだけで一覧・詳細ページに自動反映されます。

export type PostCategory = "news" | "column";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; label: string; text: string }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "video"; youtubeId: string; title: string; caption?: string; vertical?: boolean };

export type RelatedLink = { label: string; href: string };

export type Post = {
  slug: string;
  category: PostCategory;
  title: string;
  seoTitle?: string; // <title>用（省略時は title）
  publishedAt: string; // "YYYY-MM-DD"
  excerpt: string; // 一覧の要約 & メタディスクリプション
  eyecatch?: string; // アイキャッチ画像パス
  blocks: PostBlock[];
  externalLinks?: RelatedLink[];
  relatedPages?: RelatedLink[];
};

export const categoryMeta: Record<
  PostCategory,
  { label: string; path: string; description: string }
> = {
  news: {
    label: "お知らせ",
    path: "/news",
    description:
      "ZEROデザインからのお知らせ・支援プロジェクトの最新情報をお届けします。",
  },
  column: {
    label: "コラム",
    path: "/column",
    description:
      "クラウドファンディングや動画・SNS発信のヒントになるコラムを掲載します。",
  },
};

export const posts: Post[] = [
  {
    slug: "ai-video-crowdfunding",
    category: "news",
    title:
      "AI動画でクラウドファンディングを加速｜公開前から“資産”になるSNS動画支援（成功報酬型）のご案内",
    seoTitle:
      "AI動画でクラウドファンディングを加速｜成功報酬型のSNS動画支援・制作事例のご紹介【ZEROデザイン】",
    publishedAt: "2026-08-02",
    excerpt:
      "クラウドファンディングの成否を左右するSNS発信を、AI動画で支援します。公開前から週3本・合計約20本を制作し、終了後も“資産”として活用。費用はクラウドファンディング達成後の成功報酬10%で、先出しの負担がありません。AIアニメ・歴史ドラマ風・MV風など多彩な制作事例（動画）もご紹介します。",
    eyecatch: "/images/posts/ai-video-cf-hero.png",
    blocks: [
      {
        type: "p",
        text: "ZEROデザインは、クラウドファンディングの成否を大きく左右する「SNSでの発信」を、AI動画の力で支援するサービスを強化しています。プロジェクト公開前から継続的に動画を届け、終了後も残り続ける“資産”をつくる——その仕組みと制作事例をご紹介します。",
      },

      { type: "h", text: "SNSでの拡散が、クラウドファンディング成功のカギ" },
      {
        type: "img",
        src: "/images/posts/ai-video-cf-01.png",
        alt: "スマートフォンから動画が拡散し、多くの人に想いが届く様子のイメージイラスト",
        caption: "SNSでどれだけ共感を広げられるかが、支援額を左右します。",
      },
      {
        type: "p",
        text: "クラウドファンディングは、良いプロジェクトページを用意すれば自然に支援が集まるものではありません。実際には、SNSでどれだけ多くの人に想いを届け、共感を広げられるかが支援額を大きく左右します。特に公開前から情報を発信し、「応援したい」と思ってくれる人を増やしておくことが、スタートダッシュにつながります。",
      },

      { type: "h", text: "「頻繁な投稿はハードルが高い」「外注すると高額」という壁" },
      {
        type: "img",
        src: "/images/posts/ai-video-cf-02.png",
        alt: "SNS投稿の負担と外注費用の高さに悩む様子を表したイメージイラスト",
        caption: "「大事なのは分かるけれど続けられない」という課題。",
      },
      {
        type: "p",
        text: "とはいえ、SNSを継続的に運用し続けるのは簡単ではありません。次のような理由から、「発信が大事なのは分かっているけれど続けられない」というプロジェクトは少なくありません。",
      },
      {
        type: "ul",
        items: [
          "毎日の投稿を考える時間がない",
          "動画の企画・撮影・編集まで手が回らない",
          "制作を外注すると費用が高額になりやすい",
          "本業やクラウドファンディングの準備で手一杯",
        ],
      },

      { type: "h", text: "AI動画の自動化で、公開前から週3本・合計20本を制作" },
      {
        type: "img",
        src: "/images/posts/ai-video-cf-03.png",
        alt: "AIが動画を自動で量産し、カレンダーに沿って配信されるイメージイラスト",
        caption: "公開前から計画的に、週3本・合計約20本をお届け。",
      },
      {
        type: "p",
        text: "ZEROデザインは、AIを活用した動画制作の自動化により、この課題を解決します。プロジェクト公開前から週に3本のペースで動画を制作・配信し、合計およそ20本の動画を計画的にお届けします。単なる告知ではなく、「なぜこの挑戦をするのか」という想いをストーリーとして伝えることで、見た人の共感を育てていきます。",
      },
      {
        type: "callout",
        label: "費用について",
        text: "クラウドファンディング達成後の成功報酬10%／先出しの負担なし",
      },

      { type: "h", text: "完成した動画は、クラファン後も“資産”として生き続ける" },
      {
        type: "img",
        src: "/images/posts/ai-video-cf-04.png",
        alt: "制作した動画が積み重なり、宝物のように輝く資産となるイメージイラスト",
        caption: "約20本の動画が、その後の集客や次の挑戦へつながります。",
      },
      {
        type: "p",
        text: "制作した約20本の動画は、クラウドファンディング期間中だけのものではありません。プロジェクト終了後も、事業や団体の魅力を伝え続ける“資産”として活用できます。一度つくった動画が、その後の集客・ファンづくり・次の挑戦へとつながっていきます。",
      },

      { type: "h", text: "Instagram・YouTube・TikTok・Xなど、あらゆる媒体で活用" },
      {
        type: "img",
        src: "/images/posts/ai-video-cf-05.png",
        alt: "InstagramやYouTube、TikTok、Xなど複数のSNS媒体で動画を活用するイメージイラスト",
        caption: "媒体ごとの特性に合わせ、幅広い層へ届けます。",
      },
      {
        type: "p",
        text: "制作した動画は、Instagramリール、YouTube、YouTube Shorts、TikTok、Xなど、さまざまな媒体で活用できます。媒体ごとの特性に合わせて発信することで、より幅広い層にプロジェクトを届けられます。",
      },

      { type: "h", text: "SNS運用を代行、支援者さまは本来の活動に集中できる" },
      {
        type: "img",
        src: "/images/posts/ai-video-cf-06.png",
        alt: "SNS運用を代行し、オーナーがリアルな活動に集中できる様子のイメージイラスト",
        caption: "発信はおまかせ。オーナー様は本来の活動に集中できます。",
      },
      {
        type: "p",
        text: "ZEROデザインがSNSの発信・運用を代行するため、プロジェクトのオーナー様や支援者様は、リアルな場での活動——現地でのクラウドファンディング活動や関係者へのご挨拶、リターンの準備など——に集中していただけます。",
      },

      { type: "h", text: "AI動画で、多彩なPRを実現" },
      {
        type: "p",
        text: "プロジェクトの魅力に合わせて、多彩なタイプの動画を制作します。実際の制作事例を、動画とあわせてご紹介します。",
      },
      {
        type: "video",
        youtubeId: "2CNthQ-K52c",
        title: "🎬 AIアニメーション動画",
        caption: "共感性の高いストーリーを、アニメーションでやわらかく伝えます。",
        vertical: false,
      },
      {
        type: "video",
        youtubeId: "0WZN2Ob8USQ",
        title: "🏯 AI歴史ドラマ風動画",
        caption: "歴史をドラマ風に定期発信し、文化財としての重要性を全国へPRします。",
        vertical: false,
      },
      {
        type: "video",
        youtubeId: "IEHLoY3Koi0",
        title: "🎵 ミュージックビデオ風PR",
        caption: "歌にのせて楽しく事業を紹介し、記憶に残る発信をします。",
        vertical: true,
      },
      {
        type: "video",
        youtubeId: "VKBgjPVEkJU",
        title: "📱 リターン品PR動画",
        caption: "リターン（返礼品）の魅力を、短尺動画で分かりやすく伝えます。",
        vertical: true,
      },
      {
        type: "video",
        youtubeId: "PcCwY3yo0bM",
        title: "✨ クラウドファンディングの応援者をPR",
        caption: "応援してくださる方々を紹介し、応援の輪の広がりを可視化します。",
        vertical: true,
      },

      { type: "h", text: "AI動画・ショート動画制作のご相談はこちら" },
      {
        type: "img",
        src: "/images/posts/ai-video-cf-07.png",
        alt: "AI動画・ショート動画制作について相談するオーナーとZEROデザインのスタッフのイメージイラスト",
        caption: "企画から制作、SNS運用の代行まで一貫して伴走します。",
      },
      {
        type: "p",
        text: "「発信を続けたいけれど手が回らない」「先出しの費用は抑えたい」——そんなクラウドファンディングをご検討の方は、ぜひZEROデザインの「AI動画・ショート動画制作」にご相談ください。企画から制作、SNS運用の代行まで一貫して伴走します。サービスの詳細は下記「関連リンク」よりご覧いただけます。",
      },
    ],
    relatedPages: [
      { label: "サービス｜AI動画・ショート動画制作", href: "/services#ai-video" },
      { label: "クラウドファンディングとは？", href: "/crowdfunding" },
      { label: "お問い合わせ・無料相談はこちら", href: "/contact" },
    ],
  },
  {
    slug: "shrine-temple-crowdfunding-cases",
    category: "column",
    title:
      "神社仏閣のクラウドファンディング成功事例｜本堂・文化財を未来へ残す資金調達とは",
    seoTitle:
      "神社仏閣のクラウドファンディング成功事例｜CAMPFIRE活用・本堂再建の資金調達を解説【小谷寺の事例つき】",
    publishedAt: "2026-08-02",
    excerpt:
      "老朽化した本堂・社殿の修復や文化財の保存に、いま神社仏閣のクラウドファンディングが広がっています。CAMPFIREを活用した資金調達の仕組みと、支援が集まるポイント、リターン設計を解説。ZEROデザインが伴走した「小谷寺 本堂再建プロジェクト（目標500万円に対し約736万円を達成）」の事例もご紹介します。",
    eyecatch: "/images/posts/shrine-temple-cf-hero.png",
    blocks: [
      {
        type: "p",
        text: "何百年もの歴史を受け継いできた神社やお寺。その多くが今、老朽化した本堂・社殿の修復、仏像や文化財の保存、伝統行事の継承といった課題に直面しています。こうした「守り継ぐための挑戦」を支える手段として、いま全国で広がっているのがクラウドファンディングです。本コラムでは、CAMPFIREを活用した神社仏閣のクラウドファンディングの仕組みと成功のポイントを、弊社ZEROデザインが実際に伴走した「小谷寺 本堂再建プロジェクト」の事例を交えてご紹介します。",
      },

      { type: "h", text: "なぜ今、神社仏閣にクラウドファンディングが選ばれるのか" },
      {
        type: "img",
        src: "/images/posts/shrine-temple-cf-01.png",
        alt: "古い木造のお堂を全国の支援者がスマートフォンから応援するイメージイラスト",
        caption: "地域の枠を超えて、想いに共感する人々が支援できる時代へ。",
      },
      {
        type: "p",
        text: "檀家や氏子の減少、少子高齢化により、社殿や本堂の維持・修繕を地域だけで支えることが年々難しくなっています。特に本堂の再建や文化財の修理には数百万円から数千万円規模の費用がかかり、従来の寄進だけではまかないきれないケースが増えています。",
      },
      {
        type: "p",
        text: "クラウドファンディングなら、その土地に暮らす人だけでなく、全国の歴史ファンや日本文化を愛する人々へ直接想いを届け、支援を募ることができます。「なぜ守りたいのか」という物語を丁寧に伝えられることが、寄付集めとの大きな違いです。",
      },
      {
        type: "ul",
        items: [
          "地域の枠を超え、全国から支援を集められる",
          "守り継いできた歴史や想いを、自分たちの言葉で伝えられる",
          "支援者に活動報告を届け、応援の輪を可視化できる",
          "プロジェクトを通じて、新たなファン・参拝者との縁が生まれる",
        ],
      },

      { type: "h", text: "神社仏閣のクラウドファンディングで実現できること" },
      {
        type: "img",
        src: "/images/posts/shrine-temple-cf-02.png",
        alt: "足場を組んで本堂の屋根を修復する職人と、御朱印を表すイメージイラスト",
        caption: "修復・保存から行事の復活まで、幅広い挑戦を後押しします。",
      },
      {
        type: "p",
        text: "神社仏閣のクラウドファンディングは、単なる「修理費集め」にとどまりません。守り継いできた文化そのものを未来へつなぐ、さまざまな挑戦に活用されています。",
      },
      {
        type: "ul",
        items: [
          "本堂・社殿・山門など建造物の修復・再建",
          "仏像・障壁画・古文書といった文化財の保存修理",
          "祭礼・伝統行事の復活や継承",
          "御朱印・お守りなど授与品の新調・企画",
          "参拝者のための防災・バリアフリー・環境整備",
        ],
      },
      {
        type: "p",
        text: "大切なのは、集めた資金を「何に・どのように使うのか」を明確に示すこと。使途と目標金額の根拠がはっきりしているほど、支援者は安心して協力できます。",
      },

      {
        type: "h",
        text: "【事例】小谷寺 本堂再建クラウドファンディング｜目標500万円に対し約736万円を達成",
      },
      {
        type: "img",
        src: "/images/posts/shrine-temple-cf-03.png",
        alt: "滋賀県長浜市・小谷寺の歴史ある本堂と湖北の山並みを描いたイメージイラスト",
        caption: "浅井三代の祈願寺・小谷寺。1300年の歴史を未来へ繋ぐ挑戦。",
      },
      {
        type: "callout",
        label: "プロジェクト結果",
        text: "目標500万円に対し 約736万円／支援者388人",
      },
      {
        type: "p",
        text: "滋賀県長浜市にある小谷寺（おだにじ）は、戦国武将・浅井長政公とお市の方が深く信仰した、浅井三代の祈願寺です。しかし築およそ300年を数える本堂は老朽化が進み、倒壊の危機に直面していました。そこで立ち上げられたのが、CAMPFIREを活用した「本堂再建クラウドファンディング」です。",
      },
      {
        type: "p",
        text: "ZEROデザインは、このプロジェクトにキュレーションパートナーとして伴走。「1300年の歴史を、地域の心とともに未来へ繋ぐ」という物語を軸に、プロジェクトページの構成・文章、写真や映像、そして公開後のSNS発信までを一貫してサポートしました。",
      },
      {
        type: "p",
        text: "その結果、地元・湖北地域だけでなく全国の歴史ファンから共感が集まり、第1目標の500万円を大きく超える約736万円（支援者388人）を達成。集まった資金は緊急保全工事と本堂修復に活かされ、2028年の開山1300年記念に向けた大きな一歩となりました。「想いが本物であれば、伝え方次第で必ず人は動く」——小谷寺プロジェクトは、そのことを証明する事例となりました。",
      },

      { type: "h", text: "支援が集まる神社仏閣クラウドファンディング 3つのポイント" },
      {
        type: "img",
        src: "/images/posts/shrine-temple-cf-04.png",
        alt: "物語・ビジュアル・SNS発信の3要素を表したイメージイラスト",
        caption: "「伝わる設計」が、支援の輪を大きく広げます。",
      },
      {
        type: "ul",
        items: [
          "①ストーリー：「なぜ今、守らなければならないのか」を、歴史と現状の両面から丁寧に伝える",
          "②ビジュアル：傷んだ現状の写真と、修復後・かつての美しい姿が伝わる映像やイラストを用意する",
          "③SNS発信：公開して終わりにせず、進捗や感謝、活動報告を継続的に発信して応援の輪を広げる",
        ],
      },
      {
        type: "p",
        text: "特に神社仏閣のプロジェクトでは、歴史的背景と「未来へ残したい」という想いに共感が集まります。事実の説明だけでなく、人の心が動く物語として設計することが成功の鍵です。",
      },

      { type: "h", text: "心に響くリターン（返礼品）の設計" },
      {
        type: "img",
        src: "/images/posts/shrine-temple-cf-05.png",
        alt: "限定御朱印・芳名帳への記名・特別拝観などのリターンを表すイメージイラスト",
        caption: "その寺社ならではの、特別な体験がリターンになります。",
      },
      {
        type: "p",
        text: "神社仏閣のクラウドファンディングでは、金額の見返りよりも「ここでしか得られない体験」に価値が生まれます。プロジェクトの記憶が形として残るリターンは、支援者との長いご縁にもつながります。",
      },
      {
        type: "ul",
        items: [
          "限定デザインの御朱印・御城印",
          "芳名帳・記念銘板への名入れ（後世に名を残す）",
          "特別拝観や住職による法話・境内案内",
          "地元特産品とのセット、記念品の授与",
        ],
      },

      { type: "h", text: "ZEROデザインの神社仏閣クラウドファンディング支援" },
      {
        type: "img",
        src: "/images/posts/shrine-temple-cf-06.png",
        alt: "カメラとパソコンを手に寺社の挑戦に伴走するZEROデザインのスタッフのイメージイラスト",
        caption: "企画から公開後の発信まで、ゼロから伴走します。",
      },
      {
        type: "p",
        text: "ZEROデザインは、小谷寺の事例をはじめ、神社仏閣・文化財・地域の歴史にまつわるクラウドファンディングを得意としています。企画から公開後の情報発信まで、一貫して伴走します。",
      },
      {
        type: "ul",
        items: [
          "企画・目標設計・ストーリー構成",
          "プロジェクトページの制作・文章づくり",
          "写真・映像・AIを活用したビジュアル制作",
          "SNS運用・リール動画による発信支援",
          "公開後の活動報告・支援拡大の伴走",
        ],
      },
      {
        type: "p",
        text: "「守り継いできた歴史を未来へ残したい」——その想いを、伝わる形へ整えるのがZEROデザインの役割です。本堂や社殿の修復、文化財の保存、伝統行事の継承など、神社仏閣のクラウドファンディングをご検討の方は、お気軽にお問い合わせください。",
      },

      { type: "h", text: "まずは無料相談から。あなたの寺社の挑戦をお聞かせください" },
      {
        type: "p",
        text: "「クラウドファンディングに興味はあるけれど、何から始めればいいか分からない」「目標金額やリターンをどう決めればいいのか不安」——そんな段階からのご相談を歓迎しています。まだ計画が固まっていなくても大丈夫です。守り継いできた歴史や、本堂・社殿・文化財に込められた想いをお聞かせいただければ、実現に向けた進め方を一緒に整理します。",
      },
      {
        type: "callout",
        label: "無料相談・お問い合わせ受付中",
        text: "構想段階のご相談も歓迎します",
      },
      {
        type: "p",
        text: "ご相談は無料です。企画・目標設計から、プロジェクトページの制作、写真・映像、公開後のSNS発信まで、ZEROデザインがゼロから伴走します。下記「関連リンク」の「お問い合わせ」、またはページ下部の「無料相談を申し込む」より、どうぞお気軽にご連絡ください。あなたの寺社の想いを、全国へ伝わる形にするお手伝いをいたします。",
      },
    ],
    externalLinks: [
      {
        label: "小谷寺 本堂再建プロジェクト（CAMPFIRE）",
        href: "https://camp-fire.jp/projects/874521/view",
      },
    ],
    relatedPages: [
      { label: "お問い合わせ・無料相談はこちら", href: "/contact" },
      { label: "クラウドファンディングとは？", href: "/crowdfunding" },
      { label: "クラウドファンディングの活用法", href: "/crowdfunding-uses" },
    ],
  },
  {
    slug: "fmotsu-give-part2-radio",
    category: "news",
    title: "FMおおつ『GIVEの流儀 Part2』に代表・浅見和貴が出演しました",
    seoTitle:
      "FMおおつ『GIVEの流儀 Part2』出演｜ZEROデザイン浅見和貴が小谷寺クラファン・長浜への想いを語る",
    publishedAt: "2026-01-11",
    excerpt:
      "FMおおつのラジオ番組『GIVEの流儀 Part2』に、ZEROデザイン代表・浅見和貴が出演。小谷寺本堂再建クラウドファンディング（目標500万円に対し約736万円を達成）や、地元・長浜／湖北地域への想いを語りました。放送はApple Podcastsなどのアーカイブでもお聴きいただけます。",
    eyecatch: "/images/posts/fmotsu-give-radio.png",
    blocks: [
      { type: "p", text: "ZEROデザイン代表の浅見和貴が、FMおおつ（79.1MHz）のラジオ番組『GIVEの流儀 Part2』にゲスト出演しました。" },
      { type: "callout", label: "出演番組", text: "FMおおつ『GIVEの流儀 Part2』第22回" },
      { type: "h", text: "番組『GIVEの流儀』について" },
      { type: "p", text: "『GIVEの流儀 Part2』は、FMおおつ（79.1MHz／毎週日曜 22:00〜22:30）で放送されているトーク番組です。パーソナリティは、BNI滋賀西京都北のリージョンディレクターを務める古田誠さん。提供はBNI滋賀西京都北。地域で「与える（GIVE）」を体現しながら挑戦を続ける人にスポットを当て、その活動や想いを掘り下げていく番組です。" },
      { type: "h", text: "放送で語った内容" },
      { type: "p", text: "今回の放送では、パーソナリティの古田さんとの対話を通じて、浅見の歩みとクラウドファンディングへの想いをお話ししました。主なトピックは次のとおりです。" },
      {
        type: "ul",
        items: [
          "小谷寺（滋賀県長浜市）本堂再建クラウドファンディングの舞台裏",
          "目標金額500万円に対し、全国の歴史ファンなどから約736万円の支援が集まった経緯",
          "大阪・京橋出身、現在は長浜市・湖北地域で活動する立場から見た、地元への想い",
          "「伝え方」で挑戦を後押しする、ZEROデザインの取り組み",
        ],
      },
      { type: "p", text: "「想いが本物であれば、伝え方次第で必ず人は動く」。小谷寺プロジェクトで得たこの確信と、歴史・文化・地域を未来へつなぐことへの想いを、番組を通じてお伝えしました。" },
      { type: "h", text: "アーカイブ配信でお聴きいただけます" },
      { type: "p", text: "放送内容は、Apple Podcasts・Spotify・Amazon Musicなどのポッドキャストや、FMプラプラ（全国配信）のアーカイブでお聴きいただけます。下記「リンク」よりどうぞ。" },
      { type: "p", text: "ZEROデザインは、クラウドファンディング・映像・デザイン・SNSの力で、ゼロからの挑戦を「伝わる形」へと整えます。取材・出演のご依頼、クラウドファンディングのご相談も、お気軽にお問い合わせください。" },
    ],
    externalLinks: [
      {
        label: "FMおおつ 番組紹介ページ（GIVEの流儀 Part2）",
        href: "https://fmotsu.com/2026/01/11/give011126/",
      },
      {
        label: "Apple Podcasts で第22回を聴く",
        href: "https://podcasts.apple.com/jp/podcast/%E7%AC%AC22%E5%9B%9Egive%E3%81%AE%E6%B5%81%E5%84%80part-2-%E6%B5%85%E8%A6%8B%E5%92%8C%E8%B2%B4%E3%81%95%E3%82%93/id1845315341?i=1000748719333",
      },
    ],
    relatedPages: [
      { label: "代表プロフィール（浅見 和貴）", href: "/profile" },
      { label: "クラウドファンディングとは？", href: "/crowdfunding" },
    ],
  },
  {
    slug: "courage-design-crowdfunding-start",
    category: "news",
    title:
      "クラージュデザイン株式会社のクラウドファンディングが2026年8月12日に開始します",
    publishedAt: "2026-08-02",
    excerpt:
      "ZEROデザインは、クラージュデザイン株式会社のクラウドファンディングをキュレーションパートナーとしてサポートしています。廃材パレットを活用したペット用家具（ベッド）のプロジェクトが2026年8月12日に開始予定です。",
    eyecatch: "/images/posts/courage-design-crowdfunding-start.jpg",
    blocks: [
      { type: "p", text: "クラージュデザイン株式会社のクラウドファンディングをサポートしています。" },
      {
        type: "p",
        text: "ZEROデザインは、クラウドファンディング支援・SNS動画支援を行うキュレーションパートナーとして、クラージュデザイン株式会社のプロジェクトをサポートしています。",
      },
      {
        type: "p",
        text: "本プロジェクトでは、廃材パレットを活用したペット用家具（ベッド）の製作を通じて、環境に配慮したものづくりと、ペットと人が心地よく暮らせる社会づくりを目指しています。",
      },
      { type: "callout", label: "クラウドファンディング開始日", text: "2026年8月12日" },
      { type: "p", text: "プロジェクト公開後は、こちらのホームページでも詳細をご案内いたします。" },
      { type: "h", text: "ZEROデザインの支援内容" },
      { type: "p", text: "ZEROデザインでは、本プロジェクトにおいて以下のサポートを担当しています。" },
      {
        type: "ul",
        items: [
          "クラウドファンディング企画・構成支援",
          "プロジェクトページの改善提案",
          "SNS発信・動画活用支援",
          "プロモーション全体のキュレーション",
        ],
      },
      { type: "p", text: "プロジェクトの魅力がより多くの方へ伝わるよう、公開前から伴走支援を行っています。" },
      { type: "p", text: "プロジェクト公開をお楽しみに。" },
    ],
    externalLinks: [
      {
        label: "クラージュデザイン株式会社 Instagram",
        href: "https://www.instagram.com/couragedesign2026/?hl=ja",
      },
    ],
    relatedPages: [
      { label: "クラウドファンディングとは？", href: "/crowdfunding" },
      { label: "クラウドファンディングの活用法", href: "/crowdfunding-uses" },
    ],
  },
  {
    slug: "claude-code-instagram-automation",
    category: "column",
    title:
      "Claude CodeでInstagram運用を自動化｜クラウドファンディング成功を支えるSNS運用とは",
    seoTitle:
      "Claude CodeでInstagram運用を自動化｜クラウドファンディング成功を支えるSNS・リール動画運用",
    publishedAt: "2026-08-02",
    excerpt:
      "クラウドファンディングでは公開後のSNS発信が成功のポイント。ZEROデザインではClaude Codeを活用し、Instagram投稿やリール動画制作の効率化を支援しています。クラージュデザイン株式会社様のSNS運用事例も紹介します。",
    eyecatch: "/images/posts/claude-code-instagram-automation.png",
    blocks: [
      { type: "h", text: "クラウドファンディングは「公開後」のSNS発信が成功のカギ" },
      { type: "p", text: "クラウドファンディングは、プロジェクトページを公開して終わりではありません。むしろ公開後は、" },
      {
        type: "ul",
        items: [
          "制作の裏側",
          "活動報告",
          "支援者への感謝",
          "リターン紹介",
          "イベント告知",
          "メディア掲載情報",
        ],
      },
      { type: "p", text: "などをInstagramやFacebook、Xなどで継続的に発信することが、支援拡大につながります。" },
      { type: "p", text: "しかし実際には、" },
      {
        type: "ul",
        items: [
          "投稿を考える時間がない",
          "デザイン制作が追いつかない",
          "リール動画まで手が回らない",
          "更新頻度が下がってしまう",
        ],
      },
      { type: "p", text: "という課題を抱えるプロジェクトも少なくありません。" },
      { type: "h", text: "Claude Codeを活用したSNS運用の自動化" },
      { type: "p", text: "ZEROデザインでは、Claude Codeを活用したSNS運用の自動化に取り組んでいます。例えば、" },
      {
        type: "ul",
        items: [
          "Instagram投稿の下書き生成",
          "キャプション作成",
          "ハッシュタグ案の生成",
          "投稿画像・カルーセル構成の作成",
          "ホームページの記事からSNS投稿への展開",
          "リール動画の台本作成",
          "リール動画のテロップ原稿作成",
          "AI動画制作ワークフローとの連携",
        ],
      },
      { type: "p", text: "などを効率化し、運用にかかる時間を大幅に短縮しています。" },
      { type: "p", text: "さらに、リール動画制作についてもAIを組み合わせた自動化フローを構築し、短期間で継続的に発信できる体制づくりを支援しています。" },
      { type: "h", text: "クラージュデザイン株式会社様でもSNS運用を支援" },
      { type: "p", text: "ZEROデザインがキュレーションパートナーとして支援しているクラージュデザイン株式会社様でも、Claude CodeなどのAIを活用し、Instagram運用の効率化に取り組んでいます。" },
      { type: "p", text: "制作の裏側や活動報告などを継続的に発信しやすい仕組みを整えることで、クラウドファンディング期間中の情報発信をサポートしています。" },
      { type: "p", text: "クラージュデザイン株式会社様のInstagramは、下記「リンク」よりご覧いただけます。" },
      { type: "h", text: "AIは「量産」のためだけではなく「継続」のため" },
      { type: "p", text: "SNSで成果を出すためには、継続して情報を届けることが重要です。AIやClaude Codeは、人の代わりに想いを発信するものではありません。" },
      { type: "p", text: "投稿制作や動画制作などの定型作業を効率化することで、人は" },
      {
        type: "ul",
        items: [
          "プロジェクトの魅力を考える",
          "支援者とコミュニケーションを取る",
          "新しい企画を考える",
        ],
      },
      { type: "p", text: "といった、本来注力すべき仕事に時間を使えるようになります。" },
      { type: "h", text: "ZEROデザインではAIを活用したSNS・クラウドファンディング支援を行っています" },
      { type: "p", text: "ZEROデザインでは、" },
      {
        type: "ul",
        items: [
          "クラウドファンディング企画・伴走支援",
          "SNS運用支援",
          "Instagram運用",
          "リール動画制作",
          "AI動画制作",
          "Claude Codeを活用した業務効率化",
          "ホームページ制作",
        ],
      },
      { type: "p", text: "まで一貫してサポートしています。" },
      { type: "p", text: "クラウドファンディングやSNS運用をご検討の方は、お気軽にお問い合わせください。" },
    ],
    externalLinks: [
      {
        label: "クラージュデザイン株式会社 公式Instagram",
        href: "https://www.instagram.com/couragedesign2026/?hl=ja",
      },
    ],
    relatedPages: [
      { label: "クラウドファンディングとは？", href: "/crowdfunding" },
      { label: "サービス（SNS動画・AI動画支援）", href: "/services" },
    ],
  },
];

// ---- ヘルパー ----
const byDateDesc = (a: Post, b: Post) => b.publishedAt.localeCompare(a.publishedAt);

export const newsPosts = posts.filter((p) => p.category === "news").sort(byDateDesc);
export const columnPosts = posts.filter((p) => p.category === "column").sort(byDateDesc);

export function getPostsByCategory(category: PostCategory): Post[] {
  return posts.filter((p) => p.category === category).sort(byDateDesc);
}

export function getPost(category: PostCategory, slug: string): Post | undefined {
  return posts.find((p) => p.category === category && p.slug === slug);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}
