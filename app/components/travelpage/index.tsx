"use client";

import ServiceLayout, {
  type ServiceConfig,
} from "../divisions/servicelayout";
import {
  BadgeCheck,
  BedDouble,
  Briefcase,
  Compass,
  Globe,
  GraduationCap,
  MapPin,
  Plane,
  ShieldCheck,
} from "../divisions/icons";

const config: ServiceConfig = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Divisions", href: "/travel" },
    { label: "Travel & Tourism" },
  ],
  badge: "TRAVEL & TOURISM",
  badgeIcon: Plane,
  titleLead: "Explore the world with",
  titleAccent: "complete confidence",
  subtitle:
    "Global Elite makes international travel simple, seamless and memorable — from destination selection to travel documentation. Personalized solutions for individuals, families, students, business and corporate travellers.",
  chips: [
    { icon: Globe, title: "120+", sub: "Global destinations" },
    { icon: ShieldCheck, title: "End-to-End", sub: "Full trip support" },
    { icon: BadgeCheck, title: "Visa", sub: "Documentation help" },
  ],
  formTitle: "Plan your trip",
  formSubtitle:
    "Share your details and our travel expert will call you back within one business hour.",
  formCountries: [
    "Europe",
    "Asia",
    "Middle East",
    "Australia & New Zealand",
    "USA & Canada",
    "Africa",
    "Southeast Asia",
    "Other",
  ],
  formCountryLabel: "Preferred Region",
  sections: [
    {
      id: "overview",
      label: "Overview",
      heading: "Overview",
      kind: "intro",
      paragraphs: [
        "At Global Elite, we make international travel simple, seamless and memorable. Our expert travel assistance helps individuals, families, students, business travellers and corporate clients plan their global journeys with complete support — from destination selection to travel documentation.",
        "Whether you are planning a relaxing holiday, a business trip, a family vacation or an international experience, we provide personalized travel solutions designed around your requirements, budget and preferences.",
      ],
      stats: [
        { icon: Globe, value: "120+", label: "Destinations covered" },
        { icon: ShieldCheck, value: "End-to-end", label: "Travel assistance" },
        { icon: BadgeCheck, value: "Visa", label: "Documentation support" },
      ],
    },
    {
      id: "services",
      label: "Our Services",
      heading: "Our international travel services",
      kind: "cards",
      intro:
        "Whether it's a relaxing holiday, a business trip or a study tour, we plan every detail for a hassle-free journey.",
      cards: [
        {
          icon: Plane,
          title: "International Holiday Packages",
          points: [
            "Sightseeing tours & family vacations",
            "Honeymoon & luxury experiences",
            "Adventure & cultural heritage tours",
            "Group travel packages",
          ],
        },
        {
          icon: Compass,
          title: "Customized Travel Planning",
          points: [
            "Itineraries by purpose & duration",
            "Budget & destination tailored",
            "Accommodation preferences",
            "Curated local experiences",
          ],
        },
        {
          icon: BadgeCheck,
          title: "Visa & Documentation",
          points: [
            "Tourist & business visa assistance",
            "Student travel documentation",
            "Travel insurance guidance",
            "Embassy appointment guidance",
          ],
        },
        {
          icon: BedDouble,
          title: "Flight & Accommodation",
          points: [
            "International flight bookings",
            "Hotel reservations",
            "Airport transfers",
            "Local transportation",
          ],
        },
        {
          icon: Briefcase,
          title: "Corporate & Business Travel",
          points: [
            "Business travel planning",
            "International meeting arrangements",
            "Executive travel solutions",
            "Group business travel management",
          ],
        },
        {
          icon: GraduationCap,
          title: "Student & Educational Travel",
          points: [
            "Education travel assistance",
            "University visit programs",
            "Study tour planning",
            "Cultural exchange support",
          ],
        },
      ],
    },
    {
      id: "destinations",
      label: "Destinations",
      heading: "Popular destinations across the globe",
      kind: "chips",
      intro:
        "We help you explore breathtaking destinations across all major regions of the world.",
      chipIcon: MapPin,
      chips: [
        "Europe",
        "Asia",
        "Middle East",
        "Australia & New Zealand",
        "USA & Canada",
        "Africa",
        "Southeast Asia",
      ],
      note: "Visa approval remains subject to embassy and immigration authority decisions.",
    },
    {
      id: "process",
      label: "How It Works",
      heading: "How it works",
      kind: "steps",
      intro: "A simple, guided process from first enquiry to a memorable trip.",
      steps: [
        {
          title: "Share your travel plans",
          text: "Tell us your destination, dates, budget and preferences — we listen first.",
        },
        {
          title: "Get a tailored itinerary",
          text: "Our experts craft a personalized plan covering flights, stays and experiences.",
        },
        {
          title: "Documentation & booking",
          text: "We assist with visa documentation, bookings and travel insurance.",
        },
        {
          title: "Travel with confidence",
          text: "Enjoy your journey with end-to-end support before and during your trip.",
        },
      ],
    },
    {
      id: "why",
      label: "Why Choose Us",
      heading: "Why choose Global Elite",
      kind: "checklist",
      items: [
        "Personalized travel solutions",
        "Professional documentation support",
        "Transparent communication",
        "End-to-end travel assistance",
        "Customized itineraries",
        "Customer-focused service approach",
      ],
    },
    {
      id: "faq",
      label: "FAQs",
      heading: "Frequently asked questions",
      kind: "faq",
      faqs: [
        {
          q: "Do you guarantee visa approval?",
          a: "No. We provide documentation and appointment guidance, but visa approval remains subject to the embassy and immigration authority's decision.",
        },
        {
          q: "Can you plan a fully customized trip?",
          a: "Yes — every itinerary is built around your purpose, duration, budget, preferred destinations and the local experiences you want.",
        },
        {
          q: "Do you handle corporate and group travel?",
          a: "Absolutely. We manage business travel, international meetings, executive travel and group business travel end-to-end.",
        },
        {
          q: "What support do students get?",
          a: "We assist with education travel, university visit programs, study tours and cultural exchange travel support.",
        },
      ],
    },
  ],
};

export default function TravelPage() {
  return <ServiceLayout config={config} />;
}
