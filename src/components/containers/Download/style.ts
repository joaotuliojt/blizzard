import { styled, keyframes } from '@/stitches-styled'
import Background from '@/assets/images/background-section-download.png'

export const Container = styled('section', {
  marginTop: '10rem',
  background: `url(${Background.src}) no-repeat center`,
  backgroundSize: 'cover',
  position: 'relative',
  paddingBottom: '8rem',
  height: '85rem',
  overflow: 'hidden',
  '@media(max-width: 1530px)': {
    paddingLeft: '11.2rem',
  },
  '@md': {
    paddingLeft: '2.4rem',
  },
  '.sub-container': {
    position: 'relative',
    width: '100%',
    maxWidth: '133rem',
    margin: '0 auto',
  },
})

export const LeftSide = styled('div', {
  width: '100%',
  maxWidth: '30rem',
  paddingTop: '13.2rem',
  h2: {
    margin: '3.2rem 0',
    fontSize: '3.2rem',
  },
  '.infos': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',
    marginBottom: '4rem',
  },
  '.info': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1.8rem',
    color: '$gray-3',
  },
  '.mobile': {
    marginTop: '4.7rem',
    maxWidth: '23.9rem',
    fontSize: '1.4rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.8rem',
    a: {
      textDecoration: 'underline',
    },
  },
  '@md': {
    marginBottom: '4rem',
    paddingTop: '6.3rem',
  },
})

const translateAnimation = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-20px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
})

export const RightSide = styled('div', {
  position: 'absolute',
  top: '9.9rem',
  right: '-27.5rem',
  width: '100%',
  maxWidth: '106.6rem',
  height: '61rem',
  img: {
    maxWidth: '100%',
    display: 'block',
  },
  '.img1': {
    maxWidth: '1053.33px',
    maxHeight: '593.96px',
    animation: `${translateAnimation} ease-in-out 5s infinite`,
  },
  '.img2': {
    maxWidth: '647.21px',
    maxHeight: '335.75px',
    position: 'absolute',
    right: '5.4rem',
    bottom: '-3rem',
    animation: `${translateAnimation} ease-in-out 3s infinite`,
  },
  '@md': {
    position: 'relative',
    top: 0,
    right: 0,
    height: '27rem',
    '.img2': {
      right: 0,
      bottom: '-5rem',
      maxWidth: '27.6rem',
      maxHeight: '100%',
      objectFit: 'contain',
    },
    '.img1': {
      right: 0,
      bottom: '0',
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },
  },
})
