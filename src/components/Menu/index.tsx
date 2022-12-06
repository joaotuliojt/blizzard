import * as Styled from './styles'

import arcade from '@/assets/game_icons/arcade.png'
import diablo_3 from '@/assets/game_icons/diablo_3.png'
import diablo_immortal from '@/assets/game_icons/diablo_immortal.png'
import diablo_iv from '@/assets/game_icons/diablo_iv.png'
import hearthstone from '@/assets/game_icons/hearthstone.png'
import heroes from '@/assets/game_icons/heroes_of_the_storm.png'
import warcraft from '@/assets/game_icons/warcraft.png'
import overwatch_2 from '@/assets/game_icons/overwatch_2.png'
import starcraft_2 from '@/assets/game_icons/starcraft_2.png'
import starcraft from '@/assets/game_icons/starcraft.png'
import wow from '@/assets/game_icons/wow.png'

import hearthstoneMasters from '@/assets/game_logos/hearthstone_masters.png'
import wowChampionship from '@/assets/game_logos/wow_championship.png'
import starcraftWcs from '@/assets/game_logos/star_craft.png'
import overwatchWorld from '@/assets/game_logos/overwatch_world.png'
import overwatchLeague from '@/assets/game_logos/overwatch_league.png'

import cubes from '@/assets/icons/cubes.svg'
import iconLogo from '@/assets/icons/icon-logo.svg'
import iconDownload from '@/assets/icons/icon-downloads.svg'
import iconChat from '@/assets/icons/icon-chat.svg'
import trophy from '@/assets/icons/trophy.svg'

import { Fragment, ReactElement, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IGames {
  image: ReactElement
  href: string
  name: string
}

interface MenuProps {
  show: boolean
  selectedMenu: 'games' | 'sport' | null
}

export function Menu({ show, selectedMenu }: MenuProps) {
  const games = useMemo<IGames[]>(
    () => [
      {
        image: <Image src={diablo_3} alt="" />,
        href: '#',
        name: 'Diablo® II ressurected',
      },
      {
        image: <Image src={overwatch_2} alt="" />,
        href: '#',
        name: 'Overwatch® 2',
      },
      {
        image: <Image src={wow} alt="" />,
        href: '#',
        name: 'World of Warcraft®',
      },
      {
        image: <Image src={hearthstone} alt="" />,
        href: '#',
        name: 'Hearthstone®',
      },
      {
        image: <Image src={heroes} alt="" />,
        href: '#',
        name: 'Heroes of the storm®',
      },
      {
        image: <Image src={warcraft} alt="" />,
        href: '#',
        name: 'Warcraft® III Reforged',
      },
      {
        image: <Image src={diablo_iv} alt="" />,
        href: '#',
        name: 'Diablo® IV',
      },
      {
        image: <Image src={diablo_immortal} alt="" />,
        href: '#',
        name: 'Diablo® Immortal',
      },
      {
        image: <Image src={diablo_3} alt="" />,
        href: '#',
        name: 'Diablo® III',
      },
      {
        image: <Image src={starcraft_2} alt="" />,
        href: '#',
        name: 'StarCraft® II',
      },
      {
        image: <Image src={starcraft} alt="" />,
        href: '#',
        name: 'StarCraft® Remastered',
      },
      {
        image: <Image src={arcade} alt="" />,
        href: '#',
        name: 'Arcade da Blizzard®',
      },
    ],
    []
  )

  const sports = useMemo<IGames[]>(
    () => [
      {
        name: 'Hearthstone® masters',
        href: '#',
        image: <Image src={hearthstoneMasters} alt="" />,
      },
      {
        name: 'Campeonato Mundial de Arena WoW®',
        href: '#',
        image: <Image src={wowChampionship} alt="" />,
      },
      {
        name: 'StarCraft® II WCS',
        href: '#',
        image: <Image src={starcraftWcs} alt="" />,
      },
      {
        name: 'Copa Mundial de Overwatch®',
        href: '#',
        image: <Image src={overwatchWorld} alt="" />,
      },
      {
        name: 'Liga de Overwatch®',
        href: '#',
        image: <Image src={overwatchLeague} alt="" />,
      },
    ],
    []
  )

  return (
    <>
      <Styled.Container show={show} selected={selectedMenu || 'null'}>
        <Styled.GamesContainer selected={selectedMenu || 'games'}>
          {selectedMenu === 'games' && (
            <>
              {games.map((game) => (
                <Fragment key={game.name}>
                  <Styled.Game>
                    {game.image}
                    <p>{game.name}</p>
                  </Styled.Game>
                </Fragment>
              ))}
            </>
          )}
          {selectedMenu === 'sport' && (
            <>
              {sports.map((game) => (
                <span key={game.name}>
                  <Styled.Game>
                    {game.image}
                    <p>{game.name}</p>
                  </Styled.Game>
                </span>
              ))}
            </>
          )}
        </Styled.GamesContainer>
        <Styled.Footer>
          {selectedMenu === 'games' && (
            <>
              <Link href={'#'}>
                <Image src={cubes} alt="" /> Ver todos jogos
              </Link>
              <Link href={'#'}>
                <Image src={iconLogo} alt="" /> Aplicativo Battle.net
              </Link>
              <Link href={'#'}>
                <Image src={iconDownload} alt="" /> Downloads
              </Link>
              <Link href={'#'}>
                <Image src={iconChat} alt="" /> Fóruns dos jogos
              </Link>
            </>
          )}
          {selectedMenu === 'sport' && (
            <Link href={'#'}>
              <Image src={trophy} alt="" /> Torneios da comunidade
            </Link>
          )}
        </Styled.Footer>
      </Styled.Container>
    </>
  )
}
