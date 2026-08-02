import { crowdfundingProjects } from "./socialLinks";

export type Work = {
  id: string;
  title: string;
  category: "クラウドファンディング" | "SNSショート動画" | "AI動画" | "デザイン" | "Web・LP";
  client?: string;
  role?: string[];
  description?: string;
  result?: string;
  href?: string;
  image?: string;
};

// クラウドファンディング実績
export const works: Work[] = [
  {
    id: "cf-kodaniji",
    title: "小谷寺 本堂再建プロジェクト",
    category: "クラウドファンディング",
    client: "小谷寺（滋賀県長浜市）",
    role: ["企画", "ストーリー設計", "ページ制作", "AI映像", "広報"],
    description:
      "頼れる檀家もなく、知名度もゼロからのスタート。歴史の重みと未来へのビジョンを丁寧に言語化し、AIアニメーションで「かつての姿」を再現して発信しました。",
    result: "目標を大幅に超える 736万円 の支援を達成。",
    href: crowdfundingProjects[0].href,
  },
  {
    id: "cf-courage",
    title: "クラージュデザイン株式会社",
    category: "クラウドファンディング",
    role: ["企画", "ページ制作", "広報支援"],
    description: "事業の挑戦を伝わる形へ整え、プロジェクトを支援しました。",
    href: crowdfundingProjects[1].href,
  },
];
