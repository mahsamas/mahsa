import type { ReactNode } from "react";

export const highlightClassName = "font-medium text-brand";

type HighlightProps = {
  children: ReactNode;
};

export function Highlight({ children }: HighlightProps) {
  return <span className={highlightClassName}>{children}</span>;
}
