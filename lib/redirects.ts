import type { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * Redirects for routes referenced in the UI that do not have dedicated pages yet.
 * Maps each legacy or missing URL to the closest existing page.
 */
export const siteRedirects: Redirect[] = [
  // Legacy specializations URLs
  {
    source: "/specializations",
    destination: "/specialities",
    permanent: true,
  },
  {
    source: "/specializations/:slug",
    destination: "/specialities/:slug",
    permanent: true,
  },

  // Legacy speciality slugs
  {
    source: "/specialities/gynecology",
    destination: "/specialities/obstetrics-gynaecology",
    permanent: true,
  },
  {
    source: "/specialities/pediatrics",
    destination: "/specialities/paediatrics",
    permanent: true,
  },
  {
    source: "/specialities/orthopedics",
    destination: "/specialities/orthopaedics",
    permanent: true,
  },
  {
    source: "/specialities/emergency-medicine",
    destination: "/specialities/emergency-trauma-care",
    permanent: true,
  },
  {
    source: "/specialities/cardiology",
    destination: "/specialities/general-medicine",
    permanent: true,
  },
  {
    source: "/specialities/psychiatry",
    destination: "/specialities/general-medicine",
    permanent: true,
  },
  {
    source: "/specialities/dental-care",
    destination: "/specialities/dentistry",
    permanent: true,
  },

  // Navigation — hospitals (listing on home page for now)
  {
    source: "/hospitals",
    destination: "/",
    permanent: false,
  },
  {
    source: "/hospitals/:slug",
    destination: "/",
    permanent: false,
  },

  // Patient corner — legacy URLs and podcasts placeholder
  {
    source: "/patient-corner",
    destination: "/patient-stories",
    permanent: true,
  },
  {
    source: "/patient-corner/patient-stories",
    destination: "/patient-stories",
    permanent: true,
  },
  {
    source: "/patient-corner/patient-stories/:slug",
    destination: "/patient-stories/:slug",
    permanent: true,
  },
  {
    source: "/patient-corner/podcasts",
    destination: "/appointment",
    permanent: false,
  },

  // Navigation — contact
  {
    source: "/contact",
    destination: "/appointment",
    permanent: false,
  },

  // Footer & utility pages
  {
    source: "/refund",
    destination: "/about",
    permanent: false,
  },
  {
    source: "/refund-policy",
    destination: "/about",
    permanent: false,
  },
  {
    source: "/help-center",
    destination: "/appointment",
    permanent: false,
  },
  {
    source: "/privacy-policy",
    destination: "/about",
    permanent: false,
  },
  {
    source: "/demos",
    destination: "/about",
    permanent: false,
  },
  {
    source: "/instructions",
    destination: "/about",
    permanent: false,
  },
  {
    source: "/personal-meeting",
    destination: "/appointment",
    permanent: false,
  },

  // Doctors
  {
    source: "/doctors",
    destination: "/appointment",
    permanent: false,
  },
  {
    source: "/doctors/:slug",
    destination: "/appointment?doctor=:slug",
    permanent: false,
  },

  // Home — departments → specialities
  {
    source: "/departments/emergency",
    destination: "/specialities/emergency-trauma-care",
    permanent: true,
  },
  {
    source: "/departments/dental",
    destination: "/specialities/dentistry",
    permanent: true,
  },
  {
    source: "/departments/gynecology",
    destination: "/specialities/obstetrics-gynaecology",
    permanent: true,
  },
  {
    source: "/departments/neurology",
    destination: "/specialities/neurology",
    permanent: true,
  },
  {
    source: "/departments/cardiology",
    destination: "/specialities/general-medicine",
    permanent: true,
  },
  {
    source: "/departments/psychiatry",
    destination: "/specialities/general-medicine",
    permanent: true,
  },
  {
    source: "/departments/:slug",
    destination: "/specialities",
    permanent: false,
  },

  // Home — legacy service links
  {
    source: "/services/medical",
    destination: "/services/laboratory",
    permanent: true,
  },
  {
    source: "/services/heart-checkup",
    destination: "/services/echocardiography",
    permanent: true,
  },

  // Case studies → specialities
  {
    source: "/case-studies/gynecology",
    destination: "/specialities/obstetrics-gynaecology",
    permanent: true,
  },
  {
    source: "/case-studies/cardiology",
    destination: "/specialities/general-medicine",
    permanent: true,
  },
  {
    source: "/case-studies/patient-support",
    destination: "/specialities/general-medicine",
    permanent: true,
  },
  {
    source: "/case-studies/:slug",
    destination: "/specialities",
    permanent: false,
  },
];
