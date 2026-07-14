import SidebarToc from "./SidebarToc";
import ServiceArticle from "./ServiceArticle";
import styles from "./servicepage.module.css";

// Two-column body: sticky scroll-spy TOC + the article content.
export default function ServiceBody() {
  return (
    <section style={{ background: "#fff", padding: "0 28px 90px" }}>
      <div className={styles.bodyGrid}>
        <SidebarToc />
        <ServiceArticle />
      </div>
    </section>
  );
}
