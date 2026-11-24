# OWD documentation audit

Baseline: docs main at `ea3f5fd` (30 October 2026). The commit swept package names across 31 files; it did not update the home or document the 4.x engine/adapter split. The other remote branch, `legacy`, dates back to December 2025.

| Previous section | Finding | New home |
| --- | --- | --- |
| Home | Nuxt in the headline and SEO, simulated terminal with older commands, feature grids mixing engine and integration details | Editorial landing with an engine/adapter/shell diagram, one quickstart and two framework paths |
| Getting started (3 pages) | Introduces Nuxt 4 as the universal host, starts from the old client monorepo, attributes the CLI and Nuxt registration to core | Framework-neutral introduction, starter selection and package map |
| Architecture (3 pages) | Mixes core behavior, Nuxt kits and the old Nx workspace | New engine overview; old architecture, Nx and kits in the Nuxt 3.x archive |
| Apps (8 pages) | Nuxt module and plugin examples, old package names and source layout, presented as universal | Current Nuxt authoring entry point links to its contracts; full tutorials retained as 3.x references |
| Themes (8 pages) | Vue components, slots and PrimeVue assumptions belong to a specific Nuxt generation | Shell role explained in shared docs; previous guides retained in the Nuxt 3.x archive |
| Setup (7 pages) | CLI owned by core in several examples, obsolete monorepo paths, and migrations for older Nuxt releases | Current CLI entry points in the framework paths; all prior setup and migrations retained in the archive |
| Internals (6 pages) | Nuxt boot, Pinia, components, provider and identity described as core APIs | Current engine contract linked from architecture; historical runtime notes stay under Nuxt |
| Reference (2 pages) | Glossary and project links reinforce the old client/core model | Definitions and repository links split by package responsibility |
| Navigation and reading experience | Ambiguous labels, repeated overview titles and a long list of framework-specific pages on the main path; two malformed frontmatter blocks | Task-based entry points, nested archive, scoped article spacing and typography |

## Evidence and editorial rules

- Core at `c5b6fb0` owns framework-independent runtime state and geometry. Its behavioral contract cautions against assuming adapter parity.
- CLI at `fc9ffdb` registers Nuxt and React starters. Vue, Svelte, Angular and Astro are listed as planned starter choices. Adapter source alone does not establish starter availability.
- Nuxt Desktop at `d8671d3` and React Desktop at `23e3884` provide different starter scripts and extension surfaces. The Nuxt template uses framework-first package names; the React README describes an early scaffold and no React control panel.
- The Docus lockfile resolves 5.11.0. The site stack and the desktop being documented have separate lifecycles.
- The initializer source is ahead of the public `create-owd` release. Check command flags against the published initializer when updating the quickstart.
- For future API changes, update the owning repository's contract first. Keep shared concepts here and link to version-specific authoring details from the framework track.

## Follow-up: preserve detail and restore the initializer

The first reorganization placed all six internals chapters inside a collapsed Nuxt archive. The technical reference now links to every chapter and to the current core and adapter contracts. The previous Getting started and Reference chapters are also preserved in the archive alongside the pages that moved there.

The quickstart uses `npm create owd` and the Nuxt control panel as its interactive entry point. The standalone CLI remains the underlying implementation. Astro and Svelte are documented as separate local experiments while their starters and adapters are being evaluated.
