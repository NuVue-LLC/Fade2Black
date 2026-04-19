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
        className="absolute inset-0 w-full h-full object-cover"
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
            href="#inventory"
            className="inline-flex items-center justify-center gap-3 bg-red hover:bg-red-light text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors shadow-red-glow"
          >
            View Inventory
          </a>
          <a
            href="tel:+15158683990"
            className="border border-silver/30 hover:border-red text-white font-body text-lg uppercase tracking-wider px-8 py-4 transition-colors"
          >
            Call Now
          </a>
        </motion.div>

        {/* Scroll indicator — hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 hidden md:block"
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
