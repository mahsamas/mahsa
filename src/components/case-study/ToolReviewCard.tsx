export type ToolReviewCardData = {
  name: string;
  whatWorked: string;
  painPoint?: string;
  designInspiration?: string;
};

function ToolReviewField({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone: "orange" | "purple";
}) {
  const labelClassName =
    tone === "orange"
      ? "font-semibold text-[#E8912D]"
      : "font-semibold text-[#8B6FD4]";

  return (
    <p className="text-[12px] leading-[18px] text-black/70">
      <span className={labelClassName}>{label}: </span>
      {text}
    </p>
  );
}

type ToolReviewCardProps = ToolReviewCardData;

export function ToolReviewCard({
  name,
  whatWorked,
  painPoint,
  designInspiration,
}: ToolReviewCardProps) {
  return (
    <article className="flex w-[240px] shrink-0 flex-col gap-3 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <h4 className="text-[14px] leading-5 font-semibold text-black">{name}</h4>
      <div className="flex flex-col gap-3">
        <ToolReviewField label="Worked well" text={whatWorked} tone="orange" />
        {painPoint ? (
          <ToolReviewField label="Pain point" text={painPoint} tone="purple" />
        ) : null}
        {designInspiration ? (
          <ToolReviewField
            label="Design inspiration"
            text={designInspiration}
            tone="purple"
          />
        ) : null}
      </div>
    </article>
  );
}

type ToolReviewCardRowProps = {
  cards: ToolReviewCardData[];
};

export function ToolReviewCardRow({ cards }: ToolReviewCardRowProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto pb-2">
      {cards.map((card) => (
        <ToolReviewCard key={card.name} {...card} />
      ))}
    </div>
  );
}
