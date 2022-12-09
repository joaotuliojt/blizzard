import { styled } from '@/stitches-styled'

export const Container = styled('section', {
  width: '100%',
  maxWidth: '130rem',
  margin: '0 auto',
  marginTop: '8.5rem',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  '.left': {
    display: 'flex',
    gap: '17rem',
    h2: {
      fontWeight: 700,
      fontSize: '3.2rem',
      maxWidth: '17.5rem',
    },
    p: {
      fontSize: '1.5rem',
      color: '$gray-2',
      fontWeight: '600',
      marginTop: '1.1rem',
    },
  },
  '.right': {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: '16rem',
  },
  '.platform': {
    display: 'flex',
    alignItems: 'center',
    gap: '2.4rem',
  },
  button: {
    background: 'none',
    opacity: '0.5',
    transition: 'all ease 0.3s',
    '&:hover': {
      opacity: 1,
    },
    '&.active': {
      opacity: 1,
    },
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '1.6rem',
    color: '$blue',
    gap: '1rem',
    transition: 'all ease 0.3s',
    '&:hover': {
      filter: 'brightness(1.1)',
    },
  },
  '@xl': {
    padding: '0 11.2rem',
  },
  '@media(max-width: 1160px)': {
    '.right': {
      marginLeft: '9.8rem',
    },
    '.games-label': {
      display: 'none',
    },
  },
  '@media(max-width: 900px)': {
    padding: '0 5rem',
  },
  '@media(max-width: 740px)': {
    padding: '0 2.4rem',
    '.platform': {
      display: 'none',
    },
    '.left h2': {
      fontSize: '2.8rem',
    },
    '.right': {
      margin: 0,
      flex: 1,
      justifyContent: 'flex-end',
    },
    justifyContent: 'space-between',
  },
})

export const GamesList = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '5rem 3.2rem',
  marginTop: '9rem',
  '@xl': {
    padding: '0 11.2rem',
  },
  '@media(max-width: 1200px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@media(max-width: 900px)': {
    padding: '0 5rem',
    gap: '1.6rem',
  },
  '@media(max-width: 680px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media(max-width: 600px)': {
    padding: '0 2rem',
  },
})

export const GameCard = styled('div', {
  cursor: 'pointer',
  '.game-image-container': {
    position: 'relative',
    height: '40rem',
    overflow: 'hidden',
    borderRadius: '.3rem',
  },
  '.game-logo': {
    maxWidth: '16rem',
    height: '10.5rem',
    position: 'absolute',
    bottom: '5rem',
    left: '50%',
    transform: 'translate(-50%)',
  },
  '.game-image': {
    zIndex: -1,
    transition: 'all ease 0.4s',
  },
  '.overlay': {
    background:
      'linear-gradient(182.71deg, #020203 2.26%, rgba(2, 2, 3, 0) 73.74%)',
    content: "''",
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 5,
    opacity: 0.4,
  },
  '&:hover .game-image': {
    scale: '1.07',
  },
  '.game-name': {
    color: '$gray-1',
    fontSize: '1.935rem',
    marginTop: '2rem',
    fontWeight: 600,
  },
  '.game-category': {
    fontWeight: 400,
    fontSize: '1.5rem',
    marginTop: '.4rem',
    opacity: '0.8',
  },
  '@media(max-width: 900px)': {
    '.game-logo': {
      maxWidth: '10rem',
      height: '7.1rem',
      bottom: '3rem',
    },
  },

  '@media(max-width: 845px)': {
    '.game-image-container': {
      height: '27rem',
    },
  },
  '@media(max-width: 670px)': {
    '.game-image-container': {
      height: '21rem',
    },
    p: {
      display: 'none',
    },
  },
})

export const CardSeeMore = styled('div', {
  border: '1px solid #212428',
  borderRadius: '.3rem',
  display: 'grid',
  placeItems: 'center',
  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.4rem',
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.3rem',
  },
  maxHeight: '40rem',
  '@media(max-width: 845px)': {
    maxHeight: '27rem',
  },
})
