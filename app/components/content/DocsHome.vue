<script setup lang="ts">
const frameworks = [
  {
    title: 'Nuxt.js',
    status: 'Most complete starter · terminal UI',
    description: 'Configure your shell, add apps and develop extensions in their own playgrounds.',
    to: '/frameworks/nuxt',
  },
  {
    title: 'React',
    status: 'Early Vite starter',
    description: 'Explore a working shell and see how React apps are registered with the desktop.',
    to: '/frameworks/react',
  },
  {
    title: 'Vue.js',
    status: 'Experimental starter',
    description: 'Try the core runtime in a Vue 3 and Vite desktop.',
    to: '/frameworks/vue',
  },
  {
    title: 'Astro',
    status: 'Experimental starter',
    description: 'Try a desktop window inside a static Astro page.',
    to: '/frameworks/astro',
  },
  {
    title: 'Svelte',
    status: 'Experimental starter',
    description: 'Try a Svelte 5 desktop backed by engine stores.',
    to: '/frameworks/svelte',
  },
  {
    title: 'Angular',
    status: 'Experimental starter',
    description: 'Run an Angular desktop with reactive window state.',
    to: '/frameworks/angular',
  },
]
</script>

<template>
  <div class="docs-home">
    <section class="docs-intro" aria-labelledby="docs-title">
      <div>
        <p class="docs-kicker">Open Web Desktop documentation</p>
        <h1 id="docs-title">Build a desktop<br class="intro-break"> for the web.</h1>
        <p class="docs-lede">
          Give your web apps windows, workspaces and a launcher. Start with npm create owd and pick a workspace powered by the Open Web Desktop engine.
        </p>
        <div class="docs-actions">
          <UButton to="/getting-started/installation" size="lg" trailing-icon="i-lucide-arrow-right">
            Run your first desktop
          </UButton>
          <NuxtLink to="/getting-started/introduction">What is OWD?</NuxtLink>
        </div>
      </div>

      <figure class="docs-diagram" aria-labelledby="docs-diagram-caption">
        <figcaption id="docs-diagram-caption">
          <span class="diagram-dot" aria-hidden="true" />
          Anatomy of a desktop
        </figcaption>
        <div class="docs-diagram-body">
          <div class="diagram-layer">
            <span>Shell + apps</span>
            <small>What users see and interact with</small>
          </div>
          <div class="diagram-connector" aria-hidden="true" />
          <div class="diagram-layer">
            <span>Framework adapter</span>
            <small>Connects runtime state to the UI</small>
          </div>
          <div class="diagram-connector" aria-hidden="true" />
          <div class="diagram-layer diagram-core">
            <span>@owdproject/core</span>
            <small>Windows · processes · workspaces</small>
          </div>
        </div>
      </figure>
    </section>

    <section class="docs-paths" aria-labelledby="docs-paths-title">
      <div class="docs-paths-intro">
        <h2 id="docs-paths-title">Choose your framework</h2>
        <p>See what you can run today and where you can contribute.</p>
      </div>
      <ul class="docs-path-list">
        <li v-for="framework in frameworks" :key="framework.to">
          <NuxtLink :to="framework.to" class="docs-path">
            <div>
              <p class="docs-kicker">{{ framework.status }}</p>
              <h3>{{ framework.title }}</h3>
              <p>{{ framework.description }}</p>
            </div>
            <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" />
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="docs-engine" aria-labelledby="docs-engine-title">
      <div>
        <h2 id="docs-engine-title">Bring your own UI</h2>
        <p>See what the desktop engine manages and create an instance in plain TypeScript.</p>
      </div>
      <div class="docs-engine-links">
        <NuxtLink to="/architecture/overview">
          Explore the engine <span aria-hidden="true">→</span>
        </NuxtLink>
        <NuxtLink to="/architecture/technical-reference">
          How OWD works <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.docs-home {
  --docs-rule: color-mix(in srgb, var(--ui-text-muted) 27%, transparent);
  width: min(100% - 2.5rem, 72rem);
  margin-inline: auto;
  padding-block: clamp(3rem, 8vw, 7.5rem) 4.5rem;
  color: var(--ui-text-highlighted);
}

