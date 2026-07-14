import { Headset } from "./icons";

export default function ContactHero() {
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
          WE&apos;RE HERE TO HELP
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
          Let&rsquo;s legalize{" "}
          <span
            style={{
              background: "linear-gradient(120deg,#F2C66A,#E89B3A)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            your journey
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
          Our legal verification experts typically reply within{" "}
          <b style={{ color: "#fff" }}>15 minutes</b> during business hours — by
          phone, WhatsApp or email.
        </p>
      </div>
    </section>
  );
}
