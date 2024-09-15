/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        "primary-beige-dark": "var(--primary-beige-dark)",
        "primary-beige-light": "var(--primary-beige-light)",
        "primary-grey-darkest": "var(--primary-grey-darkest)",
        "primary-grey-dark": "var(--primary-grey-dark)",
        "primary-grey": "var(--primary-grey)",
        "primary-grey-light": "var(--primary-grey-light)",

        // Secondary colors
        "secondary-green": "var(--secondary-green)",
        "secondary-yellow": "var(--secondary-yellow)",
        "secondary-cyan": "var(--secondary-cyan)",
        "secondary-navy": "var(--secondary-navy)",
        "secondary-red": "var(--secondary-red)",
        "secondary-purple": "var(--secondary-purple)",

        // Theme colors
        "theme-purple": "var(--theme-purple)",
        "theme-turquoise": "var(--theme-turquoise)",
        "theme-brown": "var(--theme-brown)",
        "theme-magenta": "var(--theme-magenta)",
        "theme-blue": "var(--theme-blue)",
        "theme-grey": "var(--theme-grey)",
        "theme-army-green": "var(--theme-army-green)",
        "theme-gold": "var(--theme-gold)",
        "theme-orange": "var(--theme-orange)",
      },
    },
  },
  plugins: [],
};
