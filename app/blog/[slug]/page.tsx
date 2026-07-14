import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "../../components/blogdetail";
import { allEntries, getEntryBySlug } from "../../components/blogpage/data";

// Pre-render one static page per blog entry.
export function generateStaticParams() {
  return allEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return { title: "Article not found — Global Elite" };
  return {
    title: `${entry.title} — Global Elite Journal`,
    description: entry.excerpt,
  };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();
  return <BlogDetail entry={entry} />;
}
