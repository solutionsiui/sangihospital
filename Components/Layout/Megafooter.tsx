import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  megaFooterColumns,
  megaFooterLegalLinks,
  megaFooterSocial,
  megaFooterUtilityLinks,
} from "./megafooterContent";
import MegafooterScrollTop from "./MegafooterScrollTop";
import MegafooterSubscribe from "./MegafooterSubscribe";
import "./megafooter.css";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 8.5H16V5.5H13.5C11.57 5.5 10 7.07 10 9V11H7V14H10V22H13V14H15.5L16 11H13V9C13 8.72 13.22 8.5 13.5 8.5Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.3 4H20.5L14.1 11.2L21.7 20H15.9L11.2 14.5L6.1 20H2.9L9.7 12.2L2.4 4H8.3L12.6 8.9L17.3 4ZM16.3 18.2H17.9L7.9 5.7H6.1L16.3 18.2Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.06 5 12 5 12 5s-6.06 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.94 19 12 19 12 19s6.06 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.4-4.8ZM10 15.5V8.5l5.2 3.5L10 15.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7C3 4.8 4.8 3 7 3ZM12 8.2A3.8 3.8 0 1 0 12 15.8A3.8 3.8 0 1 0 12 8.2ZM17.5 6.7A1 1 0 1 0 17.5 8.7A1 1 0 1 0 17.5 6.7Z" />
    </svg>
  );
}

const socialIconMap = {
  Facebook: FacebookIcon,
  X: XIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
} as const;

export default function Megafooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="megafooter">
      <div className="megafooter__inner">
        <div className="megafooter__grid">
          {megaFooterColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="megafooter__column">
              {column.sections.map((section) => (
                <div key={section.title} className="megafooter__section">
                  <h3 className="megafooter__section-title">{section.title}</h3>
                  <ul className="megafooter__list">
                    {section.links.map((link) => (
                      <li key={`${section.title}-${link.label}`}>
                        <Link href={link.href} className="megafooter__link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {section.viewAll ? (
                    <Link href={section.viewAll.href} className="megafooter__view-all">
                      {section.viewAll.label}
                    </Link>
                  ) : null}
                </div>
              ))}

              {columnIndex === megaFooterColumns.length - 1 ? (
                <MegafooterSubscribe />
              ) : null}
            </div>
          ))}
        </div>

        <div className="megafooter__utility">
          <div className="megafooter__utility-left">
            <Link href="/" className="megafooter__logo">
              <Image
                src="/assets/images/icons/logo.png"
                alt={siteConfig.name}
                width={150}
                height={48}
                className="megafooter__logo-image"
              />
            </Link>

            <nav aria-label="Footer utility" className="megafooter__utility-nav">
              {megaFooterUtilityLinks.map((link) => (
                <Link key={link.label} href={link.href} className="megafooter__utility-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="megafooter__social" aria-label="Social media">
            {megaFooterSocial.map((social) => {
              const Icon = socialIconMap[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="megafooter__social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="megafooter__legal">
          <nav aria-label="Legal links" className="megafooter__legal-nav">
            {megaFooterLegalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="megafooter__legal-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="megafooter__copyright" suppressHydrationWarning>
            Copyright © {currentYear} {siteConfig.name} All Rights Reserved.
          </p>
        </div>
      </div>

      <MegafooterScrollTop />
    </footer>
  );
}
