import { specialitiesPage } from "@/Components/Specialities/specialitiesContent";
import { getSpecialityHref } from "@/lib/specialities-routes";

export type SpecialityLink = {
  label: string;
  href: string;
};

export type SpecialityColumn = {
  title: string;
  links: SpecialityLink[];
};

const columnGroups = [
  {
    title: "Medical Specialities",
    categories: ["Core Speciality"],
  },
  {
    title: "Surgical & Clinical Care",
    categories: [
      "Surgical Care",
      "Women's Health",
      "Child Care",
      "Dental Care",
      "Rehabilitation",
    ],
  },
  {
    title: "Diagnostics & Emergency",
    categories: ["Diagnostics", "Critical Care"],
  },
] as const;

function buildColumns(): SpecialityColumn[] {
  return columnGroups.map((group) => ({
    title: group.title,
    links: specialitiesPage.items
      .filter((item) =>
        (group.categories as readonly string[]).includes(item.category),
      )
      .map((item) => ({
        label: item.name,
        href: getSpecialityHref(item.slug),
      })),
  }));
}

export const specialitiesMegaMenu = {
  eyebrow: "Medical Specialities",
  title: "Sangi Hospital",
  description:
    "Expert care across core specialities, advanced diagnostics, and surgical services — delivered by experienced doctors at our hospitals across Uttar Pradesh.",
  image: "/assets/images/home/servicehome.png",
  imageAlt: "Medical specialist at Sangi Hospital",
  viewAllHref: "/specialities",
  columns: buildColumns(),
} as const;
