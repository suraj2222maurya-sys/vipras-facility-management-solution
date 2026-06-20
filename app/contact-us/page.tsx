import type { Metadata } from "next";
import ContactHeroSection from "./sections/ContactHeroSection";
import ContactFormSection from "./sections/ContactFormSection";
import ContactDetailsSection from "./sections/ContactDetailsSection";
import GoogleMapSection from "./sections/GoogleMapSection";
import GoogleRatingReviewSection from "./sections/GoogleRatingReviewSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vipras Facility Management Solutions for security services, housekeeping, manpower supply, technical maintenance, fire safety and integrated facility management support across India.",
};

export default function ContactUsPage() {
  return (
    <main className="bg-white">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactDetailsSection />
      <GoogleMapSection />
      <GoogleRatingReviewSection />
    </main>
  );
}
