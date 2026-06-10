"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./sangidef.css";

type SangiLetter = {
  letter: string;
  keyword: string;
  description: string;
};

const sangiLetters: SangiLetter[] = [
  {
    letter: "S",
    keyword: "Service",
    description:
      "We put patients first with compassionate, round-the-clock care delivered by dedicated teams across every department.",
  },
  {
    letter: "A",
    keyword: "Accessible",
    description:
      "Quality healthcare brought closer to families through our growing hospital network across Uttar Pradesh.",
  },
  {
    letter: "N",
    keyword: "Network",
    description:
      "A trusted multi-location healthcare network connecting communities to specialists, diagnostics, and emergency care.",
  },
  {
    letter: "G",
    keyword: "Guided",
    description:
      "Experienced doctors and modern protocols guide every treatment plan — from prevention through recovery.",
  },
  {
    letter: "I",
    keyword: "Integrated",
    description:
      "Multi-speciality care under one roof — cardiology, neurology, gynecology, diagnostics, and more.",
  },
];

const WORD = "SANGI";

export default function Sangidef() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = sangiLetters.length;

  const updateActiveIndex = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportH = window.innerHeight;
    const scrolled = -rect.top;
    const scrollableRange = sectionHeight - viewportH;

    if (scrollableRange <= 0) return;

    const progress = Math.min(Math.max(scrolled / scrollableRange, 0), 1);
    const index = Math.min(Math.floor(progress * total), total - 1);
    setActiveIndex(index);
  }, [total]);

  useEffect(() => {
    updateActiveIndex();
    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const activeItem = sangiLetters[activeIndex];
  const glowOffset = (activeIndex / Math.max(total - 1, 1)) * 100;

  return (
    <section
      ref={sectionRef}
      className="sangidef"
      style={{ "--sangi-steps": total } as React.CSSProperties}
      aria-label="What SANGI means"
    >
      <div className="sangidef__sticky">
        <div
          className="sangidef__glow"
          aria-hidden="true"
          style={{
            transform: `translate(calc(-50% + ${(glowOffset - 50) * 0.35}%), -50%)`,
            opacity: 0.55 + activeIndex * 0.09,
          }}
        />

        <div className="sangidef__inner">
          <p className="sangidef__eyebrow">What SANGI Stands For</p>

          <div className="sangidef__word" aria-hidden="true">
            {WORD.split("").map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={`sangidef__letter${
                  index === activeIndex
                    ? " is-active"
                    : index < activeIndex
                      ? " is-past"
                      : ""
                }`}
              >
                {char}
              </span>
            ))}
          </div>

          <div
            className="sangidef__copy"
            aria-live="polite"
            aria-atomic="true"
          >
            {sangiLetters.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <div
                  key={item.letter}
                  className={`sangidef__panel${
                    isActive ? " is-active" : isPast ? " is-past" : ""
                  }`}
                  aria-hidden={!isActive}
                >
                  <p className="sangidef__keyword">{item.keyword}</p>
                  <p className="sangidef__description">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="sangidef__footer">
            <div
              className="sangidef__progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={activeIndex + 1}
              aria-label="SANGI definition progress"
            >
              <div
                className="sangidef__progress-fill"
                style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
              />
            </div>

            <p className="sangidef__counter" aria-hidden="true">
              <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
              {" / "}
              {String(total).padStart(2, "0")}
            </p>
          </div>

          <span className="sr-only">
            {activeItem.keyword}: {activeItem.description}
          </span>
        </div>
      </div>
    </section>
  );
}
