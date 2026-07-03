// features/home/components/benefit-section.jsx
// Tour Benefit Grid

import Link from "next/link";
import { MOCK_BENEFIT } from "@/lib/mock-data";
import { HugeiconsIcon } from "@hugeicons/react";

export function BenefitSection() {
  return (
    <section
      className="pt-10 md:pt-16 bg-white"
      aria-labelledby="benefit-heading"
    >
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
          {MOCK_BENEFIT.map((benefit) => (
            <div
              key={benefit.label}
              className="flex items-center gap-4 md:gap-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
                <HugeiconsIcon
                  icon={benefit.icon}
                  className="w-6 h-6 text-blue-800"
                  strokeWidth={2}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-gray-900">
                  {benefit.label}
                </h3>
                <p className="text-xs md:text-sm text-balance text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
