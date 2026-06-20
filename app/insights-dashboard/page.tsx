import type { Metadata } from "next";
import InsightsHeroSection from "./sections/InsightsHeroSection";
import InsightsGraphSection from "./sections/InsightsGraphSection";
import InsightsCTASection from "./sections/InsightsCTASection";

export const metadata: Metadata = {
  title: "Facility Service Growth Insights Dashboard | Vipras Facility Management Solutions",
  description:
    "Explore facility service growth insights for security, housekeeping, manpower supply, technical maintenance, fire safety and integrated facility management across Chennai, Tamil Nadu, Bangalore, Andhra Pradesh and Pan India.",
  keywords: [
    "facility management insights",
    "security services demand",
    "housekeeping services India",
    "manpower supply services",
    "technical maintenance services",
    "fire safety manpower",
    "facility management Chennai",
    "facility management Tamil Nadu",
    "facility management Bangalore",
    "Vipras Facility Management Solutions",
  ],
  alternates: {
    canonical: "/insights-dashboard",
  },
  openGraph: {
    title: "Facility Service Growth Insights Dashboard | Vipras",
    description:
      "A premium facility service growth dashboard for security, housekeeping, manpower, maintenance, fire safety and integrated facility management demand insights.",
    url: "/insights-dashboard",
    siteName: "Vipras Facility Management Solutions",
    type: "website",
  },
};

export default function InsightsDashboardPage() {
  return (
    <main className="bg-[#020817]">
      <InsightsHeroSection />
      <InsightsGraphSection />
      <InsightsCTASection />
    </main>
  );
}
