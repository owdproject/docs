import {defineNuxtModule, createResolver, addComponentsDir, extendPages, addImportsDir, installModule} from '@nuxt/kit'
import {registerTailwindPath} from "@owdproject/core/runtime/utils/utilsApp";
import { cpSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const {resolve} = createResolver(import.meta.url);

export default defineNuxtModule({
    meta: {
        name: 'owd-docs',
        priority: -1
    },
    async setup(options, nuxt) {

        {

            // install tailwind

            registerTailwindPath(nuxt, resolve('./runtime/components/**/*.{vue,mjs,ts}'))

        }

        {

            // add css

            nuxt.options.css.push(resolve('./runtime/assets/styles/docs.scss'))

        }

        {

            // add runtime components

            addComponentsDir({
                path: resolve("./runtime/components"),
                prefix: "",
                global: true,
            })

        }

        {

            // add pages

            extendPages((pages) => {
                pages.push({
                    name: 'Docs',
                    path: '/docs',
                    file: resolve('./runtime/pages/docs/index.vue'),
                })

                pages.push({
                    name: 'Page',
                    path: '/docs/:slug',
                    file: resolve('./runtime/pages/docs/[slug].vue'),
                })
            })

        }

        {

            // add content

            const sourceContentDir = resolve('./runtime/content');
            const targetContentDir = join(nuxt.options.rootDir, 'content');

            nuxt.options.build.transpile.push('@nuxt/content');

            await installModule('@nuxt/content');
            await installModule('nuxt-toc');

            try {
                if (!existsSync(targetContentDir)) {
                    mkdirSync(targetContentDir, { recursive: true });
                }

                cpSync(sourceContentDir, targetContentDir, { recursive: true });
                console.log('[OWD] Copied content to project root');
            } catch (err) {
                console.error('[OWD] Failed to copy content to root', err);
            }

        }

    }
})
