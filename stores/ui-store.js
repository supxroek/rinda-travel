// stores/ui-store.js
// Zustand store สำหรับ UI state (modal, drawer, navigation)

import { create } from "zustand";

/**
 * @typedef {Object} UIState
 * @property {boolean} isMobileMenuOpen
 * @property {boolean} isSearchOpen
 * @property {string|null} activeModal
 * @property {boolean} isScrolled
 */

export const useUIStore = create((set) => ({
  // Mobile Menu
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Search
  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),

  // Modal
  activeModal: null,
  openModal: (modalId) => set({ activeModal: modalId }),
  closeModal: () => set({ activeModal: null }),

  // Navbar scroll state
  isScrolled: false,
  setScrolled: (value) => set({ isScrolled: value }),

  // Booking inquiry drawer
  isBookingDrawerOpen: false,
  selectedTourId: null,
  openBookingDrawer: (tourId) =>
    set({ isBookingDrawerOpen: true, selectedTourId: tourId }),
  closeBookingDrawer: () =>
    set({ isBookingDrawerOpen: false, selectedTourId: null }),
}));
