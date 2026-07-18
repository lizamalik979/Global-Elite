import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Global Elite",
};

// Branded 404 — shown for unknown URLs and when a CMS page/post is deleted.
export default function NotFound() {
  return (
    <section
      style={{
        background:
          "linear-gradient(170deg,#15224E 0%,#352A66 45%,#5E3F7E 80%,#8A4E80 100%)",
        padding: "96px 28px 110px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          display: "inline-block",
          background: "rgba(255,255,255,.12)",
          border: "1px solid rgba(255,255,255,.28)",
          color: "#F2C66A",
          fontSize: 12.5,
          fontWeight: 800,
          letterSpacing: ".14em",
          padding: "8px 16px",
          borderRadius: 99,
        }}
      >
        ERROR 404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-jakarta), sans-serif",
          fontSize: "clamp(64px, 14vw, 130px)",
          lineHeight: 1,
          fontWeight: 800,
          letterSpacing: "-.04em",
          marginTop: 18,
          background: "linear-gradient(120deg,#F2C66A,#E89B3A)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontFamily: "var(--font-jakarta), sans-serif",
          fontSize: "clamp(22px, 4vw, 30px)",
          fontWeight: 800,
          letterSpacing: "-.02em",
          color: "#fff",
          marginTop: 10,
        }}
      >
        This page doesn&rsquo;t exist
      </h2>
      <p
        style={{
          fontSize: 15.5,
          lineHeight: 1.65,
          color: "#d9cff0",
          margin: "14px auto 0",
          maxWidth: 440,
          fontWeight: 500,
        }}
      >
        The link may be broken, or the page may have been moved or removed.
        Let&rsquo;s get you back on track.
      </p>
      <div
        style={{
          display: "flex",
          gap: 14,
          marginTop: 34,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
            color: "#fff",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 700,
            padding: "14px 28px",
            borderRadius: 11,
            boxShadow: "0 16px 34px -14px rgba(0,0,0,.4)",
          }}
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          style={{
            background: "rgba(255,255,255,.14)",
            color: "#fff",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 700,
            padding: "14px 28px",
            borderRadius: 11,
            border: "1px solid rgba(255,255,255,.45)",
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
