// Resolve CMS icon names ("Gauge", "Files", …) to the Contact page icon
// components. Directive-free so server and client components can both use it.

import type { ComponentType, SVGProps } from "react";
import * as Icons from "./icons";

export type ContactIcon = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap = Icons as unknown as Record<string, ContactIcon>;

export function resolveContactIcon(name: string | undefined): ContactIcon {
  if (name && iconMap[name]) return iconMap[name];
  return Icons.BadgeCheck;
}
