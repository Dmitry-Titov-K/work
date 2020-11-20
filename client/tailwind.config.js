module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    translate: ['responsive', 'hover', 'focus', 'motion-safe'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],},
  plugins: [  require('@tailwindcss/ui')({
    layout: 'sidebar',
  }) ],
}