import { ClickableImage } from "./ClickableImage";

export type CaptionedImage = {
  src: string;
  caption: string;
  alt?: string;
};

type ImageWithCaptionProps = CaptionedImage & {
  uniformHeight?: boolean;
  className?: string;
};

export function ImageWithCaption({
  src,
  caption,
  alt,
  uniformHeight = false,
  className,
}: ImageWithCaptionProps) {
  const imageAlt = alt ?? caption;

  return (
    <figure className={`w-full ${className ?? ""}`}>
      <ClickableImage
        src={src}
        alt={imageAlt}
        ariaLabel={caption}
        wrapperClassName={`rounded-sm border border-divider ${
          uniformHeight
            ? "h-48 w-full overflow-hidden sm:h-56"
            : "overflow-visible bg-hero-bg"
        }`}
        className={
          uniformHeight
            ? "h-full w-full object-cover"
            : "block h-auto w-full max-w-full"
        }
      />
      <figcaption className="mt-2 text-center text-[13px] leading-[19px] font-normal text-text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
