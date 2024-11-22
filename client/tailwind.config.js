/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/hero.png')",
      },
      colors: {
        'champwhite': '#f1f1ee',
        'atlasweiss': '#c0ab87',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'loading': ['Flow Circular']
      },
    },
  },
  plugins: [],
}

