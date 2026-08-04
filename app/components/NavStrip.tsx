"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "./icons";
import type { NavLink } from "./navData";

// Nested panels need a distinct Tailwind group name per level, otherwise
// hovering an outer panel would reveal every panel nested inside it (group
// variants compile to plain descendant selectors). Class strings are written
// out in full so Tailwind's scanner can see them.
const LEVEL_GROUPS = [
  {
    group: "group/l1",
    reveal:
      "group-hover/l1:visible group-hover/l1:opacity-100 group-hover/l1:translate-x-0 group-focus-within/l1:visible group-focus-within/l1:opacity-100 group-focus-within/l1:translate-x-0",
  },
  {
    group: "group/l2",
    reveal:
      "group-hover/l2:visible group-hover/l2:opacity-100 group-hover/l2:translate-x-0 group-focus-within/l2:visible group-focus-within/l2:opacity-100 group-focus-within/l2:translate-x-0",
  },
  {
    group: "group/l3",
    reveal:
      "group-hover/l3:visible group-hover/l3:opacity-100 group-hover/l3:translate-x-0 group-focus-within/l3:visible group-focus-within/l3:opacity-100 group-focus-within/l3:translate-x-0",
  },
  {
    group: "group/l4",
    reveal:
      "group-hover/l4:visible group-hover/l4:opacity-100 group-hover/l4:translate-x-0 group-focus-within/l4:visible group-focus-within/l4:opacity-100 group-focus-within/l4:translate-x-0",
  },
];

// No `overflow-hidden` here: nested flyouts sit outside the panel's right edge
// and would be clipped away. The rows carry their own radius, so nothing bleeds
// past the rounded corners anyway.
const panelClass =
  "min-w-[260px] rounded-[14px] border border-purple-100 bg-white p-2 shadow-[0_30px_70px_-24px_rgba(22,38,92,0.45)]";

const itemClass =
  "flex flex-1 items-center gap-2.5 rounded-[9px] px-3.5 py-2.5 text-[13.5px] font-semibold text-navy transition-colors hover:bg-purple-50 hover:text-purple-600";

/** True when this link or anything beneath it matches the current route. */
function containsPath(link: NavLink, pathname: string): boolean {
  if (link.href === pathname) return true;
  return link.menu?.some((child) => containsPath(child, pathname)) ?? false;
}

// One row inside a dropdown panel. Rows with children open their own panel to
// the right on hover/focus, recursing for as deep as the CMS nests them.
function SubMenuItem({
  link,
  depth,
  pathname,
}: {
  link: NavLink;
  depth: number;
  pathname: string;
}) {
  const active = containsPath(link, pathname);
  const label = (
    <>
      <ChevronRight className="size-[15px] shrink-0 text-purple-500" />
      {link.label}
    </>
  );

  if (!link.menu?.length) {
    return (
      <Link
        href={link.href}
        className={`${itemClass} ${active ? "bg-purple-50 text-purple-600" : ""}`}
      >
        {label}
      </Link>
    );
  }

  const level = LEVEL_GROUPS[Math.min(depth, LEVEL_GROUPS.length - 1)];

  return (
    <div className={`relative ${level.group}`}>
      <Link
        href={link.href}
        className={`${itemClass} ${active ? "bg-purple-50 text-purple-600" : ""}`}
      >
        {label}
        <ChevronRight className="ml-auto size-[14px] shrink-0 opacity-60" />
      </Link>
      {/* Flyout — opens to the right of the row it belongs to */}
      <div
        className={`invisible absolute left-full top-0 z-50 -translate-x-1 pl-1.5 opacity-0 transition-all duration-200 ${level.reveal}`}
      >
        <div className={panelClass}>
          {link.menu.map((child, i) => (
            <SubMenuItem
              key={`${child.label}-${i}`}
              link={child}
              depth={depth + 1}
              pathname={pathname}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Dark primary nav strip (desktop). Client component so the active link is
// derived from the current pathname instead of a hardcoded flag.
export default function NavStrip({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav
      className="hidden border-b border-white/10 lg:block"
      style={{
        backgroundImage: "linear-gradient(100deg,#16265c,#3a2566)",
      }}
    >
      <div className="mx-auto flex h-[54px] max-w-[1320px] items-center justify-center px-6">
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link, index) => {
            const active = containsPath(link, pathname);
            const hasMenu = Boolean(link.menu?.length);
            const trigger = (
              <Link
                href={link.href}
                className={`flex h-[54px] items-center gap-1.5 whitespace-nowrap px-4 text-[14.5px] font-bold transition-colors ${
                  active ? "text-gold" : "text-white/95 hover:text-gold"
                }`}
              >
                {link.label}
                {(link.dropdown || hasMenu) && (
                  <ChevronDown className="size-[15px] opacity-80" />
                )}
              </Link>
            );

            if (!hasMenu) {
              return <div key={`${link.label}-${index}`}>{trigger}</div>;
            }

            return (
              <div
                key={`${link.label}-${index}`}
                className="group/l0 relative"
              >
                {trigger}
                {/* First-level dropdown — CSS hover/focus reveal (no JS needed) */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1.5 opacity-0 transition-all duration-200 group-hover/l0:visible group-hover/l0:opacity-100 group-focus-within/l0:visible group-focus-within/l0:opacity-100">
                  <div className={panelClass}>
                    {link.menu!.map((item, i) => (
                      <SubMenuItem
                        key={`${item.label}-${i}`}
                        link={item}
                        depth={0}
                        pathname={pathname}
                      />
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
