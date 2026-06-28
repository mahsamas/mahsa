import type { ReactNode } from "react";

export type ExperienceLevelColumn = {
  title: string;
  subtitle: string;
  features?: string[];
};

export type ExperienceLevelsCardData = {
  title?: string;
  columns: [ExperienceLevelColumn, ExperienceLevelColumn];
  designDecision?: string;
  showDesignDecisionLabel?: boolean;
  children?: ReactNode;
};

type ExperienceLevelColumnProps = ExperienceLevelColumn;

function ExperienceLevelColumn({
  title,
  subtitle,
  features = [],
}: ExperienceLevelColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h4 className="text-[17px] leading-[24px] font-medium text-black sm:text-[18px] sm:leading-[26px]">
          {title}
        </h4>
        <p className="text-[14px] leading-[21px] text-text-muted sm:text-[15px] sm:leading-[22px]">
          {subtitle}
        </p>
      </div>

      {features.length > 0 ? (
        <ul className="flex flex-col gap-1.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-[14px] leading-[21px] text-text-muted sm:text-[15px] sm:leading-[22px]"
            >
              <span
                className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#8B6FD4]"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

type ExperienceLevelsCardProps = ExperienceLevelsCardData;

export function ExperienceLevelsCard({
  title,
  columns,
  designDecision,
  showDesignDecisionLabel = true,
  children,
}: ExperienceLevelsCardProps) {
  const [assistantMode, expertMode] = columns;

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-[#8B6FD4]/30 bg-[#F8F5FF]">
      <div className="flex flex-col gap-6 p-5 sm:gap-8 sm:p-6">
        {title ? (
          <h3 className="text-[20px] leading-[26px] font-medium tracking-[-0.4px] text-black sm:text-[24px] sm:leading-[30px] sm:tracking-[-0.48px]">
            {title}
          </h3>
        ) : null}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
          <ExperienceLevelColumn {...assistantMode} />
          <ExperienceLevelColumn {...expertMode} />
        </div>

        {children}
      </div>

      {designDecision ? (
        <div className="border-t border-[#8B6FD4]/30 bg-[#F0EBFF] px-5 py-4 sm:px-6">
          <p className="text-[14px] leading-[21px] text-text-muted sm:text-[15px] sm:leading-[22px]">
            {showDesignDecisionLabel ? (
              <span className="font-medium text-[#6B4FB8]">
                Design decision:{" "}
              </span>
            ) : null}
            {designDecision}
          </p>
        </div>
      ) : null}
    </article>
  );
}
