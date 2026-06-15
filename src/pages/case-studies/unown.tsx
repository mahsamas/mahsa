import contextVideo from "../../assets/unown/context.mp4";
import final1 from "../../assets/unown/final-1.png";
import final2 from "../../assets/unown/final-2.png";
import userFlow from "../../assets/unown/user-flow.svg";
import { CaseStudyLayout, Highlight } from "../../components/case-study";

export function UnownCaseStudy() {
  return (
    <CaseStudyLayout
      heroMedia={{ type: "video", src: contextVideo }}
      title="Designing a conversion-focused homepage to drive app downloads"
      role="UX/UI Designer"
      team="2 Designers"
      tools="Figma"
      duration="2023"
      methods={[
        "User Research",
        "Analytics Review",
        "Information Architecture",
        "Prototyping",
      ]}
      contextSubtitle="Shifting the Focus from Website to App"
      contextImages={[
        {
          src: final1,
          caption: "Final design — homepage top",
        },
        {
          src: final2,
          caption: "Final design — homepage upper middle",
        },
      ]}
      context="UNOWN is a commercial platform focused on fashion and sustainability."
      contextFollowUpSubtitle="My role"
      contextFollowUp={
        <>
          I worked as a UI/UX designer alongside a senior designer, improving
          the experience for users interested in{" "}
          <Highlight>sustainable fashion</Highlight> and for brands aiming to
          collaborate with UNOWN and drive app adoption.
        </>
      }
      problemSubtitle="A Strategic Shift Based on User Insights"
      problemImages={[
        {
          src: userFlow,
          caption: "Original homepage layout before redesign",
        },
      ]}
      problem={
        <>
          Research from user reviews and analytics showed that most users
          preferred completing their purchases through the mobile application
          rather than the website. At the same time, business constraints
          required reducing costs by removing the shopping functionality from
          the website.
          <br />
          <br />
          This led to a strategic shift: repositioning the website as a
          commercial platform for both B2C users and B2B partners, with a focus
          on encouraging users to download and use the app.
          <br />
          <br />
          <Highlight>
            Users browse on the website, but complete their purchase in the app.
          </Highlight>
        </>
      }
      solutionSubtitle="Structuring a Clear Path to App Adoption"
      solution={
        <>
          We designed the homepage as a conversion-focused entry point, guiding
          users toward downloading the app. By defining a clear visual hierarchy,
          structuring the information architecture, and using storytelling, we
          created a clear path from web to app. In collaboration with the
          marketing team, we aligned content and UI to communicate the value of
          the app effectively.
          <br />
          <br />
          Key changes included replacing the lifestyle headline with a clear
          value statement and primary CTA, adding a sticky download bar with App
          Store and Google Play buttons, and introducing ratings, press logos,
          and customer quotes above the fold to build trust.
          <br />
          <br />
          The final homepage tells one focused story — a sharp hero, three clear
          benefits, trusted social proof, and a download CTA that follows the
          user down the page.
        </>
      }
      impactSubtitle="Homepage Strategy & Impact"
      impacts={[
        {
          title: "Clear value proposition",
          description:
            "Visitors understand what the app does and how to install it within the first few seconds.",
        },
        {
          title: "Always-visible download CTA",
          description:
            "A sticky install bar keeps the download action reachable at any scroll position.",
        },
        {
          title: "Stronger trust signals",
          description:
            "Ratings, press logos, and customer quotes reduce hesitation for first-time visitors.",
        },
        {
          title: "Focused conversion path",
          description:
            "The redesign aligned business goals with user behaviour and guided users from exploration to app download.",
        },
      ]}
      reflectionSubtitle="What I learned"
      reflection='This project reminded me that a high-converting page is not about clever words or beautiful imagery — it is about a clear path. When visitors always know what the page is offering and what the next step is, conversion follows naturally. Next time, I would run quick five-second tests earlier in the process to validate whether the value proposition lands before investing in visuals.'
    />
  );
}
