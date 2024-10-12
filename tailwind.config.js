/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
      Baskerville: ['Baskervville SC', "serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "1050px":{'max':'1050px'},
        'sm': '640px',
        "400px":"400px",
        "lg":"1024px",
        "md":"768px",
        "xlg":"1440px",
      },
      
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'typing': "typing 2s steps(20) infinite alternate, blink .7s infinite",
        'fly-1': 'fly1 0.6s ease-in-out infinite alternate',
        'pulse-fast': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'text-reveal': 'text-reveal 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite',
      },
      keyframes: {
        fly1: {
          '0%, 100%': { transform: 'translateY(0.1em)' },
          '50%': { transform: 'translateY(-0.1em)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'typing': {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        'blink': {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
