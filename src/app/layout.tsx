import type { Metadata } from "next";
import { Nunito, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cozy Cruisers — Safe Rides to Your Cozy Corner",
    template: "%s | Cozy Cruisers",
  },
  description:
    "Licensed, DCF-compliant childcare transportation in Milwaukee. Background-checked drivers, certified vehicles, and community trust — every ride.",
  keywords: [
    "childcare transportation",
    "Milwaukee",
    "DCF compliant",
    "daycare transportation",
    "safe rides for kids",
    "Cozy Cruisers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-dark antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
