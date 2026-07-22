import Image from "next/image";
import Link from "next/link";
import { getFooterMenu } from "../lib/cms";

/* ---------- inline lucide-style icons ---------- */

function MapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

/* ---------- fallback data (used when the CMS is unreachable/empty) ---------- */

// The five business divisions of Global Elite (OPC) Pvt Ltd.
const fallbackColumns: FooterColumn[] = [
  {
    title: "Divisions",
    links: [
      { label: "Travel & Tourism", href: "/travel" },
      { label: "Documentation Solutions", href: "/services" },
      { label: "Marketing & AI", href: "/marketing" },
      { label: "Education & Career", href: "/education" },
      { label: "AI & Technology", href: "/technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Branch Offices",
    links: [
      { label: "New Delhi", href: "#" },
      { label: "Mumbai", href: "#" },
      { label: "Hyderabad", href: "#" },
      { label: "Vizag", href: "#" },
    ],
  },
];

const fallbackDescription =
  "Global Elite (OPC) Pvt Ltd — your gateway to global opportunities. Travel, document legalization, AI marketing, education and technology solutions across India and 120+ countries.";

const fallbackCopyright = "© 2026 Global Elite Logistics. All rights reserved.";

type FooterColumn = { title: string; links: { label: string; href: string }[] };

/* ---------- component ---------- */

// Footer content comes from the CMS (Menus → Footer Menu): each main menu item
// is a link column (its children are the links), and contact-detail items
// titled "Description" / "Copyright" override the brand text.
export default async function Footer() {
  const cms = await getFooterMenu();

  const columns: FooterColumn[] = cms
    ? cms.columns.map((col) => ({
        title: col.title,
        links: Array.isArray(col.child_menu)
          ? col.child_menu.map((c) => ({ label: c.title, href: c.url || "#" }))
          : [],
      }))
    : fallbackColumns;

  const detail = (name: string) =>
    cms?.details.find((d) => d.title?.trim().toLowerCase() === name)?.value;

  const description = detail("description") || fallbackDescription;
  const copyright = detail("copyright") || fallbackCopyright;
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 py-16 md:grid-cols-2 lg:grid-cols-[360px_repeat(3,minmax(0,1fr))]">
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo-icon.png"
                alt="Global Elite"
                width={883}
                height={804}
                className="h-[54px] w-auto"
              />
              <div className="flex flex-col gap-[3px]">
                <Image
                  src="/assets/logo-wordmark.png"
                  alt="Global Elite"
                  width={1920}
                  height={174}
                  className="h-[18px] w-auto"
                />
                <span className="text-[7.5px] font-semibold tracking-[0.32em] text-gold/75">
                  GLOBAL · REACH · ELITE · SOLUTION
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-[320px] text-[13.5px] leading-[1.6] text-[#9fb0d6]">
              {description}
            </p>
          </div>

          {/* Link columns (from the CMS footer menu) */}
          {columns.map((col) => {
            // Branch/office columns render a location pin next to each entry
            const withPin = /branch|office|location/i.test(col.title);
            return (
              <div key={col.title}>
                <h3 className="text-[13px] font-bold tracking-[0.04em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-[18px] flex flex-col gap-[13px]">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-[13.5px] text-[#9fb0d6] transition-colors hover:text-white"
                      >
                        {withPin && (
                          <MapPin className="size-[14px] shrink-0 text-[#9fb0d6]" />
                        )}
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#2c3f6e]" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-[#7587b3]">{copyright}</p>
          <div className="flex items-center gap-3">
            <span className="flex h-[28.5px] items-center gap-2 rounded-[8px] border border-[#2c3f6e] px-2.5 text-[11.5px] text-[#9fb0d6]">
              <ShieldCheck className="size-[14px]" />
              MEA Registered
            </span>
            <span className="flex h-[28.5px] items-center gap-2 rounded-[8px] border border-[#2c3f6e] px-2.5 text-[11.5px] text-[#9fb0d6]">
              <LockIcon className="size-[14px]" />
              256-bit SSL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
