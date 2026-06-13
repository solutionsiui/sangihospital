import InnerHero from "@/Components/ui/InnerHero";
import ChairmanEditorial from "@/Components/Chairman/ChairmanEditorial";
import ChairmanBody from "@/Components/Chairman/ChairmanBody";
import { chairmanPage } from "@/Components/Chairman/chairmanContent";
import "@/Components/Chairman/chairman.css";

export const metadata = { 
  title: "Chairman's Message | Sangi Hospital",
  description:
    "Read the message from the Chairman of Sangi Hospital — a vision for compassionate, world-class healthcare rooted in community values.",
};

export default function ChairmanMessagePage() {
  const { hero } = chairmanPage;

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
          { label: "Chairman's Message" },
        ]}
      />
      <ChairmanEditorial />
      <ChairmanBody />
    </main>
  );
}
