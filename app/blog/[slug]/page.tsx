import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "../../components/blogdetail";
import { buildToc, getAllPosts, getPost, toPostCard } from "../../lib/cms";
import JsonLd from "../../components/JsonLd";
import { blogPostingSchema } from "../../lib/schema";

// Blog article page, rendered from the CMS post (content, TOC from its h2
// headings, FAQ items, related posts by category).

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article not found — Global Elite" };
  return {
    title: `${post.title} — Global Elite Journal`,
    description: post.excerpt || undefined,
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { html, toc } = buildToc(post.content || "");

  // Related: same category first, then newest others.
  const all = (await getAllPosts()).filter((p) => p.slug !== post.slug);
  const catSlug = post.category?.[0]?.slug;
  const related = [
    ...all.filter((p) => p.category?.[0]?.slug === catSlug),
    ...all.filter((p) => p.category?.[0]?.slug !== catSlug),
  ].slice(0, 3);

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          image: post.featuredImage,
          author: post.author?.username || "Global Elite",
          publishedAt: post.publishedAt ?? post.createdAt,
          faqs: post.faq_items,
        })}
      />
      <BlogDetail
        entry={toPostCard(post, true)}
        contentHtml={html}
        toc={toc}
        faqs={post.faq_items}
        related={related.map((p) => toPostCard(p))}
        featuredImage={post.featuredImage}
      />
    </>
  );
}
