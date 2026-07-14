// Shared navigation data used by both the desktop nav (Header) and the mobile
// drawer (MobileMenu), so the two never drift.

export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
  dropdown?: boolean;
  menu?: { label: string; href: string }[];
};

// The five business divisions of Global Elite (OPC) Pvt Ltd.
export const divisionsMenu: { label: string; href: string }[] = [
  { label: "Travel & Tourism", href: "/travel" },
  { label: "Documentation Solutions", href: "/services" },
  { label: "Marketing & AI", href: "/marketing" },
  { label: "Education & Career", href: "/education" },
  { label: "AI & Technology", href: "/technology" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", active: true },
  {
    label: "Divisions",
    href: "/travel",
    dropdown: true,
    menu: divisionsMenu,
  },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];
