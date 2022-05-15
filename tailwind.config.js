module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '200px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        customBlue: '#102463',
        secondaryBlue: '#112565',
        customBackground: '#edf2f6',
        fadedBlue: '#37487e',
      },
      spacing: {
        '110': '28rem',
        '128': '32rem',
        '256': '64rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
