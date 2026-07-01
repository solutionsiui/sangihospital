export const legalHeroImage = "/assets/images/about/about-banner.jpg";

export const legalPages = [
  { label: "Privacy Policy", href: "/privacy-policy", slug: "privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use", slug: "terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy", slug: "cookie-policy" },
  { label: "Patient Information", href: "/patient-information", slug: "patient-information" },
] as const;

export function getRelatedLegalPages(currentSlug: string) {
  return legalPages.filter((page) => page.slug !== currentSlug);
}
