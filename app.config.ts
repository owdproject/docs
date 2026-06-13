export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'zinc',
    },
    button: {
      defaultVariants: {
        color: 'primary',
      },
    },
    header: {
      slots: {
        root: 'border-b border-default bg-elevated/90 backdrop-blur-md',
      },
    },
    footer: {
      slots: {
        root: 'border-t border-default',
      },
    },
    page: {
      slots: {
        root: 'gap-y-8',
      },
    },
    pageHero: {
      slots: {
        title: 'text-4xl sm:text-5xl font-bold tracking-tight text-balance',
        description: 'text-lg text-muted text-balance',
      },
    },
    pageSection: {
      slots: {
        title: 'text-2xl sm:text-3xl font-bold tracking-tight text-balance',
        description: 'text-base text-muted text-balance',
      },
    },
    pageCard: {
      slots: {
        root: 'ring ring-default bg-elevated/60',
      },
    },
  },

  docus: {},

  navigation: {
    sub: 'aside',
  },

  header: {
    title: 'Open Web Desktop',
  },

  seo: {
    title: 'Open Web Desktop Docs',
    titleTemplate: '%s · OWD',
    description: 'Standalone developer documentation for Open Web Desktop (client, apps, themes).',
  },

  github: {
    url: 'https://github.com/owdproject/owd',
    branch: 'main',
    rootDir: 'docs',
  },

  socials: {
    github: 'https://github.com/owdproject/owd',
  },
})
