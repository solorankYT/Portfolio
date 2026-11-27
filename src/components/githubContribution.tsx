import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Activity, ThemeInput } from "react-activity-calendar";
import { getContributionDays } from "./githubContributionData";

const profileUrl = "https://github.com/solorankYT";
const contributionsUrl = "https://github-contributions-api.jogruber.de/v4/SolorankYT";
const greenTheme: ThemeInput = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

type Calendar = typeof import("react-activity-calendar")["ActivityCalendar"];
type CalendarState =
  | { status: "loading" | "unavailable" }
  | { status: "ready"; data: Activity[]; year: number; Calendar: Calendar };

export default function GitHubContribution() {
  const section = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CalendarState>({ status: "loading" });

  useEffect(() => {
    const element = section.current;
    if (!element) return;

    const controller = new AbortController();
    const loadContributions = async () => {
      try {
        const year = new Date().getFullYear();
        const response = await fetch(`${contributionsUrl}?y=${year}`, { signal: controller.signal });
        if (!response.ok) throw new Error("Contributions request failed");

        const data = getContributionDays(await response.json(), year);
        if (data.length === 0) throw new Error("No current-year contributions were returned");

        const { ActivityCalendar } = await import("react-activity-calendar");
        if (!controller.signal.aborted) setState({ status: "ready", data, year, Calendar: ActivityCalendar });
      } catch {
        if (!controller.signal.aborted) setState({ status: "unavailable" });
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      void loadContributions();
      return () => controller.abort();
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      void loadContributions();
    }, { rootMargin: "240px" });
    observer.observe(element);

    return () => {
      observer.disconnect();
      controller.abort();
    };
  }, []);

  return (
    <div ref={section} className="text-gray-300">
      {state.status === "ready" ? (
        <div
          className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg overflow-x-auto custom-scroll text-gray-100"
          role="region"
          aria-label={`GitHub contributions for ${state.year}`}
          tabIndex={0}
        >
          <state.Calendar data={state.data} theme={greenTheme} colorScheme="dark" />
        </div>
      ) : (
        <p role="status">
          {state.status === "loading" ? "Loading contributions…" : "The contribution calendar is temporarily unavailable."}
        </p>
      )}
      <a
        className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub profile
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}
