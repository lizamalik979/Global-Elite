// Fallback content for the Contact page — used only when the CMS is
// unreachable or the page hasn't been created in the dashboard yet. Mirrors
// the CMS ContactPageContent shape (icons as string names, via ./iconmap).

import type { ContactPageContent } from "../../lib/cms";

/**
 * Crash protection: merge whatever the API returned with the fallback,
 * section by section. Even a partial or malformed document renders — any
 * missing field silently falls back to the built-in copy.
 */
export function normalizeContactContent(raw: unknown): ContactPageContent {
  const d = fallbackContactContent;
  if (!raw || typeof raw !== "object") return d;
  const c = raw as Partial<ContactPageContent>;
  return {
    hero: { ...d.hero, ...(c.hero || {}) },
    inquiry: {
      ...d.inquiry,
      ...(c.inquiry || {}),
      phoneCodes: Array.isArray(c.inquiry?.phoneCodes) ? c.inquiry.phoneCodes : d.inquiry.phoneCodes,
      documentTypes: Array.isArray(c.inquiry?.documentTypes)
        ? c.inquiry.documentTypes
        : d.inquiry.documentTypes,
      destinations: Array.isArray(c.inquiry?.destinations)
        ? c.inquiry.destinations
        : d.inquiry.destinations,
    },
    aside: {
      ...d.aside,
      ...(c.aside || {}),
      whatsapp: { ...d.aside.whatsapp, ...(c.aside?.whatsapp || {}) },
      call: { ...d.aside.call, ...(c.aside?.call || {}) },
      office: { ...d.aside.office, ...(c.aside?.office || {}) },
      trust: Array.isArray(c.aside?.trust) ? c.aside.trust : d.aside.trust,
    },
    faq: {
      ...d.faq,
      ...(c.faq || {}),
      items: Array.isArray(c.faq?.items) ? c.faq.items : d.faq.items,
    },
  };
}

export const CONTACT_META = {
  title: "Contact Us — Global Elite",
  description:
    "Talk to Global Elite's legalization experts — request a quote or ask a question by phone, WhatsApp or email. We typically reply within 15 minutes.",
};

export const fallbackContactContent: ContactPageContent = {
  hero: {
    badge: "WE'RE HERE TO HELP",
    titleLead: "Let's legalize",
    titleAccent: "your journey",
    subtitle:
      "Our legal verification experts typically reply within *15 minutes* during business hours — by phone, WhatsApp or email.",
  },
  inquiry: {
    tabQuote: "Request a Quote",
    tabInquiry: "General Inquiry",
    quoteHeading: "Get pricing for your documents",
    quoteIntro:
      "Tell us what you need legalized — we'll reply with a fixed, all-inclusive quote.",
    phoneCodes: ["+91", "+971", "+966", "+1", "+44"],
    documentTypes: [
      "Degree Certificate",
      "Birth Certificate",
      "Marriage Certificate",
      "PCC",
      "Commercial Documents",
      "Other",
    ],
    destinations: ["UAE", "Saudi Arabia", "Germany", "France", "Australia", "USA", "UK", "Other"],
    inquiryHeading: "Ask us anything",
    inquiryIntro:
      "Questions about a service, partnership or an existing order — we'll route it to the right desk.",
    ctaQuote: "Get Free Consultation & Pricing",
    ctaInquiry: "Send Message",
    privacyNote:
      "Your personal data and document details are protected by enterprise-grade encryption.",
    successHeading: "Message received!",
    successText: "An expert will get back to you within 15 minutes during business hours.",
    successButton: "Send another message",
  },
  aside: {
    whatsapp: {
      title: "Chat on WhatsApp",
      sub: "Fastest • +91 88664 73857",
      url: "https://wa.me/918866473857",
    },
    call: {
      title: "Call Support Hotline",
      sub: "Mon–Sat • +91 88667 87599",
      url: "tel:+918866787599",
    },
    trustKicker: "WHY CLIENTS TRUST US",
    trust: [
      { icon: "BadgeCheck", value: "MEA", label: "Registered Partner" },
      { icon: "Gauge", value: "99.7%", label: "Success Rate" },
      { icon: "Files", value: "25K+", label: "Documents Legalized" },
    ],
    office: {
      name: "Global Elite — Head Office",
      address: "Level 4, Connaught Place Central Desk,\nNew Delhi 110001, India",
      hours: "Mon–Sat, 9:30 AM – 6:30 PM IST",
      mapEmbedUrl:
        "https://www.openstreetmap.org/export/embed.html?bbox=77.2065%2C28.6255%2C77.2270%2C28.6380&layer=mapnik&marker=28.6315%2C77.2167",
      directionsUrl:
        "https://www.openstreetmap.org/?mlat=28.6315&mlon=77.2167#map=16/28.6315/77.2167",
    },
  },
  faq: {
    kicker: "BEFORE YOU REACH OUT",
    heading: "Quick answers",
    items: [
      {
        q: "Can I drop off my documents in person?",
        a: "Yes — you can hand over documents at any of our four offices (New Delhi, Mumbai, Hyderabad, Vizag) during business hours. Most clients prefer our free insured doorstep pickup instead.",
      },
      {
        q: "How do I track an existing order?",
        a: "Use the tracking reference from your pickup receipt — enter it on the Track Order page, or send it to us on WhatsApp for an instant status update at every checkpoint.",
      },
      {
        q: "What are your operating hours?",
        a: "Monday to Saturday, 9:30 AM – 6:30 PM IST. WhatsApp messages received after hours are answered first thing the next business day.",
      },
      {
        q: "Do you serve cities without a branch office?",
        a: "Yes — our insured courier network covers all of India. Documents from any city are collected, processed through the correct state and MEA desks, and returned to your door.",
      },
    ],
  },
};
