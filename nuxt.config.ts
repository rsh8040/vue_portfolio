// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    app: {
        head: {
            bodyAttrs: {
                class: 'overflow-y-scroll'
            }
        }
    }
})
