// components/common/section-header.jsx
// Reusable Section Header ที่ใช้ใน Home และหน้าต่างๆ

import { cn } from "@/lib/utils";

/**
 * @param {{
 *   badge?: string,
 *   title: string,
 *   description?: string,
 *   align?: "left" | "center" | "right",
 *   className?: string
 * }} props
 */
export function SectionHeader({ badge, title, description, align = "center", className }) {
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={cn("flex flex-col gap-3", alignClasses[align], className)}>
      {/* Badge */}
      {badge && (
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
          {badge}
        </span>
      )}

      {/* Title */}
      <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-sm md:text-base leading-relaxed",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
