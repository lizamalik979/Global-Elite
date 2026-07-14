import type { ComponentType, SVGProps } from "react";
import {
  Building2,
  Globe2,
  Landmark,
  Lock,
  Scale,
  ShieldCheck,
  Truck,
} from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const metrics = [
  { value: "15", suffix: "+", label: "Years", sub: "Corporate track record" },
  { value: "120", suffix: "+", label: "Countries", sub: "Global Hague networks" },
  { value: "500K", suffix: "+", label: "Documents", sub: "Successfully authenticated" },
  { value: "0", suffix: "%", label: "Margin", sub: "Error-tolerance compliance" },
];

export const pillars: { icon: Icon; title: string; points: string[] }[] = [
  {
    icon: Scale,
    title: "Strict Legal Compliance",
    points: [
      "Zero-exception document screening",
      "Notary verification to international statutory guidelines",
      "Continuous legal & policy updates",
    ],
  },
  {
    icon: Truck,
    title: "Tamper-Proof Logistics",
    points: [
      "Insured, 24/7 tracked transit pipelines",
      "Secure document vaults under CCTV",
      "Strict chain-of-custody handoffs",
    ],
  },
  {
    icon: Lock,
    title: "Absolute Confidentiality",
    points: [
      "Corporate NDA protections",
      "Encrypted client-data infrastructure",
      "Strict citizen privacy management",
    ],
  },
];

export const accreditations: { icon: Icon; title: string; sub: string }[] = [
  { icon: ShieldCheck, title: "ISO 27001", sub: "Information Security" },
  { icon: Landmark, title: "MEA Outward Desk", sub: "Direct Processing" },
  { icon: Building2, title: "Chamber of Commerce", sub: "Compliance Member" },
  { icon: Globe2, title: "Hague Convention", sub: "Apostille Framework" },
];

export const timeline = [
  {
    year: "2009",
    title: "The first desk opens",
    desc: "Founded in Connaught Place to simplify document attestation for a handful of local clients.",
  },
  {
    year: "2014",
    title: "Direct MEA integration",
    desc: "Became a registered partner of the Ministry of External Affairs outward processing desk.",
  },
  {
    year: "2019",
    title: "250,000 documents",
    desc: "Crossed a quarter-million authenticated documents with regional hubs in four cities.",
  },
  {
    year: "2024",
    title: "120+ country network",
    desc: "Today, a global consular network legalizing documents for over 120 destinations.",
    dark: true,
  },
];

export const team = [
  {
    name: "Meera Iyer",
    role: "Head of MEA Operations",
    desc: "Oversees direct ministry submissions and apostille turnaround across all hubs.",
    photo: "/assets/about-team-1.jpg",
  },
  {
    name: "Rajat Sehgal",
    role: "Director, Consular Affairs",
    desc: "Leads embassy and non-Hague attestation across the UAE, KSA and Qatar desks.",
    photo: "/assets/about-team-2.jpg",
  },
  {
    name: "Fatima Sheikh",
    role: "Head of Client Success",
    desc: "Your single point of contact, keeping every case transparent from pickup to return.",
    photo: "/assets/about-team-3.jpg",
  },
  {
    name: "Arjun Rao",
    role: "Head of Secure Logistics",
    desc: "Runs the insured, CCTV-tracked transit pipelines and chain-of-custody vaults.",
    photo: "/assets/about-team-4.jpg",
  },
];
