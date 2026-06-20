import type { Metadata } from "next";

import SolutionsHeroSection from "./SolutionsHeroSection";
import BusinessSolutionsSection from "./BusinessSolutionsSection";
import SolutionCategoriesSection from "./SolutionCategoriesSection";
import IndustriesSolutionFitSection from "./IndustriesSolutionFitSection";
import WhyOurSolutionsWorkSection from "./WhyOurSolutionsWorkSection";
import SolutionsFAQSection from "./SolutionsFAQSection";

export const metadata: Metadata = {
  title: "Facility Management Solutions in Chennai & Pan India",
  description:
    "Explore Vipras Facility Management Solution business solutions for security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management across Chennai, Tamil Nadu, Bangalore and Pan India.",
  keywords: [
    "facility management solutions",
    "facility management solutions in Chennai",
    "business facility solutions",
    "security solutions Chennai",
    "housekeeping solutions Chennai",
    "manpower solutions Tamil Nadu",
    "technical maintenance solutions",
    "fire safety manpower solutions",
    "integrated facility management solutions",
    "facility solutions Pan India",
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Facility Management Solutions | Vipras Facility Management Solution",
    description:
      "Business-focused facility management solutions for safer, cleaner and smoother operations across Chennai, Tamil Nadu, Bangalore and Pan India.",
    url: "/solutions",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHeroSection />
      <BusinessSolutionsSection />
      <SolutionCategoriesSection />
      <IndustriesSolutionFitSection />
      <WhyOurSolutionsWorkSection />
      <SolutionsFAQSection />
    </>
  );
}
