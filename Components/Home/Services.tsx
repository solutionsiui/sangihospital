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
    <section className="services-section py-5 py-lg-6">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-end">
          <div className="col-lg-5">
            <p className="services-intro font-body mb-4 mb-lg-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="d-flex flex-column gap-3 gap-lg-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="service-card d-flex align-items-start gap-3 gap-md-4"
                  >
                    <div className="service-card__icon flex-shrink-0">
                      <Icon
                        className="service-card__icon-svg"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex-grow-1">
                      <h3 className="service-card__title font-heading mb-2">
                        {service.title}
                      </h3>
                      <p className="service-card__text font-body mb-3">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="service-card__link font-body d-inline-flex align-items-center gap-2"
                      >
                        Learn More
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="services-content ps-lg-4 ps-xl-5">
              <p className="services-eyebrow font-body text-uppercase mb-3">
                Expertise
              </p>

              <h2 className="services-heading font-heading mb-4 mb-lg-5">
                We Offer More Than Services &amp; All Solutions Medical.
              </h2>

              <div className="services-image-wrap mx-auto ms-lg-auto me-lg-0">
                <Image
                  src="/assets/images/home/servicehome.png"
                  alt="Medical professionals at Sangi Hospital"
                  width={620}
                  height={760}
                  className="services-image img-fluid"
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
