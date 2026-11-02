import type { MetadataRoute } from "next";

import { profile } from "@/data/profile";

const PATHS = ["", "/projects", "/writing", "/about", "/now"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${profile.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
