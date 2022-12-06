import { styled } from '@/stitches-styled'

export const Container = styled('header', {
  height: '9.6rem',
  borderBottom: '0.2rem solid',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10,
})

export const ContentContainer = styled('div', {
  margin: '0 auto',
  width: '100%',
  height: '9.6rem',
  maxWidth: '131.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@xl': {
    maxWidth: 'none',
    padding: '0 11.2rem',
  },
  '@md': {
    padding: '0 5rem',
  },
  '@sm': {
    padding: '0 3rem',
  },
})

export const NavContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '11.2rem',
})

export const Logo = styled('div', {
  position: 'relative',
  '&::before': {
    content: `''`,
    display: 'block',
    position: 'absolute',
    width: '4.3rem',
    height: '0.2rem',
    backgroundColor: '$blue',
    bottom: -26,
    transition: 'all 1s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
  '@xl': {
    img: {
      width: '8.6rem',
    },
  },
  '@sm': {
    img: {
      width: '7.4rem',
    },
  },
})

export const ButtonsWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  '@media (max-width: 680px)': {
    '& > button:not(:nth-child(3))': {
      display: 'none',
    },
  },
})

export const MenuHamburguer = styled('button', {
  background: 'none',
  border: 'none',
  width: '2.8rem',
  height: '2.8rem',
  position: 'relative',
  display: 'none',
  marginLeft: '9rem',
  '.menu-hamburguer': {
    width: '100%',
    height: '0.18rem',
    backgroundColor: '$white',
  },
  '.menu-hamburguer::before, .menu-hamburguer::after': {
    content: "''",
    width: '100%',
    height: '0.18rem',
    backgroundColor: '$white',
    position: 'absolute',
    left: 0,
  },
  '.menu-hamburguer::before': {
    top: 6,
  },
  '.menu-hamburguer::after': {
    bottom: 6,
  },
  '@lg': {
    display: 'block',
  },
  '@media (max-width: 680px)': {
    margin: 0,
  },
})

export const Overlay = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100vh',
  zIndex: 4,
})
