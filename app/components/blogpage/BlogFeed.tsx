"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./blogpage.module.css";
import type { PostCard } from "../../lib/cms";
import { gradFor, iconFor } from "./cover";
import { ArrowRight, ChevronDown, Stamp } from "./icons";

const PAGE_SIZE = 6;

export default function BlogFeed({ posts, query }: { posts: PostCard[]; query: string }) {
  const [active, setActive] = useState("all");
  const [count, setCount] = useState(PAGE_SIZE);

  // "All" + one pill per category that actually has posts
  const topics = useMemo(() => {
    const seen = new Map<string, string>();
    for (const p of posts) if (!seen.has(p.topic)) seen.set(p.topic, p.cat);
    return [
      { id: "all", label: "All" },
      ...[...seen].map(([id, label]) => ({ id, label })),
    ];
  }, [posts]);

  const q = query.trim().toLowerCase();
  const visible = posts.filter(
    (p) =>
      (active === "all" || p.topic === active) &&
      (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
  );

  // Newest matching post is the featured card; the rest fill the grid.
  const featured = visible[0] ?? null;
  const grid = visible.slice(1);
  const shown = grid.slice(0, count);
  const FeaturedIcon = featured ? iconFor(featured) : Stamp;

  return (
    <>
      {/* CATEGORY PILLS — sticky below the header (responsive offset: 133px
          desktop two-tier header, 79px mobile top bar). */}
      <div className={styles.pillBar}>
        <div className={styles.pillRow}>
          {topics.map((t) => {
            const on = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setActive(t.id);
                  setCount(PAGE_SIZE);
                }}
                className={`${styles.pill} ${styles.btn}`}
                style={{
                  fontFamily: "inherit",
                  fontSize: 13.5,
                  fontWeight: 700,
                  padding: "9px 18px",
                  borderRadius: 99,
                  cursor: "pointer",
                  background: on ? "#8E4FA0" : "#fff",
                  color: on ? "#fff" : "#566079",
                  border: `1.5px solid ${on ? "#8E4FA0" : "#ece2f4"}`,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* FEATURED */}
      {featured && (
        <section style={{ background: "#fff", padding: "52px 28px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <Link
              href={`/blog/${featured.slug}`}
              className={`${styles.card} ${styles.featured}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  position: "relative",
                  minHeight: 340,
                  background: gradFor(featured),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {featured.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className={styles.thumbIc}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "repeating-linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.05) 11px,transparent 11px,transparent 22px)",
                      }}
                    />
                    <FeaturedIcon
                      width={80}
                      height={80}
                      className={styles.thumbIc}
                      style={{ color: "rgba(229,169,58,.85)", position: "relative" }}
                    />
                  </>
                )}
                <span
                  style={{
                    position: "absolute",
                    top: 18,
                    left: 18,
                    background: "#E5A93A",
                    color: "#16265C",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: ".05em",
                    padding: "6px 13px",
                    borderRadius: 99,
                  }}
                >
                  FEATURED
                </span>
              </div>
              <div
                style={{
                  padding: "38px 36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: "#8E4FA0",
                  }}
                >
                  <span>{featured.cat}</span>
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#cbb6dc",
                    }}
                  />
                  <span style={{ color: "#94a3b8" }}>{featured.read}</span>
                </div>
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    color: "#16265C",
                    marginTop: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontSize: 15.5,
                    color: "#566079",
                    marginTop: 14,
                    lineHeight: 1.65,
                  }}
                >
                  {featured.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 24,
                  }}
                >
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "linear-gradient(140deg,#16265C,#3a2566)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E5A93A",
                      fontWeight: 800,
                      fontSize: 15,
                    }}
                  >
                    {featured.initials}
                  </span>
                  <div>
                    <div
                      style={{ fontSize: 13.5, fontWeight: 700, color: "#16265C" }}
                    >
                      {featured.author}
                    </div>
                    <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
                      {featured.date}
                    </div>
                  </div>
                  <span
                    className={styles.btn}
                    style={{
                      marginLeft: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      fontSize: 13.5,
                      fontWeight: 800,
                      color: "#8E4FA0",
                    }}
                  >
                    Read article
                    <ArrowRight width={16} height={16} style={{ color: "#8E4FA0" }} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* POST GRID */}
      <section style={{ background: "#fff", padding: "40px 28px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 26,
            }}
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "-.01em",
                color: "#16265C",
              }}
            >
              Latest articles
            </h2>
            <span
              style={{ fontSize: 13.5, color: "#94a3b8", fontWeight: 600 }}
            >
              {grid.length} {grid.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {shown.length > 0 ? (
            <div className={styles.postGrid}>
              {shown.map((p) => {
                const Icon = iconFor(p);
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className={styles.card}
                    style={{
                      border: "1px solid #ece2f4",
                      borderRadius: 18,
                      overflow: "hidden",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      textDecoration: "none",
                      color: "inherit",
                      boxShadow: "0 10px 28px -20px rgba(22,38,92,.2)",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: 180,
                        background: gradFor(p),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt={p.title}
                          className={styles.thumbIc}
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <>
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              backgroundImage:
                                "repeating-linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.05) 10px,transparent 10px,transparent 20px)",
                            }}
                          />
                          <Icon
                            width={48}
                            height={48}
                            className={styles.thumbIc}
                            style={{
                              color: "rgba(255,255,255,.92)",
                              position: "relative",
                            }}
                          />
                        </>
                      )}
                      <span
                        style={{
                          position: "absolute",
                          top: 14,
                          left: 14,
                          background: "rgba(255,255,255,.92)",
                          color: "#16265C",
                          fontSize: 11,
                          fontWeight: 800,
                          padding: "5px 11px",
                          borderRadius: 99,
                        }}
                      >
                        {p.cat}
                      </span>
                    </div>
                    <div
                      style={{
                        padding: 22,
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}
                      >
                        {p.read}
                      </div>
                      <h3
                        style={{
                          fontSize: 17.5,
                          fontWeight: 800,
                          color: "#16265C",
                          marginTop: 8,
                          lineHeight: 1.3,
                        }}
                      >
                        {p.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 13.5,
                          color: "#566079",
                          marginTop: 9,
                          lineHeight: 1.6,
                          flex: 1,
                        }}
                      >
                        {p.excerpt}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 9,
                          marginTop: 18,
                          paddingTop: 16,
                          borderTop: "1px solid #f0ecf6",
                        }}
                      >
                        <span
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            background: "#F4ECFA",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#8E4FA0",
                            fontWeight: 800,
                            fontSize: 12,
                          }}
                        >
                          {p.initials}
                        </span>
                        <div
                          style={{
                            fontSize: 12.5,
                            fontWeight: 700,
                            color: "#16265C",
                          }}
                        >
                          {p.author}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#94a3b8",
                            marginLeft: "auto",
                          }}
                        >
                          {p.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p
              style={{
                fontSize: 15,
                color: "#94a3b8",
                fontWeight: 600,
                textAlign: "center",
                padding: "40px 0",
              }}
            >
              {posts.length === 0
                ? "No articles published yet — check back soon."
                : "No articles match — try another topic or search."}
            </p>
          )}

          {grid.length > count && (
            <div
              style={{ display: "flex", justifyContent: "center", marginTop: 44 }}
            >
              <button
                type="button"
                onClick={() => setCount((c) => c + PAGE_SIZE)}
                className={styles.btn}
                style={{
                  background: "#fff",
                  border: "1.5px solid #8E4FA0",
                  color: "#8E4FA0",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  fontSize: 14.5,
                  padding: "13px 28px",
                  borderRadius: 11,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Load more articles
                <ChevronDown width={17} height={17} style={{ color: "#8E4FA0" }} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
