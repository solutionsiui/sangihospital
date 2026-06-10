"use client";

import { useEffect } from "react";

function scrollToServiceTarget() {
  const hash = window.location.hash;
  if (!hash) return;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;

  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

export default function ServicesHashScroll() {
  useEffect(() => {
    scrollToServiceTarget();
    window.addEventListener("hashchange", scrollToServiceTarget);
    return () => window.removeEventListener("hashchange", scrollToServiceTarget);
  }, []);

  return null;
}
