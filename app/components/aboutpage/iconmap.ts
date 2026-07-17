// Resolve CMS icon names ("Scale", "Truck", …) to the About page icon
// components. Directive-free so both server (AboutSections) and client
// (AboutHero) components can use it.

import type { ComponentType, SVGProps } from "react";
import * as Icons from "./icons";

export type AboutIcon = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap = Icons as unknown as Record<string, AboutIcon>;

export function resolveAboutIcon(name: string | undefined): AboutIcon {
  if (name && iconMap[name]) return iconMap[name];
  return Icons.BadgeCheck;
}
