// features/home/components/featured-tours.jsx
// Featured Tours Section สำหรับ Home Page

import Link from "next/link";
import { MOCK_TOURS } from "@/lib/mock-data";
import { TourCard } from "@/features/tours/components/tour-card";
import { SectionHeader } from "@/components/common/section-header";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function FeaturedTours() {
  const featured = MOCK_TOURS.filter((t) => t.featured).slice(0, 3);

  return (
    <section
      className="section-py bg-white"
      aria-labelledby="featured-tours-heading"
    >
      <div className="container-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            align="left"
            badge="แพ็คเกจยอดนิยม"
            title="ทัวร์ที่ลูกค้านิยมสูงสุด"
            description="คัดสรรแพ็คเกจที่ดีที่สุด คุ้มค่าที่สุด ดูแลโดยทีมมัคคุเทศก์มืออาชีพ"
          />
          <Link
            href="/tours"
            className="flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors shrink-0 group"
            id="view-all-tours-link"
          >
            ดูทัวร์ทั้งหมด
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
