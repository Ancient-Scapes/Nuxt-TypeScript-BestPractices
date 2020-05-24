module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier/vue'
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'off'
  }
}
