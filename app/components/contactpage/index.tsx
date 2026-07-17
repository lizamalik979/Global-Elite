import ContactHero from "./ContactHero";
import InquiryHub from "./InquiryHub";
import ContactAside from "./ContactAside";
import ContactFaq from "./ContactFaq";
import styles from "./contactpage.module.css";
import type { ContactPageContent } from "../../lib/cms";

// Contact Us page. The global Header and Footer are provided by the root
// layout, so this only renders the page body: hero + split inquiry/support
// section + FAQ. All copy comes from the CMS Contact document (with fallback).
export default function ContactPage({ content }: { content: ContactPageContent }) {
  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <ContactHero hero={content.hero} />

      {/* split main — pulled up over the hero */}
      <section style={{ background: "#F7F3FA", padding: "0 28px 84px" }}>
        <div className={styles.splitGrid}>
          <InquiryHub inquiry={content.inquiry} />
          <ContactAside aside={content.aside} />
        </div>
      </section>

      <ContactFaq faq={content.faq} />
    </div>
  );
}
