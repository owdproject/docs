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
    links: [
      {
        icon: 'i-lucide-package',
        label: 'Apps',
        to: 'https://github.com/topics/owd-apps',
        target: '_blank'
      },
      {
        icon: 'i-lucide-palette',
        label: 'Themes',
        to: 'https://github.com/topics/owd-themes',
        target: '_blank'
      },
      {
        icon: 'i-lucide-boxes',
        label: 'Modules',
        to: 'https://github.com/topics/owd-modules',
        target: '_blank'
      }
    ]
  },

  seo: {
    title: 'Open Web Desktop Docs',
    titleTemplate: '%s · OWD',
    description: 'Standalone developer documentation for Open Web Desktop (client, apps, themes).',
  },

  github: {
    owner: 'owdproject',
    name: 'docs',
    branch: 'main',
    rootDir: 'docs',
    url: 'https://github.com/owdproject/docs',
  },

  socials: {
    github: 'https://github.com/owdproject/client'
  },

  ogImage: {
    component: 'Docs',
    props: {
      primary: '#00dc82',
      neutral: '#16171d',
    }
  },
})
