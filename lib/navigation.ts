export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  megaMenu?: "services" | "specialities" | "hospitals" | "patient-corner";
};

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    megaMenu: "services",
  },
  {
    label: "Hospitals",
    href: "/hospitals",
    megaMenu: "hospitals",
  },
  {
    label: "Specialities",
    href: "/specialities",
    megaMenu: "specialities",
  },
  {
    label: "Patient Corner",
    href: "/patient-stories",
    megaMenu: "patient-corner",
  },
  { label: "Contact", href: "/contact" },
];
