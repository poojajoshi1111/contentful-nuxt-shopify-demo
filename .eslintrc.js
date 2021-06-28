module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    eqeqeq: ['off'],
    'prefer-const': ['off'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: true, endOfLine: 'auto' }],
    'comma-dangle': ['error', 'only-multiline'],
    'no-implicit-globals': 'error',
    'arrow-parens': [2, 'always'],
  },
};
