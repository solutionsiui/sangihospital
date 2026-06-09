import { ourJourney } from "./aboutContent";

export default function OurJourney() {
  return (
    <section className="our-journey bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-foreground-accent">
            {ourJourney.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground-deeper sm:text-4xl">
            {ourJourney.heading}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-foreground/10 sm:left-1/2 sm:block"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-0">
            {ourJourney.milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className="timeline-item relative sm:flex sm:items-start sm:py-6"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-6 top-1 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-foreground bg-white sm:left-1/2 sm:block"
                    aria-hidden="true"
                  />

                  {/* Left side (even) or spacer (odd) */}
                  <div
                    className={`hidden sm:block sm:w-1/2 ${
                      isEven ? "pr-12 text-right" : ""
                    }`}
                  >
                    {isEven && (
                      <div className="timeline-card">
                        <span className="font-heading text-sm font-bold text-foreground-accent">
                          {milestone.year}
                        </span>
                        <h3 className="mt-1 font-heading text-xl font-bold text-foreground-deeper">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right side (odd) or spacer (even) */}
                  <div
                    className={`sm:w-1/2 ${!isEven ? "pl-0 sm:pl-12" : ""}`}
                  >
                    {!isEven && (
                      <div className="timeline-card">
                        <span className="font-heading text-sm font-bold text-foreground-accent">
                          {milestone.year}
                        </span>
                        <h3 className="mt-1 font-heading text-xl font-bold text-foreground-deeper">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout (always left-aligned) */}
                  <div className="relative pl-14 sm:hidden">
                    <div
                      className="absolute left-6 top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-foreground bg-white"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute left-6 top-0 h-full w-px bg-foreground/10"
                      aria-hidden="true"
                    />
                    <span className="font-heading text-sm font-bold text-foreground-accent">
                      {milestone.year}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-foreground-deeper">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
