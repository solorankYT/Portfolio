import { useState, useEffect } from "react";
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

export default function SideNav() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-52 flex-col justify-between py-10 px-6 z-30">

        <div>
   
          <nav aria-label="Page sections">
            <ul className="space-y-1">
              {sections.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className={`group flex items-center gap-3 w-full text-left py-2 text-sm font-medium transition-colors duration-200
                        ${isActive ? "text-yellow-400" : "text-gray-500 hover:text-gray-200"}`}
                    >
                      <span
                        className={`h-px transition-all duration-300
                          ${isActive ? "w-8 bg-yellow-400" : "w-4 bg-gray-600 group-hover:w-6 group-hover:bg-gray-400"}`}
                      />
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Social links */}
        <ul className="flex flex-col gap-4 text-gray-500 text-lg">
          <li>
            <a
              href="https://github.com/solorankYT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <FaGithub /> <span className="text-xs">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/markfuna/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <FaLinkedin /> <span className="text-xs">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:markfuna6@gmail.com"
              aria-label="Email"
              className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <CgMail className="text-base" /> <span className="text-xs">Email</span>
            </a>
          </li>
        </ul>
      </aside>

      <header className="md:hidden fixed top-0 left-0 w-full z-30 bg-gray-900/90 backdrop-blur border-b border-gray-800 px-5 py-3 flex items-center justify-between">
        <p className="text-white font-bold text-sm">Mark Funa</p>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="text-gray-400 hover:text-white p-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-12 left-0 w-full z-20 bg-gray-900 border-b border-gray-800 px-5 py-4">
          <ul className="space-y-3">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium w-full text-left transition-colors duration-200
                    ${active === id ? "text-yellow-400" : "text-gray-400 hover:text-white"}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}