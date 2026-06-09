import { Heart, Award, ShieldCheck, Lightbulb } from "lucide-react";
import { coreValues } from "./aboutContent";

const iconMap = {
  heart: Heart,
  award: Award,
  shield: ShieldCheck,
  lightbulb: Lightbulb,
} as const;

export default function CoreValues() {
  return (
    <section className="core-values bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-foreground-accent">
            {coreValues.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground-deeper sm:text-4xl">
            {coreValues.heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {coreValues.values.map((value, index) => {
            const Icon =
              iconMap[value.icon as keyof typeof iconMap] ?? Heart;

            return (
              <div
                key={value.title}
                className="core-value-card group relative rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-[0_4px_20px_rgba(0,3,40,0.04)] transition-all duration-300"
              >
                {/* Numbered accent */}
                <span
                  className="absolute right-5 top-4 font-heading text-5xl font-bold text-foreground/[0.04]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-foreground-soft">
                  <Icon
                    className="h-7 w-7 text-foreground"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground-deeper">
                  {value.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
