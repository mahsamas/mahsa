export type UserInsightAvatarVariant = "consultant" | "analyst" | "admin";

export type UserInsightQuoteCardData = {
  avatarVariant: UserInsightAvatarVariant;
  role: string;
  insight: string;
  quote: string;
};

const avatarStyles: Record<
  UserInsightAvatarVariant,
  { bg: string; skin: string; hair: string; accent: string }
> = {
  consultant: {
    bg: "#F0EBFF",
    skin: "#F5D0A8",
    hair: "#5C4033",
    accent: "#8B6FD4",
  },
  analyst: {
    bg: "#FFF0E0",
    skin: "#F2C9A0",
    hair: "#5C3317",
    accent: "#F5A623",
  },
  admin: {
    bg: "#E8F4FD",
    skin: "#D4A574",
    hair: "#1A1A2E",
    accent: "#4A90D9",
  },
};

function CartoonAvatar({ variant }: { variant: UserInsightAvatarVariant }) {
  const { bg, skin, hair, accent } = avatarStyles[variant];

  return (
    <div
      className="flex size-14 shrink-0 items-center justify-center rounded-full sm:size-16"
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="sm:h-11 sm:w-11"
      >
        {variant === "consultant" ? (
          <>
            <ellipse cx="20" cy="22" rx="11" ry="12" fill={skin} />
            <path
              d="M9 14C9 8 13 5 20 5C27 5 31 8 31 14C31 10 27 8 20 8C13 8 9 10 9 14Z"
              fill={hair}
            />
            <circle cx="15" cy="21" r="1.5" fill="#333" />
            <circle cx="25" cy="21" r="1.5" fill="#333" />
            <path
              d="M16 27C17.5 29 22.5 29 24 27"
              stroke="#333"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <rect x="17" y="30" width="6" height="3" rx="1" fill={accent} />
          </>
        ) : null}
        {variant === "analyst" ? (
          <>
            <path
              d="M11 18C11 8 14 5 20 5C26 5 29 8 29 18C29 15 27 14 20 14C13 14 11 15 11 18Z"
              fill={hair}
            />
            <ellipse cx="20" cy="23" rx="9" ry="9.5" fill={skin} />
            <ellipse cx="11" cy="23" rx="1.8" ry="2.2" fill={skin} />
            <ellipse cx="29" cy="23" rx="1.8" ry="2.2" fill={skin} />
            <path
              d="M12 16C14 11 17 9 20 9C23 9 26 11 28 16C26 13 23 12 20 12C17 12 14 13 12 16Z"
              fill={hair}
            />
            <circle cx="10" cy="25" r="1.1" fill={accent} />
            <circle cx="30" cy="25" r="1.1" fill={accent} />
            <circle cx="16" cy="22.5" r="1.3" fill="#333" />
            <circle cx="24" cy="22.5" r="1.3" fill="#333" />
            <path
              d="M14.5 21Q16 20 17.5 21"
              stroke="#333"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <path
              d="M22.5 21Q24 20 25.5 21"
              stroke="#333"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <path
              d="M16.5 27.5Q20 30 23.5 27.5"
              stroke="#333"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </>
        ) : null}
        {variant === "admin" ? (
          <>
            <ellipse cx="20" cy="22" rx="11" ry="12" fill={skin} />
            <path
              d="M10 15C10 7 15 4 20 4C25 4 30 7 30 15C30 9 26 6 20 6C14 6 10 9 10 15Z"
              fill={hair}
            />
            <rect x="12" y="14" width="16" height="3" rx="1.5" fill={hair} opacity="0.5" />
            <circle cx="15" cy="21" r="1.5" fill="#333" />
            <circle cx="25" cy="21" r="1.5" fill="#333" />
            <path
              d="M16 27C17.5 28 22.5 28 24 27"
              stroke="#333"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M14 32H26"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        ) : null}
      </svg>
    </div>
  );
}

type UserInsightQuoteCardProps = UserInsightQuoteCardData;

export function UserInsightQuoteCard({
  avatarVariant,
  role,
  insight,
  quote,
}: UserInsightQuoteCardProps) {
  const { accent } = avatarStyles[avatarVariant];

  return (
    <article className="flex w-full gap-4 rounded-xl border border-black/[0.06] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:gap-5 sm:p-5">
      <CartoonAvatar variant={avatarVariant} />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <h4 className="text-[15px] leading-[22px] font-medium text-black sm:text-[16px] sm:leading-[24px]">
            {insight}
          </h4>
          <p
            className="text-[12px] leading-[18px] font-medium sm:text-[13px] sm:leading-[19px]"
            style={{ color: accent }}
          >
            {role}
          </p>
        </div>
        <blockquote className="border-l-2 pl-3 text-[14px] leading-[20px] text-text-muted italic sm:text-[15px] sm:leading-[22px]">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </article>
  );
}

type UserInsightQuoteCardGroupProps = {
  cards: UserInsightQuoteCardData[];
};

export function UserInsightQuoteCardGroup({
  cards,
}: UserInsightQuoteCardGroupProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      {cards.map((card) => (
        <UserInsightQuoteCard key={card.insight} {...card} />
      ))}
    </div>
  );
}
