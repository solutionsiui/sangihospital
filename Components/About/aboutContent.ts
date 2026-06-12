// ─── About Hero ─────────────────────────────────────────────
export const aboutHero = {
  eyebrow: "Who We Are",
  heading: "Welcome to Sangi Hospital",
  paragraphs: [
    "At Sangi Hospital, healthcare is not just about treatment—it's about people. You, our valued patients, are at the heart of everything we do. We are grateful for your trust and continued support as we deliver compassionate, advanced, and personalized care.",
    "Our mission is to consistently evolve by expanding departments, introducing specialized services, and adopting the latest medical technologies. With the guidance of experienced doctors and dedicated staff, we ensure 24/7 healthcare that prioritizes your comfort, safety, and recovery.",
    "As we shape the future of healthcare in Raya and beyond, we remain committed to keeping your care local, affordable, and world-class.",
  ],
  image: "/assets/images/about/about-hospital.jpg",
  closingNote: "We pray for your continued good health and well-being.",
};

// ─── Mission & Vision ───────────────────────────────────────
export const missionVision = {
  eyebrow: "What Drives Us",
  heading: "Our Mission & Vision",
  mission: {
    title: "Our Mission",
    text: "To deliver high-quality, accessible, and affordable healthcare services with compassion, innovation, and excellence. We aim to be a pillar of trust and care in our community by focusing on patient satisfaction and ethical medical practices.",
  },
  vision: {
    title: "Our Vision",
    text: "To become the most trusted and preferred healthcare provider in Raya, Mathura, and surrounding regions by continuously enhancing our infrastructure, technologies, and professional capabilities while upholding the values of empathy, integrity, and service.",
  },
};

// ─── Core Values ────────────────────────────────────────────
export const coreValues = {
  eyebrow: "What We Stand For",
  heading: "Our Core Values",
  values: [
    {
      title: "Compassion",
      description:
        "Every patient is treated with empathy, dignity, and genuine concern for their well-being.",
      icon: "heart",
    },
    {
      title: "Excellence",
      description:
        "We pursue the highest standards in medical care, infrastructure, and patient experience.",
      icon: "award",
    },
    {
      title: "Integrity",
      description:
        "Transparency and ethical practices guide every decision we make for our patients.",
      icon: "shield",
    },
    {
      title: "Innovation",
      description:
        "We embrace modern technology and medical advancements to deliver cutting-edge treatments.",
      icon: "lightbulb",
    },
  ],
};

// ─── Chairperson's Message ──────────────────────────────────
export type ChairpersonBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "signoff"; lines: string[] };

export const chairpersonMessage = {
  brand: "SANGI HOSPITAL",
  heading: "A Message from the Chairperson",
  name: "Sangita Singh",
  title: "Founder & Chairperson, Sangi Hospital",
  image: "/assets/images/about/chairpersonupdated.jpeg",
  blocks: [
    {
      type: "paragraph",
      text: "There is a memory I have carried with me for over three decades. I was eight years old. A pregnant woman collapsed nearby in the middle of a medical emergency, and her family stood helpless not because they lacked love or will, but because they simply did not have the money to get her treated in time. I watched the panic in their eyes. I didn't understand healthcare systems or economics at that age. I only understood that someone was suffering and that nobody was helping. Without thinking, I emptied every rupee from my little savings and gave it to her family. The amount was nothing, really. But something remarkable happened that small gesture moved the people standing around us. Neighbours gave. Strangers gave. Support arrived. And both the mother and her newborn survived. That day, I learned something I have never been able to unlearn: when one person steps forward with compassion, others follow. Humanity is generous it simply needs someone to go first.",
    },
    {
      type: "heading",
      text: "The Problem I Could Not Ignore",
    },
    {
      type: "paragraph",
      text: "As I grew up, I kept noticing the same imbalance everywhere. Big cities had modern hospitals, experienced doctors, and quality diagnostics. But millions of families living in smaller towns and semi-urban areas across India had almost nothing. They were travelling hours to reach a city hospital, selling land to pay for surgeries, or simply giving up on treatment because the cost felt impossible. Many lost someone they loved not because medicine failed them, but because the system never reached them. That quiet, persistent injustice became the reason I chose this path. I pursued a Master's in Business Administration to understand how institutions are built and sustained. Then I studied Clinical Psychology because I knew that if I truly wanted to understand patients, I had to understand people first: how they grieve, how fear affects decision-making, how illness strips away dignity long before it takes a life. Those two disciplines together shaped a belief I still hold firmly: a hospital can be financially stable and deeply humane at the same time. These are not opposing goals. They have never been.",
    },
    {
      type: "heading",
      text: "Where Sangi Hospital Began",
    },
    {
      type: "paragraph",
      text: "In early 2022, the first Sangi Hospital opened in Mathura as a 150-bed multi-specialty facility. But I want to be honest about something it was never just about building a hospital. Plenty of hospital buildings exist. What I wanted to build was something harder to construct: an environment where every single person who walked through our doors rich or struggling, educated or not felt that they were being seen, heard, and genuinely cared for. We invested in modern technology, advanced diagnostics, and experienced specialists. But the real foundation of this hospital was always a single commitment: that financial difficulty would never be a reason to turn someone away.",
    },
    {
      type: "heading",
      text: "A Story I Will Never Forget",
    },
    {
      type: "paragraph",
      text: "One afternoon, a man walked into Sangi Hospital carrying his critically ill wife. He had spent everything he had trying to get her treated elsewhere. Standing at our reception, hands folded, tears running quietly down his face, he offered to do any job available sweep floors, carry equipment, anything at all if we would just save her. I did not see desperation in that moment. I saw a husband who refused to give up on his wife and was willing to sacrifice every last shred of pride to protect her. That is not weakness. That is one of the most courageous things a person can do. His wife received full treatment. We offered him employment as a hospital driver not as charity, but because he had demonstrated exactly the kind of dedication and heart this institution stands for. His family left our hospital with their health restored and their dignity fully intact. That is the standard I hold us to every single day.",
    },
    {
      type: "heading",
      text: "Where We Stand Today",
    },
    {
      type: "paragraph",
      text: "What began as one hospital in Mathura has grown, over four years, into a trusted healthcare network across Uttar Pradesh recognised for delivering quality treatment at costs that ordinary families can actually afford. We have treated thousands of patients. We have reunited families. We have given people back something medicine alone cannot prescribe: hope. Despite the growth and the expanding responsibilities that come with it, I still make time to be present in our wards and corridors especially among patients who are struggling financially. Not to supervise. Not to inspect. But to listen. Their trust is the most honest feedback any institution can receive, and I never want to lose sight of it. People sometimes refer to me as a healthcare entrepreneur or a hospital administrator. Those titles are kind. But honestly, when I think about who I am in relation to this work, I still come back to that eight-year-old girl standing on a street, choosing compassion over hesitation. Everything I have built since then has simply been an attempt to honour that moment.",
    },
    {
      type: "heading",
      text: "My Promise to Every Person Who Walks Through Our Doors",
    },
    {
      type: "quote",
      text: "You are not a case number. You are not a billing entry. You are a person who came to us trusting that we would take care of you and that trust is the most valuable thing anyone can place in another human being. At Sangi Hospital, we will treat your illness, but we will also protect your dignity. We will give you our best medical care, but we will also give you our humanity. Whether you come to us with wealth or with nothing, you will leave knowing that you mattered here. That has always been our promise. It always will be.",
    },
    {
      type: "signoff",
      lines: [
        "With gratitude,",
        "Sangita Singh",
        "Founder & Chairperson, Sangi Hospital",
      ],
    },
  ] satisfies ChairpersonBlock[],
};

