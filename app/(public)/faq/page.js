// app/(public)/faq/page.js
// FAQ Page

import { PageHero } from "@/components/common/page-hero";
import { MOCK_FAQS } from "@/lib/mock-content-data";
import { HugeiconsIcon } from "@hugeicons/react";
import { HelpCircleIcon, MessageQuestionIcon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: "คำถามที่พบบ่อย (FAQ) — Rinda Travel",
  description: "คำถามที่พบบ่อยเกี่ยวกับการจองทัวร์ การชำระเงิน และเงื่อนไขต่างๆ ของ Rinda Travel",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="คำถามที่พบบ่อย (FAQ)"
        description="รวมคำถามที่ลูกค้าสอบถามเข้ามาบ่อยที่สุด เพื่อช่วยให้คุณตัดสินใจได้ง่ายขึ้น"
        backgroundImage="/images/tour-bangkok.jpg"
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "คำถามที่พบบ่อย" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar Contact Info */}
            <div className="md:col-span-1">
              <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100 sticky top-24">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-navy-600">
                  <HugeiconsIcon icon={MessageQuestionIcon} className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-lg mb-2">
                  ไม่พบคำตอบที่คุณต้องการ?
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  หากคุณมีข้อสงสัยเพิ่มเติม สามารถติดต่อทีมงานของเราได้ตลอดเวลา เรายินดีให้ความช่วยเหลือครับ
                </p>
                <a href="/contact" className="btn-navy w-full text-sm">
                  ติดต่อเรา
                </a>
              </div>
            </div>

            {/* FAQ List */}
            <div className="md:col-span-2 space-y-6">
              {MOCK_FAQS.map((faq, index) => (
                <div key={index} className="border border-border rounded-2xl p-6 hover:border-navy-200 transition-colors bg-white">
                  <h3 className="font-heading font-semibold text-navy-800 text-lg mb-3 flex gap-3">
                    <HugeiconsIcon icon={HelpCircleIcon} className="w-6 h-6 text-gold-500 shrink-0" strokeWidth={1.5} />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
