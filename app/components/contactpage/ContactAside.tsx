import styles from "./contactpage.module.css";
import { Clock, MapPin, MessageCircle, Navigation, PhoneCall } from "./icons";
import { resolveContactIcon } from "./iconmap";
import type { ContactPageContent } from "../../lib/cms";

export default function ContactAside({ aside }: { aside: ContactPageContent["aside"] }) {
  const trust = aside.trust.map((t) => ({ ...t, Icon: resolveContactIcon(t.icon) }));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* quick-contact cards */}
      <div className={styles.quickCards}>
        <a
          href={aside.whatsapp.url}
          className={styles.card}
          style={{
            background: "#fff",
            border: "1px solid #ece2f4",
            borderRadius: 16,
            padding: 20,
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxShadow: "0 10px 26px -20px rgba(22,38,92,.3)",
          }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#e9f9ef",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MessageCircle width={22} height={22} style={{ color: "#1da851" }} />
          </span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#16265C" }}>
              {aside.whatsapp.title}
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "#1da851",
                fontWeight: 700,
                marginTop: 2,
              }}
            >
              {aside.whatsapp.sub}
            </div>
          </div>
        </a>
        <a
          href={aside.call.url}
          className={styles.card}
          style={{
            background: "#fff",
            border: "1px solid #ece2f4",
            borderRadius: 16,
            padding: 20,
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxShadow: "0 10px 26px -20px rgba(22,38,92,.3)",
          }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#F4ECFA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneCall width={22} height={22} style={{ color: "#8E4FA0" }} />
          </span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#16265C" }}>
              {aside.call.title}
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "#8E4FA0",
                fontWeight: 700,
                marginTop: 2,
              }}
            >
              {aside.call.sub}
            </div>
          </div>
        </a>
      </div>

      {/* trust panel */}
      <div
        style={{
          background: "linear-gradient(150deg,#16265C,#3a2566)",
          borderRadius: 18,
          padding: 26,
          boxShadow: "0 20px 44px -24px rgba(22,38,92,.55)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: ".1em",
            color: "#E5A93A",
          }}
        >
          {aside.trustKicker}
        </div>
        <div className={styles.trustGrid}>
          {trust.map((t) => {
            const Icon = t.Icon;
            return (
              <div key={t.label}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 7 }}
                >
                  <Icon width={17} height={17} style={{ color: "#E5A93A" }} />
                  <span
                    style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}
                  >
                    {t.value}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: "#c9b6e8",
                    fontWeight: 600,
                    marginTop: 3,
                  }}
                >
                  {t.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* office map */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #ece2f4",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 10px 26px -20px rgba(22,38,92,.3)",
        }}
      >
        <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
          <iframe
            src={aside.office.mapEmbedUrl}
            title={aside.office.name}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
              display: "block",
            }}
          />
          <a
            href={aside.office.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              right: 12,
              bottom: 12,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#fff",
              border: "1px solid #ece2f4",
              borderRadius: 9,
              padding: "7px 12px",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 800,
              color: "#8E4FA0",
              boxShadow: "0 8px 18px -8px rgba(22,38,92,.35)",
            }}
          >
            <Navigation width={13} height={13} style={{ color: "#8E4FA0" }} />
            Get Directions
          </a>
        </div>
        <div
          style={{
            padding: "20px 24px",
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              width: 40,
              height: 40,
              borderRadius: 11,
              background: "#F4ECFA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MapPin width={20} height={20} style={{ color: "#8E4FA0" }} />
          </span>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: "#16265C" }}>
              {aside.office.name}
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: "#566079",
                marginTop: 5,
                lineHeight: 1.6,
              }}
            >
              {aside.office.address.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                marginTop: 8,
              }}
            >
              <Clock width={14} height={14} style={{ color: "#8E4FA0" }} />
              <span
                style={{ fontSize: 12.5, fontWeight: 700, color: "#8E4FA0" }}
              >
                {aside.office.hours}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
