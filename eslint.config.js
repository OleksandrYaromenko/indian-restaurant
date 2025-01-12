import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-console': 'warn',
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
          message: 'Unexpected property on console object was called'
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-trailing-spaces': ['error'],
      'semi-spacing': ['error', { before: false, after: true }],
      'no-multi-spaces': ['error'],
      'space-in-parens': ['error', 'never'],
      'no-irregular-whitespace': 'error'
    }
  }
];
