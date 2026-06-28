import { Link } from "react-router-dom";
import dabFinal from "../assets/dab/dab-welcome.png";
import rosctFinal from "../assets/rosct/rosct-work-thumb.png";
import unownFinal from "../assets/unown/unown-work-thumb.png";

const projects = [
  {
    slug: "rosct",
    title: "Simplifying complex workflows for industrial CT scanning software",
    role: "Lead UI/UX Designer",
    image: rosctFinal,
    imageAlt:
      "ROSCT Assistant Mode final design — guided scan workflow with simplified controls",
  },
  {
    slug: "dab",
    title: "Optimizing data extraction for a SaaS analytics platform",
    role: "UX/UI Designer",
    image: dabFinal,
    imageAlt:
      "dab Agent final design — welcome screen with step-by-step SAP connection setup",
  },
  {
    slug: "unown",
    title: "Designing a conversion-focused homepage to drive app downloads",
    role: "UX/UI Designer",
    image: unownFinal,
    imageAlt:
      "UNOWN final homepage design — hero section with value proposition and download CTA",
  },
];

export function WorkPage() {
  return (
    <div className="mx-auto flex w-full max-w-[980px] flex-col px-6 py-12 sm:px-12 sm:py-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-[28px] leading-[1.26] font-normal tracking-[-0.98px] text-black sm:text-[36px] sm:tracking-[-1.26px] lg:text-[40px] lg:leading-[50.235px] lg:tracking-[-1.3954px]">
          Work
        </h1>
        <ul className="flex flex-col gap-12 sm:gap-16">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Link
                to={`/case-studies/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-divider bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_16px_44px_rgba(100,57,255,0.12)]"
              >
                <div className="overflow-hidden border-b border-divider bg-hero-bg">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="flex items-end justify-between gap-5 p-5 sm:p-7">
                  <div className="flex max-w-[720px] flex-col gap-2">
                    <span className="text-[11px] font-medium tracking-[0.12em] text-brand uppercase">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[18px] leading-[1.4] font-medium tracking-[-0.36px] text-black transition-colors group-hover:text-brand sm:text-[21px] sm:tracking-[-0.42px]">
                      {project.title}
                    </span>
                    <span className="text-[14px] leading-5 text-text-muted">
                      {project.role}
                    </span>
                  </div>

                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-divider bg-hero-bg text-[18px] text-brand transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
