import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['dist'], // Ігноруємо папку dist
  },
  {
    files: ['**/*.{ts,tsx}'], // Цільові файли
    languageOptions: {
      parser: tsParser, // Використовуємо TypeScript парсер
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser, // Додати глобальні змінні
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
      '@typescript-eslint': tseslint,
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Підсвічує консольні логи, але не блокує їх
      'no-trailing-spaces': 'error', // Видаляє зайві пробіли в кінці рядка
      'no-multi-spaces': 'error', // Забороняє кілька пробілів між словами
      'no-whitespace-before-property': 'error', // Забороняє пробіли перед властивостями об'єктів
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'error', // Форматує код, включаючи видалення зайвих пробілів
    },
  },
]
