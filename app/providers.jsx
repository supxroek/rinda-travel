"use client";

// app/providers.jsx
// Global Providers wrapper — TanStack Query + Sonner Toaster

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { getQueryClient } from "@/lib/query-client";

export function Providers({ children }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={4000}
        toastOptions={{
          style: {
            fontFamily: "var(--font-sans)",
          },
        }}
      />
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
