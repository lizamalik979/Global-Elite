import BlogHero from "./BlogHero";
import BlogFeed from "./BlogFeed";
import Newsletter from "./Newsletter";

// Blog page (Global Elite Journal). The global Header and Footer are provided
// by the root layout, so this only renders the page body: hero + filterable
// feed (topics, featured, post grid) + newsletter CTA.
export default function BlogPage() {
  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <BlogHero />
      <BlogFeed />
      <Newsletter />
    </div>
  );
}
