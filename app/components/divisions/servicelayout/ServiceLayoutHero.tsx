"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./servicelayout.module.css";
import type { ServiceConfig } from "./types";
import { ArrowRight, ChevronDown, ChevronRight, Check } from "../icons";

// Small inline icons only used by the hero.
function Lock() {
  return (
    <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="#8E4FA0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function PhoneCall() {
  return (
    <svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M13.8 16.6a1 1 0 0 0 1.2-.3l.4-.5a2 2 0 0 1 1.6-.8h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.5.4a1 1 0 0 0-.3 1.2 14 14 0 0 0 6.4 6.4" />
    </svg>
  );
}
function Star() {
  return (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="#E5A93A" stroke="none">
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.8l-5.8 3.06 1.1-6.46-4.69-4.58 6.49-.94z" />
    </svg>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ fontSize: 12, fontWeight: 700, color: "#16265C", display: "block", marginBottom: 6 }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ServiceLayoutHero({ config }: { config: ServiceConfig }) {
  const [done, setDone] = useState(false);
  const BadgeIcon = config.badgeIcon;

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(165deg,#15224E,#352A66 55%,#5E3F7E)",
        padding: "44px 28px 80px",
      }}
    >
      <div style={{ position: "absolute", top: 30, right: -60, width: 320, height: 170, borderRadius: "50%", background: "radial-gradient(ellipse at center,rgba(232,156,196,.22),transparent 70%)", filter: "blur(12px)" }} />
      <div style={{ position: "absolute", bottom: -30, left: -50, width: 300, height: 160, borderRadius: "50%", background: "radial-gradient(ellipse at center,rgba(240,178,116,.18),transparent 70%)", filter: "blur(12px)" }} />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        {/* breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#c9b6e8", flexWrap: "wrap" }}>
          {config.breadcrumb.map((b, i) => {
            const last = i === config.breadcrumb.length - 1;
            return (
              <span key={b.label} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                {b.href && !last ? (
                  <Link href={b.href} style={{ color: "#c9b6e8", textDecoration: "none" }}>
                    {b.label}
                  </Link>
                ) : (
                  <span style={{ color: last ? "#fff" : "#c9b6e8", fontWeight: last ? 700 : 600 }}>{b.label}</span>
                )}
                {!last && <ChevronRight width={14} height={14} />}
              </span>
            );
          })}
        </div>

        <div className={styles.heroGrid}>
          {/* left copy */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.28)", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: ".08em", padding: "8px 15px", borderRadius: 99 }}>
              <BadgeIcon width={15} height={15} style={{ color: "#E5A93A" }} />
              {config.badge}
            </div>
            <h1 style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "clamp(30px, 7.5vw, 46px)", lineHeight: 1.18, fontWeight: 800, letterSpacing: "-.02em", color: "#fff", marginTop: 18, maxWidth: 560, overflowWrap: "break-word" }}>
              {config.titleLead}{" "}
              <span
                style={{
                  background: "linear-gradient(120deg,#F2C66A,#E89B3A)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {config.titleAccent}
              </span>
            </h1>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.86)", marginTop: 14, maxWidth: 520, fontWeight: 500 }}>
              {config.subtitle}
            </p>

            {/* chips */}
            <div className={styles.heroChips}>
              {config.chips.map((chip) => {
                const Ic = chip.icon;
                return (
                  <div key={chip.title} className={styles.heroChip} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.16)", borderRadius: 14, padding: "16px 15px" }}>
                    <Ic width={21} height={21} style={{ color: "#E5A93A" }} />
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginTop: 10 }}>{chip.title}</div>
                    <div style={{ fontSize: 12, color: "#b9a9e0", marginTop: 2 }}>{chip.sub}</div>
                  </div>
                );
              })}
            </div>

            {/* rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {[
                  { t: "RM", bg: "linear-gradient(140deg,#E89B3A,#D26FA0)", c: "#fff" },
                  { t: "PS", bg: "linear-gradient(140deg,#8E5FB6,#5B3E8E)", c: "#fff" },
                  { t: "AN", bg: "linear-gradient(140deg,#16265C,#3a2566)", c: "#E5A93A" },
                  { t: "+9k", bg: "rgba(255,255,255,.14)", c: "#fff" },
                ].map((a, i) => (
                  <span key={a.t} style={{ width: 38, height: 38, borderRadius: "50%", background: a.bg, border: "2px solid #2c2160", display: "flex", alignItems: "center", justifyContent: "center", color: a.c, fontWeight: 800, fontSize: a.t === "+9k" ? 11 : 13, marginLeft: i > 0 ? -11 : 0 }}>
                    {a.t}
                  </span>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <div style={{ fontSize: 13, color: "#d9cff0", fontWeight: 600, marginTop: 3 }}>
                  <b style={{ color: "#fff" }}>4.9/5</b> from 25,000+ verified clients
                </div>
              </div>
            </div>
          </div>

          {/* right lead form */}
          <div style={{ background: "#fff", borderRadius: 22, padding: 30, boxShadow: "0 40px 80px -30px rgba(0,0,0,.55)", position: "relative" }}>
            <div style={{ position: "absolute", top: -13, left: 30, background: "linear-gradient(120deg,#E89B3A,#D26FA0)", color: "#fff", fontSize: 11.5, fontWeight: 800, letterSpacing: ".04em", padding: "6px 14px", borderRadius: 99, boxShadow: "0 10px 20px -8px rgba(217,111,160,.6)" }}>
              FREE • NO OBLIGATION
            </div>

            {!done ? (
              <div>
                <h2 style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: 23, fontWeight: 800, color: "#16265C", marginTop: 6 }}>
                  {config.formTitle}
                </h2>
                <p style={{ fontSize: 13.5, color: "#64748b", marginTop: 5, lineHeight: 1.5 }}>{config.formSubtitle}</p>
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 20 }}>
                  <Field label="Full Name">
                    <input className={styles.input} type="text" required placeholder="Your full name" />
                  </Field>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <Field label="Phone">
                      <input className={styles.input} type="tel" required placeholder="+91 00000 00000" />
                    </Field>
                    <Field label="Email">
                      <input className={styles.input} type="email" required placeholder="you@email.com" />
                    </Field>
                  </div>
                  {config.formCountries && (
                    <Field label={config.formCountryLabel ?? "Destination"}>
                      <div style={{ position: "relative" }}>
                        <select className={styles.input} defaultValue="" style={{ appearance: "none", WebkitAppearance: "none" }}>
                          <option value="" disabled>Select an option</option>
                          {config.formCountries.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronDown width={17} height={17} style={{ color: "#8E4FA0", position: "absolute", right: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                      </div>
                    </Field>
                  )}
                  <button type="submit" className={styles.btn} style={{ width: "100%", marginTop: 4, background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)", color: "#fff", border: "none", fontFamily: "inherit", fontWeight: 800, fontSize: 15, padding: 14, borderRadius: 12, cursor: "pointer", boxShadow: "0 14px 30px -12px rgba(142,79,160,.65)", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    Request a Call Back
                    <PhoneCall />
                  </button>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>
                    <Lock />
                    Your details are encrypted &amp; never shared
                  </div>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "30px 6px" }}>
                <div style={{ width: 66, height: 66, borderRadius: "50%", background: "linear-gradient(140deg,#8E4FA0,#5B3E8E)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", boxShadow: "0 16px 34px -14px rgba(142,79,160,.6)" }}>
                  <Check width={34} height={34} style={{ color: "#fff" }} />
                </div>
                <h2 style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: 22, fontWeight: 800, color: "#16265C", marginTop: 18 }}>Request received!</h2>
                <p style={{ fontSize: 14, color: "#64748b", marginTop: 8, lineHeight: 1.55 }}>
                  Thanks — an expert will call you back within one business hour.
                </p>
                <button type="button" onClick={() => setDone(false)} className={styles.btn} style={{ marginTop: 18, background: "#F4ECFA", color: "#8E4FA0", border: "none", fontFamily: "inherit", fontWeight: 700, fontSize: 13.5, padding: "11px 20px", borderRadius: 10, cursor: "pointer" }}>
                  Submit another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
