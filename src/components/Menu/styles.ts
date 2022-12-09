import { styled } from '@/stitches-styled'

export const Container = styled('div', {
  width: '100%',
  height: '0px',
  position: 'absolute',
  top: 0,
  overflow: 'hidden',
  background: '$gradient-2',
  transition: 'all 0.4s ease',
  backdropFilter: 'blur(6px)',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 5,
  '@media(max-width:1260px)': {
    display: 'none',
  },
  variants: {
    show: {
      false: {
        height: '0rem',
      },
    },
    selected: {
      games: {
        height: '64rem',
      },
      sport: {
        height: '52rem',
      },
      null: {
        height: 0,
      },
    },
  },
})

export const GamesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '10.3rem',
  margin: '16.8rem auto 0 auto',
  maxWidth: '131.4rem',
  width: '100%',
  '@xl': {
    maxWidth: 'none',
    padding: '0 11.2rem',
  },
  variants: {
    selected: {
      games: {},
      sport: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
    },
  },
})

export const Game = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.86rem',
  color: '$gray-4',
  fontSize: '1.4rem',
  fontWeight: 500,
  alignItems: 'center',
  p: {
    textAlign: 'center',
  },
  img: {
    transition: 'all ease 0.4s',
  },
  '&:hover img': {
    transform: 'translateY(-4px)',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '6.7rem',
  position: 'absolute',
  bottom: 0,
  paddingTop: '2.4rem',
  paddingBottom: '2.2rem',
  height: '7rem',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    opacity: 0.7,
    background: '$neutral',
    zIndex: -1,
  },
  a: {
    fontSize: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontWeight: 600,
    lineHeight: '2.4rem',
  },
})
