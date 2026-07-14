import type { Metadata } from "next";
import AboutPage from "../components/aboutpage";

export const metadata: Metadata = {
  title: "About Us — Global Elite",
  description:
    "Global Elite is a premium cross-border legal-logistics desk operating alongside the Ministry of External Affairs — 15+ years, 120+ countries, absolute integrity.",
};

export default function About() {
  return <AboutPage />;
}
