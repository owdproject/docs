# Docs Module for Open Web desktop

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
        '@owdproject/docs',
        // make sure to define @owdproject/core above @owdproject/core
        '@owdproject/core'
    ]
});
```

## Features

- Automatically sets up a `/docs` route with built-in documentation.
- Uses PrimeVue for consistent theming across Open Web Desktop projects.
- Fully customizable if you want to extend or override docs content.
- No setup required — works out of the box with any Open Web Desktop theme.
- Ideal for apps, templates, or themes that want to ship self-contained help.

## License

Open Web Desktop is licensed under the [GNU General Public License v3](LICENSE).