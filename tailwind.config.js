/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-white" : "hsl(0, 0%, 100%)",
        "c-off-white" : "hsl(0, 0%, 94%)",
        "c-light-grey" : "hsl(0, 0%, 86%)",
        "c-smoke-grey" : "hsl(0, 1%, 44%)",
        "c-off-black" : "hsl(0, 0%, 8%)",
        "c-purple" : "hsl(259, 100%, 65%)",
        "c-red" : "hsl(0, 100%, 67%)",
      },
      fontFamily : {
        poppins :['Poppins', 'sans-serif']
      },
      width: {
        '128': '32rem',
        '256': '40rem',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

