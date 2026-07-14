import type { Metadata } from "next";
import TechnologyPage from "../components/technologypage";

export const metadata: Metadata = {
  title: "AI & Technology Solutions — Global Elite",
  description:
    "AI training, business automation and data analytics services from Global Elite's AI & Technology division.",
};

export default function Technology() {
  return <TechnologyPage />;
}
