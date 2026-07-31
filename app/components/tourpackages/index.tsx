"use client";

// Renders a CMS-managed package block. The CMS stores the whole block as JSON
// with icons and gradients as string keys (serializable across the
// server/client boundary); this component resolves those keys back to the local
// icon components and brand gradients.

import { useEffect, useMemo, useState } from "react";
import styles from "./tourpackages.module.css";
import { resolveBand, type PackagesConfig, type TourPackage } from "./data";
import { submitLead } from "../../lib/leads";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Dot,
  Eye,
  ICONS,
  PhoneCall,
  Route,
  ShieldCheck,
  X,
  type IconKey,
} from "./icons";

/**
 * Renders the icon a CMS block names by key ("palmtree"), falling back to the
 * plane. Resolving inside a component — rather than assigning the component to
 * a local during render — keeps the icon element's identity stable.
 */
function PkgIcon({
  name,
  ...props
}: { name: string | undefined } & React.SVGProps<SVGSVGElement>) {
  const Icon = name && name in ICONS ? ICONS[name as IconKey] : ICONS.plane;
  return <Icon {...props} />;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function TourPackages({
  config,
  leadSource,
}: {
  config: PackagesConfig;
  /** Recorded as "Submitted From" on leads from this block */
  leadSource?: string;
}) {
  const tabs = config.tabs;
  const [tabId, setTabId] = useState<string>(tabs[0]?.id ?? "");
  const [openId, setOpenId] = useState<string | null>(null);
  // When set, the enquiry popup is open, pre-filled with this package's region.
  const [enquiry, setEnquiry] = useState<{ region: string; title: string } | null>(null);

  // Every unique region across all tabs — populates the enquiry form's Region
  // dropdown (pre-selected to the package you opened).
  const allRegions = useMemo(
    () =>
      Array.from(
        new Set(
          tabs.flatMap((t) => t.packages.map((p) => p.region)).filter(Boolean)
        )
      ),
    [tabs]
  );

  const activeTab = tabs.find((t) => t.id === tabId) ?? tabs[0];
  if (!activeTab) return null;

  const list = activeTab.packages;
  const rows = chunk(list, 3);

  // The host page supplies the `sec-<anchorId>` wrapper the table of contents
  // scrolls to, so this section carries no id of its own.
  return (
    <section style={{ background: "#fff", padding: "0 4px" }}>
      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          {config.badge && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "#F4ECFA",
                border: "1px solid #e6d8f0",
                borderRadius: 999,
                padding: "5px 12px",
                fontSize: 10.5,
                fontWeight: 800,
                letterSpacing: ".12em",
                color: "#8E4FA0",
              }}
            >
              <PkgIcon name={config.badgeIcon} width={13} height={13} style={{ color: "#8E4FA0" }} />
              {config.badge}
            </div>
          )}
          {config.heading && (
            <h2
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "clamp(24px, 5vw, 30px)",
                fontWeight: 800,
                letterSpacing: "-.02em",
                color: "#16265C",
                marginTop: 12,
              }}
            >
              {config.heading}
            </h2>
          )}
          {config.subtitle && (
            <p
              style={{
                fontSize: 15,
                color: "#64748b",
                lineHeight: 1.65,
                fontWeight: 500,
                marginTop: 8,
                maxWidth: 560,
              }}
            >
              {config.subtitle}
            </p>
          )}
        </div>

        {/* tab switch — hidden when the block has only one tab */}
        {tabs.length > 1 && (
          <div
            style={{
              display: "inline-flex",
              background: "#F4ECFA",
              border: "1px solid #e6d8f0",
              borderRadius: 13,
              padding: 4,
              gap: 4,
            }}
          >
            {tabs.map((t) => {
              const on = activeTab.id === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTabId(t.id);
                    setOpenId(null);
                  }}
                  className={styles.pill}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "9px 18px",
                    borderRadius: 10,
                    background: on ? "#fff" : "transparent",
                    color: on ? "#16265C" : "#8E4FA0",
                    boxShadow: on ? "0 4px 12px -6px rgba(22,38,92,.35)" : "none",
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* DESKTOP: rows of three, the detail panel drops below the whole row
          with a notch pointing at the opened card. */}
      <div className={styles.desktopRows}>
        {rows.map((row, ri) => {
          const openIdx = row.findIndex((p) => p.id === openId);
          const openTour = openIdx >= 0 ? row[openIdx] : null;
          // Notch x-position: centre of the opened column in a 3-col grid with
          // 16px gaps, minus half the 22px-wide triangle.
          const notchLeft = `calc((100% - 32px) * ${(openIdx / 3 + 1 / 6).toFixed(
            5
          )} + ${openIdx * 16 - 11}px)`;

          return (
            <div key={ri} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className={styles.row}>
                {row.map((p) => (
                  <TourCard
                    key={p.id}
                    p={p}
                    open={openId === p.id}
                    onToggle={() => setOpenId((cur) => (cur === p.id ? null : p.id))}
                  />
                ))}
              </div>

              {openTour && (
                <>
                  <div
                    className={styles.notch}
                    style={{
                      height: 0,
                      marginBottom: -5,
                      marginLeft: notchLeft,
                      width: 0,
                      borderLeft: "11px solid transparent",
                      borderRight: "11px solid transparent",
                      borderBottom: "11px solid #8E4FA0",
                    }}
                  />
                  <TourDetail
                    tour={openTour}
                    config={config}
                    onClose={() => setOpenId(null)}
                    onEnquire={() =>
                      setEnquiry({ region: openTour.region, title: openTour.title })
                    }
                  />
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* MOBILE: single column — the detail panel drops in directly below the
          tapped card, not below the row. */}
      <div className={styles.mobileList}>
        {list.map((p) => (
          <div key={p.id} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <TourCard
              p={p}
              open={openId === p.id}
              onToggle={() => setOpenId((cur) => (cur === p.id ? null : p.id))}
            />
            {openId === p.id && (
              <TourDetail
                tour={p}
                config={config}
                onClose={() => setOpenId(null)}
                onEnquire={() => setEnquiry({ region: p.region, title: p.title })}
              />
            )}
          </div>
        ))}
      </div>

      {enquiry && (
        <EnquiryModal
          region={enquiry.region}
          title={enquiry.title}
          regions={allRegions}
          config={config}
          leadSource={leadSource}
          onClose={() => setEnquiry(null)}
        />
      )}
    </section>
  );
}

/* ---------------- card ---------------- */

function TourCard({
  p,
  open,
  onToggle,
}: {
  p: TourPackage;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={styles.card}
      style={{
        textAlign: "left",
        fontFamily: "inherit",
        cursor: "pointer",
        padding: 0,
        background: open ? "#FBF8FD" : "#fff",
        border: open ? "2px solid #8E4FA0" : "1px solid #ece2f4",
        borderRadius: 17,
        overflow: "hidden",
        boxShadow: open
          ? "0 0 0 4px rgba(142,79,160,.15), 0 20px 40px -24px rgba(142,79,160,.55)"
          : "0 8px 22px -18px rgba(22,38,92,.28)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 104, overflow: "hidden", position: "relative" }}>
        <div
          className={styles.band}
          style={{ position: "absolute", inset: 0, background: resolveBand(p.band) }}
        />
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 6,
            lineHeight: 0,
            color: "rgba(255,255,255,.22)",
          }}
        >
          <PkgIcon name={p.icon} width={78} height={78} />
        </span>
        {p.duration && (
          <div
            style={{
              position: "absolute",
              top: 11,
              left: 12,
              background: "rgba(255,255,255,.92)",
              borderRadius: 7,
              padding: "4px 9px",
              fontSize: 10.5,
              fontWeight: 800,
              color: "#16265C",
              letterSpacing: ".02em",
            }}
          >
            {p.duration}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 11,
            left: 12,
            fontSize: 11,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: ".09em",
            textShadow: "0 1px 6px rgba(0,0,0,.25)",
          }}
        >
          {p.region}
        </div>
        {open && (
          <div
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: "#fff",
              borderRadius: 999,
              padding: "4px 10px",
              fontSize: 9.5,
              fontWeight: 800,
              color: "#8E4FA0",
              letterSpacing: ".1em",
              boxShadow: "0 4px 10px -4px rgba(22,38,92,.4)",
            }}
          >
            <Eye width={11} height={11} style={{ color: "#8E4FA0" }} />
            VIEWING
          </div>
        )}
      </div>

      <div
        style={{
          padding: "14px 15px 15px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: "#16265C",
            lineHeight: 1.32,
            letterSpacing: "-.01em",
          }}
        >
          {p.title}
        </div>
        {p.season && (
          <div style={{ fontSize: 12.5, color: "#8E4FA0", fontWeight: 600, marginTop: 5 }}>
            Best season · {p.season}
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            marginTop: 14,
            paddingTop: 12,
            borderTop: "1px solid #f3eef9",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: ".07em",
              }}
            >
              FROM
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: "#16265C",
                letterSpacing: "-.01em",
              }}
            >
              {p.price}
            </div>
          </div>
          <span
            className={styles.go}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: open ? "#8E4FA0" : "#F4ECFA",
              color: open ? "#fff" : "#8E4FA0",
              borderRadius: 9,
              padding: "8px 12px",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            {open ? "Close" : "Details"}
            {open ? <ChevronUp width={14} height={14} /> : <ChevronDown width={14} height={14} />}
          </span>
        </div>
      </div>
    </button>
  );
}

/* ---------------- detail panel ---------------- */

function TourDetail({
  tour,
  config,
  onClose,
  onEnquire,
}: {
  tour: TourPackage;
  config: PackagesConfig;
  onClose: () => void;
  onEnquire: () => void;
}) {
  const band = resolveBand(tour.band);
  return (
    <div
      className={styles.detail}
      style={{
        background: "#fff",
        border: "1.5px solid #ddd0ea",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 26px 54px -30px rgba(22,38,92,.42)",
      }}
    >
      {/* gradient header */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: band,
          padding: "24px 26px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: -18,
            right: 14,
            lineHeight: 0,
            color: "rgba(255,255,255,.15)",
          }}
        >
          <PkgIcon name={tour.icon} width={150} height={150} />
        </span>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tour.region && <Tag solid>{tour.region}</Tag>}
              {tour.duration && <Tag>{tour.duration}</Tag>}
              {tour.season && <Tag>Best · {tour.season}</Tag>}
            </div>
            <h3
              style={{
                fontSize: "clamp(20px, 4.5vw, 25px)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-.02em",
                marginTop: 12,
                lineHeight: 1.2,
              }}
            >
              {tour.title}
            </h3>
            {tour.summary && (
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,.92)",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  marginTop: 7,
                  maxWidth: 600,
                }}
              >
                {tour.summary}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className={styles.x}
            style={{
              flexShrink: 0,
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "rgba(255,255,255,.18)",
              border: "1px solid rgba(255,255,255,.34)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X width={17} height={17} style={{ color: "#fff" }} />
          </button>
        </div>
      </div>

      {/* body */}
      <div className={styles.body}>
        {/* left: itinerary + stats */}
        <div style={{ padding: "24px 26px", borderRight: "1px solid #f0e9f6" }}>
          {tour.itinerary.length > 0 && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <Route width={17} height={17} style={{ color: "#8E4FA0" }} />
                <div style={{ fontSize: 15.5, fontWeight: 800, color: "#16265C" }}>
                  {config.itineraryTitle}
                </div>
              </div>
              <div className={styles.itin}>
                {tour.itinerary.map((d, i) => (
                  <div
                    key={`${d.d}-${i}`}
                    className={`${styles.day} ${styles.dayGrid}`}
                    style={{
                      border: "1px solid #f0e9f6",
                      borderRadius: 12,
                      padding: "13px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        color: "#8E4FA0",
                        letterSpacing: ".05em",
                        paddingTop: 2,
                      }}
                    >
                      {d.d}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 14.5,
                          fontWeight: 700,
                          color: "#16265C",
                          lineHeight: 1.35,
                        }}
                      >
                        {d.t}
                      </div>
                      <div
                        style={{
                          fontSize: 13.5,
                          color: "#64748b",
                          fontWeight: 500,
                          lineHeight: 1.6,
                          marginTop: 4,
                        }}
                      >
                        {d.x}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {tour.stats.length > 0 && (
            <div className={styles.statGrid}>
              {tour.stats.map((st, i) => {
                return (
                  <div
                    key={`${st.k}-${i}`}
                    style={{
                      background: "#F7F3FA",
                      border: "1px solid #efe6f7",
                      borderRadius: 12,
                      padding: "12px 13px",
                    }}
                  >
                    <span style={{ display: "block", lineHeight: 0 }}>
                      <PkgIcon name={st.icon} width={16} height={16} style={{ color: "#8E4FA0" }} />
                    </span>
                    <div
                      style={{
                        fontSize: 13.5,
                        fontWeight: 800,
                        color: "#16265C",
                        marginTop: 7,
                        lineHeight: 1.3,
                      }}
                    >
                      {st.v}
                    </div>
                    <div
                      style={{
                        fontSize: 11.5,
                        color: "#8395ab",
                        fontWeight: 600,
                        marginTop: 2,
                      }}
                    >
                      {st.k}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* right: price + CTAs + includes + docs */}
        <div style={{ padding: "24px 26px", background: "#FBF8FD" }}>
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: ".11em",
              color: "#8E4FA0",
            }}
          >
            STARTING FROM
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6 }}>
            <div
              style={{
                fontSize: 33,
                fontWeight: 800,
                color: "#16265C",
                letterSpacing: "-.025em",
              }}
            >
              {tour.price}
            </div>
            {tour.old && (
              <div
                style={{
                  fontSize: 15,
                  color: "#a0aec0",
                  textDecoration: "line-through",
                  fontWeight: 600,
                }}
              >
                {tour.old}
              </div>
            )}
          </div>
          {config.priceNote && (
            <div style={{ fontSize: 12.5, color: "#64748b", fontWeight: 600, marginTop: 3 }}>
              {config.priceNote}
            </div>
          )}

          <button
            type="button"
            onClick={onEnquire}
            style={{
              width: "100%",
              marginTop: 16,
              background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: 14,
              fontFamily: "inherit",
              fontSize: 14,
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 14px 28px -14px rgba(142,79,160,.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <PhoneCall width={16} height={16} style={{ color: "#fff" }} />
            {config.enquireCta}
          </button>
          {config.callbackNote && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                justifyContent: "center",
                marginTop: 10,
                fontSize: 11.5,
                color: "#8395ab",
                fontWeight: 600,
              }}
            >
              <Clock width={13} height={13} style={{ color: "#8E4FA0" }} />
              {config.callbackNote}
            </div>
          )}

          {tour.includes.length > 0 && (
            <>
              <div style={{ height: 1, background: "#efe6f7", margin: "20px 0" }} />

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#16265C",
                  letterSpacing: ".01em",
                }}
              >
                {config.includesTitle}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 11 }}
              >
                {tour.includes.map((inc) => (
                  <div key={inc} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                    <Check
                      width={15}
                      height={15}
                      style={{ color: "#8E4FA0", flexShrink: 0, marginTop: 2 }}
                    />
                    <div
                      style={{
                        fontSize: 13,
                        color: "#475569",
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      {inc}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {tour.docs.length > 0 && (
            <div
              style={{
                marginTop: 20,
                background: "linear-gradient(150deg,#16265C,#3a2566)",
                borderRadius: 14,
                padding: "16px 17px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <ShieldCheck width={16} height={16} style={{ color: "#E5A93A" }} />
                <div style={{ fontSize: 12.5, fontWeight: 800, color: "#fff" }}>
                  {tour.docsTitle}
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 11 }}
              >
                {tour.docs.map((dc) => (
                  <div key={dc} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <Dot
                      width={14}
                      height={14}
                      style={{ color: "#E5A93A", flexShrink: 0, marginTop: 2 }}
                    />
                    <div
                      style={{
                        fontSize: 12.5,
                        color: "#c9b6e8",
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      {dc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Tag({
  children,
  solid = false,
}: {
  children: React.ReactNode;
  solid?: boolean;
}) {
  return (
    <span
      style={{
        background: solid ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.2)",
        border: solid ? "none" : "1px solid rgba(255,255,255,.4)",
        color: solid ? "#16265C" : "#fff",
        borderRadius: 999,
        padding: "5px 11px",
        fontSize: 10.5,
        fontWeight: 800,
        letterSpacing: ".05em",
      }}
    >
      {children}
    </span>
  );
}

/* ---------------- enquiry popup ---------------- */

const modalInput: React.CSSProperties = {
  width: "100%",
  fontFamily: "inherit",
  fontSize: 14,
  color: "#16265C",
  padding: "12px 13px",
  border: "1.5px solid #ece2f4",
  borderRadius: 11,
  background: "#fff",
  outline: "none",
};

function ModalField({
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

function EnquiryModal({
  region,
  title,
  regions,
  config,
  leadSource,
  onClose,
}: {
  region: string;
  title: string;
  regions: string[];
  config: PackagesConfig;
  leadSource?: string;
  onClose: () => void;
}) {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    region: region || regions[0] || "",
  });

  // Lock body scroll + close on Escape while the popup is open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);

    // The package and region travel as form-specific fields, so the lead in the
    // CMS says exactly which package was being viewed.
    const res = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      source: leadSource || `Packages — ${config.heading || "Package block"}`,
      extra: { Package: title, Region: form.region },
    });

    setSending(false);
    if (res.ok) {
      setDone(true);
    } else {
      setError(res.message);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(15,18,40,.55)",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Enquire about this package"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 430,
          background: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 40px 80px -30px rgba(0,0,0,.55)",
        }}
      >
        {/* header */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(120deg,#16265C,#3a2566)",
            padding: "20px 22px",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={styles.x}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "rgba(255,255,255,.18)",
              border: "1px solid rgba(255,255,255,.34)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X width={16} height={16} style={{ color: "#fff" }} />
          </button>
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: ".12em",
              color: "#E5A93A",
            }}
          >
            {config.enquiry.kicker}
          </div>
          <div
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 19,
              fontWeight: 800,
              color: "#fff",
              marginTop: 5,
              lineHeight: 1.25,
              paddingRight: 36,
            }}
          >
            {title}
          </div>
        </div>

        {/* body */}
        <div style={{ padding: "22px 24px 24px" }}>
          {!done ? (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 13 }}
            >
              <ModalField label="Name">
                <input
                  style={modalInput}
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </ModalField>
              <ModalField label="Phone">
                <input
                  style={modalInput}
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="+91 00000 00000"
                />
              </ModalField>
              <ModalField label={config.enquiry.regionLabel}>
                <div style={{ position: "relative" }}>
                  <select
                    value={form.region}
                    onChange={(e) => setForm((p) => ({ ...p, region: e.target.value }))}
                    style={{
                      ...modalInput,
                      appearance: "none",
                      WebkitAppearance: "none",
                      cursor: "pointer",
                    }}
                  >
                    {regions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
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
              </ModalField>
              <ModalField label="Email">
                <input
                  style={modalInput}
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="you@email.com"
                />
              </ModalField>

              {error && (
                <div
                  role="alert"
                  style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "#b91c1c",
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: 10,
                    padding: "10px 12px",
                    lineHeight: 1.5,
                  }}
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                style={{
                  width: "100%",
                  marginTop: 4,
                  background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: 14,
                  fontFamily: "inherit",
                  fontSize: 14.5,
                  fontWeight: 800,
                  cursor: sending ? "wait" : "pointer",
                  opacity: sending ? 0.75 : 1,
                  boxShadow: "0 14px 30px -12px rgba(142,79,160,.65)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <PhoneCall width={16} height={16} style={{ color: "#fff" }} />
                {sending ? "Sending…" : config.enquiry.ctaText}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "18px 6px 8px" }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "linear-gradient(140deg,#8E4FA0,#5B3E8E)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  boxShadow: "0 14px 30px -12px rgba(142,79,160,.6)",
                }}
              >
                <Check width={30} height={30} style={{ color: "#fff" }} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#16265C",
                  marginTop: 16,
                }}
              >
                {config.enquiry.successHeading}
              </div>
              <p style={{ fontSize: 13.5, color: "#64748b", marginTop: 8, lineHeight: 1.55 }}>
                {config.enquiry.successText.replace("{region}", form.region)}
              </p>
              <button
                type="button"
                onClick={onClose}
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
                {config.enquiry.successButton}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
