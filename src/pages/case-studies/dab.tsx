import dabFinalConcept from "../../assets/dab/dab-final-concept.png";
import dabHero from "../../assets/dab/dab-hero.jpg";
import dabKeyProblem from "../../assets/dab/dab-key-problem.png";
import dabOverview from "../../assets/dab/overview.svg";
import { CaseStudyLayout } from "../../components/case-study";

export function DabCaseStudy() {
  return (
    <CaseStudyLayout
      heroMedia={{ type: "image", src: dabHero, alt: "dab Agent Application" }}
      title="Optimizing data extraction for a SaaS analytics platform"
      role="UX/UI Designer"
      team="2 Designers"
      tools="Figma"
      duration="Multi-month"
      methods={[
        "User Research",
        "Wireframing",
        "Usability Testing",
        "Prototyping",
      ]}
      contextSubtitle="About dab Agent & My Role"
      contextImages={[
        {
          src: dabOverview,
          caption: "dab Agent Application overview",
        },
        {
          src: dabFinalConcept,
          caption: "Final Concept (Step-Based Layout)",
        },
      ]}
      context="This application enables technical users (e.g. data or business analysts) to connect to external systems (such as SAP), validate configurations, and run data extraction or analytics processes with clear progress feedback."
      contextFollowUpSubtitle="My role"
      contextFollowUp={
        <>
          I worked as a UI/UX designer in a small team alongside another designer,
          focusing on structuring the workflow and improving system visibility. This
          helped simplify a complex technical process and made it easier to
          understand and follow.
        </>
      }
      problemSubtitle="The Challenge"
      problemImages={[
        {
          src: dabKeyProblem,
          caption: "Old user interface of web application",
        },
      ]}
      problem="From user feedback, it was clear that the tool was too complex for many users. Because it lacked clear guidance, validation, and onboarding, users often made mistakes, had connection problems, and found the results hard to understand. This made the tool frustrating for non-technical users."
      solutionSubtitle="Exploring two design directions"
      solution={
        <>
          I created and tested two design concepts. While users initially preferred
          the first for its familiarity, it showed usability and scalability
          limitations. We selected the second design for its step-by-step guidance,
          reduced complexity, and better alignment with system logic and future
          scalability.
          <br />
          <br />
          The final wireframes translate the step-based concept into a complete
          end-to-end flow — covering connection setup, server type, and every
          authentication path the tool supports. Key changes included replacing
          tabs with step indicators, removing distracting table actions, and
          simplifying form labels so required fields are clear by default.
          <br />
          <br />
          The final UI brings the step-based concept to life — a calm, guided flow
          with clear progress, focused forms, and consistent patterns across every
          connection and authentication path.
        </>
      }
      impactSubtitle="Clearer steps, fewer errors"
      impacts={[
        {
          title: "Clearer input process",
          description:
            "Users found the process of entering required inputs much clearer and easier to follow after the redesign.",
        },
        {
          title: "Better table navigation",
          description:
            "The results table felt clearer and easier to navigate, with necessary filters visible and accessible.",
        },
        {
          title: "Clearer error messaging",
          description:
            "Error messages and their causes were presented more clearly, helping users understand issues faster.",
        },
        {
          title: "Less workflow frustration",
          description:
            "The restructured workflow helped users continue their tasks with less confusion and frustration.",
        },
      ]}
      reflectionSubtitle="What I learned"
      reflection="This project taught me that in complex products, every small detail matters more than you think. While working on the interface, I realized that users notice everything — from the clarity of an icon to the way a progress bar moves or how information is organized inside a table."
    />
  );
}
