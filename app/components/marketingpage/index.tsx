"use client";

import ServiceLayout, {
  type ServiceConfig,
} from "../divisions/servicelayout";
import {
  BarChart,
  Bot,
  Globe,
  Megaphone,
  Rocket,
  Sparkles,
  Target,
} from "../divisions/icons";

const config: ServiceConfig = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Divisions", href: "/marketing" },
    { label: "Marketing & AI" },
  ],
  badge: "MARKETING & AI",
  badgeIcon: Sparkles,
  titleLead: "Transforming businesses through",
  titleAccent: "AI-driven marketing",
  subtitle:
    "We combine advanced Artificial Intelligence, digital marketing expertise and global advertising strategies to help businesses build stronger brands, reach international customers and achieve sustainable growth.",
  chips: [
    { icon: Bot, title: "AI-Powered", sub: "Automation & insights" },
    { icon: Globe, title: "Global", sub: "Audience reach" },
    { icon: Target, title: "Results", sub: "Data-driven growth" },
  ],
  formTitle: "Grow your business",
  formSubtitle:
    "Share your details and our marketing expert will call you back within one business hour.",
  formCountries: [
    "Travel & Tourism",
    "Education & Training",
    "Healthcare",
    "Real Estate",
    "Startup / SME",
    "E-commerce",
    "Professional Services",
    "Other",
  ],
  formCountryLabel: "Your Industry",
  sections: [
    {
      id: "overview",
      label: "Overview",
      heading: "Overview",
      kind: "intro",
      paragraphs: [
        "At Global Elite, we combine advanced Artificial Intelligence, digital marketing expertise and global advertising strategies to help businesses build stronger brands, reach international customers and achieve sustainable growth.",
        "Our AI-powered marketing solutions help organizations understand customer behaviour, automate marketing processes, create engaging content and optimize advertising performance across global markets.",
      ],
      stats: [
        { icon: Bot, value: "AI-first", label: "Marketing automation" },
        { icon: BarChart, value: "Data-driven", label: "Decision making" },
        { icon: Globe, value: "Global", label: "Audience reach" },
      ],
    },
    {
      id: "services",
      label: "Our Services",
      heading: "Our AI-powered marketing services",
      kind: "cards",
      intro:
        "From automation to analytics and creative — intelligent marketing across every global market.",
      cards: [
        {
          icon: Bot,
          title: "AI Marketing Automation",
          points: [
            "AI-powered marketing workflows",
            "Automated customer engagement",
            "AI chatbots & virtual assistants",
            "Lead nurturing & CRM",
          ],
        },
        {
          icon: Globe,
          title: "Global Digital Marketing",
          points: [
            "Global brand promotion",
            "Social media & SEO / SEM",
            "Online advertising campaigns",
            "Digital reputation management",
          ],
        },
        {
          icon: BarChart,
          title: "Insights & Analytics",
          points: [
            "Customer preferences & trends",
            "Buying behaviour analysis",
            "Campaign performance tracking",
            "Customer segmentation",
          ],
        },
        {
          icon: Sparkles,
          title: "Content & Creative",
          points: [
            "Marketing content & social posts",
            "Ad copywriting & blogs",
            "Promotional videos",
            "AI-assisted design & storytelling",
          ],
        },
        {
          icon: Megaphone,
          title: "AI-Powered Advertising",
          points: [
            "Intelligent campaign planning",
            "Audience analysis",
            "Conversion optimization",
            "Automated campaign insights",
          ],
        },
        {
          icon: Rocket,
          title: "Business Growth",
          points: [
            "Digital presence development",
            "International market research",
            "Online lead generation",
            "Customer acquisition strategies",
          ],
        },
      ],
    },
    {
      id: "industries",
      label: "Industries",
      heading: "Industries we serve",
      kind: "chips",
      intro:
        "Our AI-powered marketing works across a wide range of sectors.",
      chipIcon: Target,
      chips: [
        "Travel & Tourism",
        "Education & Training",
        "Healthcare & Medical",
        "Real Estate",
        "Startups & SMEs",
        "E-commerce",
        "Professional Services",
        "Export & Import",
      ],
    },
    {
      id: "process",
      label: "How It Works",
      heading: "How it works",
      kind: "steps",
      intro: "A clear, data-driven path from strategy to measurable results.",
      steps: [
        {
          title: "Discovery & strategy",
          text: "We analyse your business, audience and goals to shape an AI-driven marketing strategy.",
        },
        {
          title: "Build & automate",
          text: "We set up campaigns, automation, content and advertising tailored to your market.",
        },
        {
          title: "Optimize with AI",
          text: "AI-driven analytics track performance and continuously optimize your campaigns.",
        },
        {
          title: "Scale & grow",
          text: "We expand what works to grow reach, leads and revenue across global markets.",
        },
      ],
    },
    {
      id: "why",
      label: "Why Choose Us",
      heading: "Why choose Global Elite",
      kind: "checklist",
      items: [
        "AI-powered marketing strategies",
        "Global audience reach",
        "Data-driven decision making",
        "Creative & technology-based solutions",
        "Customized business growth plans",
        "Focus on measurable results",
      ],
    },
    {
      id: "faq",
      label: "FAQs",
      heading: "Frequently asked questions",
      kind: "faq",
      faqs: [
        {
          q: "What makes your marketing 'AI-powered'?",
          a: "We use AI across automation, customer insights, content creation and advertising — so campaigns are smarter, more personalized and continuously optimized.",
        },
        {
          q: "Do you work with small businesses and startups?",
          a: "Yes. We serve startups and SMEs alongside larger organizations, with customized growth plans for each.",
        },
        {
          q: "Can you handle international campaigns?",
          a: "Absolutely — international audience targeting and global brand promotion are core to what we do.",
        },
        {
          q: "How do you measure success?",
          a: "Through data-driven analytics: campaign performance, conversions, lead generation and other measurable business outcomes.",
        },
      ],
    },
  ],
};

export default function MarketingPage() {
  return <ServiceLayout config={config} />;
}
