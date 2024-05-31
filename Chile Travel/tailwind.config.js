/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
    'fourth':"#922034",},
      fontFamily: { 
        Montserrat: ["Montserrat", "sans-serif"],
       },
    extend: {
      backgroundImage:{
        'Chile1': "url('../assets/img/Chile1.jpg')",
        'Chile2': "url('../assets/img/Chile2.jpg')",
        'Chile3': "url('../assets/img/Chile3.jpg')",
        'Chile4': "url('../assets/img/Chile4.jpg')",
        'Chile5': "url('../assets/img/Chile5.jpg')",
        'Chile6': "url('../assets/img/Chile6.jpg')",
        'Chile7': "url('../assets/img/Chile7.jpg')",
        'Chile8': "url('../assets/img/Chile8.jpg')",
        'Chile9': "url('../assets/img/Chile9.jpg')",
        'Chile10': "url('../assets/img/Chile10.jpg')",
        'Chile11': "url('../assets/img/Chile11.jpg')",
        'Chile12': "url('../assets/img/Chile12.jpg')",
        'Chile13': "url('../assets/img/Chile13.jpg')",
        'Chile14': "url('../assets/img/Chile14.jpg')",
        'Chile15': "url('../assets/img/Chile15.jpg')",
        'Chile16': "url('../assets/img/Chile16.jpg')",
        'Chile17': "url('../assets/img/Chile17.jpg')",
        'Chile18': "url('../assets/img/Chile18.jpg')",
        
        
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),
            require('@tailwindcss/typography'),
            require('@tailwindcss/aspect-ratio'),
            require('tailwind-scrollbar-hide')],
}

