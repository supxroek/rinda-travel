// features/tours/components/tour-card.jsx
// Tour Card Component — ใช้ใน Home (Featured) และ Tour List

import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  Location01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import {
  CURRENCY_SYMBOL,
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Format price with Thai comma separator
 * @param {number} price
 */
function formatPrice(price) {
  return price.toLocaleString("th-TH");
}

/**
 * @param {{
 *   tour: import('@/lib/mock-data').Tour,
 *   index?: number,
 *   variant?: "default" | "compact"
 * }} props
 */
export function TourCard({ tour, index = 0, variant = "default" }) {
  const discount = tour.priceOld
    ? Math.round(((tour.priceOld - tour.price) / tour.priceOld) * 100)
    : null;

  return (
    <article
      className={cn(
        "group bg-white rounded-2xl overflow-hidden",
        "card-shadow card-shadow-hover",
        "transition-all duration-300 hover:-translate-y-1.5",
        "border border-border/50 hover:border-navy-200",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-4/3">
        <Image
          src={tour.coverImage}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {tour.featured && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-gold-500 text-white shadow-sm">
              ⭐ Popular
            </span>
          )}
          {discount && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-500 text-white shadow-sm">
              {discount}% off
            </span>
          )}
        </div>

        {/* Difficulty badge */}
        <div className="absolute top-3 right-3">
          <span
            className={cn(
              "px-2.5 py-1 rounded-full text-[11px] font-semibold",
              DIFFICULTY_COLORS[tour.difficulty],
            )}
          >
            {DIFFICULTY_LABELS[tour.difficulty]}
          </span>
        </div>

        {/* Duration overlay on hover */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-white text-xs font-medium">
            <HugeiconsIcon
              icon={Clock01Icon}
              className="w-3.5 h-3.5"
              strokeWidth={1.5}
            />
            {tour.duration} {tour.duration === 1 ? "day" : "days"} {tour.nights}{" "}
            {tour.nights === 1 ? "night" : "nights"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Destination */}
        <div className="flex items-center gap-2 mb-2.5">
          {tour.category && (
            <span className="badge-navy text-[11px]">{tour.category.name}</span>
          )}
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <HugeiconsIcon
              icon={Location01Icon}
              className="w-3.5 h-3.5 shrink-0"
              strokeWidth={1.5}
            />
            {tour.destinations.join(", ")}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug mb-2 line-clamp-2 group-hover:text-navy-600 transition-colors">
          <Link
            href={`/tours/${tour.slug}`}
            className="hover:underline"
            id={`tour-card-${tour.id}`}
          >
            {tour.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {tour.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <HugeiconsIcon
              icon={Clock01Icon}
              className="w-3.5 h-3.5"
              strokeWidth={1.5}
            />
            {tour.duration} {tour.duration === 1 ? "day" : "days"} {tour.nights}{" "}
            {tour.nights === 1 ? "night" : "nights"}
          </span>
          <span className="flex items-center gap-1">
            <HugeiconsIcon
              icon={StarIcon}
              className="w-3.5 h-3.5 star-filled"
              strokeWidth={0}
              style={{ fill: "currentColor" }}
            />
            {tour.rating} ({tour.reviewCount}{" "}
            {tour.reviewCount === 1 ? "review" : "reviews"})
          </span>
        </div>

        {/* Tags */}
        {tour.tags && tour.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tour.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] bg-navy-50 text-navy-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">
              Start with just
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="price-text text-lg text-navy-700">
                {CURRENCY_SYMBOL}
                {formatPrice(tour.price)}
              </span>
              {tour.priceOld && (
                <span className="text-xs text-muted-foreground line-through">
                  {CURRENCY_SYMBOL}
                  {formatPrice(tour.priceOld)}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">/ person</p>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="btn-navy text-xs px-4 py-2"
            id={`tour-card-cta-${tour.id}`}
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
