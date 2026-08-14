import type { Metadata } from "next";
import { getTermsPolicy } from "../lib/cms";

// Terms & Conditions and Privacy Policy are one record in the CMS
// (Dashboard → Terms & Policy), so both are served from this single route.
// Anything the CMS hasn't filled in falls back individually — the page can
// never crash on a missing field.

const FALLBACK = {
  title: "Terms & Privacy Policy",
  subTitle: "Please read these terms carefully before using our services.",
  metaTitle: "Terms & Privacy Policy — Global Elite",
  metaDescription:
    "The terms and conditions governing Global Elite's services, and how we collect, use and protect your personal data.",
  empty:
    "<p>This section is being prepared and will be published shortly. For any questions in the meantime, please contact us.</p>",
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getTermsPolicy();
  return {
    title: page?.metaTitle || FALLBACK.metaTitle,
    description: page?.metaDescription || FALLBACK.metaDescription,
  };
}

const SECTIONS = [
  { id: "terms", label: "Terms & Conditions" },
  { id: "privacy", label: "Privacy Policy" },
];

export default async function TermsAndPrivacy() {
  const page = await getTermsPolicy();

  const title = page?.title || FALLBACK.title;
  const subTitle = page?.subTitle || FALLBACK.subTitle;
  const terms = page?.content?.body?.trim() || FALLBACK.empty;
  const privacy = page?.privacyPolicyContent?.body?.trim() || FALLBACK.empty;

  const updated = page?.updatedAt
    ? new Date(page.updatedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main>
      {/* Hero */}
      <section
        className="text-white"
        style={{ backgroundImage: "linear-gradient(120deg,#16265c,#3a2566)" }}
      >
        <div className="mx-auto max-w-[900px] px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-[11.5px] font-bold tracking-[0.24em] text-gold uppercase">
            Legal
          </p>
          <h1 className="mt-4 text-[34px] leading-[1.15] font-extrabold tracking-[-0.01em] sm:text-[42px]">
            {title}
          </h1>
          <p className="mt-4 max-w-[620px] text-[15.5px] leading-[1.7] text-[#c6cee6]">
            {subTitle}
          </p>
          {updated && (
            <p className="mt-6 text-[12.5px] text-[#9fb0d6]">
              Last updated {updated}
            </p>
          )}

          {/* Jump links */}
          <nav className="mt-8 flex flex-wrap gap-2.5">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/25 px-4 py-2 text-[13px] font-semibold text-white/90 transition-colors hover:border-gold hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Documents */}
      <div className="mx-auto max-w-[900px] px-6 py-14 lg:px-10 lg:py-20">
        <article id="terms" className="scroll-mt-24">
          <h2 className="text-[24px] font-bold text-navy sm:text-[28px]">
            Terms &amp; Conditions
          </h2>
          <div className="mt-3 h-[3px] w-14 rounded-full bg-gold" />
          {/* Rich text authored by admins in the CMS editor. */}
          <div
            className="legal-body mt-7"
            dangerouslySetInnerHTML={{ __html: terms }}
          />
        </article>

        <hr className="my-14 border-t border-purple-100" />

        <article id="privacy" className="scroll-mt-24">
          <h2 className="text-[24px] font-bold text-navy sm:text-[28px]">
            Privacy Policy
          </h2>
          <div className="mt-3 h-[3px] w-14 rounded-full bg-gold" />
          <div
            className="legal-body mt-7"
            dangerouslySetInnerHTML={{ __html: privacy }}
          />
        </article>
      </div>
    </main>
  );
}
