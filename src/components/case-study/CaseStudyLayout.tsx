import { CaseStudyHero, type CaseStudyHeroMedia } from "./CaseStudyHero";
import {
  CaseStudySection,
  caseStudyMainTitleClassName,
  caseStudySectionSubtitleClassName,
  caseStudySectionTitleClassName,
} from "./CaseStudySection";
import { Divider } from "./Divider";
import { type CaptionedImage } from "./ImageWithCaption";
import { CaseStudySectionContent } from "./CaseStudySectionContent";
import { ContextSectionContent } from "./sections/ContextSectionContent";
import { ImpactCard } from "./ImpactCard";
import { MethodTag } from "./MethodTag";
import { ProjectDetailItem } from "./ProjectDetailItem";
import { StickySideNav } from "./StickySideNav";
import type { ReactNode } from "react";

export type ImpactItem = {
  title: string;
  description: string;
};

export type CaseStudyLayoutProps = {
  heroMedia?: CaseStudyHeroMedia;
  title: string;
  role: string;
  team: string;
  tools: string;
  duration: string;
  methods: string[];
  context: ReactNode;
  contextSubtitle?: string;
  contextImages?: CaptionedImage[];
  contextFollowUpSubtitle?: string;
  contextFollowUp?: ReactNode;
  problem: ReactNode;
  problemSubtitle?: string;
  problemImages?: CaptionedImage[];
  solution: ReactNode;
  solutionSubtitle?: string;
  impactSubtitle?: string;
  impacts: ImpactItem[];
  reflection: ReactNode;
  reflectionSubtitle?: string;
};

export function CaseStudyLayout({
  heroMedia,
  title,
  role,
  team,
  tools,
  duration,
  methods,
  context,
  contextSubtitle,
  contextImages = [],
  contextFollowUpSubtitle,
  contextFollowUp,
  problem,
  problemSubtitle,
  problemImages = [],
  solution,
  solutionSubtitle,
  impactSubtitle,
  impacts,
  reflection,
  reflectionSubtitle,
}: CaseStudyLayoutProps) {
  return (
    <article className="flex w-full flex-col items-start bg-white">
      <CaseStudyHero media={heroMedia} />

      <div className="mx-auto flex w-full max-w-[1034px] gap-10 px-6 py-4 sm:px-12 sm:py-5 lg:gap-16">
        <StickySideNav />

        <div className="flex min-w-0 flex-1 flex-col gap-10">
          <h1 className={caseStudyMainTitleClassName}>{title}</h1>

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8 lg:gap-x-[29px]">
            <ProjectDetailItem label="My Role" value={role} />
            <ProjectDetailItem label="Team" value={team} />
            <ProjectDetailItem label="Tools" value={tools} />
            <ProjectDetailItem label="Duration" value={duration} />
          </div>

          <div className="flex w-full flex-col gap-4">
            <p className="text-[10px] leading-[15px] font-normal tracking-[2.5px] text-label uppercase">
              Methods Used
            </p>
            <div className="flex flex-wrap gap-4">
              {methods.map((method) => (
                <MethodTag key={method} label={method} />
              ))}
            </div>
          </div>

          <Divider />

          <CaseStudySection
            id="context"
            title="Context"
            subtitle={contextSubtitle}
          >
            <ContextSectionContent
              intro={context}
              images={contextImages}
              usersTitle={contextFollowUpSubtitle ?? "Who are the users?"}
              usersText={
                contextFollowUp ??
                "ROSCT is used by different user groups: experienced Fraunhofer researchers who develop and refine the scanner, master's students conducting thesis-related experiments, and external customers who need to operate the system without deep technical knowledge."
              }
            />
          </CaseStudySection>

          <Divider />

          <CaseStudySection
            id="problem"
            title="Problem"
            subtitle={problemSubtitle}
          >
            <CaseStudySectionContent
              text={problem}
              images={problemImages}
              imagesFirst
            />
          </CaseStudySection>

          <Divider />

          <CaseStudySection
            id="solution"
            title="Solution"
            subtitle={solutionSubtitle}
          >
            <CaseStudySectionContent text={solution} />
          </CaseStudySection>

          <Divider />

          <div id="impact" className="scroll-mt-24 flex w-full flex-col gap-4">
            <h2 className={caseStudySectionTitleClassName}>Impact</h2>
            {impactSubtitle ? (
              <h3 className={caseStudySectionSubtitleClassName}>
                {impactSubtitle}
              </h3>
            ) : null}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impacts.map((impact) => (
                <ImpactCard
                  key={impact.title}
                  title={impact.title}
                  description={impact.description}
                />
              ))}
            </div>
          </div>

          <Divider />

          <CaseStudySection
            id="reflection"
            title="Reflection"
            subtitle={reflectionSubtitle}
          >
            <CaseStudySectionContent text={reflection} />
          </CaseStudySection>
        </div>
      </div>
    </article>
  );
}
