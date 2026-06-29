import type { Metadata } from "next";

import HeroSection from "./home/HeroSection";
import TrustNumbersSection from "./home/TrustNumbersSection";
import MainServicesSection from "./home/MainServicesSection";
import IndustriesWeServeSection from "./home/IndustriesWeServeSection";
import WhyChooseViprasSection from "./home/WhyChooseViprasSection";
import LeadFormSection from "./home/LeadFormSection";
import FAQSection from "./home/FAQSection";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.viprasfacility.com"),
  title:
  "Facility Management Services in Chennai | Vipras Facility Management Solutions",
 description:
  "Vipras Facility Management Solutions provides facility management services in Chennai with Pan India support, including security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management for corporate, industrial, commercial and institutional sites.",
  applicationName: "Vipras Facility Management Solutions",
authors: [
  {
    name: "Vipras Facility Management Solutions Private Limited",
    url: "https://www.viprasfacility.com",
  },
],
creator: "Vipras Facility Management Solutions Private Limited",
publisher: "Vipras Facility Management Solutions Private Limited",
  keywords: [
  "facility management services in Chennai",
  "facility management services",
  "facility management companies in Chennai",
  "facility management company in Chennai",
  "integrated facility management services",
  "integrated facility management services in Chennai",
  "facility management services Tamil Nadu",
  "facility management services Pan India",
  "security services in Chennai",
  "security guard services in Chennai",
  "housekeeping services in Chennai",
  "cleaning services in Chennai",
  "manpower services in Chennai",
  "manpower supply services in Chennai",
  "technical maintenance services",
  "technical maintenance services in Chennai",
  "MEP maintenance services",
  "electrical maintenance services",
  "plumbing maintenance services",
  "AC maintenance services",
  "fire safety manpower",
  "fire safety services",
  "commercial facility management",
  "industrial facility management",
  "corporate facility management",
],
  alternates: {
    canonical: "/",
  },
  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},
