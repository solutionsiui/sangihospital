import { serviceColumns } from "@/Components/Services/servicesContent";
import { specialitiesPage } from "@/Components/Specialities/specialitiesContent";
import { hospitalsMegaMenu } from "@/lib/hospitals";
import { patientCornerMegaMenu } from "@/lib/patient-corner";
import { siteConfig } from "@/lib/site";

export type MegaFooterLink = {
  label: string;
  href: string;
};

export type MegaFooterSection = {
  title: string;
  links: MegaFooterLink[];
  viewAll?: MegaFooterLink;
};

export type MegaFooterColumn = {
  sections: MegaFooterSection[];
};

const twentyFourSevenColumn = serviceColumns.find((c) => c.id === "twenty-four-seven");
const otherMedicalColumn = serviceColumns.find((c) => c.id === "other-medical");
const wardsColumn = serviceColumns.find((c) => c.id === "wards");

const hospitalLinks: MegaFooterLink[] = hospitalsMegaMenu.regions.flatMap((region) =>
  region.states.flatMap((state) =>
    state.hospitals.map((hospital) => ({
      label: hospital.name,
      href: hospital.href,
    })),
  ),
);

export const megaFooterColumns: MegaFooterColumn[] = [
  {
    sections: [
      {
        title: "24x7 Services",
        links:
          twentyFourSevenColumn?.services.map((service) => ({
            label: service.name,
            href: `/services/${service.slug}`,
          })) ?? [],
        viewAll: { label: "View All Services", href: "/services" },
      },
    ],
  },
  {
    sections: [
      {
        title: "Other Medical Services",
        links:
          otherMedicalColumn?.services.map((service) => ({
            label: service.name,
            href: `/services/${service.slug}`,
          })) ?? [],
      },
      {
        title: "Wards",
        links:
          wardsColumn?.services.map((service) => ({
            label: service.name,
            href: `/services/${service.slug}`,
          })) ?? [],
      },
    ],
  },
  {
    sections: [
      {
        title: "Medical Specialities",
        links: specialitiesPage.items.slice(0, 8).map((item) => ({
          label: item.name,
          href: `/specialities/${item.slug}`,
        })),
        viewAll: { label: "View All Specialities", href: "/specialities" },
      },
    ],
  },
  {
    sections: [
      {
        title: "Our Hospitals",
        links: hospitalLinks,
        viewAll: { label: "Find Hospital Near You", href: "/#our-hospitals" },
      },
    ],
  },
  {
    sections: [
      {
        title: "Patient Corner",
        links: [
          { label: "About Sangi Hospital", href: "/about" },
          { label: "Book Appointment", href: "/appointment" },
          ...patientCornerMegaMenu.sections.map((section) => ({
            label: section.label,
            href: section.href,
          })),
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Contact & Help", href: "/appointment" },
          { label: "Emergency Helpline", href: `tel:${siteConfig.phone}` },
          { label: "Email Support", href: `mailto:${siteConfig.email}` },
          { label: "All Services", href: "/services" },
        ],
      },
    ],
  },
];

export const megaFooterUtilityLinks: MegaFooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/appointment" },
  { label: "Book Appointment", href: "/appointment" },
  { label: "Our Specialities", href: "/specialities" },
  { label: "Our Services", href: "/services" },
  { label: "Our Hospitals", href: "/#our-hospitals" },
];

export const megaFooterLegalLinks: MegaFooterLink[] = [
  { label: "Privacy Policy", href: "/about" },
  { label: "Terms of Use", href: "/about" },
  { label: "Cookie Policy", href: "/about" },
  { label: "Patient Information", href: "/about" },
];

export const megaFooterSubscribe = {
  title: "Subscribe",
  description:
    "Get health updates, hospital news, and wellness tips from Sangi Hospital.",
};

export const megaFooterSocial = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;
