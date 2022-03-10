module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '450px',
      'xl': '1280px'
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily: {
        'lora': '"Lora", serif',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
