import styles from "./blogdetail.module.css";
import { Check } from "./icons";
import type { BlogEntry } from "../blogpage/data";

const h2 = {
  fontSize: 26,
  fontWeight: 800,
  letterSpacing: "-.01em",
  color: "#16265C",
  marginTop: 36,
} as const;

const para = {
  fontSize: 16,
  lineHeight: 1.8,
  color: "#566079",
  marginTop: 14,
} as const;

// Article prose. The content shown here is the full "Apostille vs Attestation"
// explainer; posts without their own copy reuse it as placeholder body.
export default function ArticleBody({ entry }: { entry: BlogEntry }) {
  return (
    <article style={{ minWidth: 0 }}>
      <p style={{ fontSize: 18, lineHeight: 1.7, color: "#16265C", fontWeight: 600 }}>
        If you are sending documents abroad, the single most expensive mistake is
        choosing the wrong legalisation route. Here is exactly how to tell whether
        you need an apostille or full embassy attestation.
      </p>

      <div id="art-what" style={{ scrollMarginTop: 150 }}>
        <h2 style={h2}>What is an apostille?</h2>
        <p style={para}>
          An apostille is a standardised certificate issued by the Ministry of
          External Affairs (MEA) that authenticates the origin of a public
          document. Once apostilled, your document is automatically recognised in
          every country that is a member of the Hague Apostille Convention of 1961
          — with no further embassy step required.
        </p>
        <blockquote
          style={{
            margin: "24px 0",
            padding: "20px 24px",
            borderLeft: "4px solid #8E4FA0",
            background: "#F7F3FA",
            borderRadius: "0 12px 12px 0",
            fontSize: 16.5,
            lineHeight: 1.65,
            color: "#16265C",
            fontWeight: 600,
            fontStyle: "italic",
          }}
        >
          An apostille is recognised across 120+ countries — a single sticker that
          replaces a whole chain of consular stamps.
        </blockquote>
      </div>

      <div id="art-attest" style={{ scrollMarginTop: 150 }}>
        <h2 style={h2}>What is attestation?</h2>
        <p style={para}>
          Attestation is the route for{" "}
          <b style={{ color: "#16265C" }}>non-Hague countries</b> — the UAE, Saudi
          Arabia, Qatar, Kuwait and others. It follows a longer chain: state
          verification, then MEA attestation, and finally a stamp from the
          destination country&rsquo;s embassy in India.
        </p>
      </div>

      <div id="art-diff" style={{ scrollMarginTop: 150 }}>
        <h2 style={h2}>Key differences at a glance</h2>
        <div className={styles.diffTable}>
          <div
            className={styles.diffRow}
            style={{ background: "linear-gradient(120deg,#16265C,#3a2566)" }}
          >
            {["ASPECT", "APOSTILLE", "ATTESTATION"].map((h) => (
              <div
                key={h}
                style={{
                  padding: "14px 18px",
                  fontSize: 12.5,
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                {h}
              </div>
            ))}
          </div>
          {[
            { a: "Used for", b: "Hague countries", c: "Non-Hague countries" },
            { a: "Final step", b: "MEA sticker", c: "Embassy stamp" },
            { a: "Typical time", b: "5–7 days", c: "10–15 days" },
          ].map((row, i) => (
            <div
              key={row.a}
              className={styles.diffRow}
              style={{
                borderBottom: i < 2 ? "1px solid #ece2f4" : undefined,
                background: i === 1 ? "#F7F3FA" : undefined,
              }}
            >
              <div
                style={{
                  padding: "14px 18px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#16265C",
                }}
              >
                {row.a}
              </div>
              <div
                style={{ padding: "14px 18px", fontSize: 14, color: "#566079" }}
              >
                {row.b}
              </div>
              <div
                style={{ padding: "14px 18px", fontSize: 14, color: "#566079" }}
              >
                {row.c}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="art-which" style={{ scrollMarginTop: 150 }}>
        <h2 style={h2}>Which one do you need?</h2>
        <p style={para}>
          It comes down to a single question:{" "}
          <b style={{ color: "#16265C" }}>
            is your destination country a member of the Hague Convention?
          </b>{" "}
          If yes, you need an apostille. If no, you need attestation. When in
          doubt, our team confirms the requirement for your exact document and
          destination before you pay.
        </p>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 18,
          }}
        >
          {[
            { bold: "Germany, France, Australia, Italy", rest: " — apostille" },
            { bold: "UAE, Saudi Arabia, Qatar, Kuwait", rest: " — attestation" },
          ].map((li) => (
            <li
              key={li.bold}
              style={{ display: "flex", gap: 11, alignItems: "flex-start" }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#F4ECFA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                <Check width={14} height={14} style={{ color: "#8E4FA0" }} />
              </span>
              <span style={{ fontSize: 15, color: "#566079", lineHeight: 1.6 }}>
                <b style={{ color: "#16265C" }}>{li.bold}</b>
                {li.rest}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* author card */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          background: "#F7F3FA",
          border: "1px solid #ece2f4",
          borderRadius: 16,
          padding: 22,
          marginTop: 40,
        }}
      >
        <span
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(140deg,#16265C,#3a2566)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#E5A93A",
            fontWeight: 800,
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          {entry.initials}
        </span>
        <div>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: "#16265C" }}>
            {entry.author}
          </div>
          <div style={{ fontSize: 13, color: "#8E4FA0", fontWeight: 700 }}>
            Global Elite &bull; {entry.cat}
          </div>
          <p
            style={{
              fontSize: 13.5,
              color: "#64748b",
              marginTop: 5,
              lineHeight: 1.55,
            }}
          >
            15+ years guiding families and companies through cross-border document
            legalisation.
          </p>
        </div>
      </div>
    </article>
  );
}
