import type { Metadata } from "next";
import InnerHero from "@/Components/ui/InnerHero";
import CareersIntro from "@/Components/Careers/CareersIntro";
import CareersJobGrid from "@/Components/Careers/CareersJobGrid";
import CareersCulture from "@/Components/Careers/CareersCulture";
import { careersPage } from "@/Components/Careers/careersContent";
import { siteConfig } from "@/lib/site";
import "@/Components/Careers/careers.css";

export const metadata: Metadata = {
  title: `Careers | ${siteConfig.name}`,
  description:
    "Join Sangi Hospital — explore career opportunities for doctors, nursing staff, paramedical professionals, superintendents, and administration staff.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  const { hero } = careersPage;

  return (
    <main>
      <InnerHero
        eyebrow="Join Our Team"
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />
      <CareersIntro />
      <CareersJobGrid />
      <CareersCulture />
    </main>
  );
}
