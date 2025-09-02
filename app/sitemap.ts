import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string =>
    new URL(path, "https://ui.raulcarini.dev").toString();

  return [
    {
      url: url("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/icon-picker"),
      lastModified: new Date("2025-04-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/github-contributions"),
      lastModified: new Date("2025-05-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/music-player"),
      lastModified: new Date("2025-05-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/search-bar"),
      lastModified: new Date("2025-05-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/rating-group"),
      lastModified: new Date("2025-06-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/theme-switch"),
      lastModified: new Date("2025-08-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/github-stats"),
      lastModified: new Date("2025-09-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
