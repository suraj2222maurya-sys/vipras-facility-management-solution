import type { Metadata } from "next";
import BlogHeroSection from "./sections/BlogHeroSection";
import FeaturedBlogsSection from "./sections/FeaturedBlogsSection";
import ServiceBlogsSection from "./sections/ServiceBlogsSection";
import LatestArticlesSection from "./sections/LatestArticlesSection";
import BlogCategoriesSection from "./sections/BlogCategoriesSection";
import BlogCTASection from "./sections/BlogCTASection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read expert facility management blogs, service insights and industry updates from Vipras Facility Management Solutions across security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management.",
};

export default function BlogPage() {
  return (
    <main className="bg-white">
      <BlogHeroSection />
      <FeaturedBlogsSection />
      <ServiceBlogsSection />
      <LatestArticlesSection />
      <BlogCategoriesSection />
      <BlogCTASection />
    </main>
  );
}
