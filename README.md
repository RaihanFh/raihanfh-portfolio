# Raihan Fadhilah Hafiizh — Portfolio

Personal portfolio website for Raihan Fadhilah Hafiizh, Backend Developer
(NestJS, Node.js, Prisma, PostgreSQL), with Flutter and NLP experience.

## Tech stack

- React 19 (JavaScript, JSX)
- Vite 8
- Plain CSS (design tokens in `src/css/index.css`)
- `@heroicons/react` (outline icons)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run lint      # must pass with 0 errors
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Editing content

All text content lives in `src/data/`. Components only render data, so update
these files to change what the site shows:

- `src/data/profile.js` — name, title, summary, links, location
- `src/data/experience.js` — work experience (newest first)
- `src/data/education.js` — education
- `src/data/projects.js` — projects (set `link` to a URL or `null`)
- `src/data/skills.js` — skill groups
- `src/data/activities.js` — activities and organizations

Images live in `src/assets/`. The CV file should be placed at
`public/CV_Raihan_Fadhilah_Hafiizh.pdf`.

## Deployment

Static hosting (Vercel, Netlify, or GitHub Pages):

- Build command: `npm run build`
- Output directory: `dist`

No server code is required.
