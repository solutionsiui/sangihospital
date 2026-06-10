import {
  getSpecialityBySlug,
  specialitiesPage,
} from "@/Components/Specialities/specialitiesContent";

export { getSpecialityBySlug };

export function getSpecialityHref(slug: string) {
  return `/specialities/${slug}`;
}

export function getSpecialityHashHref(slug: string) {
  return `/specialities#${slug}`;
}

export function isValidSpecialitySlug(slug: string) {
  return specialitiesPage.items.some((item) => item.slug === slug);
}

export function getSpecialitySlugs() {
  return specialitiesPage.items.map((item) => item.slug);
}
