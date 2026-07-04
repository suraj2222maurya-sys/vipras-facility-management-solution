import type { Metadata } from "next";

import AboutHeroSection from "./AboutHeroSection";
import CompanyOverviewSection from "./CompanyOverviewSection";
import MissionVisionSection from "./MissionVisionSection";
import ExperienceTrustSection from "./ExperienceTrustSection";
import ComplianceQualitySection from "./ComplianceQualitySection";
import AboutCTASection from "./AboutCTASection";

export const metadata: Metadata = {
  title: "Vipras Facility Management Solutions | Facility Management Company in Chennai",
  description:
  "Vipras Facility Management Solutions is a trusted facility management company supporting corporate, industrial, commercial, institutional and government project environments with security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management services across Chennai, Tamil Nadu and Pan India.",
  keywords: [
    "about Vipras Facility Management Solution",
    "facility management company in Chennai",
    "facility management services Tamil Nadu",
    "security housekeeping manpower services",
    "government project facility management",
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Vipras Facility Management Solution",
    description:
      "Trusted facility management partner for corporate, industrial, commercial, institutional and government project environments.",
    url: "/about-us",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <CompanyOverviewSection />
      <MissionVisionSection />
      <ExperienceTrustSection />
      <ComplianceQualitySection />
      <AboutCTASection />
    </>
  );
}
