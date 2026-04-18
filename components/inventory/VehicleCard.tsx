import Image from "next/image";
import { Vehicle, formatPrice, formatMileage, getPhoto } from "@/lib/inventory";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const photo = getPhoto(vehicle);

  return (
    <div className="group bg-black-card border border-dark-light/50 overflow-hidden hover:border-red/30 transition-colors duration-300">
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
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading text-2xl text-white mb-1">
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
        <a
          href="sms:+15155522660"
          className="flex items-center justify-center gap-2 w-full bg-red hover:bg-red-light text-white font-body uppercase tracking-wider text-sm px-4 py-3 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          Contact About This Vehicle
        </a>
      </div>
    </div>
  );
}
