"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import AnimateIn from "./AnimateIn";
import VehicleCard from "./inventory/VehicleCard";
import { Vehicle, API_URL, FB_MARKETPLACE, formatPrice, formatMileage, getPhoto } from "@/lib/inventory";


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

/* ── Enhancement #1: Count-Up Stat ── */
function CountUpStat({
  end,
  prefix = "",
  suffix = "",
  label,
  duration = 1.5,
  decimals = 0,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <div ref={ref}>
      <div className="font-heading text-4xl md:text-5xl text-white">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="font-body text-sm uppercase tracking-wider text-silver mt-2">
        {label}
      </div>
    </div>
  );
}

/* ── Enhancement #6: Ember Particles ── */
function EmberParticles() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      size: number;
      left: number;
      duration: number;
      delay: number;
      opacity: number;
      xDrift: number;
    }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: 1 + Math.random() * 3,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 5,
        opacity: 0.1 + Math.random() * 0.4,
        xDrift: (Math.random() - 0.5) * 100,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-[2]"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-red"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: -10,
          }}
          animate={{
            y: [0, -800],
            opacity: [0, p.opacity, p.opacity, 0],
            x: [0, p.xDrift],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Inventory() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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
  const showFeatured = !loading && !error && vehicles.length >= 2;
  const gridVehicles = showFeatured ? vehicles.slice(1) : vehicles;

  return (
    <section id="inventory" className="relative py-28 bg-black-soft carbon-fiber-bg">
      {/* Enhancement #6: Ember particles */}
      <EmberParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading with Enhancement #4: red glow bg */}
        <AnimateIn className="text-center mb-6">
          <div className="red-glow-bg">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
              Indianola&apos;s Trusted Dealer
            </p>
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white red-glow-text relative z-10">
              FIND YOUR NEXT RIDE
            </h2>
          </div>
        </AnimateIn>

        {/* Subtitle */}
        <AnimateIn className="text-center mb-8 max-w-2xl mx-auto">
          <p className="font-body text-lg text-silver leading-relaxed">
            Quality pre-owned vehicles, hand-picked and priced right. Every car on our lot has been
            personally inspected and detailed by Austin — no surprises, no pressure.
          </p>
        </AnimateIn>

        {/* Live inventory count */}
        {!loading && !error && vehicles.length > 0 && (
          <AnimateIn className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red" />
              </span>
              <span className="font-body text-sm text-white">
                {vehicles.length} vehicles available now
              </span>
            </div>
          </AnimateIn>
        )}

        {/* Featured vehicle spotlight */}
        {showFeatured && (
          <AnimateIn className="mb-10">
            <div className="border-2 border-red/30 bg-black-card overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[320px] overflow-hidden bg-dark">
                  {getPhoto(vehicles[0]) ? (
                    <Image
                      src={getPhoto(vehicles[0])!}
                      alt={`${vehicles[0].year} ${vehicles[0].make} ${vehicles[0].model}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-dark-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-red px-3 py-1">
                    <span className="font-body text-xs uppercase tracking-wider text-white">
                      Newest Arrival
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-red mb-2">
                    Featured
                  </p>
                  <h3 className="font-heading text-3xl md:text-4xl text-white mb-2">
                    {vehicles[0].year} {vehicles[0].make} {vehicles[0].model}
                    {vehicles[0].trim && (
                      <span className="text-silver text-2xl ml-2">{vehicles[0].trim}</span>
                    )}
                  </h3>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-2xl text-red">
                      {vehicles[0].price ? formatPrice(vehicles[0].price) : "Call for Price"}
                    </span>
                    {vehicles[0].mileage != null && (
                      <span className="font-body text-sm text-silver">
                        {formatMileage(vehicles[0].mileage)}
                      </span>
                    )}
                  </div>
                  <a
                    href="sms:+15155522660"
                    className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider text-sm px-6 py-3 transition-colors w-fit"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    Contact About This Vehicle
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>
        )}

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
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
            <p className="font-body text-silver text-lg mb-2">
              Check back soon — new inventory added weekly
            </p>
            <p className="font-body text-silver/50 text-sm mb-6">
              Browse our full inventory page or text Austin about upcoming vehicles
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/inventory"
                className="inline-flex items-center justify-center gap-3 bg-red hover:bg-red-light text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors"
              >
                See Full Inventory
              </Link>
              <a
                href={FB_MARKETPLACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-silver/30 hover:border-red text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Browse on Facebook
              </a>
            </div>
          </AnimateIn>
        )}

        {/* Vehicle carousel */}
        {!loading && !error && gridVehicles.length > 0 && (
          <>
            <AnimateIn className="mb-6">
              <h3 className="font-heading text-3xl md:text-4xl text-white text-center">
                NEWEST ARRIVALS
              </h3>
            </AnimateIn>

            <div id="vehicle-grid" className="relative">
              {/* Scroll left */}
              <button
                onClick={() => {
                  const el = carouselRef.current;
                  if (el) el.scrollBy({ left: -340, behavior: "smooth" });
                }}
                className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-black/80 border border-dark-light/50 text-white hover:border-red/50 hover:text-red transition-colors"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Carousel track */}
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {gridVehicles.slice(0, 6).map((vehicle, index) => (
                  <div
                    key={vehicle.id || index}
                    className="snap-start shrink-0 w-[300px] md:w-[340px]"
                  >
                    <VehicleCard vehicle={vehicle} />
                  </div>
                ))}
              </div>

              {/* Scroll right */}
              <button
                onClick={() => {
                  const el = carouselRef.current;
                  if (el) el.scrollBy({ left: 340, behavior: "smooth" });
                }}
                className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-black/80 border border-dark-light/50 text-white hover:border-red/50 hover:text-red transition-colors"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* CTA buttons */}
            <AnimateIn className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/inventory"
                className="inline-flex items-center justify-center gap-3 bg-red hover:bg-red-light text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors"
              >
                See Full Inventory
              </Link>
              <a
                href={FB_MARKETPLACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-silver/30 hover:border-red text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Browse on Facebook
              </a>
            </AnimateIn>
          </>
        )}

        {/* Count-up stats */}
        <AnimateIn className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-dark-light/30 border border-red/20 overflow-hidden shadow-[0_0_30px_rgba(200,16,46,0.15)]">
            <div className="text-center p-6 bg-black-soft relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red/5 to-transparent" />
              <div className="relative"><CountUpStat end={500} suffix="+" label="Cars Sold" /></div>
            </div>
            <div className="text-center p-6 bg-black-soft relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red/5 to-transparent" />
              <div className="relative">
                <div className="font-heading text-4xl md:text-5xl text-white">New</div>
                <div className="font-body text-sm uppercase tracking-wider text-silver mt-2">
                  Vehicles Monthly
                </div>
              </div>
            </div>
            <div className="text-center p-6 bg-black-soft relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red/5 to-transparent" />
              <div className="relative">
                <div className="font-heading text-4xl md:text-5xl text-white">$0</div>
                <div className="font-body text-sm uppercase tracking-wider text-silver mt-2">
                  Hidden Fees
                </div>
              </div>
            </div>
            <div className="text-center p-6 bg-black-soft relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red/5 to-transparent" />
              <div className="relative"><CountUpStat end={100} suffix="%" label="Locally Owned" /></div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
