# kashmith.com

Personal portfolio of **Kashmith Samaranayaka** — Software Engineer · AI/ML.

**Live:** [kashmith.com](https://kashmith.com)

## Stack

- [Next.js 15](https://nextjs.org) (App Router, React Server Components, ISR)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) with shadcn/ui-convention components
- [Motion](https://motion.dev) (framer-motion) for animations
- Deployed on [Vercel](https://vercel.com)

## Live GitHub stats

The stats row and contribution heatmap are fetched server-side from the
GitHub GraphQL API and revalidated hourly (ISR). Set a `GITHUB_TOKEN`
environment variable (public-data-only PAT is enough); without it the site
falls back to a static snapshot and never crashes.

```bash
cp .env.example .env.local   # then fill in GITHUB_TOKEN
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Content

All portfolio content lives in typed data files under [`src/data/`](src/data) —
profile, experience, projects, publications, skills, certifications. Edit those
files to update the site; no component changes needed.
