import Vue from 'vue'
import VueGorillaDash, { Gorilladash } from '@gorilladash/vue'

export default function ({ app, $axios }) {
  if (!app.$gorilladash) {
    app.$gorilladash = new Gorilladash({
      devtool: process.env.NODE_ENV === 'development',
      axios: $axios,
    })
  }
  Vue.use(VueGorillaDash, {
    token: process.env.MIX_GORILLADASH_PUBLIC_KEY,
    tribeType: process.env.MIX_GORILLA_TRIBE_TYPE,
    axios: $axios,
    devtool: process.env.NODE_ENV === 'development',
  })
}

