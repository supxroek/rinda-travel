// app/(public)/promotions/page.js
// Promotions Page

import Image from "next/image";
import { PageHero } from "@/components/common/page-hero";
import { MOCK_PROMOTIONS } from "@/lib/mock-content-data";
import dayjs from "@/lib/dayjs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Ticket01Icon,
  Calendar01Icon,
  Copy01Icon,
} from "@hugeicons/core-free-icons";

export const metadata = {
  title: "โปรโมชั่น — Rinda Travel",
  description:
    "โปรโมชั่นแพ็คเกจทัวร์ราคาพิเศษ ส่วนลด และดีลสุดคุ้มจาก Rinda Travel",
};

export default function PromotionsPage() {
  return (
    <>
      <PageHero
        title="โปรโมชั่นสุดคุ้ม"
        description="อัปเดตโปรโมชั่นล่าสุดและส่วนลดพิเศษสำหรับการเดินทางของคุณ"
        backgroundImage="/images/tour-krabi.jpg"
        breadcrumbs={[{ label: "หน้าแรก", href: "/" }, { label: "โปรโมชั่น" }]}
      />

      <section className="section-py bg-muted/20 min-h-[50vh]">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_PROMOTIONS.map((promo) => (
              <div
                key={promo.id}
                className="bg-white rounded-2xl overflow-hidden card-shadow flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto">
                  <Image
                    src={promo.image || "/images/placeholder.jpg"}
                    alt={promo.title}
                    fill
                    className="object-cover"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1.5 rounded-lg text-sm shadow-lg">
                    {promo.discountType === "PERCENTAGE"
                      ? `ลด ${promo.discount}%`
                      : `ลด ฿${promo.discount}`}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:w-3/5 flex flex-col">
                  <h3 className="font-heading font-semibold text-navy-800 text-xl mb-3 line-clamp-2">
                    {promo.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {promo.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center gap-2 text-xs text-navy-600 bg-navy-50 px-3 py-2 rounded-lg">
                      <HugeiconsIcon
                        icon={Calendar01Icon}
                        className="w-4 h-4"
                      />
                      <span>
                        หมดเขต: {dayjs(promo.endDate).format("D MMM YYYY")}
                      </span>
                    </div>

                    {promo.code && (
                      <div className="flex items-center justify-between border-2 border-dashed border-gold-400 bg-gold-50/50 rounded-xl px-4 py-3">
                        <div>
                          <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">
                            โค้ดส่วนลด
                          </p>
                          <p className="font-mono font-bold text-navy-800 text-lg">
                            {promo.code}
                          </p>
                        </div>
                        <button
                          className="p-2 bg-white rounded-lg shadow-sm border border-border hover:bg-muted transition-colors text-navy-600"
                          title="คัดลอกโค้ด"
                        >
                          <HugeiconsIcon
                            icon={Copy01Icon}
                            className="w-5 h-5"
                            strokeWidth={2}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
