import Link from "next/link";
import styles from "./blogdetail.module.css";
import BlogTocSidebar from "./BlogTocSidebar";
import ArticleBody from "./ArticleBody";
import RelatedArticles from "./RelatedArticles";
import { Calendar, ChevronRight, Clock, Stamp } from "./icons";
import type { BlogEntry } from "../blogpage/data";

// Blog detail page. Global Header/Footer come from the root layout; this renders
// the article: breadcrumb hero + cover + (sticky TOC | article) + related.
export default function BlogDetail({ entry }: { entry: BlogEntry }) {
  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(165deg,#15224E,#352A66 55%,#5E3F7E)",
          padding: "40px 28px 56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            right: -60,
            width: 320,
            height: 170,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center,rgba(232,156,196,.22),transparent 70%)",
            filter: "blur(12px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: -50,
            width: 300,
            height: 160,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center,rgba(240,178,116,.18),transparent 70%)",
            filter: "blur(12px)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 820,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 600,
              color: "#c9b6e8",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "#c9b6e8", textDecoration: "none" }}>
              Home
            </Link>
            <ChevronRight width={14} height={14} />
            <Link href="/blog" style={{ color: "#c9b6e8", textDecoration: "none" }}>
              Blog
            </Link>
            <ChevronRight width={14} height={14} />
            <span style={{ color: "#fff", fontWeight: 700 }}>{entry.cat}</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.28)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".08em",
              padding: "7px 14px",
              borderRadius: 99,
              marginTop: 20,
            }}
          >
            <Stamp width={14} height={14} style={{ color: "#E5A93A" }} />
            {entry.cat.toUpperCase()}
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 6.5vw, 42px)",
              lineHeight: 1.14,
              fontWeight: 800,
              letterSpacing: "-.02em",
              color: "#fff",
              marginTop: 16,
              overflowWrap: "break-word",
            }}
          >
            {entry.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "center",
              marginTop: 22,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "linear-gradient(140deg,#E89B3A,#D26FA0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                {entry.initials}
              </span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
                  {entry.author}
                </div>
                <div style={{ fontSize: 12.5, color: "#c9b6e8" }}>
                  Global Elite Journal
                </div>
              </div>
            </div>
            <span
              style={{
                width: 1,
                height: 26,
                background: "rgba(255,255,255,.2)",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "#c9b6e8",
                fontWeight: 600,
              }}
            >
              <Calendar width={15} height={15} style={{ color: "#E5A93A" }} />
              {entry.date}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "#c9b6e8",
                fontWeight: 600,
              }}
            >
              <Clock width={15} height={15} style={{ color: "#E5A93A" }} />
              {entry.read}
            </div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section style={{ background: "#fff", padding: "0 28px" }}>
        <div
          style={{
            maxWidth: 1080,
            margin: "-32px auto 0",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div
            style={{
              position: "relative",
              height: 300,
              borderRadius: 22,
              background: "linear-gradient(150deg,#16265C,#5E3F7E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "0 26px 56px -28px rgba(22,38,92,.55)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.05) 12px,transparent 12px,transparent 24px)",
              }}
            />
            <Stamp
              width={84}
              height={84}
              style={{ color: "rgba(229,169,58,.85)", position: "relative" }}
            />
          </div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ background: "#fff", padding: "48px 28px 80px" }}>
        <div className={styles.bodyGrid}>
          <BlogTocSidebar />
          <ArticleBody entry={entry} />
        </div>
      </section>

      <RelatedArticles currentSlug={entry.slug} />
    </div>
  );
}
