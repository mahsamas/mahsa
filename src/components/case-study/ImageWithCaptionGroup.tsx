import { ImageWithCaption, type CaptionedImage } from "./ImageWithCaption";

type ImageWithCaptionGroupProps = {
  images: CaptionedImage[];
  uniformHeight?: boolean;
};

export function ImageWithCaptionGroup({
  images,
  uniformHeight = true,
}: ImageWithCaptionGroupProps) {
  if (images.length === 0) {
    return null;
  }

  const hasMultipleImages = images.length > 1;
  const useUniformHeight = hasMultipleImages && uniformHeight;

  return (
    <div
      className={`grid w-full grid-cols-1 gap-6 bg-hero-bg p-4 sm:p-6 ${
        hasMultipleImages
          ? "items-stretch sm:grid-cols-2 sm:gap-8"
          : "items-start"
      }`}
    >
      {images.map((image) => (
        <ImageWithCaption
          key={image.caption}
          uniformHeight={useUniformHeight}
          {...image}
        />
      ))}
    </div>
  );
}
