// stores/filter-store.js
// Zustand store สำหรับ Tour filter state

import { create } from "zustand";

const defaultFilters = {
  search: "",
  category: "",
  destination: "",
  minPrice: "",
  maxPrice: "",
  duration: "",
  difficulty: "",
  sortBy: "newest", // newest | popular | price_asc | price_desc
  page: 1,
};

export const useFilterStore = create((set, get) => ({
  filters: { ...defaultFilters },

  // Update a single filter
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
        // Reset to page 1 when any filter changes (except page itself)
        ...(key !== "page" ? { page: 1 } : {}),
      },
    })),

  // Update multiple filters at once
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters, page: 1 },
    })),

  // Go to page
  setPage: (page) =>
    set((state) => ({
      filters: { ...state.filters, page },
    })),

  // Reset all filters
  resetFilters: () => set({ filters: { ...defaultFilters } }),

  // Get active filter count (ไม่นับ sort และ page)
  getActiveFilterCount: () => {
    const { filters } = get();
    const excluded = ["sortBy", "page"];
    return Object.entries(filters).filter(
      ([key, value]) => !excluded.includes(key) && value !== "",
    ).length;
  },

  // Build query string for API
  buildQueryString: () => {
    const { filters } = get();
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        params.set(key, String(value));
      }
    });
    return params.toString();
  },
}));
