import type { Metadata } from "next";
import { redirect } from "next/navigation";
import InnerHero from "@/Components/ui/InnerHero";
import SpecialityDetailIntro from "@/Components/Specialities/SpecialityDetailIntro";
import SpecialityDetailServices from "@/Components/Specialities/SpecialityDetailServices";
import SpecialityDetailBenefits from "@/Components/Specialities/SpecialityDetailBenefits";
import SpecialityDetailRelated from "@/Components/Specialities/SpecialityDetailRelated";
import SpecialityDetailCta from "@/Components/Specialities/SpecialityDetailCta";
import { getSpecialityBySlug } from "@/Components/Specialities/specialitiesContent";
import { getSpecialitySlugs } from "@/lib/specialities-routes";
import { siteConfig } from "@/lib/site";
import "@/Components/Specialities/specialities.css";

type SpecialityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSpecialitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SpecialityDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const speciality = getSpecialityBySlug(slug);

  if (!speciality) {
    return { title: `Speciality Not Found | ${siteConfig.name}` };
  }

  return {
    title: `${speciality.name} | ${siteConfig.name}`,
    description: speciality.description,
    alternates: {
      canonical: `/specialities/${speciality.slug}`,
    },
  };
}

export default async function SpecialityDetailPage({ params }: SpecialityDetailPageProps) {
  const { slug } = await params;
  const speciality = getSpecialityBySlug(slug);

  if (!speciality) {
    redirect("/specialities");
  }

  return (
    <main>
      <InnerHero
        eyebrow={speciality.category}
        title={speciality.name}
        subtitle={speciality.description}
        backgroundImage={speciality.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Specialities", href: "/specialities" },
          { label: speciality.name },
        ]}
      />
      <SpecialityDetailIntro speciality={speciality} />
      <SpecialityDetailServices speciality={speciality} />
      <SpecialityDetailBenefits speciality={speciality} />
      <SpecialityDetailRelated speciality={speciality} />
      <SpecialityDetailCta speciality={speciality} />
    </main>
  );
}
