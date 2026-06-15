type ProjectDetailItemProps = {
  label: string;
  value: string;
};

export function ProjectDetailItem({ label, value }: ProjectDetailItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] leading-[15px] font-normal tracking-[2.5px] text-label uppercase">
        {label}
      </p>
      <p className="text-[14px] leading-5 font-normal text-black">
        {value}
      </p>
    </div>
  );
}
