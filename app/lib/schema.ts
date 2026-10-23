// Structured data (JSON-LD) for the home page.
//
// Google reads these to build rich results and the knowledge panel. Everything
// here must match what a visitor actually sees on the page — schema that
// describes services the site does not mention is treated as spam.
//
// Business details live in one place so the footer/contact CMS values and the
// schema can be reconciled by eye when they change.

import { SITE_URL } from "./sitemap-utils";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const BUSINESS = {
  legalName: "Global Elite (OPC) Private Limited",
  name: "Global Elite",
  phone: "+91-8247396529",
  email: "madhulata.m@globaleliteopc.com",
  street: "",
  city: "Visakhapatnam",
  region: "Andhra Pradesh",
  postalCode: "530041",
  country: "IN",
};

// The six offerings in the "Comprehensive AI automation and technology
// services" grid, kept in the same order as the page.
const SERVICES: { name: string; description: string }[] = [
  {
    name: "AI Lead Qualification",
    description:
      "Capture, score and route leads based on intent, profile and engagement.",
  },
  {
    name: "WhatsApp Marketing Automation",
    description:
      "Run personalised campaigns, automated follow-ups and customer journeys on WhatsApp.",
  },
  {
    name: "AI Voice Automation",
    description:
      "Automate lead qualification, reminders, confirmations, surveys and support calls.",
  },
  {
    name: "CRM and Workflow Automation",
    description:
      "Synchronise customer information and automate repetitive sales and operational tasks.",
  },
  {
    name: "Customer Support Automation",
    description:
      "Answer frequently asked questions, create support tickets and escalate important cases.",
  },
  {
    name: "Custom AI Development",
    description:
      "Build AI-powered tools and integrations suited to your company's unique requirements.",
  },
];

/**
 * One @graph so the Organization node can be referenced by @id from the
 * WebSite and Service nodes rather than repeated three times.
 */
export function homePageSchema(title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: BUSINESS.name,
        legalName: BUSINESS.legalName,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/logo-wordmark.png`,
        },
        description,
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: BUSINESS.city,
          addressRegion: BUSINESS.region,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.country,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: BUSINESS.phone,
            email: BUSINESS.email,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
        ],
        areaServed: { "@type": "Country", name: "India" },
        knowsAbout: [
          "AI automation",
          "WhatsApp Business API automation",
          "AI voice agents",
          "CRM and workflow automation",
          "Digital marketing",
          "Document legalisation and apostille",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: title,
        description,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: title,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        inLanguage: "en-IN",
      },
      ...SERVICES.map((s) => ({
        "@type": "Service",
        name: s.name,
        description: s.description,
        serviceType: s.name,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "India" },
      })),
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

/** Reference to the Organization node defined on the home page. */
const orgRef = { "@id": ORG_ID };

/** Stable Organization node for pages that are not the home page. */
function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/logo-wordmark.png`,
    },
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
  };
}

/** "Home › Divisions › Travel" — Google renders this above the result. */
function breadcrumbNode(trail: { name: string; path?: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.path ? { item: `${SITE_URL}${c.path}` } : {}),
    })),
  };
}

/** Q&A pairs — produces the expandable FAQ rich result. Skipped when empty. */
function faqNode(faqs: { q: string; a: string }[]) {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const withContext = (nodes: unknown[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes.filter(Boolean),
});

const abs = (url: string | null | undefined) =>
  !url ? undefined : url.startsWith("http") ? url : `${SITE_URL}${url}`;

/* ------------------------------------------------------------------ */
/* Division / service pages (/travel, /education, /marketing …)        */
/* ------------------------------------------------------------------ */

export function servicePageSchema(args: {
  slug: string;
  title: string;
  description: string;
  badge: string;
  faqs: { q: string; a: string }[];
}) {
  const url = `${SITE_URL}/${args.slug}`;
  return withContext([
    organizationNode(),
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: args.badge || args.title,
      description: args.description,
      serviceType: args.badge || args.title,
      provider: orgRef,
      areaServed: { "@type": "Country", name: "India" },
      url,
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: args.title,
      description: args.description,
      about: { "@id": `${url}#service` },
      isPartOf: { "@id": WEBSITE_ID },
      inLanguage: "en-IN",
    },
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Divisions" },
      { name: args.badge || args.title, path: `/${args.slug}` },
    ]),
    faqNode(args.faqs),
  ]);
}

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* ------------------------------------------------------------------ */

