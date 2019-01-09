import path from 'path'
require('dotenv').config();

module.exports = {
  mode: 'universal',
  srcDir: path.join(__dirname),
  env: {
    MIX_GORILLADASH_PUBLIC_KEY: process.env.MIX_GORILLADASH_PUBLIC_KEY,
    MIX_GORILLA_TRIBE_TYPE: process.env.MIX_GORILLA_TRIBE_TYPE
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/gorilladash' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    retry: true
  },

  proxy: {
    '/gorilladash': process.env.APP_URL,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
