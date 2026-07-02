// components/common/loading-skeleton.jsx
// Skeleton loading components สำหรับ TanStack Query loading states

import { cn } from "@/lib/utils";

/**
 * Base skeleton element
 * @param {{ className?: string }} props
 */
export function Skeleton({ className }) {
  return (
    <div
      className={cn("shimmer rounded-lg bg-muted", className)}
      aria-hidden="true"
    />
  );
}

/**
 * Tour card skeleton
 */
export function TourCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card">
      <Skeleton className="h-52 w-full rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-9 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/**
 * Blog card skeleton
 */
export function BlogCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card">
      <Skeleton className="h-44 w-full rounded-none" />
      <div className="p-4 space-y-2.5">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  );
}

/**
 * Grid of tour card skeletons
 * @param {{ count?: number }} props
 */
export function TourGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <TourCardSkeleton key={i} />
      ))}
    </div>
  );
}

/**
 * Tour detail skeleton
 */
export function TourDetailSkeleton() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-80 md:h-[500px] w-full rounded-none" />
      <div className="container-lg space-y-6">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-20 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
