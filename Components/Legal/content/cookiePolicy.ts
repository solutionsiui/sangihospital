import type { LegalPageContent } from "../types";

export const cookiePolicyContent: LegalPageContent = {
  slug: "cookie-policy",
  metaTitle: "Cookie Policy",
  metaDescription:
    "Understand how Sangi Hospital uses cookies and similar technologies on our website to improve performance and user experience.",
  hero: {
    eyebrow: "Legal",
    title: "Cookie Policy",
    subtitle:
      "This policy explains how cookies and similar technologies are used when you visit our website.",
  },
  lastUpdated: "June 8, 2026",
  intro:
    "Cookies are small text files stored on your device when you visit a website. Sangi Hospital uses cookies and similar technologies to keep our site secure, remember preferences, and understand how visitors interact with our content so we can improve the patient experience online.",
  highlights: [
    {
      icon: "cookie",
      title: "Essential Cookies",
      text: "Required for core website functionality, security, and form submissions.",
    },
    {
      icon: "shield",
      title: "Your Control",
      text: "You can manage or disable cookies through your browser settings at any time.",
    },
    {
      icon: "lock",
      title: "No Data Sales",
      text: "We do not use cookies to sell personal information to advertisers.",
    },
  ],
  sections: [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      paragraphs: [
        "Cookies help websites remember information about your visit — such as language preference, session state, or pages viewed. They can be session cookies (deleted when you close your browser) or persistent cookies (stored for a defined period).",
        "We may also use similar technologies such as local storage, pixels, or analytics scripts that function in a comparable way.",
      ],
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies We Use",
      subsections: [
        {
          title: "Strictly Necessary Cookies",
          paragraphs: [
            "These cookies are essential for the website to function properly. They enable navigation, security features, and form processing. The site may not work correctly without them.",
          ],
        },
        {
          title: "Performance & Analytics Cookies",
          paragraphs: [
            "These cookies help us understand how visitors use our website — such as which pages are most visited and whether users encounter errors. Data is generally aggregated and used to improve site performance.",
          ],
        },
        {
          title: "Functional Cookies",
          paragraphs: [
            "These cookies remember choices you make — such as region or form preferences — to provide a more personalised experience on return visits.",
          ],
        },
      ],
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies",
      paragraphs: [
        "Some cookies may be set by trusted third-party services that support analytics, embedded maps, video content, or social media integrations. These providers have their own privacy and cookie policies governing how they process data.",
      ],
    },
    {
      id: "managing-cookies",
      title: "Managing Your Cookie Preferences",
      paragraphs: [
        "Most web browsers allow you to control cookies through their settings. You can typically block all cookies, delete existing cookies, or receive a notification before a cookie is stored.",
        "Please note that disabling certain cookies may affect website functionality, including appointment and contact form features.",
      ],
      list: [
        "Chrome: Settings → Privacy and security → Cookies and other site data",
        "Firefox: Settings → Privacy & Security → Cookies and Site Data",
        "Safari: Preferences → Privacy → Manage Website Data",
        "Edge: Settings → Cookies and site permissions",
      ],
    },
    {
      id: "cookie-retention",
      title: "How Long Cookies Are Stored",
      paragraphs: [
        "Session cookies expire when you close your browser. Persistent cookies remain on your device for a set period or until you delete them manually. Retention periods vary depending on the purpose of each cookie.",
      ],
    },
    {
      id: "updates",
      title: "Updates to This Policy",
      paragraphs: [
        "We may update this Cookie Policy to reflect changes in technology, legal requirements, or our website features. Please review this page periodically for the latest information.",
      ],
    },
    {
      id: "more-information",
      title: "More Information",
      paragraphs: [
        "For details on how we handle personal data collected through our website, please read our Privacy Policy. For questions about cookies or data practices, contact us through our Contact page.",
      ],
    },
  ],
};
