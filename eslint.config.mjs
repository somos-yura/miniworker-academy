import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**']
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint
    },
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn'
    }
  }
];

