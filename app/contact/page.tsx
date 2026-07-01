import type { Metadata } from "next";
import InnerHero from "@/Components/ui/InnerHero";
import ContactForm from "@/Components/Contact/ContactForm";
import { contactPage } from "@/Components/Contact/contactContent";
import { siteConfig } from "@/lib/site";
import "@/Components/Contact/contact.css";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description:
    "Contact Sangi Hospital for appointment support, billing queries, feedback, and general inquiries. Our team is here to help.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const { hero } = contactPage;

  return (
    <main>
      <InnerHero
        eyebrow="Contact"
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      <section className="contact-page">
        <div className="contact-page__inner">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
