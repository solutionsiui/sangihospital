import { CheckCircle2 } from "lucide-react";
import type { CareerJob } from "./careersContent";

type CareerJobOverviewProps = {
  job: CareerJob;
};

export default function CareerJobOverview({ job }: CareerJobOverviewProps) {
  return (
    <section className="career-overview" aria-labelledby="career-overview-title">
      <div className="career-overview__inner">
        <div className="career-overview__panel">
          <span className="career-overview__eyebrow">Role Overview</span>
          <h2 id="career-overview-title" className="career-overview__title">
            {job.title}
          </h2>
          <p className="career-overview__lead">{job.description}</p>

          <div className="career-overview__tags">
            <span>{job.openings} Openings</span>
            <span>{job.type}</span>
            <span>{job.locations}</span>
            <span>{job.experience}</span>
          </div>
        </div>

        <div className="career-overview__grid">
          <article className="career-overview__card">
            <h3 className="career-overview__card-title">Qualifications</h3>
            <ul className="career-overview__list">
              {job.qualifications.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="career-overview__card">
            <h3 className="career-overview__card-title">Key Responsibilities</h3>
            <ul className="career-overview__list">
              {job.responsibilities.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="career-overview__card career-overview__card--accent">
            <h3 className="career-overview__card-title">What We Offer</h3>
            <ul className="career-overview__list">
              {job.perks.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
