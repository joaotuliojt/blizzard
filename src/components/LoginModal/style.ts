import { styled } from '@/stitches-styled'
import BgLogin from '@/assets/images/login_bg.png'
import Maks from '@/assets/images/mask.png'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  background: 'rgba(0, 0 ,0 , 0.5)',
  zIndex: 20,
})

export const Content = styled(Dialog.Content, {
  width: '69.6rem',
  height: '60rem',
  backgroundColor: '#020203',
  backgroundImage: `url('${Maks.src}')`,
  backgroundSize: 'cover',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '0.4rem',
  paddingTop: '6.1rem',
  textAlign: 'center',
  /* "&::before": {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    content: "''",
    display: "block",
    background: "radial-gradient(83.62% 82.42% at 0% 17.58%, #C4C4C4 0%, rgba(196, 196, 196, 0) 100%)",
  } */
})

export const Mask = styled('div', {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  background: `url('${BgLogin.src}')`,
  '&::before': {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    content: "''",
    display: 'block',
    background:
      'radial-gradient(83.62% 82.42% at 0% 17.58%, #C4C4C4 0%, rgba(196, 196, 196, 0) 100%)',
  },
})

export const Close = styled(Dialog.Close, {
  background: 'none',
  position: 'absolute',
  top: '3.2rem',
  right: '3.2rem',
  transition: 'ease all 0.3s',
  '&:hover': {
    filter: 'brightness(0.7)',
  },
})

export const Form = styled('form', {
  position: 'relative',
  width: '100%',
  maxWidth: '42.6rem',

  '.container': {
    width: '100%',
  },
})

export const InputWrapper = styled('div', {
  marginTop: '4rem',
  input: {
    background: '$white',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '4.8rem',
    padding: '1.2rem 1.6rem',
    borderRadius: '0.4rem',
    color: '$black',
    outline: 'none',
    border: 'none',
  },
  'input + input': {
    marginTop: '1.6rem',
    marginBottom: '2.4rem',
  },
  '.connect': {
    width: '100%',
  },
})

export const IconButton = styled('button', {
  borderRadius: '0.4rem',
  display: 'grid',
  placeItems: 'center',
  width: '4.8rem',
  height: '4.8rem',
  background: '$white',
  color: '#020203',
  transition: 'all ease 0.2s',
  '&:hover': {
    background: '$blue',
    color: '$white',
  },
})

export const ConnectionTypes = styled('div', {
  marginTop: '4.1rem',
  fontSize: '1.6rem',
  fontWeight: 500,
  '.connect-with': {
    fontSize: '1.4rem',
    marginBottom: '1.6rem',
  },
  a: {
    color: '$blue',
    textDecoration: 'underline',
  },
  '& > a:last-child': {
    marginTop: '1.6rem',
    display: 'block',
  },
})

export const LoginTypes = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
  marginBottom: '3.5rem',
})
