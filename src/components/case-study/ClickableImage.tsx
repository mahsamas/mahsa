import { useEffect, useState } from "react";

type ClickableImageProps = {
  src: string;
  alt: string;
  ariaLabel?: string;
  className?: string;
  wrapperClassName?: string;
};

export function ClickableImage({
  src,
  alt,
  ariaLabel,
  className = "block h-auto w-full max-w-full",
  wrapperClassName = "",
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const label = ariaLabel ?? alt;

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
        className={`cursor-zoom-in ${wrapperClassName}`}
        aria-label={`View larger: ${label}`}
      >
        <img src={src} alt={alt} className={className} draggable={false} />
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={label}
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
              alt={alt}
              className="h-auto w-auto max-w-[min(95vw,1600px)]"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
