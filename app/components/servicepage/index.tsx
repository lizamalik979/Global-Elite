import ServiceHero from "./ServiceHero";
import ServiceBody from "./ServiceBody";

// Service detail page (e.g. Degree Certificate Apostille). The global Header
// and Footer are provided by the root layout, so this only renders the page
// body: hero + two-column content.
export default function ServicePage() {
  return (
    <div style={{ background: "#fff", color: "#16265C" }}>
      <ServiceHero />
      <ServiceBody />
    </div>
  );
}
