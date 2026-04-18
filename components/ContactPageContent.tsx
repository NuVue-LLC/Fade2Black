"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function ContactPageContent() {
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
            Get In Touch
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white red-glow-text mb-4">
            CONTACT US
          </h1>
          <p className="font-body text-lg text-silver max-w-2xl mx-auto">
            Stop by the lot, give us a call, or shoot a text. No appointments needed — just come say hey.
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateIn>
              <a
                href="tel:+15158683990"
                className="group block bg-dark/50 border border-dark-light/50 hover:border-red/30 p-5 md:p-8 text-center transition-colors duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-red/10 border border-red/30 flex items-center justify-center mb-4 group-hover:bg-red/20 transition-colors">
                  <svg className="w-6 h-6 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-white mb-1">Call</h3>
                <p className="font-body text-sm text-silver">(515) 868-3990</p>
              </a>
            </AnimateIn>

            <AnimateIn>
              <a
                href="sms:+15155522660"
                className="group block bg-dark/50 border border-dark-light/50 hover:border-red/30 p-5 md:p-8 text-center transition-colors duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-red/10 border border-red/30 flex items-center justify-center mb-4 group-hover:bg-red/20 transition-colors">
                  <svg className="w-6 h-6 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-white mb-1">Text</h3>
                <p className="font-body text-sm text-silver">(515) 552-2660</p>
              </a>
            </AnimateIn>

            <AnimateIn>
              <a
                href="https://www.facebook.com/austin.easter.371059/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-dark/50 border border-dark-light/50 hover:border-red/30 p-5 md:p-8 text-center transition-colors duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-red/10 border border-red/30 flex items-center justify-center mb-4 group-hover:bg-red/20 transition-colors">
                  <svg className="w-6 h-6 text-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-white mb-1">Facebook</h3>
                <p className="font-body text-sm text-silver">Message Us</p>
              </a>
            </AnimateIn>

            <AnimateIn>
              <a
                href="https://maps.google.com/?q=1003+West+2nd+Ave+Indianola+IA+50125"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-dark/50 border border-dark-light/50 hover:border-red/30 p-5 md:p-8 text-center transition-colors duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-red/10 border border-red/30 flex items-center justify-center mb-4 group-hover:bg-red/20 transition-colors">
                  <svg className="w-6 h-6 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-white mb-1">Visit</h3>
                <p className="font-body text-sm text-silver">Get Directions</p>
              </a>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Address & directions */}
            <AnimateIn direction="left">
              <div>
                <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
                  Location
                </p>
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                  FIND US
                </h2>
                <div className="space-y-4 font-body text-silver leading-relaxed">
                  <p className="text-lg text-white">
                    1003 West 2nd Ave<br />
                    Indianola, IA 50125
                  </p>
                  <p>
                    Located on West 2nd Avenue in Indianola, just minutes south of Des Moines.
                    Look for the lot on the south side of the road.
                  </p>
                  <p>
                    No appointment needed — just stop by during business hours. If you want to
                    make sure a specific vehicle is still available, give Austin a call or text first.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=1003+West+2nd+Ave+Indianola+IA+50125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider text-sm px-6 py-3 mt-6 transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </AnimateIn>

            {/* Hours */}
            <AnimateIn direction="right">
              <div>
                <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
                  Business Hours
                </p>
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                  HOURS
                </h2>
                <div className="space-y-4 font-body text-lg">
                  {[
                    { day: "Monday", hours: "11:00 AM - 6:00 PM" },
                    { day: "Tuesday", hours: "11:00 AM - 6:00 PM" },
                    { day: "Wednesday", hours: "11:00 AM - 5:00 PM" },
                    { day: "Thursday", hours: "11:00 AM - 5:00 PM" },
                    { day: "Friday", hours: "12:00 PM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 3:00 PM" },
                    { day: "Sunday", hours: "Closed", closed: true },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between border-b border-dark-light/30 pb-3">
                      <span className="text-silver">{row.day}</span>
                      <span className={row.closed ? "text-red" : "text-white"}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
              READY TO TALK?
            </h2>
            <p className="font-body text-lg text-silver mb-8">
              Whether you&apos;re looking for a specific vehicle or just want to see what&apos;s on the lot, reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15158683990"
                className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-light text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors shadow-red-glow"
              >
                Call Austin
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
