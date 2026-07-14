import styles from "./contactpage.module.css";
import {
  BadgeCheck,
  Clock,
  Files,
  Gauge,
  MapPin,
  MessageCircle,
  Navigation,
  PhoneCall,
} from "./icons";

const trust = [
  { icon: BadgeCheck, value: "MEA", label: "Registered Partner" },
  { icon: Gauge, value: "99.7%", label: "Success Rate" },
  { icon: Files, value: "25K+", label: "Documents Legalized" },
];

export default function ContactAside() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* quick-contact cards */}
      <div className={styles.quickCards}>
        <a
          href="https://wa.me/918866473857"
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
              Chat on WhatsApp
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "#1da851",
                fontWeight: 700,
                marginTop: 2,
              }}
            >
              Fastest • +91 88664 73857
            </div>
          </div>
        </a>
        <a
          href="tel:+918866787599"
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
              Call Support Hotline
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "#8E4FA0",
                fontWeight: 700,
                marginTop: 2,
              }}
            >
              Mon–Sat • +91 88667 87599
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
          WHY CLIENTS TRUST US
        </div>
        <div className={styles.trustGrid}>
          {trust.map((t) => {
            const Icon = t.icon;
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
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.2065%2C28.6255%2C77.2270%2C28.6380&layer=mapnik&marker=28.6315%2C77.2167"
            title="Global Elite Head Office — Connaught Place, New Delhi"
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
            href="https://www.openstreetmap.org/?mlat=28.6315&mlon=77.2167#map=16/28.6315/77.2167"
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
              Global Elite — Head Office
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: "#566079",
                marginTop: 5,
                lineHeight: 1.6,
              }}
            >
              Level 4, Connaught Place Central Desk,
              <br />
              New Delhi 110001, India
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
                Mon–Sat, 9:30 AM – 6:30 PM IST
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
