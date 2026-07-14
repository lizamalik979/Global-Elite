import type { Metadata } from "next";
import ServicePage from "../components/servicepage";

export const metadata: Metadata = {
  title: "Degree Certificate Apostille — Global Elite",
  description:
    "MEA-attested Hague Apostille for your degree certificate — fully tracked, doorstep pickup, and accepted across 120+ countries.",
};

export default function Services() {
  return <ServicePage />;
}
