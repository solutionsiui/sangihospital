export type Service = {
  id: string;
  slug: string;
  name: string;
  columnId: string;
  category: string;
  description: string;
  image: string;
  offerings: string[];
  points: string[];
  detailParagraphs: string[];
  featured?: boolean;
};

export type ServiceColumn = {
  id: string;
  title: string;
  services: Service[];
};

export type ServiceItem = {
  id: string;
  label: string;
  href: string;
  image: string;
  description: string;
};

const images = {
  bloodbank: "/assets/images/24_7services/bloodbank/bloodbankinnerhero.jpeg",
  emergency: "/assets/images/24_7services/emergencyservice/emerservices.jpg",
  icunicuhduservice: "/assets/images/24_7services/icu,nicu,hdu/icunicu.jpeg",
  laboratory: "/assets/images/24_7services/laboratory/laboratory.jpg",
  pharmacy: "/assets/images/24_7services/pharmacy/pharmacy.jpg",
  ambulance: "/assets/images/24_7services/ambulance/ambulance.jpg",
  ctscan: "/assets/images/24_7services/ctscan/ctscan.jpg",
  ultrasonography: "/assets/images/24_7services/ultrasonography/ultrasonography.jpg",
  labourroom: "/assets/images/24_7services/labourroom/labourroom.jpg",
  digitalxray: "/assets/images/24_7services/digitalxray/digitalxray.jpeg",
  otservices: "/assets/images/24_7services/otservices/otservices.jpeg",
  dietitiannutritionist: "/assets/images/oms/dieticianandnutritionist/dietitiannutritionist.jpeg",
  eegexamination:"/assets/images/oms/eegexamination/eegexamination.jpg",
  physiotherapy:"/assets/images/oms/physiotherapy/physiotherapy.jpg",
  echocardiography:"/assets/images/oms/echocardiography/echocardiography.jpg",
  colordoppler:"/assets/images/oms/colordoppler/colordoppler.jpg",
  spirometry:"/assets/images/oms/spirometry/spirometry.jpg",
  pathology:"/assets/images/oms/pathology/pathology.jpg",
  dialysis:"/assets/images/oms/dialysis/dialysis.jpg",
  deluxeroom:"/assets/images/wards/deluxeroom.jpeg",
  privateroom:"/assets/images/wards/privateroom.jpeg",
  semiprivateroom:"/assets/images/wards/semiprivate.jpeg",
  generalward:"/assets/images/wards/generalward.png",
  clinical: "/assets/images/home/20240920064059.jpg",
  featuredservice:"/assets/images/servicefeatured.png",
  treadmill:"/assets/images/oms/tmt/treadmill.jpeg",
  diagnostics: "/assets/images/home/servicehome.png",
  care: "/assets/images/home/20250310083759.jpg",
  facility: "/assets/images/home/20250612045907.jpg",
  ward: "/assets/images/home/20251125052239.jpg",
  about: "/assets/images/about/about-banner.jpg",
  innerhero: "/assets/sangiimages1/sangiimages1/services/serviceinner.jpg",
} as const; 

function createService(
  id: string,
  name: string,
  columnId: string,
  category: string,
  image: string,
  description: string,
  offerings: string[],
  points: string[],
  featured = false,
): Service {
  return {
    id,
    slug: id,
    name,
    columnId,
    category,
    image,
    description,
    offerings,
    points,
    featured,
    detailParagraphs: [
      `${name} at Sangi Hospital is delivered by trained clinical teams using modern equipment, safety protocols, and compassionate patient support.`,
      description,
    ],
  };
}

