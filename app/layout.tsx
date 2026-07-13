import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterSection from "./home/FooterSection";
import "./globals.css";
const baseUrl = "https://www.viprasfacility.com";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
      applicationName: "Vipras Facility Management Solutions Pvt. Ltd.",
  title: {
    default: "Trusted Facility Management Services in Chennai & Tamil Nadu | Vipras Facility Management Solutions Pvt. Ltd.",
    template: "%s | Vipras Facility Management Solutions Pvt. Ltd.",
  },
    description:
  "Vipras Facility Management Solutions Pvt. Ltd. provides professional facility management, security, housekeeping, cleaning, manpower supply, electrical maintenance, plumbing maintenance, AC and HVAC maintenance, fire safety support and integrated facility services in Chennai, Tamil Nadu and across India.",
keywords: [
  "Vipras Facility Management Solutions Pvt. Ltd.",
  "facility management services in Chennai",
  "facility management services",
  "facility management services in Tamil Nadu",
  "facility management services in India",
  "security services in Chennai",
  "housekeeping services in Chennai",
  "manpower supply services in Chennai",
  "electrical maintenance services in Chennai",
  "plumbing maintenance services in Chennai",
  "AC and HVAC maintenance services in Chennai",
  "fire safety support services",
  "integrated facility management services",
],
   authors: [{ name: "Vipras Facility Management Solutions Pvt. Ltd." }],
  creator: "Vipras Facility Management Solutions Pvt. Ltd.",
  publisher: "Vipras Facility Management Solutions Pvt. Ltd.",
  referrer: "origin-when-cross-origin",
  category: "Facility Management Services",
  classification: "Business Service Website",
    alternates: {
  canonical: "/",
  languages: {
    "en-IN": "/",
  },
},
    icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
    appleWebApp: {
    capable: true,
    title: "Vipras",
    statusBarStyle: "default",
  },
    other: {
    "geo.region": "IN-TN",
    "geo.placename": "Sholinganallur, Chennai, Tamil Nadu",
      "geo.position": "12.901406525376094;80.23219272492828",
  ICBM: "12.901406525376094, 80.23219272492828",
    "business:contact_data:street_address":
      "No-495 A, Village High Rd, Sholinganallur",
    "business:contact_data:locality": "Chennai",
    "business:contact_data:region": "Tamil Nadu",
    "business:contact_data:postal_code": "600119",
    "business:contact_data:country_name": "India",
      "business:contact_data:phone_number": "+91 97109 46484",
  "business:contact_data:email": "viprascrm@gmail.com",
  "business:contact_data:website": "https://www.viprasfacility.com/",
  },

      openGraph: {
    title:
      "Facility Management Services in Chennai Tamil Nadu India | Vipras Facility Management", 
    description:
  "Vipras Facility Management Solutions Pvt. Ltd. provides professional facility management, security, housekeeping, cleaning, manpower supply, electrical maintenance, plumbing maintenance, AC and HVAC maintenance and integrated facility services in Chennai, Tamil Nadu and across India.",
      url: "/",
    siteName: "Vipras Facility Management Solutions Pvt. Ltd.",
    emails: ["viprascrm@gmail.com"],
phoneNumbers: ["+91 97109 46484"],
    locale: "en_IN",
    type: "website",
        images: [
      {
        url: "/og-image.jpg.png",
        width: 1200,
        height: 630,
        alt: "Vipras Facility Management Services in Chennai, Tamil Nadu and across India",
      },
       ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Facility Management Services in Chennai Tamil Nadu India | Vipras Facility Management",
    description:
  "Vipras Facility Management Solutions provides professional facility management, security, housekeeping, cleaning, manpower supply, electrical maintenance, plumbing maintenance, AC and HVAC maintenance, fire safety support and integrated facility management services in Chennai, Tamil Nadu and across India.",
      images: ["/og-image.jpg.png"],
  },

  verification: {
    google:
      "-3dGvlA1neh9W0Yw02MljWKdVjKvhJZwCbTCXPezy1o",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f8f1e7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
  lang="en-IN"
  suppressHydrationWarning
  data-scroll-behavior="smooth"
  className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
>
     <body className="min-h-screen overflow-x-hidden bg-[#fffaf2] text-[#2f281f]">
  <Navbar />
  <main className="min-h-screen bg-[#fffaf2]">{children}</main>
  <FooterSection />
</body>
    </html>
  );
}