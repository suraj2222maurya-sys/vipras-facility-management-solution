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
    "Vipras Facility Management Solutions Pvt. Ltd. provides professional security, housekeeping, manpower, Mechanical, Electrical and Plumbing maintenance and integrated facility services in Chennai, Tamil Nadu and across India.",
    keywords: [
    "Vipras Facility Management Solutions Pvt. Ltd.",
    "facility management services in Chennai",
    "facility management company in Chennai",
    "facility management services in Tamil Nadu",
    "facility management services in India",
    "security services in Chennai",
    "housekeeping services in Chennai",
    "manpower supply services in Chennai",
    "Mechanical Electrical and Plumbing maintenance services",
    "fire safety support services",
    "integrated facility management services",
  ],
   authors: [{ name: "Vipras Facility Management Solutions Pvt. Ltd." }],
  creator: "Vipras Facility Management Solutions Pvt. Ltd.",
  publisher: "Vipras Facility Management Solutions Pvt. Ltd.",
    alternates: {
    canonical: "/",
  },
    icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
      openGraph: {
    title:
      "Facility Management Services in Chennai Tamil Nadu India | Vipras Facility Management", 
    description:
      "Vipras Facility Management Solutions provides professional security, housekeeping, manpower, Mechanical, Electrical and Plumbing maintenance, fire safety support and integrated facility management services in Chennai, Tamil Nadu and across India.",
    url: "/",
    siteName: "Vipras Facility Management Solutions Pvt. Ltd.",
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
      "Vipras Facility Management Solutions provides professional security, housekeeping, manpower, Mechanical, Electrical and Plumbing maintenance, fire safety support and integrated facility management services in Chennai, Tamil Nadu and across India.",
    images: ["/og-image.jpg.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en-IN"
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