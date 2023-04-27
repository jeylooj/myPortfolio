/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      black:' #000000',
      white: '#FFFFFF',
      blue: '#39DBFF',
      purple: '#DD7DFF',
      red: '#FF5E5E',
      orange: '#FFB443',
      yellow: '#FFF500',
      green:'#71E24A',
      lightPink: '#FF91E8',
      lightYellow: '#F7CB45',
      body: '#FFDCAA',
      lightBrown: '#E3B74A',
      pink : '#E547C2',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
