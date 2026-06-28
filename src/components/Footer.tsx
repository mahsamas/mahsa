import { Link } from "react-router-dom";
import { siteLinks } from "./siteLinks";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      <div
        className="pointer-events-none absolute -top-36 right-[-80px] size-80 rounded-full bg-brand/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-160px] left-[-120px] size-80 rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-12 sm:py-16">
        <div className="relative overflow-hidden border-b border-white/15 pb-10 sm:pb-14">
          <div
            className="pointer-events-none absolute top-2 right-6 size-14 rotate-12 rounded-xl border border-brand/30"
            aria-hidden
          />

          <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-[560px]">
              <span className="mb-5 inline-flex items-center gap-2 text-[12px] font-medium text-white/65">
                <span
                  className="size-2 rounded-full bg-[#9cffc1] shadow-[0_0_10px_rgba(156,255,193,0.8)]"
                  aria-hidden
                />
                Available for new projects
              </span>
              <h2 className="text-[30px] leading-[1.16] font-medium tracking-[-0.9px] sm:text-[44px] sm:tracking-[-1.5px]">
                Have something in mind? I’d love to hear about it.
              </h2>
            </div>

            <a
              href="mailto:avamasoodi@gmail.com"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-brand px-5 py-3 text-[14px] font-medium text-white shadow-[0_8px_28px_rgba(100,57,255,0.3)] transition-transform hover:-translate-y-0.5 hover:bg-[#7655ff]"
            >
              Email me
              <span
                className="text-[18px] transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="w-fit text-[18px] leading-none font-bold tracking-[-0.36px] text-white transition-colors hover:text-brand"
          >
            Mahsa Masoudizad
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:avamasoodi@gmail.com"
                  className="text-[13px] text-white/55 transition-colors hover:text-white"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mahsa-masoudizad/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-white/55 transition-colors hover:text-white"
                >
                  LinkedIn
                  <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-[12px] text-white/35">
            © {new Date().getFullYear()} Mahsa Masoudizad. Designed with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
