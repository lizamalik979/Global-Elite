import Link from "next/link";
import { getLatestPosts } from "../lib/cms";

// Insights / Blog section — built to match Figma node 26:2610 ("Latest insights & trends").
// Server Component. Icons are inlined lucide-style SVGs.
//
// The three cards are the newest published posts from the CMS, regardless of
// category. The hardcoded list below renders only when the CMS is unreachable
// or has no posts yet, so the homepage never shows an empty section.

type Post = {
  tag: string;
  title: string;
  href: string;
  image?: string | null;
};

const fallbackPosts: Post[] = [
  {
    tag: "Apostille",
    title: "Apostille vs. Attestation: which one does your country need?",
    href: "/blog",
  },
  {
    tag: "Process",
    title: "5 documents every Gulf work-visa applicant must legalize first",
    href: "/blog",
  },
  {
    tag: "AI & Automation",
    title: "How AI-powered tracking removes the anxiety from going abroad",
    href: "/blog",
  },
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default async function Insights() {
  const latest = await getLatestPosts(3);

  const posts: Post[] = latest.length
    ? latest.map((p) => ({
        // First category is the card's tag; posts without one still render.
        tag: p.category?.[0]?.name || "Insights",
        title: p.title,
        href: `/blog/${p.slug}`,
        image: p.featuredImage,
      }))
    : fallbackPosts;

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
          <div>
            <p className="text-[12.5px] font-bold uppercase tracking-[1.75px] text-purple-500">
              <span className="mr-2" aria-hidden="true">
                &bull;
              </span>
              Insights
            </p>
            <h2 className="mt-3 text-[clamp(30px,4.2vw,42px)] font-bold leading-[1.12] tracking-[-0.015em] text-navy">
              Latest insights &amp;{" "}
              <span className="italic text-purple-500">trends</span>
            </h2>
            <p className="mt-3 max-w-[440px] text-[15px] leading-[1.55] text-slate">
              AI, automation and the playbook for taking your documents global.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-[9px] text-[13px] font-bold tracking-wide text-white transition-colors hover:bg-navy-deep"
          >
            VIEW ALL
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-[22px] sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.href + post.title}
              className="overflow-hidden rounded-[20px] border border-purple-100 bg-white shadow-[0_10px_30px_-18px_rgba(22,38,92,0.16)]"
            >
              {/* Cover — the post's featured image, or the branded placeholder */}
              <Link
                href={post.href}
                className="relative block h-[188px] overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100"
              >
                {post.image && (
                  // CMS covers are arbitrary remote URLs, so they bypass next/image.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                )}
                <span className="absolute left-[14px] top-[14px] rounded-full bg-white/90 px-[11px] py-[5px] text-[11px] font-bold tracking-[0.44px] text-purple-500 shadow-[0_1px_4px_rgba(22,38,92,0.08)]">
                  {post.tag}
                </span>
              </Link>

              {/* Body */}
              <div className="p-[22px]">
                <h3 className="text-[17px] font-bold leading-[1.35] text-navy">
                  <Link href={post.href} className="transition-colors hover:text-purple-600">
                    {post.title}
                  </Link>
                </h3>
                <Link
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-purple-500 transition-colors hover:text-purple-600"
                >
                  Read article
                  <ArrowRight className="size-[15px]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
