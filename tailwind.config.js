 /** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}"
    ],
    theme: {
        screens: {
            mb: "0px",
            tb: "640px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            screens: {
                mb: { max: '480px' },
                md: { min: '481px', max: '868px' },
                lg: { min: '869px' },
            },
            colors: {
                pri:"#15B088",
            }
        }
    },
    plugins: [
     ],
}
