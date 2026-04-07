"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  mileage: number;
  photos?: string[];
  images?: string[];
  photo_url?: string;
  image_url?: string;
  status?: string;
}

const API_URL =
  "https://lot-os.vercel.app/api/inventory/public?dealer_id=9d84ce04-ef8a-448d-893b-3149578a99c4";

const FB_MARKETPLACE =
  "https://www.facebook.com/marketplace/profile/100094782047411/?ref=permalink&mibextid=6ojiHh";

const trustPoints = [
  {
    title: "Hand-Selected",
    desc: "Every vehicle personally inspected by Austin. Only rides he'd put his own name behind.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Full Transparency",
    desc: "Complete vehicle history. Honest pricing, no hidden fees, no games. The price you see is what you pay.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Local Reputation",
    desc: "Built on trust in the Indianola community. Word-of-mouth is our best advertising.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Financing Available",
    desc: "Partnered with local credit unions to help you find a path to ownership.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

function formatMileage(mileage: number): string {
  return `${mileage.toLocaleString("en-US")} miles`;
}

function getPhoto(vehicle: Vehicle): string | null {
  if (vehicle.photos && vehicle.photos.length > 0) return vehicle.photos[0];
  if (vehicle.images && vehicle.images.length > 0) return vehicle.images[0];
  if (vehicle.photo_url) return vehicle.photo_url;
  if (vehicle.image_url) return vehicle.image_url;
  return null;
}

function SkeletonCard() {
  return (
    <div className="bg-black-card border border-dark-light/50 overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-dark" />
      <div className="p-5">
        <div className="h-6 bg-dark-light rounded w-3/4 mb-3" />
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 bg-dark-light rounded w-24" />
          <div className="h-4 bg-dark-light rounded w-28" />
        </div>
        <div className="h-12 bg-dark-light rounded w-full" />
      </div>
    </div>
  );
}

export default function Inventory() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchInventory() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const items: Vehicle[] = Array.isArray(data)
          ? data
          : data.vehicles || data.inventory || data.data || [];
        setVehicles(items);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchInventory();
  }, []);

  const isEmpty = !loading && !error && vehicles.length === 0;

  return (
    <section id="inventory" className="relative py-28 bg-black-soft carbon-fiber-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimateIn className="text-center mb-6">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Indianola&apos;s Trusted Dealer
          </p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white red-glow-text">
            FIND YOUR NEXT RIDE
          </h2>
        </AnimateIn>

        <AnimateIn className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-body text-lg text-silver leading-relaxed">
            Quality pre-owned vehicles, hand-picked and priced right. Every car on our lot has been
            personally inspected and detailed by Austin — no surprises, no pressure.
          </p>
        </AnimateIn>

        {/* Trust badges */}
        <AnimateIn className="mb-14">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { text: "500+ Cars Sold", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg> },
              { text: "New Vehicles Monthly", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg> },
              { text: "No Hidden Fees", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
              { text: "5-Star Rated", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg> },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
              >
                <span className="text-red">{badge.icon}</span>
                <span className="font-body text-xs md:text-sm uppercase tracking-wider text-white">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <AnimateIn className="text-center py-16">
            <p className="font-body text-silver text-lg mb-6">
              Unable to load inventory right now. Browse our vehicles on Facebook Marketplace or text Austin directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={FB_MARKETPLACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Browse on Facebook
              </a>
              <a
                href="sms:+15155522660"
                className="inline-flex items-center gap-2 border border-silver/30 hover:border-red text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
              >
                Text Austin
              </a>
            </div>
          </AnimateIn>
        )}

        {/* Empty state */}
        {isEmpty && (
          <AnimateIn className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-dark border border-dark-light flex items-center justify-center">
              <svg className="w-8 h-8 text-silver/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <p className="font-body text-silver text-lg mb-2">
              Check back soon — new inventory added weekly
            </p>
            <p className="font-body text-silver/50 text-sm mb-6">
              Browse our Facebook Marketplace or text Austin about upcoming vehicles
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={FB_MARKETPLACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Browse on Facebook
              </a>
              <a
                href="sms:+15155522660"
                className="inline-flex items-center gap-2 border border-silver/30 hover:border-red text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
              >
                Text Austin
              </a>
            </div>
          </AnimateIn>
        )}

        {/* Vehicle cards */}
        {!loading && !error && vehicles.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle, index) => {
                const photo = getPhoto(vehicle);
                return (
                  <AnimateIn key={vehicle.id || index} delay={index * 0.05}>
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
                  </AnimateIn>
                );
              })}
            </div>

            {/* Facebook Marketplace secondary link */}
            <AnimateIn className="text-center mt-10">
              <a
                href={FB_MARKETPLACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-wider text-silver hover:text-red transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Also browse on Facebook Marketplace &rarr;
              </a>
            </AnimateIn>
          </>
        )}

        {/* Trust points */}
        <AnimateIn className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-dark-light/30 border border-dark-light/50 overflow-hidden">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="group bg-black-soft hover:bg-dark/80 p-6 md:p-8 text-center transition-colors duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-red/10 border border-red/30 flex items-center justify-center mb-4 group-hover:bg-red/20 group-hover:border-red/50 transition-colors">
                  <span className="text-red">{point.icon}</span>
                </div>
                <h4 className="font-heading text-lg text-white mb-2">{point.title}</h4>
                <p className="font-body text-xs text-silver/70 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Bottom CTA */}
        <AnimateIn className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15158683990"
            className="inline-flex items-center justify-center gap-2 border border-silver/30 hover:border-red text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
          >
            <svg className="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Austin — (515) 868-3990
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
