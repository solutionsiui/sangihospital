import { specialitiesPage } from "./specialitiesContent";
import { getSpecialityIcon } from "./specialityIcons";
import SpecialityCard from "./SpecialityCard";

export default function SpecialitiesGrid() {
  const items = specialitiesPage.items.filter((item) => !item.featured);

  return (
    <section className="specialities-grid-section" aria-labelledby="specialities-grid-title">
      <div className="specialities-grid-section__inner">
        <div className="specialities-grid-section__header">
          <p className="specialities-grid-section__eyebrow">All Specialities</p>
          <h2 id="specialities-grid-title" className="specialities-grid-section__title">
            Complete Range of Medical Departments
          </h2>
          <p className="specialities-grid-section__text">
            Browse our hospital specialities and find the right department for your
            consultation, diagnosis, or treatment needs.
          </p>
        </div>

        <div className="specialities-grid">
          {items.map((speciality) => (
            <SpecialityCard
              key={speciality.id}
              speciality={speciality}
              icon={getSpecialityIcon(speciality.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
