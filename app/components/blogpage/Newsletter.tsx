import styles from "./blogpage.module.css";
import { Mail } from "./icons";

export default function Newsletter() {
  return (
    <section style={{ background: "#F7F3FA", padding: "0 28px 80px" }}>
      <div className={styles.newsletterCard}>
        <div
          style={{
            position: "absolute",
            top: -50,
            right: 80,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(229,169,58,.1)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 480 }}>
          <h2
            style={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-.02em",
              color: "#fff",
              lineHeight: 1.18,
            }}
          >
            Get apostille tips in your inbox
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#c9b6e8",
              marginTop: 10,
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            One concise email a month — country updates, document checklists and
            process changes.
          </p>
        </div>
        <form className={styles.newsletterForm}>
          <Mail
            width={18}
            height={18}
            style={{ color: "#94a3b8", margin: "0 8px 0 12px" }}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="you@email.com"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontFamily: "inherit",
              fontSize: 14,
              color: "#16265C",
              background: "transparent",
            }}
          />
          <button
            type="submit"
            className={styles.btn}
            style={{
              background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
              color: "#fff",
              border: "none",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: 14,
              padding: "11px 20px",
              borderRadius: 10,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