export function aboutPageSchema(args: {
  title: string;
  description: string;
  team: { name: string; role: string }[];
  founder?: { name: string; role: string } | null;
}) {
  const url = `${SITE_URL}/about`;
  const people = [
    ...(args.founder?.name
      ? [{ name: args.founder.name, role: args.founder.role }]
      : []),
    ...args.team,
  ];
  return withContext([
    {
      ...organizationNode(),
      description: args.description,
      ...(people.length
        ? {
            employee: people.map((p) => ({
              "@type": "Person",
              name: p.name,
              jobTitle: p.role,
              worksFor: orgRef,
            })),
          }
        : {}),
      ...(args.founder?.name
        ? { founder: { "@type": "Person", name: args.founder.name } }
        : {}),
    },
    {
      "@type": "AboutPage",
      "@id": `${url}#webpage`,
      url,
      name: args.title,
      description: args.description,
      about: orgRef,
      isPartOf: { "@id": WEBSITE_ID },
      inLanguage: "en-IN",
    },
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ]),
  ]);
}

/* ------------------------------------------------------------------ */
/* Contact page                                                        */
/* ------------------------------------------------------------------ */

export function contactPageSchema(args: {
  title: string;
  description: string;
  faqs: { q: string; a: string }[];
}) {
  const url = `${SITE_URL}/contact`;
  return withContext([
    {
      ...organizationNode(),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: BUSINESS.phone,
          email: BUSINESS.email,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": `${url}#webpage`,
      url,
      name: args.title,
      description: args.description,
      about: orgRef,
      isPartOf: { "@id": WEBSITE_ID },
      inLanguage: "en-IN",
    },
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact" },
    ]),
    faqNode(args.faqs),
  ]);
}

/* ------------------------------------------------------------------ */
/* Blog listing + article                                              */
/* ------------------------------------------------------------------ */

export function blogListingSchema(args: {
  title: string;
  description: string;
  posts: { title: string; slug: string }[];
}) {
  const url = `${SITE_URL}/blog`;
  return withContext([
    {
      "@type": "Blog",
      "@id": `${url}#blog`,
      url,
      name: args.title,
      description: args.description,
      publisher: orgRef,
      inLanguage: "en-IN",
      blogPost: args.posts.slice(0, 20).map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL}/blog/${p.slug}`,
      })),
    },
    organizationNode(),
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  ]);
}

export function blogPostingSchema(args: {
  title: string;
  slug: string;
  excerpt: string | null;
  image: string | null;
  author: string;
  publishedAt: string | null;
  updatedAt?: string | null;
  faqs: { question: string; answer: string }[];
}) {
  const url = `${SITE_URL}/blog/${args.slug}`;
  const published = args.publishedAt || undefined;
  return withContext([
    {
      "@type": "BlogPosting",
      "@id": `${url}#post`,
      headline: args.title.slice(0, 110), // Google ignores headlines over 110
      description: args.excerpt || undefined,
      image: abs(args.image),
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Person", name: args.author },
      publisher: orgRef,
      datePublished: published,
      dateModified: args.updatedAt || published,
      inLanguage: "en-IN",
    },
    organizationNode(),
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: args.title, path: `/blog/${args.slug}` },
    ]),
    faqNode(args.faqs.map((f) => ({ q: f.question, a: f.answer }))),
  ]);
}
