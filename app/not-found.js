// app/not-found.js
// Global 404 Page

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Airplane01Icon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: "404 — ไม่พบหน้าที่ต้องการ",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center text-center px-6">
      {/* Icon */}
      <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
        <HugeiconsIcon icon={Airplane01Icon} className="w-10 h-10 text-white -rotate-12" strokeWidth={1.5} />
      </div>

      {/* Error Code */}
      <p className="text-8xl font-heading font-bold text-white/20 leading-none mb-4">
        404
      </p>

      {/* Message */}
      <h1 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
        หน้าที่คุณหาหายไปแล้ว
      </h1>
      <p className="text-white/60 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
        บางทีเครื่องบินพาคุณไปผิดที่ ลองกลับไปที่หน้าแรกแล้วเริ่มใหม่อีกครั้ง
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold hover:opacity-90 transition-opacity"
        >
          กลับหน้าแรก
        </Link>
        <Link
          href="/tours"
          className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
        >
          ดูแพ็คเกจทัวร์
        </Link>
      </div>
    </div>
  );
}
