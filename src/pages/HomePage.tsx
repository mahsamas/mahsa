import { Link } from "react-router-dom";

const projects = [
  {
    slug: "rosct",
    title: "Simplifying complex workflows for industrial CT scanning software",
    role: "Lead UI/UX Designer",
  },
  {
    slug: "dab",
    title: "Optimizing data extraction for a SaaS analytics platform",
    role: "UX/UI Designer",
  },
  {
    slug: "unown",
    title: "Designing a conversion-focused homepage to drive app downloads",
    role: "UX/UI Designer",
  },
];

export function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-[1034px] flex-col gap-16 px-6 py-12 sm:px-12 sm:py-16">
      <section id="work" className="scroll-mt-24 flex flex-col gap-8">
        <h1 className="text-[28px] leading-[1.26] font-normal tracking-[-0.98px] text-black sm:text-[36px] sm:tracking-[-1.26px] lg:text-[40px] lg:leading-[50.235px] lg:tracking-[-1.3954px]">
          Work
        </h1>
        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/case-studies/${project.slug}`}
                className="group flex flex-col gap-1 transition-colors hover:text-brand"
              >
                <span className="text-[18px] leading-[1.4] font-normal tracking-[-0.36px] text-black group-hover:text-brand">
                  {project.title}
                </span>
                <span className="text-[14px] leading-5 text-text-muted">
                  {project.role}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="scroll-mt-24 flex flex-col gap-4">
        <h2 className="text-[16px] leading-[1.26] font-normal tracking-[-0.56px] text-black">
          About
        </h2>
        <p className="text-[15px] leading-[22px] text-text-muted sm:text-[16px] sm:leading-[24px]">
          UI/UX designer focused on simplifying complex workflows and building
          interfaces that work for users at every expertise level.
        </p>
      </section>

      <section id="contact" className="scroll-mt-24 flex flex-col gap-4">
        <h2 className="text-[16px] leading-[1.26] font-normal tracking-[-0.56px] text-black">
          Contact
        </h2>
        <p className="text-[15px] leading-[22px] text-text-muted sm:text-[16px] sm:leading-[24px]">
          Get in touch to discuss design work or collaborations.
        </p>
      </section>
    </div>
  );
}
