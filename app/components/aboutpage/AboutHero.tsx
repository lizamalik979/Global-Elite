"use client";

import { useState } from "react";
import styles from "./aboutpage.module.css";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Feather,
  Lock,
  Star,
} from "./icons";

const serif = "var(--font-playfair), Georgia, serif";

const chips = [
  { icon: Star, label: "4.9 / 5 rated", color: "#F2C66A", fill: true },
  { icon: CalendarCheck, label: "15+ years", color: "#E89B3A" },
  { icon: BadgeCheck, label: "MEA-registered", color: "#E89B3A" },
];

export default function AboutHero() {
  const [done, setDone] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(170deg,#15224E 0%,#352A66 30%,#5E3F7E 52%,#8A4E80 72%,#B05F84 100%)",
        padding: "76px 28px 96px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 60,
          left: -90,
          width: 340,
          height: 180,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center,rgba(240,178,116,.20),transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          right: -70,
          width: 380,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center,rgba(232,156,196,.22),transparent 70%)",
          filter: "blur(12px)",
        }}
      />

      <div className={styles.heroGrid}>
        {/* left copy */}
        <div>
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
              padding: "8px 16px",
              borderRadius: 99,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#E5A93A,#8E4FA0)",
              }}
            />
            OUR HERITAGE &amp; MISSION
          </div>
          <h1
            style={{
              fontFamily: serif,
              fontSize: 52,
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: "-.02em",
              marginTop: 22,
              color: "#fff",
            }}
          >
            Securing your global transitions with{" "}
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
              absolute integrity
            </span>
          </h1>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.65,
              color: "rgba(255,255,255,.86)",
              marginTop: 22,
              fontWeight: 500,
              maxWidth: 560,
            }}
          >
            Global Elite is a premium cross-border legal-logistics desk operating
            directly alongside the Ministry of External Affairs. For over fifteen
            years we have turned the maze of state departments, central ministries
            and foreign consulates into a single, accountable chain of custody —
            so your documents move with the same precision your ambitions demand.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
            <a
              href="/contact"
              className={styles.btn}
              style={{
                background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                color: "#fff",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                padding: "14px 26px",
                borderRadius: 11,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 16px 34px -14px rgba(0,0,0,.4)",
              }}
            >
              Start Application
              <ArrowRight width={17} height={17} style={{ color: "#fff" }} />
            </a>
            <a
              href="/services"
              className={styles.btn}
              style={{
                background: "rgba(255,255,255,.14)",
                color: "#fff",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                padding: "14px 26px",
                borderRadius: 11,
                border: "1px solid rgba(255,255,255,.45)",
              }}
            >
              Our Process
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: 28,
              flexWrap: "wrap",
            }}
          >
            {chips.map((c) => {
              const Icon = c.icon;
              return (
                <span
                  key={c.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "rgba(255,255,255,.1)",
                    border: "1px solid rgba(255,255,255,.22)",
                    padding: "8px 14px",
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  <Icon width={15} height={15} style={{ color: c.color }} />
                  {c.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* lead capture form */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: -18,
              right: -18,
              width: 120,
              height: 120,
              border: "2px solid rgba(142,79,160,.3)",
              borderRadius: 20,
            }}
          />
          <div
            style={{
              position: "relative",
              background: "#fff",
              border: "1px solid rgba(255,255,255,.9)",
              borderRadius: 24,
              padding: 32,
              boxShadow: "0 34px 70px -28px rgba(22,38,92,.55)",
            }}
          >
            {done ? (
              <div style={{ textAlign: "center", padding: "24px 6px" }}>
                <span
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 14px 30px -12px rgba(142,79,160,.6)",
                  }}
                >
                  <Check width={30} height={30} style={{ color: "#fff" }} />
                </span>
                <h3
                  style={{
                    fontFamily: serif,
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#16265C",
                    marginTop: 18,
                  }}
                >
                  Request received
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#64748b",
                    marginTop: 8,
                    lineHeight: 1.55,
                    maxWidth: 300,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Thank you. A verification agent will call you back within one
                  business hour.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className={styles.btn}
                  style={{
                    marginTop: 20,
                    background: "#F4ECFA",
                    border: "none",
                    color: "#8E4FA0",
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
            ) : (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        color: "#8E4FA0",
                      }}
                    >
                      GET A FREE QUOTE
                    </div>
                    <h3
                      style={{
                        fontFamily: serif,
                        fontSize: 25,
                        fontWeight: 800,
                        color: "#16265C",
                        marginTop: 6,
                        lineHeight: 1.15,
                      }}
                    >
                      Start your application
                    </h3>
                  </div>
                  <span
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 13,
                      background: "linear-gradient(140deg,#16265C,#3a2566)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Feather width={23} height={23} style={{ color: "#E5A93A" }} />
                  </span>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDone(true);
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 13,
                    marginTop: 22,
                  }}
                >
                  <div>
                    <Label>Full Name</Label>
                    <input
                      className={styles.input}
                      type="text"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className={styles.formTwoCol}>
                    <div>
                      <Label>Email</Label>
                      <input
                        className={styles.input}
                        type="email"
                        required
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <input
                        className={styles.input}
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Service Required</Label>
                    <select
                      className={styles.input}
                      style={{ cursor: "pointer" }}
                    >
                      <option>MEA Apostille</option>
                      <option>Embassy Attestation</option>
                      <option>Certified Translation</option>
                      <option>HRD / SDM Verification</option>
                      <option>Corporate Legalization</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className={styles.btn}
                    style={{
                      marginTop: 4,
                      width: "100%",
                      background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                      color: "#fff",
                      border: "none",
                      fontFamily: "inherit",
                      fontWeight: 800,
                      fontSize: 15,
                      padding: 14,
                      borderRadius: 11,
                      cursor: "pointer",
                      boxShadow: "0 14px 30px -12px rgba(142,79,160,.6)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    Get My Free Quote
                    <ArrowRight width={17} height={17} style={{ color: "#fff" }} />
                  </button>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 7,
                      marginTop: 2,
                    }}
                  >
                    <Lock width={13} height={13} style={{ color: "#94a3b8" }} />
                    <span
                      style={{ fontSize: 11.5, color: "#94a3b8", fontWeight: 600 }}
                    >
                      100% confidential • Reply within 1 business hour
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        fontSize: 12,
        fontWeight: 700,
        color: "#16265C",
        display: "block",
        marginBottom: 6,
      }}
    >
      {children}
    </label>
  );
}
