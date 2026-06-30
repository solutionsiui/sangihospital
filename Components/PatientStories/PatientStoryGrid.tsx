import { patientStories } from "./patientStoriesContent";
import PatientStoryCard from "./PatientStoryCard";

export default function PatientStoryGrid() {
  const [featured, ...rest] = patientStories;

  return (
    <section className="pstory-grid" aria-label="Patient recovery stories">
      <div className="pstory-grid__intro">
        <p className="pstory-grid__eyebrow">Real Patients. Real Recoveries.</p>
        <p className="pstory-grid__text">
          Every story here is a reminder that compassionate care changes lives.
          These families trusted Sangi Hospital — and found hope when they needed
          it most.
        </p>
      </div>

      <div className="pstory-grid__inner">
        <PatientStoryCard story={featured} featured />

        <div className="pstory-grid__list">
          {rest.map((story) => (
            <PatientStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
