/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          'sectionone-bg': "url('https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-fotoaibe-1571458.jpg&fm=jpg')",
          'footer-texture': "url('/img/footer-texture.png')",
        },

        height: {
          '100': '32rem',
        },
        backgroundColor:{
          'tailoredOrange':'#d84315'
        },
        borderColor:{
          'tailoredOrange':'#d84315'
        },
        textColor:{
          'tailoredOrange':'#d84315'
        }
    },
  },
  plugins: [],
}

