import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Noto_Sans_Gujarati,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const gujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-gujarati",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  title: {
    default: "Shashvat Giriraj Group",
    template: "%s | Shashvat Giriraj Group",
  },
  description:
    "Discover spiritual journeys, upcoming events and meaningful experiences with Shashvat Giriraj Group.",
  applicationName: "Shashvat Giriraj Group",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} ${gujarati.variable} ${devanagari.variable}`}>
        {children}
      </body>
    </html>
  );
}
