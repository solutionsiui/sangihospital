export type PatientCornerSection = {
  id: string;
  label: string;
  description: string;
  href: string;
};

export const patientCornerMegaMenu = {
  title: "Patient Corner",
  description:
    "Explore health articles, expert podcasts, and inspiring recovery stories from the Sangi Hospital community.",
  image: "/assets/images/home/hero_bg_1.jpeg",
  imageAlt: "Patients at Sangi Hospital",
  viewAllHref: "/patient-corner",
  sections: [
    {
      id: "blogs",
      label: "Blogs",
      description:
        "Read expert health articles, wellness tips, and medical guides written by our doctors.",
      href: "/patient-corner/blogs",
    },
    {
      id: "podcasts",
      label: "Podcasts",
      description:
        "Listen to conversations with specialists on prevention, treatment, and healthy living.",
      href: "/patient-corner/podcasts",
    },
    {
      id: "patient-stories",
      label: "Patient Stories",
      description:
        "Discover real recovery journeys and heartfelt experiences shared by our patients.",
      href: "/patient-corner/patient-stories",
    },
  ] satisfies PatientCornerSection[],
} as const;
