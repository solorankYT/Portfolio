import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Home from "./Home";
import NavBar from "./components/navBar";

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const legacyAbout = pathname === "/about";
  const isPortfolio = pathname === "/" || legacyAbout;

  useEffect(() => {
    if (!isPortfolio) return;

    if (legacyAbout) {
      window.history.replaceState(window.history.state, "", `/${window.location.search}#experience`);
    }

    const sectionId = window.location.hash.slice(1);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant" });
  }, [isPortfolio, legacyAbout]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavBar isPortfolio={isPortfolio} />
      {isPortfolio ? (
        <Home />
      ) : (
        <main className="site-container not-found" id="main-content" tabIndex={-1}>
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>Find my projects, experience, and contact details on the homepage.</p>
          <a className="site-button site-button--primary" href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to the portfolio
          </a>
        </main>
      )}
    </>
  );
}
