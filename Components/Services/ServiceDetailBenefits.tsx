import { servicesPage } from "./servicesContent";
import type { Service } from "./servicesContent";

type ServiceDetailBenefitsProps = {
  service: Service;
};

export default function ServiceDetailBenefits({ service }: ServiceDetailBenefitsProps) {
  return (
    <section className="service-detail-benefits" aria-labelledby="service-detail-benefits-title">
      <div className="service-detail-benefits__inner">
        <h2 id="service-detail-benefits-title" className="service-detail-benefits__title">
          Why Choose {service.name} at Sangi Hospital
        </h2>

        <div className="service-detail-benefits__grid">
          {servicesPage.highlights.map((item) => (
            <article key={item.title} className="service-detail-benefits__card">
              <h3 className="service-detail-benefits__card-title">{item.title}</h3>
              <p className="service-detail-benefits__card-text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
