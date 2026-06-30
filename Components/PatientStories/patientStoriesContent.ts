export type PatientProfile = {
  name: string;
  age: number;
  city: string;
  avatar: string;
};

export type PatientStory = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  quote: string;
  category: string;
  image: string;
  patient: PatientProfile;
  treatedBy: string;
  hospital: string;
  publishedDate: string;
  recoveryTime: string;
  outcome: string;
  journey: string[];
  content: string[];
};

export const patientStoryImages = {
  hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  cardiac:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  maternity:
    "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=80",
  emergency:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  orthopedics:
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
  affordableCare:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  patient1:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
  patient2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  patient3:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
  patient4:
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=200&h=200&q=80",
  patient5:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
} as const;

export const patientStoriesPage = {
  hero: {
    eyebrow: "Patient Corner",
    title: "Stories of Hope & Recovery",
    subtitle:
      "Real journeys from families who found compassionate care, expert treatment, and a reason to believe again at Sangi Hospital.",
    backgroundImage: patientStoryImages.hero,
  },
};

export const patientStories: PatientStory[] = [
  {
    id: "1",
    slug: "cardiac-recovery-after-emergency",
    title: "Back on His Feet After a Critical Cardiac Emergency",
    excerpt:
      "When chest pain struck without warning, quick action at Sangi Hospital's emergency and cardiology teams saved Ramesh Kumar's life.",
    quote:
      "I thought I would not see my grandchildren grow up. The doctors did not just treat my heart — they gave our family our father back.",
    category: "Cardiology",
    image: patientStoryImages.cardiac,
    patient: {
      name: "Ramesh Kumar",
      age: 58,
      city: "Raya, Mathura",
      avatar: patientStoryImages.patient2,
    },
    treatedBy: "Dr. Rajesh Kumar, Cardiology",
    hospital: "Sangi Hospital, Raya",
    publishedDate: "2026-02-20",
    recoveryTime: "6 weeks",
    outcome: "Fully Recovered",
    journey: [
      "Rushed to ER with severe chest pain",
      "Emergency angioplasty within the golden hour",
      "Monitored in ICU with family counselling",
      "Cardiac rehab and lifestyle guidance",
      "Returned to daily activities with confidence",
    ],
    content: [
      "Ramesh Kumar, a shopkeeper in Raya, had ignored mild discomfort for days until one evening the pain became unbearable. His family brought him to Sangi Hospital's emergency department within minutes.",
      "The cardiology team diagnosed a blocked artery and performed an emergency procedure the same night. His wife recalls the calm, clear communication from doctors who explained every step.",
      "After ICU monitoring and a structured recovery plan, Ramesh completed cardiac rehabilitation at the hospital. Today he walks daily, follows his medication plan, and encourages neighbours to seek help early.",
    ],
  },
  {
    id: "2",
    slug: "safe-maternity-journey-first-baby",
    title: "A Safe Maternity Journey for Our First Baby",
    excerpt:
      "Priya and her husband share how compassionate gynecology care turned a high-risk pregnancy into a joyful, healthy delivery.",
    quote:
      "Every nurse remembered our names. Every scan was explained with patience. We never felt like just another case file.",
    category: "Gynecology",
    image: patientStoryImages.maternity,
    patient: {
      name: "Priya Sharma",
      age: 29,
      city: "Lakshmi Nagar",
      avatar: patientStoryImages.patient1,
    },
    treatedBy: "Dr. Anjali Verma, Gynecology",
    hospital: "Sangi Hospital, Lakshmi Nagar",
    publishedDate: "2026-01-18",
    recoveryTime: "2 weeks",
    outcome: "Healthy Mother & Baby",
    journey: [
      "High-risk pregnancy identified early",
      "Regular monitoring and nutritional support",
      "Family-oriented birthing plan created",
      "Safe delivery with NICU standby",
      "Postnatal lactation and newborn screening",
    ],
    content: [
      "Priya's pregnancy was classified as high-risk due to gestational concerns identified in her first trimester. The gynecology team at Sangi Hospital created a detailed care plan with frequent check-ups.",
      "Her husband was involved in every counselling session, learning how to support Priya through each stage. The labour room team respected their preferences while staying prepared for any complication.",
      "Their daughter was born healthy. Priya credits the hospital's warmth and the doctors' availability at all hours for making a frightening experience feel safe and hopeful.",
    ],
  },
  {
    id: "3",
    slug: "road-accident-emergency-recovery",
    title: "From Road Accident to Recovery in 90 Days",
    excerpt:
      "A traumatic accident left Vikram fighting for his life. Sangi Hospital's trauma team coordinated surgery, ICU care, and rehabilitation under one roof.",
    quote:
      "They fought for me when I could not fight for myself. My family says it was the speed and teamwork that made the difference.",
    category: "Emergency & Trauma",
    image: patientStoryImages.emergency,
    patient: {
      name: "Vikram Singh",
      age: 34,
      city: "Mathura",
      avatar: patientStoryImages.patient2,
    },
    treatedBy: "Dr. Vikram Malhotra, Emergency Medicine",
    hospital: "Sangi Hospital, Raya",
    publishedDate: "2025-12-05",
    recoveryTime: "90 days",
    outcome: "Returned to Work",
    journey: [
      "Admitted via ambulance after road accident",
      "Emergency surgery for internal injuries",
      "ICU care with 24x7 specialist monitoring",
      "Physiotherapy and pain management",
      "Gradual return to independent living",
    ],
    content: [
      "Vikram was brought to Sangi Hospital unconscious after a road accident on the Mathura highway. The trauma team stabilised him within the first critical hour and coordinated imaging, surgery, and blood support seamlessly.",
      "His parents spent weeks at the hospital. They remember nurses who checked on them as much as on Vikram, and doctors who gave honest updates without taking away hope.",
      "After three months of treatment and physiotherapy, Vikram returned to his job as a school teacher. He now volunteers to speak with accident victims about the importance of immediate trauma care.",
    ],
  },
  {
    id: "4",
    slug: "knee-replacement-back-to-walking",
    title: "Walking Again After Years of Knee Pain",
    excerpt:
      "Sunita endured chronic knee pain for years until orthopaedic surgery at Sangi Hospital restored her mobility and independence.",
    quote:
      "I had stopped visiting the temple because I could not climb the steps. Today I walk there every morning without fear.",
    category: "Orthopaedics",
    image: patientStoryImages.orthopedics,
    patient: {
      name: "Sunita Devi",
      age: 62,
      city: "Raya, Mathura",
      avatar: patientStoryImages.patient4,
    },
    treatedBy: "Orthopaedics Team, Sangi Hospital",
    hospital: "Sangi Hospital, Raya",
    publishedDate: "2025-11-22",
    recoveryTime: "8 weeks",
    outcome: "Pain-Free Mobility",
    journey: [
      "Years of chronic knee pain limiting movement",
      "Detailed imaging and surgical consultation",
      "Successful knee replacement procedure",
      "Structured physiotherapy programme",
      "Independent walking and daily activities restored",
    ],
    content: [
      "Sunita had accepted knee pain as a part of ageing until it prevented her from cooking, visiting family, and performing daily prayers. Her son convinced her to consult specialists at Sangi Hospital.",
      "After thorough evaluation, the orthopaedics team recommended knee replacement with a clear recovery timeline. The surgery was completed successfully with modern implants and infection-control protocols.",
      "Physiotherapists worked with Sunita daily until she could walk confidently on her own. She now tends her garden again and tells other seniors that treatment is worth pursuing at any age.",
    ],
  },
  {
    id: "5",
    slug: "ayushman-bharat-life-saving-surgery",
    title: "Life-Saving Surgery Through Ayushman Bharat",
    excerpt:
      "When a family's savings ran out, Ayushman Bharat coverage at Sangi Hospital made complex surgery possible without financial ruin.",
    quote:
      "We were ready to sell our land. Sangi Hospital showed us that quality treatment and dignity are possible even when you have very little.",
    category: "Patient Support",
    image: patientStoryImages.affordableCare,
    patient: {
      name: "Manoj Tiwari",
      age: 45,
      city: "Etah",
      avatar: patientStoryImages.patient3,
    },
    treatedBy: "General Surgery Team",
    hospital: "Sangi Hospital, Raya",
    publishedDate: "2025-10-14",
    recoveryTime: "5 weeks",
    outcome: "Treatment Completed",
    journey: [
      "Diagnosed with condition requiring urgent surgery",
      "Financial distress after exhausting savings",
      "Ayushman Bharat eligibility verified at hospital",
      "Surgery completed with full insurance support",
      "Discharged with follow-up care and dignity intact",
    ],
    content: [
      "Manoj, a farmer from Etah, needed urgent surgical intervention but had already spent everything on consultations elsewhere. A neighbour directed his family to Sangi Hospital.",
      "The hospital's patient support desk helped verify Ayushman Bharat eligibility and handled documentation so the family could focus on Manoj's health. There was no pressure, no judgment — only clear guidance.",
      "The surgery was successful. Manoj recovered fully and his family did not have to sell their land. His story has encouraged many in his village to seek care through government schemes at Sangi Hospital.",
    ],
  },
];
