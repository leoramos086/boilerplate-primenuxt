/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [],
  theme: {
    extend: {
      colors: {
        contentBg: 'var(--p-content-background)',
        contentHoverBg: 'var(--p-content-hover-background)',
        contentCl: 'var(--p-content-color)',
        contentHoverCl: 'var(--p-content-hover-color)',
      },
      borderRadius: {
        none: 'var(--p-border-radius-none, 0)',
        sm: 'var(--p-border-radius-xs, 0.125rem)',
        DEFAULT: 'var(--p-border-radius-sm, 0.25rem)',
        md: 'var(--p-border-radius-md, 0.375rem)',
        lg: 'var(--p-border-radius-lg, 0.5rem)',
        xl: 'var(--p-border-radius-xl, 0.75rem)',
        card: 'var(--p-card-border-radius, 12px)',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
}
