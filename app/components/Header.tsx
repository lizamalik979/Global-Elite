import Image from "next/image";
import { ArrowRight, ChevronDown, MessageCircle, PhoneCall } from "./icons";

const navLinks = [
  { label: "Home", active: true },
  { label: "Services", dropdown: true },
  { label: "Apostille", dropdown: true },
  { label: "Attestation", dropdown: true },
  { label: "Embassy", dropdown: true },
  { label: "Translation" },
  { label: "Blogs" },
  { label: "Contact Us", dropdown: true },
];

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
    <header className="relative z-20">
      {/* Top utility bar */}
      <div className="bg-white">
        <div className="mx-auto flex h-[79px] max-w-[1320px] items-center justify-between px-6 lg:px-10">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/assets/logo-icon.png"
              alt="Global Elite"
              width={883}
              height={804}
              className="h-[46px] w-auto"
              priority
            />
            <Image
              src="/assets/logo-wordmark.png"
              alt="Global Elite"
              width={1920}
              height={174}
              className="hidden h-[22px] w-auto sm:block"
              priority
            />
          </a>

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
            <a
              href="#"
              className="gradient-quote flex h-11 items-center gap-2 rounded-[11px] px-5 text-[14.5px] font-bold text-white shadow-[0_12px_13px_rgba(142,79,160,0.55)]"
            >
              Get A Quote
              <ArrowRight className="size-[17px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Primary nav strip (over hero gradient) */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex h-[54px] max-w-[1320px] items-center justify-center px-6">
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`flex items-center gap-1.5 whitespace-nowrap px-4 text-[14.5px] font-bold transition-colors ${
                  link.active ? "text-gold" : "text-white/95 hover:text-gold"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown className="size-[15px] opacity-80" />
                )}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label="Open menu"
            className="flex items-center gap-2 text-[14.5px] font-bold text-white lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
}
