// ブログのカテゴリー体系（親カテゴリー＋子カテゴリー）。
// URLは英字スラッグ。日本語は label のみで扱います。
//   親: /category/{parent}
//   子: /category/{parent}/{child}
//
// カテゴリーを追加する場合は、この配列に追記するだけで
// 一覧・アーカイブページ・サイトマップに自動反映されます。
// ※ タグは別管理（src/data/tags.ts）

export type CategorySlug =
  // クラウドファンディング
  | "crowdfunding"
  | "campfire"
  | "makuake"
  | "readyfor"
  | "return-design"
  | "promotion"
  // AI活用
  | "ai"
  | "chatgpt"
  | "claude-code"
  | "ai-video"
  | "ai-image"
  // SNS集客
  | "sns"
  | "instagram"
  | "youtube"
  | "line"
  // 地域活性化
  | "local"
  | "regional-revitalization"
  | "shopping-street"
  | "marche"
  | "tourism"
  // 歴史・文化財
  | "history"
  | "shrine-temple"
  | "castle"
  | "samurai"
  | "heritage"
  // 制作実績
  | "works-category";

export type BlogCategory = {
  slug: CategorySlug;
  label: string;
  description: string;
  children?: BlogCategory[];
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "crowdfunding",
    label: "クラウドファンディング",
    description:
      "クラウドファンディングの始め方、プラットフォーム選び、リターン設計、広報まで。挑戦を成功へ導くノウハウをまとめています。",
    children: [
      {
        slug: "campfire",
        label: "CAMPFIRE",
        description:
          "国内最大級のクラウドファンディング「CAMPFIRE」の特徴・活用法・掲載のコツを解説します。",
      },
      {
        slug: "makuake",
        label: "Makuake",
        description:
          "新商品・プロダクト系に強い「Makuake」の特徴と、応援購入を集めるためのポイントを紹介します。",
      },
      {
        slug: "readyfor",
        label: "Readyfor",
        description:
          "社会貢献・寄付型に強い「Readyfor」の特徴と、想いを伝えるプロジェクト設計を解説します。",
      },
      {
        slug: "return-design",
        label: "リターン設計",
        description:
          "支援したくなるリターンの考え方、価格設定、原価と発送までを見据えた設計のポイントをまとめます。",
      },
      {
        slug: "promotion",
        label: "集客・広報",
        description:
          "公開前の準備から公開中の発信まで。支援を伸ばすための集客・広報の実践方法を紹介します。",
      },
    ],
  },
  {
    slug: "ai",
    label: "AI活用",
    description:
      "ChatGPTやClaude Code、AI動画・AI画像生成など、制作と発信を効率化するAI活用の実践ノウハウです。",
    children: [
      {
        slug: "chatgpt",
        label: "ChatGPT",
        description:
          "ChatGPTを企画・原稿・発信に活かすための具体的な使い方をまとめます。",
      },
      {
        slug: "claude-code",
        label: "Claude Code",
        description:
          "Claude Codeを使った制作・運用の自動化、業務効率化の事例を紹介します。",
      },
      {
        slug: "ai-video",
        label: "AI動画",
        description:
          "撮影なしで作るAI動画・ショート動画の制作方法と、クラファン活用の実例を紹介します。",
      },
      {
        slug: "ai-image",
        label: "AI画像生成",
        description:
          "AI画像生成を使ったビジュアル制作のコツと、ブランドに合わせた表現づくりを解説します。",
      },
    ],
  },
  {
    slug: "sns",
    label: "SNS集客",
    description:
      "Instagram・YouTube・LINE公式を活用した集客と、継続できる発信の仕組みづくりを解説します。",
    children: [
      {
        slug: "instagram",
        label: "Instagram",
        description:
          "リール・フィード投稿の設計や運用の自動化など、Instagram集客の実践方法を紹介します。",
      },
      {
        slug: "youtube",
        label: "YouTube",
        description:
          "YouTube・Shortsを使った認知拡大と、動画コンテンツの活かし方をまとめます。",
      },
      {
        slug: "line",
        label: "LINE公式",
        description:
          "LINE公式アカウントを使ったファンとの関係づくり・リピート導線を解説します。",
      },
    ],
  },
  {
    slug: "local",
    label: "地域活性化",
    description:
      "地方創生、商店街、マルシェ、観光。地域の魅力を掘り起こし、外へ伝えるための取り組みを紹介します。",
    children: [
      {
        slug: "regional-revitalization",
        label: "地方創生",
        description:
          "地域の課題解決や関係人口づくりに、クラファンと発信をどう活かすかを解説します。",
      },
      {
        slug: "shopping-street",
        label: "商店街",
        description:
          "商店街の活性化やお店の魅力発信、共同企画づくりの事例を紹介します。",
      },
      {
        slug: "marche",
        label: "マルシェ",
        description:
          "マルシェ・イベント開催の資金づくりと集客のポイントをまとめます。",
      },
      {
        slug: "tourism",
        label: "観光",
        description:
          "観光資源の発信、体験づくり、来訪につなげるプロモーションを解説します。",
      },
    ],
  },
  {
    slug: "history",
    label: "歴史・文化財",
    description:
      "神社・寺院、お城、戦国武将、文化財保存。守り継がれてきたものを未来へつなぐ発信の方法です。",
    children: [
      {
        slug: "shrine-temple",
        label: "神社・寺院",
        description:
          "本堂・社殿の修復や行事の継承など、神社・寺院のクラウドファンディング事例を紹介します。",
      },
      {
        slug: "castle",
        label: "お城",
        description:
          "城跡の整備や御城印など、お城を軸にしたプロジェクトの進め方を解説します。",
      },
      {
        slug: "samurai",
        label: "戦国武将",
        description:
          "戦国武将ゆかりの地・物語を活かした企画づくりと発信方法を紹介します。",
      },
      {
        slug: "heritage",
        label: "文化財保存",
        description:
          "文化財の保護・修復にかかる資金づくりと、価値を伝えるストーリー設計を解説します。",
      },
    ],
  },
  {
    slug: "works-category",
    label: "制作実績",
    description:
      "ZEROデザインが支援・制作したクラウドファンディング、動画、デザインの実績を紹介します。",
  },
];

