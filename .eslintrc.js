module.exports = {
  root: true,
  ignorePatterns: ['node_modules/', '*.js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
