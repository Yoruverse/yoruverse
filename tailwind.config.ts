import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: '10px',
                xl: '20px',
            },
            spacing: {
                '100': '400px',
                '74': '300px',
                '50': '200px',
            },
        },
    },
    plugins: [],
}
export default config
