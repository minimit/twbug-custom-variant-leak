const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => {
  return function ({ addVariant, e }) {

    addVariant('on', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`on${separator}${className}`)}.on`
      })
    })

  }
})