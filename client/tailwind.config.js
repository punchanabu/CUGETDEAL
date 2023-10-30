/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/public/image/bg-image.png')"
      }
    }
  },
  plugins: []
};
