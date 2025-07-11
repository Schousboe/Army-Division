
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        glimmer: 'glimmer 3s ease-in-out infinite',
      },
      keyframes: {
        glimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
