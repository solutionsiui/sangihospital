import Image from "next/image";
import { Check } from "lucide-react";
import { getSpecialityIcon } from "./specialityIcons";
import type { SpecialityDetail } from "./specialitiesContent";

type SpecialityDetailIntroProps = {
  speciality: SpecialityDetail;
};

export default function SpecialityDetailIntro({
  speciality,
}: SpecialityDetailIntroProps) {
  const Icon = getSpecialityIcon(speciality.id);

  return (
    <section
      className="speciality-detail-intro"
      aria-labelledby="speciality-detail-intro-title"
    >
      <div className="speciality-detail-intro__inner">
        <div className="speciality-detail-intro__content">
          <span className="speciality-detail-intro__eyebrow">{speciality.category}</span>
          <h2 id="speciality-detail-intro-title" className="speciality-detail-intro__title">
            {speciality.name}
          </h2>
          {speciality.detailParagraphs.map((paragraph) => (
            <p key={paragraph} className="speciality-detail-intro__text">
              {paragraph}
            </p>
          ))}

          <ul className="speciality-detail-intro__points">
            {speciality.points.map((point) => (
              <li key={point} className="speciality-detail-intro__point">
                <span className="speciality-detail-intro__point-icon" aria-hidden="true">
                  <Check strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="speciality-detail-intro__visual">
          <div className="speciality-detail-intro__badge" aria-hidden="true">
            <Icon size={18} strokeWidth={1.6} />
          </div>
          <div className="speciality-detail-intro__image-wrap">
            <Image
              src={speciality.image}
              alt={speciality.name}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="speciality-detail-intro__image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
