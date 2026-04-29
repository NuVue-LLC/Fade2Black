import Image from "next/image";
import Link from "next/link";
import { Vehicle, formatPrice, formatMileage, getPhoto } from "@/lib/inventory";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const photo = getPhoto(vehicle);

  return (
    <Link
      href={`/inventory/${vehicle.id}`}
      className="group block bg-black-card border border-dark-light/50 overflow-hidden hover:border-red/50 transition-colors duration-300"
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden bg-dark">
        {photo ? (
          <Image
            src={photo}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-dark-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
            </svg>
          </div>
        )}
        {vehicle.photos && vehicle.photos.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white font-body text-xs px-2.5 py-1 rounded-full">
            {vehicle.photos.length} photos
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading text-2xl text-white mb-1 group-hover:text-red transition-colors">
          {vehicle.year} {vehicle.make} {vehicle.model}
          {vehicle.trim && (
            <span className="text-silver text-lg ml-2">{vehicle.trim}</span>
          )}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <span className="font-heading text-xl text-red">
            {vehicle.price ? formatPrice(vehicle.price) : "Call for Price"}
          </span>
          {vehicle.mileage != null && (
            <span className="font-body text-sm text-silver">
              {formatMileage(vehicle.mileage)}
            </span>
          )}
        </div>
        <div className="flex items-center justify-center gap-2 w-full bg-red group-hover:bg-red-light text-white font-body uppercase tracking-wider text-sm px-4 py-3 transition-colors">
          View Details
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
