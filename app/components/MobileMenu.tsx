"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink as NavLinkItem } from "./navData";
import { ChevronDown, ChevronRight } from "./icons";

/** True when this link or anything beneath it matches the current route. */
function containsPath(link: NavLinkItem, pathname: string): boolean {
  if (link.href === pathname) return true;
  return link.menu?.some((child) => containsPath(child, pathname)) ?? false;
}

// One accordion row. Rows with children expand in place and recurse, so every
// level the CMS defines stays reachable inside the drawer.
function DrawerItem({
  link,
  path,
  depth,
  pathname,
  expanded,
  toggle,
  close,
}: {
  link: NavLinkItem;
  path: string;
  depth: number;
  pathname: string;
  expanded: Set<string>;
  toggle: (path: string) => void;
  close: () => void;
}) {
  // Each level steps in a little so the hierarchy reads at a glance.
  const indent = { paddingLeft: 16 + depth * 4 };
  const isTop = depth === 0;
  const textClass = isTop
    ? "text-[15px] font-bold"
    : "text-[13.5px] font-semibold";
  const activeClass = containsPath(link, pathname)
    ? "text-gold"
    : isTop
      ? "text-white/95"
      : "text-white/80";

  if (!link.menu?.length) {
    return (
      <Link
        href={link.href}
        onClick={close}
        style={indent}
        className={`flex items-center gap-2 rounded-xl py-3 pr-4 transition-colors hover:bg-white/10 hover:text-white ${textClass} ${activeClass}`}
      >
        {!isTop && (
          <ChevronRight className="size-[14px] shrink-0 text-purple-300" />
        )}
        {link.label}
      </Link>
    );
  }

  const isExpanded = expanded.has(path);
  // A branch that also points somewhere keeps its own link; the chevron alone
  // toggles, so tapping the label still navigates.
  const navigable = link.href && link.href !== "#";

  return (
    <div>
      <div
        style={indent}
        className={`flex items-center rounded-xl pr-1 transition-colors hover:bg-white/10 ${activeClass}`}
      >
        {navigable ? (
          <Link
            href={link.href}
            onClick={close}
            className={`flex flex-1 items-center gap-2 py-3 text-left ${textClass}`}
          >
            {!isTop && (
              <ChevronRight className="size-[14px] shrink-0 text-purple-300" />
            )}
            {link.label}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => toggle(path)}
            className={`flex flex-1 items-center gap-2 py-3 text-left ${textClass}`}
          >
            {!isTop && (
              <ChevronRight className="size-[14px] shrink-0 text-purple-300" />
            )}
            {link.label}
          </button>
        )}
        <button
          type="button"
          onClick={() => toggle(path)}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${link.label}`}
          className="grid size-9 shrink-0 place-items-center rounded-lg transition-colors hover:bg-white/10"
        >
          <ChevronDown
            className={`size-[17px] text-gold transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {isExpanded && (
        <div className="mb-1 ml-4 flex flex-col border-l border-white/15 pl-1">
          {link.menu.map((child, i) => (
            <DrawerItem
              key={`${child.label}-${i}`}
              link={child}
              path={`${path}.${i}`}
              depth={depth + 1}
              pathname={pathname}
              expanded={expanded}
              toggle={toggle}
              close={close}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileMenu({ links }: { links: NavLinkItem[] }) {
  const [open, setOpen] = useState(false);
  // Paths ("0.2.1") rather than labels, so identically named entries at
  // different points in the tree expand independently.
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  const toggle = (path: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        // Collapsing a branch collapses everything nested inside it.
        for (const key of next) {
          if (key === path || key.startsWith(`${path}.`)) next.delete(key);
        }
      } else {
        next.add(path);
      }
      return next;
    });

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
    setExpanded(new Set());
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
          {links.map((link, i) => (
            <DrawerItem
              key={`${link.label}-${i}`}
              link={link}
              path={String(i)}
              depth={0}
              pathname={pathname}
              expanded={expanded}
              toggle={toggle}
              close={close}
            />
          ))}
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
