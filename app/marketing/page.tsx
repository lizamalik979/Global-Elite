import type { Metadata } from "next";
import MarketingPage from "../components/marketingpage";

export const metadata: Metadata = {
  title: "Marketing & AI — Global Elite",
  description:
    "AI-powered marketing automation, global digital marketing, customer analytics, content and advertising — Global Elite's Marketing & AI division.",
};

export default function Marketing() {
  return <MarketingPage />;
}
