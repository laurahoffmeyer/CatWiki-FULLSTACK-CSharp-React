module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'beige': 'var(--beige)',
        'darkbrown': 'var(--darkbrown)',
        'gold': 'var(--gold)',
        'darkestbrown': 'var(--darkestbrown)',
        'lightgrey': 'var(--lightgrey)',
        'darkgrey': 'var(--darkgrey)'
      },
      screens: {
        'xs': '450px'
      },
    },
  },
  plugins: [],
}
