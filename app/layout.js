import { Geist, Geist_Mono } from "next/font/google";
import Video from 'next-video';
import "./globals.css";
import Home from "./page";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JGVFX Online – Learn VFX, Animation, Game Design & AI",
  description:
    "JGVFX Online is a cutting-edge digital learning platform dedicated to empowering the next generation of creators in Visual Effects (VFX), Animation, Game Design, and Artificial Intelligence (AI).",
  keywords: [
    "JGVFX",
    "VFX course",
    "Animation course",
    "Game design course",
    "AI course",
    "Online VFX institute",
    "Best VFX academy",
    "VFX training India",
    "VFX school online",
    "Learn animation online"
  ],
  openGraph: {
    title: "JGVFX Online – Master VFX, Animation, Game Design & AI",
    description:
      "Learn industry-level VFX, Animation, Game Design, and AI with JGVFX Online – a next-gen digital learning platform.",
    url: "",
    siteName: "JGVFX Online",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "JGVFX Online Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JGVFX Online – Learn VFX & Animation",
    description:
      "Empowering the next generation of VFX, Animation, Game Design and AI creators.",
    images: ["/app/components/logo.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}      >
        {children}
      </body>
    </html>
  );
}
// className="mt-30 mb-0 pt-2 pb-10 rounded-2xl h-[70%] w-[90%] m-auto"