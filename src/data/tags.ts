// タグはカテゴリーとは別管理。
// カテゴリー＝サイトの分類軸（階層あり・記事に必須）
// タグ　　　＝記事を横断する自由なキーワード（階層なし・任意）
//
// URLは英字スラッグ： /tag/{slug}

export type Tag = {
  slug: string;
  label: string;
};

export const tags: Tag[] = [
  { slug: "beginner", label: "初心者向け" },
  { slug: "case-study", label: "事例" },
  { slug: "know-how", label: "ノウハウ" },
  { slug: "shop-opening", label: "新店舗・開業" },
  { slug: "product-development", label: "商品開発" },
  { slug: "nagahama", label: "長浜・湖北" },
  { slug: "media", label: "メディア掲載" },
  { slug: "short-video", label: "ショート動画" },
  { slug: "automation", label: "業務効率化" },
  { slug: "success-fee", label: "成功報酬型" },
];

export function getTag(slug: string): Tag | undefined {
  return tags.find((t) => t.slug === slug);
}
