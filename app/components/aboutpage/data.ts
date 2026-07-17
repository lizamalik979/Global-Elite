// Fallback content for the About page — used only when the CMS is unreachable
// or the page hasn't been saved in the dashboard yet. Mirrors the CMS
// AboutPageContent shape (icons as string names, resolved via ./iconmap).

import type { AboutPageContent } from "../../lib/cms";

/**
 * Crash protection: merge whatever the API returned with the fallback,
 * section by section. Even a partial or malformed document renders — any
 * missing field silently falls back to the built-in copy.
 */
export function normalizeAboutContent(raw: unknown): AboutPageContent {
  const d = fallbackAboutContent;
  if (!raw || typeof raw !== "object") return d;
  const c = raw as Partial<AboutPageContent>;
  return {
    hero: {
      ...d.hero,
      ...(c.hero || {}),
      ctaPrimary: { ...d.hero.ctaPrimary, ...(c.hero?.ctaPrimary || {}) },
      ctaSecondary: { ...d.hero.ctaSecondary, ...(c.hero?.ctaSecondary || {}) },
      chips: Array.isArray(c.hero?.chips) ? c.hero.chips : d.hero.chips,
      form: {
        ...d.hero.form,
        ...(c.hero?.form || {}),
        services: Array.isArray(c.hero?.form?.services)
          ? c.hero.form.services
          : d.hero.form.services,
      },
    },
    metrics: Array.isArray(c.metrics) ? c.metrics : d.metrics,
    pillars: {
      ...d.pillars,
      ...(c.pillars || {}),
      items: Array.isArray(c.pillars?.items) ? c.pillars.items : d.pillars.items,
    },
    accreditations: {
      ...d.accreditations,
      ...(c.accreditations || {}),
      items: Array.isArray(c.accreditations?.items)
        ? c.accreditations.items
        : d.accreditations.items,
    },
    story: {
      ...d.story,
      ...(c.story || {}),
      timeline: Array.isArray(c.story?.timeline) ? c.story.timeline : d.story.timeline,
    },
    team: {
      ...d.team,
      ...(c.team || {}),
      members: Array.isArray(c.team?.members) ? c.team.members : d.team.members,
    },
    founder: { ...d.founder, ...(c.founder || {}) },
  };
}

export const ABOUT_META = {
  title: "About Us — Global Elite",
  description:
    "Global Elite is a premium cross-border legal-logistics desk operating alongside the Ministry of External Affairs — 15+ years, 120+ countries, absolute integrity.",
};

