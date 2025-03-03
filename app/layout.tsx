import "./globals.css";
import { Playfair_Display, Merriweather } from "next/font/google";
import type React from "react"; // Import React

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Coffee Break Station | Self Service Espresso Bar",
  description: "Prémiová káva, kdykoliv a kdekoliv",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${playfair.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
