import AboutHero from "./AboutHero";
import AboutSections from "./AboutSections";

// About Us page. The global Header and Footer are provided by the root layout,
// so this only renders the page body: editorial hero (with lead form) + the
// metrics, pillars, accreditations, story, team and founder sections.
export default function AboutPage() {
  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <AboutHero />
      <AboutSections />
    </div>
  );
}
