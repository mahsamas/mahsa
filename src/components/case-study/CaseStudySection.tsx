import type { ReactNode } from "react";
import type { CaseStudySectionId } from "./caseStudySections";

export const caseStudyMainTitleClassName =
  "text-[28px] leading-[1.26] font-normal tracking-[-0.98px] text-black sm:text-[36px] sm:tracking-[-1.26px] lg:text-[40px] lg:leading-[50.235px] lg:tracking-[-1.3954px]";

export const caseStudySectionTitleClassName =
  "mb-4 text-[16px] leading-[1.26] font-normal tracking-[-0.56px] text-black";

export const caseStudySectionSubtitleClassName =
  "mb-4 text-[24px] leading-[1.26] font-normal tracking-[-0.91px] text-black";

type CaseStudySectionProps = {
  id: CaseStudySectionId;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function CaseStudySection({
  id,
  title,
  subtitle,
  children,
}: CaseStudySectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className={caseStudySectionTitleClassName}>{title}</h2>
      {subtitle ? (
        <h3 className={caseStudySectionSubtitleClassName}>{subtitle}</h3>
      ) : null}
      {children}
    </section>
  );
}
