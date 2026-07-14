"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./servicelayout.module.css";
import { Headset } from "../icons";

type TocItem = { id: string; label: string };

// Sticky "On this page" navigation with scroll-spy, matching the /services page.
export default function ServiceLayoutToc({
  items,
  helpPhone = "+91 88667 87599",
}: {
  items: TocItem[];
  helpPhone?: string;
}) {
  const [active, setActive] = useState(items[0]?.id);
  const lockRef = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const marker = 160;
    const onScroll = () => {
      if (lockRef.current) return;
      let current = items[0]?.id;
      for (const s of items) {
        const el = document.getElementById("sec-" + s.id);
        if (el && el.getBoundingClientRect().top <= marker) current = s.id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    lockRef.current = true;
    setActive(id);
    const el = document.getElementById("sec-" + id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 150,
        behavior: "smooth",
      });
    }
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      lockRef.current = false;
    }, 800);
  };

  return (
    <aside className={styles.sidebar}>
      <div style={{ background: "#F7F3FA", border: "1px solid #ece2f4", borderRadius: 18, padding: 22, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".1em", color: "#8E4FA0" }}>ON THIS PAGE</div>
        <nav style={{ display: "flex", flexDirection: "column", marginTop: 14 }}>
          {items.map((s) => {
            const isActive = s.id === active;
            return (
              <a
                key={s.id}
                href={`#sec-${s.id}`}
                onClick={(e) => go(e, s.id)}
                className={styles.toc}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0 10px 14px", textDecoration: "none", borderLeft: `2px solid ${isActive ? "#8E4FA0" : "transparent"}`, marginLeft: -2 }}
              >
                <span style={{ fontSize: 14, fontWeight: isActive ? 800 : 600, color: isActive ? "#8E4FA0" : "#64748b" }}>{s.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* help chip */}
      <div style={{ display: "flex", alignItems: "center", gap: 11, background: "#fff", border: "1px solid #ece2f4", borderRadius: 14, padding: 16, marginTop: 18 }}>
        <span style={{ width: 42, height: 42, borderRadius: "50%", background: "#F4ECFA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Headset width={20} height={20} style={{ color: "#8E4FA0" }} />
        </span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#16265C" }}>Talk to an expert</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#8E4FA0" }}>{helpPhone}</div>
        </div>
      </div>
    </aside>
  );
}
