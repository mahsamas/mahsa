import { caseStudySectionBodyClassName } from "./CaseStudySectionContent";

type ImpactCardProps = {
  title: string;
  description: string;
};

export function ImpactCard({ title, description }: ImpactCardProps) {
  return (
    <div className="flex flex-col gap-2 border border-tag-border p-4">
      <h3 className="text-[14px] leading-5 font-medium text-black">
        {title}
      </h3>
      <p className={caseStudySectionBodyClassName}>{description}</p>
    </div>
  );
}
