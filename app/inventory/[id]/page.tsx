import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleDetailClient from "@/components/inventory/VehicleDetailClient";
import { fetchVehicleById } from "@/lib/inventory";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const vehicle = await fetchVehicleById(id);
    if (!vehicle) {
      return { title: "Vehicle Not Found | Fade 2 Black" };
    }
    const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.trim ? ` ${vehicle.trim}` : ""} | Fade 2 Black`;
    const description = vehicle.description
      ? vehicle.description.slice(0, 160)
      : `${vehicle.year} ${vehicle.make} ${vehicle.model} for sale at Fade 2 Black Auto in Indianola, Iowa.`;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `https://fade2blackauto.com/inventory/${id}`,
        images: vehicle.photos && vehicle.photos.length > 0 ? [vehicle.photos[0]] : undefined,
      },
    };
  } catch {
    return { title: "Vehicle | Fade 2 Black" };
  }
}

export default async function VehicleDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <main>
      <Navbar />
      <VehicleDetailClient id={id} />
      <Footer />
    </main>
  );
}
