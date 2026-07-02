// features/home/components/categories-section.jsx
// Tour Categories Grid

import Link from "next/link";
import { MOCK_CATEGORIES } from "@/lib/mock-data";
import { SectionHeader } from "@/components/common/section-header";

export function CategoriesSection() {
  return (
    <section
      className="section-py bg-white"
      aria-labelledby="categories-heading"
    >
      <div className="container-lg">
        <SectionHeader
          badge="ประเภทการท่องเที่ยว"
          title="เลือกสไตล์การท่องเที่ยวของคุณ"
          description="ไม่ว่าจะชอบทะเล ภูเขา หรือวัฒนธรรม เรามีแพ็คเกจที่ตอบโจทย์คุณ"
          className="mb-12"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {MOCK_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tours?category=${cat.slug}`}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-navy-50 hover:bg-gradient-brand transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-500/20"
              id={`category-${cat.slug}`}
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                {cat.icon}
              </span>
              <div className="text-center">
                <p className="font-semibold text-sm text-navy-800 group-hover:text-black transition-colors leading-tight">
                  {cat.name}
                </p>
                <p className="text-xs text-muted-foreground group-hover:text-black transition-colors mt-0.5">
                  {cat.count} แพ็คเกจ
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
