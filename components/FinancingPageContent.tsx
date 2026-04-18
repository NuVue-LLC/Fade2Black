"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";


const steps = [
  {
    number: "01",
    title: "Find Your Vehicle",
    desc: "Browse our inventory online or stop by the lot. Find a ride you love.",
  },
  {
    number: "02",
    title: "Apply Online",
    desc: "Pick a lender below and fill out a quick application. Takes just a few minutes — no obligation.",
  },
  {
    number: "03",
    title: "Get Approved",
    desc: "The credit union reviews your application and works with you on terms that fit your budget.",
  },
  {
    number: "04",
    title: "Drive Away",
    desc: "Sign the paperwork and hit the road. It's that simple.",
  },
];

const faqs = [
  {
    q: "What credit score do I need?",
    a: "Our lending partners work with all credit situations. Whether your credit is excellent or you're rebuilding, apply and see what options are available.",
  },
  {
    q: "Does applying affect my credit score?",
    a: "The initial application is typically a soft pull, which does not impact your credit score. A hard pull only happens once you move forward with a loan.",
  },
  {
    q: "How much do I need for a down payment?",
    a: "Down payment requirements vary by lender and your credit profile. Some buyers qualify with little to no money down. The lender will work with you on what makes sense.",
  },
  {
    q: "How long does approval take?",
    a: "Most applications get a response within 24 hours. In many cases, you can get approved the same day you apply.",
  },
  {
    q: "Can I get pre-approved before choosing a vehicle?",
    a: "Absolutely. Getting pre-approved lets you know your budget before you shop. Apply with either lender below to get started.",
  },
  {
    q: "What do I need to bring?",
    a: "A valid driver's license, proof of income (recent pay stubs), proof of insurance, and proof of residence. The lender will let you know if anything else is needed.",
  },
];

export default function FinancingPageContent() {
  return (
    <div className="min-h-screen bg-black-soft carbon-fiber-bg">
      {/* Hero */}
      <div className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-bg.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black-soft/90 to-black-soft" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Get On The Road
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white red-glow-text mb-4">
            FINANCING
          </h1>
          <p className="font-body text-lg text-silver max-w-2xl mx-auto">
            We&apos;ve partnered with trusted local credit unions to make financing simple.
            Apply online in minutes — no obligation, no pressure.
          </p>
        </div>
      </div>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn className="text-center mb-14">
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              HOW IT WORKS
            </h2>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <AnimateIn key={step.number}>
                <div className="relative bg-dark/50 border border-dark-light/50 p-8 text-center">
                  <div className="font-heading text-5xl text-red/20 mb-2">{step.number}</div>
                  <h3 className="font-heading text-xl text-white mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-silver/70 leading-relaxed">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lender cards */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
              Get Pre-Approved Today
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              OUR LENDING PARTNERS
            </h2>
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

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn className="text-center mb-14">
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              COMMON QUESTIONS
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <AnimateIn key={faq.q}>
                <div className="border border-dark-light/50 p-6 h-full">
                  <h3 className="font-heading text-xl text-white mb-2">{faq.q}</h3>
                  <p className="font-body text-sm text-silver leading-relaxed">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
              QUESTIONS ABOUT FINANCING?
            </h2>
            <p className="font-body text-lg text-silver mb-8">
              Austin can walk you through the process. Give him a call or shoot a text.
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
    </div>
  );
}
