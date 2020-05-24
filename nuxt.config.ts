const pkg = require('./package')

module.exports = {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  buildModules: ['@nuxt/typescript-build'],
  loading: { color: '#fff' },
  css: ['~/assets/scss/main.scss'],
  plugins: [],
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/reset.scss',
      '~/assets/scss/mixins.scss'
    ]
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  build: {
    extend (config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
