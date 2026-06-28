import { Link } from "react-router-dom";
import aboutMahsa from "../assets/about-mahsa.png";

function PinDots() {
  return (
    <div className="flex gap-3">
      {[0, 1, 2, 3].map((dot) => (
        <span
          key={dot}
          className="size-2.5 rounded-[3px] bg-white/70"
          aria-hidden
        />
      ))}
    </div>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 1.5c.4 4.8 2.2 6.6 7 7-4.8.4-6.6 2.2-7 7-.4-4.8-2.2-6.6-7-7 4.8-.4 6.6-2.2 7-7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 18"
      fill="none"
      className={className}
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M2 11C12 2 22 2 32 9s20 7 30 0 20-7 30 0 20 7 26 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      className={`block h-6 w-20 rotate-2 bg-brand/15 backdrop-blur-[1px] ${className}`}
      style={{
        maskImage:
          "repeating-linear-gradient(90deg, #000 0 6px, transparent 6px 8px)",
        WebkitMaskImage:
          "repeating-linear-gradient(90deg, #000 0 6px, transparent 6px 8px)",
      }}
      aria-hidden
    />
  );
}

function AvailableBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3.5 py-1.5 text-[13px] font-medium text-brand shadow-[0_2px_10px_rgba(100,57,255,0.12)]">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60" />
        <span className="relative inline-flex size-2 rounded-full bg-brand" />
      </span>
      Available for new projects
    </span>
  );
}

function Polaroid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-xl bg-white p-3 shadow-[0_12px_40px_rgba(0,0,0,0.14)] ${className}`}
    >
      <Tape className="absolute -top-3 left-1/2 -translate-x-1/2" />
      <img
        src={aboutMahsa}
        alt="Mahsa"
        className="aspect-[3/4] w-full rounded-md object-cover object-top"
      />
      <p className="px-1 pt-2.5 pb-1 text-[13px] leading-4 text-text-muted">
        Hi, that&apos;s me — nice to meet you :)
      </p>
    </div>
  );
}

function IntroCard({ className = "" }: { className?: string }) {
  return (
    <article
      className={`relative rounded-2xl bg-brand p-7 text-white shadow-[0_12px_40px_rgba(100,57,255,0.28)] sm:p-8 ${className}`}
    >
      <Star className="absolute -top-4 -right-3 size-9 rotate-12 text-brand drop-shadow-[0_2px_6px_rgba(100,57,255,0.35)]" />
      <PinDots />
      <p className="mt-6 text-[24px] leading-[1.35] font-medium tracking-[-0.5px] sm:text-[30px] sm:leading-[1.32] sm:tracking-[-0.7px]">
        Hi, I&apos;m <span className="font-bold">Mahsa</span> — a UI/UX designer
        who turns{" "}
        <span className="relative inline-block">
          confusing workflows
          <Squiggle className="absolute -bottom-2 left-0 h-2.5 w-full text-white/60" />
        </span>{" "}
        into simple, human experiences.
      </p>
    </article>
  );
}

function BioCard({ className = "" }: { className?: string }) {
  return (
    <article
      className={`rounded-2xl border border-divider bg-hero-bg p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-7 ${className}`}
    >
      <p className="text-[15px] leading-[24px] text-text-muted sm:text-[17px] sm:leading-[27px]">
        Background in <span className="font-medium text-black">Computer Science</span>{" "}
        + UX design. Currently crafting digital products that look good and{" "}
        <span className="font-medium text-black">genuinely help people</span> in
        their everyday work.
      </p>
    </article>
  );
}

function WorkCta({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/work"
      className={`group inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_6px_20px_rgba(100,57,255,0.25)] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      View my work
      <span className="transition-transform group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </Link>
  );
}

export function HomePage() {
  return (
    <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden px-6 py-12 sm:px-12 sm:py-20">
      {/* Soft brand backdrop */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-brand/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1034px]">
        {/* Mobile / small screens: clean stacked layout */}
        <div className="flex flex-col gap-6 lg:hidden">
          <AvailableBadge />
          <IntroCard />
          <div className="flex items-start gap-4">
            <Polaroid className="w-[150px] shrink-0 -rotate-2" />
            <BioCard className="rotate-1" />
          </div>
          <WorkCta />
        </div>

        {/* Large screens: close, two-column playful collage */}
        <div className="relative hidden min-h-[620px] grid-cols-[470px_410px] justify-center gap-14 lg:grid">
          <div className="order-2 relative flex flex-col items-center gap-7 pt-2">
            <div className="w-[196px] animate-float-soft">
              <Polaroid className="-rotate-2" />
            </div>

            <BioCard className="w-full -rotate-1 hover-wiggle [--wiggle-base:-1deg]" />
          </div>

          <div className="order-1 relative flex flex-col items-start gap-6 pt-12">
            <AvailableBadge />
            <IntroCard className="w-full rotate-1 hover-wiggle [--wiggle-base:1deg]" />
            <WorkCta className="mt-2 ml-6 animate-float-soft" />
          </div>

          {/* Scattered playful shapes */}
          <Star className="absolute top-[28px] left-[455px] size-7 rotate-6 animate-spin-slow text-brand/80" />
          <span
            className="absolute right-[28px] bottom-[100px] size-4 rotate-45 rounded-[3px] bg-brand/70"
            aria-hidden
          />
          <span
            className="absolute top-[22px] right-[120px] size-5 rotate-45 border-[3px] border-brand/50"
            aria-hidden
          />
          <Squiggle className="absolute bottom-[92px] left-[90px] h-4 w-24 -rotate-6 text-brand/40" />
          <span
            className="absolute right-[250px] bottom-[36px] size-3 rounded-full bg-black/70"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
