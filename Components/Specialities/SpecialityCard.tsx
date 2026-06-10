import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { getSpecialityHref } from "@/lib/specialities-routes";
import type { Speciality } from "./specialitiesContent";

type SpecialityCardProps = {
  speciality: Speciality;
  icon: LucideIcon;
};

export default function SpecialityCard({ speciality, icon: Icon }: SpecialityCardProps) {
  return (
    <article id={speciality.slug} className="speciality-card speciality-anchor">
      <span className="speciality-card__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.75} />
      </span>

      <p className="speciality-card__category">{speciality.category}</p>
      <h3 className="speciality-card__title">{speciality.name}</h3>
      <p className="speciality-card__description">{speciality.description}</p>

      <div className="speciality-card__tags">
        {speciality.services.slice(0, 3).map((service) => (
          <span key={service} className="speciality-card__tag">
            {service}
          </span>
        ))}
      </div>

      <div className="speciality-card__footer">
        <Link
          href={getSpecialityHref(speciality.slug)}
          className="speciality-card__link"
        >
          Learn More
        </Link>
        <span className="speciality-card__arrow" aria-hidden="true">
          <ArrowUpRight size={16} strokeWidth={2} />
        </span>
      </div>
    </article>
  );
}
