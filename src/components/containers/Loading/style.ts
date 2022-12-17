import { styled, keyframes } from '@/stitches-styled'
import Background from '@/assets/images/background-section-download.png'

export const LogoAnimation = keyframes({
  '0%': {
    strokeWidth: 0,
    strokeDasharray: '1 100',
    fill: 'transparent',
  },
  '25%': {
    strokeWidth: 0.3,
    strokeDasharray: '100 0',
    fill: 'transparent',
  },
  '100%': {
    strokeWidth: '0',
    fill: 'white',
  },
})

export const ContainerAnimation = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(-100%)',
  },
})

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
  position: 'fixed',
  background: `url(${Background.src}) no-repeat center`,
  backgroundSize: 'cover',
  top: 0,
  left: 0,
  backgroundColor: '$black',
  zIndex: 100000,
  animation: `${ContainerAnimation} 1s ease 7s forwards`,
  svg: {
    maxWidth: '300px',
  },
  '.logo-blizzard': {
    animation: `${LogoAnimation} 8s ease`,
  },
})
