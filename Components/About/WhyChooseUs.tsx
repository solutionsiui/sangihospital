import {
  Clock,
  Users,
  Monitor,
  Wallet,
  Smile,
  MapPin,
} from "lucide-react";
import { whyChooseUs } from "./aboutContent";

const iconMap = {
  clock: Clock,
  users: Users,
  monitor: Monitor,
  wallet: Wallet,
  smile: Smile,
  mapPin: MapPin,
} as const;

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us bg-gradient-primary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
            {whyChooseUs.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            {whyChooseUs.heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {whyChooseUs.features.map((feature) => {
            const Icon =
              iconMap[feature.icon as keyof typeof iconMap] ?? Clock;

            return (
              <div
                key={feature.title}
                className="why-choose-card group rounded-2xl border border-white/[0.08] bg-white/[0.06] p-7 backdrop-blur-sm transition-all duration-300"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08]">
                  <Icon
                    className="h-6 w-6 text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-heading text-lg font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
