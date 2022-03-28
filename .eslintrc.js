module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['cypress/**'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/valid-expect': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'jest/valid-expect-in-promise': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
}
