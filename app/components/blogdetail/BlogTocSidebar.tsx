"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./blogdetail.module.css";
import { ArrowRight, Check, Link as LinkIcon, Send, Share2 } from "./icons";

export type TocItem = { id: string; label: string };

// Sticky "In this article" nav with scroll-spy + smooth scroll to each section.
// Items come from the CMS post's h2 headings (annotated with art-* ids).
export default function BlogTocSidebar({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [copied, setCopied] = useState(false);
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
          {
            Icon: Send,
            label: "Share on WhatsApp",
            onClick: () => {
              const url = window.location.href;
              const title = document.title;
              window.open(
                `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`,
                "_blank",
                "noopener,noreferrer"
              );
            },
          },
          {
            Icon: Share2,
            label: "Share",
            onClick: async () => {
              const url = window.location.href;
              const title = document.title;
              // Native share sheet (mobile / supported browsers) → the user
              // picks their own app/account; falls back to LinkedIn on desktop
              if (navigator.share) {
                try {
                  await navigator.share({ title, url });
                } catch {
                  /* user closed the share sheet */
                }
              } else {
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            },
          },
          {
            Icon: LinkIcon,
            label: "Copy link",
            onClick: async () => {
              try {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              } catch {
                /* clipboard unavailable */
              }
            },
          },
        ].map(({ Icon, label, onClick }) => {
          const isCopy = label === "Copy link";
          const showCopied = isCopy && copied;
          return (
            <button
              key={label}
              type="button"
              onClick={onClick}
              aria-label={showCopied ? "Link copied" : label}
              title={showCopied ? undefined : label}
              className={styles.share}
              style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: 10,
                background: showCopied ? "#e9f9ef" : "#F4ECFA",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {showCopied ? (
                <Check width={17} height={17} style={{ color: "#1da851" }} />
              ) : (
                <Icon width={17} height={17} style={{ color: "#8E4FA0" }} />
              )}
              {/* "Link copied!" tooltip */}
              {showCopied && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#16265C",
                    color: "#fff",
                    fontSize: 11.5,
                    fontWeight: 700,
                    padding: "6px 10px",
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 18px -8px rgba(22,38,92,.5)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                >
                  Link copied!
                  <span
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      border: "5px solid transparent",
                      borderTopColor: "#16265C",
                    }}
                  />
                </span>
              )}
            </button>
          );
        })}
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
