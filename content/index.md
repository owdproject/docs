---
seo:
  title: Open Web Desktop — Documentation
  description: Build a browser desktop from themes and Nuxt modules. Guides for core, kits, apps, package linking, and kernel contracts.
---

::u-page-hero
#title
Open Web Desktop

#description
A modular **web desktop** framework: themes that look like different OS shells, apps as Nuxt modules, and an agnostic engine in **`@owdproject/core`**. Documentation for theme authors, app authors, and monorepo contributors.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-lucide-link-2
  size: xl
  to: /setup/package-linking
  variant: outline
  ---
  Package linking
  :::
::

::u-page-section
#title
What’s inside

#features
  :::u-page-feature
  ---
  icon: i-lucide-book-open
  ---
  #title
  Getting started
  
  #description
  Run this docs site, client monorepo layout, and roadmap for themed **`/docs`** inside the desktop shell.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-link-2
  ---
  #title
  Package linking
  
  #description
  **npm** vs **`workspace:*`** vs **Git URLs** — avoid **`ERR_PNPM_WORKSPACE_PKG_NOT_FOUND`** when wiring themes and external modules.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-cpu
  ---
  #title
  Core & kits
  
  #description
  Engine, **`kit-theme`** / **`kit-fs`**, external **`module-fs`**, and how themes stay swappable.
  :::
::

::u-page-section
#title
Developer guides

#features
  :::u-page-feature
  ---
  to: /apps/overview
  icon: i-lucide-app-window
  ---
  #title
  Building an app
  
  #description
  Nuxt module, **`defineDesktopApp`**, windows, commands, playground, publish.
  :::

  :::u-page-feature
  ---
  to: /themes/overview
  icon: i-lucide-palette
  ---
  #title
  Building a theme
  
  #description
  **`defu`**, **`DesktopCore`**, dialog plugins, optional explorer modules.
  :::

  :::u-page-feature
  ---
  to: /setup/desktop-config
  icon: i-lucide-file-code
  ---
  #title
  desktop.config.ts
  
  #description
  Theme, apps, modules, shell keys, validation, and runtime merge semantics.
  :::

  :::u-page-feature
  ---
  to: /internals/kernel-contract
  icon: i-lucide-shield-check
  ---
  #title
  Kernel contract
  
  #description
  Public API surface for **core 3.3+** — components, stores, bootstrap order.
  :::

  :::u-page-feature
  ---
  to: /reference/glossary
  icon: i-lucide-book-a
  ---
  #title
  Glossary
  
  #description
  Terminology and migration notes (**`Core*`** → **`Desktop*`**, explorer store move).
  :::
::
