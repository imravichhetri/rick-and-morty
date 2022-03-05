module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Roboto Mono", "Menlo", "monospace"],
      body: ["Roboto Mono", "Menlo", "monospace"],
    },
    extend: {
      screens: {
        '2xl': { max: '1536px' },
        // => @media (max-width: 1535px) { ... }
    
        xl: { max: '1280px' },
        // => @media (max-width: 1279px) { ... }
    
        lg: { max: '1024px' },
        // => @media (max-width: 1023px) { ... }
    
        md: { max: '768px' },
        // => @media (max-width: 767px) { ... }
    
        sm: { max: '640px' },
        // => @media (max-width: 639px) { ... }
      },
      height: {
        table: 'calc(100% - 280px) !important'
      }
    },
    colors: {
      'primary-white': 'var(--background-primary-color)',
      'stone-color': 'var(--border-stone-600)'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx}",
  ],
  
}
