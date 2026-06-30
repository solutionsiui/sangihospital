import { patientStories } from "@/Components/PatientStories/patientStoriesContent";

export function getPatientStorySlugs(): string[] {
  return patientStories.map((story) => story.slug);
}

export function getPatientStoryBySlug(slug: string) {
  return patientStories.find((story) => story.slug === slug) ?? null;
}

export function getRelatedPatientStories(slug: string, limit = 3) {
  return patientStories.filter((story) => story.slug !== slug).slice(0, limit);
}