const twentyFourSevenServices = [
  createService(
    "blood-bank",
    "Blood Bank",
    "twenty-four-seven",
    "24x7 Services",
    images.bloodbank,
    "Safe blood storage and transfusion support available round the clock.",
    ["Blood Grouping", "Cross Matching", "Component Separation", "Emergency Transfusion"],
    ["Licensed blood bank protocols", "Rapid emergency support", "Quality-tested blood units"],
  ),
  createService(
    "emergency-services",
    "Emergency Services",
    "twenty-four-seven",
    "24x7 Services",
    images.emergency,
    "Immediate emergency care with rapid triage and critical response teams.",
    ["Trauma Response", "Critical Stabilisation", "Emergency Physicians", "Rapid Triage"],
    ["24x7 emergency desk", "Ambulance coordination", "Immediate clinical intervention"],
    true,
  ),
  createService(
    "icu-nicu-hdu",
    "ICU, NICU & HDU",
    "twenty-four-seven",
    "24x7 Services",
    images.icunicuhduservice,
    "Intensive, neonatal, and high-dependency care with continuous monitoring.",
    ["Ventilator Support", "Neonatal Care", "Continuous Monitoring", "Critical Nursing"],
    ["Specialist intensivists", "Advanced life support", "Family-centred critical care"],
  ),
  createService(
    "laboratory",
    "Laboratory",
    "twenty-four-seven",
    "24x7 Services",
    images.laboratory,
    "Accurate lab testing with fast reporting to support timely treatment.",
    ["Routine Blood Tests", "Biochemistry Panels", "Microbiology", "Rapid Reporting"],
    ["Automated analysers", "Quality-controlled testing", "Integrated with OPD & IPD"],
  ),
  createService(
    "pharmacy",
    "Pharmacy",
    "twenty-four-seven",
    "24x7 Services",
    images.pharmacy,
    "In-house pharmacy for prescribed medicines and patient convenience.",
    ["Prescription Dispensing", "OTC Medicines", "Counselling", "IPD Medicine Supply"],
    ["Qualified pharmacists", "Genuine medicines", "Convenient hospital access"],
  ),
  createService(
    "ambulance",
    "Ambulance",
    "twenty-four-seven",
    "24x7 Services",
    images.ambulance,
    "24x7 ambulance support for emergency transfers and critical transport.",
    ["Emergency Pickup", "Inter-hospital Transfer", "Basic Life Support", "Trained Staff"],
    ["Round-the-clock availability", "Hospital-linked response", "Safe patient transport"],
  ),
  createService(
    "digital-x-ray",
    "Digital X-Ray",
    "twenty-four-seven",
    "24x7 Services",
    images.digitalxray,
    "High-resolution digital X-Ray imaging for precise diagnosis.",
    ["Chest X-Ray", "Bone Imaging", "Digital Reporting", "Low Radiation Exposure"],
    ["Fast digital results", "Radiologist-reviewed reports", "OPD & emergency access"],
  ),
  createService(
    "ct-scan",
    "CT Scan",
    "twenty-four-seven",
    "24x7 Services",
    images.ctscan,
    "Advanced CT scanning for detailed internal imaging and evaluation.",
    ["Head & Brain CT", "Abdominal CT", "Trauma Imaging", "Contrast Studies"],
    ["High-resolution imaging", "Expert radiology reporting", "Emergency scan support"],
  ),
  createService(
    "ultrasonography",
    "Ultrasonography",
    "twenty-four-seven",
    "24x7 Services",
    images.ultrasonography,
    "Ultrasound services for obstetric, abdominal, and soft-tissue assessment.",
    ["Obstetric Scan", "Abdominal USG", "Pelvic Imaging", "Soft Tissue Evaluation"],
    ["Experienced sonologists", "Pregnancy monitoring", "Non-invasive diagnostics"],
  ),
  createService(
    "labour-room",
    "Labour Room",
    "twenty-four-seven",
    "24x7 Services",
    images.labourroom,
    "Dedicated labour room facilities with maternal and newborn support.",
    ["Delivery Care", "Fetal Monitoring", "Neonatal Resuscitation", "Postpartum Support"],
    ["Obstetric team on standby", "Safe delivery environment", "Mother & baby focused care"],
  ),
  createService(
    "ot-services",
    "OT Services",
    "twenty-four-seven",
    "24x7 Services",
    images.otservices,
    "Modern operation theatres with safe surgical and procedural care.",
    ["Major Surgery", "Minor Procedures", "Anaesthesia Support", "Sterile OT Protocols"],
    ["Modern operation theatres", "Trained surgical teams", "Pre & post-operative care"],
  ),
];

