import type { Metadata } from "next";
import InnerHero from "@/Components/ui/InnerHero";
import ServicesIntro from "@/Components/Services/ServicesIntro";
import FeaturedService from "@/Components/Services/FeaturedService";
import ServicesCategoryGrid from "@/Components/Services/ServicesCategoryGrid";
import ServicesHighlights from "@/Components/Services/ServicesHighlights";
import ServicesCta from "@/Components/Services/ServicesCta";
import ServicesHashScroll from "@/Components/Services/ServicesHashScroll";
import { servicesPage } from "@/Components/Services/servicesContent";
import { siteConfig } from "@/lib/site";
import "@/Components/Services/services.css";

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description:
    "Explore hospital services at Sangi Hospital including 24x7 emergency care, diagnostics, pharmacy, OT services, physiotherapy, dialysis, and inpatient wards.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const { hero } = servicesPage;

  return (
    <main>
      <ServicesHashScroll />
      <InnerHero
        eyebrow="Hospital Services"
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesIntro />
      <FeaturedService />
      <ServicesCategoryGrid />
      <ServicesHighlights />
      <ServicesCta />
    </main>
  );
}
