// components/common/page-hero.jsx
// Reusable Page Hero Banner ที่ใช้ทุกหน้า (ยกเว้น Home)

import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * @param {{
 *   title: string,
 *   subtitle?: string,
 *   breadcrumbs?: Array<{label: string, href?: string}>,
 *   image?: string,
 *   overlay?: boolean,
 *   size?: "sm" | "md" | "lg",
 *   className?: string
 * }} props
 */
export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image,
  overlay = true,
  size = "md",
  className,
}) {
  const sizeClasses = {
    sm: "h-48 md:h-60",
    md: "h-60 md:h-80",
    lg: "h-72 md:h-96",
  };

  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        sizeClasses[size],
        !image && "bg-gradient-hero",
        className
      )}
    >
      {/* Background Image */}
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/20" />
      )}

      {/* Decorative elements */}
      <div className="absolute top-8 right-12 w-24 h-24 rounded-full bg-brand-500/10 blur-2xl" />
      <div className="absolute top-16 right-32 w-16 h-16 rounded-full bg-gold-500/10 blur-xl" />

      {/* Content */}
      <div className="relative z-10 container-lg pb-8 md:pb-10 w-full">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="breadcrumb"
            className="flex items-center gap-2 text-xs text-white/60 mb-3"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="hover:text-white/90 transition-colors"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="font-heading font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 text-white/70 text-sm md:text-base max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
