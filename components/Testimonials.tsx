"use client";

import AnimateIn from "./AnimateIn";

const reviews = [
  {
    quote:
      "Bought a truck from Austin and the whole process was smooth and easy! This is the 2nd vehicle I have bought from him and I've had nothing but good experiences with him.",
    name: "Chris M.",
  },
  {
    quote:
      "The owner, Austin, is awesome to work with. Sells quality vehicles at great prices. Highly recommend buying a car from him.",
    name: "Doug",
  },
  {
    quote:
      "Very pleased with price and quality of vehicle. Excellent customer service. Austin was very accommodating.",
    name: "Jason M.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-black carbon-fiber-bg">
      <div className="section-divider mb-24" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-4 h-4 text-red" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-red">
              Reviews from Google
            </p>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl text-white red-glow-text">
            WHAT PEOPLE ARE SAYING
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimateIn key={review.name} delay={i * 0.1}>
              <div className="bg-dark/50 border border-dark-light/50 p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-red"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-silver leading-relaxed mb-6 flex-1">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Name */}
                <p className="font-heading text-lg text-white">
                  {review.name}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=Fade+2+Black+Indianola+Iowa+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-silver hover:text-red transition-colors"
          >
            See all reviews on Google &rarr;
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
