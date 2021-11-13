module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      black1 : "#000000",
      light: {
        text: {
          default: '#000000',
          secondary: '#757575',
        },
        background: {
          primary: "#ffffff",
          secondary: '#fdfffc'
        },
        border: {
          primary: "#e6e6e6"
        },

        highlight: {
          primary: '#00000011'
        }
      },
      dark: {
        text: {
          default: '#e0e0e0',
          secondary: '#878787',
          success: '#10b981',
          warning: '#f59e0b',
          danger: '#ef4444',
          disabled: '#666666',
        },
        background: {
          primary: '#181818',
          secondary: '#1f1f1f'
        },
        border: {
          primary: '#2a2a2a'
        },
        highlight: {
          primary: '#ffffff11'
        }
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
