export default {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {
      colors: {
        cpo: {
          DEFAULT: '#f06423',
          light: '#ff8c53', // Lighter shade
          dark: '#c94e1c', // Darker shade
        },
        cpb: {
          DEFAULT: '#3b3c37',
          light: '#6b6c66', // Lighter shade
          dark: '#242522', // Darker shade
        },
        cps: {
          DEFAULT: '#bec3c3',
          light: '#e5e8e8', // Lighter shade
          dark: '#8c9191', // Darker shade
        },
        lamb: '#35b997',
        venison: '#957daa',
      },
    },
  },
  plugins: [require('preline/plugin')],
}
