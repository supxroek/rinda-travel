// app/(public)/layout.js
// Public Website Layout — Wraps all public pages with Navbar + Footer

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}
