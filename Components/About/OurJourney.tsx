"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ourJourney } from "./aboutContent";

export default function OurJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = ourJourney.milestones.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportH = window.innerHeight;
      const scrolled = -rect.top;
      const scrollableRange = sectionHeight - viewportH;

      if (scrollableRange <= 0) return;

      const progress = Math.min(Math.max(scrolled / scrollableRange, 0), 1);
      const index = Math.min(Math.floor(progress * total), total - 1);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [total]);

  const activeMilestone = ourJourney.milestones[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="our-journey relative"
      style={{ height: `${total * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-svh overflow-hidden bg-gradient-primary">
        {/* Background year watermark */}
        <div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
          aria-hidden="true"
        >
          <span className="journey__watermark font-heading text-[20rem] font-bold leading-none text-white/[0.03] sm:text-[28rem]">
            {activeMilestone.year}
          </span>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col px-6 sm:px-8 lg:px-10">
          {/* Top bar — eyebrow + progress */}
          <div className="flex items-center justify-between pb-4 pt-20 lg:pt-10">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                {ourJourney.eyebrow}
              </p>
              <h2 className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl">
                {ourJourney.heading}
              </h2>
            </div>

            {/* Step counter */}
            <div className="hidden items-center gap-3 sm:flex">
              <span className="font-heading text-3xl font-bold text-white">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="h-px w-8 bg-white/25" aria-hidden="true" />
              <span className="font-heading text-lg text-white/40">
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-px w-full bg-white/10">
            <div
              className="h-full bg-white/60 transition-all duration-500 ease-out"
              style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
            />
          </div>

          {/* Main content — two columns */}
          <div className="flex flex-1 flex-col gap-8 py-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
            {/* Left — Image that changes */}
            <div className="relative mx-auto w-full max-w-lg flex-shrink-0 lg:mx-0 lg:w-[48%]">
              <div className="journey__image-frame relative aspect-[4/3] overflow-hidden rounded-2xl">
                {ourJourney.milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      index === activeIndex
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  >
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Year badge on image */}
                {/* <div className="absolute bottom-4 left-4 z-10 rounded-lg border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-md">
                  <p className="font-heading text-2xl font-bold text-white">
                    {activeMilestone.year}
                  </p>
                </div> */}
              </div>

              {/* Vertical dot nav beside image */}
              <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
                {ourJourney.milestones.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "h-6 w-2 bg-white"
                        : i < activeIndex
                          ? "h-2 w-2 bg-white/50"
                          : "h-2 w-2 bg-white/20"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>

            {/* Right — Card content */}
            <div className="flex flex-1 flex-col justify-center lg:pl-4">
              {/* Year tabs — horizontal scrollable on desktop */}
              <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
                {ourJourney.milestones.map((milestone, i) => (
                  <button
                    key={milestone.year}
                    type="button"
                    className={`shrink-0 rounded-full border px-4 py-1.5 font-heading text-sm font-semibold transition-all duration-300 ${
                      i === activeIndex
                        ? "border-white/30 bg-white/15 text-white"
                        : "border-white/8 bg-transparent text-white/30 hover:text-white/50"
                    }`}
                    aria-current={i === activeIndex ? "step" : undefined}
                  >
                    {milestone.year}
                  </button>
                ))}
              </div>

              {/* Animated card */}
              <div className="relative min-h-[200px]">
                {ourJourney.milestones.map((milestone, index) => {
                  const isActive = index === activeIndex;
                  const isPast = index < activeIndex;

                  return (
                    <div
                      key={milestone.year}
                      className={`journey__card absolute inset-x-0 top-0 transition-all duration-500 ease-out ${
                        isActive
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : isPast
                            ? "pointer-events-none -translate-y-6 opacity-0"
                            : "pointer-events-none translate-y-6 opacity-0"
                      }`}
                    >
                      <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                        {milestone.title}
                      </h3>

                      <p className="mt-5 max-w-md font-body text-base leading-relaxed text-white/65 sm:text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile dots */}
              <div className="mt-8 flex gap-2 lg:hidden">
                {ourJourney.milestones.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "h-2 w-6 bg-white"
                        : "h-2 w-2 bg-white/20"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
