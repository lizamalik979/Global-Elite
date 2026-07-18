import { getServiceSitemapEntries } from "../lib/cms";
import { buildUrlSet, xmlResponse } from "../lib/sitemap";

// All PUBLISHED service/division pages from the CMS (slug + updatedAt only).
export async function GET() {
  const entries = await getServiceSitemapEntries();
  return xmlResponse(
    buildUrlSet(
      entries.map((e) => ({
        path: `/${e.slug}`,
        lastModified: e.updatedAt,
        changeFrequency: "weekly",
        priority: 0.9,
      }))
    )
  );
}
