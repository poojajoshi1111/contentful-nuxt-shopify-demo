export default {
  server: { port: 3001 },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static', // default -> server
  // ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-contentful-shopify-pwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  publicRuntimeConfig: {
    shopifyGraphqlURL: `${process.env.SHOPIFY_SHOP_END_POINT}/${process.env.SHOPIFY_GRAPHQL_URI}`,
    shopifyStorefrontToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
    contentfulSpace: process.env.CTF_SPACE_ID,
    contentfulAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global-filters.js',
    '~/plugins/contentful-config.js',
    '~/plugins/contentful.js',
    '~/plugins/shopify.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/common' },
    { path: '~/components/common/icons', prefix: 'icon' },
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],

  /*
   ** Apollo options. Used for Graph QL queries
   ** See: https://www.apollographql.com/docs/link/links/http.html#options
   */
  apollo: {
    clientConfigs: {
      default: '~/plugins/shopify-config.js',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
