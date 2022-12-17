import { createStitches } from '@stitches/react'

export const { getCssText, globalCss, styled, css, keyframes, theme } =
  createStitches({
    theme: {
      colors: {
        blue: '#00AEFF',
        white: '#FFF',
        'gray-1': '#E5E5E5',
        'gray-2': '#8F9199',
        'gray-3': '#828792',
        'gray-4': '#9D9D9D',
        neutral: '#15171B',
        'gradient-1':
          'linear-gradient(136.72deg, rgba(7, 7, 10, 0.86) 19.22%, rgba(15, 16, 22, 0.5) 76.59%)',
        black: '#020203',
        'gradient-2':
          'linear-gradient(180deg, #020203 0%, rgba(14, 17, 23, 0.92) 96.35%, rgba(14, 17, 23, 0.9) 100%)',
      },
      fonts: {
        poppins: 'Poppins, sans-serif',
      },
    },
    media: {
      xl: '(max-width: 1440px)',
      lg: '(max-width: 1160px)',
      md: '(max-width: 768px)',
      sm: '(max-width: 375px)',
    },
    utils: {
      bgImage: (value: string) => ({
        background:
          'radial-gradient(72.28% 72.28% at 52.36% 25.95%, rgba(2, 2, 3, 0) 0%, #020203 71.1%)',
        backgroundImage: `url(${value})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }),
    },
  })

export const resetCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '62.5%',
  },
  body: {
    width: '100%',
    fontFamily: '$poppins',
    backgroundColor: '$black',
    color: '$white',
    minHeight: '100vh',
  },
  'a, button': {
    textDecoration: 'none',
    color: 'CurrentColor',
    cursor: 'pointer',
    border: 'none',
    fontFamily: '$poppins',
  },
  input: {
    fontFamily: '$poppins',
  },
  '::-webkit-scrollbar': {
    width: '6px',
  },
  '::-webkit-scrollbar-track': {
    background: '$neutral',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$blue',
    borderRadius: '10px',
  },
})
