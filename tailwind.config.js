module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: ['./pages/**/*.js'],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        monogame:
          '"Press Start 2P", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        inter: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
      },
    },
  },
  variants: {},
  plugins: [],
};
