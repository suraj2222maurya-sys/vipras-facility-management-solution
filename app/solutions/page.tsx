import type { Metadata } from "next";

import SolutionsHeroSection from "./SolutionsHeroSection";
import BusinessSolutionsSection from "./BusinessSolutionsSection";
import SolutionCategoriesSection from "./SolutionCategoriesSection";
import IndustriesSolutionFitSection from "./IndustriesSolutionFitSection";
import WhyOurSolutionsWorkSection from "./WhyOurSolutionsWorkSection";
import SolutionsFAQSection from "./SolutionsFAQSection";
const SITE_URL = "https://www.viprasfacility.com";
const PAGE_URL = `${SITE_URL}/solutions`;
const COMPANY_NAME =
  "VIPRAS FACILITY MANAGEMENT SOLUTIONS PRIVATE LIMITED";
  const OG_IMAGE_URL = `${SITE_URL}/solutions-facility-management-og.png`;
export const metadata: Metadata = {
  title: {
  absolute:
    "Facility Management Solutions in Chennai & Pan India | Vipras",
},
  description:
  "Get facility management solutions in Chennai, Tamil Nadu and Pan India for security, housekeeping, manpower, maintenance and fire safety. Request a quote.",
 creator: COMPANY_NAME,
 publisher: COMPANY_NAME,
 authors: [
  {
    name: COMPANY_NAME,
    url: SITE_URL,
  },
],
 category: "Facility Management Services",
  
 alternates: {
  canonical: PAGE_URL,
},
robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
  openGraph: {
title: "Facility Management Solutions in Chennai & Pan India | Vipras",
    description:
  "Get facility management solutions in Chennai, Tamil Nadu and Pan India for security, housekeeping, manpower, maintenance and fire safety. Request a quote.",
   url: PAGE_URL,
     siteName: COMPANY_NAME,
     emails: ["viprascrm@gmail.com"],
phoneNumbers: ["+919710946484"],
     locale: "en_IN",
    type: "website",
      images: [
    {
      url: OG_IMAGE_URL,
      width: 1731,
height: 909,
      alt: "Facility management solutions in Chennai and Pan India by Vipras",
      type: "image/png",
    },
  ],

  },
  twitter: {
  card: "summary_large_image",
  title: "Facility Management Solutions in Chennai & Pan India | Vipras",
 description:
  "Get facility management solutions in Chennai, Tamil Nadu and Pan India for security, housekeeping, manpower, maintenance and fire safety. Request a quote.",
 images: [
  {
    url: OG_IMAGE_URL,
    width: 1731,
    height: 909,
    alt: "Facility management solutions in Chennai and Pan India by Vipras",
    type: "image/png",
  },
],
},
};

