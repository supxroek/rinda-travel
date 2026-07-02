// hooks/use-debounce.js
// Custom hook สำหรับ debounce ค่า (ใช้กับ search input)

"use client";

import { useState, useEffect } from "react";

/**
 * Debounce a value by a specified delay
 * @template T
 * @param {T} value - The value to debounce
 * @param {number} delay - Delay in milliseconds (default: 500)
 * @returns {T} The debounced value
 *
 * @example
 * const debouncedSearch = useDebounce(searchQuery, 400)
 */
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
