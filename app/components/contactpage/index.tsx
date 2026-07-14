import ContactHero from "./ContactHero";
import InquiryHub from "./InquiryHub";
import ContactAside from "./ContactAside";
import ContactFaq from "./ContactFaq";
import styles from "./contactpage.module.css";

// Contact Us page. The global Header and Footer are provided by the root
// layout, so this only renders the page body: hero + split inquiry/support
// section + FAQ.
export default function ContactPage() {
  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <ContactHero />

      {/* split main — pulled up over the hero */}
      <section style={{ background: "#F7F3FA", padding: "0 28px 84px" }}>
        <div className={styles.splitGrid}>
          <InquiryHub />
          <ContactAside />
        </div>
      </section>

      <ContactFaq />
    </div>
  );
}
