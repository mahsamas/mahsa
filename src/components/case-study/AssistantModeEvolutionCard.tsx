import { ClickableImage } from "./ClickableImage";

export type EvolutionComparisonImage = {
  src: string;
  alt: string;
  iterationLabel: string;
  subtitle: string;
};

export type AssistantModeEvolutionCardData = {
  screenTitle: string;
  before: EvolutionComparisonImage;
  after: EvolutionComparisonImage;
  whyItChanged: string;
  changeLabel?: string;
};

type ComparisonImageProps = EvolutionComparisonImage;

function ComparisonImage({
  iterationLabel,
  subtitle,
  src,
  alt,
}: ComparisonImageProps) {
  return (
    <figure className="flex min-w-0 flex-1 flex-col gap-2">
      <p className="text-[12px] leading-[18px] font-medium text-black/60">
        {iterationLabel}
      </p>
      <div className="overflow-hidden rounded-lg border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <ClickableImage
          src={src}
          alt={alt}
          ariaLabel={subtitle}
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="text-center text-[13px] leading-[19px] italic text-text-muted">
        {subtitle}
      </figcaption>
    </figure>
  );
}

type AssistantModeEvolutionCardProps = AssistantModeEvolutionCardData;

export function AssistantModeEvolutionCard({
  screenTitle,
  before,
  after,
  whyItChanged,
  changeLabel = "Why it changed: ",
}: AssistantModeEvolutionCardProps) {
  return (
    <article className="flex w-full flex-col gap-6 rounded-2xl border border-black/[0.06] bg-hero-bg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:gap-8 sm:p-6">
      <h4 className="text-[18px] leading-[24px] font-medium tracking-[-0.36px] text-black sm:text-[20px] sm:leading-[26px]">
        {screenTitle}
      </h4>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <ComparisonImage {...before} />
        <ComparisonImage {...after} />
      </div>

      <div className="border-t border-black/[0.06] pt-5">
        <p className="text-[13px] leading-[19px] text-text-muted sm:text-[14px] sm:leading-[20px]">
          {changeLabel ? (
            <span className="font-medium text-black">{changeLabel}</span>
          ) : null}
          {whyItChanged}
        </p>
      </div>
    </article>
  );
}

type AssistantModeEvolutionSectionProps = {
  cards: AssistantModeEvolutionCardData[];
  unchangedScreens?: {
    images: EvolutionComparisonImage[];
    caption: string;
  };
};

export function AssistantModeEvolutionSection({
  cards,
  unchangedScreens,
}: AssistantModeEvolutionSectionProps) {
  return (
    <div className="flex w-full flex-col gap-8">
      {cards.map((card) => (
        <AssistantModeEvolutionCard key={card.screenTitle} {...card} />
      ))}
      {unchangedScreens ? (
        <article className="flex w-full flex-col gap-6 rounded-2xl border border-black/[0.06] bg-hero-bg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:gap-8 sm:p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {unchangedScreens.images.map((image) => (
              <ComparisonImage key={image.subtitle} {...image} />
            ))}
          </div>
          <div className="border-t border-black/[0.06] pt-5">
            <p className="text-[13px] leading-[19px] text-text-muted sm:text-[14px] sm:leading-[20px]">
              {unchangedScreens.caption}
            </p>
          </div>
        </article>
      ) : null}
    </div>
  );
}
