import { allServicesList } from "@/Components/Services/servicesContent";
import { specialitiesPage } from "@/Components/Specialities/specialitiesContent";
import { blogPosts } from "@/Components/Blog/blogContent";
import { patientStories } from "@/Components/PatientStories/patientStoriesContent";
import { careerJobs } from "@/Components/Careers/careersContent";
import { hospitalsMegaMenu } from "@/lib/hospitals";
import { patientCornerMegaMenu } from "@/lib/patient-corner";

export type SearchResultItem = {
  id: string;
  label: string;
  href: string;
  description: string;
  category: string;
};

const staticPages: SearchResultItem[] = [
  {
    id: "page-home",
    label: "Home",
    href: "/",
    description: "Sangi Hospital homepage",
    category: "Pages",
  },
  {
    id: "page-about",
    label: "About Us",
    href: "/about",
    description: "Learn about Sangi Hospital and our mission",
    category: "Pages",
  },
  {
    id: "page-appointment",
    label: "Book Appointment",
    href: "/appointment",
    description: "Schedule a consultation or hospital visit",
    category: "Pages",
  },
  {
    id: "page-contact",
    label: "Contact",
    href: "/contact",
    description: "Get in touch with Sangi Hospital",
    category: "Pages",
  },
  {
    id: "page-services",
    label: "Our Services",
    href: "/services",
    description: "Browse all hospital services and facilities",
    category: "Pages",
  },
  {
    id: "page-specialities",
    label: "Our Specialities",
    href: "/specialities",
    description: "Explore medical specialities and departments",
    category: "Pages",
  },
  {
    id: "page-blog",
    label: "Health Blog",
    href: "/blog",
    description: "Health articles and medical guides",
    category: "Pages",
  },
  {
    id: "page-patient-stories",
    label: "Patient Stories",
    href: "/patient-stories",
    description: "Recovery journeys from our patients",
    category: "Pages",
  },
  {
    id: "page-careers",
    label: "Careers",
    href: "/careers",
    description: "Join the Sangi Hospital team",
    category: "Pages",
  },
  {
    id: "page-chairman",
    label: "Chairman Message",
    href: "/chairman-message",
    description: "Message from the chairman",
    category: "Pages",
  },
  {
    id: "page-founder",
    label: "Founder Message",
    href: "/founder-message",
    description: "Message from the founder",
    category: "Pages",
  },
  {
    id: "page-privacy",
    label: "Privacy Policy",
    href: "/privacy-policy",
    description: "How we protect your personal information",
    category: "Legal",
  },
  {
    id: "page-terms",
    label: "Terms of Use",
    href: "/terms-of-use",
    description: "Website terms and conditions",
    category: "Legal",
  },
  {
    id: "page-cookies",
    label: "Cookie Policy",
    href: "/cookie-policy",
    description: "How we use cookies on this website",
    category: "Legal",
  },
  {
    id: "page-patient-info",
    label: "Patient Information",
    href: "/patient-information",
    description: "Guidance for patients and visitors",
    category: "Legal",
  },
];

const hospitalResults: SearchResultItem[] = hospitalsMegaMenu.regions.flatMap(
  (region) =>
    region.states.flatMap((state) =>
      state.hospitals
        .filter((hospital) => hospital.status !== "upcoming")
        .map((hospital) => ({
          id: `hospital-${hospital.id}`,
          label: hospital.name,
          href: hospital.href,
          description: `${hospital.city}, ${state.label}`,
          category: "Hospitals",
        })),
    ),
);

export const searchIndex: SearchResultItem[] = [
  ...staticPages,
  ...allServicesList.map((service) => ({
    id: `service-${service.id}`,
    label: service.name,
    href: `/services/${service.slug}`,
    description: service.description,
    category: service.category,
  })),
  ...specialitiesPage.items.map((item) => ({
    id: `speciality-${item.id}`,
    label: item.name,
    href: `/specialities/${item.slug}`,
    description: item.description,
    category: "Specialities",
  })),
  ...patientCornerMegaMenu.sections.map((section) => ({
    id: `patient-corner-${section.id}`,
    label: section.label,
    href: section.href,
    description: section.description,
    category: "Patient Corner",
  })),
  ...hospitalResults,
  ...blogPosts.map((post) => ({
    id: `blog-${post.id}`,
    label: post.title,
    href: `/blog/${post.slug}`,
    description: post.excerpt,
    category: "Blog",
  })),
  ...patientStories.map((story) => ({
    id: `story-${story.id}`,
    label: story.title,
    href: `/patient-stories/${story.slug}`,
    description: story.excerpt,
    category: "Patient Stories",
  })),
  ...careerJobs.map((job) => ({
    id: `career-${job.id}`,
    label: job.title,
    href: `/careers/${job.slug}`,
    description: `${job.type} · ${job.locations}`,
    category: "Careers",
  })),
];

function scoreResult(item: SearchResultItem, query: string) {
  const label = item.label.toLowerCase();
  const description = item.description.toLowerCase();
  const category = item.category.toLowerCase();

  if (label === query) return 100;
  if (label.startsWith(query)) return 80;
  if (label.includes(query)) return 60;
  if (category.includes(query)) return 40;
  if (description.includes(query)) return 30;

  const terms = query.split(/\s+/).filter(Boolean);
  const matchedTerms = terms.filter(
    (term) =>
      label.includes(term) ||
      description.includes(term) ||
      category.includes(term),
  );

  if (matchedTerms.length === 0) return 0;
  return 10 + matchedTerms.length * 5;
}

export function searchSite(query: string, limit = 8): SearchResultItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  return searchIndex
    .map((item) => ({ item, score: scoreResult(item, normalizedQuery) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label))
    .slice(0, limit)
    .map(({ item }) => item);
}
