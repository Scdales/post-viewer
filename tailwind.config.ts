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
        fade: 'fadeIn .3s ease-in-out',
        'spin-step-fade': 'spin 1s steps(10) infinite, fadeIn .3s ease-in-out',
        highlight: 'highlightPulse .3s ease-in-out 4 alternate'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        highlightPulse: {
          from: { 'box-shadow': '0 0 0px 0px rgb(123 123 123)'},
          to: { 'box-shadow': '0 0 20px 0px rgb(137 137 137)'}
        }
      },
      transformOrigin: {
        '50%': '50% 48.5%',
      }
    }
  },
  plugins: []
}
export default config
