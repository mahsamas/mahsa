import howw from "../../assets/rosct/howw.png";
import autoScanBefore from "../../assets/rosct/evolution/01-auto-scan-before.png";
import autoScanAfter from "../../assets/rosct/evolution/01-auto-scan-after.png";
import setupBefore from "../../assets/rosct/evolution/03-setup-before.png";
import setupAfter from "../../assets/rosct/evolution/03-setup-after.png";
import scanningAfter from "../../assets/rosct/evolution/04-scanning-after.png";
import successAfter from "../../assets/rosct/evolution/05-success-after.png";
import old from "../../assets/rosct/old.png";
import rosct from "../../assets/rosct/Rosct.png";
import expertModeFinal from "../../assets/rosct/expert-mode-final.png";
import video from "../../assets/rosct/final-new.mp4";
import finalStep1 from "../../assets/rosct/final-step1.png";
import finalStep2 from "../../assets/rosct/final-step2.png";
import finalStep3 from "../../assets/rosct/final-step3.png";
import finalStep4 from "../../assets/rosct/final-step4.png";
import finalStep5 from "../../assets/rosct/final-step5.png";
import finalStep6 from "../../assets/rosct/final-step6.png";
import finalStep7 from "../../assets/rosct/final-step7.png";
import finalStep8 from "../../assets/rosct/final-step8.png";
import finalStep9 from "../../assets/rosct/final-step9.png";
import finalStep10 from "../../assets/rosct/final-step10.png";
import finalStep11 from "../../assets/rosct/final-step11.png";
import finalStep12 from "../../assets/rosct/final-step12.png";
import {
  CaseStudyLayout,
  AssistantModeEvolutionSection,
  AssistantModeFinalDesignCard,
  AssistantModeJourneyMap,
  ExperienceLevelsCard,
  ExpertModeRefinementSection,
  Highlight,
  ImageWithCaptionGroup,
  InsightCategoryCardGroup,
  ToolReviewCardRow,
  UxImpactSection,
  caseStudySectionBodyClassName,
  caseStudySectionSubtitleClassName,
  type AssistantModeEvolutionCardData,
  type ExpertModeRefinementSectionData,
  type JourneyMapPhase,
  type InsightCategoryCardData,
  type CaptionedImage,
  type ToolReviewCardData,
  type UxImpactSectionData,
} from "../../components/case-study";

const uxImpact: UxImpactSectionData = {
  title: "UX impact of the redesign",
  intro:
    "The redesign improved the experience across two modes: Assistant Mode reduced complexity for less-experienced users, while Expert Mode preserved advanced control and improved workflow clarity for experienced users.",
  sectionLabel: "Impact based on UX improvements",
  groups: [
    {
      title: "Assistant Mode",
      cards: [
        {
          number: 1,
          title: "Lower learning curve",
          text: "Guided steps help beginner users understand the scan process without facing all technical controls at once.",
          accent: "orange",
        },
        {
          number: 2,
          title: "Less manual effort",
          text: "Key scan parameters such as magnification, pre-filter, and exposure time are guided or automated to reduce repeated manual setup.",
          accent: "lavender",
        },
        {
          number: 3,
          title: "More confidence during scanning",
          text: "Progress states, completion screens, and feedback dialogs help users understand what the system is doing and what to do next.",
          accent: "orange",
        },
      ],
    },
    {
      title: "Expert Mode",
      cards: [
        {
          number: 4,
          title: "Faster access to scan-critical actions",
          text: "Frequently used actions such as Live View, Save Image, Image History, Auto Zoom, and image correction are easier to find near the main working area.",
          accent: "lavender",
        },
        {
          number: 5,
          title: "Reduced cognitive load",
          text: "Related controls are grouped more clearly, unnecessary visual noise is reduced, and the detector image becomes the central focus.",
          accent: "orange",
        },
        {
          number: 6,
          title: "Preserved expert control",
          text: "Advanced users still have access to detailed scan parameters and object movement controls, but the interface is easier to scan and operate.",
          accent: "lavender",
        },
      ],
    },
  ],
};

