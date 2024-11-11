import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.js'],
		languageOptions: { sourceType: 'commonjs' },
		rules: {
			'no-unused-vars': 'warn',
			eqeqeq: 'error',
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			'prettier/prettier': 'error',
		},
		plugins: ['prettier'],
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