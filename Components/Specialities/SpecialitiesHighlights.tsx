import { specialitiesPage } from "./specialitiesContent";

export default function SpecialitiesHighlights() {
  return (
    <section className="specialities-highlights" aria-labelledby="specialities-highlights-title">
      <div className="specialities-highlights__inner">
        <h2 id="specialities-highlights-title" className="specialities-highlights__title">
          Why Families Choose Sangi Hospital Specialities
        </h2>

        <div className="specialities-highlights__grid">
          {specialitiesPage.highlights.map((item) => (
            <article key={item.title} className="specialities-highlights__card">
              <h3 className="specialities-highlights__card-title">{item.title}</h3>
              <p className="specialities-highlights__card-text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
