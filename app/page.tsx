import type { Metadata } from "next";

import HeroSection from "./home/HeroSection";
import TrustNumbersSection from "./home/TrustNumbersSection";
import MainServicesSection from "./home/MainServicesSection";
import IndustriesWeServeSection from "./home/IndustriesWeServeSection";
import WhyChooseViprasSection from "./home/WhyChooseViprasSection";
import LeadFormSection from "./home/LeadFormSection";
import FAQSection from "./home/FAQSection";

export const metadata: Metadata = {
  title:
    "Facility Management Services in Chennai | Vipras Facility Management Solution",
  description:
    "Vipras Facility Management Solution provides trusted security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management services for corporate, industrial, commercial, institutional and government project environments.",
  keywords: [
    "facility management services in Chennai",
    "facility management company in Chennai",
    "security services in Chennai",
    "housekeeping services in Chennai",
    "manpower supply services in Chennai",
    "technical maintenance services",
    "fire safety manpower",
    "integrated facility management",
    "facility management services Tamil Nadu",
    "government project facility management",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Facility Management Services in Chennai | Vipras Facility Management Solution",
    description:
      "Trusted facility management services for corporate, industrial, commercial, institutional and government project environments.",
    url: "/",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustNumbersSection />
      <MainServicesSection />
      <IndustriesWeServeSection />
      <WhyChooseViprasSection />
      <LeadFormSection />
      <FAQSection />
    </>
  );
}