"use client";

import ServiceLayout, {
  type ServiceConfig,
} from "../divisions/servicelayout";
import { BarChart, Bot, Cpu, ShieldCheck } from "../divisions/icons";

const config: ServiceConfig = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Divisions", href: "/technology" },
    { label: "AI & Technology" },
  ],
  badge: "AI & TECHNOLOGY",
  badgeIcon: Cpu,
  titleLead: "Smarter business with",
  titleAccent: "AI & automation",
  subtitle:
    "Global Elite helps organizations adopt AI, automate operations and unlock insights from their data — practical technology solutions that drive real business outcomes.",
  chips: [
    { icon: Bot, title: "AI Training", sub: "Team enablement" },
    { icon: Cpu, title: "Automation", sub: "Efficient operations" },
    { icon: BarChart, title: "Analytics", sub: "Actionable insights" },
  ],
  formTitle: "Enquire now",
  formSubtitle:
    "Share your details and our technology team will call you back within one business hour.",
  formCountries: [
    "AI Training",
    "Business Automation",
    "Data Analytics",
    "Not sure yet",
  ],
  formCountryLabel: "I'm interested in",
  sections: [
    {
      id: "overview",
      label: "Overview",
      heading: "Overview",
      kind: "intro",
      paragraphs: [
        "Global Elite's AI & Technology division helps organizations adopt AI, automate operations and unlock insights from their data.",
        "We deliver practical technology solutions — training, automation and analytics — designed to create real, measurable business outcomes.",
      ],
      stats: [
        { icon: Bot, value: "AI", label: "Training & enablement" },
        { icon: Cpu, value: "Automation", label: "Operational efficiency" },
        { icon: ShieldCheck, value: "Analytics", label: "Data-driven insight" },
      ],
    },
    {
      id: "services",
      label: "Our Services",
      heading: "AI & technology services",
      kind: "cards",
      intro:
        "A growing suite of AI and automation services for modern businesses.",
      cards: [
        {
          icon: Bot,
          title: "AI Training",
          points: [
            "AI awareness & upskilling programs",
            "Team enablement workshops",
            "Practical AI tool adoption",
            "Custom training tracks",
          ],
        },
        {
          icon: Cpu,
          title: "Business Automation",
          points: [
            "Workflow & process automation",
            "Repetitive-task elimination",
            "System & tool integration",
            "Operational efficiency gains",
          ],
        },
        {
          icon: BarChart,
          title: "Data Analytics Services",
          points: [
            "Business intelligence dashboards",
            "Data collection & processing",
            "Actionable performance insights",
            "Reporting & visualization",
          ],
        },
      ],
    },
    {
      id: "why",
      label: "Why Choose Us",
      heading: "Why choose Global Elite",
      kind: "checklist",
      items: [
        "Practical, outcome-focused solutions",
        "Experienced technology team",
        "Tailored to your operations",
        "Transparent communication",
        "Scalable implementations",
        "Ongoing support",
      ],
    },
    {
      id: "faq",
      label: "FAQs",
      heading: "Frequently asked questions",
      kind: "faq",
      faqs: [
        {
          q: "Do I need technical staff to work with you?",
          a: "No. We meet you where you are — from AI awareness training to hands-on automation and analytics, with support throughout.",
        },
        {
          q: "What can you automate?",
          a: "Workflows and repetitive tasks, plus system and tool integrations that improve operational efficiency.",
        },
        {
          q: "How does the analytics service work?",
          a: "We collect and process your data, then deliver business intelligence dashboards and actionable performance insights.",
        },
      ],
    },
  ],
};

export default function TechnologyPage() {
  return <ServiceLayout config={config} />;
}
