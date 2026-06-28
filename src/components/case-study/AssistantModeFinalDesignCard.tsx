export type AssistantModeFinalDesignCardData = {
  title: string;
  description: string;
  designOutcome: string;
};

type AssistantModeFinalDesignCardProps = AssistantModeFinalDesignCardData;

export function AssistantModeFinalDesignCard({
  title,
  description,
  designOutcome,
}: AssistantModeFinalDesignCardProps) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-[#8B6FD4]/30 bg-[#F8F5FF]">
      <div className="flex flex-col gap-2 p-5 sm:p-6">
        <h4 className="text-[18px] leading-[24px] font-medium tracking-[-0.36px] text-black sm:text-[20px] sm:leading-[26px]">
          {title}
        </h4>
        <p className="text-[13px] leading-[19px] text-text-muted sm:text-[14px] sm:leading-[20px]">
          {description}
        </p>
      </div>

      <div className="border-t border-[#8B6FD4]/30 bg-[#F0EBFF] px-5 py-4 sm:px-6">
        <p className="text-[13px] leading-[19px] text-text-muted sm:text-[14px] sm:leading-[20px]">
          <span className="font-medium text-[#6B4FB8]">Design outcome: </span>
          {designOutcome}
        </p>
      </div>
    </article>
  );
}
