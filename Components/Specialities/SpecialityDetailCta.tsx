import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialitiesPage } from "./specialitiesContent";
import type { SpecialityDetail } from "./specialitiesContent";

type SpecialityDetailCtaProps = {
  speciality: SpecialityDetail;
};

export default function SpecialityDetailCta({ speciality }: SpecialityDetailCtaProps) {
  const { cta } = specialitiesPage;

  return (
    <section className="speciality-detail-cta" aria-labelledby="speciality-detail-cta-title">
      <div className="speciality-detail-cta__inner">
        <div>
          <p className="speciality-detail-cta__eyebrow">{speciality.name}</p>
          <h2 id="speciality-detail-cta-title" className="speciality-detail-cta__title">
            Book a {speciality.name} Consultation
          </h2>
          <p className="speciality-detail-cta__text">{cta.description}</p>
        </div>

        <div className="speciality-detail-cta__actions">
          <Link
            href={cta.buttonHref}
            className="speciality-detail-cta__button btn-gradient-primary"
          >
            {cta.buttonLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/specialities" className="speciality-detail-cta__secondary">
            View All Specialities
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
