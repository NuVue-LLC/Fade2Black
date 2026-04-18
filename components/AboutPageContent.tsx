"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

const values = [
  {
    title: "No Hidden Fees",
    desc: "The price you see is what you pay. No dealer prep fees, no add-ons, no games.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Hand-Selected Inventory",
    desc: "Every vehicle is personally inspected by Austin. Only rides he'd put his own name behind.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Full Transparency",
    desc: "Complete vehicle history on every car. Honest pricing and straightforward deals.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Financing Available",
    desc: "Partnered with local credit unions to help you find a path to ownership.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPageContent() {
  return (
    <div className="min-h-screen bg-black-soft carbon-fiber-bg">
      {/* Hero header */}
      <div className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black-soft/90 to-black-soft" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Indianola, Iowa
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white red-glow-text mb-4">
            ABOUT FADE 2 BLACK
          </h1>
          <p className="font-body text-lg text-silver max-w-2xl mx-auto">
            Built from the ground up on handshakes, quality vehicles, and a name you can trust.
          </p>
        </div>
      </div>

      {/* Austin's story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <div className="relative">
                <div className="aspect-[4/5] bg-dark border border-dark-light/50 overflow-hidden">
                  <Image
                    src="/austin.jpg"
                    alt="Austin Easter — Owner of Fade 2 Black"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-black/70 border-2 border-red/50 flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-3xl text-red">AE</span>
                      </div>
                      <div>
                        <p className="font-heading text-2xl text-white">Austin Easter</p>
                        <p className="font-body text-sm text-silver">Owner & Operator</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-red/50" />
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div>
                <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
                  Young. Driven. Relentless.
                </p>
                <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
                  MEET AUSTIN
                </h2>
                <div className="space-y-4 font-body text-silver leading-relaxed">
                  <p>
                    At just 21 years old, Austin Easter built Fade 2 Black from the ground up.
                    While most people his age are figuring out what they want to do, Austin was
                    already doing it — sourcing quality vehicles, building a reputation, and
                    earning the trust of buyers across central Iowa.
                  </p>
                  <p>
                    Austin is a motorcycle racer with fuel in his blood and a competitor&apos;s
                    mentality. That same drive he brings to the track — the obsession with
                    performance, the refusal to cut corners, the need to be the best — is
                    exactly what he brings to every deal at Fade 2 Black.
                  </p>
                  <p>
                    He hand-picks every vehicle on the lot and stands behind each one. No
                    corporate games, no slick sales tactics — just a young entrepreneur who
                    built something real and puts his name on every car he sells.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10">
                  {[
                    { number: "21", label: "Years Old" },
                    { number: "500+", label: "Cars Sold" },
                    { number: "100%", label: "Locally Owned" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-heading text-2xl sm:text-4xl text-red">{stat.number}</div>
                      <div className="font-body text-xs uppercase tracking-wider text-silver mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* The motorcycle racer */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <div>
                <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
                  Off the Lot
                </p>
                <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
                  RACER AT HEART
                </h2>
                <div className="space-y-4 font-body text-silver leading-relaxed">
                  <p>
                    When Austin isn&apos;t on the lot, he&apos;s on the track. Motorcycle racing
                    isn&apos;t just a hobby — it&apos;s where his competitive edge comes from.
                    The precision, the attention to detail, the drive to win — that&apos;s the
                    same energy every customer gets at Fade 2 Black.
                  </p>
                  <p>
                    It&apos;s that racer mentality that makes him obsess over the condition of
                    every vehicle. If it wouldn&apos;t pass his inspection, it doesn&apos;t
                    make it to the lot. Simple as that.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="aspect-[4/3] bg-dark border border-dark-light/50 overflow-hidden relative">
                <Image
                  src="/Motorcycle.jpg.png"
                  alt="Austin Easter motorcycle racing"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Dealership photos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
              1003 West 2nd Ave, Indianola
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-white">
              THE LOT
            </h2>
          </AnimateIn>

          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["/shop.jpg", "/dealership.png", "/corvette.jpg", "/couch.jpg", "/truck.jpg"].map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-dark border border-dark-light/50 overflow-hidden relative">
                  <Image
                    src={src}
                    alt="Fade 2 Black dealership"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn className="text-center mb-14">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
              The Fade 2 Black Difference
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-white">
              HOW WE DO BUSINESS
            </h2>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <AnimateIn key={v.title}>
                <div className="group bg-dark/50 border border-dark-light/50 hover:border-red/30 p-8 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-red/10 border border-red/30 flex items-center justify-center mb-4 group-hover:bg-red/20 transition-colors">
                    <span className="text-red">{v.icon}</span>
                  </div>
                  <h3 className="font-heading text-xl text-white mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-silver/70 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-4">
              COME SEE THE DIFFERENCE
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
    </div>
  );
}
