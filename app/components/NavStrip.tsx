"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "./icons";
import type { NavLink } from "./navData";

// Dark primary nav strip (desktop). Client component so the active link is
// derived from the current pathname instead of a hardcoded flag.
export default function NavStrip({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  const isActive = (link: NavLink) =>
    link.href === pathname ||
    (link.menu?.some((item) => item.href === pathname) ?? false);

  return (
    <nav
      className="hidden border-b border-white/10 lg:block"
      style={{
        backgroundImage: "linear-gradient(100deg,#16265c,#3a2566)",
      }}
    >
      <div className="mx-auto flex h-[54px] max-w-[1320px] items-center justify-center px-6">
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const trigger = (
              <Link
                href={link.href}
                className={`flex h-[54px] items-center gap-1.5 whitespace-nowrap px-4 text-[14.5px] font-bold transition-colors ${
                  isActive(link) ? "text-gold" : "text-white/95 hover:text-gold"
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
  );
}
