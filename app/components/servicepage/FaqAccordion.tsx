"use client";

import { useState } from "react";
import { faqs } from "./data";
import { Plus } from "./icons";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 22,
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
                padding: "18px 20px",
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
                  padding: "14px 20px 20px",
                  fontSize: 14.5,
                  color: "#475569",
                  lineHeight: 1.65,
                  fontWeight: 500,
                  borderTop: "1px solid #f3eef9",
                }}
              >
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
