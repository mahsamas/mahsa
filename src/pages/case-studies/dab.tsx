import dabHeroVideo from "../../assets/dab/dab-hero.mov";
import dabFinalPrototype from "../../assets/dab/dab-final-prototype.mp4";
import dabConcept1 from "../../assets/dab/dab-concept-1.png";
import dabConcept2 from "../../assets/dab/dab-concept-2.png";
import dabKeyProblem from "../../assets/dab/dab-key-problem.png";
import dabOldTable from "../../assets/dab/dab-old-table.png";
import {
  CaseStudyLayout,
  ExperienceLevelsCard,
  Highlight,
  ImageWithCaptionGroup,
  UserInsightQuoteCardGroup,
  caseStudySectionBodyClassName,
  type UserInsightQuoteCardData,
  UxImpactSection,
  type UxImpactSectionData,
} from "../../components/case-study";

const dabUxImpact: UxImpactSectionData = {
  sectionLabel: "Impact based on UX improvements",
  groups: [
    {
      cards: [
        {
          number: 1,
          title: "Clearer input process",
          text: "Users found the process of entering required inputs much clearer and easier to follow after the redesign.",
          accent: "orange",
        },
        {
          number: 2,
          title: "Better table navigation",
          text: "The results table felt clearer and easier to navigate, with necessary filters visible and accessible.",
          accent: "lavender",
        },
        {
          number: 3,
          title: "Clearer error messaging",
          text: "Error messages and their causes were presented more clearly, helping users understand issues faster.",
          accent: "orange",
        },
        {
          number: 4,
          title: "Less workflow frustration",
          text: "The restructured workflow helped users continue their tasks with less confusion and frustration.",
          accent: "lavender",
        },
      ],
    },
  ],
};

const dabSupportTicketInsights: UserInsightQuoteCardData[] = [
  {
    avatarVariant: "consultant",
    role: "SAP Consultant",
    insight: "Connection and authentication failures were hard to diagnose",
    quote:
      "We entered the credentials three times and still couldn't tell if the connection actually worked or what went wrong.",
  },
  {
    avatarVariant: "analyst",
    role: "Data Analyst",
    insight: "Extraction jobs felt stuck without visible progress",
    quote:
      "The job just sits there — I don't know if it's still running or if something broke in the background.",
  },
  {
    avatarVariant: "admin",
    role: "IT Admin",
    insight: "The progress screen didn't explain what was happening",
    quote:
      "The screen shows steps, but I still don't understand what's happening or how long the extraction will take.",
  },
];

export function DabCaseStudy() {
  return (
    <CaseStudyLayout
      heroMedia={{ type: "video", src: dabHeroVideo }}
      title="Optimizing data extraction for a SaaS analytics platform"
      role="UX/UI Designer"
      team="One junior designer, one full-stack developer, one product owner"
      tools="Figma"
      duration="3 month"
      methods={[
        "User Research",
        "Information Architecture",
        "Site Mapping",
        "Information Hierarchy",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ]}
      contextSubtitle="What is dab Agent?"
      contextImages={[
        {
          src: dabKeyProblem,
          caption: "Old user interface of web application",
        },
        {
          src: dabOldTable,
          caption: "Old table page of user interface",
        },
      ]}
      contextImagesUniformHeight={false}
      context="dab Agent is a web desktop application used to connect customer SAP systems, validate connection configurations, and run data extraction or analytics workflows. The tool supports connection setup, validation testing, and helps users identify where issues occur when setup fails."
      contextFollowUpSubtitle="Who are the users?"
      contextFollowUp={
        <>
          dab is used by professional B2B users:{" "}
          <Highlight>dab employees</Highlight> who support customer onboarding
          and connection setup, and technical users on the customer side such as{" "}
          <Highlight>SAP consultants</Highlight>,{" "}
          <Highlight>data analysts</Highlight>,{" "}
          <Highlight>IT admins</Highlight>, and{" "}
          <Highlight>onboarding teams</Highlight> who need to configure and
          validate SAP connections.
        </>
      }
      problemSubtitle="Understanding the Problem"
      problem="Support tickets from three months of use showed the same problems coming up again and again — especially around connection setup and data extraction."
      problemFollowUpSubtitle="Where do users get stuck most often?"
      problemFollowUp={
        <>
          <p className={caseStudySectionBodyClassName}>
            Three themes appeared repeatedly across tickets: connection and
            authentication problems, extraction jobs that felt frozen without
            feedback, and a progress screen that failed to explain what the
            system was doing.
          </p>
          <UserInsightQuoteCardGroup cards={dabSupportTicketInsights} />
        </>
      }
      solution={
        <ExperienceLevelsCard
          title="Exploring two design directions"
          columns={[
            {
              title: "All-in-one layout",
              subtitle:
                "All setup fields were visible on one screen. This gave users full visibility, but increased visual complexity and made troubleshooting slower when required information was missed.",
            },
            {
              title: "Step-based layout",
              subtitle:
                "The setup was divided into Basic information, Authentication, and RFC settings. This helped users focus on one step at a time and made errors easier to locate.",
            },
          ]}
          designDecision="The step-based layout was selected because it reduced complexity, lowered the risk of missed inputs, and made the setup flow clearer and faster to troubleshoot."
        >
          <div className="-mx-5 border-t border-[#8B6FD4]/30 sm:-mx-6">
            <ImageWithCaptionGroup
              images={[
                {
                  src: dabConcept1,
                  caption: "Design concept 1 — familiar single-page layout",
                },
                {
                  src: dabConcept2,
                  caption: "Design concept 2 — step-based guided flow",
                },
              ]}
              uniformHeight={false}
            />
          </div>
        </ExperienceLevelsCard>
      }
      solutionFollowUp={
        <section className="flex w-full flex-col gap-4" aria-labelledby="final-prototype-title">
          <h3
            id="final-prototype-title"
            className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
          >
            Final prototype
          </h3>
          <video
            className="aspect-video w-full rounded-2xl border border-[#8B6FD4]/20 bg-black object-contain shadow-sm"
            controls
            playsInline
            preload="metadata"
          >
            <source src={dabFinalPrototype} type="video/mp4" />
            Your browser does not support embedded videos.
          </video>
        </section>
      }
      impactSubtitle="Clearer steps, fewer errors"
      impactContent={<UxImpactSection {...dabUxImpact} />}
      reflectionSubtitle="What I learned"
      reflection="This project taught me that in complex products, every small detail matters more than you think. While working on the interface, I realized that users notice everything — from the clarity of an icon to the way a progress bar moves or how information is organized inside a table."
    />
  );
}
