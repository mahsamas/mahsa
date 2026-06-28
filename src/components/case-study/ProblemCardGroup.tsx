export type ProblemCardData = {
  number: number;
  title: string;
  text: string;
  accent: "orange" | "blue" | "yellow" | "teal";
};

const accentStyles = {
  orange: {
    badge: "border-[#F5A623]/40 bg-[#FFF0E0] text-[#C97D10]",
    card: "border-[#F5A623]/25 bg-[#FFF8F3]",
  },
  blue: {
    badge: "border-[#4A90D9]/40 bg-[#E8F4FD] text-[#2E6BAD]",
    card: "border-[#4A90D9]/25 bg-[#F4F9FE]",
  },
  yellow: {
    badge: "border-[#D4A82A]/40 bg-[#FFF5D6] text-[#A67C00]",
    card: "border-[#D4A82A]/25 bg-[#FFFBF0]",
  },
  teal: {
    badge: "border-[#2A9D8F]/40 bg-[#E8F6F4] text-[#1F7A6F]",
    card: "border-[#2A9D8F]/25 bg-[#F3FAF9]",
  },
};

type ProblemCardProps = ProblemCardData;

function ProblemCard({ number, title, text, accent }: ProblemCardProps) {
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
        <h4 className="text-[15px] leading-[21px] font-medium text-black sm:text-[16px] sm:leading-[22px]">
          {title}
        </h4>
      </div>
      <p className="text-[14px] leading-[20px] text-text-muted sm:text-[15px] sm:leading-[22px]">{text}</p>
    </article>
  );
}

type ProblemCardGroupProps = {
  cards: ProblemCardData[];
};

export function ProblemCardGroup({ cards }: ProblemCardGroupProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <ProblemCard key={card.number} {...card} />
      ))}
    </div>
  );
}
