/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important:'#root',
  theme: {
    extend: {
      backgroundImage: {
        'dashonicBackGround': "url('/public/images/auth-bg.7756222c878fb4b4eb3b.jpg')"
      }
    },
  },
}
