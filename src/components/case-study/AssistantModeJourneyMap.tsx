import type { ReactNode } from "react";

export type JourneyActionType = "user" | "system" | "mixed";

export type JourneyMapPhase = {
  title: string;
  purpose: string;
  steps: string[];
  actionType: JourneyActionType;
  emphasized?: boolean;
};

export type AssistantModeJourneyMapProps = {
  intro: string;
  designDecision: string;
  phases: JourneyMapPhase[];
};

const actionLabels: Record<JourneyActionType, string> = {
  user: "User action",
  system: "System action",
  mixed: "User + system action",
};

const actionStyles: Record<
  JourneyActionType,
  { badge: string; chip: string }
> = {
  user: {
    badge: "border-[#F5A623]/35 bg-[#FFF0E0] text-[#C97D10]",
    chip: "border-[#F5A623]/25 bg-[#FFF8F3] text-[#8A5A0A]",
  },
  system: {
    badge: "border-[#8B6FD4]/35 bg-[#F0EBFF] text-[#6B4FB8]",
    chip: "border-[#8B6FD4]/25 bg-[#F8F5FF] text-[#5A4499]",
  },
  mixed: {
    badge: "border-black/[0.08] bg-white text-black/70",
    chip: "border-black/[0.08] bg-white text-black/70",
  },
};

const phaseIcons: Record<string, ReactNode> = {
  Setup: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3.5 4.5H14.5M3.5 9H14.5M3.5 13.5H10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="13.5" cy="13.5" r="2.25" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Optimization: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 2.5L10.4 6.6L14.5 8L10.4 9.4L9 13.5L7.6 9.4L3.5 8L7.6 6.6L9 2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 2.5L14.9 3.7L16.1 4.1L14.9 4.5L14.5 5.7L14.1 4.5L12.9 4.1L14.1 3.7L14.5 2.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  Execution: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7.5 6.25V11.75L12 9L7.5 6.25Z" fill="currentColor" />
    </svg>
  ),
  Confirmation: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M5.75 9.15L7.9 11.3L12.35 6.85"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function ActionBadge({ actionType }: { actionType: JourneyActionType }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] leading-[14px] font-medium ${actionStyles[actionType].badge}`}
    >
      {actionLabels[actionType]}
    </span>
  );
}

function StepChips({
  steps,
  actionType,
}: {
  steps: string[];
  actionType: JourneyActionType;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {steps.map((step) => (
        <span
          key={step}
          className={`rounded-md border px-2 py-1 text-[11px] leading-[15px] font-medium ${actionStyles[actionType].chip}`}
        >
          {step}
        </span>
      ))}
    </div>
  );
}

function TimelineNode({
  title,
  emphasized,
}: {
  title: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] sm:size-10 ${
        emphasized
          ? "border-[#8B6FD4] text-[#6B4FB8] ring-4 ring-[#8B6FD4]/15"
          : "border-[#8B6FD4]/35 text-[#6B4FB8]"
      }`}
    >
      {phaseIcons[title]}
    </div>
  );
}

function PhaseCard({ phase, index }: { phase: JourneyMapPhase; index: number }) {
  return (
    <article
      className={`flex min-w-0 flex-col gap-2.5 rounded-xl border p-3.5 sm:p-4 ${
        phase.emphasized
          ? "border-[#8B6FD4]/40 bg-[#F8F5FF] shadow-[0_4px_16px_rgba(139,111,212,0.12)]"
          : "border-black/[0.06] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium tracking-[0.08em] text-black/40 uppercase">
              Phase {index + 1}
            </span>
            {phase.emphasized ? (
              <span className="rounded-full bg-[#FFF0E0] px-1.5 py-0.5 text-[9px] font-semibold tracking-wide text-[#C97D10] uppercase">
                Automated
              </span>
            ) : null}
          </div>
          <h4 className="text-[15px] leading-5 font-medium text-black">
            {phase.title}
          </h4>
        </div>
      </div>

      <ActionBadge actionType={phase.actionType} />
      <p className="text-[12px] leading-[17px] text-text-muted sm:text-[13px] sm:leading-[18px]">
        {phase.purpose}
      </p>
      <StepChips steps={phase.steps} actionType={phase.actionType} />
    </article>
  );
}

function DesktopJourney({ phases }: { phases: JourneyMapPhase[] }) {
  return (
    <div className="hidden lg:block">
      <div className="relative mb-3 grid grid-cols-4 gap-3">
        <div
          className="pointer-events-none absolute top-5 right-[12.5%] left-[12.5%] h-0.5 bg-gradient-to-r from-[#F5A623]/50 via-[#8B6FD4] to-[#F5A623]/50"
          aria-hidden="true"
        />
        {phases.map((phase) => (
          <div key={phase.title} className="flex justify-center">
            <TimelineNode title={phase.title} emphasized={phase.emphasized} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {phases.map((phase, index) => (
          <PhaseCard key={phase.title} phase={phase} index={index} />
        ))}
      </div>
    </div>
  );
}

function MobileJourney({ phases }: { phases: JourneyMapPhase[] }) {
  return (
    <div className="flex flex-col gap-0 lg:hidden">
      {phases.map((phase, index) => (
        <div key={phase.title} className="relative flex gap-3">
          <div className="flex w-9 shrink-0 flex-col items-center sm:w-10">
            <TimelineNode title={phase.title} emphasized={phase.emphasized} />
            {index < phases.length - 1 ? (
              <div
                className="my-1 w-0.5 flex-1 min-h-6 bg-gradient-to-b from-[#8B6FD4]/50 to-[#8B6FD4]/15"
                aria-hidden="true"
              />
            ) : null}
          </div>
          <div className={`min-w-0 flex-1 ${index < phases.length - 1 ? "pb-4" : ""}`}>
            <PhaseCard phase={phase} index={index} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AssistantModeJourneyMap({
  intro,
  designDecision,
  phases,
}: AssistantModeJourneyMapProps) {
  return (
    <section className="flex w-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-hero-bg shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="border-b border-black/[0.06] px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[13px] leading-[19px] text-text-muted sm:text-[14px] sm:leading-[20px]">
          {intro}
        </p>
      </div>

      <div className="px-4 py-4 sm:px-5 sm:py-5">
        <DesktopJourney phases={phases} />
        <MobileJourney phases={phases} />
      </div>

      <div className="border-t border-black/[0.06] bg-white px-4 py-3.5 sm:px-5">
        <p className="text-[12px] leading-[18px] text-text-muted sm:text-[13px] sm:leading-[19px]">
          <span className="font-medium text-[#6B4FB8]">Design decision: </span>
          {designDecision}
        </p>
      </div>
    </section>
  );
}
