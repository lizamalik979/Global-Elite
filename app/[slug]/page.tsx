import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServicePage } from "../lib/cms";
import CmsServiceLayout from "../components/divisions/CmsServiceLayout";

// Catch-all for CMS-managed service/division pages: any page published in the
// CMS is served at /<slug> without touching frontend code. Static routes
// (/travel, /about, …) always take precedence over this dynamic segment.

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getServicePage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.content.badge} — Global Elite`,
    description: page.metaDescription || page.content.subtitle,
  };
}

export default async function CmsServicePage({ params }: Props) {
  const { slug } = await params;
  const page = await getServicePage(slug);
  if (!page) notFound();
  return <CmsServiceLayout content={page.content} slug={slug} />;
}
