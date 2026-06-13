import InnerHero from "@/Components/ui/InnerHero";
import FounderEditorial from "@/Components/Founder/FounderEditorial";
import FounderBody from "@/Components/Founder/FounderBody";
import { founderPage } from "@/Components/Founder/founderContent";
import "@/Components/Chairman/chairman.css";

export const metadata = {
  title: "Message from Founder | Sangi Hospital",
  description:
    "Read the message from the Founder of Sangi Hospital — the story behind a healthcare institution built on compassion and community trust.",
};

export default function FounderMessagePage() {
  const { hero } = founderPage;

  return (
    <main>
      <InnerHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Message from Founder" },
        ]}
      />
      <FounderEditorial />
      <FounderBody />
    </main>
  );
}
