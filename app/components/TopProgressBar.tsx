"use client";

// Slim page-load progress bar fixed to the top of the viewport (NProgress
// style, zero dependencies). Starts when the visitor clicks an internal link
// or uses back/forward, creeps towards ~90%, and completes to 100% when the
// new route has rendered (pathname/search change).

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const trickle = useRef<ReturnType<typeof setInterval> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = useRef(false);

  const clearTimers = () => {
    if (trickle.current) clearInterval(trickle.current);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    trickle.current = null;
    hideTimer.current = null;
  };

  // Start the bar on internal navigation intents
  useEffect(() => {
    const start = () => {
      if (active.current) return;
      active.current = true;
      clearTimers();
      setVisible(true);
      setProgress(12);
      // Creep towards 90% while the next page loads
      trickle.current = setInterval(() => {
        setProgress((p) => (p < 90 ? p + Math.max(0.5, (90 - p) / 12) : p));
      }, 180);
    };

    const onClick = (e: MouseEvent) => {
      // Only plain left-clicks
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const anchor = (e.target as HTMLElement).closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      // Internal navigations only — skip hashes, mailto/tel and external hosts
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const current = window.location.pathname + window.location.search;
      if (url.pathname + url.search === current) return;
      start();
    };

    const onPopState = () => start();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Route rendered — run to 100% and fade out
  useEffect(() => {
    if (!active.current) return;
    active.current = false;
    clearTimers();
    setProgress(100);
    hideTimer.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 350);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 9999,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity .25s ease",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg,#E89B3A,#D26FA0,#8E5FB6)",
          boxShadow: "0 0 10px rgba(232,155,58,.7), 0 0 4px rgba(142,95,182,.6)",
          transition: "width .2s ease",
        }}
      />
    </div>
  );
}
