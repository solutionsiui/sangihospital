import type { Metadata } from "next";
import InnerHero from "@/Components/ui/InnerHero";
import PatientStoryGrid from "@/Components/PatientStories/PatientStoryGrid";
import { patientStoriesPage } from "@/Components/PatientStories/patientStoriesContent";
import { siteConfig } from "@/lib/site";
import "@/Components/PatientStories/patient-stories.css";

export const metadata: Metadata = {
  title: `Patient Stories | ${siteConfig.name}`,
  description:
    "Read inspiring recovery journeys and heartfelt experiences shared by patients and families at Sangi Hospital.",
  alternates: {
    canonical: "/patient-stories",
  },
};

export default function PatientStoriesPage() {
  const { hero } = patientStoriesPage;

  return (
    <main>
      <InnerHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patient Stories" },
        ]}
      />
      <PatientStoryGrid />
    </main>
  );
}
