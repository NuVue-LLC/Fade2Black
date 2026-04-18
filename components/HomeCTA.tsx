"use client";

import AnimateIn from "./AnimateIn";

export default function HomeCTA() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-4">
            READY TO FIND YOUR RIDE?
          </h2>
          <p className="font-body text-lg text-silver mb-8">
            Stop by the lot or give Austin a call. No pressure, no appointments needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15158683990"
              className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-light text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors shadow-red-glow"
            >
              Call (515) 868-3990
            </a>
            <a
              href="sms:+15155522660"
              className="inline-flex items-center justify-center gap-2 border border-silver/30 hover:border-red text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors"
            >
              Text Austin
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