const expertModeRefinement: ExpertModeRefinementSectionData = {
  title: "Expert Mode refinement: preserving control while improving clarity",
  intro:
    "The Expert Mode redesign did not remove advanced control. Instead, the existing interface was reorganized to make expert workflows easier to scan, faster to operate, and more aligned with the real CT scanning process.",
  beforeImage: {
    src: rosct,
    alt: "Original Expert Mode interface",
    label: "Before — Original Expert Mode",
  },
  afterImage: {
    src: expertModeFinal,
    alt: "Refined Expert Mode interface",
    label: "After — Refined Expert Mode",
  },
  callouts: [
    {
      number: 1,
      title: "Global actions",
      text: "System actions such as Connect, Stop, Settings, Support, and Lock were made more consistent and easier to find.",
      accent: "orange",
    },
    {
      number: 2,
      title: "X-ray Source",
      text: "The source panel was reorganized around the most important actions: voltage, current, power, filter, X-ray On, and Warm-up.",
      accent: "lavender",
    },
    {
      number: 3,
      title: "Detector focus",
      text: "The detector image became the central focus of the interface, supported by a clearer toolbar.",
      accent: "orange",
    },
    {
      number: 4,
      title: "Detector toolbar",
      text: "Live View, Save Image, Image History, Auto Search, and Auto Zoom were grouped near the image area for faster access.",
      accent: "lavender",
    },
    {
      number: 5,
      title: "Image correction",
      text: "Dark, Flat, and BPM were moved closer to the detector controls because they directly affect image quality.",
      accent: "orange",
    },
    {
      number: 6,
      title: "Acquisition settings",
      text: "The acquisition area was reduced to the most relevant visible parameters, such as exposure, averages, and skips.",
      accent: "lavender",
    },
    {
      number: 7,
      title: "Sequence workflow",
      text: "The sequence section became more workflow-oriented, with clearer steps and progress feedback.",
      accent: "orange",
    },
    {
      number: 8,
      title: "Actor controls",
      text: "Object movement controls were separated into cleaner sections with better grouping, spacing, and status visibility.",
      accent: "lavender",
    },
    {
      number: 9,
      title: "Info panel",
      text: "System messages were placed in a cleaner and more readable area, making feedback easier to follow.",
      accent: "orange",
    },
  ],
};

const assistantModeJourneyPhases: JourneyMapPhase[] = [
  {
    title: "Setup",
    purpose: "The user starts the guided scan flow.",
    steps: ["Select Assistant Mode", "Configure Scan"],
    actionType: "user",
  },
  {
    title: "Optimization",
    purpose: "The system prepares key scan parameters.",
    steps: ["Magnification", "Pre-filter", "Exposure time"],
    actionType: "system",
    emphasized: true,
  },
  {
    title: "Execution",
    purpose: "The scan is saved and started.",
    steps: ["Save path", "Start scan", "Scan in progress"],
    actionType: "mixed",
  },
  {
    title: "Confirmation",
    purpose: "The user reviews and confirms the result.",
    steps: ["Scan completed", "Review result", "Final confirmation"],
    actionType: "user",
  },
];

const assistantModeJourneyIntro =
  "Assistant Mode was structured as a guided scan journey, helping users move from setup to automatic parameter optimization, scan execution, and final confirmation.";

const assistantModeJourneyDecision =
  "Separate user actions from system-driven steps to make the automated scan process easier to understand.";

