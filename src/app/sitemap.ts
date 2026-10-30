import { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-10-29"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
