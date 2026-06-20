import type { Metadata } from "next";

import IndustriesHeroSection from "./IndustriesHeroSection";
import IndustriesWeServeSection from "./IndustriesWeServeSection";
import IndustryIconsSection from "./IndustryIconsSection";
import ClientLogoSection from "./ClientLogoSection";
import IndustrySolutionsSection from "./IndustrySolutionsSection";
import WhyIndustriesTrustViprasSection from "./WhyIndustriesTrustViprasSection";
import IndustriesCTASection from "./IndustriesCTASection";

export const metadata: Metadata = {
  title: "Industries We Serve | Facility Management Services in Chennai & Pan India",
  description:
    "Vipras Facility Management Solution serves industries, factories, corporate offices, IT parks, warehouses, hospitals, schools, hotels, apartments, commercial buildings and government project environments across Chennai, Tamil Nadu, Bangalore and Pan India.",
  keywords: [
    "industries facility management services",
    "facility management for industries",
    "facility management for factories",
    "facility management for corporate offices",
    "facility management for hospitals",
    "facility management for schools",
    "facility management for warehouses",
    "facility management company Chennai",
    "facility management Tamil Nadu",
    "facility management Pan India",
  ],
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Vipras Facility Management Solution",
    description:
      "Premium facility management support for industrial, corporate, healthcare, education, warehouse, hospitality, residential and government project environments.",
    url: "/industries",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHeroSection />
      <IndustriesWeServeSection />
      <IndustryIconsSection />
      <ClientLogoSection />
      <IndustrySolutionsSection />
      <WhyIndustriesTrustViprasSection />
      <IndustriesCTASection />
    </>
  );
}
