import { Headset } from "./icons";
import type { ContactPageContent } from "../../lib/cms";

// Renders `*text*` segments in bold white (e.g. "reply within *15 minutes*").
function Emphasized({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 === 1 ? (
          <b key={i} style={{ color: "#fff" }}>
            {part}
          </b>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function ContactHero({ hero }: { hero: ContactPageContent["hero"] }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg,#15224E 0%,#2c2160 55%,#4a3576 100%)",
        padding: "64px 28px 150px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 30,
          right: -60,
          width: 340,
          height: 180,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center,rgba(142,95,182,.35),transparent 70%)",
          filter: "blur(14px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: -50,
          width: 320,
          height: 170,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center,rgba(232,156,196,.22),transparent 70%)",
          filter: "blur(14px)",
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
            background: "rgba(255,255,255,.1)",
            border: "1px solid rgba(255,255,255,.24)",
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".07em",
            padding: "8px 15px",
            borderRadius: 99,
          }}
        >
          <Headset width={15} height={15} style={{ color: "#E5A93A" }} />
          {hero.badge}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "clamp(30px, 7.5vw, 48px)",
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: "-.03em",
            color: "#fff",
            overflowWrap: "break-word",
            marginTop: 20,
          }}
        >
          {hero.titleLead}{" "}
          <span
            style={{
              background: "linear-gradient(120deg,#F2C66A,#E89B3A)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {hero.titleAccent}
          </span>
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "#d9cff0",
            margin: "16px auto 0",
            maxWidth: 540,
            fontWeight: 500,
          }}
        >
          <Emphasized text={hero.subtitle} />
        </p>
      </div>
    </section>
  );
}
