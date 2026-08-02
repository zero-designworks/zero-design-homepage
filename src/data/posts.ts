// お知らせ・コラムの記事データ。
// ここに追記するだけで一覧・詳細ページに自動反映されます。

export type PostCategory = "news" | "column";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; label: string; text: string };

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
