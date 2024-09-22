import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                sapphireLighter: "#252936",
                sapphireLight: "#191c24",
                sapphireDark: "#0c0e12",
                sapphireDark80: "#1b2126",
                sapphireDark60: "#1f262c",
                sapphireBlue: "#4e71b6",
                vibrantGreen: "#2bf20c",
                vibrantBlue: "#038cec"
            },
        },
    },
    plugins: [],
};
export default config;
