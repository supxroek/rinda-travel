// app/layout.js
// Root Layout — Rinda Travel

import "./globals.css";
import { Sarabun, Prompt } from "next/font/google";
import { Providers } from "./providers";
import { APP_NAME, APP_DESCRIPTION, APP_URL, OG_IMAGE } from "@/lib/constants";

// Thai fonts via next/font (optimized + no FOUC)
const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: {
    default: `${APP_NAME} — เปิดประสบการณ์การเดินทางที่ไม่มีวันลืม`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  keywords: [
    "ทัวร์",
    "แพ็คเกจทัวร์",
    "ทัวร์ต่างประเทศ",
    "ทัวร์ในประเทศ",
    "รินดา ทราเวล",
    "บริษัททัวร์",
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: APP_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} — เปิดประสบการณ์การเดินทางที่ไม่มีวันลืม`,
    description: APP_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — เปิดประสบการณ์การเดินทางที่ไม่มีวันลืม`,
    description: APP_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e2938" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${sarabun.variable} ${prompt.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
