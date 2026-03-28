"use client";

import AnimateIn from "./AnimateIn";

const reviews = [
  {
    quote:
      "Austin made buying my first car easy. No pressure, no games — just a good deal.",
    name: "Sarah M.",
  },
  {
    quote: "Best tint job I've ever had. Kevin does incredible work.",
    name: "Jake R.",
  },
  {
    quote:
      "Bought two trucks from Austin. Wouldn't go anywhere else.",
    name: "Mike T.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-black carbon-fiber-bg">
      <div className="section-divider mb-24" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Reviews
          </p>
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
      </div>
    </section>
  );
}
