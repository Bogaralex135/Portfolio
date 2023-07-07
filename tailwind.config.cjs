/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    screens: {
      mobile: '380px',
      // => @media (min-width: 360px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1400px',
    },
    fontFamily: {
      Raleway: ['Raleway', 'sans-serif'],
      Dancing: ['Dancing Script', 'cursive'],
    },
    colors: {
      primary: '#f5f5f5',
      secondary: '#EAF2FD',
      tertiary: '#2A7AE4',
      white: '#fff',
      blackgray: '#464646',
    },
  },
  plugins: [],
}
