export function Divider({ className = "" }: { className?: string }) {
  return (
    <hr
      className={`h-px w-full shrink-0 border-0 border-t border-divider ${className}`}
      aria-hidden="true"
    />
  );
}
