import { css } from '@/stitches-styled'

export const ButtonStyle = css({
  fontWeight: 500,
  fontSize: '1.4rem',
  color: '$white',
  padding: '0 1.6rem',
  background: 'none',
  border: 'none',
  borderRadius: '0.3rem',
  minWidth: '11.5rem',
  height: '5.2rem',
  transition: 'all 0.6s ease',
  '&:hover': {
    filter: 'brightness(1.2)',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue',
      },
      outlined: {
        border: '0.07rem solid',
        borderColor: '$white',
        position: 'relative',
        '&::after': {
          content: "''",
          width: '100%',
          height: '0',
          background: '$white',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: -1,
          transition: 'all ease 0.4s',
        },
        '&:hover': {
          color: '$black',
        },
        '&:hover::after': {
          height: '100%',
        },
      },
    },
    withIcon: {
      true: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.7rem',
      },
    },
    alignment: {
      left: {
        justifyContent: 'flex-start',
        minWidth: '0',
        width: 'fit-content',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
