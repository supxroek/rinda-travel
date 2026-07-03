// app/(public)/page.js
// Home Page — Rinda Travel

import { APP_NAME, APP_DESCRIPTION, APP_URL } from "@/lib/constants";

// Sections
import { HeroSection } from "@/features/home/components/hero-section";
import { FeaturedTours } from "@/features/home/components/featured-tours";
import { BenefitSection } from "@/features/home/components/benefit-section";
import { WhyChooseUs } from "@/features/home/components/why-choose-us";
import { Testimonials } from "@/features/home/components/testimonials";

export const metadata = {
  title: `${APP_NAME} — เปิดประสบการณ์การเดินทางที่ไม่มีวันลืม`,
  description: APP_DESCRIPTION,
  alternates: {
    canonical: APP_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitSection />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
