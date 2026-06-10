import type { SpecialityDetail } from "./specialitiesContent";

type SpecialityDetailServicesProps = {
  speciality: SpecialityDetail;
};

export default function SpecialityDetailServices({
  speciality,
}: SpecialityDetailServicesProps) {
  return (
    <section
      className="speciality-detail-services"
      aria-labelledby="speciality-detail-services-title"
    >
      <div className="speciality-detail-services__inner">
        <p className="speciality-detail-services__eyebrow">Clinical Services</p>
        <h2 id="speciality-detail-services-title" className="speciality-detail-services__title">
          Key Services in {speciality.name}
        </h2>

        <div className="speciality-detail-services__grid">
          {speciality.services.map((service, index) => (
            <article key={service} className="speciality-detail-services__card">
              <span className="speciality-detail-services__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="speciality-detail-services__card-title">{service}</h3>
              <p className="speciality-detail-services__card-text">
                Delivered by experienced doctors with modern diagnostics and
                patient-centred care at Sangi Hospital.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
