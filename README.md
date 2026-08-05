<p align="center">
  <img src="https://img.shields.io/badge/React-19-000000?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Status-Live-0aa64e?style=flat-square" alt="Status" />
</p>

<h1 align="center">Pranit Acharju Newar — Portfolio</h1>

<p align="center">
  <b>AI Engineer · Full-Stack Developer · IT Instructor</b>
</p>

<p align="center">
  <a href="https://pranitacharjunewar.com.np">pranitacharjunewar.com.np</a>
</p>

---

A production-grade portfolio built with **React 19, TypeScript, and Vite**, styled after the **Vercel design language** — light canvas, black-ink CTAs, hairline card borders, and the signature mesh-gradient hero.

## Sections

Hero (with profile card) → Focus areas → About → Experience timeline → Stats band → Projects → Services → Skills → Certifications → Contact (with mailto form) → Footer

## Production features

- **SEO**: structured JSON-LD (Person schema), Open Graph, Twitter cards, canonical URL
- **Static SEO files**: `robots.txt`, `sitemap.xml`, `llms.txt`, and a styled `404.html`
- **UX**: scrollspy navigation, scroll-reveal animations, back-to-top button, responsive mobile sheet nav
- **Accessibility**: skip-link, focus states, aria labels, `prefers-reduced-motion` support
- **Performance**: strict TypeScript, zero runtime UI dependencies, ~70 kB gzipped JS

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Deployment

The included [GitHub Actions workflow](.github/workflows/deploy.yml) automatically builds and deploys to **GitHub Pages** on every push to `main`.

1. Push this repository to GitHub (repo name must be `portfolio`).
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Your site goes live at `https://<username>.github.io/portfolio/`.

## Tech

- React 19 + TypeScript (strict)
- Vite 6
- Vercel-inspired design system (light canvas / black ink / mesh gradient)
- Zero runtime UI dependencies