const assistantModeFinalDesignScreens: CaptionedImage[] = [
  {
    src: finalStep1,
    caption: "Final Assistant Scan main screen",
  },
  {
    src: finalStep2,
    caption: "Continue or scan manually decision dialog",
  },
  {
    src: finalStep3,
    caption: "Optimizing — Step 1: Magnification in progress",
  },
  {
    src: finalStep4,
    caption: "Optimizing — Step 2: Pre-Filter in progress",
  },
  {
    src: finalStep5,
    caption: "Optimizing — Step 3: Exposure time in progress",
  },
  {
    src: finalStep6,
    caption: "Optimization completed — ready to continue with scan",
  },
  {
    src: finalStep7,
    caption: "Save Measurement Details dialog",
  },
  {
    src: finalStep8,
    caption: "Scanning in progress with time remaining indicator",
  },
  {
    src: finalStep9,
    caption: "Scanned successfully confirmation",
  },
  {
    src: finalStep10,
    caption: "Result feedback prompt for continuous improvement",
  },
  {
    src: finalStep11,
    caption: "Load and change object checklist before next scan",
  },
  {
    src: finalStep12,
    caption: "Manual scan view with full parameter control",
  },
];

const assistantModeEvolutionCards: AssistantModeEvolutionCardData[] = [
  {
    screenTitle: "First screen of Auto Scan",
    before: {
      src: autoScanBefore,
      alt: "First screen of Auto Scan — Iteration 1",
      iterationLabel: "Before — Iteration 1",
      subtitle: "Wireframe for the first screen of Assistant Mode",
    },
    after: {
      src: autoScanAfter,
      alt: "First screen of Auto Scan — Iteration 2",
      iterationLabel: "After — Iteration 2",
      subtitle: "Wireframe for the guided Auto Scan entry screen",
    },
    whyItChanged:
      "Changed to make the auto-scan logic easier to understand, reduce uncertainty at the start of the flow, and remove the manual section so users could focus on the automated setup process.",
  },
  {
    screenTitle: "Auto Scan setup screen",
    before: {
      src: setupBefore,
      alt: "Auto Scan setup screen — Iteration 1",
      iterationLabel: "Before — Iteration 1",
      subtitle: "Wireframe for the Auto Scan Screen of Assistant Mode",
    },
    after: {
      src: setupAfter,
      alt: "Auto Scan setup screen — Iteration 2",
      iterationLabel: "After — Iteration 2",
      subtitle: "Wireframe for the Auto Scan Screen of Assistant Mode",
    },
    whyItChanged:
      "The screen was refined by replacing multiple-choice options with clearer action buttons, grouping related controls more logically, and removing non-essential functions. This made the auto-scan flow easier to understand and helped users focus on the main setup actions.",
  },
];

const assistantModeUnchangedScreens = {
  images: [
    {
      src: scanningAfter,
      alt: "Scanning process — Iteration 2",
      iterationLabel: "After — Iteration 2",
      subtitle: "Wireframe of Manual Scanning progress",
    },
    {
      src: successAfter,
      alt: "Scanned successfully — Iteration 2",
      iterationLabel: "After — Iteration 2",
      subtitle: "Wireframe of Scanned successfully",
    },
  ],
  caption:
    "Kept without major changes because these screens already supported the flow clearly. The main improvements were focused on the setup steps before scanning.",
};

const rosctToolReviewCards: ToolReviewCardData[] = [
  {
    name: "datos|X acq",
    whatWorked: "Exposure time and averaging were easier to access.",
    painPoint: "Split system, cluttered UI, unclear icons.",
  },
  {
    name: "Volex6",
    whatWorked: "Logical 3-column structure.",
    painPoint: "Too many detailed settings and confusing labels.",
  },
  {
    name: "Volex10",
    whatWorked: "Fixed toolbar for frequent parameters.",
    painPoint:
      "Logger system was overwhelming and image selection needed clearer feedback.",
  },
  {
    name: "WinWerth",
    whatWorked:
      "Useful visualization tools such as histogram, zoom, and status indicators.",
    painPoint:
      "Dense interface, small text, outdated UI, and heavy cognitive load.",
  },
  {
    name: "Lumafield",
    whatWorked: "Simplified scan setup and beginner-friendly guidance.",
    designInspiration:
      "Make Assistant Mode more guided and less manual.",
  },
];

