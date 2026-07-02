// components/common/empty-state.jsx
// Empty state component สำหรับเมื่อไม่มีข้อมูล

import { SearchMinusIcon, Plane01Icon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * @param {{
 *   title?: string,
 *   description?: string,
 *   icon?: React.ReactNode,
 *   action?: { label: string, href: string },
 *   className?: string
 * }} props
 */
export function EmptyState({
  title = "ไม่พบข้อมูล",
  description = "ยังไม่มีข้อมูลในขณะนี้ กรุณาลองใหม่อีกครั้ง",
  icon,
  action,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "py-16 md:py-20 px-6",
        className
      )}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-5">
        {icon || (
          <SearchMinusIcon className="w-8 h-8 text-muted-foreground" strokeWidth={1.5} />
        )}
      </div>

      {/* Text */}
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
        {description}
      </p>

      {/* Action */}
      {action && (
        <Link
          href={action.href}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

/**
 * Empty search results variant
 */
export function NoSearchResults({ query, onReset }) {
  return (
    <EmptyState
      icon={<SearchMinusIcon className="w-8 h-8 text-muted-foreground" strokeWidth={1.5} />}
      title="ไม่พบผลลัพธ์"
      description={
        query
          ? `ไม่พบผลลัพธ์สำหรับ "${query}" ลองเปลี่ยนคำค้นหาหรือล้างตัวกรอง`
          : "ไม่พบทัวร์ที่ตรงกับเงื่อนไขของคุณ ลองปรับเปลี่ยนตัวกรอง"
      }
      action={onReset ? undefined : { label: "ดูทัวร์ทั้งหมด", href: "/tours" }}
    />
  );
}
