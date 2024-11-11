import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.js'],
		languageOptions: { sourceType: 'commonjs' },
		rules: {
			'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
			eqeqeq: ['error', 'always'],
			semi: ['error', 'always'],
			quotes: ['error', 'single', { avoidEscape: true }],
			'prettier/prettier': 'error',
		},
		plugins: {
			prettier: eslintPluginPrettier,
		},
		ignores: [
			'eslint.config.mjs',
			'.prettierignore',
			'.prettierrc',
			'node_modules/**',
			'package.json',
			'package-lock.json',
		],
	},
	{ languageOptions: { globals: globals.browser } },
];
