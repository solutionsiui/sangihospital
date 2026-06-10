import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerHero from "@/Components/ui/InnerHero";
import ServiceDetailIntro from "@/Components/Services/ServiceDetailIntro";
import ServiceDetailOfferings from "@/Components/Services/ServiceDetailOfferings";
import ServiceDetailBenefits from "@/Components/Services/ServiceDetailBenefits";
import ServiceDetailRelated from "@/Components/Services/ServiceDetailRelated";
import ServiceDetailCta from "@/Components/Services/ServiceDetailCta";
import { getServiceBySlug } from "@/Components/Services/servicesContent";
import { getServiceSlugs } from "@/lib/services-routes";
import { siteConfig } from "@/lib/site";
import "@/Components/Services/services.css";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `Service Not Found | ${siteConfig.name}` };
  }

  return {
    title: `${service.name} | ${siteConfig.name}`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <InnerHero
        eyebrow={service.category}
        title={service.name}
        subtitle={service.description}
        backgroundImage={service.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />
      <ServiceDetailIntro service={service} />
      <ServiceDetailOfferings service={service} />
      <ServiceDetailBenefits service={service} />
      <ServiceDetailRelated service={service} />
      <ServiceDetailCta service={service} />
    </main>
  );
}
