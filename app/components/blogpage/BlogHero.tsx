import styles from "./blogpage.module.css";
import { BookOpen, Search } from "./icons";

export default function BlogHero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(165deg,#15224E,#352A66 55%,#5E3F7E)",
        padding: "56px 28px 64px",
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
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
            padding: "8px 15px",
            borderRadius: 99,
          }}
        >
          <BookOpen width={15} height={15} style={{ color: "#E5A93A" }} />
          GLOBAL ELITE JOURNAL
        </div>
        <h1
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: 46,
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: "-.02em",
            color: "#fff",
            marginTop: 18,
          }}
        >
          Insights on apostille,{" "}
          <span
            style={{
              background: "linear-gradient(120deg,#F2C66A,#E89B3A)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            attestation &amp; global mobility
          </span>
        </h1>
        <p
          style={{
            fontSize: 16.5,
            lineHeight: 1.6,
            color: "rgba(255,255,255,.86)",
            marginTop: 14,
            fontWeight: 500,
          }}
        >
          Expert guides, country requirements and process explainers to help your
          documents travel the world.
        </p>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            background: "#fff",
            borderRadius: 14,
            padding: 7,
            margin: "26px auto 0",
            maxWidth: 480,
            boxShadow: "0 16px 34px -16px rgba(0,0,0,.4)",
          }}
        >
          <Search
            width={19}
            height={19}
            style={{ color: "#94a3b8", margin: "0 8px 0 12px" }}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Search articles…"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontFamily: "inherit",
              fontSize: 14.5,
              color: "#16265C",
              background: "transparent",
            }}
          />
          <button
            type="submit"
            className={styles.btn}
            style={{
              background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
              color: "#fff",
              border: "none",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: 14,
              padding: "11px 20px",
              borderRadius: 10,
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
