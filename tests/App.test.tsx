import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, expect, test, vi } from "vitest";
import App from "../src/App";

afterEach(() => vi.unstubAllGlobals());

function renderAt(pathname: string) {
  vi.stubGlobal("window", { location: { pathname } });

  return renderToStaticMarkup(<App />);
}

test("the home page exposes one main landmark, the résumé, and a contact action", () => {
  const markup = renderAt("/");

  expect(markup.match(/<main(?:\s|>)/g)).toHaveLength(1);
  expect(markup).toContain('href="#main-content"');
  expect(markup).toContain('href="/MarkFunaResume.pdf"');
  expect(markup).toContain('href="mailto:');
  expect(markup).not.toContain('href="#"');
});

test("the text-only introduction links to each featured project", () => {
  const markup = renderAt("/");

  expect(markup).toMatch(/<h1[^>]*>Mark Funa<\/h1>/);
  expect(markup).not.toMatch(/<img\b[^>]*alt="Mark Funa"/i);
  for (const id of ["project-salapi", "project-laundry-pos", "project-hotel-reservation"]) {
    expect(markup).toContain(`href="#${id}"`);
    expect(markup).toContain(`id="${id}"`);
  }
});

test("the legacy about path still renders the portfolio and its experience section", () => {
  expect(renderAt("/about/")).toContain('id="experience"');
});

test("an unknown path offers a way back to the portfolio", () => {
  const markup = renderAt("/unknown-page");

  expect(markup).toContain("Page not found");
  expect(markup).toMatch(/<a[^>]*href="\/"[^>]*>[\s\S]*Back to the portfolio<\/a>/);
});
