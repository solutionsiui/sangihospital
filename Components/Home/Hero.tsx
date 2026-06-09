import Image from "next/image";
import { ArrowDown, Play, Star } from "lucide-react";

const HERO_VIDEO = "/assets/videos/home/herobg.mp4";
const HERO_POSTER = "/assets/images/home/hero_bg_1.jpeg";
const doctorAvatars = [
  { initials: "DR", color: "bg-[#132573]" },
  { initials: "JM", color: "bg-[#1e3a9a]" },
  { initials: "AL", color: "bg-[#4a6fd4]" },
];

const doctorPhotos = [
  { src: "/assets/images/avatars/doctor-1.jpg", alt: "Doctor" },
  { src: "/assets/images/avatars/doctor-2.jpg", alt: "Doctor" },
  { src: "/assets/images/avatars/doctor-3.jpg", alt: "Doctor" },
  { src: "/assets/images/avatars/doctor-4.jpg", alt: "Doctor" },
  { src: "/assets/images/avatars/doctor-5.jpg", alt: "Doctor" },
];

const patientPhotos = [
  { src: "/assets/images/avatars/patient-1.jpg", alt: "Satisfied patient" },
  { src: "/assets/images/avatars/patient-2.jpg", alt: "Satisfied patient" },
  { src: "/assets/images/avatars/patient-3.jpg", alt: "Satisfied patient" },
  { src: "/assets/images/avatars/patient-4.jpg", alt: "Satisfied patient" },
  { src: "/assets/images/avatars/patient-5.jpg", alt: "Satisfied patient" },
];

function AvatarStack({
  avatars,
  variant = "light",
}: {
  avatars: { initials: string; color: string }[];
  variant?: "light" | "dark";
}) {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar) => (
        <div
          key={avatar.initials}
          className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-[10px] font-semibold text-white ${avatar.color} ${
            variant === "light" ? "border-white" : "border-foreground"
          }`}
        >
          {avatar.initials}
        </div>
      ))}
    </div>
  );
}

function DoctorShieldAvatarStack() {
  return (
    <div className="doctor-shield-badge__avatars">
      <div className="doctor-shield-badge__avatars-track">
        {doctorPhotos.map((photo, index) => {
          const isCenter = index === 2;

          return (
            <div
              key={photo.src}
              className={`doctor-shield-badge__avatar ${
                isCenter ? "doctor-shield-badge__avatar--center" : ""
              }`}
              style={{ zIndex: isCenter ? 10 : 5 - Math.abs(index - 2) }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={isCenter ? "34px" : "28px"}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DoctorsStatBadge() {
  return (
    <div className="doctor-shield-badge absolute left-[58%] top-[42%] z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block xl:left-[56%] xl:top-[44%]">
      <svg
        className="doctor-shield-badge__shape"
        viewBox="0 0 160 190"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M80 12 L134 34 L134 84 C134 118 80 168 80 168 C80 168 26 118 26 84 L26 34 Z"
          className="doctor-shield-badge__fill"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="doctor-shield-badge__content">
        <div className="doctor-shield-badge__inner">
          <DoctorShieldAvatarStack />
          <p className="doctor-shield-badge__count font-heading">870+</p>
          <p className="doctor-shield-badge__label font-body">Doctors</p>
        </div>
      </div>
    </div>
  );
}

function PremiumAvatarStack({ size = "md" }: { size?: "sm" | "md" }) {
  const dimensions = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const overlap = size === "sm" ? "-ml-2.5" : "-ml-3";

  return (
    <div className="flex items-center pl-0.5">
      {patientPhotos.map((photo, index) => (
        <div
          key={photo.src}
          className={`relative shrink-0 ${index === 0 ? "" : overlap} ${dimensions} overflow-hidden rounded-full border-[2.5px] border-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] ring-1 ring-black/5 transition-transform duration-300 hover:z-10 hover:scale-105`}
          style={{ zIndex: patientPhotos.length - index }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={size === "sm" ? "36px" : "44px"}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function StarRating({ size = "md" }: { size?: "sm" | "md" }) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`${starSize} fill-amber-400 text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function PatientSocialProof({ compact = false }: { compact?: boolean }) {
  const size = compact ? "sm" : "md";

  return (
    <div
      className={`flex items-center gap-4 ${
        compact ? "gap-3" : "gap-4"
      }`}
    >
      <div className="flex items-center gap-3">
        <PremiumAvatarStack size={size} />
        <StarRating size={size} />
      </div>

      <div className="h-9 w-px bg-white/30" aria-hidden="true" />

      <div className="font-body text-white">
        <p
          className={`font-bold leading-none tracking-tight ${
            compact ? "text-base" : "text-lg sm:text-xl"
          }`}
        >
          150K+
        </p>
        <p
          className={`mt-0.5 font-medium text-white/85 ${
            compact ? "text-[11px]" : "text-xs sm:text-sm"
          }`}
        >
          Satisfied Patients
        </p>
      </div>
    </div>
  );
}

function PatientsStatBadge() {
  return (
    <div className="absolute bottom-16 right-6 z-20 lg:bottom-20 lg:right-12 xl:right-20">
      <PatientSocialProof />
    </div>
  );
}

function PlayButton() {
  return (
    <button
      type="button"
      className="group flex items-center gap-4 text-white transition-opacity hover:opacity-90"
      aria-label="See how we work"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 transition-colors group-hover:border-white group-hover:bg-white/10">
        <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
      </span>
      <span className="font-body text-base font-medium sm:text-lg">
        See How We Works
      </span>
    </button>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-6 z-20 hidden items-center gap-3 lg:flex xl:left-10">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35">
        <ArrowDown className="h-4 w-4 text-white" aria-hidden="true" />
      </div>
      <p
        className="font-body text-xs font-medium tracking-[0.25em] text-white/80"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        SCROLL FOR MORE
      </p>
    </div>
  );
}

function HeroOverlay() {
  return (
    <div
      className="hero-overlay pointer-events-none absolute inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}

function MobileStatBadges() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-start gap-4 lg:hidden">
      <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
        <AvatarStack avatars={doctorAvatars} />
        <div>
          <p className="font-heading text-xl font-bold leading-none text-foreground">
            870+
          </p>
          <p className="font-body text-xs text-slate-600">Doctors</p>
        </div>
      </div>

      <PatientSocialProof compact />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_POSTER}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-[65%_center] lg:object-right"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <HeroOverlay />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[1400px] flex-col justify-center px-6 pb-28 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-white/90 sm:text-sm">
            Expert Medical Treatment
          </p>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            We Follow A Holistic Approach to Health care.
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-white/90 sm:text-lg">
            Protect your smile and keep it healthy, with the latest technology
            available in your neighbourhood.
          </p>

          <div className="mt-8 sm:mt-10">
            <PlayButton />
          </div>

          <MobileStatBadges />
        </div>
      </div>

      <DoctorsStatBadge />
      <PatientsStatBadge />
      <ScrollIndicator />
    </section>
  );
}
