// lib/query-client.js
// TanStack Query global configuration

import { QueryClient } from "@tanstack/react-query";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // ไม่ refetch เมื่อ window focus ใน production
        refetchOnWindowFocus: process.env.NODE_ENV === "development",
        // Cache 5 นาที
        staleTime: 5 * 60 * 1000,
        // Error retry 1 ครั้ง
        retry: 1,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
      mutations: {
        // ไม่ retry mutation
        retry: false,
      },
    },
  });
}

// Browser singleton
let browserQueryClient = undefined;

export function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: สร้างใหม่ทุกครั้ง
    return makeQueryClient();
  }
  // Browser: ใช้ singleton
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}
