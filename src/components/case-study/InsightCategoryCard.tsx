import type { ReactNode } from "react";

export type InsightCategoryVariant = "orange" | "purple" | "yellow";

export type InsightCategoryCardData = {
  variant: InsightCategoryVariant;
  badgeLabel: string;
  title: string;
  subtitle: string;
  items: string[];
};

const variantStyles: Record<
  InsightCategoryVariant,
  {
    card: string;
    badge: string;
    bullet: string;
    icon: ReactNode;
  }
> = {
  orange: {
    card: "border-[#F5A623]/30 bg-[#FFF8F3]",
    badge: "border-[#F5A623]/40 bg-[#FFF0E0] text-[#C97D10]",
    bullet: "bg-[#F5A623]",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 3.5C4.5 3.5 2.45 5.15 1.75 7.5C2.45 9.85 4.5 11.5 7 11.5C9.5 11.5 11.55 9.85 12.25 7.5C11.55 5.15 9.5 3.5 7 3.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="7.5" r="1.75" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  purple: {
    card: "border-[#8B6FD4]/30 bg-[#F8F5FF]",
    badge: "border-[#8B6FD4]/40 bg-[#F0EBFF] text-[#6B4FB8]",
    bullet: "bg-[#8B6FD4]",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="7"
          width="10"
          height="4"
          rx="0.75"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="3"
          y="4"
          width="8"
          height="3"
          rx="0.75"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="4"
          y="1"
          width="6"
          height="3"
          rx="0.75"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  yellow: {
    card: "border-[#D4A82A]/30 bg-[#FFFBF0]",
    badge: "border-[#D4A82A]/40 bg-[#FFF5D6] text-[#A67C00]",
    bullet: "bg-[#D4A82A]",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M7 4.75V7.75M7 9.5V9.75"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
};

type InsightCategoryCardProps = InsightCategoryCardData;

export function InsightCategoryCard({
  variant,
  badgeLabel,
  title,
  subtitle,
  items,
}: InsightCategoryCardProps) {
  const styles = variantStyles[variant];

  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-xl border p-4 sm:p-5 ${styles.card}`}
    >
      <div
        className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] leading-4 font-medium ${styles.badge}`}
      >
        {styles.icon}
        <span>{badgeLabel}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="text-[16px] leading-[22px] font-medium text-black">
          {title}
        </h4>
        <p className="text-[13px] leading-[19px] text-text-muted">{subtitle}</p>
      </div>

      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[13px] leading-[19px] text-text-muted"
          >
            <span
              className={`mt-[7px] size-1.5 shrink-0 rounded-full ${styles.bullet}`}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

type InsightCategoryCardGroupProps = {
  cards: InsightCategoryCardData[];
};

export function InsightCategoryCardGroup({ cards }: InsightCategoryCardGroupProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
      {cards.map((card) => (
        <InsightCategoryCard key={card.title} {...card} />
      ))}
    </div>
  );
}
