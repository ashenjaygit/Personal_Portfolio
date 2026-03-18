/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
            },
            fontFamily: {
                sans: ["var(--font-main)", "sans-serif"],
                heading: ["var(--font-heading)", "sans-serif"],
            }
        },
    },
    plugins: [],
}
