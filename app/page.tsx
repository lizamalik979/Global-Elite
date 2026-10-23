import { SITE_DESCRIPTION, SITE_TITLE } from "./layout";
import { homePageSchema } from "./lib/schema";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import GlobalReach from "./components/GlobalReach";
import Countries from "./components/Countries";
import Pricing from "./components/Pricing";
import Departments from "./components/Departments";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Structured data — Organization, WebSite, WebPage and the six services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema(SITE_TITLE, SITE_DESCRIPTION)),
        }}
      />
      <Hero />
      <Stats />
      <Services />
      <GlobalReach />
      <Countries />
      <Pricing />
      <Departments />
      <Process />
      <CTA />
      <Testimonials />
      <Insights />
    </main>
  );
}
