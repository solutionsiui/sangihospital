import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  FileCode2,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    title: "Medical Service",
    description:
      "Drugs and therapies supplied by better help or a qualified professional.",
    href: "/services/medical",
    icon: MonitorSmartphone,
  },
  {
    title: "Radiology & Pathology Test",
    description:
      "Drugs and therapies supplied by better help or a qualified professional.",
    href: "/services/radiology",
    icon: FileCode2,
  },
  {
    title: "Heart Beat Checkup",
    description:
      "Drugs and therapies supplied by better help or a qualified professional.",
    href: "/services/heart-checkup",
    icon: Activity,
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-section__inner">
        <div className="services-section__grid">
          <div className="services-section__cards-col">
            <p className="services-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="services-section__list">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className="service-card">
                    <div className="service-card__icon">
                      <Icon
                        className="service-card__icon-svg"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="service-card__body">
                      <h3 className="service-card__title">{service.title}</h3>
                      <p className="service-card__text">{service.description}</p>
                      <Link href={service.href} className="service-card__link">
                        Learn More
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="services-section__visual-col">
            <div className="services-content">
              <p className="services-eyebrow">Expertise</p>

              <h2 className="services-heading">
                We Offer More Than Services &amp; All Solutions Medical.
              </h2>

              <div className="services-image-wrap">
                <Image
                  src="/assets/images/home/servicehome.png"
                  alt="Medical professionals at Sangi Hospital"
                  width={620}
                  height={760}
                  className="services-image"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
