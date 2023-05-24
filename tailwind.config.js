/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#effefa",
                    100: "#c8fff0",
                    200: "#92fde3",
                    300: "#53f5d3",
                    400: "#1bccac",
                    500: "#07c5a6",
                    600: "#029f88",
                    700: "#077e6e",
                    800: "#0b6459",
                    900: "#0e534a",
                    950: "#01322e",
                },
                secondary: {
                    50: "#f6f7f8",
                    100: "#e9ecf0",
                    200: "#d9dfe4",
                    300: "#bfc8d1",
                    400: "#95a4b3",
                    500: "#8897a9",
                    600: "#778499",
                    700: "#6a758b",
                    800: "#5a6173",
                    900: "#4b505d",
                    950: "#30343b",
                },
            },
        },
    },
    plugins: [],
};
