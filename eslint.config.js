import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        HTMLElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        HTMLButtonElement: 'readonly',
        Node: 'readonly',
        NodeList: 'readonly',
        URL: 'readonly',
        requestAnimationFrame: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },
];
