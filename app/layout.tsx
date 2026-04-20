import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Fade 2 Black | Pre-Owned Vehicles in Indianola, Iowa",
  description:
    "Hand-picked, quality pre-owned vehicles in Indianola, Iowa. Financing available. Call Austin Easter at (515) 868-3990.",
  keywords: [
    "Indianola Iowa",
    "pre-owned cars",
    "used cars Indianola",
    "Fade 2 Black",
  ],
  openGraph: {
    title: "Fade 2 Black | Pre-Owned Vehicles in Indianola, Iowa",
    description:
      "Hand-picked, quality pre-owned vehicles in Indianola, Iowa. Financing available. Call Austin Easter at (515) 868-3990.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              name: "Fade 2 Black",
              url: "https://fade2blackauto.com",
              telephone: "(515) 868-3990",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1003 West 2nd Ave",
                addressLocality: "Indianola",
                addressRegion: "IA",
                postalCode: "50125",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.3578,
                longitude: -93.5572,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday"],
                  opens: "11:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Wednesday", "Thursday"],
                  opens: "11:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "12:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "15:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
              },
              sameAs: ["https://www.facebook.com/austin.easter.371059/"],
            }),
          }}
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${barlow.variable} font-body antialiased bg-black text-silver-light grain-overlay`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-EFJL248SPF" />
    </html>
  );
}
