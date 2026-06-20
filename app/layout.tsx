import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterSection from "./home/FooterSection";
import "./globals.css";

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
  title: {
    default: "Vipras Facility Management Solution",
    template: "%s | Vipras Facility Management Solution",
  },
  description:
    "Vipras Facility Management Solution provides premium enterprise facility management, security, housekeeping, manpower, MEP maintenance, fire safety, compliance and integrated facility services.",
  keywords: [
    "Vipras Facility Management Solution",
    "facility management company",
    "security services",
    "housekeeping services",
    "manpower services",
    "MEP maintenance",
    "fire safety services",
    "integrated facility management",
    "facility management services in Chennai",
    "facility management services in Tamil Nadu",
  ],
  authors: [{ name: "Vipras Facility Management Solution" }],
  creator: "Vipras Facility Management Solution",
  publisher: "Vipras Facility Management Solution",
  robots: {
    index: true,
    follow: true,
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
  lang="en"
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