export const fallbackAboutContent: AboutPageContent = {
  hero: {
    badge: "OUR HERITAGE & MISSION",
    titleLead: "Securing your global transitions with",
    titleAccent: "absolute integrity",
    subtitle:
      "Global Elite is a premium cross-border legal-logistics desk operating directly alongside the Ministry of External Affairs. For over fifteen years we have turned the maze of state departments, central ministries and foreign consulates into a single, accountable chain of custody — so your documents move with the same precision your ambitions demand.",
    ctaPrimary: { text: "Start Application", url: "/contact" },
    ctaSecondary: { text: "Our Process", url: "/services" },
    chips: [
      { icon: "Star", label: "4.9 / 5 rated" },
      { icon: "CalendarCheck", label: "15+ years" },
      { icon: "BadgeCheck", label: "MEA-registered" },
    ],
    form: {
      kicker: "GET A FREE QUOTE",
      title: "Start your application",
      services: [
        "MEA Apostille",
        "Embassy Attestation",
        "Certified Translation",
        "HRD / SDM Verification",
        "Corporate Legalization",
      ],
      note: "100% confidential • Reply within 1 business hour",
    },
  },
  metrics: [
    { value: "15", suffix: "+", label: "Years", sub: "Corporate track record" },
    { value: "120", suffix: "+", label: "Countries", sub: "Global Hague networks" },
    { value: "500K", suffix: "+", label: "Documents", sub: "Successfully authenticated" },
    { value: "0", suffix: "%", label: "Margin", sub: "Error-tolerance compliance" },
  ],
  pillars: {
    kicker: "OUR OPERATING PILLARS",
    heading: "The chain of trust",
    intro:
      "Three commitments that hold every document we handle to a single, uncompromising standard.",
    items: [
      {
        icon: "Scale",
        title: "Strict Legal Compliance",
        points: [
          "Zero-exception document screening",
          "Notary verification to international statutory guidelines",
          "Continuous legal & policy updates",
        ],
      },
      {
        icon: "Truck",
        title: "Tamper-Proof Logistics",
        points: [
          "Insured, 24/7 tracked transit pipelines",
          "Secure document vaults under CCTV",
          "Strict chain-of-custody handoffs",
        ],
      },
      {
        icon: "Lock",
        title: "Absolute Confidentiality",
        points: [
          "Corporate NDA protections",
          "Encrypted client-data infrastructure",
          "Strict citizen privacy management",
        ],
      },
    ],
  },
  accreditations: {
    heading: "Recognized standards & frameworks",
    intro:
      "Audited adherence to the bodies that govern secure, lawful document handling.",
    items: [
      { icon: "ShieldCheck", title: "ISO 27001", sub: "Information Security" },
      { icon: "Landmark", title: "MEA Outward Desk", sub: "Direct Processing" },
      { icon: "Building2", title: "Chamber of Commerce", sub: "Compliance Member" },
      { icon: "Globe2", title: "Hague Convention", sub: "Apostille Framework" },
    ],
  },
  story: {
    kicker: "OUR STORY",
    headingLead: "From a single desk to a",
    headingAccent: "global network",
    intro:
      "What began as a one-room legalization desk in New Delhi has grown into a nationwide logistics network trusted by families, students and corporations to move their most important documents across borders — without a single compromise on integrity.",
    badgeTitle: "Est. 2009",
    badgeSub: "New Delhi, India",
    timeline: [
      {
        year: "2009",
        title: "The first desk opens",
        desc: "Founded in Connaught Place to simplify document attestation for a handful of local clients.",
      },
      {
        year: "2014",
        title: "Direct MEA integration",
        desc: "Became a registered partner of the Ministry of External Affairs outward processing desk.",
      },
      {
        year: "2019",
        title: "250,000 documents",
        desc: "Crossed a quarter-million authenticated documents with regional hubs in four cities.",
      },
      {
        year: "2024",
        title: "120+ country network",
        desc: "Today, a global consular network legalizing documents for over 120 destinations.",
        dark: true,
      },
    ],
  },
  team: {
    kicker: "OUR PEOPLE",
    headingLead: "The people behind the",
    headingAccent: "seal",
    intro:
      "A specialist team that treats every document as if it were their own passport.",
    members: [
      {
        name: "Meera Iyer",
        role: "Head of MEA Operations",
        desc: "Oversees direct ministry submissions and apostille turnaround across all hubs.",
        photo: "/assets/about-team-1.jpg",
      },
      {
        name: "Rajat Sehgal",
        role: "Director, Consular Affairs",
        desc: "Leads embassy and non-Hague attestation across the UAE, KSA and Qatar desks.",
        photo: "/assets/about-team-2.jpg",
      },
      {
        name: "Fatima Sheikh",
        role: "Head of Client Success",
        desc: "Your single point of contact, keeping every case transparent from pickup to return.",
        photo: "/assets/about-team-3.jpg",
      },
      {
        name: "Arjun Rao",
        role: "Head of Secure Logistics",
        desc: "Runs the insured, CCTV-tracked transit pipelines and chain-of-custody vaults.",
        photo: "/assets/about-team-4.jpg",
      },
    ],
  },
  founder: {
    kicker: "LEADERSHIP",
    heading: "A word from our founder",
    name: "A. R. Khanna",
    role: "Founder & Managing Director",
    experience: "15+ years in cross-border legal logistics",
    quote:
      "True global mobility requires a foundation of absolute legal trust. We built Global Elite to turn complex international bureaucracies into a secure, flawless day-to-day operation.",
    signature: "Global Elite",
  },
};
