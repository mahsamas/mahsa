type MethodTagProps = {
  label: string;
};

export function MethodTag({ label }: MethodTagProps) {
  return (
    <span className="inline-flex border border-tag-border px-2.5 py-1 text-[12px] leading-4 font-normal tracking-[0.3px] text-tag-text">
      {label}
    </span>
  );
}
