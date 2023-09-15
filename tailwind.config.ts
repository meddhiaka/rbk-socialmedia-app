import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cgray: '#FAFAFA',
        cwhite: '#FFFFFF',
        cpurple: '#613FE8',
        clightpurple: '#EFECFF',
        github: '#191919',
        youtube: '#EF383A',
        linkedin: '#2D69FF'
      }
    },
  },
  plugins: [],
}
export default config
