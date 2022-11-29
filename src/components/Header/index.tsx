import * as Styled from './styles'

import BlizzardLogo from '@/assets/icons/logo.svg'
import UserIcon from '@/assets/icons/user.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '../Nav'
import { Button } from '../Button'
import { Menu } from '../Menu'
import { useState } from 'react'

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState<'games' | 'sport' | null>(
    null
  )

  return (
    <>
      <Styled.Container>
        <Styled.ContentContainer>
          <Styled.NavContainer>
            <Styled.Logo>
              <Link href="/">
                <Image src={BlizzardLogo} alt="Blizzard" />
              </Link>
            </Styled.Logo>
            <Nav
              handleExpandMenu={setIsExpanded}
              handleSelectMenu={setSelectedMenu}
              selectedMenu={selectedMenu}
              menuExpanded={isExpanded}
            />
          </Styled.NavContainer>
          <Styled.ButtonsWrap>
            <Button variant="outlined">Criar Conta</Button>
            <Button
              leftIcon={
                <Image
                  src={UserIcon}
                  alt="Criar conta"
                  width={19}
                  height={19}
                />
              }
            >
              Logar
            </Button>
            <Styled.MenuHamburguer aria-label="Abrir menu">
              <div className="menu-hamburguer"></div>
            </Styled.MenuHamburguer>
          </Styled.ButtonsWrap>
        </Styled.ContentContainer>
      </Styled.Container>
      <Menu show={isExpanded} selectedMenu={selectedMenu} />
    </>
  )
}
