"use client";

// components/layout/navbar.jsx
// Premium Navbar — Transparent → Solid on scroll + Mega Menu (shadcn NavigationMenu)

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
import { MEGA_NAV, APP_NAME, APP_EMAIL, APP_PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/ui-store";
import { MobileMenu } from "./mobile-menu";
import GTranslate from "@/lib/GTranslate";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// ─────────────────────────────────────────────────────────────────────────────
// Tours — 3-column Mega Menu
// ─────────────────────────────────────────────────────────────────────────────
function ToursMegaMenu() {
  const toursNav = MEGA_NAV.find((n) => n.label === "Tours");
  if (!toursNav?.groups) return null;
  const [popularGroup, destinationsGroup, experiencesGroup] = toursNav.groups;

  return (
    <div className="grid grid-cols-3 w-165">
      {/* ── Col 1: Popular Tours ── */}
      <div className="px-4 py-5">
        <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {popularGroup.title}
        </p>
        <div className="flex flex-col gap-0.5">
          {popularGroup.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
            >
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {item.label}
              </span>
              {item.description && (
                <span className="text-xs leading-snug text-muted-foreground">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Col 2: Destinations (with left divider) ── */}
      <div className="border-l border-border px-4 py-5">
        <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {destinationsGroup.title}
        </p>
        <div className="flex flex-col gap-0.5">
          {destinationsGroup.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Col 3: Experiences (with left divider) ── */}
      <div className="border-l border-border px-4 py-5">
        <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {experiencesGroup.title}
        </p>
        <div className="flex flex-col gap-0.5">
          {experiencesGroup.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Generic single-column dropdown (Transport / Charter / Travel Guide)
// ─────────────────────────────────────────────────────────────────────────────
function SingleColumnMenu({ navItem }) {
  if (!navItem?.groups) return null;

  return (
    <div className="min-w-60 py-2">
      {navItem.groups.map((group) => (
        <div key={group.title} className="px-2">
          <p className="mb-1.5 px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            {group.title}
          </p>
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
            >
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {item.label}
              </span>
              {item.description && (
                <span className="text-xs leading-snug text-muted-foreground">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Navbar
// ─────────────────────────────────────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname();
  const {
    isScrolled,
    setScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useUIStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  // ── Shared nav item style helpers ──
  const getNavItemClass = (isActive) =>
    cn(
      // Layout & shape
      "relative inline-flex items-center justify-center rounded-lg px-3 py-2",
      "text-sm font-medium transition-colors duration-200 cursor-pointer",
      // Color by state
      isActive
        ? isScrolled
          ? "text-primary bg-primary/8"
          : "text-white bg-white/15"
        : isScrolled
          ? "text-foreground/75 hover:text-foreground hover:bg-muted"
          : "text-white/80 hover:text-white hover:bg-white/10",
    );

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════ HEADER */}
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Background — separated to avoid backdrop-blur creating a stacking context */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isScrolled
              ? "bg-white/95 shadow-sm backdrop-blur-md dark:bg-slate-900/95"
              : "bg-transparent",
          )}
        />

        <nav className="container-lg relative z-10">
          {/* ── Top bar (md+): contact info + GTranslate ── */}
          <div
            className={cn(
              "hidden items-center justify-between h-10 md:flex",
              isScrolled
                ? "border-b border-b-gray-300/30"
                : "border-b border-b-gray-300/10",
            )}
          >
            <div className="flex items-center gap-8">
              <a
                href={`mailto:${APP_EMAIL}`}
                className={cn(
                  "flex items-end gap-1.5 text-sm transition-colors",
                  isScrolled
                    ? "text-gray-500 hover:text-gray-800"
                    : "text-white/60 hover:text-white/90",
                )}
              >
                <HugeiconsIcon
                  icon={MailReceive02Icon}
                  className="size-3.5 shrink-0"
                  strokeWidth={1.5}
                />
                {APP_EMAIL}
              </a>
              <a
                href={`tel:${APP_PHONE}`}
                className={cn(
                  "flex items-end gap-1.5 text-sm transition-colors",
                  isScrolled
                    ? "text-gray-500 hover:text-gray-800"
                    : "text-white/60 hover:text-white/90",
                )}
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  className="size-3.5 shrink-0"
                  strokeWidth={1.5}
                />
                {APP_PHONE}
              </a>
            </div>
            <GTranslate flag_size={28} flag_style="2d" />
          </div>

          {/* ── Main row: logo + nav + cta ── */}
          <div className="flex h-16 items-center justify-between md:h-17">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2.5"
              aria-label={APP_NAME}
            >
              <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-brand shadow-lg shadow-brand-500/25 transition-transform duration-300 group-hover:scale-105">
                <HugeiconsIcon
                  icon={Airplane01Icon}
                  className="size-4 text-white -rotate-45"
                  strokeWidth={2}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={cn(
                    "font-heading text-lg font-bold notranslate transition-colors duration-300",
                    isScrolled
                      ? "text-brand-700 dark:text-brand-300"
                      : "text-white",
                  )}
                >
                  Rinda
                </span>
                <span
                  className={cn(
                    "text-[10px] font-semibold tracking-[0.2em] notranslate transition-colors duration-300",
                    isScrolled
                      ? "text-gold-600 dark:text-gold-400"
                      : "text-gold-300",
                  )}
                >
                  TRAVEL
                </span>
              </div>
            </Link>

            {/* ── Desktop Mega Navigation (lg+) ── */}
            {/*
              We use `data-transparent` instead of inline style overrides
              so that globals.css can target trigger colors cleanly.
            */}
            <div
              className="hidden lg:flex items-center"
              data-transparent={!isScrolled ? "true" : "false"}
            >
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-1">
                  {MEGA_NAV.map((navItem) => {
                    const isActive =
                      navItem.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(navItem.href);

                    // Items that have a dropdown
                    if (navItem.groups) {
                      return (
                        <NavigationMenuItem key={navItem.href}>
                          {/*
                            We override the shadcn trigger with our own color classes.
                            The `!` prefix forces these over cva defaults via Tailwind's
                            important modifier (Tailwind v4 supports this natively).
                          */}
                          <NavigationMenuTrigger
                            className={cn(
                              // Remove cva's hardcoded height & rounding, apply ours
                              "h-auto! rounded-lg! px-3! py-2! text-sm! font-medium! cursor-pointer",
                              // Color
                              isActive
                                ? isScrolled
                                  ? "text-primary! bg-primary/8! hover:bg-primary/10!"
                                  : "text-white! bg-white/15! hover:bg-white/20!"
                                : isScrolled
                                  ? "text-foreground/75! hover:text-foreground! hover:bg-muted!"
                                  : "text-white/80! hover:text-white! hover:bg-white/10!",
                              // Ensure open-state also matches
                              "data-[state=open]:bg-muted/60!",
                            )}
                          >
                            {navItem.label}
                          </NavigationMenuTrigger>

                          <NavigationMenuContent className="p-0!">
                            {navItem.label === "Tours" ? (
                              <ToursMegaMenu />
                            ) : (
                              <SingleColumnMenu navItem={navItem} />
                            )}
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      );
                    }

                    // Plain link items (Home, About, Contact)
                    return (
                      <NavigationMenuItem key={navItem.href}>
                        <Link
                          href={navItem.href}
                          className={getNavItemClass(isActive)}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {navItem.label}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* ── Right: CTA + hamburger ── */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                id="navbar-cta-btn"
                className={cn(
                  "hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5",
                  "text-sm font-semibold transition-all duration-300",
                  "bg-gradient-brand text-white shadow-sm shadow-brand-500/30",
                  "hover:opacity-90 hover:-translate-y-px hover:shadow-md",
                )}
              >
                Book Now
              </Link>

              <button
                id="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
                aria-expanded={isMobileMenuOpen}
                className={cn(
                  "lg:hidden flex size-10 items-center justify-center rounded-xl",
                  "transition-colors duration-200 cursor-pointer",
                  isScrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10",
                )}
              >
                <HugeiconsIcon
                  icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon}
                  className="size-5"
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile slide-over */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
}
