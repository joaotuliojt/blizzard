import { styled } from '@/stitches-styled'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  position: 'absolute',
  left: '29.8rem',
  top: '24.1rem',
  zIndex: 3,
  '@xl': {
    left: '11.2rem',
  },
  '@md': {
    left: '2.2rem',
    bottom: '10.5rem',
    flexDirection: 'row',
    top: 'auto',
  },
  '@sm': {
    left: '2.2rem',
    bottom: '6.8rem',
  },
})

export const Game = styled('button', {
  width: '4.8rem',
  height: '4.8rem',
  background: 'none',
  outline: 'none',
  border: 'none',
  transition: 'all ease 0.3s',
  img: {
    maxWidth: '100%',
  },
  '@md': {
    width: '4rem',
    height: '4rem',
  },
  variants: {
    active: {
      true: {
        filter: 'grayscale(0)',
      },
      false: {
        filter: 'grayscale(1)',
      },
    },
  },
})
