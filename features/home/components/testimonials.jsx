// features/home/components/testimonials.jsx
// Customer Testimonials Section

import { MOCK_TESTIMONIALS } from "@/lib/mock-data";
import { SectionHeader } from "@/components/common/section-header";
import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteDownIcon, StarIcon } from "@hugeicons/core-free-icons";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <HugeiconsIcon
          key={i}
          icon={StarIcon}
          className={`w-4 h-4 ${i < rating ? "star-filled" : "star-empty"}`}
          strokeWidth={0}
          style={{ fill: "currentColor" }}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, featured = false }) {
  const initials = testimonial.name.slice(0, 2);

  return (
    <div
      className={`
        relative bg-white rounded-2xl p-6 card-shadow card-shadow-hover
        transition-all duration-300 hover:-translate-y-1
        ${featured ? "ring-2 ring-navy-500/20" : ""}
      `}
    >
      {/* Quote icon */}
      <div className="absolute top-5 right-5 opacity-10">
        <HugeiconsIcon
          icon={QuoteDownIcon}
          className="w-8 h-8 text-navy-600"
          strokeWidth={1}
        />
      </div>

      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Comment */}
      <blockquote className="text-navy-700 text-sm leading-relaxed mb-5 relative z-10">
        &quot;{testimonial.comment}&quot;
      </blockquote>

      {/* Tour badge */}
      {testimonial.tourTitle && (
        <div className="badge-navy text-xs mb-5 inline-flex">
          {testimonial.tourTitle}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">{initials}</span>
        </div>
        <div>
          <p className="font-semibold text-sm text-navy-800">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="section-py bg-navy-900 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-navy-700/30 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container-lg relative z-10">
        <SectionHeader
          title="What are customers saying about us?"
          description="The positive feedback from over 15,000 customers who have traveled with us."
          className="mb-12 *:text-white [&_p]:text-white/70 [&_span]:bg-white/10 [&_span]:text-white [&_span]:border-white/20"
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} featured={i === 1} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm mb-4">
            Are you ready to start your journey with us?
          </p>
          <a href="/tours" className="btn-navy" id="testimonials-cta-btn">
            See all tour packages
          </a>
        </div>
      </div>
    </section>
  );
}
