"use client";

// features/home/components/hero-section.jsx
// Full-bleed Hero Section สำหรับ Home Page

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Location01Icon,
  Airplane01Icon,
} from "@hugeicons/core-free-icons";
import { FOUNDEDYEAR } from "@/lib/constants";

const destinations = [
  "Chiang Mai",
  "Krabi",
  "Phuket",
  "Bangkok",
  "Koh Samui",
  "Phattaya",
];

const words = [
  "that you'll never forget",
  "that you dream of",
  "Thai-style",
  "with family",
  "your dream vacation",
];

const stats = [
  { value: "15,000" + "+", label: "Satisfied customers" },
  { value: "200" + "+", label: "Tour package" },
  { value: FOUNDEDYEAR + " years", label: "Experience" },
  { value: "4.9★", label: "Review score" },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="hero section"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Thailand travel destinations"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay gradient — Navy */}
      <div className="absolute inset-0 bg-linear-to-r from-navy-900/90 via-navy-800/70 to-navy-700/40" />
      <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-lg w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex gap-4 items-center mb-6">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 animate-fade-in">
              <HugeiconsIcon
                icon={Airplane01Icon}
                className="w-4 h-4 text-gold-300"
                strokeWidth={1.5}
              />
              <span className="text-white/90 text-xs font-medium tracking-wide">
                Quality Tour Company · Over {FOUNDEDYEAR} years of experience
              </span>
            </div>

            <div className="hidden md:inline-flex items-center gap-2 glass rounded-full px-4 py-2 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-xs font-medium">
                Open every day.
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-white leading-tight mb-6 animate-slide-up">
            <span className="block text-4xl md:text-5xl lg:text-6xl">
              Open the travel
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl">
              experience
            </span>
            <span
              className="block text-4xl md:text-5xl lg:text-6xl text-gradient-gold transition-all duration-500"
              key={currentWord}
              style={{ animation: "slideUp 0.5s ease-out" }}
            >
              {words[currentWord]}
            </span>
          </h1>

          {/* Sub */}
          <p className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-lg animate-fade-in">
            Complete travel services including airport transfers, chauffeur and
            self-drive car rentals, tour packages, ferry tickets, sightseeing
            activities, and attraction tickets—designed to make every journey
            convenient, seamless, and worry-free.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-2xl shadow-navy-900/30 mb-8 animate-scale-in max-w-xl">
            <div className="flex items-center gap-3 flex-1 px-3">
              <HugeiconsIcon
                icon={Search01Icon}
                className="w-5 h-5 text-navy-400 shrink-0"
                strokeWidth={1.5}
              />
              <input
                type="text"
                placeholder="Search for a tour or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-2.5 text-sm text-navy-800 placeholder:text-muted-foreground bg-transparent outline-none"
                id="hero-search-input"
              />
            </div>
            <Link
              href={`/tours${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ""}`}
              className="btn-navy shrink-0 rounded-xl"
              id="hero-search-btn"
            >
              Find a tour
            </Link>
          </div>

          {/* Popular Destinations */}
          <div className="flex flex-wrap items-center gap-2 animate-fade-in">
            <span className="text-white/50 text-xs flex items-center gap-1">
              <HugeiconsIcon
                icon={Location01Icon}
                className="w-3.5 h-3.5"
                strokeWidth={1.5}
              />
              Most popular:
            </span>
            {destinations.map((dest) => (
              <Link
                key={dest}
                href={`/tours?destination=${encodeURIComponent(dest)}`}
                className="px-3 py-1 rounded-full text-xs font-medium glass text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200"
              >
                {dest}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats Strip */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 glass-navy border-t border-white/10">
        <div className="container-lg py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-2">
                <p className="font-heading font-bold text-lg md:text-xl text-white">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