// ---- ヘルパー ----

/** 全カテゴリー（親＋子）をフラットな配列で返す */
export const allCategories: BlogCategory[] = blogCategories.flatMap((c) => [
  c,
  ...(c.children ?? []),
]);

/** 子スラッグ → 親カテゴリー の対応表 */
const parentBySlug = new Map<CategorySlug, BlogCategory>();
blogCategories.forEach((parent) => {
  parent.children?.forEach((child) => parentBySlug.set(child.slug, parent));
});

export function getCategory(slug: string): BlogCategory | undefined {
  return allCategories.find((c) => c.slug === slug);
}

export function getParentCategory(slug: CategorySlug): BlogCategory | undefined {
  return parentBySlug.get(slug);
}

export function isParentCategory(slug: CategorySlug): boolean {
  return blogCategories.some((c) => c.slug === slug);
}

/** カテゴリーのURLパス（子は親を含む階層URL） */
export function categoryPath(slug: CategorySlug): string {
  const parent = getParentCategory(slug);
  return parent ? `/category/${parent.slug}/${slug}` : `/category/${slug}`;
}

/** パンくず用の階層（親→子）。親カテゴリーなら自分だけ */
export function categoryTrail(slug: CategorySlug): BlogCategory[] {
  const self = getCategory(slug);
  if (!self) return [];
  const parent = getParentCategory(slug);
  return parent ? [parent, self] : [self];
}

/** 親カテゴリーの場合、自分＋子孫すべてのスラッグを返す（記事の絞り込み用） */
export function categoryWithDescendants(slug: CategorySlug): CategorySlug[] {
  const self = getCategory(slug);
  if (!self) return [];
  return [self.slug, ...(self.children?.map((c) => c.slug) ?? [])];
}

/** サイトマップ・静的生成用：全カテゴリーのURLセグメント配列 */
export function allCategoryParams(): { slug: string[] }[] {
  return blogCategories.flatMap((parent) => [
    { slug: [parent.slug] },
    ...(parent.children ?? []).map((child) => ({ slug: [parent.slug, child.slug] })),
  ]);
}
