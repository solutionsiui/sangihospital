"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { searchSite, type SearchResultItem } from "@/lib/search-index";

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20 20L16.5 16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeaderSearchFallback() {
  return (
    <button
      type="button"
      aria-label="Search"
      className="header-search__trigger text-white transition-opacity hover:opacity-80"
    >
      <SearchIcon />
    </button>
  );
}

export default function HeaderSearch() {
  const router = useRouter();
  const dialogTitleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = searchSite(query);
  const hasQuery = query.trim().length > 0;

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const openSearch = useCallback(() => {
    setIsOpen(true);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleShortcut = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
        setActiveIndex(0);
      }

      if (event.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [closeSearch]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const navigateTo = useCallback(
    (item: SearchResultItem) => {
      closeSearch();
      router.push(item.href);
    },
    [closeSearch, router],
  );

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (results.length === 0) return;
      setActiveIndex((index) => (index + 1) % results.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (results.length === 0) return;
      setActiveIndex((index) => (index - 1 + results.length) % results.length);
      return;
    }

    if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      navigateTo(results[activeIndex]);
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Search"
        aria-expanded={isOpen}
        aria-controls="header-search-dialog"
        className="header-search__trigger text-white transition-opacity hover:opacity-80"
        onClick={openSearch}
      >
        <SearchIcon />
      </button>

      <div
        className={`header-search__overlay${isOpen ? " is-open" : ""}`}
        onClick={closeSearch}
        aria-hidden={!isOpen}
      />

      <div
        id="header-search-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogTitleId}
        className={`header-search__dialog${isOpen ? " is-open" : ""}`}
      >
        <div className="header-search__panel">
          <h2 id={dialogTitleId} className="sr-only">
            Search Sangi Hospital
          </h2>

          <div className="header-search__input-wrap">
            <Search
              className="header-search__input-icon"
              size={20}
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Search services, specialities, pages..."
              className="header-search__input font-body"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <button
              type="button"
              className="header-search__close"
              aria-label="Close search"
              onClick={closeSearch}
            >
              <X size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          <div className="header-search__body">
            {!hasQuery ? (
              <p className="header-search__hint font-body">
                Try searching for{" "}
                <button
                  type="button"
                  className="header-search__hint-link"
                  onClick={() => setQuery("emergency")}
                >
                  emergency
                </button>
                ,{" "}
                <button
                  type="button"
                  className="header-search__hint-link"
                  onClick={() => setQuery("cardiology")}
                >
                  cardiology
                </button>
                , or{" "}
                <button
                  type="button"
                  className="header-search__hint-link"
                  onClick={() => setQuery("appointment")}
                >
                  appointment
                </button>
                . Press{" "}
                <kbd className="header-search__kbd">Ctrl</kbd>+
                <kbd className="header-search__kbd">K</kbd> anytime.
              </p>
            ) : results.length > 0 ? (
              <ul className="header-search__results" role="listbox">
                {results.map((item, index) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`header-search__result font-body${
                        index === activeIndex ? " is-active" : ""
                      }`}
                      onClick={closeSearch}
                      onMouseEnter={() => setActiveIndex(index)}
                      role="option"
                      aria-selected={index === activeIndex}
                    >
                      <span className="header-search__result-label">
                        {item.label}
                      </span>
                      <span className="header-search__result-meta">
                        {item.category}
                      </span>
                      <span className="header-search__result-text">
                        {item.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="header-search__empty font-body">
                No results for &ldquo;{query.trim()}&rdquo;. Try a service name,
                speciality, or page title.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
