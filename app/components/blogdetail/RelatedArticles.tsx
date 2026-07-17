import Link from "next/link";
import styles from "./blogdetail.module.css";
import type { PostCard } from "../../lib/cms";
import { gradFor, iconFor } from "../blogpage/cover";

// Show up to three other CMS posts (never the one being read) — the server
// page picks them, preferring the same category.
export default function RelatedArticles({ posts }: { posts: PostCard[] }) {
  const related = posts.slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section
      style={{
        background: "#F7F3FA",
        padding: "64px 28px",
        borderTop: "1px solid #ece2f4",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: "-.01em",
            color: "#16265C",
          }}
        >
          Related articles
        </h2>
        <div className={styles.relatedGrid}>
          {related.map((r) => {
            const Icon = iconFor(r);
            return (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className={styles.card}
                style={{
                  background: "#fff",
                  border: "1px solid #ece2f4",
                  borderRadius: 18,
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 28px -20px rgba(22,38,92,.2)",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 150,
                    background: gradFor(r),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "repeating-linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.05) 10px,transparent 10px,transparent 20px)",
                    }}
                  />
                  <Icon
                    width={42}
                    height={42}
                    className={styles.thumbIc}
                    style={{ color: "rgba(255,255,255,.92)", position: "relative" }}
                  />
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 12, color: "#8E4FA0", fontWeight: 700 }}>
                    {r.cat}
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#16265C",
                      marginTop: 7,
                      lineHeight: 1.3,
                    }}
                  >
                    {r.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
