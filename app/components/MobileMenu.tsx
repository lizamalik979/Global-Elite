"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink as NavLinkItem } from "./navData";
import { ChevronDown, ChevronRight } from "./icons";

export default function MobileMenu({ links }: { links: NavLinkItem[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  // Lock body scroll and support Escape-to-close while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      {/* Burger button — sits in the white top bar on mobile, hidden on desktop */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="grid size-11 place-items-center rounded-[11px] text-navy transition-colors hover:bg-purple-50 lg:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-[340px] flex-col text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundImage: "linear-gradient(160deg,#16265c,#3a2566)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-[15px] font-extrabold tracking-wide text-gold">
            MENU
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="grid size-9 place-items-center text-white/80 transition-colors hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {links.map((link) => {
            if (!link.menu) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  className={`block rounded-xl px-4 py-3.5 text-[15px] font-bold transition-colors ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-white/95 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            const isExpanded = expanded === link.label;
            return (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isExpanded ? null : link.label)
                  }
                  aria-expanded={isExpanded}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-bold text-white/95 transition-colors hover:bg-white/10"
                >
                  {link.label}
                  <ChevronDown
                    className={`size-[17px] text-gold transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="mb-1 ml-3 flex flex-col border-l border-white/15 pl-2">
                    {link.menu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={close}
                        className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[13.5px] font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <ChevronRight className="size-[14px] shrink-0 text-purple-300" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="border-t border-white/10 p-4">
          <a
            href="#"
            onClick={close}
            className="gradient-cta flex h-12 items-center justify-center rounded-xl text-[14.5px] font-bold text-white"
          >
            Get A Quote
          </a>
        </div>
      </aside>
    </>
  );
}
