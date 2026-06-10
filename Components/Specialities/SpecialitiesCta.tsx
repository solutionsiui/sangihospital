import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialitiesPage } from "./specialitiesContent";

export default function SpecialitiesCta() {
  const { cta } = specialitiesPage;

  return (
    <section className="specialities-cta" aria-labelledby="specialities-cta-title">
      <div className="specialities-cta__inner">
        <div>
          <h2 id="specialities-cta-title" className="specialities-cta__title">
            {cta.title}
          </h2>
          <p className="specialities-cta__text">{cta.description}</p>
        </div>

        <Link href={cta.buttonHref} className="specialities-cta__button btn-gradient-primary">
          {cta.buttonLabel}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
