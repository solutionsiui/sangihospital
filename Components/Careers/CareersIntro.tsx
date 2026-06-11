import { careersPage } from "./careersContent";

export default function CareersIntro() {
  const { intro } = careersPage;

  return (
    <section className="careers-intro" aria-labelledby="careers-intro-title">
      <div className="careers-intro__backdrop" aria-hidden="true">
        <span className="careers-intro__orb careers-intro__orb--left" />
        <span className="careers-intro__orb careers-intro__orb--right" />
        <span className="careers-intro__grid-lines" />
      </div>

      <div className="careers-intro__inner">
        <div className="careers-intro__content">
          <span className="careers-intro__eyebrow">{intro.eyebrow}</span>

          <h2 id="careers-intro-title" className="careers-intro__title">
            {intro.heading}{" "}
            <span className="careers-intro__title-accent">{intro.headingAccent}</span>
          </h2>

          <p className="careers-intro__lead">{intro.description}</p>

          <div className="careers-intro__stats" role="list">
            {intro.stats.map((stat) => (
              <div key={stat.label} className="careers-intro__stat" role="listitem">
                <p className="careers-intro__stat-value">{stat.value}</p>
                <p className="careers-intro__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
