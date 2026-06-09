import { Target, Eye } from "lucide-react";
import { missionVision } from "./aboutContent";

function MissionCard({
  title,
  text,
  icon: Icon,
  accent,
}: {
  title: string;
  text: string;
  icon: typeof Target;
  accent: string;
}) {
  return (
    <div className="mission-vision__card group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,3,40,0.06)] transition-all duration-300 sm:p-10">
      {/* Top accent bar */}
      <div
        className={`absolute left-0 top-0 h-1 w-full ${accent}`}
        aria-hidden="true"
      />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-foreground-soft">
        <Icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
      </div>

      <h3 className="font-heading text-2xl font-bold text-foreground-deeper">
        {title}
      </h3>

      <p className="mt-4 font-body text-base leading-relaxed text-slate-600">
        {text}
      </p>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className="mission-vision bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-foreground-accent">
            {missionVision.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground-deeper sm:text-4xl">
            {missionVision.heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <MissionCard
            title={missionVision.mission.title}
            text={missionVision.mission.text}
            icon={Target}
            accent="bg-gradient-primary"
          />
          <MissionCard
            title={missionVision.vision.title}
            text={missionVision.vision.text}
            icon={Eye}
            accent="bg-foreground-accent"
          />
        </div>
      </div>
    </section>
  );
}
