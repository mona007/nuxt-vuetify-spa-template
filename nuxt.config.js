export default {
  head: {
    titleTemplate: '%s',
    title: 'Template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  ssr: false,

  css: [],

  plugins: [{ src: '@/plugins/vee-validate', mode: 'client' }],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/i18n'],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://reqres.in', // process.env.NUXT_ENV_AXIOS_BASE_URL,
    },
  },

  i18n: {
    lazy: true,
    defaultLocale: 'en',
    langDir: 'lang/',
    locales: [
      { code: 'en', file: 'en-US.json' },
      { code: 'km', file: 'km.json' },
    ],
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#14121f',
          secondary: '#f2f5fa',
          'bg-container': '#f6f8fa',
        },
        light: {
          primary: '#14121f',
          secondary: '#f2f5fa',
          'bg-container': '#f6f8fa',
        },
      },
    },
  },

  build: {},

  server: {
    host: process.env.NUXT_ENV_APP_HOST || '0.0.0.0',
    port: process.env.NUXT_ENV_APP_PORT || 7000,
  },
};
