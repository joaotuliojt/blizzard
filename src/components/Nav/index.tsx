import { Container } from './style'
import { forwardRef, Fragment, useMemo } from 'react'
import Link from 'next/link'
import React from 'react'

interface ILinks {
  label: string
  href?: string
  alt?: string
  isDropdown: boolean
  id?: string
}

interface NavProps {
  handleExpandMenu: (expanded: boolean) => void
  handleSelectMenu: (type: 'games' | 'sport' | null) => void
  selectedMenu: 'games' | 'sport' | null
  menuExpanded: boolean
}

const Nav = forwardRef<null, NavProps>(
  ({ handleExpandMenu, handleSelectMenu, menuExpanded, selectedMenu }, ref) => {
    const Links: ILinks[] = useMemo(
      () => [
        {
          label: 'Jogos',
          isDropdown: true,
          id: 'games',
        },
        {
          label: 'Esportes',
          isDropdown: true,
          id: 'sport',
        },
        {
          label: 'Loja',
          isDropdown: false,
          href: '/',
        },
        {
          label: 'Notícias',
          isDropdown: false,
          href: '/',
        },
        {
          label: 'Suporte',
          isDropdown: false,
          href: '/',
        },
      ],
      []
    )

    return (
      <Container ref={ref}>
        {Links.map((link) => (
          <Fragment key={link.label}>
            {link.isDropdown ? (
              <button
                className={selectedMenu === link.id ? 'active' : ''}
                onClick={() => {
                  if (selectedMenu === link.id && menuExpanded) {
                    handleExpandMenu(false)
                  } else if (!menuExpanded && selectedMenu !== link.id) {
                    handleExpandMenu(true)
                  }
                  handleSelectMenu(
                    link.id === selectedMenu
                      ? null
                      : (link.id as NavProps['selectedMenu'])
                  )
                }}
              >
                <p>{link.label}</p>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            ) : (
              <Link href={link.href as string}>{link.label}</Link>
            )}
          </Fragment>
        ))}
      </Container>
    )
  }
)

Nav.displayName = 'Nav'
export { Nav }
