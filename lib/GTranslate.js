"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GTranslate({
  globe_color,
  globe_size,
  flag_size,
  flag_style,
  horizontal_position,
  vertical_position,
}) {
  globe_color ??= null;
  globe_size ??= null;
  flag_size ??= null;
  flag_style ??= null;
  horizontal_position ??= null;
  vertical_position ??= null;

  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      detect_browser_language: true,
      wrapper_selector: ".gtranslate_wrapper",
      horizontal_position: horizontal_position,
      vertical_position: vertical_position,
      globe_color: globe_color,
      globe_size: globe_size,
      flag_size: flag_size,
      flag_style: flag_style,
    };
  }, [
    globe_color,
    globe_size,
    flag_size,
    flag_style,
    horizontal_position,
    vertical_position,
  ]);

  return (
    <>
      {/* ตัวคอนเทนเนอร์สำหรับวิดเจ็ต */}
      <div className="gtranslate_wrapper"></div>

      {/* โหลดสคริปต์ภายนอกอย่างปลอดภัยด้วย Next.js Script */}
      <Script src="https://cdn.gtranslate.net/widgets/latest/popup.js" defer />
    </>
  );
}
