export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  articleLink?: { label: string; href: string };
};

export const services: Service[] = [
  {
    id: "crowdfunding",
    title: "クラウドファンディング支援",
    short: "企画から公開後の広報まで伴走",
    description:
      "企画の立ち上げから、ターゲット設計、ページ構成、文章作成、魅力的なリターン設計、広報戦略まで、プロジェクト成功へ向けて伴走します。",
    features: [
      "プロジェクト企画・ストーリー設計",
      "ページ構成・原稿制作",
      "リターン設計・広報設計",
      "公開中の改善提案・活動報告",
    ],
    image: "/images/generated/svc-crowdfunding.png",
    href: "/services#crowdfunding",
  },
  {
    id: "sns-video",
    title: "クラウドファンディングSNS動画支援",
    short: "クラファン期間中の発信を丸ごと支援",
    description:
      "クラファン期間中の熱量を維持・拡大するための、リール、YouTube Shorts、活動報告、カウントダウン動画などを継続的に制作します。",
    features: [
      "開始告知・想い・リターン紹介動画",
      "達成率報告・カウントダウン",
      "撮影なし、写真や資料を送るだけ",
      "Reels / Shorts / TikTok 完全対応",
    ],
    image: "/images/generated/svc-sns-video.png",
    href: "/services#sns-video",
  },
  {
    id: "ai-video",
    title: "AI動画・ショート動画制作",
    short: "撮影なしで高品質なショート動画を全国対応",
    description:
      "AI画像、AI動画、AI音声、Remotionなどを駆使し、撮影なしでも高品質なショート動画を制作。全国どこからでもご依頼可能です。",
    features: [
      "企画・台本・AI画像/動画生成",
      "AIナレーション・テロップアニメ",
      "YouTube Shorts / Reels / TikTok",
      "複数本の量産に対応",
    ],
    image: "/images/generated/svc-ai-video.webp",
    href: "/services#ai-video",
    articleLink: {
      label: "AI動画でクラウドファンディングを加速（成功報酬型・制作事例）",
      href: "/news/ai-video-crowdfunding",
    },
  },
  {
    id: "web-design",
    title: "Web・LP・デザイン制作",
    short: "世界観を伝えるデザインツールを制作",
    description:
      "クラファン特設ページ、サービスLP、チラシ、バナー、SNS用画像など、プロジェクトの世界観を伝えるデザインツールを制作します。",
    features: [
      "クラファン特設LP・サービスサイト",
      "お問い合わせフォーム・動画埋め込み",
      "チラシ・バナー・SNS画像",
      "リターン画像・販促物",
    ],
    image: "/images/generated/svc-web-design.png",
    href: "/services#web-design",
  },
];

// HOMEの「選ばれる理由」
export const reasons: { title: string; label: string; body: string; image: string }[] = [
  {
    label: "伴走力",
    title: "ゼロから企画を一緒に整理できる",
    body: "まだ形になっていないアイデアや想いを丁寧にヒアリングし、企画として整理します。",
    image: "/images/reasons/rs-accompany.png",
  },
  {
    label: "総合力",
    title: "クラファン・動画・デザイン・SNSをワンストップ",
    body: "必要な支援を一つの窓口でまとめて。連携がスムーズで一貫した世界観を保てます。",
    image: "/images/reasons/rs-onestop.png",
  },
  {
    label: "共感力",
    title: "オーナー側の不安や負担を深く理解している",
    body: "運営しながらの発信がいかに大変か。だからこそ、一番苦しい時期の右腕になります。",
    image: "/images/reasons/rs-empathy.png",
  },
  {
    label: "技術力",
    title: "AIを活用し、全国対応と継続的な動画制作を実現",
    body: "最新のAI技術で、撮影なし・低コスト・高品質を両立。全国どこからでも依頼可能です。",
    image: "/images/reasons/rs-tech.png",
  },
  {
    label: "表現力",
    title: "歴史や文化、地域の背景を大切にした表現",
    body: "その土地・その活動が積み重ねてきた物語を尊重し、伝わる形へ翻訳します。",
    image: "/images/reasons/rs-expression.png",
  },
];

// 制作・支援の流れ
export const flow: { step: string; title: string; body: string }[] = [
  { step: "01", title: "無料相談", body: "まだ形になっていない段階でも大丈夫です。" },
  { step: "02", title: "ヒアリング", body: "想いや背景、目指す姿を丁寧にお聞きします。" },
  { step: "03", title: "企画・方向性の整理", body: "伝わる軸とターゲットを一緒に定めます。" },
  { step: "04", title: "見積もり・ご提案", body: "最適な進め方とプランをご提案します。" },
  { step: "05", title: "制作・プロジェクト準備", body: "ページ・動画・デザインを制作します。" },
  { step: "06", title: "公開・広報", body: "公開後の発信まで継続して支援します。" },
  { step: "07", title: "振り返り・継続支援", body: "成果を振り返り、次の挑戦へつなげます。" },
];
