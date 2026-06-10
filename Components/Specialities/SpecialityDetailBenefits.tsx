import { specialitiesPage } from "./specialitiesContent";
import type { SpecialityDetail } from "./specialitiesContent";

type SpecialityDetailBenefitsProps = {
  speciality: SpecialityDetail;
};

export default function SpecialityDetailBenefits({
  speciality,
}: SpecialityDetailBenefitsProps) {
  return (
    <section
      className="speciality-detail-benefits"
      aria-labelledby="speciality-detail-benefits-title"
    >
      <div className="speciality-detail-benefits__inner">
        <h2 id="speciality-detail-benefits-title" className="speciality-detail-benefits__title">
          Why Choose {speciality.name} at Sangi Hospital
        </h2>

        <div className="speciality-detail-benefits__grid">
          {specialitiesPage.highlights.map((item) => (
            <article key={item.title} className="speciality-detail-benefits__card">
              <h3 className="speciality-detail-benefits__card-title">{item.title}</h3>
              <p className="speciality-detail-benefits__card-text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
