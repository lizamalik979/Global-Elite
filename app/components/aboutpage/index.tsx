import AboutHero from "./AboutHero";
import AboutSections from "./AboutSections";
import type { AboutPageContent } from "../../lib/cms";

// About Us page. The global Header and Footer are provided by the root layout,
// so this only renders the page body: editorial hero (with lead form) + the
// metrics, pillars, accreditations, story, team and founder sections.
// All copy comes from the CMS About document (with a built-in fallback).
export default function AboutPage({ content }: { content: AboutPageContent }) {
  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <AboutHero hero={content.hero} />
      <AboutSections content={content} />
    </div>
  );
}
