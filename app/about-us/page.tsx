import type { Metadata } from "next";

import AboutHeroSection from "./AboutHeroSection";
import CompanyOverviewSection from "./CompanyOverviewSection";
import MissionVisionSection from "./MissionVisionSection";
import ExperienceTrustSection from "./ExperienceTrustSection";
import ComplianceQualitySection from "./ComplianceQualitySection";
import AboutCTASection from "./AboutCTASection";
export const metadata: Metadata = {
    metadataBase: new URL("https://www.viprasfacility.com"),
  title:
"Vipras Facility Management Solutions | Security Guards, Housekeeping, Manpower Supply & Facility Management Company Chennai",
  description:
"Vipras Facility Management Solutions is a trusted facility management company providing professional security guard services, housekeeping services, manpower supply, technical maintenance, fire safety and integrated facility management solutions for corporate, industrial, commercial, residential, institutional and government projects across Chennai, Tamil Nadu and Pan India.",
robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
authors: [
  {
    name: "Vipras Facility Management Solutions",
    url: "https://www.viprasfacility.com",
  },
],

creator: "Vipras Facility Management Solutions",

publisher: "Vipras Facility Management Solutions",
category: "Facility Management",

classification:
  "Security Guard Services, Housekeeping Services, Manpower Supply, Technical Maintenance, Fire Safety, Integrated Facility Management",

referrer: "origin-when-cross-origin",

formatDetection: {
  email: false,
  address: false,
  telephone: false,
},
applicationName: "Vipras Facility Management Solutions",

appleWebApp: {
  capable: true,
  title: "Vipras Facility Management Solutions",
  statusBarStyle: "default",
},
  keywords: [
  "Vipras Facility Management Solutions",
  "facility management company Chennai",
  "facility management in Chennai",
  "facility management services Chennai",
  "facility management company Tamil Nadu",
  "facility management company India",
  "security guard services Chennai",
  "security agency Chennai",
  "security Service in Chennai",
  "housekeeping services Chennai",
  "corporate housekeeping services",
  "industrial housekeeping services",
  "manpower supply Chennai",
  "technical manpower supply",
  "facility manpower services",
  "integrated facility management",
  "IFM services Chennai",
  "technical maintenance services",
  "electrical maintenance services",
  "plumbing maintenance services",
  "AC maintenance services",
  "HVAC maintenance services",
  "fire safety services",
  "fire fighting services",
  "preventive maintenance",
  "breakdown maintenance",
  "apartment maintenance services",
  "office maintenance services",
  "hotel maintenance services",
  "school maintenance services",
  "hospital maintenance services",
  "factory maintenance services",
  "plant maintenance services",
  "industrial maintenance services",
  "government facility management",
  "commercial facility management",
  "residential facility management",
  "facility management company Pan India"
],
alternates: {
  canonical: "https://www.viprasfacility.com/about-us",
  languages: {
    "en-IN": "https://www.viprasfacility.com/about-us",
  },
},
 openGraph: {
  title:
    "Vipras Facility Management Solutions | Security, Housekeeping & Manpower Services Chennai",

  description:
    "Vipras Facility Management Solutions provides security guards, housekeeping services, manpower supply, technical maintenance, fire safety and integrated facility management across Chennai and Pan India.",

  url: "https://www.viprasfacility.com/about-us",

  siteName: "Vipras Facility Management Solutions",

  type: "website",

  locale: "en_IN",

  images: [
    {
    url: "https://www.viprasfacility.com/og-image.png",
      width: 1424,
height: 752,
      alt: "Vipras Facility Management Solutions",
    },
    
  ],
},
twitter: {
  card: "summary_large_image",

  title:
    "Vipras Facility Management Solutions | Security, Housekeeping & Manpower Services Chennai",

  description:
    "Vipras Facility Management Solutions provides security guards, housekeeping, manpower supply, technical maintenance and fire safety services across Chennai and Pan India.",

  images: ["https://www.viprasfacility.com/og-image.png"],
},
verification: {
  google: "-3dGvlA1neh9W0Yw02MljWKdVjKvhJZwCbTCXPezy1o",
},

other: {
  "theme-color": "#0F172A",
  "color-scheme": "light",
},
appLinks: {
  web: {
    url: "https://www.viprasfacility.com/about-us",
    should_fallback: true,
  },
},
archives: "https://www.viprasfacility.com",

assets: "https://www.viprasfacility.com",

bookmarks: "https://www.viprasfacility.com/about-us",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <CompanyOverviewSection />
      <MissionVisionSection />
      <ExperienceTrustSection />
      <ComplianceQualitySection />
      <AboutCTASection />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Vipras Facility Management Solutions",
      "description": "Learn about Vipras Facility Management Solutions, a Chennai-based facility management company providing security guards, housekeeping, manpower supply, technical maintenance, fire safety and integrated facility management across Chennai, Tamil Nadu and Pan India.",
      "url": "https://www.viprasfacility.com/about-us",
      "@id": "https://www.viprasfacility.com/about-us#aboutpage",
"isPartOf": {
  "@id": "https://www.viprasfacility.com/#website"
},
"mainEntityOfPage": {
  "@id": "https://www.viprasfacility.com/about-us"
},
"breadcrumb": {
  "@id": "https://www.viprasfacility.com/about-us#breadcrumb"
},
"inLanguage": "en-IN",
"primaryImageOfPage": {
  "@type": "ImageObject",
  "@id": "https://www.viprasfacility.com/about-us#primaryimage",
  "url": "https://www.viprasfacility.com/og-image.png",
  "width": 1200,
  "height": 630
},
"publisher": {
  "@id": "https://www.viprasfacility.com/#organization"
},
"about": {
  "@id": "https://www.viprasfacility.com/#organization"
},
"mentions": [
  {
    "@type": "Service",
    "name": "Security Guard Services"
  },
  {
    "@type": "Service",
    "name": "Housekeeping Services"
  },
  {
    "@type": "Service",
    "name": "Manpower Supply"
  },
  {
    "@type": "Service",
    "name": "Technical Maintenance Services"
  },
  {
    "@type": "Service",
    "name": "Fire Safety Services"
  },
  {
    "@type": "Service",
    "name": "Integrated Facility Management"
  }
],
"mainEntity": {
        "@type": "Organization",
        "name": "Vipras Facility Management Solutions",
        "url": "https://www.viprasfacility.com",
        "logo": "https://www.viprasfacility.com/og-image.png",
        "@id": "https://www.viprasfacility.com/#organization",
        "mainEntityOfPage": {
  "@id": "https://www.viprasfacility.com/about-us#aboutpage"
},

"description":
  "Vipras Facility Management Solutions provides professional security guard services, housekeeping services, manpower supply, technical maintenance, fire safety and integrated facility management across Chennai, Tamil Nadu and Pan India.",

"telephone": "+91 97109 46484",

"email": "viprascrm@gmail.com",

"image": "https://www.viprasfacility.com/og-image.png",

"areaServed": [
  {
    "@type": "City",
    "name": "Chennai"
  },
  {
    "@type": "State",
    "name": "Tamil Nadu"
  },
  {
    "@type": "Country",
    "name": "India"
  }
],
       "sameAs": [
  "https://www.facebook.com/profile.php?id=61583160419137",
  "https://www.linkedin.com/company/109659474/",
  "https://www.instagram.com/viprasfacilitymanagement",
  "https://www.youtube.com/@viprasfacilitycrm8753",
  "https://maps.app.goo.gl/TqnbMmaUHw1KNK896"
],
"hasMap": "https://maps.app.goo.gl/TqnbMmaUHw1KNK896",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 97109 46484",
          "contactType": "customer service",
          "email": "viprascrm@gmail.com",
          "areaServed": "IN"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No-495 A, Village High Rd, Sholinganallur",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600119",
          "addressCountry": "IN"
        }
      }
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@id": "https://www.viprasfacility.com/about-us#breadcrumb",
      "@type": "BreadcrumbList",
      "inLanguage": "en-IN",
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
          name: "About Us",
          item: "https://www.viprasfacility.com/about-us",
        },
      ],
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.viprasfacility.com/#website",
      "url": "https://www.viprasfacility.com",
      "name": "Vipras Facility Management Solutions",
      "description":
        "Professional Security Guard Services, Housekeeping Services, Manpower Supply, Technical Maintenance, Fire Safety and Integrated Facility Management across Chennai, Tamil Nadu and Pan India.",
      "publisher": {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      "inLanguage": "en-IN",
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://www.viprasfacility.com/#professionalservice",
      "inLanguage": "en-IN",
      "name": "Vipras Facility Management Solutions",
      "description": "Vipras Facility Management Solutions provides professional security guard services, housekeeping services, manpower supply, technical maintenance, fire safety and integrated facility management across Chennai, Tamil Nadu and Pan India.",
      "url": "https://www.viprasfacility.com",
      "image": "https://www.viprasfacility.com/og-image.png",
      "logo": "https://www.viprasfacility.com/og-image.png",
      "sameAs": [
  "https://www.facebook.com/profile.php?id=61583160419137",
  "https://www.linkedin.com/company/109659474/",
  "https://www.instagram.com/viprasfacilitymanagement",
  "https://www.youtube.com/@viprasfacilitycrm8753",
  "https://maps.app.goo.gl/TqnbMmaUHw1KNK896"
],
"hasMap": "https://maps.app.goo.gl/TqnbMmaUHw1KNK896",
"priceRange": "$$",

"currenciesAccepted": "INR",

"paymentAccepted": [
  "Cash",
  "UPI",
  "Credit Card",
  "Debit Card",
  "Bank Transfer"
],

"openingHours": [
  "Mo-Su 00:00-23:59"
],

"availableLanguage": [
  "English",
  "Hindi",
  "Tamil"
],
      "telephone": "+91 97109 46484",
      "email": "viprascrm@gmail.com",
      "contactPoint": {
  "@type": "ContactPoint",
  "telephone": "+91 97109 46484",
  "contactType": "customer service",
  "email": "viprascrm@gmail.com",
  "areaServed": "IN",
  "availableLanguage": ["English", "Hindi", "Tamil"]
},
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No-495 A, Village High Rd, Sholinganallur",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600119",
        "addressCountry": "IN"
      },
    "areaServed": [
  {
    "@type": "City",
    "name": "Chennai"
  },
  {
    "@type": "State",
    "name": "Tamil Nadu"
  },
  {
    "@type": "Country",
    "name": "India"
  }
],
      "serviceType": [
        "Security Guard Services",
        "Housekeeping Services",
        "Manpower Supply",
        "Technical Maintenance",
        "Fire Safety",
        "Integrated Facility Management"
      ]
      ,
