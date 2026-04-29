import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
      prettier: prettierPlugin,
    },
    rules: {
      eqeqeq: 'warn',
      'dot-notation': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/destructuring-assignment': 'warn',
      'react/jsx-pascal-case': 'warn',
      'react/no-direct-mutation-state': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-unused-state': 'warn',
      'react/jsx-key': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'prettier/prettier': 'warn',
    },
  },
]);
