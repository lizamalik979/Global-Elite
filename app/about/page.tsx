import type { Metadata } from "next";
import AboutPage from "../components/aboutpage";
import { ABOUT_META, normalizeAboutContent } from "../components/aboutpage/data";
import { getAboutPage } from "../lib/cms";

// Content is managed in the CMS (Dashboard → About Us). The built-in fallback
// renders when the CMS is unreachable or the page hasn't been saved yet, and
// any missing field in a fetched document falls back individually — the page
// can never crash on bad data.

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAboutPage();
  return {
    title: page?.metaTitle || ABOUT_META.title,
    description: page?.metaDescription || ABOUT_META.description,
  };
}

export default async function About() {
  const page = await getAboutPage();
  return <AboutPage content={normalizeAboutContent(page?.content)} />;
}
