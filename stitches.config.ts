import { createStitches } from '@stitches/react'

export const { getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      blue: '#00AEFF',
      white: '#FFF',
      'gray-1': '#E5E5E5',
      'gray-2': '#8F9199',
      'gray-3': '#828792',
      gradient:
        'linear-gradient(136.72deg, rgba(7, 7, 10, 0.86) 19.22%, rgba(15, 16, 22, 0.5) 76.59%)',
      black: '#020203',
    },
    fonts: {
      poppins: 'Poppins, sans-serif',
    },
  },
})

export const resetCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    width: '100%',
    fontFamily: '$poppins',
    backgroundColor: '$black',
    color: '$white',
  },
})
