import { useEffect } from "react";
import Home from "./Home";
import SideNav from "./components/navBar";

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
    <div className="min-h-screen bg-gray-900 dark:bg-gray-950">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SideNav isPortfolio={isPortfolio} />
      {isPortfolio ? (
        <Home />
      ) : (
        <main className="md:ml-52 px-3 pt-20 md:pt-10" id="main-content" tabIndex={-1}>
          <div className="container max-w-3xl mx-auto p-8 bg-gray-800 border border-gray-700 rounded-xl text-gray-200">
            <p className="mb-2 text-sm font-semibold text-yellow-400">404</p>
            <h1 className="mb-3 text-3xl font-bold text-white">Page not found</h1>
            <a className="text-yellow-400 underline underline-offset-4" href="/">Back to the portfolio</a>
          </div>
        </main>
      )}
    </div>
  );
}
