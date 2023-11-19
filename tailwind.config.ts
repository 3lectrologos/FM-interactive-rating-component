import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange': 'hsl(25 97% 53%)',
        'lightgray': 'hsl(217 12% 63%)',
        'mediumgray': 'hsl(216 12% 54%)',
        'darkblue': 'hsl(213 19% 18%)',
        'verydarkblue': 'hsl(216 12% 8%)'
      }
    },
  },
  plugins: [],
}
export default config
