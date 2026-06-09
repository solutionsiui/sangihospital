import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home 1", href: "/" },
      { label: "Home 2", href: "/home-2" },
    ],
  },
  {
    label: "Doctors",
    href: "/doctors",
    children: [
      { label: "All Doctors", href: "/doctors" },
      { label: "Doctor Details", href: "/doctors/details" },
    ],
  },
  { label: "About Us", href: "/about" },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Services", href: "/services" },
      { label: "Departments", href: "/departments" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Products", href: "/shop" },
      { label: "Cart", href: "/shop/cart" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog Grid", href: "/blog" },
      { label: "Blog Details", href: "/blog/details" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

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

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-5 lg:px-10">
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
          {navItems.map((item) =>
            item.children ? (
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

        <div className="flex shrink-0 items-center gap-5">
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
        </div>
      </div>
    </header>
  );
}