// ─── Our Journey / Timeline ─────────────────────────────────
export const ourJourney = {
  eyebrow: "Our Story",
  heading: "The Journey So Far",
  milestones: [
    {
      year: "2005",
      title: "Foundation Laid",
      description:
        "Sangi Hospital was established in Raya, Mathura with a vision to bring quality healthcare to the region.",
      image: "/assets/images/about/journey/digital.jpg",
    },
    {
      year: "2010",
      title: "Multi-Specialty Expansion",
      description:
        "Expanded to include departments like Cardiology, Neurology, Orthopedics, and Gynecology under one roof.",
      image: "/assets/images/about/journey/expansion.jpg",
    },
    {
      year: "2016",
      title: "Modern Diagnostics Wing",
      description:
        "Launched advanced diagnostics including CT Scan, Digital X-Ray, Ultrasonography, and a fully equipped laboratory.",
      image: "/assets/images/about/journey/diagnostics.jpg",
    },
    {
      year: "2020",
      title: "Lakshmi Nagar Branch",
      description:
        "Opened our second branch in Lakshmi Nagar, Mathura to serve a wider patient base.",
      image: "/assets/images/about/journey/lakshmi-nagar.jpg",
    },
    {
      year: "2023",
      title: "Shikohabad & Beyond",
      description:
        "Extended services to Shikohabad, Firozabad and Hathras, strengthening our regional healthcare network.",
      image: "/assets/images/about/journey/shikohabad.jpg",
    },
    {
      year: "2025",
      title: "Digital Transformation",
      description:
        "Launched digital health records, online appointments, and telemedicine services for patient convenience.",
      image: "/assets/images/about/journey/2025hospital.jpeg",
    },
  ],
};

// ─── Why Choose Us ──────────────────────────────────────────
export const whyChooseUs = {
  eyebrow: "Why Sangi Hospital",
  heading: "Why Families Trust Us",
  features: [
    {
      title: "24/7 Emergency Care",
      description:
        "Round-the-clock emergency and trauma services with ambulance support for immediate medical attention.",
      icon: "clock",
    },
    {
      title: "Experienced Specialists",
      description:
        "A team of 870+ qualified doctors and specialists across 19+ medical departments.",
      icon: "users",
    },
    {
      title: "Modern Equipment",
      description:
        "State-of-the-art medical devices including CT Scan, ICU, NICU, HDU, and advanced diagnostic tools.",
      icon: "monitor",
    },
    {
      title: "Affordable Care",
      description:
        "Quality healthcare accessible to all with TPA partnerships including Ayushman Bharat, ECHS, ESIC, and more.",
      icon: "wallet",
    },
    {
      title: "150K+ Satisfied Patients",
      description:
        "A track record of trust built through compassionate care and successful treatments across the region.",
      icon: "smile",
    },
    {
      title: "Multiple Locations",
      description:
        "Serving communities through hospitals in Raya, Lakshmi Nagar, Shikohabad, and Hathras.",
      icon: "mapPin",
    },
  ],
};

// ─── Stats Strip ────────────────────────────────────────────
export const statsStrip = [
  { value: "30+", label: "Hospital Beds" },
  { value: "870+", label: "Doctors" },
  { value: "150K+", label: "Patients Served" },
  { value: "19+", label: "Departments" },
  { value: "4", label: "Locations" },
];
