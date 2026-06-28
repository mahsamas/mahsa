type IaAccent = "orange" | "blue" | "yellow" | "teal";

type IaSection = {
  number: number;
  label: string;
  title: string;
  text: string;
  accent: IaAccent;
  width: string;
};

const accentStyles: Record<
  IaAccent,
  { badge: string; card: string }
> = {
  orange: {
    badge: "border-[#F5A623]/40 bg-[#FFF0E0] text-[#C97D10]",
    card: "border-[#F5A623]/25 bg-[#FFF8F3]",
  },
  blue: {
    badge: "border-[#4A90D9]/40 bg-[#E8F4FD] text-[#2E6BAD]",
    card: "border-[#4A90D9]/25 bg-[#F4F9FE]",
  },
  yellow: {
    badge: "border-[#D4A82A]/40 bg-[#FFF5D6] text-[#A67C00]",
    card: "border-[#D4A82A]/25 bg-[#FFFBF0]",
  },
  teal: {
    badge: "border-[#2A9D8F]/40 bg-[#E8F6F4] text-[#1F7A6F]",
    card: "border-[#2A9D8F]/25 bg-[#F3FAF9]",
  },
};

const sections: IaSection[] = [
  {
    number: 1,
    label: "Hero",
    title: "Value proposition",
    text: "Fashion + sustainability — frames the rest of the page",
    accent: "orange",
    width: "100%",
  },
  {
    number: 2,
    label: "Brand trust",
    title: "100+ Brands",
    text: "Partner logos and social proof",
    accent: "blue",
    width: "96%",
  },
  {
    number: 3,
    label: "Product discovery",
    title: "New in App",
    text: "Curated product listings",
    accent: "yellow",
    width: "92%",
  },
  {
    number: 4,
    label: "How it works",
    title: "Step-by-step explanation",
    text: "How leasing works in three clear steps",
    accent: "teal",
    width: "88%",
  },
  {
    number: 5,
    label: "Membership",
    title: "Value & pricing",
    text: "Benefits of using the app",
    accent: "orange",
    width: "84%",
  },
  {
    number: 6,
    label: "Sustainability",
    title: "Brand story",
    text: "Informational content",
    accent: "blue",
    width: "80%",
  },
  {
    number: 7,
    label: "App promotion",
    title: "Download section",
    text: "App mockup with store download buttons",
    accent: "yellow",
    width: "76%",
  },
  {
    number: 8,
    label: "Additional",
    title: "Reasons · testimonials · community",
    text: "Supporting content",
    accent: "teal",
    width: "72%",
  },
  {
    number: 9,
    label: "FAQ + footer",
    title: "Lowest priority content",
    text: "Answers and site navigation",
    accent: "blue",
    width: "68%",
  },
];

function FunnelStep({
  number,
  label,
  title,
  text,
  accent,
  width,
}: IaSection) {
  const styles = accentStyles[accent];

  return (
    <article
      className={`w-full rounded-lg border px-3 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.03)] sm:px-3.5 sm:py-2.5 ${styles.card}`}
      style={{ maxWidth: width }}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] leading-none font-semibold ${styles.badge}`}
          aria-hidden="true"
        >
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium tracking-[0.08em] text-black/45 uppercase">
            {label}
          </p>
          <h4 className="text-[13px] leading-[18px] font-medium text-black sm:text-[14px] sm:leading-[20px]">
            {title}
          </h4>
          <p className="text-[11px] leading-[15px] text-text-muted sm:text-[12px] sm:leading-[17px]">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
}

function FunnelConnector() {
  return (
    <div className="flex justify-center py-0.5" aria-hidden="true">
      <span className="h-3 w-px bg-black/15" />
    </div>
  );
}

export function UnownHomepageIaDiagram() {
  return (
    <figure className="mx-auto w-full max-w-md">
      <div className="rounded-xl border border-black/[0.06] bg-hero-bg px-4 py-4 sm:px-5 sm:py-5">
        <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-medium tracking-[0.1em] text-black/40 uppercase">
          <span>High priority</span>
          <span>Low priority</span>
        </div>

        <div className="flex flex-col items-center">
          {sections.map((section, index) => (
            <div key={section.number} className="flex w-full flex-col items-center">
              <FunnelStep {...section} />
              {index < sections.length - 1 ? <FunnelConnector /> : null}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-2.5 text-center text-[11px] leading-[16px] text-text-muted italic sm:text-[12px] sm:leading-[18px]">
        Homepage hierarchy → app conversion
      </figcaption>
    </figure>
  );
}
