import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Fade 2 Black — Indianola, Iowa",
  description:
    "Contact Fade 2 Black in Indianola, Iowa. Call (515) 868-3990, text (515) 552-2660, or visit us at 1003 West 2nd Ave. No appointment needed.",
  openGraph: {
    title: "Contact | Fade 2 Black — Indianola, Iowa",
    description:
      "Contact Fade 2 Black in Indianola, Iowa. Call, text, or visit us. No appointment needed.",
    type: "website",
    url: "https://fade2blackauto.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
