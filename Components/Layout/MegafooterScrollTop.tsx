"use client";

import { ArrowUp, Headphones } from "lucide-react";

export default function MegafooterScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="megafooter__float-actions" aria-label="Quick actions">
      <button
        type="button"
        className="megafooter__float-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
      <a
        href="/appointment"
        className="megafooter__float-btn megafooter__float-btn--support"
        aria-label="Book support or appointment"
      >
        <Headphones size={18} aria-hidden="true" />
      </a>
    </div>
  );
}
