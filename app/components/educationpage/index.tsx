"use client";

import ServiceLayout, {
  type ServiceConfig,
} from "../divisions/servicelayout";
import {
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Globe,
  ShieldCheck,
} from "../divisions/icons";

const config: ServiceConfig = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Divisions", href: "/education" },
    { label: "Education & Career" },
  ],
  badge: "EDUCATION & CAREER",
  badgeIcon: GraduationCap,
  titleLead: "Learn, grow and build",
  titleAccent: "a global career",
  subtitle:
    "Global Elite supports students and professionals with training, overseas education guidance and career services — helping you take the next step across borders with confidence.",
  chips: [
    { icon: GraduationCap, title: "Overseas", sub: "Education support" },
    { icon: BadgeCheck, title: "Training", sub: "Skill development" },
    { icon: Briefcase, title: "Careers", sub: "Job-readiness" },
  ],
  formTitle: "Enquire now",
  formSubtitle:
    "Share your details and our education advisor will call you back within one business hour.",
  formCountries: [
    "Overseas Education",
    "Training & Skills",
    "Career Services",
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
        "Global Elite's Education & Career division helps students and professionals reach their goals — from studying abroad to building international, future-ready careers.",
        "We guide you through training, overseas education and career services with clear, transparent, personalized support at every step.",
      ],
      stats: [
        { icon: Globe, value: "Overseas", label: "Education guidance" },
        { icon: BadgeCheck, value: "Training", label: "Skill development" },
        { icon: ShieldCheck, value: "Careers", label: "Job-ready support" },
      ],
    },
    {
      id: "services",
      label: "Our Services",
      heading: "Education & career services",
      kind: "cards",
      intro:
        "A growing set of programs to help you study, upskill and advance internationally.",
      cards: [
        {
          icon: GraduationCap,
          title: "Overseas Education Support",
          points: [
            "University shortlisting & guidance",
            "Application & admission support",
            "Study-abroad documentation",
            "Country & course counselling",
          ],
        },
        {
          icon: BadgeCheck,
          title: "Training & Skill Development",
          points: [
            "Professional training programs",
            "Skill-building workshops",
            "Certification guidance",
            "Language & test preparation",
          ],
        },
        {
          icon: Briefcase,
          title: "Career Services",
          points: [
            "Career counselling",
            "Resume & interview preparation",
            "International job-readiness support",
            "Placement guidance",
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
        "Personalized guidance",
        "Transparent communication",
        "End-to-end support",
        "Experienced advisors",
        "Student-focused approach",
        "Global opportunities",
      ],
    },
    {
      id: "faq",
      label: "FAQs",
      heading: "Frequently asked questions",
      kind: "faq",
      faqs: [
        {
          q: "Do you help with studying abroad?",
          a: "Yes — from university shortlisting and applications to study-abroad documentation and course counselling.",
        },
        {
          q: "What training programs do you offer?",
          a: "Professional training, skill-building workshops, certification guidance and language / test preparation.",
        },
        {
          q: "Can you help with my career?",
          a: "We provide career counselling, resume and interview preparation, job-readiness support and placement guidance.",
        },
      ],
    },
  ],
};

export default function EducationPage() {
  return <ServiceLayout config={config} />;
}
