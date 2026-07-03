// components/layout/footer.jsx
// Premium Footer สำหรับ Rinda Travel

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Airplane01Icon,
  Call02Icon,
  Mail01Icon,
  Location01Icon,
  Facebook01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_EMAIL,
  APP_PHONE,
  SOCIAL_LINKS,
} from "@/lib/constants";

const footerLinks = {
  Service: [
    { label: "All tour packages", href: "/tours" },
    { label: "Promotions", href: "/promotions" },
    { label: "Services", href: "/services" },
    { label: "Private tours", href: "/tours?type=private" },
    { label: "Honeymoon tours", href: "/tours?tag=honeymoon" },
  ],
  About: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/privacy-policy#cookies" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-lg py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-brand-500/30 transition-transform">
                <HugeiconsIcon
                  icon={Airplane01Icon}
                  className="w-5 h-5 text-white -rotate-45"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="font-heading font-bold text-xl text-white leading-none notranslate">
                  {APP_NAME}
                </p>
                <p className="text-xs text-gold-400 tracking-[0.2em] mt-0.5 notranslate">
                  TRAVEL & TOURS
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {APP_DESCRIPTION}
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <a
                href={`tel:${APP_PHONE}`}
                className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors group"
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  className="w-4 h-4 text-brand-400 shrink-0"
                  strokeWidth={1.5}
                />
                <span>{APP_PHONE}</span>
              </a>
              <a
                href={APP_EMAIL}
                className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors"
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  className="w-4 h-4 text-brand-400 shrink-0"
                  strokeWidth={1.5}
                />
                <span>{APP_EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <HugeiconsIcon
                  icon={Location01Icon}
                  className="w-4 h-4 text-brand-400 shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="text-slate-400">
                  31/1, Moo 6, Phra Baramee Road, Patong Subdistrict, Kathu
                  District, Phuket 83150, Thailand
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* Whatsapp */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500/80 flex items-center justify-center transition-all duration-200"
                aria-label="Whatsapp"
              >
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  className="w-4 h-4"
                  strokeWidth={1.5}
                />
              </a>
              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-800 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <HugeiconsIcon
                  icon={Facebook01Icon}
                  className="w-4 h-4"
                  strokeWidth={1.5}
                />
              </a>
              {/* LINE */}
              <a
                href={SOCIAL_LINKS.line}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#06C755] flex items-center justify-center transition-all duration-200"
                aria-label="LINE Official"
              >
                <span className="text-[10px] font-bold text-white">LINE</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-3">
            <div className="grid grid-cols-2 md:flex md:flex-nowrap md:justify-center md:items-start gap-8">
              {/* Link Columns */}
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="space-y-4 md:flex-1 md:max-w-50">
                  <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
                    {title}
                  </h3>
                  <ul className="space-y-2.5" role="list">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-accent-foreground transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-lg py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              © {currentYear} {APP_NAME}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Enjoy your trip.<span className="text-red-400">♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
