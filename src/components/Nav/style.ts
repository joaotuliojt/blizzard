import { styled } from '@/stitches-styled'

export const Container = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '3.4rem',
  color: '$white',
  fontSize: '1.4rem',
  fontWeight: '500',
  p: {
    fontWeight: '500',
  },
  svg: {
    transition: 'transform ease 0.3s',
  },
  button: {
    fontSize: '1.4rem',
    fontWeight: '500',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '1.4rem',
    '&.active': {
      color: '$blue',
      svg: {
        transform: 'rotate(180deg)',
      },
    },
  },
  'button , a': {
    transition: 'all 0.6s ease',
  },
  'button:hover, a:hover': {
    filter: 'brightness(0.6)',
  },
  '@lg': {
    display: 'none',
  },
})
