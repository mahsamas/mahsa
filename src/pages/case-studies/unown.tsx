import contextVideo from "../../assets/unown/context.mp4";
import unownFinal1 from "../../assets/unown/unown-final-1.png";
import unownFinal2 from "../../assets/unown/unown-final-2.png";
import unownFinal3 from "../../assets/unown/unown-final-3.png";
import unownFinal4 from "../../assets/unown/unown-final-4.png";
import {
  CaseStudyLayout,
  Highlight,
  ProblemCardGroup,
  type ProblemCardData,
  UnownHomepageIaDiagram,
  UnownUserBehaviorFlow,
  UxImpactSection,
  type UxImpactSectionData,
  caseStudySectionSubtitleClassName,
} from "../../components/case-study";
import { ClickableImage } from "../../components/case-study/ClickableImage";

const unownUxImpact: UxImpactSectionData = {
  groups: [
    {
      cards: [
        {
          number: 1,
          title: "Clear value proposition",
          text: "Visitors understand what the app does and how to install it within the first few seconds.",
          accent: "orange",
        },
        {
          number: 2,
          title: "Always-visible download CTA",
          text: "A sticky install bar keeps the download action reachable at any scroll position.",
          accent: "lavender",
        },
        {
          number: 3,
          title: "Stronger trust signals",
          text: "Ratings, press logos, and customer quotes reduce hesitation for first-time visitors.",
          accent: "orange",
        },
        {
          number: 4,
          title: "Focused conversion path",
          text: "The redesign aligned business goals with user behaviour and guided users from exploration to app download.",
          accent: "lavender",
        },
      ],
    },
  ],
};

const unownFinalDesignImages = [
  { src: unownFinal1, width: 850 },
  { src: unownFinal2, width: 569 },
  { src: unownFinal3, width: 700 },
  { src: unownFinal4, width: 450 },
] as const;

const unownFinalDesignTotalWidth = unownFinalDesignImages.reduce(
  (sum, image) => sum + image.width,
  0,
);

const unownProblemCards: ProblemCardData[] = [
  {
    number: 1,
    title: "Unfamiliar service model",
    text: "Fashion leasing was still a new concept for many users, so the website had to explain the service in a simple and approachable way.",
    accent: "orange",
  },
  {
    number: 2,
    title: "Weak app adoption path",
    text: "The website needed to guide visitors toward downloading the app, but users first needed to understand the value of doing so.",
    accent: "blue",
  },
  {
    number: 3,
    title: "Trust before action",
    text: "Before downloading the app, users needed reassurance about quality, hygiene, delivery, returns, and how the leasing process works.",
    accent: "yellow",
  },
  {
    number: 4,
    title: "Clearer decision flow",
    text: "The content needed to follow a stronger journey: understand the concept, see the benefits, build trust, and then download the app.",
    accent: "teal",
  },
];

export function UnownCaseStudy() {
  return (
    <CaseStudyLayout
      heroMedia={{ type: "video", src: contextVideo }}
      title="Designing a conversion-focused homepage to drive app downloads"
      role="UX/UI Designer"
      team="2 UI/UX designers, product owner, marketing team"
      tools="Figma"
      duration="2 weeks"
      methods={[
        "Information Architecture",
        "Site Mapping",
        "Information Hierarchy",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ]}
      contextSubtitle="What does UNOWN do"
      context={
        <>
          <p>
            UNOWN was a fashion leasing company with a mobile app where
            customers could lease fashion products.{" "}
            <Highlight>
              The company wanted to build a website to explain the service,
              communicate the value of fashion leasing, and encourage users to
              download the app.
            </Highlight>
          </p>
          <p>
            The goal was to increase app adoption by making the service easy to
            understand and guiding users clearly toward the download action.
          </p>
          <UnownUserBehaviorFlow />
        </>
      }
      problemSubtitle="Turning Curiosity into App Downloads"
      problem={<ProblemCardGroup cards={unownProblemCards} />}
      solutionSubtitle="Structuring a Clear Path to App Adoption"
      solution={
        <>
          <UnownHomepageIaDiagram />
          <div className="flex w-full flex-col gap-4">
            <h3 className={caseStudySectionSubtitleClassName}>Final design</h3>
            <div className="w-full overflow-hidden rounded-sm border border-divider">
              <div className="flex w-full items-start">
                {unownFinalDesignImages.map((image, index) => (
                  <div
                    key={image.src}
                    className="shrink-0"
                    style={{
                      width: `${(image.width / unownFinalDesignTotalWidth) * 100}%`,
                    }}
                  >
                    <ClickableImage
                      src={image.src}
                      alt={`UNOWN final homepage design — section ${index + 1}`}
                      ariaLabel={`UNOWN final homepage design — section ${index + 1}`}
                      wrapperClassName="overflow-hidden bg-white"
                      className="block h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      }
      impactContent={<UxImpactSection {...unownUxImpact} />}
      reflectionSubtitle="What I learned"
      reflection='This project reminded me that a high-converting page is not about clever words or beautiful imagery — it is about a clear path. When visitors always know what the page is offering and what the next step is, conversion follows naturally. Next time, I would run quick five-second tests earlier in the process to validate whether the value proposition lands before investing in visuals.'
    />
  );
}
