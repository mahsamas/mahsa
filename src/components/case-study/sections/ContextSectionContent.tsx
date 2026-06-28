import type { ReactNode } from "react";
import {
  caseStudySectionBodyClassName,
  caseStudySectionContentClassName,
} from "../CaseStudySectionContent";
import { caseStudySectionSubtitleClassName } from "../CaseStudySection";
import { type CaptionedImage } from "../ImageWithCaption";
import { ImageWithCaptionGroup } from "../ImageWithCaptionGroup";

type ContextSectionContentProps = {
  intro: ReactNode;
  images: CaptionedImage[];
  usersTitle: string;
  usersText: ReactNode;
  imagesAfterFollowUp?: boolean;
  imagesUniformHeight?: boolean;
};

export function ContextSectionContent({
  intro,
  images,
  usersTitle,
  usersText,
  imagesAfterFollowUp = false,
  imagesUniformHeight = true,
}: ContextSectionContentProps) {
  const gallery =
    images.length > 0 ? (
      <ImageWithCaptionGroup
        images={images}
        uniformHeight={imagesUniformHeight}
      />
    ) : null;
  const followUp = usersText ? (
    <div className="flex w-full flex-col gap-1">
      <h3 className={caseStudySectionSubtitleClassName}>{usersTitle}</h3>
      <p className={caseStudySectionBodyClassName}>{usersText}</p>
    </div>
  ) : null;

  const introContent =
    typeof intro === "string" ? (
      <p className={caseStudySectionBodyClassName}>{intro}</p>
    ) : (
      <div
        className={`flex w-full flex-col gap-6 [&_p]:m-0 ${caseStudySectionBodyClassName}`}
      >
        {intro}
      </div>
    );

  return (
    <div className={caseStudySectionContentClassName}>
      {introContent}
      {imagesAfterFollowUp ? (
        <>
          {followUp}
          {gallery}
        </>
      ) : (
        <>
          {gallery}
          {followUp}
        </>
      )}
    </div>
  );
}
