import * as Dialog from '@radix-ui/react-dialog'
import {
  Overlay,
  Content,
  Close,
  Form,
  InputWrapper,
  IconButton,
  ConnectionTypes,
  LoginTypes,
} from './style'
import Image from 'next/image'
import UserIcon from '@/assets/icons/user.svg'
import CloseIcon from '@/assets/icons/close.svg'
import Battlenet from '@/assets/icons/battlenet.svg'
import { Button } from '@/components/Button'
import { ButtonStyle } from '../Button/style'

export function LoginModal() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            className={ButtonStyle({
              withIcon: true,
            })}
          >
            <Image src={UserIcon} alt="Criar conta" width={19} height={19} />
            Logar
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Overlay>
            <Content>
              <header>
                <Image src={Battlenet} alt="Battlenet" />
              </header>
              <Form>
                <InputWrapper>
                  <input type="text" placeholder="E-mail ou telefone" />
                  <input type="password" placeholder="Senha" />
                </InputWrapper>
                <Button fullWidth>Conectar-se</Button>
              </Form>
              <ConnectionTypes>
                <p className="connect-with">ou conecte-se com</p>
                <LoginTypes>
                  <IconButton>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                        fill="currentColor"
                      />
                      <path
                        d="M1.15302 5.3455L4.43852 7.755C5.32752 5.554 7.48052 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C6.15902 0 2.82802 2.1685 1.15302 5.3455Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.99997 19.9999C12.583 19.9999 14.93 19.0114 16.7045 17.4039L13.6095 14.7849C12.5717 15.574 11.3037 16.0009 9.99997 15.9999C7.39897 15.9999 5.19047 14.3414 4.35847 12.0269L1.09747 14.5394C2.75247 17.7779 6.11347 19.9999 9.99997 19.9999Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                        fill="currentColor"
                      />
                    </svg>
                  </IconButton>
                  <IconButton>
                    <svg
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4523 11.6262C15.4417 9.82294 16.2587 8.46385 17.9087 7.46173C16.9859 6.13967 15.5898 5.41253 13.7495 5.27239C12.007 5.1349 10.1006 6.28774 9.40252 6.28774C8.66481 6.28774 6.97785 5.31999 5.6505 5.31999C2.91119 5.36229 0 7.50403 0 11.8616C0 13.1492 0.235327 14.4792 0.705982 15.8489C1.33528 17.6522 3.60395 22.0705 5.97044 21.9991C7.20789 21.9701 8.0831 21.1213 9.69337 21.1213C11.2561 21.1213 12.0652 21.9991 13.4454 21.9991C15.833 21.9648 17.8849 17.9483 18.4825 16.1398C15.2804 14.63 15.4523 11.7188 15.4523 11.6262ZM12.6733 3.56164C14.0139 1.96988 13.8922 0.520893 13.8526 0C12.668 0.0687473 11.2984 0.806459 10.5183 1.71339C9.659 2.68643 9.15397 3.88951 9.26238 5.24595C10.5421 5.34378 11.7108 4.68539 12.6733 3.56164Z"
                        fill="currentColor"
                      />
                    </svg>
                  </IconButton>
                  <IconButton>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3.30435C20 2.43478 19.6667 1.66667 19 1C18.3333 0.333333 17.5652 0 16.6957 0H3.30435C2.43478 0 1.66667 0.333333 1 1C0.333333 1.66667 0 2.43478 0 3.30435V16.6957C0 17.5652 0.333333 18.3333 1 19C1.66667 19.6667 2.43478 20 3.30435 20H10V12.4348H7.56522V9.13043H10V7.82609C10 6.69565 10.3696 5.7029 11.1087 4.84783C11.8478 3.99275 12.7246 3.56522 13.7391 3.56522H16.4348V6.86957H13.7391C13.5942 6.86957 13.4565 6.95652 13.3261 7.13043C13.1957 7.30435 13.1304 7.52174 13.1304 7.78261V9.13043H16.4348V12.4348H13.1304V20H16.6957C17.5652 20 18.3333 19.6667 19 19C19.6667 18.3333 20 17.5652 20 16.6957V3.30435Z"
                        fill="currentColor"
                      />
                    </svg>
                  </IconButton>
                </LoginTypes>
                <p>
                  <a href="#">Crie uma conta</a> Battle.net de graça
                </p>
                <a href="#">Não consegue logar? </a>
              </ConnectionTypes>
              <Close>
                <Image src={CloseIcon} alt="Fechar modal de login" />
              </Close>
            </Content>
          </Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
