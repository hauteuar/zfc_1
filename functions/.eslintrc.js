// functions/.eslintrc.js

module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.js'], // Add this line
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'commonjs',
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-undef': 'error',
  },
};
