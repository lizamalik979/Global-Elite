"use client";

import { useState } from "react";
import { Plus } from "./icons";
import type { ContactPageContent } from "../../lib/cms";

export default function ContactFaq({ faq }: { faq: ContactPageContent["faq"] }) {
  const [open, setOpen] = useState(0);
  const faqs = faq.items;

  return (
    <section style={{ background: "#fff", padding: "72px 28px 84px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: 12.5,
              fontWeight: 800,
              letterSpacing: ".14em",
              color: "#8E4FA0",
            }}
          >
            {faq.kicker}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-.02em",
              color: "#16265C",
              marginTop: 10,
            }}
          >
            {faq.heading}
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 30,
          }}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                style={{
                  background: "#fff",
                  border: "1px solid #ece2f4",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 14,
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    padding: "19px 22px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 15.5,
                      fontWeight: 700,
                      color: "#16265C",
                      lineHeight: 1.35,
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isOpen ? "#8E4FA0" : "#F4ECFA",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform .25s ease, background .2s ease",
                    }}
                  >
                    <Plus
                      width={17}
                      height={17}
                      style={{ color: isOpen ? "#fff" : "#8E4FA0" }}
                    />
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "14px 22px 20px",
                      fontSize: 14,
                      color: "#566079",
                      lineHeight: 1.65,
                      fontWeight: 500,
                      borderTop: "1px solid #f4eef9",
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
