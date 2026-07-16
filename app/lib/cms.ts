// Server-side data layer for content managed in the Global Elite CMS.
//
// Service/division pages are stored in the CMS as one JSON document per page
// (see the CMS repo: app/lib/content/service-content.ts). Icons arrive as
// string names ("Plane", "Globe", …) and are resolved to components on the
// client by <CmsServiceLayout>.

const CMS_URL = process.env.CMS_URL || "http://localhost:3000";

// ── Types mirroring the CMS content document (icons as string names) ────────

export type CmsBreadcrumb = { label: string; href?: string };
export type CmsHeroChip = { icon: string; title: string; sub: string };

type CmsSectionBase = { id: string; label: string; heading: string };

export type CmsSection =
  | (CmsSectionBase & {
      kind: "intro";
      paragraphs: string[];
      stats?: { icon: string; value: string; label: string }[];
    })
  | (CmsSectionBase & {
      kind: "cards";
      intro?: string;
      cards: { icon: string; title: string; points: string[] }[];
    })
  | (CmsSectionBase & {
      kind: "chips";
      intro?: string;
      chipIcon: string;
      chips: string[];
      note?: string;
    })
  | (CmsSectionBase & {
      kind: "steps";
      intro?: string;
      steps: { title: string; text: string; day?: string; details?: string[]; note?: string }[];
    })
  | (CmsSectionBase & { kind: "checklist"; intro?: string; items: string[] })
  | (CmsSectionBase & { kind: "faq"; intro?: string; faqs: { q: string; a: string }[] })
  | (CmsSectionBase & { kind: "table"; intro?: string; columns: string[]; rows: string[][] })
  | (CmsSectionBase & { kind: "notes"; intro?: string; notes: { title: string; body: string }[] });

export type CmsServiceContent = {
  breadcrumb: CmsBreadcrumb[];
  badge: string;
  badgeIcon: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  chips: CmsHeroChip[];
  formTitle: string;
  formSubtitle: string;
  formCountries?: string[];
  formCountryLabel?: string;
  helpPhone?: string;
  sections: CmsSection[];
};

export type CmsServicePage = {
  slug: string;
  template: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  status: "draft" | "published";
  content: CmsServiceContent;
};

// ── Fetchers ─────────────────────────────────────────────────────────────────

/**
 * Fetch one published service page from the CMS. Returns `null` when the page
 * doesn't exist, isn't published, or the CMS is unreachable — callers fall
 * back to their local hardcoded config (division pages) or 404 (dynamic route).
 *
 * Cached for an hour and tagged so the CMS dashboard's "revalidate" button
 * (tags: service-list, service-<slug>) refreshes it instantly.
 */
export async function getServicePage(slug: string): Promise<CmsServicePage | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/services/client/${encodeURIComponent(slug)}`, {
      next: { revalidate: 3600, tags: ["service-list", `service-${slug}`] },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const page = data?.servicePages as CmsServicePage | null;
    if (!page || page.status !== "published" || !page.content) return null;
    return page;
  } catch {
    // CMS unreachable — treat as "no CMS content"
    return null;
  }
}

/** Slugs of all service pages, used for sitemaps / static params. */
export async function getServiceSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/services/client/sitemap`, {
      next: { revalidate: 3600, tags: ["service-list"] },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const rows: { slug: string }[] = data?.data ?? data?.services ?? [];
    return rows.map((r) => r.slug).filter(Boolean);
  } catch {
    return [];
  }
}
