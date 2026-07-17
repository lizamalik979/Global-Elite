import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, PhoneCall } from "./icons";
import MobileMenu from "./MobileMenu";
import NavStrip from "./NavStrip";
import { navLinks as fallbackNavLinks, type NavLink } from "./navData";
import { getHeaderMenu } from "../lib/cms";

function ContactBlock({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-[42px] shrink-0 place-items-center rounded-full bg-purple-50 text-purple-500">
        {icon}
      </span>
      <div className="leading-tight">
        <p className="text-[12px] font-semibold text-slate-light">{label}</p>
        <p className="text-[15px] font-bold text-navy">{value}</p>
      </div>
    </div>
  );
}

// Header content comes from the CMS (Menus → Header Menu); the hardcoded
// navData is only a fallback for when the CMS is unreachable or empty.
export default async function Header() {
  const cms = await getHeaderMenu();

  const links: NavLink[] = cms
    ? cms.items.map((item) => ({
        label: item.title,
        href: item.url || "#",
        dropdown: Array.isArray(item.child_menu) && item.child_menu.length > 0,
        menu:
          Array.isArray(item.child_menu) && item.child_menu.length > 0
            ? item.child_menu.map((c) => ({ label: c.title, href: c.url || "#" }))
            : undefined,
      }))
    : fallbackNavLinks;

  const contact = {
    whatsappLabel: cms?.contact.whatsappLabel || "WhatsApp Number",
    whatsappNumber: cms?.contact.whatsappNumber || "+91 88664 73857",
    careLabel: cms?.contact.careLabel || "Customer Care",
    careNumber: cms?.contact.careNumber || "+91 88667 87599",
    ctaText: cms?.contact.ctaText || "Get A Quote",
    ctaUrl: cms?.contact.ctaUrl || "#",
  };

  return (
    <header className="sticky top-0 z-30">
      {/* Top utility bar */}
      <div className="bg-white">
        <div className="mx-auto flex h-[79px] max-w-[1320px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo-icon.png"
              alt="Global Elite"
              width={883}
              height={804}
              className="h-[36px] w-auto sm:h-[46px]"
              priority
            />
            <Image
              src="/assets/logo-wordmark.png"
              alt="Global Elite"
              width={1920}
              height={174}
              className="h-[15px] w-auto sm:h-[22px]"
              priority
            />
          </Link>

          <div className="flex items-center gap-5 lg:gap-7">
            <div className="hidden items-center gap-6 md:flex">
              <ContactBlock
                icon={<MessageCircle className="size-5" />}
                label={contact.whatsappLabel}
                value={contact.whatsappNumber}
              />
              <ContactBlock
                icon={<PhoneCall className="size-5" />}
                label={contact.careLabel}
                value={contact.careNumber}
              />
            </div>
            {/* Get A Quote — desktop only */}
            <a
              href={contact.ctaUrl}
              className="gradient-quote hidden h-11 items-center gap-2 rounded-[11px] px-5 text-[14.5px] font-bold text-white shadow-[0_12px_13px_rgba(142,79,160,0.55)] lg:flex"
            >
              {contact.ctaText}
              <ArrowRight className="size-[17px]" />
            </a>
            {/* Burger — mobile only, opens the drawer */}
            <MobileMenu links={links} />
          </div>
        </div>
      </div>

      {/* Primary nav strip — desktop only. On mobile the burger in the top bar
          replaces it, so we don't render this dark strip at all. */}
      <NavStrip links={links} />
    </header>
  );
}
