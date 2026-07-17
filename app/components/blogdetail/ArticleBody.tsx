import styles from "./blogdetail.module.css";
import type { PostCard } from "../../lib/cms";

// Article prose, rendered from the CMS post's HTML content. Typography for the
// injected markup (h2/h3/p/ul/blockquote/table/img) lives in the .prose class
// in blogdetail.module.css, matching the original hand-built article styles.
export default function ArticleBody({
  entry,
  contentHtml,
  faqs,
}: {
  entry: PostCard;
  contentHtml: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <article style={{ minWidth: 0 }}>
      {entry.excerpt && (
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "#16265C", fontWeight: 600 }}>
          {entry.excerpt}
        </p>
      )}

      <div className={styles.prose} dangerouslySetInnerHTML={{ __html: contentHtml }} />

      {faqs.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: "-.01em",
              color: "#16265C",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
            {faqs.map((f) => (
              <div
                key={f.question}
                style={{
                  background: "#F7F3FA",
                  border: "1px solid #ece2f4",
                  borderRadius: 14,
                  padding: "18px 22px",
                }}
              >
                <div style={{ fontSize: 15.5, fontWeight: 800, color: "#16265C" }}>
                  {f.question}
                </div>
                <p
                  style={{
                    fontSize: 14.5,
                    color: "#566079",
                    marginTop: 7,
                    lineHeight: 1.7,
                  }}
                >
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

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
            Guiding families and companies through cross-border document
            legalisation.
          </p>
        </div>
      </div>
    </article>
  );
}
