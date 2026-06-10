import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesPage } from "./servicesContent";

export default function ServicesCta() {
  const { cta } = servicesPage;

  return (
    <section className="services-cta" aria-labelledby="services-cta-title">
      <div className="services-cta__inner">
        <div>
          <h2 id="services-cta-title" className="services-cta__title">
            {cta.title}
          </h2>
          <p className="services-cta__text">{cta.description}</p>
        </div>
        <Link href={cta.buttonHref} className="services-cta__button btn-gradient-primary">
          {cta.buttonLabel}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
