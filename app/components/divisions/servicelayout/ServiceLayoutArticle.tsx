"use client";

import type { ReactNode } from "react";
import styles from "./servicelayout.module.css";
import type { Section } from "./types";
import { Check } from "../icons";
import FaqBlock from "./FaqBlock";

const jakarta = "var(--font-jakarta), sans-serif";

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 style={{ fontFamily: jakarta, fontSize: 30, fontWeight: 800, letterSpacing: "-.02em", color: "#16265C" }}>
      {children}
    </h2>
  );
}
function Intro({ children }: { children: ReactNode }) {
  return <p style={{ fontSize: 16, lineHeight: 1.75, color: "#475569", marginTop: 16, fontWeight: 500 }}>{children}</p>;
}
function Divider() {
  return <div style={{ height: 1, background: "#ece2f4", margin: "44px 0" }} />;
}

function renderSection(s: Section) {
  switch (s.kind) {
    case "intro":
      return (
        <>
          <H2>{s.heading}</H2>
          {s.paragraphs.map((p, i) => (
            <Intro key={i}>{p}</Intro>
          ))}
          {s.stats && (
            <div className={styles.statGrid}>
              {s.stats.map((st) => {
                const Icon = st.icon;
                return (
                  <div key={st.label} style={{ background: "#F7F3FA", border: "1px solid #ece2f4", borderRadius: 14, padding: 18 }}>
                    <Icon width={22} height={22} style={{ color: "#8E4FA0" }} />
                    <div style={{ fontFamily: jakarta, fontSize: 22, fontWeight: 800, color: "#16265C", marginTop: 10 }}>{st.value}</div>
                    <div style={{ fontSize: 12.5, color: "#64748b", fontWeight: 600 }}>{st.label}</div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      );

    case "cards":
      return (
        <>
          <H2>{s.heading}</H2>
          {s.intro && <Intro>{s.intro}</Intro>}
          <div className={styles.grid3}>
            {s.cards.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className={styles.card} style={{ background: "#fff", border: "1px solid #ece2f4", borderRadius: 16, padding: 22 }}>
                  <span style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(150deg,#F4ECFA,#EBDDF4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon width={23} height={23} style={{ color: "#8E4FA0" }} />
                  </span>
                  <h3 style={{ fontSize: 16.5, fontWeight: 800, color: "#16265C", marginTop: 16 }}>{c.title}</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, marginTop: 12 }}>
                    {c.points.map((pt) => (
                      <li key={pt} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                        <Check width={15} height={15} style={{ color: "#8E4FA0", flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.5 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </>
      );

    case "chips":
      return (
        <>
          <H2>{s.heading}</H2>
          {s.intro && <Intro>{s.intro}</Intro>}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
            {s.chips.map((c) => {
              const Icon = s.chipIcon;
              return (
                <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#F7F3FA", border: "1px solid #ece2f4", borderRadius: 99, padding: "9px 16px", fontSize: 13.5, fontWeight: 700, color: "#16265C" }}>
                  <Icon width={14} height={14} style={{ color: "#8E4FA0" }} />
                  {c}
                </span>
              );
            })}
          </div>
          {s.note && (
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16, fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>
              {s.note}
            </div>
          )}
        </>
      );

    case "steps":
      return (
        <>
          <H2>{s.heading}</H2>
          {s.intro && <Intro>{s.intro}</Intro>}
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
            {s.steps.map((st, i) => (
              <div key={st.title} style={{ display: "flex", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, color: "#fff", flexShrink: 0, boxShadow: "0 10px 20px -8px rgba(142,79,160,.5)" }}>
                    {i + 1}
                  </span>
                  {i !== s.steps.length - 1 && <span style={{ width: 2, flex: 1, background: "linear-gradient(#d9c9e8,#ece2f4)", margin: "8px 0" }} />}
                </div>
                <div style={{ flex: 1, marginBottom: 16, background: "#fff", border: "1px solid #ece2f4", borderRadius: 16, padding: "18px 22px" }}>
                  <div style={{ fontSize: 16.5, fontWeight: 800, color: "#16265C" }}>{st.title}</div>
                  <p style={{ fontSize: 14.5, color: "#64748b", marginTop: 6, lineHeight: 1.6 }}>{st.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      );

    case "checklist":
      return (
        <>
          <H2>{s.heading}</H2>
          {s.intro && <Intro>{s.intro}</Intro>}
          <div className={styles.grid2}>
            {s.items.map((d) => (
              <div key={d} style={{ display: "flex", gap: 11, alignItems: "flex-start", background: "#fff", border: "1px solid #ece2f4", borderRadius: 12, padding: 15 }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "#F4ECFA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <Check width={14} height={14} style={{ color: "#8E4FA0" }} />
                </span>
                <span style={{ fontSize: 14.5, color: "#33536b", fontWeight: 600, lineHeight: 1.45 }}>{d}</span>
              </div>
            ))}
          </div>
        </>
      );

    case "faq":
      return (
        <>
          <H2>{s.heading}</H2>
          {s.intro && <Intro>{s.intro}</Intro>}
          <FaqBlock faqs={s.faqs} />
        </>
      );
  }
}

export default function ServiceLayoutArticle({ sections }: { sections: Section[] }) {
  return (
    <article style={{ paddingTop: 44, minWidth: 0 }}>
      {sections.map((s, i) => (
        <div key={s.id}>
          <div id={`sec-${s.id}`} style={{ scrollMarginTop: 150 }}>
            {renderSection(s)}
          </div>
          {i !== sections.length - 1 && <Divider />}
        </div>
      ))}
    </article>
  );
}
