import type { CSSProperties } from "react";
import { careersPage } from "./careersContent";

export default function CareersCulture() {
  const { culture, process } = careersPage;

  return (
    <>
      <section className="careers-culture" aria-labelledby="careers-culture-title">
        <div className="careers-culture__inner">
          <div className="careers-culture__header">
            <span className="careers-culture__eyebrow">{culture.eyebrow}</span>
            <h2 id="careers-culture-title" className="careers-culture__title">
              {culture.heading}{" "}
              <span className="careers-culture__title-accent">{culture.headingAccent}</span>
            </h2>
          </div>

          <div className="careers-culture__grid">
            {culture.points.map((point, index) => (
              <article
                key={point.title}
                className="careers-culture__card"
                style={{ "--culture-delay": `${index * 100}ms` } as CSSProperties}
              >
                <span className="careers-culture__card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="careers-culture__card-title">{point.title}</h3>
                <p className="careers-culture__card-text">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-process" aria-labelledby="careers-process-title">
        <div className="careers-process__inner">
          <div className="careers-process__header">
            <span className="careers-process__eyebrow">{process.eyebrow}</span>
            <h2 id="careers-process-title" className="careers-process__title">
              {process.heading}{" "}
              <span className="careers-process__title-accent">{process.headingAccent}</span>
            </h2>
          </div>

          <ol className="careers-process__steps">
            {process.steps.map((step) => (
              <li key={step.step} className="careers-process__step">
                <span className="careers-process__step-number">{step.step}</span>
                <div>
                  <h3 className="careers-process__step-title">{step.title}</h3>
                  <p className="careers-process__step-text">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
