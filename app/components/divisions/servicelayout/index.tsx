"use client";

import styles from "./servicelayout.module.css";
import type { ServiceConfig } from "./types";
import type { PackagesConfig } from "../../tourpackages/data";
import ServiceLayoutHero from "./ServiceLayoutHero";
import ServiceLayoutToc from "./ServiceLayoutToc";
import ServiceLayoutArticle, { packageInjectIndex } from "./ServiceLayoutArticle";

export type { ServiceConfig } from "./types";

// Generic "service page" shell shared by every division page so they all match
// the Documentation service page: breadcrumb hero + lead form, sticky TOC and a
// sectioned article body. Content is supplied per division via `config`.
export default function ServiceLayout({
  config,
  leadSource,
  packages = [],
}: {
  config: ServiceConfig;
  /** Overrides the "Submitted From" recorded on leads (defaults to the badge) */
  leadSource?: string;
  /** CMS package blocks targeted at this page, injected after the 2nd section */
  packages?: PackagesConfig[];
}) {
  const sectionItems = config.sections.map((s) => ({ id: s.id, label: s.label }));
  // The TOC mirrors the article order, so the package entries sit at exactly
  // the point the blocks are injected.
  const injectAt = packageInjectIndex(config.sections.length);
  const tocItems = [
    ...sectionItems.slice(0, injectAt),
    ...packages.map((p) => ({ id: p.anchorId, label: p.tocLabel })),
    ...sectionItems.slice(injectAt),
  ];

  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <ServiceLayoutHero config={config} leadSource={leadSource} />
      <section style={{ background: "#fff", padding: "0 28px 90px" }}>
        <div className={styles.bodyGrid}>
          <ServiceLayoutToc items={tocItems} helpPhone={config.helpPhone} />
          <ServiceLayoutArticle
            sections={config.sections}
            packages={packages}
            leadSource={leadSource}
          />
        </div>
      </section>
    </div>
  );
}
