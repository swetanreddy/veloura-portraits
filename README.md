# Veloura Portraits

Frontend-only portrait photography studio landing page built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Live Site

GitHub Pages URL:

`https://swetanreddy.github.io/veloura-portraits/`

This URL is stable as long as all of the following stay the same:

- the GitHub username remains `swetanreddy`
- the repository name remains `veloura-portraits`
- GitHub Pages stays enabled for the repository

If the username or repository name changes, the Pages URL will also change.

## Local Development

Requirements:

- Node.js 20+
- npm

Run locally:

```sh
npm install
npm run dev
```

The app runs on Vite and defaults to port `8080` unless that port is already in use.

## Scripts

```sh
npm run dev
npm run build
npm run lint
npm run preview
```

## Deployment

This project deploys automatically to GitHub Pages on every push to `main` using:

- [.github/workflows/deploy-pages.yml](/Users/trexii/Projects/veloura-portraits/.github/workflows/deploy-pages.yml)

The Vite base path is configured in:

- [vite.config.ts](/Users/trexii/Projects/veloura-portraits/vite.config.ts)

The production build reads `GITHUB_REPOSITORY` and sets the correct Pages base path automatically.

## Project Notes

- The site is frontend-only and does not include backend, chat, lead capture, or admin features.
- The retouch comparison uses a fixed portrait image with a draggable before/after treatment reveal.
- Visual direction is tuned for a dark editorial portrait studio aesthetic.
