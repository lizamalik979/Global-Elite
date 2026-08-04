import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { getFooterMenu } from "../lib/cms";
import type { CmsFooterDetail, CmsLink } from "../lib/cms";

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

function MailIcon({ className }: { className?: string }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ---------- fallback data (used when the CMS is unreachable/empty) ---------- */

// The five business divisions of Global Elite (OPC) Pvt Ltd.
const fallbackColumns: CmsLink[] = [
  {
    label: "Divisions",
    href: "#",
    children: [
      { label: "Travel & Tourism", href: "/travel", children: [] },
      { label: "Documentation Solutions", href: "/services", children: [] },
      { label: "Marketing & AI", href: "/marketing", children: [] },
      { label: "Education & Career", href: "/education", children: [] },
      { label: "AI & Technology", href: "/technology", children: [] },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about", children: [] },
      { label: "Blog", href: "/blog", children: [] },
      { label: "Contact Us", href: "/contact", children: [] },
    ],
  },
  {
    label: "Branch Offices",
    href: "#",
    children: [
      { label: "New Delhi", href: "#", children: [] },
      { label: "Mumbai", href: "#", children: [] },
      { label: "Hyderabad", href: "#", children: [] },
      { label: "Vizag", href: "#", children: [] },
    ],
  },
];

const fallbackDescription =
  "Global Elite (OPC) Pvt Ltd — your gateway to global opportunities. Travel, document legalization, AI marketing, education and technology solutions across India and 120+ countries.";

const fallbackCopyright = "© 2026 Global Elite Logistics. All rights reserved.";

/* ---------- link helpers ---------- */

// `next/link` only helps for in-app routes; mailto:/tel:/external URLs (and the
// "#" placeholder the CMS writes for non-navigating entries) stay plain anchors.
function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (isInternalRoute(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/* ---------- menu column rendering (any depth) ---------- */

// A branch without children is a plain link; a branch with children becomes a
// disclosure so nested levels stay reachable without client-side JS.
function FooterMenuLink({
  link,
  depth,
  withPin,
}: {
  link: CmsLink;
  depth: number;
  withPin: boolean;
}) {
  const labelClass =
    "flex items-center gap-2 text-[13.5px] text-[#9fb0d6] transition-colors hover:text-white";

  if (link.children.length === 0) {
    return (
      <li>
        <SmartLink href={link.href} className={labelClass}>
          {withPin && depth === 0 && (
            <MapPin className="size-[14px] shrink-0 text-[#9fb0d6]" />
          )}
          {link.label}
        </SmartLink>
      </li>
    );
  }

  return (
    <li>
      <details className="group" open={depth === 0}>
        <summary className="flex cursor-pointer list-none items-center gap-2 text-[13.5px] text-[#9fb0d6] transition-colors marker:hidden hover:text-white [&::-webkit-details-marker]:hidden">
          {withPin && depth === 0 && (
            <MapPin className="size-[14px] shrink-0 text-[#9fb0d6]" />
          )}
          {isInternalRoute(link.href) || link.href !== "#" ? (
            <SmartLink href={link.href} className="hover:text-white">
              {link.label}
            </SmartLink>
          ) : (
            <span>{link.label}</span>
          )}
          <ChevronDown className="size-[13px] shrink-0 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <ul className="mt-[13px] ml-[6px] flex flex-col gap-[13px] border-l border-[#2c3f6e] pl-3">
          {link.children.map((child, i) => (
            <FooterMenuLink
              key={`${child.label}-${i}`}
              link={child}
              depth={depth + 1}
              withPin={withPin}
            />
          ))}
        </ul>
      </details>
    </li>
  );
}

/* ---------- contact detail rendering ---------- */

function DetailIcon({ type }: { type?: CmsFooterDetail["type"] }) {
  const className = "size-[14px] shrink-0 text-gold/70";
  switch (type) {
    case "email":
      return <MailIcon className={className} />;
    case "phone":
      return <PhoneIcon className={className} />;
    case "address":
      return <MapPin className={className} />;
    case "social":
    case "link":
      return <GlobeIcon className={className} />;
    default:
      return null;
  }
}

// Every entry renders whatever it has: a label, a value (linked when the CMS
// produced a URL for it), an optional icon image, and its own nested entries.
function FooterDetail({
  detail,
  depth = 0,
}: {
  detail: CmsFooterDetail;
  depth?: number;
}) {
  const hasLink = Boolean(detail.url) && detail.url !== "#";
  const valueClass = hasLink
    ? "text-[13.5px] leading-[1.6] text-[#9fb0d6] transition-colors hover:text-white"
    : "text-[13.5px] leading-[1.6] text-[#9fb0d6]";

  return (
    <li>
      <div className="flex items-start gap-2">
        {detail.image ? (
          // CMS-hosted icons are arbitrary remote URLs, so they bypass next/image.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={detail.image}
            alt=""
            className="mt-[3px] size-[14px] shrink-0 object-contain"
          />
        ) : (
          <span className="mt-[3px]">
            <DetailIcon type={detail.type} />
          </span>
        )}
        <div className="min-w-0">
          {detail.title && (
            <p className="text-[12.5px] font-semibold text-white/85">
              {detail.title}
            </p>
          )}
          {detail.value &&
            (hasLink ? (
              <SmartLink href={detail.url!} className={`${valueClass} break-words`}>
                {detail.value}
              </SmartLink>
            ) : (
              <p className={`${valueClass} break-words`}>{detail.value}</p>
            ))}
        </div>
      </div>
      {detail.children.length > 0 && (
        <ul className="mt-3 ml-[7px] flex flex-col gap-3 border-l border-[#2c3f6e] pl-3">
          {detail.children.map((child, i) => (
            <FooterDetail
              key={`${child.title}-${child.value}-${i}`}
              detail={child}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function SocialBadge({ detail }: { detail: CmsFooterDetail }) {
  const label = detail.title || detail.value || "Social";
  const body = detail.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={detail.image} alt={label} className="size-[15px] object-contain" />
  ) : (
    <>
      <GlobeIcon className="size-[14px]" />
      <span className="text-[12px]">{label}</span>
    </>
  );

  const className =
    "flex h-[32px] items-center gap-2 rounded-[8px] border border-[#2c3f6e] px-2.5 text-[#9fb0d6] transition-colors hover:border-gold/50 hover:text-white";

  if (!detail.url || detail.url === "#") {
    return (
      <span className={className} title={label}>
        {body}
      </span>
    );
  }
  return (
    <SmartLink href={detail.url} className={className}>
      <span className="sr-only">{label}</span>
      {body}
    </SmartLink>
  );
}

/* ---------- component ---------- */

// Footer content comes from the CMS (Menus → Footer Menu): each main menu item
// is a link column (nested children render as in-column disclosures), and the
// contact details drive the brand column — items titled "Description" /
// "Copyright" replace the brand text, everything else (emails, phones,
// addresses, links, socials, free text) is listed beneath it.
export default async function Footer() {
  const cms = await getFooterMenu();

  const columns = cms?.columns.length ? cms.columns : fallbackColumns;
  const details = cms?.details ?? [];

  const isNamed = (detail: CmsFooterDetail, name: string) =>
    detail.title.trim().toLowerCase().replace(/[:\s]+$/, "") === name;

  const description =
    details.find((d) => isNamed(d, "description"))?.value || fallbackDescription;
  const copyright =
    details.find((d) => isNamed(d, "copyright"))?.value || fallbackCopyright;

  // Everything that is not the brand text is real footer content.
  const rest = details.filter(
    (d) => !isNamed(d, "description") && !isNamed(d, "copyright")
  );
  const socials = rest.filter((d) => d.type === "social");
  const contacts = rest.filter((d) => d.type !== "social");

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div
          // The column count follows the CMS, so adding a menu column doesn't
          // squeeze the grid.
          style={
            {
              "--footer-cols": `360px repeat(${columns.length}, minmax(0, 1fr))`,
            } as CSSProperties
          }
          className="grid grid-cols-1 gap-x-10 gap-y-12 py-16 md:grid-cols-2 lg:[grid-template-columns:var(--footer-cols)]"
        >
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

            {contacts.length > 0 && (
              <ul className="mt-6 flex max-w-[320px] flex-col gap-3.5">
                {contacts.map((detail, i) => (
                  <FooterDetail
                    key={`${detail.title}-${detail.value}-${i}`}
                    detail={detail}
                  />
                ))}
              </ul>
            )}

            {socials.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                {socials.map((detail, i) => (
                  <SocialBadge
                    key={`${detail.title}-${detail.url}-${i}`}
                    detail={detail}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Link columns (from the CMS footer menu) */}
          {columns.map((col, colIndex) => {
            // Branch/office columns render a location pin next to each entry
            const withPin = /branch|office|location/i.test(col.label);
            return (
              <div key={`${col.label}-${colIndex}`}>
                <h3 className="text-[13px] font-bold tracking-[0.04em] text-white">
                  {isInternalRoute(col.href) || col.href !== "#" ? (
                    <SmartLink
                      href={col.href}
                      className="transition-colors hover:text-gold"
                    >
                      {col.label}
                    </SmartLink>
                  ) : (
                    col.label
                  )}
                </h3>
                <ul className="mt-[18px] flex flex-col gap-[13px]">
                  {col.children.map((item, i) => (
                    <FooterMenuLink
                      key={`${item.label}-${i}`}
                      link={item}
                      depth={0}
                      withPin={withPin}
                    />
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
