import type { Metadata } from "next";
import LegalPageLayout from "@/Components/Legal/LegalPageLayout";
import { patientInformationContent } from "@/Components/Legal/content/patientInformation";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${patientInformationContent.metaTitle} | ${siteConfig.name}`,
  description: patientInformationContent.metaDescription,
  alternates: {
    canonical: "/patient-information",
  },
};

export default function PatientInformationPage() {
  return <LegalPageLayout content={patientInformationContent} />;
}
