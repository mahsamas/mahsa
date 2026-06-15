import howw from "../../assets/rosct/howw.png";
import old from "../../assets/rosct/old.png";
import rosct from "../../assets/rosct/Rosct.png";
import video from "../../assets/rosct/final-new.mp4";
import { CaseStudyLayout, Highlight } from "../../components/case-study";

export function RosctCaseStudy() {
  return (
    <CaseStudyLayout
      heroMedia={{ type: "video", src: video }}
      title="Simplifying complex workflows for industrial CT scanning software"
      role="Lead UI/UX Designer"
      team="1 Designer, 2 Developers"
      tools="Figma"
      duration="3 month"
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
      solutionSubtitle="The solution"
      solution="We introduced a guided, step-by-step scanning flow with clearer defaults, contextual help, and progressive disclosure so users only see the options they need at each stage of the workflow."
      impactSubtitle="Impact"
      impacts={[
        {
          title: "30% faster completion",
          description:
            "Guided workflows helped users finish scanning tasks more quickly with fewer back-and-forth steps.",
        },
        {
          title: "Lower cognitive load",
          description:
            "A clearer interface reduced the mental effort required to make decisions during complex scans.",
        },
        {
          title: "Better novice onboarding",
          description:
            "New users completed core tasks with less trainer support after the redesign.",
        },
        {
          title: "Fewer support requests",
          description:
            "Workflow-related help tickets dropped as common pain points were addressed in the UI.",
        },
      ]}
      reflectionSubtitle="Reflection"
      reflection="This project reinforced that designing for multiple expertise levels works best when the interface adapts to the user—not the other way around. Simplifying the default path while keeping advanced controls accessible was key to the outcome."
    />
  );
}
