"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Financing() {
  return (
    <section id="financing" className="relative py-24 bg-black carbon-fiber-bg">
      <div className="section-divider mb-24" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Get Pre-Approved Today
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-white red-glow-text">
            FINANCING OPTIONS
          </h2>
          <p className="font-body text-lg text-silver mt-4 max-w-2xl mx-auto">
            We work with trusted local credit unions to help get you on the road.
            Apply online in minutes — no obligation, no impact on your credit score.
          </p>
        </AnimateIn>

        <AnimateIn>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Community 1st */}
            <a
              href="https://apply.c1stcreditunion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 bg-dark/50 border border-dark-light/50 hover:border-red/50 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-5 bg-white rounded-xl flex items-center justify-center p-2">
                  <Image src="/c1st-logo.png" alt="Community 1st Credit Union" width={64} height={64} className="object-contain" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
                  COMMUNITY 1ST CREDIT UNION
                </h3>
                <p className="font-body text-sm text-silver mb-6">
                  Local lending you can trust. Competitive rates and flexible terms for every budget.
                </p>
                <span className="inline-block bg-red hover:bg-red-light text-white font-body text-sm uppercase tracking-wider px-8 py-3 transition-colors shadow-red-glow-sm">
                  Apply Now &rarr;
                </span>
              </div>
            </a>

            {/* Marine Credit Union */}
            <a
              href="https://marinecreditunion.my.site.com/REG/s/registration?PartnerCode=0018Y000031iGrV"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 bg-dark/50 border border-dark-light/50 hover:border-red/50 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-5 bg-white rounded-xl flex items-center justify-center p-2">
                  <Image src="/marine-logo.png" alt="Marine Credit Union" width={64} height={64} className="object-contain" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
                  MARINE CREDIT UNION
                </h3>
                <p className="font-body text-sm text-silver mb-6">
                  Flexible financing options designed to get you on the road. Fast approvals, fair terms.
                </p>
                <span className="inline-block bg-red hover:bg-red-light text-white font-body text-sm uppercase tracking-wider px-8 py-3 transition-colors shadow-red-glow-sm">
                  Apply Now &rarr;
                </span>
              </div>
            </a>
          </div>
        </AnimateIn>

        <AnimateIn className="text-center mt-8">
          <p className="font-body text-xs text-silver/50 uppercase tracking-wider">
            Financing available for qualified buyers &bull; Apply online in minutes &bull; No obligation
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
