"use client";

// components/layout/mobile-menu.jsx
// Mobile slide-in navigation menu

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Airplane01Icon, Call02Icon } from "@hugeicons/core-free-icons";
import { NAV_LINKS, APP_NAME, APP_PHONE, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Cancel01Icon } from "@hugeicons/core-free-icons/index";
import { useUIStore } from "@/stores/ui-store";
import { WhatsappIcon } from "@hugeicons/core-free-icons/index";
import { LineIcon } from "@hugeicons/core-free-icons/index";

/**
 * @param {{ isOpen: boolean }} props
 */
export function MobileMenu({ isOpen }) {
  const { toggleMobileMenu } = useUIStore();
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-75 lg:hidden",
          "bg-white dark:bg-slate-900 shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="เมนูนำทาง"
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between gap-3 px-6 pt-6 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-brand-500/25">
              <HugeiconsIcon
                icon={Airplane01Icon}
                className="w-5 h-5 text-white -rotate-45"
                strokeWidth={2}
              />
            </div>
            <div>
              <p className="font-heading font-bold text-brand-700 dark:text-brand-300 leading-none notranslate">
                Rinda
              </p>
              <p className="text-xs font-bold text-gold-600 dark:text-gold-400 tracking-widest mt-0.5 notranslate">
                TRAVEL
              </p>
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            className={cn(
              "lg:hidden w-10 h-10 rounded-xl flex items-center justify-center",
              "transition-all duration-200 hover:bg-accent/10 cursor-pointer",
            )}
          >
            <HugeiconsIcon
              icon={Cancel01Icon}
              className="w-5 h-5 text-black"
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1" role="list">
            {NAV_LINKS.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl text-sm font-medium",
                      "transition-all duration-200",
                      "animate-slide-up",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted",
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="px-6 py-4 border-t border-border space-y-3">
          <a
            href={`tel:${APP_PHONE}`}
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <HugeiconsIcon
              icon={Call02Icon}
              className="w-4 h-4 shrink-0"
              strokeWidth={1.5}
            />
            <span>{APP_PHONE}</span>
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors notranslate"
          >
            <HugeiconsIcon
              icon={WhatsappIcon}
              className="w-4 h-4 shrink-0"
              strokeWidth={1.5}
            />
            <span>Whatsapp</span>
          </a>
          <a
            href={SOCIAL_LINKS.line}
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors notranslate"
          >
            <HugeiconsIcon
              icon={LineIcon}
              className="w-4 h-4 shrink-0"
              strokeWidth={1.5}
            />
            <span>Line</span>
          </a>
        </div>

        {/* CTA */}
        <div className="px-6 pb-8 pt-3">
          <Link
            href="/contact"
            className={cn(
              "flex items-center justify-center w-full py-3 rounded-full",
              "bg-gradient-brand text-white font-semibold text-sm",
              "shadow-lg shadow-brand-500/30 hover:opacity-90 transition-opacity",
            )}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
