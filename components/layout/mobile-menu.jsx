"use client";

// components/layout/mobile-menu.jsx
// Mobile slide-over — accordion navigation for Tours / Transport / Charter / Guide

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Airplane01Icon,
  Call02Icon,
  Cancel01Icon,
  WhatsappIcon,
  LineIcon,
  ArrowDown01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { MEGA_NAV, APP_PHONE, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/ui-store";

// ─── Small helper: a section label inside an accordion ───────────────────────
function GroupLabel({ children }) {
  return (
    <p className="px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </p>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MobileMenu
// ─────────────────────────────────────────────────────────────────────────────
export function MobileMenu({ isOpen }) {
  const { toggleMobileMenu } = useUIStore();
  const pathname = usePathname();

  // Track which accordion items are expanded (by navItem.label)
  const [expanded, setExpanded] = useState([]);

  // Lock body scroll while panel is visible
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Collapse all when panel closes
  useEffect(() => {
    if (!isOpen) setExpanded([]);
  }, [isOpen]);

  const toggle = (label) =>
    setExpanded((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );

  const isExpanded = (label) => expanded.includes(label);

  return (
    <>
      {/* ─── Backdrop ────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={toggleMobileMenu}
        className={cn(
          "fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* ─── Slide-over panel ────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="เมนูนำทาง"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-60 flex w-[320px] max-w-[92vw] flex-col lg:hidden",
          "bg-background shadow-2xl",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* ── Header ── */}
        <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-brand shadow-md shadow-brand-500/20">
              <HugeiconsIcon
                icon={Airplane01Icon}
                className="size-5 text-white -rotate-45"
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-brand-700 dark:text-brand-300 notranslate">
                Rinda
              </span>
              <span className="mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 notranslate">
                TRAVEL
              </span>
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            aria-label="ปิดเมนู"
            className="flex size-9 items-center justify-center rounded-xl text-foreground/60 transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
          >
            <HugeiconsIcon
              icon={Cancel01Icon}
              className="size-5"
              strokeWidth={2}
            />
          </button>
        </div>

        {/* ── Scrollable nav area ── */}
        <nav className="flex-1 overflow-y-auto">
          <ul role="list" className="py-2">
            {MEGA_NAV.map((navItem) => {
              const isActive =
                navItem.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(navItem.href);

              const hasChildren = navItem.groups?.length > 0;
              const open = isExpanded(navItem.label);

              // ── Simple nav link (no children) ──────────────────────────
              if (!hasChildren) {
                return (
                  <li key={navItem.href}>
                    <Link
                      href={navItem.href}
                      onClick={toggleMobileMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between px-5 py-3.5 text-sm font-medium",
                        "border-b border-border/40 transition-colors",
                        isActive
                          ? "text-primary bg-primary/5"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted/40",
                      )}
                    >
                      {navItem.label}
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </li>
                );
              }

              // ── Accordion item (has children) ───────────────────────────
              return (
                <li key={navItem.href} className="border-b border-border/40">
                  {/* Trigger */}
                  <button
                    onClick={() => toggle(navItem.label)}
                    aria-expanded={open}
                    className={cn(
                      "flex w-full items-center justify-between px-5 py-3.5 text-sm font-medium",
                      "transition-colors cursor-pointer",
                      open
                        ? "text-primary bg-primary/5"
                        : isActive
                          ? "text-primary"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted/40",
                    )}
                  >
                    <span>{navItem.label}</span>
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      className={cn(
                        "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                        open && "rotate-180 text-primary",
                      )}
                      strokeWidth={2}
                    />
                  </button>

                  {/* Expandable content */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      {/* Sub-groups */}
                      {navItem.groups.map((group) => (
                        <div key={group.title} className="px-3 pb-2">
                          <GroupLabel>{group.title}</GroupLabel>
                          <ul className="mt-0.5 flex flex-col gap-0.5">
                            {group.items.map((item) => {
                              const subActive =
                                pathname === item.href ||
                                pathname.startsWith(item.href + "?");
                              return (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={toggleMobileMenu}
                                    className={cn(
                                      "flex items-center rounded-xl px-3 py-2 text-sm transition-colors",
                                      subActive
                                        ? "font-medium text-primary bg-primary/8"
                                        : "text-foreground/70 hover:text-foreground hover:bg-muted/60",
                                    )}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}

                      {/* Bottom breathing room */}
                      <div className="h-3" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Footer: contact links ── */}
        <div className="shrink-0 border-t border-border px-5 py-4 flex flex-col gap-3">
          <a
            href={`tel:${APP_PHONE}`}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <HugeiconsIcon
              icon={Call02Icon}
              className="size-4 shrink-0"
              strokeWidth={1.5}
            />
            {APP_PHONE}
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary notranslate"
          >
            <HugeiconsIcon
              icon={WhatsappIcon}
              className="size-4 shrink-0"
              strokeWidth={1.5}
            />
            WhatsApp
          </a>
          <a
            href={SOCIAL_LINKS.line}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary notranslate"
          >
            <HugeiconsIcon
              icon={LineIcon}
              className="size-4 shrink-0"
              strokeWidth={1.5}
            />
            LINE
          </a>
        </div>

        {/* ── CTA button ── */}
        <div className="shrink-0 px-5 pb-8 pt-3">
          <Link
            href="/contact"
            onClick={toggleMobileMenu}
            className="flex w-full items-center justify-center rounded-full bg-gradient-brand py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-opacity hover:opacity-90"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
