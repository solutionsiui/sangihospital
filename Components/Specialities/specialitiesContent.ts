export type Speciality = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  services: string[];
  featured?: boolean;
};

export const specialitiesPage = {
  hero: {
    title: "Our Specialities",
    subtitle:
      "Comprehensive medical expertise across departments — led by experienced specialists at Sangi Hospital.",
    backgroundImage: "/assets/images/home/servicehome.png",
  },
  intro: {
    eyebrow: "Medical Excellence",
    heading: "Expert Care Across",
    headingAccent: "Every Speciality",
    paragraphs: [
      "Sangi Hospital brings together advanced diagnostics, experienced consultants, and compassionate nursing under one trusted healthcare network across Uttar Pradesh.",
      "From general medicine and preventive care to complex surgical and critical care services, every speciality is designed around accurate diagnosis, timely treatment, and long-term patient well-being.",
    ],
    stats: [
      { value: "18+", label: "Specialities" },
      { value: "6+", label: "Hospital Locations" },
      { value: "24/7", label: "Emergency Care" },
    ],
    imageBadge: {
      value: "150K+",
      label: "Patients Treated Annually",
    },
    image: "/assets/images/home/20240920064059.jpg",
  },
  highlights: [
    {
      title: "Experienced Consultants",
      description:
        "Senior doctors across specialities with years of clinical practice and patient-first care.",
    },
    {
      title: "Modern Diagnostics",
      description:
        "Integrated lab, radiology, and screening services to support faster, accurate treatment plans.",
    },
    {
      title: "Network-wide Access",
      description:
        "Speciality care available across Sangi Hospital locations for families throughout the region.",
    },
  ],
  cta: {
    title: "Need the Right Specialist?",
    description:
      "Book a consultation with our medical team and get guided to the right speciality for your health needs.",
    buttonLabel: "Book An Appointment",
    buttonHref: "/appointment",
  },
  items: [
    {
      id: "general-medicine",
      slug: "general-medicine",
      name: "General Medicine",
      category: "Core Speciality",
      description:
        "Comprehensive primary care for adults — from routine check-ups and preventive health to diagnosis and management of common and chronic illnesses.",
      services: [
        "Preventive Health Checkups",
        "Fever & Infections",
        "Diabetes & BP Care",
        "Lifestyle Disorders",
      ],
      featured: true,
    },
    {
      id: "general-surgery",
      slug: "general-surgery",
      name: "General Surgery",
      category: "Surgical Care",
      description:
        "Safe surgical procedures with modern OT facilities, pre-operative assessment, and post-operative recovery support.",
      services: ["Minimally Invasive", "Abdominal Surgery", "Hernia Repair", "Post-op Care"],
    },
    {
      id: "orthopaedics",
      slug: "orthopaedics",
      name: "Orthopaedics",
      category: "Surgical Care",
      description:
        "Treatment for bone, joint, and musculoskeletal injuries — from fractures and arthritis to sports-related conditions.",
      services: ["Joint Pain", "Fracture Care", "Sports Injury", "Arthritis Management"],
    },
    {
      id: "obstetrics-gynaecology",
      slug: "obstetrics-gynaecology",
      name: "Obstetrics & Gynaecology",
      category: "Women's Health",
      description:
        "Complete maternity and women's healthcare including prenatal care, gynaecological procedures, and reproductive health support.",
      services: ["Maternity Care", "Prenatal Support", "PCOS Care", "Women's Wellness"],
    },
    {
      id: "paediatrics",
      slug: "paediatrics",
      name: "Paediatrics",
      category: "Child Care",
      description:
        "Dedicated healthcare for infants and children with growth monitoring, vaccinations, and paediatric illness management.",
      services: ["Child Vaccines", "Growth Monitoring", "Fever Care", "Nutrition Guidance"],
    },
    {
      id: "neurology",
      slug: "neurology",
      name: "Neurology",
      category: "Core Speciality",
      description:
        "Expert evaluation and treatment for neurological disorders, headaches, seizures, stroke recovery, and nerve-related conditions.",
      services: ["Stroke Care", "Epilepsy", "Migraine", "Nerve Disorders"],
    },
    {
      id: "ent",
      slug: "ent",
      name: "ENT",
      category: "Surgical Care",
      description:
        "Specialist care for ear, nose, and throat conditions including sinus disorders, hearing issues, and voice-related problems.",
      services: ["Sinus Care", "Hearing Tests", "Tonsil Treatment", "Voice Disorders"],
    },
    {
      id: "dermatology",
      slug: "dermatology",
      name: "Dermatology",
      category: "Core Speciality",
      description:
        "Diagnosis and treatment of skin, hair, and nail conditions — from allergies and infections to chronic dermatological care.",
      services: ["Skin Allergies", "Acne & Eczema", "Hair & Scalp Care", "Cosmetic Dermatology"],
    },
    {
      id: "gastroenterology",
      slug: "gastroenterology",
      name: "Gastroenterology",
      category: "Core Speciality",
      description:
        "Expert care for digestive and liver disorders including acidity, IBS, hepatitis, and endoscopy-supported evaluation.",
      services: ["Endoscopy", "Liver Care", "IBS Management", "Acidity & Ulcers"],
    },
    {
      id: "nephrology",
      slug: "nephrology",
      name: "Nephrology",
      category: "Core Speciality",
      description:
        "Specialised kidney care covering chronic kidney disease, dialysis support, electrolyte disorders, and renal health management.",
      services: ["Kidney Disease", "Dialysis Support", "UTI Care", "Renal Screening"],
    },
    {
      id: "urology",
      slug: "urology",
      name: "Urology",
      category: "Surgical Care",
      description:
        "Treatment for urinary tract and male reproductive conditions with modern diagnostics and minimally invasive surgical options.",
      services: ["Kidney Stones", "Prostate Care", "UTI Treatment", "Urological Surgery"],
    },
    {
      id: "dentistry",
      slug: "dentistry",
      name: "Dentistry",
      category: "Dental Care",
      description:
        "Complete oral healthcare including preventive dentistry, restorative treatments, extractions, and routine dental checkups.",
      services: ["Dental Checkups", "Root Canal", "Tooth Extraction", "Oral Hygiene"],
    },
    {
      id: "diabetology",
      slug: "diabetology",
      name: "Diabetology",
      category: "Core Speciality",
      description:
        "Focused diabetes and metabolic care with blood sugar monitoring, complication prevention, and personalised lifestyle guidance.",
      services: ["Type 1 & 2 Diabetes", "HbA1c Monitoring", "Diet Counselling", "Complication Care"],
    },
    {
      id: "physiotherapy",
      slug: "physiotherapy",
      name: "Physiotherapy",
      category: "Rehabilitation",
      description:
        "Recovery-focused physiotherapy for pain relief, mobility restoration, post-surgery rehab, and sports injury management.",
      services: ["Pain Management", "Post-op Rehab", "Sports Recovery", "Mobility Therapy"],
    },
    {
      id: "radiology",
      slug: "radiology",
      name: "Radiology",
      category: "Diagnostics",
      description:
        "High-quality imaging services including digital X-Ray, ultrasonography, and CT scan for precise medical diagnosis.",
      services: ["Digital X-Ray", "Ultrasound", "CT Scan", "Imaging Reports"],
    },
    {
      id: "pathology",
      slug: "pathology",
      name: "Pathology",
      category: "Diagnostics",
      description:
        "Accurate laboratory testing and pathology services supporting diagnosis, treatment planning, and preventive health screening.",
      services: ["Blood Tests", "Biopsy Analysis", "Culture Reports", "Health Panels"],
    },
    {
      id: "haematology",
      slug: "haematology",
      name: "Haematology",
      category: "Diagnostics",
      description:
        "Specialist evaluation of blood disorders including anaemia, clotting conditions, and bone marrow-related health concerns.",
      services: ["Anaemia Care", "Blood Disorders", "Clotting Tests", "Bone Marrow Screening"],
    },
    {
      id: "emergency-trauma-care",
      slug: "emergency-trauma-care",
      name: "Emergency & Trauma Care",
      category: "Critical Care",
      description:
        "24/7 emergency response with rapid triage, trauma care, and immediate medical intervention when every minute matters.",
      services: ["Trauma Care", "24/7 Emergency", "Critical Support", "Rapid Triage"],
    },
  ] satisfies Speciality[],
} as const;

