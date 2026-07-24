# Foundations of LLM Post-Training in Changing Environments (FLLMPT 2026)

Website for the **FLLMPT 2026** workshop, built with [Astro 5](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages.

## Pages

| Route | Content |
|---|---|
| `/` | Homepage — title, banner image, key dates, abstract |
| `/call` | Call for papers — topics, deadlines, submission instructions |
| `/speakers` | Invited speakers grid |
| `/program` | Workshop schedule + `.ics` calendar download |
| `/papers` | Accepted papers with collapsible abstracts |
| `/organisers` | Organising committee |
| `/sponsors` | Sponsor tiers |

## Stack

- **Astro 5** — file-based routing, static output
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **MDX + Content Collections** — typed schemas for speakers, papers, schedule, organisers, sponsors
- **GitHub Actions** — builds and deploys `dist/` to GitHub Pages on every push to `main`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/WorkshopSite/](http://localhost:4321/WorkshopSite/).

## Adding content

All content lives in `src/content/`. Each subdirectory maps to a collection with a typed schema defined in `src/content/config.ts`.

| Directory | What to add |
|---|---|
| `src/content/speakers/` | One `.md` file per speaker |
| `src/content/papers/` | One `.md` file per accepted paper |
| `src/content/schedule/` | One `.md` file per time slot |
| `src/content/organisers/` | One `.md` file per committee member |
| `src/content/sponsors/` | One `.md` file per sponsor |

**Speaker example** (`src/content/speakers/jane-doe.md`):

```yaml
---
name: "Jane Doe"
affiliation: "University of Example"
talkTitle: "My Talk Title"
role: "Assistant Professor"
url: "https://janedoe.com"
photo: "/WorkshopSite/images/speakers/jane-doe.jpg"
order: 1
---
Optional bio text here.
```

## Images

Place images in `public/images/`:

```
public/images/
├── speakers/   ← speaker photos
├── sponsors/   ← sponsor logos
└── other/      ← banner and miscellaneous images
```

Reference them in content files as `/WorkshopSite/images/...`.

## Calendar

The calendar download is intentionally disabled until the exact FLLMPT workshop day and venue are confirmed. When those details are known, generate `public/pace2026.ics` from the programme and enable the button in `src/pages/program.astro`.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys `dist/` to GitHub Pages.

Live site: [https://JDIXON-2.github.io/WorkshopSite/](https://JDIXON-2.github.io/WorkshopSite/)
