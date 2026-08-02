import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/privacy", "/legal"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
