/** @type {import('tailwindcss').Config} */
module.exports = {
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
        stealth: "#0a0a0a",
        accent: "#1a1a1a",
      },
      backgroundImage: {
        'stealth-gradient': 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
      }
    },
  },
  plugins: [],
};
