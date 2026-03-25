/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Vibrant Clarity Design System
        primary: {
          DEFAULT: '#0040df', // Cobalt Blue
          container: '#2d5bff',
          fixed: '#dde1ff',
          dim: '#b8c3ff',
        },
        secondary: {
          DEFAULT: '#4c6700',
          container: '#b8f300', // Digital Lime
          fixed: '#baf600',
        },
        tertiary: {
          DEFAULT: '#913a00',
          container: '#b84b00', // Vital Orange
        },
        surface: {
          DEFAULT: '#faf8ff',
          bright: '#faf8ff',
          dim: '#d1d8ff',
          container: {
            lowest: '#ffffff',
            low: '#f3f2ff',
            DEFAULT: '#ebedff',
            high: '#e4e7ff',
            highest: '#dce1ff',
          },
        },
        'on-surface': '#071747',
        'on-surface-variant': '#434656',
        background: '#faf8ff',
        'dark-bg': '#010409',
      },
      fontFamily: {
        headline: ['Epilogue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'ambient': '0 24px 48px -12px rgba(7, 23, 71, 0.06)',
        'premium': '0 40px 80px -15px rgba(0, 64, 223, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};
