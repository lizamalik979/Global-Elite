"use client";

import { useState } from "react";
import styles from "./contactpage.module.css";
import { ArrowRight, Check, ChevronDown, Lock } from "./icons";
import type { ContactPageContent } from "../../lib/cms";

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: "#16265C",
  display: "block",
  marginBottom: 6,
};

function Field({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function SelectChevron() {
  return (
    <ChevronDown
      width={16}
      height={16}
      style={{
        color: "#8E4FA0",
        position: "absolute",
        right: 12,
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
      }}
    />
  );
}

const selectStyle: React.CSSProperties = {
  appearance: "none",
  WebkitAppearance: "none",
};

export default function InquiryHub({
  inquiry,
}: {
  inquiry: ContactPageContent["inquiry"];
}) {
  const [tab, setTab] = useState<"quote" | "inquiry">("quote");
  const [done, setDone] = useState(false);

  const tabStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 800,
    padding: 13,
    borderRadius: 12,
    cursor: "pointer",
    border: "none",
    background: active ? "#fff" : "transparent",
    color: active ? "#16265C" : "#64748b",
    boxShadow: active ? "0 6px 16px -8px rgba(22,38,92,.25)" : "none",
  });

  const ctaLabel = tab === "quote" ? inquiry.ctaQuote : inquiry.ctaInquiry;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ece2f4",
        borderRadius: 22,
        boxShadow: "0 34px 70px -32px rgba(22,38,92,.45)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* tabs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "#F7F3FA",
          borderBottom: "1px solid #ece2f4",
          padding: 8,
          gap: 8,
          borderRadius: "22px 22px 0 0",
        }}
      >
        <button
          type="button"
          className={styles.btn}
          style={tabStyle(tab === "quote")}
          onClick={() => setTab("quote")}
        >
          {inquiry.tabQuote}
        </button>
        <button
          type="button"
          className={styles.btn}
          style={tabStyle(tab === "inquiry")}
          onClick={() => setTab("inquiry")}
        >
          {inquiry.tabInquiry}
        </button>
      </div>

      <div
        style={{
          padding: "30px 32px 32px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {!done ? (
          <div>
            {tab === "quote" ? (
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#16265C" }}>
                  {inquiry.quoteHeading}
                </h2>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#64748b",
                    marginTop: 5,
                    lineHeight: 1.5,
                  }}
                >
                  {inquiry.quoteIntro}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginTop: 22,
                  }}
                >
                  <Field label="Full Name">
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Your full name"
                    />
                  </Field>
                  <div className={styles.twoCol}>
                    <Field label="Phone Number">
                      <div style={{ display: "flex", gap: 8 }}>
                        <div
                          style={{
                            position: "relative",
                            width: 92,
                            flexShrink: 0,
                          }}
                        >
                          <select
                            className={styles.input}
                            style={{ ...selectStyle, padding: "12px 10px" }}
                          >
                            {inquiry.phoneCodes.map((c) => (
                              <option key={c}>{c}</option>
                            ))}
                          </select>
                          <ChevronDown
                            width={14}
                            height={14}
                            style={{
                              color: "#8E4FA0",
                              position: "absolute",
                              right: 9,
                              top: "50%",
                              transform: "translateY(-50%)",
                              pointerEvents: "none",
                            }}
                          />
                        </div>
                        <input
                          className={styles.input}
                          type="tel"
                          placeholder="00000 00000"
                          style={{ flex: 1, minWidth: 0 }}
                        />
                      </div>
                    </Field>
                    <Field label="Email">
                      <input
                        className={styles.input}
                        type="email"
                        placeholder="you@email.com"
                      />
                    </Field>
                  </div>
                  <div className={styles.twoCol}>
                    <Field label="Document Type">
                      <div style={{ position: "relative" }}>
                        <select className={styles.input} style={selectStyle}>
                          {inquiry.documentTypes.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                        <SelectChevron />
                      </div>
                    </Field>
                    <Field label="Destination Country">
                      <div style={{ position: "relative" }}>
                        <select
                          className={styles.input}
                          defaultValue=""
                          style={selectStyle}
                        >
                          <option value="" disabled>
                            Select destination
                          </option>
                          {inquiry.destinations.map((dst) => (
                            <option key={dst}>{dst}</option>
                          ))}
                        </select>
                        <SelectChevron />
                      </div>
                    </Field>
                  </div>
                  <Field
                    label={
                      <>
                        Additional Details{" "}
                        <span style={{ color: "#94a3b8", fontWeight: 600 }}>
                          (optional)
                        </span>
                      </>
                    }
                  >
                    <textarea
                      className={styles.input}
                      rows={3}
                      placeholder="Number of documents, urgency, pickup city..."
                      style={{ resize: "vertical" }}
                    />
                  </Field>
                </div>
              </div>
            ) : (
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#16265C" }}>
                  {inquiry.inquiryHeading}
                </h2>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#64748b",
                    marginTop: 5,
                    lineHeight: 1.5,
                  }}
                >
                  {inquiry.inquiryIntro}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginTop: 22,
                  }}
                >
                  <div className={styles.twoCol}>
                    <Field label="Full Name">
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Your full name"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        className={styles.input}
                        type="email"
                        placeholder="you@email.com"
                      />
                    </Field>
                  </div>
                  <Field label="Subject">
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="What is this about?"
                    />
                  </Field>
                  <Field label="Message">
                    <textarea
                      className={styles.input}
                      rows={4}
                      placeholder="Write your message..."
                      style={{ resize: "vertical" }}
                    />
                  </Field>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setDone(true)}
              className={styles.btn}
              style={{
                width: "100%",
                marginTop: 20,
                background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
                color: "#fff",
                border: "none",
                fontFamily: "inherit",
                fontWeight: 800,
                fontSize: 15,
                padding: 15,
                borderRadius: 12,
                cursor: "pointer",
                boxShadow: "0 14px 30px -12px rgba(142,79,160,.65)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {ctaLabel}
              <ArrowRight width={17} height={17} style={{ color: "#fff" }} />
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 8,
                marginTop: 14,
              }}
            >
              <Lock
                width={13}
                height={13}
                style={{ color: "#8E4FA0", flexShrink: 0, marginTop: 2 }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: "#94a3b8",
                  fontWeight: 600,
                  lineHeight: 1.5,
                  textAlign: "center",
                  maxWidth: 420,
                }}
              >
                {inquiry.privacyNote}
              </span>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "46px 10px" }}>
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
                fontSize: 22,
                fontWeight: 800,
                color: "#16265C",
                marginTop: 18,
              }}
            >
              {inquiry.successHeading}
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#64748b",
                marginTop: 8,
                lineHeight: 1.55,
                maxWidth: 360,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {inquiry.successText}
            </p>
            <button
              type="button"
              onClick={() => setDone(false)}
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
              {inquiry.successButton}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
