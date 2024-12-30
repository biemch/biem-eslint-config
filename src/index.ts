import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import moduleBindingsNewline from 'eslint-plugin-module-bindings-newline';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	pluginJs.configs.recommended,
	pluginReact.configs.flat?.recommended,
	...tseslint.configs.recommended,
	stylistic.configs.customize({
		indent: 'tab',
		quotes: 'single',
		semi: true,
		jsx: true,
	}),
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports,
			'module-bindings-newline': moduleBindingsNewline,
			'react': pluginReact,
		},
	},
	{ ignores: ['dist/', 'node_modules/'] },
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	{
		settings: {
			react: {
				version: '18',
			},
		},
	},
	{
		rules: {
			'no-explicit-any': 0,
			'jsx-quotes': [2, 'prefer-double'],
			'object-curly-spacing': ['error', 'always'],
      'object-curly-newline': ['error', {
				ImportDeclaration: 'always',
        ExportDeclaration: 'always',
      }],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@typescript-eslint/no-explicit-any': ['error'],
			'module-bindings-newline/import': 'error',
			'module-bindings-newline/export': 'error',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'unused-imports/no-unused-imports': 'error',
		},
	},
];
