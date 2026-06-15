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
};

export function ContextSectionContent({
  intro,
  images,
  usersTitle,
  usersText,
}: ContextSectionContentProps) {
  return (
    <div className={caseStudySectionContentClassName}>
      <p className={caseStudySectionBodyClassName}>{intro}</p>
      {images.length > 0 ? <ImageWithCaptionGroup images={images} /> : null}
      <div className="flex w-full flex-col gap-1">
        <h3 className={caseStudySectionSubtitleClassName}>{usersTitle}</h3>
        <p className={caseStudySectionBodyClassName}>{usersText}</p>
      </div>
    </div>
  );
}
