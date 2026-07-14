"use client";

import { useState } from "react";
import styles from "./servicepage.module.css";
import { steps } from "./data";
import { BellRing, Check, ChevronDown } from "./icons";

export default function StepAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
      {steps.map((st, i) => {
        const isOpen = open === i;
        const dark = !!st.dark;
        const Icon = st.icon;
        const numBg = dark
          ? "#16265C"
          : "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)";
        return (
          <div key={st.title} style={{ display: "flex", gap: 20 }}>
            {/* number rail */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: numBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 800,
                  color: dark ? "#E5A93A" : "#fff",
                  flexShrink: 0,
                  boxShadow: dark
                    ? "0 10px 20px -8px rgba(22,38,92,.5)"
                    : "0 10px 20px -8px rgba(142,79,160,.5)",
                }}
              >
                {i + 1}
              </span>
              <span
                style={{
                  width: 2,
                  flex: 1,
                  background: "linear-gradient(#d9c9e8,#ece2f4)",
                  margin: "8px 0",
                  display: i === steps.length - 1 ? "none" : "block",
                }}
              />
            </div>

            {/* card */}
            <div
              className={styles.step}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                flex: 1,
                marginBottom: 16,
                background: dark
                  ? "linear-gradient(150deg,#16265C,#3a2566)"
                  : "#fff",
                border: isOpen
                  ? dark
                    ? "1px solid #5B3E8E"
                    : "1.5px solid #b9a3d6"
                  : dark
                    ? "1px solid #3a2566"
                    : "1px solid #ece2f4",
                borderRadius: 16,
                padding: "20px 22px",
                cursor: "pointer",
                boxShadow: isOpen
                  ? dark
                    ? "0 18px 38px -18px rgba(22,38,92,.6)"
                    : "0 18px 38px -20px rgba(142,79,160,.4)"
                  : dark
                    ? "0 14px 30px -18px rgba(22,38,92,.5)"
                    : "0 8px 22px -18px rgba(22,38,92,.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: dark
                      ? "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)"
                      : "linear-gradient(150deg,#F4ECFA,#EBDDF4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    width={23}
                    height={23}
                    style={{ color: dark ? "#fff" : "#8E4FA0" }}
                  />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 16.5,
                        fontWeight: 800,
                        color: dark ? "#fff" : "#16265C",
                      }}
                    >
                      {st.title}
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: dark ? "#16265C" : "#8E4FA0",
                          background: dark ? "#E5A93A" : "#F4ECFA",
                          padding: "4px 10px",
                          borderRadius: 99,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {st.day}
                      </span>
                      <span
                        style={{
                          display: "inline-flex",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform .25s ease",
                        }}
                      >
                        <ChevronDown
                          width={18}
                          height={18}
                          style={{ color: dark ? "#E5A93A" : "#b9a3d6" }}
                        />
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 14.5,
                      color: dark ? "#c9b6e8" : "#64748b",
                      marginTop: 6,
                      lineHeight: 1.6,
                    }}
                  >
                    {st.desc}
                  </p>

                  {isOpen && (
                    <div
                      style={{
                        borderTop: `1px solid ${
                          dark ? "rgba(255,255,255,.15)" : "#f0ecf6"
                        }`,
                        marginTop: 16,
                        paddingTop: 16,
                      }}
                    >
                      <div className={styles.stepDetails}>
                        {st.details.map((d) => (
                          <div
                            key={d}
                            style={{
                              display: "flex",
                              gap: 9,
                              alignItems: "flex-start",
                              background: dark
                                ? "rgba(255,255,255,.08)"
                                : "#F7F3FA",
                              borderRadius: 10,
                              padding: "12px 13px",
                            }}
                          >
                            <Check
                              width={15}
                              height={15}
                              style={{
                                color: dark ? "#E5A93A" : "#8E4FA0",
                                flexShrink: 0,
                                marginTop: 2,
                              }}
                            />
                            <span
                              style={{
                                fontSize: 12.5,
                                fontWeight: 600,
                                color: dark ? "#e9def7" : "#33536b",
                                lineHeight: 1.5,
                              }}
                            >
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginTop: 13,
                        }}
                      >
                        <BellRing
                          width={14}
                          height={14}
                          style={{ color: dark ? "#E5A93A" : "#8E4FA0" }}
                        />
                        <span
                          style={{
                            fontSize: 12.5,
                            fontWeight: 700,
                            color: dark ? "#F2C66A" : "#8E4FA0",
                          }}
                        >
                          {st.note}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
