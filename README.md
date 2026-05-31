# Open Web Desktop — documentation (`owd-docs`)

Product documentation for **Open Web Desktop**, built with **[Docus](https://docus.dev)** (Nuxt layer), **Nuxt Content**, and **Nuxt UI**.

## Language

**All user-facing documentation in this repository must be written in English.**

## Goals

1. **Today**: standalone docs site — `pnpm dev`, content in **`content/`**, Docus / Nuxt UI styling.
2. **Tomorrow**: an **installable package** for the OWD desktop so the same UI can be served under **`/docs`** *inside* the active theme (windows and OS chrome, not a separate mini-site). See **`content/3.architecture/2.docs-module.md`** (route **`/architecture/docs-module`** in dev).

You do **not** need extra themes or apps in this repo for the docs to be useful — they help screenshots and cross-testing later.

## Local development

```bash
pnpm install
pnpm dev
```

Open the URL printed by the dev server (often **`http://localhost:3000`**).

Production build:

```bash
pnpm build
```

## Repository layout

| Path | Contents |
|------|----------|
| `content/1.getting-started/` | Intro, install this site, desktop embed roadmap |
| `content/2.authoring/` | Markdown, code blocks, MDC components |
| `content/3.architecture/` | Architecture, docs-module embedding |
| `content/4.apps/` | Building an OWD app |
| `content/5.themes/` | Building a theme |
| `content/6.setup/` | `owd` CLI, monorepo, `owd.config.ts`, troubleshooting |
| `content/7.internals/` | Boot sequence, stores, Core components |
| `content/8.reference/` | Glossary, links |

## For authors

- Extended syntax: [Nuxt Content — Markdown](https://content.nuxt.com/docs/files/markdown), [MDC](https://content.nuxt.com/docs/files/markdown#mdc-syntax).
- Theme/layout: [Docus](https://docus.dev) when customizing the layer.

## License

Same as the main OWD project (typically MIT) unless the repository root states otherwise.
