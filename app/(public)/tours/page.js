// app/(public)/tours/page.js
import { PageHero } from "@/components/common/page-hero";

export const metadata = {
  title: "แพ็คเกจทัวร์ทั้งหมด",
  description: "ค้นหาแพ็คเกจทัวร์ในฝัน ทั้งในและต่างประเทศ หลากหลายเส้นทาง ราคาคุ้มค่า",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        title="แพ็คเกจทัวร์ทั้งหมด"
        subtitle="ค้นหาแพ็คเกจทัวร์ในฝัน ทั้งในและต่างประเทศ"
        breadcrumbs={[{ label: "หน้าแรก", href: "/" }, { label: "แพ็คเกจทัวร์" }]}
      />
      <section className="section-py container-lg">
        <p className="text-muted-foreground text-center">🚧 Phase 2: Tour List + Filter กำลังพัฒนา</p>
      </section>
    </>
  );
}
