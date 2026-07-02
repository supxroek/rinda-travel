// features/home/components/why-choose-us.jsx
// Why Choose Us Section

import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserGroupIcon,
  ShieldUserIcon,
  HeadsetIcon,
  StarAward01Icon,
  Clock01Icon,
  HotPriceIcon,
} from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/common/section-header";

const reasons = [
  {
    icon: StarAward01Icon,
    title: "ประสบการณ์กว่า 10 ปี",
    description:
      "ดำเนินธุรกิจมานานกว่าทศวรรษ มีความเชี่ยวชาญและเครือข่ายพันธมิตรที่แข็งแกร่ง",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: UserGroupIcon,
    title: "ไกด์มืออาชีพ",
    description:
      "ทีมมัคคุเทศก์ที่ผ่านการอบรม มีใบอนุญาต พูดได้หลายภาษา และดูแลทุกคนอย่างใส่ใจ",
    color: "text-navy-600 bg-navy-50",
  },
  {
    icon: HotPriceIcon,
    title: "ราคาคุ้มค่า",
    description:
      "แพ็คเกจครบครันในราคาที่ยุติธรรม ไม่มีค่าใช้จ่ายซ่อนเร้น ชำระได้หลายช่องทาง",
    color: "text-gold-700 bg-yellow-50",
  },
  {
    icon: ShieldUserIcon,
    title: "ปลอดภัยมั่นใจ",
    description:
      "ประกันอุบัติเหตุครอบคลุมตลอดทริป พาหนะมาตรฐาน โรงแรมผ่านการคัดสรร",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: HeadsetIcon,
    title: "ซัพพอร์ต 24/7",
    description:
      "ทีมงานพร้อมช่วยเหลือตลอด 24 ชั่วโมง ทางโทรศัพท์ LINE และอีเมล",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Clock01Icon,
    title: "จัดการรวดเร็ว",
    description:
      "ยืนยันการจองภายใน 24 ชั่วโมง จัดเตรียมเอกสารครบ แจ้งรายละเอียดทุกอย่างล่วงหน้า",
    color: "text-orange-600 bg-orange-50",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="section-py bg-gradient-section"
      aria-labelledby="why-choose-heading"
    >
      <div className="container-lg">
        <SectionHeader
          badge="ทำไมต้องเลือกเรา"
          title="ทำไมลูกค้าไว้วางใจ Rinda Travel"
          description="เราใส่ใจทุกรายละเอียดเพื่อให้การเดินทางของคุณสมบูรณ์แบบที่สุด"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-6 card-shadow card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${reason.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <HugeiconsIcon
                  icon={reason.icon}
                  className="w-6 h-6"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <h3 className="heading-sm text-navy-800 mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
