module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'off',
    'react/button-has-type': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'camelcase': 'off'
  },
  overrides: [
    {
      files: ['*.jsx'],
      rules: {
        'import/extensions': 'off',
      },
    },
  ],
}
