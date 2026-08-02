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
  publishedAt: string; // "YYYY-MM-DD"
  excerpt: string;
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
    slug: "courage-design-crowdfunding-start",
    category: "news",
    title:
      "クラージュデザイン株式会社のクラウドファンディングが2026年8月12日に開始します",
    publishedAt: "2026-08-02",
    excerpt:
      "ZEROデザインは、クラージュデザイン株式会社のクラウドファンディングをキュレーションパートナーとしてサポートしています。廃材パレットを活用したペット用家具（ベッド）のプロジェクトが2026年8月12日に開始予定です。",
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
];

// ---- ヘルパー ----
const byDateDesc = (a: Post, b: Post) => (a.publishedAt < b.publishedAt ? 1 : -1);

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
