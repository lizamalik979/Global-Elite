import Image from "next/image";
import styles from "./aboutpage.module.css";
import {
  accreditations,
  metrics,
  pillars,
  team,
  timeline,
} from "./data";
import { Award, Check, Mail, Share2, UserRound } from "./icons";

const serif = "var(--font-playfair), Georgia, serif";

export default function AboutSections() {
  return (
    <>
      {/* TRUST METRICS — sits below the hero with a clear gap */}
      <section
        style={{
          background: "#fff",
          padding: "48px 28px 0",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div className={styles.metricsRow}>
          {metrics.map((m, i) => (
            <div
              key={m.label}
              style={{
                padding: "26px 28px",
                borderRight:
                  i === metrics.length - 1 ? undefined : "1px solid #ece2f4",
              }}
            >
              <div
                style={{
                  fontFamily: serif,
                  fontSize: 38,
                  fontWeight: 800,
                  color: "#16265C",
                  letterSpacing: "-.02em",
                }}
              >
                {m.value}
                <span style={{ color: "#8E4FA0" }}>{m.suffix}</span>
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#16265C",
                  marginTop: 4,
                }}
              >
                {m.label}
              </div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHAIN OF TRUST VALUES */}
      <section style={{ background: "#fff", padding: "96px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: ".12em",
                color: "#8E4FA0",
              }}
            >
              OUR OPERATING PILLARS
            </span>
            <h2
              style={{
                fontFamily: serif,
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: "-.02em",
                marginTop: 10,
                color: "#16265C",
              }}
            >
              The chain of trust
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#64748b",
                marginTop: 12,
                lineHeight: 1.55,
              }}
            >
              Three commitments that hold every document we handle to a single,
              uncompromising standard.
            </p>
          </div>

          <div className={styles.pillarGrid}>
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={styles.card}
                  style={{
                    background: "#fff",
                    border: "1px solid #ece2f4",
                    borderRadius: 16,
                    padding: 32,
                  }}
                >
                  <span
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "#16265C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 22px -10px rgba(22,38,92,.5)",
                    }}
                  >
                    <Icon width={26} height={26} style={{ color: "#E5A93A" }} />
                  </span>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 800,
                      marginTop: 20,
                      color: "#16265C",
                    }}
                  >
                    {p.title}
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      marginTop: 18,
                    }}
                  >
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        style={{
                          display: "flex",
                          gap: 11,
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: "#F4ECFA",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          <Check
                            width={13}
                            height={13}
                            style={{ color: "#8E4FA0" }}
                          />
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            color: "#475569",
                            lineHeight: 1.5,
                          }}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section
        style={{
          background: "#F7F3FA",
          padding: "96px 28px",
          borderTop: "1px solid #ece2f4",
          borderBottom: "1px solid #ece2f4",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: serif,
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-.02em",
              color: "#16265C",
            }}
          >
            Recognized standards &amp; frameworks
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", marginTop: 10 }}>
            Audited adherence to the bodies that govern secure, lawful document
            handling.
          </p>
          <div className={styles.accredGrid}>
            {accreditations.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className={styles.card}
                  style={{
                    background: "#fff",
                    border: "1px solid #ece2f4",
                    borderRadius: 14,
                    padding: "26px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Icon width={30} height={30} style={{ color: "#16265C" }} />
                  <div
                    style={{ fontSize: 14, fontWeight: 800, color: "#16265C" }}
                  >
                    {a.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{a.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ background: "#fff", padding: "96px 28px" }}>
        <div className={styles.storyGrid}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: -18,
                left: -18,
                width: 120,
                height: 120,
                border: "2px solid rgba(142,79,160,.25)",
                borderRadius: 22,
              }}
            />
            <div
              style={{
                position: "relative",
                height: 440,
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 30px 64px -30px rgba(22,38,92,.5)",
              }}
            >
              <Image
                src="/assets/about-story.jpg"
                alt="Global Elite office in New Delhi"
                fill
                sizes="(max-width: 1000px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                right: -14,
                bottom: -14,
                background: "#fff",
                border: "1px solid #ece2f4",
                borderRadius: 16,
                padding: "16px 18px",
                boxShadow: "0 18px 40px -22px rgba(22,38,92,.4)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Award width={22} height={22} style={{ color: "#fff" }} />
              </span>
              <div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#16265C",
                    fontFamily: serif,
                  }}
                >
                  Est. 2009
                </div>
                <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                  New Delhi, India
                </div>
              </div>
            </div>
          </div>

          <div>
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: ".14em",
                color: "#8E4FA0",
              }}
            >
              • OUR STORY
            </span>
            <h2
              style={{
                fontFamily: serif,
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: "-.02em",
                lineHeight: 1.14,
                marginTop: 12,
                color: "#16265C",
              }}
            >
              From a single desk to a{" "}
              <span style={{ fontStyle: "italic", color: "#8E4FA0" }}>
                global network
              </span>
            </h2>
            <p
              style={{
                fontSize: 15.5,
                color: "#475569",
                marginTop: 14,
                lineHeight: 1.65,
                fontWeight: 500,
              }}
            >
              What began as a one-room legalization desk in New Delhi has grown
              into a nationwide logistics network trusted by families, students
              and corporations to move their most important documents across
              borders — without a single compromise on integrity.
            </p>

            <div
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {timeline.map((t, i) => (
                <div key={t.year} style={{ display: "flex", gap: 18 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: "50%",
                        background: t.dark
                          ? "#16265C"
                          : "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 800,
                        color: t.dark ? "#E5A93A" : "#fff",
                        flexShrink: 0,
                        boxShadow: t.dark
                          ? "0 10px 22px -10px rgba(22,38,92,.5)"
                          : "0 10px 22px -10px rgba(142,79,160,.6)",
                      }}
                    >
                      {t.year}
                    </span>
                    {i !== timeline.length - 1 && (
                      <span
                        style={{
                          width: 2,
                          flex: 1,
                          background: "#ece2f4",
                          margin: "6px 0",
                        }}
                      />
                    )}
                  </div>
                  <div style={{ paddingBottom: i === timeline.length - 1 ? 0 : 24 }}>
                    <div
                      style={{ fontSize: 16, fontWeight: 800, color: "#16265C" }}
                    >
                      {t.title}
                    </div>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "#64748b",
                        marginTop: 4,
                        lineHeight: 1.55,
                      }}
                    >
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section style={{ background: "#F7F3FA", padding: "96px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: ".14em",
                color: "#8E4FA0",
              }}
            >
              • OUR PEOPLE
            </span>
            <h2
              style={{
                fontFamily: serif,
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: "-.02em",
                lineHeight: 1.14,
                marginTop: 12,
                color: "#16265C",
              }}
            >
              The people behind the{" "}
              <span style={{ fontStyle: "italic", color: "#8E4FA0" }}>seal</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#64748b",
                marginTop: 12,
                lineHeight: 1.55,
              }}
            >
              A specialist team that treats every document as if it were their own
              passport.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div
                key={member.name}
                className={styles.card}
                style={{
                  background: "#fff",
                  border: "1px solid #ece2f4",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 12px 30px -20px rgba(22,38,92,.2)",
                }}
              >
                <div style={{ position: "relative", height: 240 }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <div
                    style={{ fontSize: 17, fontWeight: 800, color: "#16265C" }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#8E4FA0",
                      marginTop: 2,
                    }}
                  >
                    {member.role}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#64748b",
                      marginTop: 8,
                      lineHeight: 1.5,
                    }}
                  >
                    {member.desc}
                  </p>
                  <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                    {[Share2, Mail].map((Ic, k) => (
                      <a
                        key={k}
                        href="#"
                        aria-label={k === 0 ? "LinkedIn" : "Email"}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 9,
                          background: "#F4ECFA",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                        }}
                      >
                        <Ic width={16} height={16} style={{ color: "#8E4FA0" }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section style={{ background: "#fff", padding: "96px 28px" }}>
        <div className={styles.founderGrid}>
          <div>
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: ".12em",
                color: "#8E4FA0",
              }}
            >
              LEADERSHIP
            </span>
            <h2
              style={{
                fontFamily: serif,
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-.02em",
                marginTop: 10,
                color: "#16265C",
                display: "inline-block",
                borderBottom: "3px solid #E5A93A",
                paddingBottom: 6,
              }}
            >
              A word from our founder
            </h2>
            <div
              style={{
                marginTop: 26,
                background: "#F7F3FA",
                border: "1px solid #ece2f4",
                borderRadius: 18,
                padding: 24,
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: "linear-gradient(160deg,#16265C,#3a2566)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <UserRound width={30} height={30} style={{ color: "#E5A93A" }} />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#16265C" }}>
                  A. R. Khanna
                </div>
                <div
                  style={{ fontSize: 13, color: "#8E4FA0", fontWeight: 700 }}
                >
                  Founder &amp; Managing Director
                </div>
                <div style={{ fontSize: 12.5, color: "#64748b", marginTop: 3 }}>
                  15+ years in cross-border legal logistics
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              background: "linear-gradient(160deg,#16265C,#2a2168)",
              borderRadius: 24,
              padding: "48px 44px",
              boxShadow: "0 30px 64px -28px rgba(22,38,92,.6)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 30,
                fontFamily: serif,
                fontSize: 140,
                lineHeight: 1,
                color: "rgba(229,169,58,.18)",
                fontWeight: 800,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                position: "relative",
                fontFamily: serif,
                fontSize: 25,
                lineHeight: 1.45,
                fontWeight: 500,
                color: "#fff",
                fontStyle: "italic",
              }}
            >
              True global mobility requires a foundation of absolute legal trust.
              We built Global Elite to turn complex international bureaucracies
              into a secure, flawless day-to-day operation.
            </p>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 26,
              }}
            >
              <span style={{ width: 34, height: 2, background: "#E5A93A" }} />
              <span
                style={{ fontSize: 13.5, fontWeight: 700, color: "#E5A93A" }}
              >
                Global Elite
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
