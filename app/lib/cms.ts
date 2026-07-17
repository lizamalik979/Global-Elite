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

// ── Blog posts ───────────────────────────────────────────────────────────────

export type CmsCategory = { id: string; name: string; slug: string; color: string };

export type CmsPostSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImage: string | null;
  publishedAt: string | null;
  createdAt: string;
  readTimeMinutes: number;
  author: { id: string; username: string } | null;
  category: CmsCategory[];
};

export type CmsPost = CmsPostSummary & {
  content: string | null;
  faq_items: { question: string; answer: string }[];
};

/** Published posts, newest first. Tagged `post-list` for on-demand refresh. */
export async function getAllPosts(limit = 50): Promise<CmsPostSummary[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/post/client/all-blog?page=1&limit=${limit}`, {
      next: { revalidate: 3600, tags: ["post-list"] },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const posts: CmsPostSummary[] = Array.isArray(data?.posts) ? data.posts : [];
    // Newest publication first — the top post becomes the featured card
    return posts.sort(
      (a, b) =>
        new Date(b.publishedAt ?? b.createdAt).getTime() -
        new Date(a.publishedAt ?? a.createdAt).getTime()
    );
  } catch {
    return [];
  }
}

/** One published post with full HTML content; null if missing/unpublished. */
export async function getPost(slug: string): Promise<CmsPost | null> {
  try {
    const res = await fetch(
      `${CMS_URL}/api/post/client/detail-blog?slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 3600, tags: ["post-list", `post-${slug}`] } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.success || !data?.post) return null;
    const post = data.post as CmsPost & { faq_items?: unknown };
    return {
      ...post,
      readTimeMinutes:
        (post as { readTimeMinutes?: number }).readTimeMinutes ??
        computeReadTime(post.content || ""),
      faq_items: Array.isArray(post.faq_items)
        ? (post.faq_items as CmsPost["faq_items"])
        : [],
    };
  } catch {
    return null;
  }
}

function computeReadTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

// ── Display helpers shared by the blog pages ─────────────────────────────────

/** "Meera Iyer" → "MI"; single names use the first two letters. */
export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "GE";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function formatPostDate(iso: string | null, withYear = false): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    ...(withYear ? { year: "numeric" } : {}),
  });
}

/** Flat card shape the blog UI components render. */
export type PostCard = {
  slug: string;
  cat: string;
  topic: string;
  read: string;
  title: string;
  excerpt: string;
  author: string;
  initials: string;
  date: string;
};

export function toPostCard(p: CmsPostSummary, withYear = false): PostCard {
  const cat = p.category?.[0];
  const author = p.author?.username || "Global Elite";
  return {
    slug: p.slug,
    cat: cat?.name || "Journal",
    topic: cat?.slug || "journal",
    read: `${p.readTimeMinutes} min read`,
    title: p.title,
    excerpt: p.excerpt || "",
    author,
    initials: initialsOf(author),
    date: formatPostDate(p.publishedAt ?? p.createdAt, withYear),
  };
}

/**
 * Give every h2 in the post HTML an `art-N` anchor id and return the TOC.
 * Runs on the server so the sidebar and body always agree on ids.
 */
export function buildToc(html: string): {
  html: string;
  toc: { id: string; label: string }[];
} {
  const toc: { id: string; label: string }[] = [];
  let i = 0;
  const withIds = html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (_m, attrs, inner) => {
    const id = `h${i++}`;
    const label = String(inner).replace(/<[^>]+>/g, "").trim();
    if (label) toc.push({ id, label });
    const rest = (attrs || "").replace(/\sid="[^"]*"/, "");
    return `<h2 id="art-${id}" style="scroll-margin-top:150px"${rest}>${inner}</h2>`;
  });
  return { html: withIds, toc };
}

// ── About page ───────────────────────────────────────────────────────────────

/** Mirrors the CMS AboutPageContent (icons as string names). */
export type AboutPageContent = {
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: { text: string; url: string };
    ctaSecondary: { text: string; url: string };
    chips: { icon: string; label: string }[];
    form: { kicker: string; title: string; services: string[]; note: string };
  };
  metrics: { value: string; suffix: string; label: string; sub: string }[];
  pillars: {
    kicker: string;
    heading: string;
    intro: string;
    items: { icon: string; title: string; points: string[] }[];
  };
  accreditations: {
    heading: string;
    intro: string;
    items: { icon: string; title: string; sub: string }[];
  };
  story: {
    kicker: string;
    headingLead: string;
    headingAccent: string;
    intro: string;
    badgeTitle: string;
    badgeSub: string;
    timeline: { year: string; title: string; desc: string; dark?: boolean }[];
  };
  team: {
    kicker: string;
    headingLead: string;
    headingAccent: string;
    intro: string;
    members: { name: string; role: string; desc: string; photo: string }[];
  };
  founder: {
    kicker: string;
    heading: string;
    name: string;
    role: string;
    experience: string;
    quote: string;
    signature: string;
  };
};

export type CmsAboutPage = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  content: AboutPageContent;
};

/**
 * About page from the CMS. Null when unreachable or not saved yet — the /about
 * route falls back to the built-in content. Tagged `about-page` (the tag the
 * CMS dashboard revalidates).
 */
export async function getAboutPage(): Promise<CmsAboutPage | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/about`, {
      next: { revalidate: 3600, tags: ["about-page"] },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const page = data?.aboutPage;
    if (!page?.content || typeof page.content !== "object") return null;
    return page as CmsAboutPage;
  } catch {
    return null;
  }
}

// ── Header & footer menus ────────────────────────────────────────────────────

/** Menu item as stored by the CMS (nested one level for dropdowns/columns). */
export type CmsMenuItem = {
  title: string;
  url: string;
  child_menu?: { title: string; url: string }[] | false;
};

/** Utility-bar content of the header (contact blocks + CTA button). */
export type CmsHeaderContact = {
  whatsappLabel?: string;
  whatsappNumber?: string;
  careLabel?: string;
  careNumber?: string;
  ctaText?: string;
  ctaUrl?: string;
};

export type CmsFooterDetail = {
  title: string;
  type?: string;
  value?: string;
  url?: string;
};

/**
 * Header menu from the CMS. Returns null when the CMS is unreachable or no
 * menu items exist yet — the Header falls back to the built-in nav.
 */
export async function getHeaderMenu(): Promise<{
  items: CmsMenuItem[];
  contact: CmsHeaderContact;
} | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/header-menu`, {
      next: { revalidate: 3600, tags: ["header-menu"] },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const items: CmsMenuItem[] = data?.headerMenu?.main_menu ?? [];
    if (!Array.isArray(items) || items.length === 0) return null;
    return { items, contact: data?.headerMenu?.contact_details ?? {} };
  } catch {
    return null;
  }
}

/**
 * Footer menu from the CMS: link columns + typed detail items (description,
 * copyright…). Null → the Footer falls back to its built-in content.
 */
export async function getFooterMenu(): Promise<{
  columns: CmsMenuItem[];
  details: CmsFooterDetail[];
} | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/footer-menu`, {
      next: { revalidate: 3600, tags: ["footer-menu"] },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const columns: CmsMenuItem[] = data?.footerMenu?.main_menu ?? [];
    if (!Array.isArray(columns) || columns.length === 0) return null;
    const details = data?.footerMenu?.contact_details;
    return { columns, details: Array.isArray(details) ? details : [] };
  } catch {
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
