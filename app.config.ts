export default defineAppConfig({
  ui: {
    colors: { primary: 'cyan', neutral: 'stone' },
    contentNavigation: {
      slots: { linkTrailing: 'flex' },
    },
    pageBody: {
      base: 'owd-docs-article mt-8 pb-24',
    },
  },

  navigation: { sub: 'aside' },

  header: { title: 'Open Web Desktop' },

  seo: {
    title: 'Open Web Desktop',
    titleTemplate: '%s · OWD',
    description: 'Developer documentation for the Open Web Desktop engine, adapters and starters.',
  },

  github: {
    owner: 'owdproject',
    name: 'docs',
    branch: 'main',
    rootDir: '',
    url: 'https://github.com/owdproject/docs',
  },

  socials: { github: 'https://github.com/owdproject' },

  ogImage: {
    component: 'Docs',
    props: { primary: '#73d6e7', neutral: '#121212' },
  },
})
