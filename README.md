# Personal Portfolio — deezdipan.github.io

A minimalist, accessible, and responsive personal portfolio website built with Astro and Tailwind CSS v4, deployed to GitHub Pages.

## Tech Stack

- [Astro](https://astro.build/) — static site framework (59.8% of codebase)
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling via `@tailwindcss/vite`
- TypeScript — strict mode (30.9% of codebase)
- GitHub Actions — automated CI/CD deployment

## Getting Started

### Prerequisites

- Node.js `>= 22.x` (required by Vite 7 / Astro)

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

> Note: `astro check` is excluded from the build script due to a known type conflict between `@tailwindcss/vite` and Astro's internal Vite bundle. The build works correctly at runtime.

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── .vscode/                 # Editor settings
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable Astro components
│   ├── config/              # Site configuration
│   ├── icons/               # SVG icons
│   ├── layouts/             # Page layouts
│   ├── pages/               # File-based routing
│   ├── styles/              # Global styles
│   └── types/               # TypeScript types
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Path Aliases

| Alias           | Path                  |
|-----------------|-----------------------|
| `@components/*` | `src/components/*`    |
| `@layouts/*`    | `src/layouts/*`       |
| `@icons/*`      | `src/icons/*`         |
| `@types`        | `src/types/index.ts`  |
| `@config`       | `src/config/index.ts` |

## Features

- Minimalist design — clean and simple
- Mobile-first responsive layout
- SEO-friendly and accessible
- Easy to customize via a single configuration file

## Deployment

Automatically deployed to GitHub Pages on every push to `main` via GitHub Actions.

Live site: [https://deezdipan.github.io](https://deezdipan.github.io)

## License

[MIT](./LICENSE)