const rosctInsightCards: InsightCategoryCardData[] = [
  {
    variant: "orange",
    badgeLabel: "Make more visible",
    title: "Frequently used actions",
    subtitle: "Needed during the core scan workflow",
    items: [
      "Live View",
      "Image Manager",
      "Save Images",
      "Exposure time",
      "X-ray controls",
      "Detector image area",
      "Image correction (Dark, Flat, BPM)",
      "Object positioning controls",
      "Zoom / image scaling",
      "Progress bar / scan status",
    ],
  },
  {
    variant: "purple",
    badgeLabel: "Move to advanced",
    title: "Rarely used settings",
    subtitle: "Useful for expert cases, but not needed on the main screen",
    items: [
      "8-bit image save option",
      "Gain",
      "Trigger",
      "Advanced acquisition settings",
      "Detailed sequence settings",
      "Extra Image Manager table details",
      "Less-used detector tools",
      "Large disabled controls",
    ],
  },
  {
    variant: "yellow",
    badgeLabel: "Redesign with guidance",
    title: "Confusing controls",
    subtitle: "Powerful, but difficult for less-experienced users",
    items: [
      "Object TX / TY / TZ",
      "Move Absolute",
      "Move Relative",
      "Reference Mode",
      "Multiple Save buttons",
      'Image Manager "Set" button',
      "Refresh / erase icons",
      "Scrolling to change values",
      "Zoom behavior",
      "Dark / Flat warning check",
    ],
  },
];

