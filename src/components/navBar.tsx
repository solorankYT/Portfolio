import { useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function NavBar({ isPortfolio }: { isPortfolio: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const home = isPortfolio ? "" : "/";

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="site-container header-inner">
        <a className="site-brand" href={`${home}#home`} onClick={() => setMenuOpen(false)}>
          Mark Funa
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          ref={menuButton}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav
          aria-label="Main"
          className={menuOpen ? "site-navigation site-navigation--open" : "site-navigation"}
          id="site-navigation"
        >
          <ul>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`${home}#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
            <li className="mobile-resume">
              <a href="/MarkFunaResume.pdf" download>
                <Download size={16} aria-hidden="true" /> Résumé
              </a>
            </li>
          </ul>
        </nav>

        <a className="site-button site-button--outline header-resume" href="/MarkFunaResume.pdf" download>
          <Download size={16} aria-hidden="true" />
          Résumé
        </a>
      </div>
    </header>
  );
}
