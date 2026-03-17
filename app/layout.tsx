import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/MobNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Axilegal",
  description: "Legal Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* TOP BAR */}
        <div className="bg-yellow-400 text-center text-xs sm:text-sm font-semibold py-2 px-2">
          Book Free Consultation Now 
        </div>

        {/* HEADER */}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}