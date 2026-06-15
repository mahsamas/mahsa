export type CaseStudyHeroMedia =
  | { type: "video"; src: string }
  | { type: "image"; src: string; alt?: string };

type CaseStudyHeroProps = {
  media?: CaseStudyHeroMedia;
  placeholderText?: string;
};

const heroMediaClassName =
  "block h-auto w-full max-h-[280px] bg-hero-bg object-contain sm:max-h-[300px] lg:max-h-[320px]";

export function CaseStudyHero({
  media,
  placeholderText = "Add project media",
}: CaseStudyHeroProps) {
  return (
    <section
      className="flex w-full shrink-0 items-center justify-center bg-hero-bg px-0 py-8"
      aria-label="Project media"
    >
      {media?.type === "video" ? (
        <video
          className={heroMediaClassName}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={media.src} />
        </video>
      ) : media?.type === "image" ? (
        <img
          src={media.src}
          alt={media.alt ?? ""}
          className={heroMediaClassName}
        />
      ) : (
        <div className="flex h-[240px] w-full items-center justify-center sm:h-[320px] lg:h-[399px]">
          <p className="text-[11px] leading-[16.5px] tracking-[2.2px] text-placeholder uppercase">
            {placeholderText}
          </p>
        </div>
      )}
    </section>
  );
}
