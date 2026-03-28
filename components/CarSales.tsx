"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

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
  {
    title: "Inspected & Detailed",
    desc: "Thorough mechanical inspection and professional detail before you ever see it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19c-.063-.037-.064-.142 0-.18L11.42 8.83a1.002 1.002 0 011.16 0l5.384 3.19c.063.037.064.142 0 .18l-5.384 3.19a1.002 1.002 0 01-1.16 0zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
      </svg>
    ),
  },
];

const featuredCars = [
  { src: "/car1.jpg", alt: "Audi sedan", label: "Audi Sedan" },
  { src: "/car2.jpg", alt: "GMC truck", label: "GMC Truck" },
  { src: "/car3.jpg", alt: "Chevrolet Silverado", label: "Chevrolet Silverado" },
];

export default function CarSales() {
  return (
    <section id="inventory" className="relative py-28 bg-black-soft carbon-fiber-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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

        {/* Inventory cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredCars.map((car, i) => (
            <AnimateIn key={car.src} delay={i * 0.1}>
              <a
                href="https://www.facebook.com/austin.easter.371059/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-dark border border-dark-light/50 hover:border-red/50 overflow-hidden transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={car.src}
                    alt={car.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-xl text-white group-hover:text-red transition-colors">
                      {car.label}
                    </h4>
                    <p className="font-body text-xs text-silver/60 uppercase tracking-wider mt-1">
                      Available Now
                    </p>
                  </div>
                  <span className="font-body text-sm uppercase tracking-wider text-red flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>

        {/* Massive Facebook CTA */}
        <AnimateIn>
          <div className="relative bg-gradient-to-br from-dark to-dark-light border border-red/40 p-10 md:p-16 text-center mb-16 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(220,38,38,0.08) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-red/10 border border-red/40 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-heading text-4xl md:text-5xl text-white mb-4">
                BROWSE OUR <span className="text-red">INVENTORY</span>
              </h3>
              <p className="font-body text-silver text-lg mb-8 max-w-xl mx-auto">
                All of our current vehicles are listed on Facebook Marketplace. Browse photos, pricing, and details — then call Austin to set up a time to see it in person.
              </p>

              <a
                href="https://www.facebook.com/austin.easter.371059/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-red hover:bg-red-light text-white font-heading text-2xl md:text-3xl tracking-wider px-12 py-5 transition-colors shadow-red-glow"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                VIEW ON FACEBOOK MARKETPLACE
              </a>

              <p className="font-body text-xs text-silver/50 mt-4 uppercase tracking-wider">
                New vehicles added monthly &bull; Message us on Facebook or call directly
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Trust points */}
        <AnimateIn>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-dark-light/30 border border-dark-light/50 overflow-hidden">
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

        {/* Bottom CTA row */}
        <AnimateIn className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15155522660"
            className="inline-flex items-center justify-center gap-2 border border-silver/30 hover:border-red text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
          >
            <svg className="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Austin — (515) 552-2660
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
