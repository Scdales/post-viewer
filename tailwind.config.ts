import type { Config } from 'tailwindcss'
import { COLOURS } from './lib/constants/colours'

const config: Config = {
  content: ['./lib/components/**/*.{js,ts,jsx,tsx,mdx}', './lib/constants/**/*.ts', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ...COLOURS
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
