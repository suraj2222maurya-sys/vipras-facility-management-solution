import type { Metadata } from "next";

import ServicesHeroSection from "./ServicesHeroSection";
import AllServicesSection from "./AllServicesSection";
import WhyChooseServicesSection from "./WhyChooseServicesSection";
import ServiceProcessSection from "./ServiceProcessSection";
import ServicesFAQSection from "./ServicesFAQSection";
import ServicesCTASection from "./ServicesCTASection";
function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
const servicesAreaServed = [
  {
    "@type": "City",
    name: "Chennai",
    containedInPlace: {
      "@type": "State",
      name: "Tamil Nadu",
    },
  },
  {
    "@type": "State",
    name: "Tamil Nadu",
  },
  {
    "@type": "City",
    name: "Bengaluru",
    containedInPlace: {
      "@type": "State",
      name: "Karnataka",
    },
  },
  {
    "@type": "State",
    name: "Andhra Pradesh",
  },
  {
    "@type": "Country",
    name: "India",
  },
];
const servicesAvailableChannel = [
  {
    "@type": "ServiceChannel",
    "@id": "https://www.viprasfacility.com/services#service-enquiry-channel",
    name: "Vipras Service Enquiry Channel",
    serviceUrl: "https://www.viprasfacility.com/contact-us",
    availableLanguage: ["en", "ta", "hi"],
    servicePhone: {
      "@type": "ContactPoint",
      "@id": "https://www.viprasfacility.com/#sales-contact-point",
      telephone: "+919710946484",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "ta", "hi"],
    },
  },
];
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
const servicesWebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.viprasfacility.com/#website",
  url: "https://www.viprasfacility.com",
  name: "Vipras Facility Management Solution",
  alternateName: "Vipras",
  description:
    "Vipras Facility Management Solution provides professional facility management services across Chennai, Tamil Nadu, Bengaluru, Andhra Pradesh and Pan India.",
  inLanguage: "en-IN",
  publisher: {
    "@id": "https://www.viprasfacility.com/#organization",
  },
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
  "@id": "https://www.viprasfacility.com/services#primaryimage",
  url: "https://www.viprasfacility.com/services-og-image.png",
  contentUrl: "https://www.viprasfacility.com/services-og-image.png",
  caption: "Vipras Facility Management Services in Chennai and Pan India",
  representativeOfPage: true,
  width: 1706,
  height: 864,
},
thumbnailUrl: "https://www.viprasfacility.com/services-og-image.png",
mainEntity: {
  "@type": "ItemList",
  "@id": "https://www.viprasfacility.com/services#service-list",
mainEntityOfPage: {
  "@id": "https://www.viprasfacility.com/services#webpage",
},
  name: "Vipras Facility Management Services",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 6,
  itemListElement: [
   {
  "@type": "ListItem",
  position: 1,
  name: "Integrated Facility Management",
  url: "https://www.viprasfacility.com/services/integrated-facility-management",
  item: {
    "@type": "Service",
    "@id":
      "https://www.viprasfacility.com/services/integrated-facility-management#service",
    name: "Integrated Facility Management",
    serviceType: "Integrated Facility Management",
    url: "https://www.viprasfacility.com/services/integrated-facility-management",
    mainEntityOfPage:
  "https://www.viprasfacility.com/services/integrated-facility-management",
    areaServed: servicesAreaServed,
    availableChannel: servicesAvailableChannel,
    brand: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
    offers: {
  "@id":
    "https://www.viprasfacility.com/services/integrated-facility-management#offer",
},
    provider: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
  },
},
{
  "@type": "ListItem",
  position: 2,
  name: "Security Services",
  url: "https://www.viprasfacility.com/services/security-services",
  item: {
    "@type": "Service",
    "@id":
      "https://www.viprasfacility.com/services/security-services#service",
    name: "Security Services",
    serviceType: "Security Services",
    url: "https://www.viprasfacility.com/services/security-services",
    mainEntityOfPage:
  "https://www.viprasfacility.com/services/security-services",
    areaServed: servicesAreaServed,
    availableChannel: servicesAvailableChannel,
    brand: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
    offers: {
  "@id": "https://www.viprasfacility.com/services/security-services#offer",
},
    provider: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
  },
},
{
  "@type": "ListItem",
  position: 3,
  name: "Housekeeping and Soft Services",
  url: "https://www.viprasfacility.com/services/housekeeping-soft-services",
  item: {
    "@type": "Service",
    "@id":
      "https://www.viprasfacility.com/services/housekeeping-soft-services#service",
    name: "Housekeeping and Soft Services",
    serviceType: "Housekeeping and Soft Services",
    url: "https://www.viprasfacility.com/services/housekeeping-soft-services",
    mainEntityOfPage:
  "https://www.viprasfacility.com/services/housekeeping-soft-services",
    areaServed: servicesAreaServed,
    availableChannel: servicesAvailableChannel,
    brand: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
    offers: {
  "@id":
    "https://www.viprasfacility.com/services/housekeeping-soft-services#offer",
},
    provider: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
  },
},
{
  "@type": "ListItem",
  position: 4,
  name: "Industrial Manpower Supply",
  url: "https://www.viprasfacility.com/services/industrial-manpower-supply",
  item: {
    "@type": "Service",
    "@id":
      "https://www.viprasfacility.com/services/industrial-manpower-supply#service",
    name: "Industrial Manpower Supply",
    serviceType: "Industrial Manpower Supply",
    url: "https://www.viprasfacility.com/services/industrial-manpower-supply",
    mainEntityOfPage:
  "https://www.viprasfacility.com/services/industrial-manpower-supply",
    areaServed: servicesAreaServed,
    availableChannel: servicesAvailableChannel,
    brand: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
    offers: {
  "@id":
    "https://www.viprasfacility.com/services/industrial-manpower-supply#offer",
},
    provider: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
  },
},
{
  "@type": "ListItem",
  position: 5,
  name: "Technical Maintenance",
  url: "https://www.viprasfacility.com/services/technical-maintenance",
  item: {
    "@type": "Service",
    "@id":
      "https://www.viprasfacility.com/services/technical-maintenance#service",
    name: "Technical Maintenance",
    serviceType: "Technical Maintenance Services",
    url: "https://www.viprasfacility.com/services/technical-maintenance",
    mainEntityOfPage:
  "https://www.viprasfacility.com/services/technical-maintenance",
    areaServed: servicesAreaServed,
    availableChannel: servicesAvailableChannel,
    brand: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
    offers: {
  "@id":
    "https://www.viprasfacility.com/services/technical-maintenance#offer",
},
    provider: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
  },
},
{
  "@type": "ListItem",
  position: 6,
  name: "Fire Safety Manpower",
  url: "https://www.viprasfacility.com/services/fire-safety-manpower",
  item: {
    "@type": "Service",
    "@id":
      "https://www.viprasfacility.com/services/fire-safety-manpower#service",
    name: "Fire Safety Manpower",
    serviceType: "Fire Safety Manpower Services",
    url: "https://www.viprasfacility.com/services/fire-safety-manpower",
    mainEntityOfPage:
  "https://www.viprasfacility.com/services/fire-safety-manpower",
    areaServed: servicesAreaServed,
    availableChannel: servicesAvailableChannel,
    brand: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
    offers: {
  "@id":
    "https://www.viprasfacility.com/services/fire-safety-manpower#offer",
},
    provider: {
      "@id": "https://www.viprasfacility.com/#organization",
    },
  },
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
  alternateName: "Vipras",
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
hasOfferCatalog: {
  "@type": "OfferCatalog",
  "@id": "https://www.viprasfacility.com/services#offer-catalog",
  name: "Vipras Facility Management Services Catalog",
  url: "https://www.viprasfacility.com/services",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "Offer",
      "@id":
        "https://www.viprasfacility.com/services/integrated-facility-management#offer",
      url: "https://www.viprasfacility.com/services/integrated-facility-management",
      offeredBy: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      itemOffered: {
        "@id":
          "https://www.viprasfacility.com/services/integrated-facility-management#service",
      },
    },
    {
      "@type": "Offer",
      "@id":
        "https://www.viprasfacility.com/services/security-services#offer",
      url: "https://www.viprasfacility.com/services/security-services",
      offeredBy: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      itemOffered: {
        "@id":
          "https://www.viprasfacility.com/services/security-services#service",
      },
    },
    {
      "@type": "Offer",
      "@id":
        "https://www.viprasfacility.com/services/housekeeping-soft-services#offer",
      url: "https://www.viprasfacility.com/services/housekeeping-soft-services",
      offeredBy: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      itemOffered: {
        "@id":
          "https://www.viprasfacility.com/services/housekeeping-soft-services#service",
      },
    },
    {
      "@type": "Offer",
      "@id":
        "https://www.viprasfacility.com/services/industrial-manpower-supply#offer",
      url: "https://www.viprasfacility.com/services/industrial-manpower-supply",
      offeredBy: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      itemOffered: {
        "@id":
          "https://www.viprasfacility.com/services/industrial-manpower-supply#service",
      },
    },
    {
      "@type": "Offer",
      "@id":
        "https://www.viprasfacility.com/services/technical-maintenance#offer",
      url: "https://www.viprasfacility.com/services/technical-maintenance",
      offeredBy: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      itemOffered: {
        "@id":
          "https://www.viprasfacility.com/services/technical-maintenance#service",
      },
    },
    {
      "@type": "Offer",
      "@id":
        "https://www.viprasfacility.com/services/fire-safety-manpower#offer",
      url: "https://www.viprasfacility.com/services/fire-safety-manpower",
      offeredBy: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      itemOffered: {
        "@id":
          "https://www.viprasfacility.com/services/fire-safety-manpower#service",
      },
    },
  ],
},
  url: "https://www.viprasfacility.com",
logo: {
  "@type": "ImageObject",
  "@id": "https://www.viprasfacility.com/#logo",
  url: "https://www.viprasfacility.com/vipras-logo%20(2).png",
  contentUrl: "https://www.viprasfacility.com/vipras-logo%20(2).png",
  caption: "Vipras Facility Management Solution",
},
  image: "https://www.viprasfacility.com/services-og-image.png",
 telephone: "+919710946484",
  email: "viprascrm@gmail.com",
  hasMap: "https://maps.app.goo.gl/PALDzrF9VnFk2qwr7",
  address: {
    "@type": "PostalAddress",
    "@id": "https://www.viprasfacility.com/#postal-address",
    streetAddress: "No-495 A, Village High Road, Sholinganallur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600119",
    addressCountry: "IN",
  },
  geo: {
  "@type": "GeoCoordinates",
  "@id": "https://www.viprasfacility.com/#geo",
  latitude: 12.9021541,
  longitude: 80.2326451,
},
  areaServed: [
    {
      "@type": "City",
      name: "Chennai",
      containedInPlace: {
  "@type": "State",
  name: "Tamil Nadu",
},
    },
    {
      "@type": "State",
      name: "Tamil Nadu",
    },
    {
      "@type": "City",
      name: "Bengaluru",
      containedInPlace: {
  "@type": "State",
  name: "Karnataka",
},
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
    "@id": "https://www.viprasfacility.com/#sales-contact-point",
    telephone: "+919710946484",
    contactType: "sales",
    url: "https://www.viprasfacility.com/contact-us",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil", "Hindi"],
  },
  {
    "@type": "ContactPoint",
    "@id": "https://www.viprasfacility.com/#customer-service-contact-point",
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
    type: "image/png",
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
 images: [
  {
    url: "https://www.viprasfacility.com/services-og-image.png",
    alt: "Vipras Facility Management Services in Chennai and Pan India",
  },
],
 
},
};

export default function ServicesPage() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: serializeJsonLd(servicesBreadcrumbSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: serializeJsonLd(servicesWebsiteSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: serializeJsonLd(servicesPageSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
__html: serializeJsonLd(servicesOrganizationSchema),
  }}
/>
<main id="main-content">
  <ServicesHeroSection />
  <AllServicesSection />
  <WhyChooseServicesSection />
  <ServiceProcessSection />
  <ServicesFAQSection />
  <ServicesCTASection />
</main>
    </>
  );
}
