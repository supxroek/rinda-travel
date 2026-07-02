// lib/constants.js
// App-wide constants สำหรับ Rinda Travel

import dayjs from "dayjs";

// Company Information
export const FOUNDED = 2011;
export const FOUNDEDYEAR = dayjs().diff(dayjs(`${FOUNDED}`), "year");

export const APP_NAME = "Rinda Travel";
export const APP_TAGLINE = "Unlock an unforgettable travel experience";
export const APP_DESCRIPTION = `Rinda Travel was founded in 2011. We are a travel service provider in Phuket with over ${FOUNDEDYEAR} years of experience`;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export const APP_EMAIL = "rinda.manajit@gmail.com";
export const APP_PHONE = "+66 098-5691424";
export const APP_LINE = "@rindatravelthailand";

// Social Media
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/RINDATRAVELPHUKET",
  whatsapp: "https://whatsapp.com/rindatravel",
  line: "https://lin.ee/BVqfWT3",
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Promotions", href: "/promotions" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Pagination
export const DEFAULT_PAGE_SIZE = 12;
export const BLOG_PAGE_SIZE = 9;

// Tour Difficulties
export const DIFFICULTY_LABELS = {
  EASY: "Easy",
  MODERATE: "Moderate",
  CHALLENGING: "Challenging",
};

export const DIFFICULTY_COLORS = {
  EASY: "text-green-600 bg-green-50",
  MODERATE: "text-amber-600 bg-amber-50",
  CHALLENGING: "text-red-600 bg-red-50",
};

// Tour Status
export const TOUR_STATUS_LABELS = {
  DRAFT: "Draft",
  PUBLISHED: "Published",
  ARCHIVED: "Archived",
};

// Currency
export const CURRENCY = "THB";
export const CURRENCY_SYMBOL = "฿";

// Image
export const PLACEHOLDER_IMAGE = "/images/tour-bangkok.jpg";
export const OG_IMAGE = "/images/tour-krabi.jpg";

// Revalidation times (seconds)
export const REVALIDATE_TOURS = 3600; // 1 hour
export const REVALIDATE_BLOG = 1800; // 30 min
export const REVALIDATE_HOME = 7200; // 2 hours
