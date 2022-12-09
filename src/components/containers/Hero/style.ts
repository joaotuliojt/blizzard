import { css, keyframes, styled } from '@/stitches-styled'

export const Container = styled('section', {
  minHeight: '73.6rem',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
  '@sm': {
    minHeight: '62.5rem',
  },
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
  backgroundPosition: 'top 70% 50%',
  scale: 1.04,
  '@lg': {
    backgroundPosition: 'center',
  },
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
  justifyContent: 'space-between',
  maxWidth: '108.2rem',
  '@xl': {
    marginLeft: '32rem',
    gap: '0',
    justifyContent: 'space-between',
    paddingRight: '11.2rem',
  },
  '@media(max-width: 1300px)': {
    marginLeft: '26rem',
  },
  '@md': {
    marginLeft: '2.2rem',
    paddingTop: '19rem',
    gap: '0',
  },
  '@sm': {
    marginLeft: '2.2rem',
    paddingTop: '13.1rem',
    paddingRight: '1rem',
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
  '@md': {
    h1: {
      maxWidth: '50rem',
      fontSize: '5rem',
    },
  },
  '@media(max-width: 700px)': {
    h1: {
      fontSize: '4rem',
      lineHeight: '110%',
    },
    maxWidth: '56.2rem',
  },
})

export const RightSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  right: '30.4rem',
  height: '100%',
  top: '17.3rem',
  paddingBottom: '10rem',
  marginTop: '-4rem',
  '.logo': {
    height: '18rem',
    maxWidth: '28rem',
    marginTop: '-3rem',
    '@media(max-width: 700px)': {
      display: 'none',
    },
  },
  '@lg': {
    paddingBottom: '8.6rem',
  },
  '@md': {
    padding: 0,
    position: 'absolute',
    right: '4.7rem',
    marginTop: '-2rem',
    height: '100%',
  },
})

export const GameTrailerWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  p: {
    fontSize: '1.3rem',
    textAlign: 'right',
    marginTop: '11.2rem',
    marginBottom: '1.6rem',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  '@media(max-width: 700px)': {
    display: 'none',
  },
  '@md': {
    p: {
      display: 'none',
    },
  },
})

export const GameTrailer = styled('div', {
  width: '28rem',
  height: '15.8rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  button: {
    width: '5.1rem',
    height: '5.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    backdropFilter: 'blur(1.5px)',
    background:
      'linear-gradient(136.72deg, rgba(7, 7, 10, 0.86) 19.22%, rgba(15, 16, 22, 0.5) 76.59%)',
    zIndex: 1,
  },
  '.gif, .thumbnail': {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  '.thumbnail': {
    zIndex: 1,
  },
  '.gif': {
    zIndex: 1,
    opacity: 0,
    transition: 'all ease .3s',
  },
  '&:hover .gif': {
    opacity: 1,
  },
})
