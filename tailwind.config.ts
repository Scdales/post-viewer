import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./lib/components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
export default config
