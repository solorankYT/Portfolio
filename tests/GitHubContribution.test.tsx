import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vitest";
import GitHubContribution from "../src/components/githubContribution";
import { getContributionDays } from "../src/components/githubContributionData";

test("the contribution panel includes a usable profile link before loading", () => {
  const markup = renderToStaticMarkup(<GitHubContribution />);

  expect(markup).toMatch(/<a[^>]+href="https:\/\/github\.com\/solorankYT"[^>]*>/);
  expect(markup).toContain("View GitHub profile");
  expect(markup).toContain('rel="noopener noreferrer"');
  expect(markup).not.toMatch(/<(iframe|script|img)\b/);
});

test("the contribution calendar accepts only valid dates for the chosen year", () => {
  const payload = {
    contributions: [
      { date: "2028-12-01", count: 1, level: 1 },
      { date: "2028-02-30", count: 2, level: 2 },
      { date: "2028-02-29", count: 3, level: 2 },
      { date: "2028-02-29", count: 4, level: 3 },
      { date: "2028-01-01", count: -1, level: 4 },
      { date: "2028-01-02", count: 1, level: 5 },
      { date: "2028-01-03", count: 1.5, level: 2 },
      { date: "2027-12-31", count: 2, level: 2 },
      null,
    ],
  };

  expect(getContributionDays(payload, 2028)).toEqual([
    { date: "2028-02-29", count: 4, level: 3 },
    { date: "2028-12-01", count: 1, level: 1 },
  ]);
});

test("malformed or empty responses yield no calendar data", () => {
  expect(getContributionDays({ contributions: "invalid" }, 2026)).toEqual([]);
  expect(getContributionDays({ contributions: [] }, 2026)).toEqual([]);
  expect(getContributionDays(null, 2026)).toEqual([]);
});
