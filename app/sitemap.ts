import type { MetadataRoute } from "next";
import { projects } from "./lib/projects";
import { siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/blog` },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
    })),
  ];
}
