import type { Metadata } from "next";
import { redirect } from "next/navigation";
import InnerHero from "@/Components/ui/InnerHero";
import PatientStoryArticle from "@/Components/PatientStories/PatientStoryArticle";
import PatientStoryRelated from "@/Components/PatientStories/PatientStoryRelated";
import {
  getPatientStoryBySlug,
  getPatientStorySlugs,
  getRelatedPatientStories,
} from "@/lib/patient-stories-routes";
import { siteConfig } from "@/lib/site";
import "@/Components/PatientStories/patient-stories.css";

type PatientStoryDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPatientStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PatientStoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getPatientStoryBySlug(slug);

  if (!story) {
    return { title: `Story Not Found | ${siteConfig.name}` };
  }

  return {
    title: `${story.title} | ${siteConfig.name}`,
    description: story.excerpt,
    alternates: {
      canonical: `/patient-stories/${story.slug}`,
    },
  };
}

export default async function PatientStoryDetailPage({
  params,
}: PatientStoryDetailPageProps) {
  const { slug } = await params;
  const story = getPatientStoryBySlug(slug);

  if (!story) {
    redirect("/patient-stories");
  }

  const relatedStories = getRelatedPatientStories(slug);

  return (
    <main>
      <InnerHero
        eyebrow={story.category}
        title={story.title}
        subtitle={story.excerpt}
        backgroundImage={story.image}
        showTrustBar={false}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patient Stories", href: "/patient-stories" },
          { label: story.patient.name },
        ]}
      />
      <PatientStoryArticle story={story} />
      <PatientStoryRelated stories={relatedStories} />
    </main>
  );
}
