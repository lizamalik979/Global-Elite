"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./blogdetail.module.css";
import { ArrowRight, Link as LinkIcon, Send, Share2 } from "./icons";

export type TocItem = { id: string; label: string };

// Sticky "In this article" nav with scroll-spy + smooth scroll to each section.
// Items come from the CMS post's h2 headings (annotated with art-* ids).
export default function BlogTocSidebar({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const lockRef = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (items.length === 0) return;
    const marker = 140;
    const onScroll = () => {
      if (lockRef.current) return;
      let current = items[0].id;
      for (const t of items) {
        const el = document.getElementById("art-" + t.id);
        if (el && el.getBoundingClientRect().top <= marker) current = t.id;
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
    const el = document.getElementById("art-" + id);
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
      {items.length > 0 && (
      <div
        style={{
          background: "#F7F3FA",
          border: "1px solid #ece2f4",
          borderRadius: 16,
          padding: 20,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: ".1em",
            color: "#8E4FA0",
          }}
        >
          IN THIS ARTICLE
        </div>
        <nav
          style={{ display: "flex", flexDirection: "column", marginTop: 12 }}
        >
          {items.map((t) => {
            const on = t.id === active;
            return (
              <a
                key={t.id}
                href={`#art-${t.id}`}
                onClick={(e) => go(e, t.id)}
                className={styles.toc}
                style={{
                  fontSize: 13.5,
                  fontWeight: on ? 800 : 600,
                  color: on ? "#8E4FA0" : "#64748b",
                  textDecoration: "none",
                  padding: "9px 0 9px 13px",
                  borderLeft: `2px solid ${on ? "#8E4FA0" : "transparent"}`,
                  marginLeft: -2,
                  lineHeight: 1.4,
                }}
              >
                {t.label}
              </a>
            );
          })}
        </nav>
      </div>
      )}

      {/* share */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 16,
        }}
      >
        <span
          style={{ fontSize: 12.5, fontWeight: 700, color: "#94a3b8" }}
        >
          Share
        </span>
        {[
          { Icon: Send, label: "Share on X" },
          { Icon: Share2, label: "Share" },
          { Icon: LinkIcon, label: "Copy link" },
        ].map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className={styles.share}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#F4ECFA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <Icon width={17} height={17} style={{ color: "#8E4FA0" }} />
          </a>
        ))}
      </div>

      {/* quote card */}
      <div
        style={{
          background: "linear-gradient(160deg,#16265C,#3a2566)",
          borderRadius: 16,
          padding: 22,
          marginTop: 16,
          boxShadow: "0 18px 40px -24px rgba(22,38,92,.5)",
        }}
      >
        <div
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
          }}
        >
          Need apostille help?
        </div>
        <p
          style={{
            fontSize: 12.5,
            color: "#c9b6e8",
            marginTop: 6,
            lineHeight: 1.5,
          }}
        >
          Get a fixed quote in one business hour.
        </p>
        <a
          href="/contact"
          className={styles.btn}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
            width: "100%",
            marginTop: 14,
            background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: 13.5,
            padding: 11,
            borderRadius: 10,
          }}
        >
          Get A Quote
          <ArrowRight width={15} height={15} style={{ color: "#fff" }} />
        </a>
      </div>
    </aside>
  );
}
