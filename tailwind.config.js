/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '766px' },
      // => @media (min-width: 640px) { ... }
      'mdsm': '641px',
      // => @media (min-width: 768px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lgmd': '1200px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1201px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      'sm': '14px',
      'tiny': '12px',
      'base': '15px',
      'h6': '16px',
      'h5': '18px',
      'h4': '20px',
      'h3': '22px',
      'h2': '24px',
      'h1': '36px',
    },
    colors: {
      'primary': 'hsl(35, 77%, 62%)',
      'secondary': 'hsl(5, 85%, 63%)',
      'grey': 'hsl(233, 8%, 79%)',
      'off-white': 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(236, 13%, 42%)',
      'dark-blue': 'hsl(240, 100%, 5%)',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '8px',
      'lg': '16px',
    },
    extend: {},
  },
  plugins: [],
}