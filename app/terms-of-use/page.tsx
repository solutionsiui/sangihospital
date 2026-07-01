import type { Metadata } from "next";
import LegalPageLayout from "@/Components/Legal/LegalPageLayout";
import { termsOfUseContent } from "@/Components/Legal/content/termsOfUse";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${termsOfUseContent.metaTitle} | ${siteConfig.name}`,
  description: termsOfUseContent.metaDescription,
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return <LegalPageLayout content={termsOfUseContent} />;
}