"provider": {
  "@id": "https://www.viprasfacility.com/#organization"
}
,
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Facility Management Services",
  "itemListElement": [
    {
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Security Guard Services",
    "url": "https://www.viprasfacility.com/services/security-services"
  }
},
   {
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Housekeeping Services",
    "url": "https://www.viprasfacility.com/services/housekeeping-soft-services"
  }
},
    {
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Manpower Supply",
    "url": "https://www.viprasfacility.com/services/industrial-manpower-supply"
  }
},
   {
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Technical Maintenance Services",
    "url": "https://www.viprasfacility.com/services/technical-maintenance"
  }
},
    {
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Fire Safety Services",
    "url": "https://www.viprasfacility.com/services/fire-safety-manpower"
  }
},
    {
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Integrated Facility Management",
    "url": "https://www.viprasfacility.com/services/integrated-facility-management"
  }
}
  ]
}
,
"knowsAbout": [
  "Facility Management",
  "Integrated Facility Management",
  "Security Guard Services",
  "Housekeeping Services",
  "Corporate Housekeeping",
  "Industrial Housekeeping",
  "Manpower Supply",
  "Technical Manpower",
  "Electrical Maintenance",
  "HVAC Maintenance",
  "Plumbing Maintenance",
  "Fire Safety Services",
  "Facility Maintenance",
  "Preventive Maintenance",
  "Commercial Facility Management",
  "Industrial Facility Management",
  "Residential Facility Management",
  "Government Facility Management"
]
    }),
  }}
/>
    </>
    
  );
}
