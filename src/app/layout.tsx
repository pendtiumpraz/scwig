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
  title: "SCWIG - Premium Wig Solutions | Elegance Reimagined",
  description: "Indonesia's premier wig provider offering custom wigs, professional styling, and premium wig care services. Experience luxury and confidence with SCWIG.",
  keywords: "wig, premium wig, custom wig, wig styling, Indonesia, hair solutions, lace front wig",
  openGraph: {
    title: "SCWIG - Premium Wig Solutions",
    description: "Elegance Reimagined - Premium Wigs for the Extraordinary You",
    type: "website",
    locale: "id_ID",
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

