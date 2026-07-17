"use client";

import { useState } from "react";
import BlogHero from "./BlogHero";
import BlogFeed from "./BlogFeed";
import Newsletter from "./Newsletter";
import type { PostCard } from "../../lib/cms";

// Blog page (Global Elite Journal), fully driven by CMS posts. The global
// Header and Footer come from the root layout; this renders hero (with live
// search) + filterable feed (topics, featured, post grid) + newsletter CTA.
export default function BlogPage({ posts }: { posts: PostCard[] }) {
  const [query, setQuery] = useState("");
  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <BlogHero query={query} onQueryChange={setQuery} />
      <BlogFeed posts={posts} query={query} />
      <Newsletter />
    </div>
  );
}
