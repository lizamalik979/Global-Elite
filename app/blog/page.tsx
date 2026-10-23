import type { Metadata } from "next";
import BlogPage from "../components/blogpage";
import { getAllPosts, toPostCard } from "../lib/cms";
import JsonLd from "../components/JsonLd";
import { blogListingSchema } from "../lib/schema";

const BLOG_TITLE = "Blog — Global Elite Journal";
const BLOG_DESCRIPTION =
  "Expert guides on apostille, attestation, embassy legalization and country requirements — from the Global Elite Journal.";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
};

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <>
      <JsonLd
        data={blogListingSchema({
          title: BLOG_TITLE,
          description: BLOG_DESCRIPTION,
          posts: posts.map((p) => ({ title: p.title, slug: p.slug })),
        })}
      />
      <BlogPage posts={posts.map((p) => toPostCard(p))} />
    </>
  );
}
