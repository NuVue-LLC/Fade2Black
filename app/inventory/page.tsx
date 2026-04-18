import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InventoryPageClient from "@/components/inventory/InventoryPageClient";

export const metadata: Metadata = {
  title: "Inventory | Fade 2 Black — Pre-Owned Vehicles in Indianola, Iowa",
  description:
    "Browse our full inventory of hand-picked, quality pre-owned vehicles. Search, filter by make, price, year, and mileage. Financing available. Indianola, Iowa.",
  openGraph: {
    title: "Inventory | Fade 2 Black — Pre-Owned Vehicles in Indianola, Iowa",
    description:
      "Browse our full inventory of hand-picked, quality pre-owned vehicles. Search, filter by make, price, year, and mileage.",
    type: "website",
    url: "https://fade2blackauto.com/inventory",
  },
};

export default function InventoryPage() {
  return (
    <main>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen bg-black-soft pt-28 flex items-center justify-center">
            <div className="animate-pulse font-body text-silver">Loading inventory...</div>
          </div>
        }
      >
        <InventoryPageClient />
      </Suspense>
      <Footer />
    </main>
  );
}
