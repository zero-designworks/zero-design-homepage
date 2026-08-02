import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { posts, categoryMeta } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/crowdfunding",
    "/crowdfunding-uses",
    "/services",
    "/works",
    "/column",
    "/news",
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

  return [...staticEntries, ...postEntries];
}
