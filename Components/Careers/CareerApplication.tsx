import CareerApplicationForm from "./CareerApplicationForm";
import CareerApplicationSidebar from "./CareerApplicationSidebar";
import type { CareerJob } from "./careersContent";

type CareerApplicationProps = {
  job: CareerJob;
};

export default function CareerApplication({ job }: CareerApplicationProps) {
  return (
    <section className="career-application" aria-labelledby="career-application-title">
      <div className="career-application__backdrop" aria-hidden="true">
        <span className="career-application__orb career-application__orb--left" />
        <span className="career-application__orb career-application__orb--right" />
      </div>

      <div className="career-application__inner">
        <h2 id="career-application-title" className="sr-only">
          Apply for {job.title} at Sangi Hospital
        </h2>

        <CareerApplicationForm job={job} />
        <CareerApplicationSidebar job={job} />
      </div>
    </section>
  );
}
