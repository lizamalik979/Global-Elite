import type { ComponentType, ReactNode, SVGProps } from "react";
import StepAccordion from "./StepAccordion";
import FaqAccordion from "./FaqAccordion";
import {
  countryList,
  documents,
  esanadFlow,
  feeRows,
  importantNotes,
  overviewStats,
  processHighlights,
  racRoutes,
  resources,
  timelineIncludes,
} from "./data";
import styles from "./servicepage.module.css";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Check,
  CheckCheck,
  Clock,
  Dot,
  Download,
  FileText,
  Info,
  Landmark,
  MapPin,
  Package,
  Phone,
  UserRound,
  Zap,
} from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const jakarta = "var(--font-jakarta), sans-serif";

function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: jakarta,
        fontSize: 30,
        fontWeight: 800,
        letterSpacing: "-.02em",
        color: "#16265C",
      }}
    >
      {children}
    </h2>
  );
}

function Lead({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: 16,
        lineHeight: 1.7,
        color: "#475569",
        marginTop: 14,
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div style={{ height: 1, background: "#ece2f4", margin: "44px 0" }} />
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div id={`sec-${id}`} style={{ scrollMarginTop: 150 }}>
      {children}
    </div>
  );
}

function FlowNode({
  icon: Icon,
  title,
  desc,
  dark,
}: {
  icon: Icon;
  title: string;
  desc: string;
  dark?: boolean;
}) {
  return (
    <div
      className={styles.esanadNode}
      style={{
        background: dark ? "linear-gradient(160deg,#16265C,#3a2566)" : "#fff",
        border: dark ? "none" : "1px solid #ece2f4",
        borderRadius: 16,
        padding: "18px 14px",
        textAlign: "center",
        boxShadow: dark ? "0 16px 34px -18px rgba(22,38,92,.5)" : undefined,
      }}
    >
      <span
        style={{
          width: 50,
          height: 50,
          borderRadius: 14,
          background: dark ? "rgba(255,255,255,.12)" : "#F4ECFA",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon width={25} height={25} style={{ color: dark ? "#E5A93A" : "#8E4FA0" }} />
      </span>
      <div
        style={{
          fontSize: 14,
          fontWeight: 800,
          color: dark ? "#fff" : "#16265C",
          marginTop: 11,
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: 11.5,
          color: dark ? "#c9b6e8" : "#64748b",
          marginTop: 4,
          lineHeight: 1.45,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function Person({
  icon: Icon,
  title,
  desc,
  accent,
}: {
  icon: Icon;
  title: string;
  desc: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 11,
        textAlign: "center",
        flexShrink: 0,
        width: 170,
      }}
    >
      <span
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: accent
            ? "linear-gradient(140deg,#16265C,#3a2566)"
            : "#F4ECFA",
          boxShadow: accent ? "0 12px 26px -14px rgba(22,38,92,.5)" : undefined,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon width={28} height={28} style={{ color: accent ? "#E5A93A" : "#8E4FA0" }} />
      </span>
      <div
        style={{ fontSize: 14.5, fontWeight: 800, color: "#16265C", lineHeight: 1.25 }}
      >
        {title}
      </div>
      <div
        style={{ fontSize: 12, color: "#64748b", lineHeight: 1.45, maxWidth: 160 }}
      >
        {desc}
      </div>
    </div>
  );
}

function DashArrow() {
  return (
    <div className={styles.flowArrow}>
      <span className={styles.flowArrowLine} />
      <ArrowRight width={22} height={22} className={styles.flowArrowIcon} />
    </div>
  );
}

export default function ServiceArticle() {
  return (
    <article style={{ paddingTop: 44, minWidth: 0 }}>
      {/* OVERVIEW */}
      <Section id="overview">
        <H2>Overview</H2>
        <Lead>
          A degree certificate apostille is the process of legalising your
          university degree so it is recognised as authentic in any country that
          is a member of the Hague Apostille Convention. The Ministry of External
          Affairs (MEA) affixes a computer-generated apostille sticker, after
          which your degree is valid for higher education, employment and
          residency abroad — with no further embassy attestation required for
          Hague nations.
        </Lead>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.75,
            color: "#475569",
            marginTop: 14,
            fontWeight: 500,
          }}
        >
          Global Elite manages the entire chain on your behalf: state-level HRD
          verification, central MEA apostille and secure doorstep return — all
          under a single tracked reference.
        </p>
        <div className={styles.overviewStats}>
          {overviewStats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  background: "#F7F3FA",
                  border: "1px solid #ece2f4",
                  borderRadius: 14,
                  padding: 18,
                }}
              >
                <Icon width={22} height={22} style={{ color: "#8E4FA0" }} />
                <div
                  style={{
                    fontFamily: jakarta,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#16265C",
                    marginTop: 10,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 12.5, color: "#64748b", fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Divider />

      {/* DOCUMENTS */}
      <Section id="documents">
        <H2>Documents Required</H2>
        <Lead>
          Keep the following ready before you begin — clear scans speed up the
          pre-verification stage.
        </Lead>
        <div className={styles.docGrid}>
          {documents.map((d) => (
            <div
              key={d}
              style={{
                display: "flex",
                gap: 11,
                alignItems: "flex-start",
                background: "#fff",
                border: "1px solid #ece2f4",
                borderRadius: 12,
                padding: 15,
              }}
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
              <span
                style={{
                  fontSize: 14.5,
                  color: "#33536b",
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                {d}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* PROCESS */}
      <Section id="process">
        <H2>Step-by-Step Process</H2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            background: "linear-gradient(135deg,#F7F3FA,#f2ecf8)",
            border: "1px solid #ece2f4",
            borderRadius: 16,
            padding: "18px 24px",
            marginTop: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#fff",
                border: "1px solid #ece2f4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CalendarClock width={22} height={22} style={{ color: "#8E4FA0" }} />
            </span>
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#8E4FA0",
                  letterSpacing: ".05em",
                }}
              >
                END-TO-END TURNAROUND
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#16265C",
                  letterSpacing: "-.01em",
                }}
              >
                5–7 working days
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}
          >
            {processHighlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  style={{ display: "flex", alignItems: "center", gap: 7 }}
                >
                  <Icon width={16} height={16} style={{ color: "#8E4FA0" }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#16265C" }}>
                    {h.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <StepAccordion />
      </Section>

      <Divider />

      {/* MEA PROCESS FLOW */}
      <Section id="flow">
        <H2>MEA Process Flow</H2>
        <Lead>
          For documents covered under the MEA e-Sanad service, the apostille
          follows a fully digital chain — from online application right through to
          dispatch.
        </Lead>

        <div className={styles.esanad}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              width: 92,
            }}
          >
            <span
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(140deg,#16265C,#3a2566)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 26px -12px rgba(22,38,92,.5)",
              }}
            >
              <UserRound width={30} height={30} style={{ color: "#E5A93A" }} />
            </span>
            <span style={{ fontSize: 13.5, fontWeight: 800, color: "#16265C" }}>
              Applicant
            </span>
          </div>
          <ArrowRight
            width={22}
            height={22}
            className={styles.esanadConnector}
            style={{ color: "#b9a3d6", flexShrink: 0 }}
          />
          {/* snake grid */}
          <div className={styles.esanadGrid}>
            <FlowNode {...esanadFlow[0]} />
            <ArrowRight width={24} height={24} className={styles.esanadArrow} style={{ color: "#b9a3d6", flexShrink: 0 }} />
            <FlowNode {...esanadFlow[1]} />
            <ArrowRight width={24} height={24} className={styles.esanadArrow} style={{ color: "#b9a3d6", flexShrink: 0 }} />
            <FlowNode {...esanadFlow[2]} />
            <div className={styles.esanadSpacer} />
            <div className={styles.esanadSpacer} />
            <div className={styles.esanadSpacer} />
            <div className={styles.esanadSpacer} />
            <div className={styles.esanadArrowDown}>
              <ArrowDown width={22} height={22} style={{ color: "#b9a3d6" }} />
            </div>
            <FlowNode {...esanadFlow[3]} />
            <ArrowLeft width={24} height={24} className={styles.esanadArrow} style={{ color: "#b9a3d6", flexShrink: 0 }} />
            <FlowNode {...esanadFlow[4]} />
            <ArrowLeft width={24} height={24} className={styles.esanadArrow} style={{ color: "#b9a3d6", flexShrink: 0 }} />
            <FlowNode {...esanadFlow[5]} />
          </div>
        </div>

        {/* offline route */}
        <h3
          style={{ fontSize: 18, fontWeight: 800, color: "#16265C", marginTop: 36 }}
        >
          Documents not covered under e-Sanad
        </h3>
        <p style={{ fontSize: 14.5, color: "#64748b", marginTop: 6, lineHeight: 1.6 }}>
          These follow a three-stage physical route through authorised centres.
        </p>

        {/* stage 1: Applicant -> RAC */}
        <div className={styles.flowCard}>
          <Person
            icon={UserRound}
            title="Applicant"
            desc="Submits documents for authentication"
            accent
          />
          <DashArrow />
          <div
            style={{
              flex: 1.4,
              minWidth: 0,
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              background: "#F7F3FA",
              border: "1px solid #ece2f4",
              borderRadius: 14,
              padding: 20,
            }}
          >
            <span
              style={{
                width: 50,
                height: 50,
                borderRadius: 13,
                background: "#fff",
                border: "1px solid #ece2f4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Landmark width={25} height={25} style={{ color: "#8E4FA0" }} />
            </span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 15.5, fontWeight: 800, color: "#16265C" }}>
                Regional Authentication Centres (RACs)
              </div>
              <ul
                style={{
                  listStyle: "none",
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {racRoutes.map((r) => (
                  <li
                    key={r.kind}
                    style={{
                      display: "flex",
                      gap: 9,
                      fontSize: 13,
                      color: "#475569",
                      lineHeight: 1.45,
                    }}
                  >
                    <Dot width={16} height={16} style={{ color: "#8E4FA0", flexShrink: 0 }} />
                    <span>
                      <b style={{ color: "#16265C" }}>{r.kind}</b> — {r.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* stage 2: Applicant -> Outsource -> Branch Secretariat */}
        <div className={styles.flowCard}>
          <Person
            icon={UserRound}
            title="Applicant"
            desc="Visits the nearest outsource agency centre"
            accent
          />
          <DashArrow />
          <Person
            icon={Package}
            title="Outsource Agency"
            desc="Deposits verified documents"
          />
          <DashArrow />
          <Person
            icon={Landmark}
            title="Branch Secretariat / RPO"
            desc="Having jurisdiction over it"
            accent
          />
        </div>

        {/* stage 3: Outsource -> Applicant (receipt) */}
        <div className={styles.flowCard}>
          <Person
            icon={Landmark}
            title="Outsource Agency"
            desc="Receives the duly legalized document"
          />
          <DashArrow />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 11,
              textAlign: "center",
              flexShrink: 0,
              width: 170,
            }}
          >
            <span
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                boxShadow: "0 12px 26px -14px rgba(142,79,160,.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCheck width={28} height={28} style={{ color: "#fff" }} />
            </span>
            <div
              style={{ fontSize: 14.5, fontWeight: 800, color: "#16265C", lineHeight: 1.25 }}
            >
              Legalized Documents
            </div>
            <div
              style={{ fontSize: 12, color: "#64748b", lineHeight: 1.45, maxWidth: 160 }}
            >
              Received by the applicant
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* TIMELINE & PRICING */}
      <Section id="timeline">
        <H2>Timeline &amp; Pricing</H2>
        <div
          style={{
            border: "1px solid #ece2f4",
            borderRadius: 22,
            overflow: "hidden",
            marginTop: 22,
            boxShadow: "0 22px 50px -30px rgba(22,38,92,.4)",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(135deg,#16265C,#3a2566 60%,#5B3E8E)",
              padding: "32px 34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -50,
                right: 120,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(142,95,182,.3)",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#16265C",
                  background: "#E5A93A",
                  padding: "5px 12px",
                  borderRadius: 99,
                  letterSpacing: ".03em",
                }}
              >
                MOST POPULAR • ALL-INCLUSIVE
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  marginTop: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: jakarta,
                    fontSize: 52,
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-.02em",
                    lineHeight: 1,
                  }}
                >
                  ₹3,450
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 14, color: "#c9b6e8", fontWeight: 700 }}>
                    incl. HRD &amp; courier
                  </span>
                  <span
                    style={{
                      fontSize: 12.5,
                      color: "#9d8fc4",
                      textDecoration: "line-through",
                    }}
                  >
                    ₹4,200
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 12,
                }}
              >
                <Clock width={16} height={16} style={{ color: "#E5A93A" }} />
                <span style={{ fontSize: 13.5, color: "#e9def7", fontWeight: 600 }}>
                  Estimated completion: 5–7 working days
                </span>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "stretch",
              }}
            >
              <a
                href="#quote"
                className={styles.btn}
                style={{
                  background: "#fff",
                  color: "#16265C",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: 15,
                  padding: "15px 28px",
                  borderRadius: 12,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 14px 28px -10px rgba(0,0,0,.35)",
                }}
              >
                Start Application
                <ArrowRight width={17} height={17} style={{ color: "#8E4FA0" }} />
              </a>
              <a
                href="tel:+918866787599"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#c9b6e8",
                }}
              >
                <Phone width={14} height={14} style={{ color: "#E5A93A" }} />
                or call +91 88667 87599
              </a>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "22px 34px",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 16,
            }}
          >
            {timelineIncludes.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 9,
                      background: "#F4ECFA",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon width={17} height={17} style={{ color: "#8E4FA0" }} />
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#16265C",
                      lineHeight: 1.25,
                    }}
                  >
                    {t.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div
            style={{
              background: "#F7F3FA",
              borderTop: "1px solid #ece2f4",
              padding: "14px 34px",
              display: "flex",
              alignItems: "center",
              gap: 9,
            }}
          >
            <Zap width={15} height={15} style={{ color: "#E5A93A" }} />
            <span style={{ fontSize: 13, color: "#566079", fontWeight: 600 }}>
              Need it faster? <b style={{ color: "#8E4FA0" }}>Fast Track (3–4 days)</b>{" "}
              and <b style={{ color: "#8E4FA0" }}>Super Urgent</b> upgrades available
              at checkout.
            </span>
          </div>
        </div>
      </Section>

      <Divider />

      {/* ACCEPTED COUNTRIES */}
      <Section id="countries">
        <H2>Accepted Countries</H2>
        <Lead>
          A degree apostille is valid across all 120+ Hague Convention member
          states, including:
        </Lead>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 20,
          }}
        >
          {countryList.map((c) => (
            <span
              key={c}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "#F7F3FA",
                border: "1px solid #ece2f4",
                borderRadius: 99,
                padding: "9px 16px",
                fontSize: 13.5,
                fontWeight: 700,
                color: "#16265C",
              }}
            >
              <MapPin width={14} height={14} style={{ color: "#8E4FA0" }} />
              {c}
            </span>
          ))}
        </div>
      </Section>

      <Divider />

      {/* RESOURCES */}
      <Section id="resources">
        <H2>Downloadable Resources</H2>
        <Lead>
          Official references and checklists to help you prepare your apostille
          application.
        </Lead>
        <div className={styles.resGrid}>
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <a
                key={r.name}
                href="#"
                className={styles.res}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  background: "#fff",
                  border: "1px solid #ece2f4",
                  borderRadius: 16,
                  padding: 22,
                  textDecoration: "none",
                  boxShadow: "0 8px 22px -18px rgba(22,38,92,.2)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "linear-gradient(150deg,#F4ECFA,#EBDDF4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon width={23} height={23} style={{ color: "#8E4FA0" }} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#16265C",
                        lineHeight: 1.3,
                      }}
                    >
                      {r.name}
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#64748b",
                        marginTop: 5,
                        lineHeight: 1.5,
                      }}
                    >
                      {r.desc}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    borderTop: "1px solid #f4eef9",
                    paddingTop: 14,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 11,
                        fontWeight: 800,
                        color: "#8E4FA0",
                        background: "#F4ECFA",
                        padding: "4px 9px",
                        borderRadius: 6,
                        letterSpacing: ".03em",
                      }}
                    >
                      <FileText width={12} height={12} style={{ color: "#8E4FA0" }} />
                      PDF
                    </span>
                    <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>
                      {r.pages} • {r.size}
                    </span>
                  </div>
                  <span
                    className={styles.resBtn}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#fff",
                      background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                      padding: "9px 15px",
                      borderRadius: 10,
                    }}
                  >
                    Download
                    <Download width={15} height={15} style={{ color: "#fff" }} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </Section>

      <Divider />

      {/* FEES */}
      <Section id="fees">
        <H2>Fees &amp; Charges</H2>
        <Lead>
          A transparent breakdown of government fees and our handling charges. No
          hidden costs.
        </Lead>
        <div
          style={{
            border: "1px solid #ece2f4",
            borderRadius: 16,
            overflow: "hidden",
            marginTop: 22,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
              background: "linear-gradient(120deg,#16265C,#3a2566)",
            }}
          >
            {["TYPE OF SERVICE", "MEA FEE", "SERVICE CHARGE", "SCANNING"].map((h) => (
              <div
                key={h}
                style={{
                  padding: "15px 18px",
                  fontSize: 12.5,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: ".03em",
                }}
              >
                {h}
              </div>
            ))}
          </div>
          {feeRows.map((row, i) => (
            <div
              key={row.type}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                background: i % 2 === 1 ? "#F7F3FA" : "#fff",
                borderBottom: i === 0 ? "1px solid #ece2f4" : undefined,
              }}
            >
              <div
                style={{
                  padding: "16px 18px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#16265C",
                }}
              >
                {row.type}
              </div>
              {[row.mea, row.service, row.scanning].map((v, j) => (
                <div
                  key={j}
                  style={{
                    padding: "16px 18px",
                    fontSize: 14,
                    color: "#475569",
                    fontWeight: 600,
                  }}
                >
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 14,
            fontSize: 13,
            color: "#94a3b8",
            fontWeight: 600,
          }}
        >
          <Info width={15} height={15} style={{ color: "#8E4FA0" }} />
          Government fees are revised periodically by the MEA. Global Elite&apos;s
          all-inclusive package fixes your total upfront.
        </div>
      </Section>

      <Divider />

      {/* IMPORTANT NOTES */}
      <Section id="notes">
        <H2>Important Notes</H2>
        <div style={{ marginTop: 26, borderTop: "1px solid #16265C" }}>
          {importantNotes.map((n, i) => (
            <div
              key={n.title}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr",
                gap: "0 24px",
                padding: "24px 4px",
                borderBottom:
                  i === importantNotes.length - 1 ? undefined : "1px solid #e7e1ef",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {i + 1}.
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#16265C" }}>
                  {n.title}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "#475569",
                    marginTop: 7,
                    lineHeight: 1.7,
                    maxWidth: 660,
                  }}
                >
                  {n.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* FAQ */}
      <Section id="faq">
        <H2>Frequently Asked Questions</H2>
        <FaqAccordion />
      </Section>
    </article>
  );
}
