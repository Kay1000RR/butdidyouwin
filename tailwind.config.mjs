/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1a3a5f',
        'brand-blue-dark': '#142d4a',
        'brand-gray': '#6B7280',
        'brand-gray-light': '#9CA3AF',
        'brand-gray-dark': '#4B5563',
        'brand-light': '#C0C5CE',
        'brand-bg': '#F9FAFB',
      },
      fontFamily: {
        'univers': ['Univers', 'sans-serif'],
      },
      maxWidth: {
        'headline': '48rem',
        'prose': '65ch',
      },
    },
  },
  plugins: [],
}