other: {
  "geo.region": "IN-TN",
  "geo.placename": "Chennai, Tamil Nadu",
  "geo.position": "12.9010;80.2279",
  ICBM: "12.9010, 80.2279",
  "business:contact_data:locality": "Chennai",
  "business:contact_data:region": "Tamil Nadu",
  "business:contact_data:country_name": "India",
},
  openGraph: {
   title:
  "Facility Management Services in Chennai | Vipras Facility Management Solutions",
    description:
  "Professional facility management services in Chennai with Pan India support, including security, housekeeping, manpower, technical maintenance and integrated facility management for corporate, industrial, commercial and institutional sites.",
    url: "/",
   siteName: "Vipras Facility Management Solutions",
   locale: "en_IN",
   images: [
  {
    url: "/og-image.jpg.png.png",
    width: 1200,
    height: 630,
    alt: "Vipras Facility Management Solutions - Facility Management Services in Chennai",
  },
],
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title:
    "Facility Management Services in Chennai | Vipras Facility Management Solutions",
  description:
    "Professional facility management services in Chennai with Pan India support, including security, housekeeping, manpower, technical maintenance and integrated facility management.",
  images: ["/og-image.jpg.png.png"],
},
};
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vipras Facility Management Solutions Private Limited",
  alternateName: "Vipras Facility Management Solutions",
  url: "https://www.viprasfacility.com",
  logo: "https://www.viprasfacility.com/og-image.jpg.png.png",
  image: "https://www.viprasfacility.com/og-image.jpg.png.png",
  telephone: "+919710946484",
  email: "viprascrm@gmail.com",
  description:
    "Vipras Facility Management Solutions provides facility management services in Chennai with Pan India support, including security services, housekeeping services, manpower services, technical maintenance, fire safety and integrated facility management services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No-495 A, Village High Rd, Sholinganallur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600119",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Chennai",
    },
    {
      "@type": "State",
      name: "Tamil Nadu",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919710946484",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Tamil"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+919710946484",
      contactType: "WhatsApp enquiry",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Tamil"],
      url: "https://wa.me/919710946484",
    },
  ],
  serviceType: [
    "Facility Management Services",
    "Integrated Facility Management Services",
    "Security Services",
    "Security Guard Services",
    "Housekeeping Services",
    "Cleaning Services",
    "Manpower Services",
    "Technical Maintenance Services",
    "MEP Maintenance Services",
    "Electrical Maintenance Services",
    "Plumbing Maintenance Services",
    "AC Maintenance Services",
    "Fire Safety Manpower",
  ],
  sameAs: [
    "https://www.linkedin.com/company/vipras-facility-management-private-limited/",
    "https://www.facebook.com/profile.php?id=61583160419137",
    "https://www.instagram.com/viprasfacilitymanagement/",
    "https://www.youtube.com/@viprasfacilitycrm8753",
  ],
};
const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What facility management services does Vipras provide in Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vipras provides facility management services in Chennai and across Tamil Nadu, including security services, housekeeping and soft services, industrial manpower supply, technical and Mechanical, Electrical and Plumbing maintenance, fire and safety manpower, and integrated facility management support for business sites.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide facility management services across Chennai, Tamil Nadu and Pan India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vipras supports businesses across Chennai, Tamil Nadu and Pan India service locations with trained teams, site supervision and professional facility management operations.",
      },
    },
    {
      "@type": "Question",
      name: "Can Vipras support factories, IT parks, hospitals and apartments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vipras works with manufacturing plants, IT parks, hospitals, corporate offices, warehouses, schools, hotels, apartments, residences and other high-demand environments.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide trained and supervised staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vipras focuses on trained manpower, disciplined deployment, active supervision and reliable service quality for day-to-day site operations.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a facility management proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can submit the enquiry form on this website or contact Vipras through phone, WhatsApp or email. Our team will review your requirement and connect with you.",
      },
    },
  ],
};
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vipras Facility Management Solutions",
  alternateName: "Vipras Facility Management Solutions Private Limited",
  url: "https://www.viprasfacility.com",
  publisher: {
    "@type": "Organization",
    name: "Vipras Facility Management Solutions Private Limited",
    url: "https://www.viprasfacility.com",
    logo: "https://www.viprasfacility.com/og-image.jpg.png.png",
  },
};
const servicesItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vipras Facility Management Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Security Services",
      url: "https://www.viprasfacility.com/services#security-services",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Housekeeping and Soft Services",
      url: "https://www.viprasfacility.com/services#housekeeping-soft-services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Industrial Manpower Supply",
      url: "https://www.viprasfacility.com/services#industrial-manpower-supply",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Technical and MEP Maintenance Services",
      url: "https://www.viprasfacility.com/services#mep-maintenance-services",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Fire and Safety Manpower",
      url: "https://www.viprasfacility.com/services#fire-safety-manpower",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Integrated Facility Management",
      url: "https://www.viprasfacility.com/services#integrated-facility-management",
    },
  ],
};
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.viprasfacility.com",
    },
  ],
};
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vipras Facility Management Solutions Private Limited",
  alternateName: "Vipras Facility Management Solutions",
  url: "https://www.viprasfacility.com",
  logo: "https://www.viprasfacility.com/og-image.jpg.png.png",
  image: "https://www.viprasfacility.com/og-image.jpg.png.png",
  email: "viprascrm@gmail.com",
  telephone: "+919710946484",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No-495 A, Village High Rd, Sholinganallur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600119",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/vipras-facility-management-private-limited/",
    "https://www.facebook.com/profile.php?id=61583160419137",
    "https://www.instagram.com/viprasfacilitymanagement/",
    "https://www.youtube.com/@viprasfacilitycrm8753",
  ],
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqPageJsonLd),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteJsonLd),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(servicesItemListJsonLd),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbJsonLd),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationJsonLd),
  }}
/>
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