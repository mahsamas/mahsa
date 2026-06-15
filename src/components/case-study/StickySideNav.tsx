import { useEffect, useState } from "react";
import {
  CASE_STUDY_SECTIONS,
  type CaseStudySectionId,
} from "./caseStudySections";

function isCaseStudySectionId(id: string): id is CaseStudySectionId {
  return CASE_STUDY_SECTIONS.some((section) => section.id === id);
}

export function StickySideNav() {
  const [activeId, setActiveId] = useState<CaseStudySectionId | null>(null);

  useEffect(() => {
    const sectionIds = CASE_STUDY_SECTIONS.map((section) => section.id);

    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (isCaseStudySectionId(hash)) {
        setActiveId(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = visible[0].target.id;
          if (isCaseStudySectionId(id)) {
            setActiveId(id);
          }
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className="sticky top-20 hidden w-36 shrink-0 self-start lg:block"
      aria-label="Case study sections"
    >
      <ul className="flex flex-col gap-3">
        {CASE_STUDY_SECTIONS.map((section) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveId(section.id)}
                className={`text-[14px] leading-5 font-normal transition-colors hover:text-brand ${
                  isActive ? "text-brand" : "text-text-muted"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
