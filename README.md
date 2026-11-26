# Mark Funa’s portfolio

Mark Funa is a software engineer based in Quezon City, Philippines. This site showcases his full-stack projects, enterprise application support experience, certifications, and résumé. It uses React, TypeScript, Vite, and CSS.

[Portfolio](https://portfolio-seven-teal-71.vercel.app/) · [GitHub](https://github.com/solorankYT)

## Local development

Use Node.js 22.13 or later in the 22.x series, or Node.js 24 and later, with npm.

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run lint
npm test
npm run build
npm run preview
```

The build outputs static files to `dist`. Vercel routing is configured in `vercel.json`. The `/about` URL redirects to the Experience section and unknown routes use the app’s 404 page.

## Content and assets

- Portfolio sections are composed in `src/Home.tsx`, with section components in `src/components`.
- `public/MarkFunaResume.pdf` is the downloadable résumé. Use screenshots with demo data or approval for public display.
- Search and sharing metadata live in `index.html`. When updating the production domain, update its canonical URL, social preview URL, and the URLs in `public/robots.txt` and `public/sitemap.xml`.
