import aboutMahsa from "../assets/about-mahsa.png";
import { Highlight } from "../components/case-study/Highlight";

const aboutBodyClassName =
  "text-[15px] leading-[23px] font-normal text-text-muted sm:text-[16px] sm:leading-[25px]";

export function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,400px)_1fr] md:gap-12">
          <img
            src={aboutMahsa}
            alt="Mahsa smiling outdoors with flowers on the table"
            className="h-auto w-full rounded-xl border border-divider md:shrink-0"
          />

          <div
            className={`flex flex-col gap-4 sm:gap-5 ${aboutBodyClassName}`}
          >
            <p>
              I&apos;m Mahsa, a <Highlight>UX/UI designer</Highlight> who likes
              working on products that don&apos;t make sense at first — and
              turning them into something that does.
            </p>
            <p>
              I mostly work on{" "}
              <Highlight>B2B SaaS and enterprise tools</Highlight>, where
              workflows are complex, users are under pressure, and there&apos;s
              very little room for confusion. That&apos;s where I do my best
              work.
            </p>
            <p>
              With a <Highlight>background in computer science</Highlight>, I
              try to understand how the system actually works. I connect user
              needs, technical constraints, and business goals, and shape them
              into something{" "}
              <Highlight>clear, structured, and usable.</Highlight> I pay
              attention to edge cases, logic, and feasibility, and enjoy
              working closely with engineers to get the details right.
            </p>
            <p>
              <Highlight>AI has become part of my process</Highlight>, but not
              in a &ldquo;push a button and get a design&rdquo; way. I use it to
              explore ideas, generate variations, build quick prototypes, and
              speed up things like UX writing and documentation — so I can
              focus more on the decisions that actually matter.
            </p>
            <p>
              I like being involved early, asking questions before things are
              built the wrong way. For me, design is not a final layer — it
              shapes the product from the beginning, through constant{" "}
              <Highlight>
                collaboration and small, intentional decisions.
              </Highlight>
            </p>
            <p>
              I&apos;ve worked on medical software, data-heavy tools, and
              consumer apps. Different contexts, same challenge: there&apos;s
              always complexity behind the scenes — and my job is to make sure
              the user never feels it.
            </p>
          </div>
        </div>

        <div className={`flex w-full flex-col gap-4 sm:gap-5 ${aboutBodyClassName}`}>
          <p>
            <Highlight>Outside of work:</Highlight>
          </p>
          <p>
            I&apos;ve always had a strong connection to music — I play piano and
            violin, and often use it as a way to relax and reset. When I&apos;m
            not designing, you&apos;ll probably find me traveling, swimming,
            exploring new places to eat, or spending time with friends. I enjoy
            creating small moments of joy, whether it&apos;s through music, food,
            or good company.
          </p>
        </div>
      </div>
    </div>
  );
}
