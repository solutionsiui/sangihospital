import { statsStrip } from "./aboutContent";

export default function StatsStrip() {
  return (
    <section className="stats-strip bg-gradient-primary py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {statsStrip.map((stat) => (
            <div
              key={stat.label}
              className="stats-strip__item text-center"
            >
              <p className="font-heading text-3xl font-bold leading-none text-white sm:text-4xl lg:text-[2.75rem]">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-sm font-medium text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
