module.exports = {
	root: true,

	parserOptions: {
		ecmaVersion: "2021",
	},

	env: {
		node: true,
		browser: true,
		"vue/setup-compiler-macros": true,
	},

	extends: ["plugin:vue/vue3-essential", "prettier"],

	plugins: ["vue"],

	globals: {
		ga: "readonly",
		cordova: "readonly",
		__statics: "readonly",
		__QUASAR_SSR__: "readonly",
		__QUASAR_SSR_SERVER__: "readonly",
		__QUASAR_SSR_CLIENT__: "readonly",
		__QUASAR_SSR_PWA__: "readonly",
		process: "readonly",
		Capacitor: "readonly",
		chrome: "readonly",
	},

	// add your custom rules here
	rules: {
		"array-bracket-spacing": [
			"error",
			"always",
			{
				singleValue: true,
				arraysInArrays: true,
				objectsInArrays: true,
			},
		],
		"array-bracket-newline": [
			"error",
			{
				multiline: true,
			},
		],
		"array-element-newline": ["error", { multiline: true, minItems: 2 }],
		camelcase: [
			"error",
			{
				properties: "always",
			},
		],
		indent: [
			"error",
			"tab",
			{
				ignoredNodes: ["TemplateLiteral"],
			},
		],
		"keyword-spacing": ["error", { after: true, before: true }],
		"key-spacing": [
			"error",
			{
				singleLine: {
					beforeColon: false,
					afterColon: true,
				},
				multiLine: {
					beforeColon: true,
					afterColon: true,
					align: "colon",
				},
			},
		],
		"no-trailing-spaces": [
			"error",
			{
				skipBlankLines: false,
				ignoreComments: false,
			},
		],
		"no-fallthrough": "error",
		// allow debugger during development only
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"object-curly-newline": ["error", { multiline: true }],
		"object-curly-spacing": [
			"error",
			"always",
			{
				objectsInObjects: true,
				arraysInObjects: true,
			},
		],
		"object-property-newline": [
			"error",
			{ allowAllPropertiesOnSameLine: true },
		],
		"prefer-promise-reject-errors": "off",
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"space-in-parens": ["error", "always"],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "never",
			},
		],
		"vue/html-indent": ["error", "tab"],
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "any",
					normal: "always",
					component: "always",
				},
			},
		],

		// allow debugger during development only
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
	},
};
