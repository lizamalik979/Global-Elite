import { buildSitemapIndex, xmlResponse } from "../lib/sitemap-utils";

// Main sitemap: an index pointing at the three child sitemaps.
export async function GET() {
  return xmlResponse(
    buildSitemapIndex([
      "/sitemap-static.xml",
      "/sitemap-services.xml",
      "/sitemap-blog.xml",
    ])
  );
}
