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
category: "Facility Management Services",
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
    "@id": "https://www.viprasfacility.com/#localbusiness",
  name: "Vipras Facility Management Solutions Private Limited",
  legalName: "Vipras Facility Management Solutions Private Limited",
  foundingDate: "2007",
  alternateName: "Vipras Facility Management Solutions",
  url: "https://www.viprasfacility.com",
    mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.viprasfacility.com/",
  },
  parentOrganization: {
  "@id": "https://www.viprasfacility.com/#organization",
},
    inLanguage: "en-IN",
  logo: "https://www.viprasfacility.com/og-image.jpg.png.png",
  image: "https://www.viprasfacility.com/og-image.jpg.png.png",
  telephone: "+919710946484",
  email: "viprascrm@gmail.com",
  priceRange: "Custom quote based on site requirement",
  potentialAction: {
  "@type": "ContactAction",
  name: "Get Free Quote",
  target: [
    "https://wa.me/919710946484",
    "mailto:viprascrm@gmail.com",
  ],
},
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
  geo: {
  "@type": "GeoCoordinates",
  latitude: 12.9010,
  longitude: 80.2279,
},
hasMap: "https://share.google/2CLkutu58RSNef4Gm",
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
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
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
  hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Facility Management Services Offered by Vipras",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Integrated Facility Management Services",
        serviceType: "Integrated Facility Management Services",
        areaServed: "Chennai, Tamil Nadu and Pan India",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Security Services",
        serviceType: "Security Guard Services",
        areaServed: "Chennai, Tamil Nadu and Pan India",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Housekeeping Services",
        serviceType: "Housekeeping and Cleaning Services",
        areaServed: "Chennai, Tamil Nadu and Pan India",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Manpower Services",
        serviceType: "Industrial Manpower Supply Services",
        areaServed: "Chennai, Tamil Nadu and Pan India",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Technical Maintenance Services",
        serviceType: "MEP, Electrical, Plumbing and AC Maintenance Services",
        areaServed: "Chennai, Tamil Nadu and Pan India",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fire Safety Manpower",
        serviceType: "Fire and Safety Manpower Services",
        areaServed: "Chennai, Tamil Nadu and Pan India",
      },
    },
  ],
},
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
    "@id": "https://www.viprasfacility.com/#faq",
      isPartOf: {
    "@id": "https://www.viprasfacility.com/#webpage",
  },
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
    "@id": "https://www.viprasfacility.com/#website",
  name: "Vipras Facility Management Solutions",
  alternateName: "Vipras Facility Management Solutions Private Limited",
  url: "https://www.viprasfacility.com",
    inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
        "@id": "https://www.viprasfacility.com/#organization",
    name: "Vipras Facility Management Solutions Private Limited",
    url: "https://www.viprasfacility.com",
    logo: "https://www.viprasfacility.com/og-image.jpg.png.png",
  },
};
const servicesItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
    "@id": "https://www.viprasfacility.com/#services",
  name: "Vipras Facility Management Services",
    numberOfItems: 6,
    mainEntityOfPage: {
  "@id": "https://www.viprasfacility.com/#webpage",
},
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
    "@id": "https://www.viprasfacility.com/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.viprasfacility.com",
    },
  ],
};
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.viprasfacility.com/#webpage",
  url: "https://www.viprasfacility.com/",
  name: "Facility Management Services in Chennai | Vipras Facility Management Solutions",
  description:
    "Vipras Facility Management Solutions provides facility management services in Chennai with Pan India support, including security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management for corporate, industrial, commercial and institutional sites.",
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  keywords: [
  "Facility Management Services in Chennai",
  "Integrated Facility Management Services",
  "Security Services in Chennai",
  "Housekeeping Services in Chennai",
  "Manpower Services in Chennai",
  "Technical Maintenance Services",
  "MEP Maintenance Services",
  "Fire Safety Manpower",
  "Facility Management Services Tamil Nadu",
  "Facility Management Services Pan India",
],
  dateModified: "2026-06-30",
  potentialAction: {
  "@type": "ContactAction",
  name: "Get Free Quote",
  target: [
    "https://wa.me/919710946484",
    "mailto:viprascrm@gmail.com",
  ],
},
    mainEntity: {
    "@id": "https://www.viprasfacility.com/#services",
  },
  hasPart: {
  "@id": "https://www.viprasfacility.com/#faq",
},
  isPartOf: {
    "@id": "https://www.viprasfacility.com/#website",
  },
  about: {
    "@id": "https://www.viprasfacility.com/#localbusiness",
  },
  publisher: {
    "@id": "https://www.viprasfacility.com/#organization",
  },
  breadcrumb: {
    "@id": "https://www.viprasfacility.com/#breadcrumb",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    "@id": "https://www.viprasfacility.com/#primaryimage",
    url: "https://www.viprasfacility.com/og-image.jpg.png.png",
    width: 1200,
    height: 630,
    caption: "Vipras Facility Management Solutions - Facility Management Services in Chennai",
    representativeOfPage: true,
  },
};
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
    "@id": "https://www.viprasfacility.com/#organization",
  name: "Vipras Facility Management Solutions Private Limited",
  legalName: "Vipras Facility Management Solutions Private Limited",
  foundingDate: "2007",
  slogan: "Safe, Clean and Well-Managed Workplaces",
  alternateName: "Vipras Facility Management Solutions",
  url: "https://www.viprasfacility.com",
  mainEntityOfPage: {
  "@type": "WebPage",
  "@id": "https://www.viprasfacility.com/",
},
  inLanguage: "en-IN",
  logo: "https://www.viprasfacility.com/og-image.jpg.png.png",
  image: "https://www.viprasfacility.com/og-image.jpg.png.png",
  email: "viprascrm@gmail.com",
  telephone: "+919710946484",
  contactPoint: [
  {
    "@type": "ContactPoint",
    telephone: "+919710946484",
    contactType: "customer service",
    email: "viprascrm@gmail.com",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Tamil"],
  },
  {
    "@type": "ContactPoint",
    telephone: "+919710946484",
    contactType: "WhatsApp enquiry",
    url: "https://wa.me/919710946484",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Tamil"],
  },
],
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
knowsAbout: [
  "Facility Management Services",
  "Integrated Facility Management",
  "Security Services",
  "Housekeeping Services",
  "Manpower Services",
  "Technical Maintenance Services",
  "MEP Maintenance Services",
  "Fire Safety Manpower",
  "Corporate Facility Management",
  "Industrial Facility Management",
],
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
    __html: JSON.stringify(webPageJsonLd),
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