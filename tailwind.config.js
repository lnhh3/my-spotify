/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "loop-scroll": "loop-scroll 7s infinite linear",
            },
            keyframes: {
                "loop-scroll": {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [],
};