export const generalMedicineFeature = specialitiesPage.items.find(
  (item) => item.id === "general-medicine",
)!;

export const generalMedicineFeatureMeta = {
  sectionTitle: "Where Every Health Journey Begins",
  sectionLead:
    "General Medicine is the foundation of patient care at Sangi Hospital — connecting families to the right treatment, specialists, and follow-up across our network.",
  image: "/assets/images/home/hero_bg_1.jpeg",
  points: [
    "Adult primary care and chronic disease management",
    "Integrated lab, radiology, and specialist referrals",
    "Preventive screenings and long-term wellness plans",
  ],
  highlights: [
    { value: "12+", label: "Consultants" },
    { value: "Mon–Sat", label: "OPD Hours" },
    { value: "24/7", label: "Emergency Support" },
  ],
  primaryCta: "Explore General Medicine",
  secondaryCta: "Book Consultation",
  secondaryHref: "/appointment",
} as const;

const specialityImages = {
  generalmedicine: "/assets/images/specialities/medicalspecialities/generalmedicine/generalmedicine.jpg",
  neurology: "/assets/images/specialities/medicalspecialities/neurology/neurology.jpg",
  orthopaedics: "/assets/images/specialities/surgicalandclinicalcare/orthopaedics/orthopaedics.png",
  obstetricsgynaecology: "/assets/images/specialities/surgicalandclinicalcare/obstetricsandgynaec/obstetricsandgynaec.jpg",
  paediatrics: "/assets/images/specialities/surgicalandclinicalcare/paediatrics/paediatrics.jpeg",
  ENT: "/assets/images/specialities/surgicalandclinicalcare/ENT/ENT.jpg",
  dermatology: "/assets/images/specialities/medicalspecialities/dermatology/dermatology.jpg",
  gastroenterology: "/assets/images/specialities/medicalspecialities/gastroenterology/gastroenterology.webp",
  nephrology: "/assets/images/specialities/medicalspecialities/nephrology/nephrology.webp",
  urology: "/assets/images/specialities/surgicalandclinicalcare/urology/urology.jpg",
  dentistry: "/assets/images/specialities/surgicalandclinicalcare/dentistry/dentistry.jpg",
  diabetology: "/assets/images/specialities/medicalspecialities/diabetology/diabetology.jpg",
  physiotherapy: "/assets/images/specialities/surgicalandclinicalcare/physiotherapy/physiotherapy.png",
  radiology: "/assets/images/specialities/dande/radiology/radiology.jpg",
  pathology: "/assets/images/specialities/dande/pathology/pathology.jpg",
  haematology: "/assets/images/specialities/dande/haematology/haematology.jpg",
  emergencytrauma: "/assets/images/specialities/dande/emergencyandtraumacare/emergencyandtrauma.jpeg",
  generalsurgery: "/assets/images/specialities/surgicalandclinicalcare/generalsurgery/generalsurgery.jpg",
  emergency: "/assets/images/home/hero_bg_1.jpeg",
  clinical: "/assets/images/home/20240920064059.jpg",
  diagnostics: "/assets/images/home/servicehome.png",
  care: "/assets/images/home/20250310083759.jpg",
  facility: "/assets/images/home/20250612045907.jpg",
  ward: "/assets/images/home/20251125052239.jpg",
  about: "/assets/images/about/about-banner.jpg",
} as const;

