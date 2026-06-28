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
    <div className="mx-auto flex w-full max-w-[1034px] flex-col px-6 py-12 sm:px-12 sm:py-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-[28px] leading-[1.26] font-normal tracking-[-0.98px] text-black sm:text-[36px] sm:tracking-[-1.26px] lg:text-[40px] lg:leading-[50.235px] lg:tracking-[-1.3954px]">
          Work
        </h1>
        <ul className="flex flex-col gap-10 sm:gap-12">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/case-studies/${project.slug}`}
                className="group flex flex-col gap-4 transition-colors hover:text-brand"
              >
                <div className="overflow-hidden rounded-xl border border-divider bg-hero-bg">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="block h-auto w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[18px] leading-[1.4] font-normal tracking-[-0.36px] text-black group-hover:text-brand">
                    {project.title}
                  </span>
                  <span className="text-[14px] leading-5 text-text-muted">
                    {project.role}
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
