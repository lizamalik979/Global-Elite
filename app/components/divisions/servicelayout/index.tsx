"use client";

import styles from "./servicelayout.module.css";
import type { ServiceConfig } from "./types";
import ServiceLayoutHero from "./ServiceLayoutHero";
import ServiceLayoutToc from "./ServiceLayoutToc";
import ServiceLayoutArticle from "./ServiceLayoutArticle";

export type { ServiceConfig } from "./types";

// Generic "service page" shell shared by every division page so they all match
// the Documentation service page: breadcrumb hero + lead form, sticky TOC and a
// sectioned article body. Content is supplied per division via `config`.
export default function ServiceLayout({ config }: { config: ServiceConfig }) {
  const tocItems = config.sections.map((s) => ({ id: s.id, label: s.label }));

  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <ServiceLayoutHero config={config} />
      <section style={{ background: "#fff", padding: "0 28px 90px" }}>
        <div className={styles.bodyGrid}>
          <ServiceLayoutToc items={tocItems} helpPhone={config.helpPhone} />
          <ServiceLayoutArticle sections={config.sections} />
        </div>
      </section>
    </div>
  );
}
