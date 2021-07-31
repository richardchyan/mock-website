module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'beezee': ['ABeeZee', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'banner1': "url('https://images.pexels.com/photos/5715882/pexels-photo-5715882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
       }),
      height: {
        "10h": "10vh",
        "20h": "20vh",
        "30h": "30vh",
        "40h": "40vh",
        "50h": "50vh",
        "60h": "60vh",
        "70h": "70vh",
        "80h": "80vh",
        "90h": "90vh",
        "100h": "100vh",
      },
      width: {
        "10w": "10vw",
        "20w": "20vw",
        "30w": "30vw",
        "40w": "40vw",
        "50w": "50vw",
        "60w": "60vw",
        "70w": "70vw",
        "80w": "80vw",
        "90w": "90vw",
        "100w": "100vw",
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
