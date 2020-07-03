
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Home — xanzhu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'xanzhu.com is currently being developed. Check back soon!' },
      { hid: 'keywords', name: 'keywords', content: 'xanzhu, design, news, music, fashion, technology, tech, media, security, Apple, Android, Google'},
      { property: 'og:type', type: 'website'},
      { property: 'og:title', type: 'XANZHU'},
      { property: 'og:description', type: 'xanzhu.com is a large scale project which is currently being developed!'},
      { property: 'og:url', type: 'https://xanzhu.com'}
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff0000' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    fallback: '404.html',
    interval: 100
  }
}
