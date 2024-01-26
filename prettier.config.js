/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSpacing: true,
    plugins: ['prettier-plugin-tailwindcss'],
}

export default config
