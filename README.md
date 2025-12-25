<p align="center">
  <img width="160" height="160" src="https://avatars.githubusercontent.com/u/65117737?s=160&v=4" />
</p>
<h1 align="center">Docs Module</h1>
<h3 align="center">
  Docs Module for your Open Web Desktop client.
</h3>

## Overview

Easily embed the official Open Web Desktop documentation into your project.

## Installation

Install the module with:

```bash
npm install @owdproject/docs
```

## Usage

Define the module in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
    modules: [
        // place it before /core
        '@owdproject/docs',
        '@owdproject/core'
    ]
})
```

## Features

- Automatically sets up a `/docs` route with built-in documentation.
- Uses PrimeVue for consistent theming across Open Web Desktop projects.
- Fully customizable if you want to extend or override docs content.
- No setup required — works out of the box with any Open Web Desktop theme.
- Ideal for apps, templates, or themes that want to ship self-contained help.

## License

Open Web Desktop is released under the [MIT License](LICENSE).