const imageBySpecialityId: Record<string, string> = {
  "general-medicine": specialityImages.generalmedicine,
  "general-surgery": specialityImages.generalsurgery,
  orthopaedics: specialityImages.orthopaedics,
  "obstetrics-gynaecology": specialityImages.obstetricsgynaecology,
  paediatrics: specialityImages.paediatrics,
  neurology: specialityImages.neurology,
  ent: specialityImages.ENT,
  dermatology: specialityImages.dermatology,
  gastroenterology: specialityImages.gastroenterology,
  nephrology: specialityImages.nephrology,
  urology: specialityImages.urology,
  dentistry: specialityImages.dentistry,
  diabetology: specialityImages.diabetology,
  physiotherapy: specialityImages.physiotherapy,
  radiology: specialityImages.radiology,
  pathology: specialityImages.pathology,
  haematology: specialityImages.haematology,
  "emergency-trauma-care": specialityImages.emergencytrauma,
};

export type SpecialityDetail = Speciality & {
  image: string;
  points: string[];
  detailParagraphs: string[];
};

function enrichSpeciality(item: Speciality): SpecialityDetail {
  return {
    ...item,
    image: imageBySpecialityId[item.id] ?? specialityImages.clinical,
    points: [
      `Experienced ${item.name.toLowerCase()} consultants and clinical teams`,
      `Integrated diagnostics and coordinated treatment planning`,
      `Accessible across Sangi Hospital locations in Uttar Pradesh`,
    ],
    detailParagraphs: [
      `The ${item.name} department at Sangi Hospital combines specialist expertise, modern medical infrastructure, and compassionate patient support for accurate diagnosis and effective treatment.`,
      item.description,
    ],
  };
}

export const specialityDetails: SpecialityDetail[] =
  specialitiesPage.items.map(enrichSpeciality);

export function getSpecialityBySlug(slug: string) {
  return specialityDetails.find((item) => item.slug === slug);
}

export function getRelatedSpecialities(speciality: SpecialityDetail, limit = 3) {
  return specialityDetails
    .filter(
      (item) => item.category === speciality.category && item.slug !== speciality.slug,
    )
    .slice(0, limit);
}
