import type { Metadata } from "next";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import Footer from "./components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "ZUBU HEALTH",
  description: "",
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${manrope.variable}`}>
      <body>
        <div className="flex w-full">
          <Sidebar />
          <div className="w-full bg-background">
            <Navbar />
            <div className="px-8 py-7">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
