import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contributions", label: "Contribution" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/solorankYT", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/markfuna/", icon: FaLinkedin },
  { label: "Email", href: "mailto:markfuna6@gmail.com", icon: CgMail },
];

function SocialLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <ul className={mobile ? "mt-3 flex flex-wrap gap-x-5 border-t border-gray-700 pt-2" : "flex flex-col gap-4"}>
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            className={`flex items-center gap-2 text-gray-400 transition-colors hover:text-yellow-400 ${mobile ? "min-h-10 text-sm" : "text-xs"}`}
          >
            <Icon aria-hidden="true" className="text-sm" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SideNav({ isPortfolio }: { isPortfolio: boolean }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const prefix = isPortfolio ? "" : "/";

  useEffect(() => {
    if (!isPortfolio) return;

    const targets = sections.flatMap(({ id }) => {
      const section = document.getElementById(id);
      return section ? [section] : [];
    }).reverse();

    const update = () => {
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const current = atBottom ? targets[0] : targets.find((section) => section.getBoundingClientRect().top <= 120);
      setActive(current?.id ?? "home");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isPortfolio]);

  return (
    <>
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-52 flex-col justify-between gap-8 overflow-y-auto py-10 px-6 z-30">
        <nav aria-label="Page sections">
          <ul className="space-y-1">
            {sections.map(({ id, label }) => {
              const isActive = isPortfolio && active === id;
              return (
                <li key={id}>
                  <a
                    href={`${prefix}#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`group flex items-center gap-3 w-full text-left py-2 text-sm font-medium transition-colors duration-200
                      ${isActive ? "text-yellow-400" : "text-gray-400 hover:text-gray-200"}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-300
                        ${isActive ? "w-8 bg-yellow-400" : "w-4 bg-gray-600 group-hover:w-6 group-hover:bg-gray-400"}`}
                    />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <SocialLinks />
      </aside>

      <header
        className="md:hidden fixed top-0 left-0 w-full z-30 bg-gray-900/95 backdrop-blur border-b border-gray-800 h-[52px] px-5 flex items-center justify-between"
        onKeyDown={(event) => {
          if (event.key === "Escape" && menuOpen) {
            setMenuOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        <a href={`${prefix}#home`} onClick={() => setMenuOpen(false)} className="text-white font-bold text-sm">
          Mark Funa
        </a>
        <button
          ref={menuButton}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          className="grid h-11 w-11 -mr-2 place-items-center text-gray-400 hover:text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          id="mobile-navigation"
          aria-label="Page sections"
          hidden={!menuOpen}
          className="fixed top-[52px] left-0 w-full max-h-[calc(100dvh_-_52px)] overflow-y-auto bg-gray-900 border-b border-gray-800 px-5 py-3"
        >
          <ul>
            {sections.map(({ id, label }) => {
              const isActive = isPortfolio && active === id;
              return (
                <li key={id}>
                  <a
                    href={`${prefix}#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex min-h-10 items-center text-sm font-medium transition-colors duration-200
                      ${isActive ? "text-yellow-400" : "text-gray-400 hover:text-white"}`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <SocialLinks mobile />
        </nav>
      </header>
    </>
  );
}
