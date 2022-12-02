import { css, keyframes, styled } from '@/stitches-styled'

export const Container = styled('section', {
  minHeight: '73.6rem',
  /* minHeight: '100vh', */
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
})

export const GameContent = styled('div', {
  opacity: 0,
  transition: 'opacity ease .3s',
  left: 0,
  top: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  variants: {
    active: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
  },
})

export const Bg = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  background:
    'radial-gradient(72.28% 72.28% at 52.36% 25.95%, rgba(2, 2, 3, 0) 0%, #020203 71.1%)',
  backgroundImage: '$$bg',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  scale: 1.02,
  '&::after': {
    background:
      'radial-gradient(72.28% 72.28% at 52.36% 25.95%, rgba(2, 2, 3, 0) 0%, #020203 71.1%)',
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    opacity: 0.5,
  },
})

const timer = keyframes({
  '0%': {
    width: 0,
  },
  '100%': {
    width: '100%',
  },
})

export const ProgressBar = styled('div', {
  position: 'absolute',
  bottom: 0,
  height: '0.4rem',
  width: 0,
  animation: `${timer} 5s ease-in-out`,
  background: '$blue',
})

export const GameContainers = styled('div', {
  marginLeft: '52rem',
  paddingTop: '20.7rem',
  position: 'relative',
  display: 'flex',
  '@xl': {
    marginLeft: '32rem',
  },
  '@md': {
    marginLeft: '5.8rem',
    paddingTop: '19rem',
  },
  '@sm': {
    marginLeft: '2.2rem',
    paddingTop: '13.1rem',
  },
})

export const LeftSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  h1: {
    fontSize: '6.4rem',
    maxWidth: '62.9rem',
    lineHeight: '7.3rem',
    fontWeight: 700,
  },
  p: {
    fontSize: '1.8rem',
    marginTop: '1.6rem',
    fontWeight: 400,
    marginBottom: '3.2rem',
  },
})
