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
import { FOUNDEDYEAR } from "@/lib/constants";

const reasons = [
  {
    icon: StarAward01Icon,
    title: `Over ${FOUNDEDYEAR} years of experience`,
    description:
      "We are a long-standing and experienced travel service provider in Phuket.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: UserGroupIcon,
    title: "Professional guides",
    description:
      "A team of trained and licensed guides who speak multiple languages and provide attentive care to everyone.",
    color: "text-navy-600 bg-navy-50",
  },
  {
    icon: HotPriceIcon,
    title: "Great value",
    description:
      "A comprehensive package at a fair price with no hidden costs and multiple payment options.",
    color: "text-gold-700 bg-yellow-50",
  },
  {
    icon: ShieldUserIcon,
    title: "Safe and secure",
    description:
      "Comprehensive accident insurance for the entire trip, standard vehicles, and carefully selected hotels.",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: HeadsetIcon,
    title: "24/7 support",
    description:
      "Our team is available 24 hours a day to assist you via phone, LINE, WhatsApp, and other channels.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Clock01Icon,
    title: "Quick handling",
    description:
      "Confirm your reservation within 24 hours, prepare all documents, and provide all details in advance.",
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
          title="Why choose Rinda Travel"
          description="We pay attention to every detail to ensure your journey is as perfect as possible."
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex gap-4 bg-white rounded-2xl p-6 card-shadow card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${reason.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <HugeiconsIcon
                  icon={reason.icon}
                  className="w-6 h-6"
                  strokeWidth={2}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="heading-sm text-navy-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
