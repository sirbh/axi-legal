import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        lightbg: "var(--light-bg)",
        textmain: "var(--text-main)",
        textmuted: "var(--text-muted)",
      },
    },
  },
  plugins: [],
}

export default config