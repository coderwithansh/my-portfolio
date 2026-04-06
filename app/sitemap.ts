// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ansh-portfolio-75.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://ansh-portfolio-75.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://ansh-portfolio-75.vercel.app/services",
      lastModified: new Date(),
    },
  ];
}