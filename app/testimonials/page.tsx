import type { Metadata } from "next";

import TestimonialsHeroSection from "./TestimonialsHeroSection";
import ClientTestimonialsSection from "./ClientTestimonialsSection";
import TestimonialsTrustSection from "./TestimonialsTrustSection";
import ServiceReviewsSection from "./ServiceReviewsSection";
import TestimonialsCTASection from "./TestimonialsCTASection";

export const metadata: Metadata = {
  title: "Client Testimonials | Vipras Facility Management Solution",
  description:
    "Read client-focused testimonials and service reviews for Vipras Facility Management Solution, trusted for security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management support across Chennai, Tamil Nadu, Bangalore and Pan India.",
  keywords: [
    "Vipras testimonials",
    "facility management testimonials",
    "client reviews facility management",
    "security services reviews",
    "housekeeping services reviews",
    "manpower services reviews",
    "technical maintenance reviews",
    "fire safety manpower reviews",
    "integrated facility management reviews",
    "facility management company Chennai",
    "facility management Tamil Nadu",
    "facility management Pan India",
  ],
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Client Testimonials | Vipras Facility Management Solution",
    description:
      "Client-focused testimonials, service reviews and trust highlights for Vipras Facility Management Solution.",
    url: "/testimonials",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHeroSection />
      <ClientTestimonialsSection />
      <TestimonialsTrustSection />
      <ServiceReviewsSection />
      <TestimonialsCTASection />
    </>
  );
}
