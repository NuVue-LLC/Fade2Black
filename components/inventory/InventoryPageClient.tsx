"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Vehicle, API_URL, formatPrice } from "@/lib/inventory";
import VehicleCard from "./VehicleCard";

type SortOption = "newest" | "price-low" | "price-high" | "year-new" | "year-old" | "mileage-low";

const SORT_LABELS: Record<SortOption, string> = {
  newest: "Newest First",
  "price-low": "Price: Low → High",
  "price-high": "Price: High → Low",
  "year-new": "Year: Newest",
  "year-old": "Year: Oldest",
  "mileage-low": "Mileage: Low → High",
};

const MILEAGE_PRESETS = [
  { label: "Under 25k", value: "25000" },
  { label: "Under 50k", value: "50000" },
  { label: "Under 75k", value: "75000" },
  { label: "Under 100k", value: "100000" },
  { label: "Any Mileage", value: "" },
];

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

export default function InventoryPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Read state from URL
  const search = searchParams.get("search") || "";
  const make = searchParams.get("make") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const minYear = searchParams.get("minYear") || "";
  const maxYear = searchParams.get("maxYear") || "";
  const maxMileage = searchParams.get("maxMileage") || "";
  const sort = (searchParams.get("sort") as SortOption) || "newest";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.replace(`/inventory?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  const clearAllFilters = useCallback(() => {
    router.replace("/inventory", { scroll: false });
  }, [router]);

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

  // Available makes for filter dropdown
  const availableMakes = useMemo(() => {
    const makes = Array.from(new Set(vehicles.map((v) => v.make).filter(Boolean)));
    return makes.sort();
  }, [vehicles]);

  // Filtering + sorting pipeline
  const filtered = useMemo(() => {
    let result = [...vehicles];

    // Search
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((v) => {
        const text = `${v.year} ${v.make} ${v.model} ${v.trim || ""}`.toLowerCase();
        return text.includes(q);
      });
    }

    // Make
    if (make) {
      result = result.filter((v) => v.make === make);
    }

    // Price range
    if (minPrice) {
      result = result.filter((v) => v.price >= Number(minPrice));
    }
    if (maxPrice) {
      result = result.filter((v) => v.price && v.price <= Number(maxPrice));
    }

    // Year range
    if (minYear) {
      result = result.filter((v) => v.year >= Number(minYear));
    }
    if (maxYear) {
      result = result.filter((v) => v.year <= Number(maxYear));
    }

    // Max mileage
    if (maxMileage) {
      result = result.filter((v) => v.mileage != null && v.mileage <= Number(maxMileage));
    }

    // Sort
    switch (sort) {
      case "price-low":
        result.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high":
        result.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "year-new":
        result.sort((a, b) => b.year - a.year);
        break;
      case "year-old":
        result.sort((a, b) => a.year - b.year);
        break;
      case "mileage-low":
        result.sort((a, b) => (a.mileage || 0) - (b.mileage || 0));
        break;
      default:
        // newest first — keep original order (API returns newest first)
        break;
    }

    return result;
  }, [vehicles, search, make, minPrice, maxPrice, minYear, maxYear, maxMileage, sort]);

  // Active filter pills
  const activeFilters: { label: string; key: string }[] = [];
  if (search) activeFilters.push({ label: `"${search}"`, key: "search" });
  if (make) activeFilters.push({ label: make, key: "make" });
  if (minPrice) activeFilters.push({ label: `Min ${formatPrice(Number(minPrice))}`, key: "minPrice" });
  if (maxPrice) activeFilters.push({ label: `Max ${formatPrice(Number(maxPrice))}`, key: "maxPrice" });
  if (minYear) activeFilters.push({ label: `${minYear}+`, key: "minYear" });
  if (maxYear) activeFilters.push({ label: `Up to ${maxYear}`, key: "maxYear" });
  if (maxMileage) activeFilters.push({ label: `Under ${Number(maxMileage).toLocaleString()} mi`, key: "maxMileage" });

  return (
    <div className="min-h-screen bg-black-soft carbon-fiber-bg">
      {/* Page header */}
      <div className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-bg.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black-soft/90 to-black-soft" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Fade 2 Black Auto
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white red-glow-text mb-4">
            INVENTORY
          </h1>
          <p className="font-body text-lg text-silver max-w-2xl mx-auto mb-6">
            Browse our full selection of hand-picked, quality pre-owned vehicles.
          </p>
          {!loading && !error && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red" />
              </span>
              <span className="font-body text-sm text-white">
                {filtered.length} of {vehicles.length} vehicles
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Sticky search/filter bar */}
      <div className="sticky top-[72px] z-40 bg-black/90 backdrop-blur-md border-y border-dark-light/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search input */}
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-silver/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search by year, make, model..."
                value={search}
                onChange={(e) => updateParam("search", e.target.value)}
                className="w-full bg-dark border border-dark-light/50 text-white font-body text-sm pl-10 pr-4 py-3 focus:outline-none focus:border-red/50 placeholder:text-silver/40"
              />
              {search && (
                <button
                  onClick={() => updateParam("search", "")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-silver/50 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Filter toggle (mobile) + Sort */}
            <div className="flex gap-3">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="md:hidden flex items-center gap-2 bg-dark border border-dark-light/50 text-silver font-body text-sm uppercase tracking-wider px-4 py-3 hover:border-red/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                Filters
                {activeFilters.length > 0 && (
                  <span className="bg-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFilters.length}
                  </span>
                )}
              </button>

              <select
                value={sort}
                onChange={(e) => updateParam("sort", e.target.value === "newest" ? "" : e.target.value)}
                className="bg-dark border border-dark-light/50 text-silver font-body text-sm px-4 py-3 focus:outline-none focus:border-red/50 appearance-none cursor-pointer sm:min-w-[180px]"
              >
                {Object.entries(SORT_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filters panel */}
          <div className={`${filtersOpen ? "block" : "hidden"} md:block mt-4`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {/* Make */}
              <select
                value={make}
                onChange={(e) => updateParam("make", e.target.value)}
                className="bg-dark border border-dark-light/50 text-silver font-body text-sm px-3 py-2.5 focus:outline-none focus:border-red/50"
              >
                <option value="">All Makes</option>
                {availableMakes.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* Min Price */}
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => updateParam("minPrice", e.target.value)}
                className="bg-dark border border-dark-light/50 text-silver font-body text-sm px-3 py-2.5 focus:outline-none focus:border-red/50 placeholder:text-silver/40"
              />

              {/* Max Price */}
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => updateParam("maxPrice", e.target.value)}
                className="bg-dark border border-dark-light/50 text-silver font-body text-sm px-3 py-2.5 focus:outline-none focus:border-red/50 placeholder:text-silver/40"
              />

              {/* Year Range */}
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min Year"
                  value={minYear}
                  onChange={(e) => updateParam("minYear", e.target.value)}
                  className="w-1/2 bg-dark border border-dark-light/50 text-silver font-body text-sm px-3 py-2.5 focus:outline-none focus:border-red/50 placeholder:text-silver/40"
                />
                <input
                  type="number"
                  placeholder="Max Year"
                  value={maxYear}
                  onChange={(e) => updateParam("maxYear", e.target.value)}
                  className="w-1/2 bg-dark border border-dark-light/50 text-silver font-body text-sm px-3 py-2.5 focus:outline-none focus:border-red/50 placeholder:text-silver/40"
                />
              </div>

              {/* Max Mileage */}
              <select
                value={maxMileage}
                onChange={(e) => updateParam("maxMileage", e.target.value)}
                className="bg-dark border border-dark-light/50 text-silver font-body text-sm px-3 py-2.5 focus:outline-none focus:border-red/50"
              >
                {MILEAGE_PRESETS.map((p) => (
                  <option key={p.value || "any"} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active filter pills */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-3">
              {activeFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => updateParam(f.key, "")}
                  className="inline-flex items-center gap-1.5 bg-red/20 border border-red/30 text-white font-body text-xs px-3 py-1.5 hover:bg-red/30 transition-colors"
                >
                  {f.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ))}
              <button
                onClick={clearAllFilters}
                className="font-body text-xs text-silver/60 hover:text-red transition-colors uppercase tracking-wider"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-16">
            <p className="font-body text-silver text-lg mb-6">
              Unable to load inventory right now. Text Austin directly.
            </p>
            <a
              href="sms:+15155522660"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
            >
              Text Austin
            </a>
          </div>
        )}

        {/* Empty — no vehicles at all */}
        {!loading && !error && vehicles.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-silver text-lg mb-2">
              Check back soon — new inventory added weekly
            </p>
            <a
              href="sms:+15155522660"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider px-8 py-4 mt-4 transition-colors"
            >
              Text Austin About Upcoming Vehicles
            </a>
          </div>
        )}

        {/* No results for current filters */}
        {!loading && !error && vehicles.length > 0 && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-silver text-lg mb-2">
              No vehicles match your filters
            </p>
            <p className="font-body text-silver/50 text-sm mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-2 border border-silver/30 hover:border-red text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Vehicle grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {!loading && !error && (
          <div className="text-center mt-16 py-12 border-t border-dark-light/30">
            <p className="font-heading text-3xl text-white mb-3">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <p className="font-body text-silver mb-6">
              Text Austin — he&apos;ll help you find the right ride.
            </p>
            <a
              href="sms:+15155522660"
              className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider text-sm px-8 py-4 transition-colors shadow-red-glow"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Text Austin
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
