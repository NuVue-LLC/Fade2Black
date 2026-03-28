import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fade 2 Black | Pre-Owned Vehicles in Indianola, Iowa",
  description:
    "Hand-picked, quality pre-owned vehicles in Indianola, Iowa. Financing available. Call Austin Easter at (515) 552-2660.",
  keywords: [
    "Indianola Iowa",
    "pre-owned cars",
    "used cars Indianola",
    "Fade 2 Black",
  ],
  openGraph: {
    title: "Fade 2 Black | Pre-Owned Vehicles in Indianola, Iowa",
    description:
      "Hand-picked, quality pre-owned vehicles in Indianola, Iowa. Financing available. Call Austin Easter at (515) 552-2660.",
    type: "website",
    url: "https://fade2blackauto.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${barlow.variable} font-body antialiased bg-black text-silver-light grain-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
