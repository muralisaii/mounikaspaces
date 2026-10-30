import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/content";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Interior Designer & Civil Engineer`,
  description: siteConfig.description,
  keywords: [
    "Interior Designer",
    "Civil Engineer",
    "Residential Interiors",
    "Modular Kitchen",
    "AutoCAD Drafting",
    "3D Visualization",
    "SketchUp V-Ray",
    "Space Planning",
    "Leela Mounika Indupurala",
    "RADIEK Company",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Interior Designer & Civil Engineer`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/projects/image_19.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Interior Portfolio`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fcfbf9] text-[#1c1917] selection:bg-[#b0894e] selection:text-white">
        {children}
      </body>
    </html>
  );
}
