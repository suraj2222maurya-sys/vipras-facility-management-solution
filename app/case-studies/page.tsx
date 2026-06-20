import type { Metadata } from "next";

import CaseStudiesHeroSection from "./CaseStudiesHeroSection";
import CaseStudiesListSection from "./CaseStudiesListSection";
import ResultsImpactSection from "./ResultsImpactSection";
import ClientSuccessStoriesSection from "./ClientSuccessStoriesSection";
import CaseStudiesCTASection from "./CaseStudiesCTASection";

export const metadata: Metadata = {
  title: "Case Studies | Facility Management Success Stories in Chennai & Pan India",
  description:
    "Explore Vipras Facility Management Solution case study examples for security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management support across Chennai, Tamil Nadu, Bangalore and Pan India.",
  keywords: [
    "facility management case studies",
    "security services case study",
    "housekeeping services case study",
    "manpower supply case study",
    "technical maintenance case study",
    "integrated facility management case study",
    "facility management company Chennai",
    "facility management Tamil Nadu",
    "facility management Pan India",
    "Vipras Facility Management Solution",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Vipras Facility Management Solution",
    description:
      "Realistic facility management case study examples showing how Vipras supports safer, cleaner and smoother business operations.",
    url: "/case-studies",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHeroSection />
      <CaseStudiesListSection />
      <ResultsImpactSection />
      <ClientSuccessStoriesSection />
      <CaseStudiesCTASection />
    </>
  );
}
