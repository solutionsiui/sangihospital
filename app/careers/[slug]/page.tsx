import type { Metadata } from "next";
import { redirect } from "next/navigation";
import InnerHero from "@/Components/ui/InnerHero";
import CareerJobOverview from "@/Components/Careers/CareerJobOverview";
import CareerApplication from "@/Components/Careers/CareerApplication";
import { getCareerJobBySlug } from "@/Components/Careers/careersContent";
import { getCareerSlugs } from "@/lib/careers-routes";
import { siteConfig } from "@/lib/site";
import "@/Components/Careers/careers.css";

type CareerDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCareerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CareerDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getCareerJobBySlug(slug);

  if (!job) {
    return { title: `Career Not Found | ${siteConfig.name}` };
  }

  return {
    title: `Apply — ${job.title} | ${siteConfig.name}`,
    description: job.description,
    alternates: {
      canonical: `/careers/${job.slug}`,
    },
  };
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { slug } = await params;
  const job = getCareerJobBySlug(slug);

  if (!job) {
    redirect("/careers");
  }

  return (
    <main>
      <InnerHero
        eyebrow="Career Application"
        title={job.title}
        subtitle={job.tagline}
        backgroundImage={job.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: job.shortTitle },
        ]}
      />
      <CareerJobOverview job={job} />
      <CareerApplication job={job} />
    </main>
  );
}
