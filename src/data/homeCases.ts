// トップページ「支援事例」のデータ。
// ここに1件追記するだけで、トップの支援事例セクションに自動で追加されます。

export type HomeCase = {
  id: string;
  title: string;
  subtitle: string; // プロジェクト概要（1行）
  image: string; // メイン画像
  overview: string; // 概要文
  supports: string[]; // 支援内容
  deliverables: string[]; // 制作物（動画・チラシなど）
  result?: string; // 成果（任意）
  href: string; // 詳細を見るリンク
};

export const homeCases: HomeCase[] = [
  {
    id: "kodaniji",
    title: "小谷寺 本堂再建プロジェクト",
    subtitle: "歴史・文化財を未来へつなぐクラウドファンディング",
    image: "/images/works/cf-kodaniji.webp",
    overview:
      "頼れる檀家もなく、知名度もゼロからのスタート。歴史の重みと未来へのビジョンを丁寧に言語化し、AIアニメで想いを伝えました。単なるページ制作ではなく、企画・リターン設計・SNS運用・広報まで一貫してフルサポートしています。",
    supports: [
      "クラウドファンディング企画",
      "リターン企画・設計",
      "SNS運用支援",
      "AI動画企画・制作",
      "広報・PR支援",
      "情報発信戦略",
    ],
    deliverables: ["AIアニメ動画", "住職インタビュー動画", "歴史PR動画", "リターン紹介動画", "チラシ"],
    result: "目標500万円 → 約736万円を達成（支援者388人）",
    href: "/column/shrine-temple-crowdfunding-cases",
  },
  {
    id: "courage",
    title: "クラージュデザイン株式会社",
    subtitle: "廃材パレットを活用したペット用家具制作プロジェクト",
    image: "/images/works/cf-courage.jpg",
    overview:
      "「ペット×SDGs」という想いを多くの方へ届けるため、企画から情報発信まで一貫してサポート。廃材パレットに新たな命を吹き込むペット家具プロジェクトを、企画・リターン・SNS・広報までまるごとお手伝いしています。",
    supports: [
      "クラウドファンディング企画",
      "リターン設計",
      "SNS運用支援",
      "AI動画制作",
      "チラシ・販促物制作",
      "広報支援",
    ],
    deliverables: ["AIアニメストーリー動画", "SNSリール", "チラシ・販促物"],
    href: "/news/courage-design-crowdfunding-start",
  },
];
