import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientProviders from "@/components/ClientProviders";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-elegant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Novakor Indonesia - Engineering-Based OEM Wig Manufacturer",
  description: "Advanced OEM Wig Engineering & Manufacturing Solutions. Precision cap engineering, material science expertise, and scalable production systems.",
  keywords: "OEM wig manufacturer, wig engineering, PT Novakor Indonesia, custom wig manufacturing, wig production system",
  openGraph: {
    title: "PT Novakor Indonesia",
    description: "Engineering Beauty Through Precision Manufacturing",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${cinzel.variable} antialiased min-h-screen flex flex-col`}>
        <ClientProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}

