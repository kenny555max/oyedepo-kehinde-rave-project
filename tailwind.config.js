/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary-bg': '#20252B',
        'primary-border': '#262932',
        'secondary-border': '#32383F',
        'light-dark-border-color': '#373B3F',

        // Accent Colors
        'accent': {
          DEFAULT: '#483BEB',
          purple: '#483BEB',
          mid: '#7847E1',
          pink: '#DD568D'
        },

        // tab bg
        'tab-bg': '#262932',

        // Text Colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#848E9C',
        'muted-color': '#a7b1bc',
        'positive': '#25C26E',
        'negative': '#FF6838',

        // State Colors
        'hover-bg': '#2D3139',
        'active-bg': '#3A3F47',
        'disabled-bg': '#262932',
        'click-bg': '#12171d',

        // active tab button color
        'active-tab-button': '#262932',

        // gradient
        'bg-gradient': 'linear-gradient(90deg, #483BEB 0%, #7847E1 47.92%, #DD568D 96.35%)',

        // line-bg
        'line-bg': '#EAF0FE',

        // type-select bg
        'type-select-bg': '#353945',

        // Table Colors
        'table-border': '#373B3F'
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #483BEB 0%, #7847E1 47.92%, #DD568D 96.35%)'
      },
      borderColor: {
        DEFAULT: '#262932'
      }
    },
  },
  plugins: [],
}

