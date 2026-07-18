// Shared helpers for the sitemap XML routes.

/** Public URL of THIS website (not the CMS) — set SITE_URL in production. */
export const SITE_URL = (process.env.SITE_URL || "http://localhost:3001").replace(/\/$/, "");

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export type UrlEntry = {
  path: string;
  lastModified?: string | Date | null;
  changeFrequency?: string;
  priority?: number;
};

/** Build a <urlset> sitemap document. */
export function buildUrlSet(entries: UrlEntry[]): string {
  const urls = entries
    .map((e) => {
      const lastmod = e.lastModified ? new Date(e.lastModified).toISOString() : null;
      return [
        "  <url>",
        `    <loc>${escapeXml(`${SITE_URL}${e.path}`)}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
        e.changeFrequency ? `    <changefreq>${e.changeFrequency}</changefreq>` : null,
        e.priority !== undefined ? `    <priority>${e.priority}</priority>` : null,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

/** Build a <sitemapindex> document pointing at the child sitemaps. */
export function buildSitemapIndex(paths: string[]): string {
  const maps = paths
    .map((p) =>
      [
        "  <sitemap>",
        `    <loc>${escapeXml(`${SITE_URL}${p}`)}</loc>`,
        "  </sitemap>",
      ].join("\n")
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${maps}\n</sitemapindex>`;
}

export const xmlResponse = (xml: string) =>
  new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Let CDNs/browsers cache the sitemap for an hour
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
