import Link from "next/link";
import Image from "next/image";

type Breadcrumb = {
  label: string;
  href?: string;
};

type InnerHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string;
};

export default function InnerHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: InnerHeroProps) {
  return (
    <section className="inner-hero relative flex min-h-[340px] items-end overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
      )}

      <div
        className="inner-hero__overlay pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-12 pt-32 sm:px-8 lg:px-10 lg:pb-16">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 font-body text-sm text-white/70">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <span className="text-white/40" aria-hidden="true">
                      /
                    </span>
                  )}
                  {isLast || !crumb.href ? (
                    <span className="text-white">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 max-w-2xl font-body text-base text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
