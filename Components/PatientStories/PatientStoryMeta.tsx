import {
  CalendarDays,
  Clock3,
  MapPin,
  Stethoscope,
  UserRound,
} from "lucide-react";
import type { PatientStory } from "./patientStoriesContent";
import "./patient-stories.css";

type PatientStoryMetaProps = {
  story: Pick<
    PatientStory,
    "patient" | "publishedDate" | "recoveryTime" | "hospital" | "treatedBy"
  >;
  variant?: "card" | "detail";
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function PatientStoryMeta({
  story,
  variant = "card",
}: PatientStoryMetaProps) {
  return (
    <div className={`pstory-meta pstory-meta--${variant}`}>
      <div className="pstory-meta__item">
        <UserRound size={15} strokeWidth={2} aria-hidden="true" />
        <span>
          {story.patient.name}, {story.patient.age}
        </span>
      </div>
      <div className="pstory-meta__item">
        <MapPin size={15} strokeWidth={2} aria-hidden="true" />
        <span>{story.patient.city}</span>
      </div>
      <div className="pstory-meta__item">
        <CalendarDays size={15} strokeWidth={2} aria-hidden="true" />
        <time dateTime={story.publishedDate}>{formatDate(story.publishedDate)}</time>
      </div>
      {variant === "detail" ? (
        <>
          <div className="pstory-meta__item">
            <Clock3 size={15} strokeWidth={2} aria-hidden="true" />
            <span>Recovery: {story.recoveryTime}</span>
          </div>
          <div className="pstory-meta__item">
            <Stethoscope size={15} strokeWidth={2} aria-hidden="true" />
            <span>{story.treatedBy}</span>
          </div>
        </>
      ) : null}
    </div>
  );
}
