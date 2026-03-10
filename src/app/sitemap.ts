import type { MetadataRoute } from "next";

const BASE_URL = "https://bennyboy-eta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/properties",
    "/sold",
    "/contact",
    "/explore/santa-barbara",
    "/explore/montecito",
    "/explore/carpinteria",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
