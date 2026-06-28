import { Link } from "react-router-dom";
import { siteLinks, type NavLink } from "./siteLinks";

type NavbarProps = {
  name?: string;
  links?: NavLink[];
};

export function Navbar({
  name = "Mahsa Masoudizad",
  links = siteLinks,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-divider bg-hero-bg">
      <nav
        className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 sm:h-20 sm:px-12"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-[17px] leading-none font-bold tracking-[-0.34px] text-brand hover:text-brand active:text-brand sm:text-[21px] sm:tracking-[-0.42px]"
        >
          {name}
        </Link>

        <ul className="flex items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className="text-[14px] leading-5 font-normal text-black transition-colors hover:text-brand active:text-brand sm:text-[16px] sm:leading-6"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-[14px] leading-5 font-normal text-black transition-colors hover:text-brand active:text-brand sm:text-[16px] sm:leading-6"
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
