import { Link } from "react-router-dom";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  name?: string;
  links?: NavLink[];
};

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About me", href: "/about" },
];

export function Navbar({
  name = "Mahsa",
  links = defaultLinks,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-divider bg-hero-bg">
      <nav
        className="mx-auto flex h-16 max-w-[1034px] items-center justify-between px-6 sm:px-12"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-[18px] leading-none font-bold tracking-[-0.36px] text-brand hover:text-brand active:text-brand"
        >
          {name}
        </Link>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className="text-[14px] leading-5 font-normal text-black transition-colors hover:text-brand active:text-brand"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-[14px] leading-5 font-normal text-black transition-colors hover:text-brand active:text-brand"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
