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
            animation: {
                "flip-vertical-right":
                    "flip-vertical-right 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
                "slide-right":
                    "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                    "scale-up-center": 
                        "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
                    
            },
            keyframes: {
                "flip-vertical-right": {
                    "0%": {
                        transform: "rotateY(180deg)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "rotateY(0)",
                        opacity: 1,
                    },
                },
                "slide-right": {
                    "0%": {
                        transform: "translateX(-100%)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: 1,
                    },
                },
                "scale-up-center": {
                    "0%": {
                        opacity: 0,
                        transform: "scale(0.5)",
                    },
                    "50%": {
                        opacity: 1,
                        transform: "scale(1.1)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)",
                    }
                }
            },
        },
    },
    plugins: [],
};
