"use client";

import { useState } from "react";
import styles from "./servicepage.module.css";
import { heroChips, quoteCountries } from "./data";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Lock,
  MapPin,
  PhoneCall,
  Star,
  Zap,
} from "./icons";

const chipIcon = {
  zap: Zap,
  "badge-check": BadgeCheck,
  "map-pin": MapPin,
} as const;

export default function ServiceHero() {
  const [quoteDone, setQuoteDone] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(165deg,#15224E,#352A66 55%,#5E3F7E)",
        padding: "44px 28px 80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 30,
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

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        {/* breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 600,
            color: "#c9b6e8",
          }}
        >
          <a href="#" style={{ color: "#c9b6e8", textDecoration: "none" }}>
            Home
          </a>
          <ChevronRight width={14} height={14} />
          <a href="#" style={{ color: "#c9b6e8", textDecoration: "none" }}>
            Apostille
          </a>
          <ChevronRight width={14} height={14} />
          <span style={{ color: "#fff", fontWeight: 700 }}>
            Degree Certificate Apostille
          </span>
        </div>

        <div className={styles.heroGrid}>
          {/* left copy */}
          <div style={{ paddingTop: 8 }}>
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
              <GraduationCap />
              EDUCATIONAL DOCUMENT
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
                maxWidth: 560,
              }}
            >
              Degree Certificate{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(120deg,#F2C66A,#E89B3A)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  paddingRight: "0.12em",
                  marginRight: "-0.12em",
                }}
              >
                Apostille
              </span>
            </h1>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "rgba(255,255,255,.86)",
                marginTop: 14,
                maxWidth: 520,
                fontWeight: 500,
              }}
            >
              MEA-attested Hague Apostille for your degree certificate — fully
              tracked, doorstep pickup, and accepted across 120+ countries.
            </p>

            {/* chips */}
            <div className={styles.heroChips}>
              {heroChips.map((chip) => {
                const Ic = chipIcon[chip.icon as keyof typeof chipIcon];
                return (
                  <div
                    key={chip.title}
                    className={styles.heroChip}
                    style={{
                      background: "rgba(255,255,255,.07)",
                      border: "1px solid rgba(255,255,255,.16)",
                      borderRadius: 14,
                      padding: "16px 15px",
                    }}
                  >
                    <Ic width={21} height={21} style={{ color: "#E5A93A" }} />
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#fff",
                        marginTop: 10,
                      }}
                    >
                      {chip.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#b9a9e0", marginTop: 2 }}>
                      {chip.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* rating */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 28,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {[
                  { t: "RM", bg: "linear-gradient(140deg,#E89B3A,#D26FA0)", c: "#fff" },
                  { t: "PS", bg: "linear-gradient(140deg,#8E5FB6,#5B3E8E)", c: "#fff" },
                  { t: "AN", bg: "linear-gradient(140deg,#16265C,#3a2566)", c: "#E5A93A" },
                  { t: "+9k", bg: "rgba(255,255,255,.14)", c: "#fff" },
                ].map((a, i) => (
                  <span
                    key={a.t}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: a.bg,
                      border: "2px solid #2c2160",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: a.c,
                      fontWeight: 800,
                      fontSize: a.t === "+9k" ? 11 : 13,
                      marginLeft: i > 0 ? -11 : 0,
                    }}
                  >
                    {a.t}
                  </span>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      width={15}
                      height={15}
                      style={{ color: "#E5A93A" }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#d9cff0",
                    fontWeight: 600,
                    marginTop: 3,
                  }}
                >
                  <b style={{ color: "#fff" }}>4.9/5</b> from 25,000+ verified
                  clients
                </div>
              </div>
            </div>
          </div>

          {/* right lead form */}
          <div
            style={{
              background: "#fff",
              borderRadius: 22,
              padding: 30,
              boxShadow: "0 40px 80px -30px rgba(0,0,0,.55)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -13,
                left: 30,
                background: "linear-gradient(120deg,#E89B3A,#D26FA0)",
                color: "#fff",
                fontSize: 11.5,
                fontWeight: 800,
                letterSpacing: ".04em",
                padding: "6px 14px",
                borderRadius: 99,
                boxShadow: "0 10px 20px -8px rgba(217,111,160,.6)",
              }}
            >
              FREE • NO OBLIGATION
            </div>

            {!quoteDone ? (
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontSize: 23,
                    fontWeight: 800,
                    color: "#16265C",
                    marginTop: 6,
                  }}
                >
                  Get a Free Quote
                </h2>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#64748b",
                    marginTop: 5,
                    lineHeight: 1.5,
                  }}
                >
                  Fill in your details and our apostille expert will call you
                  back within one business hour.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteDone(true);
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 13,
                    marginTop: 20,
                  }}
                >
                  <Field label="Full Name">
                    <input
                      className={styles.input}
                      type="text"
                      required
                      placeholder="Your full name"
                    />
                  </Field>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                    }}
                  >
                    <Field label="Phone">
                      <input
                        className={styles.input}
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        className={styles.input}
                        type="email"
                        required
                        placeholder="you@email.com"
                      />
                    </Field>
                  </div>
                  <Field label="Destination Country">
                    <div style={{ position: "relative" }}>
                      <select
                        className={styles.input}
                        defaultValue=""
                        style={{ appearance: "none", WebkitAppearance: "none" }}
                      >
                        <option value="" disabled>
                          Select destination
                        </option>
                        {quoteCountries.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown
                        width={17}
                        height={17}
                        style={{
                          color: "#8E4FA0",
                          position: "absolute",
                          right: 13,
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </Field>
                  <button
                    type="submit"
                    className={styles.btn}
                    style={{
                      width: "100%",
                      marginTop: 4,
                      background:
                        "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                      color: "#fff",
                      border: "none",
                      fontFamily: "inherit",
                      fontWeight: 800,
                      fontSize: 15,
                      padding: 14,
                      borderRadius: 12,
                      cursor: "pointer",
                      boxShadow: "0 14px 30px -12px rgba(142,79,160,.65)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    Request a Call Back
                    <PhoneCall width={17} height={17} style={{ color: "#fff" }} />
                  </button>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 7,
                      fontSize: 12,
                      color: "#94a3b8",
                      fontWeight: 600,
                    }}
                  >
                    <Lock width={13} height={13} style={{ color: "#8E4FA0" }} />
                    Your details are encrypted &amp; never shared
                  </div>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "30px 6px" }}>
                <div
                  style={{
                    width: 66,
                    height: 66,
                    borderRadius: "50%",
                    background: "linear-gradient(140deg,#8E4FA0,#5B3E8E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    boxShadow: "0 16px 34px -14px rgba(142,79,160,.6)",
                  }}
                >
                  <Check width={34} height={34} style={{ color: "#fff" }} />
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#16265C",
                    marginTop: 18,
                  }}
                >
                  Request received!
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "#64748b",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Thanks — an apostille expert will call you back within one
                  business hour with your free quote.
                </p>
                <button
                  type="button"
                  onClick={() => setQuoteDone(false)}
                  className={styles.btn}
                  style={{
                    marginTop: 18,
                    background: "#F4ECFA",
                    color: "#8E4FA0",
                    border: "none",
                    fontFamily: "inherit",
                    fontWeight: 700,
                    fontSize: 13.5,
                    padding: "11px 20px",
                    borderRadius: 10,
                    cursor: "pointer",
                  }}
                >
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

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#16265C",
          display: "block",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

// GraduationCap is imported lazily here to keep the icon import list tidy.
function GraduationCap() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={15}
      height={15}
      fill="none"
      stroke="#E5A93A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.92a1 1 0 0 0 0-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.58 9.08a1 1 0 0 0 0 1.84l8.59 3.9a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
