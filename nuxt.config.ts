// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  ssr: false,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: 'Eralp Özcan',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'author', content: 'Eralp Ozcan' },
        { name: 'language', content: 'English' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Eralp Ozcan Personal Website'},
        { hid: 'robots', name: 'robots', content: 'index, follow'},
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  runtimeConfig: {
    githubToken: process.env.NUXT_GITHUB_TOKEN,
    contactFormApi: process.env.NUXT_CONTACT_FORM_API,
  },
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
  ],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  sitemap: {
    autoAlternativeLangPrefixes: true,
    cacheTtl: 1000 * 60 * 60 * 24, // 1 day
    xsl: false
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.github.com/graphql',
        httpLinkOptions: {
          headers: {
            authorization: `Bearer ${process.env.NUXT_GITHUB_TOKEN}`,
          },
        },
      }
    },
  },
})
