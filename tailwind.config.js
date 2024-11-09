
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
        'sm': '480px',
        'md': '547px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1680px',

      },
    extend: {
        colors:{
        primary: '#ff6363',
        secondary:{
            100: 'E2E2D5',
            200: '#888883',
        }
        },
    },
},
  plugins: [],
}
    

