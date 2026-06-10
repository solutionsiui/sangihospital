import type { Service } from "./servicesContent";

type ServiceDetailOfferingsProps = {
  service: Service;
};

export default function ServiceDetailOfferings({ service }: ServiceDetailOfferingsProps) {
  return (
    <section className="service-detail-offerings" aria-labelledby="service-detail-offerings-title">
      <div className="service-detail-offerings__inner">
        <p className="service-detail-offerings__eyebrow">What We Offer</p>
        <h2 id="service-detail-offerings-title" className="service-detail-offerings__title">
          Key Offerings for {service.name}
        </h2>

        <div className="service-detail-offerings__grid">
          {service.offerings.map((offering, index) => (
            <article key={offering} className="service-detail-offerings__card">
              <span className="service-detail-offerings__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="service-detail-offerings__card-title">{offering}</h3>
              <p className="service-detail-offerings__card-text">
                Delivered with trained staff, quality protocols, and patient-centred care at
                Sangi Hospital.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
