"use client";

// components/layout/navbar.jsx
// Premium Navbar สำหรับ Rinda Travel — Transparent → Solid on scroll

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  Menu01Icon,
  Call02Icon,
  MailReceive02Icon,
  Airplane01Icon,
} from "@hugeicons/core-free-icons";
import { NAV_LINKS, APP_NAME, APP_EMAIL, APP_PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/ui-store";
import { MobileMenu } from "./mobile-menu";
import GTranslate from "@/lib/GTranslate";

export function Navbar() {
  const pathname = usePathname();
  const { isScrolled, setScrolled } = useUIStore();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Background layer (แยกออกมาเพื่อไม่ให้ backdrop-blur สร้าง containing block ครอบ GTranslate popup) */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isScrolled
              ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm"
              : "bg-transparent",
          )}
        />

        <nav className="container-lg relative z-10">
          {/* Brandner */}
          <div className="hidden md:flex items-center justify-between h-10">
            <div className="flex gap-10">
              <a
                href={APP_EMAIL}
                className={cn(
                  "flex items-end gap-2 text-sm hover:text-gray-300 transition-colors",
                  isScrolled
                    ? "text-gray-500 hover:text-gray-700"
                    : "text-gray-400 hover:text-gray-300",
                )}
              >
                <HugeiconsIcon
                  icon={MailReceive02Icon}
                  className={cn(
                    "w-4 h-4 shrink-0",
                    isScrolled ? "text-gray-700" : "text-gray-400",
                  )}
                  strokeWidth={1}
                />
                <span>{APP_EMAIL}</span>
              </a>

              <a
                href={APP_EMAIL}
                className={cn(
                  "flex items-end gap-2 text-sm transition-colors",
                  isScrolled
                    ? "text-gray-500 hover:text-gray-700"
                    : "text-gray-400 hover:text-gray-300",
                )}
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  className={cn(
                    "w-4 h-4 shrink-0",
                    isScrolled ? "text-gray-700" : "text-gray-400",
                  )}
                  strokeWidth={1}
                />
                <span>{APP_PHONE}</span>
              </a>
            </div>
            {/* GTranslate */}
            <GTranslate flag_size={28} flag_style="2d" />
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label={`${APP_NAME}`}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300",
                  "bg-gradient-brand shadow-lg shadow-brand-500/25",
                )}
              >
                <HugeiconsIcon
                  icon={Airplane01Icon}
                  className="w-4.5 h-4.5 text-white -rotate-45"
                  strokeWidth={2}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={cn(
                    "font-bold text-lg leading-none transition-colors duration-300 notranslate",
                    "font-heading",
                    isScrolled
                      ? "text-brand-700 dark:text-brand-300"
                      : "text-white",
                  )}
                >
                  Rinda
                </span>
                <span
                  className={cn(
                    "text-xs leading-none font-medium tracking-widest transition-colors duration-300 notranslate",
                    isScrolled
                      ? "text-gold-600 dark:text-gold-400"
                      : "text-gold-300",
                  )}
                >
                  TRAVEL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {NAV_LINKS.filter(
                (link) => !["Blog", "About", "Contact"].includes(link.label),
              ).map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-3.5 py-2 text-sm font-medium rounded-lg",
                        "transition-all duration-200 group",
                        isActive
                          ? isScrolled
                            ? "text-primary bg-primary/8"
                            : "text-white bg-white/15"
                          : isScrolled
                            ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                            : "text-white/85 hover:text-white hover:bg-white/10",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right side — CTA */}
            <div className="flex items-center gap-5">
              {/* GTranslate */}
              {/* <GTranslate flag_size={28} flag_style="2d" />*/}

              {/* Contact Button */}
              <Link
                href="/contact"
                className={cn(
                  "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
                  "text-sm font-semibold transition-all duration-300",
                  "shadow-sm hover:shadow-md hover:-translate-y-0.5",
                  "bg-gradient-brand text-white hover:opacity-90",
                  "shadow-brand-500/30",
                )}
                id="navbar-cta-btn"
              >
                Book Now
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className={cn(
                  "lg:hidden w-10 h-10 rounded-xl flex items-center justify-center",
                  "transition-all duration-200 cursor-pointer",
                  isScrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10",
                )}
                aria-label={isMobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
                aria-expanded={isMobileMenuOpen}
                id="mobile-menu-btn"
              >
                {isMobileMenuOpen ? (
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    className="w-5 h-5"
                    strokeWidth={2}
                  />
                ) : (
                  <HugeiconsIcon
                    icon={Menu01Icon}
                    className="w-5 h-5"
                    strokeWidth={2}
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
}
