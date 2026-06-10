import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { getServiceHref } from "@/lib/services-routes";
import type { Service } from "./servicesContent";

type ServiceCardProps = {
  service: Service;
  icon: LucideIcon;
};

export default function ServiceCard({ service, icon: Icon }: ServiceCardProps) {
  return (
    <article id={service.slug} className="service-card service-anchor">
      <div className="service-card__image-wrap">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="service-card__image"
        />
      </div>

      <div className="service-card__body">
        <span className="service-card__icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <p className="service-card__category">{service.category}</p>
        <h3 className="service-card__title">{service.name}</h3>
        <p className="service-card__description">{service.description}</p>

        <div className="service-card__tags">
          {service.offerings.slice(0, 3).map((offering) => (
            <span key={offering} className="service-card__tag">
              {offering}
            </span>
          ))}
        </div>

        <div className="service-card__footer">
          <Link href={getServiceHref(service.slug)} className="service-card__link">
            Learn More
          </Link>
          <span className="service-card__arrow" aria-hidden="true">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </div>
      </div>
    </article>
  );
}
