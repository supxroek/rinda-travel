// hooks/use-media-query.js
// Custom hook สำหรับ responsive breakpoints

"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook for responsive media queries
 * @param {string} query - CSS media query string
 * @returns {boolean}
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)")
 * const isDesktop = useMediaQuery("(min-width: 1024px)")
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // Set initial value
    setMatches(media.matches);

    // Listen for changes
    const listener = (event) => setMatches(event.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

// Shorthand hooks for common breakpoints (Tailwind v4 defaults)
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
