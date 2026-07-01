export type LegalHighlight = {
  icon: "shield" | "lock" | "file" | "heart" | "cookie" | "users" | "clipboard";
  title: string;
  text: string;
};

export type LegalSubsection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  subsections?: LegalSubsection[];
};

export type LegalPageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  lastUpdated: string;
  intro: string;
  highlights?: LegalHighlight[];
  sections: LegalSection[];
};
