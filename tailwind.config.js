/** @type {import('tailwindcss').Config} */
export default {
  
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
        backgroundImage: {
          'sectionone-bg': "url('https://www.goaccess.co.uk/wp-content/uploads/2019/07/AdobeStock_158746108-1024x683.jpeg')",
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

