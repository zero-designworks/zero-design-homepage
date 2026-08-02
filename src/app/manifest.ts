import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name}｜${siteConfig.concept}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e7",
    theme_color: "#9c2724",
    lang: "ja",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
