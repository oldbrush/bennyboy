import type { Metadata } from "next";
import { Lusitana, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lusitana = Lusitana({
  variable: "--font-lusitana",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Benjamin Harris | Santa Barbara Luxury Real Estate",
  description:
    "Santa Barbara's premier luxury real estate experience. Exclusive properties in Santa Barbara, Montecito, and Carpinteria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.variable} ${lato.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
