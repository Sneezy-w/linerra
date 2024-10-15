const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');

module.exports = [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.vscode/**',
      '**/.git/**',
      '**/.DS_Store/**',
      '**/.eslintrc.js',
      '**/eslint.config.js',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      globals: {
        ...globals.node
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'indent': ['error', 2],
      // 'linebreak-style': ['error', 'unix'],
      'quotes': 'off',
      'semi': ['error', 'always'],
      'no-console': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": false,
        "varsIgnorePattern": '^[A-Z]' // Ignore capitalized variables (enum members)
      }],
      '@typescript-eslint/no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": false,
        "varsIgnorePattern": '^[A-Z]' // Ignore capitalized variables (enum members)

      }],
    },
  },
];
