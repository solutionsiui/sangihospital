import {
  allServicesList,
  getServiceBySlug,
} from "@/Components/Services/servicesContent";

export function getServiceHref(slug: string) {
  return `/services/${slug}`;
}

export function getServiceHashHref(slug: string) {
  return `/services#${slug}`;
}

export function isValidServiceSlug(slug: string) {
  return allServicesList.some((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return allServicesList.map((service) => service.slug);
}

export { getServiceBySlug };
