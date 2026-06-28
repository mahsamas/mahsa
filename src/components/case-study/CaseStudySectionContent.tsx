import type { ReactNode } from "react";
import type { CaptionedImage } from "./ImageWithCaption";
import { caseStudySectionSubtitleClassName } from "./CaseStudySection";
import { ImageWithCaptionGroup } from "./ImageWithCaptionGroup";

export const caseStudySectionBodyClassName =
  "text-[15px] leading-[22px] font-normal text-text-muted sm:text-[18px] sm:leading-[24px]";

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
  const body =
    typeof text === "string" ? (
      <p className={caseStudySectionBodyClassName}>{text}</p>
    ) : (
      <div
        className={`flex w-full flex-col gap-6 [&_p]:m-0 ${caseStudySectionBodyClassName}`}
      >
        {text}
      </div>
    );
  const gallery = <ImageWithCaptionGroup images={images} />;

  return (
    <div className="flex w-full flex-col">
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
      </div>
      {followUpSubtitle && followUpText ? (
        <div className="mt-10 flex w-full flex-col gap-1">
          <h3 className={caseStudySectionSubtitleClassName}>
            {followUpSubtitle}
          </h3>
          <div
            className={`flex flex-col gap-6 ${caseStudySectionBodyClassName}`}
          >
            {followUpText}
          </div>
        </div>
      ) : null}
    </div>
  );
}
