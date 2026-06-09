import Image from "next/image";
import { Quote } from "lucide-react";
import { chairpersonMessage } from "./aboutContent";

export default function ChairpersonMessage() {
  return (
    <section className="chairperson-message bg-gradient-primary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
            {chairpersonMessage.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            {chairpersonMessage.heading}
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Photo column — with glow */}
          <div className="chairperson__image-col mx-auto w-full max-w-sm lg:col-span-2">
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="chairperson__glow pointer-events-none absolute z-0"
                aria-hidden="true"
              />

              <div className="relative z-[1] aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <Image
                  src={chairpersonMessage.image}
                  alt={chairpersonMessage.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Name plate */}
              <div className="absolute -bottom-5 left-4 right-4 z-[2] rounded-xl border border-white/10 bg-white/[0.08] px-5 py-4 text-center shadow-lg backdrop-blur-md sm:left-6 sm:right-6">
                <p className="font-heading text-lg font-bold text-white">
                  {chairpersonMessage.name}
                </p>
                <p className="mt-0.5 font-body text-xs font-medium text-white/60">
                  {chairpersonMessage.title}
                </p>
              </div>
            </div>
          </div>

          {/* Message column */}
          <div className="chairperson__content-col mt-6 lg:col-span-3 lg:mt-0">
            <Quote
              className="mb-4 h-10 w-10 text-white/15"
              strokeWidth={1}
              aria-hidden="true"
            />

            <div className="space-y-4">
              {chairpersonMessage.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="font-body text-base leading-relaxed text-white/75"
                >
                  {para}
                </p>
              ))}
            </div>

            {chairpersonMessage.closingNote && (
              <p className="mt-6 font-body text-sm italic text-white/50">
                {chairpersonMessage.closingNote}
              </p>
            )}

            <div className="mt-6">
              <p className="font-heading text-lg font-bold text-white">
                {chairpersonMessage.name}
              </p>
              <p className="font-body text-sm text-white/50">
                {chairpersonMessage.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
