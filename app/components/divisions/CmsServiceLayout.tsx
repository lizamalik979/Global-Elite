"use client";

// Renders a CMS-managed service page. The CMS stores the whole page as JSON
// with icons as string names (serializable across the server/client boundary);
// this component resolves those names to the shared division icon components
// and hands a fully-typed ServiceConfig to <ServiceLayout>.

import ServiceLayout from "./servicelayout";
import type { Icon, Section, ServiceConfig } from "./servicelayout/types";
import type { CmsSection, CmsServiceContent } from "../../lib/cms";
import * as Icons from "./icons";

const iconMap = Icons as unknown as Record<string, Icon>;

/** "Plane" → Plane component; tolerant of kebab-case ("badge-check"). Falls back to Globe. */
function resolveIcon(name: string | undefined): Icon {
  if (name) {
    if (iconMap[name]) return iconMap[name];
    const pascal = name
      .split(/[-_\s]+/)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("");
    if (iconMap[pascal]) return iconMap[pascal];
  }
  return Icons.Globe;
}

function toSection(s: CmsSection): Section {
  switch (s.kind) {
    case "intro":
      return {
        ...s,
        stats: s.stats?.map((st) => ({ ...st, icon: resolveIcon(st.icon) })),
      };
    case "cards":
      return {
        ...s,
        cards: s.cards.map((c) => ({ ...c, icon: resolveIcon(c.icon) })),
      };
    case "chips":
      return { ...s, chipIcon: resolveIcon(s.chipIcon) };
    default:
      // steps / checklist / faq / table / notes carry no icons
      return s;
  }
}

export function serviceConfigFromCms(content: CmsServiceContent): ServiceConfig {
  return {
    breadcrumb: content.breadcrumb ?? [],
    badge: content.badge,
    badgeIcon: resolveIcon(content.badgeIcon),
    titleLead: content.titleLead,
    titleAccent: content.titleAccent,
    subtitle: content.subtitle,
    chips: (content.chips ?? []).map((c) => ({ ...c, icon: resolveIcon(c.icon) })),
    formTitle: content.formTitle,
    formSubtitle: content.formSubtitle,
    formCountries: content.formCountries,
    formCountryLabel: content.formCountryLabel,
    helpPhone: content.helpPhone,
    sections: (content.sections ?? []).map(toSection),
  };
}

export default function CmsServiceLayout({
  content,
  slug,
}: {
  content: CmsServiceContent;
  slug?: string;
}) {
  return (
    <ServiceLayout
      config={serviceConfigFromCms(content)}
      // Include the URL so leads from pages sharing a badge stay distinguishable
      leadSource={slug ? `${content.badge} page (/${slug})` : undefined}
    />
  );
}