export default function SolutionsPage() {
  return (
    <>
    <script
  id="solutions-page-structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY_NAME,
  legalName: COMPANY_NAME,
  alternateName: "Vipras",
  foundingDate: "2007",
  url: `${SITE_URL}/`,
  image: OG_IMAGE_URL,
  logo: {
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#logo`,
  url: `${SITE_URL}/vipras-logo%20(2).png`,
  contentUrl: `${SITE_URL}/vipras-logo%20(2).png`,
  caption: COMPANY_NAME,
},
  description:
  "Vipras provides security services, housekeeping and soft services, industrial manpower supply, technical maintenance, fire and safety manpower, and integrated facility management solutions across Chennai, Tamil Nadu and Pan India.",
  knowsAbout: [
  "Facility Management Solutions",
  "Facility Management Services",
  "Integrated Facility Management Services",
  "Corporate Facility Management",
  "Industrial Facility Management",
  "Commercial Facility Management",
  "Security Services",
  "Security Manpower Services",
  "Corporate Security Services",
  "Industrial Security Services",
  "Housekeeping Services",
  "Soft Facility Services",
  "Industrial Manpower Supply",
  "Skilled Manpower Supply",
  "Semi-Skilled Manpower Supply",
  "Unskilled Manpower Supply",
  "Technical Maintenance Services",
  "Electrical Maintenance",
  "Plumbing Maintenance",
  "HVAC Maintenance",
  "DG Maintenance",
  "Preventive Maintenance",
  "Fire and Safety Manpower Services",
  "Fire Warden Services",
  "Emergency Response Support",
],
  email: "viprascrm@gmail.com",
  telephone: "+919710946484",
  contactPoint: {
  "@type": "ContactPoint",
  contactType: "customer service",
telephone: "+919710946484",
  email: "viprascrm@gmail.com",
  url: `${SITE_URL}/contact-us`,
  areaServed: "IN",
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
    alternateName: "Bangalore",
  },
  {
    "@type": "State",
    name: "Karnataka",
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
  latitude: 12.9021541,
  longitude: 80.2326451,
},
  sameAs: [
  "https://www.facebook.com/profile.php?id=61583160419137",
  "https://www.instagram.com/viprasfacilitymanagement/",
  "https://www.linkedin.com/company/109659474/",
  "https://www.youtube.com/@viprasfacilitycrm8753",
],
location: {
  "@type": "Place",
  name: COMPANY_NAME,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No-495 A, Village High Rd, Sholinganallur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600119",
    addressCountry: "IN",
  },
  hasMap: "https://maps.app.goo.gl/SxADeeu5Uu1DDJdi8",
},
},
        {
          "@type": "CollectionPage",
          "@id": `${PAGE_URL}#webpage`,
          url: PAGE_URL,
          name: "Facility Management Solutions in Chennai & Pan India | Vipras",
          description:
            "Get facility management solutions in Chennai, Tamil Nadu and Pan India for security, housekeeping, manpower, maintenance and fire safety. Request a quote.",
          inLanguage: "en-IN",
          about: {
  "@id": `${SITE_URL}/#organization`,
},
publisher: {
  "@id": `${SITE_URL}/#organization`,
},
primaryImageOfPage: {
  "@type": "ImageObject",
  "@id": `${PAGE_URL}#primaryimage`,
  url: OG_IMAGE_URL,
  contentUrl: OG_IMAGE_URL,
  width: 1731,
height: 909,
  encodingFormat: "image/png",
  name: "Facility Management Solutions in Chennai, Tamil Nadu and Pan India",
  caption:
    "Security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management solutions by Vipras.",
},
breadcrumb: {
  "@id": `${PAGE_URL}#breadcrumb`,
},
mainEntity: {
  "@id": `${PAGE_URL}#solutions-list`,
},
hasPart: [
  {
    "@id": `${PAGE_URL}#solutions-list`,
  },
  {
    "@id": `${PAGE_URL}#faq`,
  },
],
                   isPartOf: {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: COMPANY_NAME,
            publisher: {
              "@id": `${SITE_URL}/#organization`,
            },
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${PAGE_URL}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Facility Management Solutions",
              item: PAGE_URL,
            },
          ],
        },
        {
          "@type": "ItemList",
          "@id": `${PAGE_URL}#solutions-list`,
          name: "Facility Management Solution Categories",
          numberOfItems: 6,
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Service",
                "@id": `${SITE_URL}/services/security-services#service`,
                name: "Security Services",
                url: `${SITE_URL}/services/security-services`,
                serviceType: "Professional Security Manpower Services",
                description:
                  "Professional security manpower for corporate offices, factories, IT parks, hospitals, schools, warehouses, apartments and government project environments.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
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
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Service",
                "@id": `${SITE_URL}/services/housekeeping-soft-services#service`,
                name: "Housekeeping & Soft Services",
                url: `${SITE_URL}/services/housekeeping-soft-services`,
                serviceType: "Housekeeping and Soft Facility Services",
                description:
                  "Reliable housekeeping and soft facility services for clean, hygienic and well-managed workplaces across Chennai, Tamil Nadu and Pan India.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
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
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Service",
                "@id": `${SITE_URL}/services/industrial-manpower-supply#service`,
                name: "Industrial Manpower Supply",
                url: `${SITE_URL}/services/industrial-manpower-supply`,
                serviceType:
                  "Skilled, Semi-Skilled and Unskilled Industrial Manpower Supply",
                description:
                  "Skilled, semi-skilled and unskilled manpower support for factories, production units, warehouses, logistics hubs and industrial operations.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
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
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Service",
                "@id": `${SITE_URL}/services/technical-maintenance#service`,
                name: "Technical Maintenance",
                url: `${SITE_URL}/services/technical-maintenance`,
                serviceType:
                  "Electrical, Plumbing, HVAC, DG and Preventive Maintenance",
                description:
                  "Electrical, plumbing, HVAC, DG and preventive maintenance support to keep buildings and business facilities running smoothly.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
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
              },
            },
            {
              "@type": "ListItem",
              position: 5,
              item: {
                "@type": "Service",
                "@id": `${SITE_URL}/services/fire-safety-manpower#service`,
                name: "Fire & Safety Manpower",
                url: `${SITE_URL}/services/fire-safety-manpower`,
                serviceType: "Fire and Safety Manpower Services",
                description:
                  "Fire safety manpower, fire wardens and emergency response support for industrial, commercial, institutional and government sites.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
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
              },
            },
            {
              "@type": "ListItem",
              position: 6,
              item: {
                "@type": "Service",
                "@id": `${SITE_URL}/services/integrated-facility-management#service`,
                name: "Integrated Facility Management",
                url: `${SITE_URL}/services/integrated-facility-management`,
                serviceType: "Integrated Facility Management Services",
                description:
                  "Complete facility management support combining security, housekeeping, manpower, maintenance, safety and daily site supervision.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
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
              },
                      },
          ],
        },
        {
          "@type": "FAQPage",
          inLanguage: "en-IN",
          "@id": `${PAGE_URL}#faq`,
          url: `${PAGE_URL}#faq`,
          isPartOf: {
            "@id": `${PAGE_URL}#webpage`,
          },
          mainEntity: [
            {
              "@type": "Question",
              name: "What is a facility management solution?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "A facility management solution is a planned service model that helps a business manage security, housekeeping, manpower, technical maintenance, fire safety and daily facility operations in a more organized way.",
              },
            },
            {
              "@type": "Question",
              name:
                "Can Vipras create a custom solution for my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. Vipras can suggest a suitable service plan based on your site type, location, manpower requirement, working hours and service scope.",
              },
            },
            {
              "@type": "Question",
              name: "Which locations do you support?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Vipras supports Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India requirements based on project scope and manpower availability.",
              },
            },
            {
              "@type": "Question",
              name:
                "Which industries can use your facility solutions?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Our solutions are suitable for corporate offices, factories, IT parks, hospitals, schools, warehouses, apartments, commercial buildings and government project environments.",
              },
            },
            {
              "@type": "Question",
              name: "How do I request a solution proposal?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "You can open the contact page or call +91 97109 46484. Share your site details, service requirement and manpower need, and our team will guide you.",
              },
            },
          ],
        },
      ],
    }).replace(/</g, "\\u003c"),
  }}
/>

      <SolutionsHeroSection />
      <BusinessSolutionsSection />
      <SolutionCategoriesSection />
      <IndustriesSolutionFitSection />
      <WhyOurSolutionsWorkSection />
      <SolutionsFAQSection />
    </>
  );
}
