"use client";

// Reusable lead-capture popup. Wrap any clickable with <LeadPopupButton
// source="…"> and it opens a branded modal with the common lead form
// (name / phone / email / service). Submissions go to the CMS Leads with the
// given source, so every button records exactly where the lead came from.

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { submitLead } from "../lib/leads";

// The five Global Elite business divisions (default list)
export const DIVISION_SERVICES = [
  "Travel & Tourism — packages, visas, corporate travel",
  "Documentation Solutions — apostille, attestation, legalization",
  "Marketing & Advertising — AI-driven digital marketing",
  "Education & Career Solutions — training, overseas education",
  "AI & Technology Solutions — AI training, automation, analytics",
  "Other",
];

// Document/apostille services — used by the Services and Pricing sections
export const DOCUMENT_SERVICES = [
  "MEA Apostille",
  "Embassy Attestation",
  "Certified Translation",
  "State Pre-Verification (HRD / SDM)",
  "Document Legalization",
  "International Visa Processing",
  "Student Immigration",
  "Other",
];

// Apostille process tracks — used by the "Choose your apostille process" cards
export const PROCESS_SERVICES = [
  "Basic Process — Notary + SDM + MEA Apostille",
  "Standard Process — Notary + DM + Home Dept + MEA Apostille",
  "Commercial Process — Notary + Chamber of Commerce + MEA Apostille",
  "Not sure — need guidance",
];

function LeadPopupModal({
  source,
  services,
  defaultService,
  onClose,
}: {
  source: string;
  services: string[];
  defaultService?: string;
  onClose: () => void;
}) {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(
    defaultService && services.includes(defaultService) ? defaultService : ""
  );

  // Lock body scroll + Escape to close
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    const result = await submitLead({
      name,
      email,
      phone,
      source,
      extra: service ? { "Service Required": service } : {},
    });
    setSending(false);
    if (result.ok) {
      setDone(true);
      setName("");
      setPhone("");
      setEmail("");
      setService("");
    } else {
      setError(result.message);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "inherit",
    fontSize: 14.5,
    color: "#16265C",
    background: "#F7F3FA",
    border: "1.5px solid #ece2f4",
    borderRadius: 11,
    padding: "12px 14px",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    color: "#16265C",
    display: "block",
    marginBottom: 6,
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(13,20,48,.62)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Request a call back"
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: 22,
          padding: "34px 34px 28px",
          width: "100%",
          maxWidth: 540,
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 40px 80px -30px rgba(0,0,0,.55)",
          // The hero/CTA sections are text-center — reset inside the modal
          textAlign: "left",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 34,
            height: 34,
            borderRadius: 10,
            border: "none",
            background: "#F4ECFA",
            color: "#8E4FA0",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {!done ? (
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
              Request a Call Back
            </h2>
            <p style={{ fontSize: 13.5, color: "#64748b", marginTop: 5, lineHeight: 1.5 }}>
              Share your details and our expert will call you back within one
              business hour.
            </p>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 20 }}
            >
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  style={inputStyle}
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    style={inputStyle}
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    style={inputStyle}
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Service Required</label>
                <select
                  style={{ ...inputStyle, cursor: "pointer" }}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              {error && (
                <p style={{ fontSize: 12.5, color: "#dc2626", fontWeight: 600, textAlign: "center" }}>
                  {error}
                </p>
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
                  fontFamily: "inherit",
                  fontWeight: 800,
                  fontSize: 15,
                  padding: 14,
                  borderRadius: 12,
                  cursor: sending ? "wait" : "pointer",
                  opacity: sending ? 0.7 : 1,
                  boxShadow: "0 14px 30px -12px rgba(142,79,160,.65)",
                }}
              >
                {sending ? "Sending…" : "Request a Call Back"}
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
                <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="#8E4FA0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
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
              <svg viewBox="0 0 24 24" width={34} height={34} fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
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
            <p style={{ fontSize: 14, color: "#64748b", marginTop: 8, lineHeight: 1.55 }}>
              Thanks — an expert will call you back within one business hour.
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
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Drop-in trigger: renders a button with your classes/children and opens the
 * lead popup on click. `source` is recorded on the lead ("Submitted From").
 */
export default function LeadPopupButton({
  source,
  services = DIVISION_SERVICES,
  defaultService,
  className,
  style,
  children,
}: {
  source: string;
  /** Options for the "Service Required" dropdown (defaults to the divisions) */
  services?: string[];
  /** Preselect one option (e.g. the card the visitor clicked) */
  defaultService?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={{ cursor: "pointer", ...style }}>
        {children}
      </button>
      {open &&
        // Portal to <body>: ancestors with CSS transforms (e.g. the scaled
        // pricing card) would otherwise trap the fixed overlay inside them.
        createPortal(
          <LeadPopupModal
            source={source}
            services={services}
            defaultService={defaultService}
            onClose={close}
          />,
          document.body
        )}
    </>
  );
}
