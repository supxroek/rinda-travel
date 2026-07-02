"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GTranslate() {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "th",
      languages: ["th", "en", "fr", "it", "es"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "right",
    };
  }, []);

  return (
    <>
      {/* ตัวคอนเทนเนอร์สำหรับวิดเจ็ต */}
      <div className="gtranslate_wrapper"></div>

      {/* โหลดสคริปต์ภายนอกอย่างปลอดภัยด้วย Next.js Script */}
      <Script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer />
    </>
  );
}
