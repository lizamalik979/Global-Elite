import type { Metadata } from "next";
import BlogPage from "../components/blogpage";

export const metadata: Metadata = {
  title: "Blog — Global Elite Journal",
  description:
    "Expert guides on apostille, attestation, embassy legalization and country requirements — from the Global Elite Journal.",
};

export default function Blog() {
  return <BlogPage />;
}
