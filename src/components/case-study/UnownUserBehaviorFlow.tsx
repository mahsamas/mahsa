type FlowStepProps = {
  number: string;
  title: string;
  subtitle: string;
  emphasized?: boolean;
  icon: "browser" | "phone" | "check";
};

function FlowIcon({ icon }: Pick<FlowStepProps, "icon">) {
  if (icon === "browser") {
    return (
      <svg
        width="28"
        height="22"
        viewBox="0 0 28 22"
        fill="none"
        aria-hidden="true"
        className="text-black/70"
      >
        <rect
          x="1"
          y="1"
          width="26"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <line x1="1" y1="6" x2="27" y2="6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="5" cy="3.5" r="1" fill="currentColor" />
        <circle cx="8.5" cy="3.5" r="1" fill="currentColor" />
        <circle cx="12" cy="3.5" r="1" fill="currentColor" />
        <line
          x1="5"
          y1="11"
          x2="17"
          y2="11"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.45"
        />
        <line
          x1="5"
          y1="15"
          x2="14"
          y2="15"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.45"
        />
      </svg>
    );
  }

  if (icon === "phone") {
    return (
      <svg
        width="22"
        height="34"
        viewBox="0 0 22 34"
        fill="none"
        aria-hidden="true"
        className="text-[#6B4FB8]"
      >
        <rect
          x="1"
          y="1"
          width="20"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <line
          x1="8"
          y1="4"
          x2="14"
          y2="4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="11" cy="29" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="text-black/70"
    >
      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.5 14.2L12.2 17.9L19.5 10.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowStep({
  number,
  title,
  subtitle,
  emphasized = false,
  icon,
}: FlowStepProps) {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col items-center gap-2 rounded-lg border px-3 py-3 text-center sm:px-4 sm:py-3.5 ${
        emphasized
          ? "border-[#8B6FD4]/40 bg-[#F8F5FF] shadow-[0_2px_10px_rgba(107,79,184,0.08)]"
          : "border-black/[0.06] bg-white"
      }`}
    >
      <span className="text-[10px] leading-none font-medium tracking-[0.14em] text-black/40 uppercase">
        {number}
      </span>
      <div className="flex h-9 items-center justify-center">
        <FlowIcon icon={icon} />
      </div>
      <div className="flex flex-col gap-0.5">
        <p
          className={`text-[13px] leading-[18px] sm:text-[14px] sm:leading-[20px] ${
            emphasized ? "font-medium text-[#6B4FB8]" : "font-medium text-black"
          }`}
        >
          {title}
        </p>
        <p className="text-[11px] leading-[16px] text-text-muted sm:text-[12px] sm:leading-[17px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function FlowArrow({ label, emphasized = false }: { label?: string; emphasized?: boolean }) {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-1 px-0.5 sm:px-1">
      {label ? (
        <span
          className={`text-[9px] leading-none font-medium tracking-[0.12em] uppercase ${
            emphasized ? "text-[#C97D10]" : "text-black/35"
          }`}
        >
          {label}
        </span>
      ) : null}
      <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        aria-hidden="true"
        className={emphasized ? "text-[#6B4FB8]" : "text-black/25"}
      >
        <path
          d="M0 6H16M16 6L11.5 2M16 6L11.5 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function UnownUserBehaviorFlow() {
  return (
    <figure className="w-full">
      <div className="rounded-xl border border-black/[0.06] bg-hero-bg p-3 sm:p-5">
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto sm:gap-2">
          <div className="flex min-w-[280px] items-center gap-1.5 sm:min-w-0 sm:flex-1 sm:gap-2">
          <FlowStep
            number="01"
            title="Website"
            subtitle="Browse products / explore brand"
            icon="browser"
          />
          <FlowArrow emphasized />
          <FlowStep
            number="02"
            title="Mobile App"
            subtitle="Download and open app"
            icon="phone"
            emphasized
          />
          <FlowArrow />
          <FlowStep
            number="03"
            title="Purchase"
            subtitle="Complete purchase"
            icon="check"
          />
          </div>
        </div>
      </div>
      <figcaption className="mt-2.5 text-center text-[11px] leading-[16px] text-text-muted italic sm:text-[12px] sm:leading-[18px]">
        User behavior flow
      </figcaption>
    </figure>
  );
}
