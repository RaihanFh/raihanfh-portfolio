# Portfolio Build Guide: Raihan Fadhilah Hafiizh

> **For the AI agent (OpenCode):** This file is the single source of truth for building this portfolio. Read it fully before changing any code. Work through the phases in [Section 9](#9-execution-plan) in order, tick the checkboxes as you go, and run the verification commands at the end of each phase.

---

## Table of Contents

1. [Ground Rules](#1-ground-rules)
2. [Project Overview](#2-project-overview)
3. [Tech Stack and Constraints](#3-tech-stack-and-constraints)
4. [Current State Audit](#4-current-state-audit)
5. [Target File Structure](#5-target-file-structure)
6. [Content (Source of Truth)](#6-content-source-of-truth)
7. [Section-by-Section Spec](#7-section-by-section-spec)
8. [Design System](#8-design-system)
9. [Execution Plan](#9-execution-plan)
10. [Open Items Needing the Owner](#10-open-items-needing-the-owner)
11. [Definition of Done](#11-definition-of-done)

---

## 1. Ground Rules

These rules apply to every task.

1. **Never invent facts.** All career content comes from Section 6. If something is missing (a URL, a screenshot, a tech stack), insert a clearly marked `TODO` and list it in Section 10. Do not make up values.
2. **Keep the existing visual language.** The project already has a look (warm beige background, blue accent, floating pill navbar, white rounded cards). Extend it. Do not redesign it.
3. **Do not add new dependencies** unless this guide says so. No Tailwind, no UI kits, no animation libraries. Plain CSS plus `@heroicons/react` only.
4. **Separate content from presentation.** All text content lives in `src/data/`. Components only render data.
5. **Small, reviewable changes.** One phase at a time. After each phase, run `npm run lint` and `npm run build`. Fix errors before moving on.
6. **Do not delete user assets** (`src/assets/*`) except those explicitly listed for removal in Phase 1.
7. **Git hygiene.** Commit after each phase with a clear message, for example `feat: add education section`.
8. **Ask before guessing.** If a requirement is ambiguous, stop and ask rather than choosing silently.

---

## 2. Project Overview

| Item | Detail |
|---|---|
| **Owner** | Raihan Fadhilah Hafiizh |
| **Role being showcased** | Backend Developer (NestJS, Node.js, Prisma, PostgreSQL), with Flutter and NLP experience |
| **Location** | Tangerang, Banten, Indonesia |
| **Type** | Single-page personal portfolio (no routing, section-based scroll) |
| **Audience** | Recruiters and engineering managers scanning in under 2 minutes |
| **Primary goal** | Communicate in the first screen: *who I am, what I do, and how to contact me* |
| **Secondary goal** | Let visitors download the CV and reach GitHub and LinkedIn in one click |
| **Tone** | Professional, clean, concise |

---

## 3. Tech Stack and Constraints

| Layer | Choice |
|---|---|
| Framework | React 19 (JavaScript, JSX, no TypeScript) |
| Bundler | Vite 8 with `@vitejs/plugin-react` |
| Styling | Plain CSS files in `src/css/`, using CSS variables |
| Icons | `@heroicons/react` (`24/outline`) |
| Linting | ESLint 10 (config already exists) |
| Hosting target | Static hosting (Vercel, Netlify, or GitHub Pages). No server code. |

**Commands**

```bash
npm install
npm run dev       # local dev server
npm run lint      # must pass with 0 errors
npm run build     # must succeed
npm run preview   # check the production build
```

---

## 4. Current State Audit

### 4.1 What already exists

| Area | Status |
|---|---|
| Floating glass pill `Header` with smooth-scroll nav | Done |
| Home section (`MeCard`): photo, name, 3-paragraph summary | Done |
| Experience section with `ExperienceCard` | Done, 3 of 4 jobs |
| Projects section with `ProjectCard` (3-phone mockup for mobile, image for web, alternating layout) | Done, 2 projects |
| Skills section | Placeholder, wrong content |
| Contact section | Minimal (one email button) |

### 4.2 Problems to fix

| # | Problem | Where | Fix |
|---|---|---|---|
| 1 | Stray scratch file copied from another website's HTML | `src/components/rand` | Delete |
| 2 | Duplicate `id="home"` and nested `<section>` | `App.jsx` wraps `MeCard` in `<section id="home">`, and `MeCard.jsx` also renders `<section id="home">` | Keep the wrapper in `App.jsx`. Make `MeCard` render a `<div>` or `<article>` |
| 3 | Skills are wrong (React, Next.js, Express, Tailwind) and do not match the CV | `App.jsx` | Replace with CV skills (Section 6.5) |
| 4 | Experience is missing the current role | `App.jsx` | Add *Fullstack Developer Intern* at PT. Data Integrasi Inovasi (Oct 2026 to Present) |
| 5 | No Education section | n/a | Add (Section 6.3) |
| 6 | Project links are placeholders (`https://github.com/yourusername/project`) | `App.jsx` | Replace or hide when unknown (Section 10) |
| 7 | "Calorie Counter Application" project from the CV is missing | n/a | Add (Section 6.4) |
| 8 | Activities and Organizations from the CV are missing | n/a | Add (Section 6.6) |
| 9 | Active nav item only updates on click, not while scrolling | `Header.jsx` | Add scroll-spy with `IntersectionObserver` |
| 10 | Page title is `my-portfolio` and has no meta description | `index.html` | Fix (Section 7.9) |
| 11 | `index.css` is entirely commented out. Global styles live in `App.css`. | `src/css/` | Create real global styles and design tokens (Section 8) |
| 12 | Unused template assets and dead CSS (`react.svg`, `vite.svg`, `hero.png`, `icons.svg`, `.quote-icon`) | `src/assets`, `public`, `App.css` | Remove if not referenced |
| 13 | `import React from "react"` is unused in `ProjectCard.jsx`; data is built inside `App()` on every render | `ProjectCard.jsx`, `App.jsx` | Remove import; move data to `src/data/` |
| 14 | `README.md` is the default Vite template text | root | Rewrite (Phase 6) |
| 15 | Contact section has no GitHub, LinkedIn, or CV download | `App.jsx` | Expand (Section 7.7) |
| 16 | Experience cards show every bullet, so older jobs are very long | `ExperienceCard.jsx` | Show the first 3 bullets, with a "Show more / Show less" toggle for the rest |
| 17 | Theme toggle code is commented out in `Header.jsx` | `Header.jsx` | Implement properly in Phase 5, or remove the dead comment |
| 18 | Section borders (`border-bottom: 1px solid #eee`) and `min-height: 80vh` leave large empty gaps on short sections | `App.css` | Reduce min-height; use spacing instead of hard borders |

---

## 5. Target File Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── CV_Raihan_Fadhilah_Hafiizh.pdf      # owner places the CV here (see Section 10)
├── src/
│   ├── main.jsx
│   ├── App.jsx                              # composes sections only, no content
│   ├── assets/
│   │   ├── profile photo.jpeg               # consider renaming to profile-photo.jpeg
│   │   ├── lakeside1.jpg
│   │   ├── lakeside2.jpg
│   │   ├── lakeside3.jpg
│   │   └── chatbot.png
│   ├── data/                                # ALL content lives here
│   │   ├── profile.js                       # name, title, summary, links, location
│   │   ├── experience.js
│   │   ├── education.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── activities.js
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MeCard.jsx
│   │   ├── SectionTitle.jsx                 # shared h2 with consistent style
│   │   ├── ExperienceCard.jsx
│   │   ├── EducationCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillGroup.jsx
│   │   ├── ActivityCard.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useActiveSection.js              # scroll-spy for the navbar
│   └── css/
│       ├── index.css                        # tokens, reset, base typography
│       ├── App.css                          # layout and shared utilities
│       ├── Header.css
│       └── components.css                   # card, project, skills, contact styles
├── index.html
├── package.json
├── README.md
└── PORTFOLIO_GUIDE.md                       # this file
```

---

## 6. Content (Source of Truth)

> Content below is taken from the owner's CV. Copy it exactly. Light trimming for layout is allowed only where noted.

### 6.1 Profile (`src/data/profile.js`)

```js
export const profile = {
  name: "Raihan Fadhilah Hafiizh",
  shortName: "Raihan Fadhilah H.",
  title: "Backend Developer",
  location: "Tangerang, Banten, Indonesia",
  email: "raihanfh305@gmail.com",
  github: "https://github.com/RaihanFh",
  linkedin: "https://linkedin.com/in/raihanfadhilahh",
  cvFile: "/CV_Raihan_Fadhilah_Hafiizh.pdf",
  // phone: "(+62) 813-9451-0759",  // NOT shown publicly by default, see Section 10
  summary: [
    "Backend Developer with hands-on experience developing enterprise ERP systems and RESTful APIs using NestJS, Node.js, Prisma ORM, and PostgreSQL.",
    "Experienced in building business modules, integrating third-party services, developing Excel/PDF data processing features, and optimizing database queries with additional experience developing mobile applications and NLP-based systems.",
    "Passionate about building clean, maintainable, and reliable backend applications.",
  ],
  // Words to render in <strong> inside the first paragraph:
  highlight: ["NestJS", "Node.js", "Prisma ORM", "PostgreSQL"],
};
```

### 6.2 Experience (`src/data/experience.js`)

Order: **newest first**. Four entries.

| # | Position | Company | Location | Dates |
|---|---|---|---|---|
| 1 | Fullstack Developer Intern | PT. Data Integrasi Inovasi | Tangerang, Banten | October 2026 to Present |
| 2 | Backend Developer | Altimeda Cipta Visitama | Depok, West Java | October 2025 to July 2026 |
| 3 | Software Developer | Lakeside FnB Group | Bandung, West Java | September 2024 to August 2025 |
| 4 | Programmer (Internship) | Telkom University Internal | Bandung, West Java | November 2024 to December 2024 |

**Entries 2, 3, and 4:** keep the `desc` bullets **exactly as they are today** in `src/App.jsx`. Move them into the data file unchanged.

**Entry 1 (new), bullets:**

```js
{
  position: "Fullstack Developer Intern",
  at: "PT. Data Integrasi Inovasi",
  location: "Tangerang, Banten",
  startDate: "October 2026",
  endDate: "Present",
  desc: [
    "Participated in an intensive production-ready developer internship program focusing on end-to-end system workflows, architectural understanding, and strong task ownership.",
    "Applied professional technical standards including proper Git workflows (branching strategies and clear commit messages), disciplined AI usage strictly as a collaborative discussion partner, and maintaining clean, maintainable, and reliable code.",
    "Maintained rigorous daily discipline through progress documentation, structured daily reporting (progress, blockers, and next steps), and proactive communication when facing technical hurdles.",
    "Contributed to the development of enterprise system modules by ensuring deep comprehension of system flows, architectural structures, and end-to-end data pipelines.",
  ],
}
```

Schema for every entry: `{ position, at, location, startDate, endDate, desc: string[] }`. Add `location` to the existing three entries using the table above. `ExperienceCard` should render the location next to the date using `MapPinIcon`. If `endDate === "Present"`, show a small green "Current" badge.

### 6.3 Education (`src/data/education.js`)

```js
export const education = [
  {
    school: "Telkom University",
    degree: "Bachelor of Computing",
    gpa: "3.68 / 4.00",
    location: "Bandung, West Java",
    startDate: "September 2021",
    endDate: "August 2025",
    thesis:
      "Design and Development of a Mobile Attendance Application Based on Geolocation for Lakeside FnB Group Telkom University Staff Using Extreme Programming Method.",
  },
];
```

### 6.4 Projects (`src/data/projects.js`)

| # | Title | Type | Status |
|---|---|---|---|
| 1 | Mobile Attendance System | `mobile` | Exists (images: `lakeside1/2/3.jpg`) |
| 2 | NLP Chatbot (Desa Borobudur) | `web` | Exists (image: `chatbot.png`) |
| 3 | Calorie Counter Application | `other` | **New**, no images or link yet |

Keep entries 1 and 2 as they are in `App.jsx`, with these fixes:

- Replace placeholder `link` values with `null` until the owner supplies real URLs. `ProjectCard` already hides the button when `link` is falsy.
- Mobile Attendance: the tag `"REST API"` is not stated in the CV. Flag it in Section 10 for the owner to confirm. Do not remove it silently.
- Optionally add one extra highlight line under the description for Mobile Attendance: `95.24% accuracy, 100% precision, 94.44% recall, 100% specificity` (this is in the CV).

**Project 3 (new):**

```js
{
  title: "Calorie Counter Application",
  type: "other",
  description:
    "A calorie-tracking application that calculates BMI-based nutrition targets from user profile information and gives personalized daily calorie recommendations, instead of relying on a fixed calorie target.",
  tags: [], // TODO(owner): add the real tech stack
  images: null,
  link: null,
}
```

`ProjectCard` must support `type: "other"` or missing images by rendering a **placeholder visual** (a soft gradient panel with a heroicon such as `ChartBarIcon` or `HeartIcon`). It must not crash or show a broken image.

### 6.5 Skills (`src/data/skills.js`)

Replace the placeholder skills with these groups:

```js
export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "Java", "C++", "Dart", "SQL"] },
  { group: "Backend", items: ["Node.js", "NestJS", "REST API Development", "API Integration", "Authentication"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "Prisma ORM", "Database Design", "SQL Optimization"] },
  { group: "Tools & Other", items: ["Flutter", "Flask", "Docker", "Git", "GitHub", "Postman", "Swagger", "Katalon", "DBeaver", "Testing", "Technical Documentation"] },
];
```

### 6.6 Activities (`src/data/activities.js`)

```js
export const activities = [
  {
    title: "Head of Publication, Decoration, and Documentation Division",
    org: "Campus Expo 2021",
    location: "Subang, West Java",
    startDate: "October 2021",
    endDate: "December 2021",
    desc: [
      "Led the publication, decoration, and documentation division to promote, organize, and document the event.",
      "Acted as field coordinator, successfully managing the execution of a campus and major introduction event with participants from SMAIT Al-Ukhuwah Pagaden.",
    ],
  },
  {
    title: "Trainer",
    org: "Abdimas 2425-2 CompThink SDN Cipagalo",
    location: "Bandung, West Java",
    startDate: "March 2025",
    endDate: "July 2025",
    desc: [
      "Served as a trainer for Computational Thinking workshops for students at SD Negeri Cipagalo 1 Bojongsoang.",
      "Designed and facilitated Tower of Hanoi games as part of the training activities.",
    ],
  },
];
```

---

## 7. Section-by-Section Spec

### 7.0 Page order and nav IDs

| Order | Section | `id` | In navbar? |
|---|---|---|---|
| 1 | Home | `home` | Yes |
| 2 | Experience | `experience` | Yes |
| 3 | Projects | `projects` | Yes |
| 4 | Skills | `skills` | Yes |
| 5 | Education and Activities | `education` | Yes (label: "Education") |
| 6 | Contact | `contact` | Yes |
| 7 | Footer | n/a | No |

Navbar order must match page order. Keep the pill style. On screens at most 640px wide, the navbar must stay on one line without overflow (smaller font and padding are already in place; verify with 6 items, and allow horizontal scroll inside the pill if needed).

### 7.1 Header (`Header.jsx`)

- Keep the floating glass pill and the brand name that fades in after scrolling past Home.
- Replace click-only active state with a scroll-spy via `hooks/useActiveSection.js`. It uses `IntersectionObserver` over all section IDs and returns the id currently in view. Clicking a link still smooth-scrolls.
- Use `<nav>` with real `<a href="#id">` elements instead of `<li onClick>`, for accessibility and keyboard support. Keep `scrollIntoView` smooth behavior, or rely on CSS `scroll-behavior: smooth`.
- Read `shortName` from `profile`.

### 7.2 Home (`MeCard.jsx`)

- Render inside the single `<section id="home">` in `App.jsx` (fix the nested duplicate).
- Content from `profile.summary`; wrap `profile.highlight` words in `<strong>`.
- Add a **title line** under the name: `Backend Developer` (small, accent color).
- Add a **button row** below the summary:
  - Primary: **Download CV** (`profile.cvFile`, with the `download` attribute).
  - Secondary: **Contact Me** (scrolls to `#contact`).
  - Icon links: GitHub and LinkedIn (use inline SVG; heroicons has no brand icons).
- Keep the angled desktop photo and the mobile circular footer photo.
- Add `loading="eager"` and `width`/`height` to the profile image to avoid layout shift.

### 7.3 Experience (`ExperienceCard.jsx`)

- Four cards, newest first, with data from `experience.js`.
- Show: position, company badge, date range, location, and a "Current" badge if `endDate === "Present"`.
- Show the first **3** bullets by default. If more exist, show a **Show more / Show less** button (`aria-expanded` set correctly).
- Keep the hover lift and the blue bullet dots.

### 7.4 Projects (`ProjectCard.jsx`)

- Three projects, alternating left and right layout (already implemented).
- Support three media modes: `mobile` (3-phone mockup), `web` (single image), and `other` or no image (placeholder panel).
- Every `<img>` needs a meaningful `alt` and `loading="lazy"`.
- Show the **Visit Project** overlay and button only when `link` is truthy.
- Show tags only when the `tags` array is non-empty.
- Fix: the mobile mockup uses `project.images[0] || project.images`. Normalize `images` to an array in one place so it is not handled by guesswork.

### 7.5 Skills (`SkillGroup.jsx`)

- Four grouped blocks from `skills.js`, each with a small heading (the group name) and a wrap of pill chips (reuse the `.tech-tag` look).
- Layout: 2-column grid on desktop (at least 768px), 1 column on mobile.

### 7.6 Education and Activities

- `EducationCard.jsx` shows school, degree, GPA badge, dates, location, and the thesis as an italic quote block.
- `ActivityCard.jsx` shows title, organization, dates, location, and bullets.
- Both sit under a single section with two sub-headings: **Education** and **Activities and Organizations**.

### 7.7 Contact (`ContactSection.jsx`)

- Short invitation line (keep the existing: *"Feel free to reach out for collaborations or opportunities!"*).
- Three action buttons: **Email** (`mailto:`), **GitHub**, **LinkedIn**. Open external links with `target="_blank" rel="noreferrer"`.
- Show a "Download CV" link as well.
- Do **not** show the phone number unless the owner approves (Section 10).

### 7.8 Footer (`Footer.jsx`)

- One line: `© {current year} Raihan Fadhilah Hafiizh`. Use `new Date().getFullYear()`.
- Small "Back to top" link.

### 7.9 `index.html` and SEO

- `<title>`: `Raihan Fadhilah Hafiizh | Backend Developer`
- `<meta name="description" content="Backend Developer experienced in NestJS, Node.js, Prisma, and PostgreSQL. Portfolio of Raihan Fadhilah Hafiizh.">`
- Add Open Graph tags (`og:title`, `og:description`, `og:type=website`). Leave `og:image` as a TODO for the owner.
- Set `<html lang="en">` (already set) and `<meta name="theme-color" content="#eceae6">`.
- Update the favicon only if the owner supplies one. Keep the current one otherwise.

---

## 8. Design System

Define these tokens in `src/css/index.css` under `:root`, and then **replace the hard-coded hex values** across the CSS files with the variables.

```css
:root {
  /* Colors (taken from the existing design) */
  --bg: #eceae6;
  --surface: #ffffff;
  --surface-muted: #f8fafc;
  --border: #e2e8f0;
  --text: #334155;
  --text-strong: #0f172a;
  --text-muted: #64748b;
  --accent: #2563eb;
  --accent-hover: #1d4ed8;
  --accent-soft: #e2e8f0;
  --success: #16a34a;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;

  /* Spacing scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;

  /* Type */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Shadows */
  --shadow-card: 0 4px 6px -1px rgba(0,0,0,.05), 0 2px 4px -2px rgba(0,0,0,.05);
  --shadow-card-hover: 0 10px 15px -3px rgba(0,0,0,.08), 0 4px 6px -4px rgba(0,0,0,.04);
}
```

**Layout rules**

- Content max-width: `900px`, centered (existing `.section`).
- `.section` should use `padding: var(--space-12) var(--space-6)` and `min-height: auto`, except Home (`min-height: 90vh`). Remove the `#eee` border-bottom.
- Section headings (`h2`) all use the shared `SectionTitle` component: size 1.75rem, weight 700, with a short accent underline (3rem wide, 3px tall).
- Breakpoints: 640px (small), 768px (profile card), 900px (project rows). Keep these.
- Respect `prefers-reduced-motion`: disable the fade, hover-lift, and phone-mockup transitions.
- Visible focus ring on all interactive elements: `outline: 2px solid var(--accent); outline-offset: 2px`.
- Color contrast must meet WCAG AA for body text.

**Dark mode (Phase 5, optional)**

- Implement only after everything else is done.
- Use `[data-theme="dark"]` on `<html>` with dark overrides for the tokens above. Persist the choice in `localStorage` (wrapped in try/catch), defaulting to the system preference.
- Reuse the commented-out toggle button in `Header.jsx` (sun/moon icon swap).

---

## 9. Execution Plan

Work in order. Tick each box when done. Commit at the end of each phase.

### Phase 1: Cleanup

- [x] Delete `src/components/rand`
- [x] Remove unused assets if unreferenced: `src/assets/react.svg`, `src/assets/vite.svg`, `src/assets/hero.png`, `public/icons.svg`
- [x] Remove dead CSS (`.quote-icon`) and the unused `React` import in `ProjectCard.jsx`
- [x] Fix the duplicate `id="home"` / nested section (Problem #2)
- [x] Update `index.html` title and meta tags (Section 7.9)

**Verify:** `npm run lint && npm run build`

### Phase 2: Data layer

- [x] Create `src/data/*.js` files exactly per Section 6
- [x] Move experience and project data out of `App.jsx`; add the new Fullstack Intern entry, Calorie Counter project, Education, Activities, and the corrected Skills
- [x] Add `location` to the existing experience entries
- [x] Set placeholder project `link` values to `null`
- [x] `App.jsx` should now contain only imports, section wrappers, and `.map()` calls

**Verify:** `npm run dev`. The page looks the same as before, plus the new data appears.

### Phase 3: Components

- [ ] Create `SectionTitle`, `EducationCard`, `ActivityCard`, `SkillGroup`, `ContactSection`, `Footer`
- [ ] Update `ExperienceCard` (location, Current badge, Show more / Show less)
- [ ] Update `ProjectCard` (placeholder visual for `other`, normalized images, lazy loading, empty-tag handling)
- [ ] Update `MeCard` (title line, Download CV, GitHub, LinkedIn buttons)
- [ ] Update `Header` (semantic links, scroll-spy hook, 6 nav items, `shortName` from `profile`)
- [ ] Wire everything in `App.jsx` in the order from Section 7.0

**Verify:** `npm run lint && npm run build`. Manually check all six nav links.

### Phase 4: Styling and responsiveness

- [ ] Add design tokens to `index.css` and replace hard-coded colors with variables
- [ ] Split styles: `App.css` (layout), `components.css` (cards, projects, skills, contact)
- [ ] Apply layout rules from Section 8 (section spacing, `SectionTitle` underline, focus rings, reduced motion)
- [ ] Test at widths 360px, 768px, 1024px, and 1440px. No horizontal scrolling. Navbar fits at 360px.

**Verify:** `npm run build && npm run preview`, then check each width.

### Phase 5: Polish (optional)

- [ ] Dark mode with toggle (Section 8)
- [ ] Subtle fade-in on scroll for cards (`IntersectionObserver` plus CSS, respecting reduced motion)
- [ ] Lighthouse check targets: Performance 90 or higher, Accessibility 95 or higher, SEO 95 or higher
- [ ] Compress large images if needed (`chatbot.png` is about 1 MB; `profile photo.jpeg` is about 640 KB). Convert to WebP only if the owner agrees.

### Phase 6: Documentation and deployment

- [ ] Rewrite `README.md`: project description, tech stack, how to run, how to edit content (point to `src/data/`), how to deploy
- [ ] Add a short deployment note (Vercel or Netlify: build command `npm run build`, output dir `dist`)
- [ ] Final run: `npm run lint && npm run build`

---

## 10. Open Items Needing the Owner

The agent must **not** fill these in itself. Keep the `TODO` markers in place, leave the UI graceful when they are empty, and report this list back at the end.

| # | Item | Why it is needed | Where it goes |
|---|---|---|---|
| 1 | Place the CV file at `public/CV_Raihan_Fadhilah_Hafiizh.pdf` | "Download CV" button | `profile.cvFile` |
| 2 | GitHub repo or demo URL for Mobile Attendance System | Replaces placeholder link | `projects.js` |
| 3 | GitHub repo or demo URL for NLP Chatbot | Replaces placeholder link | `projects.js` |
| 4 | Tech stack tags for Calorie Counter, plus screenshots and link (if any) | Project card is currently sparse | `projects.js` |
| 5 | Confirm whether `"REST API"` should stay as a tag on Mobile Attendance | It is not mentioned in the CV for that project | `projects.js` |
| 6 | Decide whether to show the phone number publicly (`(+62) 813-9451-0759`) | Public phone numbers attract spam | `profile.js`, `ContactSection` |
| 7 | Open Graph preview image | Link previews on LinkedIn, WhatsApp, and similar | `index.html` |
| 8 | Optional: a case-study card for the ERP backend work (Altimeda). It is likely private or confidential code, so a description-only card with no link is an option. | Strongest experience has no project card | `projects.js` |
| 9 | Optional: review the Fullstack Intern bullets. They are copied from the CV and are more about process than outcomes. Add concrete modules, features, or results as the internship progresses. | Stronger recruiter impact | `experience.js` |

---

## 11. Definition of Done

- [ ] `npm run lint` passes with 0 errors and `npm run build` succeeds
- [ ] All six sections render in the correct order, and the navbar highlights the section in view while scrolling
- [ ] All content matches the CV. The skills section no longer shows React, Next.js, Express, or Tailwind.
- [ ] The current role (Fullstack Developer Intern) appears first in Experience, with a "Current" badge
- [ ] No placeholder URLs (`yourusername`) remain anywhere in the code
- [ ] No console errors or warnings in dev or preview
- [ ] No duplicate element IDs in the DOM
- [ ] The layout works from 360px to 1440px with no horizontal scrolling
- [ ] Keyboard navigation works, with visible focus on all links and buttons
- [ ] Every image has `alt` text
- [ ] `README.md` is updated and `src/components/rand` is deleted
- [ ] Section 10 items are reported back to the owner as a checklist

---

## Appendix: Prompt to Start OpenCode

Paste this into OpenCode after placing this file in the project root:

```text
Read PORTFOLIO_GUIDE.md in full. It is the single source of truth for this project.
Start with Phase 1 and work through the phases in order. After each phase, run
npm run lint and npm run build, fix any errors, and commit. Do not invent any
content: use the TODO markers for anything listed in Section 10. When all phases
are done, give me a summary of what changed and the list of open items I need to
provide.
```
