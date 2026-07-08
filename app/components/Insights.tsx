// Insights / Blog section — built to match Figma node 26:2610 ("Latest insights & trends").
// Server Component. Icons are inlined lucide-style SVGs. The Figma cover frames carry no
// raster fill, so covers render as a light branded image-placeholder area.

type Post = {
  tag: string;
  title: string;
  href: string;
};

const posts: Post[] = [
  {
    tag: "Apostille",
    title: "Apostille vs. Attestation: which one does your country need?",
    href: "#",
  },
  {
    tag: "Process",
    title: "5 documents every Gulf work-visa applicant must legalize first",
    href: "#",
  },
  {
    tag: "Guide",
    title: "How real-time tracking removes the anxiety from going abroad",
    href: "#",
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

export default function Insights() {
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
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-[9px] text-[13px] font-bold tracking-wide text-white transition-colors hover:bg-navy-deep"
          >
            VIEW ALL
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-[22px] sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[20px] border border-purple-100 bg-white shadow-[0_10px_30px_-18px_rgba(22,38,92,0.16)]"
            >
              {/* Cover */}
              <div className="relative h-[188px] bg-gradient-to-br from-purple-50 to-purple-100">
                <span className="absolute left-[14px] top-[14px] rounded-full bg-white/90 px-[11px] py-[5px] text-[11px] font-bold tracking-[0.44px] text-purple-500 shadow-[0_1px_4px_rgba(22,38,92,0.08)]">
                  {post.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-[22px]">
                <h3 className="text-[17px] font-bold leading-[1.35] text-navy">
                  {post.title}
                </h3>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-purple-500 transition-colors hover:text-purple-600"
                >
                  Read article
                  <ArrowRight className="size-[15px]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
