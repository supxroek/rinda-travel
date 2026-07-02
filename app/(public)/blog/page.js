// app/(public)/blog/page.js
// Blog List Page

import { PageHero } from "@/components/common/page-hero";
import { BlogCard } from "@/features/blog/components/blog-card";
import { MOCK_BLOG_POSTS } from "@/lib/mock-content-data";

export const metadata = {
  title: "บล็อกท่องเที่ยว — Rinda Travel",
  description: "บทความท่องเที่ยว รีวิวสถานที่ท่องเที่ยว และทริคการเดินทางจาก Rinda Travel",
};

export default function BlogListPage() {
  return (
    <>
      <PageHero
        title="บล็อกและบทความ"
        description="แรงบันดาลใจในการเดินทาง เรื่องราวและรีวิวสถานที่ท่องเที่ยวที่น่าสนใจ"
        backgroundImage="/images/tour-chiangmai.jpg"
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "บล็อก" },
        ]}
      />

      <section className="section-py bg-muted/20 min-h-[50vh]">
        <div className="container-lg">
          {/* Filters / Categories placeholder */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-sm font-semibold text-navy-800 mr-2">หมวดหมู่:</span>
            {["ทั้งหมด", "ท่องเที่ยวไทย", "ต่างประเทศ", "ทริคเดินทาง", "รีวิวที่พัก"].map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  i === 0 
                    ? "bg-navy-600 text-white" 
                    : "bg-white text-navy-600 border border-border hover:bg-navy-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {MOCK_BLOG_POSTS.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
