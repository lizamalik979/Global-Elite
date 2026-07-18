import { getPostSitemapEntries } from "../lib/cms";
import { buildUrlSet, xmlResponse } from "../lib/sitemap-utils";

// All PUBLISHED blog posts from the CMS (slug + updatedAt only).
export async function GET() {
  const entries = await getPostSitemapEntries();
  return xmlResponse(
    buildUrlSet(
      entries.map((e) => ({
        path: `/blog/${e.slug}`,
        lastModified: e.updatedAt,
        changeFrequency: "weekly",
        priority: 0.7,
      }))
    )
  );
}
