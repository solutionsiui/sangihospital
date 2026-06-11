"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type HeaderMegaNavItemProps = {
  label: string;
  href: string;
  children: ReactNode;
};

function ChevronDownIcon() {
  return (
    <svg
      className="h-3 w-3 opacity-80"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CLOSE_DELAY_MS = 300;

export default function HeaderMegaNavItem({
  label,
  href,
  children,
}: HeaderMegaNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearCloseTimer();
    setIsOpen(true);
  }, [clearCloseTimer]);

  const closeMenu = useCallback(() => {
    clearCloseTimer();
    setIsOpen(false);
  }, [clearCloseTimer]);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  const handleTriggerClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isOpen) {
      event.preventDefault();
      openMenu();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`header-nav-item header-nav-item--mega${
        isOpen ? " is-mega-open" : ""
      }`}
      onPointerEnter={openMenu}
      onPointerLeave={scheduleClose}
      onFocusCapture={openMenu}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <Link
        href={href}
        className="header-nav-link font-body"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={handleTriggerClick}
      >
        {label}
        <ChevronDownIcon />
      </Link>

      <div
        className="header-mega__slot"
        onPointerEnter={openMenu}
        onPointerLeave={scheduleClose}
      >
        {children}
      </div>
    </div>
  );
}
