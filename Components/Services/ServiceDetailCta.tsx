import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesPage } from "./servicesContent";
import type { Service } from "./servicesContent";

type ServiceDetailCtaProps = {
  service: Service;
};

export default function ServiceDetailCta({ service }: ServiceDetailCtaProps) {
  const { cta } = servicesPage;

  return (
    <section className="service-detail-cta" aria-labelledby="service-detail-cta-title">
      <div className="service-detail-cta__inner">
        <div>
          <p className="service-detail-cta__eyebrow">{service.name}</p>
          <h2 id="service-detail-cta-title" className="service-detail-cta__title">
            Book {service.name} at Sangi Hospital
          </h2>
          <p className="service-detail-cta__text">{cta.description}</p>
        </div>

        <div className="service-detail-cta__actions">
          <Link href={cta.buttonHref} className="service-detail-cta__button btn-gradient-primary">
            {cta.buttonLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/services" className="service-detail-cta__secondary">
            View All Services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
