/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    animation: {
      fadeInOut: 'fadeInOut 3s ease-in-out infinite',
    },
    keyframes: {
      fadeInOut: {
        '0%': { opacity: '0' },
        '50%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
    backgroundImage: {
      'primary-gradient': 'linear-gradient(to right, #3b82f6, #2563eb, #1e40af)',
    },
    colors: {
      border: "hsl(var(--border))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      sidebar: {
        'nav-bg': '#FFF',
        'nav-bg-hover': "rgba(242,242,242,0.8)",
      },
      'main-bg': '#FFF',
      'button': {
        default: '',
        hover: ''
      }
    },
    height: {
      header: '45px',
      main: '100%',
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
};
export const plugins = [
  plugin(function ({ addUtilities }) {
    addUtilities(
      {
        '.readonly': {
          '@apply bg-gray-100 text-gray-500 cursor-not-allowed': {},
        },
        '.readonly:focus': {
          '@apply focus:ring-0 focus:outline-none': {},
        },
      },
      ['responsive', 'hover', 'focus']
    );
  }),
];