const otherMedicalServices = [
  createService(
    "dietitian-nutritionist",
    "Dietitian & Nutritionist",
    "other-medical",
    "Other Medical Services",
    images.dietitiannutritionist,
    "Personalised diet and nutrition counselling for recovery and wellness.",
    ["Weight Management", "Diabetic Diet Plans", "Therapeutic Nutrition", "Recovery Diet"],
    ["Certified dieticians", "Personalised meal planning", "Chronic disease support"],
  ),
  createService(
    "physiotherapy",
    "Physiotherapy",
    "other-medical",
    "Other Medical Services",
    images.physiotherapy,
    "Rehabilitation and mobility therapy for pain relief and faster recovery.",
    ["Pain Relief Therapy", "Post-op Rehab", "Sports Injury Care", "Mobility Training"],
    ["Licensed physiotherapists", "Equipment-assisted therapy", "Custom recovery plans"],
  ),
  createService(
    "eeg-examination",
    "EEG Examination",
    "other-medical",
    "Other Medical Services",
    images.eegexamination,
    "Electroencephalogram testing for neurological evaluation and monitoring.",
    ["Routine EEG", "Sleep EEG", "Epilepsy Monitoring", "Neurology Referral"],
    ["Non-invasive brain study", "Specialist interpretation", "Accurate neurological assessment"],
  ),
  createService(
    "echocardiography",
    "Echocardiography",
    "other-medical",
    "Other Medical Services",
    images.echocardiography,
    "Cardiac echo imaging to assess heart structure and function.",
    ["2D Echo", "Doppler Studies", "Valve Assessment", "Cardiac Function Review"],
    ["Cardiology-linked reporting", "Non-invasive heart imaging", "Early cardiac risk detection"],
  ),
  createService(
    "treadmill-tmt",
    "Treadmill (T.M.T)",
    "other-medical",
    "Other Medical Services",
    images.treadmill,
    "Treadmill stress testing for cardiac fitness and risk assessment.",
    ["Exercise Stress Test", "ECG Monitoring", "Cardiac Risk Screening", "Fitness Evaluation"],
    ["Supervised testing", "Cardiologist-reviewed results", "Preventive heart assessment"],
  ),
  createService(
    "color-doppler",
    "Color Doppler",
    "other-medical",
    "Other Medical Services",
    images.colordoppler,
    "Vascular and organ blood-flow studies using color Doppler ultrasound.",
    ["Vascular Doppler", "Obstetric Doppler", "Abdominal Flow Study", "Peripheral Vessel Scan"],
    ["Real-time blood flow imaging", "Non-invasive vascular assessment", "Quick diagnostic support"],
  ),
  createService(
    "spirometry",
    "Spirometry",
    "other-medical",
    "Other Medical Services",
    images.spirometry,
    "Pulmonary function testing for asthma, COPD, and breathing disorders.",
    ["Lung Function Test", "Asthma Assessment", "COPD Screening", "Pre-surgery Evaluation"],
    ["Accurate pulmonary readings", "Respiratory specialist guidance", "Treatment monitoring support"],
  ),
  createService(
    "pathology",
    "Pathology",
    "other-medical",
    "Other Medical Services",
    images.pathology,
    "Comprehensive pathology services for disease detection and monitoring.",
    ["Histopathology", "Cytology", "Biopsy Analysis", "Specialised Panels"],
    ["Expert pathologists", "Accurate disease diagnosis", "Integrated with treatment planning"],
  ),
  createService(
    "dialysis",
    "Dialysis",
    "other-medical",
    "Other Medical Services",
    images.dialysis,
    "Renal dialysis support for patients with kidney-related conditions.",
    ["Haemodialysis", "Pre-dialysis Assessment", "Nephrology Supervision", "Patient Monitoring"],
    ["Dedicated dialysis unit", "Trained renal care staff", "Comfort-focused sessions"],
  ),
];

const wardServices = [
  createService(
    "deluxe-room",
    "Deluxe Room",
    "wards",
    "Wards",
    images.deluxeroom,
    "Premium inpatient rooms with enhanced comfort and attentive nursing care.",
    ["Private Accommodation", "Attached Washroom", "Visitor Space", "Premium Amenities"],
    ["Enhanced privacy & comfort", "Dedicated nursing support", "Ideal for extended recovery"],
  ),
  createService(
    "private-room",
    "Private Room",
    "wards",
    "Wards",
    images.privateroom,
    "Private rooms designed for restful recovery with dedicated facilities.",
    ["Single Patient Room", "Personal Care", "Quiet Environment", "Family Access"],
    ["Comfortable inpatient stay", "Focused recovery environment", "Round-the-clock nursing"],
  ),
  createService(
    "semi-private-room",
    "Semi-Private Room",
    "wards",
    "Wards",
    images.semiprivateroom,
    "Comfortable semi-private accommodation with quality patient support.",
    ["Shared Room (2 Beds)", "Affordable Care", "Nursing Support", "Essential Amenities"],
    ["Balanced comfort & value", "Clean patient areas", "Continuous ward monitoring"],
  ),
  createService(
    "general-ward",
    "General Ward",
    "wards",
    "Wards",
    images.generalward,
    "Affordable multi-bed general ward care with round-the-clock nursing, essential facilities, and a safe environment for recovery.",
    ["Multi-bed Ward", "Round-the-clock Nursing", "Essential Facilities", "Affordable Care"],
    ["Cost-effective inpatient stay", "Safe monitored environment", "24x7 ward staff support", "Comfortable recovery for all patients"],
  ),
];

