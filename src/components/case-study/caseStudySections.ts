export const CASE_STUDY_SECTIONS = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
] as const;

export type CaseStudySectionId = (typeof CASE_STUDY_SECTIONS)[number]["id"];
