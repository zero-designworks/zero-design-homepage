import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { posts, categoryMeta, countPostsInCategory } from "@/data/posts";
import { allCategories, categoryPath } from "@/data/blogCategories";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 固定ページ。新しくページを追加したら、ここにも必ず1行足してください。
  // （/privacy・/legal は robots.ts で検索エンジンに非公開のため、あえて載せていません）
  const staticRoutes = [
    "",
    "/about",
    "/crowdfunding",
    "/crowdfunding-uses",
    "/sns-ai-video",
    "/services",
    "/works",
    "/column",
    "/news",
    "/category",
    "/profile",
    "/pricing",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  // お知らせ・コラムの各記事
  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteConfig.url}${categoryMeta[p.category].path}/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // カテゴリーアーカイブ（記事が1件以上あるものだけ登録）
  const categoryEntries: MetadataRoute.Sitemap = allCategories
    .filter((c) => countPostsInCategory(c.slug) > 0)
    .map((c) => ({
      url: `${siteConfig.url}${categoryPath(c.slug)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  return [...staticEntries, ...categoryEntries, ...postEntries];
}
