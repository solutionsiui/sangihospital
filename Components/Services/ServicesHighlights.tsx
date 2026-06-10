import { servicesPage } from "./servicesContent";

export default function ServicesHighlights() {
  return (
    <section className="services-highlights" aria-labelledby="services-highlights-title">
      <div className="services-highlights__inner">
        <h2 id="services-highlights-title" className="services-highlights__title">
          Why Patients Trust Sangi Hospital Services
        </h2>
        <div className="services-highlights__grid">
          {servicesPage.highlights.map((item) => (
            <article key={item.title} className="services-highlights__card">
              <h3 className="services-highlights__card-title">{item.title}</h3>
              <p className="services-highlights__card-text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
