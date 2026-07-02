// lib/mock-content-data.js
// Mock data สำหรับ Phase 3 (Blog, Promotions, FAQ)

export const MOCK_BLOG_POSTS = [
  {
    id: "post-1",
    slug: "top-10-temples-bangkok",
    title: "10 วัดสวยในกรุงเทพฯ ที่สายบุญห้ามพลาด",
    excerpt: "รวบรวม 10 วัดดังในกรุงเทพมหานคร ที่มีสถาปัตยกรรมงดงามและเป็นที่เคารพสักการะของทั้งชาวไทยและต่างชาติ",
    coverImage: "/images/tour-bangkok.jpg",
    content: "<p>กรุงเทพมหานคร เมืองหลวงของไทย เป็นศูนย์รวมของสถาปัตยกรรมทางศาสนาที่งดงามมากมาย...</p>",
    tags: ["ท่องเที่ยวไทย", "วัด", "กรุงเทพฯ", "สายบุญ"],
    publishedAt: "2024-03-15T09:00:00Z",
    author: { name: "Rinda Editor" },
    readTime: "5 นาที",
    viewCount: 1250,
  },
  {
    id: "post-2",
    slug: "guide-to-krabi-island-hopping",
    title: "คู่มือเที่ยวทะเลกระบี่ ฉบับสมบูรณ์",
    excerpt: "เจาะลึกทุกเกาะในกระบี่ ตั้งแต่พีพี หมาหลี ไปจนถึงไร่เลย์ เดินทางอย่างไร พักที่ไหนดี เรามีคำตอบ",
    coverImage: "/images/tour-krabi.jpg",
    content: "<p>ทะเลกระบี่ ได้รับการขนานนามว่าเป็นหนึ่งในทะเลที่สวยที่สุดในโลก...</p>",
    tags: ["กระบี่", "ทะเล", "เกาะพีพี", "หน้าร้อน"],
    publishedAt: "2024-04-02T10:30:00Z",
    author: { name: "Rinda Editor" },
    readTime: "8 นาที",
    viewCount: 3400,
  },
  {
    id: "post-3",
    slug: "chiangmai-winter-travel",
    title: "5 ดอยน่าเที่ยวในเชียงใหม่ รับลมหนาว",
    excerpt: "เตรียมเสื้อกันหนาวให้พร้อม แล้วไปสัมผัสอากาศเย็นสบายบนดอยยอดฮิตของจังหวัดเชียงใหม่",
    coverImage: "/images/tour-chiangmai.jpg",
    content: "<p>เมื่อเข้าสู่หน้าหนาว เชียงใหม่คือจุดหมายปลายทางอันดับต้นๆ...</p>",
    tags: ["เชียงใหม่", "หน้าหนาว", "ดอย", "ธรรมชาติ"],
    publishedAt: "2024-11-10T08:15:00Z",
    author: { name: "Rinda Editor" },
    readTime: "6 นาที",
    viewCount: 890,
  },
];

export const MOCK_PROMOTIONS = [
  {
    id: "promo-1",
    slug: "summer-sale-2024",
    title: "Summer Sale 2024 ลดคลายร้อนสูงสุด 30%",
    description: "จองทัวร์ทะเลภายในเดือนเมษายนนี้ รับส่วนลดทันที 30% ทุกแพ็คเกจโซนภาคใต้",
    image: "/images/tour-krabi.jpg",
    discount: "30",
    discountType: "PERCENTAGE",
    code: "SUMMER30",
    startDate: "2024-03-01T00:00:00Z",
    endDate: "2024-04-30T23:59:59Z",
    isActive: true,
  },
  {
    id: "promo-2",
    slug: "early-bird-winter",
    title: "จองก่อนถูกกว่า! ทริปรับลมหนาวภาคเหนือ",
    description: "ส่วนลด 2,000 บาท เมื่อจองแพ็คเกจทัวร์เชียงใหม่ เชียงราย ล่วงหน้า 60 วัน",
    image: "/images/tour-chiangmai.jpg",
    discount: "2000",
    discountType: "FIXED",
    code: "EARLYWINTER",
    startDate: "2024-07-01T00:00:00Z",
    endDate: "2024-09-30T23:59:59Z",
    isActive: true,
  },
];

export const MOCK_FAQS = [
  {
    question: "สามารถจองทัวร์ได้อย่างไรบ้าง?",
    answer: "ท่านสามารถจองทัวร์ได้ผ่าน 3 ช่องทางหลัก คือ 1. ผ่านระบบเว็บไซต์โดยตรง 2. แอดไลน์ @rindatravel หรือ 3. โทรศัพท์ติดต่อฝ่ายขายที่เบอร์ +66 2-xxx-xxxx"
  },
  {
    question: "มีบริการจัดกรุ๊ปเหมา หรือ Private Tour หรือไม่?",
    answer: "มีครับ เราให้บริการจัดกรุ๊ปเหมาทั้งในและต่างประเทศ เริ่มต้นตั้งแต่ 4 ท่านขึ้นไป โดยสามารถปรับเปลี่ยนโปรแกรมได้ตามความต้องการ"
  },
  {
    question: "ราคาที่แสดงรวมอะไรบ้าง?",
    answer: "โดยทั่วไปราคาทัวร์จะรวม: ค่าที่พักตามระบุ, ค่าอาหารตามระบุ, ค่ารถรับส่ง/ยานพาหนะตามโปรแกรม, ค่าเข้าชมสถานที่, ค่ามัคคุเทศก์ และประกันอุบัติเหตุ (กรุณาดูรายละเอียด Include/Exclude ของแต่ละแพ็คเกจอีกครั้ง)"
  },
  {
    question: "สามารถยกเลิกหรือเลื่อนการเดินทางได้หรือไม่?",
    answer: "สามารถทำได้ตามเงื่อนไขการยกเลิกของบริษัท โดยทั่วไปหากแจ้งล่วงหน้ามากกว่า 30 วัน จะได้รับเงินมัดจำคืนเต็มจำนวน (หักค่าธรรมเนียม) กรุณาศึกษาเงื่อนไขเพิ่มเติมที่หน้า Terms & Conditions"
  },
];
