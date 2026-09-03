/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        inkline: 'rgb(var(--color-inkline) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        paperdim: 'rgb(var(--color-paperdim) / <alpha-value>)',
        teal: 'rgb(var(--color-teal) / <alpha-value>)',
        glowCyan: 'rgb(var(--color-glow-cyan) / <alpha-value>)',
        glowViolet: '#8B7CF7',
        accent: '#FF6B35',
        inkFixed: '#12182B',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
