"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M13.5 8.5H16V5.5H13.5C11.57 5.5 10 7.07 10 9V11H7V14H10V22H13V14H15.5L16 11H13V9C13 8.72 13.22 8.5 13.5 8.5Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M17.3 4H20.5L14.1 11.2L21.7 20H15.9L11.2 14.5L6.1 20H2.9L9.7 12.2L2.4 4H8.3L12.6 8.9L17.3 4ZM16.3 18.2H17.9L7.9 5.7H6.1L16.3 18.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7C3 4.8 4.8 3 7 3ZM12 8.2A3.8 3.8 0 1 0 12 15.8A3.8 3.8 0 1 0 12 8.2ZM17.5 6.7A1 1 0 1 0 17.5 8.7A1 1 0 1 0 17.5 6.7Z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 3C7.03 3 3 7.03 3 12C3 15.66 5.03 18.78 8 20.16C7.95 19.53 7.9 18.45 8.08 17.64C8.25 16.93 9.28 12.86 9.28 12.86C9.28 12.86 9 12.18 9 11.18C9 9.58 9.97 8.35 11.17 8.35C12.18 8.35 12.68 9.08 12.68 9.96C12.68 10.95 12.02 12.43 11.66 13.78C11.36 14.92 12.18 15.85 13.29 15.85C15.28 15.85 16.78 13.68 16.78 10.93C16.78 8.55 15.09 6.93 12.58 6.93C9.66 6.93 7.86 9.08 7.86 11.56C7.86 12.48 8.21 13.08 8.67 13.52C8.77 13.61 8.79 13.71 8.76 13.81C8.67 14.18 8.52 14.82 8.48 15.01C8.43 15.24 8.29 15.29 8.05 15.19C6.79 14.62 6 13.01 6 11.47C6 8.04 8.47 5.28 12.78 5.28C16.28 5.28 18.97 7.55 18.97 10.84C18.97 14.29 16.71 17.05 13.48 17.05C12.31 17.05 11.22 16.47 10.82 15.76C10.82 15.76 10.24 18.03 10.1 18.59C9.86 19.58 9.21 20.78 8.74 21.54C9.79 21.84 10.88 22 12 22C16.97 22 21 17.97 21 12C21 7.03 16.97 3 12 3Z" />
    </svg>
  );
}

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Refund", href: "/refund" },
  { label: "Help Center", href: "/help-center" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const footerResources = [
  { label: "Demos", href: "/demos" },
  { label: "Instructions", href: "/instructions" },
  { label: "Personal Meeting", href: "/personal-meeting" },
  { label: "Doctor List", href: "/doctors" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
];

function ScrollToTopButton() {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className="site-footer__scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container position-relative">
        <ScrollToTopButton />

        <div className="row g-4 g-lg-5 py-5 py-lg-6">
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="site-footer__logo d-inline-block">
              <Image
                src="/assets/images/icons/logo.png"
                alt="Sangi Hospital"
                width={180}
                height={56}
                className="h-11 w-auto"
              />
            </Link>

            <p className="site-footer__text mt-4 mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="d-flex align-items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="site-footer__social"
                >
                  <Icon aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h3 className="site-footer__heading font-heading">Links</h3>
            <ul className="site-footer__list list-unstyled mb-0">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="site-footer__link font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h3 className="site-footer__heading font-heading">Resources</h3>
            <ul className="site-footer__list list-unstyled mb-0">
              {footerResources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="site-footer__link font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h3 className="site-footer__heading font-heading">Office</h3>
            <p className="site-footer__text mb-4">
              America- 66 Brooklyn golden street 600
              <br />
              New York. USA
            </p>
            <a href="tel:+12126215896" className="site-footer__phone font-heading">
              +1 (212) 621-5896
            </a>
          </div>
        </div>

        <div className="site-footer__bottom row align-items-center py-4">
          <div className="col-md-6">
            <p className="site-footer__copyright font-body mb-0">
              Sangi Hospital © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link href="/privacy-policy" className="site-footer__bottom-link font-body">
              Privacy &amp; Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
