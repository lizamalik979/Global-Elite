import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight, MessageCircle, PhoneCall } from "./icons";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./navData";

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

export default function Header() {
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
                label="WhatsApp Number"
                value="+91 88664 73857"
              />
              <ContactBlock
                icon={<PhoneCall className="size-5" />}
                label="Customer Care"
                value="+91 88667 87599"
              />
            </div>
            {/* Get A Quote — desktop only */}
            <a
              href="#"
              className="gradient-quote hidden h-11 items-center gap-2 rounded-[11px] px-5 text-[14.5px] font-bold text-white shadow-[0_12px_13px_rgba(142,79,160,0.55)] lg:flex"
            >
              Get A Quote
              <ArrowRight className="size-[17px]" />
            </a>
            {/* Burger — mobile only, opens the drawer */}
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Primary nav strip — desktop only. On mobile the burger in the top bar
          replaces it, so we don't render this dark strip at all. */}
      <nav
        className="hidden border-b border-white/10 lg:block"
        style={{
          backgroundImage: "linear-gradient(100deg,#16265c,#3a2566)",
        }}
      >
        <div className="mx-auto flex h-[54px] max-w-[1320px] items-center justify-center px-6">
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const trigger = (
                <Link
                  href={link.href}
                  className={`flex h-[54px] items-center gap-1.5 whitespace-nowrap px-4 text-[14.5px] font-bold transition-colors ${
                    link.active ? "text-gold" : "text-white/95 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className="size-[15px] opacity-80" />
                  )}
                </Link>
              );

              if (!link.menu) {
                return <div key={link.label}>{trigger}</div>;
              }

              return (
                <div key={link.label} className="group relative">
                  {trigger}
                  {/* Dropdown — CSS hover reveal (no JS needed) */}
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1.5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[260px] overflow-hidden rounded-[14px] border border-purple-100 bg-white p-2 shadow-[0_30px_70px_-24px_rgba(22,38,92,0.45)]">
                      {link.menu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-2.5 rounded-[9px] px-3.5 py-2.5 text-[13.5px] font-semibold text-navy transition-colors hover:bg-purple-50 hover:text-purple-600"
                        >
                          <ChevronRight className="size-[15px] shrink-0 text-purple-500" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
