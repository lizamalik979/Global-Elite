import { buildUrlSet, xmlResponse } from "../lib/sitemap-utils";

// Fixed site pages (CMS-driven pages live in the services/blog sitemaps).
export async function GET() {
  return xmlResponse(
    buildUrlSet([
      { path: "/", changeFrequency: "weekly", priority: 1.0 },
      { path: "/about", changeFrequency: "monthly", priority: 0.8 },
      { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
      { path: "/services", changeFrequency: "monthly", priority: 0.9 },
      { path: "/blog", changeFrequency: "daily", priority: 0.9 },
    ])
  );
}
