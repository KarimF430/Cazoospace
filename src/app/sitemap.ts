import { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { solutions } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexusagency.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partner`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${baseUrl}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...solutionPages, ...caseStudyPages];
}
