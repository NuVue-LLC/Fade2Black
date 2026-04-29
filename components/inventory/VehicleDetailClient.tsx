"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Vehicle,
  fetchVehicleById,
  formatPrice,
  formatMileage,
} from "@/lib/inventory";

export default function VehicleDetailClient({ id }: { id: string }) {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const v = await fetchVehicleById(id);
        if (cancelled) return;
        if (!v) setNotFound(true);
        else setVehicle(v);
      } catch {
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black-soft pt-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
            <div className="aspect-[4/3] bg-dark-light/40" />
            <div>
              <div className="h-10 bg-dark-light/40 rounded w-3/4 mb-4" />
              <div className="h-8 bg-dark-light/40 rounded w-1/3 mb-6" />
              <div className="h-4 bg-dark-light/40 rounded w-full mb-2" />
              <div className="h-4 bg-dark-light/40 rounded w-full mb-2" />
              <div className="h-4 bg-dark-light/40 rounded w-2/3" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !vehicle) {
    return (
      <div className="min-h-screen bg-black-soft pt-28 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="font-heading text-4xl text-white mb-4">Vehicle Not Found</h1>
          <p className="font-body text-silver mb-8">
            This vehicle may have been sold or removed from inventory.
          </p>
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider text-sm px-6 py-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Inventory
          </Link>
        </div>
      </div>
    );
  }

  const photos = vehicle.photos ?? vehicle.images ?? [];
  const hasPhotos = photos.length > 0;
  const vehicleName = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

  return (
    <div className="min-h-screen bg-black-soft carbon-fiber-bg">
      {/* Back link */}
      <div className="pt-24 pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 text-silver hover:text-red font-body text-sm uppercase tracking-wider transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Inventory
          </Link>
        </div>
      </div>

      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Photo gallery */}
          <div>
            <div className="relative aspect-[4/3] bg-dark border border-dark-light/50 overflow-hidden">
              {hasPhotos ? (
                <Image
                  src={photos[photoIndex]}
                  alt={`${vehicleName} — photo ${photoIndex + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-dark-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                </div>
              )}
              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setPhotoIndex((i) => (i === 0 ? photos.length - 1 : i - 1))
                    }
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setPhotoIndex((i) => (i === photos.length - 1 ? 0 : i + 1))
                    }
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white font-body text-xs px-2.5 py-1 rounded-full">
                    {photoIndex + 1} / {photos.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {photos.length > 1 && (
              <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 mt-3">
                {photos.map((url, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPhotoIndex(i)}
                    className={`relative aspect-square overflow-hidden border transition-colors ${
                      i === photoIndex ? "border-red" : "border-dark-light/50 hover:border-silver/50"
                    }`}
                  >
                    <Image
                      src={url}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-white red-glow-text mb-2">
              {vehicleName}
            </h1>
            {vehicle.trim && (
              <p className="font-body text-silver text-lg mb-4">{vehicle.trim}</p>
            )}

            <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-dark-light/50">
              <span className="font-heading text-3xl text-red">
                {vehicle.price ? formatPrice(vehicle.price) : "Call for Price"}
              </span>
              {vehicle.mileage != null && (
                <span className="font-body text-silver">
                  {formatMileage(vehicle.mileage)}
                </span>
              )}
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <SpecItem label="Year" value={vehicle.year?.toString()} />
              <SpecItem label="Make" value={vehicle.make} />
              <SpecItem label="Model" value={vehicle.model} />
              {vehicle.trim && <SpecItem label="Trim" value={vehicle.trim} />}
              {vehicle.color && <SpecItem label="Color" value={vehicle.color} />}
              {vehicle.mileage != null && (
                <SpecItem label="Mileage" value={formatMileage(vehicle.mileage)} />
              )}
            </div>

            {/* Description */}
            {vehicle.description && (
              <div className="mb-8">
                <h2 className="font-heading text-2xl text-white mb-3">About This Vehicle</h2>
                <p className="font-body text-silver-light leading-relaxed whitespace-pre-line">
                  {vehicle.description}
                </p>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`sms:+15155522660?&body=${encodeURIComponent(`Hi Austin — I'm interested in the ${vehicleName}`)}`}
                className="flex-1 flex items-center justify-center gap-2 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider text-sm px-6 py-4 transition-colors shadow-red-glow"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                Text Austin
              </a>
              <a
                href="tel:+15155522660"
                className="flex-1 flex items-center justify-center gap-2 border border-silver/30 hover:border-red text-white font-body uppercase tracking-wider text-sm px-6 py-4 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Austin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="border-b border-dark-light/30 pb-2">
      <p className="font-body text-xs uppercase tracking-wider text-silver/60 mb-1">{label}</p>
      <p className="font-body text-white">{value}</p>
    </div>
  );
}
