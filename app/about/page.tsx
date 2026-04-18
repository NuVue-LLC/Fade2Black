import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Fade 2 Black — Meet Austin Easter",
  description:
    "Meet Austin Easter, the 21-year-old owner of Fade 2 Black in Indianola, Iowa. Hand-picked vehicles, no hidden fees, and a reputation built on trust.",
  openGraph: {
    title: "About | Fade 2 Black — Meet Austin Easter",
    description:
      "Meet Austin Easter, the 21-year-old owner of Fade 2 Black in Indianola, Iowa. Hand-picked vehicles, no hidden fees, and a reputation built on trust.",
    type: "website",
    url: "https://fade2blackauto.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
