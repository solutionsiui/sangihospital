"use client";

import { useEffect } from "react";

function scrollToSpecialityTarget() {
  const hash = window.location.hash;

  if (!hash) return;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);

  if (!target) return;

  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

export default function SpecialitiesHashScroll() {
  useEffect(() => {
    scrollToSpecialityTarget();

    window.addEventListener("hashchange", scrollToSpecialityTarget);

    return () => {
      window.removeEventListener("hashchange", scrollToSpecialityTarget);
    };
  }, []);

  return null;
}
