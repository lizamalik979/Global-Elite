import type { ComponentType, SVGProps } from "react";
import {
  Building,
  Building2,
  ClipboardCheck,
  Globe2,
  IndianRupee,
  Landmark,
  Layers,
  ListChecks,
  MapPin,
  Monitor,
  Package,
  SearchCheck,
  ShieldCheck,
  Stamp,
  Truck,
  UserRound,
} from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

// Content for the "Degree Certificate Apostille" service page, ported from the
// Global Elite service design. All copy is static; the interactive behaviour
// (scroll-spy, accordions, quote form) lives in the client components.

export const sections = [
  { id: "overview", label: "Overview" },
  { id: "documents", label: "Documents Required" },
  { id: "process", label: "Step-by-Step Process" },
  { id: "flow", label: "MEA Process Flow" },
  { id: "timeline", label: "Timeline & Pricing" },
  { id: "countries", label: "Accepted Countries" },
  { id: "resources", label: "Downloadable Resources" },
  { id: "fees", label: "Fees & Charges" },
  { id: "notes", label: "Important Notes" },
  { id: "faq", label: "FAQs" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const heroChips = [
  { icon: "zap", title: "7-Day Express", sub: "Fast-track delivery" },
  { icon: "badge-check", title: "100% MEA", sub: "Govt. approved" },
  { icon: "map-pin", title: "End-to-End", sub: "Live tracking" },
] as const;

export const quoteCountries = [
  "Germany",
  "France",
  "Australia",
  "Italy",
  "USA",
  "UK",
  "Other",
];

export const overviewStats: { icon: Icon; value: string; label: string }[] = [
  { icon: MapPin, value: "5–7 days", label: "Typical turnaround" },
  { icon: Globe2, value: "120+", label: "Countries accepted" },
  { icon: ShieldCheck, value: "MEA", label: "Direct desk submission" },
];

export const documents = [
  "Original degree certificate",
  "Original mark sheets (all years)",
  "Passport copy (front & back)",
  "2 passport-size photographs",
];

export type Step = {
  icon: Icon;
  title: string;
  day: string;
  desc: string;
  details: string[];
  note: string;
  dark?: boolean;
};

export const steps: Step[] = [
  {
    icon: Package,
    title: "Document pickup & screening",
    day: "Day 1",
    desc: "We collect your originals from your doorstep and screen them against MEA requirements.",
    details: [
      "Insured courier pickup from your address",
      "Physical condition & lamination check",
      "Cross-check against MEA document norms",
    ],
    note: "You receive: pickup receipt + live tracking ID",
  },
  {
    icon: SearchCheck,
    title: "State HRD verification",
    day: "Day 2–4",
    desc: "The issuing state's Human Resource Development department authenticates your degree.",
    details: [
      "Submission at the issuing state HRD desk",
      "University verification where required",
      "Authentication signature & seal applied",
    ],
    note: "You receive: a status alert at every desk",
  },
  {
    icon: Stamp,
    title: "MEA apostille sticker",
    day: "Day 5",
    desc: "The Ministry of External Affairs affixes the Hague apostille sticker with a unique number.",
    details: [
      "Submission at the MEA branch secretariat",
      "Hague apostille sticker with unique ID",
      "Entry in the MEA e-Register for verification",
    ],
    note: "You receive: an apostille number verifiable online",
  },
  {
    icon: Truck,
    title: "Secure return delivery",
    day: "Day 6–7",
    desc: "Your apostilled degree is couriered back to you, insured and fully tracked.",
    dark: true,
    details: [
      "Insured return courier, fully tracked",
      "Doorstep delivery with OTP confirmation",
      "Digital scan archived for 12 months",
    ],
    note: "You receive: delivery OTP + a scanned copy",
  },
];

export const processHighlights: { icon: Icon; label: string }[] = [
  { icon: Layers, label: "4 stages" },
  { icon: MapPin, label: "100% tracked" },
  { icon: ShieldCheck, label: "Insured transit" },
];

// MEA e-Sanad digital flow (6 snake-grid cells).
export const esanadFlow: { icon: Icon; title: string; desc: string; dark?: boolean }[] = [
  { icon: Monitor, title: "Online Application", desc: "Visits e-Sanad website to apply" },
  { icon: IndianRupee, title: "Online Payment", desc: "Pays the fees online" },
  { icon: Landmark, title: "Data Transfer", desc: "Data made available to MEA" },
  { icon: ClipboardCheck, title: "Dispatch", desc: "Apostilled document dispatched", dark: true },
  { icon: Stamp, title: "MEA Approval", desc: "MEA digitally signs & approves" },
  { icon: Building2, title: "DIA Verification", desc: "Verified by concerned DIA/GAD" },
];

export const racRoutes = [
  { kind: "Personal", desc: "Home / General Administration Dept of State / UT" },
  { kind: "Educational", desc: "Education Dept of concerned State / UT" },
  { kind: "Commercial", desc: "Respective Chambers of Commerce" },
];

export const timelineIncludes: { icon: Icon; label: string }[] = [
  { icon: Package, label: "Doorstep Pickup" },
  { icon: SearchCheck, label: "HRD Verification" },
  { icon: Stamp, label: "MEA Apostille" },
  { icon: Truck, label: "Insured Courier" },
];

export const countryList = [
  "UAE",
  "Germany",
  "France",
  "Australia",
  "Italy",
  "Spain",
  "Netherlands",
  "Japan",
  "South Korea",
  "USA",
  "UK",
  "Portugal",
  "Switzerland",
  "Belgium",
];

export type Resource = {
  name: string;
  size: string;
  pages: string;
  icon: Icon;
  desc: string;
};

export const resources: Resource[] = [
  {
    name: "Hague Convention member countries",
    size: "41 KB",
    pages: "3 pages",
    icon: Globe2,
    desc: "Full list of the 120+ countries that accept an apostille.",
  },
  {
    name: "Degree apostille document checklist",
    size: "86 KB",
    pages: "2 pages",
    icon: ListChecks,
    desc: "Everything to prepare before you begin your application.",
  },
  {
    name: "Regional Authentication Centres (RACs)",
    size: "130 KB",
    pages: "5 pages",
    icon: MapPin,
    desc: "State-wise RAC addresses for pre-verification routing.",
  },
  {
    name: "Authorised outsource agency list",
    size: "395 KB",
    pages: "8 pages",
    icon: Building2,
    desc: "MEA-authorised collection agencies across India.",
  },
];

export const feeRows = [
  {
    type: "Apostille",
    mea: "₹50 / sticker",
    service: "₹84 / doc",
    scanning: "₹3 / page",
  },
  {
    type: "Attestation",
    mea: "Free of cost",
    service: "₹84 / doc",
    scanning: "₹3 / page",
  },
];

export const importantNotes = [
  {
    title: "Legalisation of documents",
    body: "The MEA legalises documents on the basis of the signature of the designated signing authorities of the State Government, Union Territory or Chambers of Commerce. It does not take responsibility for the contents of the document itself.",
  },
  {
    title: "Outsourced collection only",
    body: "The MEA no longer accepts documents directly from individuals. All documents must be submitted and collected through authorised outsource agencies. Do not hand your originals to unauthorised persons or touts — verify the agency's authorisation before submission.",
  },
  {
    title: "Decentralised processing",
    body: "Attestation and apostille services are decentralised across 16 Branch Secretariats and RPOs, including New Delhi, Mumbai, Hyderabad, Chennai, Bengaluru and Kolkata. Your documents are routed to the office holding jurisdiction over the issuing state.",
  },
];

export const faqs = [
  {
    q: "Is HRD attestation required before apostille?",
    a: "For most states, yes — the degree must first be verified by the issuing state’s HRD department before the MEA affixes the apostille. Our quoted price already includes this step.",
  },
  {
    q: "Do I need to submit my original degree?",
    a: "Yes. The apostille sticker is affixed to the original document, so the physical original must be submitted. We collect and return it via insured, tracked courier.",
  },
  {
    q: "Will an apostilled degree work for non-Hague countries?",
    a: "No. Non-Hague countries such as the UAE, Saudi Arabia and Qatar require embassy/consular attestation instead. We offer that as a separate service.",
  },
  {
    q: "How long is the apostille valid?",
    a: "An apostille does not expire. However, some authorities prefer documents apostilled within the last 6 months — check your destination’s specific requirement.",
  },
];

// Flow diagram helpers for the two applicant-routed stages (offline route).
export const outsourceStage2 = [
  { icon: UserRound, title: "Applicant", desc: "Visits the nearest outsource agency centre", accent: true },
  { icon: Package, title: "Outsource Agency", desc: "Deposits verified documents" },
  { icon: Landmark, title: "Branch Secretariat / RPO", desc: "Having jurisdiction over it", accent: true },
];

export const outsourceStage3 = [
  { icon: Building, title: "Outsource Agency", desc: "Receives the duly legalized document" },
];
