import Image from "next/image";
import Link from "next/link";
import ServicesMegaMenu from "@/Components/Layout/ServicesMegaMenu";
import SpecialitiesMegaMenu from "@/Components/Layout/SpecialitiesMegaMenu";
import HospitalsMegaMenu from "@/Components/Layout/HospitalsMegaMenu";
import PatientCornerMegaMenu from "@/Components/Layout/PatientCornerMegaMenu";
import MobileMenu from "@/Components/Layout/MobileMenu";
import ClientOnly from "@/Components/ui/ClientOnly";
import { mainNavItems } from "@/lib/navigation";

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

function MobileMenuFallback() {
  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-label="Open menu"
        aria-expanded={false}
      >
        <svg
          className="mobile-menu__toggle-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 7H20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 17H14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Header() {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="site-header__inner mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/assets/images/icons/logo.png"
            alt="Sangi Hospital"
            width={180}
            height={56}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
          {mainNavItems.map((item) =>
            item.megaMenu ? (
              <div
                key={item.label}
                className="header-nav-item header-nav-item--mega"
              >
                <Link
                  href={item.href}
                  className="header-nav-link font-body flex items-center gap-1.5"
                >
                  {item.label}
                  <ChevronDownIcon />
                </Link>

                <ClientOnly>
                  {item.megaMenu === "services" ? (
                    <ServicesMegaMenu />
                  ) : item.megaMenu === "hospitals" ? (
                    <HospitalsMegaMenu />
                  ) : item.megaMenu === "specialities" ? (
                    <SpecialitiesMegaMenu />
                  ) : (
                    <PatientCornerMegaMenu />
                  )}
                </ClientOnly>
              </div>
            ) : item.children ? (
              <div key={item.label} className="header-nav-item">
                <Link
                  href={item.href}
                  className="header-nav-link font-body flex items-center gap-1.5"
                >
                  {item.label}
                  <ChevronDownIcon />
                </Link>

                <div className="header-nav-dropdown">
                  <div className="header-nav-dropdown__panel">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="header-nav-dropdown__link font-body"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="header-nav-link font-body"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="text-white transition-opacity hover:opacity-80"
          >
            <SearchIcon />
          </button>

          <Link
            href="/appointment"
            className="btn-gradient-primary hidden rounded-full px-6 py-3 font-body text-sm font-semibold text-white sm:inline-block"
          >
            Make An Appointment
          </Link>

          <ClientOnly fallback={<MobileMenuFallback />}>
            <MobileMenu />
          </ClientOnly>
        </div>
      </div>
    </header>
  );
}
