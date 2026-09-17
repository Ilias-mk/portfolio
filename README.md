# Portfolio

Personal portfolio site built with React and Vite, available in English and Swedish.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
```

The static site is generated in `dist/`. That folder is what gets uploaded to AWS.

## Project structure

```
src/
  components/        UI sections (Header, Hero, Projects, About, Contact, Footer)
    visuals/         Illustrations shown next to each project
  data/profile.js    Contact links and project data (repo links, tech stack)
  i18n/              Translations (en, sv) and the language context
  index.css          Design tokens and styles
```

## Adding a project

1. Add an entry to `projects` in `src/data/profile.js`.
2. Add its texts under `projects.items.<id>` in both languages in `src/i18n/translations.js`.

## Deployment (planned)

Amazon S3 (static files) + CloudFront (CDN and HTTPS) + ACM certificate, optionally Route 53 for a custom domain, with GitHub Actions deploying on every push to `main`.
