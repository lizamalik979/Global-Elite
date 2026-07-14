import type { ComponentType, SVGProps } from "react";
import {
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  Languages,
  Stamp,
} from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const topics = [
  { id: "all", label: "All" },
  { id: "apostille", label: "Apostille" },
  { id: "attestation", label: "Attestation" },
  { id: "embassy", label: "Embassy" },
  { id: "translation", label: "Translation" },
  { id: "guides", label: "Country Guides" },
] as const;

export type TopicId = (typeof topics)[number]["id"];

export const featured = {
  slug: "apostille-vs-attestation",
  cat: "Apostille",
  read: "8 min read",
  title:
    "Apostille vs Attestation: which one does your document actually need?",
  excerpt:
    "A clear, country-by-country breakdown of when the Hague apostille applies and when full embassy attestation is required — so you never pay for the wrong process.",
  author: "Meera Iyer",
  initials: "MI",
  date: "28 May 2026",
};

export type Post = {
  slug: string;
  cat: string;
  topic: Exclude<TopicId, "all">;
  icon: Icon;
  grad: string;
  read: string;
  title: string;
  excerpt: string;
  author: string;
  initials: string;
  date: string;
};

export const posts: Post[] = [
  {
    slug: "apostille-degree-certificate-2026",
    cat: "Apostille",
    topic: "apostille",
    icon: GraduationCap,
    grad: "linear-gradient(150deg,#16265C,#5E3F7E)",
    read: "6 min read",
    title: "How to apostille your degree certificate in 2026",
    excerpt:
      "A step-by-step walkthrough of HRD verification, MEA submission and what changed this year.",
    author: "Meera Iyer",
    initials: "MI",
    date: "24 May",
  },
  {
    slug: "uae-attestation-document-checklist",
    cat: "Embassy",
    topic: "embassy",
    icon: Building2,
    grad: "linear-gradient(150deg,#5B3E8E,#8E4FA0)",
    read: "7 min read",
    title: "UAE attestation: the complete document checklist",
    excerpt:
      "Everything you need before submitting for UAE embassy attestation, including Chamber of Commerce steps.",
    author: "Rajat Sehgal",
    initials: "RS",
    date: "19 May",
  },
  {
    slug: "moving-to-germany-documents-to-apostille",
    cat: "Country Guides",
    topic: "guides",
    icon: Globe2,
    grad: "linear-gradient(150deg,#16265C,#3a2566)",
    read: "9 min read",
    title: "Moving to Germany? Documents you must apostille first",
    excerpt:
      "Degrees, birth and marriage certificates — the exact set German authorities expect, and in what order.",
    author: "Anjali Nair",
    initials: "AN",
    date: "14 May",
  },
  {
    slug: "when-do-you-need-a-certified-translation",
    cat: "Translation",
    topic: "translation",
    icon: Languages,
    grad: "linear-gradient(150deg,#8E4FA0,#D26FA0)",
    read: "5 min read",
    title: "When do you need a certified translation?",
    excerpt:
      "Sworn vs notarised translations explained, and which embassies insist on each.",
    author: "Fatima Sheikh",
    initials: "FS",
    date: "09 May",
  },
  {
    slug: "e-sanad-digital-apostille-route",
    cat: "Apostille",
    topic: "apostille",
    icon: Stamp,
    grad: "linear-gradient(150deg,#352A66,#5E3F7E)",
    read: "4 min read",
    title: "e-Sanad explained: the digital apostille route",
    excerpt:
      "How the MEA’s online verification service speeds up eligible documents from days to hours.",
    author: "Meera Iyer",
    initials: "MI",
    date: "02 May",
  },
  {
    slug: "corporate-document-attestation-global-tenders",
    cat: "Attestation",
    topic: "attestation",
    icon: Briefcase,
    grad: "linear-gradient(150deg,#16265C,#5B3E8E)",
    read: "8 min read",
    title: "Corporate document attestation for global tenders",
    excerpt:
      "Incorporation papers, board resolutions and invoices — the commercial attestation chain in full.",
    author: "Rajat Sehgal",
    initials: "RS",
    date: "27 Apr",
  },
];

// Shared shape for anything that has a blog detail page (the featured post uses
// the same fields as a grid post, minus icon/grad which the hero doesn't need).
export type BlogEntry = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  author: string;
  initials: string;
  date: string;
  read: string;
};

// Every post that has a /blog/[slug] detail page: the featured article + the
// six grid posts.
export const allEntries: BlogEntry[] = [
  {
    slug: featured.slug,
    cat: featured.cat,
    title: featured.title,
    excerpt: featured.excerpt,
    author: featured.author,
    initials: featured.initials,
    date: featured.date,
    read: featured.read,
  },
  ...posts.map((p) => ({
    slug: p.slug,
    cat: p.cat,
    title: p.title,
    excerpt: p.excerpt,
    author: p.author,
    initials: p.initials,
    date: p.date,
    read: p.read,
  })),
];

export function getEntryBySlug(slug: string): BlogEntry | undefined {
  return allEntries.find((e) => e.slug === slug);
}
