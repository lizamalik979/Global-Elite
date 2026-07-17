import type { Metadata } from "next";
import BlogPage from "../components/blogpage";
import { getAllPosts, toPostCard } from "../lib/cms";

export const metadata: Metadata = {
  title: "Blog — Global Elite Journal",
  description:
    "Expert guides on apostille, attestation, embassy legalization and country requirements — from the Global Elite Journal.",
};

export default async function Blog() {
  const posts = await getAllPosts();
  return <BlogPage posts={posts.map((p) => toPostCard(p))} />;
}
