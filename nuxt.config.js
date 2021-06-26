export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
 ssr: false,
  head: {
    title: 'adminPanel-nuxt-vuex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'alperen sözenin test sayfasıdır uzaya roket falan yolluyoruz' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"},
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/plugins/global/plugins.bundle.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/style.bundle.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/themes/layout/header/base/dark.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/themes/layout/header/menu/dark.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/themes/layout/brand/dark.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/themes/layout/aside/dark.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/custom/adminLayout.css",
      },
    ],
    script: [   
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  loading: { color: 'orange', height: '3px', duration: 5000},
  loadingIndicator:{
    name: 'circle',
    color: '#fa923f'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/runFirebase.js', //firebase i buradan başlatıyorum,
  ],
  generate: { fallback: '404.html' },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
