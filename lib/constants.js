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

/**
 * Home

 Tours
 ├── All Tours
 ├── Day Tours
 ├── Package Tours
 ├── Destinations
 └── Experiences

 Transport
 ├── Airport Transfer
 ├── Car Rental
 ├── Motorbike Rental
 └── Ferry Tickets

 Private Charter
 ├── Speedboat Charter
 ├── Yacht Charter
 └── Corporate & Incentive

 Travel Guide
 ├── Blog
 ├── Things to Do
 ├── Travel Tips
 └── FAQ

 About

 Contact
 */

// Mega Menu Navigation Structure
export const MEGA_NAV = [
  { label: "Home", href: "/" },
  {
    label: "Tours",
    href: "/tours",
    groups: [
      {
        title: "Popular Tours",
        items: [
          {
            label: "Day Tours",
            href: "/tours/day-tours",
            description: "ทัวร์วันเดียว สำรวจเกาะสวยงาม",
          },
          {
            label: "Package Tours",
            href: "/tours/package-tours",
            description: "แพ็คเกจทัวร์ครบวงจร",
          },
          { label: "All Tours", href: "/tours", description: "ดูทัวร์ทั้งหมด" },
        ],
      },
      {
        title: "Destinations",
        items: [
          { label: "Phi Phi", href: "/tours?destination=phi-phi" },
          { label: "James Bond", href: "/tours?destination=james-bond" },
          { label: "Similan", href: "/tours?destination=similan" },
          { label: "Coral Island", href: "/tours?destination=coral" },
          { label: "Racha Island", href: "/tours?destination=racha" },
          { label: "Krabi", href: "/tours?destination=krabi" },
        ],
      },
      {
        title: "Experiences",
        items: [
          { label: "Adventure", href: "/tours?type=adventure" },
          { label: "Snorkeling", href: "/tours?type=snorkeling" },
          { label: "Diving", href: "/tours?type=diving" },
          { label: "Family", href: "/tours?type=family" },
          { label: "Shows & Attractions", href: "/tours?type=shows" },
        ],
      },
    ],
  },
  {
    label: "Transport",
    href: "/transport",
    groups: [
      {
        title: "Airport Transfer",
        items: [
          {
            label: "Airport Transfer",
            href: "/transport/airport-transfer",
            description: "รับ-ส่งสนามบิน สะดวก รวดเร็ว",
          },
          {
            label: "Car Rental",
            href: "/transport/car-rental",
            description: "เช่ารถขับเองพร้อมคนขับ",
          },
          {
            label: "Motorbike Rental",
            href: "/transport/motorbike-rental",
            description: "เช่ามอเตอร์ไซค์สำรวจเกาะ",
          },
          {
            label: "Ferry Tickets",
            href: "/transport/ferry",
            description: "ตั๋วเรือเฟอร์รีทุกเส้นทาง",
          },
        ],
      },
    ],
  },
  {
    label: "Private Charter",
    href: "/private-charter",
    groups: [
      {
        title: "Charter Options",
        items: [
          {
            label: "Speedboat Charter",
            href: "/private-charter/speedboat",
            description: "เช่าสปีดโบ๊ทส่วนตัว",
          },
          {
            label: "Yacht Charter",
            href: "/private-charter/yacht",
            description: "เช่ายอชท์หรูสุดพิเศษ",
          },
          {
            label: "Corporate & Incentive",
            href: "/private-charter/corporate",
            description: "ทริปองค์กร & อีเวนต์",
          },
          {
            label: "Luxury Charter",
            href: "/private-charter/luxury",
            description: "ประสบการณ์สุดหรู",
          },
        ],
      },
    ],
  },
  {
    label: "Travel Guide",
    href: "/travel-guide",
    groups: [
      {
        title: "Resources",
        items: [
          {
            label: "Blog",
            href: "/travel-guide/blog",
            description: "บทความท่องเที่ยวล่าสุด",
          },
          {
            label: "Things to Do",
            href: "/travel-guide/things-to-do",
            description: "กิจกรรมน่าสนใจในภูเก็ต",
          },
          {
            label: "Travel Tips",
            href: "/travel-guide/tips",
            description: "เคล็ดลับเที่ยวภูเก็ต",
          },
          {
            label: "FAQ",
            href: "/travel-guide/faq",
            description: "คำถามที่พบบ่อย",
          },
        ],
      },
    ],
  },
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
