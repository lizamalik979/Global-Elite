import type { ComponentType, SVGProps } from "react";

export type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type HeroChip = { icon: Icon; title: string; sub: string };

export type Breadcrumb = { label: string; href?: string };

// Section variants that render inside the article body, each with an anchor id
// + TOC label. The content shape depends on `kind`.
export type Section =
  | {
      id: string;
      label: string;
      heading: string;
      kind: "intro";
      paragraphs: string[];
      stats?: { icon: Icon; value: string; label: string }[];
    }
  | {
      id: string;
      label: string;
      heading: string;
      kind: "cards";
      intro?: string;
      cards: { icon: Icon; title: string; points: string[] }[];
    }
  | {
      id: string;
      label: string;
      heading: string;
      kind: "chips";
      intro?: string;
      chipIcon: Icon;
      chips: string[];
      note?: string;
    }
  | {
      id: string;
      label: string;
      heading: string;
      kind: "steps";
      intro?: string;
      steps: { title: string; text: string }[];
    }
  | {
      id: string;
      label: string;
      heading: string;
      kind: "checklist";
      intro?: string;
      items: string[];
    }
  | {
      id: string;
      label: string;
      heading: string;
      kind: "faq";
      intro?: string;
      faqs: { q: string; a: string }[];
    };

export type ServiceConfig = {
  breadcrumb: Breadcrumb[];
  badge: string;
  badgeIcon: Icon;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  chips: HeroChip[];
  formTitle: string;
  formSubtitle: string;
  formCountries?: string[];
  formCountryLabel?: string;
  sections: Section[];
  helpPhone?: string;
};
