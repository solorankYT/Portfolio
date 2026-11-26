import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vitest";
import GitHubProfile from "../src/components/githubContribution";

test("renders a directly usable GitHub profile link without an embedded third-party widget", () => {
  const markup = renderToStaticMarkup(<GitHubProfile />);

  expect(markup).toMatch(/<a[^>]+href="https:\/\/github\.com\/solorankYT"[^>]*>/);
  expect(markup).toContain("View GitHub profile");
  expect(markup).toContain('rel="noopener noreferrer"');
  expect(markup).not.toMatch(/<(iframe|script|img)\b/);
});
