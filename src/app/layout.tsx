import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Benjamin Harris | Santa Barbara Luxury Real Estate",
    template: "%s | Benjamin Harris Real Estate",
  },
  description:
    "Santa Barbara's premier luxury real estate experience. Exclusive properties in Santa Barbara, Montecito, and Carpinteria.",
  metadataBase: new URL("https://bennyboy-eta.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Benjamin Harris Real Estate",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1814",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
