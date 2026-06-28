type DesignDecisionCardProps = {
  children: string;
};

export function DesignDecisionCard({ children }: DesignDecisionCardProps) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-[#8B6FD4]/30">
      <div className="bg-[#F0EBFF] px-5 py-4 sm:px-6">
        <p className="text-[14px] leading-[21px] text-text-muted sm:text-[15px] sm:leading-[22px]">
          {children}
        </p>
      </div>
    </article>
  );
}
