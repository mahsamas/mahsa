import { useEffect, useState } from "react";

export type CaptionedImage = {
  src: string;
  caption: string;
  alt?: string;
};

type ImageWithCaptionProps = CaptionedImage & {
  uniformHeight?: boolean;
};

export function ImageWithCaption({
  src,
  caption,
  alt,
  uniformHeight = false,
}: ImageWithCaptionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imageAlt = alt ?? caption;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const openLightbox = () => setIsOpen(true);

  return (
    <>
      <figure className="w-full">
        <div
          role="button"
          tabIndex={0}
          onClick={openLightbox}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openLightbox();
            }
          }}
          className={`cursor-zoom-in rounded-sm border border-divider ${
            uniformHeight
              ? "h-48 w-full overflow-hidden sm:h-56"
              : "overflow-visible bg-hero-bg"
          }`}
          aria-label={`View larger: ${caption}`}
        >
          <img
            src={src}
            alt={imageAlt}
            className={
              uniformHeight
                ? "h-full w-full object-cover"
                : "block h-auto w-full max-w-full"
            }
            draggable={false}
          />
        </div>
        <figcaption className="mt-2 text-center text-[13px] leading-[19px] font-normal text-text-muted">
          {caption}
        </figcaption>
      </figure>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed right-4 top-4 z-[101] border-0 bg-transparent text-3xl leading-none text-white transition-opacity hover:opacity-70"
            aria-label="Close enlarged image"
          >
            ×
          </button>
          <div className="flex min-h-full items-start justify-center pt-8">
            <img
              src={src}
              alt={imageAlt}
              className="h-auto w-auto max-w-[min(95vw,1600px)]"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
