import { caseStudySectionSubtitleClassName } from "./CaseStudySection";

export type UxImpactCard = {
  number: number;
  title: string;
  text: string;
  accent: "orange" | "lavender";
};

export type UxImpactGroup = {
  title?: string;
  cards: UxImpactCard[];
};

export type UxImpactSectionData = {
  title?: string;
  intro?: string;
  sectionLabel?: string;
  groups: UxImpactGroup[];
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

type UxImpactSectionProps = UxImpactSectionData;

function ImpactCard({ number, title, text, accent }: UxImpactCard) {
  return (
    <article
      className={`flex h-full flex-col gap-2 rounded-xl border p-4 shadow-[0_1px_6px_rgba(0,0,0,0.03)] sm:p-5 ${accentStyles[accent].card}`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] leading-none font-semibold ${accentStyles[accent].badge}`}
          aria-hidden="true"
        >
          {number}
        </span>
        <h4 className="text-[14px] leading-[20px] font-medium text-black">
          {title}
        </h4>
      </div>
      <p className="text-[13px] leading-[19px] text-text-muted">{text}</p>
    </article>
  );
}

export function UxImpactSection({
  title,
  intro,
  sectionLabel,
  groups,
}: UxImpactSectionProps) {
  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      {title || intro ? (
        <div className="flex w-full flex-col gap-2">
          {title ? (
            <h3 className={caseStudySectionSubtitleClassName}>{title}</h3>
          ) : null}
          {intro ? (
            <p className="text-[13px] leading-[19px] text-text-muted sm:text-[14px] sm:leading-[20px]">
              {intro}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="flex w-full flex-col gap-8 rounded-2xl border border-black/[0.06] bg-hero-bg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:gap-10 sm:p-6">
        {sectionLabel ? (
          <p className="text-[12px] leading-[18px] font-medium tracking-wide text-black/50 uppercase">
            {sectionLabel}
          </p>
        ) : null}

        {groups.map((group, index) => (
          <div
            key={group.title ?? index}
            className="flex w-full flex-col gap-4"
          >
            {group.title ? (
              <h4 className="text-[15px] leading-[22px] font-medium text-black sm:text-[16px] sm:leading-[24px]">
                {group.title}
              </h4>
            ) : null}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.cards.map((card) => (
                <ImpactCard key={card.number} {...card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
