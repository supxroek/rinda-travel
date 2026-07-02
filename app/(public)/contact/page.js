// app/(public)/contact/page.js
import { PageHero } from "@/components/common/page-hero";

export const metadata = {
  title: "ติดต่อเรา",
  description: "ติดต่อทีมงาน Rinda Travel เพื่อสอบถามข้อมูลและจองทัวร์",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="ติดต่อเรา"
        subtitle="พร้อมให้บริการและตอบทุกคำถาม ตลอด 24 ชั่วโมง"
        breadcrumbs={[{ label: "หน้าแรก", href: "/" }, { label: "ติดต่อเรา" }]}
      />
      <section className="section-py container-lg">
        <p className="text-muted-foreground text-center">🚧 Phase 2: Contact Form กำลังพัฒนา</p>
      </section>
    </>
  );
}