export const serviceColumns: ServiceColumn[] = [
  { id: "twenty-four-seven", title: "24x7 Services", services: twentyFourSevenServices },
  { id: "other-medical", title: "Other Medical Services", services: otherMedicalServices },
  { id: "wards", title: "Wards", services: wardServices },
];

export const allServicesList: Service[] = serviceColumns.flatMap(
  (column) => column.services,
);

export const servicesPage = {
  hero: {
    title: "Our Hospital Services",
    subtitle:
      "Round-the-clock clinical support, advanced diagnostics, and comfortable inpatient facilities across the Sangi Hospital network.",
    backgroundImage: images.innerhero,
  },
  intro: {
    eyebrow: "Complete Care",
    heading: "Trusted Hospital Services",
    headingAccent: "Under One Roof",
    paragraphs: [
      "Sangi Hospital offers an integrated range of medical services — from 24x7 emergency and critical care to diagnostics, therapy, pharmacy, and inpatient wards.",
      "Every service is designed to support faster diagnosis, safer treatment, and a more comfortable recovery experience for patients and families.",
    ],
    stats: [
      { value: "25+", label: "Hospital Services" },
      { value: "24/7", label: "Emergency Support" },
      { value: "6+", label: "Network Locations" },
    ],
    imageBadge: {
      value: "100%",
      label: "Patient-Centred Service Delivery",
    },
    image: images.innerhero,
  },
  highlights: [
    {
      title: "Round-the-Clock Availability",
      description:
        "Critical services including emergency care, ICU, laboratory, pharmacy, and ambulance operate 24x7.",
    },
    {
      title: "Integrated Diagnostics",
      description:
        "Digital X-Ray, CT scan, ultrasound, pathology, and specialised tests support faster clinical decisions.",
    },
    {
      title: "Comfortable Inpatient Care",
      description:
        "Deluxe, private, semi-private, and general wards designed for safe and supportive recovery.",
    },
  ],
  cta: {
    title: "Need Help Choosing the Right Service?",
    description:
      "Speak with our hospital team to find the right diagnostic, clinical, or inpatient service for your needs.",
    buttonLabel: "Book An Appointment",
    buttonHref: "/appointment",
  },
} as const;

export const featuredServiceMeta = {
  sectionTitle: "Immediate Care When Every Minute Matters",
  sectionLead:
    "Our Emergency Services team provides rapid triage, stabilisation, and coordinated hospital support — available 24 hours a day across Sangi Hospital.",
  highlights: [
    { value: "24/7", label: "Emergency Desk" },
    { value: "<5 min", label: "Triage Response" },
    { value: "100%", label: "Critical Care Access" },
  ],
  primaryCta: "Explore Emergency Services",
  secondaryCta: "Call Ambulance",
} as const;

export const featuredService = allServicesList.find(
  (service) => service.id === "emergency-services",
)!;

export function getServiceBySlug(slug: string) {
  return allServicesList.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service, limit = 3) {
  return allServicesList
    .filter((item) => item.columnId === service.columnId && item.slug !== service.slug)
    .slice(0, limit);
}

export function toServiceItem(service: Service): ServiceItem {
  return {
    id: service.id,
    label: service.name,
    href: `/services/${service.slug}`,
    image: service.image,
    description: service.description,
  };
}

export const servicesMegaMenu = {
  title: "Sangi Hospital",
  description:
    "Round-the-clock hospital services, advanced diagnostics, and comfortable inpatient wards — delivered with modern facilities across our network.",
  brandImage: images.featuredservice,
  brandImageAlt: "Hospital services at Sangi Hospital",
  viewAllHref: "/services",
  columns: serviceColumns.map((column) => ({
    id: column.id,
    title: column.title,
    services: column.services.map(toServiceItem),
  })),
};

export const allServices: ServiceItem[] = allServicesList.map(toServiceItem);

export function getDefaultServiceId() {
  return allServices[0]?.id ?? "";
}

export function getServiceById(id: string): ServiceItem {
  return (
    allServices.find((service) => service.id === id) ??
    allServices[0] ?? {
      id: "",
      label: "",
      href: "/services",
      image: images.diagnostics,
      description: "",
    }
  );
}
