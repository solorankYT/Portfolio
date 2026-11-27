import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, expect, test, vi } from "vitest";
import App from "../src/App";

afterEach(() => vi.unstubAllGlobals());

function renderAt(pathname: string) {
  vi.stubGlobal("window", {
    location: { pathname },
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });

  return renderToStaticMarkup(<App />);
}

test("the home page exposes one main landmark and preserves its original introduction", () => {
  const markup = renderAt("/");

  expect(markup.match(/<main(?:\s|>)/g)).toHaveLength(1);
  expect(markup.match(/<aside(?:\s|>)/g)).toHaveLength(1);
  expect(markup).toMatch(/<h1[^>]*>Hi, I&#x27;m <span[^>]*>Mark Funa<\/span><\/h1>/);
  expect(markup).toContain('href="#main-content"');
  expect(markup).toContain('href="/MarkFunaResume.pdf"');
  expect(markup).toContain("Download CV");
  expect(markup).not.toMatch(/<img\b[^>]*alt="Mark Funa"/i);
  expect(markup).not.toContain('href="#"');
});

test("one mobile menu gives access to section anchors and contact links", () => {
  const markup = renderAt("/");
  const mobileMenu = markup.match(/<nav[^>]*id="mobile-navigation"[^>]*>[\s\S]*?<\/nav>/)?.[0];

  expect(markup.match(/aria-controls="mobile-navigation"/g)).toHaveLength(1);
  expect(markup).toContain('aria-label="Open menu"');
  expect(mobileMenu).toContain("hidden");
  expect(mobileMenu).toContain('href="#projects"');
  expect(mobileMenu).toContain('href="mailto:');
  expect(mobileMenu).toContain('href="https://www.linkedin.com/');
  expect(mobileMenu).toContain('href="https://github.com/');
});

test("the legacy about path still renders the portfolio and its experience section", () => {
  expect(renderAt("/about/")).toContain('id="experience"');
});

test("an unknown path offers a way back to the portfolio", () => {
  const markup = renderAt("/unknown-page");

  expect(markup).toContain("Page not found");
  expect(markup).toMatch(/<a[^>]*href="\/"[^>]*>[\s\S]*Back to the portfolio<\/a>/);
});
