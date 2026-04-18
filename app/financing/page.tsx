import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinancingPageContent from "@/components/FinancingPageContent";

export const metadata: Metadata = {
  title: "Financing | Fade 2 Black — Auto Financing in Indianola, Iowa",
  description:
    "Apply for auto financing through our trusted credit union partners. Quick online application, competitive rates, and flexible terms. Indianola, Iowa.",
  openGraph: {
    title: "Financing | Fade 2 Black — Auto Financing in Indianola, Iowa",
    description:
      "Apply for auto financing through our trusted credit union partners. Quick online application, competitive rates, and flexible terms.",
    type: "website",
    url: "https://fade2blackauto.com/financing",
  },
};

export default function FinancingPage() {
  return (
    <main>
      <Navbar />
      <FinancingPageContent />
      <Footer />
    </main>
  );
}
