import type { Metadata } from "next";
import LegalPageLayout from "@/Components/Legal/LegalPageLayout";
import { cookiePolicyContent } from "@/Components/Legal/content/cookiePolicy";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${cookiePolicyContent.metaTitle} | ${siteConfig.name}`,
  description: cookiePolicyContent.metaDescription,
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return <LegalPageLayout content={cookiePolicyContent} />;
}
