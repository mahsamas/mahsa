import type { ReactNode } from "react";
import type { CaptionedImage } from "./ImageWithCaption";
import { caseStudySectionSubtitleClassName } from "./CaseStudySection";
import { ImageWithCaptionGroup } from "./ImageWithCaptionGroup";

export const caseStudySectionBodyClassName =
  "text-[15px] leading-[22px] font-normal text-text-muted sm:text-[16px] sm:leading-[24px]";

export const caseStudySectionContentClassName = "flex w-full flex-col gap-6";

type CaseStudySectionContentProps = {
  text: ReactNode;
  images?: CaptionedImage[];
  imagesFirst?: boolean;
  followUpSubtitle?: string;
  followUpText?: ReactNode;
};

export function CaseStudySectionContent({
  text,
  images = [],
  imagesFirst = false,
  followUpSubtitle,
  followUpText,
}: CaseStudySectionContentProps) {
  const body = <p className={caseStudySectionBodyClassName}>{text}</p>;
  const gallery = <ImageWithCaptionGroup images={images} />;

  return (
    <div className={caseStudySectionContentClassName}>
      {imagesFirst ? (
        <>
          {gallery}
          {body}
        </>
      ) : (
        <>
          {body}
          {gallery}
        </>
      )}
      {followUpSubtitle && followUpText ? (
        <>
          <h3 className={caseStudySectionSubtitleClassName}>
            {followUpSubtitle}
          </h3>
          <p className={caseStudySectionBodyClassName}>{followUpText}</p>
        </>
      ) : null}
    </div>
  );
}
