import type { Metadata } from "next";
import ContactPage from "../components/contactpage";
import { CONTACT_META, normalizeContactContent } from "../components/contactpage/data";
import { getContactPage } from "../lib/cms";

// Content is managed in the CMS (Dashboard → Contact). The built-in fallback
// renders when the CMS is unreachable or the page hasn't been created yet, and
// any missing field in a fetched document falls back individually — the page
// can never crash on bad data.

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage();
  return {
    title: page?.metaTitle || CONTACT_META.title,
    description: page?.metaDescription || CONTACT_META.description,
  };
}

export default async function Contact() {
  const page = await getContactPage();
  return <ContactPage content={normalizeContactContent(page?.content)} />;
}
