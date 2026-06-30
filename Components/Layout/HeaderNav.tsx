"use client";

import type { ReactNode } from "react";
import { HeaderNavProvider } from "@/Components/Layout/HeaderNavContext";

type HeaderNavProps = {
  children: ReactNode;
};

export default function HeaderNav({ children }: HeaderNavProps) {
  return (
    <HeaderNavProvider>
      <nav className="header-nav" aria-label="Main navigation">
        {children}
      </nav>
    </HeaderNavProvider>
  );
}
