import type { Metadata } from "next";

import ServicesHeroSection from "./ServicesHeroSection";
import AllServicesSection from "./AllServicesSection";
import WhyChooseServicesSection from "./WhyChooseServicesSection";
import ServiceProcessSection from "./ServiceProcessSection";
import ServicesFAQSection from "./ServicesFAQSection";
import ServicesCTASection from "./ServicesCTASection";

export const metadata: Metadata = {
  title: "Facility Management Services in Chennai & Pan India",
  description:
    "Explore Vipras Facility Management Solution services including security services, housekeeping, manpower supply, technical maintenance, fire safety manpower and integrated facility management across Chennai, Tamil Nadu and Pan India.",
  keywords: [
    "facility management services",
    "facility management services in Chennai",
    "security services in Chennai",
    "housekeeping services in Chennai",
    "manpower supply services",
    "technical maintenance services",
    "fire safety manpower",
    "integrated facility management",
    "facility management services Tamil Nadu",
    "facility management company Pan India",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Facility Management Services | Vipras Facility Management Solution",
    description:
      "Trusted security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management services across Chennai, Tamil Nadu and Pan India.",
    url: "/services",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <AllServicesSection />
      <WhyChooseServicesSection />
      <ServiceProcessSection />
      <ServicesFAQSection />
      <ServicesCTASection />
    </>
  );
}
