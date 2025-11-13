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
  title: "JGVFX-ONLINE",
  description: "This website is for vfx educational",
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