import type { Metadata } from "next";
import LegalPageLayout from "@/Components/Legal/LegalPageLayout";
import { privacyPolicyContent } from "@/Components/Legal/content/privacyPolicy";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${privacyPolicyContent.metaTitle} | ${siteConfig.name}`,
  description: privacyPolicyContent.metaDescription,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout content={privacyPolicyContent} />;
}