export function RosctCaseStudy() {
  return (
    <CaseStudyLayout
      heroMedia={{ type: "video", src: video }}
      title="Simplifying complex workflows for industrial CT scanning software"
      role="Lead UI/UX Designer"
      team="1 Designer, 2 Developers"
      tools="Figma"
      duration="6 month"
      methods={[
        "User Interviews",
        "Heuristic Evaluation",
        "A/B Testing",
        "Usability Testing",
        "Journey Mapping",
      ]}
      contextSubtitle="What is Rosct?"
      contextImages={[
        {
          src: rosct,
          caption: "old user interface of Rosct",
        },
        {
          src: old,
          caption: "Industrial X-ray CT scanning system",
        },
      ]}
      context="ROSCT is software used to control industrial CT scanners. By capturing X-ray images from multiple angles, it enables engineers and researchers to examine the internal structure of objects without damaging them. The software supports scan setup, machine control, image acquisition, and analysis workflows."
      contextFollowUpSubtitle="Who are the users?"
      contextFollowUp={
        <>
          ROSCT is used by different user groups: experienced{" "}
          <Highlight>Fraunhofer researchers</Highlight> who develop and refine
          the scanner, <Highlight>master's students</Highlight> conducting
          thesis-related experiments, and{" "}
          <Highlight>external customers</Highlight> who need to operate the
          system without deep technical knowledge.
        </>
      }
      problemSubtitle="Understnading the real scan workflow"
      problemImages={[
        {
          src: howw,
          caption: "Typical scan workflow in the rosct software",
        },
      ]}
      problem="The existing interface exposed too many technical decisions at once, which increased cognitive load—especially for novice users—and led to errors, slower task completion, and more support requests."
      problemFollowUpSubtitle="Insights from the interviews"
      problemFollowUp={
        <>
          <p className={caseStudySectionBodyClassName}>
            Insights from user interviews showed that Rosct had an unclear
            feature hierarchy. Frequently used actions, rarely used settings,
            and confusing technical controls were all displayed with the same
            visual importance.
          </p>
          <InsightCategoryCardGroup cards={rosctInsightCards} />
          <div className="mt-10 flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-1">
              <h3 className={caseStudySectionSubtitleClassName}>
                What similar CT software tools revealed about managing complexity
              </h3>
              <p className={caseStudySectionBodyClassName}>
                To understand how complex scan workflows were handled in other CT
                systems, several industrial CT software tools were analyzed, and
                feedback was collected from Fraunhofer users who had experience
                with them. The review was centered on how each tool supported
                navigation, parameter control, image handling, system feedback,
                and beginner accessibility.
              </p>
            </div>
            <ToolReviewCardRow cards={rosctToolReviewCards} />
          </div>
        </>
      }
      solution={
        <div className="flex w-full flex-col gap-10">
          <ExperienceLevelsCard
            title="Two experience levels for different user needs"
            columns={[
              {
                title: "Assistant Mode — Guided + Automated",
                subtitle:
                  "For less-experienced users and future scan automation.",
                features: [
                  "Step-by-step guidance",
                  "Automatic magnification",
                  "Automatic pre-filter",
                  "Automatic exposure time",
                  "Simplified labels",
                  "Fewer visible controls",
                ],
              },
              {
                title: "Expert Mode — Refined + User-Centered",
                subtitle: "For experienced users who need full control.",
                features: [
                  "Improved visual hierarchy",
                  "Clearer grouping",
                  "Visible scan-critical actions",
                  "Better Image Manager",
                  "Clearer labels/icons",
                  "Advanced controls still available",
                ],
              },
            ]}
            designDecision="Reduce complexity without removing expert control."
          />
          <div className="flex w-full flex-col gap-1">
            <h3 className={caseStudySectionSubtitleClassName}>
              First ideation of Assistant Mode
            </h3>
            <p className={caseStudySectionBodyClassName}>
              Inspired by Lumafield, the first Assistant Mode concept simplified
              the scan setup by using clearer labels and making core actions more
              visible.
            </p>
            <div className="mt-6">
              <AssistantModeJourneyMap
                intro={assistantModeJourneyIntro}
                designDecision={assistantModeJourneyDecision}
                phases={assistantModeJourneyPhases}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-6">
            <h3 className={caseStudySectionSubtitleClassName}>
              How Assistant Mode evolved
            </h3>
            <AssistantModeEvolutionSection
              cards={assistantModeEvolutionCards}
              unchangedScreens={assistantModeUnchangedScreens}
            />
            <AssistantModeFinalDesignCard
              title="Final design after 7 iterations"
              description="Refined through 7 iterations and user feedback, the final interface offers guided workflows, clearer hierarchy, and real-time feedback for a more intuitive and reliable scanning experience."
              designOutcome="Guided workflow, clearer hierarchy, and real-time feedback."
            />
            <div className="[&_figcaption]:italic">
              <ImageWithCaptionGroup
                images={assistantModeFinalDesignScreens}
                uniformHeight={false}
              />
            </div>
          </div>
          <ExpertModeRefinementSection {...expertModeRefinement} />
        </div>
      }
      impactContent={<UxImpactSection {...uxImpact} />}
      reflectionSubtitle="What I learned"
      reflection={
        <div className="flex w-full flex-col gap-6">
          <p className={caseStudySectionBodyClassName}>
            One of the most valuable lessons for me was understanding how
            important transparency is in automation. Users felt more confident
            when they could see what the system was doing instead of the process
            happening invisibly in the background.
          </p>
          <p className={caseStudySectionBodyClassName}>
            I also learned how much impact small design decisions can have.
            Simple changes like clearer terminology, better visual hierarchy,
            and guided workflows made the experience feel much more approachable
            and less stressful for beginner users.
          </p>
          <p className={caseStudySectionBodyClassName}>
            Most importantly, this project showed me the value of iteration and
            collaboration. Working closely with researchers, lab operators, and
            developers helped us shape a solution that was not only more
            intuitive, but also realistic and useful in a real working
            environment.
          </p>
        </div>
      }
    />
  );
}
