import { ClickableImage } from "./ClickableImage";

export type ExpertModeCallout = {
  number: number;
  title: string;
  text: string;
  accent: "orange" | "lavender";
};

export type ExpertModeRefinementSectionData = {
  title: string;
  intro: string;
  beforeImage: { src: string; alt: string; label: string };
  afterImage: { src: string; alt: string; label: string };
  callouts: ExpertModeCallout[];
};

const accentStyles = {
  orange: {
    badge: "border-[#F5A623]/40 bg-[#FFF0E0] text-[#C97D10]",
    card: "border-[#F5A623]/25 bg-[#FFF8F3]",
  },
  lavender: {
    badge: "border-[#8B6FD4]/40 bg-[#F0EBFF] text-[#6B4FB8]",
    card: "border-[#8B6FD4]/25 bg-[#F8F5FF]",
  },
};

type ComparisonPanelProps = {
  label: string;
  src: string;
  alt: string;
};

function ComparisonPanel({ label, src, alt }: ComparisonPanelProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3">
      <p className="text-[12px] leading-[18px] font-medium text-black/60 sm:text-[13px] sm:leading-[19px]">
        {label}
      </p>
      <div className="overflow-hidden rounded-lg border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <ClickableImage
          src={src}
          alt={alt}
          ariaLabel={label}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

type ExpertModeRefinementSectionProps = ExpertModeRefinementSectionData;

export function ExpertModeRefinementSection({
  title,
  intro,
  beforeImage,
  afterImage,
  callouts,
}: ExpertModeRefinementSectionProps) {
  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      <div className="flex w-full flex-col gap-2">
        <h3 className="text-[20px] leading-[26px] font-medium tracking-[-0.4px] text-black sm:text-[24px] sm:leading-[30px] sm:tracking-[-0.48px]">
          {title}
        </h3>
        <p className="text-[13px] leading-[19px] text-text-muted sm:text-[14px] sm:leading-[20px]">
          {intro}
        </p>
      </div>

      <article className="flex w-full flex-col gap-6 rounded-2xl border border-black/[0.06] bg-hero-bg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:gap-8 sm:p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <ComparisonPanel
            label={beforeImage.label}
            src={beforeImage.src}
            alt={beforeImage.alt}
          />
          <ComparisonPanel
            label={afterImage.label}
            src={afterImage.src}
            alt={afterImage.alt}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {callouts.map((callout) => (
            <div
              key={callout.number}
              className={`flex flex-col gap-2 rounded-xl border p-4 shadow-[0_1px_6px_rgba(0,0,0,0.03)] ${accentStyles[callout.accent].card}`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] leading-none font-semibold ${accentStyles[callout.accent].badge}`}
                  aria-hidden="true"
                >
                  {callout.number}
                </span>
                <h4 className="text-[13px] leading-[18px] font-medium text-black sm:text-[14px] sm:leading-[20px]">
                  {callout.title}
                </h4>
              </div>
              <p className="text-[12px] leading-[17px] text-text-muted sm:text-[13px] sm:leading-[19px]">
                {callout.text}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
