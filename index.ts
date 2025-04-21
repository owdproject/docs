import {defineNuxtModule, createResolver, addComponentsDir, extendPages, addImportsDir, installModule} from '@nuxt/kit'
import {registerTailwindPath} from "@owdproject/core/runtime/utils/utilsApp";

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
                // Add /test page
                pages.push({
                    name: 'Docs',
                    path: '/docs',
                    file: resolve('./runtime/pages/docs/index.vue'),
                })
            })

        }

    }
})
