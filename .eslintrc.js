module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'standard',
  overrides: [],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    camelCase: 'off',
    'prettier/prettier': 'error',
  }
}
