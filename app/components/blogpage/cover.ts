// Cover art for post cards: a category-matched icon and a stable gradient
// (hash of the slug keeps it consistent per post). Shared by the blog feed
// (client) and related-articles (server) — keep this module directive-free.

import type { ComponentType, SVGProps } from "react";
import {
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  Languages,
  Stamp,
} from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

type CoverInput = { slug: string; topic: string };

const TOPIC_ICONS: Record<string, Icon> = {
  apostille: Stamp,
  attestation: Briefcase,
  embassy: Building2,
  translation: Languages,
  "country-guides": Globe2,
  guides: Globe2,
};

const FALLBACK_ICONS: Icon[] = [GraduationCap, Stamp, Building2, Globe2, Languages, Briefcase];

const GRADIENTS = [
  "linear-gradient(150deg,#16265C,#5E3F7E)",
  "linear-gradient(150deg,#5B3E8E,#8E4FA0)",
  "linear-gradient(150deg,#16265C,#3a2566)",
  "linear-gradient(150deg,#8E4FA0,#D26FA0)",
  "linear-gradient(150deg,#352A66,#5E3F7E)",
  "linear-gradient(150deg,#16265C,#5B3E8E)",
];

const hash = (s: string) =>
  s.split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);

export const iconFor = (p: CoverInput): Icon =>
  TOPIC_ICONS[p.topic] ?? FALLBACK_ICONS[hash(p.slug) % FALLBACK_ICONS.length];

export const gradFor = (p: CoverInput): string =>
  GRADIENTS[hash(p.slug) % GRADIENTS.length];
