module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ["Sora", 'sans-serif'],
        'body': ["Open Sans", 'sans-serif']
      },
      colors: {
        'dark-navy': '#314163',
        'light-navy': '#7284A6',
        'magenta': '#836EE6'
      },
      height: {
        '6': '6px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
