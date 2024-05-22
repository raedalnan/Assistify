/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noor' : ["Noor" , "sans-serif"]
      },
      fontSize:{
        "h1": "50px",
        "h2": "34px",
        "h3": "28px",
        "p": "22px",
        "submit": "24px",
        "links" : "18px"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(119.36deg, rgba(10, 14, 63, 0.46) 13.83%, rgba(107, 72, 255, 0.46) 85.83%)',
      }
    },
    colors: {
      'light-gray' : '#F2F4F6',
      "gray" : "#D9D9D9",
      "gray-2" : "#5F5F5F",
      "blue" : "#1877F2",
      'purple' : '#6B48FF',
      "purple2" : "rgba(107, 72, 255, 0.2)",
      'navy' : '#161D6F',
      'dark-blue' : '#0A0E3F',
      'white' : '#fff',
      "dark" : "#000000" ,
      'teal' : '#1EE3CF'

    }
  },
  plugins: [],
}

