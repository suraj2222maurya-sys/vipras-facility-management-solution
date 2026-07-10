import type { Metadata } from "next";

import ServicesHeroSection from "./ServicesHeroSection";
import AllServicesSection from "./AllServicesSection";
import WhyChooseServicesSection from "./WhyChooseServicesSection";
import ServiceProcessSection from "./ServiceProcessSection";
import ServicesFAQSection from "./ServicesFAQSection";
import ServicesCTASection from "./ServicesCTASection";
const servicesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.viprasfacility.com/services#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.viprasfacility.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.viprasfacility.com/services",
    },
  ],
};
const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.viprasfacility.com/services#webpage",
  url: "https://www.viprasfacility.com/services",
  name: "Facility Management Services Company in Chennai | Vipras",
  description:
    "Professional facility management services in Chennai, Tamil Nadu, Bengaluru, Andhra Pradesh and across India, including security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management.",
  inLanguage: "en-IN",
  primaryImageOfPage: {
  "@type": "ImageObject",
  url: "https://www.viprasfacility.com/services-og-image.png",
  width: 1706,
  height: 864,
},
mainEntity: {
  "@type": "ItemList",
  name: "Vipras Facility Management Services",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Integrated Facility Management",
      url: "https://www.viprasfacility.com/services/integrated-facility-management",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Security Services",
      url: "https://www.viprasfacility.com/services/security-services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Housekeeping and Soft Services",
      url: "https://www.viprasfacility.com/services/housekeeping-soft-services",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Industrial Manpower Supply",
      url: "https://www.viprasfacility.com/services/industrial-manpower-supply",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Technical Maintenance",
      url: "https://www.viprasfacility.com/services/technical-maintenance",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Fire Safety Manpower",
      url: "https://www.viprasfacility.com/services/fire-safety-manpower",
    },
  ],
},
  about: {
  "@type": "Organization",
  "@id": "https://www.viprasfacility.com/#organization",
  name: "Vipras Facility Management Solution",
  url: "https://www.viprasfacility.com",
},
publisher: {
  "@id": "https://www.viprasfacility.com/#organization",
},
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.viprasfacility.com/#website",
    url: "https://www.viprasfacility.com",
    name: "Vipras Facility Management Solution",
  },
  breadcrumb: {
    "@id": "https://www.viprasfacility.com/services#breadcrumb",
  },
};
const servicesOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.viprasfacility.com/#organization",
  name: "Vipras Facility Management Solution",
  foundingDate: "2007",
  description:
  "Vipras Facility Management Solution provides security, housekeeping, manpower supply, technical maintenance, fire safety manpower and integrated facility management services across Chennai, Tamil Nadu, Bengaluru, Andhra Pradesh and Pan India.",
 knowsAbout: [
  "Integrated Facility Management Services",
  "Security Guard Services",
  "Corporate Security Services",
  "Industrial Security Services",
  "Residential Security Services",
  "Hospital Security Services",
  "Housekeeping Services",
  "Commercial Housekeeping Services",
  "Industrial Housekeeping Services",
  "Hospital Housekeeping Services",
  "Office Housekeeping Services",
  "Soft Facility Management Services",
  "Industrial Manpower Supply",
  "Skilled Manpower Supply",
  "Unskilled Manpower Supply",
  "Contract Staffing Services",
  "Facility Management Manpower",
  "Technical Maintenance Services",
  "Mechanical Maintenance Services",
  "Electrical Maintenance Services",
  "Plumbing Maintenance Services",
  "MEP Maintenance Services",
  "Preventive Maintenance Services",
  "Fire Safety Manpower Services",
  "Fire Watch Services",
  "Fire and Safety Support",
  "Building Maintenance Services",
  "Commercial Facility Management",
  "Industrial Facility Management",
  "Hospital Facility Management",
  "Hotel Facility Management",
  "Apartment Facility Management",
  "IT Park Facility Management",
  "Warehouse Facility Management",
  "School and College Facility Management",
],
  url: "https://www.viprasfacility.com",
 logo: "https://www.viprasfacility.com/vipras-logo%20(2).png",
  image: "https://www.viprasfacility.com/services-og-image.png",
 telephone: "+919710946484",
  email: "viprascrm@gmail.com",
  hasMap: "https://maps.app.goo.gl/7otbjggjfE9oBCZG7",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No-495 A, Village High Road, Sholinganallur",
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
      "@type": "City",
      name: "Bengaluru",
    },
    {
      "@type": "State",
      name: "Andhra Pradesh",
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
      contactType: "sales",
      url: "https://www.viprasfacility.com/contact-us",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
    {
      "@type": "ContactPoint",
     telephone: "+919710946484",
      contactType: "customer service",
      url: "https://www.viprasfacility.com/contact-us",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61583160419137",
    "https://www.linkedin.com/company/109659474/",
    "https://www.youtube.com/@viprasfacilitycrm8753",
    "https://www.instagram.com/viprasfacilitymanagement",  
  ],
};
export const metadata: Metadata = {
 title: "Facility Management Services Company in Chennai | Vipras",
 description:
  "Get professional facility management services in Chennai, Tamil Nadu, Bengaluru, Andhra Pradesh and across India, including security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management.",
  publisher: "Vipras Facility Management Solution",
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
canonical: "https://www.viprasfacility.com/services",
  },
verification: {
  google: "-3dGvlA1neh9W0Yw02MljWKdVjKvhJZwCbTCXPezy1o",
},
  openGraph: {
title: "Facility Management Services Company in Chennai | Vipras",
    description:
  "Professional facility management services across Chennai, Tamil Nadu, Bengaluru, Andhra Pradesh and Pan India, including security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management.",
    url: "https://www.viprasfacility.com/services",
    
    siteName: "Vipras Facility Management Solution",
    locale: "en_IN",
    images: [
  {
    url: "https://www.viprasfacility.com/services-og-image.png",
    width: 1706,
    height: 864,
    alt: "Vipras Facility Management Services in Chennai and Pan India",
  },
],
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "Facility Management Services Company in Chennai | Vipras",
  description:
    "Professional facility management services across Chennai, Tamil Nadu, Bengaluru, Andhra Pradesh and Pan India, including security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management.",
 images: ["https://www.viprasfacility.com/services-og-image.png"],
},
};

export default function ServicesPage() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(servicesBreadcrumbSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(servicesPageSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(servicesOrganizationSchema),
  }}
/>
      <ServicesHeroSection />
      <AllServicesSection />
      <WhyChooseServicesSection />
      <ServiceProcessSection />
      <ServicesFAQSection />
      <ServicesCTASection />
    </>
  );
}
