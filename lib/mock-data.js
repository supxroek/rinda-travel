// lib/mock-data.js
// Mock data สำหรับ Development Phase 2
// จะถูกแทนที่ด้วย API calls จริงใน Phase 3

import {
  BicepsFlexedIcon,
  Headphones,
  DiscountTag02Icon,
} from "@hugeicons/core-free-icons";

export const MOCK_TOURS = [
  {
    id: "tour-001",
    slug: "bangkok-culture-3d2n",
    title: "Bangkok: Culture, 3 days and 2 nights",
    excerpt:
      "Experience the beauty of Bangkok, the capital of angels. Visit temples and monasteries, take a boat trip on the Chao Phraya River, and shop at Sampheng Market.",
    coverImage: "/images/tour-bangkok.jpg",
    price: 4990,
    priceOld: 5990,
    duration: 3,
    nights: 2,
    destinations: ["Bangkok"],
    difficulty: "EASY",
    category: { name: "Domestic tours", slug: "domestic" },
    tags: ["Culture", "Shopping", "Boating"],
    rating: 4.8,
    reviewCount: 128,
    featured: true,
  },
  {
    id: "tour-002",
    slug: "chiangmai-nature-4d3n",
    title: "Chiang Mai: 4 Days, 3 Nights in Nature",
    excerpt:
      "Adventure in the Chiang Mai hills and forests, ride an elephant, visit Doi Inthanon, explore Anusarn Market, and see Wat Phra That Doi Suthep.",
    coverImage: "/images/tour-chiangmai.jpg",
    price: 7990,
    priceOld: null,
    duration: 4,
    nights: 3,
    destinations: ["Chiang Mai่"],
    difficulty: "MODERATE",
    category: { name: "Domestic tours", slug: "domestic" },
    tags: ["Nature", "Elephant", "Doi"],
    rating: 4.9,
    reviewCount: 89,
    featured: true,
  },
  {
    id: "tour-003",
    slug: "krabi-island-5d4n",
    title: "Krabi, Koh Sawan: 5 days, 4 nights",
    excerpt:
      "Experience the beauty of Krabi: Koh Phi Phi, Phra Nang Cave, and the Talay Wek, and go snorkeling to see the coral reefs.",
    coverImage: "/images/tour-krabi.jpg",
    price: 12990,
    priceOld: 15990,
    duration: 5,
    nights: 4,
    destinations: ["Krabi", "Phi Phi Island"],
    difficulty: "EASY",
    category: { name: "Sea tour", slug: "beach" },
    tags: ["Sea", "Islands", "Diving"],
    rating: 4.7,
    reviewCount: 203,
    featured: true,
  },
  {
    id: "tour-004",
    slug: "phuket-luxury-3d2n",
    title: "Luxurious Phuket: 3 days, 2 nights",
    excerpt: "Stay at a 5-star hotel on Pa Tong Beach and watch the sunset at Phra Phrom Thep Cape.",
    coverImage: "/images/tour-krabi.jpg",
    price: 18990,
    priceOld: 22000,
    duration: 3,
    nights: 2,
    destinations: ["Phuket"],
    difficulty: "EASY",
    category: { name: "Luxury tour", slug: "luxury" },
    tags: ["Phuket", "5-star hotel", "Sunset"],
    rating: 4.9,
    reviewCount: 67,
    featured: false,
  },
  {
    id: "tour-005",
    slug: "ayutthaya-history-2d1n",
    title: "Ayutthaya, a World Heritage Site: 2 days, 1 night",
    excerpt:
      "Retrace the history of Ayutthaya, the former capital, explore ancient temples, and take a boat tour of Phra Nakhon Si Ayutthaya.",
    coverImage: "/images/tour-bangkok.jpg",
    price: 2990,
    priceOld: 3500,
    duration: 2,
    nights: 1,
    destinations: ["Ayutthaya"],
    difficulty: "EASY",
    category: { name: "History Tour", slug: "history" },
    tags: ["History ", "World Heritage Site", "Culture"],
    rating: 4.6,
    reviewCount: 45,
    featured: false,
  },
  {
    id: "tour-006",
    slug: "northern-trek-7d6n",
    title: "Northern Thailand Trip: 7 Days, 6 Nights of Forest Hiking",
    excerpt: "Go on a hiking adventure in the north, gaze at the stars on Doi Mae Hong Son, or visit Pai and Doi Mae Klong.",
    coverImage: "/images/tour-chiangmai.jpg",
    price: 22990,
    priceOld: null,
    duration: 7,
    nights: 6,
    destinations: ["Chiang Mai", "Mae Hong Son", "Pai"],
    difficulty: "CHALLENGING",
    category: { name: "Adventure Tour", slug: "adventure" },
    tags: ["Hiking", "Adventure", "Northern Region"],
    rating: 4.8,
    reviewCount: 32,
    featured: false,
  },
];

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: "คุณสมใจ ใจดี",
    avatar: null,
    location: "Bangkok",
    rating: 4,
    comment:
      "Excellent service! The guide spoke Thai clearly and provided comprehensive information. Our trip to Chiang Mai was a blast. I highly recommend it.",
    tourTitle: "Chiang Mai: 4 Days, 3 Nights in Nature",
  },
  {
    id: 2,
    name: "คุณมาลี รักเดินทาง",
    avatar: null,
    location: "Chiang Mai",
    rating: 5,
    comment:
      "I was very impressed. The hotel was exceptionally well organized, the food was delicious, and the entire staff took great care of me. I will definitely come back.",
    tourTitle: "Krabi, Koh Sawan: 5 days, 4 nights",
  },
  {
    id: 3,
    name: "คุณวิชัย สุขสันต์",
    avatar: null,
    location: "Nakhon Ratchasima",
    rating: 4,
    comment:
      "It's really worth it. The price isn't expensive, but you get a beautiful location. The guide is very knowledgeable about Thai culture.",
    tourTitle: "Bangkok: Culture, 3 days and 2 nights",
  },
];

export const MOCK_STATS = [
  { label: "Satisfied tourists", value: "15,000+", suffix: "person" },
  { label: "Experience", value: "15+", suffix: "years" },
  { label: "Tour packages", value: "200+", suffix: "packages" },
  { label: "Review score", value: "4.9 ★", suffix: "/5" },
];

export const MOCK_BENEFIT = [
  {
    label: "Best Price Guarantee",
    description: "We ensure you get the best deals always.",
    icon: DiscountTag02Icon,
  },
  {
    label: "24/7 Customer Support",
    description: "We're here to help you anytime, anywhere.",
    icon: Headphones,
  },
  {
    label: "Over 15 years of experience",
    description:
      "We are a tourism service provider in Phuket with over 15 years of experience.",
    icon: BicepsFlexedIcon,
  },
];
