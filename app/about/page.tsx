import InnerHero from "@/Components/ui/InnerHero";
import AboutHero from "@/Components/About/AboutHero";
import StatsStrip from "@/Components/About/StatsStrip";
import MissionVision from "@/Components/About/MissionVision";
import CoreValues from "@/Components/About/CoreValues";
import OurJourney from "@/Components/About/OurJourney";
import ChairpersonMessage from "@/Components/About/ChairpersonMessage";
import NabhCerti from "@/Components/ui/NabhCerti";
import "@/Components/About/about.css";

export const metadata = {
  title: "About Us | Sangi Hospital - Multispeciality Hospital in Raya, Mathura",
  description:
    "Sangi Hospital is a multispeciality hospital in Raya, Mathura offering accessible, compassionate, and affordable healthcare services with modern facilities and experienced medical staff.",
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. Inner Hero — gradient overlay banner */}
      <InnerHero
        eyebrow="Who We Are"
        title="About Us"
        subtitle="Compassionate care, modern medicine, and a commitment to your well-being."
        backgroundImage="/assets/images/about/about-banner.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutHero />
      <StatsStrip />
      <MissionVision />
      <OurJourney />
      <CoreValues />
      <ChairpersonMessage />
      {/* <NabhCerti /> */}
      {/* <WhyChooseUs /> */}
    </main>
  );
}
