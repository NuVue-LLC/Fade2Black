"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-90"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />

      {/* Carbon fiber texture */}
      <div className="absolute inset-0 bg-carbon-fiber z-10 opacity-50" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-silver mb-4"
        >
          Pre-Owned Vehicles &bull; Indianola, Iowa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl text-white leading-none red-glow-text"
        >
          YOUR NEXT RIDE
          <br />
          STARTS <span className="text-red">HERE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-silver/80 mt-6 max-w-xl"
        >
          Hand-picked, quality pre-owned vehicles in Indianola, Iowa
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://www.facebook.com/austin.easter.371059/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-red hover:bg-red-light text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors shadow-red-glow"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            View Inventory
          </a>
          <a
            href="tel:+15158683990"
            className="border border-silver/30 hover:border-red text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors"
          >
            Call Now
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-silver/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-red rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
