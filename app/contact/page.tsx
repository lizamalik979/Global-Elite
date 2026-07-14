import type { Metadata } from "next";
import ContactPage from "../components/contactpage";

export const metadata: Metadata = {
  title: "Contact Us — Global Elite",
  description:
    "Talk to Global Elite's legalization experts — request a quote or ask a question by phone, WhatsApp or email. We typically reply within 15 minutes.",
};

export default function Contact() {
  return <ContactPage />;
}