.docs-intro, .docs-paths, .docs-engine {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(2rem, 6vw, 6rem);
  align-items: center;
}

.docs-kicker, figcaption, .diagram-layer span {
  font-family: var(--font-mono);
  letter-spacing: -.025em;
}

.docs-kicker {
  color: var(--ui-text-muted);
  font-size: .8rem;
}

h1, h2, h3 {
  line-height: 1.06;
  letter-spacing: -.045em;
  font-weight: 690;
}

h1 {
  font-size: clamp(3rem, 5.45vw, 5.6rem);
  margin-block: 1.15rem 1.35rem;
}

h2 { font-size: clamp(1.9rem, 3.35vw, 3.35rem); }
h3 { font-size: 1.65rem; margin-block: .4rem; }

.docs-lede, .docs-paths-intro p, .docs-engine p, .docs-path p:last-child {
  color: var(--ui-text-muted);
  line-height: 1.65;
  text-wrap: pretty;
}

.docs-lede {
  max-width: 47ch;
  font-size: clamp(1.05rem, 1.7vw, 1.2rem);
}

.docs-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .9rem 1.2rem;
  margin-top: 1.75rem;
}

.docs-actions > a:last-child, .docs-engine-links a {
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: .3em;
}

.docs-diagram {
  margin: 0;
  border: 1px solid var(--docs-rule);
  border-radius: .85rem;
  overflow: hidden;
  background-color: var(--ui-bg);
  box-shadow: 0 1.25rem 3rem color-mix(in srgb, var(--ui-bg-inverted) 8%, transparent);
}

figcaption {
  display: flex;
  align-items: center;
  gap: .65rem;
  padding: .8rem 1.1rem;
  border-bottom: 1px solid var(--docs-rule);
  font-size: .78rem;
}

.diagram-dot {
  width: .55rem;
  height: .55rem;
  border-radius: 50%;
  background: var(--ui-primary);
}

.docs-diagram-body {
  padding: clamp(1rem, 3vw, 2.25rem);
  background: radial-gradient(var(--docs-rule) .65px, transparent .65px) 0 0 / 12px 12px;
}

.diagram-layer {
  display: grid;
  gap: .2rem;
  padding: .9rem 1rem;
  border: 1px solid var(--docs-rule);
  border-radius: .45rem;
  background: var(--ui-bg);
}

.diagram-layer span { font-weight: 650; font-size: .92rem; }
.diagram-layer small { color: var(--ui-text-muted); font-size: .82rem; }
.diagram-connector { height: .8rem; margin-left: 1.55rem; border-left: 1px solid var(--ui-primary); }
.diagram-core { border-color: var(--ui-primary); }

.docs-paths, .docs-engine {
  margin-top: clamp(3.25rem, 8vw, 7rem);
  padding-top: clamp(1.65rem, 4vw, 3rem);
  border-top: 1px solid var(--docs-rule);
  align-items: start;
}

.docs-paths { grid-template-columns: .85fr 1.15fr; }
.docs-paths-intro p, .docs-engine p { margin-top: .7rem; max-width: 43ch; }
.docs-path-list { list-style: none; margin: 0; padding: 0; }
.docs-path-list li + li { border-top: 1px solid var(--docs-rule); }

.docs-path {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem .65rem;
  border-radius: .4rem;
  text-decoration: none;
}

.docs-path:hover { background: var(--ui-bg-elevated); }
.docs-path > span { flex: none; margin-top: .3rem; color: var(--ui-primary); }
.docs-engine-links { display: grid; gap: .65rem; justify-items: start; align-self: center; }
.docs-experiments { padding: .85rem .65rem; }
.docs-experiments a { display: inline-block; margin: .4rem .9rem 0 0; text-decoration: underline; text-underline-offset: .25em; }
a:focus-visible { outline: 2px solid var(--ui-primary); outline-offset: 4px; }

@media (max-width: 48rem) {
  .docs-intro, .docs-paths, .docs-engine { grid-template-columns: 1fr; }
  .intro-break { display: none; }
  .docs-path { padding-inline: .35rem; }
}
</style>
