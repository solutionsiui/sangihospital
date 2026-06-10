import type { Metadata } from "next";
import InnerHero from "@/Components/ui/InnerHero";
import SpecialitiesIntro from "@/Components/Specialities/SpecialitiesIntro";
import GeneralMedicineFeature from "@/Components/Specialities/GeneralMedicineFeature";
import SpecialitiesGrid from "@/Components/Specialities/SpecialitiesGrid";
import SpecialitiesHighlights from "@/Components/Specialities/SpecialitiesHighlights";
import SpecialitiesCta from "@/Components/Specialities/SpecialitiesCta";
import SpecialitiesHashScroll from "@/Components/Specialities/SpecialitiesHashScroll";
import { specialitiesPage } from "@/Components/Specialities/specialitiesContent";
import { siteConfig } from "@/lib/site";
import "@/Components/Specialities/specialities.css";

export const metadata: Metadata = {
  title: `Our Specialities | ${siteConfig.name}`,
  description:
    "Explore medical specialities at Sangi Hospital including General Medicine, Cardiology, Neurology, Gynecology, Emergency Care, and more across Uttar Pradesh.",
  alternates: {
    canonical: "/specialities",
  },
};

export default function SpecialitiesPage() {
  const { hero } = specialitiesPage;

  return (
    <main>
      <SpecialitiesHashScroll />
      <InnerHero
        eyebrow="Medical Excellence"
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Specialities" },
        ]}
      />
      <SpecialitiesIntro />
      <GeneralMedicineFeature />
      <SpecialitiesGrid />
      <SpecialitiesHighlights />
      <SpecialitiesCta />
    </main>
  );
}
